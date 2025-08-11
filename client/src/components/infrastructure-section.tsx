import { Smartphone, Zap, Globe, Coins, Store, CreditCard, ShoppingCart, ArrowLeftRight, Network, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function InfrastructureSection() {
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
              <h3 className="text-2xl font-bold text-slate-900 mb-3">M‑Pesa Model</h3>
              <p className="text-slate-600 leading-relaxed">Cash‑to‑digital access anywhere through existing retail agents</p>
              <div className="mt-6 text-sm font-semibold text-green-600">→ Minting Infrastructure</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center group hover:shadow-xl transition-all" data-testid="reference-stripe">
              <div className="w-20 h-20 verto-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Stripe Model</h3>
              <p className="text-slate-600 leading-relaxed">Instant merchant onboarding and payments with developer‑first APIs</p>
              <div className="mt-6 text-sm font-semibold text-purple-600">→ Payment Infrastructure</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center group hover:shadow-xl transition-all" data-testid="reference-swift">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">SWIFT Model</h3>
              <p className="text-slate-600 leading-relaxed">Trusted multi‑currency routing, reconciliation, and compliance</p>
              <div className="mt-6 text-sm font-semibold text-blue-600">→ Settlement Infrastructure</div>
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

        {/* Infrastructure Pillars */}
        <div className="space-y-24">
          {/* Pillar 1: Minting */}
          <div className="mb-24" data-testid="pillar-minting">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-verto-green rounded-xl flex items-center justify-center mr-4">
                    <Coins className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-verto-blue">Minting — M‑Pesa‑Style Edge Issuance</h3>
                </div>
                <p className="text-lg text-verto-gray-600 mb-6">
                  The fastest way to grow a stablecoin network is by making <strong>cash‑to‑digital minting available everywhere</strong> — without new hardware or costly roll‑outs.
                </p>
                <ul className="space-y-3 text-verto-gray-600">
                  <li className="flex items-start">
                    <Check className="text-verto-green mr-3 mt-1 flex-shrink-0" />
                    Any existing kiosk, agent, or bank API can mint or burn stablecoins in seconds
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-green mr-3 mt-1 flex-shrink-0" />
                    <strong>Zero treasury float</strong> — each token backed 1:1, with proof posted on‑chain in real time
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-green mr-3 mt-1 flex-shrink-0" />
                    Compliance checks run at the exact point of transaction
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-green mr-3 mt-1 flex-shrink-0" />
                    No central bottlenecks — scale country‑wide using your existing distribution network
                  </li>
                </ul>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-verto-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Store className="text-3xl text-verto-green" />
                    </div>
                    <h4 className="text-xl font-semibold text-verto-blue mb-4">Outcome</h4>
                    <p className="text-verto-gray-600 leading-relaxed">
                      Cash becomes compliant digital dollars instantly — the same ubiquitous access model that made M‑Pesa part of 60% of Kenya's GDP, now extended to public blockchains with cryptographic proofs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="mb-24" data-testid="pillar-payments">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-verto-purple rounded-xl flex items-center justify-center mr-4">
                    <CreditCard className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-verto-blue">Payments — Stripe‑Style Seamlessness</h3>
                </div>
                <p className="text-lg text-verto-gray-600 mb-6">
                  Merchants and PSPs onboard in days — accepting stablecoins should feel as easy as adding a Stripe checkout button.
                </p>
                <ul className="space-y-3 text-verto-gray-600">
                  <li className="flex items-start">
                    <Check className="text-verto-purple mr-3 mt-1 flex-shrink-0" />
                    Developer‑first APIs and SDKs for integration with any POS, app, or checkout flow
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-purple mr-3 mt-1 flex-shrink-0" />
                    Instant creation of payment links or QR codes for in‑store and online use
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-purple mr-3 mt-1 flex-shrink-0" />
                    Accept from <strong>any wallet or CEX</strong> — token and chain differences handled automatically
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-purple mr-3 mt-1 flex-shrink-0" />
                    <strong>Custody‑free flow</strong> — funds move directly to merchant wallets on‑chain
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-purple mr-3 mt-1 flex-shrink-0" />
                    Gas sponsorship removes blockchain fee friction for customers
                  </li>
                </ul>
              </div>
              <Card className="lg:order-1">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-verto-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingCart className="text-3xl text-verto-purple" />
                    </div>
                    <h4 className="text-xl font-semibold text-verto-blue mb-4">Outcome</h4>
                    <p className="text-verto-gray-600 leading-relaxed">
                      Merchants integrate fast, customers pay from anywhere, and accounting teams see instant, automated reconciliation — matching the ease and speed that made Stripe indispensable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pillar 3: Liquidity */}
          <div className="mb-16" data-testid="pillar-liquidity">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-verto-blue rounded-xl flex items-center justify-center mr-4">
                    <ArrowLeftRight className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-verto-blue">Liquidity — SWIFT‑Grade On‑Chain Settlement</h3>
                </div>
                <p className="text-lg text-verto-gray-600 mb-6">
                  Cross‑chain settlement with the trust and control of the global FX system — adapted for open blockchain networks.
                </p>
                <ul className="space-y-3 text-verto-gray-600">
                  <li className="flex items-start">
                    <Check className="text-verto-blue mr-3 mt-1 flex-shrink-0" />
                    Accept any token on any public chain, settle in your preferred operating currency
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-blue mr-3 mt-1 flex-shrink-0" />
                    <strong>AI‑driven routing</strong> finds the safest, lowest‑slippage path across public LPs and bridges
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-blue mr-3 mt-1 flex-shrink-0" />
                    FX rates locked pre‑trade to protect margins
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-blue mr-3 mt-1 flex-shrink-0" />
                    KYC/AML and jurisdictional policies enforced automatically at every hop
                  </li>
                  <li className="flex items-start">
                    <Check className="text-verto-blue mr-3 mt-1 flex-shrink-0" />
                    Instant, explainable reconciliation stored immutably on‑chain
                  </li>
                </ul>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-verto-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Network className="text-3xl text-verto-blue" />
                    </div>
                    <h4 className="text-xl font-semibold text-verto-blue mb-4">Outcome</h4>
                    <p className="text-verto-gray-600 leading-relaxed">
                      Predictable, regulator‑safe settlement across the blockchain ecosystem — DeFi reach with SWIFT‑grade precision and oversight.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
