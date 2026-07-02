"use client";

import { motion } from "framer-motion";
import { BookMarked, ExternalLink, FileText } from "lucide-react";
import type { Publication } from "@/types";
import { fadeUp } from "@/animations";
import { cn } from "@/lib/utils";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const { title, publisher, type, url } = publication;
  const isBook = type === "Book Chapter";
  const Icon = isBook ? BookMarked : FileText;

  return (
    <motion.a
      href={url}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      aria-label={url ? `${title} — read on ${publisher} (opens in a new tab)` : title}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="card-glow-border group focus-visible:ring-ring block rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
    >
      <div className="glass group-hover:shadow-glow-primary flex gap-4 rounded-2xl p-5 transition-shadow">
        <div
          aria-hidden
          className="from-primary-500/20 to-secondary-500/20 text-primary-300 flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br"
        >
          <Icon className="size-5" />
        </div>

        <div className="min-w-0 flex-1">
          <span
            className={cn(
              "inline-flex rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold",
              isBook
                ? "bg-secondary-500/15 text-secondary-300"
                : "bg-primary-500/15 text-primary-300",
            )}
          >
            {type}
          </span>
          <h4 className="font-heading group-hover:text-primary-200 mt-2 leading-snug font-semibold transition-colors">
            {title}
          </h4>
          <p className="text-muted-foreground mt-1 text-sm">{publisher}</p>
        </div>

        {url && (
          <ExternalLink
            className="text-muted-foreground group-hover:text-accent-400 size-4 shrink-0 transition-colors"
            aria-hidden
          />
        )}
      </div>
    </motion.a>
  );
}
