import { Coins, CreditCard, ArrowLeftRight, Check } from "lucide-react";

export default function InfrastructureSection() {

  return (
    <section id="infrastructure" className="py-20 bg-white">
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
                    <p className="text-slate-600">Cash‑to‑stablecoins through existing retail agents</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Any existing kiosk, agent, or bank API can mint or burn stablecoins</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Zero treasury float — each token backed 1:1</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Compliance checks at transaction point</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Scale using existing distribution network</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leverage the same distribution model that made M‑Pesa part of 60% of Kenya's GDP for stablecoins. 
                  Turn every kiosk and agent into a digital currency gateway.
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
                    <span className="text-sm text-slate-700">Developer‑first APIs and SDKs for any POS or checkout</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Instant payment links and QR codes</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Custody‑free flow to merchant wallets</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">Gas sponsorship removes blockchain friction</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Merchants integrate fast, customers pay from anywhere, and accounting teams see instant, automated reconciliation — 
                  matching the ease and speed that made Stripe indispensable.
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
                    <span className="text-sm text-slate-700">Accept any token, settle in preferred currency</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verto-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">AI‑driven routing across public LPs and bridges</span>
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
                  Tap into public blockchain liquidity by routing across public chain bridges and DEXs — 
                  with the risk management and compliance of SWIFT's correspondent bank payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
