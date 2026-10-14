import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectBrowserCard } from "../components/ProjectBrowserCard";
import { Seo } from "../components/Seo";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projectCanonical,
  projectPath,
  relationshipLabel,
} from "../content/projects";

const SITE_URL = "https://www.theklvr.com";

export function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const canonical = projectCanonical(project);
  const { previous, next } = getAdjacentProjects(project.slug);
  const relationship = relationshipLabel(project.relationshipToKLVR);
  const metadata = [
    ["Category", project.category],
    ["Project type", relationship],
    ["Year", project.year?.toString()],
    ["Industry", project.industry],
    ["Services", project.services.join(", ")],
    ["Technologies", project.technologies?.join(", ")],
  ].filter((item): item is [string, string] => Boolean(item[1]));
  const structuredWorkType =
    project.relationshipToKLVR === "owned-product" ? "SoftwareApplication" : "CreativeWork";

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title={project.seoTitle}
        description={project.seoDescription}
        canonical={canonical}
        image={`${SITE_URL}${project.previewImage}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${canonical}#webpage`,
              url: canonical,
              name: project.seoTitle,
              description: project.seoDescription,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#organization` },
              primaryImageOfPage: `${SITE_URL}${project.previewImage}`,
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
                  item: `${SITE_URL}/products`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: project.name,
                  item: canonical,
                },
              ],
            },
            {
              "@type": structuredWorkType,
              "@id": `${canonical}#project`,
              name: project.name,
              url: project.liveUrl,
              image: `${SITE_URL}${project.previewImage}`,
              description: project.fullDescription,
              creator:
                project.relationshipToKLVR === "owned-product"
                  ? { "@id": `${SITE_URL}/#organization` }
                  : undefined,
              provider: { "@id": `${SITE_URL}/#organization` },
              applicationCategory:
                structuredWorkType === "SoftwareApplication" ? project.category : undefined,
            },
          ],
        }}
      />

      <Header />

      <main>
        <article>
          <section className="pt-40 pb-14 border-b border-line bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <nav
                aria-label="Breadcrumb"
                className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold mb-8 flex flex-wrap gap-2"
              >
                <Link to="/" className="hover:text-ink transition-colors">
                  Home
                </Link>
                <span className="text-mist">/</span>
                <Link to="/products" className="hover:text-ink transition-colors">
                  Projects & Work
                </Link>
                <span className="text-mist">/</span>
                <span>{project.name}</span>
              </nav>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-moss hover:text-ink transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects & Work
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-[0.66fr_0.34fr] gap-10 lg:gap-16 items-end">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold mb-4">
                    {project.category}
                  </p>
                  <h1 className="font-space font-semibold text-[42px] sm:text-[64px] md:text-[86px] tracking-tight text-ink leading-[0.95] uppercase mb-7">
                    {project.name}.
                  </h1>
                  <p className="text-moss text-[17px] sm:text-[20px] leading-relaxed max-w-2xl">
                    {project.shortDescription}
                  </p>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {metadata.map(([label, value]) => (
                    <div key={label} className="border-t border-line pt-4">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-mist font-bold mb-1">
                        {label}
                      </dt>
                      <dd className="text-[14px] leading-relaxed text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 bg-paper-dim border-b border-line">
            <div className="max-w-6xl mx-auto px-6">
              <ProjectBrowserCard
                project={project}
                priority
                interactive={false}
                className="project-browser-card--detail"
              />
            </div>
          </section>

          <section className="py-16 sm:py-20 bg-white border-b border-line">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-10 lg:gap-16">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold block mb-3">
                  Project Overview
                </span>
                <h2 className="font-space font-semibold text-[26px] sm:text-[34px] tracking-tight text-ink leading-tight">
                  What this project is and how it fits KLVR's work.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[17px] text-ink leading-relaxed">
                  {project.fullDescription}
                </p>
                {project.overview.map((paragraph) => (
                  <p key={paragraph} className="text-moss text-[15.5px] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-ink text-paper hover:bg-moss text-[14px] px-6 py-4 rounded-[3px] inline-flex items-center gap-3 transition-all duration-200 hover:-translate-y-[1.5px] font-mono group shadow-md"
                >
                  Visit Website
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 bg-paper">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex flex-wrap gap-3">
                {previous && (
                  <Link
                    to={projectPath(previous)}
                    className="inline-flex items-center gap-2 border border-line bg-white px-4 py-3 rounded-full text-[13px] font-space font-bold hover:border-ink/30 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Project
                  </Link>
                )}
                {next && (
                  <Link
                    to={projectPath(next)}
                    className="inline-flex items-center gap-2 border border-line bg-white px-4 py-3 rounded-full text-[13px] font-space font-bold hover:border-ink/30 transition-colors"
                  >
                    Next Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-widest text-moss hover:text-ink transition-colors"
              >
                Back to All Projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
