import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Plus, Minus, Check, Briefcase, Twitter, Code2, PenTool, Quote } from "lucide-react";
import { SpaceBackground } from "../components/SpaceBackground";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import {
  FAQ_DATA,
  TEAM_MEMBERS_DATA,
  CLIENTS_AUDIENCE_DATA,
  DETAILED_BLOG_POSTS_DATA
} from "../data";

const BRAND_PORTFOLIO_DATA = [
  {
    id: "w7",
    title: "Vallot",
    description: "Premium visual solutions and digital interface agency.",
    tag: "Digital Agency",
    href: "https://vallot.vercel.app/",
    url: "https://vallot.vercel.app/",
    logoText: "VL",
    logoBg: "bg-sky-500/10 border-sky-500/20 text-sky-400"
  },
  {
    id: "w2",
    title: "Blocly",
    description: "Automated funnel and marketing block builder platform.",
    tag: "SaaS Automation",
    href: "https://blocly.click",
    url: "https://blocly.click",
    logoText: "B",
    logoBg: "bg-amber-500/10 border-amber-500/20 text-amber-400"
  },
  {
    id: "w4",
    title: "Rapid Alex",
    description: "A bold personal site for musician Rapid Alex, built to showcase his music, visuals, and updates in one place.",
    tag: "Musician Website",
    href: "https://rapid-alex.vercel.app/",
    url: "https://rapid-alex.vercel.app/",
    logoText: "⚡",
    logoBg: "bg-teal-500/10 border-teal-500/20 text-teal-400"
  },
  {
    id: "w1",
    title: "Cloverhimself",
    description: "An immersive developer CV showcasing interactive skills and timeline logs.",
    tag: "Developer CV",
    href: "https://cloverhimself.cv",
    url: "https://cloverhimself.cv",
    logoText: "♣",
    logoBg: "bg-[#C6F135]/10 border-[#C6F135]/30 text-[#C6F135]"
  },
  {
    id: "w5",
    title: "Treasurense",
    description: "A striking personal portfolio for model Treasure, designed to showcase her portfolio and bookings.",
    tag: "Model Website",
    href: "https://treasurense.vercel.app/",
    url: "https://treasurense.vercel.app/",
    logoText: "TR",
    logoBg: "bg-purple-500/10 border-purple-500/20 text-purple-400"
  },
  {
    id: "w6",
    title: "Cece the Designer",
    description: "An editorial portfolio site for designer Cece, showcasing her creative and visual identity work.",
    tag: "Designer Portfolio",
    href: "https://cece-the-desinger.vercel.app/",
    url: "https://cece-the-desinger.vercel.app/",
    logoText: "CC",
    logoBg: "bg-orange-500/10 border-orange-500/20 text-orange-400"
  },
  {
    id: "w8",
    title: "Events by Kandella",
    description: "Bespoke event layout with dynamic booking and curated galleries.",
    tag: "Luxury Planner",
    href: "https://eventsby-kandella.vercel.app/",
    url: "https://eventsby-kandella.vercel.app/",
    logoText: "EK",
    logoBg: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400"
  },
  {
    id: "w9",
    title: "Samurai Beryl",
    description: "A futuristic retro terminal style Web3 gaming portal.",
    tag: "Web3 Gaming",
    href: "https://samurai-beryl.vercel.app/",
    url: "https://samurai-beryl.vercel.app/",
    logoText: "Ber",
    logoBg: "bg-emerald-500/10 border-[#10b981]/20 text-[#10b981]"
  }
];

const WHAT_CHANGES_DATA = [
  {
    num: "01",
    title: "Communication",
    before: "Disjointed group chats, scattered emails, and ghosting freelancers.",
    after: "One single Slack thread and a dedicated client lead. Always in sync.",
    accent: "text-emerald-400"
  },
  {
    num: "02",
    title: "Delivery Speed",
    before: "Months spent in stagnant planning with zero working prototypes.",
    after: "Weekly live builds, continuous demos, and instant code commits.",
    accent: "text-klvr"
  },
  {
    num: "03",
    title: "Product Quality",
    before: "Slow, generic templates plagued by layout shifts and bugs.",
    after: "Custom responsive builds with sub-second mobile load times.",
    accent: "text-amber-400"
  },
  {
    num: "04",
    title: "Project Lifespan",
    before: "Handover is the end. Zero support once the final invoice is paid.",
    after: "Ongoing active retainers that evolve with real business scale.",
    accent: "text-purple-400"
  },
  {
    num: "05",
    title: "Scope & Value",
    before: "Rigid, hourly contracts where minor text updates incur a fee.",
    after: "Adaptive, outcome-focused partnerships that value long-term trust.",
    accent: "text-sky-400"
  },
  {
    num: "06",
    title: "System Flow",
    before: "A maze of disconnected apps requiring manual double-entry.",
    after: "Centralized, automated databases and bulletproof transaction tunnels.",
    accent: "text-fuchsia-400"
  }
];

