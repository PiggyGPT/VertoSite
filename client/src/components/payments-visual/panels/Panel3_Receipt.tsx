import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { PanelProps } from "../types";
import { PanelHeader } from "../../common-visuals/PanelHeader";

export const Panel3_Receipt: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    
    // Store Context for Receipt
    const recipient = { name: "Tienda La Bendición", bank: "BANRURAL", id: "BR-8821", alborId: "@tienda.br" };
    // Accumulated balance after sales
    const balance = 4500.00; 

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Header - Recipient (Store) */}
            <PanelHeader 
                title="BANRURAL" 
                subtitle={recipient.name} 
                color="green" 
                rightElement={
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                        <span className="text-[9px] font-medium text-green-700 dark:text-green-300">{recipient.alborId}</span>
                    </div>
                }
            />

            {/* Account Content */}
            <div className="flex-grow flex flex-col overflow-hidden bg-white dark:bg-slate-900">
              
              {/* Balance & Actions Section */}
              <div className="py-14 px-6 shrink-0 text-center">
                 <div className="mb-6">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2">Saldo Disponible</p>
                    <motion.p 
                      className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
                      animate={{ scale: [1, 1.05, 1] }} 
                    >
                      {balance.toLocaleString(undefined, {minimumFractionDigits: 2})} <span className="text-sm font-medium text-slate-400 ml-1">PUSD</span>
                    </motion.p>
                 </div>

                 {/* Action Buttons */}
                 <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                    <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-colors shadow-lg shadow-green-200/50 dark:shadow-none">
                       <ArrowDown className="w-3.5 h-3.5" />
                       <span className="text-xs font-bold">Cobrar</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700">
                       <ArrowUp className="w-3.5 h-3.5" />
                       <span className="text-xs font-bold">Retirar</span>
                    </button>
                 </div>
              </div>

              {/* Transactions Section - Standardized Table */}
              <motion.div
                className="flex-grow flex flex-col min-h-0 border-t border-slate-100 dark:border-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="px-5 py-3 bg-slate-50/50 dark:bg-slate-800/30">
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Transacciones Recientes</p>
                </div>
                
                <div className="flex-grow overflow-y-auto">
                  {/* Latest Transaction (The Payment Received) */}
                  <div className="border-b border-slate-100 dark:border-slate-800 bg-green-50/10 dark:bg-green-900/5 group cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <div className="px-5 py-3 flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                         <p className="text-[10px] font-bold text-slate-900 dark:text-white">Pago Recibido</p>
                         <div className="flex items-center gap-2">
                             {/* Standardized Albor Badge */}
                            <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                                <img src="/logos/svg/alborsun.svg" alt="" className="w-2 h-2" />
                                <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">@maria.bi</span>
                            </div>
                            <span className="text-[9px] text-slate-300 font-medium">• Ahora</span>
                         </div>
                      </div>

                      <div className="text-right flex flex-col gap-0.5">
                        <p className="text-[10px] font-bold text-green-600">+125.00 PUSD</p>
                      </div>
                    </div>
                  </div>

                  {/* Fee Transaction */}
                  <div className="border-b border-slate-100 dark:border-slate-800 bg-green-50/5 dark:bg-green-900/5 group cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <div className="px-5 py-3 flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                         <p className="text-[10px] font-bold text-slate-900 dark:text-white">Comisión de Red (0.1%)</p>
                         <div className="flex items-center gap-2">
                            <span className="text-[9px] text-slate-300 font-medium">Tarifa de Procesamiento</span>
                         </div>
                      </div>
                      <div className="text-right flex flex-col gap-0.5">
                        <p className="text-[10px] font-bold text-slate-900 dark:text-white">-0.13 PUSD</p>
                      </div>
                    </div>
                  </div>


                  {/* Previous Transactions - Uniform Small Font */}
                  {[
                    { id: "Pago Recibido", date: "Hoy", party: "@juan.bam", amount: "+45.00", color: "green" },
                    { id: "Pago Recibido", date: "Ayer", party: "@ana.br", amount: "+80.00", color: "green" }
                  ].map((tx, i) => (
                    <div key={i} className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                      <div className="flex flex-col gap-0.5">
                         <p className="text-[10px] font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{tx.id}</p>
                         <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                                <img src="/logos/svg/alborsun.svg" alt="" className="w-2 h-2" />
                                <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">{tx.party}</span>
                            </div>
                            <span className="text-[9px] text-slate-300 font-medium">• {tx.date}</span>
                         </div>
                      </div>
                      <div className="text-right flex flex-col gap-0.5">
                        <p className={`text-[10px] font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-slate-900 dark:text-slate-200'}`}>
                          {tx.amount} PUSD
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
        </div>
    );
};
