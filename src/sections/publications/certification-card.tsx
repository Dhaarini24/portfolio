"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import type { Certification } from "@/types";
import { fadeUp } from "@/animations";
import { cn } from "@/lib/utils";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { title, issuer, featured, url } = certification;

  return (
    <motion.a
      href={url}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      aria-label={url ? `${title} — verify credential (opens in a new tab)` : title}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={cn(
        "group focus-visible:ring-ring block rounded-2xl focus-visible:ring-2 focus-visible:outline-none",
        featured ? "glow-border" : "card-glow-border",
      )}
    >
      <div
        className={cn(
          "glass flex h-full items-start gap-4 rounded-2xl p-5 transition-shadow",
          featured ? "shadow-glow-primary" : "group-hover:shadow-glow-primary",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br",
            featured
              ? "from-primary-500/30 to-accent-500/30 text-primary-200"
              : "from-primary-500/15 to-secondary-500/15 text-primary-300",
          )}
        >
          <Award className="size-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h4 className="group-hover:text-primary-200 leading-snug font-semibold transition-colors">
              {title}
            </h4>
            {url ? (
              <ExternalLink
                className="text-muted-foreground group-hover:text-accent-400 mt-0.5 size-4 shrink-0 transition-colors"
                aria-hidden
              />
            ) : (
              <BadgeCheck
                className="text-accent-400 mt-0.5 size-4 shrink-0"
                aria-label="Verified certification"
              />
            )}
          </div>
          <p className="text-muted-foreground mt-1.5 text-sm">{issuer}</p>
        </div>
      </div>
    </motion.a>
  );
}
