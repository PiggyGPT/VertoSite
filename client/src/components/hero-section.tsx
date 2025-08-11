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
        <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight" data-testid="hero-title">
          Institutional rails to<br />mint, move & monitor stablecoins
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
            Free 90 day pilot
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center">
            <div className="w-8 h-8 bg-slate-400 rounded opacity-60" title="Fed Reserve"></div>
            <div className="w-8 h-8 bg-slate-400 rounded opacity-60" title="DTCC"></div>
            <div className="w-8 h-8 bg-slate-400 rounded opacity-60" title="Moody's"></div>
            <div className="w-8 h-8 bg-slate-400 rounded opacity-60" title="PayPal"></div>
            <div className="w-8 h-8 bg-slate-400 rounded opacity-60" title="Google"></div>
            <div className="w-8 h-8 bg-slate-400 rounded opacity-60" title="Microsoft"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
