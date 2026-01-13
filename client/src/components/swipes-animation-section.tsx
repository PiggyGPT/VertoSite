import { CreditCard, Zap } from "lucide-react";
import { SwipesVisual } from "./swipes-visual/SwipesVisual";

export default function SwipesAnimationSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center py-8 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <CreditCard className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold tracking-wide text-blue-300 uppercase">
              The Swipe Model
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-tight" style={{ lineHeight: 1.2 }}>
            Credit Cards Changed Consumer Loans Forever</h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            By paying Merchants instantly and collecting from Consumers every 30 days, 
            banks earn discounting fees from merchants & interest from consumers
            <span className="text-white font-medium"> on every swipe.</span>
          </p>
        </div>

        {/* Right Column: Animation Container */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
           <div className="w-full max-w-lg transform scale-95 sm:scale-100 origin-center">
               <SwipesVisual />
           </div>
        </div>
      </div>
    </section>
  );
}
