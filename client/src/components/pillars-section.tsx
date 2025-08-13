import { Coins, CreditCard, Shield, CheckCircle, TrendingUp, FileCheck2, Zap } from "lucide-react";

export default function PillarsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pillars" className="py-20 bg-gradient-to-br from-emerald-50/60 via-green-50/50 to-teal-50/40 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-700/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="pillars-title">
            The Three Pillars of Adoption. One Unified OS.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="pillars-subtitle">
            Drive real-world usage with a complete operational stack for distribution, payments, and compliance.
          </p>
        </div>

        {/* Three Pillars - Visual Format */}
        <div className="space-y-16">
          
          {/* Pillar 1: Distribution */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg" data-testid="pillar-distribution">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-verto-green to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Coins className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-verto-green uppercase tracking-wider">Section 1</span>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Distribution</h3>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Instant, on-demand minting where value is deposited — no pre-funded treasury required.
                </p>
                
                <div className="mb-8">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    A global distribution layer that mints your stablecoin at the point of value-in. Embed the OS directly into banks, retail kiosks, and agent networks so tokens are created only when and where they're needed — eliminating treasury float and unlocking vast retail reach. Built with risk discipline informed by former Federal Reserve regulators, this flow scales safely into new markets.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-verto-green mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Mint-on-demand at partner touchpoints (banks, kiosks, agents)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-verto-green mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Integrates with existing rails — no costly hardware or centralized pre-funding</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-verto-green mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Risk-first controls at distribution: KYC gating, deposit-backed issuance, and counterparty limits</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-verto-green mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">SDKs & partner playbooks for quick rollout</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6 text-sm">
                    <span className="px-3 py-1 bg-verto-green/10 text-verto-green rounded-full font-medium">Unlock mass distribution</span>
                    <span className="px-3 py-1 bg-verto-green/10 text-verto-green rounded-full font-medium">Eliminate treasury float</span>
                    <span className="px-3 py-1 bg-verto-green/10 text-verto-green rounded-full font-medium">Slash on-ramp cost</span>
                  </div>
                  
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-verto-green hover:bg-verto-green/90 text-white font-semibold rounded-lg transition-colors"
                  >
                    Get Distribution Playbook
                  </button>
                </div>
              </div>
              
              {/* Right GIF Placeholder */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 lg:p-12 min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl border border-green-200 dark:border-green-700 p-8 shadow-lg">
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">🏛️</span>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="w-16 h-16 bg-verto-green/10 rounded-full mx-auto flex items-center justify-center">
                      <Coins className="w-8 h-8 text-verto-green" />
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-6 text-center font-medium">
                  Bank deposit → instant mint → wallet received
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Payments */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg" data-testid="pillar-payments">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-verto-purple to-violet-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-verto-purple uppercase tracking-wider">Section 2</span>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Payments</h3>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  One-tap payments that make merchants and users love your coin.
                </p>
                
                <div className="mb-8">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    A universal payment stack that removes blockchain friction at checkout. One integration lets merchants accept your stablecoin from any wallet, exchange, or bank — with instant routing, reconciliation automation, and the UX consumers expect. Designed by teams that scaled crypto P2P to tens of millions, the stack prioritizes conversion and reliability over complexity.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-verto-purple mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Single plug-and-play merchant integration (web + POS + mobile)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-verto-purple mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">One-tap UX across wallets, CEXs, and bank rails</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileCheck2 className="w-5 h-5 text-verto-purple mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Smart routing & reconciliation: automatic settlement, chargeback handling, and reporting</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-verto-purple mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Merchant dashboard with settlement guarantees and payout options</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6 text-sm">
                    <span className="px-3 py-1 bg-verto-purple/10 text-verto-purple rounded-full font-medium">Drive merchant adoption</span>
                    <span className="px-3 py-1 bg-verto-purple/10 text-verto-purple rounded-full font-medium">Remove checkout friction</span>
                    <span className="px-3 py-1 bg-verto-purple/10 text-verto-purple rounded-full font-medium">Automate reconciliation</span>
                  </div>
                  
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-verto-purple hover:bg-verto-purple/90 text-white font-semibold rounded-lg transition-colors"
                  >
                    See Payments Demo
                  </button>
                </div>
              </div>
              
              {/* Right GIF Placeholder */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-8 lg:p-12 min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl border border-purple-200 dark:border-purple-700 p-8 shadow-lg">
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="w-16 h-16 bg-verto-purple/10 rounded-full mx-auto flex items-center justify-center">
                      <Zap className="w-8 h-8 text-verto-purple" />
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">🏪</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-6 text-center font-medium">
                  Tap to pay → smart routing → merchant receives settled funds
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Compliance */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg" data-testid="pillar-compliance">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-verto-blue to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-verto-blue uppercase tracking-wider">Section 3</span>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Compliance</h3>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  An institutional control tower — real-time, explainable compliance across any public chain.
                </p>
                
                <div className="mb-8">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    Verto's AI turns the open blockchain into a regulator-ready operational backbone. Continuous, auditable automation replaces manual, multi-week reviews with explainable risk signals and deterministic controls — so you can safely access public liquidity without sacrificing compliance or speed.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Explainable Risk Ratings:</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300">AI-generated Moody's-style scores for wallets, tokens, and protocols — fully transparent with data lineage, model rationale, and configurable risk appetites.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Policy-Driven Routing:</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Route trades and payments by balancing risk, latency, and slippage. Routes are evaluated against your policy engine, custodian-key signed, and executed with sponsored gas when required.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Real-Time Audit Trails:</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300">End-to-end, time-stamped provenance for every risk decision, route choice, and counterparty approval — human-readable and cryptographically verifiable for auditors and regulators.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Operational Controls:</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Automated approvals, overrides, whitelists/blacklists, and escalation paths integrated into compliance workflows and dashboards.</p>
                    </div>
                  </div>
                  
                  {/* Trust Outcomes */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-verto-blue" />
                        <span className="font-medium text-slate-900 dark:text-white">CISO Trust</span>
                      </div>
                      <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-gray-600"></div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-verto-green" />
                        <span className="font-medium text-slate-900 dark:text-white">Regulatory Approval</span>
                      </div>
                      <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-gray-600"></div>
                      <div className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-verto-orange" />
                        <span className="font-medium text-slate-900 dark:text-white">User Delight</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-verto-blue hover:bg-verto-blue/90 text-white font-semibold rounded-lg transition-colors"
                  >
                    Free Risk & Compliance Review →
                  </button>
                </div>
              </div>
              
              {/* Right GIF Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 lg:p-12 min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl border border-blue-200 dark:border-blue-700 p-8 shadow-lg">
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="w-16 h-16 bg-verto-blue/10 rounded-full mx-auto flex items-center justify-center">
                      <Shield className="w-8 h-8 text-verto-blue" />
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-6 text-center font-medium">
                  Trace transactions across chains → consolidate into a single, auditable report
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 text-sm text-verto-blue hover:text-verto-blue/80 font-medium"
                >
                  Free Risk & Compliance Review →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}