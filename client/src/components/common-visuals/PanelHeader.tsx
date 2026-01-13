import React from 'react';
import { Landmark } from 'lucide-react';



export interface PanelHeaderProps {
  title: string;
  subtitle: string;
  color?: 'blue' | 'green' | 'indigo' | 'slate' | 'amber' | 'purple' | 'transparent';
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  withStatusBar?: boolean;
  headerTime?: string;
  className?: string;
  leftElement?: React.ReactNode;
  centerElement?: React.ReactNode;
}

const colorMap = {
  blue: { bg: 'bg-blue-900', iconText: 'text-blue-900', subtext: 'text-blue-200' },
  green: { bg: 'bg-green-700', iconText: 'text-green-700', subtext: 'text-green-200' },
  indigo: { bg: 'bg-indigo-900', iconText: 'text-indigo-900', subtext: 'text-indigo-200' },
  slate: { bg: 'bg-slate-800', iconText: 'text-slate-800', subtext: 'text-slate-300' },
  amber: { bg: 'bg-amber-700', iconText: 'text-amber-700', subtext: 'text-amber-200' },
  purple: { bg: 'bg-purple-900', iconText: 'text-purple-900', subtext: 'text-purple-200' },
  transparent: { bg: 'bg-transparent', iconText: 'text-white', subtext: 'text-white/60' },
};

export const PanelHeader: React.FC<PanelHeaderProps> = ({ 
    title, 
    subtitle, 
    color = 'blue', 
    icon, 
    rightElement,
    leftElement,
    centerElement,
    withStatusBar = true,
    headerTime = "9:41",
    className = ""
}) => {
  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className={`${colors.bg} flex-shrink-0 transition-colors duration-300 ${className}`}>
      {/* Integrated Status Bar */}
      {withStatusBar && (
        <div className="h-10 flex justify-between items-center px-6 pt-2">
            <span className="text-xs font-semibold text-white/90">{headerTime}</span>
            <div className="flex gap-1.5 items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
            </div>
        </div>
      )}

      <div className="px-6 py-2.5 flex items-center justify-between relative min-h-[52px]">
        {/* Absolute Centered Element */}
        {centerElement && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                {centerElement}
            </div>
        )}
        
        <div className="flex items-center justify-between w-full relative z-10">
          <div className="flex items-center">
            {leftElement ? (
                leftElement
            ) : (title || subtitle || icon) ? (
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {icon || <Landmark className={`w-3.5 h-3.5 ${colors.iconText}`} />}
                    </div>
                    <div>
                        <h3 className="text-[10px] whitespace-nowrap font-bold text-white tracking-wide uppercase">{title}</h3>
                        <p className={`text-[10px] ${colors.subtext}`}>{subtitle}</p>
                    </div>
                </div>
            ) : <div className="w-0" />}
          </div>
          {rightElement ? <div>{rightElement}</div> : <div className="w-0" />}
        </div>
      </div>
    </div>
  );
};
