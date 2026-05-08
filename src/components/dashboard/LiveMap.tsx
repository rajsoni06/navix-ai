import { motion } from "framer-motion";
import { Navigation, MapPin } from "lucide-react";

export function LiveMap() {
  return (
    <section id="map" className="relative overflow-hidden rounded-2xl glass p-0 h-[420px]">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.72_0.20_255/0.25),transparent_50%),radial-gradient(circle_at_75%_70%,oklch(0.65_0.22_295/0.25),transparent_50%)]" />

      {/* route svg */}
      <svg viewBox="0 0 800 420" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="route" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.20 255)" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 295)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 80 320 C 220 260, 260 140, 380 180 S 600 320, 720 110"
          stroke="url(#route)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
      </svg>

      {[
        { x: "10%", y: "75%", label: "Weekenders" },
        { x: "32%", y: "42%", label: "Nishiki" },
        { x: "48%", y: "44%", label: "Issen" },
        { x: "70%", y: "70%", label: "Fushimi Inari" },
        { x: "88%", y: "26%", label: "Arashiyama" },
      ].map((p, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: p.x, top: p.y }}
        >
          <div className="relative">
            <span className="absolute -inset-3 rounded-full bg-primary/30 blur-xl" />
            <div className="relative flex items-center gap-1.5 rounded-full glass-strong px-2.5 py-1 text-xs">
              <MapPin className="h-3 w-3 text-primary" />
              {p.label}
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute top-4 left-4 rounded-lg glass-strong px-3 py-2 text-xs">
        <div className="text-muted-foreground">Today's route</div>
        <div className="font-medium mt-0.5 flex items-center gap-1.5"><Navigation className="h-3 w-3 text-primary" /> 5 stops · 12.4 km</div>
      </div>
      <div className="absolute bottom-4 right-4 rounded-lg glass-strong px-3 py-2 text-xs">
        <div className="text-muted-foreground">ETA next stop</div>
        <div className="font-medium tabular-nums">11 min · low traffic</div>
      </div>
    </section>
  );
}
