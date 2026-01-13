import { motion } from "framer-motion";
import { Store, ShoppingBag, Wifi } from "lucide-react";

export const Panel1_MerchantRequest = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="h-full w-full bg-slate-900 text-white flex flex-col relative overflow-hidden">
      
      {/* Merchant Header */}
      <div className="pt-12 pb-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center">
             <Store className="w-4 h-4 text-slate-400" />
           </div>
           <span className="font-medium">Coffee Shop</span>
        </div>
        <span className="text-xs text-slate-500">POS Terminal</span>
      </div>

      {/* Main Display */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center w-full"
         >
            <p className="text-slate-400 text-sm font-medium mb-1">Total</p>
            <h1 className="text-5xl font-bold tracking-tight text-white mb-12">$15.00</h1>

            <div className="flex flex-col items-center gap-6">
                {/* NFC Icon Animation */}
                <div className="relative">
                    <motion.div 
                        className="absolute inset-0 bg-blue-500/20 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                     <motion.div 
                        className="absolute inset-0 bg-blue-500/10 rounded-full"
                        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center relative z-10 border border-slate-700">
                        <Wifi className="w-10 h-10 text-white rotate-90" />
                    </div>
                </div>
                
                <p className="text-sm font-semibold text-white tracking-widest uppercase animate-pulse">
                    Tap to Pay
                </p>
            </div>
         </motion.div>
      </div>

       {/* Footer Branding */}
       <div className="p-6 text-center border-t border-white/5">
          <div className="flex items-center justify-center gap-2 opacity-30">
             <div className="w-1.5 h-1.5 rounded-full bg-white" />
             <div className="w-1.5 h-1.5 rounded-full bg-white" />
             <div className="w-1.5 h-1.5 rounded-full bg-white" />
             <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
       </div>
    </div>
  );
};
