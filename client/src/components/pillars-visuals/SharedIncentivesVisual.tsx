
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileFrame } from "../ui/mobile-frame";
import { Coins, Wallet, RefreshCw, ArrowUpRight, ArrowDownLeft, Building, LineChart, Banknote } from "lucide-react";

// --- PANEL 0: Issuer Interchange Dashboard ---
const Panel0_IssuerRev = () => {
    const [txCount, setTxCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTxCount(prev => prev + 1);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-6 relative">
             <div className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 h-[320px] flex flex-col">
                 <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                           <Building className="w-4 h-4 text-slate-500" />
                           <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Issuer Portal</span>
                      </div>
                      <span className="text-[10px] text-green-600 font-bold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          LIVE
                      </span>
                 </div>
                 
                 <div className="p-4 flex-1 flex flex-col">
                     <div className="mb-4">
                         <span className="text-xs text-slate-500 uppercase">Total Interchange Revenue</span>
                         <div className="text-2xl font-bold text-slate-900 dark:text-white flex items-end gap-2">
                             ${(12450.00 + (txCount * 15)).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                             <span className="text-xs text-green-600 font-medium mb-1">+{txCount} new</span>
                         </div>
                     </div>

                     <div className="space-y-2 overflow-hidden relative flex-1">
                         <AnimatePresence>
                             {[...Array(3)].map((_, i) => (
                                 <motion.div 
                                    key={i + txCount} 
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded border border-slate-100 dark:border-slate-700"
                                 >
                                      <div className="flex items-center gap-2">
                                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                              <ArrowUpRight className="w-3 h-3 text-blue-600" />
                                          </div>
                                          <div className="flex flex-col">
                                              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Tx #{9900 + txCount + i}</span>
                                              <span className="text-[10px] text-slate-500">Payment</span>
                                          </div>
                                      </div>
                                      <span className="text-xs font-bold text-green-600">+$15.00</span>
                                 </motion.div>
                             ))}
                         </AnimatePresence>
                         <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white dark:from-slate-800 to-transparent" />
                     </div>
                 </div>
             </div>
        </div>
    );
};

// --- PANEL 1: Acquirer Fees ---
const Panel1_AcquirerFees = () => (
   <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-6 relative">
       <div className="w-full max-w-[280px] bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 border border-slate-200 dark:border-slate-700">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
              </div>
              <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Wallet Hosting</h4>
                  <p className="text-xs text-slate-500">Acquirer Revenue</p>
              </div>
           </div>
           
           <div className="space-y-4">
               <div>
                   <div className="flex justify-between text-xs text-slate-500 mb-1">
                       <span>Active Wallets</span>
                       <span className="text-green-600 font-bold">+12%</span>
                   </div>
                   <div className="text-xl font-bold text-slate-900 dark:text-white">15,420</div>
                   <div className="w-full h-1 bg-slate-100 mt-2 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="h-full bg-blue-500" />
                   </div>
               </div>
               
               <div className="grid grid-cols-2 gap-2">
                   <div className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded border border-slate-100 dark:border-slate-700">
                       <div className="text-[10px] text-slate-500">Processing</div>
                       <div className="font-bold text-slate-900 dark:text-white">$450k</div>
                   </div>
                   <div className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded border border-slate-100 dark:border-slate-700">
                       <div className="text-[10px] text-slate-500">Fee Rev</div>
                       <div className="font-bold text-green-600">$4.5k</div>
                   </div>
               </div>
           </div>
       </div>
   </div>
);

// --- PANEL 2: FX / AMM ---
const Panel2_FXTerminal = () => (
   <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-6 relative">
      <motion.div 
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         className="w-full max-w-[280px] bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden border border-slate-700 font-mono"
      >
          <div className="bg-slate-800 p-2 text-[10px] flex justify-between items-center text-slate-400">
              <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3" /> FX TERMINAL</span>
              <span>AUTO-AMM</span>
          </div>

          <div className="p-4 space-y-4">
               <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center text-[8px] font-bold">GTQ</div>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                        <div className="h-6 w-6 rounded-full bg-green-700 flex items-center justify-center text-[8px] font-bold">USD</div>
                    </div>
                    <span className="text-xl font-bold">100,000</span>
               </div>
               
               <div className="space-y-1">
                   <div className="flex justify-between text-xs text-slate-500">
                       <span>Rate</span>
                       <span>0.1294</span>
                   </div>
                   <div className="flex justify-between text-xs text-slate-500">
                       <span>Swap Fee (LP)</span>
                       <span className="text-green-400">20 bps</span>
                   </div>
               </div>

               <div className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700">
                    <span className="text-xs text-slate-400">Net Captured</span>
                    <span className="text-sm font-bold text-green-400">+$250.00</span>
               </div>
          </div>
          
      </motion.div>
   </div>
);
import { ArrowRight } from "lucide-react";


export const SharedIncentivesVisual = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const duration = step === 0 ? 4000 : 3500;
    const interval = setTimeout(() => {
      setStep((prev) => (prev + 1) % 3);
    }, duration); 
    return () => clearTimeout(interval);
  }, [step]);

  return (
    <MobileFrame>
      <AnimatePresence mode="wait">
        <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full absolute inset-0"
        >
          {step === 0 && <Panel0_IssuerRev />}
          {step === 1 && <Panel1_AcquirerFees />}
          {step === 2 && <Panel2_FXTerminal />}
        </motion.div>
      </AnimatePresence>
    </MobileFrame>
  );
};
