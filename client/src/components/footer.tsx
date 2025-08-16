import { ArrowRight, Mail } from "lucide-react";
import { SiX, SiTelegram } from "react-icons/si";
import { Link } from "wouter";
import logoSvg from "@assets/logo.svg";

// This is the new, dedicated Call-to-Action section that lives right above the footer.
export function PilotCtaSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pilot-cta" className="bg-slate-100 dark:bg-gray-800/60">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 text-center">
                 <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
                    Ready to Build the Future of Finance?
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Let's design a 90-day pilot that provides the data you need and the confidence your stakeholders demand.
                </p>
                 <a
                    href="https://calendly.com/nilesh-vertoai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600"
                >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
}

// The new, refined footer component.
export default function Footer() {
    const footerLinks = {
        "Solutions": ["Financial Institutions", "Exchanges", "Trading Firms"],
        "Company": ["About Us", "Careers", "Platform"],
        "Contact Us": ["Email", "X", "Telegram"]
    };

    return (
        <footer id="contact" className="bg-slate-900 dark:bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
                <div className="grid md:grid-cols-12 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-4">
                        <Link href="/" className="inline-block">
                            <img src={logoSvg} alt="Verto Logo" className="h-6 w-auto" />
                        </Link>
                        <p className="mt-4 text-slate-400 leading-relaxed text-sm max-w-xs">
                            Digital Asset Operations Platform for compliant trading, payments, and distribution on any chain.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                             <div key={title}>
                                <h4 className="font-semibold text-white tracking-wider uppercase text-sm mb-4">{title}</h4>
                                <ul className="space-y-3">
                                    {links.map(link => (
                                        <li key={link}>
                                            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Verto Technologies Inc. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-5">
                         <a href="mailto:info@verto.ai" aria-label="Email" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                         <a href="https://x.com/Verto_AI" target="_blank" rel="noopener noreferrer" aria-label="Follow Verto AI on X" className="text-slate-500 hover:text-white transition-colors"><SiX className="w-4 h-4" /></a>
                         <a href="https://t.me/VertoAI" target="_blank" rel="noopener noreferrer" aria-label="Join Verto AI on Telegram" className="text-slate-500 hover:text-white transition-colors"><SiTelegram className="w-4 h-4" /></a>

                    </div>
                </div>
            </div>
        </footer>
    );
}