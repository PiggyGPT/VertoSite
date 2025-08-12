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



        {/* Infrastructure Pillars - Visual Impact Design */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pillar 1: Issuance */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300" data-testid="pillar-minting">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/50 to-emerald-100/50 dark:from-green-800/30 dark:to-emerald-800/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-verto-green/15 border-2 border-verto-green/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coins className="w-8 h-8 text-verto-green" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Issuance</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">M-Pesa distribution model for stablecoins</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-green rounded-full mr-3"></div>
                  <span>200,000+ agent network ready</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-green rounded-full mr-3"></div>
                  <span>Zero treasury float</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-green rounded-full mr-3"></div>
                  <span>Real-time compliance trails</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300" data-testid="pillar-payments">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/50 to-violet-100/50 dark:from-purple-800/30 dark:to-violet-800/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-verto-purple/15 border-2 border-verto-purple/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-verto-purple" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Payments</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">Stripe simplicity for blockchain payments</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-purple rounded-full mr-3"></div>
                  <span>One-tap QR payments</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-purple rounded-full mr-3"></div>
                  <span>Developer-first APIs</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-purple rounded-full mr-3"></div>
                  <span>Gas-free UX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300" data-testid="pillar-settlement">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 dark:from-blue-800/30 dark:to-indigo-800/30 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-verto-blue/15 border-2 border-verto-blue/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-8 h-8 text-verto-blue" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Liquidity</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">SWIFT reliability for blockchain routing</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-blue rounded-full mr-3"></div>
                  <span>Multi-chain settlement</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-blue rounded-full mr-3"></div>
                  <span>Policy-driven routing</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-verto-blue rounded-full mr-3"></div>
                  <span>Real-time audit trails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
