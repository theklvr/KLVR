import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Plus,
  Minus,
  Twitter,
  Quote,
} from "lucide-react";
import { SpaceBackground } from "../components/SpaceBackground";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import {
  getSiteSettings,
  getServices,
  getTestimonials,
  getFaqItems,
  getTeamMembers,
  type SiteSettings,
  type Service,
  type Testimonial,
  type FaqEntry,
  type TeamMember,
} from "../lib/content";

const BRAND_PORTFOLIO_DATA = [
  {
    id: "w7",
    title: "Vallot",
    description: "Premium visual solutions and digital interface agency.",
    tag: "Digital Agency",
    href: "https://vallot.vercel.app/",
    url: "https://vallot.vercel.app/",
    logoText: "VL",
    logoBg: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  },
  {
    id: "w2",
    title: "Blocly",
    description: "Automated funnel and marketing block builder platform.",
    tag: "SaaS Automation",
    href: "https://blocly.click",
    url: "https://blocly.click",
    logoText: "B",
    logoBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
  {
    id: "w4",
    title: "Rapid Alex",
    description:
      "A bold personal site for musician Rapid Alex, built to showcase his music, visuals, and updates in one place.",
    tag: "Musician Website",
    href: "https://rapid-alex.vercel.app/",
    url: "https://rapid-alex.vercel.app/",
    logoText: "⚡",
    logoBg: "bg-teal-500/10 border-teal-500/20 text-teal-400",
  },
  {
    id: "w1",
    title: "Cloverhimself",
    description:
      "An immersive developer CV showcasing interactive skills and timeline logs.",
    tag: "Developer CV",
    href: "https://cloverhimself.cv",
    url: "https://cloverhimself.cv",
    logoText: "♣",
    logoBg: "bg-[#C6F135]/10 border-[#C6F135]/30 text-[#C6F135]",
  },
  {
    id: "w5",
    title: "Treasurense",
    description:
      "A striking personal portfolio for model Treasure, designed to showcase her portfolio and bookings.",
    tag: "Model Website",
    href: "https://treasurense.vercel.app/",
    url: "https://treasurense.vercel.app/",
    logoText: "TR",
    logoBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  },
  {
    id: "w6",
    title: "Cece the Designer",
    description:
      "An editorial portfolio site for designer Cece, showcasing her creative and visual identity work.",
    tag: "Designer Portfolio",
    href: "https://cece-the-desinger.vercel.app/",
    url: "https://cece-the-desinger.vercel.app/",
    logoText: "CC",
    logoBg: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  },
  {
    id: "w8",
    title: "Events by Kandella",
    description:
      "Bespoke event layout with dynamic booking and curated galleries.",
    tag: "Luxury Planner",
    href: "https://eventsby-kandella.vercel.app/",
    url: "https://eventsby-kandella.vercel.app/",
    logoText: "EK",
    logoBg: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400",
  },
  {
    id: "w9",
    title: "Samurai Beryl",
    description: "A futuristic retro terminal style Web3 gaming portal.",
    tag: "Web3 Gaming",
    href: "https://samurai-beryl.vercel.app/",
    url: "https://samurai-beryl.vercel.app/",
    logoText: "Ber",
    logoBg: "bg-emerald-500/10 border-[#10b981]/20 text-[#10b981]",
  },
];

const DEFAULT_SITE_SETTINGS: SiteSettings = {
  heroBuildWords: [
    "Websites",
    "Software",
    "Brand Kits",
    "Automation",
    "Platforms",
  ],
  heroForWords: ["Startups", "Schools", "Real Estate", "E-Commerce", "SMEs"],
  aboutText:
    "Most businesses do not actually know what they need first, a website , a brand , funding , or just someone with expirence telling them where to start.Klvr exists for that conversation. we are not here to seel you a package. We look at what you are building , tell you what actually matters right now,and bring in the right people from our own team, build, brand, growth, capital, whatever the moment calls for, to make it happen.  We started in 202 6because too many founders , business owners and soloprreneurs were getting sold services they did not need by people who had a reason to sell them. Klvr does not have that problem. we are not attached to one answer.",
  whyChooseUsEyebrow: "Why choose us",
  whyChooseUsHeadingPrimary: "We build for outcomes",
  whyChooseUsHeadingSecondary: "- not just launch day.",
  whyChooseUsDescription:
    "Direct founder access, weekly live builds, and systems built to compound are why partners stay long after the first launch.",
  statOneNumber: "10+",
  statOneLabel: "Successful projects completed",
  statOneDescription:
    "We've helped launch products and platforms that make growing businesses run smoother and look sharper.",
  statTwoNumber: "100%",
  statTwoLabel: "Customer satisfaction",
  statTwoCaption: "Direct to the founders",
  servicesHeading: "What We Do",
  servicesSubheading:
    "One team, two divisions, and a partnership that doesn't end at launch.",
  philosophyPart1: "Most agencies deliver and",
  philosophyHighlight: "disappear.",
  philosophyPart2: "We stay for the years that come after launch.",
  testimonialsHeading: "Partner Feedback",
  testimonialsSubheading:
    "Don't just take our word for it. Here is what partners say after replacing their fragmented teams with our unified engine.",
  teamHeading: "Team",
  teamSubheading:
    "We are Saviour, James, and our close strategic partners. We operate with zero layers of telephone or account-management overhead. When you deal with us, you deal directly with the hands doing the work.",
  faqHeading: "Questions people usually ask first.",
  faqSubheading:
    "If yours isn't here, that's exactly what the first message is for.",
  contactHeading: "Tell us what you're building.",
};

const DEFAULT_SERVICES_DATA: Service[] = [
  {
    _id: "default-service-build",
    num: "01",
    anchorId: "pillar-build",
    title: "Engineering & Build",
    description:
      "We design and build the software a growing business runs on: websites, custom platforms, and the systems that keep everything moving.",
    categories: [
      "Custom Software & CRM Systems",
      "School & Business Management Platforms",
      "High-Conversion Websites & E-Commerce",
      "Workflow Automation & AI Integration",
      "Secure API & Database Architecture",
    ],
  },
  {
    _id: "default-service-brand",
    num: "02",
    anchorId: "pillar-brand",
    title: "Brand & Creative",
    description:
      "We turn what a business does into a brand people trust and remember, then keep it consistent everywhere it shows up.",
    categories: [
      "Brand Positioning & Visual Identity",
      "Content, Photography & Videography",
      "User Interface & Experience (UI/UX)",
      "Marketing Strategy & Growth Campaigns",
    ],
  },
  {
    _id: "default-service-partnership",
    num: "03",
    anchorId: "pillar-partnership",
    title: "Ongoing Partnership",
    description:
      "We don't disappear after launch. We stay on as a long-term technology and creative partner, growing alongside the business.",
    categories: [
      "Direct Founder-to-Founder Thread",
      "Monthly Retainers & Growth Partnerships",
      "Weekly Live Builds & Launch Readiness",
      "Business & Technology Consulting",
    ],
  },
];

const DEFAULT_TESTIMONIALS_DATA: Testimonial[] = [
  {
    _id: "default-testimonial-rapid-alex",
    quote:
      "Bro, they turned my site into something that actually feels like my sound. I didn't expect to love a website this much.",
    author: "Rapid Alex",
    role: "Musician",
  },
  {
    _id: "default-testimonial-treasure",
    quote:
      "My site finally looks like what's actually in my head. People stop and ask who built it, every time.",
    author: "Treasure",
    role: "Model",
  },
  {
    _id: "default-testimonial-cece",
    quote:
      "I'm a designer myself, so I notice everything. klvr nailed the details I usually have to fight other devs for.",
    author: "Cece",
    role: "Designer",
  },
];

const DEFAULT_FAQ_DATA: FaqEntry[] = [
  {
    _id: "default-faq-cost",
    question: "How much does this cost?",
    answer:
      "It depends on scope, so we won't put a number here that would probably be wrong for your situation. We don't compete by being the cheapest option, our pricing reflects the value we create for your business, and we'd rather package a solution than nickel-and-dime you for every small piece. Say hello, tell us what you're building, and we'll scope it properly before quoting anything.",
  },
  {
    _id: "default-faq-speed",
    question: "How fast can you start?",
    answer:
      "Most projects can kick off within a week or two of scoping and a deposit. If something is genuinely urgent, tell us upfront, we can usually adjust.",
  },
  {
    _id: "default-faq-contract",
    question: "Do we need to sign a contract?",
    answer:
      "Yes, every project starts with a written scope and agreement. It protects you as much as it protects us, and it means nobody is guessing what was promised.",
  },
  {
    _id: "default-faq-one-thing",
    question: "What if I only need one thing, not everything?",
    answer:
      "That's completely fine. Most relationships start with one piece (a website, an app, a content system) and grow from there once the fit is obvious. Nothing here is all-or-nothing.",
  },
  {
    _id: "default-faq-outside-nigeria",
    question: "Do you work with businesses outside Nigeria?",
    answer:
      "Yes. We work with clients wherever they are, and price in whichever currency makes sense for the relationship.",
  },
  {
    _id: "default-faq-after-launch",
    question: "What happens after the project launches?",
    answer:
      "We don't disappear. Most clients move to a simple monthly plan so the system keeps running well and gets small improvements over time, with regular check-ins rather than radio silence.",
  },
];

const DEFAULT_TEAM_DATA: TeamMember[] = [
  {
    _id: "default-team-saviour",
    name: "Saviour",
    role: "Co-founder & Technical Lead",
    image: "/team/saviour.jpg",
    hoverTitle: "Hi There !",
    hoverText:
      "I'm the Technical lead and I'm dedicated ensuring our cleint's get the best technology solutions in their space.",
  },
  {
    _id: "default-team-james",
    name: "James",
    role: "Co-founder & Creative Director",
    image: "/team/james.jpg",
    hoverTitle: "Hello World",
    hoverText:
      "I craft premium strategic brand systems and high-converting user interfaces.",
  },
];

export default function Home() {
  const location = useLocation();

  // Content is seeded with the current hardcoded copy as defaults, then
  // silently swapped for the live Sanity data once it arrives. This avoids
  // a loading flash while still making the page fully CMS-editable.
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(
    DEFAULT_SITE_SETTINGS,
  );
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES_DATA);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(
    DEFAULT_TESTIMONIALS_DATA,
  );
  const [faqItems, setFaqItems] = useState<FaqEntry[]>(DEFAULT_FAQ_DATA);
  const [teamMembers, setTeamMembers] =
    useState<TeamMember[]>(DEFAULT_TEAM_DATA);

  useEffect(() => {
    getSiteSettings().then((data) => data && setSiteSettings(data));
    getServices().then((data) => data.length && setServices(data));
    getTestimonials().then((data) => data.length && setTestimonials(data));
    getFaqItems().then((data) => data.length && setFaqItems(data));
    getTeamMembers().then((data) => data.length && setTeamMembers(data));
  }, []);

  // Scroll to the section named in the URL hash. Needed because arriving
  // here from another route (e.g. Link to="/#about") is a client-side
  // navigation, and the browser's native hash-scroll only fires on full loads.
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }
    }
  }, [location.hash]);

  // FAQPage structured data, generated from live faqItems so it can't drift out of sync
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [faqItems]);

  const [portfolioActiveIndex, setPortfolioActiveIndex] = useState(0);

  // Only mount the live-preview iframe once the showcase section is actually
  // scrolled into view. Third-party sites can call window.focus() on load,
  // which makes the browser auto-scroll the parent page to reveal the iframe.
  // Deferring the mount until the user is already there neutralizes that.
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [showcaseInView, setShowcaseInView] = useState(false);
  useEffect(() => {
    const el = showcaseRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowcaseInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePrevSlide = () => {
    setPortfolioActiveIndex(
      (prev) =>
        (prev - 1 + BRAND_PORTFOLIO_DATA.length) % BRAND_PORTFOLIO_DATA.length,
    );
  };

  const handleNextSlide = () => {
    setPortfolioActiveIndex((prev) => (prev + 1) % BRAND_PORTFOLIO_DATA.length);
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title="Theklvr | Web Development, Software & Brand Agency"
        description="klvr is a web development, software, and brand agency for startups, schools, real estate, e-commerce, and growing businesses. One team, from launch onward."
        canonical="https://www.theklvr.com/"
        image="https://www.theklvr.com/og-image.png"
      />

      <Header />

      {/* HERO SECTION */}
      <section className="h-screen min-h-[700px] sm:min-h-[780px] md:min-h-[850px] bg-[#020504] text-white relative overflow-hidden flex flex-col justify-center pt-24 pb-12">
        <SpaceBackground />

        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-950/20 blur-[150px] pointer-events-none select-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-klvr/5 blur-[120px] pointer-events-none select-none z-0" />

        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] overflow-hidden pointer-events-none select-none z-0 hidden lg:block">
          <div className="relative h-full w-full flex items-center justify-end pr-10">
            <div className="relative flex gap-4 md:gap-5 justify-end items-end h-[105%] w-[105%] -rotate-[22deg] skew-x-3 translate-x-24 translate-y-12">
              {[
                { height: "h-[45%]", delay: 0 },
                { height: "h-[58%]", delay: 0.1 },
                { height: "h-[70%]", delay: 0.2 },
                { height: "h-[82%]", delay: 0.3 },
                { height: "h-[94%]", delay: 0.4 },
              ].map((slab, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: slab.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scaleY: 1.05, y: -10 }}
                  className={`w-14 md:w-20 lg:w-24 ${slab.height} rounded-2xl relative overflow-hidden shadow-[30px_40px_70px_-15px_rgba(0,0,0,0.98)] border-l border-t border-white/10`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(8,30,22,0.9) 0%, rgba(2,5,4,0.98) 100%)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-klvr/25 to-transparent w-full h-[30%] -translate-y-full animate-sweep"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-klvr/45 via-emerald-500/25 to-transparent" />
                  <div className="absolute bottom-6 left-5 font-mono text-[10px] text-[#425946] tracking-wider">
                    S_0{i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-space font-medium text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] leading-[1.2] tracking-[-0.02em] text-white">
              We build{" "}
              <RotatingWord
                words={siteSettings.heroBuildWords}
                colorClass="text-klvr"
              />
              <br />
              for{" "}
              <RotatingWord
                words={siteSettings.heroForWords}
                colorClass="text-white"
              />
              .
            </h1>
          </motion.div>
        </div>
      </section>

      <hr className="border-line" />

      {/* ABOUT SECTION (drop-cap writeup) */}
      <section className="py-20 border-b border-line bg-paper" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-ink text-[17px] sm:text-[19px] leading-relaxed max-w-3xl mx-auto text-justify first-letter:font-serif first-letter:font-bold first-letter:text-[40px] sm:first-letter:text-[48px] first-letter:text-ink"
          >
            {siteSettings.aboutText}
          </motion.p>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        className="py-24 border-b border-line bg-paper-dim"
        id="why-choose-us"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Top row: eyebrow + heading, same line */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.22fr_0.78fr] gap-3 lg:gap-8 items-start mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-mist text-[13px] font-sans block lg:pt-2"
            >
              {siteSettings.whyChooseUsEyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-space font-semibold text-[28px] sm:text-[36px] md:text-[42px] leading-[1.15] tracking-tight"
            >
              <span className="text-ink">
                {siteSettings.whyChooseUsHeadingPrimary}
              </span>{" "}
              <span className="text-mist">
                {siteSettings.whyChooseUsHeadingSecondary}
              </span>
            </motion.h2>
          </div>

          {/* Bottom row: video (left) + description/stats (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-20 lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[3/4] lg:h-[560px] lg:aspect-auto rounded-3xl overflow-hidden bg-ink"
            >
              <video
                src="/Assets/Klvrvid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            <div className="lg:h-full flex flex-col">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-moss text-[15px] leading-relaxed max-w-sm mt-2 mb-12"
              >
                {siteSettings.whyChooseUsDescription}
              </motion.p>

              <div className="grid grid-cols-2 gap-3 lg:flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white border border-line rounded-2xl p-6 flex flex-col lg:h-full"
                >
                  <div className="font-space font-bold text-[32px] text-ink tracking-tight leading-none mb-2">
                    {siteSettings.statOneNumber}
                  </div>
                  <p className="text-ink text-[13.5px] font-semibold mb-3">
                    {siteSettings.statOneLabel}
                  </p>
                  <p className="text-mist text-[12.5px] leading-relaxed mt-auto">
                    {siteSettings.statOneDescription}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white border border-line rounded-2xl p-6 flex flex-col lg:h-full"
                >
                  <div className="font-space font-bold text-[32px] text-ink tracking-tight leading-none mb-2">
                    {siteSettings.statTwoNumber}
                  </div>
                  <p className="text-ink text-[13.5px] font-semibold mb-3">
                    {siteSettings.statTwoLabel}
                  </p>
                  <div className="flex items-center gap-2.5 mt-auto">
                    <div className="flex -space-x-2 select-none">
                      <div className="w-7 h-7 rounded-full bg-ink text-paper font-space font-bold text-[10px] flex items-center justify-center border-2 border-white">
                        S
                      </div>
                      <div className="w-7 h-7 rounded-full bg-moss text-paper font-space font-bold text-[10px] flex items-center justify-center border-2 border-white">
                        J
                      </div>
                    </div>
                    <span className="text-mist text-[11.5px] font-mono">
                      {siteSettings.statTwoCaption}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        className="py-24 border-b border-neutral-200 bg-white"
        id="services"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-xl"
          >
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] tracking-tight text-black leading-tight mb-3">
              {siteSettings.servicesHeading}
            </h2>
            <p className="text-neutral-500 text-[15px] leading-relaxed">
              {siteSettings.servicesSubheading}
            </p>
          </motion.div>

          <div className="border-t border-neutral-200">
            {services.map((service, idx) => (
              <ServiceAccordionItem
                key={service._id}
                service={service}
                index={idx}
              />
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#contact"
              className="bg-black text-white hover:bg-neutral-800 text-[13px] px-6 py-3 rounded-full font-space font-bold tracking-wide inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-[1.5px]"
            >
              Get in contact
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE CAROUSEL */}
      <section
        ref={showcaseRef}
        className="relative py-24 bg-[#D4ED31] border-b border-line overflow-hidden"
        id="projects"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left mb-16 select-none max-w-2xl">
            <h2 className="font-space font-semibold text-[32px] md:text-[42px] tracking-tight text-ink mb-3">
              Product Showcase
            </h2>
            <p className="text-moss text-[15px] font-sans leading-relaxed">
              Experience our custom brand concepts paired with their live
              deployments in our interactive split-screen studio. Use the arrows
              to navigate through our live work.
            </p>
          </div>

          <div className="relative w-full h-auto md:h-[380px] rounded-3xl overflow-hidden border border-ink/10 bg-white flex flex-col md:flex-row shadow-[0_20px_50px_rgba(20,23,15,0.08)]">
            <div className="w-full md:w-[40%] bg-white p-6 md:p-8 flex flex-col justify-between text-left h-auto md:h-full order-2 md:order-1 border-t md:border-t-0 md:border-r border-line/50">
              <div className="max-w-md pb-6 md:pb-12 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={portfolioActiveIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-moss font-bold inline-block mb-2">
                      {BRAND_PORTFOLIO_DATA[portfolioActiveIndex].tag}
                    </span>
                    <h3 className="font-space font-bold text-[24px] md:text-[30px] text-ink leading-tight mb-2">
                      {BRAND_PORTFOLIO_DATA[portfolioActiveIndex].title}
                    </h3>
                    <p className="text-[13.5px] text-moss leading-relaxed">
                      {BRAND_PORTFOLIO_DATA[portfolioActiveIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 md:mt-0 select-none">
                <a
                  href={BRAND_PORTFOLIO_DATA[portfolioActiveIndex].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink font-space font-bold text-[12px] tracking-wider uppercase hover:text-moss transition-colors duration-200 border-b-2 border-ink/30 hover:border-ink pb-0.5 cursor-pointer"
                >
                  Explore the Live Website
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>

            <div className="w-full md:w-[60%] h-[240px] sm:h-[300px] md:h-full bg-paper-dim relative overflow-hidden order-1 md:order-2">
              <div className="absolute inset-0 w-[166.66%] h-[166.66%] origin-top-left scale-[0.6]">
                {showcaseInView ? (
                  <iframe
                    key="showcase-iframe"
                    title={`${BRAND_PORTFOLIO_DATA[portfolioActiveIndex].title} live view`}
                    src={`${BRAND_PORTFOLIO_DATA[portfolioActiveIndex].url}?muted=1`}
                    loading="lazy"
                    className="w-full h-full border-0 bg-white"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  />
                ) : (
                  <div className="w-full h-full bg-paper-dim animate-pulse" />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8 select-none">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous project"
              className="w-9 h-9 rounded-full border border-ink/20 bg-white flex items-center justify-center text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex justify-center gap-2">
              {BRAND_PORTFOLIO_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPortfolioActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === portfolioActiveIndex
                      ? "w-8 bg-ink"
                      : "bg-ink/25 hover:bg-ink/50"
                  }`}
                  title={`Go to Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextSlide}
              aria-label="Next project"
              className="w-9 h-9 rounded-full border border-ink/20 bg-white flex items-center justify-center text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-200 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section
        className="py-24 bg-paper-dim border-b border-line"
        id="philosophy"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">
          <blockquote className="font-space font-medium text-[22px] sm:text-[30px] md:text-[34px] leading-snug tracking-tight max-w-3xl text-ink">
            {siteSettings.philosophyPart1}{" "}
            <span className="text-moss">
              {siteSettings.philosophyHighlight}
            </span>{" "}
            {siteSettings.philosophyPart2}
          </blockquote>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 border-b border-line bg-paper-dim">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight text-ink uppercase mb-3">
              {siteSettings.testimonialsHeading}
            </h2>
            <p className="text-moss text-[15px] max-w-xl mx-auto leading-relaxed font-sans">
              {siteSettings.testimonialsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-line shadow-sm flex flex-col justify-between"
              >
                <Quote
                  className="w-7 h-7 text-[#D4ED31] mb-6"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <p className="text-[14px] text-ink leading-relaxed font-sans mb-8 italic">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-space font-bold text-[14px] text-ink">
                    {t.author}
                  </h4>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mist">
                    {t.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 border-b border-line bg-white" id="team">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight text-ink uppercase mb-3">
              {siteSettings.teamHeading}
            </h2>
            <p className="text-moss text-[15px] max-w-xl mx-auto leading-relaxed font-sans">
              {siteSettings.teamSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="team-member-custom w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md group relative">
                  <div className="team-img w-full h-full">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} at klvr`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="team-hover-custom">
                    <div className="desk-custom">
                      <h4 className="font-space font-bold text-[19px] text-ink mb-2">
                        {member.hoverTitle}
                      </h4>
                      <p className="text-[13px] text-moss leading-relaxed px-2">
                        {member.hoverText}
                      </p>
                    </div>
                    <div className="s-link-custom flex justify-center items-center gap-4 text-ink">
                      <a
                        href="https://x.com/theKlvr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="klvr on X"
                        className="hover:text-moss transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-title text-center pt-6 pb-2 w-full">
                  <h5 className="font-space font-bold text-[16px] text-ink uppercase tracking-wide mb-1">
                    {member.name}
                  </h5>
                  <span className="font-mono text-[11px] text-moss uppercase tracking-widest block font-semibold">
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 border-b border-line" id="faq">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-12"
          >
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[36px] tracking-tight mb-2">
              {siteSettings.faqHeading}
            </h2>
            <p className="text-mist text-[15px] leading-relaxed">
              {siteSettings.faqSubheading}
            </p>
          </motion.div>

          <div className="max-w-3xl border-t border-line">
            {faqItems.map((faq, i) => (
              <FaqAccordionItem key={faq._id} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CALL TO ACTION */}
      <section className="py-32 text-center" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-space font-bold text-[32px] sm:text-[48px] md:text-[56px] tracking-tight mb-8 text-ink">
              {siteSettings.contactHeading}
            </h2>
            <a
              href="mailto:klvrcorp@gmail.com"
              className="bg-ink text-paper hover:bg-moss text-[16px] px-9 py-5 rounded-[3px] inline-flex items-center gap-3 transition-all duration-200 hover:-translate-y-[1.5px] font-mono group shadow-md"
            >
              klvrcorp@gmail.com
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* SERVICE ACCORDION ITEM */
function ServiceAccordionItem({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      id={service.anchorId}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-neutral-200 scroll-mt-28"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-8 md:py-10 grid grid-cols-[40px_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-10 items-center cursor-pointer focus:outline-none group"
      >
        <span className="font-mono text-[13px] text-neutral-400">
          {service.num}
        </span>
        <h3 className="font-space font-bold text-[20px] md:text-[26px] text-black leading-tight group-hover:text-neutral-500 transition-colors">
          {service.title}
        </h3>
        <span className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-black flex-shrink-0 group-hover:border-black/40 transition-colors">
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-1 pb-8 md:pb-10 grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-10">
              <div aria-hidden="true" />
              <div className="min-w-0 pr-4 md:pr-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <p className="text-neutral-500 text-[14px] leading-relaxed min-w-0">
                  {service.description}
                </p>
                <div className="min-w-0">
                  <span className="text-neutral-400 text-[11px] font-mono uppercase tracking-wider block mb-3">
                    Categories
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[12px] font-sans text-black bg-white border border-neutral-300 rounded-full px-3.5 py-1.5 whitespace-nowrap"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ROTATING WORD (auto-cycling hero headline slot) */
function RotatingWord({
  words,
  colorClass,
}: {
  words: string[];
  colorClass: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block overflow-hidden align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`inline-block whitespace-nowrap ${colorClass}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ACCORDION FAQ ITEM WITH TRANSITION ANIMATION */
function FaqAccordionItem({ faq, index }: { faq: FaqEntry; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="border-b border-line"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 pr-8 relative flex items-center justify-between font-space font-semibold text-[17px] text-ink focus:outline-none cursor-pointer hover:text-moss transition-colors"
      >
        <span>{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4 text-moss"
        >
          {isOpen ? (
            <Minus className="w-4 h-4 stroke-[1.5]" />
          ) : (
            <Plus className="w-4 h-4 stroke-[1.5]" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-8 text-[14.5px] text-moss leading-relaxed max-w-2xl">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
