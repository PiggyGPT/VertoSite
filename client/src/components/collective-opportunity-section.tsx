import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Send } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

// --- Shared Components ---

const SectionHeading = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
  <div className="text-center mb-10 md:mb-14">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed"
    >
      {children}
    </motion.div>
  </div>
);

export function CollectiveOpportunitySection() {
  const { openModal, CalendlyModal } = useCalendlyModal();
  const [meshHeight, setMeshHeight] = useState(200);
  const leftColRef = useRef<HTMLDivElement>(null);
  
  // Update mesh height based on content height
  useEffect(() => {
    if (leftColRef.current) {
      setMeshHeight(leftColRef.current.offsetHeight);
    }
    const handleResize = () => {
       if (leftColRef.current) setMeshHeight(leftColRef.current.offsetHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nodeCount = 4;
  // Create nodes distributed from 10% to 90% (trimming 10% from top and bottom)
  const nodes = Array.from({ length: nodeCount }, (_, i) => 10 + (i / (nodeCount - 1)) * 80);

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-6 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading 
          title="Your Billion Dollar Opportunity"
        >
          The $25 Billion Trade Finance gap is unbankable alone. <br/> Together, it's an interbank network.
        </SectionHeading>

        {/* Responsive Layout: Grid on Desktop, Flex Column on Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-0 mt-20 md:mt-24 gap-8">
          
          {/* 1. Left/Top Column (Issuer) */}
          <div ref={leftColRef} className="text-center lg:text-right lg:pr-16 relative order-1 flex flex-col justify-center items-center lg:items-end">
            {/* Desktop: Dots on right edge matching content height */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2">
              {nodes.map((y, i) => (
                <div 
                  key={`desktop-left-${i}`} 
                  className="absolute right-0 w-1.5 h-1.5 rounded-full bg-slate-500/50" 
                  style={{ top: `${y}%`, transform: 'translateY(-50%)' }}
                />
              ))}
            </div>

            {/* Mobile: Dots on bottom edge */}
            <div className="lg:hidden absolute bottom-[-16px] left-0 right-0 h-2 px-12 z-10">
               {nodes.map((x, i) => (
                <div 
                  key={`mobile-top-${i}`} 
                  className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-slate-500/50"
                  style={{ left: `${x}%`, transform: 'translateX(-50%)' }} 
                />
              ))}
            </div>
            
            <div className="max-w-[320px]">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-200 block mb-2">
                Issuer Banks
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                10% NIM
              </h3>
              <blockquote className="text-lg text-slate-300 leading-8 italic">
                Provide Tier 1 credit,<br/>earn deep-tier yield.
              </blockquote>
            </div>
          </div>

          {/* 2. Center Column (Albor + Mesh) */}
          <div className="relative flex items-center justify-center px-8 lg:px-12 py-8 lg:py-0 order-2" style={{ minWidth: '320px' }}>
            
            {/* Desktop Mesh (Horizontal) - Height matched to content */}
            <div className="hidden lg:block absolute inset-x-0" style={{ height: meshHeight, top: '50%', transform: 'translateY(-50%)' }}>
               <svg className="w-full h-full" preserveAspectRatio="none" style={{ zIndex: 1 }}>
                  {nodes.map((leftY, i) => 
                    nodes.map((rightY, j) => {
                      // Filter out perfectly horizontal lines
                      if (i === j) return null;
                      return (
                        <line 
                          key={`h-line-${i}-${j}`}
                          x1="0%" 
                          y1={`${leftY}%`} 
                          x2="100%" 
                          y2={`${rightY}%`} 
                          stroke="rgba(255,255,255,0.15)" 
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                        />
                      );
                    })
                  )}
               </svg>
            </div>

            {/* Mobile Mesh (Vertical) */}
            <div className="lg:hidden absolute inset-0 w-full h-full">
               <svg className="w-full h-full" preserveAspectRatio="none" style={{ zIndex: 1 }}>
                   {nodes.map((topX, i) => 
                    nodes.map((bottomX, j) => {
                       // Filter out perfectly vertical lines on mobile (equivalent to horizontal on desktop)
                      if (i === j) return null;
                      return (
                        <line 
                          key={`v-line-${i}-${j}`}
                          x1={`${topX}%`} 
                          y1="0%" 
                          x2={`${bottomX}%`} 
                          y2="100%" 
                          stroke="rgba(255,255,255,0.15)" 
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                        />
                      );
                    })
                  )}
               </svg>
            </div>
            
            {/* Albor Logo Circle */}
            <div className="relative z-20 w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center shadow-[0_0_50px_-10px_rgba(33,105,209,0.5)] bg-[#2169D1] border-4 border-white/10">
              <img src="/logos/svg/albor.svg" alt="Albor" className="h-7 md:h-9 w-auto" />
            </div>
          </div>

          {/* 3. Right/Bottom Column (Acquirer) */}
          <div className="text-center lg:text-left lg:pl-16 relative order-3 flex flex-col justify-center items-center lg:items-start">
            {/* Desktop: Dots on left edge matching content height */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-2">
              {nodes.map((y, i) => (
                <div 
                  key={`desktop-right-${i}`} 
                  className="absolute left-0 w-1.5 h-1.5 rounded-full bg-slate-500/50" 
                  style={{ top: `${y}%`, transform: 'translateY(-50%)' }}
                />
              ))}
            </div>

             {/* Mobile: Dots on top edge */}
            <div className="lg:hidden absolute top-[-16px] left-0 right-0 h-2 px-12 z-10">
               {nodes.map((x, i) => (
                <div 
                  key={`mobile-bottom-${i}`} 
                  className="absolute top-0 w-1.5 h-1.5 rounded-full bg-slate-500/50"
                  style={{ left: `${x}%`, transform: 'translateX(-50%)' }} 
                />
              ))}
            </div>

            <div className="max-w-[320px]">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-200 block mb-2">
                Acquirer Banks
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                10% Fee Income
              </h3>
              <blockquote className="text-lg text-slate-300 leading-8 italic">
                Provide Deep Tier Access,<br/>earn risk-free yield.
              </blockquote>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center flex justify-center gap-4">
          <button
            onClick={() => openModal("Book a Demo")}
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm gap-2 min-w-[160px]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Demo</span>
          </button>
          <a
            href="https://t.me/nileshkhaitan"
            target="_blank"
            rel="noopener noreferrer"
            className="roup px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
          >
            <Send className="w-4 h-4 hidden md:inline" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
      <CalendlyModal />
    </section>
  );
}

export default CollectiveOpportunitySection;
