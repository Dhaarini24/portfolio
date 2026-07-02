"use client";

import { motion } from "framer-motion";
import { durations, easings } from "@/lib/design-tokens";

// [text, className] token tuples. Kept as data so the whole block can be
// revealed line-by-line with a Framer Motion stagger.
type Token = [string, string];

const KW = "text-secondary-400";
const FN = "text-primary-300";
const STR = "text-emerald-300";
const CM = "text-muted-foreground italic";
const TY = "text-accent-300";
const PL = "text-navy-200";
const OP = "text-navy-400";

const CODE: Token[][] = [
  [["# AI Deployment & Pipeline Agent", CM]],
  [
    ["from ", KW],
    ["anthropic ", PL],
    ["import ", KW],
    ["Anthropic", TY],
  ],
  [
    ["from ", KW],
    ["rag ", PL],
    ["import ", KW],
    ["Retriever", TY],
  ],
  [["", PL]],
  [
    ["class ", KW],
    ["DeploymentAgent", TY],
    [":", OP],
  ],
  [
    ["    def ", KW],
    ["__init__", FN],
    ["(self):", OP],
  ],
  [
    ["        self.llm ", PL],
    ["= ", OP],
    ["Anthropic", TY],
    ["()", OP],
  ],
  [
    ["        self.kb ", PL],
    ["= ", OP],
    ["Retriever", TY],
    ["(", OP],
    ['"infra"', STR],
    [")", OP],
  ],
  [["", PL]],
  [
    ["    async def ", KW],
    ["ship", FN],
    ["(self, repo):", OP],
  ],
  [
    ["        ctx ", PL],
    ["= ", OP],
    ["self.kb.", PL],
    ["search", FN],
    ["(repo)", OP],
  ],
  [
    ["        plan ", PL],
    ["= await ", KW],
    ["self.llm.", PL],
    ["run", FN],
    ["(ctx)", OP],
  ],
  [
    ["        return ", KW],
    ["plan.", PL],
    ["to_k8s", FN],
    ["()  ", OP],
    ["# → AKS", CM],
  ],
];

export function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: durations.slow, ease: easings.premium, delay: 0.4 }}
      className="glow-border w-full max-w-md rounded-xl"
      style={{ perspective: 1000 }}
    >
      <div className="glass overflow-hidden rounded-xl">
        {/* Title bar */}
        <div className="border-border/60 flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <span className="text-muted-foreground ml-3 font-mono text-xs">
            deployment_agent.py
          </span>
        </div>

        {/* Code body */}
        <motion.pre
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
          }}
          className="overflow-x-auto p-4 font-mono text-[0.8rem] leading-relaxed"
        >
          <code>
            {CODE.map((line, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="block min-h-[1.25rem] whitespace-pre"
              >
                {line.map(([text, cls], j) => (
                  <span key={j} className={cls}>
                    {text}
                  </span>
                ))}
                {i === CODE.length - 1 && (
                  <span className="bg-primary-400 animate-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5" />
                )}
              </motion.span>
            ))}
          </code>
        </motion.pre>
      </div>
    </motion.div>
  );
}
