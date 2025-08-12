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
    <section id="hero" className="relative pt-32 pb-24 px-6 sm:px-8 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-verto-purple/5 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-verto-blue/10 dark:bg-verto-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-verto-green/10 dark:bg-verto-green/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="hero-title">
            Institutional rails to mint, move & monitor stablecoins
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed" data-testid="hero-subtitle">
            As locally as M‑Pesa. As seamlessly as Stripe. As compliantly as SWIFT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
              className="px-10 py-4 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-sm transition-all duration-300"
              data-testid="button-secondary-cta"
            >
              Free Risk & Compliance Review
            </button>
          </div>

          {/* Trust Logos - Single Row without Borders */}
          <div className="mb-16" data-testid="trust-logos">
            <p className="text-center text-slate-600 dark:text-slate-400 mb-6 text-sm font-medium">Built by leaders at:</p>
            <div className="flex justify-center items-center gap-x-6 md:gap-x-8 lg:gap-x-10 flex-wrap">
              <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm whitespace-nowrap">FED</div>
              <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm whitespace-nowrap">DTCC</div>
              <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm whitespace-nowrap">Moody's</div>
              <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm whitespace-nowrap">PayPal</div>
              <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm whitespace-nowrap">Google</div>
              <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm whitespace-nowrap">Microsoft</div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
