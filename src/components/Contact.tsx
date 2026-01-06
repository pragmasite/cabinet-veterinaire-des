import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: t.contact.phone,
      value: "+41 22 343 30 80",
      href: "tel:+41223433080",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: t.contact.email,
      value: "veterinaire_promenades@yahoo.fr",
      href: "mailto:veterinaire_promenades@yahoo.fr",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: t.contact.address,
      value: "Boulevard des Promenades 22, 1227 Carouge GE, CH",
      href: "https://maps.google.com/?q=Cabinet+Vétérinaire+des+Promenades+Carouge",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl font-bold md:text-5xl mt-2">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {item.label}
              </h3>
              <p className="text-foreground/70 break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Map and CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-medium h-96"
          >
            <iframe
              title="Cabinet Vétérinaire des Promenades - Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.0234567890123!2d6.137498!3d46.182193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e68e5e5e5e5e5%3A0x1a2b3c4d5e6f7g8h!2sBlvd%20des%20Promenades%2022%2C%201227%20Carouge%20GE!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {t.contact.cta}
              </h3>
              <p className="text-foreground/70 mb-8">
                Nous sommes à votre écoute pour tous vos besoins vétérinaires. N'hésitez pas à nous contacter.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full gap-2">
                  <a href="tel:+41223433080">
                    <Phone className="h-5 w-5" />
                    {t.contact.callNow}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full gap-2"
                >
                  <a href="mailto:veterinaire_promenades@yahoo.fr">
                    <Mail className="h-5 w-5" />
                    {t.contact.email}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
