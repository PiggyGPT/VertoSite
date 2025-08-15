import { useState, useEffect } from "react";
import {
    User, Users, Rocket, Terminal,
    Zap, Store, Archive,
    ShieldCheck, Banknote, SlidersHorizontal,
    Database, GitBranch,
    LifeBuoy, Lock, ArrowRight, Route, Shield, MessageCircle,
    ChevronDown, Landmark, History, Link, Clock, Plus,
    Settings, Gauge, Network, Server, Globe, FileText
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

// --- Foundational Visual Component ---
const VisualContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="relative bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 min-h-[480px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(theme(colors.slate.200),transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(theme(colors.slate.700),transparent_1px)]"></div>
        <div className="relative w-full">
            {children}
        </div>
    </div>
);

// --- REVISED VISUAL 1: Distribution (Animated Flow) ---
const ExecutiveDistributionFlow = () => {
    const [isVoucherVisible, setIsVoucherVisible] = useState(false);

    // Define static classes for Tailwind's JIT compiler
    const panelBaseClasses = "absolute inset-0 transition-all duration-500 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-y-0 scale-100";
    const panelHiddenClasses = "opacity-0 -translate-y-4 scale-95";
    const panelVoucherHiddenClasses = "opacity-0 translate-y-4 scale-95";

    return (
        <VisualContainer>
            <div className="relative w-full max-w-lg mx-auto h-96">
                {/* Panel 1: Agent Dashboard */}
                <div
                    className={`${panelBaseClasses} ${isVoucherVisible ? panelHiddenClasses : panelVisibleClasses}`}
                >
                    <div className="bg-white dark:bg-slate-900 w-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4 h-full">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Tia Store</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Agent Dashboard</p>
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
                        <button
                            onClick={() => setIsVoucherVisible(true)}
                            className="flex items-center justify-center w-full space-x-2 px-4 py-3 bg-verto-green hover:bg-verto-green/90 text-white text-sm font-semibold rounded-lg transition-transform active:scale-95 hover:scale-105"
                        >
                            <Zap className="w-4 h-4" />
                            <span>Issue QR Code</span>
                        </button>
                        <div className="flex-grow">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2"><History className="w-4 h-4" /> Recent Transactions</p>
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
                </div>

                {/* Panel 2: POS Voucher */}
                <div
                     className={`${panelBaseClasses} ${isVoucherVisible ? panelVisibleClasses : panelVoucherHiddenClasses}`}
                >
                     <div className="bg-white dark:bg-slate-900 w-full max-w-xs mx-auto rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 cursor-pointer" onClick={() => setIsVoucherVisible(false)}>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Tia Store</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">14 AUG 2025, 09:48:12</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">VOUCHER #8721</p>
                        <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">AMOUNT</p>
                        <p className="text-4xl font-bold my-2 text-slate-800 dark:text-slate-200">$50.00</p>
                        <p className="text-sm font-sans font-semibold text-slate-800 dark:text-slate-200">Scan to Claim</p>
                        <div className="p-2 bg-white rounded-lg mt-4 border border-slate-200 dark:border-slate-700">
                            <QRCodeSVG value="https://verto.exchange/claim?id=8721" size={120} fgColor="#000000" />
                        </div>
                        <div className="mt-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <p className="text-xs text-slate-400 mt-4">Powered by Verto</p>
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// --- REVISED VISUAL 2: Payments (Animated Flow) ---
const PolishedPaymentsFlow = () => {
    const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

    // Define static classes for Tailwind's JIT compiler
    const panelBaseClasses = "absolute inset-0 transition-all duration-500 ease-in-out";
    const panelVisibleClasses = "opacity-100 scale-100";
    const panelHiddenClasses = "opacity-0 scale-95";
    const panelCheckoutHiddenClasses = "opacity-0 scale-105";

    return (
        <VisualContainer>
            <div className="relative w-full max-w-lg mx-auto h-[410px]">
                {/* Panel 1: Payment Request / QR Code */}
                <div
                    className={`${panelBaseClasses} ${isCheckoutVisible ? panelHiddenClasses : panelVisibleClasses}`}
                >
                    <div className="bg-white dark:bg-slate-900 w-full max-w-xs mx-auto rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 h-full">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Tia Store</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">14 AUG 2025, 09:48:12</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">PAYMENT #4928</p>
                        <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">AMOUNT DUE</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-4xl font-bold text-slate-800 dark:text-slate-200">12,000</p>
                            <p className="text-lg font-mono text-slate-600 dark:text-slate-300">BOBC</p>
                        </div>
                        <div className="p-2 bg-white rounded-lg mt-4 border border-slate-200 dark:border-slate-700">
                            <QRCodeSVG value="https://verto.exchange/pay?id=4928" size={120} fgColor="#000000" />
                        </div>
                        <button
                            onClick={() => setIsCheckoutVisible(true)}
                            className="w-full mt-4 py-3 bg-verto-purple hover:bg-verto-purple/90 text-white text-sm font-semibold rounded-lg transition-transform active:scale-95 font-sans"
                        >
                            Pay Now
                        </button>
                        <div className="mt-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <p className="text-xs text-slate-400 mt-4">Powered by Verto</p>
                    </div>
                </div>

                {/* Panel 2: Checkout UI */}
                <div
                    className={`${panelBaseClasses} ${isCheckoutVisible ? panelVisibleClasses : panelCheckoutHiddenClasses}`}
                >
                    <div className="bg-white dark:bg-slate-900 w-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4 h-full">
                         <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                    <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <p className="font-bold text-lg text-slate-800 dark:text-slate-200">John Doe</p>
                            </div>
                            <Settings className="w-5 h-5 text-slate-400 cursor-pointer" onClick={() => setIsCheckoutVisible(false)} />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pay</p>
                            <div className="relative p-2 rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Tia Store</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Payment #4928</p>
                                    </div>
                                </div>
                                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">12,000 BOBC</span>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">With</p>
                            <div className="relative p-4 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-between cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="text-s font-semibold text-slate-800 dark:text-slate-200">Coinbase</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">12,500.50 USDC</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-800 dark:text-slate-200">120.00 USDC</span>
                                    <ChevronDown className="w-5 h-5 text-slate-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-dashed border-slate-200 dark:border-slate-700">
                            <span>Rate: 1 BOBC ≈ 0.01 USDC</span>
                            <span>Fees: 0.00 USDC</span>
                        </div>
                        <button className="flex items-center justify-center w-full space-x-2 px-4 py-3 bg-verto-purple hover:bg-verto-purple/90 text-white text-sm font-semibold rounded-lg transition-transform hover:scale-105 active:scale-95">
                            <Zap className="w-4 h-4" />
                            <span>Pay 120.00 USDC</span>
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-auto flex items-center justify-center gap-1.5"><Lock className="w-3 h-3" /> Secured by Verto</p>
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// --- REVISED VISUAL 3: Liquidity (Dynamic Pipeline) ---
const ExecutiveLiquidityFlow = () => (
    <VisualContainer>
        <div className="bg-white dark:bg-slate-900 w-full max-w-xl mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
            {/* Request Header */}
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-200 dark:border-slate-700">
                <Terminal className="w-5 h-5 text-verto-blue" />
                <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">Trade Request: a4f8-b3c1-9e2d</h4>
            </div>
            {/* Request Details */}
            <div className="p-4 text-xs font-mono text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                <p><strong>FROM:</strong> Maria Silva</p>
                <p><strong>TRADE:</strong>  25,000.00 USDC &rarr; BOBC</p>
                <p><strong>DATE:</strong> August 14, 2025</p>
            </div>
            {/* Executed Route */}
            <div className="space-y-3 text-xs pt-4 border-b border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-600 dark:text-slate-300">Executed Route:</p>
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-md">
                    <p className="font-mono text-slate-500 dark:text-slate-400">1. Bridge (CCTP) | Solana &rarr; Arbitrum</p>
                    <div className="flex items-center gap-1.5 text-blue-500 truncate">
                        <Link className="w-3 h-3 flex-shrink-0" />
                        <span>So1...fhB</span>
                    </div>
                </div>
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-md mb-4">
                    <p className="font-mono text-slate-500 dark:text-slate-400">2. Swap (CoW) | USDC &rarr; BOBC</p>
                    <div className="flex items-center gap-1.5 text-blue-500 truncate">
                        <Link className="w-3 h-3 flex-shrink-0" />
                        <span>0x1A...dE7F</span>
                    </div>
                </div>
            </div>
            {/* Signatures */}
            <div className="pt-4">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Signatures (2/3)</p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Maria Silva (Fireblocks)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>David Cass (Fireblocks)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-slate-400 opacity-60" />
                        <span>Automated Treasury (Copper)</span>
                    </div>
                </div>
            </div>
        </div>
    </VisualContainer>
);


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
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Compliance Audit Trail</h4>
                <div className="space-y-3">
                    {[
                        { id: 'TXN_45b31', action: 'Risk Assessment', status: 'VERIFIED', time: '14:32:15' },
                        { id: 'POL_92a83', action: 'Policy Check', status: 'PASSED', time: '14:32:16' }
                    ].map(item => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <FileText className="w-4 h-4 text-verto-blue"/>
                                <div>
                                    <span className="font-medium text-sm text-slate-900 dark:text-white">{item.action}</span>
                                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{item.id}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-green-600 dark:text-green-400">{item.status}</span>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


// --- REVISED VISUAL 5: Service (Dynamic Monitoring) ---
const ServiceTeamPod = ({ region, timeZone, className }: { region: string, timeZone: string, className?:string }) => {
    const [time, setTime] = useState("00:00");

    useEffect(() => {
        const updateClock = () => {
            setTime(new Date().toLocaleTimeString("en-GB", { timeZone, hour: '2-digit', minute: '2-digit' }));
        };
        updateClock();
        const timerId = setInterval(updateClock, 1000 * 60); // Update every minute
        return () => clearInterval(timerId);
    }, [timeZone]);

    return (
        <div className={`absolute ${className} w-40 transition-transform duration-500 hover:scale-110`}>
            <div className="relative flex flex-col items-center text-center p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 dark:border-slate-700/50">
                <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{region}</p>
                <p className="font-mono text-2xl font-bold text-slate-900 dark:text-white">{time}</p>
                <span className="relative flex h-2 w-2 mt-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verto-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-verto-cyan"></span>
                </span>
            </div>
        </div>
    );
};

const ExecutiveServiceFlow = () => (
    <VisualContainer>
        <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Central Client Infrastructure */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 w-56 h-40">
                <div className="p-3 bg-verto-cyan/10 rounded-full w-fit mb-2"><Database className="w-10 h-10 text-verto-cyan" /></div>
                <h3 className="font-bold text-slate-900 dark:text-white">Self-Hosted Platform</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">On-Prem / Private Cloud</p>
            </div>
            {/* Service Pods with "halo" */}
            <ServiceTeamPod region="New York" timeZone="America/New_York" className="bottom-0 left-0" />
            <ServiceTeamPod region="Barcelona" timeZone="Europe/Amsterdam" className="top-0 inset-x-0 mx-auto" />
            <ServiceTeamPod region="Singapore" timeZone="Asia/Singapore" className="bottom-0 right-0" />
        </div>
    </VisualContainer>
);


// --- Main Section Component ---
const FeatureItem = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
    <div className="flex items-start space-x-4 group">
        <div className="flex-shrink-0 w-11 h-11 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-verto-blue/10 dark:group-hover:bg-verto-blue/20">
            <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 transition-all duration-300 group-hover:text-verto-blue" />
        </div>
        <div>
            <h4 className="text-md font-semibold text-slate-900 dark:text-white">{title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{children}</p>
        </div>
    </div>
);

export default function PillarsSection() {
    const [activeTab, setActiveTab] = useState("distribution");

    const pillars = {
        distribution: { label: "Distribution", color: "verto-green", title: "On-Demand Minting", description: "Enable any retail point, from kiosks to mobile operators, to issue stablecoins against deposits in real time.", visual: <ExecutiveDistributionFlow />, features: [ { icon: Users, title: "Leverage Existing Networks", description: "Activate vast, pre-existing retail and agent networks to scale adoption without new infrastructure." }, { icon: Zap, title: "Zero-Float Operations", description: "On-demand minting is backed by real-time deposits, eliminating the need for a costly, pre-funded treasury." }, { icon: Terminal, title: "Agent Portal & APIs", description: "A powerful, simple interface for agents to manage credit, issue currency, and monitor earnings." }, ], cta: "Get Distribution Playbook" },
        payments: { label: "Payments", color: "verto-purple", title: "Frictionless Checkout", description: "Enable merchants to easily accept your stablecoin from any wallet, bank, or exchange with a single click.", visual: <PolishedPaymentsFlow />, features: [ { icon: Zap, title: "Boost Conversion", description: "One-tap UX with sponsored gas removes friction and dramatically increases payment completion rates." }, { icon: Globe, title: "Universal Acceptance", description: "A single API unlocks a global payment ecosystem, driving real-world utility and adoption for your stablecoin." }, { icon: Server, title: "Automated Back-Office", description: "We handle routing, settlement, reconciliation, and reporting automatically to reduce operational overhead." }, ], cta: "Explore Payments API" },
        liquidity: { label: "Liquidity", color: "verto-blue", title: "Compliant Swaps", description: "Execute trades across complex, fragmented decentralized exchanges with full operational integrity.", visual: <ExecutiveLiquidityFlow />, features: [ { icon: GitBranch, title: "Smart Order Routing", description: "Our engine automatically finds the best execution path for every trade across multiple protocols and chains." }, { icon: ShieldCheck, title: "Uncompromised Sovereignty", description: "Our self-hosted layer integrates with your existing custody, so your assets and keys never leave your control." }, { icon: Archive, title: "Atomic Execution", description: "Automate the entire transaction workflow with a single, batched payload that enforces your predefined policies." }, ], cta: "Integrate Liquidity API" },
        compliance: { label: "Compliance", color: "verto-blue", title: "AI-Powered Compliance", description: "Replace manual, periodic counterparty audits with continuous, explainable, and automated oversight across your operations.", visual: <PolishedComplianceFlow />, features: [ { icon: Gauge, title: "Explainable Risk Ratings", description: "AI generates clear, transparent risk scores for every counterparty, with full data lineage for audits." }, { icon: SlidersHorizontal, title: "Policy-Driven Controls", description: "Define your risk appetite once. Our platform enforces your policies on every transaction automatically." }, { icon: Shield, title: "Automated Audit Trails", description: "Generate human-readable, verifiable logs of every compliance decision for internal teams and regulators." }, ], cta: "Request Compliance Demo" },
        service: { label: "Service", color: "verto-cyan", title: "24/7 Global Operations", description: "Maintain operational integrity with our global SOC teams for your self-hosted environment.", visual: <ExecutiveServiceFlow />, features: [ { icon: Database, title: "Data Sovereignty & Control", description: "Deploy Verto nodes in your environment—on-prem or private cloud—so your keys and data never leave your perimeter." }, { icon: LifeBuoy, title: "Embedded Global Expertise", description: "Our Security Operations Centers provide continuous, round-the-clock monitoring and incident response." }, { icon: ShieldCheck, title: "Institutional Rigor", description: "Leadership from the Federal Reserve, Google, and PayPal translates TradFi risk management to digital assets." }, ], cta: "Learn About Our Service Model" },
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
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">One Unified Platform</h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-6">Self-hosted stack for distribution, payments, and liquidity.<br/>Monitored 24×7 by global experts with AI-automated compliance.</p>
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