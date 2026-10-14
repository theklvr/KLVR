import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  jsonLd?: object;
  robots?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo({
  title,
  description,
  canonical,
  image,
  jsonLd,
  robots = "index, follow",
}: SeoProps) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertCanonical(canonical);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "KLVR");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    if (image) {
      upsertMeta("property", "og:image", image);
      upsertMeta("name", "twitter:image", image);
    }
    upsertMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:site", "@theKlvr");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, canonical, image, jsonLd, robots]);

  return null;
}
