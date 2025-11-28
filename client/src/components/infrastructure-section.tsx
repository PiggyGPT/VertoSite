import { Coins, CreditCard, FileCheck2, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";

export default function InfrastructureSection() {

  return (
    <section id="infrastructure" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="infrastructure-title">
            Three critical operations. One unified platform.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="infrastructure-subtitle">
          Run mission critical operations from a single, self-hosted OS.

</p>
        </div>

        {/* Three Operations - Expanded Visual Design */}
        <div className="space-y-12">
          
          {/* Operation 1: Trusted Issuance & On-Ramps */}
          <div className="bg-white/30 dark:bg-slate-800/30 border border-slate-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg" data-testid="operation-issuance">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-verto-green to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Coins className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Network Issuance</h3>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">The Challenge</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    A stablecoin's value is limited by its distribution. Scaling through traditional banking rails is slow, capital-intensive, and fails to reach a mass audience, while direct retail on-ramps have historically lacked institutional-grade compliance.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">The Verto Solution</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our platform enables you to mint stablecoins directly at the point of value-in — whether at a bank, a partner kiosk, or through an agent network. Your KYC/AML policies are embedded and enforced at the moment of creation, not as an afterthought.
                  </p>
                </div>
              </div>
              
              {/* Right Benefits */}
              <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 lg:p-12 flex flex-col justify-center">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Key Outcomes</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Unlock Mass Distribution</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Safely leverage retail and partner channels to get your stablecoin into the hands of users globally.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Eliminate Treasury Float</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Mint tokens on-demand against deposits, reducing the capital required to pre-fund treasury accounts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Slash On-Ramp Costs</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Bypass expensive hardware and centralized issers to scale efficiently and profitably.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operation 2: Frictionless Payment Network */}
          <div className="bg-white/30 dark:bg-slate-800/30 border border-slate-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg" data-testid="operation-payments">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-verto-purple to-violet-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">One Tap Payments</h3>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">The Challenge</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Driving adoption is impossible when the user experience is broken. A fragmented ecosystem of wallets, exchanges, and chains creates high integration costs for merchants and a confusing, high-friction experience for end-users.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">The Verto Solution</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We provide a universal payment stack with plug-and-play APIs and SDKs. This allows any merchant to accept your stablecoin—alongside other digital assets—from any wallet, CEX, or bank account through a single, simple integration.
                  </p>
                </div>
              </div>
              
              {/* Right Benefits */}
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-8 lg:p-12 flex flex-col justify-center">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Key Outcomes</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Drive Merchant Adoption</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Make your stablecoin the easiest digital asset for any business to accept, online or at the point of sale.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Deliver a Seamless User Experience</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Offer a one-tap payment flow that removes the end-user blockchain complexities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Automate Reconciliation</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Eliminate the operational nightmare of reconciling transactions across countless platforms and tools.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operation 3: Automated Compliance & Reporting */}
          <div className="bg-white/30 dark:bg-slate-800/30 border border-slate-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg" data-testid="operation-compliance">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-verto-blue to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Automated Compliance Reporting</h3>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">The Challenge</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Operating on public blockchains creates an immense compliance burden. Manually tracing funds across multiple chains to satisfy regulators is operationally untenable and exposes your institution to significant risk.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">The Verto Solution</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our AI-powered compliance engine provides a real-time, consolidated audit trail for every transaction on any chain. It acts as your institutional-grade control tower, allowing you to safely access public market liquidity with the same level of routing assurance and compliance as the SWIFT network.
                  </p>
                </div>
              </div>
              
              {/* Right Benefits */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 lg:p-12 flex flex-col justify-center">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Key Outcomes</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Automate Regulatory Reporting</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Reduce audit and reporting timelines from weeks to minutes with a single, regulator-ready ledger.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Safely Access Public Liquidity</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Confidently access deep liquidity pools on decentralized exchanges aligned to your risk policies.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verto-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Gain Real-Time Operational Oversight</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Monitor all transaction flows across your entire network from a single, unified dashboard.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
