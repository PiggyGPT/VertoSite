import { useState, useEffect } from "react";
import {
    User, Users, Rocket, Terminal,
    Zap, Store, Archive,
    ShieldCheck, Banknote, SlidersHorizontal,
    Database, GitBranch,
    LifeBuoy, Lock, ArrowRight, Route, Shield, MessageCircle,
    ChevronDown, Landmark, History, Link, Clock, Plus,
    Settings, Gauge, Network, Server, Globe, FileText, CheckCircle
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

// --- Simplified Visual Container - No Background Interference ---
const VisualContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="relative min-h-[480px] flex items-center justify-center p-4 overflow-hidden">
        {children}
    </div>
);

// --- VISUAL 1: Distribution (Animated Flow) ---
const ExecutiveDistributionFlow = () => {
    const [currentPanel, setCurrentPanel] = useState(0); // 0: dashboard, 1: voucher, 2: confirmation
    const [buttonClicked, setButtonClicked] = useState(false);

    // Auto animation cycle with 3 panels and button click timing
    useEffect(() => {
        const cycle = setInterval(() => {
            setCurrentPanel(prev => {
                if (prev === 0) {
                    // Show button click animation before transition
                    setButtonClicked(true);
                    setTimeout(() => {
                        setButtonClicked(false);
                    }, 500);
                    // Delay panel transition to show button click
                    setTimeout(() => {
                        setCurrentPanel(1);
                    }, 600);
                    return prev; // Don't change panel immediately
                } else if (prev === 1) {
                    // Show button click animation before transition
                    setButtonClicked(true);
                    setTimeout(() => {
                        setButtonClicked(false);
                    }, 500);
                    // Delay panel transition to show button click
                    setTimeout(() => {
                        setCurrentPanel(2);
                    }, 600);
                    return prev; // Don't change panel immediately
                } else {
                    return 0; // Reset to beginning
                }
            });
        }, 4000); // Switch every 4 seconds

        return () => clearInterval(cycle);
    }, []);

    // Define static classes for intentional left-to-right panning workflow
    const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-x-0";
    const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
    const panelHiddenRightClasses = "opacity-0 translate-x-full";

    // Panel class assignments for intentional workflow panning
    const panel1Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
    const panel2Classes = `${panelBaseClasses} ${currentPanel === 1 ? panelVisibleClasses : currentPanel < 1 ? panelHiddenRightClasses : panelHiddenLeftClasses}`;
    const panel3Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;

    return (
        <VisualContainer>
            <div className="relative w-full max-w-lg mx-auto h-96 overflow-x-hidden">
                {/* Panel 1: Agent Dashboard */}
                <div
                    className={panel1Classes}
                    style={{ zIndex: currentPanel === 0 ? 2 : 1 }}
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
                            className={`flex items-center justify-center w-full space-x-2 px-4 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 mb-2 ${buttonClicked && currentPanel === 0 ? 'scale-90 bg-verto-green/60 shadow-lg ring-4 ring-verto-green/30' : 'scale-100 bg-verto-green hover:bg-verto-green/90'} hover:scale-105`}
                        >
                            <Zap className="w-4 h-4" />
                            <span>Issue QR Code</span>
                        </button>
                        <button className="w-full py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                            Top Up Credit
                        </button>
                        <div className="flex-grow overflow-hidden">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2"><History className="w-4 h-4" /> Recent Transactions</p>
                            <div className="space-y-2 text-sm max-h-20 overflow-y-auto">
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
                     className={panel2Classes}
                     style={{ zIndex: currentPanel === 1 ? 2 : 1 }}
                >
                     <div className="bg-white dark:bg-slate-900 w-full max-w-xs mx-auto rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Tia Store</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">14 AUG 2025, 09:48:12</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">VOUCHER #8721</p>
                        <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">AMOUNT</p>
                        <p className="text-4xl font-bold my-2 text-slate-800 dark:text-slate-200">$50.00</p>
                        <p className="text-sm font-sans font-semibold text-slate-800 dark:text-slate-200">Scan to Claim</p>
                        <div className="p-2 bg-white rounded-lg mt-4 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                            <QRCodeSVG value="https://verto.exchange/claim?id=8721" size={120} fgColor="#000000" />
                        </div>
                        <button
                            className={`w-full mt-4 py-2 px-4 text-white text-sm font-semibold rounded-lg transition-all duration-300 ${buttonClicked && currentPanel === 1 ? 'scale-90 bg-verto-green/60 shadow-lg ring-4 ring-verto-green/30' : 'scale-100 bg-verto-green hover:bg-verto-green/90'} hover:scale-105`}
                        >
                            Claim Voucher
                        </button>
                        <div className="mt-2 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <p className="text-xs text-slate-400 mt-2">Powered by Verto</p>
                    </div>
                </div>

                {/* Panel 3: Maria Silva Wallet View */}
                <div
                     className={panel3Classes}
                     style={{ zIndex: currentPanel === 2 ? 2 : 1 }}
                >
                     <div className="bg-white dark:bg-slate-900 w-full max-w-sm mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4 h-full">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Maria Silva</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Wallet</p>
                            </div>
                            <Settings className="w-5 h-5 text-slate-400" />
                        </div>

                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Balance</p>
                                    <p className="text-2xl font-bold text-verto-green tracking-tight">50.00 BOBC</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                    <User className="w-5 h-5 text-slate-500" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 py-2 px-4 bg-verto-green hover:bg-verto-green/90 text-white text-sm font-semibold rounded-lg transition-colors">
                                Pay
                            </button>
                            <button className="flex-1 py-2 px-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition-colors">
                                Trade
                            </button>
                        </div>

                        <div className="flex-grow overflow-hidden">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2"><History className="w-4 h-4" /> Activity</p>
                            <div className="space-y-2 text-sm max-h-32 overflow-y-auto">
                                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                                    <div>
                                        <span className="text-slate-600 dark:text-slate-400">Claimed Voucher</span> 
                                        <p className="text-xs text-slate-400">14 Aug 2025, 09:51</p>
                                    </div>
                                    <span className="font-mono font-medium text-green-500">+ 50.00 BOBC</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                                    <div>
                                        <span className="text-slate-600 dark:text-slate-400">Wallet Created</span>
                                        <p className="text-xs text-slate-400">14 Aug 2025, 09:48</p>
                                    </div>
                                    <span className="font-mono font-medium text-slate-700 dark:text-slate-300">--</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// --- VISUAL 2: Payments (Animated Flow) ---
const PolishedPaymentsFlow = () => {
    const [currentPanel, setCurrentPanel] = useState(0); // 0: payment request, 1: checkout, 2: confirmation
    const [buttonClicked, setButtonClicked] = useState(false);

    // Auto animation cycle - 3 panels with button click timing
    useEffect(() => {
        const cycle = setInterval(() => {
            setCurrentPanel(prev => {
                if (prev === 0) {
                    // Show button click animation before transition
                    setButtonClicked(true);
                    setTimeout(() => {
                        setButtonClicked(false);
                    }, 500);
                    // Delay panel transition to show button click
                    setTimeout(() => {
                        setCurrentPanel(1);
                    }, 600);
                    return prev; // Don't change panel immediately
                } else if (prev === 1) {
                    // Show button click animation before transition
                    setButtonClicked(true);
                    setTimeout(() => {
                        setButtonClicked(false);
                    }, 500);
                    // Delay panel transition to show button click
                    setTimeout(() => {
                        setCurrentPanel(2);
                    }, 600);
                    return prev; // Don't change panel immediately
                } else {
                    return 0; // Reset to beginning
                }
            });
        }, 3500); // Switch every 3.5 seconds

        return () => clearInterval(cycle);
    }, []);

    // Define static classes for intentional left-to-right panning workflow
    const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-x-0";
    const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
    const panelHiddenRightClasses = "opacity-0 translate-x-full";

    // Panel class assignments for intentional workflow panning
    const panel1Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
    const panel2Classes = `${panelBaseClasses} ${currentPanel === 1 ? panelVisibleClasses : currentPanel < 1 ? panelHiddenRightClasses : panelHiddenLeftClasses}`;
    const panel3Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;

    return (
        <VisualContainer>
            <div className="relative w-full max-w-lg mx-auto h-[410px]">
                {/* Panel 1: Payment Request / QR Code */}
                <div
                    className={panel1Classes}
                    style={{ zIndex: currentPanel === 0 ? 3 : 1 }}
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
                            className={`w-full mt-4 py-3 text-white text-sm font-semibold rounded-lg font-sans transition-all duration-300 ${buttonClicked && currentPanel === 0 ? 'scale-90 bg-verto-purple/60 shadow-lg ring-4 ring-verto-purple/30' : 'scale-100 bg-verto-purple hover:bg-verto-purple/90'} hover:scale-105`}
                        >
                            Pay Now
                        </button>
                        <div className="mt-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <p className="text-xs text-slate-400 mt-4">Powered by Verto</p>
                    </div>
                </div>

                {/* Panel 2: Checkout UI */}
                <div
                    className={panel2Classes}
                    style={{ zIndex: currentPanel === 1 ? 3 : 1 }}
                >
                    <div className="bg-white dark:bg-slate-900 w-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4 h-full">
                         <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                    <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <p className="font-bold text-lg text-slate-800 dark:text-slate-200">John Doe</p>
                            </div>
                            <Settings className="w-5 h-5 text-slate-400 cursor-pointer" />
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
                        <button className={`flex items-center justify-center w-full space-x-2 px-4 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 ${buttonClicked && currentPanel === 1 ? 'scale-90 bg-verto-purple/60 shadow-lg ring-4 ring-verto-purple/30' : 'scale-100 bg-verto-purple hover:bg-verto-purple/90'} hover:scale-105`}>
                            <Zap className="w-4 h-4" />
                            <span>Pay 120.00 USDC</span>
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-auto flex items-center justify-center gap-1.5 pb-2"><Lock className="w-3 h-3" /> Secured by Verto</p>
                    </div>
                </div>

                {/* Panel 3: Payment Confirmation */}
                <div
                    className={panel3Classes}
                    style={{ zIndex: currentPanel === 2 ? 3 : 1 }}
                >
                    <div className="bg-white dark:bg-slate-900 w-full max-w-xs mx-auto rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 h-full">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Payment Confirmed</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">14 AUG 2025, 09:52:34</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">TXN #8721-CONF</p>
                        <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>

                        <div className="w-full text-center mb-4">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">RECEIVED</p>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">120,000</p>
                            <p className="text-lg font-mono text-slate-600 dark:text-slate-300">BOBC</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Paid 120.00 USDC</p>
                        </div>

                        <div className="w-full space-y-3 text-left flex-grow">
                            <div className="flex justify-between">
                                <span className="text-xs text-slate-500 dark:text-slate-400">From:</span>
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">John Doe</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs text-slate-500 dark:text-slate-400">To:</span>
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Tia Store</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs text-slate-500 dark:text-slate-400">Status:</span>
                                <span className="text-xs font-semibold text-verto-green flex items-center gap-1">
                                    <ShieldCheck className="w-3 h-3" />
                                    Confirmed
                                </span>
                            </div>
                        </div>

                        <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                        <div className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
                                Transaction Hash
                            </p>
                            <p className="text-xs font-mono text-slate-800 dark:text-slate-200 text-center break-all">
                                0x7c8f9a2b...d4e5
                            </p>
                        </div>
                        <p className="text-xs text-slate-400 mt-4">Powered by Verto</p>
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// --- VISUAL 3: Liquidity (Animated Flow) ---
const ExecutiveLiquidityFlow = () => {
    const [currentPanel, setCurrentPanel] = useState(0); // 0: request, 1: route, 2: executed
    const [signed, setSigned] = useState({ maria: false, john: false, ciso: false });
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        const cycle = setInterval(() => {
            setCurrentPanel(prev => {
                if (prev === 0) {
                    // Show button click animation before transition
                    setButtonClicked(true);
                    setTimeout(() => {
                        setButtonClicked(false);
                    }, 500);
                    // Delay panel transition to show button click
                    setTimeout(() => {
                        setCurrentPanel(1);
                        // Start signing animations when moving to route panel
                        setTimeout(() => setSigned(s => ({ ...s, maria: true })), 500);
                        setTimeout(() => setSigned(s => ({ ...s, john: true })), 1000);
                        setTimeout(() => setSigned(s => ({ ...s, ciso: true })), 1500);
                    }, 600);
                    return prev; // Don't change panel immediately
                } else if (prev === 1) {
                    return 2; // Move to executed panel
                } else {
                    // Reset signatures when cycle restarts
                    setSigned({ maria: false, john: false, ciso: false });
                    return 0; // Reset to beginning
                }
            });
        }, 3000); // Switch every 3 seconds for better visibility

        return () => clearInterval(cycle);
    }, []);

    const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-x-0";
    const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
    const panelHiddenRightClasses = "opacity-0 translate-x-full";

    const getPanelClasses = (panelIndex: number) => {
        if (currentPanel === panelIndex) return `${panelBaseClasses} ${panelVisibleClasses}`;
        if (currentPanel > panelIndex) return `${panelBaseClasses} ${panelHiddenLeftClasses}`;
        return `${panelBaseClasses} ${panelHiddenRightClasses}`;
    };

    return (
        <VisualContainer>
            <div className="relative w-full max-w-lg mx-auto h-[480px] overflow-x-hidden">
                {/* Panel 1: Payment Request */}
                <div className={getPanelClasses(0)} style={{ zIndex: currentPanel === 0 ? 4 : 1 }}>
                    <div className="bg-white dark:bg-slate-900 w-full max-w-sm mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col h-full">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Initiate Trade</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Arbitrum Network</p>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Pay To</label>
                                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg mt-1 text-sm">Tia Store</div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Amount</label>
                                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg mt-1 font-mono text-sm">25,000.00 BOBC</div>
                            </div>
                             <div>
                                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">From</label>
                                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg mt-1 text-sm">Fireblocks (Solana) - USDC</div>
                            </div>
                        </div>
                        <button className="mt-auto w-full py-3 bg-verto-blue text-white font-semibold rounded-lg hover:bg-verto-blue/90 transition-colors">
                            Generate Route
                        </button>
                    </div>
                </div>

                {/* Panel 2: Route Creation */}
                <div className={getPanelClasses(1)} style={{ zIndex: currentPanel === 1 ? 4 : 1 }}>
                    <div className="bg-white dark:bg-slate-900 w-full max-w-sm mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col h-full">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Route Creation</h3>
                        <div className="space-y-2">
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">1. Fireblocks (Solana)</p>
                            </div>
                             <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">2. Bridge via CCTP</p>
                            </div>
                             <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">3. Curve Finance (Arbitrum)</p>
                            </div>
                             <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">4. Pay to Tia Store</p>
                            </div>
                        </div>
                        <div className="mt-3 mb-3">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Required Signatures (2/3)</p>
                            <div className="space-y-2 text-sm">
                                <div className={`flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-all duration-500 ${currentPanel === 1 && signed.maria ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : ''}`}>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className={`w-5 h-5 transition-colors ${currentPanel === 1 && signed.maria ? 'text-green-500' : 'text-slate-400'}`} />
                                        <span className={`text-sm transition-colors ${currentPanel === 1 && signed.maria ? 'text-green-700 dark:text-green-300 font-medium' : 'text-slate-600 dark:text-slate-400'}`}>Maria Silva</span>
                                    </div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Fireblocks</span>
                                </div>
                                <div className={`flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-all duration-500 ${currentPanel === 1 && signed.john ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : ''}`}>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className={`w-5 h-5 transition-colors ${currentPanel === 1 && signed.john ? 'text-green-500' : 'text-slate-400'}`} />
                                        <span className={`text-sm transition-colors ${currentPanel === 1 && signed.john ? 'text-green-700 dark:text-green-300 font-medium' : 'text-slate-600 dark:text-slate-400'}`}>John Doe</span>
                                    </div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Treasury</span>
                                </div>
                                <div className={`flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-all duration-500 ${currentPanel === 1 && signed.ciso ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : ''}`}>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className={`w-5 h-5 transition-colors ${currentPanel === 1 && signed.ciso ? 'text-green-500' : 'text-slate-400'}`} />
                                        <span className={`text-sm transition-colors ${currentPanel === 1 && signed.ciso ? 'text-green-700 dark:text-green-300 font-medium' : 'text-slate-600 dark:text-slate-400'}`}>CISO Auto-Sign</span>
                                    </div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Policy</span>
                                </div>
                            </div>
                        </div>
                        <button className={`mt-auto w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 ${buttonClicked && currentPanel === 1 ? 'scale-90 bg-verto-blue/60 shadow-lg ring-4 ring-verto-blue/30' : 'scale-100 bg-verto-blue hover:bg-verto-blue/90'} hover:scale-105`}>
                            Generate Route
                        </button>
                    </div>
                </div>

                {/* Panel 3: Trade Executed */}
                <div className={getPanelClasses(2)} style={{ zIndex: currentPanel === 2 ? 4 : 1 }}>
                    <div className="bg-white dark:bg-slate-900 w-full max-w-sm mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-4">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Trade Executed</h3>
                        </div>
                        
                        <div className="space-y-3 text-sm flex-grow">
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                <p className="font-semibold text-green-700 dark:text-green-300">✓ Transaction Complete</p>
                                <p className="text-xs text-green-600 dark:text-green-400">25,000 BOBC → Tia Store</p>
                            </div>
                            
                            <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-xs">Transaction Details</p>
                                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                                    <div className="flex justify-between">
                                        <span>Rate:</span>
                                        <span>1:0.9984 USDC</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Time:</span>
                                        <span>3.2s</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Cost:</span>
                                        <span>25,022.50 USDC</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1 text-xs">Transaction Hashes</p>
                                <div className="space-y-1 text-xs">
                                    <div>
                                        <span className="text-slate-500 dark:text-slate-400">Solana:</span>
                                        <p className="font-mono text-slate-600 dark:text-slate-400 break-all">4x7f...9c2d</p>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 dark:text-slate-400">Arbitrum:</span>
                                        <p className="font-mono text-slate-600 dark:text-slate-400 break-all">0x8a2f...b9d1</p>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                        <div className="mt-4 text-xs font-mono text-slate-400 dark:text-slate-500 break-all p-2 bg-slate-50 dark:bg-slate-800 rounded text-center">
                            Tx: 0x8a2f...b9d1
                        </div>
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// --- VISUAL 4: Compliance (Animated Flow) ---
const PolishedComplianceFlow = () => {
    const [currentPanel, setCurrentPanel] = useState(0); // 0: ratings, 1: policy, 2: report

    useEffect(() => {
        const cycle = setInterval(() => {
            setCurrentPanel(prev => (prev + 1) % 3);
        }, 2000); // Switch every 2 seconds
        return () => clearInterval(cycle);
    }, []);

    const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-x-0";
    const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
    const panelHiddenRightClasses = "opacity-0 translate-x-full";

    const getPanelClasses = (panelIndex: number) => {
        if (currentPanel === panelIndex) return `${panelBaseClasses} ${panelVisibleClasses}`;
        if (currentPanel > panelIndex) return `${panelBaseClasses} ${panelHiddenLeftClasses}`;
        return `${panelBaseClasses} ${panelHiddenRightClasses}`;
    };

    return (
        <VisualContainer>
            <div className="relative w-full max-w-lg mx-auto h-[480px] overflow-x-hidden">
                {/* Panel 1: Risk Ratings */}
                <div className={getPanelClasses(0)} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
                    <div className="bg-white dark:bg-slate-900 w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">AI Risk Ratings</h3>
                        <div className="space-y-3">
                             <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between items-center">
                                <span className="font-semibold text-slate-700 dark:text-slate-300">CCTP Protocol</span>
                                <span className="font-mono font-bold text-green-500">AAA</span>
                            </div>
                             <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between items-center">
                                <span className="font-semibold text-slate-700 dark:text-slate-300">Curve Finance</span>
                                <span className="font-mono font-bold text-yellow-500">AA</span>
                            </div>
                             <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between items-center">
                                <span className="font-semibold text-slate-700 dark:text-slate-300">Origin Wallet</span>
                                 <span className="font-mono font-bold text-orange-500">A</span>
                            </div>
                        </div>
                        <button className="flex items-center justify-center w-full space-x-2 mt-6 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <MessageCircle className="w-5 h-5 text-verto-blue"/>
                            <span>Explain with AI</span>
                        </button>
                    </div>
                </div>

                {/* Panel 2: Policy Engine */}
                <div className={getPanelClasses(1)} style={{ zIndex: currentPanel === 1 ? 3 : 1 }}>
                    <div className="bg-white dark:bg-slate-900 w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Policy Engine</h3>
                        <div className="space-y-2 text-sm font-mono text-slate-600 dark:text-slate-400">
                           <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">IF amount &gt; $10k AND risk_rating &lt; BBB</div>
                           <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">THEN require_ciso_approval</div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
                           <span className="font-bold text-blue-700 dark:text-blue-400 text-lg">APPROVED</span>
                           <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">Policy conditions satisfied.</p>
                        </div>
                    </div>
                </div>

                {/* Panel 3: Compliance Report */}
                 <div className={getPanelClasses(2)} style={{ zIndex: currentPanel === 2 ? 3 : 1 }}>
                     <div className="bg-white dark:bg-slate-900 w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
                         <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Compliance Report</h3>
                         <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Payment ID</span>
                                <span className="text-sm font-mono text-slate-800 dark:text-slate-200">#4928-LIQ</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Risk Assessment</span>
                                <span className="text-sm font-semibold text-green-600 dark:text-green-400">PASSED</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Policy Check</span>
                                <span className="text-sm font-semibold text-green-600 dark:text-green-400">PASSED</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Final Status</span>
                                <span className="text-sm font-bold text-green-600 dark:text-green-400">VERIFIED</span>
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
        </VisualContainer>
    );
};


// --- VISUAL 5: Service (Animated Flow) ---
const ExecutiveServiceFlow = () => (
    <VisualContainer>
        <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Central Client Infrastructure */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 w-56 h-40">
                <div className="p-3 bg-verto-cyan/10 rounded-full w-fit mb-2"><Database className="w-10 h-10 text-verto-cyan" /></div>
                <h3 className="font-bold text-slate-900 dark:text-white">Self-Hosted Platform</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">On-Prem / Private Cloud</p>
            </div>

            {/* Animated Shields */}
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="absolute w-64 h-64 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-spin-slow"></div>
                 <div className="absolute w-80 h-80 border border-slate-200 dark:border-slate-800 rounded-full"></div>
            </div>

            {/* SOC Team Pods */}
            <div className="absolute w-32 h-32 top-1/2 left-1/2 -mt-16 -ml-52 z-20">
                 <div className="flex flex-col items-center text-center p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 dark:border-slate-700/50">
                     <p className="font-semibold text-sm">New York</p>
                     <ShieldCheck className="w-5 h-5 text-verto-cyan my-1"/>
                     <span className="text-xs">SOC Team</span>
                 </div>
            </div>
            <div className="absolute w-32 h-32 top-1/2 left-1/2 -mt-52 -ml-16 z-20">
                 <div className="flex flex-col items-center text-center p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 dark:border-slate-700/50">
                     <p className="font-semibold text-sm">Barcelona</p>
                     <ShieldCheck className="w-5 h-5 text-verto-cyan my-1"/>
                     <span className="text-xs">SOC Team</span>
                 </div>
            </div>
             <div className="absolute w-32 h-32 top-1/2 left-1/2 -mt-16 ml-20 z-20">
                 <div className="flex flex-col items-center text-center p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 dark:border-slate-700/50">
                     <p className="font-semibold text-sm">Singapore</p>
                     <ShieldCheck className="w-5 h-5 text-verto-cyan my-1"/>
                     <span className="text-xs">SOC Team</span>
                 </div>
            </div>
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
        liquidity: { label: "Liquidity", color: "verto-blue", title: "Compliant Swaps", description: "Access liquidity from complex, fragmented decentralized exchanges with full operational integrity.", visual: <ExecutiveLiquidityFlow />, features: [ { icon: GitBranch, title: "Smart Order Routing", description: "Our engine automatically finds the best execution path for every trade across multiple protocols and chains." }, { icon: ShieldCheck, title: "Uncompromised Sovereignty", description: "Sign transaction routes with your existing custodial key g, so your assets never leave your control." }, { icon: Archive, title: "Atomic Execution", description: "Automate the entire transaction workflow with a single, batched payload that eliminates manual operational errors." }, ], cta: "Integrate Liquidity API" },
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
                    <div className="grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div className="lg:col-span-5">
                            <div className="mb-8">
                                <p className={`text-sm font-semibold uppercase tracking-wider ${activeColors.text}`}>{activePillar.label}</p>
                                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">{activePillar.title}</h3>
                                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{activePillar.description}</p>
                            </div>
                            
                            {/* Mobile Animation - Between description and features */}
                            <div className="lg:hidden mb-8">
                                {activePillar.visual}
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