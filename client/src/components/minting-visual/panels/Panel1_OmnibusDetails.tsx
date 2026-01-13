import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Copy, Info, CheckCircle, ArrowRight, Banknote } from 'lucide-react';
import { MintingPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel1_OmnibusDetails: React.FC<MintingPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden">
            {/* Header - BI PANAMA */}
            <PanelHeader 
                title="BANCO REPÚBLICA PANAMÁ" 
                subtitle="Deposit Instructions" 
                color="indigo" 
            />

            {/* Content */}
            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                {/* Intro Message */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 p-3 rounded-xl flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-800/50 flex items-center justify-center flex-shrink-0">
                        <Info className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-amber-900 dark:text-amber-300">Reserve Funding Required</p>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400 mt-0.5">Deposit loan funds into this omnibus account to trigger PUSD minting.</p>
                    </div>
                </div>

                {/* Account Details Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="p-4 border-b border-slate-50 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Landmark className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Beneficiary Bank</span>
                        </div>
                        <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">BANCO REPÚBLICA PANAMÁ</span>
                    </div>
                    
                    <div className="p-4 space-y-4">
                        {/* Account Number */}
                        <div>
                            <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Omnibus Account Number</p>
                            <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                <span className="text-sm font-mono font-bold text-slate-900 dark:text-white">002-88219-4-001</span>
                                <Copy className="w-3.5 h-3.5 text-slate-300" />
                            </div>
                        </div>

                        {/* SWIFT / Routing */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">SWIFT Code</p>
                                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">REPPGTPA</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Currency</p>
                                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">USD (Cash)</span>
                                </div>
                            </div>
                        </div>

                        {/* Reference */}
                        <div>
                            <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Transfer Reference</p>
                            <div className="flex items-center justify-between p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300">ALB-RESERVE-CR8821</span>
                                <Copy className="w-3.5 h-3.5 text-indigo-300" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Amount to Deposit */}
                <div className="p-3 bg-indigo-600 rounded-xl shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Banknote className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-[9px] text-indigo-200 font-bold uppercase">Funding Amount</p>
                            <p className="text-sm font-bold text-white">$5,000,000.00 USD</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <button 
                  onClick={() => {
                    setAnimationState(s => ({ ...s, omnibusConfirmed: true }));
                    setTimeout(onNext, 500);
                  }}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  Confirm Deposit Transfer <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
