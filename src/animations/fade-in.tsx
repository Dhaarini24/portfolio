"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "./variants";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

// Animates in once on mount — for above-the-fold content (e.g. hero) that
// should never wait on scroll. Use ScrollReveal for anything below the fold.
export function FadeIn({ delay = 0, children, ...props }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
