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
    answer: "It depends on scope, so we won't put a number here that would probably be wrong for your situation. Say hello, tell us what you're building, and we'll scope it properly before quoting anything."
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
