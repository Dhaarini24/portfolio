import type { Highlight, Passion, Stat } from "@/types";

// Short intro shown under the section heading.
export const aboutIntro =
  "I'm Dhaarini — an AI Engineer at Unisys who turns research-grade ideas into production AI systems that ship.";

// Professional summary, drawn from real experience (Unisys + Nielsen + REVA).
export const professionalSummary: string[] = [
  "I'm an AI Engineer at Unisys, where I build AI agents, LLM-powered applications, and Retrieval-Augmented Generation (RAG) systems — then ship them to production on Azure Kubernetes Service through Azure DevOps CI/CD pipelines, Docker, and automated deployments.",
  "My foundation is in data science: at Nielsen I analysed 10M+ record datasets with Python, SQL, and PySpark and cut processing time by 30%. I hold a B.Tech in AI & Data Science (CGPA 9.66) and pair that rigor with a builder's focus on scalable, real-world systems.",
];

export const careerObjective =
  "I'm focused on building scalable AI systems that solve real-world problems through intelligent automation — bridging cutting-edge LLM research with robust, cloud-native engineering.";

export const highlights: Highlight[] = [
  {
    icon: "Briefcase",
    title: "AI Engineer at Unisys",
    description:
      "Building agentic AI, LLM apps & RAG systems on Azure Kubernetes Service.",
  },
  {
    icon: "BookOpen",
    title: "Published Researcher",
    description: "Research paper (IEEE CSITSS) plus an IGI Global book chapter.",
  },
  {
    icon: "Award",
    title: "Claude Certified Architect",
    description: "Certified by Anthropic in architecting production LLM applications.",
  },
  {
    icon: "BarChart3",
    title: "Power BI Data Analyst",
    description: "Microsoft Certified: Power BI Data Analyst Associate.",
  },
  {
    icon: "GraduationCap",
    title: "B.Tech AI & Data Science",
    description: "REVA University — CGPA 9.66 / 10.",
  },
];

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Major Projects", icon: "FolderKanban" },
  { value: 1, label: "Research Publication", icon: "FileText" },
  { value: 1, label: "Book Chapter", icon: "BookMarked" },
  { value: 8, suffix: "+", label: "Certifications", icon: "BadgeCheck" },
];

export const passions: Passion[] = [
  { label: "AI Agents", icon: "Bot" },
  { label: "LLM Applications", icon: "Sparkles" },
  { label: "Retrieval-Augmented Generation", icon: "Database" },
  { label: "Cloud Deployments", icon: "Cloud" },
  { label: "Azure DevOps", icon: "Infinity" },
  { label: "Kubernetes", icon: "Boxes" },
  { label: "CI/CD Automation", icon: "Workflow" },
  { label: "Machine Learning", icon: "BrainCircuit" },
];
