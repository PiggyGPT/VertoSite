import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileFrame } from "../ui/mobile-frame";
import { CheckCircle, ShieldCheck, Banknote, FileText, ArrowRight, User, X, QrCode, Search, Globe, Coins, CreditCard, ChevronDown, ChevronRight, RefreshCw, Zap, Building } from "lucide-react";
import { WalletViewPanel } from "./WalletViewPanel";
import { SwipeButton } from "../common-visuals/SwipeButton";
import { PanelHeader } from "../common-visuals/PanelHeader";
import { ObjectCard } from "../common-visuals/ObjectCard";

// --- PANEL 1: AUTHENTICATION REQUEST (Buyer Side) ---
const Panel1_Authorization = ({ onComplete }: { onComplete: () => void }) => {
    const [status, setStatus] = useState<'pending' | 'approving' | 'approved'>('pending');

    useEffect(() => {
        const t1 = setTimeout(() => setStatus('approving'), 1500);
        const t2 = setTimeout(() => setStatus('approved'), 3000);
        const t3 = setTimeout(onComplete, 4500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    return (
        <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col relative overflow-hidden">
             {/* Header */}
             <div className="pt-8 pb-4 px-6 bg-white dark:bg-slate-800 shadow-sm z-10 flex justify-between items-center">
                 <div className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-tighter">Albor Trade Swipe</div>
                 <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                     <User className="w-4 h-4 text-slate-500" />
                 </div>
             </div>

             <div className="flex-1 p-6 flex flex-col justify-end pb-12">
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700"
                 >
                     <div className="flex items-start justify-between mb-4">
                        <div>
                             <p className="text-xs text-slate-500 uppercase font-semibold">Instant Authorization</p>
                             <h3 className="text-lg font-bold text-slate-900 dark:text-white">Supplier Inc.</h3>
                        </div>
                        <div className="text-right">
                             <div className="text-xl font-bold text-slate-900 dark:text-white">$10,000</div>
                             <p className="text-xs text-slate-400">PUSD Credit</p>
                        </div>
                     </div>
                     
                     <div className="h-px bg-slate-100 dark:bg-slate-700 my-4" />
                     
                     <div className="space-y-2 mb-6">
                         <div className="flex justify-between text-sm">
                             <span className="text-slate-500">Invoice #</span>
                             <span className="font-mono text-slate-700 dark:text-slate-500">INV-2024-882</span>
                         </div>
                         <div className="flex justify-between text-sm">
                             <span className="text-slate-500">Items</span>
                             <span className="text-slate-700 dark:text-slate-200">Logistics Materials</span>
                         </div>
                     </div>

                     {status === 'pending' && (
                         <motion.button 
                            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 dark:shadow-blue-900/20"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                         >
                            Slide to Pay
                         </motion.button>
                     )}
                     
                     {status === 'approving' && (
                        <div className="w-full py-3 bg-blue-600/80 text-white rounded-xl font-semibold flex items-center justify-center gap-2">
                            <motion.div 
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                            />
                            Verifying...
                        </div>
                     )}

                     {status === 'approved' && (
                        <motion.div 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-200 dark:shadow-green-900/20"
                        >
                            <CheckCircle className="w-5 h-5" />
                            Authorized
                        </motion.div>
                     )}
                 </motion.div>
             </div>
        </div>
    );
};

// --- PANEL 2: BANRURAL WALLET RECEIPT ---
const Panel2_BanruralWallet = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <WalletViewPanel 
            autoCompleteDelay={5000}
            onComplete={onComplete}
            username="@mariasilva"
            userSubheader="BANRURAL"
            bankLogo="/logos/banrural.jpg"
            profileImage="/profiles/maria_silva.png"
            balance="19,800.00"
            transactions={[
                { id: "TXN-2024-882", type: "Payment Received", entity: "Grupo Pantaleon S.A.", amount: "+9,800.00", date: "Just now" },
                { id: "TXN-8820", type: "Transfer Out", entity: "Supplier A", amount: "-1,200.00", date: "Yesterday" },
                { id: "TXN-8819", type: "Transfer Out", entity: "Logistics Corp", amount: "-350.00", date: "Yesterday" },
            ]}
        />
    );
};

export const InstantAuthorizationVisual = () => {
    const [step, setStep] = useState(0);


    const handleNext = () => setStep((s) => (s + 1) % 3);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [animationState, setAnimationState] = useState({
        doSwipe1: false,
        procStep: 0
    });

    const isProcessing = animationState.procStep > 0 && animationState.procStep < 4;

    // Automate the selection flow for step 0 and swipe for step 1
    useEffect(() => {
        if (step === 0) {
            setSelectedOption(null);
            setIsSubmitting(false);
            setAnimationState({ doSwipe1: false, procStep: 0 });
            
            const t1 = setTimeout(() => setDropdownOpen(true), 1000);
            const t2 = setTimeout(() => setSelectedOption('factura'), 2500);
            const t3 = setTimeout(() => {
                setIsSubmitting(true);
                setTimeout(() => {
                    setDropdownOpen(false);
                    setStep(1);
                }, 800);
            }, 3200);

            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
                clearTimeout(t3);
            };
        }

        if (step === 1) {
            setIsSubmitting(false);
            
            // If already completed swipe but not processing, start processing
            if (animationState.doSwipe1 && animationState.procStep === 0) {
                 setAnimationState(s => ({ ...s, procStep: 1 }));
            }

            // Automatically trigger swipe after 3 seconds if not already swiped
            let t1: any;
            if (!animationState.doSwipe1) {
                t1 = setTimeout(() => {
                    setAnimationState(s => ({ ...s, doSwipe1: true }));
                }, 3000);
            }

            return () => {
                if (t1) clearTimeout(t1);
            };
        }
    }, [step, animationState.doSwipe1]);

    // Orchestrate inline processing steps
    useEffect(() => {
        if (step === 1 && animationState.procStep > 0) {
            // Steps 1-3 are processing steps
            if (animationState.procStep < 4) {
                const t = setTimeout(() => setAnimationState(s => ({ ...s, procStep: s.procStep + 1 })), 1500);
                return () => clearTimeout(t);
            }
            // Step 4 is the SUCCESS burst state
            if (animationState.procStep === 4) {
                const t = setTimeout(() => setStep(2), 2000); // Give time for the burst
                return () => clearTimeout(t);
            }
        }
    }, [step, animationState.procStep]);

    const handleConfirm = () => {
        if (!selectedOption) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setDropdownOpen(false);
            setStep(1);
        }, 1000);
    };

    const requestOptions = [
        { id: 'invoice', label: 'E-Invoice', icon: <FileText className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
        { id: 'qr', label: 'QR Scan', icon: <QrCode className="w-5 h-5" />, color: 'bg-green-100 text-green-600' },
        { id: 'salary', label: 'Salary', icon: <Banknote className="w-5 h-5" />, color: 'bg-purple-100 text-purple-600' },
    ];

    return (
        <MobileFrame>
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full w-full absolute inset-0"
                >
                    {step === 0 && (
                        <div className="h-full w-full relative">
                            <WalletViewPanel 
                                autoCompleteDelay={0} 
                                receiveLabel="Receive"
                                onReceiveClick={() => setDropdownOpen(true)}
                            />
                            {/* Mobile Toast Overlay */}
                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div 
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                        className="absolute bottom-0 left-0 right-0 z-50"
                                    >
                                        <div className="bg-white dark:bg-slate-900 rounded-t-2xl shadow-2xl border-t border-x border-slate-200 dark:border-slate-700 z-50 overflow-hidden">
                                            {/* Handle */}
                                            <div className="flex justify-center py-2">
                                                <div className="w-10 h-1 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                            </div>

                                            {/* Header */}
                                            <div className="px-5 pb-3 border-b border-slate-50 dark:border-slate-800">
                                                <p className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Tipo de Solicitud</p>
                                                <p className="text-[9px] text-slate-500 font-semibold">Seleccione una opción para continuar</p>
                                            </div>
                                            
                                            <div className="p-2 space-y-1">
                                                {/* Option: Pago Rápido */}
                                                <div 
                                                    onClick={() => {
                                                        setSelectedOption('pago');
                                                        handleConfirm();
                                                    }}
                                                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                                                        selectedOption === 'pago' ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                            <QrCode className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-900 dark:text-white">Pago Rápido</p>
                                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                                <span className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">Instant</span>
                                                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                                                <span className="text-[10px] font-bold text-slate-900 dark:text-slate-100">2% Fee</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {selectedOption === 'pago' && <CheckCircle className="w-5 h-5 text-blue-600" />}
                                                </div>

                                                {/* Option: Factura */}
                                                <div 
                                                    onClick={() => {
                                                        setSelectedOption('factura');
                                                        handleConfirm();
                                                    }}
                                                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                                                        selectedOption === 'factura' ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                            <FileText className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-900 dark:text-white">Factura</p>
                                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                                <span className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">Instant</span>
                                                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                                                <span className="text-[10px] font-bold text-slate-900 dark:text-slate-100">2% Fee</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {selectedOption === 'factura' && <CheckCircle className="w-5 h-5 text-blue-600" />}
                                                </div>

                                                {/* Option: Salario */}
                                                <div 
                                                    onClick={() => {
                                                        setSelectedOption('salario');
                                                        handleConfirm();
                                                    }}
                                                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                                                        selectedOption === 'salario' ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                            <Banknote className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-900 dark:text-white">Salario</p>
                                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                                <span className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">Instant</span>
                                                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                                                <span className="text-[10px] font-bold text-slate-900 dark:text-slate-100">2% Fee</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {selectedOption === 'salario' && <CheckCircle className="w-5 h-5 text-blue-600" />}
                                                </div>
                                            </div>

                                            <div className="pb-2" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            {/* Modal Backdrop */}
                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
                                        onClick={() => setDropdownOpen(false)}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                    {step === 1 && (
                        <WalletViewPanel 
                            autoCompleteDelay={0} 
                            onComplete={handleNext}
                            username="@grupopantaleon"
                            userSubheader="Banco Industrial"
                            bankLogo="/logos/banco_industrial.png"
                            hideBalance={true}
                            actionElement={
                                <motion.div 
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] p-6 flex flex-col items-center justify-between cursor-pointer hover:bg-white/15 transition-all shadow-xl min-h-[220px]"
                                >
                                    <div className="w-full flex items-start justify-between">
                                        <div className="flex items-center gap-1 bg-white/5 rounded-full px-1.5 py-0.5 border border-white/10 w-fit">
                                            <div className="flex items-center -space-x-1.5">
                                                <div className="w-4 h-4 bg-[#2169D1] rounded-full flex items-center justify-center border border-white/10 overflow-hidden z-10">
                                                    <img src="/logos/svg/alborsun.svg" alt="Albor" className="w-2.5 h-2.5 object-contain" />
                                                </div>
                                                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center border border-white/10 overflow-hidden z-20">
                                                    <img src="/logos/banrural.jpg" alt="Banrural" className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <span className="text-[9px] font-bold text-white tracking-tight">@mariasilva</span>
                                        </div>
                                    </div>

                                    {/* Amount Section (Left Aligned) */}
                                    <div className="flex-1 flex flex-col items-start justify-center w-full px-2">
                                        <h2 className="text-5xl font-bold text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] leading-none">
                                            10,000<span className="text-xl text-white/80 font-normal">.00</span>
                                        </h2>
                                        <span className="text-[11px] font-semibold text-white/80 tracking-[0.3em] uppercase mt-3">GTQ</span>
                                    </div>

                                    {/* Footer: Factura # with Arrow */}
                                    <div className="w-full flex items-center justify-between pt-4 border-t border-white/5 group/factura">
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-3.5 h-3.5 text-white/40" />
                                            <span className="text-[11px] font-bold text-white/80 tracking-tight">Factura #INV-2024-882</span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-white/80 group-hover/factura:text-white/50 transition-colors" />
                                    </div>
                                </motion.div>
                            }
                            bottomElement={
                                <div className="flex flex-col pt-4">
                                    {/* Payment Method / Inline Processing Steps */}
                                    <div className="relative">
                                        <AnimatePresence mode="wait">
                                            {animationState.procStep === 0 ? (
                                                <motion.div 
                                                    key="payment-method"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="px-6 py-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/40 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group/payment h-[78.5px]"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-7 rounded-[3px] bg-[#2169D1] flex items-center justify-center border border-white/10 shadow-sm overflow-hidden p-1.5 shrink-0">
                                                            <img src="/logos/svg/albor.svg" alt="Albor" className="w-full h-full object-contain" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[15px] font-bold text-slate-800 dark:text-slate-100 tracking-tight">Tarjeta de Comercio</span>
                                                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">Banco Industrial S.A.</span>
                                                        </div>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-slate-300 dark:text-white/20 group-hover/payment:text-blue-500 transition-colors" />
                                                </motion.div>
                                            ) : (
                                                <motion.div 
                                                    key="processing-status"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="px-6 py-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/40 bg-blue-50/5 dark:bg-blue-900/5 h-[78.5px]"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-7 flex items-center justify-center shrink-0">
                                                            {animationState.procStep === 4 ? (
                                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                            ) : (
                                                                <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
                                                            )}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[15px] font-bold text-slate-800 dark:text-white tracking-tight">
                                                                {animationState.procStep === 1 && "Verifying Invoice"}
                                                                {animationState.procStep === 2 && "Authorizing Payment"}
                                                                {animationState.procStep === 3 && "Interbank Settling"}
                                                                {animationState.procStep === 4 && "Transaction Approved"}
                                                            </span>
                                                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                                                                {animationState.procStep === 1 && "Connecting with SAT (GUA)"}
                                                                {animationState.procStep === 2 && "Signature Verification"}
                                                                {animationState.procStep === 3 && "BI → Banrural Routing"}
                                                                {animationState.procStep === 4 && "Funds Sent to Receiver"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Swipe Action Section */}
                                    <div className="px-6 py-6 pb-8">
                                        <SwipeButton 
                                            text="Pay 10,000.00 GTQ"
                                            completedText="Success!"
                                            loadingText="Procesando..."
                                            isLoading={isProcessing && animationState.procStep < 4}
                                            color="bg-blue-600"
                                            onComplete={() => {
                                                setAnimationState(s => ({ ...s, doSwipe1: true, procStep: 1 }));
                                            }} 
                                            isCompleted={animationState.doSwipe1 || animationState.procStep === 4} 
                                        />
                                    </div>

                                    {/* Sync Transaction History */}
                                    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950/95 mt-2">
                                        <div className="px-5 py-3 flex items-center justify-between sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
                                            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Transaction History</span>
                                        </div>

                                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                            <div className="px-5 py-3 flex items-center justify-between opacity-50 grayscale hover:bg-white dark:hover:bg-slate-900 transition-colors">
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">Supplier A</span>
                                                    <span className="text-[9px] text-slate-400 font-mono">Yesterday</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                                                    -1,200.00
                                                </div>
                                            </div>
                                            <div className="px-5 py-3 flex items-center justify-between opacity-50 grayscale hover:bg-white dark:hover:bg-slate-900 transition-colors border-b-0">
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">Logistics Corp</span>
                                                    <span className="text-[9px] text-slate-400 font-mono">Yesterday</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                                                    -350.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    )}
                    {step === 2 && <Panel2_BanruralWallet onComplete={handleNext} />}
                </motion.div>
            </AnimatePresence>
        </MobileFrame>
    );
};
