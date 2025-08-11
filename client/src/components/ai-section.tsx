import { BarChart3, Shield, FileText, ArrowRight, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AiSection() {
  return (
    <section id="ai" className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight" data-testid="ai-title">
            Verto AI — The Institutional Brain Powering It All
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light" data-testid="ai-subtitle">
            Verto's Agentic AI is the control layer behind every mint, payment, and settlement — turning multi‑chain complexity into one compliant, seamless workflow.
          </p>
        </div>

        {/* Simplified Workflow */}
        <div className="bg-white rounded-2xl p-12 border border-slate-200/50 shadow-sm mb-16" data-testid="workflow-diagram">
          <h3 className="text-2xl font-semibold text-slate-900 mb-10 text-center">End‑to‑End Workflow Orchestration</h3>
          
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-verto-blue/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-verto-blue rounded-lg"></div>
              </div>
              <h4 className="text-slate-900 font-medium">Request</h4>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-verto-blue to-verto-purple mx-4"></div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-verto-purple/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-verto-purple rounded-lg"></div>
              </div>
              <h4 className="text-slate-900 font-medium">Route</h4>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-verto-purple to-verto-green mx-4"></div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-verto-green/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-verto-green rounded-lg"></div>
              </div>
              <h4 className="text-slate-900 font-medium">Risk Check</h4>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-verto-green to-verto-orange mx-4"></div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-verto-orange/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-verto-orange rounded-lg"></div>
              </div>
              <h4 className="text-slate-900 font-medium">Execute</h4>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-verto-orange to-verto-blue mx-4"></div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-verto-blue/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-verto-blue rounded-lg"></div>
              </div>
              <h4 className="text-slate-900 font-medium">Report</h4>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm text-center hover:shadow-lg transition-all duration-300" data-testid="capability-quantify">
            <div className="w-16 h-16 bg-verto-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-verto-blue" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Quantify Risk</h4>
            <p className="text-slate-600 leading-relaxed">Transparent, dynamic ratings for all on‑chain counterparties</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm text-center hover:shadow-lg transition-all duration-300" data-testid="capability-enforce">
            <div className="w-16 h-16 bg-verto-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-verto-purple" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Enforce Policy</h4>
            <p className="text-slate-600 leading-relaxed">Execute only via approved, risk‑vetted routes</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm text-center hover:shadow-lg transition-all duration-300" data-testid="capability-automate">
            <div className="w-16 h-16 bg-verto-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-verto-green" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Automate Compliance</h4>
            <p className="text-slate-600 leading-relaxed">Generate regulator‑ready reports with complete audit trails</p>
          </div>
        </div>


      </div>
    </section>
  );
}
