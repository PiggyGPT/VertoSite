import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Database, Link, ArrowRight, ShieldCheck, FileText, Globe } from 'lucide-react';
import { MintingPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel3_ReconciliationReport: React.FC<MintingPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden">
            {/* Header */}
            <PanelHeader 
                title="RECONCILIATION REPORT" 
                subtitle="Daily Settlement Audit" 
                color="indigo" 
                rightElement={
                    <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-[9px] font-bold text-green-500 uppercase tracking-wider animate-pulse">
                        Verified
                    </div>
                }
            />

            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                {/* Audit Summary Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-indigo-600" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Compliance Status</span>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">AUDIT-READY</span>
                    </div>

                    <div className="space-y-3">
                        {/* Entry 1: Bank Ledger */}
                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Database className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="text-[9px] font-bold text-slate-400 uppercase">Bank Core Ledger</span>
                                </div>
                                <span className="text-[9px] font-mono text-slate-400">REF: LN-8821-DEP</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Omnibus Deposit</p>
                                    <p className="text-[10px] text-slate-500">A/C: 002-88219-4-001</p>
                                </div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">$5,000,000.00 <span className="text-[10px] text-slate-400 font-medium">USD</span></p>
                            </div>
                        </motion.div>

                        {/* Reconciling Link */}
                        <div className="flex justify-center relative my--2">
                            <div className="h-4 w-px bg-indigo-200 dark:bg-indigo-800" />
                            <motion.div 
                                animate={{ y: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full p-1 border-2 border-white dark:border-slate-800 z-10 shadow-sm"
                            >
                                <Link className="w-2.5 h-2.5 text-white" />
                            </motion.div>
                            <div className="h-4 w-px bg-indigo-200 dark:bg-indigo-800" />
                        </div>

                        {/* Entry 2: Blockchain Transaction */}
                        <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="p-3 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Globe className="w-3.5 h-3.5 text-indigo-400" />
                                    <span className="text-[9px] font-bold text-indigo-400 uppercase">Blockchain Hash</span>
                                </div>
                                <span className="text-[9px] font-mono text-indigo-400">0x8f2...e4a1</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs font-bold text-indigo-900 dark:text-indigo-300">PUSD Minting</p>
                                    <p className="text-[10px] text-indigo-600/70 dark:text-indigo-400/70">To: @pantaleon.bi</p>
                                </div>
                                <p className="text-sm font-bold text-indigo-900 dark:text-indigo-300">5,000,000.00 <span className="text-[10px] text-indigo-400 font-medium">PUSD</span></p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Audit Evidence */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <FileText className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase">Settlement MT103</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">SWIFT Proof</span>
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Database className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase">Reserve Ratio</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-indigo-600">1.00 : 1.00</span>
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto">
                <button 
                  onClick={() => {
                      setAnimationState(s => ({ ...s, reconciled: true }));
                      setTimeout(onNext, 1000);
                  }}
                  className="w-full py-3 bg-slate-900 dark:bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  Download Audit Log <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
