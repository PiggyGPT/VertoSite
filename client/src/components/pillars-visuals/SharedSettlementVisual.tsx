import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MobileFrame } from "../ui/mobile-frame";
import { WalletViewPanel } from "./WalletViewPanel";
import { SwipeButton } from "../common-visuals/SwipeButton";
import { FireworksBackground } from "../ui/shadcn-io/fireworks-background";

// --- PANEL 1: WALLET VIEW (Reusable Component) ---
const Panel1_WalletView = ({ onComplete }: { onComplete: () => void }) => {
    const [doSwipe, setDoSwipe] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDoSwipe(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-full w-full relative overflow-hidden bg-white dark:bg-slate-950 flex flex-col">
            <WalletViewPanel 
                onComplete={onComplete}
                username="@grupopantaleon"
                userSubheader="Banco Industrial"
                bankLogo="/logos/banco_industrial.png"
                balance="1,000,000.00"
                autoCompleteDelay={0}
                actionElement={
                    <div className="w-full px-4 py-2 flex items-center justify-center gap-4">
                        <div className="w-12 h-7 rounded-[4px] bg-[#2169D1] flex items-center justify-center border border-white/10 shadow-lg overflow-hidden p-1.5 shrink-0">
                            <img src="/logos/svg/albor.svg" alt="Albor" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[15px] font-bold text-white tracking-tight leading-none mb-1">Tarjeta de Comercio</span>
                            <span className="text-[10px] text-white/70 font-semibold tracking-tight uppercase">Banco Industrial S.A.</span>
                        </div>
                    </div>
                }
                bottomElement={
                    <div className="flex-1 flex flex-col relative z-10 pt-4 overflow-hidden">
                        {/* Background Fireworks only in the bottom part */}
                        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0">
                            <FireworksBackground color="#6366f1" className="opacity-60" />
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-between pb-8 px-6 relative z-10">
                            <div className="w-full pt-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">You're Approved</h3>
                                
                                <div className="grid grid-cols-3 gap-2 w-full">
                                    <div className="flex flex-col items-center gap-1.5 leading-tight">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Terms</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">30 Days</span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center gap-1.5 border-x border-slate-100 dark:border-slate-800 leading-tight">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">APR</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">8.00%</span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center gap-1.5 leading-tight">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Fees</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">None</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex items-center justify-center py-4">
                                <button onClick={onComplete} className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors">
                                    View Terms
                                </button>
                            </div>

                            <div className="w-full">
                                <SwipeButton 
                                    text="Swipe to Accept" 
                                    onComplete={onComplete}
                                    color="bg-slate-900 dark:bg-blue-600"
                                    isSwiped={doSwipe}
                                />
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export const SharedSettlementVisual = () => {
  return (
    <MobileFrame>
      <Panel1_WalletView onComplete={() => {}} />
    </MobileFrame>
  );
};
