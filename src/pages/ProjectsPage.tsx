import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectBrowserCard } from "../components/ProjectBrowserCard";
import { Seo } from "../components/Seo";
import { projects } from "../content/projects";

const SITE_URL = "https://www.theklvr.com";

export function ProjectsPage() {
  const canonical = `${SITE_URL}/products`;

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title="Projects & Work | KLVR"
        description="Explore selected KLVR products, client projects and digital work through live website previews and project case studies."
        canonical={canonical}
        image={`${SITE_URL}/og-image.png`}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${canonical}#webpage`,
              url: canonical,
              name: "Projects & Work | KLVR",
              description:
                "Selected KLVR products, client projects and digital work with internal project case studies.",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${canonical}#breadcrumbs`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projects & Work",
                  item: canonical,
                },
              ],
            },
            {
              "@type": "ItemList",
              "@id": `${canonical}#projects`,
              name: "KLVR Projects & Work",
              itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${SITE_URL}/projects/${project.slug}`,
                name: project.name,
              })),
            },
          ],
        }}
      />

      <Header />

      <main>
        <section className="pt-40 pb-16 border-b border-line bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <nav
              aria-label="Breadcrumb"
              className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold mb-5 flex flex-wrap gap-2"
            >
              <Link to="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <span className="text-mist">/</span>
              <span>Projects & Work</span>
            </nav>
            <h1 className="font-space font-semibold text-[34px] sm:text-[48px] md:text-[62px] tracking-tight text-ink leading-tight max-w-4xl mb-6">
              Products and work shaped through strategy, design and technology.
            </h1>
            <p className="text-moss text-[16px] sm:text-[18px] max-w-2xl leading-relaxed">
              A focused selection of KLVR-owned products, client websites and
              collaborative digital work. Open any preview for project context
              and a live website link.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-paper">
          <div className="max-w-6xl mx-auto px-6">
            <div className="project-grid" aria-label="All selected projects">
              {projects.map((project, index) => (
                <ProjectBrowserCard
                  key={project.id}
                  project={project}
                  priority={index < 2}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
