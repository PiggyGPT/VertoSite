import { BarChart3, Shield, FileText, ArrowRight, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AiSection() {
  return (
    <section id="ai" className="py-16 bg-slate-50 animate-slide-up">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4" data-testid="ai-title">
            Verto AI — The Institutional Brain Powering It All
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" data-testid="ai-subtitle">
            Verto's Agentic AI is the control layer behind every mint, payment, and settlement — turning multi‑chain complexity into one compliant, seamless workflow.
          </p>
        </div>

        {/* Simplified Workflow */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 mb-10" data-testid="workflow-diagram">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">End‑to‑End Workflow Orchestration</h3>
          
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div className="text-center flex-1">
              <div className="w-10 h-10 bg-slate-200 rounded-lg mx-auto mb-2"></div>
              <h4 className="text-slate-700 text-sm">Request</h4>
            </div>
            <div className="w-6 h-px bg-slate-200 mx-3"></div>
            <div className="text-center flex-1">
              <div className="w-10 h-10 bg-slate-200 rounded-lg mx-auto mb-2"></div>
              <h4 className="text-slate-700 text-sm">Route</h4>
            </div>
            <div className="w-6 h-px bg-slate-200 mx-3"></div>
            <div className="text-center flex-1">
              <div className="w-10 h-10 bg-slate-200 rounded-lg mx-auto mb-2"></div>
              <h4 className="text-slate-700 text-sm">Risk Check</h4>
            </div>
            <div className="w-6 h-px bg-slate-200 mx-3"></div>
            <div className="text-center flex-1">
              <div className="w-10 h-10 bg-slate-200 rounded-lg mx-auto mb-2"></div>
              <h4 className="text-slate-700 text-sm">Execute</h4>
            </div>
            <div className="w-6 h-px bg-slate-200 mx-3"></div>
            <div className="text-center flex-1">
              <div className="w-10 h-10 bg-slate-200 rounded-lg mx-auto mb-2"></div>
              <h4 className="text-slate-700 text-sm">Report</h4>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="capability-quantify">
            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-slate-600" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Quantify Risk</h4>
            <p className="text-slate-600 text-sm leading-relaxed">Transparent, dynamic ratings for all on‑chain counterparties</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="capability-enforce">
            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-slate-600" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Enforce Policy</h4>
            <p className="text-slate-600 text-sm leading-relaxed">Execute only via approved, risk‑vetted routes</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center" data-testid="capability-automate">
            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-slate-600" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Automate Compliance</h4>
            <p className="text-slate-600 text-sm leading-relaxed">Generate regulator‑ready reports with complete audit trails</p>
          </div>
        </div>

        {/* Outcome Summary */}
        <div className="bg-white rounded-lg p-8 border border-slate-200 text-center" data-testid="ai-outcome">
          <h4 className="text-xl font-semibold text-slate-900 mb-6">The Complete Enterprise Solution</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-semibold text-slate-900 mb-1">CISOs</div>
              <div className="text-slate-600">Trust the enterprise-grade controls</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">CCOs</div>
              <div className="text-slate-600">Trust the comprehensive audit trails</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Executives</div>
              <div className="text-slate-600">Trust the proven business case</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">End Users</div>
              <div className="text-slate-600">Stripe‑like speed with institutional assurance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
