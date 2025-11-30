import { Landmark, Repeat, BarChart3, ArrowRight, CreditCard, Shield, TrendingDown, Users, Target, Quote } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

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

const colorMap: { [key: string]: { bg: string; border: string; text: string; quote: string } } = {
  'albor-gold': { 
    bg: 'rgba(253, 185, 78, 0.04)',
    border: 'rgba(253, 185, 78, 0.1)',
    text: '#FDB94E',
    quote: '#FDB94E'
  },
  'albor-copper': { 
    bg: 'rgba(166, 110, 78, 0.04)',
    border: 'rgba(166, 110, 78, 0.1)',
    text: '#A66E4E',
    quote: '#A66E4E'
  },
  'albor-plum': { 
    bg: 'rgba(109, 85, 158, 0.04)',
    border: 'rgba(109, 85, 158, 0.1)',
    text: '#A18DE5',
    quote: '#A18DE5'
  },
  'albor-blue': { 
    bg: 'rgba(77, 136, 255, 0.04)',
    border: 'rgba(77, 136, 255, 0.1)',
    text: '#4D88FF',
    quote: '#4D88FF'
  },
  'albor-teal': { 
    bg: 'rgba(131, 244, 236, 0.04)',
    border: 'rgba(131, 244, 236, 0.1)',
    text: '#83F4EC',
    quote: '#83F4EC'
  }
};

const PainPointCard = ({ icon: Icon, color, persona, company, quote, testId, ctaText, ctaLink }: PainPointCardProps) => {
  const colors = colorMap[color] || colorMap['albor-gold'];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-xl p-4 md:p-6 overflow-hidden transition-all duration-300 border h-full flex flex-col justify-between"
      style={{
        background: `linear-gradient(135deg, ${colors.bg})`,
        borderColor: colors.border
      }}
      data-testid={testId}
    >
        <div>
            <div className="flex items-start gap-2 mb-4">
              <Quote className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" style={{ color: colors.quote } as any} />
              <blockquote className="text-sm md:text-base font-medium leading-snug text-slate-700 dark:text-slate-200">
                <p>"{quote}"</p>
              </blockquote>
            </div>
            <div className="flex items-start gap-3 mt-6 pt-4 border-t border-opacity-10" style={{ borderColor: colors.border }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors.text}20` }}>
                    <Icon className="w-5 h-5" style={{ color: colors.text } as any} />
                </div>
                <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{company}</p>
                    <p className="text-xs mt-0.5" style={{ color: colors.text }}>{persona}</p>
                </div>
            </div>
        </div>
    </motion.div>
  );
};

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
            icon: Landmark, color: 'albor-plum', persona: 'Head of Innovation', company: 'Global Bank',
            quote: 'How do we make our digital currency usable across our global network, without compromising the trust we\'ve built over decades?',
            testId: 'quote-bank',
            ctaText: 'Explore Banking Solutions',
            ctaLink: '/solutions/banking'
        },
        {
            icon: Repeat, color: 'albor-blue', persona: 'Chief Operating Officer', company: 'Digital Assets Exchange',
            quote: 'Our clients are withdrawing assets daily to chase yield we can\'t offer. We\'re becoming a free on-ramp to an ecosystem that\'s eating our lunch.',
            testId: 'quote-exchange',
            ctaText: 'Explore Exchange Solutions',
            ctaLink: '/solutions/exchanges'
        },
        {
            icon: BarChart3, color: 'albor-gold', persona: 'Chief Compliance Officer', company: 'Quantitative Hedge Fund',
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
        <section className="relative pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12">
                     <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight" data-testid="problem-title">
                        {title}
                     </h2>
                     <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed" data-testid="problem-subtitle">
                        {subtitle} 
                     </p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    {painPoints.map((point, index) => (
                       <PainPointCard key={index} {...point} />
                    ))}
                </div>
            </div>
        </section>
    );
}