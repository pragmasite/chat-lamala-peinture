import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (sectionId: string) => {
    return location.hash === `#${sectionId}`;
  };

  const navLinks = [
    { label: t.nav.about, id: "a-propos" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.gallery, id: "galerie" },
    { label: t.nav.hours, id: "horaires" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <img
            src="/images/logo.jpg"
            alt="Chat Lamala"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm tracking-wide transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild className="gap-2">
            <a href="tel:+41792870713">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Link
              to={otherLangPath}
              className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>

            <Button asChild className="gap-2 w-full">
              <a href="tel:+41792870713">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
