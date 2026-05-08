import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center shadow-elevated">
          <div className="absolute -inset-20 bg-gradient-primary blur-3xl opacity-25" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
              Plan less. Travel better.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open the command center and watch a real itinerary adapt to weather, budget, and energy in real time.
            </p>
            <Link
              to="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Sparkles className="h-4 w-4" /> Launch Command Center <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <footer className="mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <div>© {new Date().getFullYear()} Adaptive.AI · Travel Operating System</div>
          <div className="flex gap-5"><a href="#" className="hover:text-foreground">Privacy</a><a href="#" className="hover:text-foreground">Terms</a><a href="#" className="hover:text-foreground">Contact</a></div>
        </footer>
      </div>
    </section>
  );
}
