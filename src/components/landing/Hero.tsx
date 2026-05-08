import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise opacity-[0.35] mix-blend-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
          Live · Adaptive Replanning Engine v2
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient"
        >
          Your trip replans<br /> itself in real time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          An AI command center that continuously rewrites your itinerary based on weather, traffic,
          budget, fatigue, and intent — so the plan is always the best plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <Link
            to="/dashboard"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="h-4 w-4" />
            Launch the Command Center
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#preview"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Cpu className="h-4 w-4" /> See the engine
          </a>
        </motion.div>

        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35 }}
      className="relative mx-auto mt-16 max-w-5xl"
    >
      <div className="absolute -inset-8 bg-gradient-primary blur-3xl opacity-30 rounded-[2rem] pointer-events-none" />
      <div className="relative rounded-2xl glass-strong shadow-elevated overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
          <div className="ml-3 text-xs text-muted-foreground">adaptive.ai · trip · kyoto-3d</div>
        </div>
        <div className="grid grid-cols-12 gap-4 p-5">
          <div className="col-span-7 rounded-xl border border-white/5 bg-card/40 p-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Live timeline</div>
            <div className="mt-3 space-y-2">
              {[
                { t: "08:30", a: "Coffee · Weekenders", s: "calm" },
                { t: "10:00", a: "Fushimi Inari hike", s: "rain detected — moved to 14:00" },
                { t: "12:30", a: "Lunch · Nishiki Market", s: "swap to Issen Yoshoku (cheaper)" },
                { t: "15:00", a: "Arashiyama bamboo grove", s: "low crowd window opening" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground tabular-nums">{r.t}</span>
                    <span>{r.a}</span>
                  </div>
                  <span className="text-xs text-primary">{r.s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5 grid gap-4">
            <div className="rounded-xl border border-white/5 bg-card/40 p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Stress meter</div>
              <div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[34%] bg-gradient-primary" />
              </div>
              <div className="mt-2 text-sm">Calm · 34/100</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-card/40 p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Budget</div>
              <div className="mt-3 flex items-end justify-between">
                <div className="text-2xl font-semibold tabular-nums">¥18,420</div>
                <div className="text-xs text-success">-12% optimized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
