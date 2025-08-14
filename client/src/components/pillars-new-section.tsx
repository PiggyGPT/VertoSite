// src/components/PlatformAndServicesSection.tsx

import { useState } from "react";
import { 
    Users, Rocket, Terminal, 
    Zap, Store, FileText, 
    Shield, BarChart3, SlidersHorizontal, 
    ArrowRightLeft, Database, GitBranch,
    Clock, Globe, LifeBuoy
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

// Helper component for styled feature list items
const FeatureItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start space-x-4 group">
    <div className="flex-shrink-0 w-11 h-11 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center
      transition-all duration-300 group-hover:bg-verto-blue/10 dark:group-hover:bg-verto-blue/20">
      <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 transition-all duration-300 group-hover:text-verto-blue" />
    </div>
    <div>
      <h4 className="text-md font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{children}</p>
    </div>
  </div>
);

// --- NEW & REDESIGNED VISUAL COMPONENTS ---

// Generic iPhone Mockup Frame
const IphoneFrame = ({ children, className = '' }) => (
    <div className={`relative w-[280px] h-[570px] bg-slate-800 dark:bg-black rounded-[40px] shadow-2xl p-3 border-4 border-slate-700 dark:border-slate-800 ${className}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 dark:bg-black rounded-b-xl"></div>
        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[28px] overflow-hidden">
            {children}
        </div>
    </div>
);

// 1. NEW Distribution Visual
const NewDistributionFlow = () => (
    <div className="flex justify-center items-center gap-6 lg:gap-8 flex-col sm:flex-row">
        <IphoneFrame>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 h-full text-slate-800 dark:text-slate-200">
                <h3 className="font-bold text-center text-lg">Agent Terminal</h3>
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-500">Available Credit</p>
                    <p className="text-4xl font-bold text-verto-green">$4,950.00</p>
                </div>
                <button className="w-full mt-6 py-3 bg-verto-green/10 text-verto-green font-semibold rounded-lg hover:bg-verto-green/20 transition-colors">
                    + Add Funds
                </button>
                <div className="mt-6">
                    <h4 className="font-semibold text-sm">Recent Activity</h4>
                    <div className="mt-2 space-y-2 text-xs">
                        <p className="flex justify-between p-2 bg-white dark:bg-slate-800 rounded-md"><span>Mint #3456</span><span className="font-mono text-green-500">+$50</span></p>
                        <p className="flex justify-between p-2 bg-white dark:bg-slate-800 rounded-md"><span>Mint #3455</span><span className="font-mono text-green-500">+$100</span></p>
                        <p className="flex justify-between p-2 bg-white dark:bg-slate-800 rounded-md"><span>Credit Top-up</span><span className="font-mono text-blue-500">+$5000</span></p>
                    </div>
                </div>
            </div>
        </IphoneFrame>
        <IphoneFrame>
            <div className="p-4 bg-white dark:bg-slate-900 h-full flex flex-col items-center justify-center text-center">
                 <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Generate Minting QR</h3>
                 <div className="my-6 p-4 bg-white rounded-lg shadow-md">
                     <QRCodeSVG value="https://verto.exchange/mint?amount=50" size={160} />
                 </div>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white">Mint $50.00 USDC</p>
                 <p className="text-sm text-slate-500 mt-1">Present to customer to scan.</p>
            </div>
        </IphoneFrame>
    </div>
);

// 2. NEW Payments Visual
const NewPaymentsFlow = () => (
    <div className="flex justify-center items-center gap-6 lg:gap-8 flex-col sm:flex-row">
        <IphoneFrame>
            <div className="p-4 bg-white dark:bg-slate-900 h-full flex flex-col items-center justify-center text-center">
                 <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Merchant POS</h3>
                 <p className="text-sm text-slate-500 mt-2">Requesting Payment</p>
                 <p className="text-6xl font-bold text-slate-900 dark:text-white my-6">$25.99</p>
                 <div className="p-4 bg-white rounded-lg shadow-md">
                     <QRCodeSVG value="https://verto.exchange/pay?amount=25.99" size={140} />
                 </div>
            </div>
        </IphoneFrame>
        {/* Stripe-like Checkout Screen */}
        <IphoneFrame className="w-[320px] h-[650px] sm:w-[375px] sm:h-[812px]">
            <div className="h-full flex flex-col bg-white font-['Montserrat']">
                {/* Blue Header */}
                <div className="relative h-[292px] bg-[#034DE5] flex flex-col items-center pt-20 text-white rounded-b-2xl">
                    <div className="flex items-center gap-4">
                        <img src="/logo-placeholder-white.svg" alt="Company Logo" className="h-16 w-16 rounded-full bg-white/20 p-2" />
                        <div className="text-left">
                            <p className="font-semibold">Pay Verto Inc.</p>
                            <p className="text-4xl font-bold">$25.99</p>
                        </div>
                    </div>
                </div>
                {/* Payment Body */}
                <div className="flex-grow p-5 flex flex-col">
                    <p className="font-semibold text-sm text-black/60">Pay with</p>
                    <div className="mt-3 p-3 bg-[#E9EDFC] rounded-xl">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 px-3 py-2 bg-black/5 rounded-md">
                                <Coins className="w-5 h-5 text-[#006DFF]" />
                                <span className="font-semibold text-sm text-[#13142B]">USDC</span>
                            </div>
                            <span className="font-bold text-2xl text-[#13142B]">25.99</span>
                        </div>
                        <p className="text-right text-xs mt-1 text-black/60">Balance: 5,102.50 USDC</p>
                    </div>
                    <div className="mt-3 p-3 bg-[#F7F7FD] rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-2">
                             <CreditCard className="w-5 h-5 text-slate-500" />
                             <span className="font-semibold text-sm text-[#13142B]">Bank Card</span>
                        </div>
                        <span className="text-slate-400 text-sm">...4242</span>
                    </div>
                    <div className="flex-grow"></div>
                    <button className="w-full py-4 bg-[#4E71E4] text-white font-semibold rounded-xl text-lg hover:bg-[#4E71E4]/90 transition">
                        Pay $25.99
                    </button>
                </div>
            </div>
        </IphoneFrame>
    </div>
);

// 3. NEW Liquidity Visual
const NewLiquidityFlow = () => (
    <div className="bg-slate-100/50 dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center">
            {/* Left: API Request */}
            <div className="w-full md:w-1/4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                    <Database className="w-8 h-8 mx-auto text-verto-blue"/>
                    <h4 className="font-semibold mt-2">Verto API Request</h4>
                    <p className="text-xs font-mono mt-1 text-slate-500">swap(ETH, USDC, 100)</p>
                </div>
            </div>
            {/* Middle: Smart Router */}
            <div className="w-full md:w-1/2 relative">
                <ArrowRightLeft className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 text-slate-400"/>
                <div className="p-6 bg-verto-blue/10 border-2 border-dashed border-verto-blue rounded-full aspect-square flex flex-col items-center justify-center">
                    <GitBranch className="w-12 h-12 text-verto-blue"/>
                    <h3 className="text-xl font-bold mt-2 text-verto-blue">Smart Router</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Finds optimal price, latency & risk</p>
                </div>
            </div>
            {/* Right: Protocols */}
            <div className="w-full md:w-1/4 grid grid-cols-2 gap-3">
                 {['Uniswap', 'Curve', 'Aave', '1inch'].map(name => (
                    <div key={name} className={`p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md ${name === 'Uniswap' ? 'border-2 border-verto-blue' : ''}`}>
                        <p className="font-semibold text-sm">{name}</p>
                    </div>
                 ))}
            </div>
        </div>
    </div>
);

// 4. NEW Service Visual
const ServiceClock = ({ city, time, offset }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 rounded-full bg-white/50 dark:bg-slate-700/50 border-2 border-white/80 dark:border-slate-600 flex items-center justify-center">
             <div className="absolute w-1 h-8 bg-slate-600 dark:bg-slate-300 rounded-full origin-bottom" style={{ transform: 'rotate(180deg)' }}></div>
             <div className="absolute w-1 h-10 bg-verto-cyan rounded-full origin-bottom" style={{ transform: `rotate(${offset}deg)` }}></div>
             <div className="w-2 h-2 bg-slate-800 dark:bg-white rounded-full z-10"></div>
        </div>
        <p className="mt-3 font-semibold text-slate-800 dark:text-slate-200">{city}</p>
        <p className="text-sm font-bold text-verto-cyan">{time}</p>
    </div>
);

const NewServiceFlow = () => (
    <div className="relative bg-slate-100/50 dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <Globe className="absolute -right-16 -top-10 w-64 h-64 text-slate-300/50 dark:text-slate-700/30 opacity-30" />
        <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">24/7 Global Operations Center</h3>
            <p className="mt-1 text-slate-600 dark:text-slate-400">Expert monitoring across all time zones.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <ServiceClock city="New York" time="09:19 AM" offset={160} />
                <ServiceClock city="Barcelona" time="03:19 PM" offset={270} />
                <ServiceClock city="Singapore" time="09:19 PM" offset={10} />
            </div>
        </div>
    </div>
);


// --- MAIN COMPONENT ---
export default function PlatformAndServicesSection() {
  const [activeTab, setActiveTab] = useState("distribution");

  // NOTE: If you get errors about colors like `border-verto-red`, 
  // ensure they are defined in your `tailwind.config.js` file, possibly in a safelist.
  const TABS = {
    distribution: {
      label: "Distribution",
      color: "verto-green",
      title: "On-Demand Minting",
      description: "Instantly turn cash into stablecoins at any retail point. Our platform equips agent partners, from kiosks to mobile operators, to serve as on-ramps for your digital currency.",
      visual: <NewDistributionFlow />,
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
      visual: <NewPaymentsFlow />,
      features: [
        { icon: Zap, title: "Boost Conversion Rates", description: "One-tap UX with sponsored gas fees removes friction and dramatically increases payment completion rates." },
        { icon: Store, title: "Universal Acceptance", description: "A single API unlocks a universal payment ecosystem, driving utility and adoption for your stablecoin." },
        { icon: FileText, title: "Automated Back-Office", description: "We handle routing, settlement, reconciliation, and reporting automatically, reducing operational overhead." },
      ],
      cta: "Explore Payments API",
    },
    liquidity: {
      label: "Liquidity",
      color: "verto-blue",
      title: "Universal Liquidity Access",
      description: "The on-chain market is complex and fragmented. Our single API provides a unified entry point to the entire ecosystem, automatically routing requests for optimal price, latency, and risk.",
      visual: <NewLiquidityFlow />,
      features: [
        { icon: GitBranch, title: "Smart Order Routing", description: "Our engine automatically routes every request to the best liquidity source across multiple protocols and chains." },
        { icon: Shield, title: "Uncompromised Sovereignty", description: "Our self-hosted layer integrates with your existing custody stack, so your assets and keys never leave your control." },
        { icon: FileText, title: "Compliant, Atomic Execution", description: "Automate the entire transaction workflow with a single, batched payload that enforces your predefined policies." },
      ],
      cta: "Integrate Liquidity API",
    },
    compliance: {
      label: "Compliance",
      color: "verto-orange",
      title: "AI-Powered Compliance",
      description: "Verto's AI engine replaces manual, periodic counterparty audits with continuous, explainable, and automated oversight across your entire ecosystem.",
      visual: <div>Compliance Visual Placeholder</div>, // Placeholder, can be designed
      features: [
        { icon: BarChart3, title: "Explainable Risk Ratings", description: "AI generates clear, transparent risk scores for every wallet, token, and protocol, with full data lineage." },
        { icon: SlidersHorizontal, title: "Policy-Driven Automation", description: "Define your risk appetite once. Our platform enforces your policies on every transaction automatically." },
        { icon: Shield, title: "Ironclad Audit Trails", description: "Generate human-readable, cryptographically verifiable logs of every compliance decision for regulators." },
      ],
      cta: "Request Compliance Demo",
    },
    service: {
        label: "Service",
        color: "verto-cyan",
        title: "24/7 Global Operations",
        description: "Our unique service model provides continuous vigilance on top of your self-hosted platform. You control your infrastructure; our expert teams ensure your operational integrity.",
        visual: <NewServiceFlow />,
        features: [
          { icon: Database, title: "Data Sovereignty & Control", description: "Deploy Verto nodes in your environment (on-prem or cloud) so your keys and data never leave your secure perimeter." },
          { icon: Globe, title: "Embedded Global Expertise", description: "Our Security Operations Centers in New York, Barcelona, and Singapore provide continuous, round-the-clock monitoring." },
          { icon: LifeBuoy, title: "TradFi Rigor, Digital-Native", description: "Leadership from the Federal Reserve, Google, and Venmo translates institutional risk management to digital assets." },
        ],
        cta: "Learn About Our Service Model",
    },
  };

  const activePillar = TABS[activeTab];

  return (
    <div id="infrastructure" className="bg-white dark:bg-gray-900">
      <div className="text-center pt-20 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            The Complete Stablecoin OS
          </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-6">
         A fully-integrated, self-hosted stack for distribution, payments, liquidity, and compliance—monitored 24×7 by global experts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="-mb-px flex justify-center space-x-4 sm:space-x-6 overflow-x-auto" aria-label="Tabs">
            {Object.keys(TABS).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                  ${
                    activeTab === key
                      ? `border-${TABS[key].color} text-${TABS[key].color}`
                      : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
              >
                {TABS[key].label}
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
                       {activePillar.features.map(feature => (
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

// You already have this component, but it should be here or imported
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
          </div>
        </section>
      );
}