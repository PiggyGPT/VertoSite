import { 
  ArrowRight, 
  Workflow, 
  Coins, 
  Globe2, 
  ShieldCheck, 
  Phone, 
  Calendar
} from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";

const useCalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const CalendlyModal = ({ title }: { title: string }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-300" onClick={closeModal}>
        <div className="bg-white dark:bg-[#0F1117] border border-slate-200 dark:border-white/10 rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
          <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              ✕
            </button>
          </div>
          <div className="p-8 text-center">
             <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
             </div>
             <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
               This is a demo environment. In production, this would open your Calendly or scheduling interface directly.
             </p>
             <button 
               onClick={closeModal}
               className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
             >
               Return to Demo
             </button>
          </div>
        </div>
      </div>
    );
  };

  return { openModal, CalendlyModal };
};

interface StoryStep {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  accentColor: string;
}

export default function HeroSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const storySteps: StoryStep[] = [
    {
      title: "Integrate Your Systems",
      subtitle: "Automate issuance, redemption and reconciliation with our APIs.",
      icon: Workflow,
      href: "/integrate",
      accentColor: "#EEAA4A",
    },
    {
      title: "Capture Dollar Liquidity",
      subtitle: "Attract LPs to securely seed dollar liquidity and earn yield with our DEX.",
      icon: Coins,
      href: "/liquidity",
      accentColor: "#EF660B",
    },
    {
      title: "Unlock Global Coverage",
      subtitle: "Enable Traders to easily transact with any bank or wallet with our Router.",
      icon: Globe2,
      href: "/coverage",
      accentColor: "#8F73FE",
    },
    {
      title: "Sovereign Compliance",
      subtitle: "Deploy our full stack on your servers and eliminate counterparty risk.",
      icon: ShieldCheck,
      href: "/compliance",
      accentColor: "#217DFE",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % storySteps.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, storySteps.length]);

  const handleStepClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentStep(index);
  };

  const activeStory = storySteps[currentStep];
  const activeAccent = activeStory.accentColor;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#070911] text-slate-900 dark:text-white">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Light Mode: Clean white base with warm golden glow at top */}
        <div className="absolute inset-0 bg-white dark:hidden" />
        <div 
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[700px] rounded-full blur-[120px] opacity-30 dark:hidden" 
          style={{ 
            background: 'radial-gradient(circle at center, #EEAA4A, #EF660B, transparent 60%)' 
          }}
        />

        {/* Dark Mode: Deep indigo pre-dawn base */}
        <div className="hidden dark:block absolute inset-0 bg-[#070911]" />
        
        {/* Dark Mode: Subtle cool indigo glow */}
        <div 
          className="hidden dark:block absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[150%] h-[800px] rounded-full blur-[150px] opacity-5"
          style={{ 
            background: 'radial-gradient(circle at center, #1A233A, #0A1128, transparent 70%)' 
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 dark:opacity-5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EEAA4A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF660B]"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 tracking-wide uppercase">Enterprise Infrastructure</span>
          </div>

          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tighter mb-6 text-slate-900 dark:text-white">
            Launch Your Stablecoin. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              Attract Global Dollars.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Make your asset liquid against dollar stablecoins with our self-hosted, full-stack infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <button 
                onClick={openModal}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-all hover:translate-y-[-2px] shadow-lg shadow-black/10 dark:shadow-black/30 overflow-hidden relative"
                style={{ 
                    background: `linear-gradient(90deg, #EF660B, #8F73FE, #217DFE)`, 
                    color: 'white' 
                }}
                data-testid="hero-schedule-demo"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Demo</span>
              </button>
              <button 
                onClick={openModal}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-white/10"
                data-testid="hero-contact-sales"
              >
                <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                Contact Sales
              </button>
          </div>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="w-full max-w-2xl mx-auto mt-8">
          {/* Carousel Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-white/8 border border-slate-200/50 dark:border-white/5 backdrop-blur-md transition-all duration-500 shadow-lg">
            
            {/* Dynamic accent border/glow */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                boxShadow: `inset 0 0 60px 0 ${activeAccent}08`,
                transition: 'box-shadow 0.5s ease-out'
              }}
            />

            {/* Content */}
            <div className="relative p-8 md:p-10 min-h-[280px] flex flex-col justify-between">
              <div>
                <div 
                  className="inline-flex items-center justify-center p-3 rounded-lg mb-6"
                  style={{ 
                    backgroundColor: `${activeAccent}12`, 
                    color: activeAccent 
                  }}
                >
                  <activeStory.icon className="w-7 h-7" />
                </div>
                
                <h2 
                  key={`title-${currentStep}`}
                  className="text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight animate-fade-in"
                >
                  {activeStory.title}
                </h2>
                
                <p 
                  key={`subtitle-${currentStep}`}
                  className="text-base text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in"
                >
                  {activeStory.subtitle}
                </p>
              </div>

              <div className="mt-8">
                <Link href={activeStory.href} className="inline-flex items-center gap-2 font-semibold text-sm transition-all group hover:gap-3" style={{ color: activeAccent }}>
                  <span>Explore solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {storySteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => handleStepClick(idx)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  idx === currentStep ? 'px-4' : 'w-2'
                } ${idx === currentStep ? '' : 'bg-slate-300 dark:bg-white/10'}`}
                style={{
                  backgroundColor: idx === currentStep ? activeAccent : undefined
                }}
                data-testid={`carousel-indicator-${idx}`}
              />
            ))}
          </div>
        </div>

        {/* SOCIAL PROOF */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-white/5 w-full max-w-5xl">
          <p className="text-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
            Founded by leaders at
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale">
             <div className="w-20 h-6 flex items-center justify-center">
               <img src="/logos/fed-logo.svg" alt="Federal Reserve" className="h-full object-contain dark:invert" />
             </div>
             <div className="w-20 h-6 flex items-center justify-center">
               <img src="/logos/GSR_logo.svg" alt="GSR Markets" className="h-full object-contain dark:invert" />
             </div>
             <div className="w-20 h-6 flex items-center justify-center">
               <img src="/logos/PayPal_logo.svg" alt="PayPal" className="h-full object-contain dark:invert" />
             </div>
             <div className="w-20 h-6 flex items-center justify-center">
               <img src="/logos/Microsoft_logo_(2012).svg" alt="Microsoft" className="h-full object-contain dark:invert" />
             </div>
          </div>
        </div>

      </div>
      
      <CalendlyModal title="Schedule a Consultation" />
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
