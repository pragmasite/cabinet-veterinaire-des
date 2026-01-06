import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-bold mb-4">
              {t.footer.tagline}
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/Cabinet-v%C3%A9t%C3%A9rinaire-des-Promenades-149782938420222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif font-bold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about-us"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#opening-hours"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif font-bold mb-4">{t.contact.phone}</h3>
            <a
              href="tel:+41223433080"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm block mb-4"
            >
              +41 22 343 30 80
            </a>
            <h3 className="font-serif font-bold mb-2">{t.contact.email}</h3>
            <a
              href="mailto:veterinaire_promenades@yahoo.fr"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm block"
            >
              veterinaire_promenades@yahoo.fr
            </a>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; 2024 Cabinet Vétérinaire des Promenades. {t.footer.copyright}
          </p>
          <p className="text-primary-foreground/60 text-xs">
            Site généré avec Vite + React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
