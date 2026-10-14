import { Link, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { getLandingPage } from "../content/landingPages";

const SITE_URL = "https://www.theklvr.com";

export function LandingPage({ slug }: { slug: string }) {
  const page = getLandingPage(slug);

  if (!page) {
    return <Navigate to="/404" replace />;
  }

  const canonical = `${SITE_URL}${page.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(page.slug.startsWith("/solutions/")
      ? [{ label: "Solutions", href: "/#services" }]
      : []),
    { label: page.h1, href: page.slug },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title={page.title}
        description={page.metaDescription}
        canonical={canonical}
        image="https://www.theklvr.com/og-image.png"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${canonical}#webpage`,
              url: canonical,
              name: page.title,
              description: page.metaDescription,
              isPartOf: { "@id": "https://www.theklvr.com/#website" },
              about: { "@id": "https://www.theklvr.com/#organization" },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${canonical}#breadcrumbs`,
              itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.label,
                item: `${SITE_URL}${item.href === "/" ? "/" : item.href}`,
              })),
            },
            {
              "@type": page.slug === "/products" ? "CollectionPage" : "Service",
              "@id": `${canonical}#primary`,
              name: page.h1,
              description: page.intro,
              provider: { "@id": "https://www.theklvr.com/#organization" },
              areaServed: ["Nigeria", "Worldwide"],
              serviceType: page.eyebrow,
            },
          ],
        }}
      />

      <Header />

      <main>
        <section className="pt-40 pb-20 border-b border-line bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <nav
              aria-label="Breadcrumb"
              className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold mb-5 flex flex-wrap gap-2"
            >
              {breadcrumbs.map((item, index) => (
                <span key={item.href} className="inline-flex gap-2">
                  {index > 0 && <span className="text-mist">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span>{page.eyebrow}</span>
                  ) : (
                    <Link to={item.href} className="hover:text-ink transition-colors">
                      {item.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-space font-semibold text-[32px] sm:text-[44px] md:text-[56px] tracking-tight text-ink leading-tight max-w-4xl mb-6"
            >
              {page.h1}
            </motion.h1>
            <p className="text-moss text-[16px] sm:text-[18px] max-w-2xl leading-relaxed">
              {page.intro}
            </p>
          </div>
        </section>

        <section className="py-20 border-b border-line bg-paper">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold block mb-3">
                Capabilities
              </span>
              <h2 className="font-space font-semibold text-[26px] sm:text-[34px] tracking-tight text-ink leading-tight">
                Built around the work, not a fixed package.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {page.capabilities.map((capability) => (
                <div
                  key={capability}
                  className="bg-white border border-line rounded-2xl px-5 py-4 text-[13.5px] text-ink leading-relaxed"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-line bg-paper-dim">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-line rounded-2xl p-8">
              <h2 className="font-space font-bold text-[20px] text-ink mb-4">
                Who This Serves
              </h2>
              <p className="text-moss text-[14.5px] leading-relaxed">
                {page.serves}
              </p>
            </div>
            <div className="bg-white border border-line rounded-2xl p-8">
              <h2 className="font-space font-bold text-[20px] text-ink mb-4">
                How KLVR Delivers
              </h2>
              <p className="text-moss text-[14.5px] leading-relaxed">
                {page.approach}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-line bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-10">
              <span className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold block mb-3">
                Relevant Proof
              </span>
              <h2 className="font-space font-semibold text-[26px] sm:text-[34px] tracking-tight text-ink leading-tight">
                Authentic examples and useful context.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.examples.map((example) => (
                <p
                  key={example}
                  className="border-t border-line pt-5 text-moss text-[14px] leading-relaxed"
                >
                  {example}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-paper">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold block mb-3">
                Keep Exploring
              </span>
              <div className="flex flex-wrap gap-3">
                {page.internalLinks.map((link) =>
                  link.href.startsWith("http") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-space font-bold text-ink border border-line rounded-full px-4 py-2 hover:bg-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-[13px] font-space font-bold text-ink border border-line rounded-full px-4 py-2 hover:bg-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
            <a
              href="mailto:klvrcorp@gmail.com"
              className="bg-ink text-paper hover:bg-moss text-[14px] px-6 py-4 rounded-[3px] inline-flex items-center gap-3 transition-all duration-200 hover:-translate-y-[1.5px] font-mono group shadow-md"
            >
              {page.cta}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
