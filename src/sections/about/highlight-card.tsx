"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/animations";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HighlightCard({ icon: Icon, title, description }: HighlightCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="glass hover:shadow-glow-primary rounded-2xl p-5 transition-shadow"
    >
      <div className="bg-primary-500/10 text-primary-400 mb-3 inline-flex size-10 items-center justify-center rounded-xl">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 className="font-heading text-base font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
