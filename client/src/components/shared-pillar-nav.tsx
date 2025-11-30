import { useState, useRef, useEffect } from "react";
import { Zap, Store, Globe, Shield } from "lucide-react";

interface SharedPillarNavProps {
  currentStep?: number;
  onStepClick?: (step: number) => void;
}

export default function SharedPillarNav({ currentStep = 0, onStepClick }: SharedPillarNavProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const orderedKeys = ["distribution", "trading", "payments", "service"];
  const pillars = {
    distribution: { label: "Tokenize Deposits", color: "albor-plum", icon: Zap },
    trading: { label: "Attract Liquidity", color: "albor-blue", icon: Store },
    payments: { label: "Transact Globally", color: "albor-teal", icon: Globe },
    service: { label: "Secure Compliance", color: "albor-gold", icon: Shield },
  };

  const colorMap: { [key: string]: string } = {
    'albor-plum': '#A885FF',
    'albor-blue': '#4D88FF',
    'albor-teal': '#5DD4E0',
    'albor-gold': '#F1BD76',
  };

  const getAccentColor = (colorName: string) => colorMap[colorName] || '#FDB94E';

  useEffect(() => {
    const handleScroll = () => {
      const navContainer = navContainerRef.current;
      const heroSection = document.getElementById('hero');
      const pillarEnd = document.getElementById('pillar-end');
      
      if (navContainer && heroSection && pillarEnd) {
        const heroRect = heroSection.getBoundingClientRect();
        const pillarEndRect = pillarEnd.getBoundingClientRect();
        const mainNavHeight = 64; // h-16
        
        // Nav should be fixed only if:
        // 1. Hero has scrolled past the top (heroRect.bottom <= mainNavHeight means hero scrolled up/out)
        // 2. AND we're still in the pillars section (pillarEndRect.top > mainNavHeight)
        const shouldBeFixed = heroRect.bottom <= mainNavHeight && pillarEndRect.top > mainNavHeight;
        setIsFixed(shouldBeFixed);
        
        // Hide when scrolled past the end of pillars section
        setIsVisible(pillarEndRect.top > mainNavHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (index: number) => {
    if (onStepClick) onStepClick(index);
    // Trigger event for PillarsSection to listen
    window.dispatchEvent(new CustomEvent('activatePillar', { detail: orderedKeys[index] }));
    // Scroll to pillar content
    setTimeout(() => {
      const element = document.getElementById('pillar-content');
      if (element && navContainerRef.current) {
        const mainNavHeight = 64;
        const pillarNavHeight = navContainerRef.current.offsetHeight;
        const totalNavHeight = mainNavHeight + pillarNavHeight;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - totalNavHeight,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <div ref={navContainerRef} className={`w-full transition-all duration-300 ${
      isVisible 
        ? `${isFixed ? 'fixed top-16 left-0 right-0 z-40' : 'relative'} backdrop-blur-md bg-slate-900/40 border-b border-white/20` 
        : 'hidden'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={tabsContainerRef} className="flex sm:justify-between justify-start items-center w-full pl-0 sm:pl-8 pr-8 sm:pr-12 lg:pr-16 gap-4 sm:gap-0 overflow-x-auto sm:overflow-x-visible">
          {orderedKeys.map((key, index) => {
            const pillar = pillars[key as keyof typeof pillars];
            const pillarColor = pillar?.color || 'albor-green';
            const accentColor = getAccentColor(pillarColor);
            const IconComponent = pillar?.icon;
            const isActive = index === currentStep;
            
            return (
              <button
                key={index}
                data-tab-index={index}
                onClick={() => handleStepClick(index)}
                className={`relative sm:flex-shrink-0 w-[calc(100vw-4rem)] sm:w-auto px-4 py-6 sm:py-8 flex items-center gap-2 transition-all duration-300 cursor-pointer group justify-center sm:justify-start border-b-2 transition-colors`}
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
  );
}
