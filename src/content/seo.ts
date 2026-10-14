import { blogPosts } from "./blog";
import { landingPages } from "./landingPages";

const SITE_URL = "https://www.theklvr.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  canonical: string;
  image: string;
  robots: string;
  jsonLd?: object;
}

export const homeSeo: RouteSeo = {
  path: "/",
  title: "KLVR | Creative, Technology, Marketing & Business Solutions",
  description:
    "KLVR builds digital products, brands and growth solutions. Explore software development, creative services, marketing, business advisory and partnerships.",
  canonical: `${SITE_URL}/`,
  image: DEFAULT_IMAGE,
  robots: "index, follow",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "KLVR",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/logo.svg`,
        image: DEFAULT_IMAGE,
        description:
          "KLVR is a creative, technology, marketing and business solutions company building products, delivering solutions and creating opportunities through strategic partnerships.",
        email: "klvrcorp@gmail.com",
        sameAs: ["https://x.com/theKlvr"],
        areaServed: ["Nigeria", "Worldwide"],
        knowsAbout: [
          "Creative technology",
          "Software development",
          "Website development",
          "Custom software development",
          "AI automation solutions",
          "Business process automation",
          "Brand identity design",
          "Digital product design",
          "Digital marketing",
          "Brand growth strategy",
          "Strategy, growth and advisory",
          "Web3 ecosystem growth",
          "Community development",
          "Strategic partnerships",
          "Business advisory",
          "Drone light show partnerships",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "KLVR",
        url: `${SITE_URL}/`,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "KLVR | Creative, Technology, Marketing & Business Solutions",
        description:
          "KLVR builds digital products, brands and growth solutions. Explore software development, creative services, marketing, business advisory and partnerships.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
        ],
      },
    ],
  },
};

export const blogIndexSeo: RouteSeo = {
  path: "/blog",
  title: "KLVR Insights | Creative, Technology & Growth Thinking",
  description:
    "Insights from KLVR on creative strategy, technology, marketing, business growth, products and strategic partnerships.",
  canonical: `${SITE_URL}/blog`,
  image: DEFAULT_IMAGE,
  robots: "index, follow",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog#webpage`,
    url: `${SITE_URL}/blog`,
    name: "KLVR Insights | Creative, Technology & Growth Thinking",
    description:
      "Insights from KLVR on creative strategy, technology, marketing, business growth, products and strategic partnerships.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  },
};

export const landingPageSeo: RouteSeo[] = landingPages.map((page) => ({
  path: page.slug,
  title: page.title,
  description: page.metaDescription,
  canonical: `${SITE_URL}${page.slug}`,
  image: DEFAULT_IMAGE,
  robots: "index, follow",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${page.slug}#webpage`,
        url: `${SITE_URL}${page.slug}`,
        name: page.title,
        description: page.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${page.slug}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          ...(page.slug.startsWith("/solutions/")
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Solutions",
                  item: `${SITE_URL}/solutions/technology`,
                },
              ]
            : []),
          {
            "@type": "ListItem",
            position: page.slug.startsWith("/solutions/") ? 3 : 2,
            name: page.h1,
            item: `${SITE_URL}${page.slug}`,
          },
        ],
      },
      {
        "@type": page.slug === "/products" ? "CollectionPage" : "Service",
        "@id": `${SITE_URL}${page.slug}#primary`,
        name: page.h1,
        description: page.intro,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["Nigeria", "Worldwide"],
        serviceType: page.eyebrow,
      },
    ],
  },
}));

export const blogPostSeo: RouteSeo[] = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  title: `${post.title} | KLVR Insights`,
  description: post.description,
  canonical: `${SITE_URL}/blog/${post.slug}`,
  image: post.image,
  robots: "index, follow",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "KLVR", url: `${SITE_URL}/` },
    publisher: { "@type": "Organization", name: "KLVR", url: `${SITE_URL}/` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  },
}));

export const notFoundSeo: RouteSeo = {
  path: "/404",
  title: "Page Not Found | KLVR",
  description: "The page you requested could not be found on the KLVR website.",
  canonical: `${SITE_URL}/404`,
  image: DEFAULT_IMAGE,
  robots: "noindex, follow",
};

export const publicRoutes: RouteSeo[] = [
  homeSeo,
  ...landingPageSeo,
  blogIndexSeo,
  ...blogPostSeo,
];

export function getRouteSeo(path: string): RouteSeo {
  return (
    publicRoutes.find((route) => route.path === path) ??
    (path === "/404" ? notFoundSeo : { ...notFoundSeo, path })
  );
}
