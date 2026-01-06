import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  const schedule = [
    { hours: "08:00 - 19:00" },
    { hours: "08:00 - 19:00" },
    { hours: "08:00 - 19:00" },
    { hours: "08:00 - 19:00" },
    { hours: "08:00 - 19:00" },
    { hours: "08:00 - 12:00" },
    { hours: t.hours.closed },
  ];

  // Get today's day index (0 = Sunday, need to convert to Monday = 0)
  const today = new Date();
  const dayIndex = (today.getDay() + 6) % 7; // Convert Sunday(0) to 6, Monday(1) to 0

  return (
    <section
      id="opening-hours"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl font-bold md:text-5xl mt-2">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border bg-card shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-bold">
              {t.hours.header}
            </span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === dayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                    <div>
                      <span
                        className={`font-medium block ${
                          isToday ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full inline-block mt-1">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`font-medium ${
                      isClosed ? "text-muted-foreground" : "text-foreground"
                    }`}
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
