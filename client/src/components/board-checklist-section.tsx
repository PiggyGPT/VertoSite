// src/components/PilotProgramSection.tsx


import { Check, Rocket, BarChart3, Target, ArrowRight } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

// Helper component for a timeline item (no changes here)
const TimelineItem = ({ phase, title, icon: Icon, color, children }: { phase: string, title: string, icon: any, color: string, children: React.ReactNode }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    {/* Styling remains the same */}
    <div className={`absolute left-0 top-11 h-full w-0.5 bg-slate-200 dark:bg-slate-700 group-last:h-0`}></div>
<div className={`absolute left-0 top-11 w-0.5 bg-${color} transition-all duration-500 scale-y-0 group-hover:scale-y-100`}></div>
<div className="absolute left-[-9px] sm:left-[-11px] top-8 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-800 ring-4 ring-white dark:ring-slate-800">
<div className={`w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full group-hover:bg-${color} transition-colors`}></div>
</div>
<p className={`text-sm font-semibold uppercase tracking-wider text-${color}`}>{phase}</p>
<h4 className="mt-1 text-xl font-semibold text-slate-800 dark:text-slate-100 flex items-center">
<Icon className="w-5 h-5 mr-3 text-slate-500 dark:text-slate-400" />
{title}
</h4>
<div className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
{children}
</div>
  </div>
);

export default function PilotProgramSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();

  return (
    <>
      {/* <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      <section id="pilot" className="py-16 md:py-20 bg-slate-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
              Launch Your Pilot in 90 Days
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our program is structured to deliver the quantifiable data your board and regulators need to scale with confidence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* TimelineItem components remain unchanged */}
            <TimelineItem phase="Days 1-30" title="Foundation & Integration" icon={Rocket} color="verto-orange">
              <p>Set governance, security, and compliance controls. Deploy the self-hosted stack, integrate with core systems, and onboard initial agents and merchants. Encode policies into Verto’s AI engine for automated enforcement.</p>
            </TimelineItem>

            <TimelineItem phase="Days 31-60" title="Live Operations & Monitoring" icon={Target} color="verto-green">
              <p>Go live with limited issuance and payments. Operate under 24×7 monitoring by Verto’s global security and platform teams. Track adoption, performance, and compliance while validating operational readiness.</p>
            </TimelineItem>

            <TimelineItem phase="Days 61-90" title="Analysis & Strategic Reporting" icon={BarChart3} color="verto-blue">
              <p>Deliver full regulatory audit trail, ROI/TCO benchmarking, and stress-tested performance data. Close remediation items and present a phased enterprise rollout plan with governance and controls in place.</p>
            </TimelineItem>
          </div>

          {/* --- NEW CTA SECTION --- */}
          <div className="mt-12 text-center">
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-verto-blue hover:border-verto-green bg-transparent hover:bg-verto-blue/5 dark:hover:bg-verto-blue/10 text-slate-800 dark:text-slate-200 hover:text-verto-blue dark:hover:text-verto-blue font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-verto-blue/20"
            >
              <span>Apply for the Pilot Program</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:text-verto-blue transition-all" />
            </button>
             <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Limited spots available for our next cohort.</p>
          </div>

        </div>
      </section>
      
      <CalendlyModal title="Apply for the Pilot Program" />
    </>
  );
}