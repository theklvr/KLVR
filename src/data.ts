export interface StatItem {
  number: number;
  label: string;
  prefix?: string;
  suffix?: string;
  isCustom?: boolean;
  customValue?: string;
}

export interface ValueCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FlipCardItem {
  id: string;
  beforeTitle: string;
  beforeDescription: string;
  withKlvrTitle: string;
  withKlvrDescription: string;
}

export interface PillarItem {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  srcDoc: string;
  href: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const STATS_DATA: StatItem[] = [
  { number: 2, label: "Founders" },
  { number: 1, label: "Point of contact, always" },
  { number: 2026, label: "Founded" },
  { number: 0, label: "Based in Abuja, working anywhere", isCustom: true, customValue: "NG" }
];

export const VALUES_DATA: ValueCardItem[] = [
  {
    id: "v1",
    number: "01",
    title: "One team, not six",
    description: "No more coordinating separate freelancers for your site, your app, and your socials, hoping none of them vanish halfway through."
  },
  {
    id: "v2",
    number: "02",
    title: "Concerned, not commissioned",
    description: "We open every relationship trying to understand your business, not to close it. The commission can wait."
  },
  {
    id: "v3",
    number: "03",
    title: "Built to compound",
    description: "Systems and relationships designed to get more valuable over time, not disposable one-time builds."
  }
];

export const FLIP_CARDS_DATA: FlipCardItem[] = [
  {
    id: "f1",
    beforeTitle: "before",
    beforeDescription: "Five people, five group chats, five invoices.",
    withKlvrTitle: "with klvr",
    withKlvrDescription: "One team, one thread, one person to call. No juggling required."
  },
  {
    id: "f2",
    beforeTitle: "before",
    beforeDescription: "A freelancer disappears mid-project and takes the momentum with them.",
    withKlvrTitle: "with klvr",
    withKlvrDescription: "The same team that says hello is still around at year three. Built to stay."
  },
  {
    id: "f3",
    beforeTitle: "before",
    beforeDescription: "Every new hire means re-explaining the business from scratch.",
    withKlvrTitle: "with klvr",
    withKlvrDescription: "We already know the business. Every new project starts ahead. Context that compounds."
  }
];

export const PILLARS_DATA: PillarItem[] = [
  {
    id: "pillar-build",
    tag: "the build",
    title: "Systems that run the business",
    description: "Websites, apps, software, automation, and the infrastructure a growing company depends on daily."
  },
  {
    id: "pillar-brand",
    tag: "the brand",
    title: "Presence that earns attention",
    description: "Identity, content, social media management, KOL and partner relationships, community management, and the writers who make it all sound right."
  },
  {
    id: "pillar-partnership",
    tag: "the partnership",
    title: "A relationship, not an invoice",
    description: "Retainers, reviews, and roadmaps that continue long after the first version ships."
  }
];

export const PORTFOLIO_DATA: WorkItem[] = [
  {
    id: "w1",
    title: "Northgate Retail",
    description: "Storefront rebuild with a faster checkout flow.",
    tag: "E-commerce",
    href: "#",
    srcDoc: "<body style='margin:0;font-family:sans-serif;background:#101820;color:#fff;padding:40px'><div style='font-size:12px;letter-spacing:2px;color:#9adfc0'>NORTHGATE</div><h1 style='font-size:34px;margin:14px 0'>New season,<br>shop it now</h1><div style='display:inline-block;padding:10px 18px;background:#9adfc0;color:#101820;border-radius:4px;font-size:13px'>Shop the drop</div></body>"
  },
  {
    id: "w2",
    title: "Ledgerline",
    description: "Custom pipeline and follow-up tracking for a sales team.",
    tag: "CRM System",
    href: "#",
    srcDoc: "<body style='margin:0;font-family:sans-serif;background:#F1F2EA;padding:0'><div style='background:#14170F;color:#F1F2EA;padding:14px 20px;font-size:13px'>Ledgerline</div><div style='padding:24px'><div style='font-size:12px;color:#7C8370;margin-bottom:8px'>PIPELINE</div><div style='display:flex;gap:10px'><div style='background:#fff;border:1px solid #DCDDCF;border-radius:4px;padding:10px;width:70px;font-size:11px'>Lead<br><b>24</b></div><div style='background:#fff;border:1px solid #DCDDCF;border-radius:4px;padding:10px;width:70px;font-size:11px'>Deal<br><b>11</b></div><div style='background:#C6F135;border-radius:4px;padding:10px;width:70px;font-size:11px'>Won<br><b>6</b></div></div></div></body>"
  },
  {
    id: "w3",
    title: "Haven Clinic",
    description: "Appointment scheduling with automated reminders.",
    tag: "Booking System",
    href: "#",
    srcDoc: "<body style='margin:0;font-family:sans-serif;background:#fff;padding:26px'><div style='font-size:13px;font-weight:600;margin-bottom:16px'>Haven Clinic: Book a visit</div><div style='display:flex;gap:8px;margin-bottom:10px'><div style='border:1px solid #DCDDCF;border-radius:4px;padding:8px 12px;font-size:11px'>Mon 14</div><div style='border:1px solid #14170F;background:#14170F;color:#fff;border-radius:4px;padding:8px 12px;font-size:11px'>Tue 15</div><div style='border:1px solid #DCDDCF;border-radius:4px;padding:8px 12px;font-size:11px'>Wed 16</div></div><div style='border:1px solid #DCDDCF;border-radius:4px;padding:8px 12px;font-size:11px;width:100px'>10:30 AM</div></body>"
  },
  {
    id: "w4",
    title: "Brightpath School",
    description: "Admissions, grading, and a parent-facing portal.",
    tag: "School Management",
    href: "#",
    srcDoc: "<body style='margin:0;font-family:sans-serif;background:#F1F2EA;padding:0'><div style='background:#59634B;color:#fff;padding:14px 20px;font-size:13px'>Brightpath School Portal</div><div style='padding:22px'><div style='font-size:12px;color:#7C8370'>WELCOME BACK</div><h2 style='font-size:20px;margin:8px 0'>Term 2 results are in</h2><div style='display:inline-block;padding:8px 14px;background:#14170F;color:#fff;border-radius:4px;font-size:12px'>View report card</div></div></body>"
  },
  {
    id: "w5",
    title: "Amara Foods",
    description: "Order support assistant trained on real customer questions.",
    tag: "AI Chatbot",
    href: "#",
    srcDoc: "<body style='margin:0;font-family:sans-serif;background:#101820;padding:20px'><div style='color:#9adfc0;font-size:12px;margin-bottom:10px'>AMI: Ask me anything</div><div style='background:#1c2630;color:#fff;padding:10px 12px;border-radius:10px;font-size:12px;max-width:180px;margin-bottom:8px'>Do you deliver to Lekki?</div><div style='background:#9adfc0;color:#101820;padding:10px 12px;border-radius:10px;font-size:12px;max-width:180px;margin-left:auto'>Yes, 24 to 48 hours.</div></body>"
  },
  {
    id: "w6",
    title: "Formcraft Studio",
    description: "Revenue and utilization reporting in one view.",
    tag: "Dashboard",
    href: "#",
    srcDoc: "<body style='margin:0;font-family:sans-serif;background:#fff;padding:22px'><div style='font-size:12px;color:#7C8370;margin-bottom:10px'>THIS MONTH</div><div style='display:flex;align-items:flex-end;gap:6px;height:70px'><div style='width:16px;background:#DCDDCF;height:40%'></div><div style='width:16px;background:#DCDDCF;height:60%'></div><div style='width:16px;background:#C6F135;height:85%'></div><div style='width:16px;background:#DCDDCF;height:50%'></div><div style='width:16px;background:#DCDDCF;height:70%'></div></div></body>"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq1",
    question: "How much does this cost?",
    answer: "It depends on scope, so we won't put a number here that would probably be wrong for your situation. We don't compete by being the cheapest option, our pricing reflects the value we create for your business, and we'd rather package a solution than nickel-and-dime you for every small piece. Say hello, tell us what you're building, and we'll scope it properly before quoting anything."
  },
  {
    id: "faq2",
    question: "How fast can you start?",
    answer: "Most projects can kick off within a week or two of scoping and a deposit. If something is genuinely urgent, tell us upfront, we can usually adjust."
  },
  {
    id: "faq3",
    question: "Do we need to sign a contract?",
    answer: "Yes, every project starts with a written scope and agreement. It protects you as much as it protects us, and it means nobody is guessing what was promised."
  },
  {
    id: "faq4",
    question: "What if I only need one thing, not everything?",
    answer: "That's completely fine. Most relationships start with one piece (a website, an app, a content system) and grow from there once the fit is obvious. Nothing here is all-or-nothing."
  },
  {
    id: "faq5",
    question: "Do you work with businesses outside Nigeria?",
    answer: "Yes. We work with clients wherever they are, and price in whichever currency makes sense for the relationship."
  },
  {
    id: "faq6",
    question: "What happens after the project launches?",
    answer: "We don't disappear. Most clients move to a simple monthly plan so the system keeps running well and gets small improvements over time, with regular check-ins rather than radio silence."
  }
];

export interface TeamMember {
  name: string;
  role: string;
  initial: string;
  colorClass: string;
  bio: string;
  focus: string[];
  image: string;
  hoverTitle: string;
  hoverText: string;
}

export interface Division {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
}

export interface ClientGroup {
  title: string;
  subtitle: string;
  items: string[];
  type: 'primary' | 'secondary' | 'avoid';
}

export interface CareerRole {
  id: string;
  title: string;
  division: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  content: string[];
  image: string;
}

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    name: "Saviour",
    role: "Co-founder & Technical Lead",
    initial: "S",
    colorClass: "bg-ink text-paper",
    bio: "Architecting software platforms, custom automation flows, and business portals that make operations lean and secure. Saviour bridges the gap between raw code and long-term business growth, building products that scale gracefully under pressure.",
    focus: ["System Architecture", "Custom Automation & Workflow Engines", "Full-Stack Software Development", "Product Integrity & Technical Execution"],
    image: "/team/saviour.jpg",
    hoverTitle: "Hi There !",
    hoverText: "I'm a hardcore software lead and systems architect dedicated to clean code."
  },
  {
    name: "James",
    role: "Co-founder & Creative Director",
    initial: "J",
    colorClass: "bg-moss text-paper",
    bio: "Developing custom brand strategies, visual communications, and cohesive client engagement frameworks. James transforms complex technical utilities into relatable, trusted brands that attract, convert, and sustainably retain high-value customers.",
    focus: ["Brand Positioning & Identity Design", "Strategic Communication Systems", "User Interface & Experience (UI/UX)", "Growth & Customer Retention Strategy"],
    image: "/team/james.jpg",
    hoverTitle: "Hello World",
    hoverText: "I craft premium strategic brand systems and high-converting user interfaces."
  }
];

