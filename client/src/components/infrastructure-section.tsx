import { Coins, CreditCard, ArrowLeftRight, Check } from "lucide-react";

export default function InfrastructureSection() {

  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-br from-verto-green/10 via-emerald-50/40 to-green-50/30 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-700/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="infrastructure-title">
            Three pillars. One platform.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="infrastructure-subtitle">
            Verto unifies 3 core stablecoin operations into a self-hosted, modular stack that's trusted by regulators and loved by customers.
          </p>
        </div>



        {/* Infrastructure Pillars - Clean 2-Column Format */}
        <div className="space-y-8">
          {/* Pillar 1: Issuance */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm" data-testid="pillar-minting">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-verto-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Coins className="w-6 h-6 text-verto-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Issuance</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Issue or burn stablecoins the instant cash changes hands—at kiosks, agents, bank APIs, or vouchers. Enforce KYC/AML with real-time compliance trails.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-700 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-xs">M</span>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">MPesa-like Cash Ramps</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Removes treasury float and slashes on-ramp cost vs. bank flows through 200,000+ retail agents.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm" data-testid="pillar-payments">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-verto-purple/10 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6 text-verto-purple" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Payments</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Drop-in SDKs, QR codes, and APIs power a one-tap UX to accept payments from any wallet, CEX or bank.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">Stripe-like UX & APIs</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Makes your stablecoin the easiest way to get paid in any POS or app with a frictionless experience.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm" data-testid="pillar-settlement">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <ArrowLeftRight className="w-6 h-6 text-verto-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Liquidity</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Trade any digital asset on any chain with your stablecoin via policy-routed liquidity pools.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-xs">SW</span>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">SWIFT-like Routing Infrastructure</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Accesses public blockchain liquidity pools with correspondent banking-grade trust and institutional compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
