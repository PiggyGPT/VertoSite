import { motion } from "framer-motion";
import { CreditCard, Wifi } from "lucide-react";
import { SapphireCard } from "../../common-visuals/SapphireCard";

export const Panel2_ConsumerSwipe = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      


      {/* Card */}
      <motion.div
        initial={{ y: 200, rotateX: 60, scale: 0.8 }}
        animate={{ y: 0, rotateX: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ willChange: "transform" }}
        className="w-full relative z-10"
      >
         <SapphireCard />
      </motion.div>

      {/* Status Text */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Processing...</h3>
         <p className="text-slate-500 text-sm">Validating with Bank</p>
      </motion.div>

    </div>
  );
};
