import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, CreditCard, Smartphone, CheckCircle, Coins } from 'lucide-react';
import { KeysPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel1_AccountReveal: React.FC<KeysPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
  const { showExistingAccount, showAlborAccount, showDeviceKey } = animationState;

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Bank Header */}
      <PanelHeader 
        title="BANCO INDUSTRIAL" 
        subtitle="Mis Cuentas" 
        color="green" 
      />

      {/* Account Cards */}
      <div className="flex-grow p-4 space-y-3 overflow-y-auto">
        {/* Welcome Message */}
        <div className="text-center mb-2">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bienvenido, Grupo Pantaleon</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">Acceso restaurado exitosamente</p>
        </div>

        {/* Existing Checking Account */}
        <AnimatePresence>
          {showExistingAccount && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Cuenta Corriente</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">****7890</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">$12,500.00</p>
                  <p className="text-[10px] text-green-600 dark:text-green-400">USD</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* NEW Albor Account - Slides In */}
        <AnimatePresence>
          {showAlborAccount && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative overflow-hidden"
            >
               {/* NEW Badge */}
               <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-1 -right-1 z-10"
              >
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[8px] font-bold rounded-full shadow-lg">
                  ACTIVA
                </span>
              </motion.div>

              <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-xl p-4 shadow-lg border border-indigo-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <img src="/logos/svg/alborsun.svg" alt="Albor" className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-white">Cuenta Albor</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5 opacity-70" />
                      <span className="text-[10px] text-indigo-300 font-medium">@pantaleon.bi</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">50,000.00</p>
                    <p className="text-[10px] text-indigo-300">PUSD</p>
                  </div>
                </div>

                {/* Token Balance Detail */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] text-indigo-200">Sovereign Asset Vault</span>
                  </div>
                  <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Bottom Device Key Indicator */}
      <div className="p-4 pt-0">
        <AnimatePresence>
          {showDeviceKey && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center"
                  animate={{ boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 0 8px rgba(59, 130, 246, 0.3)', '0 0 0 0 rgba(59, 130, 246, 0)'] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div className="flex-grow">
                  <p className="text-xs font-bold text-blue-800 dark:text-blue-300">Key 2: Device Key Registered</p>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400">Local key secured on this phone</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
