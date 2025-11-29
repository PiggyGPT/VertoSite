import React, { useState, useEffect } from "react";
import { User, Settings, ChevronDown, Zap, Lock } from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

const VisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-3 md:p-4 overflow-hidden">
    {children}
  </div>
);

export default function PaymentsSection() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentPanel(prev => {
        if (prev === 0) {
          setButtonClicked(true);
          setTimeout(() => setButtonClicked(false), 500);
          setTimeout(() => setCurrentPanel(1), 600);
          return prev;
        } else if (prev === 1) {
          setButtonClicked(true);
          setTimeout(() => setButtonClicked(false), 500);
          setTimeout(() => setCurrentPanel(2), 600);
          return prev;
        } else {
          return 0;
        }
      });
    }, 3500);
    return () => clearInterval(cycle);
  }, []);

  const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
  const panelVisibleClasses = "opacity-100 translate-x-0";
  const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
  const panelHiddenRightClasses = "opacity-0 translate-x-full";

  const panel1Classes = `${panelBaseClasses} ${currentPanel === 0 ? panelVisibleClasses : panelHiddenLeftClasses}`;
  const panel2Classes = `${panelBaseClasses} ${currentPanel === 1 ? panelVisibleClasses : currentPanel < 1 ? panelHiddenRightClasses : panelHiddenLeftClasses}`;
  const panel3Classes = `${panelBaseClasses} ${currentPanel === 2 ? panelVisibleClasses : panelHiddenRightClasses}`;

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frictionless Checkout</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Send and receive digital asset payments seamlessly</p>
        </div>
        <VisualContainer>
          <div className="relative w-full max-w-lg mx-auto h-[410px]">
            <div className={panel1Classes} style={{ zIndex: currentPanel === 0 ? 3 : 1 }}>
              <div className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 h-full">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Tia Store</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">14 AUG 2025, 09:48:12</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">PAYMENT #4928</p>
                <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                <p className="text-sm text-slate-500 dark:text-slate-400">AMOUNT DUE</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-slate-800 dark:text-slate-200">120.00</p>
                  <p className="text-lg font-mono text-slate-600 dark:text-slate-300">BOBC</p>
                </div>
                <div className="p-2 bg-white rounded-lg mt-4 border border-slate-200 dark:border-slate-700">
                  <QRCodeSVG value="https://verto.exchange/pay?id=4928" size={120} fgColor="#000000" />
                </div>
                <button className={`w-full mt-4 py-3 text-white text-sm font-semibold rounded-lg font-sans transition-all duration-300 ${buttonClicked && currentPanel === 0 ? 'scale-90 bg-purple-600/60 shadow-lg ring-4 ring-purple-600/30' : 'scale-100 bg-purple-600 hover:bg-purple-600/90'} hover:scale-105`}>
                  Pay Now
                </button>
                <p className="text-xs text-slate-400 mt-6">Powered by Verto</p>
              </div>
            </div>

            <div className={panel2Classes} style={{ zIndex: currentPanel === 1 ? 3 : 1 }}>
              <div className="w-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col space-y-4 h-full">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-500" />
                    </div>
                    <p className="font-bold text-lg text-slate-800 dark:text-slate-200">John Doe</p>
                  </div>
                  <Settings className="w-5 h-5 text-slate-400 cursor-pointer" />
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pay with</p>
                  <div className="relative p-4 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-between cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-s font-semibold text-slate-800 dark:text-slate-200">Coinbase</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">12,500.50 USDC</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 dark:text-slate-200">12.00 USDC</span>
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </div>
                <button className={`flex items-center justify-center w-full space-x-2 px-4 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 ${buttonClicked && currentPanel === 1 ? 'scale-90 bg-purple-600/60 shadow-lg ring-4 ring-purple-600/30' : 'scale-100 bg-purple-600 hover:bg-purple-600/90'} hover:scale-105`}>
                  <Zap className="w-4 h-4" />
                  <span>Pay 12.00 USDC</span>
                </button>
              </div>
            </div>

            <div className={panel3Classes} style={{ zIndex: currentPanel === 2 ? 3 : 1 }}>
              <div className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center font-mono border border-slate-200 dark:border-slate-700 h-full">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Payment Confirmed</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">14 AUG 2025, 09:52:34</p>
                <div className="my-4 border-t border-dashed border-slate-300 dark:border-slate-700 w-full"></div>
                <div className="w-full text-center mb-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">RECEIVED</p>
                  <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">120.00</p>
                  <p className="text-lg font-mono text-slate-600 dark:text-slate-300">BOBC</p>
                </div>
                <p className="text-xs text-slate-400 mt-4">Powered by Verto</p>
              </div>
            </div>
          </div>
        </VisualContainer>
      </div>
    </section>
  );
}
