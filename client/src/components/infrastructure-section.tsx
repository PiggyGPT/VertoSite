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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" data-testid="infrastructure-title">
            The Verto Infrastructure Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed" data-testid="infrastructure-subtitle">
            Verto leverages <strong>proven models</strong> and tailors them into blockchain‑native rails — delivering familiar user experiences with institutional‑grade controls.
          </p>
        </div>

        {/* Seamless Reference Integration */}
        <div className="bg-slate-50 rounded-3xl p-12 mb-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center group hover:shadow-xl transition-all" data-testid="reference-mpesa">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">M‑Pesa Model</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Cash‑to‑digital access anywhere through existing retail agents</p>
              <div className="mt-4 text-sm font-medium text-green-600">→ Minting Infrastructure</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center group hover:shadow-xl transition-all" data-testid="reference-stripe">
              <div className="w-20 h-20 verto-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Stripe Model</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Instant merchant onboarding and payments with developer‑first APIs</p>
              <div className="mt-4 text-sm font-medium text-purple-600">→ Payment Infrastructure</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center group hover:shadow-xl transition-all" data-testid="reference-swift">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">SWIFT Model</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Trusted multi‑currency routing, reconciliation, and compliance</p>
              <div className="mt-4 text-sm font-medium text-blue-600">→ Settlement Infrastructure</div>
            </div>
          </div>

          {/* Connecting Arrow */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-slate-200">
              <span className="text-slate-600 font-medium mr-2">Implemented as</span>
              <ArrowLeftRight className="w-5 h-5 text-slate-500" />
            </div>
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
