import React, { useState, useEffect, useMemo } from "react";

interface CustomFounderQuote {
  pillarKey: string;
  quote: string;
  name: string;
  title: string;
  image: string;
}

interface PillarsSectionProps {
  title?: string;
  subtitle?: string;
  customFounderQuotes?: CustomFounderQuote[];
}
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Users, Rocket, Terminal,
    Zap, Store, Archive,
    ShieldCheck, Banknote, SlidersHorizontal,
    Database, GitBranch,
    LifeBuoy, Lock, ArrowRight, Route, Shield, MessageCircle,
    ChevronDown, Landmark, History, Link, Clock, Plus,
    Settings, Gauge, Network, Server, Globe, FileText, CheckCircle,
    Cpu, Keyboard, Monitor
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import hishamImage from "@assets/hisham_1754986415368.png";
import nileshImage from "@assets/nilesh_1754986415369.png";
import { Quote } from "lucide-react";

// --- Simplified Visual Container - No Background Interference ---
const VisualContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
        {children}
    </div>
);

// CSS for the typing cursor animation
const cursorStyle = `
  @keyframes blink {
    50% { opacity: 0; }
  }
  .typing-cursor {
    animation: blink 1s step-end infinite;
    width: 4px;
    height: 3rem;
    background-color: #22c55e;
    display: inline-block;
    vertical-align: sub;
    margin-left: 4px;
  }
`;

