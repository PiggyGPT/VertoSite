import { Landmark, Repeat, BarChart3, ArrowRight, CreditCard, Shield, TrendingDown, Users, Target, Quote, Calendar, Send, Clock, Gavel, TrendingUp, History, Info } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useCalendlyModal } from "./calendly-modal";

// Icon mapping for custom quotes
const iconMap = {
  Landmark,
  Repeat,
  BarChart3, 
  CreditCard,
  Shield,
  TrendingDown,
  Users,
  Target,
  Clock,
  Gavel,
  TrendingUp,
  History,
  Info
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
  'albor-innovation': { 
    bg: 'rgba(168, 133, 255, 0.04)',
    border: 'rgba(168, 133, 255, 0.1)',
    text: '#A885FF',
    quote: '#A885FF'
  },
  'albor-gold': { 
    bg: 'rgba(241, 189, 118, 0.04)',
    border: 'rgba(241, 189, 118, 0.1)',
    text: '#F1BD76',
    quote: '#F1BD76'
  },
  'albor-copper': { 
    bg: 'rgba(241, 189, 118, 0.04)',
    border: 'rgba(241, 189, 118, 0.1)',
    text: '#F1BD76',
    quote: '#F1BD76'
  },
  'albor-plum': { 
    bg: 'rgba(168, 133, 255, 0.04)',
    border: 'rgba(168, 133, 255, 0.1)',
    text: '#A885FF',
    quote: '#A885FF'
  },
  'albor-purple': {
    bg: 'rgba(168, 133, 255, 0.04)',
    border: 'rgba(168, 133, 255, 0.1)',
    text: '#A885FF',
    quote: '#A885FF'
  },
  'albor-blue': { 
    bg: 'rgba(77, 136, 255, 0.04)',
    border: 'rgba(77, 136, 255, 0.1)',
    text: '#4D88FF',
    quote: '#4D88FF'
  },
  'albor-green': {
    bg: 'rgba(168, 133, 255, 0.04)',
    border: 'rgba(168, 133, 255, 0.1)',
    text: '#A885FF',
    quote: '#A885FF'
  },
  'albor-teal': { 
    bg: 'rgba(93, 212, 224, 0.04)',
    border: 'rgba(93, 212, 224, 0.1)',
    text: '#5DD4E0',
    quote: '#5DD4E0'
  }
};

const PainPointCard = ({ icon: Icon, color, company, quote, testId }: PainPointCardProps) => {
  const colors = colorMap[color] || colorMap['albor-gold'];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl p-8 transition-all duration-300 border h-full flex flex-col items-start bg-slate-900/40 backdrop-blur-sm border-white/5 hover:border-white/10 group"
      data-testid={testId}
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20" 
             style={{ background: `radial-gradient(circle at top left, ${colors.bg}, transparent 70%)` }} />

        {/* Icon */}
        <div className="relative mb-6 p-3 rounded-xl bg-slate-800/50 border border-white/5 group-hover:scale-110 transition-transform duration-300">
            <span style={{ color: colors.text }}>
              <Icon className="w-6 h-6" />
            </span>
        </div>

        {/* Branding (Title) */}
        <h3 className="text-xl font-bold text-white mb-3 relative z-10 leading-snug">
            {company}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-base leading-relaxed relative z-10">
            {quote}
        </p>
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
  customQuotes
}: ProblemSectionProps = {}) {
    const { openModal, CalendlyModal } = useCalendlyModal();
    
    // Icon mapping logic remains the same...
    const painPoints = customQuotes ? customQuotes.map((quote, index) => ({
        icon: iconMap[quote.icon as keyof typeof iconMap] || Landmark,
        color: quote.color,
        persona: quote.persona,
        company: quote.company,
        quote: quote.quote,
        testId: `quote-${index}`,
        ctaText: 'Learn More',
        ctaLink: '#'
    })) : []; // Default moved or handled if needed, for now focusing on customQuotes usage

    return (
        <section className="relative w-full py-16 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-28">
                     <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight" 
                        data-testid="problem-title"
                     >
                        {title}
                     </motion.h2>
                     <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed"
                     >
                        {subtitle} 
                     </motion.p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-24">
                    {painPoints.map((point, index) => (
                       <PainPointCard key={index} {...point} />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center flex justify-center gap-4">
                  <button
                    onClick={() => openModal("Book a Demo")}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm gap-2 min-w-[160px]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Demo</span>
                  </button>
                  <a
                    href="https://t.me/nileshkhaitan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="roup px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
                  >
                    <Send className="w-4 h-4 hidden md:inline" />
                    <span>Contact Us</span>
                  </a>
                </div>
            </div>

            <CalendlyModal />
        </section>
    );
}