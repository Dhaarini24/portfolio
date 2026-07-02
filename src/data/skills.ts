import type { SkillCategory } from "@/types";

// Skill categories, rendered dynamically by the grid. Grouped exactly as on the
// resume; `icon` values are lucide-react names resolved at render time.
export const skills: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Building intelligent systems with modern generative AI and ML techniques.",
    icon: "BrainCircuit",
    skills: [
      { name: "Generative AI", icon: "Sparkles" },
      { name: "Large Language Models (LLMs)", icon: "Brain" },
      { name: "AI Agents", icon: "Bot" },
      { name: "Retrieval-Augmented Generation (RAG)", icon: "Database" },
      { name: "Prompt Engineering", icon: "MessageSquare" },
      { name: "Machine Learning", icon: "BrainCircuit" },
    ],
  },
  {
    id: "programming-data",
    title: "Programming & Data",
    description: "Core languages and libraries for data-driven engineering.",
    icon: "Code2",
    skills: [
      { name: "Python", icon: "Code2" },
      { name: "SQL", icon: "Database" },
      { name: "PySpark", icon: "Zap" },
      { name: "Pandas", icon: "Table" },
      { name: "NumPy", icon: "Sigma" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Deploying and automating cloud-native applications at scale.",
    icon: "Cloud",
    skills: [
      { name: "Azure", icon: "Cloud" },
      { name: "Azure DevOps", icon: "Infinity" },
      { name: "Docker", icon: "Container" },
      { name: "Kubernetes", icon: "Boxes" },
      { name: "Azure Kubernetes Service (AKS)", icon: "Boxes" },
      { name: "Azure Container Registry (ACR)", icon: "Package" },
      { name: "Git", icon: "GitBranch" },
      { name: "CI/CD", icon: "Workflow" },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    description: "Transforming raw data into reliable, actionable insight.",
    icon: "Database",
    skills: [
      { name: "ETL Pipelines", icon: "Workflow" },
      { name: "Data Processing", icon: "Cpu" },
      { name: "Data Analysis", icon: "BarChart3" },
      { name: "Tableau", icon: "ChartColumnBig" },
    ],
  },
];
