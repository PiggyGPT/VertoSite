import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, FileText, CheckCircle, ArrowRight, Route, KeyRound, Zap } from "lucide-react";
import davidImage from "@assets/david_1754986415369.png";

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800">
        <Icon className="w-6 h-6 text-blue-500" />
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
        <blockquote className="text-lg md:text-xl font-medium leading-snug text-slate-800 dark:text-slate-100 border-l-4 border-blue-500 pl-5">
          <p>"At GSR, we ran state-of-the-art manual DeFi ops that secured millions. We distilled those lessons into an auditable, automated platform for you."</p>
        </blockquote>
        <footer className="mt-4">
          <p className="font-semibold text-slate-900 dark:text-white">David Cass</p>
          <p className="text-sm font-medium text-blue-500">CEO | Former CISO at GSR</p>
        </footer>
      </div>
    </div>
  </div>
);

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

const TradingVisual = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [animationState, setAnimationState] = useState({
    typingSource: false, typingSourceToken: false, typingDestination: false, typingDestinationToken: false,
    isGenerating: false, showToast: false, signatures: { maria: false, john: false }, isExecuting: false,
  });

  useEffect(() => {
    if (currentPanel === 0) {
      setAnimationState({
        typingSource: false, typingSourceToken: false, typingDestination: false, typingDestinationToken: false,
        isGenerating: false, showToast: false, signatures: { maria: false, john: false }, isExecuting: false,
      });
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, typingSource: true })), 300),
        setTimeout(() => setAnimationState(s => ({ ...s, typingSourceToken: true })), 1200),
        setTimeout(() => setAnimationState(s => ({ ...s, typingDestination: true })), 1500),
        setTimeout(() => setAnimationState(s => ({ ...s, typingDestinationToken: true })), 2400),
        setTimeout(() => setAnimationState(s => ({ ...s, isGenerating: true })), 2700),
      ];
      return () => timers.forEach(clearTimeout);
    } else if (currentPanel === 1) {
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, showToast: true })), 500),
        setTimeout(() => setAnimationState(s => ({ ...s, signatures: { ...s.signatures, maria: true } })), 1500),
        setTimeout(() => setAnimationState(s => ({ ...s, signatures: { ...s.signatures, john: true } })), 3000),
        setTimeout(() => setAnimationState(s => ({ ...s, isExecuting: true })), 4000),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentPanel]);

  useEffect(() => {
    const cyclePanels = () => setCurrentPanel(prev => (prev + 1) % 3);
    const intervalId = setInterval(cyclePanels, 7000);
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

  const sourceText = useTypingAnimation(`"fb_solana_wallet_0x1a2b"`, animationState.typingSource);
  const sourceTokenText = useTypingAnimation(`"USDC"`, animationState.typingSourceToken);
  const destinationText = useTypingAnimation(`"merchant_tia_store_0x3c4d"`, animationState.typingDestination);
  const destinationTokenText = useTypingAnimation(`"25000.00 BOBC"`, animationState.typingDestinationToken);

  const routeSteps = useMemo(() => [
    { id: 1, title: 'Withdraw from Fireblocks', subtitle: '250.00 USDC', network: 'Solana' },
    { id: 2, title: 'Bridge via CCTP', subtitle: '250.00 USDC', network: 'Solana' },
    { id: 3, title: 'Swap on Curve Finance', subtitle: '250.00 USDC to 25,000 BOBC', network: 'Arbitrum' },
    { id: 4, title: 'Pay Tia Store', subtitle: '0x3h5h..4243', network: 'Arbitrum' },
  ], []);

  return (
    <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
      <div className="relative w-full max-w-md mx-auto h-[480px] font-sans overflow-hidden">
        <div className={getPanelClasses(0)}>
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
              <span className="text-purple-400">{`{`}</span>
              <div className="pl-4 space-y-1">
                <div><span className="text-cyan-400">"source_wallet"</span>: <span className="text-amber-300">{sourceText}</span></div>
                <div><span className="text-cyan-400">"source_token"</span>: <span className="text-amber-300">{sourceTokenText}</span></div>
                <div><span className="text-cyan-400">"destination_wallet"</span>: <span className="text-amber-300">{destinationText}</span></div>
                <div><span className="text-cyan-400">"destination_amount"</span>: <span className="text-amber-300">{destinationTokenText}</span></div>
              </div>
              <span className="text-purple-400">{`}`}</span>
            </div>
            <div className={`mt-auto text-center pt-4 transition-opacity duration-500 ${animationState.isGenerating ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 text-slate-400 text-xs">
                <Cpu className="w-4 h-4 animate-spin" /><span>Generating optimal route...</span>
              </div>
            </div>
          </div>
        </div>

        <div className={getPanelClasses(1)}>
          <div className="w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Batched Transaction Route</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">TXID: 9e3b...a8c5</p>
              </div>
              <FileText className="w-6 h-6 text-slate-400" />
            </div>
            <motion.div initial="hidden" animate={currentPanel === 1 ? "show" : "hidden"} className="space-y-3 flex-grow">
              {routeSteps.map((step) => (
                <motion.div key={step.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
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
            </motion.div>
          </div>
        </div>

        <div className={getPanelClasses(2)}>
          <div className="w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col">
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
                <div className="flex items-center justify-between p-2 rounded-md text-sm">
                  <span className="text-slate-600 dark:text-slate-300">Sanctions & AML</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Passed</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-md text-sm">
                  <span className="text-slate-600 dark:text-slate-300">Counterparty</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Verified</span>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Execution Details</p>
              <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400 p-3 rounded-md font-mono">
                <div className="flex justify-between"><span>Net Cost:</span><span>25,022.50 USDC</span></div>
                <div className="flex justify-between"><span>Duration:</span><span>3.2 seconds</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TradingSection() {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-16">
      <div className="w-full border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="lg:col-span-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">Trading</p>
              <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mt-2 mb-4 tracking-tight">Institutional Liquidity</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">Execute trades across fragmented, multi-chain liquidity pools with automated enforcement of institutional risk policies.</p>
            </div>
            <div className="lg:hidden my-10">
              <TradingVisual />
            </div>
            <div className="space-y-6 md:space-y-8 mt-10 mb-10">
              <FeatureItem icon={Route} title="Smart Order Routing" description="Balance risk, pricing and latency across multiple protocols and chains to find the best execution route for every trade." />
              <FeatureItem icon={KeyRound} title="Non-Custodial Signing" description="Sign transaction routes with your existing custodial key governance, so your assets never leave your control." />
              <FeatureItem icon={Zap} title="Atomic Execution" description="Automate the entire transaction workflow with a single, batched payload that eliminates manual operational errors." />
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
              <span>Integrate Liquidity API</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-full max-w-md">
              <TradingVisual />
            </div>
          </div>
        </div>
        <FounderBanner />
        </div>
      </div>
    </section>
  );
}
