// src/components/Navigation.tsx

import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "wouter";
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
const navLinks = [];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-verto-orange via-verto-pink via-verto-purple to-verto-blue dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 dark:opacity-95 animate-nav-glow`}
      style={{
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
      }}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" data-testid="logo">
              <img src="/logos/albor_logo.svg" alt="Alberi Logo" className="h-6 w-auto drop-shadow-md hover:drop-shadow-lg transition-all duration-300" />
            </Link>
          </div>


          <div className="flex items-center space-x-4">
            <button
              onClick={openModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
              }}
              data-testid="nav-get-started"
            >
              <Rocket className="w-4 h-4" />
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
        <div className="md:hidden bg-gradient-to-r from-verto-orange via-verto-pink via-verto-purple to-verto-blue dark:from-verto-orange/15 dark:via-verto-pink/15 dark:via-verto-purple/15 dark:to-verto-blue/15 border-t border-white/10" data-testid="mobile-menu">
          <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-3 sm:space-y-4">
            <button
              onClick={() => {
                openModal();
                closeMobileMenu();
              }}
              className="w-full mt-4 sm:mt-6 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-slate-900 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
              }}
              data-testid="mobile-nav-get-started"
            >
              <Rocket className="w-4 h-4" />
              Launch Pilot
            </button>
          </div>
        </div>
      )}
      
      <CalendlyModal title="Launch Your Pilot Program" />
    </nav>
  );
}