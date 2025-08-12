import { Coins, CreditCard, ArrowLeftRight, Check } from "lucide-react";

export default function InfrastructureSection() {

  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-br from-white via-slate-50/40 to-gray-50/20 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-700/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="infrastructure-title">
            Three pillars. One platform.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="infrastructure-subtitle">
            Verto unifies 3 proven operational models into a blockchain-native stack that's trusted by regulators and loved by customers.
          </p>
        </div>



        {/* Infrastructure Pillars - Story Format */}
        <div className="space-y-12">
          {/* Pillar 1: Issuance */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm" data-testid="pillar-minting">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-verto-green/10 border-2 border-verto-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Coins className="w-8 h-8 text-verto-green" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Issuance</h3>
                  <div className="px-3 py-1 bg-verto-green/10 border border-verto-green/30 rounded-full">
                    <span className="text-verto-green font-semibold text-sm">M-PESA MODEL</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      Issue or burn stablecoins the instant cash changes hands—at kiosks, agents, bank APIs, or vouchers. Enforce KYC/AML with real-time compliance trails.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Leveraging M-Pesa's Distribution Model</strong> removes treasury float and slashes on-ramp cost vs. bank flows through 200,000+ retail agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm" data-testid="pillar-payments">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-verto-purple/10 border-2 border-verto-purple/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-8 h-8 text-verto-purple" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Payments</h3>
                  <div className="px-3 py-1 bg-verto-purple/10 border border-verto-purple/30 rounded-full">
                    <span className="text-verto-purple font-semibold text-sm">STRIPE MODEL</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      Drop-in SDKs, QR codes, and APIs power a one-tap UX to accept payments from any wallet, CEX or bank.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Leveraging Stripe's merchant APIs and consumer UX</strong> makes your stablecoin the easiest way to get paid in any POS or app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Global Liquidity */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm" data-testid="pillar-settlement">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-verto-blue/10 border-2 border-verto-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <ArrowLeftRight className="w-8 h-8 text-verto-blue" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Global Liquidity</h3>
                  <div className="px-3 py-1 bg-verto-blue/10 border border-verto-blue/30 rounded-full">
                    <span className="text-verto-blue font-semibold text-sm">SWIFT MODEL</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      Accept any token on any chain, settle in your stablecoin via policy-routed liquidity pools with real-time audit trails.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Leveraging SWIFT's correspondent bank routing & compliance</strong> to access public blockchain liquidity pools with institutional trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
