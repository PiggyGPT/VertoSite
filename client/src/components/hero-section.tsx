import { ArrowRight, Landmark, ArrowRightLeft, CandlestickChart, Rocket } from "lucide-react";
import { Link } from "wouter";
import { useCalendlyModal } from "./calendly-modal";

interface CTAItem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  bgColorClass: string;
  iconColor: string;
  pillarKey?: string; // For scrolling to specific pillars
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
      bgColorClass: "bg-verto-blue/15 dark:bg-verto-blue/20 hover:bg-verto-blue/25 dark:hover:bg-verto-blue/35",
      iconColor: "text-verto-blue dark:text-verto-blue group-hover:text-verto-blue-dark dark:group-hover:text-verto-blue-light",
      pillarKey: undefined
    },
    {
      title: "Offer DeFi Products",
      subtitle: "For Digital Asset Exchanges",
      icon: ArrowRightLeft,
      href: "/offer-defi-products",
      bgColorClass: "bg-verto-purple/15 dark:bg-verto-purple/20 hover:bg-verto-purple/25 dark:hover:bg-verto-purple/35",
      iconColor: "text-verto-purple dark:text-verto-purple group-hover:text-verto-purple-dark dark:group-hover:text-verto-purple-light",
      pillarKey: undefined
    },
    {
      title: "Secure DeFi Ops",
      subtitle: "For Trading Firms & Funds",
      icon: CandlestickChart,
      href: "/secure-defi-ops",
      bgColorClass: "bg-verto-orange/15 dark:bg-verto-orange/20 hover:bg-verto-orange/25 dark:hover:bg-verto-orange/35",
      iconColor: "text-verto-orange dark:text-verto-orange group-hover:text-verto-orange-dark dark:group-hover:text-verto-orange-light",
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
    <section id="hero" className="relative bg-white dark:bg-gray-900 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background elements are unchanged */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/4 -translate-y-1/2">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-verto-purple/20 via-verto-blue/10 to-verto-green/20 dark:from-verto-purple/30 dark:via-verto-blue/20 dark:to-verto-green/30 blur-[100px] sm:blur-[120px] md:blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="font-black text-slate-900 dark:text-white tracking-tight" data-testid="hero-title">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-verto-blue via-verto-purple to-verto-orange bg-clip-text text-transparent leading-tight">
            {title}
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-2" data-testid="hero-subtitle">
          {subtitle}
        </p>

        {/* --- REVISED CTA BLOCK: Action-oriented buttons --- */}
        <div className="mt-8 sm:mt-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {actionCTAs.map((cta) => (
              cta.pillarKey ? (
                <button 
                  key={cta.title} 
                  onClick={() => handleCTAClick(cta)}
                  className="w-full"
                >
                  <div className={`group flex flex-col justify-center text-center h-full p-4 sm:p-6 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cta.bgColorClass}`}>
                    <div className="flex items-center justify-center gap-x-2">
                        <cta.icon className={`w-6 h-6 transition-colors ${cta.iconColor}`} />
                        <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{cta.title}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {cta.subtitle}
                    </p>
                  </div>
                </button>
              ) : (
                <Link key={cta.title} href={cta.href}>
                  <div className={`group flex flex-col justify-center text-center h-full p-4 sm:p-6 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cta.bgColorClass}`}>
                    <div className="flex items-center justify-center gap-x-2">
                        <cta.icon className={`w-6 h-6 transition-colors ${cta.iconColor}`} />
                        <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{cta.title}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {cta.subtitle}
                    </p>
                  </div>
                </Link>
              )
            ))}
          </div>

          {/* UPDATED: "Launch Pilot in 90 Days" now links to Calendly */}
          <div className="mt-8 sm:mt-10">
              <button 
                onClick={openModal}
                className="group inline-flex items-center gap-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600"
                data-testid="hero-pilot-cta"
              >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Launch Pilot in 90 Days</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0 transform group-hover:translate-x-1 transition-all" />
              </button>
          </div>
        </div>
      </div>
      
      <CalendlyModal title="Launch Pilot in 90 Days" />
    </section>
  );
}