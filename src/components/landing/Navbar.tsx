import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight">Adaptive<span className="text-muted-foreground">.AI</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#intelligence" className="hover:text-foreground transition-colors">Intelligence</a>
          <a href="#preview" className="hover:text-foreground transition-colors">Preview</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Customers</a>
        </nav>

        <Link
          to="/dashboard"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
        >
          Launch Console
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.header>
  );
}
