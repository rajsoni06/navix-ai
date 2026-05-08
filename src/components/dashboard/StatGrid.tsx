import { motion } from "framer-motion";
import { Cloud, Wind, Droplets, Footprints, Heart, TrendingDown } from "lucide-react";

const stats = [
  { icon: Cloud, label: "Weather", value: "Light rain", sub: "shifting plans 2", tone: "warning" },
  { icon: Wind, label: "Crowd index", value: "Low", sub: "Arashiyama window", tone: "success" },
  { icon: Footprints, label: "Walking today", value: "4.8 km", sub: "−1.2 km vs plan", tone: "default" },
  { icon: Heart, label: "Energy", value: "72%", sub: "rest at 16:00", tone: "default" },
  { icon: Droplets, label: "Hydration", value: "Good", sub: "next refill 11:00", tone: "default" },
  { icon: TrendingDown, label: "Spend pace", value: "−12%", sub: "under plan", tone: "success" },
];

export function StatGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="rounded-2xl glass p-4"
        >
          <div className="flex items-center justify-between">
            <s.icon className="h-4 w-4 text-muted-foreground" />
            <span
              className={`text-[10px] uppercase tracking-wider ${
                s.tone === "success" ? "text-success" : s.tone === "warning" ? "text-warning" : "text-muted-foreground"
              }`}
            >
              {s.tone === "default" ? "stable" : s.tone}
            </span>
          </div>
          <div className="mt-3 text-xl font-semibold tracking-tight">{s.value}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{s.label} · {s.sub}</div>
        </motion.div>
      ))}
    </section>
  );
}
