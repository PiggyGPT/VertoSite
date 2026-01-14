import { motion } from "framer-motion";
import { CalendarDays, Rocket, TrendingDown, Calendar, ArrowRight } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

const ReasonCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
    <motion.div 
        whileHover={{ scale: 1.02, translateY: -2 }}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-slate-900/40 p-5 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-300 will-change-transform group"
    >
        {/* Subtle internal glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                    <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-bold text-white text-base sm:text-lg tracking-tight leading-[1.3]">{title}</h4>
            </div>
            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed font-medium">
                {children}
            </p>
        </div>
    </motion.div>
);

interface WhyNowProps {
    customReasons?: Array<{
        icon: React.ComponentType<any>;
        title: string;
        description: string;
    }>;
    customTitle?: string;
    customSubtitle?: string;
}

export default function WhyNowSection({ customReasons, customTitle, customSubtitle }: WhyNowProps = {}) {
    const { openModal, CalendlyModal } = useCalendlyModal();
    return (
        <section id="why-now" className="relative py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-slate-950">
            {/* Liquid Glass Background Auras */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 40, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[45%] bg-orange-500/10 blur-[130px] rounded-full"
                />
            </div>

            <div className="relative max-w-7xl mx-auto z-10">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                    {/* Left Side: Headline */}
                    <div className="text-center lg:text-left space-y-6">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1]"
                        >
                            {customTitle || "Why Now?"}
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            {customSubtitle || "Your core business is now in a time-sensitive technology race. Lead the market or be left behind."}
                        </motion.p>
                    </div>

                    {/* Right Side: Reasons */}
                    <div className="space-y-6">
                        {customReasons ? (
                            customReasons.map((reason, index) => (
                                <ReasonCard key={index} icon={reason.icon} title={reason.title}>
                                    {reason.description}
                                </ReasonCard>
                            ))
                        ) : (
                            <>
                                <ReasonCard icon={CalendarDays} title="New Regulations Take Effect 2026">
                                    Financial institutions must have digital asset compliance frameworks operational by January 2026. Deploy now to ensure readiness.
                                </ReasonCard>
                                <ReasonCard icon={Rocket} title="Market Position">
                                    87% of banks plan stablecoin pilots within 24 months. Launch your pilot now to establish market leadership before competitors scale.
                                </ReasonCard>
                                <ReasonCard icon={TrendingDown} title="Cost Reduction Requirement">
                                    Cross-border payments must reduce costs by 75% to remain competitive. Stablecoins achieve this target while maintaining regulatory compliance.
                                </ReasonCard>
                            </>
                        )}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative max-w-7xl mx-auto mt-16 text-center"
                >
                    <button
                        onClick={() => openModal("Book a Demo")}
                        className="group inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 font-bold rounded-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] text-base gap-3"
                        data-testid="launch-pilot-cta"
                    >
                        <Calendar className="w-5 h-5" />
                        <span>Book a Demo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            <CalendlyModal />
        </section>
    );
}