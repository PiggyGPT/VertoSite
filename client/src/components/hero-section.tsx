import { ArrowRight, BookOpen, Landmark, ArrowRightLeft, CandlestickChart } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {

  // An array for our new, combined Persona CTAs.
  // Each one now has a direct link to a solutions page.
  const personaCTAs = [
    { 
      name: "For Financial Institutions", 
      icon: Landmark, 
      href: "/solutions/banking" 
    },
    { 
      name: "For Digital Asset Exchanges", 
      icon: ArrowRightLeft, 
      href: "/solutions/exchanges" 
    },
    { 
      name: "For Trading Firms", 
      icon: CandlestickChart, 
      href: "/solutions/trading" 
    },
  ];

  return (
    // REDUCED PADDING: Adjusted vertical padding for a tighter mobile view
    <section id="hero" className="relative bg-white dark:bg-gray-900 pt-28 md:pt-36 pb-20 md:pb-24 px-6 sm:px-8 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Gradient Aura for visual effect */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2">
        <div className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-verto-purple/20 via-verto-blue/10 to-verto-green/20 dark:from-verto-purple/30 dark:via-verto-blue/20 dark:to-verto-green/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* REFINED HEADLINE: Made the main title punchier and more direct. */}
        <h1 className="font-bold text-slate-900 dark:text-white tracking-tight" data-testid="hero-title">
          <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-verto-blue via-verto-purple to-verto-orange bg-clip-text text-transparent">
            The Institutional OS for Digital Assets
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Securely access public chains for trading, payments, and asset distribution with an AI-powered compliance and security stack.
        </p>

        {/* --- NEW CTA BLOCK: Merges segmentation and action --- */}
        <div className="mt-10 max-w-lg mx-auto">
          {/* On mobile, buttons stack vertically. On larger screens, they go side-by-side. */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {personaCTAs.map((cta) => (
              <Link key={cta.name} href={cta.href}>
                <a className="group flex items-center justify-center gap-x-3 px-4 py-3 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 transition-all duration-200 hover:border-verto-blue hover:dark:border-verto-cyan hover:-translate-y-1 hover:shadow-lg">
                  <cta.icon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-verto-blue dark:group-hover:text-verto-cyan transition-colors" />
                  <span>{cta.name.replace("For ", "")}</span> {/* Shorten name for mobile */}
                </a>
              </Link>
            ))}
          </div>

          {/* SECONDARY CTA: A subtle link for technical users that doesn't clutter the main actions. */}
          <div className="mt-6">
            <Link href="/documentation">
               <a className="group inline-flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                 <span>Or explore the documentation</span>
                 <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
               </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}