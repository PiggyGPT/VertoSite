import React from "react";
import { motion } from "framer-motion";
import { Building, CheckCircle, Route, DollarSign, Loader2, Store } from "lucide-react";
import { PanelProps } from "../types";
import { PanelHeader } from "../../common-visuals/PanelHeader";
import { ObjectCard } from "../../common-visuals/ObjectCard";

// Repurposing Panel2_PaymentSelection file to be the Processing Panel (Panel 2)
// PaymentsVisual imports this.

export const Panel2_PaymentSelection: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    
    // Maria's context
    const payer = { name: "María García", amount: "125.00", bank: "BI", id: "GT-4421", alborId: "@maria.bi" };

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Header - BANCO INDUSTRIAL (Maria) */}
            <PanelHeader 
                title="BANCO INDUSTRIAL" 
                subtitle="María García" 
                color="blue" 
                rightElement={
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                        <span className="text-[9px] font-medium text-blue-700 dark:text-blue-300">@maria.bi</span>
                    </div>
                }
            />

            <div className="flex-grow p-4 overflow-y-auto">
                {/* Condensed Object Card - Payment Details */}
                <ObjectCard 
                    label="Payment to Store"
                    amount="125.00"
                    currency="PUSD"
                    expanded={true} 
                    className="!h-auto shadow-sm border border-slate-200 mb-6"
                    
                    issuer={{
                        name: "Tienda La Bendición",
                        id: "@tienda.br",
                        bank: "BANRURAL",
                        icon: <Store className="w-5 h-5" />,
                        color: 'green' 
                    }}

                    topContent={
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[9px] text-slate-400 font-medium">Pago en Comercio</p>
                                <p className="text-[9px] text-slate-500 font-medium">Instant</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">#QR-8821</p>
                                <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">Today</p>
                            </div>
                        </div>
                    }
                    amountSize="text-xl"
                    inlineCurrency={true}
                />

                {/* Processing Steps - Adapted for Retail Payment */}
                <div className="space-y-3">
                  {/* Step 1: Authorization */}
                  <motion.div 
                    className={`p-3 rounded-xl border transition-all duration-500 bg-white dark:bg-slate-800/50 ${
                      animationState.routeStatus === 'calculating' || animationState.routeStatus === 'signing' || animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete'
                        ? 'border-blue-200 dark:border-blue-800' 
                        : 'border-slate-100 dark:border-slate-700'
                    }`}
                    animate={{ scale: animationState.routeStatus === 'calculating' ? [1, 1.01, 1] : 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                          animationState.routeStatus !== '' ? 'bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                        }`}>
                          <CheckCircle className={`w-4 h-4 ${animationState.routeStatus !== '' ? 'text-blue-600' : 'text-slate-300'}`} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold transition-colors ${animationState.routeStatus !== '' ? 'text-blue-900 dark:text-blue-300' : 'text-slate-400'}`}>Pago Autorizado</p>
                          <p className="text-[10px] text-slate-400">Banco Industrial</p>
                        </div>
                      </div>
                      {animationState.routeStatus !== '' ? (
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                      ) : (
                        <Loader2 className="w-3.5 h-3.5 text-slate-300 animate-spin" />
                      )}
                    </div>
                  </motion.div>
    
                  {/* Step 2: Interbank Clearing */}
                  <motion.div 
                    className={`p-3 rounded-xl border transition-all duration-500 bg-white dark:bg-slate-800/50 ${
                        animationState.routeStatus === 'signing' || animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete'
                        ? 'border-amber-200 dark:border-amber-800' 
                        : 'border-slate-100 dark:border-slate-700'
                    }`}
                    animate={{ scale: animationState.routeStatus === 'signing' ? [1, 1.01, 1] : 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                          animationState.routeStatus === 'signing' || animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete' ? 'bg-amber-50 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                        }`}>
                          <Route className={`w-4 h-4 ${animationState.routeStatus === 'signing' || animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete' ? 'text-amber-600' : 'text-slate-300'}`} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold transition-colors ${animationState.routeStatus === 'signing' || animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete' ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Compensación Interbancaria</p>
                          <p className="text-[10px] text-slate-400">BI → Banrural</p>
                        </div>
                      </div>
                      {(animationState.routeStatus === 'signing' || animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete') ? (
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">BI</div>
                          <div className="w-5 h-5 bg-green-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">BR</div>
                        </div>
                      ) : animationState.routeStatus === 'calculating' ? (
                        <Loader2 className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-100" />
                      )}
                    </div>
                  </motion.div>
    
                  {/* Step 3: Network Fee (0.1%) */}
                  <motion.div 
                    className={`p-3 rounded-xl border transition-all duration-500 bg-white dark:bg-slate-800/50 ${
                        animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete'
                        ? 'border-amber-200 dark:border-amber-800' 
                        : 'border-slate-100 dark:border-slate-700'
                    }`}
                    animate={{ scale: animationState.routeStatus === 'executing' ? [1, 1.01, 1] : 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                          animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete' ? 'bg-amber-50 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                        }`}>
                          <DollarSign className={`w-4 h-4 ${animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete' ? 'text-amber-600' : 'text-slate-300'}`} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold transition-colors ${animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete' ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Comisión Red (0.1%)</p>
                          <p className="text-[10px] text-slate-400">Tarifa de Procesamiento</p>
                        </div>
                      </div>
                      {animationState.routeStatus === 'executing' || animationState.routeStatus === 'complete' ? (
                         <span className="text-[10px] font-bold text-red-600 whitespace-nowrap">-0.13 PUSD</span>
                      ) : (animationState.routeStatus === 'signing') ? (
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
                animationState.routeStatus === 'complete'
                  ? 'bg-green-100 dark:bg-green-900/20' 
                  : 'bg-slate-50 dark:bg-slate-800'
              }`}>
                <p className={`text-xs font-bold uppercase ${
                  animationState.routeStatus === 'complete' ? 'text-green-700 dark:text-green-400' : 'text-slate-500'
                }`}>
                  {animationState.routeStatus === 'complete' ? '✓ PAGO EXITOSO' : 'Procesando...'}
                </p>
              </div>
            </div>
        </div>
    );
};
