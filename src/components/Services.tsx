import { motion } from "framer-motion";
import { Brush, Zap, Home, Wrench } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const icons = [Brush, Wrench, Home, Zap, Zap, Wrench];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70 text-lg">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-6">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
