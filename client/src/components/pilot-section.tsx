import { Coins, CreditCard, ArrowLeftRight, Gauge, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PilotSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="pilot" className="py-20 animate-slide-up">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="pilot-title">
              Ship in 90 days
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Launch your complete stablecoin infrastructure with real customer transactions, not just POCs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card data-testid="deliverable-cash">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-verto-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Coins className="text-verto-green text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-verto-blue dark:text-blue-400 mb-3">Cash Infrastructure</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Live mint/burn at kiosks, agents, and banks — zero float, proof on‑chain</p>
              </CardContent>
            </Card>
            <Card data-testid="deliverable-payments">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-verto-purple/10 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="text-verto-purple text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-verto-blue dark:text-blue-400 mb-3">Payment Acceptance</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">POS, QR, and online checkout — any wallet, CEX, token, chain accepted</p>
              </CardContent>
            </Card>
            <Card data-testid="deliverable-liquidity">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-verto-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <ArrowLeftRight className="text-verto-blue text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-verto-blue dark:text-blue-400 mb-3">Liquidity & Reconciliation</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">AI‑routed, FX‑locked multi‑chain settlement with full audit transparency</p>
              </CardContent>
            </Card>
            <Card data-testid="deliverable-control">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-verto-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Gauge className="text-verto-orange text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-verto-blue dark:text-blue-400 mb-3">Command & Control</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Unified dashboards for risk, volume, and compliance — with board‑ready reports</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="px-8 py-3 verto-gradient text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md"
              data-testid="button-pilot-cta"
            >
              Launch Pilot in 90 days
            </Button>
            <Button 
              className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              data-testid="button-risk-review"
            >
              Free Risk & Compliance Review →
            </Button>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 animate-slide-up">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-verto-blue mb-8" data-testid="why-now-title">Why Now</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6" data-testid="stat-700b">
              <div className="text-3xl font-bold text-verto-green mb-2">$700B</div>
              <p className="text-verto-gray-600">monthly stablecoin settlement — half Visa's volume — mostly on public blockchains</p>
            </div>
            <div className="p-6" data-testid="stat-18months">
              <div className="text-3xl font-bold text-verto-purple mb-2">18 Months</div>
              <p className="text-verto-gray-600">US/EU clarity creates first‑mover advantage window</p>
            </div>
            <div className="p-6" data-testid="stat-75percent">
              <div className="text-3xl font-bold text-verto-blue mb-2">75%</div>
              <p className="text-verto-gray-600">required reduction in cross‑border costs — blockchain‑native stablecoins are the answer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
