import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';
import { PanelProps } from '../types';
import { PanelHeader } from '../../common-visuals/PanelHeader';

// Sample workers with different banks and Albor IDs
const workers = [
    { name: "María García", bank: "BI", amount: 2800, id: "GT-4421", alborId: "@maria.bi" },
    { name: "Carlos López", bank: "BAM", amount: 3200, id: "GT-5512", alborId: "@carlos.bam" },
    { name: "Ana Pérez", bank: "BR", amount: 2500, id: "GT-3301", alborId: "@ana.br" },
    { name: "Luis Méndez", bank: "BR", amount: 1950, id: "GT-2193", alborId: "@luis.br" },
    { name: "Sofía Ruiz", bank: "BI", amount: 4100, id: "GT-5592", alborId: "@sofia.bi" },
    { name: "Pedro Alvarado", bank: "BR", amount: 2200, id: "GT-1120", alborId: "@pedro.br" },
];

export { workers };

export const Panel0_Selection: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
             {/* Header - Standardized */}
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

            {/* Employee List */}
            <div className="flex-grow p-4 space-y-2 overflow-auto">
                 {/* Information Header using User's context */}
                 <div className="mb-4 px-1">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-wide">Nómina - Adelantos Disponibles</h3>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                        Lista verificada de empleados de Cooperativa Cañaveral (Banrural) elegibles para adelanto de salario inmediato.
                    </p>
                 </div>

                 {workers.map((worker, i) => {
                    const isSelected = animationState.selectedWorkerIndex === i;
                    return (
                        <div
                            key={i}
                            onClick={() => setAnimationState(s => ({ ...s, selectedWorkerIndex: i }))}
                            className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                                isSelected
                                ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 dark:border-blue-600 ring-2 ring-blue-500/20'
                                : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-blue-300'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}>
                                        <Users className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-900 dark:text-white">{worker.name}</p>
                                        <div className="flex items-center gap-1.5">
                                            <div className="flex items-center gap-0.5 px-1 py-px bg-amber-50 dark:bg-amber-900/20 rounded border border-amber-200/50 dark:border-amber-700/30">
                                                <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                                                <span className="text-[8px] font-medium text-amber-700 dark:text-amber-400">{worker.alborId}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">{worker.amount.toLocaleString()} PUSD</span>
                                    {isSelected && <CheckCircle className="w-4 h-4 text-blue-600" />}
                                </div>
                            </div>
                        </div>
                    );
                 })}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  disabled={animationState.selectedWorkerIndex === null || animationState.selectedWorkerIndex === undefined}
                  onClick={() => onNext()}
                  className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    animationState.selectedWorkerIndex !== null && animationState.selectedWorkerIndex !== undefined
                      ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:scale-95'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                  }`}
                >
                  Revisar Adelanto
                </button>
            </div>
        </div>
    );
};
