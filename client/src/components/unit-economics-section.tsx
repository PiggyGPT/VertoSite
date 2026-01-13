import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Clock,
  FileText,
  Zap,
  TrendingDown,
  TrendingUp,
  Plus,
  Minus,
  ArrowRight,
  Calendar,
  Send
} from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

// --- Shared Components ---

const SectionHeading = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
  <div className="text-center mb-10 md:mb-14">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-[1.45]"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed"
    >
      {children}
    </motion.div>
  </div>
);

// --- Diverging Bar Component ---

const DivergingBar = ({
  cost,
  revenue,
  net,
  isAlbor = false
}: {
  cost: number;
  revenue: number;
  net: number;
  isAlbor?: boolean;
}) => {
  const MAX_SCALE = 30;
  const costWidth = Math.min((cost / MAX_SCALE) * 100, 100);
  const revWidth = Math.min((revenue / MAX_SCALE) * 100, 100);

  return (
    <div className="relative h-14 md:h-16 w-full flex items-center group">
      {/* Central Axis */}
      <div className={`absolute left-1/2 top-0 bottom-0 w-px z-20 transition-colors ${isAlbor ? 'bg-white/30' : 'bg-white/10'}`}></div>

      {/* Left Side (Costs) */}
      <div className="flex-1 h-full flex items-center justify-end pr-1 relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${costWidth}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-10 md:h-12 rounded-l-md relative flex items-center justify-end pr-3 transition-colors ${isAlbor ? 'bg-slate-700/80 group-hover:bg-slate-700' : 'bg-slate-700/80 group-hover:bg-slate-700'}`}
        >
           <span className="font-semibold text-white text-xs md:text-sm opactiy-90">-{cost}%</span>
        </motion.div>
      </div>

      {/* Right Side (Revenue) */}
      <div className="flex-1 h-full flex items-center justify-start pl-1 relative">
         <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${revWidth}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-10 md:h-12 rounded-r-md relative flex items-center justify-start pl-3 transition-all ${
            isAlbor
              ? 'bg-gradient-to-r from-[#2169D1] via-[#8F73FE] to-[#F1BD76] shadow-[0_0_20px_-5px_rgba(77,136,255,0.4)]'
              : 'bg-[#2169D1]'
          }`}
        >
           <span className="font-semibold text-white text-xs md:text-sm shadow-sm drop-shadow-md">+{revenue}%</span>
        </motion.div>
      </div>
    </div>
  );
};


export function UnitEconomicsSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

       {/* Background Ambience */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-red-900/05 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/05 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          title={
            <>
              You Can't Underwrite Billions. <br className="hidden md:block" />
                But You Can Swipe Them.
            </>
          }
        >
          Transform the unbankable long tail into a high yield interbank asset.
        </SectionHeading>

        {/* --- COMPARISON CONTAINER --- */}
        <div className="max-w-3xl mx-auto relative cursor-default md:py-10">

          {/* TOP: Traditional Details */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between pb-6 mb-2 border-b border-white/5 opacity-80 hover:opacity-100 transition-opacity"
          >
             <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="p-2.5 bg-red-500/10 rounded-xl">
                  <TrendingDown className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200">$10k Letter of Credit</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-200 mt-1">
                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> 30-Day Terms</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Manual Underwriting</span>
                  </div>
                </div>
             </div>
             <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Net Margin</div>
                <div className="text-2xl font-semibold text-red-400 leading-none">-20%</div>
             </div>
          </motion.div>


          {/* MIDDLE: Charts Stacked */}
          <div className="relative py-8 space-y-2">

            {/* Axis Labels */}
            <div className="absolute top-2 left-0 right-0 flex justify-between text-[10px] font-bold tracking-widest uppercase text-slate-100 px-8">
               <span>Expenses</span>
               <span>Revenue</span>
            </div>

            {/* Traditional Chart */}
            <DivergingBar cost={24.0} revenue={4.0} net={-20} />

            {/* Visual Divider / Axis */}
            <div className="h-px w-full bg-white/5 mx-auto" />

            {/* Albor Chart */}
            <DivergingBar cost={4.0} revenue={24.0} net={20} isAlbor={true} />

          </div>


          {/* BOTTOM: Albor Details */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between pt-6 mt-2 border-t border-white/5 opacity-90 hover:opacity-100 transition-opacity"
          >
             <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">$10k Albor Credit</h3>
                  <div className="flex items-center gap-4 text-xs text-emerald-200 mt-1">
                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" />Tier 1 Credit Line</span>
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3" />10x Payments Volume</span>
                  </div>
                </div>
             </div>
             <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Net Margin</div>
                <div className="text-2xl font-semibold text-emerald-400 leading-none">+20%</div>
             </div>
          </motion.div>

        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center flex justify-center gap-4">
          <button
            onClick={() => openModal("Book a Demo")}
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm gap-2 min-w-[160px]"
          >
            <Calendar className="w-4 h-4" />
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

export default UnitEconomicsSection;
