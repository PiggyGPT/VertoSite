import React, { useState, useEffect } from 'react';
import { MobileFrame } from '../ui/mobile-frame';
import { Panel0_Selection } from './panels/Panel0_Selection';
import { Panel1_OmnibusDetails } from './panels/Panel1_OmnibusDetails';
import { Panel2_Status } from './panels/Panel2_Status';
import { Panel3_ReconciliationReport } from './panels/Panel3_ReconciliationReport';
import { MintingState } from './types';

export const MintingVisual = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [animationState, setAnimationState] = useState<MintingState>({
    // Panel 0: Selection
    selectedOption: null,
    dropdownOpen: false,
    isSubmitting: false,

    // Panel 1: Omnibus Details
    omnibusConfirmed: false,

    // Panel 2: Status Screen
    statusStep: 'waiting',
    
    // Panel 3: Reconciliation Report
    reportVisible: false,
    reconciled: false
  });

  // State Management & Transitions
  useEffect(() => {
    if (currentPanel === 0) {
        // Animation sequence for Panel 0:
        const timers = [
            // Open the dropdown after initial wait
            setTimeout(() => {
                if (!animationState.selectedOption && !animationState.dropdownOpen) {
                    setAnimationState(s => ({...s, dropdownOpen: true}));
                }
            }, 1000),
            
            // Select PUSD after dropdown is open
            setTimeout(() => {
                if (animationState.dropdownOpen || !animationState.selectedOption) {
                    setAnimationState(s => ({...s, selectedOption: 'albor', dropdownOpen: false}));
                }
            }, 3000),
            
            // Submit after selection
            setTimeout(() => {
                if (animationState.selectedOption && !animationState.isSubmitting) {
                    setAnimationState(s => ({...s, isSubmitting: true}));
                    setTimeout(() => {
                        setCurrentPanel(1);
                        setAnimationState(s => ({ ...s, isSubmitting: false }));
                    }, 1000);
                }
            }, 5000)
        ];
        
        return () => timers.forEach(clearTimeout);
    } 
    else if (currentPanel === 1) {
        // Panel 1: Omnibus Details 
        if (!animationState.omnibusConfirmed) {
            const timer = setTimeout(() => {
                setAnimationState(s => ({...s, omnibusConfirmed: true}));
                setTimeout(() => setCurrentPanel(2), 1000); // Advance to status
            }, 5000); // Give user time to read instructions
            return () => clearTimeout(timer);
        }
    }
    else if (currentPanel === 2) {
      // Panel 2: Status Step Sequence (Restored Flow)
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, statusStep: 'omnibus_transfer' })), 500),
        setTimeout(() => setAnimationState(s => ({ ...s, statusStep: 'awaiting_receipt' })), 2500),
        setTimeout(() => setAnimationState(s => ({ ...s, statusStep: 'receipt_confirmed' })), 5500),
        setTimeout(() => setAnimationState(s => ({ ...s, statusStep: 'minting' })), 8000),
        setTimeout(() => setAnimationState(s => ({ ...s, statusStep: 'complete' })), 10500),
        setTimeout(() => setCurrentPanel(3), 12500),
      ];
      return () => timers.forEach(clearTimeout);
    }
    else if (currentPanel === 3) {
      // Panel 3: Reconciliation Report
      const timers = [
        setTimeout(() => setAnimationState(s => ({ ...s, reportVisible: true })), 500),
        setTimeout(() => setAnimationState(s => ({ ...s, reconciled: true })), 1500),
        // Reset back to 0
        setTimeout(() => {
            setCurrentPanel(0);
            setAnimationState({
                selectedOption: null, dropdownOpen: false, isSubmitting: false,
                omnibusConfirmed: false, statusStep: 'waiting',
                reportVisible: false, reconciled: false
            });
        }, 12000)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentPanel, animationState.isSubmitting, animationState.omnibusConfirmed, animationState.selectedOption, animationState.dropdownOpen]);

  const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
  const panelVisibleClasses = "opacity-100 translate-x-0";
  const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
  const panelHiddenRightClasses = "opacity-0 translate-x-full";

    const getPanelClasses = (panelIndex: number) => {
    if (currentPanel === panelIndex) return `${panelBaseClasses} ${panelVisibleClasses}`;
    if (currentPanel > panelIndex) return `${panelBaseClasses} ${panelHiddenLeftClasses}`;
    return `${panelBaseClasses} ${panelHiddenRightClasses}`;
  };

  const getStatusBarColor = () => {
    switch (currentPanel) {
        case 0: return "bg-indigo-900";
        case 1: return "bg-slate-50 dark:bg-indigo-900";
        case 2: return "bg-blue-900";
        case 3: return "bg-indigo-900";
        default: return "bg-slate-100 dark:bg-slate-800";
    }
  };

  return (
    <div className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center p-4">
      <MobileFrame statusBarColor={getStatusBarColor()}>
        {/* Panel 0: Selection */}
        <div className={getPanelClasses(0)}>
            <Panel0_Selection 
                isActive={currentPanel === 0}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(1)}
            />
        </div>

        {/* Panel 1: Omnibus Details */}
        <div className={getPanelClasses(1)}>
            <Panel1_OmnibusDetails 
                isActive={currentPanel === 1}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(2)}
            />
        </div>

        {/* Panel 2: Status */}
        <div className={getPanelClasses(2)}>
            <Panel2_Status 
                isActive={currentPanel === 2}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(3)}
            />
        </div>

        {/* Panel 3: Reconciliation Report */}
        <div className={getPanelClasses(3)}>
            <Panel3_ReconciliationReport 
                isActive={currentPanel === 3}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(0)}
            />
        </div>
      </MobileFrame>
    </div>
  );
};

