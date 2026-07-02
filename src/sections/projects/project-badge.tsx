import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectBadgeProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

// Small presentational pill used for project category and status badges.
export function ProjectBadge({ label, icon: Icon, className }: ProjectBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        className,
      )}
    >
      {Icon && <Icon className="size-3.5" aria-hidden />}
      {label}
    </span>
  );
}
