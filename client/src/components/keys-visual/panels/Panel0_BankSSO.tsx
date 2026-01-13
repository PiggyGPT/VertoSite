import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyRound, Fingerprint, CheckCircle, Loader2, Lock } from 'lucide-react';
import { KeysPanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

export const Panel0_BankSSO: React.FC<KeysPanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
  const { loginState, showSSOKey } = animationState;

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Bank Header */}
      <PanelHeader 
        title="BANCO INDUSTRIAL" 
        subtitle="Banca Digital" 
        color="green" 
      />

      {/* Login Form Container */}
      <div className="flex-grow p-4 flex flex-col justify-center">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-lg border border-slate-100 dark:border-slate-700">
          {/* Login Title */}
          <div className="text-center mb-5">
            <div className="w-12 h-12 mx-auto mb-3 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Inicio de Sesión</h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Ingrese sus credenciales</p>
          </div>

          {/* Username Field */}
          <div className="mb-3">
            <label className="text-[10px] font-medium text-slate-600 dark:text-slate-400 mb-1 block">Usuario</label>
            <motion.div 
              className={`relative h-9 rounded-lg border px-3 flex items-center transition-colors ${
                loginState !== 'idle' 
                  ? 'border-green-300 bg-green-50/50 dark:bg-green-900/10 dark:border-green-700'
                  : 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700'
              }`}
            >
              <AnimatePresence mode="wait">
                {loginState !== 'idle' && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    className="text-xs text-slate-800 dark:text-slate-200 font-medium"
                  >
                    grupo.pantaleon
                  </motion.span>
                )}
              </AnimatePresence>
              {loginState !== 'idle' && (
                <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
              )}
            </motion.div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="text-[10px] font-medium text-slate-600 dark:text-slate-400 mb-1 block">Contraseña</label>
            <motion.div 
              className={`relative h-9 rounded-lg border px-3 flex items-center transition-colors ${
                loginState !== 'idle' 
                  ? 'border-green-300 bg-green-50/50 dark:bg-green-900/10 dark:border-green-700'
                  : 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700'
              }`}
            >
              <AnimatePresence mode="wait">
                {loginState !== 'idle' && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    className="text-xs text-slate-600 dark:text-slate-400 tracking-widest"
                  >
                    ••••••••
                  </motion.span>
                )}
              </AnimatePresence>
              {loginState !== 'idle' && (
                <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
              )}
            </motion.div>
          </div>

          {/* Login Button */}
          <motion.button
            className={`w-full h-10 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              loginState === 'authenticating' || loginState === 'success'
                ? 'bg-green-600 text-white'
                : loginState === 'typing'
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-200 dark:bg-slate-600 text-slate-400 dark:text-slate-500'
            }`}
            animate={loginState === 'authenticating' ? { scale: [1, 0.98, 1] } : {}}
          >
            {loginState === 'authenticating' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verificando...</span>
              </>
            ) : loginState === 'success' ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Autenticado</span>
              </>
            ) : (
              <span>Iniciar Sesión</span>
            )}
          </motion.button>
        </div>
      </div>

      {/* Sticky Bottom SSO Key Indicator */}
      <div className="p-4 pt-0">
        <AnimatePresence>
          {showSSOKey && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-800/50 flex items-center justify-center"
                  animate={{ boxShadow: ['0 0 0 0 rgba(251, 191, 36, 0)', '0 0 0 8px rgba(251, 191, 36, 0.3)', '0 0 0 0 rgba(251, 191, 36, 0)'] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <KeyRound className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-amber-800 dark:text-amber-300">Key 1: SSO Session</p>
                  <p className="text-[10px] text-amber-600 dark:text-amber-400">Controlled by Bank Authentication</p>
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
