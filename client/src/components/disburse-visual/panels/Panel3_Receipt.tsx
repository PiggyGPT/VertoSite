import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelHeader } from "../../common-visuals/PanelHeader";
import { ArrowUp, ArrowDown } from "lucide-react";

export const Panel3_Receipt: React.FC<any> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Header - BI GUATEMALA - PROCEEDS RECEIVED */}
            <PanelHeader 
                title="BANCO INDUSTRIAL" 
                subtitle="Grupo Pantaleon" 
                color="blue" 
                rightElement={
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                        <span className="text-[9px] font-medium text-blue-700 dark:text-blue-300">@pantaleon.bi</span>
                    </div>
                }
            />

            {/* Account Content */}
            <div className="flex-grow flex flex-col overflow-hidden bg-white dark:bg-slate-900">
              
              {/* Balance */}
              <div className="py-14 px-6 shrink-0 text-center">
                 <div className="mb-6">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2">Saldo Disponible</p>
                    <motion.p 
                      className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
                      animate={{ scale: animationState.settled ? [1, 1.05, 1] : 1 }}
                    >
                      5,000,000.00 <span className="text-sm font-medium text-slate-400 ml-1">PUSD</span>
                    </motion.p>
                 </div>

                 {/* Action Buttons */}
                 <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                    <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg shadow-blue-200/50 dark:shadow-none">
                       <ArrowUp className="w-3.5 h-3.5" />
                       <span className="text-xs font-bold">Enviar</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700">
                       <ArrowDown className="w-3.5 h-3.5" />
                       <span className="text-xs font-bold">Recibir</span>
                    </button>
                 </div>
              </div>

              {/* Transactions Section */}
              <motion.div
                className="flex-grow flex flex-col min-h-0 border-t border-slate-100 dark:border-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: animationState.showSettlement ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="px-5 py-3 bg-slate-50/50 dark:bg-slate-800/30">
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Transacciones Recientes</p>
                </div>
                
                <div className="flex-grow overflow-y-auto">
                  {/* Latest Transaction (Loan) */}
                  <div className="border-b border-slate-100 dark:border-slate-800 bg-blue-50/10 dark:bg-blue-900/5 group cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <div className="px-5 py-3 flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                         <p className="text-[10px] font-bold text-slate-900 dark:text-white">Loan Disbursement</p>
                         <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 rounded border border-indigo-200 dark:border-indigo-700">
                                <span className="text-[9px] font-medium text-indigo-500 dark:text-indigo-400">Banco República</span>
                            </div>
                            <span className="text-[9px] text-slate-300 font-medium">• Just Now</span>
                         </div>
                      </div>

                      <div className="text-right flex flex-col gap-0.5">
                        <p className="text-[10px] font-bold text-green-600">+5,000,000.00 PUSD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </div>
    );
};
