import { motion } from "framer-motion";
import { CreditCard, Landmark, CheckCircle2 } from "lucide-react";
import { SapphireCard } from "../../common-visuals/SapphireCard";

export const Panel0_CreditIssue = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="pt-12 pb-6 px-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Landmark className="w-5 h-5 text-blue-600" />
          <span className="font-semibold tracking-wide text-slate-900 dark:text-white">Chase Bank</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 flex flex-col items-center justify-center -mt-8">
        <div className="text-center mb-8">
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Credit Line</p>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">$10,000.00</h2>
        </div>

        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full mb-8"
        >
            <SapphireCard />
        </motion.div>

        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Approved</span>
            </div>
        </motion.div>
      </div>



    </div>
  );
};
