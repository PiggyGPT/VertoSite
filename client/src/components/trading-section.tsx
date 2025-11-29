import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, FileText, CheckCircle } from "lucide-react";

const VisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
    {children}
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

export default function TradingSection() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [animationState, setAnimationState] = useState({
    typingSource: false,
    typingSourceToken: false,
    typingDestination: false,
    typingDestinationToken: false,
    isGenerating: false,
    showToast: false,
    signatures: { maria: false, john: false },
    isExecuting: false,
  });

  useEffect(() => {
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
      });
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, typingSource: true })), 300),
        setTimeout(() => setAnimationState(s => ({ ...s, typingSourceToken: true })), 1200),
        setTimeout(() => setAnimationState(s => ({ ...s, typingDestination: true })), 1500),
        setTimeout(() => setAnimationState(s => ({ ...s, typingDestinationToken: true })), 2400),
        setTimeout(() => setAnimationState(s => ({ ...s, isGenerating: true })), 2700),
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

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Institutional Liquidity</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Execute trades across multi-chain liquidity pools with automated risk enforcement</p>
        </div>
        <VisualContainer>
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
                    <div>
                      <span className="text-cyan-400">"source_wallet"</span>: <span className="text-amber-300">{sourceText}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"source_token"</span>: <span className="text-amber-300">{sourceTokenText}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"destination_wallet"</span>: <span className="text-amber-300">{destinationText}</span>
                    </div>
                  </div>
                  <span className="text-purple-400">{`}`}</span>
                </div>
                <div className={`mt-auto text-center pt-4 transition-opacity duration-500 ${animationState.isGenerating ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="inline-flex items-center gap-2 text-slate-400 text-xs">
                    <Cpu className="w-4 h-4 animate-spin" />
                    <span>Generating optimal route...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={getPanelClasses(1)}>
              <div className="w-full h-full mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Batched Transaction Route</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">TXID: 9e3b...a8c5</p>
                  </div>
                  <FileText className="w-6 h-6 text-slate-400" />
                </div>
                <div className="space-y-3 flex-grow">
                  {[1, 2, 3, 4].map(step => (
                    <div key={step} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-700 dark:text-slate-200">{step}.</span>
                        <span className="text-xs text-slate-400 dark:text-slate-600 font-mono italic">Solana</span>
                      </div>
                    </div>
                  ))}
                </div>
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
              </div>
            </div>
          </div>
        </VisualContainer>
      </div>
    </section>
  );
}
