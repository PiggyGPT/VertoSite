import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, Gauge, SlidersHorizontal, Shield } from "lucide-react";
import danielImage from "@assets/daniel_1754986415369.png";

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800">
        <Icon className="w-6 h-6 text-cyan-500" />
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
      <img src={danielImage} alt="Daniel Garrie" className="w-16 h-16 rounded-full object-cover ring-4 ring-white/50 dark:ring-slate-950/50 flex-shrink-0" />
      <div>
        <blockquote className="text-lg md:text-xl font-medium leading-snug text-slate-800 dark:text-slate-100 border-l-4 border-cyan-500 pl-5">
          <p>"DOJ audits require you to report the 'why' behind every transaction, not just the hash. We build the evidence file for you, before you need it."</p>
        </blockquote>
        <footer className="mt-4">
          <p className="font-semibold text-slate-900 dark:text-white">Daniel Garrie</p>
          <p className="text-sm font-medium text-cyan-500">General Counsel | Fmr. Advisor to DOJ & DTCC</p>
        </footer>
      </div>
    </div>
  </div>
);

const ComplianceVisual = () => {
  const [currentPanel, setCurrentPanel] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentPanel(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(cycle);
  }, []);

  const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
  const panelVisibleClasses = "opacity-100 translate-x-0";
  const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
  const panelHiddenRightClasses = "opacity-0 translate-x-full";

  const getPanelClasses = (panelIndex: number) => {
    if (currentPanel === panelIndex) return `${panelBaseClasses} ${panelVisibleClasses}`;
    if (currentPanel > panelIndex) return `${panelBaseClasses} ${panelHiddenLeftClasses}`;
    return `${panelBaseClasses} ${panelHiddenRightClasses}`;
  };

  return (
    <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
      <div className="relative w-full max-w-lg mx-auto h-[400px] overflow-x-hidden">
        <div className={getPanelClasses(0)} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
          <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">AI Risk Ratings</h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-slate-700 dark:text-slate-300">CCTP Protocol</span>
                <span className="font-mono font-bold text-green-500">AAA</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Curve Finance</span>
                <span className="font-mono font-bold text-yellow-500">AA</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Origin Wallet</span>
                <span className="font-mono font-bold text-orange-500">A</span>
              </div>
            </div>
            <button className="flex items-center justify-center w-full space-x-2 mt-6 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <MessageCircle className="w-5 h-5 text-cyan-500" /><span>Explain with AI</span>
            </button>
          </div>
        </div>

        <div className={getPanelClasses(1)} style={{ zIndex: currentPanel === 1 ? 3 : 1 }}>
          <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Policy Engine</h3>
            <div className="space-y-2 text-sm font-mono text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">IF amount &gt; $10k AND risk_rating &lt; BBB</div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">THEN require_ciso_approval</div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
              <span className="font-bold text-blue-700 dark:text-blue-400 text-lg">APPROVED</span>
              <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">Policy conditions satisfied.</p>
            </div>
          </div>
        </div>

        <div className={getPanelClasses(2)} style={{ zIndex: currentPanel === 2 ? 3 : 1 }}>
          <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Compliance Report</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Payment ID</span>
                <span className="text-sm font-mono text-slate-800 dark:text-slate-200">#4928-LIQ</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Risk Assessment</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">PASSED</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Policy Check</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">PASSED</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Final Status</span>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComplianceSection() {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-16">
      <div className="w-full border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="lg:col-span-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500">Compliance</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">AI-Powered Compliance</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">Automate compliance with AI-powered monitoring, enforcement and reporting that satisfies financial regulators.</p>
            </div>
            <div className="lg:hidden my-10">
              <ComplianceVisual />
            </div>
            <div className="space-y-6 md:space-y-8 mt-10 mb-10">
              <FeatureItem icon={Gauge} title="Explainable Risk Ratings" description="AI generates clear, transparent risk scores for every counterparty, with full data lineage for audits." />
              <FeatureItem icon={SlidersHorizontal} title="Policy-Driven Controls" description="Define your risk appetite once. Our platform enforces your policies on every transaction automatically." />
              <FeatureItem icon={Shield} title="Automated Audit Trails" description="Generate human-readable, verifiable logs of every compliance decision for internal teams and regulators." />
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
              <span>Request Compliance Demo</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-full max-w-md">
              <ComplianceVisual />
            </div>
          </div>
        </div>
        <FounderBanner />
        </div>
      </div>
    </section>
  );
}
