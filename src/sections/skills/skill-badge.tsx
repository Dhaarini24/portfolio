"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { scaleIn } from "@/animations";

interface SkillBadgeProps {
  name: string;
  icon?: LucideIcon;
}

// Animated pill with a gradient hairline border, optional icon, hover scale +
// glow. Renders as an <li> carrying `scaleIn` for parent stagger.
export function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <motion.li
      variants={scaleIn}
      whileHover={{ scale: 1.06, y: -2 }}
      className="hover:shadow-glow-primary rounded-full bg-gradient-to-br from-white/15 to-white/5 p-px transition-shadow"
    >
      <span className="glass text-foreground/90 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
        {Icon && <Icon className="text-accent-400 size-3.5 shrink-0" aria-hidden />}
        {name}
      </span>
    </motion.li>
  );
}
