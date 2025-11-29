import { Phone, Calendar } from "lucide-react";
import { useState } from "react";

const useCalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const CalendlyModal = ({ title }: { title: string }) => {
    if (!isOpen) return null;
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070A]/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        onClick={closeModal}
      >
        <div
          className="bg-[#0F1117] border border-white/10 rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>
            <button
              onClick={closeModal}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-blue-500/20">
              <Calendar className="w-8 h-8" />
            </div>
            <h4 className="text-white font-medium mb-2">Book Introductory Call</h4>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              This is a demo environment. In production, this would open your
              Calendly or scheduling interface directly.
            </p>
            <button
              onClick={closeModal}
              className="w-full py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              Return to Demo
            </button>
          </div>
        </div>
      </div>
    );
  };

  return { openModal, CalendlyModal };
};

export default function HeroSection() {
  const { openModal, CalendlyModal } = useCalendlyModal();

  return (
    <div className="min-h-screen text-white selection:bg-white/20 font-sans flex flex-col">
      
      <section className="flex-grow flex flex-col items-center justify-center py-24 relative overflow-hidden">
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          
          <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter mb-8 leading-[1.05] text-white">
            Connect Your Assets <br />
            <span className="text-slate-500">
              To Global Dollars.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
            Capture liquidity from the $300B stablecoin market with compliant infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-lg bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
              data-testid="hero-schedule-demo"
            >
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </button>
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
              data-testid="hero-contact-sales"
            >
              <Phone className="w-4 h-4" />
              Contact Sales
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-8 w-full border-t border-white/10 pt-10">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-[0.2em]">
              Founded by leaders from
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:opacity-90 transition-opacity">
              <div className="w-40 h-6 flex items-center justify-center">
                <img
                  src="/logos/fed_logo.svg"
                  alt="Federal Reserve"
                  className="h-full object-contain"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/GSR_logo.svg"
                  alt="GSR Markets"
                  className="h-full object-contain"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/PayPal_logo.svg"
                  alt="PayPal"
                  className="h-full object-contain"
                />
              </div>
              <div className="w-20 h-6 flex items-center justify-center">
                <img
                  src="/logos/Microsoft_logo_(2012).svg"
                  alt="Microsoft"
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <CalendlyModal title="Schedule Consultation" />
    </div>
  );
}
