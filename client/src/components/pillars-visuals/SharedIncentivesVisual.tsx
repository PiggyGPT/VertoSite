import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileFrame } from "../ui/mobile-frame";
import { PanelHeader } from "../common-visuals/PanelHeader";
import { Table, FileText, ChevronRight, CheckCircle2, ChevronLeft } from "lucide-react";

// CONSTANTS (Logos)
const ALBOR_SUN_LOGO = "/logos/svg/alborsun.svg";
const ALBOR_LOGO = "/logos/svg/albor.svg";
const BANRURAL_LOGO = "/logos/banrural.jpg";
const BI_LOGO = "/logos/banco_industrial.png";

export const SharedIncentivesPanel = ({ onBack }: { onBack: () => void }) => {
    // 0: Initial (Empty)
    // 1: Transaction Appears (Hero)
    // 2: Fees Distributed (Table)
    const [step, setStep] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const cycle = () => {
            setStep(0);
            
            // Show Transaction Card
            timeout = setTimeout(() => {
                setStep(1);
                
                // Show Fee Split
                timeout = setTimeout(() => {
                    setStep(2);
                }, 1000);
            }, 500);
        };

        cycle();
        return () => clearTimeout(timeout);
    }, []);

    const recipients = [
        { 
            id: "TX-FEE-01", 
            entity: "Banco Industrial", 
            amount: "+60.00", 
            time: "0.01s",
            logo: BI_LOGO,
            role: "Issuer"
        },
        { 
            id: "TX-FEE-02", 
            entity: "Banrural", 
            amount: "+100.00", 
            time: "0.01s",
            logo: BANRURAL_LOGO,
            role: "Acquirer"
        },
        { 
            id: "TX-FEE-03", 
            entity: "Albor Treasury", 
            amount: "+40.00", 
            time: "0.01s",
            logo: ALBOR_SUN_LOGO,
            bg: "bg-[#2169D1]", // Custom bg for Albor logo to match theme
            role: "Protocol"
        }
    ];

    return (
        <div className="h-full w-full bg-slate-50 dark:bg-slate-950 flex flex-col font-sans relative overflow-hidden">
             {/* Header - Glassy Badge for User ID */}
             <PanelHeader 
                title=""
                subtitle=""
                color="transparent" 
                leftElement={
                    <button onClick={onBack} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                }
                centerElement={
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10 shadow-xl">
                        <div className="w-[22px] h-[22px] bg-[#2169D1] rounded-full flex items-center justify-center shadow-sm overflow-hidden z-10 border border-white/10">
                            <img src={ALBOR_SUN_LOGO} alt="Albor" className="w-full h-full object-contain p-0.5" />
                        </div>
                        <div className="flex flex-col -gap-0.5 ml-1">
                            <h2 className="text-[9.5px] whitespace-nowrap font-semibold text-white tracking-tight">Albor Network</h2>
                            <p className="text-[7.5px] text-white/70 font-semibold tracking-widest uppercase">INTERCHANGE</p>
                        </div>
                    </div>
                }
                className="absolute top-0 left-0 right-0 z-20"
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Top Section: Gradient Hero */}
                <div className="shrink-0 flex flex-col">
                    <div 
                        className="px-6 pt-28 pb-10 flex flex-col justify-center items-center relative overflow-hidden rounded-b-[40px] shadow-[0_45px_100px_-20px_rgba(33,105,209,0.3)]"
                        style={{ 
                            background: 'linear-gradient(135deg, #2169D1 0%, #F1BD76 100%)',
                            backgroundColor: '#2169D1'
                        }}
                    >
                        {/* Subtle Corner Accents for depth */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(168,133,255,0.3),transparent_50%)] pointer-events-none" />
                        
                        {/* Metallic / Glass Sheen effect */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/10 to-white/5 pointer-events-none" />
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl pointer-events-none" />
                        
                        {/* HERO: Transaction Card (Factura Style) */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={step >= 1 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full relative z-10"
                        >
                            <div className="w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-[28px] p-5 flex flex-col items-center justify-between shadow-xl min-h-[140px]">
                                
                                {/* Amount Section (Left Aligned) */}
                                <div className="flex-1 flex flex-col items-start justify-center w-full px-1 mt-2 mb-2">
                                    <h2 className="text-5xl font-bold text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] leading-none">
                                        200<span className="text-xl text-white/80 font-normal">.00</span>
                                    </h2>
                                    <span className="text-[11px] font-semibold text-white/80 tracking-[0.3em] uppercase mt-2">Fees Collected</span>
                                </div>

                                {/* Footer: Factura # */}
                                <div className="w-full flex items-center justify-between pt-3 border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <FileText className="w-3.5 h-3.5 text-white/40" />
                                        <span className="text-[11px] font-bold text-white/80 tracking-tight">Factura #INV-2024-882</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-white/40" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Table Section: Fee Distribution */}
                <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 mt-2">
                    <div className="px-5 py-3 flex items-center justify-between sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Fee Distribution (2.0%)</span>
                        <Table className="w-3 h-3 text-slate-400" />
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        <AnimatePresence>
                            {step >= 2 && recipients.map((recipient, i) => (
                                <motion.div 
                                    key={recipient.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    className="px-5 py-4 flex items-center justify-between hover:bg-white dark:hover:bg-slate-900 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Bubble Icon (Logo) */}
                                        <div className={`w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm ${recipient.bg || 'bg-white'}`}>
                                            <img 
                                                src={recipient.logo} 
                                                alt={recipient.entity} 
                                                className={`w-full h-full ${recipient.id === 'TX-FEE-03' ? 'p-1 object-contain' : 'object-cover'}`} 
                                            />
                                        </div>
                                        
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{recipient.entity}</span>
                                            <span className="text-[9px] text-slate-400 font-mono flex items-center gap-1">
                                                {recipient.role} • {recipient.time}
                                                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[12px] font-bold font-mono text-emerald-600 dark:text-emerald-400">
                                            {recipient.amount}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SharedIncentivesVisual = () => {
    return (
        <MobileFrame>
            <SharedIncentivesPanel onBack={() => {}} />
        </MobileFrame>
    );
};
