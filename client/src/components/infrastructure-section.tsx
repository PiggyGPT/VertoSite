import { Smartphone, Zap, Globe, Coins, Store, CreditCard, ShoppingCart, ArrowLeftRight, Network, Check, ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function InfrastructureSection() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const togglePillar = (pillarId: string) => {
    setExpandedPillar(expandedPillar === pillarId ? null : pillarId);
  };

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

        {/* Key Models */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="reference-mpesa">
            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">M‑Pesa Model</h3>
            <p className="text-slate-600 text-sm mb-2">Cash‑to‑digital access anywhere through existing retail agents</p>
            <div className="text-sm text-slate-500">→ Minting Infrastructure</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="reference-stripe">
            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Stripe Model</h3>
            <p className="text-slate-600 text-sm mb-2">Instant merchant onboarding and payments with developer‑first APIs</p>
            <div className="text-sm text-slate-500">→ Payment Infrastructure</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="reference-swift">
            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">SWIFT Model</h3>
            <p className="text-slate-600 text-sm mb-2">Trusted multi‑currency routing, reconciliation, and compliance</p>
            <div className="text-sm text-slate-500">→ Settlement Infrastructure</div>
          </div>
        </div>

        {/* Toggleable Infrastructure Pillars */}
        <div className="space-y-4">
          {/* Pillar 1: Cash Minting */}
          <div className="border border-slate-200 rounded-lg" data-testid="pillar-minting">
            <button
              onClick={() => togglePillar('minting')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center">
                <Smartphone className="w-6 h-6 text-slate-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">1. Cash Minting</h3>
                  <p className="text-sm text-slate-600">Cash‑to‑stablecoins through existing retail agents.</p>
                </div>
              </div>
              {expandedPillar === 'minting' ? 
                <ChevronDown className="w-5 h-5 text-slate-500" /> : 
                <ChevronRight className="w-5 h-5 text-slate-500" />
              }
            </button>
            {expandedPillar === 'minting' && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• Any existing kiosk, agent, or bank API can mint or burn stablecoins with no additional hardware costs</li>
                    <li>• Zero treasury float — each token backed 1:1, with tokens minted directly to user wallets</li>
                    <li>• Compliance checks run at the exact point of transaction.</li>
                    <li>• No central bottlenecks — scale country‑wide using your existing distribution network.</li>
                  </ul>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-slate-900 mb-2">Proven model: M‑Pesa</p>
                    <p className="text-sm text-slate-600">Leverage the same distribution model that made M‑Pesa part of 60% of Kenya's GDP for stablecoins</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pillar 2: Payments */}
          <div className="border border-slate-200 rounded-lg" data-testid="pillar-payments">
            <button
              onClick={() => togglePillar('payments')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center">
                <Zap className="w-6 h-6 text-slate-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">2. Payments</h3>
                  <p className="text-sm text-slate-600">seamless one-tap payments with developer‑first APIs.</p>
                </div>
              </div>
              {expandedPillar === 'payments' ? 
                <ChevronDown className="w-5 h-5 text-slate-500" /> : 
                <ChevronRight className="w-5 h-5 text-slate-500" />
              }
            </button>
            {expandedPillar === 'payments' && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• Developer‑first APIs and SDKs for integration with any POS, app, or checkout flow.</li>
                    <li>• Instant creation of payment links or QR codes for in‑store and online payments from any wallet or CEX</li>
                    <li>• Custody‑free flow — funds move directly to merchant wallets on‑chain.</li>
                    <li>• Gas sponsorship removes blockchain fee friction for customers.</li>
                  </ul>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-slate-900 mb-2">Proven model: Stripe</p>
                    <p className="text-sm text-slate-600">Merchants integrate fast, customers pay from anywhere, and accounting teams see instant, automated reconciliation — matching the ease and speed that made Stripe indispensable.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="border border-slate-200 rounded-lg" data-testid="pillar-settlement">
            <button
              onClick={() => togglePillar('settlement')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-slate-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">3. Liquidity — SWIFT‑Grade Routing</h3>
                  <p className="text-sm text-slate-600">Multi‑currency routing with built-in compliance.</p>
                </div>
              </div>
              {expandedPillar === 'settlement' ? 
                <ChevronDown className="w-5 h-5 text-slate-500" /> : 
                <ChevronRight className="w-5 h-5 text-slate-500" />
              }
            </button>
            {expandedPillar === 'settlement' && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• Accept any token on any public chain, settle in your preferred operating currency.</li>
                    <li>• AI‑driven routing finds the safest, lowest‑slippage path across public LPs, bridges, and FX pairs.</li>
                    <li>• real-time audit trails for every on-chain payment</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
