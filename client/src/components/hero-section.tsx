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
    <section id="hero" className="relative pt-32 pb-16 px-6 sm:px-8 overflow-hidden">
      {/* Vibrant Brand Color Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-verto-purple/20 via-verto-blue/15 to-verto-green/20 dark:from-verto-purple/30 dark:via-verto-blue/25 dark:to-verto-green/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-verto-orange/10 via-transparent to-verto-purple/15 dark:from-verto-orange/20 dark:via-transparent dark:to-verto-purple/25"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-verto-blue/20 dark:bg-verto-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-verto-green/20 dark:bg-verto-green/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-verto-orange/15 dark:bg-verto-orange/25 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-slate-900 dark:text-white tracking-tight" data-testid="hero-title">
              The Institutional Operating System for Stablecoins

            </h1>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed" data-testid="hero-subtitle">
            Mint, move and monitor stablecoins on any chain — with retail reach and institutional trust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection("pilot-cta")}
              className="group px-10 py-4 verto-gradient text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              data-testid="button-primary-cta"
            >
              <span>Launch Pilot in 90 days</span>

            </button>
            <button
              onClick={() => scrollToSection("risk-review")}
              className="px-10 py-4 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-sm transition-all duration-300"
              data-testid="button-secondary-cta"
            >
              Free Operations Review
              
            </button>
          </div>

          {/* Trust Logos - Balanced Spacing */}
          <div className="max-w-4xl mx-auto" data-testid="trust-logos">
            <p className="text-center text-slate-600 dark:text-slate-400 mb-4 text-sm font-medium">Built by leaders at</p>
            <div className="flex justify-center items-center gap-x-8 md:gap-x-10 lg:gap-x-12 flex-wrap gap-y-4">
              <div className="flex items-center justify-center h-8">
                <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Federal Reserve</span>
              </div>
              <div className="flex items-center justify-center h-8">
                <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">DTCC</span>
              </div>
              <div className="flex items-center justify-center h-8">
                <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Moody's</span>
              </div>
              <div className="flex items-center justify-center h-8">
                <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">PayPal</span>
              </div>
              <div className="flex items-center justify-center h-8">
                <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Google</span>
              </div>
              <div className="flex items-center justify-center h-8">
                <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Microsoft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
