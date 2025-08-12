import { Coins, CreditCard, ArrowLeftRight, Check } from "lucide-react";

export default function InfrastructureSection() {

  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-br from-white to-orange-50/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight" data-testid="infrastructure-title">
            Verto Infrastructure
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" data-testid="infrastructure-subtitle">
            Verto unifies 3 proven models into a blockchain-native stack that's trusted by regulators and loved by customers.
          </p>
        </div>



        {/* Infrastructure Pillars - Clean Professional Layout */}
        <div className="space-y-12">
          {/* Pillar 1: Issuance */}
          <div className="bg-white border border-slate-200 rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow" data-testid="pillar-minting">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-verto-green/10 border border-verto-green/30 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-verto-green font-semibold text-sm">M-PESA</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Issuance</h3>
                    <p className="text-slate-600">Cash to stablecoin ramps via existing distribution network</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Any kiosk or retail agent can issue stablecoins directly into consumer wallets</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Tap into existing retail distribution networks without additional hardware costs</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Zero treasury float — each token backed 1:1 with real-time minting</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Maintain full compliance trails for each issuance transaction</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  M‑Pesa processes 60% of Kenya's GDP through 200,000+ agents. Use the same proven retail distribution model for stablecoin issuance at institutional scale.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="bg-white border border-slate-200 rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow" data-testid="pillar-payments">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-verto-purple/10 border border-verto-purple/30 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-verto-purple font-semibold text-sm">STRIPE</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Payments</h3>
                    <p className="text-slate-600">Seamless one-tap payments with developer‑first APIs</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Accept payments from any wallet or CEX with developer‑first APIs</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Instant payment links and QR codes for any POS or checkout</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Custody‑free flow — funds move directly to merchant wallets</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Gas sponsorship removes blockchain friction for customers</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Stripe's $1T+ payment volume proves seamless developer experience drives adoption. Verto delivers the same simplicity for stablecoin payments across any blockchain.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="bg-white border border-slate-200 rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow" data-testid="pillar-settlement">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-verto-blue/10 border border-verto-blue/30 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-verto-blue font-semibold text-sm">SWIFT</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Liquidity</h3>
                    <p className="text-slate-600">Multi-chain routing with built-in compliance</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Accept any token from any chain, settle in preferred currency</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Policy‑driven routing across public LPs and bridges</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Real-time audit trails for every payment</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">SWIFT-grade risk management and compliance</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  SWIFT handles $150T+ annually with bulletproof compliance across 11,000+ institutions. Verto brings that same correspondent banking trust to public blockchain liquidity routing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
