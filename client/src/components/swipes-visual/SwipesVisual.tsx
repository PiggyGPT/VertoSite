import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileFrame } from "../ui/mobile-frame";

import { Panel0_CreditIssue } from "./panels/Panel0_CreditIssue";
import { Panel1_MerchantRequest } from "./panels/Panel1_MerchantRequest";
import { Panel2_ConsumerSwipe } from "./panels/Panel2_ConsumerSwipe";
import { Panel3_MerchantPaid } from "./panels/Panel3_MerchantPaid";
import { Panel4_ConsumerRepay } from "./panels/Panel4_ConsumerRepay";

export const SwipesVisual = () => {
  const [step, setStep] = useState(0);

  // Auto-Animation Loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runSequence = () => {
        // 0. Credit Issued
        setStep(0);
        
        // 1. Merchant Request (after 3s)
        timeoutId = setTimeout(() => {
            setStep(1);

            // 2. Consumer Swipe (after 3s)
            timeoutId = setTimeout(() => {
                setStep(2);

                // 3. Merchant Paid (after 3s)
                timeoutId = setTimeout(() => {
                    setStep(3);

                    // 4. Repayment (after 3s)
                    timeoutId = setTimeout(() => {
                        setStep(4);

                         // Loop back (after 4s)
                        timeoutId = setTimeout(() => {
                            runSequence();
                        }, 4000);

                    }, 3000);

                }, 3000);

            }, 3000);

        }, 3000);
    };

    runSequence();

    return () => clearTimeout(timeoutId);
  }, []);

  const renderPanel = () => {
    switch(step) {
        case 0: return <Panel0_CreditIssue isActive={true} />;
        case 1: return <Panel1_MerchantRequest isActive={true} />;
        case 2: return <Panel2_ConsumerSwipe isActive={true} />;
        case 3: return <Panel3_MerchantPaid isActive={true} />;
        case 4: return <Panel4_ConsumerRepay isActive={true} />;
        default: return null;
    }
  };

  return (
    <MobileFrame>
        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full w-full absolute inset-0"
            >
                {renderPanel()}
            </motion.div>
        </AnimatePresence>
    </MobileFrame>
  );
};
