import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { DETAILED_BLOG_POSTS_DATA } from "../data";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = DETAILED_BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const canonical = `https://www.theklvr.com/blog/${post.slug}`;
  const otherPosts = DETAILED_BLOG_POSTS_DATA.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title={`${post.title} | klvr Blog`}
        description={post.description}
        canonical={canonical}
        image={post.image}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Organization", name: "klvr", url: "https://www.theklvr.com/" },
          publisher: { "@type": "Organization", name: "klvr", url: "https://www.theklvr.com/" },
          mainEntityOfPage: canonical
        }}
      />

      <Header />

      <article className="pt-40 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-moss font-mono text-[12px] uppercase tracking-wider hover:text-ink transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Articles
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="font-mono text-[10px] font-bold text-moss uppercase tracking-widest bg-paper-dim px-2.5 py-1 rounded border border-line">
              {post.category}
            </span>
            <span className="font-mono text-[11px] text-mist">{post.date}</span>
            <span className="font-mono text-[11px] text-mist">•</span>
            <span className="font-mono text-[11px] text-moss">{post.readTime}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-space font-bold text-[28px] sm:text-[38px] md:text-[44px] text-ink leading-tight tracking-tight mb-8"
          >
            {post.title}
          </motion.h1>

          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 shadow-sm border border-line">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose-content">
            <p className="text-ink font-sans text-[16px] sm:text-[17px] leading-relaxed mb-10 font-medium">
              {post.intro}
            </p>

            {post.sections.map((section, sidx) => (
              <div key={sidx} className="mb-10">
                <h2 className="font-space font-bold text-[20px] sm:text-[22px] text-ink tracking-tight mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pidx) => (
                    <p key={pidx} className="text-mist font-sans text-[15px] sm:text-[16px] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-line mt-12 pt-8 flex items-center gap-3">
            <div className="flex -space-x-2 select-none">
              <div className="w-9 h-9 rounded-full bg-ink text-paper font-space font-bold text-[12px] flex items-center justify-center border-2 border-white">
                S
              </div>
              <div className="w-9 h-9 rounded-full bg-moss text-paper font-space font-bold text-[12px] flex items-center justify-center border-2 border-white">
                J
              </div>
            </div>
            <span className="text-[13px] font-mono text-moss">Written by Saviour &amp; James • klvr</span>
          </div>

          <div className="mt-10 bg-paper-dim border border-line rounded-2xl p-8 text-center">
            <h3 className="font-space font-bold text-[20px] text-ink mb-2">Tell us what you're building.</h3>
            <p className="text-moss text-[14px] mb-6">One team for your website, software, brand, and growth. Say hello.</p>
            <a
              href="mailto:klvrcorp@gmail.com"
              className="bg-ink text-paper hover:bg-moss text-[14px] px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-[1.5px] font-mono group shadow-md"
            >
              klvrcorp@gmail.com
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="py-20 border-t border-line bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="font-space font-bold text-[20px] text-ink mb-10">More from the blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherPosts.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="block group">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-line">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-moss font-bold block mb-1.5">
                    {p.category}
                  </span>
                  <h4 className="font-space font-bold text-[15px] text-ink leading-snug group-hover:text-moss transition-colors">
                    {p.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
