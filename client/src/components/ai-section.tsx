import { BarChart3, Shield, FileText, ArrowLeftRight, ArrowRight, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AiSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="ai" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight" data-testid="ai-title">
            Verto AI: Risk & Compliance on Public Chains
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" data-testid="ai-subtitle">
            Bank-grade governance powered by explainable AI.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg text-slate-700 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            How do you operate with institutional rigor on open blockchains? You need intelligent systems that assess, route, and audit every transaction component in real time.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="capability-risk-scoring">
            <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-verto-blue" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Explainable Risk Scoring</h4>
            <p className="text-slate-600 text-sm leading-relaxed">Generate Moody's-style ratings for every wallet, token, bridge, and protocol with full decision transparency. Risk factors are quantified and auditable, not black-boxed.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="capability-routing">
            <div className="w-12 h-12 bg-verto-purple/10 rounded-lg flex items-center justify-center mb-4">
              <ArrowLeftRight className="w-6 h-6 text-verto-purple" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Intelligent Multi-Chain Routing</h4>
            <p className="text-slate-600 text-sm leading-relaxed">Balance risk, latency, and slippage across liquidity pools, bridges, and counterparties. Every path decision is custodian-key signed and executed with sponsored gas for seamless UX.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200" data-testid="capability-audit-trails">
            <div className="w-12 h-12 bg-verto-green/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-verto-green" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Real-Time Audit Trails</h4>
            <p className="text-slate-600 text-sm leading-relaxed">Every transaction generates an immutable compliance record linking fiat-in to settlement-out. Risk decisions, routing choices, and counterparty approvals are cryptographically signed and instantly available for regulatory review.</p>
          </div>
        </div>

        {/* Outcome Summary */}
        <div className="bg-white rounded-lg p-8 border border-slate-200 text-center mb-8" data-testid="ai-outcome">
          <h4 className="text-xl font-semibold text-slate-900 mb-6">Outcome</h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold text-slate-900 mb-1">Your CISO</div>
              <div className="text-slate-600">gets explainable decisions</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Your CCO</div>
              <div className="text-slate-600">gets bulletproof audit trails</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Your users</div>
              <div className="text-slate-600">get invisible compliance</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
            data-testid="button-risk-review-cta"
          >
            Free Risk & Compliance Review →
          </button>
        </div>


      </div>
    </section>
  );
}