export const DIVISIONS_DATA: Division[] = [
  {
    id: "tech-div",
    name: "Technical Division",
    description: "Designing and engineering robust digital products that streamline operations and secure transactions.",
    capabilities: [
      "Custom Software & Multi-Tenant Platforms",
      "High-Conversion Business Websites",
      "Workflow & Automation Engines",
      "AI Implementations & Semantic Search",
      "Secure API Integrations & Database Architecture"
    ]
  },
  {
    id: "creative-div",
    name: "Creative Division",
    description: "Developing pristine visual languages and strategic message systems that command market authority.",
    capabilities: [
      "Brand Positioning & Corporate Identity Design",
      "UI/UX Design Systems & Motion Prototypes",
      "Multi-Channel Communication & Copywriting",
      "Launch Campaigns & Customer Acquisition Strategy",
      "Long-term Engagement & Community Infrastructure"
    ]
  }
];

export const CLIENTS_AUDIENCE_DATA: ClientGroup[] = [
  {
    title: "Primary Partners (Year 1)",
    subtitle: "Organizations primed for active expansion and modernization.",
    type: "primary",
    items: [
      "Small & medium enterprises (SMEs) seeking high efficiency (5–200 employees)",
      "Venture-backed startups preparing to launch or scale fast",
      "Private schools & educational institutions modernizing their portals",
      "Real estate firms looking to dominate with clean custom systems",
      "Automotive dealerships automating their inventory & CRM"
    ]
  },
  {
    title: "Secondary Sectors",
    subtitle: "Highly targeted custom projects demanding high security and trust.",
    type: "secondary",
    items: [
      "Churches & faith-based organizations building custom platforms",
      "E-commerce stores needing advanced custom logic and performance",
      "Logistics & delivery companies requiring real-time tracking systems",
      "Professional service firms (law, accounting, consulting, healthcare) modernizing client portals"
    ]
  },
  {
    title: "Out of Scope (Year 1)",
    subtitle: "Projects where we cannot deliver maximum speed or align incentives.",
    type: "avoid",
    items: [
      "Government procurement contracts with long bureaucratic cycles",
      "Legacy enterprises bound by multi-stage committee decision making",
      "Small gigs where the absolute lowest price is the only deciding factor",
      "Projects requiring technologies outside of our active operational expertise"
    ]
  }
];

