import React from 'react';
import { Building, ArrowRight } from 'lucide-react';

export interface PanelSubheaderProps {
  entityName: string;
  alborId?: string;
  accountNumber?: string;
  bankColor?: 'green' | 'blue' | 'indigo' | 'purple';
  icon?: React.ReactNode;
  // For transfer-style subheader with source -> destination
  isTransfer?: boolean;
  sourceLabel?: string;
  sourceAlborId?: string;
  destLabel?: string;
  destAlborId?: string;
}

const colorMap = {
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-100 dark:border-green-800',
    icon: 'text-green-700 dark:text-green-400',
    text: 'text-green-800 dark:text-green-300',
    subtext: 'text-green-600 dark:text-green-400',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-800',
    icon: 'text-blue-700 dark:text-blue-400',
    text: 'text-blue-800 dark:text-blue-300',
    subtext: 'text-blue-600 dark:text-blue-400',
  },
  indigo: {
    bg: 'bg-slate-50 dark:bg-slate-800/50',
    border: 'border-slate-100 dark:border-slate-800',
    icon: 'text-slate-500 dark:text-slate-400',
    text: 'text-slate-800 dark:text-slate-300',
    subtext: 'text-slate-500 dark:text-slate-400',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-800',
    icon: 'text-purple-700 dark:text-purple-400',
    text: 'text-purple-800 dark:text-purple-300',
    subtext: 'text-purple-600 dark:text-purple-400',
  },
};

const AlborIdBadge = ({ alborId, grayscale = false }: { alborId: string; grayscale?: boolean }) => (
  <div className={`flex items-center gap-0.5 px-1 py-px rounded border ${
    grayscale 
      ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
      : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200/50 dark:border-amber-700/30'
  }`}>
    <img 
      src="/logos/svg/alborsun.svg" 
      alt="" 
      className={`w-2 h-2 ${grayscale ? 'opacity-50 grayscale' : ''}`} 
    />
    <span className={`text-[7px] font-medium ${
      grayscale 
        ? 'text-slate-500 dark:text-slate-400' 
        : 'text-amber-700 dark:text-amber-400'
    }`}>
      {alborId}
    </span>
  </div>
);

export const PanelSubheader: React.FC<PanelSubheaderProps> = ({
  entityName,
  alborId,
  accountNumber,
  bankColor = 'blue',
  icon,
  isTransfer = false,
  sourceLabel,
  sourceAlborId,
  destLabel,
  destAlborId,
}) => {
  const colors = colorMap[bankColor];

  if (isTransfer) {
    return (
      <div className={`${colors.bg} px-4 py-2 border-b ${colors.border} flex-shrink-0`}>
        <div className="flex items-center justify-between gap-2">
          {/* Source */}
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              {icon !== undefined ? icon : <Building className="w-2.5 h-2.5 text-slate-500" />}
            </div>
            <div>
              <p className={`text-[10px] font-bold ${colors.text}`}>{sourceLabel}</p>
              {sourceAlborId && <AlborIdBadge alborId={sourceAlborId} grayscale />}
            </div>
          </div>
          {/* Arrow */}
          <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 flex-shrink-0" />
          {/* Destination */}
          <div className="flex items-center gap-1.5">
            <div className="text-right">
              <p className={`text-[10px] font-bold ${colors.text}`}>{destLabel}</p>
              {destAlborId && <AlborIdBadge alborId={destAlborId} />}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${colors.bg} px-4 py-2 border-b ${colors.border} flex-shrink-0`}>
      <div className="flex items-center justify-between">
        {/* Left: Icon & Name */}
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${colors.border} bg-white/50 dark:bg-white/10`}>
             {icon !== undefined ? icon : <Building className={`w-3.5 h-3.5 ${colors.icon}`} />}
          </div>
          <div>
            <p className={`text-[10px] leading-tight font-bold ${colors.text}`}>{entityName}</p>
          </div>
        </div>
        
        {/* Right: Account Info & ID */}
        <div className="flex flex-col items-end justify-center">
           {accountNumber && (
            <span className={`text-[9px] mb-0.5 font-medium ${colors.subtext}`}>{accountNumber}</span>
           )}
           {alborId && (
              <AlborIdBadge alborId={alborId} />
           )}
        </div>
      </div>
    </div>
  );
};
