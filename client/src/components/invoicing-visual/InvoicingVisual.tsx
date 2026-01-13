import React, { useState, useEffect } from "react";
import { MobileFrame } from "../ui/mobile-frame";
import { InvoicingState } from "./types";
import { Panel0_Submission } from "./panels/Panel0_Submission";
import { Panel1_Approval } from "./panels/Panel1_Approval";
import { Panel2_Processing } from "./panels/Panel2_Processing";
import { Panel3_Receipt } from "./panels/Panel3_Receipt";

export const InvoicingVisual = () => {
    const [currentPanel, setCurrentPanel] = useState(0);
    const [animationState, setAnimationState] = useState<InvoicingState>({
      // Panel 0
      swipe0: false,
      recipientListOpen: false,
      recipientSelected: false,
      
      // Panel 1
      swipe1: false,
      
      // Panel 2
      verifyStep: 0,
      
      // Panel 3
      showSettlement: false,
      settled: false
    });
  
    // --- Timers for Auto-Progression & Animation Steps ---
    useEffect(() => {
      // Clear state when switching back to start if needed (optional reset logic)
      if (currentPanel === 0 && !animationState.swipe0 && animationState.verifyStep > 0) {
          // Reset state if we looped back
          setAnimationState({
              swipe0: false, recipientListOpen: false, recipientSelected: false,
              swipe1: false, verifyStep: 0, showSettlement: false, settled: false
          });
      }

      if (currentPanel === 0) {
        // Supplier Panel - maybe auto-open list for demo?
        // Current logic in original was manual interaction primarily, but let's keep it simple.
        // The "Cycle Panels" effect below handles the big jumps.
      } 
      else if (currentPanel === 1) {
        // Client Panel - auto-advance after swipe is handled by onComplete in component usually,
        // but here we can ensure smooth transitions if we want automated flow.
      }
      else if (currentPanel === 2) {
        // Authorization Panel - step through verification
        const timers = [
          setTimeout(() => setAnimationState(s => ({ ...s, showVerification: true, verifyStep: 1 })), 500),
          setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 2 })), 1500),
          setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 3 })), 2500),
          setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 4 })), 3500),
          setTimeout(() => setCurrentPanel(3), 5000),
        ];
        return () => timers.forEach(clearTimeout);
      }
      else if (currentPanel === 3) {
        // Settlement Panel
        const timers = [
          setTimeout(() => setAnimationState(s => ({ ...s, showSettlement: true })), 500),
          setTimeout(() => setAnimationState(s => ({ ...s, settled: true })), 2500),
        ];
        return () => timers.forEach(clearTimeout);
      }
    }, [currentPanel]);
  
    // Auto-cycle for demo purposes (Looped playback)
    useEffect(() => {
      const cyclePanels = () => {
          if (currentPanel === 0) {
              // Panel 0: Auto click Submit button if user is idle?
              // Let's stick to the original logic: "Longer interval for manual interaction time, but auto-progression"
              // In original:
              // setAnimationState(s => ({...s, swipe0: true}));
              // setTimeout(() => setCurrentPanel(1), 1000);
              
              // We'll simulate the user flow if they don't interact
              if (!animationState.recipientSelected) {
                  setAnimationState(s => ({ ...s, recipientListOpen: true }));
                  setTimeout(() => setAnimationState(s => ({ ...s, recipientListOpen: false, recipientSelected: true })), 1500);
                  setTimeout(() => setAnimationState(s => ({ ...s, swipe0: true })), 2500);
                  setTimeout(() => setCurrentPanel(1), 3500);
              } else if (!animationState.swipe0) {
                  setAnimationState(s => ({ ...s, swipe0: true }));
                  setTimeout(() => setCurrentPanel(1), 1000);
              }
          } else if (currentPanel === 1) {
              // Panel 1: Auto swipe Approval
              if (!animationState.swipe1) {
                setAnimationState(s => ({...s, swipe1: true}));
                setTimeout(() => setCurrentPanel(2), 1000);
              }
          } else if (currentPanel === 2) {
              // Panel 2: Managed by its own effect above mostly, but fail-safe move
              // setTimeout(() => setCurrentPanel(3), 1000);
          } else {
               // Reset back to 0
               setTimeout(() => {
                   setCurrentPanel(0);
                   setAnimationState({
                    swipe0: false, recipientListOpen: false, recipientSelected: false,
                    swipe1: false, verifyStep: 0, showSettlement: false, settled: false
                  });
               }, 5000);
          }
      }
  
      // Longer interval for manual interaction time, but auto-progression
      const intervalId = setInterval(cyclePanels, 8000); 
      return () => clearInterval(intervalId);
    }, [currentPanel, animationState]);
  
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
            case 0: return "bg-green-700";
            case 1: return "bg-blue-800";
            case 2: return "bg-blue-800";
            case 3: return "bg-green-700";
            default: return "bg-slate-100 dark:bg-slate-800";
        }
    };
  
    return (
      <div className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center p-4">
        <MobileFrame statusBarColor={getStatusBarColor()}>
          {/* PANEL 0: BANRURAL - SUPPLIER INVOICE SUBMISSION */}
          <div className={getPanelClasses(0)}>
            <Panel0_Submission 
                isActive={currentPanel === 0}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(1)}
            />
          </div>
  
          {/* PANEL 1: BANCO INDUSTRIAL - CLIENT APPROVAL */}
          <div className={getPanelClasses(1)}>
             <Panel1_Approval 
                isActive={currentPanel === 1}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(2)}
             />
          </div>
  
          {/* PANEL 2: BANCO INDUSTRIAL - AUTHORIZATION STEPS */}
          <div className={getPanelClasses(2)}>
            <Panel2_Processing 
                isActive={currentPanel === 2}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(3)}
            />
          </div>
  
          {/* PANEL 3: BANRURAL - SUPPLIER ACCOUNT VIEW */}
          <div className={getPanelClasses(3)}>
             <Panel3_Receipt 
                isActive={currentPanel === 3}
                animationState={animationState}
                setAnimationState={setAnimationState}
                onNext={() => setCurrentPanel(0)} // Loops back
             />
          </div>
        </MobileFrame>
      </div>
    );
};

