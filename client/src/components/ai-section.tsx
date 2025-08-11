import { BarChart3, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AiSection() {
  return (
    <section id="ai" className="py-20 animate-slide-up">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-verto-blue mb-6" data-testid="ai-title">
            Verto AI — The Institutional Brain Powering It All
          </h2>
          <p className="text-xl text-verto-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="ai-subtitle">
            Verto's <strong>Agentic AI</strong> is the control layer behind every mint, payment, and settlement — turning multi‑chain complexity into one compliant, seamless workflow.
          </p>
        </div>

        {/* Workflow */}
        <Card className="mb-16" data-testid="workflow-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-verto-blue mb-8 text-center">End‑to‑End Workflow Orchestration</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: 1, title: "Transaction Request", description: "Mint, payment, or settlement initiated" },
                { step: 2, title: "Safe Routing", description: "AI selects optimal path via risk‑rated actors" },
                { step: 3, title: "Risk Rating", description: "Moody's‑style scoring for wallets, tokens, bridges" },
                { step: 4, title: "Secure Execution", description: "Custodian‑signed, multi‑chain payloads" },
                { step: 5, title: "Real‑Time Monitoring", description: "Continuous policy checks and anomaly detection" },
                { step: 6, title: "Compliance Reporting", description: "ISO 20022‑style cross‑chain audit trails" },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-4 p-4 bg-verto-gray-50 rounded-xl" data-testid={`workflow-step-${item.step}`}>
                  <div className="w-8 h-8 bg-verto-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-verto-blue mb-1">{item.title}</h4>
                    <p className="text-sm text-verto-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center" data-testid="capability-quantify">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-verto-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-2xl text-verto-purple" />
              </div>
              <h4 className="text-xl font-semibold text-verto-blue mb-3">Quantify Risk</h4>
              <p className="text-verto-gray-600">Transparent, dynamic ratings for all on‑chain counterparties</p>
            </CardContent>
          </Card>
          <Card className="text-center" data-testid="capability-enforce">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-verto-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-2xl text-verto-green" />
              </div>
              <h4 className="text-xl font-semibold text-verto-blue mb-3">Enforce Policy</h4>
              <p className="text-verto-gray-600">Execute only via approved, risk‑vetted routes</p>
            </CardContent>
          </Card>
          <Card className="text-center" data-testid="capability-automate">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-verto-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-2xl text-verto-blue" />
              </div>
              <h4 className="text-xl font-semibold text-verto-blue mb-3">Automate Compliance</h4>
              <p className="text-verto-gray-600">Generate regulator‑ready reports instantly</p>
            </CardContent>
          </Card>
        </div>

        {/* Outcome */}
        <div className="bg-gradient-to-br from-verto-purple to-verto-blue rounded-3xl p-8 text-white text-center" data-testid="ai-outcome">
          <h4 className="text-2xl font-bold mb-6">The Complete Picture</h4>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-semibold mb-1">CISOs</div>
              <div className="text-sm opacity-90">trust the controls</div>
            </div>
            <div>
              <div className="font-semibold mb-1">CCOs</div>
              <div className="text-sm opacity-90">trust the audit</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Execs</div>
              <div className="text-sm opacity-90">trust the business case</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Users</div>
              <div className="text-sm opacity-90">get Stripe‑like speed with SWIFT‑level assurance</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="px-8 py-4 bg-verto-blue text-white rounded-xl hover:bg-verto-blue/90 transition-all"
            data-testid="button-explore-ai"
          >
            Explore the AI Architecture →
          </Button>
        </div>
      </div>
    </section>
  );
}
