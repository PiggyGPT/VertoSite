import { Coins, CreditCard, ArrowLeftRight, Check } from "lucide-react";

export default function InfrastructureSection() {

  return (
    <section id="infrastructure" className="py-20 bg-white animate-slide-up">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-900 mb-4" data-testid="infrastructure-title">
            Verto Infrastructure
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" data-testid="infrastructure-subtitle">
            Verto brings 3 proven models into a self-hosted, blockchain‑native stack
          </p>
        </div>



        {/* Infrastructure Pillars - Full Width Sections */}
        <div className="space-y-20">
          {/* Pillar 1: Issuance */}
          <div className="bg-gradient-to-r from-verto-green/5 to-verto-green/10 border-l-4 border-verto-green rounded-lg p-10" data-testid="pillar-minting">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-verto-green/10 rounded-xl flex items-center justify-center mr-6">
                    <Coins className="w-8 h-8 text-verto-green" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">1. Issuance</h3>
                    <p className="text-lg text-slate-600">Cash‑to‑stablecoins through existing retail agents</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ul className="text-slate-700 space-y-4">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                      <span>Any existing kiosk, agent, or bank API can mint or burn stablecoins with no additional hardware costs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                      <span>Zero treasury float — each token backed 1:1, with tokens minted directly to user wallets</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                      <span>Compliance checks run at the exact point of transaction</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-green mt-1 mr-3 flex-shrink-0" />
                      <span>No central bottlenecks — scale country‑wide using your existing distribution network</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-8 rounded-xl border border-verto-green/30 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-verto-green/20 rounded-lg flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-verto-green">
                      <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-current">M-PESA</text>
                    </svg>
                  </div>
                  <p className="font-bold text-lg text-slate-900">Proven Model: M‑Pesa</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Leverage the same distribution model that made M‑Pesa part of 60% of Kenya's GDP for stablecoins. 
                  Turn every kiosk and agent into a digital currency gateway.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="bg-gradient-to-r from-verto-purple/5 to-verto-purple/10 border-l-4 border-verto-purple rounded-lg p-10" data-testid="pillar-payments">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-verto-purple/10 rounded-xl flex items-center justify-center mr-6">
                    <CreditCard className="w-8 h-8 text-verto-purple" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">2. Payments</h3>
                    <p className="text-lg text-slate-600">Seamless one-tap payments with developer‑first APIs</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ul className="text-slate-700 space-y-4">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-purple mt-1 mr-3 flex-shrink-0" />
                      <span>Developer‑first APIs and SDKs for integration with any POS, app, or checkout flow</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-purple mt-1 mr-3 flex-shrink-0" />
                      <span>Instant creation of payment links or QR codes for in‑store and online payments from any wallet or CEX</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-purple mt-1 mr-3 flex-shrink-0" />
                      <span>Custody‑free flow — funds move directly to merchant wallets on‑chain</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-purple mt-1 mr-3 flex-shrink-0" />
                      <span>Gas sponsorship removes blockchain fee friction for customers</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-8 rounded-xl border border-verto-purple/30 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-verto-purple/20 rounded-lg flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-verto-purple">
                      <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-current">STRIPE</text>
                    </svg>
                  </div>
                  <p className="font-bold text-lg text-slate-900">Proven Model: Stripe</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Merchants integrate fast, customers pay from anywhere, and accounting teams see instant, automated reconciliation — 
                  matching the ease and speed that made Stripe indispensable.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="bg-gradient-to-r from-verto-blue/5 to-verto-blue/10 border-l-4 border-verto-blue rounded-lg p-10" data-testid="pillar-settlement">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-verto-blue/10 rounded-xl flex items-center justify-center mr-6">
                    <ArrowLeftRight className="w-8 h-8 text-verto-blue" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">3. Liquidity</h3>
                    <p className="text-lg text-slate-600">Multi-chain routing with built-in compliance</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ul className="text-slate-700 space-y-4">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-blue mt-1 mr-3 flex-shrink-0" />
                      <span>Accept any token on any public chain, settle in your preferred operating currency</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-blue mt-1 mr-3 flex-shrink-0" />
                      <span>AI‑driven routing finds the safest, lowest‑slippage path across public LPs, bridges, and FX pairs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-verto-blue mt-1 mr-3 flex-shrink-0" />
                      <span>Real-time audit trails for every on-chain payment</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-8 rounded-xl border border-verto-blue/30 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-verto-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-verto-blue">
                      <text x="12" y="16" textAnchor="middle" className="text-xs font-bold fill-current">SWIFT</text>
                    </svg>
                  </div>
                  <p className="font-bold text-lg text-slate-900">Proven Model: SWIFT</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
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
