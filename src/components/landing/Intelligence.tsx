import { motion } from "framer-motion";

export function Intelligence() {
  return (
    <section id="intelligence" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-primary">Adaptive engine</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            Plans that respond to reality.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A continuous loop ingests live signals — weather, traffic, transit, crowd, energy,
            spend — and rewrites only what needs to change. No re-planning fatigue. No fragile
            spreadsheets. Just a trip that quietly stays right.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["12s", "median replan"],
              ["98.4%", "constraint fit"],
              ["−21%", "avg. spend"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-xl glass p-4">
                <div className="text-2xl font-semibold tabular-nums text-gradient">{k}</div>
                <div className="text-xs text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-gradient-primary blur-3xl opacity-25 rounded-full" />
          <div className="relative aspect-square rounded-3xl glass-strong shadow-elevated overflow-hidden">
            <Globe />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Globe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative h-[78%] w-[78%] rounded-full border border-white/10 animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
        {[0, 30, 60, 90, 120, 150].map((deg) => (
          <div
            key={deg}
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ transform: `rotateY(${deg}deg)` }}
          />
        ))}
        {[15, 45, 75].map((p) => (
          <div
            key={p}
            className="absolute left-0 right-0 mx-auto rounded-full border border-white/8"
            style={{ top: `${p}%`, height: `${100 - p * 2}%`, transform: `translateY(-50%)` }}
          />
        ))}
        {[
          { t: "20%", l: "30%" },
          { t: "55%", l: "70%" },
          { t: "40%", l: "55%" },
          { t: "70%", l: "35%" },
        ].map((p, i) => (
          <div key={i} className="absolute" style={{ top: p.t, left: p.l }}>
            <span className="block h-2.5 w-2.5 rounded-full bg-primary shadow-glow animate-pulse-glow" />
          </div>
        ))}
      </div>
    </div>
  );
}
