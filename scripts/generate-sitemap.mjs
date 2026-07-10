import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { DETAILED_BLOG_POSTS_DATA } from "../src/data.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.theklvr.com";

const urls = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/blog", changefreq: "weekly", priority: "0.8" },
  ...DETAILED_BLOG_POSTS_DATA.map((post) => ({
    loc: `/blog/${post.slug}`,
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
