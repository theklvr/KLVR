import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, ExternalLink, Plus, Minus, Menu, X, Check, Sparkles, Users, Briefcase, Target, Send, Twitter, Code2, PenTool, Quote } from "lucide-react";
import { SpaceBackground } from "./components/SpaceBackground";
import {
  STATS_DATA,
  VALUES_DATA,
  FLIP_CARDS_DATA,
  PILLARS_DATA,
  PORTFOLIO_DATA,
  FAQ_DATA,
  TEAM_MEMBERS_DATA,
  DIVISIONS_DATA,
  CLIENTS_AUDIENCE_DATA,
  CAREER_ROLES_DATA,
  DETAILED_BLOG_POSTS_DATA
} from "./data";

export const BRAND_PORTFOLIO_DATA = [
  {
    id: "w1",
    title: "Cloverhimself",
    description: "An immersive developer CV showcasing interactive skills and timeline logs.",
    tag: "Developer CV",
    href: "https://cloverhimself.cv",
    url: "https://cloverhimself.cv",
    beforeCaption: "Initial sketch: Clover envisioned a modern, lightning-fast text terminal interface for his portfolio.",
    afterCaption: "The final live developer folio, packed with terminal aesthetics and detailed engineering logs.",
    founderName: "Clover",
    founderRole: "Lead Developer",
    founderImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&h=450&q=80",
    logoText: "♣",
    logoBg: "bg-[#C6F135]/10 border-[#C6F135]/30 text-[#C6F135]"
  },
  {
    id: "w2",
    title: "Blocly",
    description: "Automated funnel and marketing block builder platform.",
    tag: "SaaS Automation",
    href: "https://blocly.click",
    url: "https://blocly.click",
    beforeCaption: "Before: Whiteboard layout for modular code-block elements and CRM data hooks.",
    afterCaption: "Now: A live fully functional visual builder to coordinate active lead funnels instantly.",
    founderName: "Sarah Jennings",
    founderRole: "Growth Director",
    founderImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&h=450&q=80",
    logoText: "B",
    logoBg: "bg-amber-500/10 border-amber-500/20 text-amber-400"
  },
  {
    id: "w4",
    title: "Rapid Alex",
    description: "A supercharged developer sandbox and quick launchpad.",
    tag: "SaaS Launch",
    href: "https://rapid-alex.vercel.app/",
    url: "https://rapid-alex.vercel.app/",
    beforeCaption: "Before: A series of hardcoded scripts and manual deployments that took hours to launch.",
    afterCaption: "Now: A lightning-fast dashboard that deploys server-side integrations in one click.",
    founderName: "Alex Mercer",
    founderRole: "System Architect",
    founderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=450&q=80",
    logoText: "⚡",
    logoBg: "bg-teal-500/10 border-teal-500/20 text-teal-400"
  },
  {
    id: "w5",
    title: "Treasurense",
    description: "Next-generation asset tracking and currency visualizer.",
    tag: "FinTech App",
    href: "https://treasurense.vercel.app/",
    url: "https://treasurense.vercel.app/",
    beforeCaption: "Before: Reconciling ledger values manually using fragmented CSV sheets and emails.",
    afterCaption: "Now: A beautiful central banking and asset visualizer tracking digital coins.",
    founderName: "Marcus Sterling",
    founderRole: "Head of Finance",
    founderImage: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&h=450&q=80",
    logoText: "TR",
    logoBg: "bg-purple-500/10 border-purple-500/20 text-purple-400"
  },
  {
    id: "w6",
    title: "Cece the Designer",
    description: "Editorial layout showcasing immersive fashion and identity design.",
    tag: "Brand Studio",
    href: "https://cece-the-desinger.vercel.app/",
    url: "https://cece-the-desinger.vercel.app/",
    beforeCaption: "Before: Brand guidelines and mood notes dispersed across local folders.",
    afterCaption: "Now: A gorgeous immersive gallery detailing digital textiles and luxury concepts.",
    founderName: "Cecilia Wang",
    founderRole: "Fashion Lead",
    founderImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&h=450&q=80",
    logoText: "CC",
    logoBg: "bg-orange-500/10 border-orange-500/20 text-orange-400"
  },
  {
    id: "w7",
    title: "Vallot",
    description: "Premium visual solutions and digital interface agency.",
    tag: "Digital Agency",
    href: "https://vallot.vercel.app/",
    url: "https://vallot.vercel.app/",
    beforeCaption: "Before: Manual client proposals and low-fidelity Wireframes drawn by hand.",
    afterCaption: "Now: A stunning high-conversion landing layout with premium visual aesthetics.",
    founderName: "David Vallot",
    founderRole: "Design Principal",
    founderImage: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&h=450&q=80",
    logoText: "VL",
    logoBg: "bg-sky-500/10 border-sky-500/20 text-sky-400"
  },
  {
    id: "w8",
    title: "Events by Kandella",
    description: "Bespoke event layout with dynamic booking and curated galleries.",
    tag: "Luxury Planner",
    href: "https://eventsby-kandella.vercel.app/",
    url: "https://eventsby-kandella.vercel.app/",
    beforeCaption: "Before: Complex schedule sheets and phone booking overlaps with client delays.",
    afterCaption: "Now: A live fully responsive, high-end catalog for luxurious event setups.",
    founderName: "Kandella Rose",
    founderRole: "Lead Planner",
    founderImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&h=450&q=80",
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
    beforeCaption: "Before: Command-line sketches of interactive retro gaming layouts.",
    afterCaption: "Now: A stunning live Web3 cyberpunk space with gaming assets.",
    founderName: "Hiroshi Sato",
    founderRole: "Web3 Developer",
    founderImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&h=450&q=80",
    logoText: "Ber",
    logoBg: "bg-emerald-500/10 border-[#10b981]/20 text-[#10b981]"
  }
];

