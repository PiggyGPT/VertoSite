// src/components/Navigation.tsx

import { useState, useEffect } from "react";
import { Menu, X, Home, Coins, Store, Shield } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoSvg from "@assets/logo.svg";
import { useCalendlyModal } from "./calendly-modal";

// It's good practice to create a dedicated component for custom icons.
const SocialXIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

// Define navigation links for the new landing pages with icons
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/launch-stablecoin", label: "Launch Stablecoin", icon: Coins },
  { href: "/offer-defi-products", label: "Offer DeFi Products", icon: Store },
  { href: "/secure-defi-ops", label: "Secure DeFi Ops", icon: Shield },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { openModal, CalendlyModal } = useCalendlyModal();

  useEffect(() => {
    const handleScroll = () => {
      // Use a smaller threshold for a quicker effect
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to get nav link classes with active state
  const getNavLinkClasses = (href: string) => {
    const isActive = location === href;
    const baseClasses = "font-xs relative transition-all duration-200";
    const colorClasses = isActive 
      ? "text-verto-blue dark:text-verto-blue" 
      : "text-slate-700 dark:text-slate-300 hover:text-verto-blue dark:hover:text-verto-blue";
    const underlineClasses = isActive 
      ? "after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-verto-blue after:rounded-full" 
      : "";
    
    return `${baseClasses} ${colorClasses} ${underlineClasses}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-gray-800 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" data-testid="logo">
              <img src={logoSvg} alt="Verto Logo" className="h-6 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${getNavLinkClasses(link.href)} flex items-center gap-2`}
                data-testid={`nav-${link.href}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/Verto_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-verto-blue dark:hover:text-verto-blue transition-colors duration-200 hidden sm:block p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Follow Verto AI on X"
              data-testid="nav-twitter"
            >
              <SocialXIcon className="h-5 w-5" />
            </a>
            <button
              onClick={openModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 verto-gradient text-white rounded-lg font-xs text-xs hover:shadow-lg hover:scale-105 transition-all duration-300"
              data-testid="nav-get-started"
            >
              Launch Pilot
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800" data-testid="mobile-menu">
          <div className="px-6 py-5 space-y-4">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    closeMobileMenu();
                    window.scrollTo(0, 0);
                  }}
                  className={`flex items-center gap-3 w-full text-left text-sm py-2 transition-colors duration-200 ${
                    isActive 
                      ? "text-verto-blue dark:text-verto-blue font-xs border-l-2 border-verto-blue pl-3" 
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                  data-testid={`mobile-nav-${link.href}`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
             <a
              href="https://x.com/Verto_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full text-left text-lg text-slate-700 dark:text-slate-200 py-2"
              data-testid="mobile-nav-twitter"
            >
              <SocialXIcon className="h-5 w-5 mr-3" />
              Follow on X
            </a>
            <button
              onClick={() => {
                openModal();
                closeMobileMenu();
              }}
              className="w-full mt-4 inline-flex items-center justify-center px-4 py-3 verto-gradient text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
              data-testid="mobile-nav-get-started"
            >
              Launch Pilot
            </button>
          </div>
        </div>
      )}
      
      <CalendlyModal title="Launch Your Pilot Program" />
    </nav>
  );
}