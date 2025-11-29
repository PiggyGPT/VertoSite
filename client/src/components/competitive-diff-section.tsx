import { Calendar, Zap, Lock, Globe, Server } from "lucide-react";
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
            competitors: "CEX Payouts, Manual",
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
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-3">
                        The only <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">non-custodial, full-stack</span> solution
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        You own the keys. You control the liquidity. You own the data.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mb-12 overflow-x-auto flex justify-center">
                    <table className="border-collapse" style={{ maxWidth: '900px', width: '100%' }}>
                        <thead>
                            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white text-base" style={{ width: '30%' }}>
                                    Capability
                                </th>
                                <th className="text-center py-3 px-4 font-semibold" style={{ width: '35%' }}>
                                    <div className="flex items-center justify-center">
                                        <img src="/logos/albor_logo.svg" alt="Albor Logo" className="h-4 w-auto drop-shadow-md" />
                                    </div>
                                </th>
                                <th className="text-center py-3 px-4 font-semibold text-slate-600 dark:text-slate-400 text-base" style={{ width: '35%' }}>
                                    Competitors
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                                </div>
                                                <span className="font-semibold text-slate-900 dark:text-white text-base">
                                                    {feature.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <span className="text-base font-semibold text-slate-900 dark:text-white">
                                                {feature.albor}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <span className="text-base text-slate-900 dark:text-white">
                                                {feature.competitors}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
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