const JELLYFISH_DATA = [
  '1540968221243-29f5d70540bf', 
  '1596135187959-562c650d98bc', 
  '1628944682084-831f35256163', 
  '1590013330451-3946e83e0392', 
  '1590421959604-741d0eec0a2e', 
  '1572613000712-eadc57acbecd', 
  '1570097192570-4b49a6736f9f', 
  '1620789550663-2b10e0080354', 
  '1617775623669-20bff4ffaa5c', 
  '1548600916-dc8492f8e845', 
  '1573824969595-a76d4365a2e6', 
  '1633936929709-59991b5fdd72'
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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target as Node)) {
        setCompanyDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sticky header shadow on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
      setIsPastHero(window.scrollY > 450);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [portfolioActiveIndex, setPortfolioActiveIndex] = useState(0);

  // Expanded Company Info States
  const [activeAudienceTab, setActiveAudienceTab] = useState<'primary' | 'secondary' | 'avoid'>('primary');
  const [activeBlog, setActiveBlog] = useState<any | null>(null);
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);
  const [footerEmail, setFooterEmail] = useState("");
  const [footerMessage, setFooterMessage] = useState("");

  const handlePrevSlide = () => {
    setPortfolioActiveIndex((prev) => (prev - 1 + BRAND_PORTFOLIO_DATA.length) % BRAND_PORTFOLIO_DATA.length);
  };

  const handleNextSlide = () => {
    setPortfolioActiveIndex((prev) => (prev + 1) % BRAND_PORTFOLIO_DATA.length);
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      
      {/* SCROLLING HEADER - LOGO ONLY */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none h-24">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
          <a href="#top" className="flex items-center gap-1 group select-none pointer-events-auto">
            <span className="font-space font-extrabold text-2xl tracking-tight text-klvr group-hover:text-white transition-colors duration-300">
              KLVR.
            </span>
          </a>
        </div>
      </div>

      {/* HEADER / NAVIGATION - FIXED FLATING CAPSULE */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4 pointer-events-none"
        id="top-nav"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-end">
          {/* Desktop Navigation Links - Translucent capsule design matching Victus Global */}
          <nav className={`hidden md:flex items-center rounded-full p-2 pl-6 pr-2 transition-all duration-300 pointer-events-auto ${
            isPastHero 
              ? "bg-white border border-[#14170F]/15 text-ink shadow-[0_12px_40px_rgba(20,23,15,0.15)] hover:border-[#14170F]/25" 
              : "bg-white/[0.03] backdrop-blur-2xl border border-white/15 text-white shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.15),0_12px_40px_rgba(0,0,0,0.7)] hover:border-white/25"
          }`}>
            <a
              href="#top"
              className={`transition-colors duration-200 text-[13px] font-sans font-medium px-2 ${
                isPastHero ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => { setServicesDropdownOpen(true); setCompanyDropdownOpen(false); }}
                className={`flex items-center gap-1 transition-colors duration-200 text-[13px] font-sans font-medium px-2 cursor-pointer focus:outline-none ${
                  isPastHero ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                Services
                <motion.div
                  animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5 stroke-[2] opacity-70" />
                </motion.div>
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-64 border rounded-xl p-2 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${
                      isPastHero 
                        ? "bg-white border-[#14170F]/20 text-ink" 
                        : "bg-[#0A0D0B] border-white/20 text-white"
                    }`}
                  >
                    <a
                      href="#pillar-build"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>The Build</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Websites, apps, systems</div>
                    </a>
                    <a
                      href="#pillar-brand"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>The Brand</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Content, social, KOLs, community</div>
                    </a>
                    <a
                      href="#pillar-partnership"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>The Partnership</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Retainers, reviews, roadmaps</div>
                    </a>
                    <div className={`border-t my-1 ${isPastHero ? "border-ink/10" : "border-white/10"}`}></div>
                    <a
                      href="#portfolio"
                      className={`block p-3 rounded-lg transition-colors duration-200 text-center ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span className={`font-mono text-[11.5px] font-medium hover:underline inline-flex items-center gap-1 ${
                        isPastHero ? "text-ink" : "text-white"
                      }`}>
                        Recent Work <ArrowRight className="w-3 h-3" />
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={companyDropdownRef}>
              <button
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                onMouseEnter={() => { setCompanyDropdownOpen(true); setServicesDropdownOpen(false); }}
                className={`flex items-center gap-1 transition-colors duration-200 text-[13px] font-sans font-medium px-2 cursor-pointer focus:outline-none ${
                  isPastHero ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                Company
                <motion.div
                  animate={{ rotate: companyDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5 stroke-[2] opacity-70" />
                </motion.div>
              </button>

              <AnimatePresence>
                {companyDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    onMouseLeave={() => setCompanyDropdownOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-64 border rounded-xl p-2 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${
                      isPastHero 
                        ? "bg-white border-[#14170F]/20 text-ink" 
                        : "bg-[#0A0D0B] border-white/20 text-white"
                    }`}
                  >
                    <a
                      href="#about"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setCompanyDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>About Us</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Who we are and our mission</div>
                    </a>
                    <a
                      href="#team"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setCompanyDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>Team</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Meet the founders and developers</div>
                    </a>
                    <a
                      href="#blog"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setCompanyDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>Blog</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Insights, letters & perspectives</div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#projects"
              className={`transition-colors duration-200 text-[13px] font-sans font-medium px-2 ${
                isPastHero ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              Projects
            </a>

            {/* Vertical Divider */}
            <div className={`h-4 w-[1px] mx-2 ${isPastHero ? "bg-ink/20" : "bg-white/20"}`} />

            {/* say hello / get in contact */}
            <a
              href="#contact"
              className={`text-[12.5px] font-sans font-semibold pl-4.5 pr-1.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 group ${
                isPastHero 
                  ? "bg-ink/10 hover:bg-ink/20 text-ink" 
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Get in contact
              <span className={`w-5.5 h-5.5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm ${
                isPastHero 
                  ? "bg-ink text-white" 
                  : "bg-white text-[#020504]"
              }`}>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </a>
          </nav>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-[#05110a]/80 border border-white/10 text-white hover:bg-white/10 transition-colors shadow-lg pointer-events-auto"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-b border-white/10 bg-[#05110a]/95 backdrop-blur-md overflow-hidden shadow-2xl pointer-events-auto"
            >
              <div className="px-6 py-6 space-y-4 flex flex-col font-sans text-[14px] font-medium text-white/80">
                <a
                  href="#top"
                  className="block py-2 border-b border-white/5 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                
                <div className="py-2 border-b border-white/5">
                  <span className="block text-[11px] uppercase tracking-wider text-[#7C8370] font-bold mb-2">
                    Services
                  </span>
                  <div className="pl-4 space-y-2.5 mt-1">
                    <a
                      href="#pillar-build"
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Build
                    </a>
                    <a
                      href="#pillar-brand"
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Brand
                    </a>
                    <a
                      href="#pillar-partnership"
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Partnership
                    </a>
                  </div>
                </div>

                <div className="py-2 border-b border-white/5">
                  <span className="block text-[11px] uppercase tracking-wider text-[#7C8370] font-bold mb-2">
                    Company
                  </span>
                  <div className="pl-4 space-y-2.5 mt-1">
                    <a
                      href="#about"
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href="#team"
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Team
                    </a>
                    <a
                      href="#blog"
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </a>
                  </div>
                </div>

                <a
                  href="#projects"
                  className="block py-2 border-b border-white/5 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="block text-center py-3 bg-white text-[#020504] rounded-full font-semibold text-sm transition-all duration-200 hover:bg-klvr"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="h-screen min-h-[700px] sm:min-h-[780px] md:min-h-[850px] bg-[#020504] text-white relative overflow-hidden flex flex-col justify-center pt-24 pb-12">
        {/* Animated canvas with glowing space, green star particles and shooting stars */}
        <SpaceBackground />

        {/* Core glowing background lights to match the Victus screenshot emerald/dark-green hue */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-950/20 blur-[150px] pointer-events-none select-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-klvr/5 blur-[120px] pointer-events-none select-none z-0" />

        {/* Right Column / Background: Elegant 3D glass slabs filling the right screen space */}
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
                  {/* Glowing scanning sweep */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-klvr/25 to-transparent w-full h-[30%] -translate-y-full animate-sweep"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  
                  {/* Glass glare overlay */}
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent" />
                  
                  {/* Highlighted top border edge */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-klvr/45 via-emerald-500/25 to-transparent" />
                  
                  {/* Slabs numeric index */}
                  <div className="absolute bottom-6 left-5 font-mono text-[10px] text-[#425946] tracking-wider">
                    S_0{i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Content Container - aligned baseline on desktop */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-end w-full">
            
            {/* Left Column: Premium Brand & Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:pb-6"
            >
              <h1 className="font-space font-medium text-[38px] sm:text-[48px] md:text-[54px] lg:text-[58px] leading-[1.1] tracking-[-0.02em] text-white">
                Digital Product &amp;<br />
                Venture Engineering
              </h1>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] max-w-lg text-[#99A28E] leading-relaxed font-sans font-light">
                Most startups end up hiring a website developer, an app developer, a social media handler, a few KOLs, and hoping none of them disappear. <strong className="font-semibold text-white border-b border-klvr/60 pb-0.5">klvr</strong> replaces all of that fragmentation with one elite, dedicated engineering team that actually stays.
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

            {/* Right Column: Horizontally aligned Stats on desktop, positioned elegantly underneath the glass graphics space */}
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
                    high-performance products delivered
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
                    active support &amp; launch readiness
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
                You shouldn't need six freelancers to launch one business.
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

          {/* BENTO SERVICES HUB - Unified What We Do Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* The Build Card */}
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
                    "Custom Software & Multi-Tenant Platforms",
                    "High-Conversion Business Portals",
                    "Workflow & Automation Engines",
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

            {/* The Brand Card */}
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
                    "Brand Positioning & Identity Design",
                    "Strategic Communication Systems",
                    "User Interface & Experience (UI/UX)",
                    "Strategic Marketing Copy & Socials"
                  ].map((cap, cidx) => (
                    <li key={cidx} className="flex items-start gap-2 text-[13.5px] text-ink font-sans">
                      <span className="text-moss mt-1 text-[10px]">■</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* The Partnership Card */}
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

          {/* APPROACH & AUDIENCE (Merged) */}
          <div className="bg-paper-dim border border-line rounded-2xl p-8 mb-20 relative overflow-hidden" id="why-choose-us">
            
            <div className="mb-12 border-b border-line/60 pb-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-space font-bold text-[22px] text-ink">Who We Serve</h3>
                  <p className="text-mist text-[13px] font-sans mt-1">Our primary and secondary target alignment for Year 1 partnerships.</p>
                </div>
                
                {/* Tabs list */}
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

            {/* WHY CHOOSE US */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
              
              {/* Sticky Info Panel */}
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

              {/* Auto-scrolling Carousel */}
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
                      alt={member.name} 
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

      {/* PRODUCT SHOWCASE CAROUSEL (SHIPPED PROJECTS) */}
      <section className="relative py-24 bg-[#D4ED31] border-b border-line overflow-hidden" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-left mb-16 select-none max-w-2xl">
            <h2 className="font-space font-semibold text-[32px] md:text-[42px] tracking-tight text-ink mb-3">
              Product Showcase
            </h2>
            <p className="text-moss text-[15px] font-sans leading-relaxed">
              Experience our custom brand concepts paired with their live deployments in our interactive split-screen studio. Use the arrows to navigate through our live work.
            </p>
          </div>

          {/* Split-Screen Carousel Box - Sleek Wide Horizontal Rectangle */}
          <div className="relative w-full h-auto md:h-[380px] rounded-3xl overflow-hidden border border-ink/10 bg-white flex flex-col md:flex-row shadow-[0_20px_50px_rgba(20,23,15,0.08)]">
            
            {/* LEFT COLUMN: Info (40% width on desktop, 100% on mobile) */}
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

              {/* Static Explore Link - text only, clean UI without solid background */}
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

            {/* RIGHT COLUMN: Stationary Live Browser Preview (60% width on desktop, 100% on mobile) */}
            <div className="w-full md:w-[60%] h-[240px] sm:h-[300px] md:h-full bg-paper-dim relative overflow-hidden order-1 md:order-2">
              <div className="absolute inset-0 w-[166.66%] h-[166.66%] origin-top-left scale-[0.6]">
                <iframe
                  key="showcase-iframe"
                  title={`${BRAND_PORTFOLIO_DATA[portfolioActiveIndex].title} live view`}
                  src={`${BRAND_PORTFOLIO_DATA[portfolioActiveIndex].url}?muted=1`}
                  className="w-full h-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>

          </div>

          {/* Indicator Dots Below Slide Box */}
          <div className="flex justify-center gap-2 mt-8 select-none">
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

      {/* BLOG SECTION */}
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
              <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] tracking-tight text-ink leading-tight">
                Blog
              </h2>
            </motion.div>
          </div>

          {/* Interactive Blog Slider adapted from Swiper template */}
          <div className="blog-slider-custom mt-12 select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBlogIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col md:flex-row items-center"
              >
                <div className="blog-slider-custom__img">
                  <img 
                    src={DETAILED_BLOG_POSTS_DATA[activeBlogIndex].image} 
                    alt={DETAILED_BLOG_POSTS_DATA[activeBlogIndex].title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="blog-slider-custom__content">
                  <span className="blog-slider-custom__tag">
                    {DETAILED_BLOG_POSTS_DATA[activeBlogIndex].category} • {DETAILED_BLOG_POSTS_DATA[activeBlogIndex].date}
                  </span>
                  <div className="blog-slider-custom__title">
                    {DETAILED_BLOG_POSTS_DATA[activeBlogIndex].title}
                  </div>
                  <p className="blog-slider-custom__text">
                    {DETAILED_BLOG_POSTS_DATA[activeBlogIndex].description}
                  </p>
                  <button 
                    onClick={() => setActiveBlog(DETAILED_BLOG_POSTS_DATA[activeBlogIndex])}
                    className="blog-slider-custom__button text-center"
                  >
                    READ MORE
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Bullets */}
            <div className="blog-slider-custom__pagination">
              {DETAILED_BLOG_POSTS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBlogIndex(idx)}
                  className={`blog-slider-custom__bullet ${
                    idx === activeBlogIndex ? "blog-slider-custom__bullet-active" : ""
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Detailed Blog Post Modal Overlay */}
          <AnimatePresence>
            {activeBlog && (
              <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveBlog(null)}
                  className="absolute inset-0 bg-[#020504]/75 backdrop-blur-md"
                />

                {/* Reader Panel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 180 }}
                  className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-line shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative z-10 p-6 sm:p-10"
                >
                  <button
                    onClick={() => setActiveBlog(null)}
                    className="sticky top-0 float-right -mr-4 -mt-4 bg-white/90 backdrop-blur border border-line hover:bg-ink hover:text-white p-2.5 rounded-full text-[#59634B] hover:shadow-md transition-all duration-200 cursor-pointer z-20"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[9px] font-bold text-moss uppercase tracking-widest bg-paper px-2.5 py-1 rounded border border-line">
                        {activeBlog.category}
                      </span>
                      <span className="font-mono text-[11px] text-mist">{activeBlog.date}</span>
                      <span className="font-mono text-[11px] text-mist">•</span>
                      <span className="font-mono text-[11px] text-moss">{activeBlog.readTime}</span>
                    </div>

                    <h1 className="font-space font-bold text-[24px] sm:text-[32px] text-ink leading-tight tracking-tight mb-6">
                      {activeBlog.title}
                    </h1>

                    {activeBlog.image && (
                      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 shadow-sm">
                        <img 
                          src={activeBlog.image} 
                          alt={activeBlog.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    <div className="border-t border-line/60 pt-6 space-y-5">
                      {activeBlog.content.map((paragraph: string, pidx: number) => (
                        <p
                          key={pidx}
                          className="text-mist font-sans text-[15px] sm:text-[16px] leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="border-t border-line mt-10 pt-8 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2 select-none">
                          <div className="w-8 h-8 rounded-full bg-ink text-paper font-space font-bold text-[11px] flex items-center justify-center border-2 border-white">
                            S
                          </div>
                          <div className="w-8 h-8 rounded-full bg-moss text-paper font-space font-bold text-[11px] flex items-center justify-center border-2 border-white">
                            J
                          </div>
                        </div>
                        <span className="text-[12.5px] font-mono text-moss">Saviour &amp; James • klvr</span>
                      </div>

                      <button
                        onClick={() => setActiveBlog(null)}
                        className="px-5 py-2 border border-line hover:bg-[#14170F] hover:text-white rounded-full font-space font-bold text-[11.5px] tracking-wider uppercase transition-colors duration-200 cursor-pointer"
                      >
                        Done Reading
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
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

      {/* FOOTER */}
      <footer className="border-t border-line bg-white pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-16">
            <div className="space-y-6 max-w-sm">
              <span className="font-space font-bold text-3xl tracking-tighter select-none block text-ink">
                KLVR.
              </span>
              <p className="text-[14px] text-moss leading-relaxed font-sans">
                One team, everything a growing business needs. Built from Abuja, working anywhere.
              </p>
              
              <div className="pt-4 space-y-3 w-full">
                <p className="font-space font-bold text-[14px] text-ink mb-1">Let's talk</p>
                <form
                  className="flex flex-col gap-2 w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const subject = encodeURIComponent(`New message from ${footerEmail}`);
                    const body = encodeURIComponent(footerMessage);
                    window.location.href = `mailto:klvrcorp@gmail.com?subject=${subject}&body=${body}`;
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper-dim text-[13.5px] text-ink focus:outline-none focus:border-ink/30 transition-colors placeholder:text-mist"
                    required
                  />
                  <textarea
                    placeholder="How can we help?"
                    rows={2}
                    value={footerMessage}
                    onChange={(e) => setFooterMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper-dim text-[13.5px] text-ink focus:outline-none focus:border-ink/30 transition-colors placeholder:text-mist resize-none"
                    required
                  ></textarea>
                  <button type="submit" className="w-full py-2.5 bg-ink text-white rounded-lg font-space font-bold text-[13px] tracking-wide hover:bg-[#14170F] transition-colors mt-1">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12 md:gap-16 pt-2">
              <div className="space-y-4">
                <h5 className="font-space font-bold text-[14px] text-ink">
                  Company
                </h5>
                <ul className="space-y-3 text-[13.5px] text-moss font-sans">
                  <li><a href="#about" className="hover:text-ink transition-colors">Services</a></li>
                  <li><a href="#why-choose-us" className="hover:text-ink transition-colors">Approach</a></li>
                  <li><a href="#projects" className="hover:text-ink transition-colors">Showcase</a></li>
                  <li><a href="#blog" className="hover:text-ink transition-colors">Blog</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="font-space font-bold text-[14px] text-ink">
                  Social
                </h5>
                <ul className="space-y-3 text-[13.5px] text-moss font-sans">
                  <li><a href="https://x.com/theKlvr" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">X / Twitter</a></li>
                  <li><a href="mailto:klvrcorp@gmail.com" className="hover:text-ink transition-colors">klvrcorp@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-line/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-mist font-sans">
            <span>&copy; {new Date().getFullYear()} KLVR. All rights reserved.</span>
            <a href="#top" className="hover:text-ink transition-colors font-medium tracking-wide">Back to top ↑</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* STAT COUNTER CARD COMPONENT (WITH VIEWPORT OBSERVER AND EASING ANIMATION) */
function StatCounterCard({ stat, index }: { stat: typeof STATS_DATA[number]; index: number; key?: any }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (stat.isCustom || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 1000; // Duration of animation in ms
          const target = stat.number;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Cubic ease out function
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(easeOutCubic * target);
            
            setCount(value);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [stat, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className={`py-8 pr-6 border-r border-line last:border-r-0 md:first:pl-0 ${
        index > 0 ? "pl-6" : ""
      } ${index === 2 ? "border-r-0 md:border-r" : ""}`}
    >
      <span className="font-space font-bold text-[28px] sm:text-[34px] md:text-[38px] text-ink block mb-2 tracking-tight">
        {stat.isCustom ? (
          stat.customValue
        ) : (
          String(count).padStart(2, "0")
        )}
      </span>
      <span className="font-mono text-[11px] sm:text-[12px] text-mist uppercase tracking-wider block leading-relaxed">
        {stat.label}
      </span>
    </div>
  );
}

/* INTERACTIVE FLIP CARD */
function InteractiveFlipCard({ card, index }: { card: typeof FLIP_CARDS_DATA[number]; index: number; key?: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="[perspective:1200px] h-[240px] w-full cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      tabIndex={0}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT FACE (Before) */}
        <div className="absolute inset-0 [backface-visibility:hidden] border border-line rounded-lg p-6 bg-paper-dim flex flex-col justify-between">
          <span className="font-mono text-[11px] text-mist uppercase tracking-widest font-bold">
            {card.beforeTitle}
          </span>
          <h4 className="font-space font-semibold text-[19px] leading-snug text-ink mt-2">
            {card.beforeDescription}
          </h4>
          <span className="font-mono text-[10.5px] text-mist">
            hover or tap to see the fix
          </span>
        </div>

        {/* BACK FACE (With klvr) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-ink rounded-lg p-6 bg-ink text-paper flex flex-col justify-between">
          <span className="font-mono text-[11px] text-klvr uppercase tracking-widest font-bold">
            {card.withKlvrTitle}
          </span>
          <h4 className="font-space font-semibold text-[19px] leading-snug text-paper mt-2">
            {card.withKlvrDescription}
          </h4>
          <span className="font-mono text-[10.5px] text-klvr">
            built to stay
          </span>
        </div>
      </div>
    </motion.div>
  );
}



/* ACCORDION FAQ ITEM WITH TRANSITION ANIMATION */
function FaqAccordionItem({ faq, index }: { faq: typeof FAQ_DATA[number]; index: number; key?: any }) {
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

