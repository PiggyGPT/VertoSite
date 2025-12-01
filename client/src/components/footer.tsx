import { ArrowRight, Mail } from "lucide-react";
import { SiX, SiTelegram } from "react-icons/si";
import { Link } from "wouter";
import { useCalendlyModal } from "./calendly-modal";

// This is the new, dedicated Call-to-Action section that lives right above the footer.
export function PilotCtaSection() {
    const { openModal, CalendlyModal } = useCalendlyModal();

    return (
        <section id="pilot-cta" className="backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 text-center">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
                    Ready to Build the Future of Finance?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-2">
                    Let's design a 90-day pilot that provides the data you need and the confidence your stakeholders demand.
                </p>
                 <button
                    onClick={() => openModal("Schedule a Consultation")}
                    className="group mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-600 text-sm sm:text-base"
                >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            
            <CalendlyModal />
        </section>
    );
}

// The new, refined footer component.
export default function Footer() {
    const footerLinks = {
        "Solutions": ["Banking APIs", "Decentralized Exchange", "Patent-Pending Router", "Sovereign Infrastructure"],
        "Company": ["About Us", "Careers", "Platform"],
        "Contact Us": ["Email", "X", "Telegram"]
    };

    return (
        <footer id="contact" className="text-white" style={{ backgroundColor: '#131B2E' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
                <div className="grid md:grid-cols-12 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-4">
                        <Link href="/" className="inline-block">
                            <img src="/logos/svg/albor.svg" alt="Albor Logo" className="h-6 w-auto drop-shadow-md" />
                        </Link>
                        <p className="mt-4 text-slate-400 leading-relaxed text-sm max-w-xs">
                            Non-custodial stablecoin infrastructure to capture dollar liquidity on any chain.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                             <div key={title}>
                                <h4 className="font-semibold text-white tracking-wider uppercase text-sm mb-4">{title}</h4>
                                <ul className="space-y-3">
                                    {links.map((link, index) => {
                                        let href = "#";
                                        // Solutions links - scroll to pillar tabs
                                        if (title === "Solutions") {
                                            const pillarMap: Record<string, string> = {
                                                "Banking APIs": "0",
                                                "Decentralized Exchange": "1",
                                                "Patent-Pending Router": "2",
                                                "Sovereign Infrastructure": "3"
                                            };
                                            href = `/#pillar-${pillarMap[link] || '0'}`;
                                        }
                                        // Company links
                                        else if (link === "Platform") href = "#infrastructure";
                                        // Contact Us links
                                        else if (link === "Email") href = "mailto:info@albor.ai";
                                        else if (link === "X") href = "https://x.com/Albor_AI";
                                        else if (link === "Telegram") href = "https://t.me/AlborAI";
                                        
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
                        &copy; {new Date().getFullYear()} Albor Technologies Inc. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-5">
                         <a href="mailto:info@albor.ai" aria-label="Email" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                         <a href="https://x.com/Albor_AI" target="_blank" rel="noopener noreferrer" aria-label="Follow Albor AI on X" className="text-slate-500 hover:text-white transition-colors"><SiX className="w-4 h-4" /></a>
                         <a href="https://t.me/AlborAI" target="_blank" rel="noopener noreferrer" aria-label="Join Albor AI on Telegram" className="text-slate-500 hover:text-white transition-colors"><SiTelegram className="w-4 h-4" /></a>

                    </div>
                </div>
            </div>
        </footer>
    );
}