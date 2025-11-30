import { Phone, Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  Zap, Store, Globe, Shield, TrendingUp
} from "lucide-react";

const useCalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const CalendlyModal = ({ title }: { title: string }) => {
    if (!isOpen) return null;
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070A]/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        onClick={closeModal}
      >
        <div
          className="bg-[#0F1117] border border-white/10 rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>
            <button
              onClick={closeModal}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-blue-500/20">
              <Calendar className="w-8 h-8" />
            </div>
            <h4 className="text-white font-medium mb-2">Book Introductory Call</h4>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              This is a demo environment. In production, this would open your
              Calendly or scheduling interface directly.
            </p>
            <button
              onClick={closeModal}
              className="w-full py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors"
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

export default function HeroSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isWrappingAround, setIsWrappingAround] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const prevStepRef = useRef(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const orderedKeys = ["distribution", "trading", "payments", "service"];

  const pillars = {
    distribution: { label: "Tokenize Deposits", color: "verto-purple", icon: Zap },
    trading: { label: "Attract Liquidity", color: "verto-blue", icon: Store },
    payments: { label: "Transact Globally", color: "verto-green", icon: Globe },
    service: { label: "Secure Compliance", color: "verto-orange", icon: Shield },
  };

  const colorMap: { [key: string]: string } = {
    'verto-green': '#22c55e',
    'verto-blue': '#3b82f6',
    'verto-purple': '#8b5cf6',
    'verto-orange': '#f97316',
  };

  const getAccentColor = (colorName: string) => colorMap[colorName] || '#22c55e';

  // Auto-advance every 10 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % orderedKeys.length);
    }, 10000);
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

  // Auto-scroll mobile tabs container to center active tab (only on manual click, not auto-play)
  useEffect(() => {
    if (tabsContainerRef.current && window.innerWidth < 640 && !isAutoPlaying) {
      const container = tabsContainerRef.current;
      const activeTab = container.querySelector(`[data-tab-index="${currentStep}"]`);
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentStep, isAutoPlaying]);

  // Detect scroll for sticky nav glass effect
  useEffect(() => {
    const handleScroll = () => {
      const navContainer = navContainerRef.current;
      const pillarContent = document.getElementById('pillar-content');
      
      if (navContainer && pillarContent) {
        const navTop = navContainer.getBoundingClientRect().top;
        const pillarTop = pillarContent.getBoundingClientRect().top;
        
        // Sticky if scrolled past nav and before end of pillars
        setIsNavScrolled(navTop <= 0 && pillarTop > -window.innerHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
    // Trigger event for PillarsSection to listen
    window.dispatchEvent(new CustomEvent('activatePillar', { detail: orderedKeys[index] }));
    // Scroll to pillar content
    setTimeout(() => {
      document.getElementById('pillar-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="min-h-screen text-white selection:bg-white/20 font-sans flex flex-col">
      
      <section className="flex-grow flex flex-col items-center justify-center pt-24 pb-8 relative overflow-hidden">
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          
          <h1 className="font-bold text-3xl md:text-4xl sm:text-6xl lg:text-7xl tracking-tighter mb-8 leading-[1.05] text-white">
            Connect Your Assets <br />
              To Global Dollars.
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
            Capture liquidity from the $300B stablecoin market with compliant infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-lg bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
              data-testid="hero-schedule-demo"
            >
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </button>
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
              data-testid="hero-contact-sales"
            >
              <Phone className="w-4 h-4" />
              Contact Sales
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-8 w-full border-t border-white/10 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Built by leaders from
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-40 h-6 flex items-center justify-center">
                <img
                  src="/logos/fed_logo.svg"
                  alt="Federal Reserve"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/GSR_logo.svg"
                  alt="GSR Markets"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/PayPal_logo.svg"
                  alt="PayPal"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/Microsoft_logo_(2012).svg"
                  alt="Microsoft"
                  className="h-full object-contain brightness-200 contrast-125"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pillar Navigation - Full Width at Bottom with Bottom Border */}
      <div ref={navContainerRef} className={`w-full mt-0.5 transition-all duration-300 ${isNavScrolled ? 'sticky top-0 z-50 backdrop-blur-md bg-slate-900/40 border-b border-white/20' : 'border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={tabsContainerRef} className="flex sm:justify-between justify-start items-center w-full pl-0 sm:pl-8 pr-8 sm:pr-12 lg:pr-16 gap-4 sm:gap-0 overflow-x-auto sm:overflow-x-visible">
            {orderedKeys.map((key, index) => {
              const pillar = pillars[key as keyof typeof pillars];
              const pillarColor = pillar?.color || 'verto-green';
              const accentColor = getAccentColor(pillarColor);
              const IconComponent = pillar?.icon || TrendingUp;
              const isActive = index === currentStep;
              
              return (
                <button
                  key={index}
                  data-tab-index={index}
                  onClick={() => handleStepClick(index)}
                  className={`relative sm:flex-shrink-0 w-[calc(100vw-4rem)] sm:w-auto px-4 py-6 sm:py-8 flex items-center gap-2 transition-all duration-300 cursor-pointer group justify-center sm:justify-start border-b-2 transition-colors ${
                    isActive ? 'border-b-2' : 'border-b-transparent'
                  }`}
                  style={{
                    borderBottomColor: isActive ? accentColor : 'transparent'
                  }}
                >
                  <IconComponent 
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-colors"
                    style={{
                      color: isActive ? accentColor : '#94a3b8'
                    }}
                  />
                  <p className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-slate-900 dark:text-white' 
                      : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {pillar?.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <CalendlyModal title="Schedule Consultation" />
    </div>
  );
}
