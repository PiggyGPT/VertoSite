import { Calendar, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useCalendlyModal } from "./calendly-modal";
import SharedPillarNav from "./shared-pillar-nav";

interface HeroSectionProps {
  onPillarClick?: (index: number) => void;
  currentStep?: number;
}

export default function HeroSection({ onPillarClick, currentStep: externalStep = 0 }: HeroSectionProps) {
  const { openModal, CalendlyModal } = useCalendlyModal();
  const [currentStep, setCurrentStep] = useState(externalStep);
  const [animatedStep, setAnimatedStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isWrappingAround, setIsWrappingAround] = useState(false);
  const prevStepRef = useRef(0);

  const orderedKeys = ["distribution", "trading", "payments", "service"];

  // Auto-advance nav animation every 3 seconds (without switching actual tabs)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setAnimatedStep(prev => (prev + 1) % orderedKeys.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, orderedKeys.length]);

  // Detect wrap-around
  useEffect(() => {
    if (currentStep < prevStepRef.current) {
      setIsWrappingAround(true);
      setTimeout(() => setIsWrappingAround(false), 50);
    }
    prevStepRef.current = currentStep;
  }, [currentStep]);

  // Handle scroll - disable auto-play and reset to first tab
  useEffect(() => {
    const handleScroll = () => {
      setIsAutoPlaying(false);
      setCurrentStep(0);
      setAnimatedStep(0);
    };
    window.addEventListener('scroll', handleScroll, { once: false });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePillarClick = (index: number) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
    if (onPillarClick) onPillarClick(index);
  };

  return (
    <div className="min-h-screen text-white selection:bg-white/20 font-sans flex flex-col">
      
      <section className="flex-grow flex flex-col items-center justify-center pt-24 pb-8 relative overflow-hidden">
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          
          <h1 className="font-bold text-3xl md:text-4xl sm:text-6xl lg:text-7xl tracking-tighter mb-8 leading-[1.05] text-white">
            Connect Your Assets <br />
              To Global Dollars.
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl">
            Capture liquidity from the $300 Billion stablecoin market with compliant infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
            <button
              onClick={() => openModal("Schedule Demo")}
              className="px-8 py-4 rounded-lg bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
              data-testid="hero-schedule-demo"
            >
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </button>
            <a
              href="https://t.me/nileshkhaitan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
              data-testid="hero-contact-telegram"
            >
              <Send className="w-4 h-4" />
              Contact Us
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-8 w-full border-t border-white/10 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Built by leaders from
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-40 h-6 flex items-center justify-center">
                <img
                  src="/logos/svg/fed_logo.svg"
                  alt="Federal Reserve"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/svg/GSR_logo.svg"
                  alt="GSR Markets"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/svg/PayPal_logo.svg"
                  alt="PayPal"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/svg/Microsoft_logo_(2012).svg"
                  alt="Microsoft"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <SharedPillarNav currentStep={currentStep} animatedStep={animatedStep} isAutoPlaying={isAutoPlaying} onStepClick={handlePillarClick} />

      <CalendlyModal />
    </div>
  );
}
