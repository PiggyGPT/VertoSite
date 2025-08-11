import { Bus, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section className="py-20 bg-slate-50 animate-slide-up">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-900 mb-4" data-testid="problem-title">
            Stablecoins Are an Operational Nightmare
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto" data-testid="problem-subtitle">
            These aren't just blockchain problems — they're operational orchestration and institutionalisation challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CEO Quote */}
          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="quote-ceo">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center mr-3">
                <Bus className="text-slate-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">CEO</p>
                <p className="text-sm text-slate-500">Regional Bank</p>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed">
              The revenue upside is huge — but how do I explain an unquantifiable risk to my board when no major bank has ever run a stablecoin at scale on a public blockchain?
            </blockquote>
          </div>

          {/* CCO Quote */}
          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="quote-cco">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center mr-3">
                <Shield className="text-slate-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Chief Compliance Officer</p>
                <p className="text-sm text-slate-500">Global Payment Firm</p>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed">
              Who actually controls the keys? How do we enforce our risk policies across multiple public chains in real time — and prove it to regulators without hiring an army?
            </blockquote>
          </div>

          {/* Head of Payments Quote */}
          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="quote-head-payments">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center mr-3">
                <CreditCard className="text-slate-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Head of Payments</p>
                <p className="text-sm text-slate-500">Multinational PSP</p>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed">
              Integrating PSPs to accept stablecoins takes months. Public‑chain reconciliation is a nightmare, and every latency spike or FX loss hits my margins.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
