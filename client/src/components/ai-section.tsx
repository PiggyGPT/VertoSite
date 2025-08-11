import { BarChart3, Shield, FileText, ArrowRight, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AiSection() {
  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 animate-slide-up">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" data-testid="ai-title">
            Verto AI — The Institutional Brain Powering It All
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed" data-testid="ai-subtitle">
            Verto's <strong>Agentic AI</strong> is the control layer behind every mint, payment, and settlement — turning multi‑chain complexity into one compliant, seamless workflow.
          </p>
        </div>

        {/* Enterprise Workflow Diagram */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 mb-16" data-testid="workflow-diagram">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">End‑to‑End Workflow Orchestration</h3>
          
          {/* Workflow Steps with Enterprise Design */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-500" data-testid="workflow-step-1">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Transaction Request</h4>
                    <p className="text-sm text-slate-600">Mint, payment, or settlement initiated</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-blue-300 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-blue-500 rotate-90" />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-500" data-testid="workflow-step-2">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Safe Routing</h4>
                    <p className="text-sm text-slate-600">AI selects optimal path via risk‑rated actors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-500" data-testid="workflow-step-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Risk Rating</h4>
                    <p className="text-sm text-slate-600">Moody's‑style scoring for wallets, tokens, bridges</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-orange-300 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-orange-500 rotate-90" />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500" data-testid="workflow-step-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Secure Execution</h4>
                    <p className="text-sm text-slate-600">Custodian‑signed, multi‑chain payloads</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center p-6 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl border-l-4 border-indigo-500" data-testid="workflow-step-5">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Real‑Time Monitoring</h4>
                    <p className="text-sm text-slate-600">Continuous policy checks and anomaly detection</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-indigo-300 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-indigo-500 rotate-90" />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center p-6 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl border-l-4 border-teal-500" data-testid="workflow-step-6">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <CheckCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Compliance Reporting</h4>
                    <p className="text-sm text-slate-600">ISO 20022‑style cross‑chain audit trails</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow" data-testid="capability-quantify">
            <div className="w-20 h-20 verto-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Quantify Risk</h4>
            <p className="text-slate-600 leading-relaxed">Transparent, dynamic ratings for all on‑chain counterparties with institutional-grade risk scoring</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow" data-testid="capability-enforce">
            <div className="w-20 h-20 verto-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Enforce Policy</h4>
            <p className="text-slate-600 leading-relaxed">Execute only via approved, risk‑vetted routes with automated policy enforcement at every step</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow" data-testid="capability-automate">
            <div className="w-20 h-20 verto-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Automate Compliance</h4>
            <p className="text-slate-600 leading-relaxed">Generate regulator‑ready reports instantly with ISO 20022 standards and complete audit trails</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="verto-gradient rounded-3xl p-12 text-white text-center shadow-2xl" data-testid="ai-outcome">
          <h4 className="text-3xl font-bold mb-8">The Complete Enterprise Solution</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-xl font-bold mb-2">CISOs</div>
              <div className="text-sm opacity-90">Trust the enterprise-grade controls and security architecture</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-xl font-bold mb-2">CCOs</div>
              <div className="text-sm opacity-90">Trust the comprehensive audit trails and regulatory compliance</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-xl font-bold mb-2">Executives</div>
              <div className="text-sm opacity-90">Trust the proven business case and institutional adoption</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-xl font-bold mb-2">End Users</div>
              <div className="text-sm opacity-90">Experience Stripe‑like speed with SWIFT‑level institutional assurance</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="px-10 py-4 bg-white text-slate-900 text-lg font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-lg"
            data-testid="button-explore-ai"
          >
            Explore the AI Architecture →
          </Button>
        </div>
      </div>
    </section>
  );
}
