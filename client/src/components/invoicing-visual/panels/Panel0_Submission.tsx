import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, Building, Search, ChevronDown, CheckCircle, Receipt, CreditCard } from "lucide-react";
import { PanelProps } from "../types";
import { PanelHeader } from "../../common-visuals/PanelHeader";
import { ObjectCard } from "../../common-visuals/ObjectCard";

export const Panel0_Submission: React.FC<PanelProps> = ({ isActive, animationState, setAnimationState, onNext }) => {
    
    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
            {/* Bank Header - BANRURAL */}
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

            {/* Content Area */}
            <div className="flex-1 p-4 pb-0 overflow-hidden flex flex-col gap-3">
               
               {/* Invoice Card - ObjectCard (Standardized) */}
               <div className="flex-1 min-h-0 flex flex-col">
                    <ObjectCard 
                        label="Invoice #INV-2024-0847"
                        amount="12,500.00"
                        currency="PUSD"
                        expanded={true}
                        
                        // Issuer: The Supplier (Self)
                        issuer={{
                            name: "Cooperativa Cañaveral",
                            id: "@coop.canaveral.br",
                            bank: "BANRURAL",
                            icon: <Building className="w-5 h-5" />,
                            color: 'green'
                        }}

                        // Header Metadata
                        topContent={
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-[9px] text-slate-400 font-medium">Factura</p>
                                    <p className="text-[9px] text-slate-500 font-medium">Due Date</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">#INV-2024-0847</p>
                                    <p className="text-[10px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">24 Oct 2024</p>
                                </div>
                            </div>
                        }

                        className="flex-1 shadow-lg"
                    >
                         {/* Details Link */}
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

               {/* Recipient Lookup (Bill To) - Matches Panel 1 Style */}
               <div className="relative">
                    <div 
                        className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                            animationState.recipientListOpen 
                                ? 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600' 
                                : animationState.recipientSelected
                                    ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-700/50'
                                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                        }`}
                        onClick={() => !animationState.recipientSelected && setAnimationState(s => ({ ...s, recipientListOpen: !s.recipientListOpen }))}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
                                animationState.recipientSelected ? 'bg-blue-600 text-white ring-2 ring-blue-100 dark:ring-blue-900/50' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                            }`}>
                                {animationState.recipientSelected ? <Building className="w-4 h-4" /> : <Search className="w-4 h-4" />}
                            </div>
                            <div>
                                <p className="text-[9px] text-blue-500 dark:text-blue-400 uppercase font-bold mb-0.5">Facturar a (Cliente)</p>
                                <p className={`text-xs font-bold ${animationState.recipientSelected ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                                    {animationState.recipientSelected ? "Grupo Pantaleon" : "Seleccionar Cliente..."}
                                </p>
                            </div>
                        </div>
                        {animationState.recipientSelected ? (
                            <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-white/60 dark:bg-white/5 rounded border border-blue-200 dark:border-blue-700/50">
                                <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                                <span className="text-[9px] font-medium text-blue-700 dark:text-blue-300">@pantaleon.bi</span>
                            </div>
                        ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                    </div>
               </div>

               {/* Mobile Toast Bottom Sheet */}
               <AnimatePresence>
                   {animationState.recipientListOpen && (
                       <>
                           {/* Backdrop */}
                           <motion.div 
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               exit={{ opacity: 0 }}
                               className="absolute inset-0 bg-black/30 z-40 rounded-2xl"
                               onClick={() => setAnimationState(s => ({ ...s, recipientListOpen: false }))}
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
                                   <p className="text-xs font-bold text-slate-900 dark:text-white">Seleccionar Cliente</p>
                                   <p className="text-[10px] text-slate-500">Clientes con cuenta Albor</p>
                               </div>
                               {/* List */}
                               <div className="p-2 space-y-1 max-h-48 overflow-y-auto">
                                   {[
                                       { name: "Cervecería Centro", id: "@cerveceria.gt" },
                                       { name: "Grupo Pantaleon", id: "@pantaleon.bi", selected: true },
                                       { name: "Walmart México y CA", id: "@walmart.cam" }
                                   ].map((client, i) => (
                                       <div 
                                           key={i} 
                                           className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                                               client.selected ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
                                           }`}
                                           onClick={() => setAnimationState(s => ({ ...s, recipientListOpen: false, recipientSelected: true }))}
                                       >
                                           <div className="flex items-center gap-3">
                                               <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                                                   client.selected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                               }`}>
                                                   {client.name.substring(0,2).toUpperCase()}
                                               </div>
                                               <div>
                                                   <p className="text-sm font-medium text-slate-900 dark:text-white">{client.name}</p>
                                                   <div className="flex items-center gap-1 mt-0.5">
                                                       <img src="/logos/svg/alborsun.svg" alt="" className="w-2.5 h-2.5" />
                                                       <span className="text-[10px] text-amber-600 dark:text-amber-400">{client.id}</span>
                                                   </div>
                                               </div>
                                           </div>
                                           {client.selected && <CheckCircle className="w-5 h-5 text-blue-600" />}
                                       </div>
                                   ))}
                               </div>
                           </motion.div>
                       </>
                   )}
               </AnimatePresence>
            </div>

            {/* Submit Button */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800">
                <button 
                  disabled={!animationState.recipientSelected}
                  onClick={() => {
                    if (animationState.swipe0 || !animationState.recipientSelected) return;
                    setAnimationState(s => ({...s, swipe0: true}));
                    setTimeout(onNext, 1000);
                  }}
                  className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    animationState.swipe0 
                      ? 'bg-green-600 text-white shadow-none' 
                      : animationState.recipientSelected
                        ? 'bg-green-600 text-white shadow-lg hover:bg-green-700 active:scale-95'
                        : 'bg-green-800/30 text-green-400/50 cursor-not-allowed border border-green-700/30'
                  }`}
                >
                  {animationState.swipe0 ? (
                    <><CheckCircle className="w-5 h-5" /> Generando Factura</>
                  ) : (
                    <>Enviar Factura</>
                  )}
                </button>
            </div>
          </div>
    );
};
