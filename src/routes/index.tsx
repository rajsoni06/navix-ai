import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Intelligence } from "@/components/landing/Intelligence";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Adaptive AI Travel Command Center" },
      { name: "description", content: "Your trip replans itself in real time. An AI operating system for travel — adaptive, calm, and always optimal." },
      { property: "og:title", content: "Adaptive AI Travel Command Center" },
      { property: "og:description", content: "Your trip replans itself in real time." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Intelligence />
      <section id="preview" className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl glass-strong p-3 shadow-elevated">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-card to-background grid place-items-center text-muted-foreground text-sm">
            Live demo loads inside the Command Center →
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </main>
  );
}
