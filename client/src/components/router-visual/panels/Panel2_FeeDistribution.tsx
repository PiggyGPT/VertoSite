import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, ArrowRight, CheckCircle, Wallet, Landmark, Zap, Coins } from 'lucide-react';
import { RouterPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel2_FeeDistribution: React.FC<RouterPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
  const { showBreakdown, feesDistributed, showSuccess } = animationState;

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <PanelHeader 
        title="FEE DISTRIBUTION" 
        subtitle="Atomic Settlement" 
        color="amber" 
      />

      {/* Main Content */}
      <div className="flex-grow p-4 space-y-3">
        {/* Transaction Breakdown */}
        <AnimatePresence>
          {showBreakdown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              {/* Principal Amount */}
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <Coins className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Principal</p>
                      <p className="text-[10px] text-slate-500">Transaction Amount</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">$10,000.00</span>
                </div>
              </div>

              {/* Fee Breakdown */}
              <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                <p className="text-[10px] font-bold text-amber-800 dark:text-amber-300 mb-2 uppercase">Interchange Fees</p>
                
                {/* Sender Bank Fee */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`flex items-center justify-between p-2 rounded-lg mb-2 transition-all ${
                    feesDistributed 
                      ? 'bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
                      : 'bg-white/50 dark:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Landmark className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">Banco Industrial</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-500">0.25%</span>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">$25.00</span>
                    {feesDistributed && <CheckCircle className="w-3.5 h-3.5 text-green-500" />}
                  </div>
                </motion.div>

                {/* Receiver Bank Fee */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`flex items-center justify-between p-2 rounded-lg transition-all ${
                    feesDistributed 
                      ? 'bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
                      : 'bg-white/50 dark:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Landmark className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">Banco República</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-500">0.25%</span>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">$25.00</span>
                    {feesDistributed && <CheckCircle className="w-3.5 h-3.5 text-green-500" />}
                  </div>
                </motion.div>
              </div>

              {/* Atomic Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-2 p-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg"
              >
                <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300">
                  All settled atomically in single TX
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Interchange Revenue Captured</p>
                  <p className="text-[10px] text-green-100">Both banks credited instantly</p>
                </div>
                <CheckCircle className="w-6 h-6 text-white ml-auto" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="flex items-center justify-center gap-2">
          <Wallet className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[10px] text-slate-500 dark:text-slate-400">
            Fees routed to <span className="font-bold text-slate-700 dark:text-slate-300">Bank Treasury Wallets</span>
          </span>
        </div>
      </div>
    </div>
  );
};
