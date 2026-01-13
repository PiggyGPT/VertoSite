import React, { useState, useEffect } from "react";
import { MobileFrame } from "../ui/mobile-frame";
import { Panel0_Selection } from "./panels/Panel0_Selection";
import { Panel1_Minting } from "./panels/Panel1_Minting";
import { Panel2_Processing } from "./panels/Panel2_Processing";
import { Panel3_Receipt } from "./panels/Panel3_Receipt";
import { PanelProps } from "../types";

// Reusing types locally or adapting
export interface DisburseState {
  // Panel 0
  selectedOption: 'albor' | 'fiat' | null;
  dropdownOpen: boolean;
  isSubmitting: boolean;
  
  // Panel 1
  swipe1: boolean;
  
  // Panel 2
  verifyStep: number;
  
  // Panel 3
  showSettlement: boolean;
  settled: boolean;
}

export const DisburseVisual = () => {
    const [currentPanel, setCurrentPanel] = useState(0);
    const [animationState, setAnimationState] = useState<DisburseState>({
      // Panel 0 - Start with no selection (zero state)
      selectedOption: null,
      dropdownOpen: false,
      isSubmitting: false,
      
      // Panel 1
      swipe1: false,
      
      // Panel 2
      verifyStep: 0,
      
      // Panel 3
      showSettlement: false,
      settled: false
    });
  
    // Auto-cycle Logic with proper animation sequence
    useEffect(() => {
      if (currentPanel === 0) {
           // Animation sequence for Panel 0:
           // 1. Wait, then open dropdown (1.5s)
           // 2. Wait, then select PUSD (1.5s after dropdown opens)
           // 3. Wait, then submit (1.5s after selection)
           const timers = [
             // Open the dropdown after initial wait
             setTimeout(() => {
                 if (!animationState.selectedOption && !animationState.dropdownOpen) {
                     setAnimationState(s => ({...s, dropdownOpen: true}));
                 }
             }, 1500),
             
             // Select PUSD after dropdown is open
             setTimeout(() => {
                 if (animationState.dropdownOpen || !animationState.selectedOption) {
                     setAnimationState(s => ({...s, selectedOption: 'albor', dropdownOpen: false}));
                 }
             }, 3500),
             
             // Submit after selection
             setTimeout(() => {
                 if (animationState.selectedOption && !animationState.isSubmitting) {
                     setAnimationState(s => ({...s, isSubmitting: true}));
                     setTimeout(() => setCurrentPanel(1), 1000);
                 }
             }, 5500)
           ];
           
           return () => timers.forEach(clearTimeout);
      } 
      else if (currentPanel === 1) {
          if (!animationState.swipe1) {
             const timer = setTimeout(() => {
                setAnimationState(s => ({...s, swipe1: true}));
                setTimeout(() => setCurrentPanel(2), 1000);
             }, 3000);
             return () => clearTimeout(timer);
          }
      }
      else if (currentPanel === 2) {
        // Processing Step Sequence
        const timers = [
          setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 1 })), 500),
          setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 2 })), 1500),
          setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 3 })), 2500),
          setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 4 })), 3500),
          setTimeout(() => setCurrentPanel(3), 5000),
        ];
        return () => timers.forEach(clearTimeout);
      }
      else if (currentPanel === 3) {
         // Settlement View
         const timers = [
           setTimeout(() => setAnimationState(s => ({ ...s, settling: true, showSettlement: true })), 500),
           setTimeout(() => setAnimationState(s => ({ ...s, settled: true })), 1500),
           
           // Loop back with reset to zero state
           setTimeout(() => {
                setCurrentPanel(0);
                setAnimationState({
                     selectedOption: null, dropdownOpen: false, isSubmitting: false,
                     swipe1: false, verifyStep: 0, showSettlement: false, settled: false
                });
           }, 6000)
         ];
         return () => timers.forEach(clearTimeout);
      }
    }, [currentPanel, animationState.isSubmitting, animationState.swipe1, animationState.selectedOption, animationState.dropdownOpen]);
  
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
        // Loan Panel (0, 1, 2) = BI Panama (Blue/Indigo?)
        // Receipt Panel (3) = BI Guatemala (Blue)
        // Let's use generic logic
        return "bg-slate-100 dark:bg-slate-800"; 
    };
  
    return (
      <div className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center p-4">
        <MobileFrame statusBarColor={getStatusBarColor()}>
          {/* PANEL 0: BI PANAMA - LOAN DISBURSEMENT SELECTION */}
          <div className={getPanelClasses(0)}>
            <Panel0_Selection 
                isActive={currentPanel === 0}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(1)}
            />
          </div>
  
          {/* PANEL 1: BI PANAMA - MINTING APPROVAL */}
          <div className={getPanelClasses(1)}>
             <Panel1_Minting 
                isActive={currentPanel === 1}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(2)}
             />
          </div>
  
          {/* PANEL 2: BI PANAMA - PROCESSING (ZERO FEES) */}
          <div className={getPanelClasses(2)}>
            <Panel2_Processing 
                isActive={currentPanel === 2}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(3)}
            />
          </div>
  
          {/* PANEL 3: BI GUATEMALA - RECEIPT (FUNDS RECEIVED) */}
          <div className={getPanelClasses(3)}>
             <Panel3_Receipt 
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
