import { Check, TrendingUp, Shield, BarChart3 } from "lucide-react";

export default function BoardChecklistSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/60 via-amber-50/50 to-yellow-50/40 dark:from-gray-900 dark:via-gray-800/40 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">Launch your pilot in 90 days</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Our program is structured to deliver the quantifiable data your stakeholders need to scale with confidence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Board Questions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-verto-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Your Pilot Deliverables	</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-verto-green bg-verto-green/5 dark:bg-verto-green/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">Live Issuance Operations</p>
                <p className="text-slate-600 dark:text-slate-300">From cash to stablecoins. Available at select kiosks, ATMs, and partner apps.</p>
              </div>
              <div className="border-l-4 border-verto-purple bg-verto-purple/5 dark:bg-verto-purple/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">Live POS & Online Payment Acceptance</p>
                <p className="text-slate-600 dark:text-slate-300">From any consumer wallet or CEX account. Available at select merchants.</p>
              </div>
              <div className="border-l-4 border-verto-blue bg-verto-blue/5 dark:bg-verto-blue/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">A Complete Audit Report</p>
                <p className="text-slate-600 dark:text-slate-300">Compiled compliance trail of all pilot transactions for regulatory review.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Scale Confidently */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-green/10 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-verto-green" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Your Strategic Outcomes</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-verto-orange bg-verto-orange/5 dark:bg-verto-orange/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">Stress-Tested Performance Data</p>
                <p className="text-slate-600 dark:text-slate-300">Answer your board's question: "How much volume can we handle?"</p>
              </div>
              <div className="border-l-4 border-verto-green bg-verto-green/5 dark:bg-verto-green/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">A Clear ROI & TCO Analysis</p>
                <p className="text-slate-600 dark:text-slate-300">Directly compare operational costs against traditional payment rails.</p>
              </div>
              <div className="border-l-4 border-verto-blue bg-verto-blue/5 dark:bg-verto-blue/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2"> Regulatory Compliance Certainty</p>
                <p className="text-slate-600 dark:text-slate-300">Confidently answer the question: "What happens if regulators audit us?"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}