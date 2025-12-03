import React, { useState, useEffect, useMemo, useRef } from "react";
import { useCalendlyModal } from "./calendly-modal";

// ===== ANIMATION CONSTANTS & STYLES =====

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
  
  .spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;


// ===== INTERFACES =====

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
  customOrder?: string[];
}
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Users, Rocket, Terminal,
  Zap, Store, Archive, KeyIcon,
  ShieldCheck, SquareStack, SlidersHorizontal,
  Database, GitBranch,
  LifeBuoy, Lock, ArrowRight, Route, Shield, MessageCircle,
  ChevronDown, Landmark, History, Link, Clock, Plus,
  Settings, Gauge, Network, Server, Globe, FileText, CheckCircle,
  Cpu, Keyboard, Monitor, Coins, CreditCard, TrendingUp, Workflow, Calendar, Quote,
  Loader2, Building, Blocks, ArrowUpRight, ArrowDownLeft, Hash, RefreshCw,
  Smartphone, ScanLine, Fingerprint, Briefcase, DollarSign, Activity, Gift
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import hishamImage from "@assets/hisham_1754986415368.png";
import nileshImage from "@assets/nilesh_1754986415369.png";

// --- Simplified Visual Container - No Background Interference ---
const VisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
    {children}
  </div>
);

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
    <div className=" w-full max-w-xs mx-auto rounded-2xl shadow-xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 h-full">
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
        <QRCodeSVG value={`https://albor.exchange/claim?amount=${amount}.00&id=${voucherId}`} size={120} />
      </div>
    </div>
  );
};


