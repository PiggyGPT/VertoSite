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
  CheckCircle,
  CheckCircle2
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

  const [totalFees, setTotalFees] = useState(142890);
  const [totalVolume, setTotalVolume] = useState(14289000);
  const [animatingIndices, setAnimatingIndices] = useState<Set<number>>(new Set());

  // Simulate live trades
  useEffect(() => {
    const interval = setInterval(() => {
      const size = Math.floor(Math.random() * 80000) + 10000;
      const newTrade = {
        id: Date.now(),
        pair: Math.random() > 0.5 ? "BSD/USDC" : "USDT/BSD",
        size: size,
        fee: Math.floor(size * 0.01)
      };
      
      setTrades(prev => [newTrade, ...prev.slice(0, 2)]);
      
      // Update volume
      setTotalVolume(prev => prev + size);
      
      // Calculate new total and detect which digits changed
      setTotalFees(prev => {
        const newTotal = prev + newTrade.fee;
        
        // Format both as strings for comparison (without decimal)
        const oldStr = prev.toString().padStart(6, '0');
        const newStr = newTotal.toString().padStart(6, '0');
        
        // Detect which positions changed
        const changed = new Set<number>();
        for (let i = 0; i < oldStr.length; i++) {
          if (oldStr[i] !== newStr[i]) {
            changed.add(i);
          }
        }
        
        setAnimatingIndices(changed);
        setTimeout(() => setAnimatingIndices(new Set()), 500);
        
        return newTotal;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Format the number: 142890 -> "142,890.00"
  const feeStr = totalFees.toString().padStart(6, '0');
  const displayStr = `${feeStr.slice(0, 3)},${feeStr.slice(3)}.00`;
  
  // Get indices without formatting (for animation tracking)
  const digitsOnly = feeStr.split('');

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="text-center space-y-2 mb-6">
        <h4 className="text-slate-600 dark:text-slate-400 text-xs font-sans font-medium uppercase tracking-widest">Fees Collected (24H)</h4>
        <div className="text-4xl md:text-5xl font-bold">
          <span className="text-slate-900 dark:text-white">$</span>
          <span className="text-white inline-block font-mono tracking-tight">
            {/* Render: 142,890 with rolling digits for numbers only */}
            {digitsOnly[0] && (
              <motion.span
                initial={animatingIndices.has(0) ? { y: -24 } : {}}
                animate={animatingIndices.has(0) ? { y: 0 } : {}}
                transition={animatingIndices.has(0) ? { type: "spring", stiffness: 250, damping: 20 } : {}}
              >
                {digitsOnly[0]}
              </motion.span>
            )}
            {digitsOnly[1] && (
              <motion.span
                initial={animatingIndices.has(1) ? { y: -24 } : {}}
                animate={animatingIndices.has(1) ? { y: 0 } : {}}
                transition={animatingIndices.has(1) ? { type: "spring", stiffness: 250, damping: 20 } : {}}
              >
                {digitsOnly[1]}
              </motion.span>
            )}
            {digitsOnly[2] && (
              <motion.span
                initial={animatingIndices.has(2) ? { y: -24 } : {}}
                animate={animatingIndices.has(2) ? { y: 0 } : {}}
                transition={animatingIndices.has(2) ? { type: "spring", stiffness: 250, damping: 20 } : {}}
              >
                {digitsOnly[2]}
              </motion.span>
            )}
            <span>,</span>
            {digitsOnly[3] && (
              <motion.span
                initial={animatingIndices.has(3) ? { y: -24 } : {}}
                animate={animatingIndices.has(3) ? { y: 0 } : {}}
                transition={animatingIndices.has(3) ? { type: "spring", stiffness: 250, damping: 20 } : {}}
              >
                {digitsOnly[3]}
              </motion.span>
            )}
            {digitsOnly[4] && (
              <motion.span
                initial={animatingIndices.has(4) ? { y: -24 } : {}}
                animate={animatingIndices.has(4) ? { y: 0 } : {}}
                transition={animatingIndices.has(4) ? { type: "spring", stiffness: 250, damping: 20 } : {}}
              >
                {digitsOnly[4]}
              </motion.span>
            )}
            {digitsOnly[5] && (
              <motion.span
                initial={animatingIndices.has(5) ? { y: -24 } : {}}
                animate={animatingIndices.has(5) ? { y: 0 } : {}}
                transition={animatingIndices.has(5) ? { type: "spring", stiffness: 250, damping: 20 } : {}}
              >
                {digitsOnly[5]}
              </motion.span>
            )}
            <span>.00</span>
          </span>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
          <Activity className="w-3 h-3 text-slate-600 dark:text-slate-400" />
          <span className="text-slate-700 dark:text-slate-300 text-sm font-sans">24h Vol: ${(totalVolume / 1000000).toFixed(1)}M</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-[10px] text-slate-600 dark:text-slate-500 uppercase font-sans font-medium px-4">
          <span>Recent Activity</span>
          <span>Fee (1%)</span>
        </div>
        <AnimatePresence mode="popLayout">
          {trades.map((trade, idx) => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0, x: -60, rotate: -10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, rotate: 5 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                delay: idx === 0 ? 0.1 : 0
              }}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800/60 dark:to-slate-800/30 rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-md">
                  <ArrowRightLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-200">{trade.pair}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-sans">Size: ${trade.size.toLocaleString()}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900 dark:text-slate-200 font-sans">+${trade.fee.toLocaleString()}</div>
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
const YieldView = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-wider font-sans mb-1 font-medium">Current APY</div>
          <div className="text-3xl font-sans text-[#4D88FF] font-bold">5.42%</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-wider font-sans mb-1 font-medium">Fees Collected (24h)</div>
          <div className="text-lg font-sans text-slate-900 dark:text-slate-200 font-semibold">$142,890.00</div>
        </div>
      </div>
      
      {/* Animated Line Chart */}
      <div className="flex-1 relative border-l border-b border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/20 rounded-bl-lg">
         <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4D88FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4D88FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,100 C50,90 100,80 150,40 C200,10 250,30 300,10 L300,150 L0,150 Z"
              fill="url(#yieldGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M0,100 C50,90 100,80 150,40 C200,10 250,30 300,10"
              fill="none"
              stroke="#4D88FF"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Pulsing Dots on the line */}
            <motion.circle cx="150" cy="40" r="4" fill="#4D88FF">
               <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            </motion.circle>
            <motion.circle cx="300" cy="10" r="4" fill="#4D88FF">
               <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            </motion.circle>
         </svg>
         
         {/* Grid Lines */}
         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-4 opacity-20">
            <div className="w-full h-px bg-slate-500 border-dashed" />
            <div className="w-full h-px bg-slate-500 border-dashed" />
            <div className="w-full h-px bg-slate-500 border-dashed" />
         </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onCtaClick}
        className="group flex items-center gap-3 px-8 py-3 bg-[#4D88FF] hover:bg-[#3A6FE6] text-white rounded-lg font-semibold shadow-lg shadow-[#4D88FF]/20 transition-all mt-4 mx-auto font-sans"
      >
         <Plus className="w-4 h-4" />
         <span>Add Liquidity to Earn 5.42%</span>
         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
};

// 3. Minting View with Multi-Panel Animation
const MintView = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [mintState, setMintState] = useState<'idle' | 'waiting' | 'minting' | 'complete'>('idle');

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentPanel(prev => {
        const next = (prev + 1) % 3;
        if (next === 0) {
          setMintState('idle');
        } else if (next === 1) {
          setMintState('waiting');
          setTimeout(() => setMintState('minting'), 1500);
          setTimeout(() => setMintState('complete'), 3500);
        }
        return next;
      });
    }, 7000);
    return () => clearInterval(cycle);
  }, []);

  const panelBaseClasses = "absolute inset-0 transition-all duration-1000 ease-in-out";
  const panelVisibleClasses = "opacity-100 translate-x-0";
  const panelHiddenLeftClasses = "opacity-0 -translate-x-full";
  const panelHiddenRightClasses = "opacity-0 translate-x-full";

  const getPanelClasses = (panelIndex: number) => {
    if (currentPanel === panelIndex) return `${panelBaseClasses} ${panelVisibleClasses}`;
    if (currentPanel > panelIndex) return `${panelBaseClasses} ${panelHiddenLeftClasses}`;
    return `${panelBaseClasses} ${panelHiddenRightClasses}`;
  };

  return (
    <div className="h-full flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        
        {/* PANEL 0: Deposit Request */}
        <div className={getPanelClasses(0)}>
          <div className="h-full flex flex-col items-center justify-center space-y-6">
            <div className="text-center">
              <h4 className="text-slate-600 dark:text-slate-400 text-xs font-sans uppercase tracking-widest mb-2">Liquidity Injection</h4>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Add to Liquidity Pool</h2>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 p-6 w-full max-w-sm space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Deposit Amount</label>
                <div className="w-full p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <span className="text-slate-400">$</span>
                  <span className="text-slate-900 dark:text-white font-semibold text-lg">50,000.00</span>
                  <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded ml-auto">USD</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Stablecoins to Mint</label>
                <div className="w-full p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <span className="text-slate-900 dark:text-white font-semibold text-lg">50,000.00</span>
                  <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded ml-auto">BSD</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded border border-blue-100 dark:border-blue-800/30">
                <p className="text-xs text-blue-800 dark:text-blue-300">
                  <span className="font-bold">Info:</span> Funds will be minted to stablecoin and added to the LP.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-[#4D88FF] hover:bg-[#3A6FE6] text-white rounded-lg font-semibold transition-all"
            >
              Proceed to Mint
            </motion.button>
          </div>
        </div>

        {/* PANEL 1: Minting Process */}
        <div className={getPanelClasses(1)}>
          <div className="h-full flex flex-col items-center justify-center">
            <div className="space-y-4 w-full max-w-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center">Minting Process</h3>
              
              <div className="space-y-2">
                {/* Step 1: Deposit Confirmed */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30"
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${mintState !== 'idle' ? 'bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600' : 'bg-slate-100 dark:bg-slate-700'}`}>
                    {mintState !== 'idle' ? <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Deposit Confirmed</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">50,000.00 USD received</p>
                  </div>
                </motion.div>

                {/* Step 2: Minting */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30"
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${mintState === 'minting' || mintState === 'complete' ? 'bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-300 dark:border-indigo-600' : 'bg-slate-100 dark:bg-slate-700'}`}>
                    {mintState === 'complete' ? (
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : mintState === 'minting' ? (
                      <RefreshCw className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Minting BSD</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Issuing stablecoins...</p>
                  </div>
                </motion.div>

                {/* Step 3: Complete */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30"
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${mintState === 'complete' ? 'bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600' : 'bg-slate-100 dark:bg-slate-700'}`}>
                    {mintState === 'complete' ? <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">LP Deposit Complete</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">50,000 BSD added to pool</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2: Reconciliation */}
        <div className={getPanelClasses(2)}>
          <div className="h-full flex flex-col items-center justify-center">
            <div className="space-y-4 w-full max-w-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center mb-6">Liquidity Added</h3>
              
              <div className="space-y-3">
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 uppercase">Initial Deposit</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">50,000.00 USD</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 uppercase">Stablecoins Minted</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">50,000.00 BSD</p>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded border border-emerald-200 dark:border-emerald-700/50">
                  <p className="text-xs text-emerald-600 dark:text-emerald-500 uppercase font-bold mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Liquidity Active</span>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded border border-blue-100 dark:border-blue-800/30">
                  <p className="text-[10px] text-blue-700 dark:text-blue-300">
                    <span className="font-bold">Earning:</span> Your deposit now earns yield from protocol fees at 5.42% APY
                  </p>
                </div>
              </div>
            </div>
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
    <section className="relative w-full py-24 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#4D88FF] text-xs font-sans uppercase tracking-widest mb-6 font-semibold"
          >
             <RefreshCw className="w-3 h-3" />
             <span>The Growth Engine</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight font-sans"
          >
            The Liquidity <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4D88FF, #5DD4E0)' }}>Flywheel</span>
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-sans"
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
                        ? "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl" 
                        : "bg-transparent border border-transparent hover:bg-slate-100 dark:hover:bg-slate-900/30 hover:border-slate-200 dark:hover:border-slate-800"
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
                        <div className={`text-xs font-sans font-semibold mb-2 uppercase tracking-wider ${isActive ? "text-[#4D88FF]" : "text-slate-600 dark:text-slate-500"}`}>
                           {step.subtitle}
                        </div>
                        <h3 className={`text-lg font-bold mb-1 ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                          {step.title}
                        </h3>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2 font-sans"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      {isActive && (
                        <motion.div layoutId="active-arrow" className="mt-2" style={{ color: '#4D88FF' }}>
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
             <div className="relative h-full w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-2xl overflow-hidden flex flex-col">
                
                {/* Panel Header */}
                <div className="h-14 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex items-center justify-between px-8">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        activeStepId === 'compliance' ? 'bg-[#F1BD76]' : 'bg-[#5DD4E0]'
                      } animate-pulse`} />
                      <span className="text-[10px] text-slate-600 dark:text-slate-400 font-sans font-semibold uppercase">
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
