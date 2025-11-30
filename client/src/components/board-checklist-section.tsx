// src/components/PilotProgramSection.tsx


import { Check, Rocket, BarChart3, Target, ArrowRight } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

// Helper component for a timeline item (no changes here)
const TimelineItem = ({ phase, title, icon: Icon, color, children }: { phase: string, title: string, icon: any, color: string, children: React.ReactNode }) => (
  <div className="relative pl-8 sm:pl-12 py-4 sm:py-6 group">
    {/* Styling remains the same */}
    <div className={`absolute left-0 top-9 sm:top-11 h-full w-0.5 bg-slate-200 dark:bg-slate-700 group-last:h-0`}></div>
    <div className={`absolute left-0 top-9 sm:top-11 w-0.5 bg-${color} transition-all duration-500 scale-y-0 group-hover:scale-y-100`}></div>
    <div className="absolute left-[-9px] sm:left-[-11px] top-6 sm:top-8 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-800 ring-4 ring-white dark:ring-slate-800">
      <div className={`w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full group-hover:bg-${color} transition-colors`}></div>
    </div>
    <p className={`text-sm sm:text-base font-semibold uppercase tracking-wider text-${color}`}>{phase}</p>
    <h4 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-slate-500 dark:text-slate-400" />
      {title}
    </h4>
    <div className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
      {children}
    </div>
  </div>
);

export default function PilotProgramSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();

  return (
    <>
      {/* <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      <section id="pilot" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
              Launch Your Pilot in 90 Days
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed px-2">
              De-risk your launch with a phased strategy that proves liquidity, network adoption, and operational readiness.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* TimelineItem components remain unchanged */}
            <TimelineItem phase="Days 1-30" title="Foundation & Liquidity Onboarding" icon={Rocket} color="verto-orange">
              <p>Integrate core banking systems, onboard 3-5 anchor partners, and connect with pre-vetted market makers to establish initial liquidity pools.</p>
            </TimelineItem>

            <TimelineItem phase="Days 31-60" title="Live Transaction Testing" icon={Target} color="verto-green">
              <p>Execute real-world payments and redemptions while market makers provide continuous liquidity. Validate user experience and liquidity depth under real conditions.</p>
            </TimelineItem>

            <TimelineItem phase="Days 61-90" title="Performance & Scale Planning" icon={BarChart3} color="verto-blue">
              <p>Analyze liquidity metrics, transaction data, and compliance reports to present a data-backed plan for full network rollout with sustainable liquidity.</p>
            </TimelineItem>
          </div>

          {/* --- NEW CTA SECTION --- */}
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm sm:text-base"
            >
              <span>Apply for the Pilot Program</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Limited spots available for our next cohort.</p>
          </div>

        </div>
      </section>

      <CalendlyModal title="Apply for the Pilot Program" />
    </>
  );
}
