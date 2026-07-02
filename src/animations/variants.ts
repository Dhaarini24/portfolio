import type { Variants } from "framer-motion";
import { durations, easings } from "@/lib/design-tokens";

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.base, ease: easings.standard },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.moderate, ease: easings.premium },
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 24 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: durations.slow, ease: easings.premium },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.base, ease: easings.premium },
  },
};

export const float: Variants = {
  visible: {
    y: [0, -12, 0],
    transition: { duration: 6, ease: easings.standard, repeat: Infinity },
  },
};

// Wraps a variants set so parent containers can stagger their children.
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0.05,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
