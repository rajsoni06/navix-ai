import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Map, Wallet, Activity, MessageSquareText, Settings, Sparkles,
} from "lucide-react";

const items = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard", label: "Live Map", icon: Map, hash: "#map" },
  { to: "/dashboard", label: "Budget", icon: Wallet, hash: "#budget" },
  { to: "/dashboard", label: "Stress", icon: Activity, hash: "#stress" },
  { to: "/dashboard", label: "Assistant", icon: MessageSquareText, hash: "#assistant" },
];

export function DashboardSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-2 p-4 border-r border-white/5 sticky top-0 h-screen">
      <Link to="/" className="flex items-center gap-2 px-2 py-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-semibold tracking-tight">Adaptive<span className="text-muted-foreground">.AI</span></span>
      </Link>

      <div className="mt-4 px-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Trip · Kyoto</div>
      <nav className="mt-2 flex flex-col gap-1">
        {items.map((it) => {
          const active = path === it.to && !it.hash;
          return (
            <a
              key={it.label}
              href={it.hash ?? it.to}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                active ? "bg-white/[0.06] text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
              }`}
            >
              <it.icon className="h-4 w-4" />
              {it.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl glass p-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-primary" />
          <div className="text-sm">
            <div className="font-medium">Maya R.</div>
            <div className="text-xs text-muted-foreground">Pro · Kyoto trip</div>
          </div>
          <Settings className="ml-auto h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}

export function TopBar() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 flex items-center justify-between border-b border-white/5 bg-background/60 backdrop-blur-xl px-6 py-3"
    >
      <div>
        <div className="text-xs text-muted-foreground">Command Center</div>
        <div className="text-sm font-medium">Kyoto · Day 2 of 3 · <span className="text-success">All systems calm</span></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 rounded-lg glass px-3 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
          Live · 12s ago
        </div>
        <button className="rounded-lg bg-gradient-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-glow">
          Replan now
        </button>
      </div>
    </motion.div>
  );
}