// --- VISUAL 1: Distribution (Animated Flow) - Liquidity Pool Animation ---
const ExecutiveDistributionFlow = () => {
    const [currentPanel, setCurrentPanel] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [amount, setAmount] = useState('');
    const [addedLiquidity, setAddedLiquidity] = useState(0);
    const [compoundingYield, setCompoundingYield] = useState(0.0);
    const [signatureState, setSignatureState] = useState('idle');
    const [isAddButtonClicked, setAddButtonClicked] = useState(false);
    const [isConfirmButtonClicked, setConfirmButtonClicked] = useState(false);
    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        const runAnimationStep = (step: number) => {
            switch (step) {
                case 0:
                    setCurrentPanel(0);
                    setShowPopup(false);
                    setAmount('');
                    setAddedLiquidity(0);
                    setCompoundingYield(0.0);
                    setSignatureState('idle');
                    setAddButtonClicked(false);
                    setConfirmButtonClicked(false);
                    timeout = setTimeout(() => setAnimationStep(1), 500);
                    break;
                case 1:
                    setAddButtonClicked(true);
                    timeout = setTimeout(() => setAnimationStep(2), 300);
                    break;
                case 2:
                    setAddButtonClicked(false);
                    setShowPopup(true);
                    timeout = setTimeout(() => setAnimationStep(3), 500);
                    break;
                case 3:
                    setAmount('10,000');
                    timeout = setTimeout(() => setAnimationStep(4), 1500);
                    break;
                case 4:
                    setConfirmButtonClicked(true);
                    timeout = setTimeout(() => setAnimationStep(5), 300);
                    break;
                case 5:
                    setConfirmButtonClicked(false);
                    setSignatureState('awaiting');
                    timeout = setTimeout(() => setAnimationStep(6), 500);
                    break;
                case 6:
                    setSignatureState('received');
                    timeout = setTimeout(() => setAnimationStep(7), 1500);
                    break;
                case 7:
                    setShowPopup(false);
                    setAddedLiquidity(10000);
                    setAmount('');
                    timeout = setTimeout(() => setAnimationStep(8), 700);
                    break;
                case 8:
                    setCurrentPanel(2);
                    setCompoundingYield(0.0);
                    interval = setInterval(() => {
                        setCompoundingYield(prev => prev + 0.045);
                    }, 50);
                    timeout = setTimeout(() => setAnimationStep(9), 5000);
                    break;
                case 9:
                    clearInterval(interval);
                    timeout = setTimeout(() => setAnimationStep(0), 400);
                    break;
            }
        };

        runAnimationStep(animationStep);

        return () => {
            if (timeout) clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [animationStep]);

    const panelBaseClasses = "absolute inset-0 transition-all duration-500 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-x-0";
    const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
    const panelHiddenRightClasses = "opacity-0 translate-x-full";

    const panel0Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
    const panel2Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;

    const keypadPopupClasses = `w-full rounded-t-3xl shadow-2xl transition-all duration-500 ease-in-out z-50 transform bg-white dark:bg-slate-800 max-h-[70vh] overflow-y-auto ${showPopup ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`;
    const keypadPopupContainerClasses = `absolute inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 flex flex-col justify-end ${showPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;

    return (
        <VisualContainer>
            <style>{cursorStyle}</style>
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto min-h-[350px] lg:min-h-[400px] overflow-hidden rounded-2xl flex flex-col">
                {/* Panel 0: Pool Overview */}
                <div className={panel0Classes} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
                    <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-5 flex flex-col space-y-3 lg:space-y-4">
                        <Header title="Liquidity Pool" subtitle="BSD / USDC" icon={<Briefcase className="w-5 h-5 text-slate-400" />} />
                        <div className="p-3 lg:p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Liquidity</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">$4,950,000.00</p>
                                </div>
                                <DollarSign className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Monthly Volume</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">$15,000,000</p>
                                </div>
                                <Activity className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Pool APY</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">14.5%</p>
                                </div>
                                <TrendingUp className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                        </div>
                        <button className={`flex items-center justify-center w-full space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-white text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200 my-2 lg:my-4 bg-blue-500 ${isAddButtonClicked ? 'scale-95 bg-blue-600 shadow-inner' : 'hover:bg-blue-600 hover:scale-105'}`}>
                            <Plus className="w-4 h-4" /> <span>Add Liquidity</span>
                        </button>
                    </div>
                </div>

                {/* Panel 2: Your Position */}
                <div className={panel2Classes} style={{ zIndex: currentPanel === 2 ? 3 : 2 }}>
                    <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-5 flex flex-col space-y-3 lg:space-y-4">
                        <Header title="Your Position" subtitle="BSD / USDC" icon={<User className="w-5 h-5 text-slate-400" />} />
                        <div className="p-3 lg:p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Your Liquidity</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">${(addedLiquidity * 2).toLocaleString()}.00</p>
                                </div>
                                <DollarSign className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Fees Earned</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">${compoundingYield.toFixed(2)}</p>
                                </div>
                                <TrendingUp className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                        </div>
                        <button className={`flex items-center justify-center w-full space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-white bg-blue-500 hover:bg-blue-600 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200 my-2 lg:my-4`}>
                            <ArrowRight className="w-4 h-4 rotate-180" /> <span>Withdraw Liquidity</span>
                        </button>
                        <button className={`flex items-center justify-center w-full space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700/50 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200`}>
                            <Gift className="w-4 h-4" /> <span>Collect Fees</span>
                        </button>
                    </div>
                </div>

                {/* Popup Container */}
                <div className={keypadPopupContainerClasses}>
                    <div className={`${keypadPopupClasses} p-4 lg:p-6 flex flex-col space-y-2 lg:space-y-3`}>
                        <Header title="Add Liquidity" subtitle="Enter deposit amount" icon={<Keyboard className="w-5 h-5 text-slate-400" />} />

                        {signatureState === 'idle' && (
                            <div className="flex-grow flex flex-col items-center justify-center text-center">
                                <div className="flex flex-col gap-2 w-full px-2 lg:px-3">
                                    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-2 lg:p-3 rounded-lg border border-slate-100 dark:border-slate-700 min-h-16 lg:min-h-20">
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Deposit</span>
                                            <div className="flex items-baseline">
                                                <span className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100">{amount || '0'}</span>
                                                <span className="typing-cursor"></span>
                                            </div>
                                        </div>
                                        <span className="text-base lg:text-lg font-semibold text-slate-500">USDC</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Plus className="w-4 lg:w-5 h-4 lg:h-5 text-slate-300" />
                                    </div>

                                    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-2 lg:p-3 rounded-lg border border-slate-100 dark:border-slate-700 min-h-16 lg:min-h-20">
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Match</span>
                                            <span className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100">
                                                {amount ? (parseInt(amount.replace(/,/g, '')) * 12.5).toLocaleString() : '0'}
                                            </span>
                                        </div>
                                        <span className="text-base lg:text-lg font-semibold text-slate-500">BSD</span>
                                    </div>
                                    <p className="text-xs text-center text-slate-400">Rate: 1 USDC = 12.50 BSD</p>
                                </div>
                                <button className={`flex items-center justify-center w-full mt-3 lg:mt-4 space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-white text-sm lg:text-base font-semibold rounded-lg transition-all duration-200 bg-blue-500 ${isConfirmButtonClicked ? 'scale-95 bg-blue-600 shadow-inner' : 'hover:bg-blue-600'}`}>
                                    <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5" /> <span>Confirm Deposit</span>
                                </button>
                            </div>
                        )}

                        {signatureState === 'awaiting' && (
                            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 lg:space-y-4">
                                <Loader2 className="w-10 lg:w-12 h-10 lg:h-12 text-blue-500 animate-spin" />
                                <h4 className="text-lg lg:text-xl font-semibold text-slate-800 dark:text-slate-200">Awaiting Fireblocks Signature...</h4>
                                <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400">Please sign the transaction in your Fireblocks wallet.</p>
                            </div>
                        )}

                        {signatureState === 'received' && (
                            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 lg:space-y-4">
                                <CheckCircle className="w-10 lg:w-12 h-10 lg:h-12 text-white" />
                                <h4 className="text-lg lg:text-xl font-semibold text-slate-800 dark:text-slate-200">Signature Received!</h4>
                                <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400">Transaction submitted to the network.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// ExecutiveDistributionFlow component defined above


// --- VISUAL 2: Payments (Updated Advanced Animation) ---

// 1. Merchant creating the invoice
const MerchantCreate = ({ amount, isClicked }: { amount: string, isClicked: boolean }) => (
  <div className="flex flex-col h-full items-center justify-center p-6 text-center pt-14">
    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
      <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Create Payment</h3>
    <p className="text-slate-500 mb-6">Enter amount to receive</p>
    <div className="flex items-baseline justify-center gap-1 mb-8">
      <span className="text-4xl font-bold text-slate-900 dark:text-white">{amount}</span>
      <span className="text-xl font-medium text-slate-500">BSD</span>
    </div>
    <button className={`w-full py-3 bg-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-600/20 transition-transform duration-100 ${isClicked ? 'scale-95' : ''}`}>
      Generate Invoice
    </button>
  </div>
);

// 2. The QR Code Display (Updated with User Details)
const QRDisplay = () => {
  const [showAmount, setShowAmount] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowAmount(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full items-center p-6 text-center bg-white dark:bg-slate-900 pt-14">
      <div className="flex items-center gap-3 mb-2">
       <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
          <User className="w-5 h-5 text-slate-500" />
       </div>
       <span className="font-semibold text-slate-800 dark:text-slate-200">Maria Silva</span>
    </div>
    <p className="text-xs text-slate-500 mb-6">requests payment</p>
    
    <div className="p-4 bg-white rounded-xl border-2 border-slate-100 dark:border-slate-800 shadow-sm mb-6 relative">
      <QRCodeSVG value="https://albor.io/pay/8821" size={160} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white/90 dark:bg-slate-900/90 p-1 rounded-full">
           <Zap className="w-6 h-6 text-purple-600 fill-current" />
        </div>
      </div>
    </div>
    
    <div className="mb-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">1,200.00</span>
      <span className="text-lg font-medium text-slate-500 ml-1">BSD</span>
    </div>

    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg mt-auto">
      <ScanLine className="w-4 h-4 animate-pulse" />
      <span className="text-sm font-medium">Scanning...</span>
    </div>
  </div>
  );
};

// 3. User Selection (Updated with Payer Name & Breakdown)
const PaymentSelection = ({ method, onPay }: { method: 'coinbase' | 'bank', onPay: boolean }) => (
  <div className="flex flex-col h-full px-6 pt-4 pb-3">
    {/* Step 1: Select Instrument - Show payment options */}
    {method === 'coinbase' && !onPay && (
      <div className="flex items-center justify-center mb-6 pb-3">
        <div className="flex items-center gap-2 text-slate-500">
          <RefreshCw className="w-3 h-3" />
          <span className="text-xs font-bold tracking-widest">SELECT PAYMENT METHOD</span>
        </div>
      </div>
    )}

    {/* Step 2: Calculating Price - Show after bank selected */}
    {method === 'bank' && !onPay && (
      <div className="w-full mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2 text-purple-500 justify-center">
          <RefreshCw className="w-3 h-3 animate-spin" />
          <span className="text-xs font-bold tracking-widest">CALCULATING PRICE</span>
        </div>
        <div className="h-0.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    )}

    {/* Step 3: Show Review - After pay click or during review */}
    {onPay && (
      <div className="w-full mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2 text-green-600 justify-center">
          <CheckCircle className="w-3 h-3" />
          <span className="text-xs font-bold tracking-widest">PRICE CONFIRMED</span>
        </div>
      </div>
    )}

    <div className="flex items-center justify-between mb-12 pb-4 border-b border-slate-100 dark:border-slate-800">
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wide">Paying</p>
        <p className="font-bold text-slate-900 dark:text-white">Maria Silva</p>
      </div>
       <div className="text-right">
        <p className="text-xs text-slate-500 uppercase tracking-wide">Amount</p>
        <p className="font-bold text-slate-900 dark:text-white">1,200.00 BSD</p>
      </div>
    </div>

    <div className="space-y-3 mb-2">
      {/* Option 1: Coinbase */}
      <div className={`p-4 rounded-xl border transition-all duration-300 ${method === 'coinbase' ? 'border-slate-200 dark:border-slate-700 opacity-50' : 'border-slate-200 dark:border-slate-700 opacity-50'}`} style={method === 'coinbase' ? { borderColor: 'rgba(77, 136, 255, 0.5)', backgroundColor: 'rgba(77, 136, 255, 0.05)' } : {}}>
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">C</div>
            <div>
              <p className="font-semibold text-sm text-slate-900 dark:text-white">Coinbase Wallet</p>
              <p className="text-xs text-slate-500">USDC Balance: 40.00</p>
            </div>
        </div>
      </div>

      {/* Option 2: EU Bank */}
      <div className={`p-4 rounded-xl border transition-all duration-300 ${method === 'bank' ? 'shadow-md' : 'border-slate-200 dark:border-slate-700'}`} style={method === 'bank' ? { borderColor: 'rgba(77, 136, 255, 0.5)', backgroundColor: 'rgba(77, 136, 255, 0.05)', boxShadow: '0 0 0 1px rgba(77, 136, 255, 0.5)' } : {}}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-200 flex items-center justify-center">
              <Landmark className="w-4 h-4 text-white dark:text-slate-900" />
            </div>
            <div>
              <p className="font-semibold text-sm text-slate-900 dark:text-white">EU Bank (SEPA)</p>
              <p className="text-xs text-slate-500">Instant Settlement</p>
            </div>
          </div>
          {method === 'bank' && <CheckCircle className="w-5 h-5" style={{ color: 'var(--albor-blue)' }} />}
        </div>
        
        {/* Expanded Breakdown - Only show when confirmed (onPay) */}
        {method === 'bank' && onPay && (
           <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-2 space-y-1" style={{ borderTop: '1px solid rgba(77, 136, 255, 0.2)' }}>
             <div className="flex justify-between text-xs">
               <span className="text-slate-500">Rate</span>
               <span className="font-mono text-slate-700 dark:text-slate-300">1 EUR = 20 BSD</span>
             </div>
             <div className="flex justify-between text-xs">
               <span className="text-slate-500">Network Fee</span>
               <span className="font-mono text-slate-700 dark:text-slate-300">3.00 BSD</span>
             </div>
              <div className="flex justify-between text-xs font-bold pt-1 mt-1 border-t border-dashed" style={{ borderColor: 'rgba(77, 136, 255, 0.2)' }}>
               <span className="text-slate-700 dark:text-slate-300">Total</span>
               <span className="font-mono" style={{ color: 'var(--albor-blue)' }}>€60.00</span>
             </div>
           </motion.div>
        )}
      </div>
    </div>

    <button className={`mt-auto w-full py-3 text-white rounded-xl font-semibold transition-all duration-200 ${onPay ? 'scale-95' : 'hover:opacity-90'}`} style={{ backgroundColor: 'var(--albor-blue)' }}>
      Pay 1,200.00 BSD
    </button>
  </div>
);

// 4. The "Trading Section" Logic (Route Calculation -> Execution)
const RouteLogic = ({ status }: { status: 'calculating' | 'signing' | 'executing' | 'complete' }) => {
    const isExecuting = status === 'executing' || status === 'complete';
    const isComplete = status === 'complete';
    const isCalculating = status === 'calculating';

    return (
    <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md z-20 flex flex-col font-mono text-xs overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-2">
        <div className="flex items-center gap-2 mb-1" style={{ color: 'var(--albor-blue)' }}>
            {isComplete ? <CheckCircle className="w-4 h-4 text-green-500" /> : <RefreshCw className="w-4 h-4 animate-spin" />}
            <span className="font-bold tracking-wider">{isComplete ? 'SETTLEMENT COMPLETE' : isCalculating ? 'CALCULATING ROUTE' : 'EXECUTING ROUTE'}</span>
        </div>
        <div className="h-0.5 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
            <motion.div 
                className="h-full"
                style={{ backgroundColor: 'var(--albor-blue)' }}
                initial={{ width: "0%" }}
                animate={{ width: isComplete ? "100%" : isExecuting ? "66%" : "10%" }}
                transition={{ duration: 0.5 }}
            />
        </div>
      </div>
      
      {/* Route Steps */}
      <div className="px-6 space-y-6 relative flex-grow pt-4">
        <div className="absolute left-[35px] top-6 bottom-12 w-0.5 bg-slate-800" />
        
        {/* Step 1 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} className="relative pl-8">
          <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
              {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "1"}
          </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-blue-400">INPUT:</span> <span className="text-white">SEPA_INSTANT</span>
            <div className="text-slate-400 mt-1">€60.00 EUR → Monerium IBAN</div>
          </div>
        </motion.div>
  
        {/* Step 2 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 0.4 }} className="relative pl-8">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 delay-300 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
               {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "2"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-yellow-400">MINT:</span> <span className="text-white">EURe (On-Chain)</span>
            <div className="text-slate-400 mt-1">Provider: Monerium EMI</div>
          </div>
        </motion.div>
  
        {/* Step 3 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 0.8 }} className="relative pl-8">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 delay-700 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
              {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "3"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-green-400">SWAP:</span> <span className="text-white">EURe → BSD</span>
            <div className="text-slate-400 mt-1">Pool: Albor Institutional V2</div>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 1.2 }} className="relative pl-8">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
              {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "4"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-cyan-400">TRANSFER:</span> <span className="text-white">→ Maria Silva</span>
            <div className="text-slate-400 mt-1">1,200.00 BSD</div>
          </div>
        </motion.div>

        {/* Step 5 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 1.6 }} className="relative pl-8">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isComplete ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
              {isComplete ? <CheckCircle className="w-4 h-4 text-white" /> : "5"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-orange-400">FEE:</span> <span className="text-white">Banco Bisa</span>
            <div className="text-slate-400 mt-1">Sponsored by Albor</div>
          </div>
        </motion.div>
      </div>

      {/* Signing Overlay (Only visible during signing phase) */}
      <AnimatePresence>
        {status === 'signing' && (
            <motion.div 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                exit={{ y: "100%" }} 
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-800 rounded-t-2xl p-6 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
                <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(77, 136, 255, 0.1)' }}>
                    <Fingerprint className="w-8 h-8 animate-pulse" style={{ color: 'var(--albor-blue)' }} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white font-sans">Sign Transaction</h3>
                    <p className="text-sm text-slate-500 mb-6 font-sans">Authorize swap of €60.00</p>
                    <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded overflow-hidden">
                    <motion.div 
                        initial={{ width: "0%" }} 
                        animate={{ width: "100%" }} 
                        transition={{ duration: 1.5 }} 
                        className="h-full"
                        style={{ backgroundColor: 'var(--albor-blue)' }}
                    />
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 5. Final Receipt
const Receipt = () => (
    <div className="flex flex-col h-full p-6 bg-white dark:bg-slate-900 pt-14">
      <div className="flex items-center justify-center mb-6 mt-8">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
          <CheckCircle className="w-8 h-8" />
        </div>
      </div>
      
      <div className="text-center mb-8">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white">Payment Successful</h3>
        <p className="text-slate-500 text-sm">TXID: 0x8a...4b29</p>
      </div>
  
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 space-y-3 text-sm border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Paid to</span>
          <span className="font-medium text-slate-900 dark:text-white">Maria Silva</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Amount</span>
          <span className="font-medium text-slate-900 dark:text-white">1,200.00 BSD</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Method</span>
          <span className="font-medium text-slate-900 dark:text-white">SEPA Instant (€60.00)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Fee</span>
          <span className="font-medium text-slate-900 dark:text-white">3.00 BSD</span>
        </div>
      </div>
      
      <button className="mt-auto w-full py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
        <FileText className="w-4 h-4" /> Download Receipt
      </button>
    </div>
  );

// --- Main Visual Component ---
const PaymentsVisual = () => {
  const [phase, setPhase] = useState(0);
  const [amountInput, setAmountInput] = useState("");
  const [isGenerateInvoiceClicked, setIsGenerateInvoiceClicked] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Reset
        setPhase(0); setAmountInput(""); setIsGenerateInvoiceClicked(false);
        
        // Input
        await new Promise(r => setTimeout(r, 500));
        setAmountInput("1"); await new Promise(r => setTimeout(r, 100));
        setAmountInput("1200"); await new Promise(r => setTimeout(r, 100));
        setAmountInput("1200.00"); await new Promise(r => setTimeout(r, 1300));
        
        // Generate Invoice button click animation
        setIsGenerateInvoiceClicked(true); await new Promise(r => setTimeout(r, 200));
        
        // QR
        setIsGenerateInvoiceClicked(false);
        setPhase(1); await new Promise(r => setTimeout(r, 2500));
        
        // Select Coinbase
        setPhase(2); await new Promise(r => setTimeout(r, 1000));
        
        // Select Bank (Breakdown visible) - Calculating
        setPhase(3); await new Promise(r => setTimeout(r, 2500));
        
        // Click - Price Confirmed (show button animation)
        setPhase(4); await new Promise(r => setTimeout(r, 2500));
        
        // Route: Calculating
        setPhase(5); await new Promise(r => setTimeout(r, 2500));
        
        // Route: Signing
        setPhase(6); await new Promise(r => setTimeout(r, 2500));
        
        // Route: Executing
        setPhase(7); await new Promise(r => setTimeout(r, 2500)); 
        
        // Route: Complete
        setPhase(8); await new Promise(r => setTimeout(r, 2500));

        // Receipt
        setPhase(9); await new Promise(r => setTimeout(r, 2500));
      }
    };
    sequence();
  }, []);

  return (
    <div className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[320px] h-[500px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border-4 border-slate-200 dark:border-slate-800 overflow-hidden font-sans">
        
        {/* Header Bar - Hidden during payment selection phases */}
        {!(phase >= 2 && phase <= 4) && (
          <div className="absolute top-0 left-0 right-0 h-14 z-10 flex justify-between items-center px-6">
            <span className="text-xs font-semibold text-slate-400">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800" />
              <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800" />
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="pt-14 h-full relative">
          <AnimatePresence mode="wait">
            
            {/* Phase 0: Input */}
            {phase === 0 && (
              <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -50 }} className="absolute inset-0">
                <MerchantCreate amount={amountInput} isClicked={isGenerateInvoiceClicked} />
              </motion.div>
            )}

            {/* Phase 1: QR */}
            {phase === 1 && (
              <motion.div key="qr" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute inset-0">
                <QRDisplay />
              </motion.div>
            )}

            {/* Phase 2-4: Selection */}
            {(phase >= 2 && phase <= 4) && (
              <motion.div key="select" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-0">
                <PaymentSelection method={phase >= 3 ? 'bank' : 'coinbase'} onPay={phase === 4} />
              </motion.div>
            )}

            {/* Phase 5-8: Route Logic & Execution */}
            {(phase >= 5 && phase <= 8) && (
              <motion.div key="logic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20">
                <RouteLogic 
                    status={
                        phase === 5 ? 'calculating' : 
                        phase === 6 ? 'signing' : 
                        phase === 7 ? 'executing' : 'complete'
                    } 
                />
              </motion.div>
            )}

            {/* Phase 9: Receipt */}
            {phase === 9 && (
              <motion.div key="receipt" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0">
                <Receipt />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
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

// --- Main Component: ExecutiveLiquidityFlow - Liquidity Pool Animation ---
const ExecutiveLiquidityFlow = () => {
    const [currentPanel, setCurrentPanel] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [amount, setAmount] = useState('');
    const [addedLiquidity, setAddedLiquidity] = useState(0);
    const [compoundingYield, setCompoundingYield] = useState(0.0);
    const [signatureState, setSignatureState] = useState('idle');
    const [isAddButtonClicked, setAddButtonClicked] = useState(false);
    const [isConfirmButtonClicked, setConfirmButtonClicked] = useState(false);
    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        const runAnimationStep = (step: number) => {
            switch (step) {
                case 0:
                    setCurrentPanel(0);
                    setShowPopup(false);
                    setAmount('');
                    setAddedLiquidity(0);
                    setCompoundingYield(0.0);
                    setSignatureState('idle');
                    setAddButtonClicked(false);
                    setConfirmButtonClicked(false);
                    timeout = setTimeout(() => setAnimationStep(1), 2000);
                    break;
                case 1:
                    setAddButtonClicked(true);
                    timeout = setTimeout(() => setAnimationStep(2), 300);
                    break;
                case 2:
                    setAddButtonClicked(false);
                    setShowPopup(true);
                    timeout = setTimeout(() => setAnimationStep(3), 500);
                    break;
                case 3:
                    setAmount('10,000');
                    timeout = setTimeout(() => setAnimationStep(4), 1500);
                    break;
                case 4:
                    setConfirmButtonClicked(true);
                    timeout = setTimeout(() => setAnimationStep(5), 300);
                    break;
                case 5:
                    setConfirmButtonClicked(false);
                    setSignatureState('awaiting');
                    timeout = setTimeout(() => setAnimationStep(6), 2500);
                    break;
                case 6:
                    setSignatureState('received');
                    timeout = setTimeout(() => setAnimationStep(7), 1500);
                    break;
                case 7:
                    setShowPopup(false);
                    setAddedLiquidity(10000);
                    setAmount('');
                    timeout = setTimeout(() => setAnimationStep(8), 700);
                    break;
                case 8:
                    setCurrentPanel(2);
                    setCompoundingYield(0.0);
                    interval = setInterval(() => {
                        setCompoundingYield(prev => prev + 0.045);
                    }, 50);
                    timeout = setTimeout(() => setAnimationStep(9), 5000);
                    break;
                case 9:
                    clearInterval(interval);
                    timeout = setTimeout(() => setAnimationStep(0), 400);
                    break;
            }
        };

        runAnimationStep(animationStep);

        return () => {
            if (timeout) clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [animationStep]);

    const panelBaseClasses = "absolute inset-0 transition-all duration-500 ease-in-out";
    const panelVisibleClasses = "opacity-100 translate-x-0";
    const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
    const panelHiddenRightClasses = "opacity-0 translate-x-full";

    const panel0Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
    const panel2Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;

    const keypadPopupClasses = `w-full rounded-t-3xl shadow-2xl transition-all duration-500 ease-in-out z-50 transform bg-white dark:bg-slate-800 max-h-[70vh] overflow-y-auto ${showPopup ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`;
    const keypadPopupContainerClasses = `absolute inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 flex flex-col justify-end ${showPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;

    return (
        <VisualContainer>
            <style>{cursorStyle}</style>
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto min-h-[350px] lg:min-h-[400px] overflow-hidden rounded-2xl flex flex-col">
                {/* Panel 0: Pool Overview */}
                <div className={panel0Classes} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
                    <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-5 flex flex-col space-y-3 lg:space-y-4">
                        <Header title="Liquidity Pool" subtitle="BSD / USDC" icon={<Briefcase className="w-5 h-5 text-slate-400" />} />
                        <div className="p-3 lg:p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Liquidity</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">$4,950,000.00</p>
                                </div>
                                <DollarSign className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Monthly Volume</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">$15,000,000</p>
                                </div>
                                <Activity className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Pool APY</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">14.5%</p>
                                </div>
                                <TrendingUp className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                        </div>
                        <button className={`flex items-center justify-center w-full space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-white text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200 my-2 lg:my-4 bg-blue-500 ${isAddButtonClicked ? 'scale-95 bg-blue-600 shadow-inner' : 'hover:bg-blue-600 hover:scale-105'}`}>
                            <Plus className="w-4 h-4" /> <span>Add Liquidity</span>
                        </button>
                    </div>
                </div>

                {/* Panel 2: Your Position */}
                <div className={panel2Classes} style={{ zIndex: currentPanel === 2 ? 3 : 2 }}>
                    <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-5 flex flex-col space-y-3 lg:space-y-4">
                        <Header title="Your Position" subtitle="BSD / USDC" icon={<User className="w-5 h-5 text-slate-400" />} />
                        <div className="p-3 lg:p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Your Liquidity</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">${(addedLiquidity * 2).toLocaleString()}.00</p>
                                </div>
                                <DollarSign className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Fees Earned</p>
                                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">${compoundingYield.toFixed(2)}</p>
                                </div>
                                <TrendingUp className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
                            </div>
                        </div>
                        <button className={`flex items-center justify-center w-full space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-white bg-blue-500 hover:bg-blue-600 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200 my-2 lg:my-4`}>
                            <ArrowRight className="w-4 h-4 rotate-180" /> <span>Withdraw Liquidity</span>
                        </button>
                        <button className={`flex items-center justify-center w-full space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700/50 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200`}>
                            <Gift className="w-4 h-4" /> <span>Collect Fees</span>
                        </button>
                    </div>
                </div>

                {/* Popup Container */}
                <div className={keypadPopupContainerClasses}>
                    <div className={`${keypadPopupClasses} p-4 lg:p-6 flex flex-col space-y-2 lg:space-y-3`}>
                        <Header title="Add Liquidity" subtitle="Enter deposit amount" icon={<Keyboard className="w-5 h-5 text-slate-400" />} />

                        {signatureState === 'idle' && (
                            <div className="flex-grow flex flex-col items-center justify-center text-center">
                                <div className="flex flex-col gap-2 w-full px-2 lg:px-3">
                                    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-2 lg:p-3 rounded-lg border border-slate-100 dark:border-slate-700 min-h-16 lg:min-h-20">
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Deposit</span>
                                            <div className="flex items-baseline">
                                                <span className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100">{amount || '0'}</span>
                                                <span className="typing-cursor"></span>
                                            </div>
                                        </div>
                                        <span className="text-base lg:text-lg font-semibold text-slate-500">USDC</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Plus className="w-4 lg:w-5 h-4 lg:h-5 text-slate-300" />
                                    </div>

                                    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-2 lg:p-3 rounded-lg border border-slate-100 dark:border-slate-700 min-h-16 lg:min-h-20">
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Match</span>
                                            <span className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100">
                                                {amount ? (parseInt(amount.replace(/,/g, '')) * 12.5).toLocaleString() : '0'}
                                            </span>
                                        </div>
                                        <span className="text-base lg:text-lg font-semibold text-slate-500">BSD</span>
                                    </div>
                                    <p className="text-xs text-center text-slate-400">Rate: 1 USDC = 12.50 BSD</p>
                                </div>
                                <button className={`flex items-center justify-center w-full mt-3 lg:mt-4 space-x-2 px-3 py-2 lg:px-4 lg:py-3 text-white text-sm lg:text-base font-semibold rounded-lg transition-all duration-200 bg-blue-500 ${isConfirmButtonClicked ? 'scale-95 bg-blue-600 shadow-inner' : 'hover:bg-blue-600'}`}>
                                    <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5" /> <span>Confirm Deposit</span>
                                </button>
                            </div>
                        )}

                        {signatureState === 'awaiting' && (
                            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 lg:space-y-4">
                                <Loader2 className="w-10 lg:w-12 h-10 lg:h-12 text-blue-500 animate-spin" />
                                <h4 className="text-lg lg:text-xl font-semibold text-slate-800 dark:text-slate-200">Awaiting Fireblocks Signature...</h4>
                                <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400">Please sign the transaction in your Fireblocks wallet.</p>
                            </div>
                        )}

                        {signatureState === 'received' && (
                            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 lg:space-y-4">
                                <CheckCircle className="w-10 lg:w-12 h-10 lg:h-12 text-white" />
                                <h4 className="text-lg lg:text-xl font-semibold text-slate-800 dark:text-slate-200">Signature Received!</h4>
                                <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400">Transaction submitted to the network.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </VisualContainer>
    );
};

// --- VISUAL 4: Minting (Deposit to Mint Flow) ---
const MintingVisual = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [animationState, setAnimationState] = useState({
    typingAmount: false, 
    isSubmitting: false,
    showInstructions: false,
    showToastPopup: false,
    statusPopupState: 'waiting' as 'waiting' | 'received' | 'minting' | 'complete',
    showLedger: false,
    reconciled: false
  });

  useEffect(() => {
    if (currentPanel === 0) {
      setAnimationState({
        typingAmount: false, isSubmitting: false,
        showInstructions: false, showToastPopup: false, statusPopupState: 'waiting',
        showLedger: false, reconciled: false
      });
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, typingAmount: true })), 250),
        setTimeout(() => setAnimationState(s => ({ ...s, isSubmitting: true })), 750),
      ];
      return () => timers.forEach(clearTimeout);
    } 
    else if (currentPanel === 1) {
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, showInstructions: true })), 200),
        setTimeout(() => setAnimationState(s => ({ ...s, showToastPopup: true, statusPopupState: 'waiting' })), 2000),
        setTimeout(() => setAnimationState(s => ({ ...s, statusPopupState: 'received' })), 3000),
        setTimeout(() => setAnimationState(s => ({ ...s, statusPopupState: 'minting' })), 4500),
        setTimeout(() => setAnimationState(s => ({ ...s, statusPopupState: 'complete' })), 6000),
      ];
      return () => timers.forEach(clearTimeout);
    }
    else if (currentPanel === 2) {
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, showLedger: true })), 200),
        setTimeout(() => setAnimationState(s => ({ ...s, reconciled: true })), 1500),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentPanel]);

  useEffect(() => {
    const cyclePanels = () => setCurrentPanel(prev => (prev + 1) % 3);
    const intervalId = setInterval(cyclePanels, 8500);
    return () => clearInterval(intervalId);
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

  const amountText = useTypingAnimation(`70,000.00`, animationState.typingAmount, 75);

  return (
    <VisualContainer>
      <div className="relative w-full max-w-md mx-auto h-[480px] font-sans overflow-hidden">
        {/* PANEL 0: REQUEST UI */}
        <div className={getPanelClasses(0)}>
          <div className="w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col bg-white dark:bg-slate-900">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">New Mint Request</h3>
                  <p className="text-xs text-slate-500">Banco Bisa</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Client</label>
                <div className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xs">
                    MR
                  </div>
                  <div>
                    <span className="block text-slate-900 dark:text-white font-medium text-sm">Maria Rodriguez</span>
                    <span className="block text-slate-400 text-xs">ID: 8821-MR</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Asset & Amount</label>
                <div className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 dark:text-white font-medium">BSD</span>
                    <span className="text-xs text-slate-400 bg-slate-200 dark:bg-slate-700 px-1 rounded">Stable</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-400 mr-2 text-sm">BOB</span>
                    <span className="text-slate-900 dark:text-white font-mono text-lg">{amountText}<motion.span className="animate-pulse">|</motion.span></span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded border border-indigo-100 dark:border-indigo-800/30">
                <p className="text-xs text-indigo-800 dark:text-indigo-300 leading-snug">
                  <span className="font-bold">Note:</span> Initiating this request will generate a unique reference code for Maria's deposit at Banco Bisa.
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${animationState.isSubmitting ? 'bg-slate-100 text-slate-400 dark:bg-slate-800' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none'}`}>
                {animationState.isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Allocating Virtual Account...</span>
                  </>
                ) : (
                  <span>Generate Deposit Instructions</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* PANEL 1: INSTRUCTIONS + POPUP */}
        <div className={getPanelClasses(1)}>
          <div className="w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col relative bg-white dark:bg-slate-900 overflow-hidden">
            <div className={`transition-all duration-500 ${animationState.showToastPopup && ['waiting', 'received', 'minting'].includes(animationState.statusPopupState) ? 'opacity-40 blur-[1px]' : 'opacity-100 blur-0'}`}>
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold font-serif">B</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Banco Bisa</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Wire Instructions</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-400 uppercase">Beneficiary Name</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Stablecorp Settlement Ltd</p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-400 uppercase">Account Number</p>
                  <p className="font-mono text-sm text-slate-900 dark:text-white tracking-wider">293-192-992-11</p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-3 rounded border border-yellow-200 dark:border-yellow-700/50">
                  <p className="text-xs text-yellow-600 dark:text-yellow-500 uppercase font-bold flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" /> Mandatory Reference
                  </p>
                  <p className="font-mono text-xl font-bold text-slate-900 dark:text-white mt-1 tracking-widest">REF-MR-8821</p>
                  <p className="text-[10px] text-slate-500 mt-1">Must be included in wire memo for auto-minting.</p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {currentPanel === 1 && animationState.showToastPopup && (
                <motion.div 
                  className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none px-4 md:px-8"
                  initial={{ scale: 0.85, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.85, opacity: 0, y: 60 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                        Mint Process
                      </h4>
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-green-700 dark:text-green-400 text-[10px] font-semibold uppercase">Live</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Step 1: Waiting for Wire */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0, duration: 0.3, ease: "easeOut" }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors will-change-auto"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs flex-col justify-center ${
                          animationState.statusPopupState === 'waiting' ? 'bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-300 dark:border-indigo-600' :
                          ['received', 'minting', 'complete'].includes(animationState.statusPopupState) ? 'bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600' :
                          'bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600'
                        }`}>
                          {['received', 'minting', 'complete'].includes(animationState.statusPopupState) ? 
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" /> :
                            animationState.statusPopupState === 'waiting' ? 
                            <Loader2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin" /> :
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                          }
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-900 dark:text-white">Waiting for Wire</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Scanning Banco Bisa rails for Ref: MR-8821</p>
                        </div>
                      </motion.div>

                      {/* Step 2: Deposit Detected */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05, duration: 0.3, ease: "easeOut" }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors will-change-auto"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          animationState.statusPopupState === 'received' ? 'bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-300 dark:border-indigo-600' :
                          ['minting', 'complete'].includes(animationState.statusPopupState) ? 'bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600' :
                          'bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600'
                        }`}>
                          {['minting', 'complete'].includes(animationState.statusPopupState) ? 
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" /> :
                            animationState.statusPopupState === 'received' ? 
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" /> :
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                          }
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-900 dark:text-white">Deposit Detected</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Confirmed 70,000.00 BOB from Maria R.</p>
                        </div>
                      </motion.div>

                      {/* Step 3: Minting */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors will-change-auto"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          animationState.statusPopupState === 'minting' ? 'bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-300 dark:border-indigo-600' :
                          animationState.statusPopupState === 'complete' ? 'bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600' :
                          'bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600'
                        }`}>
                          {animationState.statusPopupState === 'complete' ? 
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" /> :
                            animationState.statusPopupState === 'minting' ? 
                            <RefreshCw className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin" /> :
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                          }
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-900 dark:text-white">Minting BSD</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Issuing stablecoins to wallet</p>
                        </div>
                      </motion.div>

                      {/* Step 4: Complete */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors will-change-auto"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          animationState.statusPopupState === 'complete' ? 'bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600' :
                          'bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600'
                        }`}>
                          {animationState.statusPopupState === 'complete' ? 
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" /> :
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                          }
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-900 dark:text-white">On-Ramp Complete</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Funds available in wallet</p>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div 
                      animate={{ opacity: ['waiting', 'received', 'minting'].includes(animationState.statusPopupState) || animationState.statusPopupState === 'complete' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 rounded-lg p-3 text-[10px] font-mono text-center will-change-auto ${
                        animationState.statusPopupState === 'complete' 
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400'
                      }`}
                    >
                      {animationState.statusPopupState === 'complete' ? (
                        <>TX Hash: <span className="font-bold">0x7c8f...a2b9</span></>
                      ) : (
                        <>Reference: <span className="font-bold">REF-MR-8821</span></>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* PANEL 2: RECONCILIATION */}
        <div className={getPanelClasses(2)}>
          <div className="w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col bg-white dark:bg-slate-900">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Core Ledger</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Proof of Reconciliation</p>
              </div>
              <Landmark className="w-6 h-6 text-slate-400" />
            </div>

            <div className="flex-grow flex flex-col justify-center relative">
              <div className="absolute left-[18px] top-[40px] bottom-[40px] w-0.5 bg-indigo-100 dark:bg-slate-800 z-0"></div>

              <div className="relative z-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-3 mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">BANCO BISA</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">10:42:01 AM</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-slate-500">Credit Amount</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">70,000.00 BOB</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase">Wire Ref</p>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-1 rounded">8F1A-8821</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center z-20">
                <div className="bg-indigo-600 text-white p-1.5 rounded-full shadow-lg">
                  <ArrowDownLeft className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-3 mt-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Blocks className="w-3 h-3 text-indigo-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">POLYGON POS</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">10:42:04 AM</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-slate-500">Mint Amount</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">70,000.00 BSD</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase">Tx Hash</p>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-1 rounded">0x38F1...8821</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 transition-opacity duration-500 ${animationState.reconciled ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Total Settlement Time: 3s</span>
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 px-2 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span className="text-xs font-bold">RECONCILED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VisualContainer>
  );
};

// --- VISUAL 5: Compliance (Animated Flow) ---
const PolishedComplianceFlow = () => {
  const [currentPanel, setCurrentPanel] = useState(1); // Start with Key Provider & Governance

  useEffect(() => {
    const panelOrder = [1, 2, 0]; // Show Key Provider -> Compliance -> Infrastructure
    const cycle = setInterval(() => {
      setCurrentPanel(prev => {
        const currentIndex = panelOrder.indexOf(prev);
        const nextIndex = (currentIndex + 1) % panelOrder.length;
        return panelOrder[nextIndex];
      });
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
          <div className=" w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">AI Risk Ratings</h3>
            <div className="space-y-3">
              <div className="p-3  rounded-lg flex justify-between items-center">
                <span className="font-semibold text-slate-700 dark:text-slate-300">CCTP Protocol</span>
                <span className="font-mono font-bold text-green-500">AAA</span>
              </div>
              <div className="p-3  rounded-lg flex justify-between items-center">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Curve Finance</span>
                <span className="font-mono font-bold text-yellow-500">AA</span>
              </div>
              <div className="p-3  rounded-lg flex justify-between items-center">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Origin Wallet</span>
                <span className="font-mono font-bold text-orange-500">A</span>
              </div>
            </div>
            <button className="flex items-center justify-center w-full space-x-2 mt-6 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <MessageCircle className="w-5 h-5 text-albor-blue" />
              <span>Explain with AI</span>
            </button>
          </div>
        </div>

        {/* Panel 2: Policy Engine */}
        <div className={getPanelClasses(1)} style={{ zIndex: currentPanel === 1 ? 3 : 1 }}>
          <div className=" w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Policy Engine</h3>
            <div className="space-y-2 text-sm font-mono text-slate-600 dark:text-slate-400">
              <div className="p-3  rounded">IF amount &gt; $10k AND risk_rating &lt; BBB</div>
              <div className="p-3  rounded">THEN require_ciso_approval</div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
              <span className="font-bold text-blue-700 dark:text-blue-400 text-lg">APPROVED</span>
              <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">Policy conditions satisfied.</p>
            </div>
          </div>
        </div>

        {/* Panel 3: Compliance Report */}
        <div className={getPanelClasses(2)} style={{ zIndex: currentPanel === 2 ? 3 : 1 }}>
          <div className=" w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Compliance Report</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3  rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Payment ID</span>
                <span className="text-sm font-mono text-slate-800 dark:text-slate-200">#4928-LIQ</span>
              </div>
              <div className="flex justify-between items-center p-3  rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Risk Assessment</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">PASSED</span>
              </div>
              <div className="flex justify-between items-center p-3  rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Policy Check</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">PASSED</span>
              </div>
              <div className="flex justify-between items-center p-3  rounded-lg">
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

// --- Main Dashboard Component: Self-Hosted Dashboard Animation ---
const ExecutiveServiceFlow = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [activeSOC, setActiveSOC] = useState('New York');
  const [timeData, setTimeData] = useState({ hours: 6, minutes: 0 });
  const [complianceScore, setComplianceScore] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const runAnimationStep = (step: number) => {
      switch (step) {
        case 0:
          setCurrentPanel(0); // Key Provider & Governance
          setComplianceScore(0);
          timeout = setTimeout(() => setAnimationStep(1), 2000);
          break;
        case 1:
          setCurrentPanel(1); // Compliance Providers
          timeout = setTimeout(() => setAnimationStep(2), 2500);
          break;
        case 2:
          setCurrentPanel(2); // Infrastructure Overview
          interval = setInterval(() => {
            setComplianceScore(prev => Math.min(prev + 1.5, 98));
          }, 30);
          timeout = setTimeout(() => setAnimationStep(3), 5000);
          break;
        case 3:
          clearInterval(interval);
          timeout = setTimeout(() => setAnimationStep(0), 1500);
          break;
      }
    };

    runAnimationStep(animationStep);

    return () => {
      if (timeout) clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [animationStep]);

  useEffect(() => {
    const locations = ['New York', 'Barcelona', 'Singapore'];
    const clockInterval = setInterval(() => {
      setTimeData(prevTime => {
        let newMinutes = prevTime.minutes + 10;
        let newHours = prevTime.hours;

        if (newMinutes >= 60) {
          newMinutes = 0;
          newHours = (newHours + 1) % 24;
        }

        if (newHours >= 6 && newHours < 14) {
          setActiveSOC(locations[0]);
        } else if (newHours >= 14 && newHours < 22) {
          setActiveSOC(locations[1]);
        } else {
          setActiveSOC(locations[2]);
        }

        return { hours: newHours, minutes: newMinutes };
      });
    }, 50);

    return () => clearInterval(clockInterval);
  }, []);

  const formattedTime = `${String(timeData.hours).padStart(2, '0')}:${String(timeData.minutes).padStart(2, '0')}`;

  const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
  const panelVisibleClasses = "opacity-100 translate-x-0";
  const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
  const panelHiddenRightClasses = "opacity-0 translate-x-full";

  const panel0Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
  const panel1Classes = `${panelBaseClasses} ${currentPanel === 1 ? panelVisibleClasses : currentPanel > 1 ? panelHiddenLeftClasses : panelHiddenRightClasses}`;
  const panel2Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;

  return (
    <VisualContainer>
      <div className="relative w-full max-w-sm lg:max-w-md mx-auto min-h-[350px] lg:min-h-[400px] overflow-hidden rounded-2xl flex flex-col">
        {/* Panel 0: Key Provider & Governance */}
        <div className={panel0Classes} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
          <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-5 flex flex-col space-y-3 lg:space-y-4">
            <Header title="Key Provider & Governance" subtitle="Integrated Protection" icon={<KeyIcon className="w-5 h-5 text-slate-400" />} />
            <div className="p-3 lg:p-4 rounded-lg space-y-4 lg:space-y-5 flex-grow flex flex-col justify-center">
              {/* Fireblocks Integration */}
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <KeyIcon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Fireblocks</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Institutional Wallet</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              {/* Policy 1: Multi-Sig Approval */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Multi-Sig Approval</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">3 of 5 Signers Required</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              {/* Policy 2: Transaction Limits */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Daily Tx Limit</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">$10M per 24 hours</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Panel 1: Compliance Integrations */}
        <div className={panel1Classes} style={{ zIndex: currentPanel === 1 ? 3 : 2 }}>
          <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-5 flex flex-col space-y-3 lg:space-y-4">
            <Header title="Compliance Providers" subtitle="Built-in Compliance Stack" icon={<Shield className="w-5 h-5 text-slate-400" />} />
            <div className="p-3 lg:p-4 rounded-lg space-y-4 lg:space-y-5 flex-grow flex flex-col justify-center">
              {/* Anchain - Compliance Tool */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Anchain</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Compliance Tool</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              {/* Notabene - Travel Rule Provider */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Network className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Notabene</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Travel Rule Provider</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              {/* Sumsub - KYC Provider */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Fingerprint className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Sumsub</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">KYC Provider</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Infrastructure Overview */}
        <div className={panel2Classes} style={{ zIndex: currentPanel === 2 ? 3 : 1 }}>
          <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-5 flex flex-col space-y-3 lg:space-y-4">
            <Header title="Infrastructure" subtitle="Self-Hosted Deployment" icon={<Server className="w-5 h-5 text-slate-400" />} />
            <div className="p-3 lg:p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Operational Status</p>
                  <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">99.99%</p>
                </div>
                <CheckCircle className="w-6 lg:w-8 h-6 lg:h-8 text-green-500" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Environment</p>
                  <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">Production</p>
                </div>
                <Cpu className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Region</p>
                  <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">sa-east-1</p>
                </div>
                <Globe className="w-6 lg:w-8 h-6 lg:h-8 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </VisualContainer>
  );
};


// DESIGN CHANGE: Create a subtle, blended founder quote banner with brand colors.
const getBrandColor = (textClass: string) => {
  const colorMap: { [key: string]: { hex: string; rgba: string } } = {
    'text-albor-plum': { hex: '#A18DE5', rgba: 'rgba(161, 141, 229, 0.3)' },
    'text-albor-blue': { hex: '#4D88FF', rgba: 'rgba(77, 136, 255, 0.3)' },
    'text-albor-teal': { hex: '#83F4EC', rgba: 'rgba(131, 244, 236, 0.3)' },
    'text-albor-gold': { hex: '#FDB94E', rgba: 'rgba(253, 185, 78, 0.3)' },
  };
  return colorMap[textClass] || { hex: '#FDB94E', rgba: 'rgba(253, 185, 78, 0.3)' };
};

const FounderInsightBanner = ({ quote, name, title, image, colorClasses }: {
  quote: string;
  name: string;
  title: string;
  image: string;
  colorClasses: any;
}) => {
  const brandColor = getBrandColor(colorClasses.text);
  const bgRgba = colorClasses.text === 'text-albor-plum' ? 'rgba(161, 141, 229, 0.04)' : 
                  colorClasses.text === 'text-albor-blue' ? 'rgba(77, 136, 255, 0.04)' : 
                  colorClasses.text === 'text-albor-teal' ? 'rgba(131, 244, 236, 0.04)' : 
                  'rgba(253, 185, 78, 0.04)';
  const borderRgba = colorClasses.text === 'text-albor-plum' ? 'rgba(161, 141, 229, 0.1)' : 
                     colorClasses.text === 'text-albor-blue' ? 'rgba(77, 136, 255, 0.1)' : 
                     colorClasses.text === 'text-albor-teal' ? 'rgba(131, 244, 236, 0.1)' : 
                     'rgba(253, 185, 78, 0.1)';
  const footerBorderRgba = colorClasses.text === 'text-albor-plum' ? 'rgba(161, 141, 229, 0.2)' : 
                           colorClasses.text === 'text-albor-blue' ? 'rgba(77, 136, 255, 0.2)' : 
                           colorClasses.text === 'text-albor-teal' ? 'rgba(131, 244, 236, 0.2)' : 
                           'rgba(253, 185, 78, 0.2)';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-xl p-4 md:p-6 mt-0 mb-8 overflow-hidden transition-all duration-300 border"
      style={{
        background: `linear-gradient(135deg, ${bgRgba})`,
        borderColor: borderRgba
      }}
    >
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 relative z-10">
        <div className="flex-shrink-0">
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover ring-3 ring-opacity-30 flex-shrink-0" style={{ borderColor: brandColor.rgba }} />
        </div>
        <div className="flex-grow">
          <div className="flex items-start gap-2 mb-2">
            <Quote className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" style={{ color: brandColor.hex }} />
            <blockquote className="text-sm md:text-base font-medium leading-snug text-slate-700 dark:text-slate-200">
              <p>"{quote}"</p>
            </blockquote>
          </div>
          <footer className="mt-3 pt-3 border-t border-opacity-10" style={{ borderColor: footerBorderRgba }}>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">{name}</p>
            <p className="text-xs mt-0.5" style={{ color: brandColor.hex }}>{title}</p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};

// DESIGN CHANGE: Define the FeatureItem with larger text and better spacing.
const FeatureItem = ({ icon: Icon, title, children, iconColor }: { icon: React.ComponentType<any>, title: string, children: React.ReactNode, iconColor?: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800">
        <Icon className="w-6 h-6" style={{ color: iconColor || '#4D88FF' }} />
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
  subtitle = "A self-hosted stack to orchestrate digital asset operations on any chain.\nMonitored 24×7 by global experts with AI-automated compliance.",
  customFounderQuotes,
  customOrder
}: PillarsSectionProps = {}) {
  // Reorder: Distribution (0) -> Trading (1) -> Payments (2) -> Service (3)
  const defaultOrder = ["distribution", "trading", "payments", "service"];
  const orderedKeys = customOrder || defaultOrder;
  
  const [currentStep, setCurrentStep] = useState(0);
  const [animatedStep, setAnimatedStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isWrappingAround, setIsWrappingAround] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const prevStepRef = useRef(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const { openModal, CalendlyModal } = useCalendlyModal();

  // Detect scroll for glass effect and disable auto-play on scroll only if currently auto-playing
  useEffect(() => {
    const handleScroll = () => {
      const pillarNav = document.getElementById('pillar-navigation');
      if (pillarNav) {
        const navTop = pillarNav.getBoundingClientRect().top;
        setIsNavScrolled(navTop <= 80);
      }
      // Only reset if auto-play is currently active (user hasn't interacted yet)
      if (isAutoPlaying) {
        setIsAutoPlaying(false);
        setCurrentStep(0);
        setAnimatedStep(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAutoPlaying]);

  // Auto-scroll mobile tabs container to center active tab (only on manual click, not auto-play)
  useEffect(() => {
    if (tabsContainerRef.current && window.innerWidth < 640 && !isAutoPlaying) {
      const container = tabsContainerRef.current;
      const activeTab = container.querySelector(`[data-tab-index="${currentStep}"]`);
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentStep, isAutoPlaying]);

  // Detect wrap-around (when cycling from last step back to first)
  useEffect(() => {
    if (currentStep < prevStepRef.current) {
      setIsWrappingAround(true);
      setTimeout(() => setIsWrappingAround(false), 50);
    }
    prevStepRef.current = currentStep;
  }, [currentStep]);

  // Auto-advance nav animation every 3 seconds (without switching actual tabs)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setAnimatedStep(prev => (prev + 1) % orderedKeys.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, orderedKeys.length]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
    // Scroll to pillar content
    setTimeout(() => {
      document.getElementById('pillar-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  // Listen for pillar activation events from hero CTAs
  useEffect(() => {
    const handleActivatePillar = (event: CustomEvent) => {
      const pillarIndex = orderedKeys.indexOf(event.detail);
      if (pillarIndex !== -1) {
        setCurrentStep(pillarIndex);
        setIsAutoPlaying(false);
        // Scroll to pillar content
        setTimeout(() => {
          document.getElementById('pillar-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    };

    window.addEventListener('activatePillar', handleActivatePillar as EventListener);
    return () => {
      window.removeEventListener('activatePillar', handleActivatePillar as EventListener);
    };
  }, [orderedKeys]);

  // REWRITTEN QUOTES & UPDATED DATA: Quotes are now more specific, empathetic, and powerful.
  // Founder images are now included.
  // Reordered: Distribution (step 1) -> Trading (step 2) -> Payments (step 3) -> Service (step 4/spiral)
  const defaultPillars = {
    distribution: {
      label: "Tokenize Deposits", color: "albor-plum", title: "Banking APIs", icon: Workflow,
      description: "Automate stablecoin issuance, redemption, and reconciliation against bank deposits & withdrawals",
      visual: <MintingVisual />,
      founderQuote: {
        quote: "Building trust in a regulated stablecoin begins with two non-negotiable mandates: real-time settlement of deposits and withdrawals, and audit-ready asset backing.",
        name: "David Cass",
        title: "Chairman | Former Federal Reserve Regulator",
        image: davidImage
      },
      features: [{ icon: Workflow, title: "Automated On-Ramp", description: "Auto-trigger token mints to client wallets upon verified fiat deposits in omnibus accounts." }, { icon: CreditCard, title: "Automated Off-Ramp", description: "Auto-trigger fiat wires from omnibus accounts against token burns from client wallets." }, { icon: CheckCircle, title: "End-to-End Reconciliation", description: "Translate complex blockchain data into Standard Line-Item Accounting and Omnibus Reconciliation." },],
      cta: "Explore APIs"
    },
    trading: {
      label: "Attract Liquidity", color: "albor-blue", title: "Automated Market Maker", icon: Coins,
      description: "Create a dollar market for your stablecoin with 24/7 global access to traders and liquidity providers",
      visual: <ExecutiveLiquidityFlow />,
      founderQuote: {
        quote: "To capture global flows, stablecoins must offer deep liquidity. This requires a market structure that attracts institutional capital while adhering to strict counterparty compliance.",
        name: "David Cass",
        title: "Chairman | Former CISO at GSR",
        image: davidImage
      },
      features: [{ icon: Store, title: "Isolated Liquidity Pools", description: "Allow LPs to deposit stablecoins into smart contracts that eliminate counterparty risk." }, { icon: TrendingUp, title: "BIS-Validated Pricing Models", description: "Maintain stable exchange rates and optimal spreads using BIS-validated market making algorithms." }, { icon: DollarSign, title: "Instant Yield Distribution", description: "Automatically distribute fees to LPs with every trade, instantly claimable via smart contracts." },],
      cta: "Explore DEX"
    },
    payments: {
      label: "Transact Globally", color: "albor-teal", title: "Patent-Pending Router", icon: Globe,
      description: "Enable your clients to transact with any bank or wallet across major blockchains through your stablecoin.",
      visual: <PaymentsVisual />,
      founderQuote: {
        quote: "Stablecoins drive volume when any user, anywhere can trade them with their existing funds — be it fiat in banks or crypto in wallets.",
        name: "Nilesh Khaitan",
        title: "CEO | Ex-Venmo/PayPal Crypto",
        image: nileshImage
      },
      features: [{ icon: Route, title: "Best Execution Pathfinder", description: "Algorithmically scan global liquidity pools to route client trades through the most efficient path." }, { icon: KeyIcon, title: "Bank-Signed Execution", description: "Orchestrate multi-step routes with a single approval from the counterparty's wallet keys." }, { icon: Zap, title: "Automated Fee Splitting", description: "Instantly collect and distribute interchange fees within the executed route." },],
      cta: "Explore Router"
    },
    service: {
      label: "Secure Compliance", color: "albor-gold", icon: Shield,
      title: "Sovereign Infrastructure",
      description: "Satisfy regulatory and risk committee mandates by controling your keys and your data",
      visual: <ExecutiveServiceFlow />,
      founderQuote: {
        quote: "No regulated financial institution should cede their monetary or data sovereignty. You either control your infrastructure or you don't control your business.",
        name: "Nilesh Khaitan",
        title: "CEO | Ex-Venmo/PayPal Crypto",
        image: nileshImage
      },
      features: [{ icon: KeyIcon, title: "Connect Your Key Providers", description: "Integrate with your existing wallet providers and key governance systems." }, { icon: ShieldCheck, title: "Enforce Pre-Trade AML/KYC", description: "Leverage Compliance integrations for real-time AML/KYC across all transactions." }, { icon: Shield, title: "Secure Data Sovereignty", description: "Deploy our stack in your own single-tenant private cloud or a local data-resident zone." }, ],
      cta: "Explore Compliance"
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

  // Create ordered pillars based on customOrder prop
  const orderedPillars = Object.fromEntries(
    orderedKeys.map(key => [key, pillars[key as keyof typeof pillars]])
  );

  const colorMap = {
    'albor-gold': { border: 'border-albor-gold', text: 'text-albor-gold', bg: 'bg-albor-gold' },
    'albor-copper': { border: 'border-albor-copper', text: 'text-albor-copper', bg: 'bg-albor-copper' },
    'albor-plum': { border: 'border-albor-plum', text: 'text-albor-plum', bg: 'bg-albor-plum' },
    'albor-teal': { border: 'border-albor-teal', text: 'text-albor-teal', bg: 'bg-albor-teal' },
    'albor-green': { border: 'border-albor-green', text: 'text-albor-green', bg: 'bg-albor-green' },
    'albor-purple': { border: 'border-albor-purple', text: 'text-albor-purple', bg: 'bg-albor-purple' },
    'albor-blue': { border: 'border-albor-blue', text: 'text-albor-blue', bg: 'bg-albor-blue' },
    'albor-cyan': { border: 'border-albor-cyan', text: 'text-albor-cyan', bg: 'bg-albor-cyan' },
    'albor-orange': { border: 'border-albor-orange', text: 'text-albor-orange', bg: 'bg-albor-orange' },
  };

  const activeTab = orderedKeys[currentStep];
  const activePillar = orderedPillars[activeTab as keyof typeof orderedPillars];
  const activeColors = activePillar ? colorMap[activePillar.color as keyof typeof colorMap] : colorMap['albor-green'];
  
  // Get accent colors for the steps
  const stepColors = orderedKeys.map(key => {
    const pillar = orderedPillars[key as keyof typeof orderedPillars];
    return pillar?.color as string;
  });
  
  const getAccentColor = (colorName: string) => {
    const colors: { [key: string]: string } = {
      'albor-gold': '#FDB94E',
      'albor-copper': '#A66E4E',
      'albor-plum': '#A18DE5',
      'albor-blue': '#4D88FF',
      'albor-teal': '#83F4EC',
      'albor-purple': '#FDB94E',
      'albor-green': '#A18DE5',
      'albor-orange': '#83F4EC',
    };
    return colors[colorName] || '#FDB94E';
  };

  return (
    <div id="infrastructure" className="relative">
      {/* The main content container now has more consistent padding */}
      <div id="pillar-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 pb-16 md:pb-24 lg:pb-28 scroll-mt-28">
        {/* Founder Quote Banner - moved to top */}
        {activePillar?.founderQuote && <FounderInsightBanner {...activePillar.founderQuote} colorClasses={activeColors} />}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: getAccentColor(activePillar?.color || 'albor-blue') }}>{activePillar?.label || 'Unknown'}</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">{activePillar?.title || 'Unknown Title'}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{activePillar?.description || 'No description available'}</p>
            </div>

            {/* Mobile Animation - Renders below description on small screens */}
            <div className="lg:hidden my-10">
              {activePillar?.visual}
            </div>

            <div className="space-y-6 md:space-y-8 mt-10 mb-10">
              {activePillar?.features?.map((feature: any) => (
                <FeatureItem key={feature.title} icon={feature.icon} title={feature.title} iconColor={getAccentColor(activePillar?.color || 'albor-blue')}>{feature.description}</FeatureItem>
              )) || []}
            </div>
            <motion.button
              onClick={() => openModal("Schedule Demo")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
              }}
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Demo</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Column: Visual */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-full max-w-md">
              {activePillar?.visual}
            </div>
          </div>
        </div>
      </div>

      <CalendlyModal />
    </div>
  );
}