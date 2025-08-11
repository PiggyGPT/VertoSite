export default function WhyNowSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Why Now</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Regulatory Timeline</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Major banks are required to have digital asset strategies by 2026 (Basel III), but zero banks have operationalized them at scale.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">First-Mover Window</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Stablecoin regulation clarity in US/EU creates 18-month window for first-mover advantage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Cost Imperative</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Cross-border payment costs must drop 75% to remain competitive (McKinsey, 2024).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}