import React from 'react';
import { Landmark, Building, Receipt, ChevronDown, CreditCard } from "lucide-react";
import { PanelProps } from "../types";
import { SwipeButton } from "../../common-visuals/SwipeButton";
import { PanelHeader } from "../../common-visuals/PanelHeader";
import { PanelSubheader } from "../../common-visuals/PanelSubheader";
import { ObjectCard } from "../../common-visuals/ObjectCard";

export const Panel1_Approval: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
            {/* Bank Header - Integrated View */}
            <PanelHeader 
                title="BANCO INDUSTRIAL" 
                subtitle="Cooperativa Cañaveral" 
                color="blue" 
                rightElement={
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                        <span className="text-[9px] font-medium text-blue-700 dark:text-blue-300">@pantaleon.bi</span>
                    </div>
                }
            />

            {/* Client Info Bar - Removed */}

             {/* Approval Content - Streamlined */}
             <div className="flex-1 p-4 pb-0 overflow-hidden flex flex-col gap-3">
               {/* Invoice Card - Flexible Height */}
                   <div className="flex-1 min-h-0 flex flex-col">
                        <ObjectCard 
                            label="Invoice #INV-2024-0847"
                            amount="12,500.00"
                            currency="PUSD"
                            expanded={true}
                            
                            // New Issuer Header
                            issuer={{
                                name: "Cooperativa Cañaveral",
                                id: "@coop.canaveral.br",
                                bank: "BANRURAL",
                                icon: <Building className="w-5 h-5" />,
                                color: 'green'
                            }}

                            // Custom Header Layout (Above Amount)
                            topContent={
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[9px] text-slate-400 font-medium">Factura</p>
                                        <p className="text-[9px] text-slate-400 font-medium">Due Date</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">#INV-2024-0847</p>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">24 Oct 2024</p>
                                    </div>
                                </div>
                            }

                            className="flex-1 shadow-lg"
                        >
                             <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 -mx-2 px-2 py-1.5 rounded-lg transition-colors">
                                <div className="flex items-center gap-2">
                                    <Receipt className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    <span className="text-[10px] font-medium text-slate-300 group-hover:text-blue-600 transition-colors">
                                        Ver Detalles de Factura
                                    </span>
                                </div>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                             </div>
                        </ObjectCard>
                   </div>

                   {/* Paying With - Redesigned to match Client Select */}
                   <div className="p-3 rounded-xl border border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-900/10 flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-sm ring-2 ring-blue-100 dark:ring-blue-900/50">
                                 <CreditCard className="w-4 h-4" />
                             </div>
                             <div>
                                <p className="text-[9px] text-blue-500 dark:text-blue-400 uppercase font-bold mb-0.5">Cuenta Albor</p>
                                <p className="text-xs font-bold text-slate-900 dark:text-white">5,000,000 PUSD</p>
                             </div>
                        </div>
                        <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-white/60 dark:bg-white/5 rounded border border-blue-200 dark:border-blue-700/50">
                             <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                             <span className="text-[9px] font-medium text-blue-700 dark:text-blue-300">@pantaleon.bi</span>
                        </div>
                   </div>
            </div>

            {/* Approve Button */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex-shrink-0">
                <SwipeButton 
                    text="Deslizar para Aprobar" 
                    onComplete={() => {
                        setAnimationState(s => ({...s, swipe1: true}));
                        setTimeout(onNext, 1000);
                    }}
                    isCompleted={animationState.swipe1}
                    completedText="Aprobado"
                    color="bg-blue-500"
                />
            </div>
        </div>
    );
};
