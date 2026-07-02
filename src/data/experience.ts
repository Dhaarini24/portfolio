import type { Experience } from "@/types";

// Real work history (most recent first). Rendered dynamically by the Timeline.
export const experience: Experience[] = [
  {
    id: "unisys",
    role: "AI/ML Engineer",
    company: "Unisys",
    startDate: "2026-02",
    period: "February 2026 – Present",
    location: "Bengaluru, India",
    description:
      "Developing enterprise AI Agents, LLM-based applications, and Retrieval-Augmented Generation (RAG) solutions. Building Azure DevOps CI/CD pipelines, Kubernetes deployment automation, and cloud-native AI applications on Azure Kubernetes Service.",
    techStack: [
      "LLMs",
      "AI Agents",
      "RAG",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "AKS",
      "Python",
    ],
    impact: "Current Role",
    current: true,
  },
  {
    id: "nielsen",
    role: "Data Scientist Intern",
    company: "Nielsen",
    startDate: "2025-03",
    endDate: "2025-08",
    period: "March 2025 – August 2025",
    location: "Bengaluru, India",
    description:
      "Analyzed television audience datasets exceeding 10 million records using Python, SQL, and PySpark. Built automation frameworks that reduced processing time by approximately 30%.",
    techStack: ["Python", "SQL", "PySpark", "Data Engineering"],
    impact: "30% Faster Processing",
  },
  {
    id: "tresvista",
    role: "IT Intern",
    company: "Tresvista Analytics LLP",
    startDate: "2024-08",
    endDate: "2025-02",
    period: "August 2024 – February 2025",
    location: "Bengaluru, India",
    description:
      "Supported enterprise IT infrastructure, troubleshooting, system administration, and network management while ensuring operational efficiency across the organization.",
    techStack: ["Windows", "Networking", "System Administration"],
  },
];
