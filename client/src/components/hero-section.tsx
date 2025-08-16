import { ArrowRight, Landmark, ArrowRightLeft, CandlestickChart, Rocket } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {

  // UPDATED: CTAs now have a subtle background color class
  const actionCTAs = [
    {
      title: "Launch Stablecoin",
      subtitle: "For Financial Institutions",
      icon: Landmark,
      href: "/solutions/banking",
      // Subtle blue tint, slightly stronger on hover
      bgColorClass: "bg-verto-blue/5 dark:bg-verto-blue/10 hover:bg-verto-blue/10 dark:hover:bg-verto-blue/20"
    },
    {
      title: "Offer On-Chain Products",
      subtitle: "For Digital Asset Exchanges",
      icon: ArrowRightLeft,
      href: "/solutions/exchanges",
      // Subtle purple tint, slightly stronger on hover
      bgColorClass: "bg-verto-purple/5 dark:bg-verto-purple/10 hover:bg-verto-purple/10 dark:hover:bg-verto-purple/20"
    },
    {
      title: "Secure On-Chain Ops",
      subtitle: "For Trading Firms & Funds",
      icon: CandlestickChart,
      href: "/solutions/trading",
      // Subtle orange tint, slightly stronger on hover
      bgColorClass: "bg-verto-orange/5 dark:bg-verto-orange/10 hover:bg-verto-orange/10 dark:hover:bg-verto-orange/20"
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
              <Link key={cta.title} href={cta.href}>
                {/* UPDATED: Added cta.bgColorClass to the className string */}
                <a className={`group flex flex-col justify-center text-center h-full p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm transition-all duration-200 hover:border-verto-blue hover:dark:border-verto-cyan hover:-translate-y-1 hover:shadow-lg ${cta.bgColorClass}`}>
                  <div className="flex items-center justify-center gap-x-2">
                      <cta.icon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-verto-blue dark:group-hover:text-verto-cyan transition-colors" />
                      <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{cta.title}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {cta.subtitle}
                  </p>
                </a>
              </Link>
            ))}
          </div>

          {/* NEW: Added the "Time to Value" hook */}
          <div className="mt-8">
              <p className="inline-flex items-center gap-x-2 bg-verto-green/10 dark:bg-verto-green/20 text-verto-green-dark dark:text-verto-green-light font-semibold px-4 py-2 rounded-full text-base">
                  <Rocket className="w-5 h-5" />
                  <span>Launch Pilot in 90 Days</span>
                <ArrowRight className="w-4 h-4 ml-0 transform group-hover:translate-x-1 transition-transform" />

              </p>
          </div>
        </div>
      </div>
    </section>
  );
}