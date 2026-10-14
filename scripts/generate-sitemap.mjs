import { writeFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.theklvr.com";

const seoModule = await import(
  pathToFileURL(resolve(__dirname, "../src/content/seo.ts")).href
);

const urls = seoModule.publicRoutes.map((route) => ({
  loc: route.path,
  changefreq: route.path === "/" ? "weekly" : "monthly",
  priority: route.path === "/" ? "1.0" : route.path === "/blog" ? "0.8" : "0.7",
}));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc === "/" ? "/" : u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${urls.length} URLs`);
