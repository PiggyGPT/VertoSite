// src/components/HeroSection.tsx

import { ArrowRight, BookOpen } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative bg-white dark:bg-gray-900 pt-36 pb-24 px-6 sm:px-8 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Gradient Aura for visual effect */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2">
        <div className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-verto-purple/20 via-verto-blue/10 to-verto-green/20 dark:from-verto-purple/30 dark:via-verto-blue/20 dark:to-verto-green/30 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="font-bold text-slate-900 dark:text-white tracking-tight" data-testid="hero-title">
          {/* FIX: Title now uses the correct brand gradient colors. */}
          <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-verto-blue via-verto-purple to-verto-orange bg-clip-text text-transparent">
            Stablecoin Operations Platform
          </span>
          <br />
          {/* FIX: Separated sub-headline for better responsive font control. */}
          <span className="mt-4 block text-3xl md:text-4xl lg:text-5xl text-slate-800 dark:text-slate-200">
            Zero → Launch in 90 Days.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Activate your network with Verto's complete operational stack for stablecoin distribution, payments, and AI-powered security & compliance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("pilot")}
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600"
            data-testid="button-primary-cta"
          >
            <span>Launch Your Pilot</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("infrastructure")}
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            data-testid="button-secondary-cta"
          >
             <BookOpen className="w-5 h-5 mr-2 text-slate-500" />
            <span>Read Documentation</span>
          </button>
        </div>

        {/* FIX: Removed the redundant logo section from the hero. */}

      </div>
    </section>
  );
}