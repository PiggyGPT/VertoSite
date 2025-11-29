import {
  ArrowRight,
  Workflow,
  Coins,
  Globe2,
  ShieldCheck,
  Phone,
  Calendar,
  TrendingUp,
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
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
        onClick={closeModal}
      >
        <div
          className="bg-white dark:bg-[#0F1117] border border-slate-200 dark:border-white/10 rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={closeModal}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              This is a demo environment. In production, this would open your
              Calendly or scheduling interface directly.
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
      title: "Tokenize Your Deposits",
      subtitle:
        "Enable your systems to automate issuance, redemption and reconciliation with our APIs.",
      icon: Workflow,
      href: "/integrate",
      accentColor: "#EEAA4A",
    },
    {
      title: "Attract Liquidity Providers",
      subtitle:
        "Enable LPs to securely seed dollar stablecoin liquidity and earn yield with our Decentralized Exchange.",
      icon: Coins,
      href: "/liquidity",
      accentColor: "#EF660B",
    },
    {
      title: "Accept Global Transactions",
      subtitle:
        "Enable Traders to easily transact with any bank or wallet with our Router.",
      icon: Globe2,
      href: "/coverage",
      accentColor: "#8F73FE",
    },

    {
      title: "Unlock Dollar Growth",
      subtitle:
        "Deploy our full stack on your servers to unlock the Dollar Growth Spiral: Liquidity → Volume → Yield.",
      icon: ShieldCheck,
      href: "/compliance",
      accentColor: "#217DFE",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % storySteps.length);
      }, 10000);
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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden text-slate-900 dark:text-white">
      {/* BACKGROUND - Transparent to allow page gradient to show through */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Light Mode: Warm golden glow at top */}
        <div
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[700px] rounded-full blur-[120px] opacity-30 dark:hidden"
          style={{
            background:
              "radial-gradient(circle at center, #EEAA4A, #EF660B, transparent 60%)",
          }}
        />

        {/* Dark Mode: Subtle cool indigo glow - just the sky, no warm tones */}
        <div
          className="hidden dark:block absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[150%] h-[800px] rounded-full blur-[150px] opacity-5"
          style={{
            background:
              "radial-gradient(circle at center, #1A233A, #0A1128, transparent 70%)",
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 dark:opacity-5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT & CTAs */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-5xl xl:text-5xl tracking-tighter mb-6 sm:mb-7 md:mb-8 text-slate-900 dark:text-white leading-tight">
              Launch Your Stablecoin.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Capture Global Dollars.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 sm:mb-12 md:mb-14 max-w-xl">
              Capture liquidity from the $300B dollar stablecoin market
              <br />
              with our self-hosted, full-stack infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 sm:mb-14 md:mb-16">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-sm transition-all hover:translate-y-[-2px] shadow-lg shadow-black/10 dark:shadow-black/30 overflow-hidden relative"
                style={{
                  background: `linear-gradient(90deg, #EF660B, #8F73FE, #217DFE)`,
                  color: "white",
                }}
                data-testid="hero-schedule-demo"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Demo</span>
              </button>
              <button
                onClick={openModal}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-white/10"
                data-testid="hero-contact-sales"
              >
                <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                Contact Sales
              </button>
            </div>

            {/* SOCIAL PROOF */}
            <div className="w-full pt-8 sm:pt-10 md:pt-12 border-t border-slate-200 dark:border-white/10">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 sm:mb-8">
                Founded by leaders at
              </p>
              <div className="flex flex-wrap gap-x-8 sm:gap-x-10 md:gap-x-12 gap-y-4 sm:gap-y-6 opacity-100 grayscale">
                <div className="w-40 h-5 flex items-center justify-start">
                  <img
                    src="/logos/fed_logo.svg"
                    alt="Federal Reserve"
                    className="h-full object-contain dark:invert"
                  />
                </div>
                <div className="w-20 h-5 flex items-center justify-start">
                  <img
                    src="/logos/GSR_logo.svg"
                    alt="GSR Markets"
                    className="h-full object-contain dark:invert"
                  />
                </div>
                <div className="w-20 h-5 flex items-center justify-start">
                  <img
                    src="/logos/PayPal_logo.svg"
                    alt="PayPal"
                    className="h-full object-contain dark:invert"
                  />
                </div>
                <div className="w-20 h-5 flex items-center justify-start">
                  <img
                    src="/logos/Microsoft_logo_(2012).svg"
                    alt="Microsoft"
                    className="h-full object-contain dark:invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: JOURNEY CAROUSEL */}
          <div className="relative w-full h-auto hidden lg:flex items-center justify-center">
            <div className="w-full max-w-2xl">
            {/* Main Card Display */}
            <div className="relative p-6 sm:p-8 md:p-10 overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 dark:from-white/5 dark:to-white/0 border border-white/10 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 group">
              {/* Dynamic Accent Glow */}
              <div
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 pointer-events-none rounded-2xl transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 120px 40px ${activeAccent} inset`,
                }}
              />

              {/* Content */}
              <div key={currentStep} className="text-center animate-pan-in relative z-10">
                {/* Progress Indicator - 1-2-3-Growth with Clickable Steps */}
                <div className="mb-6 sm:mb-8">
                  {/* Step Bubbles */}
                  <div className="flex justify-center items-center gap-1 sm:gap-2">
                    {storySteps.map((_, index) => (
                      <div key={index} className="flex items-center">
                        <button
                          onClick={() => {
                            setIsAutoPlaying(false);
                            handleStepClick(index);
                          }}
                          className={`relative flex items-center justify-center transition-all duration-300 cursor-pointer group ${
                            index === currentStep && !isAutoPlaying ? 'animate-bubble-pop scale-110' : 'hover:opacity-80'
                          }`}
                        >
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                              index === currentStep ? 'shadow-lg' : 'shadow-md'
                            }`}
                            style={{
                              backgroundColor:
                                index <= currentStep
                                  ? storySteps[index].accentColor
                                  : `${storySteps[index].accentColor}40`,
                              color: index <= currentStep ? 'white' : storySteps[index].accentColor,
                              boxShadow:
                                index === currentStep
                                  ? `0 0 20px ${storySteps[index].accentColor}80`
                                  : index < currentStep
                                  ? `0 0 10px ${storySteps[index].accentColor}40`
                                  : 'none',
                            }}
                          >
                            {index === 3 ? (
                              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                              index + 1
                            )}
                          </div>
                        </button>
                        {index < storySteps.length - 1 && (
                          <div
                            key={`dash-${index}-${currentStep}`}
                            className={`hidden sm:block w-8 md:w-12 h-0.5 mx-1 md:mx-2 rounded-full overflow-hidden relative`}
                            style={{
                              background: index < currentStep 
                                ? `linear-gradient(90deg, ${storySteps[index].accentColor}, ${storySteps[index + 1].accentColor})`
                                : 'rgba(148, 163, 184, 0.3)',
                            }}
                          >
                            <div
                              className="h-full"
                              style={{
                                width: index < currentStep ? '100%' : '0%',
                                background: `linear-gradient(90deg, ${storySteps[index].accentColor}, ${storySteps[index + 1].accentColor})`,
                                transition: 'width 10000ms linear',
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                  {currentStep === 3 ? "Unlock Growth Spiral!" : activeStory.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md mx-auto">
                  {activeStory.subtitle}
                </p>

                {/* Server Log Animation - Only on Step 1 */}
                {currentStep === 0 && (
                  <div className="mt-6 text-left text-xs font-mono text-slate-400 space-y-1">
                    <div className="animate-fade-in-log" style={{ animationDelay: '0.3s' }}>
                      <span className="text-emerald-400">[✓]</span> Fiat Deposit Detected
                    </div>
                    <div className="animate-fade-in-log" style={{ animationDelay: '1.2s' }}>
                      <span className="text-blue-400">[→]</span> Minting BSD to wallet
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Mobile CTAs & Carousel Section */}
        <div className="lg:hidden w-full">
          {/* Mobile CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-lg font-semibold text-sm transition-all hover:translate-y-[-2px] shadow-lg shadow-black/10 dark:shadow-black/30 overflow-hidden relative"
              style={{
                background: `linear-gradient(90deg, #EF660B, #8F73FE, #217DFE)`,
                color: "white",
              }}
              data-testid="hero-schedule-demo"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Demo</span>
            </button>
            <button
              onClick={openModal}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-white/10"
              data-testid="hero-contact-sales"
            >
              <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <CalendlyModal title="Schedule a Consultation" />

      <style>{`
        .animate-pan-in {
          animation: panIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        @keyframes panIn {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-bubble-pop {
          animation: bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes bubblePop {
          0% {
            transform: scale(0.7);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-fade-in-log {
          animation: fadeInLog 0.6s ease-in-out forwards;
        }
        @keyframes fadeInLog {
          0% {
            opacity: 0;
            transform: translateY(-4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