// Reusable Header component for consistent styling
const Header = ({ title, subtitle, icon, badgeText }: { 
  title: string; 
  subtitle?: string; 
  icon: React.ReactNode; 
  badgeText?: string 
}) => (
  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
    <div>
      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">{title}</h3>
      {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
    <div className="flex items-center gap-2">
      {badgeText && (
        <span className="text-sm font-medium px-2 py-1 bg-green-200 text-green-700 rounded-full dark:bg-green-700 dark:text-green-200">
          {badgeText}
        </span>
      )}
      {icon}
    </div>
  </div>
);

// Component to display the core voucher content with the new, professional design.
const MintContent = ({ voucherId, amount }: { voucherId: string; amount: string }) => {
    return (
        <div className="bg-white dark:bg-slate-900 w-full max-w-xs mx-auto rounded-2xl shadow-xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 h-full">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Tia Store</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">14 AUG 2025, 09:48:12</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">MINT #{voucherId}</p>
            <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
            <p className="text-sm text-slate-500 dark:text-slate-400">SCAN TO CLAIM</p>
            <div className="flex items-baseline justify-center gap-2 my-2">
                <p className="text-4xl font-bold text-slate-800 dark:text-slate-200">{amount}.00</p>
                <p className="text-lg font-mono text-slate-600 dark:text-slate-300">BOBC</p>
            </div>
            <div className="p-2 bg-white rounded-lg mt-4 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <QRCodeSVG value={`https://verto.exchange/claim?amount=${amount}.00&id=${voucherId}`} size={120} />
            </div>
        </div>
    );
};


// --- VISUAL 1: Distribution (Animated Flow) ---
const ExecutiveDistributionFlow = () => {
    // State to control the flow between two main panels: 0: dashboard, 1: voucher, 2: wallet
    const [currentPanel, setCurrentPanel] = useState(0); 
    // State to control the visibility of the single popup container
    const [showKeypadPopup, setShowKeypadPopup] = useState(false);
    const [amount, setAmount] = useState(''); // Dynamic amount for the input
    const [voucherAmount, setMintAmount] = useState('');
    // New state to manage the visual "click" effect on the button
    const [isIssueButtonClicked, setIssueButtonClicked] = useState(false);
    const [isEnterButtonClicked, setEnterButtonClicked] = useState(false);

    // Use a step-based state machine for robust animation timing
    const [animationStep, setAnimationStep] = useState(0);
    const voucherId = '8721';

    useEffect(() => {
      let timeout: NodeJS.Timeout;

      const runAnimationStep = (step: number) => {
        switch (step) {
          case 0:
            // Initial state: Dashboard visible. Reset all other states.
            setCurrentPanel(0);
            setShowKeypadPopup(false);
            setAmount('');
            setMintAmount('');
            setIssueButtonClicked(false);
            setEnterButtonClicked(false);
            timeout = setTimeout(() => setAnimationStep(1), 2000);
            break;
          case 1:
            // Animate button click.
            setIssueButtonClicked(true);
            timeout = setTimeout(() => setAnimationStep(2), 300);
            break;
          case 2:
            // Show popup.
            setIssueButtonClicked(false);
            setShowKeypadPopup(true);
            timeout = setTimeout(() => setAnimationStep(3), 500);
            break;
          case 3:
            // Simulate user typing on the input.
            setAmount('50');
            timeout = setTimeout(() => setAnimationStep(4), 1500);
            break;
          case 4:
            // Simulate enter button click.
            setEnterButtonClicked(true);
            timeout = setTimeout(() => setAnimationStep(5), 300);
            break;
          case 5:
            // Hide popup.
            setEnterButtonClicked(false);
            setShowKeypadPopup(false);
            // Store the final amount to be displayed on the voucher
            setMintAmount(amount);
            timeout = setTimeout(() => setAnimationStep(6), 700);
            break;
          case 6:
            // Pan to the voucher view.
            setCurrentPanel(1);
            timeout = setTimeout(() => setAnimationStep(7), 1000);
            break;
          case 7:
            // Wait for voucher to be seen.
            timeout = setTimeout(() => setAnimationStep(8), 2500);
            break;
          case 8:
            // Pan to the wallet view.
            setCurrentPanel(2);
            timeout = setTimeout(() => setAnimationStep(9), 1000);
            break;
          case 9:
            // Wait on wallet view, then restart the loop.
            timeout = setTimeout(() => setAnimationStep(0), 1000);
            break;
          default:
            break;
        }
      };

      // Start the sequence and clean up on unmount
      runAnimationStep(animationStep);
      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }, [animationStep, amount]);

    // Define static classes for intentional left-to-right panning workflow
    const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-x-0";
    const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
    const panelHiddenRightClasses = "opacity-0 translate-x-full";

    // Panel class assignments for intentional workflow panning
    const panel0Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
    const panel1Classes = `${panelBaseClasses} ${currentPanel === 1 ? panelVisibleClasses : currentPanel === 0 ? panelHiddenRightClasses : panelHiddenLeftClasses}`;
    const panel2Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;

    // Popup classes for controlling its visibility and animation
    const keypadPopupClasses = `absolute w-full max-w-lg mx-auto bottom-0 rounded-t-2xl shadow-2xl transition-all duration-500 ease-in-out z-50 transform bg-white dark:bg-slate-800
      ${showKeypadPopup ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`;
    const keypadPopupContainerClasses = `absolute inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${showKeypadPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;

    return (
        <VisualContainer>
            <style>{cursorStyle}</style>
            <div className="relative w-full max-w-lg mx-auto min-h-[400px] overflow-hidden rounded-2xl flex flex-col">
                {/* Panel 0: Agent Dashboard */}
                <div
                    className={panel0Classes}
                    style={{ zIndex: currentPanel === 0 ? 3 : 1 }}
                >
                    <div className="bg-white dark:bg-slate-900 w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4">
                        {/* Dashboard header with relevant Settings icon */}
                        <Header title="Tia Store" subtitle="Agent Dashboard" icon={<Settings className="w-5 h-5 text-slate-400" />} />

                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Available Credit</p>
                                    <p className="text-2xl font-bold text-green-500 tracking-tight">4,950.00 BOBC</p>
                                </div>
                                <button className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-200 rounded-full transition-colors">
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Button that triggers the popup directly with typing animation */}
                        <button
                            className={`flex items-center justify-center w-full space-x-2 px-4 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-200 my-4 bg-green-500
                                ${isIssueButtonClicked ? 'scale-95 bg-green-600 shadow-inner' : 'hover:bg-green-500/90 hover:scale-105'}
                            `}
                            onClick={() => {}} // Disabled for the animation loop
                        >
                            <Zap className="w-4 h-4" />
                            <span>Issue BOBC</span>
                        </button>


                        {/* Transaction history area */}
                        <div className="flex-grow mt-4 overflow-hidden flex flex-col">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2"><History className="w-4 h-4" /> Recent Transactions</p>
                            <div className="space-y-2 text-sm overflow-y-auto">
                                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer">
                                    <div><span className="text-slate-600 dark:text-slate-400">Credit Top-up</span> <p className="text-xs text-slate-400">14 Aug 2025, 10:15</p></div>
                                    <span className="font-medium text-green-500">+ 5,000 BOBC</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer">
                                    <div><span className="text-slate-600 dark:text-slate-400">Mint #8721</span><p className="text-xs text-slate-400">14 Aug 2025, 09:48</p></div>
                                    <span className="font-medium text-slate-700 dark:text-slate-300">- 50.00 BOBC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 1: Mint Issued View */}
                <div
                    className={panel1Classes}
                    style={{ zIndex: currentPanel === 1 ? 3 : 2 }}
                >
                    <MintContent voucherId={voucherId} amount={voucherAmount} />
                </div>

                {/* Panel 2: Maria Silva Wallet View */}
                <div
                    className={panel2Classes}
                    style={{ zIndex: currentPanel === 2 ? 3 : 2 }}
                >
                    <div className="bg-white dark:bg-slate-900 w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4">
                        {/* Wallet header with relevant User icon */}
                        <Header title="Maria Silva" subtitle="Wallet" icon={<User className="w-5 h-5 text-slate-400" />} />

                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Balance</p>
                                    <p className="text-2xl font-bold text-green-500 tracking-tight">50.00 BOBC</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                    <User className="w-5 h-5 text-slate-500" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 my-4">
                            <button className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-500/90 text-white text-sm font-semibold rounded-lg transition-colors">
                                Pay
                            </button>
                            <button className="flex-1 py-2 px-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition-colors">
                                Trade
                            </button>
                        </div>

                        {/* Activity history area */}
                        <div className="flex-grow overflow-hidden flex flex-col">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2"><History className="w-4 h-4" /> Activity</p>
                            <div className="space-y-2 text-sm overflow-y-auto">
                                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer">
                                    <div>
                                        <span className="text-slate-600 dark:text-slate-400">Claimed BOBC</span> 
                                        <p className="text-xs text-slate-400">14 Aug 2025, 09:51</p>
                                    </div>
                                    <span className="font-medium text-green-500">+ 50.00 BOBC</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer">
                                    <div>
                                        <span className="text-slate-600 dark:text-slate-400">Wallet Created</span>
                                        <p className="text-xs text-slate-400">14 Aug 2025, 09:48</p>
                                    </div>
                                    <span className="font-medium text-slate-700 dark:text-slate-300">--</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pop-up for amount input */}
                <div className={keypadPopupContainerClasses}>
                    <div className={`${keypadPopupClasses} p-8 flex flex-col space-y-4`}>
                        {/* Mint amount header with relevant Keyboard icon */}
                        <Header title="Mint Amount" subtitle="Enter the amount to issue." icon={<Keyboard className="w-5 h-5 text-slate-400" />} />
                        <div className="flex-grow flex flex-col items-center justify-center text-center">
                          <div className="flex items-center justify-center gap-2">
                              <p className="text-6xl font-bold my-2 text-green-500 tracking-tight">
                                  {amount || '0'}
                                  <span className="text-4xl font-normal">.00</span>
                                  <span className="typing-cursor"></span>
                                  {/* Added subtle BOBC after the cursor */}
                                  <span className="ml-2 text-3xl font-normal text-slate-500 dark:text-slate-400">BOBC</span>
                              </p>
                          </div>
                          {/* Added "Available Credit" under the amount */}
                          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            Available Credit: 4,950.00 BOBC
                          </div>
                          {/* Issue Button now replaces the keypad and right arrow button */}
                          <button 
                            onClick={() => {}} // Disabled for animation
                            className={`flex items-center justify-center w-full mt-4 space-x-2 px-4 py-3 text-white text-base font-semibold rounded-lg transition-all duration-200 bg-green-500
                                ${isEnterButtonClicked ? 'scale-95 bg-green-600 shadow-inner' : 'hover:bg-green-500/90'}
                            `}
                          >
                            <Zap className="w-5 h-5" />
                            <span>Issue BOBC</span>
                          </button>
                        </div>
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// ExecutiveDistributionFlow component defined above


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
                        <p className="text-xs text-slate-400 mt-6">Powered by Verto</p>
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
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pay with</p>
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

                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">To</p>
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
                        
                        <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-dashed border-slate-200 dark:border-slate-700">
                            <span>Rate: 1 BOBC ≈ 0.01 USDC</span>
                            <span>Fees: 0.00 USDC</span>
                        </div>
                        <button className={`flex items-center justify-center w-full space-x-2 px-4 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 ${buttonClicked && currentPanel === 1 ? 'scale-90 bg-verto-purple/60 shadow-lg ring-4 ring-verto-purple/30' : 'scale-100 bg-verto-purple hover:bg-verto-purple/90'} hover:scale-105`}>
                            <Zap className="w-4 h-4" />
                            <span>Pay 120.00 USDC</span>
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-auto flex items-center justify-center gap-1.5 pb-6"><Lock className="w-3 h-3" /> Secured by Verto</p>
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

// Custom hook for the typing animation effect.
const useTypingAnimation = (text: string, start: boolean, duration = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (start && currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, duration);
      return () => clearTimeout(timeoutId);
    } else if (!start) {
      setDisplayedText('');
      setCurrentIndex(0);
    }
  }, [text, start, duration, currentIndex]);

  return displayedText;
};


// --- Main Component: ExecutiveLiquidityFlow ---
const ExecutiveLiquidityFlow = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  // Centralized state object for all animations within the panels
  const [animationState, setAnimationState] = useState({
    typingSource: false,
    typingSourceToken: false,
    typingDestination: false,
    typingDestinationToken: false,
    isGenerating: false,
    showToast: false,
    signatures: { maria: false, john: false },
    isExecuting: false,
    visibleSteps: [],
  });

  // This effect controls the main animation cycle between the three panels.
  useEffect(() => {
    // Reset all states when the panel cycle begins
    if (currentPanel === 0) {
      setAnimationState({
        typingSource: false,
        typingSourceToken: false,
        typingDestination: false,
        typingDestinationToken: false,
        isGenerating: false,
        showToast: false,
        signatures: { maria: false, john: false },
        isExecuting: false,
        visibleSteps: [],
      });
      // Sequence of typing animations for Panel 0
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, typingSource: true })), 300),
        setTimeout(() => setAnimationState(s => ({ ...s, typingSourceToken: true })), 1200),
        setTimeout(() => setAnimationState(s => ({ ...s, typingDestination: true })), 1500),
        setTimeout(() => setAnimationState(s => ({ ...s, typingDestinationToken: true })), 2400),
        setTimeout(() => setAnimationState(s => ({ ...s, isGenerating: true })), 2700),
      ];
      // Cleanup timers when the panel changes
      return () => timers.forEach(clearTimeout);
    } else if (currentPanel === 1) {
      // Sequence of animations for Panel 1
      const timers = [
        setTimeout(() => {
          setAnimationState(s => ({ ...s, showToast: true }));
        }, 2000),
        setTimeout(() => {
          setAnimationState(s => ({ ...s, signatures: { ...s.signatures, maria: true } }));
        }, 2500),
        setTimeout(() => {
          setAnimationState(s => ({ ...s, signatures: { ...s.signatures, john: true } }));
        }, 4000),
        setTimeout(() => {
          setAnimationState(s => ({ ...s, showToast: false }));
        }, 6000),
        setTimeout(() => {
          setAnimationState(s => ({ ...s, isExecuting: true }));
        }, 4500),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentPanel]);


  // Effect to manage the cycling of panels
  useEffect(() => {
    const cyclePanels = () => {
      setCurrentPanel(prev => (prev + 1) % 3);
    };
    const intervalId = setInterval(cyclePanels, 7000); // Cycle every 7 seconds
    return () => clearInterval(intervalId);
  }, []);

  // --- Panel Class Management for Left-to-Right Pan ---
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
      <div className="relative w-full max-w-md mx-auto h-[480px] font-sans overflow-hidden">
        {/* Panel 1: API Payment Request */}
        <div className={getPanelClasses(0)}>
          <ApiRequestPanel
            typingState={{
              source: animationState.typingSource,
              sourceToken: animationState.typingSourceToken,
              destination: animationState.typingDestination,
              destinationToken: animationState.typingDestinationToken,
            }}
            isGenerating={animationState.isGenerating}
          />
        </div>

        {/* Panel 2: Route Creation & Signatures */}
        <div className={getPanelClasses(1)}>
          <RouteCreationPanel
            signatures={animationState.signatures}
            showSignatureToast={animationState.showToast}
            isExecuting={animationState.isExecuting}
            currentPanel={currentPanel}
          />
        </div>

        {/* Panel 3: Compliance & Execution Report */}
        <div className={getPanelClasses(2)}>
          <ComplianceReportPanel />
        </div>
      </div>
    </VisualContainer>
  );
};

// --- Sub-component for Panel 1: API Request ---
const ApiRequestPanel = ({ typingState, isGenerating }: { typingState: any, isGenerating: boolean }) => {
  const sourceText = useTypingAnimation(`"fb_solana_wallet_0x1a2b"`, typingState.source);
  const sourceTokenText = useTypingAnimation(`"USDC"`, typingState.sourceToken);
  const destinationText = useTypingAnimation(`"merchant_tia_store_0x3c4d"`, typingState.destination);
  const destinationTokenText = useTypingAnimation(`"25000.00 BOBC"`, typingState.destinationToken);

  return (
    <div className="bg-slate-900 w-full h-full mx-auto rounded-2xl shadow-2xl border border-slate-700 p-6 flex flex-col font-mono text-sm">
      <div className="flex items-center mb-4">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="flex-1 text-center text-slate-400 text-xs">POST /v1/pay</span>
      </div>
      <div className="text-slate-300 flex-grow">
        <span className="text-purple-400">{'{'}</span>
        <div className="pl-4 space-y-1">
          <div>
            <span className="text-cyan-400">"source_wallet"</span>: <span className="text-amber-300">{sourceText}</span>
            {typingState.source && !typingState.sourceToken && <motion.span className="animate-pulse">|</motion.span>}
          </div>
          <div>
            <span className="text-cyan-400">"source_token"</span>: <span className="text-amber-300">{sourceTokenText}</span>
            {typingState.sourceToken && !typingState.destination && <motion.span className="animate-pulse">|</motion.span>}
          </div>
          <div>
            <span className="text-cyan-400">"destination_wallet"</span>: <span className="text-amber-300">{destinationText}</span>
            {typingState.destination && !typingState.destinationToken && <motion.span className="animate-pulse">|</motion.span>}
          </div>
          <div>
            <span className="text-cyan-400">"destination_amount"</span>: <span className="text-amber-300">{destinationTokenText}</span>
            {typingState.destinationToken && !isGenerating && <motion.span className="animate-pulse">|</motion.span>}
          </div>
        </div>
        <span className="text-purple-400">{'}'}</span>
      </div>
      <div className={`mt-auto text-center pt-4 transition-opacity duration-500 ${isGenerating ? 'opacity-100' : 'opacity-0'}`}>
        <div className="inline-flex items-center gap-2 text-slate-400 text-xs">
          <Cpu className="w-4 h-4 animate-spin" />
          <span>Generating optimal route...</span>
        </div>
      </div>
    </div>
  );
};

// --- Sub-component for Panel 2: Route Creation ---
const RouteCreationPanel = ({ signatures, showSignatureToast, isExecuting, currentPanel }: { signatures: any, showSignatureToast: boolean, isExecuting: boolean, currentPanel: number }) => {
  const routeSteps = useMemo(() => [
    { id: 1, title: 'Withdraw from Fireblocks', subtitle: '250.00 USDC', network: 'Solana' },
    { id: 2, title: 'Bridge via CCTP', subtitle: '250.00 USDC', network: 'Solana' },
    { id: 3, title: 'Swap on Curve Finance', subtitle: '250.00 USDC to 25,000 BOBC', network: 'Arbitrum' },
    { id: 4, title: 'Pay Tia Store', subtitle: '0x3h5h..4243', network: 'Arbitrum' },
  ], []);

  const signatureItems = useMemo(() => [
    { key: 'maria', name: 'Maria Silva', role: 'Fireblocks', signed: signatures.maria },
    { key: 'john', name: 'John Doe', role: 'Copper', signed: signatures.john },
  ], [signatures]);

  // Framer Motion variants for staggered list items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggers the children's animations by 0.2 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-slate-900 w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col relative">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Batched Transaction Route</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">TXID: 9e3b...a8c5</p>
        </div>
        <FileText className="w-6 h-6 text-slate-400" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={currentPanel === 1 ? "show" : "hidden"} // Animate only when this panel is active
        className={`space-y-3 mb-5 flex-grow transition-all duration-500 ${showSignatureToast ? 'blur-sm' : ''}`}
      >
        <AnimatePresence>
          {routeSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 transition-all duration-500 bg-slate-50 dark:bg-slate-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-slate-700 dark:text-slate-200 w-6 text-center">{step.id}.</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{step.title}</span>
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-600 font-mono italic">{step.network}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-500 ml-8 mt-1">{step.subtitle}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {showSignatureToast && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 20, stiffness: 80 }}
            className="absolute bottom-4 left-4 right-4 p-5 bg-slate-950 shadow-xl shadow-slate-900/50 rounded-2xl border border-slate-700"
          >
            <div className="flex items-center mb-3">
              <FileText className="w-6 h-6 text-slate-400 mr-3" />
              <p className="text-lg font-bold text-slate-200">Awaiting Signatures (2/2)</p>
            </div>
            <div className="space-y-2">
              {signatureItems.map((item: any) => (
                <div key={item.key} className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ${item.signed ? 'bg-green-900/30 border border-green-700' : 'bg-slate-800/50'}`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`w-6 h-6 transition-colors duration-300 ${item.signed ? 'text-green-500' : 'text-slate-600'}`} />
                    <span className={`text-base font-medium ${item.signed ? 'text-green-300' : 'text-slate-400'}`}>{item.name}</span>
                  </div>
                  <span className={`font-bold text-sm ${item.signed ? 'text-blue-400' : 'text-slate-600'}`}>{item.role}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isExecuting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm"
          >
            <div className="inline-flex items-center gap-2 text-slate-300 text-sm">
              <Cpu className="w-5 h-5 animate-spin" />
              <span>Executing route...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Sub-component for Panel 3: Compliance Report ---
const ComplianceReportPanel = () => {
  return (
    <div className="bg-white dark:bg-slate-900 w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Compliant Audit Trail</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">TXID: 4a7f...9d1b</p>
        </div>
        <FileText className="w-6 h-6 text-slate-400" />
      </div>

      <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700 flex items-center gap-3 mb-5">
        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
        <p className="font-semibold text-green-800 dark:text-green-200">Execution Successful</p>
      </div>

      <div className="mb-5">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Compliance Checks</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded-md text-sm">
            <span className="text-slate-600 dark:text-slate-300">Sanctions & AML</span>
            <span className="font-medium text-green-600 dark:text-green-400">Passed</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded-md text-sm">
            <span className="text-slate-600 dark:text-slate-300">Counterparty</span>
            <span className="font-medium text-green-600 dark:text-green-400">Verified</span>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Execution Details</p>
        <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400 p-3 bg-slate-50 dark:bg-slate-800 rounded-md font-mono">
          <div className="flex justify-between"><span>Net Cost:</span> <span>25,022.50 USDC</span></div>
          <div className="flex justify-between"><span>Price:</span> <span>1 BOBC = 0.999 USDC</span></div>
          <div className="flex justify-between"><span>Duration:</span> <span>3.2 seconds</span></div>
          <div className="flex justify-between"><span>Solana Hash:</span> <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">4Fv8...a1b4</span></div>
          <div className="flex justify-between"><span>Arbitrum Hash:</span> <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">0x9cE4...d7a8</span></div>
        </div>
      </div>
    </div>
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

// A simple container to hold the visual, providing consistent padding and a dark/light mode bg.
const ServiceVisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center min-h-screen bg-slate-200 dark:bg-slate-900 p-4 font-sans text-slate-800 dark:text-slate-200">
    {children}
  </div>
);

// CSS for the pulsing green dot animation
const animationStyles = `
  @keyframes pulse-green {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
  }
  .animate-pulse-green {
    animation: pulse-green 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

// A reusable header component for consistent styling within the dashboard
const ServiceHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
    <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
        {icon && React.cloneElement(icon as React.ReactElement, { className: 'w-3 h-3' })}
        <span>{title}</span>
    </div>
);

// --- Main Dashboard Component ---
const ExecutiveServiceFlow = () => {
    // State for the active SOC location and the simulated time
    const [activeSOC, setActiveSOC] = useState('New York');
    const [timeData, setTimeData] = useState({ hours: 6, minutes: 0 }); // Start at 06:00

    useEffect(() => {
        const locations = ['New York', 'Barcelona', 'Singapore'];

        // Interval to update the clock every 50ms for a smooth animation
        const clockInterval = setInterval(() => {
            setTimeData(prevTime => {
                let newMinutes = prevTime.minutes + 10;
                let newHours = prevTime.hours;

                if (newMinutes >= 60) {
                    newMinutes = 0;
                    newHours = (newHours + 1) % 24;
                }

                // Change active SOC based on 8-hour shifts
                // 06:00 - 14:00 -> New York
                // 14:00 - 22:00 -> Barcelona
                // 22:00 - 06:00 -> Singapore
                if (newHours >= 6 && newHours < 14) {
                    setActiveSOC(locations[0]); // New York
                } else if (newHours >= 14 && newHours < 22) {
                    setActiveSOC(locations[1]); // Barcelona
                } else {
                    setActiveSOC(locations[2]); // Singapore
                }

                return { hours: newHours, minutes: newMinutes };
            });
        }, 50); // Faster interval for smoother clock

        return () => clearInterval(clockInterval);
    }, []);

    // Format the time for display with leading zeros
    const formattedTime = `${String(timeData.hours).padStart(2, '0')}:${String(timeData.minutes).padStart(2, '0')}`;

    return (
        <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
            <style>{animationStyles}</style>
            <div className="w-full max-w-xs md:max-w-sm p-4 md:p-5 rounded-2xl shadow-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col space-y-4 md:space-y-5">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                    <h1 className="text-base font-bold text-slate-600 dark:text-slate-300">Service Dashboard</h1>
                    <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 rounded-full">
                        <ShieldCheck className="w-3 h-3" />
                        <span className="text-xs font-semibold uppercase tracking-wider">24/7 SOC</span>
                    </div>
                </div>

                {/* Section 1: Cluster & Environment */}
                <div>
                    <ServiceHeader title="Self-Hosted Deployment" icon={<Server />} />
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                            <div>
                                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">Operational Status</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    <p className="text-xl font-bold text-green-500 tracking-tight">99.99%</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                <Cpu className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex-1">
                                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Environment</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">Production</p>
                            </div>
                            <div className="flex-1 text-right">
                                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Location</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">sa-east1-siloed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Active SOC Monitoring */}
                <div>
                    <ServiceHeader title="Active SOC Monitoring" icon={<Monitor />} />
                    <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <div className="flex items-center gap-4">
                            <div className="relative p-2 rounded-full bg-green-500 animate-pulse-green">
                                <Monitor className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-base font-semibold text-slate-600 dark:text-slate-300">{activeSOC}</p>
                                <span className="text-xs font-bold text-green-500 uppercase">Active</span>
                            </div>
                        </div>
                        {/* Digital clock displaying the time */}
                        <div className="flex items-center gap-2">
                             <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                             <span className="text-xl font-mono font-semibold text-slate-600 dark:text-slate-300 tracking-tight">{formattedTime}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


// DESIGN CHANGE: Create a dedicated "Insight Banner" for the founder quotes.
// This new component creates the full-width, colored banner style.
const FounderInsightBanner = ({ quote, name, title, image, colorClasses }) => (
    <div className={`rounded-xl p-6 md:p-8 mt-4 mb-6 ${colorClasses.bg}/10`}>
        <div className="flex flex-col md:flex-row items-start gap-6">
            <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover ring-4 ring-white/50 dark:ring-slate-950/50 flex-shrink-0" />
            <div>
                <blockquote className={`text-lg md:text-xl font-medium leading-snug text-slate-800 dark:text-slate-100 border-l-4 ${colorClasses.border} pl-5`}>
                    <p>"{quote}"</p>
                </blockquote>
                <footer className="mt-4">
                    <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
                    <p className={`text-sm font-medium ${colorClasses.text}`}>{title}</p>
                </footer>
            </div>
        </div>
    </div>
);

// DESIGN CHANGE: Define the FeatureItem with larger text and better spacing.
const FeatureItem = ({ icon: Icon, title, children }: { icon: React.ComponentType<LucideProps>, title: string, children: React.ReactNode }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800">
                <Icon className="w-6 h-6 text-verto-blue" />
            </div>
        </div>
        <div className="ml-4">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-300 leading-relaxed">{children}</p>
        </div>
    </div>
);


export default function PillarsSection({ 
  title = "One Unified Platform",
  subtitle = "A self-hosted stack for trading, payments, and asset distribution on any chain.\nMonitored 24×7 by global experts with AI-automated compliance.",
  customFounderQuotes
}: PillarsSectionProps = {}) {
    const [activeTab, setActiveTab] = useState("liquidity");

    // Listen for pillar activation events from hero CTAs
    useEffect(() => {
        const handleActivatePillar = (event: CustomEvent) => {
            setActiveTab(event.detail);
        };

        window.addEventListener('activatePillar', handleActivatePillar as EventListener);
        return () => {
            window.removeEventListener('activatePillar', handleActivatePillar as EventListener);
        };
    }, []);

    // REWRITTEN QUOTES & UPDATED DATA: Quotes are now more specific, empathetic, and powerful.
    // Founder images are now included.
    const defaultPillars = {
        liquidity: { 
            label: "Trading", color: "verto-blue", title: "Institutional DeFi Access", 
            description: "Access fragmented on-chain liquidity and execute trading strategies with institutional-grade controls, security, and compliance.", 
            visual: <ExecutiveLiquidityFlow />,
            founderQuote: { 
                quote: "Every Head of Trading knows the pain: DeFi has the deepest liquidity pools, but accessing them safely is impossible with current tools. At GSR, we lost millions learning this lesson. Verto gives institutional desks what I wish we had—pre-trade risk controls that work across every chain and protocol.",
                name: "David Cass",
                title: "CEO | Former CISO at GSR Trading",
                image: davidImage
            },
            features: [ { icon: GitBranch, title: "Smart Order Routing", description: "Balance risk, pricing and latency across multiple protocols and chains to find the best execution route for every trade." }, { icon: ShieldCheck, title: "Uncompromised Sovereignty", description: "Sign transaction routes with your existing custodial key governance, so your assets never leave your control." }, { icon: Archive, title: "Atomic Execution", description: "Automate the entire transaction workflow with a single, batched payload that eliminates manual operational errors." }, ], 
            cta: "Integrate Liquidity API" 
        },
        payments: { 
            label: "Payments", color: "verto-purple", title: "Enterprise Payment Infrastructure", 
            description: "Enable institutional clients and merchants to accept your digital assets with enterprise-grade settlement, reconciliation, and reporting.", 
            visual: <PolishedPaymentsFlow />, 
            founderQuote: { 
                quote: "At Venmo, I learned that enterprise payments success isn't about the consumer—it's about the CFO. They need instant settlement, automated reconciliation, and audit-ready reporting. Verto handles the blockchain complexity so your treasury operations stay familiar.",
                name: "Nilesh Khaitan",
                title: "CPO | Ex-Venmo/PayPal Crypto",
                image: nileshImage
            },
            features: [ { icon: Zap, title: "Boost Conversion", description: "One-tap UX with sponsored gas removes friction and dramatically increases payment completion rates." }, { icon: Globe, title: "Universal Acceptance", description: "A single API unlocks a global payment ecosystem, driving real-world utility and adoption for your asset." }, { icon: Server, title: "Automated Back-Office", description: "We handle routing, settlement, reconciliation, and reporting automatically to reduce operational overhead." }, ], 
            cta: "Explore Payments API" 
        },
        distribution: { 
            label: "Distribution", color: "verto-green", title: "Institutional Distribution Network", 
            description: "Scale your digital asset through existing financial partnerships—banks, payment processors, and institutional networks—without pre-funded treasury risk.", 
            visual: <ExecutiveDistributionFlow />, 
            founderQuote: { 
                quote: "At the Federal Reserve, I saw how currency distribution makes or breaks monetary policy. Every bank CEO knows their biggest risk isn't technology—it's operational scale. Verto turns your existing correspondent banking network into a digital asset distribution engine.",
                name: "David Cass",
                title: "CEO | Former Federal Reserve Regulator",
                image: davidImage
            },
            features: [ { icon: Users, title: "Leverage Existing Networks", description: "Activate vast, pre-existing retail and agent networks to scale adoption without new infrastructure." }, { icon: Zap, title: "Zero-Float Operations", description: "On-demand minting is backed by real-time deposits, eliminating the need for a costly, pre-funded treasury." }, { icon: Terminal, title: "Partner Portal & APIs", description: "A powerful, simple interface for partners to manage credit, issue assets, and monitor earnings." }, ], 
            cta: "Get Distribution Playbook" 
        },
        compliance: { 
            label: "Compliance", color: "verto-cyan", title: "Regulatory Compliance Automation", 
            description: "Transform regulatory compliance from a cost center into a competitive advantage with continuous monitoring and automated reporting that satisfies bank regulators.", 
            visual: <PolishedComplianceFlow />,
            founderQuote: { 
                quote: "Every Chief Compliance Officer knows the nightmare: explaining crypto transactions to bank examiners. At the DOJ, I learned regulators want transparency, not excuses. Verto provides what every CCO needs—real-time compliance monitoring that speaks the regulator's language.",
                name: "Daniel Garrie",
                title: "General Counsel | Fmr. Advisor to DOJ & DTCC",
                image: danielImage
            },
            features: [ { icon: Gauge, title: "Explainable Risk Ratings", description: "AI generates clear, transparent risk scores for every counterparty, with full data lineage for audits." }, { icon: SlidersHorizontal, title: "Policy-Driven Controls", description: "Define your risk appetite once. Our platform enforces your policies on every transaction automatically." }, { icon: Shield, title: "Automated Audit Trails", description: "Generate human-readable, verifiable logs of every compliance decision for internal teams and regulators." }, ], 
            cta: "Request Compliance Demo" 
        },
        service: { 
            label: "Service", color: "verto-orange",
            title: "24/7 Global Operations", 
            description: "Maintain operational integrity with our global SOC teams providing monitoring and support for your self-hosted environment.", 
            visual: <ExecutiveServiceFlow />,
            founderQuote: { 
                quote: "Google’s reliability isn't magic; it's a culture of engineering that prevents the 3 AM fire-drill. We embedded that SRE DNA into Verto's service model. You maintain data sovereignty on your servers; we give your engineers their weekends back.",
                name: "Hisham Anwar",
                title: "CTO | Ex-Google Head of Product",
                image: hishamImage
            },
            features: [ { icon: Database, title: "Data Sovereignty & Control", description: "Deploy Verto nodes in your environment—on-prem or private cloud—so your keys and data never leave your perimeter." }, { icon: LifeBuoy, title: "Embedded Global Expertise", description: "Our Security Operations Centers provide continuous, round-the-clock monitoring and incident response." }, { icon: ShieldCheck, title: "Institutional Rigor", description: "Leadership from the Federal Reserve, Google, and PayPal translates TradFi risk management to digital assets." }, ], 
            cta: "Learn About Our Service Model" 
        },
    };

    // Override founder quotes if custom ones provided
    const pillars = customFounderQuotes ? {
        ...defaultPillars,
        ...Object.fromEntries(
            customFounderQuotes.map(customQuote => [
                customQuote.pillarKey,
                {
                    ...defaultPillars[customQuote.pillarKey as keyof typeof defaultPillars],
                    founderQuote: {
                        quote: customQuote.quote,
                        name: customQuote.name,
                        title: customQuote.title,
                        image: customQuote.image
                    }
                }
            ])
        )
    } : defaultPillars;

    const colorMap = {
        'verto-green': { border: 'border-verto-green', text: 'text-verto-green', bg: 'bg-verto-green' },
        'verto-purple': { border: 'border-verto-purple', text: 'text-verto-purple', bg: 'bg-verto-purple' },
        'verto-blue': { border: 'border-verto-blue', text: 'text-verto-blue', bg: 'bg-verto-blue' },
        'verto-cyan': { border: 'border-verto-cyan', text: 'text-verto-cyan', bg: 'bg-verto-cyan' },
        'verto-orange': { border: 'border-verto-orange', text: 'text-verto-orange', bg: 'bg-verto-orange' },
    };

    const activePillar = pillars[activeTab as keyof typeof pillars];
    const activeColors = colorMap[activePillar.color as keyof typeof colorMap];

    return (
        <div id="infrastructure" className="bg-white dark:bg-slate-950">
            <div className="text-center pt-16 pb-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight" data-testid="team-title">
                {title}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-6">
                {subtitle.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < subtitle.split('\n').length - 1 && <br/>}
                  </React.Fragment>
                ))}
                </p>
            </div>
            
            {/* Sticky Navigation Bar */}
            <div className="sticky top-16 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex sm:justify-center justify-start overflow-x-auto space-x-6 sm:space-x-8 py-4" aria-label="Tabs">
                        {Object.keys(pillars).map((key) => {
                            const pillar = pillars[key as keyof typeof pillars];
                            const colors = colorMap[pillar.color as keyof typeof colorMap];
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex-shrink-0 whitespace-nowrap py-2 px-4 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === key ? `${colors.border} ${colors.text}` : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"}`}
                                >
                                    {pillar.label}
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* DESIGN CHANGE: The main content container now has more consistent padding */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* DESIGN CHANGE: Founder Insight Banner is rendered here, outside the grid, for a full-width feel. */}
                {activePillar.founderQuote && <FounderInsightBanner {...activePillar.founderQuote} colorClasses={activeColors} />}

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center">
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-1">
                        <div>
                            <p className={`text-sm font-semibold uppercase tracking-wider ${activeColors.text}`}>{activePillar.label}</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">{activePillar.title}</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{activePillar.description}</p>
                        </div>

                        {/* Mobile Animation - Renders below description on small screens */}
                        <div className="lg:hidden my-10">
                            {activePillar.visual}
                        </div>

                        <div className="space-y-6 md:space-y-8 mt-10 mb-10">
                            {activePillar.features.map((feature: any) => (
                                <FeatureItem key={feature.title} icon={feature.icon} title={feature.title}>{feature.description}</FeatureItem>
                            ))}
                        </div>
                        <button className={`inline-flex items-center px-6 py-3 ${activeColors.bg} hover:bg-opacity-90 text-white font-semibold rounded-lg transition-colors`}>
                            <span>{activePillar.cta}</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="hidden lg:flex lg:col-span-1 justify-center">
                        <div className="w-full max-w-md">
                            {activePillar.visual}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}