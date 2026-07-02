export type ProjectCategory = "Enterprise AI" | "Data Engineering" | "Machine Learning";
export type ProjectStatus = "Completed" | "Enterprise";

// Deep content shown in the project detail modal.
export interface ProjectDetails {
  problem: string;
  solution: string;
  architecture: string;
  contributions: string[];
  challenges: string;
  lessons: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Short overview shown on the card. */
  overview: string;
  /** Richer overview shown at the top of the modal (falls back to `overview`). */
  fullOverview?: string;
  techStack: string[];
  /** Feature highlights (optional). */
  features?: string[];
  /** Business impact statement. */
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  details: ProjectDetails;
  featured?: boolean;
}
