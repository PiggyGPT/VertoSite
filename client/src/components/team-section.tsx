import { User, Gavel, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-verto-gray-50 animate-slide-up">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-verto-blue mb-6" data-testid="team-title">
            Leadership That Lands Credibility
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center" data-testid="team-david">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-verto-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-2xl text-verto-blue" />
              </div>
              <h3 className="text-xl font-semibold text-verto-blue mb-2">David Cass</h3>
              <p className="text-verto-purple font-medium mb-3">CEO</p>
              <p className="text-sm text-verto-gray-600">Former Fed regulator; ex‑CISO for $50B+ crypto desk</p>
            </CardContent>
          </Card>
          <Card className="text-center" data-testid="team-daniel">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-verto-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="text-2xl text-verto-green" />
              </div>
              <h3 className="text-xl font-semibold text-verto-blue mb-2">Daniel Garrie</h3>
              <p className="text-verto-purple font-medium mb-3">General Counsel</p>
              <p className="text-sm text-verto-gray-600">DOJ/DTCC compliance advisor in 200+ federal cases</p>
            </CardContent>
          </Card>
          <Card className="text-center" data-testid="team-hisham">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-verto-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-2xl text-verto-orange" />
              </div>
              <h3 className="text-xl font-semibold text-verto-blue mb-2">Hisham Anwar</h3>
              <p className="text-verto-purple font-medium mb-3">CTO</p>
              <p className="text-sm text-verto-gray-600">Built Google Classroom to 150M users; MIT engineer</p>
            </CardContent>
          </Card>
          <Card className="text-center" data-testid="team-nilesh">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-verto-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-2xl text-verto-purple" />
              </div>
              <h3 className="text-xl font-semibold text-verto-blue mb-2">Nilesh Khaitan</h3>
              <p className="text-verto-purple font-medium mb-3">CPO</p>
              <p className="text-sm text-verto-gray-600">Scaled Venmo/PayPal crypto & P2P to 90M+ users</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
