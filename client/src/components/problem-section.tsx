import { Bus, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section className="py-20 bg-verto-gray-50 animate-slide-up">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-verto-blue mb-6" data-testid="problem-title">
            Stablecoins Are an Operational Nightmare
          </h2>
          <p className="text-xl text-verto-gray-600 max-w-3xl mx-auto" data-testid="problem-subtitle">
            These aren't just blockchain problems — they're <strong>operational orchestration and institutionalisation challenges</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CEO Quote */}
          <Card className="hover:shadow-lg transition-all" data-testid="quote-ceo">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-verto-purple/10 rounded-full flex items-center justify-center mr-4">
                  <Bus className="text-verto-purple" />
                </div>
                <div>
                  <p className="font-semibold text-verto-blue">CEO</p>
                  <p className="text-sm text-verto-gray-500">Regional Bank</p>
                </div>
              </div>
              <blockquote className="text-verto-gray-600 italic leading-relaxed">
                "The revenue upside is huge — but how do I explain an unquantifiable risk to my board when no major bank has ever run a stablecoin at scale on a public blockchain?"
              </blockquote>
            </CardContent>
          </Card>

          {/* CCO Quote */}
          <Card className="hover:shadow-lg transition-all" data-testid="quote-cco">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-verto-green/10 rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-verto-green" />
                </div>
                <div>
                  <p className="font-semibold text-verto-blue">Chief Compliance Officer</p>
                  <p className="text-sm text-verto-gray-500">Global Payment Firm</p>
                </div>
              </div>
              <blockquote className="text-verto-gray-600 italic leading-relaxed">
                "Who actually controls the keys? How do we enforce our risk policies across multiple public chains in real time — and prove it to regulators without hiring an army?"
              </blockquote>
            </CardContent>
          </Card>

          {/* Head of Payments Quote */}
          <Card className="hover:shadow-lg transition-all" data-testid="quote-head-payments">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-verto-orange/10 rounded-full flex items-center justify-center mr-4">
                  <CreditCard className="text-verto-orange" />
                </div>
                <div>
                  <p className="font-semibold text-verto-blue">Head of Payments</p>
                  <p className="text-sm text-verto-gray-500">Multinational PSP</p>
                </div>
              </div>
              <blockquote className="text-verto-gray-600 italic leading-relaxed">
                "Integrating PSPs to accept stablecoins takes months. Public‑chain reconciliation is a nightmare, and every latency spike or FX loss hits my margins."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
