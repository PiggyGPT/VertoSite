import { Bus, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50/40 via-orange-50/30 to-yellow-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-700/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="problem-title">
            Minting is easy. Adoption is hard.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed" data-testid="problem-subtitle">
            Your coins only create value when customers hold them, merchants accept them, and regulators trust them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CEO Quote */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700" data-testid="quote-ceo">
            <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-4 italic">
              "We're a cash-first country — how do we put stablecoins in every customer’s hands instantly through the kiosks and agents they already trust?"
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-3">
                <Bus className="text-verto-blue w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">CEO</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Regional Bank</p>
              </div>
            </div>
          </div>

          {/* CCO Quote */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700" data-testid="quote-cco">
            <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-4 italic">
              "How do we prevent irreversible theft and deliver regulator-proof audits on public ledgers when our systems are built entirely on centralized control?"
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-verto-purple/10 rounded-lg flex items-center justify-center mr-3">
                <Shield className="text-verto-purple w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">CISO</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Global Payment Firm</p>
              </div>
            </div>
          </div>

          {/* Head of Payments Quote */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700" data-testid="quote-head-payments">
            <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-4 italic">
              "How do we scale when wallet pop-ups murder checkout conversion and merchants can’t reconcile stablecoin payments?"
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-verto-green/10 rounded-lg flex items-center justify-center mr-3">
                <CreditCard className="text-verto-green w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Head of Payments</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Multinational PSP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
