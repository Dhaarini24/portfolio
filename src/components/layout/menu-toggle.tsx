"use client";

import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

// Animated hamburger ⇄ X. Three bars morph via Framer; the button carries the
// aria state so screen readers announce open/closed.
export function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  const bar = "absolute left-0 h-0.5 w-6 rounded-full bg-current";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="text-foreground focus-visible:ring-ring relative flex size-10 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:outline-none"
    >
      <span className="relative block size-6">
        <motion.span
          className={`${bar} top-1`}
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className={`${bar} top-1/2 -translate-y-1/2`}
          animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={`${bar} bottom-1`}
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>
    </button>
  );
}
