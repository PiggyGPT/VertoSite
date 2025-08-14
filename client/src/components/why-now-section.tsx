import { CalendarDays, Rocket, TrendingDown } from "lucide-react";

const ReasonCard = ({ icon: Icon, title, children }) => (
    <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-lg shadow-lg">
        <div className="flex items-center space-x-3 mb-3">
            <Icon className="w-5 h-5 text-verto-blue" />
            <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {children}
        </p>
    </div>
);

export default function WhyNowSection() {
  return (
    <section id="why-now" className="relative py-24 px-6 sm:px-8 overflow-hidden bg-white dark:bg-gray-900">
        {/* Background Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 via-cyan-50/50 to-transparent dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-transparent"></div>

        <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Headline */}
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight" data-testid="why-now-title">
                        Capitalize on the Next Wave of Digital Asset Growth.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Regulatory clarity and accelerating demand make this the ideal moment to capture market share.                    </p>
                </div>

                {/* Right Side: Reasons */}
                <div className="space-y-6">
                    <ReasonCard icon={CalendarDays} title="Regulatory Deadlines">
                        Major financial institutions are expected to have digital asset strategies operational by 2026 under new global standards, creating a clear timeline for action.
                    </ReasonCard>
                     <ReasonCard icon={Rocket} title="First-Mover Advantage">
                        The current landscape offers a rare opportunity to capture significant market and brand share before the space becomes saturated by established players.
                    </ReasonCard>
                     <ReasonCard icon={TrendingDown} title="The Cost Imperative">
                        With cross-border payment costs needing to drop by up to 75% to remain competitive, stablecoins offer the most viable path to achieving necessary efficiency.
                    </ReasonCard>
                </div>
            </div>
        </div>
    </section>
  );
}