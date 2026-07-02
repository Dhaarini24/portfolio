import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentProps<"div"> {
  as?: React.ElementType;
}

// Enforces the design system's max-width (1280px) and responsive gutters
// (24px / 32px / 64px) — every section should wrap its content in this
// instead of repeating padding/max-width utilities inline.
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16", className)}
      {...props}
    />
  );
}
