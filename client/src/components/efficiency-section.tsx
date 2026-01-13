"use client"

import { PieChart, Pie, Label, Sector } from "recharts"
import { type PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { category: "albor", value: 90, fill: "#F1BD76" },
  { category: "traditional", value: 10, fill: "#1E2A48" },
]

const chartConfig = {
  value: {
    label: "Market Share",
  },
  albor: {
    label: "With Albor",
    color: "#F1BD76",
  },
  traditional: {
    label: "Without Albor",
    color: "#0f172a",
  },
} satisfies ChartConfig

export function EfficiencySection() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center py-24">
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                99% Cheaper → 90% More Market
            </h2>
            <p className="text-2xl text-slate-300 dark:text-slate-200">
                High costs price you out of &lt;$10k credits. Albor prices you back in.
            </p>
        </div>

        {/* Chart Container */}
        <div className="container mx-auto px-4 max-w-7xl relative flex justify-center items-center">
            <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[600px]">
                <PieChart>
                    <defs>
                        <linearGradient id="pieGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F1BD76" />
                            <stop offset="95%" stopColor="#4D88FF" />
                            <stop offset="100%" stopColor="#A885FF" />
                        </linearGradient>
                    </defs>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="category"
                        innerRadius={110}
                        outerRadius={160}
                        strokeWidth={8}
                        stroke="transparent"
                        activeIndex={0}
                        activeShape={({
                            outerRadius = 0,
                            ...props
                        }: PieSectorDataItem) => (
                            <Sector {...props} outerRadius={outerRadius + 15} fill="url(#pieGradient)" />
                        )}
                        labelLine={false}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = outerRadius + 45; // Increased spacing
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                            
                            const labels = index === 0 
                                ? [ "$100 - $10k invoices", "With Albor"] 
                                : [">$10k invoices", "Without Albor"];
                            
                            return (
                                <text 
                                    x={x} 
                                    y={y} 
                                    className="fill-slate-900 dark:fill-white text-base font-bold" 
                                    textAnchor={x > cx ? 'start' : 'end'} 
                                    dominantBaseline="central"
                                >
                                    <tspan x={x} dy="-0.6em">{labels[0]}</tspan>
                                    <tspan x={x} dy="1.4em" className="fill-slate-300 font-medium text-sm">{labels[1]}</tspan>
                                </text>
                            );
                        }}
                        startAngle={108}
                        endAngle={468}
                        paddingAngle={2}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-slate-900 dark:fill-white text-5xl font-bold tracking-tighter"
                                            >
                                                {"100X"}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 36}
                                                className="fill-slate-500 dark:fill-slate-400 text-xl font-medium tracking-wide"
                                            >
                                                Efficiency
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        </div>
    </div>
  )
}
