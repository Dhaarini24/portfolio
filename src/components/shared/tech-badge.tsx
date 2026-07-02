"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/animations";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

// Reusable technology chip. Renders as an <li> and carries the `scaleIn`
// variant so a parent <motion.ul> stagger container can cascade the chips in.
// Intended to be used inside a <ul>.
export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <motion.li
      variants={scaleIn}
      whileHover={{ y: -2 }}
      className={cn(
        "border-border/60 text-muted-foreground rounded-full border bg-white/5 px-2.5 py-1 text-xs font-medium",
        "hover:border-primary-400/50 hover:text-foreground transition-colors",
        className,
      )}
    >
      {label}
    </motion.li>
  );
}
