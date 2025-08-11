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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="team-david">
            <div className="w-16 h-16 bg-verto-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <User className="text-verto-blue w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">David Cass</h3>
            <p className="text-verto-purple font-medium mb-3">CEO</p>
            <p className="text-sm text-slate-600">Former Fed regulator; ex‑CISO for $50B+ crypto desk</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="team-daniel">
            <div className="w-16 h-16 bg-verto-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Gavel className="text-verto-green w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Daniel Garrie</h3>
            <p className="text-verto-purple font-medium mb-3">General Counsel</p>
            <p className="text-sm text-slate-600">DOJ/DTCC compliance advisor in 200+ federal cases</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="team-hisham">
            <div className="w-16 h-16 bg-verto-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="text-verto-orange w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Hisham Anwar</h3>
            <p className="text-verto-purple font-medium mb-3">CTO</p>
            <p className="text-sm text-slate-600">Built Google Classroom to 150M users; MIT engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="team-nilesh">
            <div className="w-16 h-16 bg-verto-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-verto-purple w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Nilesh Khaitan</h3>
            <p className="text-verto-purple font-medium mb-3">CPO</p>
            <p className="text-sm text-slate-600">Scaled Venmo/PayPal crypto & P2P to 90M+ users</p>
          </div>
        </div>
      </div>
    </section>
  );
}
