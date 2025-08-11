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



        {/* Infrastructure Pillars - Visual Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pillar 1: Cash Minting */}
          <div className="bg-gradient-to-br from-verto-green/5 to-verto-green/10 border-2 border-verto-green/20 rounded-xl p-8" data-testid="pillar-minting">
            <div className="w-16 h-16 bg-verto-green/10 rounded-xl flex items-center justify-center mb-6">
              <Coins className="w-8 h-8 text-verto-green" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Cash Minting</h3>
            <p className="text-slate-600 mb-6">Cash‑to‑stablecoins through existing retail agents.</p>
            
            <div className="space-y-4">
              <ul className="text-sm text-slate-700 space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-green mt-0.5 mr-2 flex-shrink-0" />
                  Any existing kiosk, agent, or bank API can mint or burn stablecoins with no additional hardware costs
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-green mt-0.5 mr-2 flex-shrink-0" />
                  Zero treasury float — each token backed 1:1, with tokens minted directly to user wallets
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-green mt-0.5 mr-2 flex-shrink-0" />
                  Compliance checks run at the exact point of transaction
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-green mt-0.5 mr-2 flex-shrink-0" />
                  No central bottlenecks — scale country‑wide using your existing distribution network
                </li>
              </ul>
              
              <div className="bg-white/50 backdrop-blur p-4 rounded-lg border border-verto-green/20">
                <p className="font-semibold text-slate-900 mb-2">Proven model: M‑Pesa</p>
                <p className="text-sm text-slate-600">Leverage the same distribution model that made M‑Pesa part of 60% of Kenya's GDP for stablecoins</p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="bg-gradient-to-br from-verto-purple/5 to-verto-purple/10 border-2 border-verto-purple/20 rounded-xl p-8" data-testid="pillar-payments">
            <div className="w-16 h-16 bg-verto-purple/10 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-verto-purple" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Payments</h3>
            <p className="text-slate-600 mb-6">Seamless one-tap payments with developer‑first APIs.</p>
            
            <div className="space-y-4">
              <ul className="text-sm text-slate-700 space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-purple mt-0.5 mr-2 flex-shrink-0" />
                  Developer‑first APIs and SDKs for integration with any POS, app, or checkout flow
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-purple mt-0.5 mr-2 flex-shrink-0" />
                  Instant creation of payment links or QR codes for in‑store and online payments from any wallet or CEX
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-purple mt-0.5 mr-2 flex-shrink-0" />
                  Custody‑free flow — funds move directly to merchant wallets on‑chain
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-purple mt-0.5 mr-2 flex-shrink-0" />
                  Gas sponsorship removes blockchain fee friction for customers
                </li>
              </ul>
              
              <div className="bg-white/50 backdrop-blur p-4 rounded-lg border border-verto-purple/20">
                <p className="font-semibold text-slate-900 mb-2">Proven model: Stripe</p>
                <p className="text-sm text-slate-600">Merchants integrate fast, customers pay from anywhere, and accounting teams see instant, automated reconciliation — matching the ease and speed that made Stripe indispensable.</p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="bg-gradient-to-br from-verto-blue/5 to-verto-blue/10 border-2 border-verto-blue/20 rounded-xl p-8" data-testid="pillar-settlement">
            <div className="w-16 h-16 bg-verto-blue/10 rounded-xl flex items-center justify-center mb-6">
              <ArrowLeftRight className="w-8 h-8 text-verto-blue" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Liquidity</h3>
            <p className="text-slate-600 mb-6">Multi-chain routing with built-in compliance.</p>
            
            <div className="space-y-4">
              <ul className="text-sm text-slate-700 space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-blue mt-0.5 mr-2 flex-shrink-0" />
                  Accept any token on any public chain, settle in your preferred operating currency
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-blue mt-0.5 mr-2 flex-shrink-0" />
                  AI‑driven routing finds the safest, lowest‑slippage path across public LPs, bridges, and FX pairs
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-verto-blue mt-0.5 mr-2 flex-shrink-0" />
                  Real-time audit trails for every on-chain payment
                </li>
              </ul>
              
              <div className="bg-white/50 backdrop-blur p-4 rounded-lg border border-verto-blue/20">
                <p className="font-semibold text-slate-900 mb-2">Proven model: SWIFT</p>
                <p className="text-sm text-slate-600">Tap into public blockchain liquidity by routing across public chain bridges and DEXs — with the risk management and compliance of SWIFT's correspondent bank payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
