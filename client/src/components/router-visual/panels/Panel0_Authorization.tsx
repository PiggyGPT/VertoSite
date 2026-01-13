import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, ArrowRight, CheckCircle, Loader2, Shield, Landmark, Zap } from 'lucide-react';
import { RouterPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel0_Authorization: React.FC<RouterPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
  const { showBankNodes, authStep, showDirectConnection } = animationState;

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <PanelHeader 
        title="INTERBANK ROUTER" 
        subtitle="Direct Authorization" 
        color="purple" 
      />

      {/* Main Content */}
      <div className="flex-grow p-4 flex flex-col justify-center">
        {/* Bank Nodes Visualization */}
        <AnimatePresence>
          {showBankNodes && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {/* Bank A Node */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-3 rounded-xl border-2 transition-all duration-500 ${
                  authStep !== 'idle' 
                    ? 'border-green-200 bg-green-50/50 dark:bg-green-900/10 dark:border-green-800'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Server className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Banco Industrial</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Sending Bank Node</p>
                  </div>
                  {authStep !== 'idle' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded-full"
                    >
                      <span className="text-[8px] font-bold text-green-700 dark:text-green-300">SENDER</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Connection Line */}
              <div className="relative h-12 flex items-center justify-center">
                <motion.div
                  className={`absolute w-0.5 h-full transition-colors duration-500 ${
                    authStep === 'request_sent' || authStep === 'bank_b_signing'
                      ? 'bg-gradient-to-b from-green-400 via-purple-400 to-blue-400'
                      : authStep === 'authorized'
                        ? 'bg-green-400'
                        : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                />
                
                {/* Request Animation */}
                <AnimatePresence>
                  {authStep === 'request_sent' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 20 }}
                      exit={{ opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="absolute z-10"
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-3 h-3 text-white rotate-90" />
                      </div>
                    </motion.div>
                  )}
                  {authStep === 'bank_b_signing' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute z-10"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                      </div>
                    </motion.div>
                  )}
                  {authStep === 'authorized' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      className="absolute z-10"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bank B Node */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`p-3 rounded-xl border-2 transition-all duration-500 ${
                  authStep === 'bank_b_signing' || authStep === 'authorized'
                    ? 'border-blue-200 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-800'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Banco República</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Receiving Bank Node</p>
                  </div>
                  {authStep === 'authorized' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                    >
                      <span className="text-[8px] font-bold text-blue-700 dark:text-blue-300">RECEIVER</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Direct Connection Highlight */}
        <AnimatePresence>
          {showDirectConnection && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl"
            >
              <div className="flex items-center gap-2 justify-center">
                <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300">
                  Direct Bank-to-Bank • No Central Party
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status Footer */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-700">
        <div className={`p-2 rounded-xl text-center transition-all duration-500 ${
          authStep === 'authorized'
            ? 'bg-green-100 dark:bg-green-900/20'
            : 'bg-slate-100 dark:bg-slate-800'
        }`}>
          <p className={`text-xs font-bold uppercase ${
            authStep === 'authorized' ? 'text-green-700 dark:text-green-400' : 'text-slate-500'
          }`}>
            {authStep === 'authorized' 
              ? '✓ TX AUTHORIZED BY BOTH BANKS' 
              : authStep === 'bank_b_signing'
                ? 'Awaiting Bank B Signature...'
                : authStep === 'request_sent'
                  ? 'Authorization Request Sent...'
                  : 'Interbank Channel Ready'
            }
          </p>
        </div>
      </div>
    </div>
  );
};
