import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const homeAnchor = (hash: string) => (isHome ? hash : `/${hash}`);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);

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

  const [isPastHero, setIsPastHero] = useState(!isHome);
  useEffect(() => {
    if (!isHome) {
      setIsPastHero(true);
      return;
    }
    function handleScroll() {
      setIsPastHero(window.scrollY > 450);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <>
      {/* SCROLLING HEADER - LOGO ONLY */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none h-24">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
          <Link to="/" className="flex items-center gap-1 group select-none pointer-events-auto">
            <span className={`font-space font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
              isPastHero ? "text-ink group-hover:text-moss" : "text-klvr group-hover:text-white"
            }`}>
              KLVR.
            </span>
          </Link>
        </div>
      </div>

      {/* HEADER / NAVIGATION - FIXED FLOATING CAPSULE */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4 pointer-events-none"
        id="top-nav"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-end">
          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center rounded-full p-2 pl-6 pr-2 transition-all duration-300 pointer-events-auto ${
            isPastHero
              ? "bg-white border border-[#14170F]/15 text-ink shadow-[0_12px_40px_rgba(20,23,15,0.15)] hover:border-[#14170F]/25"
              : "bg-white/[0.03] backdrop-blur-2xl border border-white/15 text-white shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.15),0_12px_40px_rgba(0,0,0,0.7)] hover:border-white/25"
          }`}>
            <Link
              to="/"
              className={`transition-colors duration-200 text-[13px] font-sans font-medium px-2 ${
                isPastHero ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </Link>

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
                      href={homeAnchor("#pillar-build")}
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>The Build</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Websites, apps, systems</div>
                    </a>
                    <a
                      href={homeAnchor("#pillar-brand")}
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>The Brand</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Content, social, KOLs, community</div>
                    </a>
                    <a
                      href={homeAnchor("#pillar-partnership")}
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
                      href={homeAnchor("#projects")}
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
                      href={homeAnchor("#why-choose-us")}
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setCompanyDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>About Us</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Who we are and our mission</div>
                    </a>
                    <a
                      href={homeAnchor("#team")}
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setCompanyDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>Team</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Meet the founders and developers</div>
                    </a>
                    <Link
                      to="/blog"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        isPastHero ? "hover:bg-ink/5" : "hover:bg-white/5"
                      }`}
                      onClick={() => setCompanyDropdownOpen(false)}
                    >
                      <div className={`font-sans text-[13.5px] font-semibold ${isPastHero ? "text-ink" : "text-white"}`}>Blog</div>
                      <div className={`font-mono text-[10.5px] ${isPastHero ? "text-[#59634B]" : "text-gray-400"} mt-0.5`}>Insights, letters & perspectives</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={homeAnchor("#projects")}
              className={`transition-colors duration-200 text-[13px] font-sans font-medium px-2 ${
                isPastHero ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              Projects
            </a>

            <div className={`h-4 w-[1px] mx-2 ${isPastHero ? "bg-ink/20" : "bg-white/20"}`} />

            <a
              href={homeAnchor("#contact")}
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
                <Link
                  to="/"
                  className="block py-2 border-b border-white/5 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <div className="py-2 border-b border-white/5">
                  <span className="block text-[11px] uppercase tracking-wider text-[#7C8370] font-bold mb-2">
                    Services
                  </span>
                  <div className="pl-4 space-y-2.5 mt-1">
                    <a
                      href={homeAnchor("#pillar-build")}
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Build
                    </a>
                    <a
                      href={homeAnchor("#pillar-brand")}
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Brand
                    </a>
                    <a
                      href={homeAnchor("#pillar-partnership")}
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
                      href={homeAnchor("#why-choose-us")}
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href={homeAnchor("#team")}
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Team
                    </a>
                    <Link
                      to="/blog"
                      className="block text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </div>
                </div>

                <a
                  href={homeAnchor("#projects")}
                  className="block py-2 border-b border-white/5 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>

                <a
                  href={homeAnchor("#contact")}
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
    </>
  );
}
