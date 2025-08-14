import { Users, Shield, CreditCard } from "lucide-react";

// Reusable Pain Point Card Component
const PainPointCard = ({ icon: Icon, color, persona, company, quote, testId }) => (
    <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 shadow-lg backdrop-blur-lg" data-testid={testId}>
        <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-5 italic">
            "{quote}"
        </blockquote>
        <div className="flex items-center">
            <div className={`flex-shrink-0 w-10 h-10 bg-${color}/10 rounded-lg flex items-center justify-center mr-4`}>
                <Icon className={`text-${color} w-5 h-5`} />
            </div>
            <div>
                <p className="font-semibold text-slate-900 dark:text-white">{persona}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{company}</p>
            </div>
        </div>
    </div>
);


export default function ProblemSection() {
    const painPoints = [
        {
            icon: Users, color: 'verto-green', persona: 'CEO', company: 'Regional Bank',
            quote: 'We\'re a cash-first country. How do we put stablecoins in every customer’s hands through the agents they already trust?',
            testId: 'quote-ceo'
        },
        {
            icon: Shield, color: 'verto-blue', persona: 'CISO', company: 'Global Payment Firm',
            quote: 'How do we deliver regulator-proof audits on public ledgers when our systems are built on centralized control?',
            testId: 'quote-ciso'
        },
        {
            icon: CreditCard, color: 'verto-purple', persona: 'Head of Payments', company: 'Multinational PSP',
            quote: 'How do we scale when wallet pop-ups kill checkout conversion and merchants can’t reconcile our coin?',
            testId: 'quote-head-payments'
        },
    ];

    return (
        <section className="relative py-24 px-6 sm:px-8 overflow-hidden bg-white dark:bg-gray-900">
             {/* Background Gradient Aura */}
            <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-slate-50 dark:from-slate-800/30 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Central Title */}
                    <div className="lg:col-span-1 text-center lg:text-left pt-8">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight" data-testid="problem-title">
                            From Minting
                            <br />
                            <span className="text-slate-500 dark:text-slate-400">to Adoption</span>
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed" data-testid="problem-subtitle">
                           Stablecoins succeed when they’re widely held, actively spent, and deeply trusted.
                        </p>
                    </div>

                    {/* Pain Points Grid */}
                    <div className="lg:col-span-2 grid md:grid-cols-1 gap-8">
                        {painPoints.map((point, index) => (
                           <div key={index} className={index === 1 ? 'md:pl-12' : ''}>
                                <PainPointCard {...point} />
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}