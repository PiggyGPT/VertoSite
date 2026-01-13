import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileFrame } from '../ui/mobile-frame';
import { Panel0_BankSSO } from './panels/Panel0_BankSSO';
import { Panel1_AccountReveal } from './panels/Panel1_AccountReveal';
import { Panel2_KeyRecovery } from './panels/Panel2_KeyRecovery';
import { KeysState } from './types';

export const KeysVisual = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [animationState, setAnimationState] = useState<KeysState>({
    // Panel 0: Bank SSO
    loginState: 'idle',
    showSSOKey: false,
    
    // Panel 2: (NEW Panel 1) Key Recovery
    showKeyDiagram: false,
    activeKeys: [],
    showRecoveryBadge: false,
    showWalletAccess: false,
    deviceStatus: 'recognizing',

    // Panel 1: (NEW Panel 2) Account Reveal
    showExistingAccount: false,
    showAlborAccount: false,
    showDeviceKey: false,
  });

  // Animation Orchestration
  useEffect(() => {
    if (currentPanel === 0) {
      // Reset and start SSO login animation
      setAnimationState({
        loginState: 'idle',
        showSSOKey: false,
        showExistingAccount: false,
        showAlborAccount: false,
        showDeviceKey: false,
        showKeyDiagram: false,
        activeKeys: [],
        showRecoveryBadge: false,
        showWalletAccess: false,
        deviceStatus: 'recognizing'
      });

      const timers = [
        // Start typing credentials
        setTimeout(() => setAnimationState(s => ({ ...s, loginState: 'typing' })), 1000),
        // Authentication in progress
        setTimeout(() => setAnimationState(s => ({ ...s, loginState: 'authenticating' })), 2500),
        // Success
        setTimeout(() => setAnimationState(s => ({ ...s, loginState: 'success' })), 4000),
        // Show SSO Key
        setTimeout(() => setAnimationState(s => ({ ...s, showSSOKey: true })), 4500),
        // Advance to Recovery Panel (Panel 2)
        setTimeout(() => setCurrentPanel(2), 6500)
      ];
      return () => timers.forEach(clearTimeout);
    } 
    else if (currentPanel === 2) {
      // NEW PANEL 1: Recovery Flow
      const timers = [
        // Show diagram
        setTimeout(() => setAnimationState(s => ({ ...s, showKeyDiagram: true })), 500),
        // Attempt recognizing device... fail
        setTimeout(() => setAnimationState(s => ({ ...s, deviceStatus: 'unrecognized' })), 1500),
        // Activate SSO Key (already have from login)
        setTimeout(() => setAnimationState(s => ({ ...s, activeKeys: [0] })), 2000),
        // Activate Bank Recovery Key (as alternative to Device Key)
        setTimeout(() => setAnimationState(s => ({ ...s, activeKeys: [0, 2] })), 3500),
        // Show recovery badge
        setTimeout(() => {
           setAnimationState(s => ({ ...s, showRecoveryBadge: true, deviceStatus: 'authorized' }));
        }, 4500),
        // Show access granted
        setTimeout(() => setAnimationState(s => ({ ...s, showWalletAccess: true })), 5500),
        // Advance to Account Panel (Panel 1)
        setTimeout(() => setCurrentPanel(1), 8500)
      ];
      return () => timers.forEach(clearTimeout);
    }
    else if (currentPanel === 1) {
      // NEW PANEL 2: Account Page
      const timers = [
        // Show accounts
        setTimeout(() => setAnimationState(s => ({ ...s, showExistingAccount: true })), 500),
        setTimeout(() => setAnimationState(s => ({ ...s, showAlborAccount: true })), 1500),
        // Finally, register/highlight device key on this new device
        setTimeout(() => setAnimationState(s => ({ ...s, showDeviceKey: true })), 3500),
        // Loop back to Panel 0
        setTimeout(() => setCurrentPanel(0), 7500)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentPanel]);

  const getStatusBarColor = () => {
    switch (currentPanel) {
      case 0: return "bg-green-700"; // Bank SSO
      case 2: return "bg-indigo-900"; // Recovery
      case 1: return "bg-green-700"; // Account
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
              <Panel0_BankSSO
                isActive={true}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(2)}
              />
            )}
            {currentPanel === 2 && (
              <Panel2_KeyRecovery
                isActive={true}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(1)}
              />
            )}
            {currentPanel === 1 && (
              <Panel1_AccountReveal
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
