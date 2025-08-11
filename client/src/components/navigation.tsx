import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-verto-gray-100 shadow-sm"
          : "bg-white/95 backdrop-blur-sm border-b border-verto-gray-100"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div 
              className="text-2xl font-bold text-verto-blue cursor-pointer"
              onClick={() => scrollToSection("hero")}
              data-testid="logo"
            >
              VERTO
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("infrastructure")}
                className="text-verto-gray-600 hover:text-verto-blue transition-colors"
                data-testid="nav-infrastructure"
              >
                Infrastructure
              </button>
              <button
                onClick={() => scrollToSection("ai")}
                className="text-verto-gray-600 hover:text-verto-blue transition-colors"
                data-testid="nav-ai"
              >
                AI
              </button>
              <button
                onClick={() => scrollToSection("pilot")}
                className="text-verto-gray-600 hover:text-verto-blue transition-colors"
                data-testid="nav-pilot"
              >
                Pilot
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-verto-gray-600 hover:text-verto-blue transition-colors"
                data-testid="nav-team"
              >
                Team
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:block px-4 py-2 text-verto-gray-600 hover:text-verto-blue transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("pilot-cta")}
              className="px-6 py-2 bg-verto-purple text-white rounded-lg hover:bg-verto-purple/90 transition-all transform hover:scale-105"
              data-testid="nav-get-started"
            >
              Get Started
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-verto-gray-100" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("infrastructure")}
              className="block w-full text-left text-verto-gray-600 hover:text-verto-blue transition-colors"
              data-testid="mobile-nav-infrastructure"
            >
              Infrastructure
            </button>
            <button
              onClick={() => scrollToSection("ai")}
              className="block w-full text-left text-verto-gray-600 hover:text-verto-blue transition-colors"
              data-testid="mobile-nav-ai"
            >
              AI
            </button>
            <button
              onClick={() => scrollToSection("pilot")}
              className="block w-full text-left text-verto-gray-600 hover:text-verto-blue transition-colors"
              data-testid="mobile-nav-pilot"
            >
              Pilot
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-verto-gray-600 hover:text-verto-blue transition-colors"
              data-testid="mobile-nav-team"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-verto-gray-600 hover:text-verto-blue transition-colors"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
