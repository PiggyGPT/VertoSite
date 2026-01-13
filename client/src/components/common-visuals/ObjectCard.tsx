import React from 'react';
import { ArrowUpRight, Copy } from 'lucide-react';

export interface DetailRow {
  label: string;
  value: string;
  isMono?: boolean;
}

interface Issuer {
  name: string;
  id: string;
  bank?: string;
  icon?: React.ReactNode;
  color?: 'slate' | 'blue' | 'green' | 'amber'; // Added color prop
}

interface ObjectCardProps {
  label: string; 
  subLabel?: string; 
  amount: string;
  currency: string;
  
  status?: 'pending' | 'paid' | 'processing' | 'approved';
  expanded?: boolean; 
  details?: DetailRow[]; 
  issuer?: Issuer; 
  children?: React.ReactNode;
  topContent?: React.ReactNode; 
  
  actionText?: string;
  className?: string; 
  onAction?: () => void;
  amountSize?: string;
  inlineCurrency?: boolean;
}

export const ObjectCard: React.FC<ObjectCardProps> = ({
  label,
  subLabel,
  amount,
  currency,
  status,
  expanded = false,
  details = [],
  issuer,
  children,
  topContent,
  actionText,
  className = "",
  onAction,
  amountSize,
  inlineCurrency
}) => {
  
  // Status Badge Logic
  const getStatusColor = () => {
      switch(status) {
          case 'paid': return 'bg-green-100 text-green-700 border-green-200';
          case 'approved': return 'bg-blue-100 text-blue-700 border-blue-200';
          case 'processing': return 'bg-amber-100 text-amber-700 border-amber-200';
          default: return 'bg-slate-100 text-slate-600 border-slate-200';
      }
  };

  // Helper for dynamic colors
  const getThemeClasses = (color: string = 'slate') => {
      const themes: Record<string, any> = {
          slate: { bg: 'bg-slate-50 dark:bg-slate-900', text: 'text-slate-800 dark:text-slate-200', border: 'border-slate-100 dark:border-slate-800', iconBg: 'bg-white/50 dark:bg-white/10' },
          green: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-800 dark:text-green-300', border: 'border-green-100 dark:border-green-800', iconBg: 'bg-white/50 dark:bg-white/10' },
          blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-800 dark:text-blue-300', border: 'border-blue-100 dark:border-blue-800', iconBg: 'bg-white/50 dark:bg-white/10' },
      };
      return themes[color] || themes.slate;
  };

  return (
    <div className={`
        relative bg-white dark:bg-slate-900 
        rounded-2xl border border-slate-200 dark:border-slate-800 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none
        flex flex-col overflow-hidden transition-all duration-500
        ${expanded ? 'h-full' : 'p-3'} 
        ${className}
    `}>
      
      {/* 1. Header Section */}
      <div className={`${expanded ? '' : 'px-3 pt-3 flex items-center justify-between mb-2'}`}> 
         {/* NOTE: Removed p-5 pb-3 from expanded style to let the inner header control its padding/bg */}
         
         {expanded ? (
             issuer ? (
                (() => {
                    const theme = getThemeClasses(issuer.color || 'slate');
                    return (
                        // Compact Issuer Header (Replaced Rich Header)
                        <div className={`${theme.bg} px-4 py-2 border-b ${theme.border} flex-shrink-0`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${theme.border} ${theme.iconBg}`}>
                                        {/* Since icon might be complex, we clone or just wrap. If it's the Building icon, pass className? */}
                                        {/* User snippet shows empty div? No, user snippet had div. We will try to render icon small. */}
                                        {/* User provided snippet had empty div for icon placeholder, but we have an icon. */}
                                        {/* Let's render the icon passed in props, but small. */}
                                        {React.isValidElement(issuer.icon) ? 
                                            React.cloneElement(issuer.icon as React.ReactElement<any>, { className: `w-3.5 h-3.5 ${theme.text}` }) 
                                            : issuer.icon}
                                    </div>
                                    <div>
                                        <p className={`text-[10px] leading-tight font-bold ${theme.text}`}>{issuer.name}</p>
                                        {issuer.bank && <p className={`text-[8px] font-medium opacity-70 ${theme.text}`}>{issuer.bank}</p>}
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-center">
                                    <div className="flex items-center gap-0.5 px-1 py-px rounded border bg-amber-50 dark:bg-amber-900/20 border-amber-200/50 dark:border-amber-700/30">
                                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2 h-2" />
                                        <span className="text-[7px] font-medium text-amber-700 dark:text-amber-400">{issuer.id}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()
             ) : (
                // Default Header
                 <div className="flex justify-between items-start p-5 pb-3">
                     <div>
                         <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">{subLabel || 'Details'}</p>
                         <p className="text-xs font-bold text-slate-900 dark:text-white">{label}</p>
                     </div>
                     {status && (
                         <div className={`px-2 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wide ${getStatusColor()}`}>
                             {status}
                         </div>
                     )}
                 </div>
             )
         ) : (
            // Compact Header
            <>
                <p className="text-[9px] text-slate-400 uppercase font-bold">{label}</p>
                {subLabel && <p className="text-[9px] text-slate-500">{subLabel}</p>}
            </>
         )}
      </div>

      {/* 2. Top Content (Above Amount) */}
      {expanded && topContent && (
          <div className="px-5 pt-4 pb-2">
              {topContent}
          </div>
      )}

      {/* 3. Hero Amount Section */}
      <div className={`
          text-center 
          ${expanded ? 'py-2 flex-grow flex flex-col justify-center' : 'py-3 border-t border-dashed border-slate-200 dark:border-slate-700 flex-grow flex flex-col justify-center'}
      `}>
          {expanded && <p className="text-[10px] text-slate-400 font-medium mb-1">Total Amount</p>}
          <div className={`flex items-center justify-center ${(expanded && !inlineCurrency) ? 'flex-col' : 'items-baseline gap-1'}`}>
             <span className={`${amountSize || (expanded ? 'text-4xl' : 'text-2xl')} font-bold text-slate-900 dark:text-white tracking-tight leading-none`}>{amount}</span>
             <span className={`${(expanded && !inlineCurrency) ? 'text-[10px] mt-1' : 'text-[10px]'} font-bold text-slate-400 uppercase tracking-wider`}>{currency}</span>
          </div>
      </div>

      {/* 4. Expanded Details / Custom Content (Only if content exists) */}
      {expanded && (children || details.length > 0) && (
          <div className="flex-grow-0 px-5 py-3 border-t border-dashed border-slate-100 dark:border-slate-800/50">
              {children ? (
                  children
              ) : (
                  <div className="space-y-3">
                    {details.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center group">
                            <span className="text-[10px] font-medium text-slate-400">{item.label}</span>
                            <div className="flex items-center gap-2">
                                <span className={`text-[11px] font-semibold text-slate-700 dark:text-slate-200 ${item.isMono ? 'font-mono' : ''}`}>
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    ))}
                  </div>
              )}
          </div>
      )}

      {/* 5. Footer Action */}
      {(actionText || onAction) && (
        <div className={`
            ${expanded ? 'p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800' : 'mt-2'}
        `}>
            <button 
            onClick={onAction}
            className={`
                w-full flex items-center justify-center gap-1
                text-[10px] font-medium text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors
                ${expanded ? 'py-2' : ''}
            `}
            >
            {actionText}
            {expanded && <ArrowUpRight className="w-3 h-3 opacity-50" />}
            </button>
        </div>
      )}
    </div>
  );
};
