export type ProjectRelationship =
  | "owned-product"
  | "client-project"
  | "collaboration";

export type Project = {
  id: string;
  slug: string;
  name: string;
  liveUrl: string;
  previewImage: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  overview: string[];
  services: string[];
  technologies?: string[];
  year?: number;
  industry?: string;
  relationshipToKLVR?: ProjectRelationship;
  seoTitle: string;
  seoDescription: string;
};

const SITE_URL = "https://www.theklvr.com";

export const projects: Project[] = [
  {
    id: "project-tys",
    slug: "tys-tell-your-story",
    name: "TYS: Tell Your Story",
    liveUrl: "https://tellyourstory.theklvr.com",
    previewImage: "/images/projects/tys.webp",
    category: "Drone experiences website",
    shortDescription:
      "TYS is KLVR's drone experiences service for events: light shows, butterfly drones and drone gift boxes, presented through a luxury, video-led website.",
    fullDescription:
      "TYS (Tell Your Story) is a KLVR service that creates drone experiences for weddings, birthdays, proposals, brand launches and public celebrations across Nigeria. KLVR built the brand and the multi-page website, from the dotted constellation logo to the booking flow.",
    overview: [
      "TYS was created around one idea: the best celebrations are remembered for a single moment, so the business sells the moment, not the technology. The brand uses a dotted constellation logo in which every dot is a drone, with one amber lead drone where the arms of the Y meet.",
      "The website is designed to feel like a luxury events brand rather than a tech company: serif headings with a script accent, full-bleed video on every page, an imagine-it-at-your-event section for each experience, an opt-in soundtrack and an enquiry form that saves bookings securely. It covers three experiences: drone light shows (flown with a licensed operating partner), butterfly drones and drone gift boxes.",
    ],
    services: [
      "Brand identity and logo",
      "Website design and development",
      "Copywriting and content",
      "Video editing and media optimisation",
      "Booking and enquiry system",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    year: 2026,
    industry: "Events and experiences",
    relationshipToKLVR: "owned-product",
    seoTitle: "TYS: Tell Your Story | Projects & Work | KLVR",
    seoDescription:
      "TYS is a KLVR service creating drone light shows, butterfly drones and drone gift boxes for events in Nigeria. See the brand, the website and the live site.",
  },
  {
    id: "project-blocly",
    slug: "blocly",
    name: "Blocly",
    liveUrl: "https://blocly.click",
    previewImage: "/images/projects/blocly.webp",
    category: "Marketing software",
    shortDescription:
      "Blocly is a KLVR product focused on helping teams create marketing funnels and campaign building blocks faster.",
    fullDescription:
      "Blocly is a KLVR-built digital product for assembling marketing funnels, launch assets and reusable campaign blocks with less friction.",
    overview: [
      "Blocly sits inside KLVR's own product ecosystem. It is designed around the recurring need to move from a campaign idea to a usable marketing flow without rebuilding the same structure each time.",
      "The project connects KLVR's technology, product strategy and marketing thinking. Public information supports describing Blocly as a KLVR product, while specific performance claims are intentionally omitted until they can be verified.",
    ],
    services: ["Product strategy", "Interface design", "Web application development"],
    technologies: ["Web application"],
    industry: "Marketing technology",
    relationshipToKLVR: "owned-product",
    seoTitle: "Blocly | Projects & Work | KLVR",
    seoDescription:
      "Explore Blocly, a KLVR product for marketing funnel and campaign block creation, with project context, services and live website access.",
  },
  {
    id: "project-questify",
    slug: "questify",
    name: "Questify",
    liveUrl: "https://questifyio.com",
    previewImage: "/images/projects/questify.webp",
    category: "Digital product",
    shortDescription:
      "Questify is a public digital product website included in KLVR's selected projects and work.",
    fullDescription:
      "Questify is a selected digital project presented as part of KLVR's broader products and work portfolio.",
    overview: [
      "Questify is included in this portfolio as a live digital product experience. The case-study page keeps the public explanation intentionally focused on what can be verified from the deployed website and KLVR's selected-work context.",
      "KLVR's role is presented as project work rather than company ownership. More specific product, client or technical details should be added only when they are confirmed.",
    ],
    services: ["Digital product support", "Website experience", "Project presentation"],
    industry: "Digital product",
    relationshipToKLVR: "client-project",
    seoTitle: "Questify | Projects & Work | KLVR",
    seoDescription:
      "Explore Questify in KLVR's projects and work portfolio, including project context, services and a link to the live website.",
  },
  {
    id: "project-lasemaroni",
    slug: "lasemaroni",
    name: "Lasemaroni",
    liveUrl: "https://lasemaroni.vercel.app/",
    previewImage: "/images/projects/lasemaroni.webp",
    category: "Brand website",
    shortDescription:
      "Lasemaroni is a public-facing brand website selected for KLVR's work portfolio.",
    fullDescription:
      "Lasemaroni is a brand-focused website experience included in KLVR's selected work.",
    overview: [
      "Lasemaroni is represented here as a brand website with an emphasis on digital presence and public presentation. The portfolio copy avoids unverified ownership, performance or client-result claims.",
      "The work fits KLVR's creative and technology practice: shaping a clear public web presence and presenting the project through a polished digital interface.",
    ],
    services: ["Website design", "Frontend development", "Digital presentation"],
    industry: "Brand and creative",
    relationshipToKLVR: "client-project",
    seoTitle: "Lasemaroni | Projects & Work | KLVR",
    seoDescription:
      "Explore Lasemaroni in KLVR's projects and work portfolio, with project overview, services and live website access.",
  },
  {
    id: "project-purifix-photography",
    slug: "purifix-photography",
    name: "Purifix Photography",
    liveUrl: "https://purifix-photography.vercel.app/",
    previewImage: "/images/projects/purifix-photography.webp",
    category: "Photography portfolio",
    shortDescription:
      "Purifix Photography is a portfolio website built to present photography work through a focused web experience.",
    fullDescription:
      "Purifix Photography is a visual portfolio website for presenting photography work and public-facing creative services.",
    overview: [
      "Purifix Photography serves as a digital portfolio for a photography practice. Its purpose is to make visual work easier to browse, understand and trust from a public web presence.",
      "KLVR presents this as selected project work rather than an owned product. The case study focuses on verified context: a live photography portfolio website and the services needed to bring that type of experience online.",
    ],
    services: ["Portfolio website", "Visual presentation", "Frontend development"],
    industry: "Photography",
    relationshipToKLVR: "client-project",
    seoTitle: "Purifix Photography | Projects & Work | KLVR",
    seoDescription:
      "Explore Purifix Photography, a selected KLVR portfolio website project with overview, services and live website access.",
  },
  {
    id: "project-treasurense",
    slug: "treasurense",
    name: "Treasurense",
    liveUrl: "https://treasurense.vercel.app/",
    previewImage: "/images/projects/treasurense.webp",
    category: "Personal portfolio",
    shortDescription:
      "Treasurense is a personal portfolio website for presenting creative work and public profile context.",
    fullDescription:
      "Treasurense is a personal portfolio website designed around presentation, visibility and a polished public profile.",
    overview: [
      "Treasurense gives a personal brand a dedicated web presence. The project fits KLVR's creative-technology work because it combines visual presentation, public positioning and responsive frontend delivery.",
      "The page avoids assuming ownership or business outcomes. It describes the live project as selected work and keeps the focus on the website experience visitors can inspect directly.",
    ],
    services: ["Personal website", "Creative direction support", "Frontend development"],
    industry: "Personal brand",
    relationshipToKLVR: "client-project",
    seoTitle: "Treasurense | Projects & Work | KLVR",
    seoDescription:
      "Explore Treasurense, a selected KLVR personal portfolio website project with context, services and a live website link.",
  },
  {
    id: "project-cece-the-designer",
    slug: "cece-the-designer",
    name: "Cece the Designer",
    liveUrl: "https://cece-the-desinger.vercel.app/",
    previewImage: "/images/projects/cece-the-designer.webp",
    category: "Designer portfolio",
    shortDescription:
      "Cece the Designer is a portfolio website for presenting design identity and creative work.",
    fullDescription:
      "Cece the Designer is a designer portfolio website created to support a clear, editorial digital presence.",
    overview: [
      "Cece the Designer is included as a portfolio website for a creative professional. The project centers on presenting design work and identity through a dedicated public website.",
      "KLVR's portfolio treatment is careful about attribution: this is shown as selected project work, not as a KLVR-owned product. Confirmed details can be expanded later without changing the shared data structure.",
    ],
    services: ["Designer portfolio", "Website experience", "Frontend development"],
    industry: "Design",
    relationshipToKLVR: "client-project",
    seoTitle: "Cece the Designer | Projects & Work | KLVR",
    seoDescription:
      "Explore Cece the Designer, a selected KLVR designer portfolio website project with overview, services and live website access.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export function projectPath(project: Project) {
  return `/projects/${project.slug}`;
}

export function projectCanonical(project: Project) {
  return `${SITE_URL}${projectPath(project)}`;
}

export function relationshipLabel(relationship?: ProjectRelationship) {
  if (relationship === "owned-product") return "KLVR owned product";
  if (relationship === "client-project") return "Client project";
  if (relationship === "collaboration") return "Collaboration";
  return undefined;
}
