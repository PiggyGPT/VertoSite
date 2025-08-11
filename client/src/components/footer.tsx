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
          <h2 className="text-4xl md:text-5xl font-bold text-verto-blue mb-8 leading-tight" data-testid="final-cta-title">
            You could spend years stitching together fractured point solutions —<br />
            <span className="text-verto-purple">or 90 days with live, compliant stablecoin rails</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 bg-verto-purple text-white text-xl font-semibold rounded-xl hover:bg-verto-purple/90 transition-all transform hover:scale-105 shadow-xl"
              data-testid="button-final-primary"
            >
              Get Your Live Pilot Blueprint →
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 border-2 border-verto-purple text-verto-purple text-xl font-semibold rounded-xl hover:bg-verto-purple hover:text-white transition-all transform hover:scale-105"
              data-testid="button-final-secondary"
            >
              Free Risk & Compliance Review →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-verto-blue text-white py-16" data-testid="footer">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4" data-testid="footer-logo">VERTO</div>
              <p className="text-blue-200 mb-6" data-testid="footer-description">
                Institutional stablecoin rails from concept to live. As seamless as Stripe, as compliant as SWIFT, as local as M‑Pesa.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  data-testid="social-github"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <button
                    onClick={() => scrollToSection("infrastructure")}
                    className="hover:text-white transition-colors text-left"
                    data-testid="footer-infrastructure"
                  >
                    Infrastructure
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("ai")}
                    className="hover:text-white transition-colors text-left"
                    data-testid="footer-ai"
                  >
                    AI Orchestration
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pilot")}
                    className="hover:text-white transition-colors text-left"
                    data-testid="footer-pilot"
                  >
                    Pilot Program
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="hover:text-white transition-colors text-left"
                    data-testid="footer-team"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left"
                    data-testid="footer-contact"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200" data-testid="footer-copyright">
            <p>&copy; 2024 Verto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
