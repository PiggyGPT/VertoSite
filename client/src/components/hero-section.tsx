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
        <h1 className="text-5xl md:text-6xl font-bold text-verto-blue mb-8 leading-tight" data-testid="hero-title">
          Institutional Stablecoin Rails,<br />
          <span className="text-verto-purple">From Concept to Live</span>
        </h1>
        <p className="text-xl md:text-2xl text-verto-gray-600 mb-4 font-medium" data-testid="hero-subtitle">
          Unified rails to mint, move, and reconcile stablecoins on any chain.
        </p>
        <p className="text-lg text-verto-gray-500 mb-12" data-testid="hero-description">
          As seamless as Stripe. As compliant as SWIFT. As local as M‑Pesa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection("pilot-cta")}
            className="px-8 py-4 bg-verto-purple text-white text-lg font-semibold rounded-xl hover:bg-verto-purple/90 transition-all transform hover:scale-105 shadow-lg"
            data-testid="button-primary-cta"
          >
            Get Your Live Pilot Blueprint →
          </Button>
          <Button
            onClick={() => scrollToSection("risk-review")}
            variant="outline"
            className="px-8 py-4 border-2 border-verto-purple text-verto-purple text-lg font-semibold rounded-xl hover:bg-verto-purple hover:text-white transition-all transform hover:scale-105"
            data-testid="button-secondary-cta"
          >
            Free Risk & Compliance Review →
          </Button>
        </div>

        {/* Trust Band */}
        <div className="bg-verto-gray-50 rounded-2xl p-8 mb-20" data-testid="trust-band">
          <p className="text-verto-gray-600 mb-4">Trusted by leaders who have scaled</p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-verto-gray-500">
            <div className="flex items-center gap-2">
              <University className="w-5 h-5 text-verto-purple" />
              Fed‑regulated systems
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-verto-green" />
              $90B+ payment networks
            </div>
            <div className="flex items-center gap-2">
              <Blocks className="w-5 h-5 text-verto-blue" />
              Blockchain infrastructure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
