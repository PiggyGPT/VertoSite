import React from 'react';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export interface ActionButtonProps {
  text: string;
  loadingText?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  color?: 'green' | 'blue' | 'indigo' | 'purple';
  showArrow?: boolean;
  showCheckOnLoading?: boolean;
  className?: string;
}

const colorMap = {
  green: {
    enabled: 'bg-green-600 text-white shadow-lg hover:bg-green-700 active:scale-95',
    disabled: 'bg-green-800/30 text-green-400/50 cursor-not-allowed border border-green-700/30',
    loading: 'bg-green-600 text-white shadow-none',
  },
  blue: {
    enabled: 'bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:scale-95',
    disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200',
    loading: 'bg-blue-600 text-white shadow-none',
  },
  indigo: {
    enabled: 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 active:scale-95',
    disabled: 'bg-indigo-800/30 text-indigo-400/50 cursor-not-allowed border border-indigo-700/30',
    loading: 'bg-indigo-600 text-white shadow-none',
  },
  purple: {
    enabled: 'bg-purple-600 text-white shadow-lg hover:bg-purple-700 active:scale-95',
    disabled: 'bg-purple-800/30 text-purple-400/50 cursor-not-allowed border border-purple-700/30',
    loading: 'bg-purple-600 text-white shadow-none',
  },
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  loadingText,
  disabled = false,
  isLoading = false,
  onClick,
  color = 'blue',
  showArrow = false,
  showCheckOnLoading = true,
  className = '',
}) => {
  const colors = colorMap[color];
  
  const getClasses = () => {
    if (isLoading) return colors.loading;
    if (disabled) return colors.disabled;
    return colors.enabled;
  };

  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`w-full py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 ${getClasses()} ${className}`}
    >
      {isLoading ? (
        <>
          {showCheckOnLoading ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          {loadingText || text}
        </>
      ) : (
        <>
          {text}
          {showArrow && <ArrowRight className="w-3.5 h-3.5" />}
        </>
      )}
    </button>
  );
};
