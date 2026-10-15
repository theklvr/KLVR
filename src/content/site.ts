import type {
  FaqEntry,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "./types";

export const siteSettings: SiteSettings = {
  heroBuildWords: [
    "Digital Products",
    "Brand Experiences",
    "Growth Strategies",
    "Creative Campaigns",
    "Business Solutions",
  ],
  heroForWords: [
    "Startups",
    "Businesses",
    "Web3 Projects",
    "Organizations",
    "Entrepreneurs",
  ],
  heroSubheading:
    "Creative thinking, powerful technology, strategic growth, and the right people to make it happen.",
  aboutHeading: "Different challenges. One partner. Endless possibilities.",
  aboutText:
    "KLVR is a multidisciplinary company bringing creativity, technology, marketing and business expertise together to help ideas grow into meaningful ventures and ambitious projects become reality.\n\nWe work with founders, businesses, brands and organizations to solve problems, unlock opportunities and build for the future. From digital products and brand experiences to growth strategies, business advisory and specialized projects, we combine our team's expertise with a growing network of trusted partners to deliver the right solutions.\n\nBeyond client work, we develop our own products, explore new ventures and build strategic partnerships that expand what's possible.\n\nWe're not defined by one service or one industry. We're driven by the challenges we can solve, the value we create and the businesses we help move forward.",
  whyChooseUsEyebrow: "Why choose us",
  whyChooseUsHeadingPrimary: "More than a service provider.",
  whyChooseUsHeadingSecondary: "A partner in what comes next.",
  whyChooseUsDescription:
    "Different ambitions demand different solutions. We combine multidisciplinary thinking, hands-on execution and the right connections to help our partners navigate challenges and move forward with confidence.",
  statOneNumber: "10+",
  statOneLabel: "Successful projects completed",
  statOneDescription:
    "We've helped launch products and platforms that make growing businesses run smoother and look sharper.",
  statTwoNumber: "100%",
  statTwoLabel: "Customer satisfaction",
  statTwoCaption: "Direct to the founders",
  servicesHeading: "What We Do",
  servicesSubheading:
    "From solving business challenges to developing our own products, we bring ideas, expertise and the right partnerships together to create lasting value.",
  philosophyPart1: "KLVR creates, builds, connects and",
  philosophyHighlight: "grows.",
  philosophyPart2: "The right solution depends on the challenge in front of us.",
  testimonialsHeading: "Partner Feedback",
  testimonialsSubheading:
    "Real feedback from people we've helped through websites, creative work, product thinking and digital execution.",
  teamHeading: "Team",
  teamSubheading:
    "We are Saviour, James, and a growing network of close strategic partners. KLVR stays lean, direct and hands-on while bringing in specialist expertise when a project needs it.",
  faqHeading: "Useful answers before we talk.",
  faqSubheading:
    "Clear answers about what KLVR is, how we work and where collaboration can start.",
  contactHeading: "Have an idea, challenge or opportunity? Let's talk.",
  contactSubheading:
    "Whether you're building something new, growing an existing business, exploring a partnership or bringing an ambitious idea to life, we'd love to hear about it.",
};

export const services: Service[] = [
  {
    _id: "service-digital-presence",
    num: "01",
    anchorId: "digital-presence",
    title: "Websites & Digital Presence",
    description:
      "A credible online presence that wins trust and brings in customers. We design, build, host and look after websites that look the part and do the work, from a single landing page to a full corporate or e-commerce site.",
    categories: [
      "Website design and development",
      "Landing pages",
      "Corporate and portfolio websites",
      "E-commerce websites",
      "Hosting, maintenance and optimisation",
    ],
  },
  {
    _id: "service-business-systems",
    num: "02",
    anchorId: "business-systems",
    title: "Software, Systems & AI",
    description:
      "Less manual work, better decisions. We build the custom software and internal tools businesses run on, and use automation and AI to take repetitive work off your team's plate.",
    categories: [
      "Custom software and web apps",
      "School, hospital, HR and inventory systems",
      "CRM, ERP and internal dashboards",
      "Workflow and business process automation",
      "AI integration, chatbots and internal AI tools",
      "API integrations",
    ],
  },
  {
    _id: "service-brand-content",
    num: "03",
    anchorId: "brand-content",
    title: "Brand, Content & Media",
    description:
      "Brands people recognise, trust and remember. We shape the strategy and identity, then create the content that carries it across every touchpoint.",
    categories: [
      "Brand strategy and positioning",
      "Logo, visual identity and brand guidelines",
      "Copywriting and content strategy",
      "Social media content",
      "Photography, videography and motion graphics",
      "Graphic design",
    ],
  },
  {
    _id: "service-marketing-growth",
    num: "04",
    anchorId: "marketing-growth",
    title: "Marketing, Growth & Consulting",
    description:
      "Awareness that turns into revenue, and decisions made before money is spent. We plan the campaigns, the funnels and the launches, and advise on growth, digital transformation and technology choices.",
    categories: [
      "Marketing strategy and campaign planning",
      "Digital marketing, SEO and email",
      "Sales funnels and product launches",
      "Business growth strategy",
      "Digital transformation and technology planning",
      "Web3 ecosystem growth, community and KOLs",
    ],
  },
  {
    _id: "service-drone-experiences",
    num: "05",
    anchorId: "drone-experiences",
    title: "Drone Experiences: TYS",
    description:
      "TYS (Tell Your Story) is KLVR's drone experiences service for events across Nigeria: drone light shows in the sky, glowing butterfly drones in the room and gift boxes delivered from the air. Light shows are flown with a licensed operating partner.",
    categories: [
      "Drone light shows",
      "Butterfly drones",
      "Drone gift boxes",
      "Weddings, launches and celebrations",
      "tellyourstory.theklvr.com",
    ],
  },
  {
    _id: "service-products-partnerships",
    num: "06",
    anchorId: "products-partnerships",
    title: "Products, Partnerships & Growth Retainers",
    description:
      "Beyond one-off projects. We build our own products like Blocly, partner with specialist operators on ambitious work, and stay alongside businesses long term with growth partnerships that combine tech, marketing, content and strategy.",
    categories: [
      "KLVR products (Blocly)",
      "Growth partnerships and retainers",
      "Strategic and specialist collaborations",
      "Venture exploration and incubation",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    _id: "testimonial-rapid-alex",
    quote:
      "Bro, they turned my site into something that actually feels like my sound. I didn't expect to love a website this much.",
    author: "Rapid Alex",
    role: "Musician",
  },
  {
    _id: "testimonial-treasure",
    quote:
      "My site finally looks like what's actually in my head. People stop and ask who built it, every time.",
    author: "Treasure",
    role: "Model",
  },
  {
    _id: "testimonial-cece",
    quote:
      "I'm a designer myself, so I notice everything. KLVR nailed the details I usually have to fight other devs for.",
    author: "Cece",
    role: "Designer",
  },
];

export const faqItems: FaqEntry[] = [
  {
    _id: "faq-what-is-klvr",
    question: "What is KLVR?",
    answer:
      "KLVR is a creative, technology, marketing and business solutions company. We help organizations solve problems, build digital products, shape brands, grow communities and explore strategic opportunities.",
  },
  {
    _id: "faq-services",
    question: "What services does KLVR provide?",
    answer:
      "KLVR builds websites, custom software and business systems, automation and AI tools; develops brands, content and media; runs marketing and growth campaigns; advises on strategy and digital transformation; and, through TYS, creates drone experiences for events: light shows, butterfly drones and drone gift boxes.",
  },
  {
    _id: "faq-products",
    question: "Does KLVR build its own products?",
    answer:
      "Yes. KLVR develops its own digital products, platforms and tools. Blocly is one product within the KLVR ecosystem, and future products will be presented with real details as they develop.",
  },
  {
    _id: "faq-partners",
    question: "Does KLVR work with external partners?",
    answer:
      "Yes. KLVR collaborates with trusted specialist operators and strategic partners where a project needs expertise beyond our direct team. Partner-operated work is clearly distinguished from services delivered directly by KLVR.",
  },
  {
    _id: "faq-web3",
    question: "Does KLVR provide Web3 growth and business solutions?",
    answer:
      "Yes. KLVR supports Web3 projects with ecosystem growth, community development, partnerships, KOL collaborations, marketing strategy and business advisory where those capabilities match the project need.",
  },
  {
    _id: "faq-where",
    question: "Where does KLVR operate?",
    answer:
      "KLVR is built from Nigeria and works with clients, founders, businesses and organizations wherever the right collaboration makes sense.",
  },
  {
    _id: "faq-collaborate",
    question: "How can businesses collaborate with KLVR?",
    answer:
      "Start by sharing the idea, challenge or opportunity. From there, KLVR can scope a solution, explore a strategic partnership, support growth, build a digital product or connect the right specialist partners around the work.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    _id: "team-saviour",
    name: "Saviour",
    role: "Co-founder & Technical Lead",
    image: "/team/saviour.jpg",
    hoverTitle: "Hi There !",
    hoverText:
      "I'm the technical lead, focused on practical technology solutions that help ambitious projects move with confidence.",
  },
  {
    _id: "team-james",
    name: "James",
    role: "Co-founder & Creative Director",
    image: "/team/james.jpg",
    hoverTitle: "Hello World",
    hoverText:
      "I craft premium strategic brand systems, creative direction and high-converting user interfaces.",
  },
];

export const products = [
  {
    name: "TYS: Tell Your Story",
    href: "https://tellyourstory.theklvr.com",
    description:
      "TYS is KLVR's drone experiences service for events: drone light shows, butterfly drones and drone gift boxes across Nigeria.",
  },
  {
    name: "Blocly",
    href: "https://blocly.click",
    description:
      "Blocly is a KLVR product focused on automated funnel and marketing block building for faster campaign and product flow creation.",
  },
];
