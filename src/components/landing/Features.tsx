import { motion } from "framer-motion";
import {
  Brain, CloudRain, Wallet, Activity, Map, MessageSquareText, Compass, Gauge,
} from "lucide-react";

const features = [
  { icon: Brain, title: "Intent-aware planning", body: "Describe the trip you want in plain language. Gemini composes a coherent multi-day itinerary." },
  { icon: CloudRain, title: "Real-time replanning", body: "Weather shifts, traffic spikes, closures — your day reorganizes itself in seconds." },
  { icon: Wallet, title: "Budget intelligence", body: "Continuous optimization across stays, food and transit, with cheaper alternatives surfaced live." },
  { icon: Activity, title: "Travel stress meter", body: "Track fatigue, walking load, crowd exposure and density to keep your trip humane." },
  { icon: Map, title: "Live route canvas", body: "Animated map with optimized paths and crowd heat overlays." },
  { icon: MessageSquareText, title: "Always-on assistant", body: "Ask: ‘make today indoor’, ‘cut cost 20%’, ‘slow it down’ — the plan adapts." },
  { icon: Compass, title: "Energy-aware pacing", body: "The system spaces high-effort activities so you never burn out by day two." },
  { icon: Gauge, title: "Decision telemetry", body: "Every change is explained: why it moved, what it saved, what it improved." },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-primary">Capabilities</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            An operating system for travel.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Eight coordinated subsystems run continuously to keep your itinerary optimal — calm,
            affordable, and always one step ahead of reality.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative rounded-2xl glass p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
