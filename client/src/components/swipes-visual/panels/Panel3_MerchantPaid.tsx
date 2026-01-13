import { motion } from "framer-motion";
import { Check, ArrowDownLeft } from "lucide-react";

export const Panel3_MerchantPaid = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="h-full w-full bg-emerald-500 flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
        className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl"
      >
        <Check className="w-10 h-10 text-emerald-500 stroke-[3]" />
      </motion.div>

      <h2 className="text-2xl font-bold mb-1">Payment Received</h2>
      <p className="text-emerald-100 mb-8">Instant Settlement</p>

      <div className="w-full max-w-[260px] bg-emerald-600/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          <div className="flex justify-between items-center mb-4">
              <span className="text-emerald-50 text-sm">Sale Amount</span>
              <span className="font-semibold">$15.00</span>
          </div>
           <div className="flex justify-between items-center mb-4">
              <span className="text-emerald-100 text-sm">Bank Fee (2.9%)</span>
              <span className="font-semibold text-emerald-200">-$0.44</span>
          </div>
          <div className="h-px bg-white/20 w-full mb-4" />
          <div className="flex justify-between items-center">
              <span className="font-medium">Net Payout</span>
              <span className="text-2xl font-bold">$14.56</span>
          </div>
      </div>

    </div>
  );
};
