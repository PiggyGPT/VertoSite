import { Check, Rocket, BarChart3, FileText, Target, DollarSign, Shield } from "lucide-react";

// Helper component for a timeline item
const TimelineItem = ({ phase, title, icon: Icon, color, children }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
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
  return (
    <section id="pilot-program" className="py-24 bg-slate-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
            Launch Your Pilot in 90 Days
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our program is structured to deliver the quantifiable data your board and regulators need to scale with confidence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <TimelineItem phase="Days 1-30" title="Foundation & Integration" icon={Rocket} color="verto-orange">
            <p>We integrate our platform with your core systems and onboard your initial set of agent and merchant partners. Compliance policies are encoded into the Verto AI engine.</p>
          </TimelineItem>

          <TimelineItem phase="Days 31-60" title="Live Operations & Monitoring" icon={Target} color="verto-green">
            <p>Your stablecoin goes live. We enable cash-to-stablecoin issuance and POS/online payment acceptance in a controlled environment, gathering real-world performance data.</p>
          </TimelineItem>

          <TimelineItem phase="Days 61-90" title="Analysis & Strategic Reporting" icon={BarChart3} color="verto-blue">
            <p>We deliver a comprehensive pilot report, including a full regulatory audit trail, ROI and TCO analysis against traditional rails, and stress-tested performance metrics for your stakeholders.</p>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}