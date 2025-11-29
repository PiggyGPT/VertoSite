import { Check, X, Calendar } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

export default function CompetitiveDiffSection() {
    const { openModal, CalendlyModal } = useCalendlyModal();

    const features = [
        {
            name: "Liquidity Engine",
            albor: "Non-Custodial DEX",
            competitors: "None",
            alborHas: true
        },
        {
            name: "Payments Routing",
            albor: "Non-Custodial, CeFi + DeFi",
            competitors: "CEX Deposits & Withdrawals",
            alborHas: true
        },
        {
            name: "Fee Distribution",
            albor: "Non-Custodial, Atomic",
            competitors: "CEX Transfers, Manual",
            alborHas: true
        },
        {
            name: "Full-Stack Sovereignty",
            albor: "Self-Hosted Deployment",
            competitors: "US-Based Hosting",
            alborHas: true
        }
    ];

    return (
        <section className="relative w-full py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6 text-slate-900 dark:text-white">
                        Albor is the only{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                            non-custodial, full-stack
                        </span>
                        {" "}solution
                    </h2>
                </div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {/* Column Headers */}
                    <div className="hidden lg:block"></div>

                    {/* Albor Column Header */}
                    <div className="relative p-6 rounded-xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-black/50">
                        <div
                            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none rounded-xl"
                            style={{
                                boxShadow: `0 0 100px 30px #8F73FE inset`,
                            }}
                        />
                        <div className="relative text-center">
                            <h3
                                className="font-extrabold text-2xl tracking-tight"
                                style={{
                                    background: 'linear-gradient(90deg, #EF660B, #8F73FE, #217DFE)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                albor
                            </h3>
                        </div>
                    </div>

                    {/* Competitors Column Header */}
                    <div className="hidden lg:block p-6 rounded-xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-black/50">
                        <h3 className="text-center font-semibold text-lg text-slate-600 dark:text-slate-400">
                            Parfin, Paxos, ZeroHash
                        </h3>
                    </div>
                </div>

                {/* Feature Rows */}
                <div className="space-y-4 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
                        >
                            {/* Feature Name */}
                            <div className="p-5 rounded-xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-black/50 flex items-center">
                                <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                                    {feature.name}
                                </h4>
                            </div>

                            {/* Albor Feature */}
                            <div className="relative p-5 rounded-xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-black/50">
                                <div
                                    className="absolute inset-0 w-full h-full opacity-5 pointer-events-none rounded-xl"
                                    style={{
                                        boxShadow: `0 0 100px 30px #8F73FE inset`,
                                    }}
                                />
                                <div className="relative flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                                        {feature.albor}
                                    </span>
                                    <div
                                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                                        style={{
                                            backgroundColor: '#22c55e20',
                                        }}
                                    >
                                        <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Competitor Feature */}
                            <div className="p-5 rounded-xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-black/50 flex items-center justify-between">
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    {feature.competitors}
                                </span>
                                {feature.competitors === "None" && (
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <X className="w-4 h-4 text-slate-400" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button - Matching Hero */}
                <div className="text-center">
                    <button
                        onClick={openModal}
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-all hover:translate-y-[-2px] shadow-lg shadow-black/10 dark:shadow-black/30"
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
