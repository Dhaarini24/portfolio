export const siteConfig = {
  name: "Dhaarini K N Hathwar",
  shortName: "Dhaarini",
  role: "AI Engineer",
  company: "Unisys",
  location: "Bengaluru, India",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Transforming ideas into intelligent AI systems through LLMs, RAG, Kubernetes, and Cloud Automation.",
  tagline:
    "Building Intelligent AI Agents, LLM Applications, and Cloud-Native Solutions.",
  ogImage: "/og-image.png",
  resume: "/Dhaarini-K-N-Hathwar-Resume.pdf",
  // Specializations cycled through the hero typing animation.
  specializations: ["AI Agents", "LLM Applications", "RAG Pipelines", "Cloud-Native AI"],
  keywords: [
    "Dhaarini K N Hathwar",
    "AI Engineer",
    "AI Agents",
    "Large Language Models",
    "LLM",
    "Retrieval-Augmented Generation",
    "RAG",
    "Azure",
    "Kubernetes",
    "Machine Learning",
    "Portfolio",
  ],
  links: {
    github: "https://github.com/Dhaarini24",
    linkedin: "https://www.linkedin.com/in/dhaarini-k-n-hathwar-818648243",
    email: "mailto:dhaariniknhathwar@gmail.com",
  },
} as const;
