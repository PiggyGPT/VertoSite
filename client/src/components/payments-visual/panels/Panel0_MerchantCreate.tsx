import React, { useState } from 'react';
import { Store, QrCode, Copy } from 'lucide-react';
import { PanelHeader } from '../../common-visuals/PanelHeader';
import { PanelProps } from '../types';

export const Panel0_MerchantCreate: React.FC<PanelProps> = ({ onNext, animationState }) => {
  const [internalShowQr, setInternalShowQr] = useState(false);
  const showQr = animationState?.showQr || internalShowQr;
  const [amount, setAmount] = useState<string>("125.00");

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900">
        {/* Header - Store (BAM/Banrural) - Let's use BAM (Orange/Blue) or Banrural (Green). 
            User said "Tienda La Bendicion (BAM/Banrural)". 
            Let's use BAM style (Blue/Orange) for differentiation from Green Banrural Payer. or maybe Green Store?
            Actually, let's use BANRURAL for store to keep it simple or maybe a specific color. 
            Store = Tienda La Bendición. Let's make it Amber/Orange to act as a "BAM" or specific commercial color?
            Or Green for Banrural since user explicitly said "Banrural" in one context.
            Let's stick to "BANRURAL" title -> "Tienda La Bendición" subtitle -> Green. 
        */}
        <PanelHeader 
            title="BANRURAL" 
            subtitle="Tienda La Bendición" 
            color="green" 
            rightElement={
                <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                    <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                    <span className="text-[9px] font-medium text-green-700 dark:text-green-300">@tienda.br</span>
                </div>
            }
        />
        
        <div className="flex-1 flex flex-col p-6">
            {!showQr ? (
                <>
                    {/* Input State */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                        <div className="text-center w-full">
                            <p className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Ingresar Monto</p>
                            <div className="relative inline-block">
                                <input 
                                    type="text" 
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-transparent text-5xl font-bold text-slate-900 dark:text-white text-center focus:outline-none"
                                    placeholder="0.00"
                                />
                                <p className="text-xs font-bold text-slate-400 mt-1">PUSD</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 w-full max-w-[200px]">
                             {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '⌫'].map((num, i) => (
                                 <button 
                                    key={i}
                                    className="h-10 rounded-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-lg font-semibold text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center active:scale-95"
                                 >
                                     {num}
                                 </button>
                             ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => setInternalShowQr(true)}
                        className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-green-200/50 dark:shadow-none flex items-center justify-center gap-2 transition-transform active:scale-95 mt-auto"
                    >
                        <QrCode className="w-4 h-4" /> Generar Cobro QR
                    </button>
                </>
            ) : (
                <>
                    {/* QR Display State */}
                    <div className="flex-1 flex flex-col items-center justify-center relative animate-in fade-in zoom-in duration-300">
                         <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 relative z-10 mb-8">
                            <QrCode className="w-48 h-48 text-slate-900" strokeWidth={1.5} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-slate-100">
                                    <div className="w-full h-full bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                                         <img src="/logos/svg/alborsun.svg" alt="" className="w-10 h-10" />
                                    </div>
                                </div>
                            </div>
                         </div>
                         
                         <div className="text-center space-y-1">
                             <p className="text-2xl font-bold text-slate-900 dark:text-white">{amount} PUSD</p>
                             <p className="text-sm text-slate-400">Escaneando para cobrar...</p>
                         </div>
                    </div>

                    {/* Copy Link Button (Functions as auto-advance trigger in manual mode, but strictly visual in auto mode) */}
                    <button 
                        className="w-full py-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-auto border border-slate-200 dark:border-slate-700"
                    >
                        <Copy className="w-3.5 h-3.5" /> Copiar Enlace de Pago
                    </button>
                </>
            )}
        </div>
    </div>
  );
};
