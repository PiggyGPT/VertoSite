import { User, Gavel, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  return (
    <section id="team" className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight" data-testid="team-title">
            Leadership That Lands Credibility
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm text-center hover:shadow-lg transition-all duration-300" data-testid="team-david">
            <div className="w-20 h-20 bg-verto-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <User className="text-verto-blue w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">David Cass</h3>
            <p className="text-verto-purple font-semibold mb-4">CEO</p>
            <p className="text-slate-600 leading-relaxed">Former Fed regulator; ex‑CISO for $50B+ crypto desk</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm text-center hover:shadow-lg transition-all duration-300" data-testid="team-daniel">
            <div className="w-20 h-20 bg-verto-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gavel className="text-verto-green w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Daniel Garrie</h3>
            <p className="text-verto-purple font-semibold mb-4">General Counsel</p>
            <p className="text-slate-600 leading-relaxed">DOJ/DTCC compliance advisor in 200+ federal cases</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm text-center hover:shadow-lg transition-all duration-300" data-testid="team-hisham">
            <div className="w-20 h-20 bg-verto-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="text-verto-orange w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Hisham Anwar</h3>
            <p className="text-verto-purple font-semibold mb-4">CTO</p>
            <p className="text-slate-600 leading-relaxed">Built Google Classroom to 150M users; MIT engineer</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm text-center hover:shadow-lg transition-all duration-300" data-testid="team-nilesh">
            <div className="w-20 h-20 bg-verto-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-verto-purple w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Nilesh Khaitan</h3>
            <p className="text-verto-purple font-semibold mb-4">CPO</p>
            <p className="text-slate-600 leading-relaxed">Scaled Venmo/PayPal crypto & P2P to 90M+ users</p>
          </div>
        </div>
      </div>
    </section>
  );
}
