import { useState } from "react";
import { Coins, CreditCard, Globe, Shield, CheckCircle, Users, Store, QrCode, Smartphone, ArrowRight, Database, FileText, Zap, Rocket, BarChart3, Terminal, SlidersHorizontal } from "lucide-react";

function GlobalPresenceSection() {
  return (
    <section className="bg-slate-100 dark:bg-slate-800/50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <Globe className="mx-auto h-10 w-10 text-verto-blue" />
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
          Global Presence
        </h2>
        <p className="mt-4 text-2xl font-medium text-slate-700 dark:text-slate-200 tracking-wide">
          New York • Barcelona • Singapore
        </p>
        <p className="mt-3 max-w-2xl mx-auto text-md text-slate-600 dark:text-slate-400">
          Round-the-clock monitoring and support for your digital asset operations, ensuring uptime and security across all time zones.
        </p>
      </div>
    </section>
  );
}

// Helper component for styled feature list items
const FeatureItem = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
      <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
    </div>
    <div>
      <h4 className="text-md font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{children}</p>
    </div>
  </div>
);

// Visual component for the Distribution Flow
const DistributionFlow = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/70 dark:to-slate-900 rounded-2xl p-6 lg:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Agent Side */}
      <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 flex flex-col">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-verto-green" />
          <h3 className="font-semibold text-slate-800 dark:text-slate-200">Agent Terminal</h3>
        </div>
        <div className="space-y-3 flex-grow">
          <div className="text-xs p-2 rounded-md bg-slate-100 dark:bg-slate-700/50">
            <p className="font-mono text-slate-500 dark:text-slate-400">1. Prefund Credit Line</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300">✓ Balance: 5,000.00 BOB</p>
          </div>
          <div className="text-xs p-2 rounded-md bg-slate-100 dark:bg-slate-700/50">
            <p className="font-mono text-slate-500 dark:text-slate-400">2. Generate Minting QR</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Amount: 50.00 BOBC</p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">

        </div>
      </div>

      {/* Customer Side */}
      <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 flex flex-col">
        <div className="flex items-center space-x-2 mb-4">
          <Smartphone className="w-5 h-5 text-verto-green" />
          <h3 className="font-semibold text-slate-800 dark:text-slate-200">Customer App</h3>
        </div>
        <div className="space-y-3 flex-grow">
          <div className="text-xs p-2 rounded-md bg-slate-100 dark:bg-slate-700/50">
            <p className="font-mono text-slate-500 dark:text-slate-400">1. Deposit Cash</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Handed over 50.00 BOB</p>
          </div>
          <div className="text-xs p-2 rounded-md bg-slate-100 dark:bg-slate-700/50">
            <p className="font-mono text-slate-500 dark:text-slate-400">2. Scan & Mint</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Tap to confirm mint...</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-verto-green/10 rounded-lg text-center">
          <p className="text-sm font-bold text-verto-green">Success!</p>
          <p className="text-xs text-verto-green/80">50.00 BOBC minted to wallet.</p>
        </div>
      </div>
    </div>
  </div>
);

// Visual component for the Payments Flow
const PaymentsFlow = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/70 dark:to-slate-900 rounded-2xl p-6 lg:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800">
        <div className="flex flex-col h-full space-y-4">
            <div className="flex items-center space-x-2">
                <Store className="w-5 h-5 text-verto-purple"/>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Merchant Checkout</h3>
            </div>
            {/* Mock UI for POS */}
            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 flex-grow flex flex-col items-center justify-center space-y-4">
                <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">$25.99</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Present QR Code to Customer</p>
                <div className="p-2 bg-white rounded-lg"></div>
            </div>
            {/* Mock UI for Customer Confirmation */}
            <div className="bg-verto-purple/10 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-verto-purple"/>
                    <div>
                        <p className="font-semibold text-verto-purple text-sm">Customer Payment</p>
                        <p className="text-xs text-verto-purple/80">Scan, tap, and go. Gas sponsored.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-500"/>
                    <span className="text-xs font-medium text-green-500">Confirmed</span>
                </div>
            </div>
        </div>
    </div>
);

