import { useState, useRef, useEffect } from "react";
import { Store ,VaultIcon, Globe, Shield, FileText, Users } from "lucide-react";

interface SharedPillarNavProps {
  currentStep?: number;
  animatedStep?: number;
  isAutoPlaying?: boolean;
  onStepClick?: (step: number) => void;
  onPillarClick?: (index: number) => void;
}

export default function SharedPillarNav({ currentStep = 0, animatedStep = 0, isAutoPlaying = true, onStepClick }: SharedPillarNavProps) {
  /* eslint-disable react-hooks/exhaustive-deps */
  const [isStuck, setIsStuck] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const orderedKeys = ["distribution", "invoicing", "payroll", "trading", "payments", "service"];
  const pillars = {
    distribution: { label: "Tokenize Deposits", color: "albor-plum", icon: VaultIcon },
    invoicing: { label: "Invoice Factoring", color: "albor-blue", icon: FileText },
    payroll: { label: "Salary Advance", color: "albor-green", icon: Users },
    trading: { label: "Attract Liquidity", color: "albor-blue", icon: Store },
    payments: { label: "Transact Globally", color: "albor-teal", icon: Globe },
    service: { label: "Secure Compliance", color: "albor-gold", icon: Shield },
  };

  const activeColor = '#F1BD76';
  const inactiveColor = '#ffffff';

  useEffect(() => {
    const handleScroll = () => {
      const navContainer = navContainerRef.current;
      const infrastructureSection = document.getElementById('infrastructure');
      
      if (navContainer && infrastructureSection) {
        const sectionRect = infrastructureSection.getBoundingClientRect();
        const mainNavHeight = 64; // h-16
        const navHeight = navContainer.offsetHeight;
        
        // Check if the nav is in its sticky position
        // This happens when the infrastructure section top comes close to the main nav bottom
        // We add a small buffer or use the exact height logic
        const shouldBeStuck = sectionRect.top <= (mainNavHeight + navHeight);
        
        setIsStuck(shouldBeStuck);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll mobile tabs to center active tab (container-relative, won't scroll page)
  useEffect(() => {
    if (tabsContainerRef.current && window.innerWidth < 640) {
      const container = tabsContainerRef.current;
      const activeTab = container.querySelector(`[data-tab-index="${currentStep}"]`) as HTMLElement;
      if (activeTab) {
        const containerRect = container.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        const scrollLeft = container.scrollLeft + (tabRect.left - containerRect.left) - (containerRect.width / 2) + (tabRect.width / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentStep]);

  const handleStepClick = (index: number) => {
    if (onStepClick) onStepClick(index);
    // Trigger event for PillarsSection to listen
    window.dispatchEvent(new CustomEvent('activatePillar', { detail: orderedKeys[index] }));
    // Scroll to pillar content on manual click
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
    <div 
      ref={navContainerRef} 
      className={`w-full h-fit transition-all duration-300 sticky top-16 z-40 ${
        isStuck 
          ? 'backdrop-blur-md border-white/10 mb-4 pb-0 border-b' 
          : 'relative border-b border-white/5 pb-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={tabsContainerRef} className="flex sm:justify-between justify-start items-center w-full pl-0 sm:pl-8 pr-8 sm:pr-12 lg:pr-16 gap-4 sm:gap-0 overflow-x-auto sm:overflow-x-visible">
          {orderedKeys.map((key, index) => {
            const pillar = pillars[key as keyof typeof pillars];
            const IconComponent = pillar?.icon;
            const isActive = isAutoPlaying ? index <= animatedStep : index === currentStep;
            
            return (
              <button
                key={index}
                data-tab-index={index}
                onClick={() => handleStepClick(index)}
                className={`relative sm:flex-shrink-0 w-[calc(100vw-4rem)] sm:w-auto px-4 py-6 sm:py-8 flex items-center gap-2 transition-all duration-300 cursor-pointer group justify-center sm:justify-start border-b-2`}
                style={{
                  borderBottomColor: isActive ? activeColor : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <IconComponent 
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-colors"
                  style={{
                    color: isActive ? activeColor : inactiveColor
                  }}
                />
                <p className={`text-sm font-semibold transition-colors whitespace-nowrap`}
                  style={{
                    color: isActive ? activeColor : inactiveColor
                  }}
                >
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
