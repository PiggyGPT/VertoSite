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



        {/* Infrastructure Pillars - Full Width Sections */}
        <div className="space-y-16">
          {/* Pillar 1: Issuance */}
          <div className="bg-slate-50 rounded-lg p-8" data-testid="pillar-minting">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    {/* M-Pesa Logo Placeholder */}
                    <div className="text-green-600 font-bold text-xs">M-PESA</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-1">1. Issuance</h3>
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
              
              <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg">
                <p className="text-slate-600 leading-relaxed">
                  Leverage the same distribution model that made M‑Pesa part of 60% of Kenya's GDP for stablecoins. 
                  Turn every kiosk and agent into a digital currency gateway.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="bg-slate-50 rounded-lg p-8" data-testid="pillar-payments">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    {/* Stripe Logo Placeholder */}
                    <div className="text-purple-600 font-bold text-xs">STRIPE</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-1">2. Payments</h3>
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
              
              <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg">
                <p className="text-slate-600 leading-relaxed">
                  Merchants integrate fast, customers pay from anywhere, and accounting teams see instant, automated reconciliation — 
                  matching the ease and speed that made Stripe indispensable.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="bg-slate-50 rounded-lg p-8" data-testid="pillar-settlement">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    {/* SWIFT Logo Placeholder */}
                    <div className="text-blue-600 font-bold text-xs">SWIFT</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-1">3. Liquidity</h3>
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
              
              <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg">
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
