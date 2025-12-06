// src/components/PilotProgramSection.tsx


import { Check, Rocket, BarChart3, Target, ArrowRight, Calendar, Send } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

// Helper component for a timeline item
const TimelineItem = ({ phase, title, icon: Icon, color, children }: { phase: string, title: string, icon: any, color: string, children: React.ReactNode }) => {
  const colorMap: Record<string, string> = {
    'albor-innovation': '#A885FF',
    'albor-teal': '#5DD4E0',
    'albor-dawn': '#F1BD76',
  };
  const colorValue = colorMap[color] || '#A885FF';

  return (
    <div className="relative pl-8 sm:pl-12 py-4 sm:py-6 group">
      <div className={`absolute left-0 top-9 sm:top-11 h-full w-0.5 bg-slate-200 dark:bg-slate-600 group-last:h-0`}></div>
      <div className="absolute left-0 top-9 sm:top-11 w-0.5 transition-all duration-500 scale-y-0 group-hover:scale-y-100" style={{ backgroundColor: colorValue }}></div>
      <div className="absolute left-[-9px] sm:left-[-11px] top-6 sm:top-8 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-800 ring-4 ring-white dark:ring-slate-800">
        <div className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full transition-colors" style={{ backgroundColor: colorValue }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorValue)}></div>
      </div>
      <p className={`text-sm sm:text-base font-semibold uppercase tracking-wider`} style={{ color: colorValue }}>{phase}</p>
      <h4 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-slate-500 dark:text-slate-400" />
        {title}
      </h4>
      <div className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default function PilotProgramSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();

  return (
    <>
      {/* <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      <section id="pilot" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-3">
              De-Risk Your Launch
            </h2>
            <p className="text-slate-200 dark:text-slate-200 text-lg md:text-xl leading-relaxed font-sans">
              Our model mitigates 3 critical barriers to a successful commercial rollout.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* TimelineItem components remain unchanged */}
            <TimelineItem phase="De-Risk Compliance" title="Digital Asset Subsidiary" icon={Rocket} color="albor-innovation">
              <p>We create a bank subsidiary that holds deposits in omnibus accounts at the parent bank. We validate the 1:1 backing and compliance with SOC 2 certifications.</p>
            </TimelineItem>

            <TimelineItem phase="De-Risk Liquidity" title="Third Party Liquidity Network" icon={Target} color="albor-teal">
              <p>We connect you with vetted institutional market makers to seed deep liquidity for Digital Dollars and your stablecoin, reducing volatility at launch.</p>
            </TimelineItem>

            <TimelineItem phase="De-Risk Technology" title="Standard Bank Integration" icon={BarChart3} color="albor-dawn">
              <p>We integrate with your existing authentication and reporting systems, requiring minimal custom development and no changes to your core banking infrastructure.</p>
            </TimelineItem>
          </div>

          {/* --- NEW CTA SECTION --- */}
          <div className="mt-10 sm:mt-12 text-center flex justify-center gap-4">
            <button
              onClick={() => openModal("Schedule Demo")}
              className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm gap-2 min-w-[160px]"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Schedule Demo</span>
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
      </section>

      <CalendlyModal />
    </>
  );
}
