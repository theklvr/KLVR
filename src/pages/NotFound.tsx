import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-klvr selection:text-ink relative overflow-x-hidden">
      <Seo
        title="Page Not Found | KLVR"
        description="The page you requested could not be found on the KLVR website."
        canonical="https://www.theklvr.com/404"
        image="https://www.theklvr.com/og-image.png"
        robots="noindex, follow"
      />
      <Header />
      <main className="min-h-[70vh] pt-40 pb-24 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <p className="font-mono text-[11px] uppercase tracking-widest text-moss font-bold mb-3">
            404
          </p>
          <h1 className="font-space font-semibold text-[34px] sm:text-[48px] md:text-[56px] tracking-tight text-ink leading-tight max-w-2xl mb-5">
            This page is not available.
          </h1>
          <p className="text-moss text-[15px] sm:text-[16px] max-w-xl leading-relaxed mb-8">
            The link may have changed, or the page may no longer exist.
          </p>
          <Link
            to="/"
            className="bg-ink text-paper hover:bg-moss text-[14px] px-6 py-3 rounded-full inline-flex items-center transition-all duration-200 hover:-translate-y-[1.5px] font-mono shadow-md"
          >
            Back to KLVR
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
