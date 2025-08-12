export default function WhyNowSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50/40 via-blue-50/30 to-cyan-50/20 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-700/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight leading-tight" data-testid="why-now-title">
            Spend years stitching together fractured point solutions... or 90 days with Verto.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Regulatory Timeline</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Major banks are required to have digital asset strategies by 2026 (Basel III), but zero banks have operationalized them at scale.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">First-Mover Window</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Stablecoin regulation clarity with the recent GENIUS Act creates an 18-month window for first-mover advantage.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Cost Imperative</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Cross-border payment costs must drop 75% to remain competitive (McKinsey, 2024), which stablecoins can offer at scale.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 verto-gradient text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md"
            data-testid="button-primary-cta"
          >
            Launch Pilot in 90 days
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            data-testid="button-secondary-cta"
          >
            Free Risk & Compliance Review →
          </button>
        </div>
      </div>
    </section>
  );
}