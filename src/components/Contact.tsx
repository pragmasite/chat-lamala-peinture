import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 287 07 13",
      href: "tel:+41792870713",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rue de Montsalvens 5, 1636 Broc, CH",
      href: "https://maps.google.com/?q=Rue+de+Montsalvens+5,+1636+Broc,+CH",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70 text-lg">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start p-6 bg-background rounded-2xl border border-border hover:shadow-medium transition-shadow group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground/60 font-medium uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-lg font-serif text-primary mt-1 group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button asChild size="lg" className="w-full gap-2">
                <a href="tel:+41792870713">
                  <Phone className="h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border shadow-soft h-96 lg:h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.8926837546547!2d7.100694!3d46.603059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e5e8e8e8e8e8f%3A0x5f5f5f5f5f5f5f5f!2sRue%20de%20Montsalvens%205%2C%201636%20Broc!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
