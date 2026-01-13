import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileFrame } from '../ui/mobile-frame';
import { Panel0_Authorization } from './panels/Panel0_Authorization';
import { Panel1_Settlement } from './panels/Panel1_Settlement';
import { Panel2_FeeDistribution } from './panels/Panel2_FeeDistribution';
import { RouterState } from './types';

export const RouterVisual = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [animationState, setAnimationState] = useState<RouterState>({
    // Panel 0: Authorization
    showBankNodes: false,
    authStep: 'idle',
    showDirectConnection: false,
    
    // Panel 1: Settlement
    showLedger: false,
    confirmations: 0,
    showSyncStatus: false,
    
    // Panel 2: Fee Distribution
    showBreakdown: false,
    feesDistributed: false,
    showSuccess: false
  });

  // Animation Orchestration
  useEffect(() => {
    if (currentPanel === 0) {
      // Reset and start authorization animation
      setAnimationState({
        showBankNodes: false,
        authStep: 'idle',
        showDirectConnection: false,
        showLedger: false,
        confirmations: 0,
        showSyncStatus: false,
        showBreakdown: false,
        feesDistributed: false,
        showSuccess: false
      });

      const timers = [
        // Show bank nodes
        setTimeout(() => setAnimationState(s => ({ ...s, showBankNodes: true })), 500),
        // Send authorization request
        setTimeout(() => setAnimationState(s => ({ ...s, authStep: 'request_sent' })), 1500),
        // Bank B signing
        setTimeout(() => setAnimationState(s => ({ ...s, authStep: 'bank_b_signing' })), 3000),
        // Authorized
        setTimeout(() => setAnimationState(s => ({ ...s, authStep: 'authorized' })), 4500),
        // Show direct connection highlight
        setTimeout(() => setAnimationState(s => ({ ...s, showDirectConnection: true })), 5000),
        // Advance to Panel 1
        setTimeout(() => setCurrentPanel(1), 7000)
      ];
      return () => timers.forEach(clearTimeout);
    } 
    else if (currentPanel === 1) {
      const timers = [
        // Show ledger
        setTimeout(() => setAnimationState(s => ({ ...s, showLedger: true })), 500),
        // Block confirmations
        setTimeout(() => setAnimationState(s => ({ ...s, confirmations: 1 })), 1200),
        setTimeout(() => setAnimationState(s => ({ ...s, confirmations: 2 })), 2000),
        setTimeout(() => setAnimationState(s => ({ ...s, confirmations: 3 })), 2800),
        // Show sync status
        setTimeout(() => setAnimationState(s => ({ ...s, showSyncStatus: true })), 3500),
        // Advance to Panel 2
        setTimeout(() => setCurrentPanel(2), 5500)
      ];
      return () => timers.forEach(clearTimeout);
    }
    else if (currentPanel === 2) {
      const timers = [
        // Show breakdown
        setTimeout(() => setAnimationState(s => ({ ...s, showBreakdown: true })), 500),
        // Distribute fees
        setTimeout(() => setAnimationState(s => ({ ...s, feesDistributed: true })), 2000),
        // Show success
        setTimeout(() => setAnimationState(s => ({ ...s, showSuccess: true })), 3000),
        // Loop back to Panel 0
        setTimeout(() => setCurrentPanel(0), 6000)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentPanel]);

  const getStatusBarColor = () => {
    switch (currentPanel) {
      case 0: return "bg-purple-900";
      case 1: return "bg-indigo-900";
      case 2: return "bg-amber-700";
      default: return "bg-slate-100 dark:bg-slate-800";
    }
  };

  return (
    <div className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center p-4">
      <MobileFrame statusBarColor={getStatusBarColor()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPanel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            {currentPanel === 0 && (
              <Panel0_Authorization
                isActive={true}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(1)}
              />
            )}
            {currentPanel === 1 && (
              <Panel1_Settlement
                isActive={true}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(2)}
              />
            )}
            {currentPanel === 2 && (
              <Panel2_FeeDistribution
                isActive={true}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(0)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </MobileFrame>
    </div>
  );
};
