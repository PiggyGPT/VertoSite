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
  Check
} from "lucide-react";

// ===== DATA & CONFIG =====

const STEPS = [
  {
    id: "transactions",
    title: "Transactions Drive Fees",
    subtitle: "Step 1: Volume",
    description: "Transaction volume generates protocol fees, creating revenue from payments.",
    color: "emerald"
  },
  {
    id: "fees",
    title: "Fees Drive Yield",
    subtitle: "Step 2: Incentives",
    description: "Fees are distributed as yield, attracting liquidity providers to the ecosystem.",
    color: "blue"
  },
  {
    id: "liquidity",
    title: "Liquidity Drives Deposits",
    subtitle: "Step 3: Capital",
    description: "New liquidity enters as fiat deposits, minting stablecoins to capture yield.",
    color: "purple"
  },
  {
    id: "compliance",
    title: "Compliance Drives Growth",
    subtitle: "Step 4: Scale",
    description: "Regulatory clarity eliminates risk, allowing the flywheel to spin indefinitely.",
    color: "amber"
  }
];

// ===== DASHBOARD VIEWS =====

// 1. Transactions -> Fees View
const FeesView = () => {
  const [trades, setTrades] = useState([
    { id: 1, pair: "BSD/USDC", size: 50000, fee: 500 },
    { id: 2, pair: "USDT/BSD", size: 125000, fee: 1250 },
    { id: 3, pair: "BSD/EURC", size: 75000, fee: 750 },
  ]);

  // Simulate live trades
  useEffect(() => {
    const interval = setInterval(() => {
      const size = Math.floor(Math.random() * 80000) + 10000;
      const newTrade = {
        id: Date.now(),
        pair: Math.random() > 0.5 ? "BSD/USDC" : "USDT/BSD",
        size: size,
        fee: Math.floor(size * 0.01) // 1% fee simulation
      };
      setTrades(prev => [newTrade, ...prev.slice(0, 3)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="text-center space-y-2 mb-6">
        <h4 className="text-slate-400 text-xs font-mono uppercase tracking-widest">24h Fees Collected</h4>
        <motion.div 
           key={trades[0].id}
           initial={{ scale: 0.95, color: "#ffffff" }}
           animate={{ scale: 1, color: "#34d399" }}
           className="text-4xl md:text-5xl font-bold font-mono text-emerald-400"
        >
          $142,890.00
        </motion.div>
        <div className="inline-flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
          <Activity className="w-3 h-3 text-slate-400" />
          <span className="text-slate-300 text-sm font-mono">24h Vol: $14,289,000</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-[10px] text-slate-500 uppercase font-mono px-4">
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
              className="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg border border-slate-700/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-md">
                  <ArrowRightLeft className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-200">{trade.pair}</div>
                  <div className="text-xs text-slate-400 font-mono">Size: ${trade.size.toLocaleString()}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-emerald-400 font-mono">+${trade.fee.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500">Collected</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// 2. Yield View
const YieldView = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
      <div className="w-full">
         <h4 className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-3">Current Protocol APY</h4>
         <div className="relative inline-block">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-bold text-blue-400 tracking-tight"
            >
              5.42%
            </motion.div>
            <motion.div 
               animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute -top-2 -right-4 w-3 h-3 bg-blue-400 rounded-full"
            />
         </div>
         <div className="mt-4 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Total Value Locked</div>
              <div className="text-xl font-mono text-white">$24.5M</div>
            </div>
            <div className="text-center border-l border-slate-700 pl-8">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Yield Paid (24h)</div>
              <div className="text-xl font-mono text-blue-300">$3,420</div>
            </div>
         </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onCtaClick}
        className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all"
      >
         <Plus className="w-5 h-5" />
         <span>Add Liquidity to Earn 5.42%</span>
         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
};

// 3. Minting View
const MintView = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8">
       <div className="text-center">
          <h4 className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-2">Liquidity Injection</h4>
          <h2 className="text-2xl font-bold text-white">Fiat to Stablecoin</h2>
       </div>

       <div className="w-full max-w-sm relative">
          {/* Path Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
             />
          </div>

          <div className="flex justify-between relative z-10">
             {/* Left Node: Fiat */}
             <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-slate-900 border-2 border-slate-700 rounded-2xl flex items-center justify-center shadow-xl">
                   <span className="font-bold text-slate-400">USD</span>
                </div>
                <span className="text-xs font-mono text-slate-500">Deposit</span>
             </div>

             {/* Center Node: Bank */}
             <div className="flex flex-col items-center gap-2 -mt-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 z-20">
                    <Landmark className="w-5 h-5 text-slate-300" />
                 </div>
                 <span className="text-[10px] font-mono text-slate-600 bg-slate-900 px-2 rounded">Albor Treasury</span>
             </div>

             {/* Right Node: Token */}
             <div className="flex flex-col items-center gap-2">
                <motion.div 
                   animate={{ 
                     boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 20px rgba(168,85,247,0.5)", "0 0 0px rgba(168,85,247,0)"],
                     borderColor: ["#334155", "#a855f7", "#334155"]
                   }}
                   transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                   className="w-16 h-16 bg-slate-900 border-2 border-slate-700 rounded-2xl flex items-center justify-center shadow-xl"
                >
                   <span className="font-bold text-purple-400">BSD</span>
                </motion.div>
                <span className="text-xs font-mono text-purple-400">Minted</span>
             </div>
          </div>
       </div>

       <div className="w-full bg-slate-800/50 rounded-lg p-4 flex items-center justify-between border border-slate-700">
          <div className="flex items-center gap-3">
             <Check className="w-5 h-5 text-emerald-400" />
             <div className="text-sm text-slate-300">Reserves Verified</div>
          </div>
          <div className="text-sm font-mono text-slate-500">
             1:1 Ratio
          </div>
       </div>
    </div>
  );
};

// 4. Compliance View
const ComplianceView = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-8"
      >
         <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse" />
         <ShieldCheck className="w-24 h-24 text-amber-400 relative z-10" />
      </motion.div>

      <h2 className="text-3xl font-bold text-white mb-2">Institutional Grade</h2>
      <p className="text-slate-400 mb-8 text-center max-w-xs">
        Eliminating counterparty risk through transparent, on-chain proof of reserves.
      </p>

      <div className="grid grid-cols-2 gap-4 w-full">
         <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 text-center">
            <div className="text-xs text-slate-500 uppercase mb-1">Risk Level</div>
            <div className="text-xl font-bold text-emerald-400">0%</div>
         </div>
         <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 text-center">
            <div className="text-xs text-slate-500 uppercase mb-1">Growth Cap</div>
            <div className="text-xl font-bold text-emerald-400">Unlimited</div>
         </div>
      </div>
    </div>
  );
};

// ===== MAIN COMPONENT =====

export default function LiquidityFlywheel() {
  const [activeStepId, setActiveStepId] = useState("transactions");
  const [progress, setProgress] = useState(0);

  // Helper to find index
  const activeIndex = STEPS.findIndex(s => s.id === activeStepId);

  // Auto-play logic
  useEffect(() => {
    const duration = 6000; // 6 seconds per step
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
    <section className="relative w-full py-24 bg-slate-950 text-slate-50 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
             <RefreshCw className="w-3 h-3" />
             <span>The Growth Engine</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            The Liquidity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Flywheel</span>
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            Create a self-reinforcing engine where transaction volume translates directly into balance sheet growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: Navigation Steps */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <LayoutGroup>
              {STEPS.map((step) => {
                const isActive = activeStepId === step.id;
                return (
                  <motion.div
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`
                      relative p-5 rounded-xl cursor-pointer transition-all duration-300
                      ${isActive 
                        ? "bg-slate-900 border border-slate-700 shadow-xl" 
                        : "bg-transparent border border-transparent hover:bg-slate-900/30 hover:border-slate-800"
                      }
                    `}
                  >
                    {/* Active Progress Bar */}
                    {isActive && (
                      <motion.div 
                        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 z-20 rounded-bl-xl"
                        style={{ width: `${progress}%`, maxWidth: '100%' }}
                        transition={{ ease: "linear", duration: 0.1 }}
                      />
                    )}

                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`text-xs font-mono mb-2 uppercase tracking-wider ${isActive ? "text-blue-400" : "text-slate-500"}`}>
                           {step.subtitle}
                        </div>
                        <h3 className={`text-lg font-bold mb-1 ${isActive ? "text-white" : "text-slate-400"}`}>
                          {step.title}
                        </h3>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-slate-400 text-sm leading-relaxed mt-2"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      {isActive && (
                        <motion.div layoutId="active-arrow" className="text-blue-400 mt-2">
                           <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </LayoutGroup>
          </div>

          {/* RIGHT: Unified Dashboard Panel */}
          <div className="lg:col-span-7 h-[450px]">
             <div className="relative h-full w-full bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Panel Header */}
                <div className="h-14 border-b border-slate-800 bg-slate-950/50 flex items-center justify-between px-6">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        activeStepId === 'compliance' ? 'bg-amber-500' : 'bg-emerald-500'
                      } animate-pulse`} />
                      <span className="text-[10px] text-slate-400 font-mono uppercase">
                        {STEPS.find(s => s.id === activeStepId)?.title}
                      </span>
                   </div>
                </div>

                {/* Panel Content Area */}
                <div className="flex-1 p-8 relative">
                   <AnimatePresence mode="wait">
                      <motion.div
                         key={activeStepId}
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         transition={{ duration: 0.3 }}
                         className="h-full w-full"
                      >
                         {activeStepId === 'transactions' && <FeesView />}
                         {activeStepId === 'fees' && <YieldView onCtaClick={handleAddLiquidity} />}
                         {activeStepId === 'liquidity' && <MintView />}
                         {activeStepId === 'compliance' && <ComplianceView />}
                      </motion.div>
                   </AnimatePresence>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
