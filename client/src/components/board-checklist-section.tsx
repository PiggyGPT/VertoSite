import { Check, TrendingUp, Shield, BarChart3 } from "lucide-react";

export default function BoardChecklistSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-900 mb-4">Successful Pilot in 90 Days</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Go from board presentation to live stablecoin operations with quantifiable results your stakeholders trust.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Board Questions */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-verto-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">You Can Answer Your Board:</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-verto-green bg-verto-green/5 p-6 rounded-r-lg">
                <p className="text-slate-900 font-semibold mb-2">"How much volume can we handle?"</p>
                <p className="text-slate-600">Stress-tested to 10,000 TPS with real transaction data</p>
              </div>
              <div className="border-l-4 border-verto-purple bg-verto-purple/5 p-6 rounded-r-lg">
                <p className="text-slate-900 font-semibold mb-2">"What if regulators audit us?"</p>
                <p className="text-slate-600">Complete transaction provenance and compliance trails</p>
              </div>
              <div className="border-l-4 border-verto-blue bg-verto-blue/5 p-6 rounded-r-lg">
                <p className="text-slate-900 font-semibold mb-2">"How do we compare costs?"</p>
                <p className="text-slate-600">Real TCO analysis vs. correspondent banking operations</p>
              </div>
            </div>
          </div>

          {/* Right Column - Scale Confidently */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-verto-green/10 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-verto-green" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">You Can Scale Confidently:</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-slate-50 rounded-lg">
                <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-700">Live mint/burn at select kiosks, agents, and apps — zero float, proof on‑chain</p>
              </div>
              <div className="flex items-start p-6 bg-slate-50 rounded-lg">
                <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-700">Live POS and online payments from any wallet, CEX, token — integrated with your existing core banking stack</p>
              </div>
              <div className="flex items-start p-6 bg-slate-50 rounded-lg">
                <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-700">Real-time risk & compliance monitoring that your CISO trusts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}