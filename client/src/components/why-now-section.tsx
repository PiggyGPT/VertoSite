export default function WhyNowSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 tracking-tight leading-tight" data-testid="why-now-title">
            You could spend years stitching together fractured point solutions — or 90 days with live, compliant stablecoin rails
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Regulatory Timeline</h4>
            <p className="text-slate-600 leading-relaxed">
              Major banks are required to have digital asset strategies by 2026 (Basel III), but zero banks have operationalized them at scale.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">First-Mover Window</h4>
            <p className="text-slate-600 leading-relaxed">
              Stablecoin regulation clarity in US/EU creates 18-month window for first-mover advantage.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Cost Imperative</h4>
            <p className="text-slate-600 leading-relaxed">
              Cross-border payment costs must drop 75% to remain competitive (McKinsey, 2024).
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="group px-10 py-4 verto-gradient text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            data-testid="button-primary-cta"
          >
            <span>Launch Pilot in 90 days</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm transition-all duration-300"
            data-testid="button-secondary-cta"
          >
            Free Risk & Compliance Review
          </button>
        </div>
      </div>
    </section>
  );
}