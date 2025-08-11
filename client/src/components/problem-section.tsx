import { Bus, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight" data-testid="problem-title">
            Stablecoins Are an Operational Nightmare
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light" data-testid="problem-subtitle">
            These aren't just blockchain problems — they're operational orchestration and institutionalisation challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* CEO Quote */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300" data-testid="quote-ceo">
            <blockquote className="text-slate-700 leading-relaxed text-lg mb-6 font-light">
              "The revenue upside is huge — but how do I explain an unquantifiable risk to my board when no major bank has ever run a stablecoin at scale on a public blockchain?"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-xl flex items-center justify-center mr-4">
                <Bus className="text-verto-blue w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">CEO</p>
                <p className="text-sm text-slate-500">Regional Bank</p>
              </div>
            </div>
          </div>

          {/* CCO Quote */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300" data-testid="quote-cco">
            <blockquote className="text-slate-700 leading-relaxed text-lg mb-6 font-light">
              "Who actually controls the keys? How do we enforce our risk policies across multiple public chains in real time — and prove it to regulators without hiring an army?"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-verto-purple/10 rounded-xl flex items-center justify-center mr-4">
                <Shield className="text-verto-purple w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Chief Compliance Officer</p>
                <p className="text-sm text-slate-500">Global Payment Firm</p>
              </div>
            </div>
          </div>

          {/* Head of Payments Quote */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300" data-testid="quote-head-payments">
            <blockquote className="text-slate-700 leading-relaxed text-lg mb-6 font-light">
              "Integrating PSPs to accept stablecoins takes months. Public‑chain reconciliation is a nightmare, and every latency spike or FX loss hits my margins."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-verto-green/10 rounded-xl flex items-center justify-center mr-4">
                <CreditCard className="text-verto-green w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Head of Payments</p>
                <p className="text-sm text-slate-500">Multinational PSP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
