import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, CheckCircle, Server, Blocks, RefreshCw, Shield } from 'lucide-react';
import { RouterPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel1_Settlement: React.FC<RouterPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
  const { showLedger, confirmations, showSyncStatus } = animationState;

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <PanelHeader 
        title="SHARED LEDGER" 
        subtitle="Blockchain Settlement" 
        color="indigo" 
      />

      {/* Main Content */}
      <div className="flex-grow p-4 space-y-3">
        {/* Ledger Visualization */}
        <AnimatePresence>
          {showLedger && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-3"
            >
              {/* Block Chain Visual */}
              <div className="relative p-3 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-xl">
                <div className="flex items-center justify-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: confirmations > i ? 1 : 0.3, 
                        scale: confirmations > i ? 1 : 0.8 
                      }}
                      transition={{ delay: i * 0.3, type: "spring" }}
                      className={`relative w-12 h-12 rounded-lg flex items-center justify-center ${
                        confirmations > i 
                          ? 'bg-white/20' 
                          : 'bg-white/5 border border-dashed border-white/20'
                      }`}
                    >
                      <Blocks className={`w-5 h-5 ${confirmations > i ? 'text-white' : 'text-white/30'}`} />
                      {confirmations > i && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-2">
                  <p className="text-[10px] text-indigo-200">
                    Block Confirmations: <span className="font-bold text-white">{confirmations}/3</span>
                  </p>
                </div>
              </div>

              {/* Both Banks Synced */}
              <div className="grid grid-cols-2 gap-2">
                {/* Bank A Ledger */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Server className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Banco Industrial</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3 h-3 text-slate-400" />
                    <span className="text-[9px] text-slate-500 dark:text-slate-400">Local Ledger Copy</span>
                  </div>
                  {showSyncStatus && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3 text-green-500" />
                      <span className="text-[9px] font-medium text-green-600 dark:text-green-400">Synced</span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Bank B Ledger */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Banco República</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3 h-3 text-slate-400" />
                    <span className="text-[9px] text-slate-500 dark:text-slate-400">Local Ledger Copy</span>
                  </div>
                  {showSyncStatus && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3 text-green-500" />
                      <span className="text-[9px] font-medium text-green-600 dark:text-green-400">Synced</span>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Settlement Status */}
              {confirmations >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold text-white">Settlement Finality Achieved</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
