import React from "react";
import { motion } from "framer-motion";
import { Building, CheckCircle, Route, DollarSign, Loader2, User } from "lucide-react";
import { PanelProps } from "../types";
import { PanelHeader } from "../../common-visuals/PanelHeader";
import { ObjectCard } from "../../common-visuals/ObjectCard";

export const Panel2_Processing: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext, selectedWorker }) => {
    
    // Fallback
    const worker = selectedWorker || { name: "María García", amount: 2800, bank: "BI", id: "GT-4421", alborId: "@maria.bi" };
    const fee = Math.round(worker.amount * 0.03);

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Header - BANRURAL Green */}
            <PanelHeader 
                title="BANRURAL" 
                subtitle="Cooperativa Cañaveral" 
                color="green" 
                rightElement={
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                        <span className="text-[9px] font-medium text-green-700 dark:text-green-300">@coop.canaveral.br</span>
                    </div>
                }
            />

            <div className="flex-grow p-4 overflow-y-auto">
                {/* Condensed Object Card */}
                <ObjectCard 
                    label="Payroll Advance"
                    amount={worker.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}
                    currency="PUSD"
                    expanded={true} 
                    className="!h-auto shadow-sm border border-slate-200 mb-6"
                    
                    issuer={{
                        name: worker.name,
                        id: worker.alborId,
                        bank: worker.bank === 'BI' ? 'BANCO INDUSTRIAL' : worker.bank === 'BAM' ? 'BAM' : 'BANRURAL',
                        icon: <User className="w-5 h-5" />,
                        color: 'blue' 
                    }}

                    topContent={
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[9px] text-slate-400 font-medium">Adelanto de Salario</p>
                                <p className="text-[9px] text-slate-500 font-medium">Due Date: End of Month</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">#{worker.id}</p>
                                <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">30 Oct 2024</p>
                            </div>
                        </div>
                    }
                    amountSize="text-xl"
                    inlineCurrency={true}
                />

                {/* Processing Steps - Adapted for Payroll */}
                <div className="space-y-3">
                  {/* Step 1: Authorization */}
                  <motion.div 
                    className={`p-3 rounded-xl border transition-all duration-500 bg-white dark:bg-slate-800/50 ${
                      animationState.verifyStep >= 1 
                        ? 'border-green-200 dark:border-green-800' 
                        : 'border-slate-100 dark:border-slate-700'
                    }`}
                    animate={{ scale: animationState.verifyStep === 1 ? [1, 1.01, 1] : 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                          animationState.verifyStep >= 1 ? 'bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                        }`}>
                          <CheckCircle className={`w-4 h-4 ${animationState.verifyStep >= 1 ? 'text-green-600' : 'text-slate-300'}`} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold transition-colors ${animationState.verifyStep >= 1 ? 'text-green-900 dark:text-green-300' : 'text-slate-400'}`}>Adelanto Autorizado</p>
                          <p className="text-[10px] text-slate-400">Empleador: Coop. Cañaveral</p>
                        </div>
                      </div>
                      {animationState.verifyStep >= 1 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Loader2 className="w-3.5 h-3.5 text-slate-300 animate-spin" />
                      )}
                    </div>
                  </motion.div>
    
                  {/* Step 2: Interbank Routing */}
                  <motion.div 
                    className={`p-3 rounded-xl border transition-all duration-500 bg-white dark:bg-slate-800/50 ${
                      animationState.verifyStep >= 2 
                        ? 'border-blue-200 dark:border-blue-800' 
                        : 'border-slate-100 dark:border-slate-700'
                    }`}
                    animate={{ scale: animationState.verifyStep === 2 ? [1, 1.01, 1] : 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                          animationState.verifyStep >= 2 ? 'bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                        }`}>
                          <Route className={`w-4 h-4 ${animationState.verifyStep >= 2 ? 'text-blue-600' : 'text-slate-300'}`} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold transition-colors ${animationState.verifyStep >= 2 ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Enrutamiento Interbank</p>
                          <p className="text-[10px] text-slate-400">Banrural → {worker.bank === 'BI' ? 'Banco Industrial' : worker.bank === 'BAM' ? 'BAM' : 'Banrural'}</p>
                        </div>
                      </div>
                      {animationState.verifyStep >= 2 ? (
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 bg-green-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">BR</div>
                          <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">{worker.bank === 'BI' ? 'BI' : worker.bank === 'BAM' ? 'BM' : 'BR'}</div>
                        </div>
                      ) : animationState.verifyStep === 1 ? (
                        <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-100" />
                      )}
                    </div>
                  </motion.div>
    
                  {/* Step 3: Commission / Discount */}
                  <motion.div 
                    className={`p-3 rounded-xl border transition-all duration-500 bg-white dark:bg-slate-800/50 ${
                      animationState.verifyStep >= 3 
                        ? 'border-amber-200 dark:border-amber-800' 
                        : 'border-slate-100 dark:border-slate-700'
                    }`}
                    animate={{ scale: animationState.verifyStep === 3 ? [1, 1.01, 1] : 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                          animationState.verifyStep >= 3 ? 'bg-amber-50 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                        }`}>
                          <DollarSign className={`w-4 h-4 ${animationState.verifyStep >= 3 ? 'text-amber-600' : 'text-slate-300'}`} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold transition-colors ${animationState.verifyStep >= 3 ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Comisión Adelanto (3%)</p>
                          <p className="text-[10px] text-slate-400">Financiamiento</p>
                        </div>
                      </div>
                      {animationState.verifyStep >= 3 ? (
                        <span className="text-[10px] font-bold text-red-600 whitespace-nowrap">-{fee.toLocaleString()} PUSD</span>
                      ) : animationState.verifyStep === 2 ? (
                        <Loader2 className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-100" />
                      )}
                    </div>
                  </motion.div>
                </div>
            </div>

            {/* Status Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
              <div className={`p-3 rounded-xl text-center transition-all duration-500 ${
                animationState.verifyStep >= 4 
                  ? 'bg-green-100 dark:bg-green-900/20' 
                  : 'bg-slate-50 dark:bg-slate-800'
              }`}>
                <p className={`text-xs font-bold uppercase ${
                  animationState.verifyStep >= 4 ? 'text-green-700 dark:text-green-400' : 'text-slate-500'
                }`}>
                  {animationState.verifyStep >= 4 ? '✓ FONDOS ACREDITADOS' : 'Procesando...'}
                </p>
              </div>
            </div>
        </div>
    );
};
