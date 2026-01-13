import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  ArrowRightLeft, 
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Wallet,
  RefreshCw,
  Landmark,
  Plus,
  ArrowRight,
  Check,
  CheckCircle2,
  Calendar,
  Send
} from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

// ===== DATA & CONFIG =====
const STEPS = [
  {
    id: "transactions",
    title: "No Cards for Merchants",
    subtitle: "Merchants Can't Pay",
    description: "Banks issue cards to consumers for credit purchases, but not to buyers for credit payables — forcing 60–120 day private IOUs.",
    color: "emerald"
  },
  {
    id: "liquidity",
    title: "No Swipes for Suppliers",
    subtitle: "Suppliers Can't Borrow",
    description: "Banks pay merchants instantly on every swipe, but not to suppliers for receivables — forcing 20% discounts from private IOU lenders.",
    color: "purple"
  },
  {
    id: "fees",
    title: "No Revenue for Banks",
    subtitle: "Banks Can't Earn",
    description: "Banks earn fees on every consumer swipe, but miss 90% of the trade value they finance — losing fees and data across the chain.",
    color: "blue"
  }
];

// ===== DASHBOARD VIEWS =====

// 1. Transactions -> Fees View
const FeesView = ({ trades, totalFees, totalVolume }: { trades: any[], totalFees: number, totalVolume: number }) => {

  return (
    <div className="h-full flex flex-col justify-between min-h-0">
      <div className="text-center mb-6">
        <h4 className="text-slate-600 dark:text-slate-400 text-xs font-sans uppercase py-1 tracking-widest font-medium">24h Fees Collected</h4>
        <motion.div 
           key={`fees-${totalFees}`}
           initial={{ scale: 0.95 }}
           animate={{ scale: 1 }}
           className="text-4xl md:text-5xl font-bold font-sans text-[#4D88FF]"
        >
          ${totalFees.toLocaleString()}
        </motion.div>
        <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 mt-3 rounded-full border border-slate-200 dark:border-slate-700">
          <Activity className="w-3 h-3 text-slate-600 dark:text-slate-400" />
          <span className="text-slate-700 dark:text-slate-300 text-sm font-sans">24h Vol: ${totalVolume.toLocaleString()}</span>
        </div>
      </div>

      <div className="space-y-3 overflow-auto" style={{ maxHeight: 'calc(100% - 160px)' }}>
        <div className="flex justify-between text-[10px] text-slate-600 dark:text-slate-500 uppercase font-sans font-medium px-4">
          <span>Recent Activity</span>
          <span>Fee (1%)</span>
        </div>
        <AnimatePresence mode="popLayout">
          {trades.map((trade) => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-700/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md" style={{ backgroundColor: 'rgba(77, 136, 255, 0.1)' }}>
                  <ArrowRightLeft className="w-4 h-4" style={{ color: '#4D88FF' }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-200">{trade.pair}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-sans">Size: ${trade.size.toLocaleString()}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold font-sans" style={{ color: '#4D88FF' }}>+${trade.fee.toLocaleString()}</div>
                <div className="text-[10px] text-slate-600 dark:text-slate-500">Collected</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// 2. Yield View
const YieldView = ({ onCtaClick, totalFees, tvl }: { onCtaClick?: () => void, totalFees: number, tvl: number }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  // Auto-trigger button click animation when component mounts
  useEffect(() => {
    const timer = setTimeout(async () => {
      setIsClicked(true);
      // Wait for click animation to complete before transitioning
      await new Promise(resolve => setTimeout(resolve, 1500));
      onCtaClick?.();
    }, 300); // Delay before animation starts

    return () => clearTimeout(timer);
  }, [onCtaClick]);

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <div className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-wider font-sans mb-1 font-medium">Liquidity</div>
          <div className="text-2xl font-sans font-semibold text-white">
            ${(tvl / 1000000).toFixed(1)}M
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-wider font-sans mb-1 font-medium">Current APY</div>
          <div className="text-2xl font-sans font-bold" style={{ color: '#10b981' }}>5.42%</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-wider font-sans mb-1 font-medium">Fees (24h)</div>
          <motion.div 
             key={`yield-fees-${totalFees}`}
             initial={{ scale: 0.95 }}
             animate={{ scale: 1 }}
             className="text-2xl font-sans font-semibold" style={{ color: '#4D88FF' }}
          >
            ${totalFees.toLocaleString()}
          </motion.div>
        </div>
      </div>

      {/* Animated Line Chart */}
      <div className="flex-1 relative border-l border-b border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/20 rounded-bl-lg min-h-0 overflow-hidden">
         <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4D88FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4D88FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,100 C80,90 160,80 240,40 C320,10 400,30 480,10 L480,150 L0,150 Z"
              fill="url(#yieldGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M0,100 C80,90 160,80 240,40 C320,10 400,30 480,10"
              fill="none"
              stroke="#4D88FF"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Pulsing Dot at the end - appears after line finishes drawing */}
            <motion.circle 
              cx="480" 
              cy="10" 
              fill="#4D88FF"
              initial={{ opacity: 0, r: 4 }}
              animate={{ opacity: 1, r: [4, 6, 4] }}
              transition={{
                opacity: { delay: 2, duration: 0.5 },
                r: { delay: 2, duration: 2, repeat: Infinity }
              }}
            />
         </svg>

         {/* Grid Lines */}
         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-4 opacity-20">
            <div className="w-full h-px bg-slate-500 border-dashed" />
            <div className="w-full h-px bg-slate-500 border-dashed" />
            <div className="w-full h-px bg-slate-500 border-dashed" />
         </div>
      </div>

      <motion.button
        animate={isClicked ? { scale: 0.95, opacity: 0.7 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="group flex items-center gap-3 px-8 py-3 bg-[#4D88FF] hover:bg-[#3A6FE6] text-white rounded-lg font-semibold shadow-lg shadow-[#4D88FF]/20 transition-all mt-4 mx-auto font-sans"
      >
         <Plus className="w-4 h-4" />
         <span>Add Liquidity</span>
         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
};

// 3. Minting View
const MintView = () => {
  return (
    <div className="h-full flex flex-col items-center space-y-6 min-h-0 p-4">
       <div className="text-center">
          <h4 className="text-slate-600 dark:text-slate-400 text-xs font-mono uppercase tracking-widest mb-2">Bank Deposits</h4>
       </div>

       <div className="w-full max-w-sm relative max-h-[160px]">
          {/* Path Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 dark:bg-slate-800 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
             />
          </div>

          <div className="flex justify-between relative z-10">
             {/* Right Node: Token */}
             <div className="flex flex-col items-center gap-2">
                <motion.div 
                   animate={{ 
                     boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 20px rgba(168,85,247,0.5)", "0 0 0px rgba(168,85,247,0)"],
                     borderColor: ["#e2e8f0", "#a855f7", "#e2e8f0"]
                   }}
                   transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                   className="w-16 h-16 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-2xl flex items-center justify-center shadow-lg dark:shadow-xl"
                >
                   <span className="font-bold text-purple-600 dark:text-purple-400">USD</span>
                </motion.div>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400">Wire</span>
             </div>

             {/* Center Node: Bank */}
             <div className="flex flex-col items-center gap-2 -mt-4">
                 <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-400 dark:border-slate-600 z-20">
                    <Landmark className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                 </div>
                 <span className="text-[12px] font-mono text-slate-100 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 px-2 rounded">BALANCE SHEET</span>
             </div>
             {/* Left Node: Fiat */}
             <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-2xl flex items-center justify-center shadow-lg dark:shadow-xl">
                   <span className="font-bold text-slate-700 dark:text-slate-400">BSD</span>
                </div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-500">Mint</span>
             </div>
          </div>
       </div>

       {/* REWORKED ROWS: use same visual language as FeesView rows for consistency */}
       <div className="w-full space-y-3 overflow-auto" style={{ maxHeight: '240px' }}>
         <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-700/50">
           <div className="flex items-center gap-3">
             <div className="p-2 rounded-md" style={{ backgroundColor: 'rgba(168,85,247,0.08)' }}>
               <Check className="w-4 h-4" style={{ color: '#A885FF' }} />
             </div>
             <div>
               <div className="text-sm font-bold text-slate-900 dark:text-slate-200">Wire Received</div>
               <div className="text-[10px] text-slate-600 dark:text-slate-400 font-sans">Tokenization complete</div>
             </div>
           </div>
           <div className="text-right">
             <div className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">$1.00M USD</div>
             <div className="text-[10px] text-slate-600 dark:text-slate-500">12.50M BSD Minted</div>
           </div>
         </div>

         <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-700/50">
           <div className="flex items-center gap-3">
             <div className="p-2 rounded-md" style={{ backgroundColor: 'rgba(168,85,247,0.06)' }}>
               <Check className="w-4 h-4" style={{ color: '#A885FF' }} />
             </div>
             <div>
               <div className="text-sm font-bold text-slate-900 dark:text-slate-200">Wire Received</div>
               <div className="text-[10px] text-slate-600 dark:text-slate-400 font-sans">Tokenization complete</div>
             </div>
           </div>
           <div className="text-right">
             <div className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">12.50M BOB </div>
             <div className="text-[10px] text-slate-600 dark:text-slate-500">12.50M BSD Minted</div>
           </div>
         </div>

         <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-700/50">
           <div className="flex items-center gap-3">
             <div className="p-2 rounded-md" style={{ backgroundColor: 'rgba(168,85,247,0.06)' }}>
               <Check className="w-4 h-4" style={{ color: '#A885FF' }} />
             </div>
             <div>
               <div className="text-xs font-bold text-slate-900 dark:text-slate-200">Liquidity Added to AMM</div>
               <div className="text-xs text-slate-600 dark:text-slate-400 font-sans">LP position opened</div>
             </div>
           </div>
           <div className="text-right">
             <div className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">1.00M USDC + 12.50M BSD</div>
             <div className="text-[10px] text-slate-600 dark:text-slate-500">Active</div>
           </div>
         </div>
       </div>
    </div>
  );
};

// 4. Compliance View
const ComplianceView = () => {
  const riskItems = [
    { step: "Transactions Drive Fees", risk: "None", status: "Verified", riskColor: "text-[#5DD4E0]" },
    { step: "Fees Drive Yield", risk: "None", status: "Active", riskColor: "text-[#5DD4E0]" },
    { step: "Liquidity Drives Deposits", risk: "None", status: "Operational", riskColor: "text-[#5DD4E0]" }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="w-8 h-8" style={{ color: '#5DD4E0' }} />
        <div>
           <div className="text-lg font-bold text-slate-900 dark:text-white font-sans">System Status</div>
           <div className="text-xs font-sans font-semibold" style={{ color: '#5DD4E0' }}>OPERATIONAL</div>
        </div>
      </div>

      <div className="space-y-2.5 flex-1 overflow-y-auto">
        {riskItems.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800/40 rounded border border-slate-200 dark:border-slate-700"
          >
             <div className="flex-1">
                <div className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-wide font-sans font-medium mb-1">Counterparty Risk</div>
                <div className="text-sm font-sans font-semibold text-slate-900 dark:text-slate-200">{item.step}</div>
             </div>
             <div className="text-right">
                <div className={`text-xs font-sans font-bold ${item.riskColor} mb-1`}>{item.risk}</div>
                <div className="flex items-center gap-1.5">
                   <CheckCircle2 className="w-4 h-4" style={{ color: '#5DD4E0' }} />
                   <span className="text-xs font-sans font-semibold text-slate-700 dark:text-slate-300">{item.status}</span>
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-slate-300 dark:border-slate-800">
         <div className="flex justify-between items-center">
            <span className="text-xs text-slate-600 dark:text-slate-500 font-sans">Last Audit Scan</span>
            <span className="text-xs font-sans text-slate-700 dark:text-slate-400">12s ago</span>
         </div>
      </div>
    </div>
  );
};

// ===== MAIN COMPONENT =====

export default function LiquidityFlywheel() {
  const { openModal, CalendlyModal } = useCalendlyModal();
  const [activeStepId, setActiveStepId] = useState("transactions");
  const [progress, setProgress] = useState(0);
  const [trades, setTrades] = useState([
    { id: 1, pair: "BSD/USDC", size: 500000, fee: 5000 },
    { id: 2, pair: "USDT/BSD", size: 1250000, fee: 12500 },
    { id: 3, pair: "BSD/EURC", size: 750000, fee: 7500 },
  ]);

  // Simulate live trades
  useEffect(() => {
    const interval = setInterval(() => {
      const size = Math.floor(Math.random() * 800000) + 100000;
      const newTrade = {
        id: Date.now(),
        pair: Math.random() > 0.5 ? "BSD/USDC" : "USDT/BSD",
        size: size,
        fee: Math.floor(size * 0.01) // 1% fee
      };
      setTrades(prev => [newTrade, ...prev.slice(0, 3)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Calculate totals dynamically
  const totalFees = trades.reduce((sum, trade) => sum + trade.fee, 0);
  const totalVolume = trades.reduce((sum, trade) => sum + trade.size, 0);
  const tvl = 3000000; // Static TVL value ($30M)

  // Helper to find index
  const activeIndex = STEPS.findIndex(s => s.id === activeStepId);

  // Auto-play logic
  useEffect(() => {
    const duration = 9000; // 9 seconds per step
    const interval = 50;
    const stepSize = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const nextIndex = (activeIndex + 1) % STEPS.length;
          setActiveStepId(STEPS[nextIndex].id);
          return 0;
        }
        return prev + stepSize;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [activeStepId, activeIndex]);

  // Handler for manual click
  const handleStepClick = (id: string) => {
    setActiveStepId(id);
    setProgress(0); 
  };

  // Handler for "Add Liquidity" button in step 2
  const handleAddLiquidity = () => {
    setActiveStepId("liquidity");
    setProgress(0);
  };

  return (
      <section className="relative overflow-hidden w-full min-h-[800px] flex flex-col justify-center py-24">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            Where Are the Credit Cards For Trade Loans?
          </motion.h2>

          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-200 dark:text-slate-200 text-lg md:text-2xl leading-relaxed font-sans"
          >
            Cards offer us credit to buy sneakers, but not to the supply chain making them.
          </motion.p>
        </div>

        {/* DESKTOP: 3 Animated Columns - Expanded View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12">
          {STEPS.map((step, index) => {
            const isActive = activeStepId === step.id;
            const stepColor = step.id === 'transactions' ? '#22c55e' : step.id === 'fees' ? '#4D88FF' : '#A885FF';
            
            return (
              <motion.div
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`
                  relative pt-12 pb-10 px-8 rounded-3xl cursor-pointer transition-all duration-300 min-h-[280px] h-full flex flex-col
                  ${isActive 
                    ? "bg-white dark:bg-slate-900 border-2 shadow-2xl scale-[1.02]" 
                    : "bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-600"
                  }
                `}
                style={{ borderColor: isActive ? stepColor : undefined }}
              >
                {/* Active Progress Bar */}
                {isActive && (
                  <motion.div 
                    className="absolute left-0 bottom-0 h-1 z-20 rounded-b-2xl"
                    style={{ 
                      width: `${progress}%`, 
                      maxWidth: '100%',
                      backgroundColor: stepColor
                    }}
                    transition={{ ease: "linear", duration: 0.1 }}
                  />
                )}



                {/* Content */}
                <div className="flex-1 flex flex-col pt-4">
                  <div 
                    className={`text-sm font-sans font-bold mb-4 uppercase tracking-[0.15em] ${isActive ? '' : 'text-slate-600 dark:text-slate-500'}`}
                    style={{ color: isActive ? stepColor : undefined }}
                  >
                    {step.subtitle}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-base md:text-lg leading-relaxed font-sans flex-1 ${isActive ? "text-slate-600 dark:text-slate-200" : "text-slate-500 dark:text-slate-400"}`}>
                    {step.description}
                  </p>
                </div>


              </motion.div>
            );
          })}
        </div>

        {/* MOBILE: Expandable cards animation - Unchanged */}
        <div className="lg:hidden flex flex-col h-[280px] gap-1">
          {STEPS.map((step) => {
            const isActive = activeStepId === step.id;

            return (
              <motion.div
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                layout
                initial={false}
                animate={{ height: isActive ? "auto" : "auto" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`w-full rounded-lg cursor-pointer relative overflow-hidden ${
                  isActive 
                    ? "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl flex-1 p-5" 
                    : "bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 shadow-sm p-3"
                }`}
              >
                {/* Progress Bar - Always visible when active */}
                {isActive && (
                  <motion.div 
                    className="absolute left-0 bottom-0 h-1 rounded-bl-lg w-full"
                    style={{ 
                      width: `${progress}%`, 
                      maxWidth: '100%',
                      backgroundColor: step.id === 'transactions' ? '#22c55e' : step.id === 'fees' ? '#4D88FF' : '#A885FF'
                    }}
                    transition={{ ease: "linear", duration: 0.1 }}
                  />
                )}

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`text-xs font-sans font-semibold mb-2 uppercase tracking-wider ${step.id === 'transactions' ? 'text-[#22c55e]' : step.id === 'fees' ? 'text-[#4D88FF]' : 'text-[#A885FF]'}`}
                      >
                        {step.subtitle}
                      </motion.div>
                    )}
                    <h3 className={`font-bold ${isActive ? "text-lg text-slate-900 dark:text-white" : "text-sm text-slate-700 dark:text-slate-300"}`}>
                      {step.title}
                    </h3>
                  </div>


                </div>

                {isActive && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed mt-3 font-sans"
                  >
                    {step.description}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center flex justify-center gap-4">
          <button
            onClick={() => openModal("Book a Demo")}
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm gap-2 min-w-[160px]"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Book a Demo</span>
          </button>
          <a
            href="https://t.me/nileshkhaitan"
            target="_blank"
            rel="noopener noreferrer"
            className="roup px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
          >
            <Send className="w-4 h-4 hidden md:inline" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>

      <CalendlyModal />
    </section>
  );
}
