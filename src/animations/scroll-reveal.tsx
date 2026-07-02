"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { scrollReveal } from "@/lib/design-tokens";
import { blurReveal } from "./variants";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  variants?: Variants;
}

// Reveals content once, as it scrolls into view — the default entrance for
// every below-the-fold section.
export function ScrollReveal({
  variants = blurReveal,
  children,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: scrollReveal.threshold,
        margin: scrollReveal.rootMargin,
      }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
