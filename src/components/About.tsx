import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="a-propos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            {t.about.title1}
            <br />
            <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-background rounded-2xl p-6 border border-border shadow-soft"
            >
              <div className="text-3xl font-bold text-accent mb-2">
                25+
              </div>
              <p className="text-sm text-foreground/70">{t.about.stat1}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-background rounded-2xl p-6 border border-border shadow-soft"
            >
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <p className="text-sm text-foreground/70">{t.about.stat2}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-background rounded-2xl p-6 border border-border shadow-soft"
            >
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-foreground/70">{t.about.stat3}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-background rounded-2xl p-6 border border-border shadow-soft"
            >
              <div className="text-3xl font-bold text-accent mb-2">
                25 ans
              </div>
              <p className="text-sm text-foreground/70">
                Depuis 1999
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="font-serif text-xl text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
