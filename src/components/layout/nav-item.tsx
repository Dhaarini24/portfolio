"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import type { NavItem as NavItemType } from "@/types";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  onNavigate?: () => void;
}

// Desktop nav link. The active underline is a single shared element
// (`layoutId="nav-underline"`) so Framer slides it between items instead of
// cross-fading — the signature "active navigation underline animation".
export function NavItem({ item, isActive, onNavigate }: NavItemProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(item.href);
    onNavigate?.();
  };

  return (
    <motion.a
      href={item.href}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      whileHover={{ y: -1 }}
      className={cn(
        "focus-visible:ring-ring relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {item.label}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="from-primary via-secondary to-accent absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.a>
  );
}
