import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { CheckCircle, ChevronRight, Loader2 } from "lucide-react";

// --- Reusable Swipe Button Component ---
interface SwipeButtonProps {
  onComplete: () => void;
  text: string;
  subText?: string; // Optional helper text
  color?: string; // Tailwind color class for active state (e.g. bg-blue-600)
  completedText?: string;
  isCompleted?: boolean;
  isSwiped?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  resetKey?: any; // Change this to auto-reset the button
}

export const SwipeButton = ({ onComplete, text, subText, color = "bg-green-600", completedText = "Confirmed", isCompleted = false, isSwiped = false, isLoading = false, loadingText, resetKey }: SwipeButtonProps) => {
  const [complete, setComplete] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    // Ensure constraints are calculated after mount/layout
    const updateConstraints = () => {
      if (containerRef.current) {
        setConstraints({ left: 0, right: containerRef.current.offsetWidth - 40 - 8 });
      }
    };
    
    updateConstraints();
    
    // Optional: resize observer if the container might change size
    const resizeObserver = new ResizeObserver(updateConstraints);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Reset logic
  useEffect(() => {
    if (!isCompleted && !isSwiped) {
       setComplete(false);
       x.set(0);
    }
  }, [resetKey, isCompleted, isSwiped]);

  const handleDragEnd = () => {
    if (x.get() > constraints.right * 0.8) {
      setComplete(true);
      onComplete();
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 40 });
    }
  };

  // Transform background width based on drag x
  const width = useTransform(x, [0, constraints.right], [40 + 8, constraints.right + 40 + 8]); // handle + padding
  const opacity = useTransform(x, [0, constraints.right / 2], [1, 0]);

  useEffect(() => {
    if ((isCompleted || isSwiped) && !complete && constraints.right > 0) {
        animate(x, constraints.right, { 
            type: "spring", stiffness: 200, damping: 25,
            onComplete: () => {
                setComplete(true);
                onComplete();
            } 
        });
    }
  }, [isCompleted, isSwiped, constraints.right]);

  return (
    <div 
        className={`relative w-full h-12 rounded-full overflow-hidden p-1 shadow-inner select-none touch-none transition-all duration-500 ease-out ${
            (isCompleted && !isLoading) 
                ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                : 'bg-slate-100 dark:bg-slate-800'
        }`} 
        ref={containerRef}
    >
      {/* Background Fill (Initial Swipe) */}
      {!isLoading && !isCompleted && (!isSwiped || !complete) && (
        <motion.div 
          className={`absolute top-0 bottom-0 left-0 ${color} z-0 opacity-20`}
          style={{ width }}
        />
      )}

      {/* Background Text and Subtext */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none">
        <motion.span 
          style={{ opacity: (complete || isCompleted || (isSwiped && complete)) ? 0 : opacity }} 
          className="text-sm font-bold uppercase tracking-wider text-slate-400"
        >
          {text}
        </motion.span>
        {subText && !complete && (!isSwiped || !complete) && (
           <motion.span style={{ opacity: complete ? 0 : opacity }} className="text-[9px] text-slate-300 font-medium">
             {subText}
           </motion.span>
        )}
      </div>

      {/* Success/Loading Text */}
       {(complete || isCompleted || (isSwiped && complete)) && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: (isCompleted && !isLoading) ? [0.8, 1.1, 1] : 1 
          }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 15 }
          }}
          className="absolute inset-0 flex items-center justify-center z-10 text-white font-bold uppercase tracking-wider gap-2 px-10 text-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="truncate">{loadingText || completedText}</span>
            </>
          ) : (
            <span className="truncate">{(isSwiped && !isCompleted) ? loadingText : completedText}</span>
          )}
        </motion.div>
      )}

      {/* Draggable Handle */}
      {!complete && !isLoading && (!isSwiped || !complete) && (
        <motion.div
            className={`absolute top-1 bottom-1 w-10 rounded-full flex items-center justify-center z-20 cursor-grab active:cursor-grabbing bg-transparent`}
            style={{ x }}
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.1}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
        >
            <ChevronRight className={`w-6 h-6 ${color.replaceAll('bg-', 'text-')}`} />
        </motion.div>
      )}
    </div>
  );
};
