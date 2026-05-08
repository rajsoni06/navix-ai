import { motion } from "framer-motion";
import { CloudRain, Sparkles, MapPin, Coffee, Mountain, Utensils, Camera } from "lucide-react";

type Item = {
  t: string;
  title: string;
  loc: string;
  icon: any;
  tag?: { label: string; tone: "info" | "success" | "warning" };
  changed?: string;
};

const items: Item[] = [
  { t: "08:30", title: "Coffee · Weekenders", loc: "Tominokoji", icon: Coffee },
  { t: "10:00", title: "Fushimi Inari hike", loc: "Fushimi Ward", icon: Mountain, tag: { label: "Moved to 14:00 — rain", tone: "warning" }, changed: "Rain forecast 60% from 09:30–12:00. Re-sequenced with Nishiki to keep momentum." },
  { t: "12:30", title: "Lunch · Issen Yoshoku", loc: "Gion", icon: Utensils, tag: { label: "Swapped — saves ¥1,400", tone: "success" } },
  { t: "14:00", title: "Fushimi Inari hike", loc: "Fushimi Ward", icon: Mountain },
  { t: "16:30", title: "Rest · café break", loc: "Pontocho", icon: Coffee, tag: { label: "Energy guard", tone: "info" } },
  { t: "18:00", title: "Arashiyama bamboo grove", loc: "Arashiyama", icon: Camera, tag: { label: "Low-crowd window", tone: "success" } },
];

export function Itinerary() {
  return (
    <section className="rounded-2xl glass p-5">
      <header className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Adaptive itinerary</div>
          <h3 className="mt-1 text-lg font-semibold">Tuesday · Day 2</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CloudRain className="h-4 w-4" /> 2 changes in last hour
        </div>
      </header>

      <ol className="relative mt-6 space-y-3">
        <span className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative pl-10"
          >
            <span className="absolute left-0 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-card border border-white/10">
              <it.icon className="h-3.5 w-3.5 text-primary" />
            </span>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-medium">{it.title}</div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="tabular-nums">{it.t}</span>
                    <span className="opacity-50">·</span>
                    <MapPin className="h-3 w-3" /> {it.loc}
                  </div>
                </div>
                {it.tag && (
                  <span
                    className={`shrink-0 rounded-md px-2 py-1 text-[10px] uppercase tracking-wider ${
                      it.tag.tone === "success"
                        ? "bg-success/10 text-success"
                        : it.tag.tone === "warning"
                        ? "bg-warning/10 text-warning"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {it.tag.label}
                  </span>
                )}
              </div>
              {it.changed && (
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-primary mt-0.5" />
                  {it.changed}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
