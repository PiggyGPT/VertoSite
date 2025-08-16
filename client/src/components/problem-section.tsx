import { Landmark, Repeat, BarChart3, ArrowRight } from "lucide-react";
import Link from 'next/link'; // Assuming you use Next.js for routing

// Reusable Pain Point Card Component - Now with a CTA
const PainPointCard = ({ icon: Icon, color, persona, company, quote, testId, ctaText, ctaLink }) => (
    <div className="relative p-6 h-full flex flex-col justify-between rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 shadow-lg backdrop-blur-lg" data-testid={testId}>
        <div>
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
        {/* ADDED: CTA Link/Button to direct users to specific solution pages */}
        <div className="mt-6">
            <Link href={ctaLink} passHref>
                <a className="group inline-flex items-center text-sm font-semibold text-verto-blue dark:text-verto-cyan hover:text-verto-purple dark:hover:text-verto-blue">
                    <span>{ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
            </Link>
        </div>
    </div>
);

export default function ProblemSection() {
    const painPoints = [
        {
            icon: Landmark, color: 'verto-green', persona: 'Head of Innovation', company: 'Global Bank',
            quote: 'How do we launch a compliant, tokenized asset and ensure it can be safely distributed and used at scale by our existing customers?',
            testId: 'quote-bank',
            ctaText: 'Explore Banking Solutions',
            ctaLink: '/solutions/banking'
        },
        {
            icon: Repeat, color: 'verto-blue', persona: 'Chief Operating Officer', company: 'Digital Asset Exchange',
            quote: 'We need to offer users access to assets on new chains, but managing the security, compliance, and fragmented liquidity is an operational nightmare.',
            testId: 'quote-exchange',
            ctaText: 'Explore Exchange Solutions',
            ctaLink: '/solutions/exchanges'
        },
        {
            icon: BarChart3, color: 'verto-purple', persona: 'Head of Trading', company: 'Quantitative Hedge Fund',
            quote: 'Executing our strategies on-chain requires institutional-grade controls. How do we manage treasury, enforce policies, and create a bulletproof audit trail?',
            testId: 'quote-trading',
            ctaText: 'Explore Trading Solutions',
            ctaLink: '/solutions/trading'
        },
    ];

    return (
        <section className="relative py-24 px-6 sm:px-8 overflow-hidden bg-white dark:bg-gray-900">
             {/* Background Gradient Aura */}
            <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-slate-50 dark:from-slate-800/30 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight" data-testid="problem-title">
                        Purpose-Built for Your Operations
                     </h2>
                     <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed" data-testid="problem-subtitle">
                        We understand the unique operational, security, and compliance challenges institutions face when moving on-chain. Verto was designed to solve them.
                     </p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                       <PainPointCard key={index} {...point} />
                    ))}
                </div>
            </div>
        </section>
    );
}