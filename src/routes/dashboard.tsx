import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardSidebar, TopBar } from "@/components/dashboard/Shell";
import { StatGrid } from "@/components/dashboard/StatGrid";
import { Itinerary } from "@/components/dashboard/Itinerary";
import { StressMeter } from "@/components/dashboard/StressMeter";
import { BudgetPanel } from "@/components/dashboard/BudgetPanel";
import { LiveMap } from "@/components/dashboard/LiveMap";
import { Assistant } from "@/components/dashboard/Assistant";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Command Center · Adaptive.AI" },
      { name: "description", content: "A live AI command center for your trip — itinerary, stress, budget, map, assistant." },
    ],
  }),
});

function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar />
      <div className="flex-1 min-w-0">
        <TopBar />
        <motion.main
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 space-y-6"
        >
          <PromptBar />
          <StatGrid />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              <LiveMap />
              <Itinerary />
            </div>
            <div className="space-y-6">
              <StressMeter />
              <BudgetPanel />
              <Recommendations />
            </div>
          </div>
        </motion.main>
      </div>
      <Assistant />
    </div>
  );
}

function PromptBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative rounded-2xl glass-strong p-4 flex items-center gap-3 shadow-glow"
    >
      <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <input
        defaultValue="Peaceful 3-day Kyoto trip with cafes and low crowds, budget ¥45,000"
        className="flex-1 bg-transparent text-sm md:text-base focus:outline-none placeholder:text-muted-foreground"
        aria-label="Trip prompt"
      />
      <button className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow">
        Generate
      </button>
    </form>
  );
}

function Recommendations() {
  const items = [
    { t: "Indoor swap", b: "Kyoto Railway Museum during 09:30 rain window." },
    { t: "Quiet café", b: "% Arabica Higashiyama — 11 min walk, 4-min queue." },
    { t: "Cheaper transit", b: "Bus 205 saves ¥620 vs taxi after 18:00." },
  ];
  return (
    <section className="rounded-2xl glass p-5">
      <div className="text-xs uppercase tracking-[0.18em] text-primary">AI recommendations</div>
      <div className="mt-3 space-y-2">
        {items.map((i) => (
          <div key={i.t} className="rounded-xl bg-white/[0.03] px-3 py-2.5">
            <div className="text-sm font-medium">{i.t}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{i.b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
