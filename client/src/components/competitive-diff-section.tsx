import { Calendar, TrendingUp, Shield, DollarSign, Navigation2, ArrowRight, Send } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

export default function CompetitiveDiffSection() {
    const { openModal, CalendlyModal } = useCalendlyModal();

    const features = [
        {
            name: "Liquidity Engine",
            icon: TrendingUp,
            albor: "Non-Custodial DEX",
            competitors: "None",
            alborHas: true
        },
        {
            name: "Transaction Routing",
            icon: Navigation2,
            albor: "Non-Custodial, CEX + DEX",
            competitors: "CEX Deposits & Withdrawals",
            alborHas: true
        },
        {
            name: "Fee Distribution",
            icon: DollarSign,
            albor: "Non-Custodial, Atomic",
            competitors: "CEX Payouts, Manual",
            alborHas: true
        },
        {
            name: "Data Sovereignty",
            icon: Shield,
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
                        The only non-custodial stack
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        You own the keys. You control the liquidity. You own the data.
                    </p>
                </div>

                {/* Comparison - Desktop Table & Mobile Cards */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Desktop Table */}
                    <div className="mb-12 overflow-x-auto hidden md:block">
                        <table className="border-collapse w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white text-base" style={{ width: '29%' }}>
                                        Capability
                                    </th>
                                    <th className="text-center py-3 px-4 font-semibold" style={{ width: '40%' }}>
                                        <div className="flex items-center justify-center">
                                            <img src="/logos/svg/albor.svg" alt="Albor Logo" className="h-4 w-auto drop-shadow-md" />
                                        </div>
                                    </th>
                                    <th className="text-center py-3 px-4 font-semibold text-slate-600 dark:text-slate-400 text-base" style={{ width: '30%' }}>
                                        Competitors
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <tr key={index} className="border-b border-white/10">
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

                    {/* Mobile Table */}
                    <div className="mb-12 md:hidden overflow-x-auto">
                        <table className="border-collapse w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 px-3 font-semibold text-slate-900 dark:text-white text-xs" style={{ width: '35%' }}>
                                        Feature
                                    </th>
                                    <th className="py-3 px-3 text-center" style={{ width: '32.5%' }}>
                                        <img src="/logos/svg/albor.svg" alt="Albor" style={{ height: '12px', width: 'auto', margin: '0 auto', display: 'block' }} />
                                    </th>
                                    <th className="text-center py-3 px-3 font-semibold text-slate-600 dark:text-slate-400 text-xs" style={{ width: '32.5%' }}>
                                        Others
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <tr key={index} className="border-b border-white/10">
                                            <td className="py-3 px-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="hidden md:flex flex-shrink-0 w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                                        <Icon className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                                                    </div>
                                                    <span className="font-semibold text-slate-900 dark:text-white text-xs">
                                                        {feature.name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-3 text-center">
                                                <span className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                                                    {feature.albor}
                                                </span>
                                            </td>
                                            <td className="py-3 px-3 text-center">
                                                <span className="text-xs text-slate-600 dark:text-slate-400 leading-tight">
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
                    <div className="flex justify-center gap-4">
                    <button
                        onClick={() => openModal("Schedule Demo")}
                        className="group px-8 py-4 rounded-lg bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Schedule Demo</span>
                    </button>
                    <a
                        href="https://t.me/nileshkhaitan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
                    >
                        <Send className="w-4 h-4" />
                        <span>Contact Us</span>
                    </a>
                    </div>
                </div>
            </div>

            <CalendlyModal />
        </section>
    );
}
