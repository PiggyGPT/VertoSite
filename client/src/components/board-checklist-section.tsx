import { Check, TrendingUp, Shield, BarChart3 } from "lucide-react";

export default function BoardChecklistSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50/40 to-blue-50/10 dark:from-gray-900 dark:via-gray-800/40 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">Launch Pilot in 90 days</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
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
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Answer Your Board</h3>
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
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-green/15 border border-verto-green/30 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-verto-green" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Scale with Confidence</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-verto-green/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-4 h-4 text-verto-green" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white text-sm">Live Operations</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">Real customer transactions from day one</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-verto-green/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-4 h-4 text-verto-green" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white text-sm">Payment Rails</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">POS, QR, online — any wallet accepted</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-verto-green/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-4 h-4 text-verto-green" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white text-sm">Risk Management</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">Real-time monitoring your CISO trusts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}