export const CAREER_ROLES_DATA: CareerRole[] = [
  {
    id: "future-fullstack",
    title: "Full-Stack Software Engineer",
    division: "Technical Division",
    type: "Future Role // Talent Pipeline",
    description: "We are currently a high-performance team of two co-founders (Saviour & James). However, we are actively mapping our talent pipeline for future growth. If you are an elite developer with absolute code mastery, we want to know you.",
    requirements: [
      "Expertise in React, Vite, Node.js, and type-safe systems (TypeScript)",
      "Obsessive attention to UI fidelity, responsive layouts, and clean animations",
      "Experience with database architectures, secure API proxying, and cloud systems",
      "A growth-focused mindset—you treat code as a tool to solve human business problems"
    ]
  },
  {
    id: "future-creative",
    title: "Creative & Brand Strategy Lead",
    division: "Creative Division",
    type: "Future Role // Talent Pipeline",
    description: "James leads our creative division, but as our client engagements compound, we will expand our strategic brand circle. We seek minds that can translate operational excellence into stunning visual narratives and brand positions.",
    requirements: [
      "Stellar portfolio covering typographic design, UI/UX systems, and brand books",
      "Ability to write human, high-impact copywriting—absolutely free from generic AI-generated cliches",
      "Strategic grasp of customer retention, conversion funnels, and communication frameworks",
      "Fluency with design, prototyping, and asset curation tools"
    ]
  }
];

