import { ArrowRight, Landmark, ArrowRightLeft, CandlestickChart, Rocket, Phone } from "lucide-react";
import { Link } from "wouter";
import { useCalendlyModal } from "./calendly-modal";

interface CTAItem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  bgColorClass?: string; // Legacy
  bgGradient?: string; // Inline gradient for better control
  pillarKey?: string; // For scrolling to specific pillars
  glowColor?: string; // For hover glow effect
}

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  customCTAs?: CTAItem[];
}

export default function HeroSection({ 
  title = "Digital Asset Operations Platform", 
  subtitle = "Activate your network to orchestrate digital asset trading, payments, and distribution on any chain, with AI-powered security & compliance.",
  description = "Securely access public chains for trading, payments, and asset distribution with AI-powered security and compliance.",
  customCTAs
}: HeroSectionProps = {}) {
  const { openModal, CalendlyModal } = useCalendlyModal();

  // Default CTAs for homepage - link to landing pages
  const defaultCTAs: CTAItem[] = [
    {
      title: "Launch Stablecoin",
      subtitle: "For Financial Institutions",
      icon: Landmark,
      href: "/launch-stablecoin",
      bgGradient: "linear-gradient(135deg, rgba(82, 178, 255, 0.06), rgba(82, 178, 255, 0.02))",
      pillarKey: undefined
    },
    {
      title: "Offer DeFi Products",
      subtitle: "For Digital Asset Exchanges",
      icon: ArrowRightLeft,
      href: "/offer-defi-products",
      bgGradient: "linear-gradient(135deg, rgba(191, 115, 255, 0.06), rgba(191, 115, 255, 0.02))",
      pillarKey: undefined
    },
    {
      title: "Secure DeFi Ops",
      subtitle: "For Trading Firms & Funds",
      icon: CandlestickChart,
      href: "/secure-defi-ops",
      bgGradient: "linear-gradient(135deg, rgba(255, 152, 0, 0.06), rgba(255, 152, 0, 0.02))",
      pillarKey: undefined
    },
  ];

  const actionCTAs = customCTAs || defaultCTAs;

  const handleCTAClick = (cta: CTAItem) => {
    if (cta.pillarKey) {
      // Scroll to pillars section and activate the specific pillar
      const pillarsSection = document.getElementById('infrastructure');
      if (pillarsSection) {
        pillarsSection.scrollIntoView({ behavior: 'smooth' });
        // Trigger pillar activation after scroll
        setTimeout(() => {
          const event = new CustomEvent('activatePillar', { detail: cta.pillarKey! });
          window.dispatchEvent(event);
        }, 800);
      }
    }
  };

  return (
    <section id="hero" className="relative bg-white dark:bg-gray-900 pt-8 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Enhanced background with animated gradient */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>
      
      {/* Animated gradient orbs - more vibrant */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 animate-pulse">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-verto-purple/30 via-verto-blue/20 to-verto-green/25 dark:from-verto-purple/40 dark:via-verto-blue/30 dark:to-verto-green/35 blur-[100px] sm:blur-[120px] md:blur-[150px] rounded-full"></div>
      </div>
      
      {/* Secondary accent orb for depth */}
      <div className="absolute bottom-1/2 right-1/3 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-bl from-verto-orange/20 via-verto-purple/15 to-verto-blue/20 dark:from-verto-orange/30 dark:via-verto-purple/25 dark:to-verto-blue/30 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full opacity-60"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="font-black text-slate-900 dark:text-white tracking-tighter" data-testid="hero-title">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl bg-gradient-to-r from-verto-blue via-verto-purple to-verto-orange bg-clip-text text-transparent leading-loose whitespace-pre-line max-w-3xl mx-auto">
            {title}
          </span>
        </h1>

        <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed px-2" data-testid="hero-subtitle">
          {subtitle}
        </p>

        {/* --- ELEVATED CTA BLOCK: Premium card styling --- */}
        <div className="mt-4 sm:mt-6 md:mt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            {actionCTAs.map((cta) => (
              cta.pillarKey ? (
                <button 
                  key={cta.title} 
                  onClick={() => handleCTAClick(cta)}
                  className="w-full"
                >
                  <div 
                    className="group relative flex flex-col justify-center text-center h-full p-4 sm:p-6 md:p-8 backdrop-blur-xl border border-white/40 dark:border-slate-600/40 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    style={{
                      background: cta.bgGradient || cta.bgColorClass,
                      boxShadow: cta.glowColor ? `0 0 40px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)` : undefined
                    }}
                    onMouseEnter={(e) => {
                      if (cta.glowColor) {
                        e.currentTarget.style.boxShadow = `0 0 40px 12px ${cta.glowColor}40, 0 0 0 1px rgba(255,255,255,0.1)`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (cta.glowColor) {
                        e.currentTarget.style.boxShadow = `0 0 40px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)`;
                      }
                    }}
                  >
                    
                    <div className="relative flex items-center justify-center gap-x-3">
                        <cta.icon className="w-7 h-7 transition-all duration-300 group-hover:scale-110 verto-gradient-text" />
                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">{cta.title}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {cta.subtitle}
                    </p>
                  </div>
                </button>
              ) : (
                <Link key={cta.title} href={cta.href}>
                  <div 
                    className="group relative flex flex-col justify-center text-center h-full p-4 sm:p-6 md:p-8 backdrop-blur-xl border border-white/40 dark:border-slate-600/40 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    style={{
                      background: cta.bgGradient || cta.bgColorClass,
                      boxShadow: cta.glowColor ? `0 0 40px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)` : undefined
                    }}
                    onMouseEnter={(e) => {
                      if (cta.glowColor) {
                        e.currentTarget.style.boxShadow = `0 0 40px 12px ${cta.glowColor}40, 0 0 0 1px rgba(255,255,255,0.1)`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (cta.glowColor) {
                        e.currentTarget.style.boxShadow = `0 0 40px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)`;
                      }
                    }}
                  >
                    
                    <div className="relative flex items-center justify-center gap-x-3">
                        <cta.icon className="w-7 h-7 transition-all duration-300 group-hover:scale-110 verto-gradient-text" />
                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">{cta.title}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {cta.subtitle}
                    </p>
                  </div>
                </Link>
              )
            ))}
          </div>

          {/* Built by Leaders At Section */}
          <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">Built by leaders at:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
              <img src="/logos/Seal_of_the_United_States_Federal_Reserve_System.svg" alt="Federal Reserve" className="h-8 sm:h-9 md:h-10 opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
              <img src="/logos/gsr-markets-logo-vector-2023.svg" alt="GSR Markets" className="h-8 sm:h-9 md:h-10 opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
              <img src="/logos/Microsoft_logo_(2012).svg" alt="Microsoft" className="h-8 sm:h-9 md:h-10 opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
              <img src="/logos/PayPal_logo.svg" alt="PayPal" className="h-8 sm:h-9 md:h-10 opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={openModal}
                className="group relative inline-flex items-center justify-center gap-x-2 bg-gradient-to-r from-verto-orange via-verto-pink to-verto-purple text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-verto-orange/50 dark:focus:ring-verto-orange/30 overflow-hidden"
                data-testid="hero-schedule-demo-cta"
              >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Schedule Demo</span>
              </button>
              <button 
                onClick={openModal}
                className="group relative inline-flex items-center justify-center gap-x-2 border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 overflow-hidden"
                data-testid="hero-speak-with-us-cta"
              >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Speak With Us</span>
              </button>
          </div>
        </div>
      </div>
      
      <CalendlyModal title="Schedule a Demo" />
    </section>
  );
}