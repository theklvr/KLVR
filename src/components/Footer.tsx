import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const homeAnchor = (hash: string) => (isHome ? hash : `/${hash}`);

  const [footerEmail, setFooterEmail] = useState("");
  const [footerMessage, setFooterMessage] = useState("");

  return (
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
                <li><a href={homeAnchor("#services")} className="hover:text-ink transition-colors">Services</a></li>
                <li><a href={homeAnchor("#why-choose-us")} className="hover:text-ink transition-colors">Approach</a></li>
                <li><a href={homeAnchor("#projects")} className="hover:text-ink transition-colors">Showcase</a></li>
                <li><Link to="/blog" className="hover:text-ink transition-colors">Blog</Link></li>
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
          <a href={homeAnchor("#top")} className="hover:text-ink transition-colors font-medium tracking-wide">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