export const DETAILED_BLOG_POSTS_DATA: BlogArticle[] = [
  {
    id: "blog-boutique",
    title: "Why Boutique Technical Partners Outperform Freelance Teams",
    category: "ENGINEERING / STRATEGY",
    description: "A deep dive into the hidden costs of agency and freelance coordination, and how the boutique dedicated team model fixes aligned incentives.",
    readTime: "5 min read",
    date: "Jul 8, 2026",
    content: [
      "When a business sets out to build a new digital product, the default move is either to hire a large agency or piece together a team of independent freelancers. On paper, both sound reasonable. In practice, both models are plagued by misaligned incentives, coordination overhead, and single-point-of-failure risks.",
      "With freelancers, you are the coordinator. You are the project manager tasked with aligning five different people who do not know each other, do not share a common process, and have zero long-term commitment to your business. If your mobile developer disagrees with your API developer, they do not resolve it among themselves—they escalate it to you, costing you time and operational focus. If one of them vanishes or takes a higher-paying gig, you are left with half-finished, un-integrated code and a dead timeline.",
      "Large agencies solve the coordination problem, but introduce a relationship gap. You might sell to the senior partners, but your project is ultimately handed off to junior developers and account managers who treat your business as a check-the-box checklist. Once the contract term ends, they hand you a zip file, clear the invoice, and move on. There is no historical memory of why decisions were made, and no continuous evolution.",
      "We built our company to bridge this exact gap. As a boutique technical and creative partner, Saviour and James work as one coordinated unit. We don't just build systems; we live inside them, learning how you operate. When you have a single team managing both your engineering stack and your brand positioning, everything aligns. Your UI feels premium because the creative team and technical team sit in the same room. Your system scales because the co-founders who designed it are still there, committed to your long-term expansion."
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-mvp",
    title: "The Abuja Tech Emergence: Building World-Class MVPs in Record Time",
    category: "VENTURES / COMMUNITY",
    description: "Insights from our engineering hub on how we achieve 4.8-day average MVP launches without sacrificing system security or scalability.",
    readTime: "4 min read",
    date: "Jun 24, 2026",
    content: [
      "There is a toxic myth in product development that speed requires sacrifice. Teams assume that if you want to build a product in days instead of months, you must compromise on type-safety, design precision, or data security. We believe that is a false choice.",
      "The secret to rapid, secure delivery isn't cutting corners—it's high-fidelity modularity and absolute clarity of scope. Our development pipeline relies on pre-staged architectural blueprints, automated type generation, and strict linting. This allows us to focus entirely on the custom business logic and unique brand details of your project rather than re-engineering the foundational plumbing from scratch.",
      "Working from our base in Abuja, we are tapped into a vibrant, high-tempo talent hub that demands rapid execution. But speed is nothing without a stable foundation. By keeping our team small, Saviour can review every single line of code for performance, security, and schema soundness, while James ensures every user flow, transition, and micro-interaction is polished to consumer standards.",
      "An MVP should not feel like a toy; it should feel like the first chapter of an enterprise. By building with modern TypeScript stacks and secure cloud persistence from day one, we guarantee that the MVP we ship next week will still be the production engine supporting your first ten thousand users next year."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-growth",
    title: "Aligning Brand, Tech, & Operations for Sustainable Growth",
    category: "GROWTH / OPERATIONS",
    description: "Introducing our integrated system framework for combining software architecture with brand narrative to eliminate conversion leaks.",
    readTime: "6 min read",
    date: "May 12, 2026",
    content: [
      "Many businesses have exceptional products and services but struggle to grow. When you look under the hood, the root cause is almost always the same: their technology, their branding, and their operations do not speak to each other.",
      "A marketing team might launch a gorgeous campaign that brings ten thousand users to a landing page. But if the website is slow, or if the checkout flow is confusing, or if the database fails to capture the lead, that creative effort is entirely wasted. Conversely, an engineering team might build a incredibly complex, highly performant automation system, but if the branding looks outdated and the copy is written in cold, robotic language, customers will not trust it enough to enter their details.",
      "To achieve sustainable growth, you must treat your tech stack and your brand narrative as a single, coordinated engine. The technical division and the creative division must work hand-in-hand.",
      "This is why we serve our clients not as a vendor, but as a long-term partner. When we re-design a client's system, Saviour ensures the API proxy runs with sub-100ms latency and zero client-exposed credentials, while James aligns the visual typography and writes human, high-converting copy that builds immediate trust. By eliminating the friction between creative expression and technical execution, we unlock true business velocity."
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  }
];

