import { ArrowRight, Landmark, ArrowRightLeft, CandlestickChart, Rocket } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {

  // UPDATED: CTAs now have more colorful styling aligned with Verto's brand colors and link to Calendly
  const actionCTAs = [
    {
      title: "Launch Stablecoin",
      subtitle: "For Financial Institutions",
      icon: Landmark,
      href: "https://calendly.com/nilesh-vertoai/30min",
      // More pronounced blue styling for enterprise appeal
      bgColorClass: "bg-gradient-to-br from-verto-blue/15 to-verto-blue/25 dark:from-verto-blue/20 dark:to-verto-blue/30 hover:from-verto-blue/25 hover:to-verto-blue/35 dark:hover:from-verto-blue/30 dark:hover:to-verto-blue/40 border-verto-blue/20 dark:border-verto-blue/30",
      iconColor: "text-verto-blue dark:text-verto-blue group-hover:text-verto-blue-dark dark:group-hover:text-verto-blue-light"
    },
    {
      title: "Offer On-Chain Products",
      subtitle: "For Digital Asset Exchanges",
      icon: ArrowRightLeft,
      href: "https://calendly.com/nilesh-vertoai/30min",
      // More pronounced purple styling
      bgColorClass: "bg-gradient-to-br from-verto-purple/15 to-verto-purple/25 dark:from-verto-purple/20 dark:to-verto-purple/30 hover:from-verto-purple/25 hover:to-verto-purple/35 dark:hover:from-verto-purple/30 dark:hover:to-verto-purple/40 border-verto-purple/20 dark:border-verto-purple/30",
      iconColor: "text-verto-purple dark:text-verto-purple group-hover:text-verto-purple-dark dark:group-hover:text-verto-purple-light"
    },
    {
      title: "Secure On-Chain Ops",
      subtitle: "For Trading Firms & Funds",
      icon: CandlestickChart,
      href: "https://calendly.com/nilesh-vertoai/30min",
      // More pronounced orange styling
      bgColorClass: "bg-gradient-to-br from-verto-orange/15 to-verto-orange/25 dark:from-verto-orange/20 dark:to-verto-orange/30 hover:from-verto-orange/25 hover:to-verto-orange/35 dark:hover:from-verto-orange/30 dark:hover:to-verto-orange/40 border-verto-orange/20 dark:border-verto-orange/30",
      iconColor: "text-verto-orange dark:text-verto-orange group-hover:text-verto-orange-dark dark:group-hover:text-verto-orange-light"
    },
  ];

  return (
    <section id="hero" className="relative bg-white dark:bg-gray-900 pt-28 md:pt-36 pb-20 md:pb-24 px-6 sm:px-8 overflow-hidden">
      {/* Background elements are unchanged */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/4 -translate-y-1/2">
        <div className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-verto-purple/20 via-verto-blue/10 to-verto-green/20 dark:from-verto-purple/30 dark:via-verto-blue/20 dark:to-verto-green/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* ORIGINAL HEADLINE: Retained as requested. */}
        <h1 className="font-bold text-slate-900 dark:text-white tracking-tight" data-testid="hero-title">
          <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-verto-blue via-verto-purple to-verto-orange bg-clip-text text-transparent">
            Digital Asset Operations Platform
          </span>
        </h1>

        {/* ORIGINAL SUBTITLE: Retained as requested. */}
        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Securely access public chains for trading, payments, and asset distribution with an AI-powered compliance and security stack.
        </p>


        {/* --- REVISED CTA BLOCK: Action-oriented buttons --- */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {actionCTAs.map((cta) => (
              <a key={cta.title} href={cta.href} target="_blank" rel="noopener noreferrer">
                {/* UPDATED: Enhanced colorful styling with brand-aligned gradients */}
                <div className={`group flex flex-col justify-center text-center h-full p-6 backdrop-blur-sm border rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cta.bgColorClass}`}>
                  <div className="flex items-center justify-center gap-x-2">
                      <cta.icon className={`w-6 h-6 transition-colors ${cta.iconColor}`} />
                      <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{cta.title}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {cta.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* UPDATED: "Launch Pilot in 90 Days" now links to Calendly */}
          <div className="mt-8">
              <a 
                href="https://calendly.com/nilesh-vertoai/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-x-2 bg-gradient-to-r from-verto-green/15 via-verto-blue/15 to-verto-purple/15 dark:from-verto-green/25 dark:via-verto-blue/25 dark:to-verto-purple/25 hover:from-verto-green/25 hover:via-verto-blue/25 hover:to-verto-purple/25 dark:hover:from-verto-green/35 dark:hover:via-verto-blue/35 dark:hover:to-verto-purple/35 text-slate-800 dark:text-slate-200 font-semibold px-6 py-3 rounded-full text-base border border-verto-green/20 dark:border-verto-green/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
                data-testid="hero-pilot-cta"
              >
                  <Rocket className="w-5 h-5 text-verto-green" />
                  <span>Launch Pilot in 90 Days</span>
                <ArrowRight className="w-4 h-4 ml-0 transform group-hover:translate-x-1 transition-transform text-verto-blue" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}