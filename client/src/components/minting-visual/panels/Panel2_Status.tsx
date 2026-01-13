import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ArrowRight, CheckCircle, Zap, Loader2, Coins, Banknote, Receipt, Wallet } from 'lucide-react';
import { MintingPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';
import { PanelSubheader } from '../../common-visuals/PanelSubheader';

export const Panel2_Status: React.FC<MintingPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    
    // Map status string to a numeric step for easier rendering logic
    const getStep = () => {
        switch(animationState.statusStep) {
            case 'waiting': return 0;
            case 'omnibus_transfer': return 1;
            case 'awaiting_receipt': return 2;
            case 'receipt_confirmed': return 3;
            case 'minting': return 4;
            case 'complete': return 5;
            default: return 0;
        }
    };
    const currentStep = getStep();

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Bank Header - BANCO REPÚBLICA PANAMÁ */}
            <PanelHeader 
                title="BANCO REPÚBLICA PANAMÁ" 
                subtitle="Corporate Lending" 
                color="blue" 
            />

            {/* Transfer Path Info */}
            <PanelSubheader 
                entityName="Grupo Pantaleon" 
                alborId="@pantaleon.bi" 
                bankColor="blue" 
                icon={null}
            />

            {/* Processing Steps - Omnibus Flow */}
            <div className="flex-grow p-4 space-y-2 overflow-y-auto">
              
              {/* Step 1: Omnibus Transfer */}
              <motion.div 
                className={`p-3 rounded-xl border-2 transition-all duration-500 ${
                  currentStep >= 1 
                    ? currentStep === 1 
                      ? 'border-amber-400 bg-amber-50 dark:bg-amber-900/20 ring-2 ring-amber-300/50 shadow-md' 
                      : 'border-green-200 bg-green-50/50 dark:bg-green-900/10' 
                    : 'border-slate-100 dark:border-slate-800'
                }`}
                animate={{ scale: currentStep === 1 ? [1, 1.02, 1] : 1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                      currentStep >= 1 
                        ? currentStep === 1 
                          ? 'bg-amber-100 border-amber-300 dark:bg-amber-900/30 dark:border-amber-700' 
                          : 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800'
                        : 'bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                    }`}>
                      <Banknote className={`w-4 h-4 ${currentStep >= 1 ? currentStep === 1 ? 'text-amber-600' : 'text-green-600' : 'text-slate-300'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold transition-colors ${
                        currentStep >= 1 
                          ? currentStep === 1 
                            ? 'text-amber-800 dark:text-amber-300' 
                            : 'text-green-800 dark:text-green-300' 
                          : 'text-slate-400'
                      }`}>
                        Omnibus Deposit Required
                      </p>
                      <p className={`text-[10px] ${currentStep === 1 ? 'text-amber-600 dark:text-amber-400 font-medium' : 'text-slate-400'}`}>
                        $5,000,000 USD Transfer
                      </p>
                    </div>
                  </div>
                  {currentStep >= 2 ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : currentStep === 1 ? (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-amber-600 animate-pulse">FIAT</span>
                      <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                  )}
                </div>

                {/* Account Details for Deposit - Mini View */}
                {currentStep === 1 && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-2 p-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-200 dark:border-amber-700 shadow-inner"
                    >
                        <div className="grid grid-cols-2 gap-2 text-[9px]">
                            <div>
                                <p className="text-slate-400 uppercase font-bold">Account</p>
                                <p className="text-slate-900 dark:text-white font-mono uppercase">002-88219-4</p>
                            </div>
                            <div>
                                <p className="text-slate-400 uppercase font-bold">Bank</p>
                                <p className="text-slate-900 dark:text-white font-medium">B. REPÚBLICA</p>
                            </div>
                        </div>
                    </motion.div>
                )}
              </motion.div>

              {/* Step 2: Platform Listening */}
              <motion.div 
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  currentStep >= 2
                    ? currentStep === 2
                      ? 'border-indigo-300 bg-indigo-50/30 dark:bg-indigo-900/20'
                      : 'border-green-200 bg-green-50/50 dark:bg-green-900/10' 
                    : 'border-slate-50 dark:border-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                      currentStep >= 2
                        ? currentStep === 2 
                          ? 'bg-indigo-100 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800'
                          : 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800' 
                        : 'bg-white border-slate-50 dark:bg-slate-800/50'
                    }`}>
                      <Zap className={`w-4 h-4 ${currentStep >= 2 ? currentStep === 2 ? 'text-indigo-600' : 'text-green-600' : 'text-slate-200'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold transition-colors ${currentStep >= 2 ? currentStep === 2 ? 'text-indigo-800 dark:text-indigo-300' : 'text-green-800 dark:text-green-300' : 'text-slate-300'}`}>
                        Listening for Deposit
                      </p>
                      <p className="text-[10px] text-slate-400">Real-time Omnibus Monitoring</p>
                    </div>
                  </div>
                  {currentStep >= 3 ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : currentStep === 2 ? (
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-4 h-4 rounded-full bg-indigo-400"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-100" />
                  )}
                </div>
              </motion.div>

              {/* Step 3: Receipt Confirmed */}
              <motion.div 
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  currentStep >= 3 
                    ? currentStep === 3
                      ? 'border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/10'
                      : 'border-green-200 bg-green-50/50 dark:bg-green-900/10' 
                    : 'border-slate-100 dark:border-slate-800'
                }`}
                animate={{ scale: currentStep === 3 ? [1, 1.01, 1] : 1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                      currentStep >= 3 
                        ? currentStep === 3 
                          ? 'bg-indigo-100 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800'
                          : 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800' 
                        : 'bg-white    border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                    }`}>
                      <CheckCircle className={`w-4 h-4 ${currentStep >= 3 ? currentStep === 3 ? 'text-indigo-600' : 'text-green-600' : 'text-slate-300'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold transition-colors ${currentStep >= 3 ? currentStep === 3 ? 'text-indigo-800 dark:text-indigo-300' : 'text-green-800 dark:text-green-300' : 'text-slate-400'}`}>
                        Running Compliance Checks
                      </p>
                      <p className="text-[10px] text-slate-400">Verificación de cumplimiento</p>
                    </div>
                  </div>
                  {currentStep >= 4 ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : currentStep === 3 ? (
                    <Loader2 className="w-4 h-4 text-indigo-500 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                  )}
                </div>
              </motion.div>

              {/* Step 4: Minting PUSD */}
              <motion.div 
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  currentStep >= 4 
                    ? currentStep === 4
                      ? 'border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/10'
                      : 'border-green-200 bg-green-50/50 dark:bg-green-900/10' 
                    : 'border-slate-100 dark:border-slate-800'
                }`}
                animate={{ scale: currentStep === 4 ? [1, 1.01, 1] : 1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                      currentStep >= 4 
                        ? currentStep === 4 
                          ? 'bg-indigo-100 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800'
                          : 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800' 
                        : 'bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                    }`}>
                      <Coins className={`w-4 h-4 ${currentStep >= 4 ? currentStep === 4 ? 'text-indigo-600' : 'text-green-600' : 'text-slate-300'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold transition-colors ${currentStep >= 4 ? currentStep === 4 ? 'text-indigo-800 dark:text-indigo-300' : 'text-green-800 dark:text-green-300' : 'text-slate-400'}`}>
                        Mint 5,000,000.00 PUSD
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="inline-flex items-center gap-0.5 px-1 py-px bg-indigo-50 dark:bg-indigo-900/20 rounded border border-indigo-200/50 dark:border-indigo-700/30">
                            <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                            <span className={`text-[8px] font-medium ${currentStep >= 4 ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-400'}`}>@pantaleon.bi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {currentStep >= 5 ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : currentStep === 4 ? (
                    <Loader2 className="w-4 h-4 text-indigo-500 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                  )}
                </div>
              </motion.div>

              {/* Step 5: Transfer Complete */}
              <motion.div 
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  currentStep >= 5 
                    ? 'border-green-200 bg-green-50/50 dark:bg-green-900/10' 
                    : currentStep === 4 ? 'border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/10' : 'border-slate-100 dark:border-slate-800'
                }`}
                animate={{ scale: currentStep === 5 ? [1, 1.01, 1] : 1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                      currentStep >= 5 ? 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800' : currentStep === 4 ? 'bg-indigo-100 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800' : 'bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-700'
                    }`}>
                      <Wallet className={`w-4 h-4 ${currentStep >= 5 ? 'text-green-600' : currentStep === 4 ? 'text-indigo-600' : 'text-slate-300'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold transition-colors ${currentStep >= 5 ? 'text-green-800 dark:text-green-300' : currentStep === 4 ? 'text-indigo-800 dark:text-indigo-300' : 'text-slate-400'}`}>
                        Transfer Complete
                      </p>
                      <p className="text-[10px] text-slate-400">Disponibilidad Inmediata</p>
                    </div>
                  </div>
                  {currentStep >= 5 ? (
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-green-600">5M PUSD</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  ) : currentStep >= 4 ? (
                    <Loader2 className="w-4 h-4 text-indigo-500 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                  )}
                </div>
              </motion.div>
            </div>

            {/* Status Footer */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800">
              <div className={`p-2 rounded-xl text-center transition-all duration-500 ${
                currentStep >= 5 
                  ? 'bg-green-100 dark:bg-green-900/20' 
                  : 'bg-slate-100 dark:bg-slate-800'
              }`}>
                <p className={`text-xs font-bold uppercase ${
                  currentStep >= 5 ? 'text-green-700 dark:text-green-400' : 'text-slate-500'
                }`}>
                  {currentStep >= 5 ? '✓ FONDEO COMPLETADO EN DESTINO' : 'Sincronizando Nodos...'}
                </p>
              </div>
            </div>
        </div>
    );
};
