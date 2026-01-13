import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { PanelProps } from "../types";
import { PanelHeader } from "../../common-visuals/PanelHeader";

export const Panel3_Receipt: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext, selectedWorker }) => {
    
    // Fallback if no worker selected
    const worker = selectedWorker || { name: "María García", amount: 2800, bank: "BI", id: "GT-4421", alborId: "@maria.bi" };
    const bankName = worker.bank === 'BI' ? 'BANCO INDUSTRIAL' : worker.bank === 'BAM' ? 'BAM' : 'BANRURAL';
    const bankColor = worker.bank === 'BI' ? 'blue' : worker.bank === 'BAM' ? 'amber' : 'green';
    
    // Calculate 3% fee
    const fee = Math.round(worker.amount * 0.03);
    const netAmount = worker.amount - fee;

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Header - Employee's Bank */}
            <PanelHeader 
                title={bankName} 
                subtitle={worker.name} 
                color={bankColor} 
                rightElement={
                    <div className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-${bankColor}-200 dark:border-${bankColor}-800 bg-${bankColor}-50 dark:bg-${bankColor}-900/20`}>
                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                        <span className={`text-[9px] font-medium text-${bankColor}-700 dark:text-${bankColor}-300`}>{worker.alborId}</span>
                    </div>
                }
            />

            {/* Account Content */}
            <div className="flex-grow flex flex-col overflow-hidden bg-white dark:bg-slate-900">
              
              {/* Balance & Actions Section - Matches Invoicing Panel 3 */}
              <div className="py-14 px-6 shrink-0 text-center">
                 <div className="mb-6">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2">Saldo Disponible</p>
                    <motion.p 
                      className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
                      animate={{ scale: animationState.settled ? [1, 1.05, 1] : 1 }}
                    >
                      {netAmount.toLocaleString(undefined, {minimumFractionDigits: 2})} <span className="text-sm font-medium text-slate-400 ml-1">PUSD</span>
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

              {/* Transactions Section - Standardized Table */}
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
                  {/* Latest Transaction (Payroll Receipt) */}
                  <div className="border-b border-slate-100 dark:border-slate-800 bg-green-50/10 dark:bg-green-900/5 group cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <div className="px-5 py-3 flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                         <p className="text-[10px] font-bold text-slate-900 dark:text-white">Nómina - Adelanto Oct</p>
                         <div className="flex items-center gap-2">
                             {/* Standardized Albor Badge */}
                            <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                                <img src="/logos/svg/alborsun.svg" alt="" className="w-2 h-2" />
                                <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">@coop.canaveral.br</span>
                            </div>
                            <span className="text-[9px] text-slate-300 font-medium">• Ahora</span>
                         </div>
                      </div>

                      <div className="text-right flex flex-col gap-0.5">
                        <p className="text-[10px] font-bold text-green-600">+{netAmount.toLocaleString(undefined, {minimumFractionDigits: 2})} PUSD</p>
                        <p className="text-[9px] text-slate-300 line-through decoration-slate-300">{worker.amount.toLocaleString(undefined, {minimumFractionDigits: 2})} PUSD</p>
                      </div>
                    </div>
                  </div>

                  {/* Previous Transactions - Uniform Small Font */}
                  {[
                    { id: "Compra Supermercado", date: "29 Oct", party: "@walmart.gt", amount: "-450.00", gross: null },
                    { id: "Pago Servicios", date: "28 Oct", party: "@egsa.gt", amount: "-120.50", gross: null }
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
                          {tx.amount}
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
