import { Check, X, Calendar, Zap, Lock, Globe, Server } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

export default function CompetitiveDiffSection() {
    const { openModal, CalendlyModal } = useCalendlyModal();

    const features = [
        {
            name: "Liquidity Engine",
            icon: Zap,
            albor: "Non-Custodial DEX",
            competitors: "None",
            alborHas: true
        },
        {
            name: "Payments Routing",
            icon: Globe,
            albor: "Non-Custodial, CeFi + DeFi",
            competitors: "CEX Deposits & Withdrawals",
            alborHas: true
        },
        {
            name: "Fee Distribution",
            icon: Server,
            albor: "Non-Custodial, Atomic",
            competitors: "CEX Transfers, Manual",
            alborHas: true
        },
        {
            name: "Full-Stack Sovereignty",
            icon: Lock,
            albor: "Self-Hosted Deployment",
            competitors: "US-Based Hosting",
            alborHas: true
        }
    ];

    return (
        <section className="relative w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">
                        Purpose-Built for Enterprise Stablecoins
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Complete infrastructure sovereignty. No compromises on custody, routing, or control.
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {/* Column Headers */}
                    <div className="hidden lg:block"></div>

                    {/* Verto Column Header */}
                    <div className="relative p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-800/60 border-2 border-slate-200 dark:border-slate-700 shadow-lg">
                        <div className="relative text-center">
                            <h3 className="font-bold text-xl tracking-tight text-slate-900 dark:text-white mb-1">
                                Verto
                            </h3>
                            <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-widest">
                                Complete Stack
                            </p>
                        </div>
                    </div>

                    {/* Competitors Column Header */}
                    <div className="hidden lg:block p-8 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-md">
                        <h3 className="text-center font-semibold text-base text-slate-600 dark:text-slate-400">
                            Other Providers
                        </h3>
                    </div>
                </div>

                {/* Feature Rows */}
                <div className="space-y-4 mb-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
                            >
                                {/* Feature Name */}
                                <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                    </div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                                        {feature.name}
                                    </h4>
                                </div>

                                {/* Verto Feature */}
                                <div className="relative p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-2 border-green-200 dark:border-green-900/30 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="relative flex items-center justify-between">
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                                            {feature.albor}
                                        </span>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Competitor Feature */}
                                <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                        {feature.competitors}
                                    </span>
                                    {feature.competitors === "None" && (
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                            <X className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button - Enhanced */}
                <div className="text-center">
                    <button
                        onClick={openModal}
                        className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-lg font-semibold text-sm transition-all hover:translate-y-[-2px] shadow-xl shadow-black/20 dark:shadow-black/40 hover:shadow-2xl hover:shadow-black/30 dark:hover:shadow-black/50"
                        style={{
                            background: `linear-gradient(90deg, #EF660B, #8F73FE, #217DFE)`,
                            color: "white",
                        }}
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Schedule Demo</span>
                    </button>
                </div>
            </div>

            <CalendlyModal title="Schedule a Demo" />
        </section>
    );
}
