import React from "react";
import { motion } from "framer-motion";
import { Landmark, Building, ArrowRight, CheckCircle, Route, DollarSign, Loader2 } from "lucide-react";
import { PanelHeader } from "../../common-visuals/PanelHeader";
import { ObjectCard } from "../../common-visuals/ObjectCard";

export const Panel2_Processing: React.FC<any> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Header - BI PANAMA */}
            <PanelHeader 
                title="BANCO REPÚBLICA PANAMÁ" 
                subtitle="Processing" 
                color="indigo" 
            />

            <div className="flex-grow p-4 overflow-y-auto">
                <ObjectCard 
                    label="Disbursement Value"
                    amount="5,000,000.00"
                    currency="PUSD"
                    expanded={true} 
                    className="!h-auto shadow-sm border border-slate-200 mb-6"
                    
                    issuer={{
                        name: "Grupo Pantaleon",
                        id: "@pantaleon.bi",
                        bank: "BANCO INDUSTRIAL",
                        icon: <Building className="w-5 h-5" />,
                        color: 'blue'
                    }}

                    topContent={
                         <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[9px] text-slate-400 font-medium">To Account</p>
                                <p className="text-[9px] text-slate-500 font-medium">Ref: LOAN-8821</p>
                            </div>
                         </div>
                    }
                    amountSize="text-xl"
                    inlineCurrency={true}
                />

                {/* Processing Steps - 0 Fees */}
                <div className="space-y-3">
                  {/* Step 1: Authorized */}
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
                          <p className={`text-xs font-bold transition-colors ${animationState.verifyStep >= 1 ? 'text-green-900 dark:text-green-300' : 'text-slate-400'}`}>Loan Authorized</p>
                          <p className="text-[10px] text-slate-400">Compliance Checked</p>
                        </div>
                      </div>
                      {animationState.verifyStep >= 1 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Loader2 className="w-3.5 h-3.5 text-slate-300 animate-spin" />
                      )}
                    </div>
                  </motion.div>
    
                  {/* Step 2: Interbank Routing (Minting) */}
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
                          <p className={`text-xs font-bold transition-colors ${animationState.verifyStep >= 2 ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Minting & Transfer</p>
                          <p className="text-[10px] text-slate-400">República Panamá → Banco Industrial</p>
                        </div>
                      </div>
                      {animationState.verifyStep >= 2 ? (
                         <div className="flex items-center gap-1">
                           <div className="w-5 h-5 bg-indigo-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">BP</div>
                           <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">BI</div>
                         </div>
                      ) : animationState.verifyStep === 1 ? (
                        <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-100" />
                      )}
                    </div>
                  </motion.div>
    
                  {/* Step 3: Fees (0%) */}
                  <motion.div 
                    className={`p-3 rounded-xl border transition-all duration-500 bg-white dark:bg-slate-800/50 ${
                      animationState.verifyStep >= 3 
                        ? 'border-green-200 dark:border-green-800' 
                        : 'border-slate-100 dark:border-slate-700'
                    }`}
                    animate={{ scale: animationState.verifyStep === 3 ? [1, 1.01, 1] : 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                          animationState.verifyStep >= 3 ? 'bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                        }`}>
                          <DollarSign className={`w-4 h-4 ${animationState.verifyStep >= 3 ? 'text-green-600' : 'text-slate-300'}`} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold transition-colors ${animationState.verifyStep >= 3 ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Transaction Fee (0%)</p>
                          <p className="text-[10px] text-slate-400">Interbank Transfer</p>
                        </div>
                      </div>
                      {animationState.verifyStep >= 3 ? (
                        <span className="text-[10px] font-bold text-green-600 whitespace-nowrap">0.00 PUSD</span>
                      ) : animationState.verifyStep === 2 ? (
                        <Loader2 className="w-3.5 h-3.5 text-green-500 animate-spin" />
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
                  {animationState.verifyStep >= 4 ? '✓ FUNDS MINTED & SENT' : 'Processing...'}
                </p>
              </div>
            </div>
        </div>
    );
};
