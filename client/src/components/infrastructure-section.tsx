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
            Unifies 3 key operational workflows using proven models
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
          {/* Pillar 1: Minting */}
          <div className="border border-slate-200 rounded-lg" data-testid="pillar-minting">
            <button
              onClick={() => togglePillar('minting')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center">
                <Smartphone className="w-6 h-6 text-slate-600 mr-4" />
                <h3 className="text-xl font-semibold text-slate-900">Minting — M‑Pesa‑Style Edge Issuance</h3>
              </div>
              {expandedPillar === 'minting' ? 
                <ChevronDown className="w-5 h-5 text-slate-500" /> : 
                <ChevronRight className="w-5 h-5 text-slate-500" />
              }
            </button>
            {expandedPillar === 'minting' && (
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-3">Edge Distribution</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Retail agent networks</li>
                      <li>• Kiosks & ATMs</li>
                      <li>• Mobile app integration</li>
                      <li>• POS terminal support</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-3">Multi‑Chain Support</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Ethereum mainnet</li>
                      <li>• Polygon & L2s</li>
                      <li>• Cross‑chain bridges</li>
                      <li>• Future protocol support</li>
                    </ul>
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
                <h3 className="text-xl font-semibold text-slate-900">Payments — Stripe‑Style Seamlessness</h3>
              </div>
              {expandedPillar === 'payments' ? 
                <ChevronDown className="w-5 h-5 text-slate-500" /> : 
                <ChevronRight className="w-5 h-5 text-slate-500" />
              }
            </button>
            {expandedPillar === 'payments' && (
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-3">Merchant Tools</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Online checkout widgets</li>
                      <li>• POS system integration</li>
                      <li>• Invoice & billing APIs</li>
                      <li>• Real‑time reporting</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-3">Consumer Access</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Any wallet support</li>
                      <li>• Exchange integrations</li>
                      <li>• QR code payments</li>
                      <li>• Mobile‑first design</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pillar 3: Settlement */}
          <div className="border border-slate-200 rounded-lg" data-testid="pillar-settlement">
            <button
              onClick={() => togglePillar('settlement')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-slate-600 mr-4" />
                <h3 className="text-xl font-semibold text-slate-900">Liquidity — SWIFT‑Style Settlement</h3>
              </div>
              {expandedPillar === 'settlement' ? 
                <ChevronDown className="w-5 h-5 text-slate-500" /> : 
                <ChevronRight className="w-5 h-5 text-slate-500" />
              }
            </button>
            {expandedPillar === 'settlement' && (
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-3">Cross‑Chain Routing</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Optimal path selection</li>
                      <li>• Risk‑weighted routing</li>
                      <li>• MEV protection</li>
                      <li>• Slippage minimization</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-3">Settlement Assurance</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Real‑time finality</li>
                      <li>• Atomic swaps</li>
                      <li>• Escrow protection</li>
                      <li>• Dispute resolution</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
