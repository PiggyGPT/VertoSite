import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, RefreshCw } from 'lucide-react';

export const RouteLogic = ({ status }: { status: 'calculating' | 'signing' | 'executing' | 'complete' }) => {
    const isExecuting = status === 'executing' || status === 'complete';
    const isComplete = status === 'complete';
    const isCalculating = status === 'calculating';

    return (
    <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md z-20 flex flex-col font-mono text-xs overflow-hidden">
      {/* Integrated Status Bar for Terminal */}
      <div className="h-10 flex justify-between items-center px-6 pt-2 shrink-0">
          <span className="text-xs font-semibold text-white/90">9:41</span>
          <div className="flex gap-1.5 items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
              <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
          </div>
      </div>
      
      {/* Header */}
      <div className="p-6 pb-2">
        <div className="flex items-center gap-2 mb-1" style={{ color: 'var(--albor-blue)' }}>
            {isComplete ? <CheckCircle className="w-4 h-4 text-green-500" /> : <RefreshCw className="w-4 h-4 animate-spin" />}
            <span className="font-bold tracking-wider">{isComplete ? 'SETTLEMENT COMPLETE' : isCalculating ? 'CALCULATING ROUTE' : 'EXECUTING ROUTE'}</span>
        </div>
        <div className="h-0.5 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
            <motion.div 
                className="h-full"
                style={{ backgroundColor: 'var(--albor-blue)' }}
                initial={{ width: "0%" }}
                animate={{ width: isComplete ? "100%" : isExecuting ? "66%" : "10%" }}
                transition={{ duration: 0.5 }}
            />
        </div>
      </div>
      
      {/* Route Steps */}
      <div className="px-6 space-y-6 relative flex-grow pt-4">
        <div className="absolute left-[35px] top-6 bottom-12 w-0.5 bg-slate-800" />
        
        {/* Step 1 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} className="relative pl-8">
          <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
              {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "1"}
          </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-blue-400">INPUT:</span> <span className="text-white">SEPA_INSTANT</span>
            <div className="text-slate-400 mt-1">€60.00 EUR → Monerium IBAN</div>
          </div>
        </motion.div>
  
        {/* Step 2 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 0.4 }} className="relative pl-8">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 delay-300 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
               {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "2"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-yellow-400">MINT:</span> <span className="text-white">EURe (On-Chain)</span>
            <div className="text-slate-400 mt-1">Provider: Monerium EMI</div>
          </div>
        </motion.div>
  
        {/* Step 3 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 0.8 }} className="relative pl-8">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 delay-700 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
              {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "3"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-green-400">SWAP:</span> <span className="text-white">EURE → USDC → BSD</span>
            <div className="text-slate-400 mt-1">Pool: Albor Institutional V2</div>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 1.2 }} className="relative pl-8">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
              {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "4"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="text-cyan-400">TRANSFER:</span> <span className="text-white">→ Maria Silva</span>
            <div className="text-slate-400 mt-1">1,200.00 BSD</div>
          </div>
        </motion.div>

        {/* Step 5 */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: status === 'signing' ? 0.3 : 1 }} transition={{ delay: 1.6 }} className="relative pl-8 pb-4">
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isExecuting ? 'bg-green-500 border-green-500' : 'bg-slate-800 border-slate-600'}`}>
               {isExecuting ? <CheckCircle className="w-4 h-4 text-white" /> : "5"}
            </div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700">
             <span className="text-purple-400">WITHDRAW:</span> <span className="text-white">PIX Settlement</span>
             <div className="text-slate-400 mt-1">Instant BRL Credit</div>
          </div>
        </motion.div>
      </div>
    </div>
    );
};
