import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, lang, otherLangs, getLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  const navLinks = [
    { href: "#about-us", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#opening-hours", label: t.nav.hours },
    { href: "#contact", label: t.nav.contact },
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
        <a href="/" className="flex flex-col gap-0.5">
          <span
            className={`font-serif text-xl font-bold transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Cabinet Vétérinaire
          </span>
          <span
            className={`text-xs tracking-widest transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher - Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Globe className="h-4 w-4" />
              {lang.toUpperCase()}
            </button>
            <div
              className={`absolute right-0 mt-2 w-32 rounded-lg shadow-medium border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                isScrolled
                  ? "bg-background border-border"
                  : "bg-background border-border"
              }`}
            >
              {otherLangs.map((altLang) => (
                <Link
                  key={altLang}
                  to={getLangPath(altLang)}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted first:rounded-t-lg last:rounded-b-lg"
                >
                  {altLang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <Button asChild size="sm" className="gap-2">
            <a href="tel:+41223433080">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b shadow-soft">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t pt-3 space-y-2">
              <div className="text-xs font-medium text-muted-foreground mb-2">
                {t.nav.profession}
              </div>
              {otherLangs.map((altLang) => (
                <Link
                  key={altLang}
                  to={getLangPath(altLang)}
                  className="block text-sm text-foreground hover:text-primary transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {altLang.toUpperCase()}
                </Link>
              ))}
            </div>
            <Button asChild size="sm" className="w-full gap-2">
              <a href="tel:+41223433080">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
