import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Final CTA */}
      <section id="pilot-cta" className="py-20 animate-slide-up">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl font-medium text-slate-900 mb-6 leading-relaxed" data-testid="final-cta-title">
            You could spend years stitching together fractured point solutions — or 90 days with live, compliant stablecoin rails
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 verto-gradient text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md"
              data-testid="button-final-primary"
            >
              Free 90-day Pilot Strategy →
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
              data-testid="button-final-secondary"
            >
              Free Risk & Compliance Review →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-100 text-slate-600 py-12" data-testid="footer">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm" data-testid="footer-copyright">
              © 2025 Verto. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
