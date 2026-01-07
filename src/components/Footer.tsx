import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangPath, otherLang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.about, id: "a-propos" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.gallery, id: "galerie" },
    { label: t.nav.hours, id: "horaires" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/logo.jpg"
              alt="Chat Lamala"
              className="h-10 w-auto"
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg mb-6">{t.footer.navigation}</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* About */}
          <div>
            <h3 className="font-serif text-lg mb-6">{t.footer.about}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-primary-foreground/80 mt-4 leading-relaxed">
              Rue de Montsalvens 5<br />
              1636 Broc, CH
            </p>
            <p className="text-sm text-primary-foreground/80 mt-4">
              +41 79 287 07 13
            </p>
          </div>

          {/* Language */}
          <div>
            <h3 className="font-serif text-lg mb-6">Language</h3>
            <Link
              to={otherLangPath}
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
            >
              {otherLang === "de" ? "Deutsch" : "Français"}
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {currentYear} Chat Lamala Sàrl. {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
