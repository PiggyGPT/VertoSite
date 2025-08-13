import { Coins, CreditCard, Shield, CheckCircle, Users, Store, QrCode, Smartphone, ArrowRight, Database, FileText, Zap } from "lucide-react";

export default function PillarsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0">
      <div className="text-center py-20 bg-white dark:bg-gray-900">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">
          The Three Pillars of Adoption. One Unified OS.
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed px-6">
          Drive real-world usage with a complete operational stack for distribution, payments, and compliance.
        </p>
      </div>

      {/* Distribution */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2">Distribution</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Instant on-ramps</p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Cash-to-stablecoin minting at any point of value-in. Agent Partners—from retail kiosks to mobile operators—serve as cash-in points for your stablecoin.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Users className="w-5 h-5 text-verto-green mr-2" />
                    Agent Experience
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-green/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-green">1</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Pre-fund:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Establish deposit-backed credit line</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-green/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-green">2</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Create QR:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Generate unique QR code for cash amount</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Smartphone className="w-5 h-5 text-verto-green mr-2" />
                    Customer Experience
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-green/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-green">1</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Deposit & Scan:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Hand over cash and scan QR code</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-green/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-green">2</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Confirm:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">One tap, instant wallet & minting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <Users className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">Mass Adoption</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Scale distribution by leveraging existing retail networks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <Zap className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">Zero Float</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">On-demand minting eliminates pre-funded treasury</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">Low Cost</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Integrate with existing infrastructure</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-verto-green hover:bg-verto-green/90 text-white font-semibold rounded-lg transition-colors"
              >
                Get Distribution Playbook
              </button>
            </div>

            {/* User Journey Diagram */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 text-center">Distribution Flow</h5>
                
                <div className="space-y-6">
                  {/* Agent Setup with Credit Line */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                          <Users className="w-7 h-7 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Agent</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                          <span className="text-lg">💰</span>
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Credit Line</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-14 h-14 bg-verto-green/10 rounded-xl flex items-center justify-center">
                          <QrCode className="w-7 h-7 text-verto-green" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">QR Code</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Flow */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">💵</span>
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cash In</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-verto-green/10 rounded-xl flex items-center justify-center">
                        <Coins className="w-8 h-8 text-verto-green" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Mint</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Wallet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section className="py-24 bg-slate-50/50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2">Payments</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">One-tap payments. Universal acceptance</p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Payment stack removes all blockchain friction from checkout. Single API integration lets merchants accept payments from any wallet, credit card, or exchange.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Store className="w-5 h-5 text-verto-purple mr-2" />
                    Merchant Experience
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-purple/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-purple">1</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Integrate Once:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Single API for web, POS, mobile</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-purple/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-purple">2</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Create Link:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Instant QR or payment link generation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-purple/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-purple">3</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Receive Funds:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Instant routing and settlement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Smartphone className="w-5 h-5 text-verto-purple mr-2" />
                    Customer Experience
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-purple/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-purple">1</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Tap to Pay:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Scan QR or click payment link</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-purple/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-purple">2</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">Universal Funding:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Any token, any chain, one tap</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-verto-purple/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-verto-purple">3</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">No Gas Fees:</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Sponsored gas, seamless experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <Zap className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">Boost Conversion</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">One-tap UX and sponsored gas drive completion rates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <Store className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">Drive Adoption</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Single API opens universal payment ecosystem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">Automated Back-Office</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Handle reconciliation and reporting automatically</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-verto-purple hover:bg-verto-purple/90 text-white font-semibold rounded-lg transition-colors"
              >
                See Payments Demo
              </button>
            </div>

            {/* User Journey Diagram */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 text-center">Payment Flow</h5>
                
                <div className="space-y-6">
                  {/* Merchant Creates Payment */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                          <Store className="w-7 h-7 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Merchant</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-14 h-14 bg-verto-purple/10 rounded-xl flex items-center justify-center">
                          <QrCode className="w-7 h-7 text-verto-purple" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Creates QR</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Payment Flow */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-green-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">User Scans</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-verto-purple/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">👆</span>
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">One Tap</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Payment Done</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2">Compliance</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">AI-powered risk & compliance</p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  AI-powered compliance system turns open blockchain into regulator-ready operational backbone. Replaces manual, multi-week reviews with continuous, auditable automation.
                </p>
              </div>

              <div className="mb-8">
                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">How We Ensure Safe Operations</h5>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Our system integrates directly into your business logic, ensuring every transaction—from a cash deposit to a payment—is compliant from the start.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h6 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <div className="w-8 h-8 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-3">
                        <Database className="w-4 h-4 text-verto-blue" />
                      </div>
                      Explainable Risk Ratings
                    </h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Our AI generates clear, Moody's-style risk scores for wallets, tokens, and protocols. This model is fully transparent, providing the data lineage and rationale behind every score.
                    </p>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <div className="w-8 h-8 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-3">
                        <Zap className="w-4 h-4 text-verto-blue" />
                      </div>
                      Policy-Driven Routing
                    </h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Define your compliance policies once. Our system automatically enforces them by routing payments and trades to balance risk, latency, and slippage.
                    </p>
                  </div>
                </div>

                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Auditability and Oversight</h5>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  We provide the tools needed to satisfy regulators and build an ironclad audit trail.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h6 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <div className="w-8 h-8 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-verto-blue" />
                      </div>
                      Real-Time Audit Trails
                    </h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Every decision, from a route choice to a counterparty approval, is logged in a time-stamped provenance. This record is human-readable and cryptographically verifiable.
                    </p>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <div className="w-8 h-8 bg-verto-blue/10 rounded-lg flex items-center justify-center mr-3">
                        <Shield className="w-4 h-4 text-verto-blue" />
                      </div>
                      Operational Controls
                    </h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Automate approvals, overrides, whitelists/blacklists, and escalation paths directly into your compliance dashboards.
                    </p>
                  </div>
                </div>

                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">What We Secure</h5>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="flex items-center mb-2">
                      <Coins className="w-5 h-5 text-verto-green mr-2" />
                      <span className="font-medium text-slate-900 dark:text-white text-sm">Minting & On-Ramps</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Compliant cash-to-stablecoin minting with KYC and AML enforcement at point of cash-in</p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center mb-2">
                      <CreditCard className="w-5 h-5 text-verto-purple mr-2" />
                      <span className="font-medium text-slate-900 dark:text-white text-sm">Payments</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Secure payments from any wallet on any chain with real-time compliance evaluation</p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center mb-2">
                      <Database className="w-5 h-5 text-verto-blue mr-2" />
                      <span className="font-medium text-slate-900 dark:text-white text-sm">Trading</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Compliant stablecoin trading to any digital asset through policy-driven routing</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <Shield className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">CISO Trust</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Enterprise-grade security and risk management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">Regulatory Approval</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Audit-ready compliance and transparent controls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mt-0.5">
                    <Zap className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h6 className="font-medium text-slate-900 dark:text-white mb-1">User Delight</h6>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Seamless experience without compliance friction</p>
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

            {/* Compliance Dashboard Diagram */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 text-center">Compliance Dashboard</h5>
                
                <div className="space-y-4">
                  {/* Issuance Transaction */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Coins className="w-6 h-6 text-verto-green" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white text-sm">Distribution Mint</div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">$10,000 • KYC Verified</div>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-verto-green" />
                  </div>

                  {/* Payment Transaction */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6 text-verto-purple" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white text-sm">Payment Route</div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">$500 • Risk Score: A+</div>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-verto-green" />
                  </div>

                  {/* Trading Transaction */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Database className="w-6 h-6 text-verto-blue" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white text-sm">Liquidity Trade</div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">$25,000 • Policy Compliant</div>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-verto-green" />
                  </div>

                  {/* Audit Report */}
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 mt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-verto-blue/10 rounded-lg mx-auto flex items-center justify-center mb-2">
                        <FileText className="w-6 h-6 text-verto-blue" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Single Auditable Report</span>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Real-time, regulator-ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}