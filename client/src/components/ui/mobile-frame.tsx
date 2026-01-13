import React from 'react';

export const MobileFrame = ({ 
  children, 
  className = "", 
  headerTime = "9:41",
  statusBarColor = "bg-slate-100 dark:bg-slate-800"
}: { 
  children: React.ReactNode, 
  className?: string, 
  headerTime?: string,
  statusBarColor?: string
}) => (
  <div className={`relative w-full max-w-[320px] h-[580px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border-[6px] border-slate-200 dark:border-slate-800 overflow-hidden font-sans mx-auto ${className}`}>
    {/* Content Area */}
    <div className="h-full relative flex flex-col overflow-hidden rounded-[2rem]">
      {children}
    </div>
  </div>
);

