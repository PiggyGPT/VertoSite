import React from 'react';
import { Landmark, Building, CheckCircle, ChevronDown, Coins, Globe, ArrowRight, Receipt } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PanelHeader } from '../../common-visuals/PanelHeader';
import { ObjectCard } from '../../common-visuals/ObjectCard';

export const Panel0_Selection: React.FC<any> = ({ isActive, animationState, setAnimationState, onNext }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden relative">
            {/* Header - BANCO REPÚBLICA PANAMÁ (Different Blue/Indigo) */}
            <PanelHeader 
                title="BANCO REPÚBLICA PANAMÁ" 
                subtitle="Corporate Lending" 
                color="indigo"
                rightElement={null}
            />

            <div className="flex-grow p-4 space-y-4 flex flex-col justify-center relative z-0">
               
               {/* 1. Loan Details Card */}
               <div className="flex-1 min-h-0 flex flex-col">
                   <ObjectCard 
                        label="Working Capital Loan"
                        subLabel="Approved Amount"
                        amount="5,000,000.00"
                        currency="USD"
                        expanded={true}
                        className="flex-1 shadow-lg"
                        
                        issuer={{
                            name: "Grupo Pantaleon S.A.",
                            id: "@grupo pantaleon.bi",
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


               {/* 2. Funding Method Selector (Matches Panel0_LoanDisbursement.tsx) */}
               <div className="relative">
                    {/* Selected State / Trigger */}
                    <div 
                        className={`p-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-between cursor-pointer ${
                            animationState.dropdownOpen 
                                ? 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600' 
                                : animationState.selectedOption
                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 dark:border-indigo-500'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                        }`}
                        onClick={() => !animationState.isSubmitting && setAnimationState((s: any) => ({ ...s, dropdownOpen: !s.dropdownOpen }))}
                    >
                        <div className="flex items-center gap-3">
                            {animationState.selectedOption === 'albor' ? (
                                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <img src="/logos/svg/alborsun.svg" alt="" className="w-4 h-4" />
                                </div>
                            ) : animationState.selectedOption === 'fiat' ? (
                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                    <Globe className="w-4 h-4" />
                                </div>
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                    <Coins className="w-4 h-4" />
                                </div>
                            )}
                            
                            <div>
                                <p className={`text-sm font-bold ${animationState.selectedOption ? 'text-indigo-900 dark:text-white' : 'text-slate-500'}`}>
                                    {animationState.selectedOption === 'albor' ? 'PUSD Transfer' : 
                                     animationState.selectedOption === 'fiat' ? 'SWIFT Transfer' : 'Seleccionar Método...'}
                                </p>
                                {animationState.selectedOption === 'albor' ? (
                                    <p className="text-[10px] text-indigo-600 dark:text-indigo-300 font-medium">Instant • 24/7</p>
                                ) : (
                                    <p className="text-[10px] text-slate-400 font-medium">Elegir canal de pago</p>
                                )}
                            </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${animationState.dropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
               </div>
            </div>

            {/* Mobile Toast Bottom Sheet - Matches Panel0_LoanDisbursement.tsx styling */}
            <AnimatePresence>
                {animationState.dropdownOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/30 z-40 rounded-2xl"
                            onClick={() => setAnimationState((s: any) => ({ ...s, dropdownOpen: false }))}
                        />
                        {/* Bottom Sheet */}
                        <motion.div 
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-2xl shadow-2xl border-t border-x border-slate-200 dark:border-slate-700 z-50 overflow-hidden"
                        >
                            {/* Handle */}
                            <div className="flex justify-center py-2">
                                <div className="w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
                            </div>
                            {/* Header */}
                            <div className="px-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                                <p className="text-xs font-bold text-slate-900 dark:text-white">Método de Desembolso</p>
                                <p className="text-[10px] text-slate-500">Opciones disponibles para Banco República</p>
                            </div>
                            {/* List */}
                            <div className="p-2 space-y-1">
                                {/* Option: SWIFT */}
                                <div 
                                    onClick={() => setAnimationState((s: any) => ({ ...s, selectedOption: 'fiat', dropdownOpen: false }))}
                                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                                        animationState.selectedOption === 'fiat' ? 'bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                            <Globe className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900 dark:text-white">SWIFT Transfer</p>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="text-[10px] text-slate-500">2-5 Días</span>
                                                <span className="text-[10px] font-bold text-slate-400">Fee $45.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {animationState.selectedOption === 'fiat' && <CheckCircle className="w-5 h-5 text-slate-500" />}
                                </div>

                                {/* Option: Albor (Preferred) */}
                                <div 
                                    onClick={() => setAnimationState((s: any) => ({ ...s, selectedOption: 'albor', dropdownOpen: false }))}
                                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                                        animationState.selectedOption === 'albor' ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800' : 'hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 border border-transparent'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                            <img src="/logos/svg/alborsun.svg" alt="" className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-medium text-indigo-900 dark:text-white">PUSD Transfer</p>
                                                <span className="bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">Albor</span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-300">Instantáneo</span>
                                                <span className="text-[10px] text-indigo-400">Fee 0.1%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {animationState.selectedOption === 'albor' && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Action Button */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 relative z-0 bg-white dark:bg-slate-900">
                <button 
                  disabled={!animationState.selectedOption}
                  onClick={() => {
                    if (animationState.isSubmitting || !animationState.selectedOption) return;
                    setAnimationState((s: any) => ({...s, isSubmitting: true}));
                    setTimeout(onNext, 1000); 
                  }}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    animationState.isSubmitting 
                      ? 'bg-indigo-600 text-white shadow-none' 
                      : animationState.selectedOption
                        ? 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 active:scale-95'
                        : 'bg-indigo-800/30 text-indigo-400/50 cursor-not-allowed border border-indigo-700/30'
                  }`}
                >
                  {animationState.isSubmitting ? (
                    <><CheckCircle className="w-5 h-5" /> Procesando Desembolso</>
                  ) : (
                    <>Desembolsar Fondos <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
            </div>
        </div>
    );
};
