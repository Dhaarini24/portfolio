/**
 * JS-side mirror of the CSS design tokens in `globals.css`.
 * Framer Motion / GSAP take numeric durations and easing arrays, not CSS
 * custom properties, so animation code should import from here rather than
 * re-declaring magic numbers.
 */

export const durations = {
  instant: 0.1,
  fast: 0.2,
  base: 0.3,
  moderate: 0.5,
  slow: 0.8,
} as const;

// cubic-bezier control points — mirror the --ease-* CSS variables
export const easings = {
  standard: [0.4, 0, 0.2, 1],
  decelerate: [0, 0, 0.2, 1],
  accelerate: [0.4, 0, 1, 1],
  premium: [0.16, 1, 0.3, 1],
  spring: [0.34, 1.56, 0.64, 1],
} as const;

// Framer Motion spring configs (for useSpring / type: "spring" transitions)
export const springs = {
  default: { stiffness: 300, damping: 30, mass: 1 },
  magnetic: { stiffness: 150, damping: 15, mass: 0.5 },
  magneticRelease: { stiffness: 120, damping: 12, mass: 0.5 },
} as const;

export const magnetic = {
  activationRadius: 100,
  strength: 0.35,
  maxDisplacement: 16,
} as const;

export const scrollReveal = {
  threshold: 0.15,
  rootMargin: "-10% 0px",
  staggerChildren: 0.1,
  delayChildren: 0.05,
} as const;

// Mirrors the --breakpoint-* scale (Tailwind defaults + custom 3xl)
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;
