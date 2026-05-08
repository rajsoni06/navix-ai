import { motion } from "framer-motion";

const quotes = [
  { q: "It feels less like a planner and more like a co-pilot. The trip just keeps getting better while we sleep.", a: "Maya R.", r: "Product Designer · Tokyo trip" },
  { q: "Saved us 3 hours and ¥9,000 on day one. The replan after the rain was uncanny.", a: "Devon K.", r: "Engineer · Kyoto trip" },
  { q: "Finally, an AI app that doesn't feel like a chatbot wrapped in a UI.", a: "Sara L.", r: "Founder · Lisbon trip" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">Loved by travelers</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
          The calmest way to travel.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl glass p-6"
            >
              <blockquote className="text-base leading-relaxed">“{t.q}”</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-medium">{t.a}</div>
                <div className="text-muted-foreground">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
