import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { config } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env") });

const SITE_URL = "https://www.theklvr.com";
const API_URL = "https://k2r-api.onrender.com";
const projectId = process.env.VITE_K2R_PROJECT_ID;
const apiKey = process.env.VITE_K2R_API_KEY;

let slugs = [];
if (projectId && apiKey) {
  const res = await fetch(`${API_URL}/v1/projects/${projectId}/content/post`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (res.ok) {
    const body = await res.json();
    const rows = Array.isArray(body) ? body : body.data;
    slugs = rows.map((p) => p.slug).filter(Boolean);
  } else {
    console.warn(`Could not fetch post slugs from K2R Studio (${res.status}) — sitemap will omit blog posts.`);
  }
} else {
  console.warn("VITE_K2R_PROJECT_ID/VITE_K2R_API_KEY not set — sitemap will omit blog posts.");
}

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
