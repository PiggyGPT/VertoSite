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
    <section id="ai" className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="ai-title">
            AI-Powered Risk Management that scales
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8" data-testid="ai-subtitle">
          Verto AI secures your operations with auditable, institutional-grade risk management on public blockchains, turning ambiguity into quantifiable confidence.

</p>
          
          {/* CTA moved up */}
          <div className="text-center mb-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              data-testid="button-risk-review-cta"
            >
              Free Risk & Compliance Review →
            </button>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700" data-testid="capability-risk-scoring">
            <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-verto-blue" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Explainable Risk Ratings</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Transforms manual, multi-week audits of any wallet, token, or protocol into AI-generated Moody's style risk ratings that are fully explainable and tailored to your risk appetite.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700" data-testid="capability-routing">
            <div className="w-12 h-12 bg-verto-purple/10 rounded-lg flex items-center justify-center mb-4">
              <ArrowLeftRight className="w-6 h-6 text-verto-purple" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Policy-Driven Routing</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Balances risk, latency, and slippage across liquidity pools and bridges. Every route is custodian-key signed and executed with sponsored gas.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-slate-200 dark:border-gray-700" data-testid="capability-audit-trails">
            <div className="w-12 h-12 bg-verto-green/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-verto-green" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Real-Time Audit Trails</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Generates an explainable compliance record detailing risk ratings, routing decisions, and counterparty approvals for any regulator - in real time.</p>
          </div>
        </div>

        {/* Outcome Summary */}
        <div className="text-center mb-8" data-testid="ai-outcome">
          <div className="inline-flex items-center space-x-8 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-full px-8 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-verto-blue/10 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-verto-blue" />
              </div>
              <span className="font-medium text-slate-900 dark:text-white">CISO Trust</span>
            </div>
            <div className="w-px h-6 bg-slate-200 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-verto-green/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-verto-green" />
              </div>
              <span className="font-medium text-slate-900 dark:text-white">Regulatory Approval</span>
            </div>
            <div className="w-px h-6 bg-slate-200 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-verto-orange/10 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-verto-orange" />
              </div>
              <span className="font-medium text-slate-900 dark:text-white">User Delight</span>
            </div>
          </div>
        </div>




      </div>
    </section>
  );
}
