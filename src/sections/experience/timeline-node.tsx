"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineNodeProps {
  current?: boolean;
}

// A node on the timeline spine. Scales in when it enters view; the current
// role adds a continuous glowing pulse ring.
export function TimelineNode({ current }: TimelineNodeProps) {
  return (
    <span className="relative flex size-4 items-center justify-center">
      {current && (
        <motion.span
          aria-hidden
          className="bg-primary-500 absolute inline-flex size-4 rounded-full"
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
        />
      )}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className={cn(
          "relative size-4 rounded-full border-2",
          current
            ? "border-primary-300 bg-primary-500 shadow-glow-primary"
            : "border-accent-400/70 bg-navy-800",
        )}
      />
    </span>
  );
}
