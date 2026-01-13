
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PanelHeader } from "../common-visuals/PanelHeader";
import { Table, ArrowDownLeft, ArrowUpRight, Landmark } from "lucide-react";

// CONSTANTS
const ALBOR_SUN_LOGO = "/logos/svg/alborsun.svg";

interface WalletViewPanelProps {
    onComplete?: () => void;
    onReceiveClick?: () => void;
    onPayClick?: () => void;
    receiveLabel?: string;
    payLabel?: string;
    showHistory?: boolean;
    autoCompleteDelay?: number;
    actionElement?: React.ReactNode;
    username?: string;
    userSubheader?: string;
    bankLogo?: string;
    profileImage?: string;
    bottomElement?: React.ReactNode;
    hideBalance?: boolean;
    balance?: string;
    transactions?: Array<{ id: string; type: string; entity: string; amount: string; date: string }>;
}

export const WalletViewPanel = ({ 
    onComplete, 
    onReceiveClick, 
    onPayClick, 
    receiveLabel = "Receive", 
    payLabel = "Pay",
    showHistory = true,
    autoCompleteDelay = 8000,
    actionElement,
    username = "@mariasilva",
    userSubheader = "BANRURAL",
    bankLogo = "/logos/banrural.jpg",
    profileImage = "/profiles/maria_silva.png",
    bottomElement,
    hideBalance = false,
    balance = "10,000.00",
    transactions = [
        { id: "TXN-8821", type: "Payment Received", entity: "Walmart Mexico", amount: "+8,500.00", date: "Today" },
        { id: "TXN-8820", type: "Transfer Out", entity: "Supplier A", amount: "-1,200.00", date: "Yesterday" },
        { id: "TXN-8819", type: "Transfer Out", entity: "Logistics Corp", amount: "-350.00", date: "Yesterday" },
    ]
}: WalletViewPanelProps) => {
    useEffect(() => {
        if (onComplete && autoCompleteDelay > 0) {
            const timer = setTimeout(onComplete, autoCompleteDelay);
            return () => clearTimeout(timer);
        }
    }, [onComplete, autoCompleteDelay]);


    return (
        <div className="h-full w-full bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
             {/* Header - Glassy Badge for User ID */}
             <PanelHeader 
                title=""
                subtitle=""
                color="transparent" 
                leftElement={
                    <div className="w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                        <img src={profileImage} alt={username} className="w-full h-full object-cover" />
                    </div>
                }
                centerElement={
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10 shadow-xl">
                        <div className="flex items-center -space-x-1.5">
                            <div className="w-[22px] h-[22px] bg-[#2169D1] rounded-full flex items-center justify-center shadow-sm overflow-hidden z-10 border border-white/10">
                                <img src={ALBOR_SUN_LOGO} alt="Albor" className="w-full h-full object-contain p-1" />
                            </div>
                            <div className="w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden z-20 border border-white/20">
                                <img src={bankLogo} alt={userSubheader} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col -gap-0.5">
                            <h2 className="text-[9.5px] whitespace-nowrap font-semibold text-white tracking-tight">{username}</h2>
                            <p className="text-[7.5px] text-white/70 font-semibold tracking-widest uppercase">{userSubheader}</p>
                        </div>
                    </div>
                }
                className="absolute top-0 left-0 right-0 z-20"
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Top Section: Albor Gradient Hero */}
                <div className="shrink-0 flex flex-col">
                    <div 
                        className="px-6 pt-32 pb-6 flex flex-col justify-center items-center relative overflow-hidden rounded-b-[40px] shadow-[0_45px_100px_-20px_rgba(33,105,209,0.3)]"
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
                        
                        {/* Balance Content */}
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="text-center relative z-10 w-full"
                        >
                            {!hideBalance && (
                                <div className="flex flex-col items-center mb-12">
                                    <h2 className="text-5xl font-bold text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] leading-none">
                                        {balance.split('.')[0]}<span className="text-xl text-white/40 font-normal">.{balance.split('.')[1] || '00'}</span>
                                    </h2>
                                    <span className="text-[11px] font-semibold text-white/40 tracking-[0.3em] uppercase mt-2.5">GTQ</span>
                                </div>
                            )}
                            
                            {/* Action Area */}
                            {actionElement ? (
                                <div className="w-full">
                                    {actionElement}
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-2.5 w-full">
                                    <button 
                                        onClick={onReceiveClick}
                                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/5 text-white transition-all hover:bg-white/20 active:scale-95 font-semibold text-[11px] shadow-sm"
                                    >
                                        <ArrowDownLeft className="w-3.5 h-3.5 text-white/50" />
                                        <span>{receiveLabel}</span>
                                    </button>
                                    <button 
                                        onClick={onPayClick}
                                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-slate-900 transition-all hover:bg-slate-50 active:scale-95 font-semibold text-[11px] shadow-md"
                                    >
                                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                                        <span>{payLabel}</span>
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Content Area */}
                {bottomElement && (
                    <div className="flex-1 flex flex-col">
                        {bottomElement}
                    </div>
                )}

                {/* Table Section (Transaction History) */}
                {showHistory && !bottomElement && (
                    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950/95 mt-2">
                        <div className="px-5 py-3 flex items-center justify-between sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
                            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Transaction History</span>
                            <Table className="w-3 h-3 text-slate-400" />
                        </div>

                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {transactions.map((tx, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="px-5 py-3 flex items-center justify-between hover:bg-white dark:hover:bg-slate-900 transition-colors"
                                >
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">{tx.entity}</span>
                                        <span className="text-[9px] text-slate-400 font-mono">{tx.id} • {tx.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className={`text-[11px] font-semibold font-mono ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-slate-700 dark:text-slate-300'}`}>
                                            {tx.amount}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
