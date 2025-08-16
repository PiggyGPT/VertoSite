// src/components/Navigation.tsx

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import logoSvg from "@assets/logo.svg";

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

// Define navigation links for the new landing pages
const navLinks = [
  { href: "/launch-stablecoin", label: "Launch Stablecoin" },
  { href: "/offer-defi-products", label: "Offer DeFi Products" },
  { href: "/secure-defi-ops", label: "Secure DeFi Ops" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Base classes for nav links for consistency
  const navLinkClasses = "font-medium text-slate-700 dark:text-slate-300 hover:text-verto-blue dark:hover:text-verto-blue transition-colors duration-200";

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
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" data-testid="logo">
              <img src={logoSvg} alt="Verto Logo" className="h-7 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClasses}
                data-testid={`nav-${link.href}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/Verto_AI"
              target="_blank"
              rel="noopener noreferrer"
              className={`${navLinkClasses} hidden sm:block p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800`}
              aria-label="Follow Verto AI on X"
              data-testid="nav-twitter"
            >
              <SocialXIcon className="h-5 w-5" />
            </a>
            <a
              href="https://calendly.com/nilesh-vertoai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 verto-gradient text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              data-testid="nav-get-started"
            >
              Launch Your Pilot
            </a>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block w-full text-left text-lg text-slate-700 dark:text-slate-200 py-2"
                data-testid={`mobile-nav-${link.href}`}
              >
                {link.label}
              </Link>
            ))}
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
          </div>
        </div>
      )}
    </nav>
  );
}