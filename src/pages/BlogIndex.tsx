import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { getAllPosts, type BlogPost } from "../lib/blog";

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title="Theklvr Blog"
        description="Notes on growth, technology, and brand from the team at klvr. Practical, no-fluff articles for anyone building a business."
        canonical="https://www.theklvr.com/blog"
        image="https://www.theklvr.com/og-image.png"
      />

      <Header />

      <section className="pt-40 pb-20 border-b border-line bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold block mb-3">
            Insights
          </span>
          <h1 className="font-space font-semibold text-[32px] sm:text-[44px] md:text-[52px] tracking-tight text-ink leading-tight max-w-2xl mb-4">
            Growth, technology, and brand, written for anyone building a business.
          </h1>
          <p className="text-moss text-[15px] sm:text-[16px] max-w-xl leading-relaxed">
            Not just for our clients. Practical thinking on the systems, strategy, and decisions behind businesses that actually scale.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {!posts && (
            <p className="text-moss text-[14px] font-mono">Loading articles...</p>
          )}
          {posts && posts.length === 0 && (
            <p className="text-moss text-[14px] font-mono">No articles published yet.</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {posts?.map((post, idx) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-line">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-moss font-bold block mb-2">
                    {post.category} • {post.date}
                  </span>
                  <h2 className="font-space font-bold text-[18px] text-ink leading-snug mb-2 group-hover:text-moss transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[13.5px] text-moss leading-relaxed mb-2">
                    {post.description}
                  </p>
                  <span className="font-mono text-[11px] text-mist">{post.readTime}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
