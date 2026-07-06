import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, ExternalLink, Plus, Minus, Menu, X } from "lucide-react";
import {
  STATS_DATA,
  VALUES_DATA,
  FLIP_CARDS_DATA,
  PILLARS_DATA,
  PORTFOLIO_DATA,
  FAQ_DATA
} from "./data";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sticky header shadow on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      
      {/* HEADER / NAVIGATION */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-md border-b border-line transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_6px_18px_rgba(20,23,15,0.06)]" : ""
        }`}
        id="top"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a href="#top" className="font-space font-bold text-2xl tracking-tight select-none">
            klvr
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] lowercase tracking-wide">
            <a href="#about" className="text-moss hover:text-ink transition-colors duration-200">
              about
            </a>

            {/* Custom Dropdown using motion */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1 text-moss hover:text-ink transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                what we do
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-line rounded-lg shadow-[0_12px_28px_rgba(20,23,15,0.10)] p-2 z-50"
                  >
                    <a
                      href="#pillar-build"
                      className="block p-3 rounded-md hover:bg-paper-dim transition-colors duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-sans text-[13.5px] font-semibold text-ink">The build</div>
                      <div className="font-mono text-[10.5px] text-mist mt-0.5">Websites, apps, systems</div>
                    </a>
                    <a
                      href="#pillar-brand"
                      className="block p-3 rounded-md hover:bg-paper-dim transition-colors duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-sans text-[13.5px] font-semibold text-ink">The brand</div>
                      <div className="font-mono text-[10.5px] text-mist mt-0.5">Content, social, KOLs, community</div>
                    </a>
                    <a
                      href="#pillar-partnership"
                      className="block p-3 rounded-md hover:bg-paper-dim transition-colors duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-sans text-[13.5px] font-semibold text-ink">The partnership</div>
                      <div className="font-mono text-[10.5px] text-mist mt-0.5">Retainers, reviews, roadmaps</div>
                    </a>
                    <div className="border-t border-line my-1"></div>
                    <a
                      href="#portfolio"
                      className="block p-3 rounded-md hover:bg-paper-dim transition-colors duration-200 text-center"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="font-mono text-[11.5px] text-ink font-medium hover:underline inline-flex items-center gap-1">
                        Recent work <ArrowRight className="w-3 h-3" />
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#portfolio" className="text-moss hover:text-ink transition-colors duration-200">
              work we've shipped
            </a>
            <a href="#faq" className="text-moss hover:text-ink transition-colors duration-200">
              faq
            </a>
            <a
              href="#contact"
              className="bg-ink text-paper hover:bg-moss text-xs px-5 py-2.5 rounded-[3px] transition-all duration-200 hover:-translate-y-[1px] shadow-sm font-semibold tracking-wide"
            >
              say hello
            </a>
          </nav>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink hover:bg-paper-dim rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="md:hidden border-b border-line bg-paper overflow-hidden shadow-lg"
            >
              <div className="px-6 py-6 space-y-4 flex flex-col font-mono text-[14px] lowercase tracking-wide">
                <a
                  href="#about"
                  className="block py-2 text-ink border-b border-line hover:text-moss transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  about
                </a>
                <div className="py-2 border-b border-line">
                  <span className="block text-[11px] uppercase tracking-wider text-mist font-bold mb-2">
                    what we do
                  </span>
                  <div className="pl-4 space-y-2 mt-1">
                    <a
                      href="#pillar-build"
                      className="block py-1 text-moss hover:text-ink transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      the build
                    </a>
                    <a
                      href="#pillar-brand"
                      className="block py-1 text-moss hover:text-ink transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      the brand
                    </a>
                    <a
                      href="#pillar-partnership"
                      className="block py-1 text-moss hover:text-ink transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      the partnership
                    </a>
                  </div>
                </div>
                <a
                  href="#portfolio"
                  className="block py-2 text-ink border-b border-line hover:text-moss transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  work we've shipped
                </a>
                <a
                  href="#faq"
                  className="block py-2 text-ink border-b border-line hover:text-moss transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  faq
                </a>
                <a
                  href="#contact"
                  className="block text-center py-3 bg-ink text-paper rounded-[3px] font-bold text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  say hello
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-moss mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-klvr shadow-[0_0_0_3px_rgba(198,241,53,0.25)]"></span>
              one team. everything you need to grow.
            </p>

            <h1
              className="font-space font-bold text-[64px] sm:text-[96px] md:text-[132px] lg:text-[148px] leading-[0.92] tracking-[-0.03em] mb-10 select-none"
              aria-label="klvr"
            >
              k<span className="text-klvr [-webkit-text-stroke:1px_var(--color-ink)]">l</span>vr
            </h1>

            <p className="text-[17px] sm:text-[20px] md:text-[21px] max-w-2xl text-ink leading-relaxed mb-10 font-sans">
              Most startups end up hiring a website developer, an app developer, a social media handler, a few KOLs, and hoping none of them disappear. <strong>klvr</strong> replaces all of that with one team that actually stays.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-4">
              <a
                href="#contact"
                className="bg-ink text-paper hover:bg-moss text-[14px] px-7 py-4 rounded-[3px] inline-flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-[1px] font-mono group"
              >
                say hello
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="text-moss hover:text-ink text-[14px] font-mono border-b border-moss hover:border-ink pb-0.5 transition-all duration-200"
              >
                see what we do
              </a>
            </div>

            <p className="text-[13px] text-mist font-mono mt-4">
              No pitch on the first message. Just tell us what's slowing you down.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="border-line" />

      {/* TICKER STRIP */}
      <div className="bg-ink py-4 overflow-hidden border-b border-line" role="presentation" aria-hidden="true">
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          {/* Main sequence */}
          <div className="flex items-center gap-0">
            {["website developer", "app developer", "social media handler", "content creator", "KOLs", "partners", "community managers", "mods", "writers"].map((freelancer, i) => (
              <span key={i} className="flex items-center gap-3 font-mono text-[12.5px] text-paper whitespace-nowrap px-6">
                <span className="text-klvr font-bold">✕</span> {freelancer}
                <span className="text-moss ml-6">/</span>
              </span>
            ))}
            <span className="flex items-center gap-3 font-mono text-[12.5px] text-paper whitespace-nowrap px-6">
              <span className="text-klvr">→</span> just <b className="text-klvr font-bold">klvr</b>
              <span className="text-moss ml-6">/</span>
            </span>
          </div>
          {/* Duplicate sequence for infinite loop */}
          <div className="flex items-center gap-0">
            {["website developer", "app developer", "social media handler", "content creator", "KOLs", "partners", "community managers", "mods", "writers"].map((freelancer, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-3 font-mono text-[12.5px] text-paper whitespace-nowrap px-6">
                <span className="text-klvr font-bold">✕</span> {freelancer}
                <span className="text-moss ml-6">/</span>
              </span>
            ))}
            <span className="flex items-center gap-3 font-mono text-[12.5px] text-paper whitespace-nowrap px-6">
              <span className="text-klvr">→</span> just <b className="text-klvr font-bold">klvr</b>
              <span className="text-moss ml-6">/</span>
            </span>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="py-24 border-b border-line" id="about">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 mb-20"
          >
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] leading-tight tracking-tight">
              You shouldn't need six freelancers to launch one business.
            </h2>
            <div className="space-y-6 text-[16px] text-moss leading-relaxed">
              <p>
                A new startup usually ends up needing a website, an app, a social media handler, a content creator, a few KOLs, partners, community managers, mods, and writers. Each one is hired separately. Each one is a stranger. Each one is a new chance of getting ghosted or scammed before the business even launches.
              </p>
              <p>
                klvr exists to remove that fragmentation. One team, one relationship, everything a business needs to launch and grow, handled in one place. We stick around after, instead of disappearing once the invoice clears.
              </p>
              <p className="text-[14px] text-mist">
                Long term, we want klvr to grow well beyond a consultancy, into things like investing, an academy, and a foundation. That is a future chapter we are building toward, not a promise we are making today.
              </p>
            </div>
          </motion.div>

          {/* INTERACTIVE COUNTING STATS ROW */}
          <div className="border-y border-line grid grid-cols-2 md:grid-cols-4 mb-20">
            {STATS_DATA.map((stat, i) => (
              <StatCounterCard key={i} stat={stat} index={i} />
            ))}
          </div>

          {/* VALUES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {VALUES_DATA.map((value, i) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col"
              >
                <div className="w-9 h-9 rounded-full bg-ink text-klvr font-space font-bold text-sm flex items-center justify-center mb-5">
                  {value.number}
                </div>
                <h3 className="font-space font-semibold text-[18px] text-ink mb-2">
                  {value.title}
                </h3>
                <p className="text-[14.5px] text-mist leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* FOUNDERS BLOCKQUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-paper-dim p-8 md:p-10 rounded-lg flex flex-col sm:flex-row items-start gap-6"
          >
            <div className="flex -space-x-3.5 select-none flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-ink text-paper font-space font-bold text-[15px] flex items-center justify-center border-3 border-paper-dim">
                S
              </div>
              <div className="w-12 h-12 rounded-full bg-moss text-paper font-space font-bold text-[15px] flex items-center justify-center border-3 border-paper-dim">
                J
              </div>
            </div>
            <div className="space-y-3">
              <blockquote className="text-[16px] italic text-ink leading-relaxed">
                "We're not trying to be the biggest technical partner out there, just the one you never feel the need to replace. Everything in how we work comes back to that one idea."
              </blockquote>
              <cite className="block font-mono text-[12.5px] text-mist not-italic">
                — Saviour &amp; James, Founders
              </cite>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FLIP CARDS SECTION (BEFORE VS WITH KLVR) */}
      <section className="py-24 border-b border-line" id="before-after">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-16"
          >
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[36px] tracking-tight mb-3">
              What actually changes.
            </h2>
            <p className="text-mist text-[15px] leading-relaxed">
              Hover a card, or tap it on mobile. Same business, two different ways of getting there.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLIP_CARDS_DATA.map((card, i) => (
              <InteractiveFlipCard key={card.id} card={card} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* PILLARS OF OPERATION */}
      <section className="py-24 border-b border-line" id="work">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16"
          >
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[36px] tracking-tight max-w-lg">
              Everything that usually takes six people, from one team.
            </h2>
            <p className="text-mist text-[15px] leading-relaxed max-w-sm">
              We're built to be the only call a growing business needs to make, and we grow with you as your needs do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line divide-y md:divide-y-0 md:divide-x divide-line">
            {PILLARS_DATA.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="py-10 md:py-0 md:px-8 first:pl-0 last:pr-0"
              >
                <span className="font-mono text-[12px] text-moss bg-paper-dim px-3 py-1 rounded-[2px] inline-block mb-6 uppercase tracking-wide">
                  {pillar.tag}
                </span>
                <h3 className="font-space font-semibold text-[21px] text-ink mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-moss leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PORTFOLIO / PREVIEWS */}
      <section className="py-24 border-b border-line overflow-hidden" id="portfolio">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[36px] tracking-tight mb-2">
              Recent work, live.
            </h2>
            <p className="text-mist text-[15px] leading-relaxed">
              A running strip of what we've shipped. Hover to pause and look closer.
            </p>
          </motion.div>
        </div>

        {/* INFINITE MARQUEE WITH IFRAMES */}
        <div className="marquee-mask w-full overflow-hidden">
          <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused] py-4">
            {/* Sequence list */}
            {PORTFOLIO_DATA.map((work) => (
              <PortfolioCard key={work.id} work={work} />
            ))}
            {/* Duplicated for seamless infinite scroll */}
            {PORTFOLIO_DATA.map((work) => (
              <PortfolioCard key={`dup-${work.id}`} work={work} isDuplicate />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section className="py-24 bg-paper-dim border-b border-line" id="philosophy">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">
          <span className="font-mono text-[15px] text-mist font-semibold uppercase tracking-wide pt-1.5 md:w-48 flex-shrink-0">
            // how we work
          </span>
          <blockquote className="font-space font-medium text-[22px] sm:text-[30px] md:text-[34px] leading-snug tracking-tight max-w-3xl text-ink">
            Most agencies deliver and <span className="text-moss">disappear.</span> We stay for the years that come after launch.
          </blockquote>
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
              href="mailto:hello@klvr.co"
              className="bg-ink text-paper hover:bg-moss text-[16px] px-9 py-5 rounded-[3px] inline-flex items-center gap-3 transition-all duration-200 hover:-translate-y-[1.5px] font-mono group shadow-md"
            >
              hello@klvr.co
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-paper pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <span className="font-space font-bold text-2xl tracking-tight select-none block">
                klvr
              </span>
              <p className="text-[13.5px] text-mist leading-relaxed max-w-[220px]">
                One team, everything a growing business needs. Built from Abuja, working anywhere.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-mist font-bold">
                Site
              </h5>
              <ul className="space-y-2.5 text-[13.5px] text-moss">
                <li><a href="#about" className="hover:text-ink transition-colors">About</a></li>
                <li><a href="#work" className="hover:text-ink transition-colors">What we do</a></li>
                <li><a href="#portfolio" className="hover:text-ink transition-colors">Work we've shipped</a></li>
                <li><a href="#faq" className="hover:text-ink transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-mist font-bold">
                Contact
              </h5>
              <ul className="space-y-2.5 text-[13.5px] text-moss">
                <li><a href="mailto:hello@klvr.co" className="hover:text-ink transition-colors">hello@klvr.co</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">X / Twitter</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">Telegram</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-mist font-bold">
                Legal
              </h5>
              <ul className="space-y-2.5 text-[13.5px] text-moss">
                <li><a href="#" className="hover:text-ink transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-line pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-mono text-[12px] text-mist font-mono">
            <span>&copy; 2026 klvr. All rights reserved.</span>
            <a href="#top" className="hover:text-ink transition-colors">
              back to top
            </a>
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

/* PORTFOLIO WORK PREVIEW CARD */
function PortfolioCard({ work, isDuplicate = false }: { work: typeof PORTFOLIO_DATA[number]; isDuplicate?: boolean; key?: any }) {
  return (
    <a
      href={work.href}
      className="block w-[360px] flex-shrink-0 group focus:outline-none"
      aria-hidden={isDuplicate}
      tabIndex={isDuplicate ? -1 : 0}
    >
      {/* Dynamic Iframe Frame wrapper */}
      <div className="relative w-full h-[220px] rounded-lg bg-paper-dim border border-line overflow-hidden group-hover:border-ink transition-all duration-300">
        <iframe
          title={`${work.title} live demo preview`}
          tabIndex={-1}
          srcDoc={work.srcDoc}
          className="w-[400%] h-[400%] border-0 scale-25 origin-top-left pointer-events-none"
        />
        {/* Hover overlay with action cue */}
        <div className="absolute inset-0 bg-ink/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-[13px] text-paper inline-flex items-center gap-1.5 font-medium">
            view project <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
      {/* Meta descriptions */}
      <div className="pt-4 px-1 flex justify-between items-baseline gap-4">
        <div>
          <h4 className="font-space font-semibold text-[17px] text-ink mb-1 group-hover:underline">
            {work.title}
          </h4>
          <p className="text-[13px] text-mist leading-relaxed">
            {work.description}
          </p>
        </div>
        <span className="font-mono text-[10.5px] uppercase tracking-wider text-moss font-bold whitespace-nowrap">
          {work.tag}
        </span>
      </div>
    </a>
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
