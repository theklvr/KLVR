import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Twitter,
  Quote,
} from "lucide-react";
import { SpaceBackground } from "../components/SpaceBackground";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { ProjectMarquee } from "../components/ProjectMarquee";
import { homeSeo } from "../content/seo";
import {
  faqItems,
  services,
  siteSettings,
  teamMembers,
  testimonials,
  type FaqEntry,
  type Service,
} from "../lib/content";

const DEFAULT_SITE_SETTINGS = siteSettings;
const DEFAULT_SERVICES_DATA = services;
const DEFAULT_TESTIMONIALS_DATA = testimonials;
const DEFAULT_FAQ_DATA = faqItems;
const DEFAULT_TEAM_DATA = teamMembers;

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const siteSettings = DEFAULT_SITE_SETTINGS;
  const services = DEFAULT_SERVICES_DATA;
  const testimonials = DEFAULT_TESTIMONIALS_DATA;
  const faqItems = DEFAULT_FAQ_DATA;
  const teamMembers = DEFAULT_TEAM_DATA;

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const hashTarget = location.hash ? location.hash.replace(/^#/, "") : "";
    const target = state?.scrollTo ?? hashTarget;

    if (target) {
      const el = document.getElementById(target);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }

      if (state?.scrollTo) {
        navigate("/", { replace: true, state: null });
      }
    }
  }, [location.hash, location.state, navigate]);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title={homeSeo.title}
        description={homeSeo.description}
        canonical={homeSeo.canonical}
        image={homeSeo.image}
        jsonLd={homeSeo.jsonLd}
      />

      <Header />

      {/* HERO SECTION */}
      <section id="top" className="h-screen min-h-[700px] sm:min-h-[780px] md:min-h-[850px] bg-[#020504] text-white relative overflow-hidden flex flex-col justify-center pt-24 pb-12">
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
            <p className="text-white/70 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto mt-6">
              {siteSettings.heroSubheading}
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="border-line" />

      {/* ABOUT SECTION (drop-cap writeup) */}
      <section className="py-20 border-b border-line bg-paper" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-space font-semibold text-[26px] sm:text-[34px] md:text-[38px] tracking-tight text-ink leading-tight mb-8">
              {siteSettings.aboutHeading}
            </h2>
            <div className="space-y-5 font-sans text-ink/85 text-[17px] sm:text-[18px] leading-[1.75]">
              {siteSettings.aboutText.split("\n\n").map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "first-letter:font-space first-letter:font-bold first-letter:text-[52px] sm:first-letter:text-[60px] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1.5 first-letter:text-ink"
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <ServiceCard key={service._id} service={service} index={idx} />
            ))}
          </div>

          <div className="mt-12">
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-black text-white hover:bg-neutral-800 text-[13px] px-6 py-3 rounded-full font-space font-bold tracking-wide inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-[1.5px]"
            >
              Get in contact
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE CAROUSEL */}
      <section
        className="relative py-24 bg-[#D4ED31] border-b border-line overflow-hidden"
        id="projects"
      >
        <div className="max-w-6xl mx-auto px-6 mb-14">
          <div className="text-left select-none max-w-2xl">
            <h2 className="font-space font-semibold text-[32px] md:text-[42px] tracking-tight text-ink mb-3">
              Product Showcase
            </h2>
            <p className="text-moss text-[15px] font-sans leading-relaxed">
              Selected KLVR products, client projects and digital work shown as
              live website previews.
            </p>
          </div>
        </div>
        <ProjectMarquee />
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
            <p className="text-moss text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              {siteSettings.contactSubheading}
            </p>
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

/* SERVICE CARD: every service visible at a glance. The drone card plays TYS footage. */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isDrone = service.anchorId === "drone-experiences";
  return (
    <motion.article
      id={service.anchorId}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`group relative scroll-mt-28 overflow-hidden rounded-2xl border p-7 flex flex-col min-h-[360px] transition-all duration-300 hover:-translate-y-1 ${
        isDrone
          ? "border-transparent bg-[#0B1026] text-white shadow-lg"
          : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.25)]"
      }`}
    >
      {isDrone && (
        <>
          <video
            src="/Assets/tys/home-hero.mp4"
            poster="/Assets/tys/home-hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-45 transition-opacity duration-500 group-hover:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-[#0B1026]/70 to-[#0B1026]/20" aria-hidden="true" />
        </>
      )}
      <div className="relative flex items-center justify-between mb-8">
        <span className={`font-mono text-[12px] ${isDrone ? "text-white/60" : "text-neutral-400"}`}>{service.num}</span>
        {isDrone ? (
          <span className="font-mono text-[10px] uppercase tracking-widest rounded-full bg-[#D4ED31] text-black px-2.5 py-1">New</span>
        ) : (
          <span className="h-2 w-2 rounded-full bg-[#D4ED31] ring-4 ring-[#D4ED31]/20" aria-hidden="true" />
        )}
      </div>
      <h3 className={`relative font-space font-bold text-[21px] leading-tight mb-3 ${isDrone ? "text-white" : "text-black"}`}>
        {service.title}
      </h3>
      <p className={`relative text-[14px] leading-relaxed mb-6 ${isDrone ? "text-white/80" : "text-neutral-500"}`}>
        {service.description}
      </p>
      <ul className="relative mt-auto flex flex-wrap gap-1.5">
        {service.categories.map((cat) => (
          <li
            key={cat}
            className={`text-[11.5px] rounded-full px-3 py-1 ${
              isDrone ? "border border-white/25 text-white/90" : "border border-neutral-200 text-neutral-700 bg-neutral-50"
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
      {isDrone && (
        <a
          href="https://tellyourstory.theklvr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white text-black text-[13px] font-space font-bold px-5 py-2.5 transition-transform hover:-translate-y-0.5"
        >
          Visit TYS <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </motion.article>
  );
}

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
