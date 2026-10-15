export interface LandingPageData {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  capabilities: string[];
  serves: string;
  approach: string;
  examples: string[];
  internalLinks: { label: string; href: string }[];
  cta: string;
}

export const landingPages: LandingPageData[] = [
  {
    slug: "/solutions/technology",
    title: "Software Development, Web Applications & Automation | KLVR",
    metaDescription:
      "KLVR builds websites, custom software, SaaS products, web applications, AI integrations, automation systems and digital infrastructure.",
    eyebrow: "KLVR Solutions / Technology",
    h1: "Software, web applications and automation built around real business needs.",
    intro:
      "KLVR helps founders, businesses and organizations turn operational challenges and product ideas into reliable digital systems. We build websites, platforms, automations and technical infrastructure that support how the business actually works.",
    capabilities: [
      "Website development for brands, organizations and campaigns",
      "Custom software and internal business tools",
      "SaaS product planning and development",
      "Web application development and technical architecture",
      "AI integrations and workflow automation",
      "API, database and digital infrastructure planning",
      "Technical consulting for product and operations decisions",
    ],
    serves:
      "This work is suited for startups, SMEs, schools, creators, service businesses, Web3 teams and organizations that need dependable technology without losing sight of brand, usability and growth.",
    approach:
      "We start with the problem, map the workflow or product journey, then build the smallest strong version that can create value quickly and evolve cleanly. The goal is not software for its own sake; it is a system that helps the work move better.",
    examples: [
      "Blocly, a KLVR product in the marketing and funnel-building space.",
      "Live brand and portfolio websites for creative professionals and public-facing projects.",
      "Custom portal and dashboard concepts for business operations, booking, admissions and reporting workflows.",
    ],
    internalLinks: [
      { label: "Explore Strategy, Growth & Advisory", href: "/solutions/strategy-growth" },
      { label: "View KLVR Products", href: "/products" },
      { label: "Read technology insights", href: "/blog" },
    ],
    cta: "Discuss a technology project",
  },
  {
    slug: "/solutions/creative",
    title: "Branding, Design & Creative Solutions | KLVR",
    metaDescription:
      "KLVR provides brand strategy, identity design, UI/UX, creative direction, visual communications, campaign creative and digital experiences.",
    eyebrow: "KLVR Solutions / Creative",
    h1: "Branding, design and creative systems that make ideas easier to trust.",
    intro:
      "KLVR shapes how businesses, products and campaigns are understood. From brand identity to digital experience design, we connect strategy and creative execution so the work feels clear, credible and memorable.",
    capabilities: [
      "Brand strategy and positioning",
      "Brand identity systems and visual direction",
      "UI/UX design for websites, platforms and products",
      "Creative direction for launches, campaigns and digital experiences",
      "Visual communications, content structure and messaging",
      "Campaign creative and digital presentation systems",
      "Brand experience support for events and partnerships",
    ],
    serves:
      "This is for founders, businesses, artists, products, organizations and campaigns that need a stronger identity, sharper message or more polished digital presence.",
    approach:
      "We connect the business goal to the visual and verbal system. The output can be a brand identity, interface, campaign system or creative direction, but the standard is the same: make the idea easier to recognize, understand and believe.",
    examples: [
      "Personal and creative portfolio websites for artists, models and designers.",
      "Digital identity and interface work for public-facing brand projects.",
      "Campaign-ready website and content systems for launches and announcements.",
    ],
    internalLinks: [
      { label: "Explore technology solutions", href: "/solutions/technology" },
      { label: "Explore partnerships and experiences", href: "/partnerships" },
      { label: "See products and work", href: "/products" },
    ],
    cta: "Talk about a brand or creative project",
  },
  {
    slug: "/solutions/strategy-growth",
    title: "Business Strategy, Marketing & Growth Advisory | KLVR",
    metaDescription:
      "KLVR helps startups, businesses and emerging ventures with business strategy, marketing, growth advisory, partnerships and community development.",
    eyebrow: "KLVR Solutions / Strategy, Growth & Advisory",
    h1: "Growth needs more than visibility. It needs direction.",
    intro:
      "From finding the right market position to building meaningful partnerships, KLVR helps businesses and emerging ventures navigate growth through strategy, marketing, advisory and industry connections.",
    capabilities: [
      "Business strategy and development",
      "Digital marketing and brand growth",
      "Market positioning and launch strategy",
      "Strategic partnerships and ecosystem development",
      "Marketing campaigns and community engagement",
      "KOL, creator and influencer collaborations",
      "Business and operational advisory",
      "Commercial growth planning",
      "Web3 ecosystem growth and project advisory",
      "Growth consulting and relationship development",
    ],
    serves:
      "This category supports startups, established businesses, brands, organizations, creators and emerging ventures that need sharper direction, stronger execution and better relationships around growth.",
    approach:
      "We look at the business model, audience, message, market and operational reality together. Then we help define the strategy, shape the growth plan and connect the execution across marketing, partnerships, technology and advisory support.",
    examples: [
      "Growth strategy thinking for SMEs and founders through KLVR's published insights.",
      "Brand and product launch support connected to digital infrastructure and campaign planning.",
      "Community and partnership planning for projects that need trusted relationship development.",
    ],
    internalLinks: [
      { label: "Explore Web3 growth", href: "/solutions/web3" },
      { label: "Explore creative solutions", href: "/solutions/creative" },
      { label: "Read growth insights", href: "/blog/growth-strategy-framework-for-small-and-medium-businesses" },
    ],
    cta: "Plan a growth conversation",
  },
  {
    slug: "/solutions/web3",
    title: "Web3 Marketing, Partnerships & Ecosystem Growth | KLVR",
    metaDescription:
      "KLVR supports Web3 projects with ecosystem growth, community strategy, marketing campaigns, KOL collaborations, partnerships and advisory.",
    eyebrow: "KLVR Solutions / Web3",
    h1: "Web3 growth support for projects that need strategy, community and credible partnerships.",
    intro:
      "KLVR supports Web3 teams through market positioning, ecosystem growth, community strategy, launch preparation and partnership development. Web3 is a specialist market within our broader Strategy, Growth & Advisory work.",
    capabilities: [
      "Ecosystem growth and relationship development",
      "Community strategy and engagement planning",
      "Web3 marketing campaigns and launch support",
      "KOL, creator and influencer collaborations",
      "Partnership development and ecosystem introductions",
      "Strategic advisory for positioning and go-to-market planning",
      "Technical consulting and product development support",
      "Project positioning and launch preparation",
    ],
    serves:
      "This is for blockchain projects, Web3 startups, gaming communities, ecosystem teams and product builders that need clearer positioning, stronger community motion or more intentional partnership development.",
    approach:
      "We separate signal from noise. The work begins with the project's actual value, audience and stage, then builds a practical growth plan across community, content, collaborations, product readiness and partner relationships.",
    examples: [
      "Samurai Beryl, a futuristic Web3 gaming portal in the KLVR showcase.",
      "Community, KOL and partnership planning as part of broader growth advisory.",
      "Technical and product support for digital products where Web3 is part of the user or ecosystem strategy.",
    ],
    internalLinks: [
      { label: "Explore Strategy, Growth & Advisory", href: "/solutions/strategy-growth" },
      { label: "Explore technology solutions", href: "/solutions/technology" },
      { label: "Discuss a Web3 project", href: "mailto:klvrcorp@gmail.com" },
    ],
    cta: "Talk about Web3 growth",
  },
  {
    slug: "/solutions/drone-experiences",
    title: "Drone Light Shows, Butterfly Drones & Drone Gift Boxes in Nigeria | TYS by KLVR",
    metaDescription:
      "TYS (Tell Your Story) is KLVR's drone experiences service: story-led drone light shows, butterfly drones and drone gift boxes for weddings, launches and celebrations across Nigeria.",
    eyebrow: "KLVR Solutions / Drone Experiences",
    h1: "Drone experiences that tell the story behind the celebration.",
    intro:
      "TYS, short for Tell Your Story, is KLVR's drone experiences service for events across Nigeria. It brings the same thinking we use for brands to celebrations: start with the purpose, then design the moment that serves it. A wedding is two families becoming one. A launch is a name the market should remember. Every TYS show is designed so the shapes in the sky carry that meaning.",
    capabilities: [
      "Drone light shows: names, logos, portraits and messages drawn in the night sky",
      "Butterfly drones: glowing butterflies for entrances, first dances and stage moments",
      "Drone gift boxes: rings, keys and gifts delivered from the air",
      "Story and sequence design built around the purpose of the event",
      "Approvals, safety checks and coordination with planners and venues",
      "Brand launch and activation reveals designed to be filmed and shared",
    ],
    serves:
      "Couples, families, event planners, PR and event agencies, venues, brands, churches, schools and public institutions in Lagos, Abuja and across Nigeria, with events elsewhere in Africa on request.",
    approach:
      "We ask who the event is for, what it should achieve and how guests should feel, then build a sequence with a beginning, a middle and an end. Light shows are flown by a licensed operating partner with the required approvals; KLVR and TYS lead the idea, design and coordination.",
    examples: [
      "TYS (tellyourstory.theklvr.com): wedding, proposal, birthday, launch and public celebration drone experiences.",
      "Story-led brand reveals that pair a drone moment with KLVR campaign and content work.",
    ],
    internalLinks: [
      { label: "Visit TYS, Tell Your Story", href: "https://tellyourstory.theklvr.com" },
      { label: "Read: why drone shows should tell a story", href: "/blog/story-led-drone-shows-tys" },
      { label: "Explore partnerships", href: "/partnerships" },
    ],
    cta: "Plan a drone experience",
  },
  {
    slug: "/products",
    title: "Products & Digital Ventures Built by KLVR | KLVR",
    metaDescription:
      "Explore KLVR's product ecosystem, including Blocly, and the digital tools and ventures developed by KLVR.",
    eyebrow: "KLVR Products",
    h1: "Products and digital ventures built inside the KLVR ecosystem.",
    intro:
      "KLVR is not only a client solutions company. We also create and develop our own digital products, platforms and tools designed to solve real problems and open new opportunities.",
    capabilities: [
      "Owned software products and digital tools",
      "SaaS platform research and development",
      "Product strategy, interface design and technical build",
      "Internal product incubation",
      "Market testing and long-term product development",
      "Commercial product partnerships where there is a strong fit",
    ],
    serves:
      "The product ecosystem serves users and businesses where a KLVR-built tool can simplify a workflow, support a launch, improve marketing execution or create a scalable digital opportunity.",
    approach:
      "We develop products with the same multidisciplinary lens we bring to client work: strategy, design, engineering, marketing and commercial thinking working together from the beginning.",
    examples: [
      "Blocly, a KLVR product focused on automated funnel and marketing block building.",
      "Future KLVR products will be added when they have real public details to share.",
    ],
    internalLinks: [
      { label: "Visit Blocly", href: "https://blocly.click" },
      { label: "Explore technology solutions", href: "/solutions/technology" },
      { label: "Explore partnerships", href: "/partnerships" },
    ],
    cta: "Discuss product collaboration",
  },
  {
    slug: "/partnerships",
    title: "Strategic Partnerships & Creative Experiences | KLVR",
    metaDescription:
      "KLVR builds strategic partnerships, creative experiences, event solutions and collaborative project delivery with specialist operators.",
    eyebrow: "KLVR Partnerships",
    h1: "Strategic partnerships and creative experiences delivered with the right operators.",
    intro:
      "Some opportunities need more than one team. KLVR collaborates with specialist operators, industry professionals and commercial partners to bring ambitious projects, experiences and growth opportunities to life.",
    capabilities: [
      "Strategic business collaborations",
      "Specialist operator partnerships",
      "Creative experiences and event solutions",
      "Collaborative project delivery",
      "Commercial partnerships and joint opportunities",
      "Industry and ecosystem connections",
      "TYS drone experiences: light shows, butterfly drones and gift boxes",
    ],
    serves:
      "Partnerships are for companies, event organizers, brands, founders and operators interested in combining capabilities, reaching new audiences or delivering specialized projects together.",
    approach:
      "KLVR identifies the opportunity, clarifies who is responsible for what and brings the right people around the work. Where an independent operator delivers a specialized capability, we describe that relationship clearly and avoid presenting partner-owned resources as KLVR-owned.",
    examples: [
      "TYS (tellyourstory.theklvr.com): drone experiences for events, with light shows flown by a licensed operating partner.",
      "Creative and event-adjacent collaborations that combine strategy, production and digital support.",
      "Commercial partnership exploration for products, ventures and cross-industry opportunities.",
    ],
    internalLinks: [
      { label: "Explore creative solutions", href: "/solutions/creative" },
      { label: "Explore products", href: "/products" },
      { label: "Start a partnership conversation", href: "mailto:klvrcorp@gmail.com" },
    ],
    cta: "Explore a partnership",
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug) ?? null;
}
