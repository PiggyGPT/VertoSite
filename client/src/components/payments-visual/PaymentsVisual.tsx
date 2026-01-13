import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileFrame } from "../ui/mobile-frame";

import { Panel0_MerchantCreate } from "./panels/Panel0_MerchantCreate";
import { Panel1_QRDisplay } from "./panels/Panel1_QRDisplay";
import { Panel2_PaymentSelection } from "./panels/Panel2_PaymentSelection";
import { Panel3_Receipt } from "./panels/Panel3_Receipt";

export const PaymentsVisual = () => {
  const [step, setStep] = useState(0);
  const [animationState, setAnimationState] = useState({
      isPaid: false,
      showRoute: false,
      routeStatus: 'calculating' as 'calculating' | 'signing' | 'executing' | 'complete'
  });

  // Auto-Animation Loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runSequence = () => {
        // 0. Reset
        setStep(0);
        setAnimationState(s => ({ ...s, showQr: false, doSwipe: false, routeStatus: 'calculating', isPaid: false }));

        // 1. Show QR after 2.5s (Input time)
        timeoutId = setTimeout(() => {
            setAnimationState(s => ({ ...s, showQr: true }));
            
            // 2. Move to Payer View (Step 1) after QR shown for 3s
            timeoutId = setTimeout(() => {
                setStep(1);

                // 3. Trigger Swipe after 2.5s of Payer View
                timeoutId = setTimeout(() => {
                    setAnimationState(s => ({ ...s, doSwipe: true }));
                    
                    // 4. Move to Processing (Step 2) after Swipe (1s duration)
                    timeoutId = setTimeout(() => {
                        setStep(2);
                        
                        // 5. Run Processing Animation (Step 2 internal logic driven by timeouts here or internal? Let's drive it here for sync)
                        // Reset status just in case
                        setAnimationState(s => ({ ...s, routeStatus: 'calculating' }));

                        timeoutId = setTimeout(() => setAnimationState(s => ({ ...s, routeStatus: 'signing' })), 1500);
                        timeoutId = setTimeout(() => setAnimationState(s => ({ ...s, routeStatus: 'executing' })), 3000);
                        timeoutId = setTimeout(() => setAnimationState(s => ({ ...s, routeStatus: 'complete' })), 4500);

                        // 6. Move to Receipt (Step 3) after Processing (6s total to be safe)
                        timeoutId = setTimeout(() => {
                            setStep(3);
                            
                            // 7. Loop back after Receipt shown for 5s
                            timeoutId = setTimeout(() => {
                                runSequence();
                            }, 5000);

                        }, 6000);

                    }, 1000); // Swipe duration

                }, 2500); // Payer view duration

            }, 3000); // QR view duration

        }, 2000); // Input duration
    };

    runSequence();

    return () => clearTimeout(timeoutId);
  }, []);

  const handleNext = () => {
    // Manual override if needed, but auto-loop is primary now
    if (step < 3) setStep(s => s + 1);
  };

  // Logic to switch content based on step
  const renderPanel = () => {
    switch(step) {
        case 0: return <Panel0_MerchantCreate isActive={true} animationState={animationState} setAnimationState={setAnimationState} onNext={handleNext} />;
        case 1: return <Panel1_QRDisplay isActive={true} animationState={animationState} setAnimationState={setAnimationState} onNext={handleNext} />;
        case 2: return <Panel2_PaymentSelection isActive={true} animationState={animationState} setAnimationState={setAnimationState} onNext={handleNext} />;
        case 3: return <Panel3_Receipt isActive={true} animationState={animationState} setAnimationState={setAnimationState} onNext={() => {}} />;
        default: return null;
    }
  };

  return (
    <MobileFrame>
        {/* Render Panel */}
        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full absolute inset-0"
            >
                {renderPanel()}
            </motion.div>
        </AnimatePresence>
    </MobileFrame>
  );
};
