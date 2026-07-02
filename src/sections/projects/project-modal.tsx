"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircleCheckBig,
  ExternalLink,
  GraduationCap,
  Layers,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";
import { TechBadge } from "@/components/shared";
import { staggerContainer } from "@/animations";
import { easings } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { ProjectBadge } from "./project-badge";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function DetailBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="text-foreground/90 font-heading flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
        <Icon className="text-accent-400 size-4" aria-hidden />
        {title}
      </h3>
      <div className="text-muted-foreground mt-2 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const isOpen = project !== null;

  // Scroll lock, Escape, focus trap, and focus restore while open.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => getFocusable()[0]?.focus(), 60);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Backdrop */}
          <motion.div
            className="bg-background/70 absolute inset-0 backdrop-blur-sm"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel — outer shell never scrolls, so the close button (a direct,
              non-scrolling child) stays pinned in place; only the inner div
              scrolls. */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-overview"
            variants={{
              open: { opacity: 1, scale: 1, y: 0 },
              closed: { opacity: 0, scale: 0.96, y: 16 },
            }}
            transition={{ duration: 0.35, ease: easings.premium }}
            className="glass relative z-10 max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10"
          >
            {/* Close — fixed to the panel, never scrolls with content */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="glass text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <X className="size-4" aria-hidden />
            </button>

            {/* Scrollable content */}
            <div className="modal-scrollbar max-h-[85vh] overflow-y-auto p-6 sm:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-2 pr-10">
                <ProjectBadge
                  label={project.category}
                  className="bg-accent-500/15 text-accent-300"
                />
                <ProjectBadge
                  label={project.status}
                  icon={project.status === "Enterprise" ? ShieldCheck : CircleCheckBig}
                  className={cn(
                    project.status === "Enterprise"
                      ? "bg-primary-500/15 text-primary-300"
                      : "bg-emerald-500/15 text-emerald-300",
                  )}
                />
              </div>
              <h2
                id="project-modal-title"
                className="font-heading mt-3 text-2xl font-bold tracking-tight"
              >
                {project.title}
              </h2>
              <p
                id="project-modal-overview"
                className="text-muted-foreground mt-3 text-sm leading-relaxed"
              >
                {project.fullOverview ?? project.overview}
              </p>

              {/* Technologies */}
              <motion.ul
                variants={staggerContainer(0.04)}
                initial="hidden"
                animate="visible"
                className="mt-4 flex flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </motion.ul>

              {/* Detail sections */}
              <div className="mt-6 space-y-6">
                <DetailBlock icon={Target} title="Problem Statement">
                  {project.details.problem}
                </DetailBlock>
                <DetailBlock icon={Lightbulb} title="Solution Approach">
                  {project.details.solution}
                </DetailBlock>
                <DetailBlock icon={Layers} title="Architecture Overview">
                  {project.details.architecture}
                </DetailBlock>
                <DetailBlock icon={CircleCheckBig} title="Key Contributions">
                  <ul className="grid gap-2">
                    {project.details.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CircleCheckBig
                          className="text-accent-400 mt-0.5 size-3.5 shrink-0"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
                <DetailBlock icon={TrendingUp} title="Business Impact">
                  {project.impact}
                </DetailBlock>
                <DetailBlock icon={Wrench} title="Challenges Solved">
                  {project.details.challenges}
                </DetailBlock>
                <DetailBlock icon={GraduationCap} title="Lessons Learned">
                  {project.details.lessons}
                </DetailBlock>
              </div>

              {/* Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                    >
                      <FaGithub className="size-4" />
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="size-4" aria-hidden />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
