import { Landmark, Repeat, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Reusable Pain Point Card Component - Now with a CTA
interface PainPointCardProps {
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    persona: string;
    company: string;
    quote: string;
    testId: string;
    ctaText: string;
    ctaLink: string;
}

const PainPointCard = ({ icon: Icon, color, persona, company, quote, testId, ctaText, ctaLink }: PainPointCardProps) => (
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
                    <p className="font-semibold text-slate-900 dark:text-white">{company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{persona}</p>
                </div>
            </div>
        </div>

    </div>
);

export default function ProblemSection() {
    const painPoints = [
        {
            icon: Landmark, color: 'verto-green', persona: 'Head of Innovation', company: 'Global Bank',
            quote: 'We need to launch a compliant stablecoin on public chains. How can we ensure it can be safely distributed and accepted for payments by our existing customers?',
            testId: 'quote-bank',
            ctaText: 'Explore Banking Solutions',
            ctaLink: '/solutions/banking'
        },
        {
            icon: Repeat, color: 'verto-blue', persona: 'Chief Operating Officer', company: 'Centralized Exchange',
            quote: 'We need to offer assets only available on public chains. But accesing their fragmented liquidity in a secure, compliant way has been.  an operational nightmare.',
            testId: 'quote-exchange',
            ctaText: 'Explore Exchange Solutions',
            ctaLink: '/solutions/exchanges'
        },
        {
            icon: BarChart3, color: 'verto-purple', persona: 'Chief Compliance Officer', company: 'Quantitative Hedge Fund',
            quote: 'Our systems are built on centralized control. How do we enforce our risk policies, and deliver regulator-proof audit trails for every transaction on public chains?',
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
                        We understand the unique operational, security, and compliance challenges institutions face when accessing public chains. 
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