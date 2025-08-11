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
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight" data-testid="hero-title">
          Unified rails to mint, move, and reconcile stablecoins on any chain.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 font-medium leading-relaxed" data-testid="hero-subtitle">
          As seamless as Stripe. As compliant as SWIFT. As local as M‑Pesa.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => scrollToSection("pilot-cta")}
            className="px-10 py-4 verto-gradient text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-xl"
            data-testid="button-primary-cta"
          >
            Free 90-day Pilot Strategy
          </button>
          <button
            onClick={() => scrollToSection("risk-review")}
            className="px-10 py-4 border-2 border-slate-300 text-slate-700 text-lg font-semibold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all transform hover:scale-105"
            data-testid="button-secondary-cta"
          >
            Free Risk & Compliance Review →
          </button>
        </div>

        {/* Trust Band */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-20 border border-slate-200" data-testid="trust-band">
          <p className="text-slate-600 mb-6 font-medium">Built by leaders at:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
            <div className="text-slate-500 font-semibold text-sm">Federal Reserve</div>
            <div className="text-slate-500 font-semibold text-sm">DTCC</div>
            <div className="text-slate-500 font-semibold text-sm">DOJ</div>
            <div className="text-slate-500 font-semibold text-sm">Moody's</div>
            <div className="text-slate-500 font-semibold text-sm">PayPal</div>
            <div className="text-slate-500 font-semibold text-sm">Google</div>
            <div className="text-slate-500 font-semibold text-sm">Microsoft</div>
          </div>
        </div>
      </div>
    </section>
  );
}
