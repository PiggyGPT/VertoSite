import { CalendarDays, Rocket, TrendingDown } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

const ReasonCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
    <div className="bg-white/50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-lg shadow-lg">
        <div className="flex items-center space-x-3 mb-3">
            <Icon className="w-5 h-5 text-albor-blue" />
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{title}</h4>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {children}
        </p>
    </div>
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
        <section id="why-now" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
            {/* Background Aura - subtle glow that works with the page gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/30 via-amber-50/20 to-transparent dark:from-orange-900/10 dark:via-amber-900/5 dark:to-transparent"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    {/* Left Side: Headline */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="why-now-title">
                            {customTitle || "Why Now?"}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {customSubtitle || "Your core business is now in a time-sensitive technology race. Lead the market or be left behind."}
                        </p>
                    </div>

                    {/* Right Side: Reasons */}
                    <div className="space-y-4 sm:space-y-6">
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
                <div className="relative max-w-7xl mx-auto mt-10 sm:mt-12 text-center">
                    <button
                        onClick={() => openModal("Launch Pilot in 90 Days")}
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 shadow-lg text-sm sm:text-base"
                        data-testid="launch-pilot-cta"
                    >
                        Launch Pilot in 90 Days
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <CalendlyModal />
        </section>
    );
}