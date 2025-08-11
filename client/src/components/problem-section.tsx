import { Bus, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section className="py-20 bg-slate-50 animate-slide-up">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" data-testid="problem-title">
            Stablecoins Are an Operational Nightmare
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="problem-subtitle">
            These aren't just blockchain problems — they're <strong>operational orchestration and institutionalisation challenges</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CEO Quote */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all" data-testid="quote-ceo">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Bus className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">CEO</p>
                <p className="text-sm text-slate-500">Regional Bank</p>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed font-medium">
              "The revenue upside is huge — but how do I explain an unquantifiable risk to my board when no major bank has ever run a stablecoin at scale on a public blockchain?"
            </blockquote>
          </div>

          {/* CCO Quote */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all" data-testid="quote-cco">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Chief Compliance Officer</p>
                <p className="text-sm text-slate-500">Global Payment Firm</p>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed font-medium">
              "Who actually controls the keys? How do we enforce our risk policies across multiple public chains in real time — and prove it to regulators without hiring an army?"
            </blockquote>
          </div>

          {/* Head of Payments Quote */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all" data-testid="quote-head-payments">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                <CreditCard className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Head of Payments</p>
                <p className="text-sm text-slate-500">Multinational PSP</p>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed font-medium">
              "Integrating PSPs to accept stablecoins takes months. Public‑chain reconciliation is a nightmare, and every latency spike or FX loss hits my margins."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
