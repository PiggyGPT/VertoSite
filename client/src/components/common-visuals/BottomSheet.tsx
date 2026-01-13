import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 z-40 rounded-2xl"
            onClick={onClose}
          />
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-2xl shadow-2xl border-t border-x border-slate-200 dark:border-slate-700 z-50 overflow-hidden"
          >
            {/* Handle */}
            <div className="flex justify-center py-1.5">
              <div className="w-8 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
            </div>
            {/* Header */}
            <div className="px-3 pb-1.5 border-b border-slate-100 dark:border-slate-800">
              <p className="text-[11px] font-bold text-slate-900 dark:text-white">{title}</p>
              {subtitle && <p className="text-[9px] text-slate-500">{subtitle}</p>}
            </div>
            {/* Content */}
            <div className="p-2 space-y-1 max-h-40 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Reusable option item for bottom sheet selections
export interface BottomSheetOptionProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  isSelected?: boolean;
  onClick: () => void;
  selectedColor?: string;
}

export const BottomSheetOption: React.FC<BottomSheetOptionProps> = ({
  icon,
  title,
  subtitle,
  badge,
  isSelected = false,
  onClick,
  selectedColor = 'blue',
}) => {
  const selectedClasses = selectedColor === 'indigo' 
    ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800'
    : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800';
  
  return (
    <div
      onClick={onClick}
      className={`p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
        isSelected 
          ? selectedClasses
          : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
      }`}
    >
      <div className="flex items-center gap-2.5">
        {icon}
        <div>
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-medium text-slate-900 dark:text-white">{title}</p>
            {badge && (
              <span className="bg-indigo-600 text-white text-[8px] font-bold px-1 py-0.5 rounded">{badge}</span>
            )}
          </div>
          {subtitle && (
            <p className="text-[9px] text-slate-500 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      {isSelected && (
        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};
