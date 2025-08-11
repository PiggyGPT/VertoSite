import { Button } from "@/components/ui/button";
import { University, TrendingUp, Blocks } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-6 sm:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6" data-testid="hero-title">
          Institutional rails to mint, move & monitor stablecoins
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed" data-testid="hero-subtitle">
          As local as M‑Pesa. As seamless as Stripe. As compliant as SWIFT.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button
            onClick={() => scrollToSection("pilot-cta")}
            className="px-8 py-3 verto-gradient text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md"
            data-testid="button-primary-cta"
          >
            Launch Pilot in 90 days
          </button>
          <button
            onClick={() => scrollToSection("risk-review")}
            className="px-8 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
            data-testid="button-secondary-cta"
          >
            Free Risk & Compliance Review →
          </button>
        </div>

        {/* Trust Band */}
        <div className="bg-slate-50 rounded-xl p-6 mb-16 border border-slate-200" data-testid="trust-band">
          <p className="text-slate-600 mb-4 text-sm">Built by leaders at:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            <div className="flex items-center justify-center h-12" title="Fed Reserve">
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-600">
                <text x="30" y="16" textAnchor="middle" className="text-xs font-semibold fill-current">FED</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-12" title="DTCC">
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-600">
                <text x="30" y="16" textAnchor="middle" className="text-xs font-semibold fill-current">DTCC</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-12" title="Moody's">
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-600">
                <text x="30" y="16" textAnchor="middle" className="text-xs font-semibold fill-current">Moody's</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-12" title="PayPal">
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-600">
                <text x="30" y="16" textAnchor="middle" className="text-xs font-semibold fill-current">PayPal</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-12" title="Google">
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-600">
                <text x="30" y="16" textAnchor="middle" className="text-xs font-semibold fill-current">Google</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-12" title="Microsoft">
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-600">
                <text x="30" y="16" textAnchor="middle" className="text-xs font-semibold fill-current">Microsoft</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
