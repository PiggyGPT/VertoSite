import { useState, useEffect } from "react";
import {
    Users, Rocket, Terminal,
    Zap, Store, Archive,
    ShieldCheck, BarChart3, SlidersHorizontal,
    Database, GitBranch,
    LifeBuoy, Lock, ArrowRight, Coins, Shield, MessageCircle,
    CheckCircle2, Landmark, History, Link, Clock, Plus,
    Settings, Gauge, Network, Server, Globe
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

// --- Foundational Visual Component ---
const VisualContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="relative bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[480px] flex items-center justify-center perspective-1000">
        <div className="absolute inset-0 bg-[radial-gradient(theme(colors.slate.200),transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(theme(colors.slate.700),transparent_1px)]"></div>
        <div className="relative w-full">
            {children}
        </div>
    </div>
);


// --- REVISED VISUAL 1: Distribution (Stripe-like Polish) ---
const ExecutiveDistributionFlow = () => {
    return (
        <VisualContainer>
            <div className="flex justify-center items-stretch gap-4 lg:gap-6 flex-col md:flex-row">
                {/* Panel 1: Agent Dashboard */}
                <div className="bg-white dark:bg-slate-900 w-full md:w-3/5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4 transform-style-3d transition-transform duration-500 hover:-translate-y-1 hover:rotate-x-2">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                        <div>
                            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Agent Portal</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Mayflower Corner Store</p>
                        </div>
                        <Settings className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Available Credit</p>
                                <p className="text-2xl font-bold text-verto-green tracking-tight">$4,950.00</p>
                            </div>
                            <button className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-200 rounded-full transition-colors">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <button className="flex items-center justify-center w-full space-x-2 px-4 py-3 bg-verto-green hover:bg-verto-green/90 text-white text-sm font-semibold rounded-lg transition-transform hover:scale-105">
                        <Zap className="w-4 h-4" />
                        <span>Create Payment Voucher</span>
                    </button>
                    <div className="flex-grow">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2"><History className="w-4 h-4"/> Recent Transactions</p>
                        <div className="space-y-2 text-sm">
                             <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                                 <div><span className="text-slate-600 dark:text-slate-400">Credit Top-up</span> <p className="text-xs text-slate-400">14 Aug 2025, 10:15</p></div>
                                 <span className="font-mono font-medium text-green-500">+ $5,000</span>
                             </div>
                             <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                                 <div><span className="text-slate-600 dark:text-slate-400">Mint #8721</span><p className="text-xs text-slate-400">14 Aug 2025, 09:48</p></div>
                                 <span className="font-mono font-medium text-slate-700 dark:text-slate-300">- $50.00</span>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Panel 2: POS Voucher */}
                <div className="bg-white w-full md:w-2/5 rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center text-black transform-style-3d transition-transform duration-500 hover:-translate-y-1 hover:rotate-x-2 font-mono">
                     <h3 className="font-bold text-lg">Mayflower Corner Store</h3>
                     <p className="text-xs text-slate-500">14 AUG 2025, 09:48:12</p>
                     <p className="text-xs text-slate-500">VOUCHER #8721</p>
                     <div className="my-4 border-t border-dashed border-slate-300 w-full"></div>
                     <p className="text-sm">AMOUNT</p>
                     <p className="text-4xl font-bold my-2">$50.00</p>
                     <p className="text-sm font-sans font-semibold">Scan to Claim Digital Dollars</p>
                     <div className="p-2 bg-white rounded-lg mt-4 border border-slate-200">
                         <QRCodeSVG value="https://verto.exchange/claim?id=8721" size={120} />
                     </div>
                     <div className="mt-4 border-t border-dashed border-slate-300 w-full"></div>
                     <p className="text-xs text-slate-400 mt-4">Powered by Verto</p>
                </div>
            </div>
        </VisualContainer>
    );
};


