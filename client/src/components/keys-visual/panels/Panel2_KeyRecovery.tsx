import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyRound, Smartphone, Cloud, CheckCircle, ShieldCheck, Wallet, Landmark } from 'lucide-react';
import { KeysPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel2_KeyRecovery: React.FC<KeysPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
  const { showKeyDiagram, activeKeys, showRecoveryBadge, showWalletAccess, deviceStatus } = animationState;

  const keys = [
    { id: 0, icon: KeyRound, label: 'Bank SSO Key', sublabel: 'Level 1 Auth', color: 'amber' },
    { id: 1, icon: Smartphone, label: 'Device Key', sublabel: 'Not Registered', color: 'blue' },
    { id: 2, icon: Cloud, label: 'Bank Recovery Key', sublabel: 'Bank Private Cloud', color: 'purple' },
  ];

  const getKeyColors = (id: number, color: string) => {
    const isKeyActive = activeKeys.includes(id);
    const isKeyError = id === 1 && deviceStatus === 'unrecognized';
    
    const colorMap: Record<string, { bg: string; border: string; icon: string; text: string; glow: string }> = {
      amber: {
        bg: isKeyActive ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-slate-100 dark:bg-slate-800',
        border: isKeyActive ? 'border-amber-300 dark:border-amber-700' : 'border-slate-200 dark:border-slate-700',
        icon: isKeyActive ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400',
        text: isKeyActive ? 'text-amber-800 dark:text-amber-300' : 'text-slate-500',
        glow: 'rgba(251, 191, 36, 0.4)'
      },
      blue: {
        bg: isKeyError ? 'bg-red-50 dark:bg-red-900/10' : (isKeyActive ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-slate-100 dark:bg-slate-800'),
        border: isKeyError ? 'border-red-200 dark:border-red-900/30' : (isKeyActive ? 'border-blue-300 dark:border-blue-700' : 'border-slate-200 dark:border-slate-700'),
        icon: isKeyError ? 'text-red-400' : (isKeyActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'),
        text: isKeyError ? 'text-red-800 dark:text-red-400' : (isKeyActive ? 'text-blue-800 dark:text-blue-300' : 'text-slate-500'),
        glow: 'rgba(59, 130, 246, 0.4)'
      },
      purple: {
        bg: isKeyActive ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-slate-100 dark:bg-slate-800',
        border: isKeyActive ? 'border-purple-300 dark:border-purple-700' : 'border-slate-200 dark:border-slate-700',
        icon: isKeyActive ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400',
        text: isKeyActive ? 'text-purple-800 dark:text-purple-300' : 'text-slate-500',
        glow: 'rgba(168, 85, 247, 0.4)'
      }
    };
    return colorMap[color];
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Bank Header */}
      <PanelHeader 
        title="ALBOR KEY MANAGEMENT" 
        subtitle="Bank Recovery Protocol" 
        color="indigo" 
      />

      {/* Key Architecture Diagram */}
      <div className="flex-grow p-4 space-y-3 overflow-y-auto">
        {/* Status Messaging */}
        <div className="text-center mb-2">
           <AnimatePresence mode="wait">
             {deviceStatus === 'recognizing' && (
               <motion.div key="recognizing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                 <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Synchronizing Session...</p>
                 <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">Checking device registration</p>
               </motion.div>
             )}
             {deviceStatus === 'unrecognized' && (
               <motion.div key="unrecognized" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-red-600 dark:text-red-400">
                 <p className="text-xs font-bold">Device Not Recognized</p>
                 <p className="text-[10px] opacity-80">Local key not found</p>
               </motion.div>
             )}
             {deviceStatus === 'authorized' && (
               <motion.div key="authorized" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-green-600 dark:text-green-400">
                 <p className="text-xs font-bold">Sovereign Recovery Success</p>
                 <p className="text-[10px] opacity-80">Bank granted emergency access</p>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Keys Grid */}
        <AnimatePresence>
          {showKeyDiagram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2"
            >
              {keys.map((key, index) => {
                const colors = getKeyColors(key.id, key.color);
                const isKeyActive = activeKeys.includes(key.id);
                const isKeyError = key.id === 1 && deviceStatus === 'unrecognized';
                const Icon = key.icon;
                
                return (
                  <motion.div
                    key={key.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${colors.bg} ${colors.border}`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg}`}
                        animate={isKeyActive ? { 
                          boxShadow: [`0 0 0 0 transparent`, `0 0 0 6px ${colors.glow}`, `0 0 0 0 transparent`]
                        } : (isKeyError ? {
                          scale: [1, 1.05, 1],
                        } : {})}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <Icon className={`w-5 h-5 ${colors.icon}`} />
                      </motion.div>
                      <div className="flex-grow">
                        <p className={`text-xs font-bold ${colors.text}`}>{key.label}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">
                          {key.sublabel}
                        </p>
                      </div>
                      {isKeyActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                      {isKeyError && (
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                           <span className="text-[10px] font-bold text-red-500 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded-full">!</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Bottom Recovery Success Card */}
      <div className="p-4 pt-0">
        <AnimatePresence>
          {showWalletAccess && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-800/50 flex items-center justify-center"
                  animate={{ boxShadow: ['0 0 0 0 rgba(79, 70, 229, 0)', '0 0 0 8px rgba(79, 70, 229, 0.3)', '0 0 0 0 rgba(79, 70, 229, 0)'] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-indigo-800 dark:text-indigo-300">2-of-3 Key Access Granted</p>
                  <p className="text-[10px] text-indigo-600 dark:text-indigo-400">Signing via Bank Recovery Protocol</p>
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
