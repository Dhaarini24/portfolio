"use client";

import { motion } from "framer-motion";
import { easings } from "@/lib/design-tokens";

// Slow-drifting, heavily-blurred color blobs that give the navy background its
// living "aurora". Framer Motion drives the drift; `prefers-reduced-motion` is
// handled globally in globals.css (animation durations collapse to ~0).
export function GradientBlobs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <motion.div
        className="bg-primary-600/25 absolute -top-32 -left-24 h-[38rem] w-[38rem] rounded-full blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, ease: easings.standard, repeat: Infinity }}
      />
      <motion.div
        className="bg-secondary-600/25 absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, ease: easings.standard, repeat: Infinity }}
      />
      <motion.div
        className="bg-accent-600/20 absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, ease: easings.standard, repeat: Infinity }}
      />
    </div>
  );
}
