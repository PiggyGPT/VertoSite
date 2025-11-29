import React, { useState, useEffect } from "react";
import { Server, Monitor, Clock, CheckCircle, ShieldCheck, Cpu, Database, LifeBuoy, ArrowRight } from "lucide-react";
import hishamImage from "@assets/hisham_1754986415368.png";

const animationStyles = `
  @keyframes pulse-green {
    0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    50% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
  }
  .animate-pulse-green { animation: pulse-green 2s infinite cubic-bezier(0.4, 0, 0.6, 1); }
`;

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800">
        <Icon className="w-6 h-6 text-orange-500" />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="mt-1 text-base text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const FounderBanner = () => (
  <div className="rounded-xl p-6 md:p-8 mt-8">
    <div className="flex flex-col md:flex-row items-start gap-6">
      <img src={hishamImage} alt="Hisham Anwar" className="w-16 h-16 rounded-full object-cover ring-4 ring-white/50 dark:ring-slate-950/50 flex-shrink-0" />
      <div>
        <blockquote className="text-lg md:text-xl font-medium leading-snug text-slate-800 dark:text-slate-100 border-l-4 border-orange-500 pl-5">
          <p>"Imagine explaining a $100M loss to your board because your operations failed at 3 AM. We bring you Google's operational rigor to protect your treasury."</p>
        </blockquote>
        <footer className="mt-4">
          <p className="font-semibold text-slate-900 dark:text-white">Hisham Anwar</p>
          <p className="text-sm font-medium text-orange-500">CTO | Ex-Google Head of Product</p>
        </footer>
      </div>
    </div>
  </div>
);

const ServiceHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
    {icon && React.cloneElement(icon as React.ReactElement, { className: 'w-3 h-3' })}
    <span>{title}</span>
  </div>
);

const ServiceVisual = () => {
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
        if (newHours >= 6 && newHours < 14) setActiveSOC(locations[0]);
        else if (newHours >= 14 && newHours < 22) setActiveSOC(locations[1]);
        else setActiveSOC(locations[2]);
        return { hours: newHours, minutes: newMinutes };
      });
    }, 50);
    return () => clearInterval(clockInterval);
  }, []);

  const formattedTime = `${String(timeData.hours).padStart(2, '0')}:${String(timeData.minutes).padStart(2, '0')}`;

  return (
    <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
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
            <div className="flex justify-between items-center text-sm">
              <div className="flex-1">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Environment</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">Production</p>
              </div>
              <div className="flex-1 text-right">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Location</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">sa-east1-siloed</p>
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
  );
};

export default function ServiceSection() {
  return (
    <section className="py-16">
      <div className="w-full border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="lg:col-span-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Service</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">24/7 Global Operations</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">Maintain operational integrity for your self-hosted stack with 24/7 monitoring and support by our global SOC teams.</p>
            </div>
            <div className="lg:hidden my-10">
              <ServiceVisual />
            </div>
            <div className="space-y-6 md:space-y-8 mt-10 mb-10">
              <FeatureItem icon={Database} title="Data Sovereignty & Control" description="Deploy Verto nodes in your environment—on-prem or private cloud—so your keys and data never leave your perimeter." />
              <FeatureItem icon={LifeBuoy} title="Embedded Global Expertise" description="Our Security Operations Centers provide continuous, round-the-clock monitoring and incident response." />
              <FeatureItem icon={ShieldCheck} title="Institutional Rigor" description="Leadership from the Federal Reserve, Google, and PayPal translates TradFi risk management to digital assets." />
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">
              <span>Learn About Our Service Model</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-full max-w-md">
              <ServiceVisual />
            </div>
          </div>
        </div>
        <FounderBanner />
        </div>
      </div>
    </section>
  );
}
