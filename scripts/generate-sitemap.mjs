import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.theklvr.com";

const sanity = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || "bqhauaf6",
  dataset: process.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2026-07-13",
  useCdn: false
});

const slugs = await sanity.fetch(`*[_type == "post"].slug.current`);

const urls = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/blog", changefreq: "weekly", priority: "0.8" },
  ...slugs.map((slug) => ({
    loc: `/blog/${slug}`,
    changefreq: "monthly",
    priority: "0.6"
  }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${urls.length} URLs`);
