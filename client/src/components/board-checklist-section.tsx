import { Check, TrendingUp, Shield, BarChart3 } from "lucide-react";

export default function BoardChecklistSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/60 via-amber-50/50 to-yellow-50/40 dark:from-gray-900 dark:via-gray-800/40 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">Launch Pilot in 90 days</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our program is designed to deliver quantifiable data your stakeholders need to scale with confidence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Board Questions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-verto-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Answer Your Board</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-verto-green bg-verto-green/5 dark:bg-verto-green/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">"How much volume can we handle?"</p>
                <p className="text-slate-600 dark:text-slate-300">Stress-tested results and audits with real transaction data</p>
              </div>
              <div className="border-l-4 border-verto-purple bg-verto-purple/5 dark:bg-verto-purple/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">"What if regulators audit us?"</p>
                <p className="text-slate-600 dark:text-slate-300">Complete transaction provenance and compliance trails</p>
              </div>
              <div className="border-l-4 border-verto-blue bg-verto-blue/5 dark:bg-verto-blue/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">"How do we compare costs?"</p>
                <p className="text-slate-600 dark:text-slate-300">Real TCO analysis vs. correspondent banking operations</p>
              </div>
            </div>
          </div>

          {/* Right Column - Scale Confidently */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-green/10 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-verto-green" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Scale with Confidence</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-verto-orange bg-verto-orange/5 dark:bg-verto-orange/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">"We processed $2M volume in first 30 days"</p>
                <p className="text-slate-600 dark:text-slate-300">Live cash mint/burn operations at select kiosks, ATMs and apps.</p>
              </div>
              <div className="border-l-4 border-verto-green bg-verto-green/5 dark:bg-verto-green/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">"Payment acceptance increased 300%"</p>
                <p className="text-slate-600 dark:text-slate-300">Live POS & online payments from any wallet or CEX available at select merchants.</p>
              </div>
              <div className="border-l-4 border-verto-blue bg-verto-blue/5 dark:bg-verto-blue/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">"Compliance audit took 2 hours, not 2 weeks"</p>
                <p className="text-slate-600 dark:text-slate-300">Real-time risk monitoring with full transparency and explainability available to select regulators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}