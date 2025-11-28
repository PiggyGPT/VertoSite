import { Landmark, Repeat, BarChart3, ArrowRight, CreditCard, Shield, TrendingDown, Users, Target } from "lucide-react";
import { Link } from "wouter";

// Icon mapping for custom quotes
const iconMap = {
  Landmark,
  Repeat,
  BarChart3, 
  CreditCard,
  Shield,
  TrendingDown,
  Users,
  Target
};

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

interface CustomQuote {
  icon: string;
  color: string;
  persona: string;
  company: string;
  quote: string;
}

interface ProblemSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  customQuotes?: CustomQuote[];
}

export default function ProblemSection({ 
  title = "Purpose-Built for Your Operations",
  subtitle = "We understand the unique operational, security, and compliance challenges institutions face when transacting on public blockchains.",
  description = "We understand the unique operational, security, and compliance challenges institutions face when transacting on public blockchains.",
  customQuotes
}: ProblemSectionProps = {}) {
    
    const defaultPainPoints = [
        {
            icon: Landmark, color: 'verto-green', persona: 'Head of Innovation', company: 'Global Bank',
            quote: 'How do we make our digital currency usable across our global network, without compromising the trust we\'ve built over decades?',
            testId: 'quote-bank',
            ctaText: 'Explore Banking Solutions',
            ctaLink: '/solutions/banking'
        },
        {
            icon: Repeat, color: 'verto-blue', persona: 'Chief Operating Officer', company: 'Digital Assets Exchange',
            quote: 'Our clients are withdrawing assets daily to chase yield we can\'t offer. We\'re becoming a free on-ramp to an ecosystem that\'s eating our lunch.',
            testId: 'quote-exchange',
            ctaText: 'Explore Exchange Solutions',
            ctaLink: '/solutions/exchanges'
        },
        {
            icon: BarChart3, color: 'verto-purple', persona: 'Chief Compliance Officer', company: 'Quantitative Hedge Fund',
            quote: 'How do I give my traders the speed to execute time-sensitive alpha on-chain without signing off on a potential eight-figure mistake?',
            testId: 'quote-trading',
            ctaText: 'Explore Trading Solutions',
            ctaLink: '/solutions/trading'
        },
    ];

    // Convert custom quotes to pain points format if provided
    const painPoints = customQuotes ? customQuotes.map((quote, index) => ({
        icon: iconMap[quote.icon as keyof typeof iconMap] || Landmark,
        color: quote.color,
        persona: quote.persona,
        company: quote.company,
        quote: quote.quote,
        testId: `quote-${index}`,
        ctaText: 'Learn More',
        ctaLink: '#'
    })) : defaultPainPoints;

    return (
        <section className="relative py-16 md:py-20 px-6 sm:px-8 overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight" data-testid="problem-title">
                        {title}
                     </h2>
                     <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed" data-testid="problem-subtitle">
                        {subtitle} 
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