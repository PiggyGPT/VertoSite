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
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0A0A0B] text-slate-900 dark:text-white">
      
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
        
        {/* Dark Mode: Subtle cool indigo glow - just the sky, no warm tones */}
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
        <div className="text-center max-w-4xl mx-auto mb-14">
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

        {/* FOCUSED STORY CAROUSEL */}
        <div className="w-full max-w-xl mx-auto mt-8">
          
          {/* Main Card Display */}
          <div className="relative p-4 md:p-6 overflow-hidden rounded-2xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/50 backdrop-blur-xl transition-all duration-500">
             
             {/* Dynamic Accent Glow */}
             <div 
               className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
               style={{ 
                 boxShadow: `0 0 100px 30px ${activeAccent} inset`,
                 transition: 'box-shadow 0.5s ease-out'
               }}
             />

             {/* Content */}
             <div 
               key={currentStep}
               className="text-center animate-lateral-pan"
             >
                {/* Illustrative Animation for Step 0: Integrate Systems - API Typing */}
                {currentStep === 0 && (
                  <div className="mb-6">
                    <div className="inline-block bg-slate-900 dark:bg-slate-800 text-slate-100 dark:text-white px-4 py-3 rounded-lg font-mono text-sm h-20 flex items-center justify-center min-w-64 overflow-hidden">
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-slate-400">$ curl -X POST</span>
                        <span className="inline-flex gap-0.5">
                          <span>/api/issue</span>
                          <span className="inline-block w-0.5 h-5 bg-slate-100 dark:bg-white animate-pulse ml-0.5"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Illustrative Animation for Step 1: Capture Liquidity - DEX APY */}
                {currentStep === 1 && (
                  <div className="mb-6 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Add Liquidity</div>
                      <div className="inline-block bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">USDC/USD</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-slate-400 animate-bounce" style={{ animationDelay: '0s' }} />
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Earn APY</div>
                      <div className="inline-block bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 px-3 py-2 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="text-sm font-bold text-green-600 dark:text-green-400 animate-pulse">12.5%</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Illustrative Animation for Step 2: Global Coverage - Bank Payment */}
                {currentStep === 2 && (
                  <div className="mb-6 flex justify-center gap-3">
                    <div className="inline-block bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/20 px-4 py-3 rounded-lg border border-blue-200 dark:border-blue-700">
                      <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">Pay With</div>
                      <div className="text-sm font-bold text-blue-900 dark:text-blue-300">Chase Bank</div>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-slate-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    </div>
                    <div className="inline-block bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-900/20 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-700">
                      <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-1">Any Wallet</div>
                      <div className="text-sm font-bold text-purple-900 dark:text-purple-300">Receive USDC</div>
                    </div>
                  </div>
                )}
                
                {/* Illustrative Animation for Step 3: Compliance - Server Status */}
                {currentStep === 3 && (
                  <div className="mb-6">
                    <div className="inline-block bg-slate-50 dark:bg-slate-900/50 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Systems Running</span>
                        <span className="text-xs text-green-600 dark:text-green-400">• Healthy</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {activeStory.title}
                </h2>
                
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                  {activeStory.subtitle}
                </p>

                <div className="mt-6">
                   <Link href={activeStory.href} className="inline-flex items-center text-sm font-semibold hover:underline decoration-2 underline-offset-4 transition-all" style={{ color: activeAccent, textDecorationColor: `${activeAccent}50` }}>
                      Explore {activeStory.title.split(' ')[0]} <ArrowRight className="w-4 h-4 ml-1" />
                   </Link>
                </div>
             </div>
          </div>

          {/* Progress Indicators */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex justify-center items-center gap-1.5 w-full max-w-md">
              {storySteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`group relative h-2 rounded-full transition-all duration-500 overflow-hidden flex-1`}
                  style={{
                     backgroundColor: currentStep === idx ? activeAccent : undefined,
                  }}
                  data-testid={`story-progress-${idx}`}
                >
                  <div className={`absolute inset-0 bg-slate-200 dark:bg-white/10 w-full h-full ${currentStep === idx ? 'opacity-0' : 'opacity-100'}`} />
                  
                  {/* Progress Animation */}
                  {currentStep === idx && (
                    <div 
                      className="absolute inset-y-0 left-0 bg-white/50 dark:bg-black/50"
                      style={{ 
                         width: '100%',
                         transition: isAutoPlaying ? 'width 5000ms linear' : 'none',
                         animation: isAutoPlaying ? 'progress 5s linear' : 'none',
                      }} 
                    />
                  )}
                </button>
              ))}
            </div>
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
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-lateral-pan {
          animation: lateral-pan 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        @keyframes lateral-pan {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