export default function Home() {
  const location = useLocation();

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

  // FAQPage structured data, generated from FAQ_DATA so it can't drift out of sync
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_DATA.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [portfolioActiveIndex, setPortfolioActiveIndex] = useState(0);
  const [activeAudienceTab, setActiveAudienceTab] = useState<'primary' | 'secondary' | 'avoid'>('primary');

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePrevSlide = () => {
    setPortfolioActiveIndex((prev) => (prev - 1 + BRAND_PORTFOLIO_DATA.length) % BRAND_PORTFOLIO_DATA.length);
  };

  const handleNextSlide = () => {
    setPortfolioActiveIndex((prev) => (prev + 1) % BRAND_PORTFOLIO_DATA.length);
  };

  const [blogActiveIndex, setBlogActiveIndex] = useState(0);

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
                { height: "h-[94%]", delay: 0.4 }
              ].map((slab, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: slab.delay, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scaleY: 1.05, y: -10 }}
                  className={`w-14 md:w-20 lg:w-24 ${slab.height} rounded-2xl relative overflow-hidden shadow-[30px_40px_70px_-15px_rgba(0,0,0,0.98)] border-l border-t border-white/10`}
                  style={{
                    background: "linear-gradient(135deg, rgba(8,30,22,0.9) 0%, rgba(2,5,4,0.98) 100%)",
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

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-end w-full">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:pb-6"
            >
              <h1 className="font-space font-medium text-[38px] sm:text-[48px] md:text-[54px] lg:text-[58px] leading-[1.1] tracking-[-0.02em] text-white">
                One Team,<br />
                Everything You Need
              </h1>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] max-w-lg text-[#99A28E] leading-relaxed font-sans font-light">
                Most growing businesses end up juggling a website developer, an app developer, a social media manager, and a handful of freelancers, hoping none of them disappear. <strong className="font-semibold text-white border-b border-klvr/60 pb-0.5">klvr</strong> is the one team that handles all of it, and sticks around long after launch.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a
                  href="#contact"
                  className="bg-white text-[#020504] hover:bg-klvr hover:shadow-[0_0_40px_rgba(198,241,53,0.5)] text-[14px] pl-6 pr-2 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 group hover:scale-[1.02]"
                >
                  Get in contact
                  <span className="w-7 h-7 rounded-full bg-[#020504] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            <div className="w-full lg:pb-6">
              <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 lg:pt-0 border-t lg:border-t-0 border-white/10 lg:pl-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="font-space font-medium text-[42px] sm:text-[46px] md:text-[50px] text-white tracking-tight leading-none mb-2">
                    10+
                  </div>
                  <div className="font-mono text-[10px] sm:text-[10.5px] text-[#7C8370] uppercase tracking-wider leading-relaxed">
                    products shipped and running
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="font-space font-medium text-[34px] sm:text-[40px] md:text-[44px] lg:text-[48px] text-white tracking-tight leading-none mb-2">
                    24/7/365
                  </div>
                  <div className="font-mono text-[10px] sm:text-[10.5px] text-[#7C8370] uppercase tracking-wider leading-relaxed">
                    here whenever you need us
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="border-line" />

      {/* ABOUT SECTION */}
      <section className="py-24 border-b border-line" id="about">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 mb-20"
          >
            <div>
              <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight">
                You shouldn't need a handful of freelancers to launch one business.
              </h2>
            </div>
            <div className="space-y-6 text-[15px] sm:text-[16px] text-moss leading-relaxed">
              <p>
                We are a business growth company that becomes the long-term technology and creative partner for businesses. We help organizations manage, improve, and grow through one coordinated team, allowing them to focus on running their business while we help them build, market, automate, and scale their operations.
              </p>
              <p>
                Instead of treating technology, branding, marketing, and business operations as separate services, we align them into one comprehensive strategy that supports sustainable growth. Whether a client needs a website today, automation next month, a rebrand next year, or strategic guidance as they grow, they continue working with the same team that already understands their business.
              </p>
            </div>
          </motion.div>

          {/* BENTO SERVICES HUB */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              id="about-build"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white border border-line rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4ED31]/20 flex items-center justify-center text-ink">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-space font-bold text-[18px] text-ink">Engineering &amp; Build</h3>
                </div>
                <p className="text-[14px] text-moss leading-relaxed mb-6 font-sans">
                  Designing and engineering robust digital products that streamline operations and secure transactions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Custom Software, CRM & School/Business Management Systems",
                    "High-Conversion Websites & E-Commerce",
                    "Workflow Automation & AI Integration",
                    "Secure API & Database Architecture"
                  ].map((cap, cidx) => (
                    <li key={cidx} className="flex items-start gap-2 text-[13.5px] text-ink font-sans">
                      <span className="text-moss mt-1 text-[10px]">■</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              id="about-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-line rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4ED31]/20 flex items-center justify-center text-ink">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h3 className="font-space font-bold text-[18px] text-ink">Brand &amp; Creative</h3>
                </div>
                <p className="text-[14px] text-moss leading-relaxed mb-6 font-sans">
                  Transforming complex services into trusted brands that attract, convert, and sustainably retain high-value customers.
                </p>
                <ul className="space-y-3">
                  {[
                    "Brand Positioning & Visual Identity",
                    "Content, Photography & Videography",
                    "User Interface & Experience (UI/UX)",
                    "Marketing Strategy & Growth Campaigns"
                  ].map((cap, cidx) => (
                    <li key={cidx} className="flex items-start gap-2 text-[13.5px] text-ink font-sans">
                      <span className="text-moss mt-1 text-[10px]">■</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              id="about-partnership"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-line rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4ED31]/20 flex items-center justify-center text-ink">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-space font-bold text-[18px] text-ink">Ongoing Partnership</h3>
                </div>
                <p className="text-[14px] text-moss leading-relaxed mb-6 font-sans">
                  Operating with continuous alignment, zero management layers, and ongoing support designed to compound over time.
                </p>
                <ul className="space-y-3">
                  {[
                    "Direct Founder-to-Founder Thread",
                    "Ongoing Retainer Optimization Loops",
                    "Weekly Live Builds & Launch Readiness",
                    "No Middlemen, Full-Service Agility"
                  ].map((cap, cidx) => (
                    <li key={cidx} className="flex items-start gap-2 text-[13.5px] text-ink font-sans">
                      <span className="text-moss mt-1 text-[10px]">■</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* APPROACH & AUDIENCE */}
          <div className="bg-paper-dim border border-line rounded-2xl p-8 mb-20 relative overflow-hidden" id="why-choose-us">

            <div className="mb-12 border-b border-line/60 pb-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-space font-bold text-[22px] text-ink">Who We Serve</h3>
                  <p className="text-mist text-[13px] font-sans mt-1">Our primary and secondary target alignment for Year 1 partnerships.</p>
                </div>

                <div className="flex flex-wrap gap-2 select-none">
                  {(['primary', 'secondary', 'avoid'] as const).map((tab) => {
                    const label = tab === 'primary' ? "Primary Partners" : tab === 'secondary' ? "Secondary Sectors" : "Clients We Avoid";
                    const isActive = activeAudienceTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveAudienceTab(tab)}
                        className={`px-4 py-2 rounded-full font-space font-bold text-[11px] tracking-wide uppercase transition-all duration-200 cursor-pointer border ${
                          isActive
                            ? "bg-ink text-white border-ink"
                            : "bg-white text-moss border-line hover:border-ink/20"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAudienceTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {CLIENTS_AUDIENCE_DATA.map((group) => {
                    if (group.type !== activeAudienceTab) return null;
                    return (
                      <div key={group.type} className="space-y-4">
                        <div className="mb-4">
                          <span className="font-space font-semibold text-[15px] text-ink block mb-0.5">
                            {group.title}
                          </span>
                          <p className="text-[12.5px] font-mono text-moss">{group.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {group.items.map((item, idx) => {
                            const isAvoid = group.type === 'avoid';
                            return (
                              <div
                                key={idx}
                                className={`p-4 rounded-xl border flex items-start gap-3 transition-colors duration-200 ${
                                  isAvoid
                                    ? "bg-rose-500/[0.02] border-rose-500/10 hover:border-rose-500/20"
                                    : "bg-white border-line hover:border-ink/10"
                                }`}
                              >
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  isAvoid ? "bg-rose-100 text-rose-600" : "bg-emerald-50 text-emerald-600"
                                }`}>
                                  {isAvoid ? <Minus className="w-3 h-3" /> : <Check className="w-3 h-3" />}
                                </div>
                                <span className="text-[13.5px] text-ink leading-relaxed font-sans">{item}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">

              <div className="lg:sticky lg:top-28 space-y-6">
                <div>
                  <h3 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight text-ink uppercase">
                    Why Choose Us
                  </h3>
                </div>
                <p className="text-[14.5px] text-moss leading-relaxed font-sans">
                  The traditional agency model thrives on communication layers, slow delivery, and billable hours. We built our partnership structure to be the absolute opposite.
                </p>
                <p className="text-[14px] text-mist leading-relaxed font-sans">
                  We transform typical development headaches into streamlined, compounding business outcomes.
                </p>
              </div>

              <div className="overflow-hidden relative w-full rounded-xl" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
                <motion.div
                  className="flex gap-6 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                  {[...WHAT_CHANGES_DATA, ...WHAT_CHANGES_DATA].map((item, idx) => (
                    <div
                      key={`${item.num}-${idx}`}
                      className="w-[320px] sm:w-[380px] shrink-0 rounded-xl border border-line bg-white p-6 flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-line/40">
                        <span className="font-space font-bold text-[18px] text-[#D4ED31]">{item.num}</span>
                        <h4 className="font-space font-bold text-[16px] text-ink">{item.title}</h4>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-mist uppercase tracking-wider block mb-1.5">Traditional Agency</span>
                          <p className="text-[13px] text-moss leading-relaxed font-sans">{item.before}</p>
                        </div>
                        <div className="pt-4 border-t border-line/40">
                          <span className="text-[10px] font-mono font-bold text-ink uppercase tracking-wider block mb-1.5">Our Approach</span>
                          <p className="text-[13px] text-ink leading-relaxed font-sans font-medium">{item.after}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 border-b border-line bg-white" id="team">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight text-ink uppercase mb-3">
              Team
            </h2>
            <p className="text-moss text-[15px] max-w-xl mx-auto leading-relaxed font-sans">
              We are Saviour, James, and our close strategic partners. We operate with zero layers of telephone or account-management overhead. When you deal with us, you deal directly with the hands doing the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS_DATA.map((member, idx) => (
              <motion.div
                key={member.name}
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
                      <h4 className="font-space font-bold text-[19px] text-ink mb-2">{member.hoverTitle}</h4>
                      <p className="text-[13px] text-moss leading-relaxed px-2">{member.hoverText}</p>
                    </div>
                    <div className="s-link-custom flex justify-center items-center gap-4 text-ink">
                      <a href="https://x.com/theKlvr" target="_blank" rel="noopener noreferrer" aria-label="klvr on X" className="hover:text-moss transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-title text-center pt-6 pb-2 w-full">
                  <h5 className="font-space font-bold text-[16px] text-ink uppercase tracking-wide mb-1">{member.name}</h5>
                  <span className="font-mono text-[11px] text-moss uppercase tracking-widest block font-semibold">{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCT SHOWCASE CAROUSEL */}
      <section ref={showcaseRef} className="relative py-24 bg-[#D4ED31] border-b border-line overflow-hidden" id="projects">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-left mb-16 select-none max-w-2xl">
            <h2 className="font-space font-semibold text-[32px] md:text-[42px] tracking-tight text-ink mb-3">
              Product Showcase
            </h2>
            <p className="text-moss text-[15px] font-sans leading-relaxed">
              Experience our custom brand concepts paired with their live deployments in our interactive split-screen studio. Use the arrows to navigate through our live work.
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
                    idx === portfolioActiveIndex ? "w-8 bg-ink" : "bg-ink/25 hover:bg-ink/50"
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
      <section className="py-24 bg-paper-dim border-b border-line" id="philosophy">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">
          <blockquote className="font-space font-medium text-[22px] sm:text-[30px] md:text-[34px] leading-snug tracking-tight max-w-3xl text-ink">
            Most agencies deliver and <span className="text-moss">disappear.</span> We stay for the years that come after launch.
          </blockquote>
        </div>
      </section>

      {/* BLOG TEASER SECTION */}
      <section className="py-24 border-b border-line bg-paper" id="blog">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] tracking-tight text-ink leading-tight mb-2">
                From the Blog
              </h2>
              <p className="text-moss text-[15px] leading-relaxed">
                Notes on growth, technology, and brand, for anyone building a business, not just ours.
              </p>
            </motion.div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-ink font-space font-bold text-[12px] tracking-wider uppercase hover:text-moss transition-colors duration-200 border-b-2 border-ink/30 hover:border-ink pb-0.5 cursor-pointer shrink-0"
            >
              View All Articles
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

          <div className="blog-slider-custom select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={blogActiveIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col md:flex-row items-center"
              >
                <div className="blog-slider-custom__img">
                  <img
                    src={DETAILED_BLOG_POSTS_DATA[blogActiveIndex].image}
                    alt={DETAILED_BLOG_POSTS_DATA[blogActiveIndex].title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="blog-slider-custom__content">
                  <span className="blog-slider-custom__tag">
                    {DETAILED_BLOG_POSTS_DATA[blogActiveIndex].category} • {DETAILED_BLOG_POSTS_DATA[blogActiveIndex].date}
                  </span>
                  <div className="blog-slider-custom__title">
                    {DETAILED_BLOG_POSTS_DATA[blogActiveIndex].title}
                  </div>
                  <p className="blog-slider-custom__text">
                    {DETAILED_BLOG_POSTS_DATA[blogActiveIndex].description}
                  </p>
                  <Link
                    to={`/blog/${DETAILED_BLOG_POSTS_DATA[blogActiveIndex].slug}`}
                    className="blog-slider-custom__button text-center"
                  >
                    READ MORE
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="blog-slider-custom__pagination">
              {DETAILED_BLOG_POSTS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setBlogActiveIndex(idx)}
                  className={`blog-slider-custom__bullet ${
                    idx === blogActiveIndex ? "blog-slider-custom__bullet-active" : ""
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 border-b border-line bg-paper-dim">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight text-ink uppercase mb-3">
              Partner Feedback
            </h2>
            <p className="text-moss text-[15px] max-w-xl mx-auto leading-relaxed font-sans">
              Don't just take our word for it. Here is what partners say after replacing their fragmented teams with our unified engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Bro, they turned my site into something that actually feels like my sound. I didn't expect to love a website this much.",
                author: "Rapid Alex",
                role: "Musician",
              },
              {
                quote: "My site finally looks like what's actually in my head. People stop and ask who built it, every time.",
                author: "Treasure",
                role: "Model",
              },
              {
                quote: "I'm a designer myself, so I notice everything. klvr nailed the details I usually have to fight other devs for.",
                author: "Cece",
                role: "Designer",
              }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-line shadow-sm flex flex-col justify-between"
              >
                <Quote className="w-7 h-7 text-[#D4ED31] mb-6" fill="currentColor" strokeWidth={0} />
                <p className="text-[14px] text-ink leading-relaxed font-sans mb-8 italic">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-space font-bold text-[14px] text-ink">{t.author}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mist">{t.role}</span>
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
              Questions people usually ask first.
            </h2>
            <p className="text-mist text-[15px] leading-relaxed">
              If yours isn't here, that's exactly what the first message is for.
            </p>
          </motion.div>

          <div className="max-w-3xl border-t border-line">
            {FAQ_DATA.map((faq, i) => (
              <FaqAccordionItem key={faq.id} faq={faq} index={i} />
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
              Tell us what you're building.
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

/* ACCORDION FAQ ITEM WITH TRANSITION ANIMATION */
function FaqAccordionItem({ faq, index }: { faq: typeof FAQ_DATA[number]; index: number }) {
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
          {isOpen ? <Minus className="w-4 h-4 stroke-[1.5]" /> : <Plus className="w-4 h-4 stroke-[1.5]" />}
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
