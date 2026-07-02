"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CircleCheckBig,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";
import { TechBadge } from "@/components/shared";
import { fadeUp, staggerContainer } from "@/animations";
import { cn } from "@/lib/utils";
import { ProjectBadge } from "./project-badge";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const {
    title,
    category,
    status,
    overview,
    techStack,
    features,
    impact,
    githubUrl,
    liveUrl,
  } = project;
  const isEnterprise = status === "Enterprise";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="card-glow-border group h-full rounded-2xl"
    >
      <div className="glass group-hover:shadow-glow-primary flex h-full flex-col rounded-2xl p-6 transition-shadow">
        {/* Category + status */}
        <div className="flex items-center justify-between gap-2">
          <ProjectBadge label={category} className="bg-accent-500/15 text-accent-300" />
          <ProjectBadge
            label={status}
            icon={isEnterprise ? ShieldCheck : CircleCheckBig}
            className={cn(
              isEnterprise
                ? "bg-primary-500/15 text-primary-300"
                : "bg-emerald-500/15 text-emerald-300",
            )}
          />
        </div>

        {/* Title + overview */}
        <h3 className="font-heading mt-4 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{overview}</p>

        {/* Feature highlights */}
        {features && features.length > 0 && (
          <ul className="mt-4 grid gap-1.5" aria-label="Feature highlights">
            {features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="text-muted-foreground flex items-center gap-2 text-sm"
              >
                <Check className="text-accent-400 size-3.5 shrink-0" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        <motion.ul
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`Technologies used in ${title}`}
        >
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </motion.ul>

        {/* Impact */}
        <div className="border-accent-400/60 bg-accent-500/5 mt-4 flex items-start gap-2 rounded-lg border-l-2 py-2 pr-2 pl-3">
          <TrendingUp className="text-accent-400 mt-0.5 size-4 shrink-0" aria-hidden />
          <p className="text-foreground/80 text-xs leading-relaxed">{impact}</p>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <button
            type="button"
            onClick={onViewDetails}
            className="bg-primary-500/15 text-primary-200 hover:bg-primary-500/25 focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            View Details
            <ArrowUpRight className="size-4" aria-hidden />
          </button>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — GitHub repository`}
              className="glass text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <FaGithub className="size-4" />
              GitHub
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — live demo`}
              className="glass text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <ExternalLink className="size-4" aria-hidden />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
