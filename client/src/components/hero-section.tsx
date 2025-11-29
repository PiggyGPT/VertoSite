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
    <section className="relative w-full h-[calc(100vh-120px)] flex flex-col justify-center overflow-hidden text-slate-900 dark:text-white">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center justify-center">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Enterprise Infrastructure badge - Hidden for now */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EEAA4A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF660B]"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 tracking-wide uppercase">
              Enterprise Infrastructure
            </span>
          </div> */}

          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-6 sm:mb-8 md:mb-6 text-slate-900 dark:text-white leading-tight">
            Launch Your Stablecoin.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              Capture Global Dollars.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-10 lg:mb-12">
            Capture liquidity from the $300B stablecoin market
            <br />
            with our self-hosted, full-stack infrastructure.
          </p>
        </div>

        {/* SOCIAL PROOF */}
        <div className="w-full max-w-5xl pt-4 sm:pt-6 md:pt-5 lg:pt-6">
          <p className="text-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 sm:mb-8 md:mb-10">
            Founded by leaders at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8 sm:gap-x-10 md:gap-x-12 pb-16 sm:pb-10 md:pb-10 lg:pb-12 opacity-100 grayscale">
            <div className="w-40 h-6 flex items-center justify-center">
              <img
                src="/logos/fed_logo.svg"
                alt="Federal Reserve"
                className="h-full object-contain dark:invert"
              />
            </div>
            <div className="w-20 h-6 flex items-center justify-center">
              <img
                src="/logos/GSR_logo.svg"
                alt="GSR Markets"
                className="h-full object-contain dark:invert"
              />
            </div>
            <div className="w-full sm:w-auto h-6"></div>
            <div className="w-20 h-6 flex items-center justify-center">
              <img
                src="/logos/PayPal_logo.svg"
                alt="PayPal"
                className="h-full object-contain dark:invert"
              />
            </div>
            <div className="w-20 h-6 flex items-center justify-center">
              <img
                src="/logos/Microsoft_logo_(2012).svg"
                alt="Microsoft"
                className="h-full object-contain dark:invert"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-12 lg:mt-12">
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
              className="inline-flex sm:hidden items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-white/10"
              data-testid="hero-contact-sales"
            >
              <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              Contact Sales
            </button>
          </div>
        </div>

      </div>

      <CalendlyModal title="Schedule a Consultation" />

    </section>
  );
}
