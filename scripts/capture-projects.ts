import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import sharp from "sharp";
import { projects } from "../src/content/projects";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const outputDir = resolve(rootDir, "public/images/projects");
const viewport = { width: 1440, height: 900 };

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].filter(Boolean) as string[];

function findChromeExecutable() {
  return chromeCandidates.find((candidate) => existsSync(candidate));
}

async function main() {
  const executablePath = findChromeExecutable();

  if (!executablePath) {
    throw new Error(
      "No Chrome or Chromium executable found. Install Chrome, Chromium, or set CHROME_PATH.",
    );
  }

  await mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ["--disable-dev-shm-usage", "--hide-scrollbars"],
  });

  const results: { name: string; status: "captured" | "failed"; detail: string }[] = [];

  for (const project of projects) {
    const page = await browser.newPage({
      viewport,
      deviceScaleFactor: 1,
      colorScheme: "light",
      ignoreHTTPSErrors: true,
    });

    try {
      await page.goto(project.liveUrl, {
        waitUntil: "domcontentloaded",
        timeout: 45_000,
      });

      try {
        await page.waitForLoadState("networkidle", { timeout: 12_000 });
      } catch {
        // Some sites keep network connections open; a short settle period is enough.
      }

      await page.waitForTimeout(2_000);

      const png = await page.screenshot({
        fullPage: false,
        type: "png",
        animations: "disabled",
      });

      const outputPath = resolve(outputDir, `${project.slug}.webp`);
      await sharp(png)
        .resize({
          width: viewport.width,
          height: viewport.height,
          fit: "cover",
          position: "top",
        })
        .webp({ quality: 84, effort: 5 })
        .toFile(outputPath);

      results.push({
        name: project.name,
        status: "captured",
        detail: outputPath.replace(`${rootDir}/`, ""),
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      results.push({ name: project.name, status: "failed", detail: message });
    } finally {
      await page.close();
    }
  }

  await browser.close();

  for (const result of results) {
    const prefix = result.status === "captured" ? "captured" : "failed";
    console.log(`${prefix}: ${result.name} - ${result.detail}`);
  }

  if (results.some((result) => result.status === "failed")) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