// --- REVISED VISUAL 2: Payments (Stripe-like Polish) ---
const PolishedPaymentsFlow = () => (
    <div className="w-full max-w-sm mx-auto bg-slate-100 dark:bg-black rounded-[40px] shadow-2xl p-4 border-8 border-slate-300 dark:border-slate-700 transform-style-3d hover:-translate-y-2 transition-transform duration-500">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden">
            <div className="p-6 text-center border-b border-slate-200 dark:border-slate-800">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Pay Mayflower Corner Store</p>
                <p className="text-5xl font-bold text-slate-900 dark:text-white mt-2">12,000<span className="text-3xl text-slate-400 ml-1">BOBC</span></p>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-2 border-verto-purple/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">MS</div>
                        <div>
                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">BOBC Balance</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">11,203.10 Available</p>
                        </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-verto-purple" />
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Landmark className="w-8 h-8 text-slate-400 dark:text-slate-500 p-1" />
                        <div>
                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">HSBC Bank</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">SEPA Transfer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <button className="w-full py-4 bg-verto-purple hover:bg-verto-purple/90 text-white font-bold rounded-xl transition-transform hover:scale-105 text-lg">
                    <div className="flex items-center justify-center">
                        <Lock className="w-4 h-4 mr-2" />
                        <span>Confirm & Pay 12,000 BOBC</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
);


// --- REVISED VISUAL 3: Liquidity (Dynamic Pipeline) ---
const ExecutiveLiquidityFlow = () => {
    const FlowStep = ({ icon: Icon, title, children, status }: { icon: React.ElementType, title: string, children: React.ReactNode, status?: 'complete' | 'active' | 'pending' }) => (
        <div className="flex flex-col items-center text-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${status === 'complete' ? 'bg-verto-blue/10 border-verto-blue' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                <Icon className={`w-6 h-6 ${status === 'complete' ? 'text-verto-blue' : 'text-slate-400'}`} />
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mt-3">{title}</h4>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{children}</div>
        </div>
    );

    return (
        <VisualContainer>
            <div className="flex items-start justify-between space-x-4 md:space-x-8 relative w-full px-4">
                {/* Connector Lines */}
                <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700">
                    <div className="absolute top-0 left-0 h-0.5 bg-verto-blue w-2/3 animate-pulse"></div>
                </div>

                <div className="relative z-10 w-1/4">
                    <FlowStep icon={Terminal} title="Request" status="complete">
                        25,000 USDC → BOBC
                    </FlowStep>
                </div>
                <div className="relative z-10 w-1/4">
                    <FlowStep icon={GitBranch} title="Smart Route" status="complete">
                        Path: CCTP → CoW Swap
                    </FlowStep>
                </div>
                <div className="relative z-10 w-1/4">
                     <FlowStep icon={ShieldCheck} title="Signatures" status="active">
                        2 of 3 Approved
                    </FlowStep>
                </div>
                <div className="relative z-10 w-1/4">
                    <FlowStep icon={CheckCircle2} title="Execution" status="pending">
                        Pending...
                    </FlowStep>
                </div>
            </div>
        </VisualContainer>
    );
};


// --- VISUAL 4: Compliance (Unchanged but included for completeness) ---
const PolishedComplianceFlow = () => (
    <div className="relative bg-slate-100/50 dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(#475569,transparent_1px)]"></div>
        <div className="relative flex flex-col space-y-6">
            <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-verto-blue/10 rounded-full">
                    <Shield className="w-8 h-8 text-verto-blue"/>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">AI Compliance Engine</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Real-time risk assessment and policy enforcement</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Risk Review</h4>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">LOW RISK</span>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-slate-600 dark:text-slate-400">Transaction Score</span>
                                <span className="font-mono text-green-600 dark:text-green-400">AA</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                            </div>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                            0x1a2b...3c4d • $25,000 • Clean History
                        </div>
                        <div className="pt-2">
                            <button className="flex items-center justify-center w-full space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200">
                                <MessageCircle className="w-5 h-5 text-verto-blue"/>
                                <span>Chat with AI</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Policy Engine</h4>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full">APPROVED</span>
                    </div>
                    <div className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                        <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">IF amount &gt; $10k AND risk &gt; BBB</div>
                        <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">THEN require_manual_approval</div>
                        <div className="text-green-600 dark:text-green-400 font-semibold">✓ Conditions satisfied</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// --- REVISED VISUAL 5: Service (Dynamic Monitoring) ---
const ServiceTeamPod = ({ region, timeZone, position }: { region: string, timeZone: string, position: React.CSSProperties }) => {
    const [time, setTime] = useState("00:00");
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-GB", { timeZone, hour: '2-digit', minute: '2-digit' }));
        }, 1000 * 60);
        setTime(new Date().toLocaleTimeString("en-GB", { timeZone, hour: '2-digit', minute: '2-digit' }));
        return () => clearInterval(timerId);
    }, [timeZone]);

    return (
        <div className="absolute z-20 w-40" style={position}>
            <div className="flex flex-col items-center text-center p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 transform-style-3d transition-transform duration-500 hover:scale-110">
                <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{region}</p>
                <p className="font-mono text-2xl font-bold text-slate-900 dark:text-white">{time}</p>
                <span className="text-xs text-verto-cyan font-semibold flex items-center gap-1.5 mt-1">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verto-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-verto-cyan"></span>
                    </span>
                    Monitoring
                </span>
            </div>
        </div>
    );
};
const ExecutiveServiceFlow = () => (
    <VisualContainer>
        <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="absolute flex items-center justify-center">
                <div className="absolute w-48 h-48 bg-verto-cyan/5 rounded-full animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-verto-cyan/5 rounded-full animate-pulse [animation-delay:0.5s]"></div>
                <div className="absolute w-96 h-96 bg-verto-cyan/5 rounded-full animate-pulse [animation-delay:1s]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 w-56 h-40 transform-style-3d hover:scale-105 transition-transform">
                    <div className="p-3 bg-verto-cyan/10 rounded-full w-fit mb-2"><ShieldCheck className="w-10 h-10 text-verto-cyan" /></div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Sovereign Infrastructure</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">On-Prem / Private Cloud</p>
                </div>
            </div>
            <ServiceTeamPod region="New York" timeZone="America/New_York" position={{ top: '10%', left: '5%' }} />
            <ServiceTeamPod region="Barcelona" timeZone="Europe/Amsterdam" position={{ top: '10%', right: '5%' }} />
            <ServiceTeamPod region="Singapore" timeZone="Asia/Singapore" position={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }} />
        </div>
    </VisualContainer>
);


