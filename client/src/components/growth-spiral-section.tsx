import { TrendingUp, Repeat, DollarSign, Landmark, Calendar } from "lucide-react";
import { useCalendlyModal } from "./calendly-modal";

export default function GrowthSpiralSection() {
    const { openModal, CalendlyModal } = useCalendlyModal();

    const pillars = [
        {
            icon: Landmark,
            title: "Deep Bank Integrations",
            description: "Seamless APIs enable FIs to process instant BSD minting, redemption and payments against bank-held deposits.",
            color: "#EF660B"
        },
        {
            icon: DollarSign,
            title: "Global Payment Inflows",
            description: "BSD Payments from EU, US Banks and crypto seed dollar liquidity into the BSC-USDC DEX.",
            color: "#8F73FE"
        },
        {
            icon: TrendingUp,
            title: "Non-Custodial LP Yield",
            description: "More BSD payments drives more yield to the DEX, attracting existing Bittok market fiat on-ramps to seed liquidity.",
            color: "#217DFE"
        },
        {
            icon: Repeat,
            title: "Public Dollar Reserves",
            description: "Publicly auditable, non-custodial DEX creates price stability and restores public confidence.",
            color: "#EEAA4A"
        }
    ];

    const flowSteps = [
        { label: "Global Inflows", position: "left", color: "#EF660B" },
        { label: "Liquidity Grows", position: "top", color: "#8F73FE" },
        { label: "More Yield, More Capital", position: "right", color: "#217DFE" },
        { label: "Peg Stabilizes", position: "bottom", color: "#EEAA4A" },
    ];

    return (
        <section className="relative w-full py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6 text-slate-900 dark:text-white">
                        BSD unlocks a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                            Dollar Growth Spiral
                        </span>
                        {" "}for the Boliviano
                    </h2>
                </div>

                {/* Info Pills */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="relative p-5 rounded-xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-black/50 transition-all duration-300 hover:translate-y-[-2px]"
                        >
                            {/* Subtle glow */}
                            <div
                                className="absolute inset-0 w-full h-full opacity-5 pointer-events-none rounded-xl"
                                style={{
                                    boxShadow: `0 0 100px 30px ${pillar.color} inset`,
                                }}
                            />

                            {/* Icon badge */}
                            <div
                                className="inline-flex items-center justify-center p-2.5 rounded-lg mb-3 shadow-md"
                                style={{
                                    backgroundColor: `${pillar.color}15`,
                                    color: pillar.color,
                                }}
                            >
                                <pillar.icon className="w-5 h-5" />
                            </div>

                            <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                                {pillar.title}
                            </h3>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Circular Flow Diagram - Elegant Card */}
                <div className="relative max-w-3xl mx-auto mb-16">
                    <div className="relative p-8 md:p-12 rounded-2xl bg-white dark:bg-[#0A0A0B]/80 border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/50 backdrop-blur-xl">
                        {/* Dynamic gradient glow */}
                        <div
                            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none rounded-2xl"
                            style={{
                                boxShadow: `0 0 100px 30px #8F73FE inset`,
                            }}
                        />

                        {/* Flow Diagram */}
                        <div className="relative h-[400px] flex items-center justify-center">
                            {/* Center text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="text-center">
                                    <Repeat className="w-8 h-8 mx-auto mb-2 text-transparent bg-clip-text" style={{ filter: `drop-shadow(0 0 8px #8F73FE)` }} />
                                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                                        Growth Spiral
                                    </p>
                                </div>
                            </div>

                            {/* Flow nodes */}
                            {flowSteps.map((step, index) => {
                                const positions = {
                                    left: { top: '50%', left: '0%', transform: 'translate(0, -50%)' },
                                    top: { top: '0%', left: '50%', transform: 'translate(-50%, 0)' },
                                    right: { top: '50%', right: '0%', transform: 'translate(0, -50%)' },
                                    bottom: { bottom: '0%', left: '50%', transform: 'translate(-50%, 0)' },
                                };

                                return (
                                    <div
                                        key={index}
                                        className="absolute"
                                        style={positions[step.position as keyof typeof positions]}
                                    >
                                        <div
                                            className="px-4 py-2 rounded-full shadow-md text-sm font-semibold whitespace-nowrap backdrop-blur-sm border"
                                            style={{
                                                backgroundColor: `${step.color}15`,
                                                color: step.color,
                                                borderColor: `${step.color}30`,
                                            }}
                                        >
                                            {step.label}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* SVG circular arrows */}
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                viewBox="0 0 400 400"
                            >
                                <defs>
                                    {flowSteps.map((step, index) => (
                                        <marker
                                            key={index}
                                            id={`arrowhead-${index}`}
                                            markerWidth="10"
                                            markerHeight="10"
                                            refX="9"
                                            refY="3"
                                            orient="auto"
                                        >
                                            <polygon points="0 0, 10 3, 0 6" fill={step.color} opacity="0.4" />
                                        </marker>
                                    ))}
                                </defs>

                                {/* Circular paths */}
                                <path
                                    d="M 80,200 Q 120,80 200,60"
                                    stroke={flowSteps[0].color}
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.3"
                                    markerEnd="url(#arrowhead-0)"
                                    strokeDasharray="5,5"
                                />
                                <path
                                    d="M 200,60 Q 280,80 320,200"
                                    stroke={flowSteps[1].color}
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.3"
                                    markerEnd="url(#arrowhead-1)"
                                    strokeDasharray="5,5"
                                />
                                <path
                                    d="M 320,200 Q 280,320 200,340"
                                    stroke={flowSteps[2].color}
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.3"
                                    markerEnd="url(#arrowhead-2)"
                                    strokeDasharray="5,5"
                                />
                                <path
                                    d="M 200,340 Q 120,320 80,200"
                                    stroke={flowSteps[3].color}
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.3"
                                    markerEnd="url(#arrowhead-3)"
                                    strokeDasharray="5,5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* CTA Button - Matching Hero */}
                <div className="text-center">
                    <button
                        onClick={() => openModal("Schedule Demo")}
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-all hover:translate-y-[-2px] shadow-lg shadow-black/10 dark:shadow-black/30"
                        style={{
                            background: `linear-gradient(90deg, #EF660B, #8F73FE, #217DFE)`,
                            color: "white",
                        }}
                    >
                        <span>Schedule Demo</span>
                    </button>
                </div>
            </div>

            <CalendlyModal />
        </section>
    );
}
