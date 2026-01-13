import React from 'react';
import { PanelProps } from '../types';
import { SwipeButton } from '../../common-visuals/SwipeButton';
import { PanelHeader } from '../../common-visuals/PanelHeader';
import { ObjectCard } from '../../common-visuals/ObjectCard';
import { CreditCard, Receipt, ChevronDown, User, Building } from 'lucide-react';

export const Panel1_Confirmation: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext, selectedWorker }) => {
    
    if (!selectedWorker) return null;

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
            {/* Header - Standardized BANRURAL */}
            <PanelHeader
                title="BANRURAL"
                subtitle="Cooperativa Cañaveral"
                color="green" 
                 rightElement={
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                        <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                        <span className="text-[9px] font-medium text-green-700 dark:text-green-300">@coop.canaveral.br</span>
                    </div>
                }
            />

            <div className="flex-1 p-4 pb-0 overflow-hidden flex flex-col gap-3">
                {/* ObjectCard - Employee Details */}
                <div className="flex-1 min-h-0 flex flex-col">
                    <ObjectCard
                        label="Payroll Advance"
                        subLabel={`Employee: ${selectedWorker.name}`}
                        amount={selectedWorker.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}
                        currency="PUSD"
                        expanded={true}
                        
                        issuer={{
                            name: selectedWorker.name,
                            id: selectedWorker.alborId,
                            bank: selectedWorker.bank === 'BI' ? 'BANCO INDUSTRIAL' : selectedWorker.bank === 'BAM' ? 'BAM' : 'BANRURAL',
                            icon: <User className="w-5 h-5" />,
                            color: 'blue'
                        }}

                        topContent={
                             <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-[9px] text-slate-400 font-medium">Adelanto de Salario</p>
                                    <p className="text-[9px] text-slate-500 font-medium whitespace-nowrap">Due Date: End of Month</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">#{selectedWorker.id}</p>
                                    <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">30 Oct 2024</p>
                                </div>
                            </div>
                        }
                        className="flex-1 shadow-lg"
                    >
                         <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 -mx-2 px-2 py-1.5 rounded-lg transition-colors">
                            <div className="flex items-center gap-2">
                                <Receipt className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                <span className="text-[10px] font-medium text-slate-300 group-hover:text-blue-600 transition-colors">
                                    Ver Detalles de Nómina
                                </span>
                            </div>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                         </div>
                    </ObjectCard>
                </div>

                {/* Paying From - Employer */}
                <div className="p-3 rounded-xl border border-green-200 dark:border-green-700/50 bg-green-50 dark:bg-green-900/10 flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-600 text-white shadow-sm ring-2 ring-green-100 dark:ring-green-900/50">
                             <CreditCard className="w-4 h-4" />
                         </div>
                         <div>
                            <p className="text-[9px] text-green-600 dark:text-green-400 uppercase font-bold mb-0.5">Cuenta Albor (Empleador)</p>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">150,000 PUSD</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-white/60 dark:bg-white/5 rounded border border-green-200 dark:border-green-700/50">
                         <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                         <span className="text-[9px] font-medium text-green-700 dark:text-green-300">@coop.canaveral.br</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
             <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex-shrink-0">
                <SwipeButton 
                    text="Deslizar para Enviar"
                    onComplete={() => {
                        setAnimationState(s => ({...s, swipe1: true}));
                        setTimeout(onNext, 1000);
                    }}
                    isCompleted={animationState.swipe1}
                    completedText="Enviado"
                    color="bg-green-600"
                />
            </div>
        </div>
    )
};