// Visual component for the Compliance Flow
const ComplianceFlow = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/70 dark:to-slate-900 rounded-2xl p-6 lg:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800">
        <div className="flex flex-col h-full space-y-4">
            <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-verto-blue"/>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Verto AI Compliance Dashboard</h3>
            </div>
            {/* Mock UI for Compliance Dashboard */}
            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 flex-grow space-y-4">
                <div>
                    <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Counterparty Risk Analysis</label>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-1">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-xs text-right font-mono text-slate-500 dark:text-slate-400 mt-1">Wallet 0x1a2b... <span className="text-green-500 font-bold">Score: A+</span></p>
                </div>
                 <div>
                    <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Policy Engine</label>
                     <div className="text-xs p-2 rounded-md bg-slate-100 dark:bg-slate-700/50 mt-1">
                        <p className="font-mono text-slate-500 dark:text-slate-400">IF risk &gt; B+ AND amount &gt; $10k</p>
                        <p className="font-semibold text-slate-700 dark:text-slate-300">THEN require manual_approval</p>
                    </div>
                </div>
            </div>
             <div className="bg-verto-blue/10 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-verto-blue"/>
                    <div>
                        <p className="font-semibold text-verto-blue text-sm">Com Report</p>
                        <p className="text-xs text-verto-blue/80">Every action is logged and verifiable.</p>
                    </div>
                </div>
                 <span className="text-xs font-mono text-slate-500">TXN_45b31... VERIFIED</span>
            </div>
        </div>
    </div>
);

export default function PillarsSection() {
  const [activeTab, setActiveTab] = useState("distribution");

  const pillars = {
    distribution: {
      label: "Distribution",
      color: "verto-green",
      title: "On-Demand Minting",
      description: "Instantly turn cash into stablecoins at any retail point. Our platform equips agent partners, from kiosks to mobile operators, to serve as on-ramps for your digital currency.",
      visual: <DistributionFlow />,
      features: [
        { icon: Users, title: "Leverage Existing Networks", description: "Scale adoption by activating vast, pre-existing retail and agent networks without new infrastructure." },
        { icon: Rocket, title: "Zero Float Operations", description: "On-demand minting is backed by real-time deposits, eliminating the need for a costly, pre-funded treasury." },
        { icon: Terminal, title: "Unified SDKs", description: "A single, simple integration for agent terminals, mobile apps, and backend reconciliation systems." },
      ],
      cta: "Get Distribution Playbook",
    },
    payments: {
      label: "Payments",
      color: "verto-purple",
      title: "Frictionless Checkout",
      description: "Our stack removes all blockchain complexity from payments. A single API lets merchants accept your stablecoin from any wallet, bank, or exchange, seamlessly.",
      visual: <PaymentsFlow />,
      features: [
        { icon: Zap, title: "Boost Conversion", description: "One-tap UX with sponsored gas fees removes friction and dramatically increases payment completion rates." },
        { icon: Store, title: "Universal Acceptance", description: "A single API unlocks a universal payment ecosystem, driving utility and adoption for your stablecoin." },
        { icon: FileText, title: "Automated Back-Office", description: "We handle routing, settlement, reconciliation, and reporting automatically, reducing operational overhead." },
      ],
      cta: "Explore Payments API",
    },
    compliance: {
      label: "Compliance",
      color: "verto-blue",
      title: "AI-Powered Compliance",
      description: "Verto's AI engine replaces manual, periodic counterparty audits with continuous, explainable, and automated oversight across your entire ecosystem.",
      visual: <ComplianceFlow />,
      features: [
        { icon: BarChart3, title: "Explainable Risk Ratings", description: "AI generates clear, transparent risk scores for every wallet, token, and protocol, with full data lineage." },
        { icon: SlidersHorizontal, title: "Policy-Driven Routing", description: "Define your risk appetite once. Our platform enforces your policies on every transaction automatically." },
        { icon: Shield, title: "Compliance Automation", description: "Generate human-readable, cryptographically verifiable logs of every compliance decision for regulators." },
      ],
      cta: "Request Compliance Demo",
    },
  };

  const activePillar = pillars[activeTab as keyof typeof pillars];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="text-center pt-20 pb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          The Operational Pillars
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-6">
          Four critical capabilities that transform your stablecoin from a technical achievement into a market-dominating force.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="-mb-px flex justify-center space-x-4 sm:space-x-6 overflow-x-auto" aria-label="Tabs">
            {Object.keys(pillars).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                  ${
                    activeTab === key
                      ? `border-${pillars[key as keyof typeof pillars].color} text-${pillars[key as keyof typeof pillars].color}`
                      : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
              >
                {pillars[key as keyof typeof pillars].label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="mb-8">
                <p className={`text-sm font-semibold uppercase tracking-wider text-${activePillar.color}`}>{activePillar.label}</p>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">{activePillar.title}</h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activePillar.description}
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {activePillar.features.map((feature: any) => (
                  <FeatureItem key={feature.title} icon={feature.icon} title={feature.title}>
                    {feature.description}
                  </FeatureItem>
                ))}
              </div>

              <button
                className={`inline-flex items-center px-6 py-3 bg-${activePillar.color} hover:bg-${activePillar.color}/90 text-white font-semibold rounded-lg transition-colors shadow-${activePillar.color}/30 shadow-lg`}
              >
                {activePillar.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="lg:col-span-7 mt-12 lg:mt-0">
              {activePillar.visual}
            </div>
          </div>
        </div>
      </div>
      <GlobalPresenceSection />
    </div>
  );
}