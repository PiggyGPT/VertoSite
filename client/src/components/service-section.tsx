import React, { useState, useEffect } from "react";
import { Server, Monitor, Clock, CheckCircle, ShieldCheck, Cpu } from "lucide-react";

const animationStyles = `
  @keyframes pulse-green {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
  }
  .animate-pulse-green {
    animation: pulse-green 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

const ServiceHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
    {icon && React.cloneElement(icon as React.ReactElement, { className: 'w-3 h-3' })}
    <span>{title}</span>
  </div>
);

export default function ServiceSection() {
  const [activeSOC, setActiveSOC] = useState('New York');
  const [timeData, setTimeData] = useState({ hours: 6, minutes: 0 });

  useEffect(() => {
    const locations = ['New York', 'Barcelona', 'Singapore'];
    const clockInterval = setInterval(() => {
      setTimeData(prevTime => {
        let newMinutes = prevTime.minutes + 10;
        let newHours = prevTime.hours;
        if (newMinutes >= 60) {
          newMinutes = 0;
          newHours = (newHours + 1) % 24;
        }
        if (newHours >= 6 && newHours < 14) {
          setActiveSOC(locations[0]);
        } else if (newHours >= 14 && newHours < 22) {
          setActiveSOC(locations[1]);
        } else {
          setActiveSOC(locations[2]);
        }
        return { hours: newHours, minutes: newMinutes };
      });
    }, 50);
    return () => clearInterval(clockInterval);
  }, []);

  const formattedTime = `${String(timeData.hours).padStart(2, '0')}:${String(timeData.minutes).padStart(2, '0')}`;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">24/7 Global Operations</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Maintain operational integrity with 24/7 monitoring and support</p>
        </div>
        <div className="flex justify-center">
          <style>{animationStyles}</style>
          <div className="w-full max-w-xs md:max-w-sm p-4 md:p-5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col space-y-4 md:space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <h1 className="text-base font-bold text-slate-600 dark:text-slate-300">Service Dashboard</h1>
              <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 rounded-full">
                <ShieldCheck className="w-3 h-3" />
                <span className="text-xs font-semibold uppercase tracking-wider">24/7 SOC</span>
              </div>
            </div>

            <div>
              <ServiceHeader title="Self-Hosted Deployment" icon={<Server />} />
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500">Operational Status</p>
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <p className="text-xl font-bold text-green-500 tracking-tight">99.99%</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ServiceHeader title="Active SOC Monitoring" icon={<Monitor />} />
              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="relative p-2 rounded-full bg-green-500 animate-pulse-green">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-semibold text-slate-600 dark:text-slate-300">{activeSOC}</p>
                    <span className="text-xs font-bold text-green-500 uppercase">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span className="text-xl font-mono font-semibold text-slate-600 dark:text-slate-300 tracking-tight">{formattedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
