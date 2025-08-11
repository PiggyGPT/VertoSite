import { Check } from "lucide-react";

export default function BoardChecklistSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="flex items-center mb-6">
              <Check className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-slate-900">You Can Answer Your Board:</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-medium">"How much volume can we handle?"</p>
                <p className="text-slate-600 text-sm mt-1">(Stress-tested to 10,000 TPS)</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-medium">"What if regulators audit us?"</p>
                <p className="text-slate-600 text-sm mt-1">(Complete transaction provenance)</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-medium">"How do we compare costs?"</p>
                <p className="text-slate-600 text-sm mt-1">(Real TCO analysis vs. correspondent banking)</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="flex items-center mb-6">
              <Check className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-slate-900">You Can Scale Confidently:</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700">Live mint/burn at select kiosks, agents, and apps — zero float, proof on‑chain</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700">Live POS and online payments from any wallet, CEX, token — integrated with your existing core banking stack</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700">Real-time risk & compliance monitoring that your CISO trusts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}