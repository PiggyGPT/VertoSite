import { User, Gavel, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight" data-testid="team-title">
            Leadership That Lands Credibility
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg text-center" data-testid="team-david">
            <div className="w-16 h-16 bg-verto-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <User className="text-verto-blue w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">David Cass</h3>
            <p className="text-verto-blue font-medium mb-3">CEO</p>
            <p className="text-sm text-slate-600">Former Fed regulator; ex‑CISO for $50B+ crypto desk</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center" data-testid="team-daniel">
            <div className="w-16 h-16 bg-verto-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Gavel className="text-verto-green w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Daniel Garrie</h3>
            <p className="text-verto-green font-medium mb-3">General Counsel</p>
            <p className="text-sm text-slate-600">DOJ/DTCC compliance advisor in 200+ federal cases</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center" data-testid="team-hisham">
            <div className="w-16 h-16 bg-verto-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="text-verto-orange w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Hisham Anwar</h3>
            <p className="text-verto-orange font-medium mb-3">CTO</p>
            <p className="text-sm text-slate-600">Built Google Classroom to 150M users; MIT engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center" data-testid="team-nilesh">
            <div className="w-16 h-16 bg-verto-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-verto-purple w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Nilesh Khaitan</h3>
            <p className="text-verto-purple font-medium mb-3">CPO</p>
            <p className="text-sm text-slate-600">Scaled Venmo/PayPal crypto & P2P to 90M+ users</p>
          </div>
        </div>

        {/* Trust Logos - Single Row */}
        <div className="mb-12" data-testid="trust-logos">
          <p className="text-center text-slate-600 mb-8 text-lg font-medium">Built by leaders at:</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-60">
            <div className="text-slate-700 font-bold text-lg whitespace-nowrap">Goldman Sachs</div>
            <div className="text-slate-700 font-bold text-lg whitespace-nowrap">Google</div>
            <div className="text-slate-700 font-bold text-lg whitespace-nowrap">M-Kopa</div>
            <div className="text-slate-700 font-bold text-lg whitespace-nowrap">Federal Reserve</div>
            <div className="text-slate-700 font-bold text-lg whitespace-nowrap">MIT</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById("pilot-cta");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-10 py-4 verto-gradient text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            data-testid="button-primary-cta"
          >
            <span>Launch Pilot in 90 days</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("risk-review");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
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
