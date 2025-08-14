import { useState } from "react";
import { 
    Users, Rocket, Terminal, 
    Zap, Store, FileText, 
    ShieldCheck, BarChart3, SlidersHorizontal, 
    ArrowRightLeft, Database, GitBranch,
    Clock, Globe, LifeBuoy, CreditCard, Lock, ArrowRight, Coins
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

// --- Polished Visual Components ---

// Helper component for styled feature list items
const FeatureItem = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
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

/**
 * A reusable, high-fidelity iPhone mockup frame to ensure a consistent, premium look.
 */
const IphoneFrame = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative aspect-[9/19.5] w-[280px] bg-black rounded-[44px] shadow-2xl p-1.5 border-2 border-gray-800 group ${className}`}>
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-xl z-20"></div>
        <div className="absolute -left-1 top-24 w-1 h-20 bg-gray-800 rounded-l-md"></div>
        <div className="absolute -right-1 top-28 w-1 h-24 bg-gray-800 rounded-r-md"></div>
        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[36px] overflow-hidden">
            {children}
        </div>
    </div>
);

/**
 * VISUAL 1: Polished Distribution Flow
 * Features two detailed iPhone mockups for the Agent and Customer sides of the minting process.
 */
const PolishedDistributionFlow = () => (
    <div className="flex justify-center items-center gap-6 lg:gap-8 flex-col sm:flex-row perspective-1000">
        <IphoneFrame className="transition-transform duration-500 transform-style-3d group-hover:-translate-x-2 group-hover:-rotate-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-900 h-full text-slate-800 dark:text-slate-200 flex flex-col font-sans">
                <h3 className="font-bold text-center text-lg">Agent Terminal</h3>
                <div className="my-8 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Available Credit</p>
                    <p className="text-5xl font-bold text-verto-green tracking-tight">$4,950.00</p>
                </div>
                <button className="w-full mt-4 py-3 bg-verto-green/10 text-verto-green font-semibold rounded-lg hover:bg-verto-green/20 transition-colors text-lg">
                    Deposit Funds
                </button>
                <div className="mt-auto">
                    <h4 className="font-semibold text-sm mb-2">Transaction History</h4>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-between p-2.5 bg-white dark:bg-slate-800 rounded-md shadow-sm"><span className="font-medium">Mint #3456</span><span className="font-mono text-green-500 font-semibold">+ $50.00</span></div>
                        <div className="flex justify-between p-2.5 bg-white dark:bg-slate-800 rounded-md shadow-sm"><span className="font-medium">Mint #3455</span><span className="font-mono text-green-500 font-semibold">+ $100.00</span></div>
                    </div>
                </div>
            </div>
        </IphoneFrame>
        <IphoneFrame className="transition-transform duration-500 transform-style-3d group-hover:translate-x-2 group-hover:rotate-y-4">
            <div className="p-4 bg-white dark:bg-slate-900 h-full flex flex-col items-center justify-center text-center font-sans">
                 <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-200">Mint Stablecoin</h3>
                 <div className="my-6 p-4 bg-white rounded-2xl shadow-lg border">
                     <QRCodeSVG value="https://verto.exchange/mint?amount=50.00" size={160} fgColor="#059669" />
                 </div>
                 <p className="text-4xl font-bold text-slate-900 dark:text-white">$50.00</p>
                 <p className="text-md text-slate-500 dark:text-slate-400 mt-1">Scan to receive USDC</p>
            </div>
        </IphoneFrame>
    </div>
);

/**
 * VISUAL 2: Polished Payments Flow
 * Meticulously crafted based on your CSS to create a premium, Stripe-like checkout experience.
 */
const PolishedPaymentsFlow = () => (
    <div className="flex justify-center items-center gap-6 lg:gap-8 flex-col sm:flex-row perspective-1000">
        <IphoneFrame className="transition-transform duration-500 transform-style-3d group-hover:-translate-x-2 group-hover:-rotate-y-4">
            <div className="p-4 bg-white dark:bg-slate-900 h-full flex flex-col items-center justify-center text-center font-sans">
                 <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-200">Merchant POS</h3>
                 <p className="text-md text-slate-500 dark:text-slate-400 mt-2">Requesting Payment</p>
                 <p className="text-7xl font-bold text-slate-900 dark:text-white my-8 tracking-tight">$25.99</p>
                 <div className="p-3 bg-white rounded-xl shadow-lg border">
                     <QRCodeSVG value="https://verto.exchange/pay?merchant=acme&amount=25.99" size={140} fgColor="#7c3aed" />
                 </div>
            </div>
        </IphoneFrame>
        <IphoneFrame className="w-[375px] h-[812px] transition-transform duration-500 transform-style-3d group-hover:translate-x-2 group-hover:rotate-y-4">
            <div className="h-full flex flex-col bg-white font-['Montserrat']">
                {/* Header Section */}
                <div className="relative h-[292px] bg-[#034DE5] flex flex-col items-center justify-center text-white rounded-b-[20px]">
                    <div className="absolute inset-0 bg-black/10" style={{backdropFilter: 'blur(2px)'}}></div>
                    <div className="relative flex items-center gap-5">
                        <img src="/logo-placeholder-white.svg" alt="Verto Logo" className="h-[70px] w-[70px] rounded-full bg-white/20 p-2 ring-4 ring-white/30" />
                        <div className="text-left">
                            <p className="font-semibold text-sm leading-tight">Pay Verto Inc.</p>
                            <p className="text-4xl font-bold tracking-tight">$25.99</p>
                        </div>
                    </div>
                </div>

                {/* Body / Payment Selection */}
                <div className="flex-grow p-5 flex flex-col gap-5">
                    <div>
                        <label className="pl-1 font-semibold text-sm text-black/60">Pay with</label>
                        <div className="mt-2 p-3 bg-[#E9EDFC] rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-black/5 rounded-lg">
                                    <Coins className="w-6 h-6 text-[#006DFF]" />
                                </div>
                                <span className="font-semibold text-sm text-[#13142B]">USDC Wallet</span>
                            </div>
                            <span className="font-bold text-2xl text-[#13142B]">25.99</span>
                        </div>
                         <p className="text-right text-xs mt-1 pr-1 text-black/60">Balance: 5,102.50 USDC</p>
                    </div>

                    <div className="p-3 bg-slate-100 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-black/5 rounded-lg">
                                <CreditCard className="w-6 h-6 text-slate-500" />
                            </div>
                            <span className="font-semibold text-sm text-[#13142B]">Credit Card</span>
                        </div>
                        <span className="font-semibold text-sm text-slate-400">···4242</span>
                    </div>

                    <div className="flex-grow"></div>

                    <button className="w-full py-4 bg-[#4E71E4] text-white font-semibold rounded-xl text-lg hover:bg-opacity-90 transition-all duration-300 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_0_rgb(0,118,255,23%)]">
                        Pay $25.99
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-2">
                        <Lock className="w-3 h-3"/> Secured by Verto
                    </p>
                </div>
            </div>
        </IphoneFrame>
    </div>
);

/**
 * VISUAL 3: Polished Liquidity Flow
 * A clean, intuitive diagram showing Verto's smart routing capabilities.
 */
const PolishedLiquidityFlow = () => {
    const protocols = [
        { name: 'Uniswap', icon: '🦄' },
        { name: 'Curve', icon: ' Curve' },
        { name: 'Aave', icon: '👻' },
        { name: '1inch', icon: '🦄' },
    ];
    return (
        <div className="relative bg-slate-100/50 dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#d1d5db,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(#475569,transparent_1px)]"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-around gap-8 text-center">

                {/* Left Side: Your Stack */}
                <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 w-48">
                        <Database className="w-8 h-8 mx-auto text-verto-blue"/>
                        <h4 className="font-semibold mt-2">Your Application</h4>
                        <p className="text-xs font-mono mt-1 text-slate-500 dark:text-slate-400">swap(ETH, USDC)</p>
                    </div>
                </div>

                {/* Middle: Arrow and Router */}
                <div className="flex flex-col items-center">
                    <ArrowRight className="w-12 h-12 text-slate-300 dark:text-slate-600 my-4 md:my-0 md:mx-6 transform md:-rotate-0 rotate-90" />
                </div>

                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center w-64">
                    <div className="p-3 bg-verto-blue/10 rounded-full">
                        <GitBranch className="w-10 h-10 text-verto-blue"/>
                    </div>
                    <h3 className="text-xl font-bold mt-3 text-verto-blue">Verto Smart Router</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Routes to best-price execution venue</p>
                </div>

                {/* Right Side: Protocols */}
                <div className="grid grid-cols-2 gap-4">
                     {protocols.map((p, i) => (
                        <div key={p.name} className={`p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 transition-all duration-300 ${i === 0 ? 'border-verto-blue' : 'border-slate-200 dark:border-slate-700'}`}>
                            <span className="text-2xl">{p.icon}</span>
                            <p className="font-semibold text-sm mt-1">{p.name}</p>
                        </div>
                     ))}
                </div>
            </div>
        </div>
    );
};


/**
 * VISUAL 4: Polished Service Flow
 * A sophisticated global view with animated clocks to showcase 24/7 operations.
 */
const PolishedServiceFlow = () => (
    <div className="relative bg-slate-100/50 dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <img src="/world-map.svg" alt="World map" className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20" />
        <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Follow-the-Sun Global Operations</h3>
            <p className="mt-1 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Our embedded experts provide 24/7 strategic intelligence and platform monitoring across all time zones.</p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                    { city: 'New York', time: '09:30', offset: 165 }, 
                    { city: 'Barcelona', time: '15:30', offset: 270 }, 
                    { city: 'Singapore', time: '21:30', offset: 30 }
                ].map(loc => (
                    <div key={loc.city} className="flex flex-col items-center p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl shadow-lg backdrop-blur-sm border border-white/50 dark:border-slate-700/50">
                        <div className="relative w-28 h-28">
                            <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                 <div className="absolute w-0.5 h-10 bg-slate-400 rounded-full origin-bottom" style={{ transform: `rotate(${loc.offset}deg)` }}></div>
                                 <div className="absolute w-1 h-8 bg-slate-700 dark:bg-slate-200 rounded-full origin-bottom" style={{ transform: `rotate(${loc.offset * 2}deg)` }}></div>
                                 <div className="w-2 h-2 bg-slate-800 dark:bg-white rounded-full z-10"></div>
                            </div>
                        </div>
                        <p className="mt-4 font-semibold text-lg text-slate-800 dark:text-slate-200">{loc.city}</p>
                        <p className="text-xl font-bold text-verto-cyan">{loc.time}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- Main Section Component ---

export default function PlatformAndServicesSection() {
  const [activeTab, setActiveTab] = useState("distribution");

  const TABS = {
    distribution: {
      label: "Distribution", color: "verto-green", title: "On-Demand Minting",
      description: "Instantly turn cash into stablecoins at any retail point. Our platform equips agent partners, from kiosks to mobile operators, to serve as on-ramps for your digital currency.",
      visual: <PolishedDistributionFlow />,
      features: [
        { icon: Users, title: "Leverage Existing Networks", description: "Scale adoption by activating vast, pre-existing retail and agent networks without new infrastructure." },
        { icon: Rocket, title: "Zero Float Operations", description: "On-demand minting is backed by real-time deposits, eliminating the need for a costly, pre-funded treasury." },
        { icon: Terminal, title: "Unified SDKs", description: "A single, simple integration for agent terminals, mobile apps, and backend reconciliation systems." },
      ],
      cta: "Get Distribution Playbook",
    },
    payments: {
      label: "Payments", color: "verto-purple", title: "Frictionless Checkout",
      description: "Our stack removes all blockchain complexity from payments. A single API lets merchants accept your stablecoin from any wallet, bank, or exchange, seamlessly.",
      visual: <PolishedPaymentsFlow />,
      features: [
        { icon: Zap, title: "Boost Conversion Rates", description: "One-tap UX with sponsored gas fees removes friction and dramatically increases payment completion rates." },
        { icon: Store, title: "Universal Acceptance", description: "A single API unlocks a universal payment ecosystem, driving utility and adoption for your stablecoin." },
        { icon: FileText, title: "Automated Back-Office", description: "We handle routing, settlement, reconciliation, and reporting automatically, reducing operational overhead." },
      ],
      cta: "Explore Payments API",
    },
     liquidity: {
      label: "Liquidity", color: "verto-blue", title: "Universal Liquidity Access",
      description: "The on-chain market is complex and fragmented. Our single API provides a unified entry point to the entire ecosystem, automatically routing requests for optimal price, latency, and risk.",
      visual: <PolishedLiquidityFlow />,
      features: [
        { icon: GitBranch, title: "Smart Order Routing", description: "Our engine automatically routes every request to the best liquidity source across multiple protocols and chains." },
        { icon: ShieldCheck, title: "Uncompromised Sovereignty", description: "Our self-hosted layer integrates with your existing custody stack, so your assets and keys never leave your control." },
        { icon: FileText, title: "Compliant, Atomic Execution", description: "Automate the entire transaction workflow with a single, batched payload that enforces your predefined policies." },
      ],
      cta: "Integrate Liquidity API",
    },
    service: {
        label: "Service", color: "verto-cyan", title: "24/7 Global Operations",
        description: "Our unique service model provides continuous vigilance on top of your self-hosted platform. You control your infrastructure; our expert teams ensure your operational integrity.",
        visual: <PolishedServiceFlow />,
        features: [
          { icon: Database, title: "Data Sovereignty & Control", description: "Deploy Verto nodes in your environment (on-prem or cloud) so your keys and data never leave your secure perimeter." },
          { icon: Globe, title: "Embedded Global Expertise", description: "Our Security Operations Centers in New York, Barcelona, and Singapore provide continuous, round-the-clock monitoring." },
          { icon: LifeBuoy, title: "TradFi Rigor, Digital-Native", description: "Leadership from the Federal Reserve, Google, and Venmo translates institutional risk management to digital assets." },
        ],
        cta: "Learn About Our Service Model",
    },
  };

  const activePillar = TABS[activeTab as keyof typeof TABS];

  return (
    <div id="platform" className="bg-white dark:bg-gray-900 overflow-hidden">
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
                className={`whitespace-nowrap py-4 px-2 border-b-2 font-medium text-base transition-colors duration-200 focus:outline-none
                  ${
                    activeTab === key
                      ? `border-${TABS[key as keyof typeof TABS].color} text-${TABS[key as keyof typeof TABS].color}`
                      : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
              >
                {TABS[key as keyof typeof TABS].label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative py-16 md:py-24">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-verto-purple/10 via-verto-blue/5 to-verto-green/10 dark:from-verto-purple/20 dark:via-verto-blue/10 dark:to-verto-green/20 blur-[150px] rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        className={`inline-flex items-center px-6 py-3 bg-${activePillar.color} hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-${activePillar.color}/30 hover:shadow-xl hover:shadow-${activePillar.color}/40 transform hover:-translate-y-0.5`}
                    >
                        {activePillar.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>

                <div className="lg:col-span-7 mt-16 lg:mt-0 group">
                    {activePillar.visual}
                </div>
            </div>
        </div>
      </div>
       <GlobalPresenceSection />
    </div>
  );
}

// NOTE: This helper component is included for completeness.
function GlobalPresenceSection() {
    return (
        <section className="bg-slate-50 dark:bg-slate-800/50 py-16 sm:py-20 border-t border-slate-100 dark:border-slate-800">
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