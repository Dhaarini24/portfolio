export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  /** "YYYY-MM" — powers the semantic <time datetime> and ordering. */
  startDate: string;
  /** "YYYY-MM"; omit for the current role. */
  endDate?: string;
  /** Human-readable duration, e.g. "February 2026 – Present". */
  period: string;
  location?: string;
  description: string;
  techStack: string[];
  /** Impact / highlight badge text, e.g. "30% Faster Processing". */
  impact?: string;
  /** Marks the current role (glowing accent + pulse). */
  current?: boolean;
}
