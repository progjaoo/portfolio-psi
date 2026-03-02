import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5524992086261", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              Carolina Carvalho
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase mt-0.5">
              Psicóloga Clínica
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button
              onClick={handleWhatsApp}
              className="rounded-full shadow-md hover-lift gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-border/50 p-4 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={handleWhatsApp}
              className="w-full rounded-xl gap-2 mt-4"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
