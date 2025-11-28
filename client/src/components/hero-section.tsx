import { ArrowRight, Landmark, ArrowRightLeft, CandlestickChart, Rocket, Phone } from "lucide-react";
import { Link } from "wouter";
import { useCalendlyModal } from "./calendly-modal";
import { useState, useEffect } from "react";

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
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

  // Auto-play carousel for feature cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % actionCTAs.length);
    }, 5000); // 5 seconds per card
    return () => clearInterval(interval);
  }, [actionCTAs.length]);

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

        <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed px-2" data-testid="hero-subtitle">
          {subtitle}
        </p>

        {/* --- ELEVATED CTA BLOCK: Premium card styling with carousel --- */}
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-6xl mx-auto">
          {/* Mobile/Tablet: Carousel */}
          <div className="lg:hidden">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentCardIndex * 100}%)`
                }}
              >
                {actionCTAs.map((cta) => (
                  <div key={cta.title} className="w-full flex-shrink-0 px-2">
                    {cta.pillarKey ? (
                      <button 
                        onClick={() => handleCTAClick(cta)}
                        className="w-full"
                      >
                        <div 
                          className="group relative flex flex-col justify-center text-center h-full p-4 sm:p-5 md:p-6 backdrop-blur-xl border border-white/40 dark:border-slate-600/40 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
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
                          <div className="relative flex items-center justify-center gap-x-2">
                            <cta.icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110 verto-gradient-text flex-shrink-0" />
                            <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{cta.title}</span>
                          </div>
                          <p className="mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-snug">
                            {cta.subtitle}
                          </p>
                        </div>
                      </button>
                    ) : (
                      <Link href={cta.href}>
                        <div 
                          className="group relative flex flex-col justify-center text-center h-full p-4 sm:p-5 md:p-6 backdrop-blur-xl border border-white/40 dark:border-slate-600/40 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
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
                          <div className="relative flex items-center justify-center gap-x-2">
                            <cta.icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110 verto-gradient-text flex-shrink-0" />
                            <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{cta.title}</span>
                          </div>
                          <p className="mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-snug">
                            {cta.subtitle}
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {actionCTAs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentCardIndex
                      ? 'bg-gradient-to-r from-verto-orange to-verto-purple w-6'
                      : 'bg-slate-300 dark:bg-slate-600 w-2'
                  }`}
                  data-testid={`carousel-dot-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid View */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {actionCTAs.map((cta) => (
              <div key={cta.title}>
                {cta.pillarKey ? (
                  <button 
                    onClick={() => handleCTAClick(cta)}
                    className="w-full"
                  >
                    <div 
                      className="group relative flex flex-col justify-center text-center h-full p-4 sm:p-5 md:p-6 backdrop-blur-xl border border-white/40 dark:border-slate-600/40 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
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
                      <div className="relative flex items-center justify-center gap-x-2">
                        <cta.icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110 verto-gradient-text flex-shrink-0" />
                        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{cta.title}</span>
                      </div>
                      <p className="mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-snug">
                        {cta.subtitle}
                      </p>
                    </div>
                  </button>
                ) : (
                  <Link href={cta.href}>
                    <div 
                      className="group relative flex flex-col justify-center text-center h-full p-4 sm:p-5 md:p-6 backdrop-blur-xl border border-white/40 dark:border-slate-600/40 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
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
                      <div className="relative flex items-center justify-center gap-x-2">
                        <cta.icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110 verto-gradient-text flex-shrink-0" />
                        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{cta.title}</span>
                      </div>
                      <p className="mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-snug">
                        {cta.subtitle}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Built by Leaders At Section */}
          <div className="mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mb-6">Built by leaders at:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-18 sm:w-20 md:w-24 h-5 sm:h-6 md:h-7 flex items-center justify-center">
                <img src="/logos/fed-logo.svg" alt="Federal Reserve" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
              </div>
              <div className="w-18 sm:w-20 md:w-24 h-5 sm:h-6 md:h-7 flex items-center justify-center">
                <img src="/logos/GSR_logo.svg" alt="GSR Markets" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
              </div>
              <div className="w-18 sm:w-20 md:w-24 h-5 sm:h-6 md:h-7 flex items-center justify-center">
                <img src="/logos/Microsoft_logo_(2012).svg" alt="Microsoft" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
              </div>
              <div className="w-18 sm:w-20 md:w-24 h-5 sm:h-6 md:h-7 flex items-center justify-center">
                <img src="/logos/PayPal_logo.svg" alt="PayPal" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity dark:grayscale dark:brightness-0 dark:invert" />
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
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