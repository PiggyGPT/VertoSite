import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

export interface ProcessingStep {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode; // For custom right side content (e.g., bank logos, amounts)
}

export interface ProcessingStepsProps {
  steps: ProcessingStep[];
  currentStep: number; // 0-indexed, -1 means nothing started
  className?: string;
}

export const ProcessingSteps: React.FC<ProcessingStepsProps> = ({
  steps,
  currentStep,
  className = '',
}) => {
  const getStepState = (stepIndex: number): 'completed' | 'active' | 'pending' => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'pending';
  };

  const getStepColors = (state: 'completed' | 'active' | 'pending') => {
    switch (state) {
      case 'completed':
        return {
          container: 'border-green-200 bg-green-50/50 dark:bg-green-900/10',
          iconBg: 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800',
          iconColor: 'text-green-600',
          title: 'text-green-800 dark:text-green-300',
        };
      case 'active':
        return {
          container: 'border-blue-200 bg-blue-50/50 dark:bg-blue-900/10',
          iconBg: 'bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800',
          iconColor: 'text-blue-600',
          title: 'text-blue-800 dark:text-blue-300',
        };
      default:
        return {
          container: 'border-slate-100 dark:border-slate-800',
          iconBg: 'bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-700',
          iconColor: 'text-slate-300',
          title: 'text-slate-400',
        };
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {steps.map((step, index) => {
        const state = getStepState(index);
        const colors = getStepColors(state);

        return (
          <motion.div
            key={index}
            className={`p-2.5 rounded-xl border transition-all duration-500 ${colors.container}`}
            animate={{ scale: state === 'active' ? [1, 1.01, 1] : 1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors ${colors.iconBg}`}>
                  {React.cloneElement(step.icon as React.ReactElement, {
                    className: `w-3.5 h-3.5 ${colors.iconColor}`,
                  })}
                </div>
                <div>
                  <p className={`text-[10px] font-bold transition-colors ${colors.title}`}>{step.title}</p>
                  {step.subtitle && <p className="text-[9px] text-slate-400">{step.subtitle}</p>}
                </div>
              </div>
              
              {/* Right side indicator */}
              {state === 'completed' && !step.rightContent && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
              {state === 'active' && !step.rightContent && (
                <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin" />
              )}
              {state === 'pending' && !step.rightContent && (
                <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-200" />
              )}
              {step.rightContent}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
