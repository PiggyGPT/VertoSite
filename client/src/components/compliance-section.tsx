import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const VisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
    {children}
  </div>
);

export default function ComplianceSection() {
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
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">AI-Powered Compliance</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Automate compliance monitoring with AI-powered risk assessment</p>
        </div>
        <VisualContainer>
          <div className="relative w-full max-w-lg mx-auto h-[480px] overflow-x-hidden">
            <div className={getPanelClasses(0)} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
              <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">AI Risk Ratings</h3>
                <div className="space-y-3">
                  {[{ name: "CCTP Protocol", rating: "AAA", color: "green" }, { name: "Curve Finance", rating: "AA", color: "yellow" }, { name: "Origin Wallet", rating: "A", color: "orange" }].map(item => (
                    <div key={item.name} className="p-3 rounded-lg flex justify-between items-center">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{item.name}</span>
                      <span className={`font-mono font-bold text-${item.color}-500`}>{item.rating}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center justify-center w-full space-x-2 mt-6 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span>Explain with AI</span>
                </button>
              </div>
            </div>

            <div className={getPanelClasses(1)} style={{ zIndex: currentPanel === 1 ? 3 : 1 }}>
              <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Policy Engine</h3>
                <div className="space-y-2 text-sm font-mono text-slate-600 dark:text-slate-400">
                  <div className="p-3 rounded">IF amount &gt; $10k AND risk_rating &lt; BBB</div>
                  <div className="p-3 rounded">THEN require_ciso_approval</div>
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
                  {[{ label: "Payment ID", value: "#4928-LIQ" }, { label: "Risk Assessment", value: "PASSED" }, { label: "Policy Check", value: "PASSED" }, { label: "Final Status", value: "VERIFIED" }].map(item => (
                    <div key={item.label} className="flex justify-between items-center p-3 rounded-lg">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item.label}</span>
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </VisualContainer>
      </div>
    </section>
  );
}
