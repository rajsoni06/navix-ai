import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingDown } from "lucide-react";

const data = [
  { c: "Stay", v: 8200, s: 9000 },
  { c: "Food", v: 4100, s: 5000 },
  { c: "Transit", v: 1900, s: 2400 },
  { c: "Activities", v: 3200, s: 3500 },
  { c: "Misc", v: 1020, s: 1500 },
];

export function BudgetPanel() {
  const spent = data.reduce((a, b) => a + b.v, 0);
  const planned = data.reduce((a, b) => a + b.s, 0);
  const pct = Math.round(((planned - spent) / planned) * 100);

  return (
    <section id="budget" className="rounded-2xl glass p-5">
      <header className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Budget intelligence</div>
          <h3 className="mt-1 text-lg font-semibold tabular-nums">¥{spent.toLocaleString()}</h3>
          <div className="text-xs text-muted-foreground">of ¥{planned.toLocaleString()} planned</div>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-success/10 px-2.5 py-1 text-xs text-success">
          <TrendingDown className="h-3.5 w-3.5" /> {pct}% optimized
        </div>
      </header>

      <div className="mt-4 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="c" stroke="rgba(255,255,255,0.4)" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="rgba(255,255,255,0.4)" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ background: "rgba(20,22,30,0.9)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, fontSize: 12 }}
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
            />
            <Bar dataKey="s" fill="rgba(255,255,255,0.08)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="v" fill="oklch(0.65 0.22 295)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 space-y-1.5 text-xs">
        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2">
          <span>Swap dinner → Issen Yoshoku</span><span className="text-success">save ¥1,400</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2">
          <span>Bus pass instead of taxis after 18:00</span><span className="text-success">save ¥980</span>
        </div>
      </div>
    </section>
  );
}
