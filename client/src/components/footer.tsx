import { ArrowRight, Mail } from "lucide-react";
import { SiX, SiTelegram } from "react-icons/si";
import { Link } from "wouter";
import { useCalendlyModal } from "./calendly-modal";

// This is the new, dedicated Call-to-Action section that lives right above the footer.
export function PilotCtaSection() {
    const { openModal, CalendlyModal } = useCalendlyModal();

    return (
        <section id="pilot-cta" className="bg-slate-100 dark:bg-gray-800/60">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 text-center">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
                    Ready to Build the Future of Finance?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-2">
                    Let's design a 90-day pilot that provides the data you need and the confidence your stakeholders demand.
                </p>
                 <button
                    onClick={openModal}
                    className="group mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm sm:text-base"
                >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            
            <CalendlyModal title="Schedule a Consultation" />
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
                <div className="grid md:grid-cols-12 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold text-white">Alberi</span>
                        </Link>
                        <p className="mt-4 text-slate-400 leading-relaxed text-sm max-w-xs">
                            Digital Asset Operations Platform for compliant trading, payments, and distribution on any chain.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                             <div key={title}>
                                <h4 className="font-semibold text-white tracking-wider uppercase text-sm mb-4">{title}</h4>
                                <ul className="space-y-3">
                                    {links.map(link => {
                                        let href = "#";
                                        if (link === "Financial Institutions") href = "/launch-stablecoin";
                                        else if (link === "Exchanges") href = "/offer-defi-products";
                                        else if (link === "Trading Firms") href = "/secure-defi-ops";
                                        else if (link === "Platform") href = "#infrastructure";
                                        else if (link === "Email") href = "mailto:info@verto.ai";
                                        else if (link === "X") href = "https://x.com/Verto_AI";
                                        else if (link === "Telegram") href = "https://t.me/VertoAI";
                                        
                                        return (
                                            <li key={link}>
                                                <a 
                                                    href={href} 
                                                    className="text-slate-400 hover:text-white transition-colors duration-200"
                                                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                    {...(href === "#infrastructure" ? { 
                                                        onClick: (e) => {
                                                            e.preventDefault();
                                                            const element = document.getElementById('infrastructure');
                                                            if (element) {
                                                                element.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }
                                                    } : href.startsWith("/") ? {
                                                        onClick: () => {
                                                            setTimeout(() => window.scrollTo(0, 0), 100);
                                                        }
                                                    } : {})}
                                                >
                                                    {link}
                                                </a>
                                            </li>
                                        );
                                    })}
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