// --- Main Section Component ---
const FeatureItem = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
    <div className="flex items-start space-x-4 group"><div className="flex-shrink-0 w-11 h-11 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-verto-blue/10 dark:group-hover:bg-verto-blue/20"><Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 transition-all duration-300 group-hover:text-verto-blue" /></div><div><h4 className="text-md font-semibold text-slate-900 dark:text-white">{title}</h4><p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{children}</p></div></div>
);

export default function PillarsSection() {
    const [activeTab, setActiveTab] = useState("distribution");

    const pillars = {
        distribution: { label: "Distribution", color: "verto-green", title: "On-Demand Minting", description: "Leveraging David Cass’s expertise from the Federal Reserve, our platform mirrors central bank issuance, allowing you to mint digital currency on-demand through trusted agent networks and scale with capital efficiency.", visual: <ExecutiveDistributionFlow />, features: [ { icon: Users, title: "Leverage Existing Networks", description: "Activate vast, pre-existing retail and agent networks to scale adoption without new infrastructure." }, { icon: Zap, title: "Zero-Float Operations", description: "On-demand minting is backed by real-time deposits, eliminating the need for a costly, pre-funded treasury." }, { icon: Terminal, title: "Agent Portal & APIs", description: "A powerful, simple interface for agents to manage credit, issue currency, and monitor earnings." }, ], cta: "Get Distribution Playbook" },
        payments: { label: "Payments", color: "verto-purple", title: "Frictionless Checkout", description: "Inspired by Nilesh Khaitan's work scaling products to over 90 million users at PayPal, our API delivers a frictionless checkout experience that abstracts away all blockchain complexity for merchants and users alike.", visual: <PolishedPaymentsFlow />, features: [ { icon: Zap, title: "Boost Conversion", description: "One-tap UX with sponsored gas removes friction and dramatically increases payment completion rates." }, { icon: Globe, title: "Universal Acceptance", description: "A single API unlocks a global payment ecosystem, driving real-world utility and adoption for your stablecoin." }, { icon: Server, title: "Automated Back-Office", description: "We handle routing, settlement, reconciliation, and reporting automatically to reduce operational overhead." }, ], cta: "Explore Payments API" },
        liquidity: { label: "Liquidity", color: "verto-blue", title: "Compliant Swaps", description: "Informed by David Cass's experience managing institutional-scale trading at GSR, our smart-order router navigates the complex DeFi and CeFi ecosystem to find the optimal execution path for every trade.", visual: <ExecutiveLiquidityFlow />, features: [ { icon: GitBranch, title: "Smart Order Routing", description: "Our engine automatically finds the best execution path for every trade across multiple protocols and chains." }, { icon: ShieldCheck, title: "Uncompromised Sovereignty", description: "Our self-hosted layer integrates with your existing custody, so your assets and keys never leave your control." }, { icon: Archive, title: "Atomic Execution", description: "Automate the entire transaction workflow with a single, batched payload that enforces your predefined policies." }, ], cta: "Integrate Liquidity API" },
        compliance: { label: "Compliance", color: "verto-blue", title: "AI-Powered Compliance", description: "Architected by Daniel Garrie, who has designed compliance frameworks for top-tier institutions like the DOJ and DTCC, our AI engine transforms compliance from a manual burden into an automated, strategic advantage.", visual: <PolishedComplianceFlow />, features: [ { icon: Gauge, title: "Explainable Risk Ratings", description: "AI generates clear, transparent risk scores for every counterparty, with full data lineage for audits." }, { icon: SlidersHorizontal, title: "Policy-Driven Controls", description: "Define your risk appetite once. Our platform enforces your policies on every transaction automatically." }, { icon: Shield, title: "Automated Audit Trails", description: "Generate human-readable, verifiable logs of every compliance decision for internal teams and regulators." }, ], cta: "Request Compliance Demo" },
        service: { label: "Service", color: "verto-cyan", title: "24/7 Global Operations", description: "Built to the enterprise-grade standards of Google and Microsoft, where Hisham Anwar scaled secure systems, our global service model provides 24/7/365 monitoring to ensure your self-hosted infrastructure is always operational.", visual: <ExecutiveServiceFlow />, features: [ { icon: Database, title: "Data Sovereignty & Control", description: "Deploy Verto nodes in your environment—on-prem or private cloud—so your keys and data never leave your perimeter." }, { icon: LifeBuoy, title: "Embedded Global Expertise", description: "Our Security Operations Centers provide continuous, round-the-clock monitoring and incident response." }, { icon: ShieldCheck, title: "Institutional Rigor", description: "Leadership from the Federal Reserve, Google, and PayPal translates TradFi risk management to digital assets." }, ], cta: "Learn About Our Service Model" },
    };

    const colorMap = {
        'verto-green': { border: 'border-verto-green', text: 'text-verto-green', bg: 'bg-verto-green' },
        'verto-purple': { border: 'border-verto-purple', text: 'text-verto-purple', bg: 'bg-verto-purple' },
        'verto-blue': { border: 'border-verto-blue', text: 'text-verto-blue', bg: 'bg-verto-blue' },
        'verto-cyan': { border: 'border-verto-cyan', text: 'text-verto-cyan', bg: 'bg-verto-cyan' },
    };

    const activePillar = pillars[activeTab as keyof typeof pillars];
    const activeColors = colorMap[activePillar.color as keyof typeof colorMap];

    return (
        <div className="bg-white dark:bg-slate-950">
            <div className="text-center pt-20 pb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">The Operational Pillars</h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-6">Five critical capabilities that transform your stablecoin from a technical achievement into a market-dominating force.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-b border-slate-200 dark:border-slate-700">
                    <nav className="-mb-px flex sm:justify-center justify-start overflow-x-auto space-x-6 sm:space-x-8" aria-label="Tabs">
                        {Object.keys(pillars).map((key) => {
                             const pillar = pillars[key as keyof typeof pillars];
                             const colors = colorMap[pillar.color as keyof typeof colorMap];
                             return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex-shrink-0 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === key ? `${colors.border} ${colors.text}` : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"}`}
                                >
                                    {pillar.label}
                                </button>
                             )
                        })}
                    </nav>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="mb-8">
                                <p className={`text-sm font-semibold uppercase tracking-wider ${activeColors.text}`}>{activePillar.label}</p>
                                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">{activePillar.title}</h3>
                                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{activePillar.description}</p>
                            </div>
                            <div className="space-y-6 mb-10">
                                {activePillar.features.map((feature: any) => (
                                    <FeatureItem key={feature.title} icon={feature.icon} title={feature.title}>{feature.description}</FeatureItem>
                                ))}
                            </div>
                            <button className={`inline-flex items-center px-6 py-3 ${activeColors.bg} hover:bg-opacity-90 text-white font-semibold rounded-lg transition-colors`}>
                                <span>{activePillar.cta}</span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                        <div className="lg:col-span-7 mt-12 lg:mt-0">
                            {activePillar.visual}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}