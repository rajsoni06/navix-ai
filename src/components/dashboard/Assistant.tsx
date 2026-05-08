import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Send, Sparkles, X } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const seed: Msg[] = [
  { role: "ai", text: "Heads up — light rain rolls in at 09:30. I moved Fushimi Inari to 14:00 and pulled lunch earlier. You'll save ~¥1,400 with the Issen Yoshoku swap." },
];

const suggestions = ["Reduce walking today", "Make this trip 20% cheaper", "Avoid crowded places", "Find indoor activities"];

export function Assistant() {
  const [open, setOpen] = useState(true);
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          role: "ai",
          text: `Got it. I'm re-optimizing for "${text.toLowerCase()}". Three changes proposed — applying in 5s.`,
        },
      ]);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            id="assistant"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            className="fixed bottom-6 right-6 z-40 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl glass-strong shadow-elevated overflow-hidden"
          >
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium">Adaptive Assistant</div>
                  <div className="text-[10px] text-muted-foreground">Gemini · live</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="max-h-72 overflow-y-auto px-4 py-3 space-y-2">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`text-sm rounded-xl px-3 py-2 max-w-[85%] ${
                    m.role === "ai"
                      ? "bg-white/[0.04] text-foreground"
                      : "ml-auto bg-gradient-primary text-primary-foreground"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="px-4 pb-2 flex gap-1.5 flex-wrap">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[11px] rounded-full glass px-2.5 py-1 hover:bg-white/[0.06] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/5 px-3 py-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tell the AI what to change…"
                className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none px-2 py-1.5"
                aria-label="Message assistant"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-primary px-2.5 py-2 text-primary-foreground shadow-glow"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
        >
          <MessageSquareText className="h-4 w-4" /> Ask the AI
        </button>
      )}
    </>
  );
}
