import React, { useState, useEffect } from "react";
import {
  Plus, Zap, History, Settings, User, Keyboard, ArrowRight,
  Coins, CreditCard, Users
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';
import davidImage from "@assets/david_1754986415369.png";

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

const Header = ({ title, subtitle, icon }: any) => (
  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
    <div>
      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">{title}</h3>
      {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
    <div className="flex items-center gap-2">{icon}</div>
  </div>
);

const MintContent = ({ voucherId, amount }: any) => (
  <div className="w-full max-w-xs mx-auto rounded-2xl shadow-xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 h-full">
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

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800">
        <Icon className="w-6 h-6 text-green-500" />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="mt-1 text-base text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const FounderBanner = () => (
  <div className="rounded-xl p-6 md:p-8 mt-8">
    <div className="flex flex-col md:flex-row items-start gap-6">
      <img src={davidImage} alt="David Cass" className="w-16 h-16 rounded-full object-cover ring-4 ring-white/50 dark:ring-slate-950/50 flex-shrink-0" />
      <div>
        <blockquote className="text-lg md:text-xl font-medium leading-snug text-slate-800 dark:text-slate-100 border-l-4 border-green-500 pl-5">
          <p>"The Fed systems securely distribute trillions of dollars through their global, trusted network. We help you re-create the same playbook."</p>
        </blockquote>
        <footer className="mt-4">
          <p className="font-semibold text-slate-900 dark:text-white">David Cass</p>
          <p className="text-sm font-medium text-green-500">CEO | Former Federal Reserve Regulator</p>
        </footer>
      </div>
    </div>
  </div>
);

const DistributionVisual = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [showKeypadPopup, setShowKeypadPopup] = useState(false);
  const [amount, setAmount] = useState('');
  const [voucherAmount, setMintAmount] = useState('');
  const [isIssueButtonClicked, setIssueButtonClicked] = useState(false);
  const [isEnterButtonClicked, setEnterButtonClicked] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const voucherId = '8721';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const runAnimationStep = (step: number) => {
      switch (step) {
        case 0:
          setCurrentPanel(0); setShowKeypadPopup(false); setAmount(''); setMintAmount('');
          setIssueButtonClicked(false); setEnterButtonClicked(false);
          timeout = setTimeout(() => setAnimationStep(1), 2000); break;
        case 1: setIssueButtonClicked(true); timeout = setTimeout(() => setAnimationStep(2), 300); break;
        case 2: setIssueButtonClicked(false); setShowKeypadPopup(true); timeout = setTimeout(() => setAnimationStep(3), 500); break;
        case 3: setAmount('50'); timeout = setTimeout(() => setAnimationStep(4), 1500); break;
        case 4: setEnterButtonClicked(true); timeout = setTimeout(() => setAnimationStep(5), 300); break;
        case 5: setEnterButtonClicked(false); setShowKeypadPopup(false); setMintAmount(amount); timeout = setTimeout(() => setAnimationStep(6), 700); break;
        case 6: setCurrentPanel(1); timeout = setTimeout(() => setAnimationStep(7), 1000); break;
        case 7: timeout = setTimeout(() => setAnimationStep(8), 2500); break;
        case 8: setCurrentPanel(2); timeout = setTimeout(() => setAnimationStep(9), 1000); break;
        case 9: timeout = setTimeout(() => setAnimationStep(0), 1000); break;
      }
    };
    runAnimationStep(animationStep);
    return () => { if (timeout) clearTimeout(timeout); };
  }, [animationStep, amount]);

  const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
  const panelVisibleClasses = "opacity-100 translate-x-0";
  const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
  const panelHiddenRightClasses = "opacity-0 translate-x-full";
  const panel0Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
  const panel1Classes = `${panelBaseClasses} ${currentPanel === 1 ? panelVisibleClasses : currentPanel === 0 ? panelHiddenRightClasses : panelHiddenLeftClasses}`;
  const panel2Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;
  const keypadPopupClasses = `absolute w-full max-w-lg mx-auto bottom-0 rounded-t-2xl shadow-2xl transition-all duration-500 ease-in-out z-50 transform bg-white dark:bg-slate-800 ${showKeypadPopup ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`;
  const keypadPopupContainerClasses = `absolute inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${showKeypadPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;

  return (
    <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
      <style>{cursorStyle}</style>
      <div className="relative w-full max-w-lg mx-auto min-h-[400px] overflow-hidden rounded-2xl flex flex-col">
        <div className={panel0Classes} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
          <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4">
            <Header title="Tia Store" subtitle="Agent Dashboard" icon={<Settings className="w-5 h-5 text-slate-400" />} />
            <div className="p-4 rounded-lg">
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
            <button className={`flex items-center justify-center w-full space-x-2 px-4 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-200 my-4 bg-green-500 ${isIssueButtonClicked ? 'scale-95 bg-green-600 shadow-inner' : 'hover:bg-green-500/90 hover:scale-105'}`}>
              <Zap className="w-4 h-4" /><span>Issue BOBC</span>
            </button>
            <div className="flex-grow mt-4 overflow-hidden flex flex-col">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2"><History className="w-4 h-4" /> Recent Transactions</p>
              <div className="space-y-2 text-sm overflow-y-auto">
                <div className="flex justify-between items-center p-2 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer">
                  <div><span className="text-slate-600 dark:text-slate-400">Credit Top-up</span><p className="text-xs text-slate-400">14 Aug 2025, 10:15</p></div>
                  <span className="font-medium text-green-500">+ 5,000 BOBC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={panel1Classes} style={{ zIndex: currentPanel === 1 ? 3 : 2 }}>
          <MintContent voucherId={voucherId} amount={voucherAmount} />
        </div>
        <div className={panel2Classes} style={{ zIndex: currentPanel === 2 ? 3 : 2 }}>
          <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4">
            <Header title="Maria Silva" subtitle="Wallet" icon={<User className="w-5 h-5 text-slate-400" />} />
            <div className="p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Balance</p>
                  <p className="text-2xl font-bold text-green-500 tracking-tight">50.00 BOBC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={keypadPopupContainerClasses}>
          <div className={`${keypadPopupClasses} p-8 flex flex-col space-y-4`}>
            <Header title="Mint Amount" subtitle="Enter the amount to issue." icon={<Keyboard className="w-5 h-5 text-slate-400" />} />
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center gap-2">
                <p className="text-6xl font-bold my-2 text-green-500 tracking-tight">
                  {amount || '0'}<span className="text-4xl font-normal">.00</span>
                  <span className="typing-cursor"></span>
                  <span className="ml-2 text-3xl font-normal text-slate-500 dark:text-slate-400">BOBC</span>
                </p>
              </div>
              <button className={`flex items-center justify-center w-full mt-4 space-x-2 px-4 py-3 text-white text-base font-semibold rounded-lg transition-all duration-200 bg-green-500 ${isEnterButtonClicked ? 'scale-95 bg-green-600 shadow-inner' : 'hover:bg-green-500/90'}`}>
                <Zap className="w-5 h-5" /><span>Issue BOBC</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DistributionSection() {
  return (
    <section className="py-16">
      <div className="w-full border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="lg:col-span-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-500">Distribution</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Partner On-Ramps</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">Enable partners to seamlessly issue & distribute digital assets against deposits, funding your treasury in real-time.</p>
            </div>
            <div className="lg:hidden my-10">
              <DistributionVisual />
            </div>
            <div className="space-y-6 md:space-y-8 mt-10 mb-10">
              <FeatureItem icon={Coins} title="Leverage Existing Networks" description="Activate your existing retail and partner channels to distribute digital assets with existing infrastructure." />
              <FeatureItem icon={CreditCard} title="Zero-Float Operations" description="Enable instant issuance at the point of deposit with no treasury float or liquidity pre-funding required." />
              <FeatureItem icon={Users} title="Partner Portal & APIs" description="Self-service onboarding and white-label solutions for rapid partner integration and network growth." />
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
              <span>Scale Distribution Network</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-full max-w-md">
              <DistributionVisual />
            </div>
          </div>
        </div>
        <FounderBanner />
        </div>
      </div>
    </section>
  );
}
