import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MobileFrame } from "../ui/mobile-frame";
import { PanelHeader } from "../common-visuals/PanelHeader";
import { CheckCircle2, Table } from "lucide-react";
import { PolarRadiusAxis, RadialBar, RadialBarChart, Label } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart";

// CONSTANTS
const ALBOR_SUN_LOGO = "/logos/svg/alborsun.svg";

const Panel2_AuditReport = ({ onComplete }: { onComplete?: () => void }) => {
    useEffect(() => {
        if (onComplete) {
            const timer = setTimeout(onComplete, 8000);
            return () => clearTimeout(timer);
        }
    }, [onComplete]);

    const chartData = [{ type: "assets", repos: 6000, treasuries: 3000, cash: 1000 }];

    const chartConfig = {
      repos: {
        label: "Overnight Repos",
        color: "#2169D1",
      },
      treasuries: {
        label: "Short-Term Treasuries",
        color: "#F1BD76",
      },
      cash: {
        label: "Cash",
        color: "rgba(255,255,255,0.3)",
      },
    } satisfies ChartConfig;

    const audits = [
        { id: "AUD-2819", date: "09:41 AM", type: "Proof of Reserve", status: "Verified" },
        { id: "AUD-2818", date: "Yesterday", type: "Daily Settlement", status: "Verified" },
        { id: "AUD-2817", date: "Jan 10", type: "Yield Distribution", status: "Verified" },
    ];

    return (
        <div className="h-full w-full bg-slate-950 flex flex-col font-sans">
             <PanelHeader 
                title="" 
                subtitle="" 
                color="transparent" 
                leftElement={
                    <div className="w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                        <img src="/profiles/maria_silva.png" alt="Maria Silva" className="w-full h-full object-cover" />
                    </div>
                }
                centerElement={
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-2 py-0.5 border border-white/10 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center -space-x-1.5">
                            <div className="w-[22px] h-[22px] bg-[#2169D1] rounded-full flex items-center justify-center shadow-sm overflow-hidden z-10 border border-white/10">
                                <img src={ALBOR_SUN_LOGO} alt="Albor" className="w-full h-full object-contain p-1" />
                            </div>
                            <div className="w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden z-20 border border-white/20">
                                <img src="/logos/banrural.jpg" alt="Banrural" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col -gap-0.5">
                            <h2 className="text-[9.5px] whitespace-nowrap font-semibold text-white tracking-tight">@mariasilva</h2>
                            <p className="text-[7.5px] text-white font-semibold tracking-widest uppercase">BANRURAL</p>
                        </div>
                    </div>
                }
                rightElement={
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#F1BD76]/20 backdrop-blur-md rounded border border-[#F1BD76]/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F1BD76] animate-[pulse_2s_infinite]" />
                        <span className="text-[9px] font-semibold text-[#F1BD76] uppercase tracking-wide">Live</span>
                    </div>
                }
                className="absolute top-0 left-0 right-0 z-20"
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Top Section: Radial Hero */}
                <div className="shrink-0 flex flex-col">
                    <div 
                        className="px-6 pt-24 pb-4 flex flex-col justify-center items-center relative overflow-hidden rounded-b-[40px] shadow-[0_45px_100px_-20px_rgba(33,105,209,0.3)]"
                        style={{ 
                            background: 'linear-gradient(135deg, #2169D1 0%, #F1BD76 100%)',
                            backgroundColor: '#2169D1'
                        }}
                    >
                         {/* Subtle Corner Accents */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(168,133,255,0.3),transparent_50%)] pointer-events-none" />
                        
                        {/* Metallic / Glass Sheen */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none" />
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl pointer-events-none" />
                        
                        {/* Radial Chart Container */}
                        <div className="w-full relative z-10 flex justify-center">
                            <ChartContainer
                                config={chartConfig}
                                className="aspect-square w-full max-w-[340px] -mb-16"
                            >
                                <RadialBarChart
                                    data={chartData}
                                    endAngle={180}
                                    innerRadius={110}
                                    outerRadius={150}
                                >
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                        <Label
                                            content={({ viewBox }) => {
                                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                    return (
                                                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) - 55}
                                                                className="fill-white text-[10px] uppercase font-semibold tracking-[0.2em] opacity-40"
                                                            >
                                                                Verified Reserves
                                                            </tspan>
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) - 5}
                                                                className="fill-white text-4xl font-bold tracking-tighter"
                                                            >
                                                                10,000.00
                                                            </tspan>
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) + 25}
                                                                className="fill-white text-[11px] font-semibold opacity-40 tracking-[0.3em] uppercase"
                                                            >
                                                                GTQ
                                                            </tspan>
                                                        </text>
                                                    )
                                                }
                                            }}
                                        />
                                    </PolarRadiusAxis>
                                    <RadialBar
                                        dataKey="repos"
                                        stackId="a"
                                        cornerRadius={5}
                                        fill="var(--color-repos)"
                                        className="stroke-transparent stroke-2"
                                    />
                                    <RadialBar
                                        dataKey="treasuries"
                                        fill="var(--color-treasuries)"
                                        stackId="a"
                                        cornerRadius={5}
                                        className="stroke-transparent stroke-2"
                                    />
                                    <RadialBar
                                        dataKey="cash"
                                        fill="var(--color-cash)"
                                        stackId="a"
                                        cornerRadius={5}
                                        className="stroke-transparent stroke-2"
                                    />
                                </RadialBarChart>
                            </ChartContainer>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="flex-1 overflow-y-auto bg-slate-950 pt-2">
                    <div className="px-5 py-3 flex items-center justify-between sticky top-0 z-10 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
                        <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">Recent Audits</span>
                        <Table className="w-3 h-3 text-white/40" />
                    </div>

                    <div className="divide-y divide-white/5">
                        {audits.map((audit, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="px-5 py-3 flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[11px] font-semibold text-white">{audit.type}</span>
                                    <span className="text-[9px] text-white/40 font-mono">{audit.id} • {audit.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-medium text-[#F1BD76]">{audit.status}</span>
                                    <CheckCircle2 className="w-3 h-3 text-[#F1BD76]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const RealTimeAuditsVisual = () => {
  return (
    <MobileFrame>
        <Panel2_AuditReport />
    </MobileFrame>
  );
};
