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
    <section id="hero" className="relative pt-32 pb-24 px-6 sm:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-verto-purple/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-verto-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-verto-green/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 tracking-tight" data-testid="hero-title">
            Institutional rails to mint, move & monitor stablecoins
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light" data-testid="hero-subtitle">
            As locally as M‑Pesa. As seamlessly as Stripe. As compliantly as SWIFT.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button
              onClick={() => scrollToSection("pilot-cta")}
              className="group px-10 py-4 verto-gradient text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              data-testid="button-primary-cta"
            >
              <span>Launch Pilot in 90 days</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection("risk-review")}
              className="px-10 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm transition-all duration-300"
              data-testid="button-secondary-cta"
            >
              Free Risk & Compliance Review
            </button>
          </div>
        </div>

        {/* Trust Band */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-sm" data-testid="trust-band">
          <p className="text-slate-500 mb-8 text-sm font-medium text-center tracking-wide uppercase">Built by leaders at:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="flex items-center justify-center h-16 px-4 hover:scale-105 transition-transform" title="Fed Reserve">
              <svg width="80" height="32" viewBox="0 0 80 32" className="text-slate-400 hover:text-slate-600 transition-colors">
                <text x="40" y="20" textAnchor="middle" className="text-sm font-bold fill-current">FED</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-16 px-4 hover:scale-105 transition-transform" title="DTCC">
              <svg width="80" height="32" viewBox="0 0 80 32" className="text-slate-400 hover:text-slate-600 transition-colors">
                <text x="40" y="20" textAnchor="middle" className="text-sm font-bold fill-current">DTCC</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-16 px-4 hover:scale-105 transition-transform" title="Moody's">
              <svg width="80" height="32" viewBox="0 0 80 32" className="text-slate-400 hover:text-slate-600 transition-colors">
                <text x="40" y="20" textAnchor="middle" className="text-sm font-bold fill-current">Moody's</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-16 px-4 hover:scale-105 transition-transform" title="PayPal">
              <svg width="80" height="32" viewBox="0 0 80 32" className="text-slate-400 hover:text-slate-600 transition-colors">
                <text x="40" y="20" textAnchor="middle" className="text-sm font-bold fill-current">PayPal</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-16 px-4 hover:scale-105 transition-transform" title="Google">
              <svg width="80" height="32" viewBox="0 0 80 32" className="text-slate-400 hover:text-slate-600 transition-colors">
                <text x="40" y="20" textAnchor="middle" className="text-sm font-bold fill-current">Google</text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-16 px-4 hover:scale-105 transition-transform" title="Microsoft">
              <svg width="80" height="32" viewBox="0 0 80 32" className="text-slate-400 hover:text-slate-600 transition-colors">
                <text x="40" y="20" textAnchor="middle" className="text-sm font-bold fill-current">Microsoft</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
