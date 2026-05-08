import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const stress = [
  { h: "8a", v: 18 }, { h: "9a", v: 22 }, { h: "10a", v: 30 }, { h: "11a", v: 41 },
  { h: "12p", v: 36 }, { h: "1p", v: 28 }, { h: "2p", v: 33 }, { h: "3p", v: 47 },
  { h: "4p", v: 38 }, { h: "5p", v: 30 }, { h: "6p", v: 25 }, { h: "7p", v: 20 },
];

export function StressMeter() {
  return (
    <section id="stress" className="rounded-2xl glass p-5">
      <header className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Stress meter</div>
          <h3 className="mt-1 text-lg font-semibold">Calm · 34<span className="text-muted-foreground text-sm">/100</span></h3>
        </div>
        <div className="text-xs text-muted-foreground">Pacing healthy</div>
      </header>

      <div className="mt-2 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={stress} margin={{ top: 16, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.20 255)" stopOpacity={0.6} />
                <stop offset="100%" stopColor="oklch(0.72 0.20 255)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="h" stroke="rgba(255,255,255,0.4)" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="rgba(255,255,255,0.4)" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ background: "rgba(20,22,30,0.9)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, fontSize: 12 }}
              labelStyle={{ color: "rgba(255,255,255,0.6)" }}
            />
            <Area type="monotone" dataKey="v" stroke="oklch(0.72 0.20 255)" strokeWidth={2} fill="url(#g)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        {[
          ["Walking", "4.8 km"],
          ["Crowd exposure", "Low"],
          ["Activity density", "Balanced"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-white/[0.03] px-3 py-2">
            <div className="text-muted-foreground">{k}</div>
            <div className="font-medium mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
