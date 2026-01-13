import { motion } from "framer-motion";
import { Landmark, ArrowUpRight, CheckCircle } from "lucide-react";
import { SapphireCard } from "../../common-visuals/SapphireCard";

export const Panel4_ConsumerRepay = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="pt-12 pb-6 px-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Landmark className="w-5 h-5 text-blue-600" />
          <span className="font-semibold tracking-wide text-slate-900 dark:text-white">Chase Bank</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center -mt-8">
          <div className="text-center mb-8">
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Due Balance</p>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">$15.00</h2>
          </div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full mb-8"
          >
              <SapphireCard />
          </motion.div>

          {/* Pay Button Animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-[240px]"
          >
             <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg">
                 Pay Full Balance
                 <ArrowUpRight className="w-5 h-5" />
             </button>
         </motion.div>

         {/* Paid Success Overlay */}
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1.5, type: "spring" }}
           style={{ willChange: "transform, opacity" }}
           className="absolute inset-0 bg-white/95 dark:bg-slate-900/98 z-50 flex flex-col items-center justify-center"
         >
             <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                 <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-500" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Paid!</h3>
             <p className="text-slate-500">Credit limit restored</p>
         </motion.div>

      </div>
    </div>
  );
};
