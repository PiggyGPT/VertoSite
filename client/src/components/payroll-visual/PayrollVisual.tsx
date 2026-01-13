import React, { useState, useEffect } from 'react';
import { MobileFrame } from '../ui/mobile-frame';
import { PayrollState } from './types';
import { Panel0_Selection, workers } from './panels/Panel0_Selection';
import { Panel1_Confirmation } from './panels/Panel1_Confirmation';
import { Panel2_Processing } from './panels/Panel2_Processing';
import { Panel3_Receipt } from './panels/Panel3_Receipt';

export const PayrollVisual = () => {
    const [currentPanel, setCurrentPanel] = useState(0);
    const [animationState, setAnimationState] = useState<PayrollState>({
        // Panel 0 - Selection
        showWorkers: false,
        selectedWorkerIndex: -1,
        
        // Panel 1 - Confirmation
        swipe1: false,
        
        // Panel 2 - Processing
        showVerification: false,
        verifyStep: 0,
        
        // Panel 3 - Receipt
        showSettlement: false,
        settled: false
    });

    // Get selected worker data
    const selectedWorker = animationState.selectedWorkerIndex >= 0 
        ? workers[animationState.selectedWorkerIndex] 
        : undefined;

    // Panel-specific animation timers
    useEffect(() => {
        if (currentPanel === 0) {
            // Reset state on start
            setAnimationState({
                showWorkers: false,
                selectedWorkerIndex: -1,
                swipe1: false,
                showVerification: false,
                verifyStep: 0,
                showSettlement: false,
                settled: false
            });
            
            // Auto-sequence for demo
            const timers = [
                setTimeout(() => setAnimationState(s => ({ ...s, showWorkers: true })), 500),
                // Auto select worker after delay
                setTimeout(() => setAnimationState(s => ({ ...s, selectedWorkerIndex: 0 })), 2000),
                // Auto advance to confirmation panel
                setTimeout(() => setCurrentPanel(1), 2800),
            ];
            return () => timers.forEach(clearTimeout);
        } 
        else if (currentPanel === 1) {
            // Panel 1: Auto swipe after viewing details
            const timers = [
                setTimeout(() => setAnimationState(s => ({ ...s, swipe1: true })), 2500),
                setTimeout(() => setCurrentPanel(2), 3500),
            ];
            return () => timers.forEach(clearTimeout);
        }
        else if (currentPanel === 2) {
            // Panel 2: Verification steps
            const timers = [
                setTimeout(() => setAnimationState(s => ({ ...s, showVerification: true, verifyStep: 1 })), 500),
                setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 2 })), 1500),
                setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 3 })), 2500),
                setTimeout(() => setAnimationState(s => ({ ...s, verifyStep: 4 })), 3500),
                setTimeout(() => setCurrentPanel(3), 4500),
            ];
            return () => timers.forEach(clearTimeout);
        }
        else if (currentPanel === 3) {
            // Panel 3: Settlement
            const timers = [
                setTimeout(() => setAnimationState(s => ({ ...s, showSettlement: true })), 500),
                setTimeout(() => setAnimationState(s => ({ ...s, settled: true })), 2000),
                // Loop back to start
                setTimeout(() => setCurrentPanel(0), 5000),
            ];
            return () => timers.forEach(clearTimeout);
        }
    }, [currentPanel]);

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
            case 1: return "bg-green-700";
            case 2: return "bg-blue-800";
            case 3: return "bg-blue-800";
            default: return "bg-slate-100 dark:bg-slate-800";
        }
    };

    return (
        <div className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center p-4">
            <MobileFrame statusBarColor={getStatusBarColor()}>
                {/* PANEL 0: BANRURAL - EMPLOYEE SELECTION */}
                <div className={getPanelClasses(0)}>
                    <Panel0_Selection 
                        isActive={currentPanel === 0}
                        animationState={animationState}
                        setAnimationState={setAnimationState}
                        onNext={() => setCurrentPanel(1)}
                    />
                </div>

                {/* PANEL 1: BANRURAL - CONFIRMATION (NEW) */}
                <div className={getPanelClasses(1)}>
                    <Panel1_Confirmation 
                        isActive={currentPanel === 1}
                        animationState={animationState}
                        setAnimationState={setAnimationState}
                        onNext={() => setCurrentPanel(2)}
                        selectedWorker={selectedWorker}
                    />
                </div>

                {/* PANEL 2: BANCO INDUSTRIAL - VERIFICATION */}
                <div className={getPanelClasses(2)}>
                    <Panel2_Processing 
                        isActive={currentPanel === 2}
                        animationState={animationState}
                        setAnimationState={setAnimationState}
                        onNext={() => setCurrentPanel(3)}
                        selectedWorker={selectedWorker}
                    />
                </div>

                {/* PANEL 3: WORKER ACCOUNT - RECEIPT */}
                <div className={getPanelClasses(3)}>
                    <Panel3_Receipt 
                        isActive={currentPanel === 3}
                        animationState={animationState}
                        setAnimationState={setAnimationState}
                        onNext={() => setCurrentPanel(0)}
                        selectedWorker={selectedWorker}
                    />
                </div>
            </MobileFrame>
        </div>
    );
};

