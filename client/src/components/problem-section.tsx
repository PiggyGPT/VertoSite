import { Bus, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight" data-testid="problem-title">
            "Stablecoins are an Operational Nightmare"
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" data-testid="problem-subtitle">
            These aren't just blockchain problems — they're operational orchestration and institutionalisation challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CEO Quote */}
          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="quote-ceo">
            <blockquote className="text-slate-700 leading-relaxed text-base mb-4 italic">
              "The revenue upside is huge — but how do I explain an unquantifiable risk to my board when no major bank has ever run a stablecoin at scale on a public blockchain?"
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-3">
                <Bus className="text-verto-blue w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">CEO</p>
                <p className="text-xs text-slate-500">Regional Bank</p>
              </div>
            </div>
          </div>

          {/* CCO Quote */}
          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="quote-cco">
            <blockquote className="text-slate-700 leading-relaxed text-base mb-4 italic">
              "Who actually controls the keys? How do we enforce our risk policies across multiple public chains in real time — and prove it to regulators without hiring an army?"
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-verto-purple/10 rounded-lg flex items-center justify-center mr-3">
                <Shield className="text-verto-purple w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Chief Compliance Officer</p>
                <p className="text-xs text-slate-500">Global Payment Firm</p>
              </div>
            </div>
          </div>

          {/* Head of Payments Quote */}
          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="quote-head-payments">
            <blockquote className="text-slate-700 leading-relaxed text-base mb-4 italic">
              "Integrating PSPs to accept stablecoins can take months. Public‑chain UX and reconciliation is a nightmare, and every latency spike or DEX slippage hits my margins."
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-verto-green/10 rounded-lg flex items-center justify-center mr-3">
                <CreditCard className="text-verto-green w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Head of Payments</p>
                <p className="text-xs text-slate-500">Multinational PSP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
