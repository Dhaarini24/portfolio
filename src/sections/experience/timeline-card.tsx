"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, TrendingUp } from "lucide-react";
import type { Experience } from "@/types";
import { TechBadge } from "@/components/shared";
import { fadeUp, staggerContainer } from "@/animations";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
  experience: Experience;
}

export function TimelineCard({ experience }: TimelineCardProps) {
  const {
    role,
    company,
    period,
    startDate,
    location,
    description,
    techStack,
    impact,
    current,
  } = experience;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group rounded-2xl",
        current
          ? "glow-border"
          : "bg-gradient-to-br from-white/15 via-white/5 to-transparent p-px",
      )}
    >
      <div
        className={cn(
          "glass h-full rounded-2xl p-6 transition-shadow",
          current ? "shadow-glow-primary" : "group-hover:shadow-glow-primary",
        )}
      >
        <header className="flex items-start gap-4">
          {/* Company logo placeholder — monogram */}
          <div
            aria-hidden
            className="from-primary-500/25 to-secondary-500/25 font-heading grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br text-lg font-bold"
          >
            {company.charAt(0)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
              <div className="min-w-0">
                <h3 className="font-heading text-lg leading-tight font-semibold">
                  {role}
                </h3>
                <p className="text-muted-foreground text-sm">{company}</p>
              </div>

              {impact && (
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold",
                    current
                      ? "gradient-bg-animated text-primary-foreground"
                      : "bg-accent-500/15 text-accent-300",
                  )}
                >
                  {current ? (
                    <Sparkles className="size-3" aria-hidden />
                  ) : (
                    <TrendingUp className="size-3" aria-hidden />
                  )}
                  {impact}
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden />
            <time dateTime={startDate}>{period}</time>
          </span>
          {location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden />
              {location}
            </span>
          )}
        </div>

        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
          {description}
        </p>

        <motion.ul
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`Technologies used at ${company}`}
        >
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}
