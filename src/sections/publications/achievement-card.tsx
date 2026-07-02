"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import type { Achievement } from "@/types";
import { fadeUp } from "@/animations";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const { title, project, description } = achievement;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="glow-border group rounded-2xl"
    >
      <div className="glass shadow-glow-secondary relative flex gap-4 overflow-hidden rounded-2xl p-5">
        {/* animated wash */}
        <div
          aria-hidden
          className="gradient-bg-animated pointer-events-none absolute -top-8 -right-8 size-28 rounded-full opacity-20 blur-3xl"
        />

        <motion.div
          aria-hidden
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          className="from-primary-500 to-secondary-500 text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br"
        >
          <Trophy className="size-6" />
        </motion.div>

        <div className="min-w-0 flex-1">
          <span className="text-accent-300 text-xs font-semibold tracking-wide uppercase">
            Achievement
          </span>
          <h4 className="font-heading mt-1 text-lg font-semibold">{title}</h4>
          <p className="text-muted-foreground mt-1 text-sm">
            {description ?? `Project: ${project}`}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
