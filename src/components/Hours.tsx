import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Monday-Friday: 07:00-12:00, 13:00-18:00
  // Saturday: closed (but we'll show 08:00-12:00 for reference)
  // Sunday: closed
  const schedule = [
    { day: t.hours.days[0], hours: "07:00 - 12:00 / 13:00 - 18:00" }, // Monday
    { day: t.hours.days[1], hours: "07:00 - 12:00 / 13:00 - 18:00" }, // Tuesday
    { day: t.hours.days[2], hours: "07:00 - 12:00 / 13:00 - 18:00" }, // Wednesday
    { day: t.hours.days[3], hours: "07:00 - 12:00 / 13:00 - 18:00" }, // Thursday
    { day: t.hours.days[4], hours: "07:00 - 12:00 / 13:00 - 18:00" }, // Friday
    { day: t.hours.days[5], hours: "08:00 - 12:00" }, // Saturday
    { day: t.hours.days[6], hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  // Convert JS getDay (0=Sunday) to our schedule order (0=Monday)
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="horaires" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg">{t.hours.header}</span>
          </div>

          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === adjustedTodayIndex;
              const isClosed = item.hours === t.hours.closed;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <div>
                      <span
                        className={
                          isToday ? "font-medium text-primary" : "text-foreground"
                        }
                      >
                        {item.day}
                      </span>
                      {isToday && (
                        <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={
                      isClosed ? "text-muted-foreground text-sm" : "text-foreground text-sm"
                    }
                  >
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
