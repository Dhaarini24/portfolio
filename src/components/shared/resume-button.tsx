"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  className?: string;
  fullWidth?: boolean;
  label?: string;
}

// Reusable primary CTA — used in the navbar, the mobile drawer, and anywhere a
// résumé download is offered. The pulsing glow animates opacity only (cheap /
// GPU-friendly) and honors reduced-motion via the global MotionConfig.
export function ResumeButton({
  className,
  fullWidth = false,
  label = "Download Resume",
}: ResumeButtonProps) {
  return (
    <motion.a
      href={siteConfig.resume}
      download
      aria-label={`${label} (PDF)`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group bg-primary text-primary-foreground relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold",
        "focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        fullWidth && "w-full",
        className,
      )}
    >
      <motion.span
        aria-hidden
        className="from-primary via-secondary to-accent absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-r opacity-50 blur-md"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
      <Download className="size-4" />
      {label}
    </motion.a>
  );
}
