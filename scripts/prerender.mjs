import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");
const ssrDir = resolve(__dirname, "../dist-ssr");
const template = readFileSync(resolve(distDir, "index.html"), "utf8");
const serverEntry = await import(
  pathToFileURL(resolve(ssrDir, "entry-server.js")).href
);

const routes = [...serverEntry.publicRoutes, {
  path: "/404",
  title: "Page Not Found | KLVR",
  description: "The page you requested could not be found on the KLVR website.",
  canonical: "https://www.theklvr.com/404",
  image: "https://www.theklvr.com/og-image.png",
  robots: "noindex, follow",
}];

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function metaTags(route) {
  const jsonLd = route.jsonLd
    ? `\n    <script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>`
    : "";
  return `    <title>${route.title}</title>
    <meta name="description" content="${escapeAttr(route.description)}" />
    <meta name="robots" content="${escapeAttr(route.robots)}" />
    <link rel="canonical" href="${escapeAttr(route.canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeAttr(route.canonical)}" />
    <meta property="og:site_name" content="KLVR" />
    <meta property="og:title" content="${escapeAttr(route.title)}" />
    <meta property="og:description" content="${escapeAttr(route.description)}" />
    <meta property="og:image" content="${escapeAttr(route.image)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@theKlvr" />
    <meta name="twitter:title" content="${escapeAttr(route.title)}" />
    <meta name="twitter:description" content="${escapeAttr(route.description)}" />
    <meta name="twitter:image" content="${escapeAttr(route.image)}" />${jsonLd}`;
}

function replaceHead(html, route) {
  const withoutManagedHead = html
    .replace(/    <title>[\s\S]*?<\/title>\n?/g, "")
    .replace(/    <meta name="description"[\s\S]*?>\n?/g, "")
    .replace(/    <meta name="robots"[\s\S]*?>\n?/g, "")
    .replace(/    <link rel="canonical"[\s\S]*?>\n?/g, "")
    .replace(/    <meta property="og:[\s\S]*?>\n?/g, "")
    .replace(/    <meta name="twitter:[\s\S]*?>\n?/g, "")
    .replace(/    <script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, "");

  return withoutManagedHead.replace(
    /    <meta name="theme-color" content="#020504" \/>/,
    `${metaTags(route)}\n    <meta name="theme-color" content="#020504" />`,
  );
}

function outputPath(routePath) {
  if (routePath === "/") return resolve(distDir, "index.html");
  if (routePath === "/404") return resolve(distDir, "404.html");
  return resolve(distDir, routePath.slice(1), "index.html");
}

function extensionPath(routePath) {
  if (routePath === "/" || routePath === "/404") return null;
  return resolve(distDir, `${routePath.slice(1)}.html`);
}

for (const route of routes) {
  const appHtml = serverEntry.render(route.path);
  const html = replaceHead(template, route).replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
  const file = outputPath(route.path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  const cleanUrlFile = extensionPath(route.path);
  if (cleanUrlFile) {
    mkdirSync(dirname(cleanUrlFile), { recursive: true });
    writeFileSync(cleanUrlFile, html);
  }
  console.log(`prerendered ${route.path}`);
}
