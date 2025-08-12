import { Check, TrendingUp, Shield, BarChart3 } from "lucide-react";

export default function BoardChecklistSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50/60 via-green-50/30 to-blue-50/20 dark:from-slate-800/60 dark:via-green-900/30 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-900 dark:text-white mb-4">Successful Pilot in 90 Days</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Go from board presentation to live stablecoin operations with quantifiable results your stakeholders trust.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Board Questions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-verto-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">You Can Answer Your Board:</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-verto-green bg-verto-green/5 dark:bg-verto-green/10 p-6 rounded-r-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">"How much volume can we handle?"</p>
                <p className="text-slate-600 dark:text-slate-300">Stress-tested to 10,000 TPS with real transaction data</p>
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
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">You Can Scale Confidently:</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-slate-50 dark:bg-gray-700 rounded-lg">
                <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">Live mint/burn at select kiosks, agents, and apps — zero float, proof on‑chain</p>
              </div>
              <div className="flex items-start p-6 bg-slate-50 dark:bg-gray-700 rounded-lg">
                <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">Live POS and online payments from any wallet, CEX, token — integrated with your existing core banking stack</p>
              </div>
              <div className="flex items-start p-6 bg-slate-50 dark:bg-gray-700 rounded-lg">
                <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">Real-time risk & compliance monitoring that your CISO trusts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}