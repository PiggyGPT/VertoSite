import React from 'react';
import { Landmark, Building, Receipt, ChevronDown, CreditCard } from "lucide-react";
import { SwipeButton } from "../../common-visuals/SwipeButton";
import { PanelHeader } from "../../common-visuals/PanelHeader";
import { ObjectCard } from "../../common-visuals/ObjectCard";

export const Panel1_Minting: React.FC<any> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
            {/* Header - BI PANAMA */}
            <PanelHeader 
                title="BANCO REPÚBLICA PANAMÁ" 
                subtitle="Loan Disbursement" 
                color="indigo" 
            />

             {/* Content */}
             <div className="flex-1 p-4 pb-0 overflow-hidden flex flex-col gap-3">
                {/* Loan Details */}
                   <div className="flex-1 min-h-0 flex flex-col">
                        <ObjectCard 
                            label="Disbursement Amount"
                            amount="5,000,000.00"
                            currency="PUSD"
                            expanded={true}
                            
                            issuer={{
                                name: "Grupo Pantaleon",
                                id: "@pantaleon.bi",
                                bank: "BANCO INDUSTRIAL",
                                icon: <Building className="w-5 h-5" />,
                                color: 'blue'
                            }}

                            topContent={
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[9px] text-slate-400 font-medium">Credit Facility</p>
                                        <p className="text-[9px] text-slate-500 font-medium">Maturity Date</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">#CR-8821</p>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">11/10/2026</p>
                                    </div>
                                </div>
                            }

                            className="flex-1 shadow-lg"
                        >
                             {/* Details Link - Ver Detalles Section */}
                             <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 -mx-2 px-2 py-1.5 rounded-lg transition-colors">
                                <div className="flex items-center gap-2">
                                    <Receipt className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    <span className="text-[10px] font-medium text-slate-300 group-hover:text-blue-600 transition-colors">
                                        Ver Contrato de Crédito
                                    </span>
                                </div>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                             </div>
                        </ObjectCard>
                   </div>

                   {/* Approved By - "Mint & Transfer" Context */}
                   <div className="p-3 rounded-xl border border-indigo-200 dark:border-indigo-700/50 bg-indigo-50 dark:bg-indigo-900/10 flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-100 dark:ring-indigo-900/50">
                                 <CreditCard className="w-4 h-4" />
                             </div>
                             <div>
                                <p className="text-[9px] text-indigo-500 dark:text-indigo-400 uppercase font-bold mb-0.5">Source of Funds</p>
                                <p className="text-xs font-bold text-slate-900 dark:text-white">Albor Reserve</p>
                             </div>
                        </div>
                   </div>
            </div>

            {/* Approve Button */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex-shrink-0">
                <SwipeButton 
                    text="Mint & Transfer PUSD" 
                    onComplete={() => {
                        setAnimationState((s: any) => ({...s, swipe1: true}));
                        setTimeout(onNext, 1000);
                    }}
                    isCompleted={animationState.swipe1}
                    completedText="Minted"
                    color="bg-indigo-600"
                />
            </div>
        </div>
    );
};

