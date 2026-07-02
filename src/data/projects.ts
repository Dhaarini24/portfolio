import type { Project } from "@/types";

// Real projects (flagship first). Rendered dynamically by the grid + modal.
export const projects: Project[] = [
  {
    id: "deployment-agent",
    slug: "ai-deployment-pipeline-automation-agent",
    title: "AI Deployment & Pipeline Automation Agent",
    category: "Enterprise AI",
    status: "Enterprise",
    overview:
      "An AI-powered deployment agent that automates cloud-native application deployments end to end.",
    fullOverview:
      "An LLM-powered agent that inspects a repository and automatically generates the infrastructure needed to ship it — Dockerfiles, Kubernetes manifests, Helm values, and Azure DevOps CI/CD pipelines — then commits the code, runs the pipeline, deploys to Azure Kubernetes Service, and validates the result.",
    techStack: [
      "LLMs",
      "RAG",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Helm",
      "AKS",
      "Python",
    ],
    features: [
      "AI-driven deployment automation",
      "Dockerfile generation",
      "Kubernetes manifest generation",
      "Helm values generation",
      "Azure DevOps CI/CD pipeline creation",
      "Automated deployment validation",
    ],
    impact: "Reduced manual deployment effort and standardized cloud-native deployments.",
    details: {
      problem:
        "Cloud-native deployments required repetitive, error-prone manual work — hand-writing Dockerfiles, Kubernetes manifests, Helm values, and CI/CD pipelines for every service, with inconsistent standards across teams.",
      solution:
        "An LLM + RAG agent that reads a repository, generates the Docker/Kubernetes/Helm artifacts and Azure DevOps pipeline, commits them, deploys to AKS, and runs automated post-deployment validation.",
      architecture:
        "A Python agent orchestrates LLM reasoning with a RAG layer grounded in infrastructure best practices and repository context. Generated artifacts feed Azure DevOps pipelines that build Docker images, push to Azure Container Registry, and roll out to Azure Kubernetes Service, with automated validation closing the loop.",
      contributions: [
        "Designed the agent's generation-then-validation workflow",
        "Built the RAG layer grounding the LLM in infra best practices and repo context",
        "Automated Dockerfile, Kubernetes manifest, and Helm values generation",
        "Integrated Azure DevOps pipeline creation and AKS deployment",
        "Added automated post-deployment validation",
      ],
      challenges:
        "Ensuring LLM-generated infrastructure was correct, secure, and idempotent — solved with RAG grounding, schema validation, and automated post-deploy checks.",
      lessons:
        "Grounding an LLM with retrieval and validating its output programmatically is what makes agentic automation trustworthy in production.",
    },
    featured: true,
  },
  {
    id: "audience-analytics",
    slug: "audience-analytics-module",
    title: "Audience Analytics Module",
    category: "Data Engineering",
    status: "Enterprise",
    overview:
      "Automated U.S. television audience analytics and DMA penetration calculations at scale.",
    fullOverview:
      "Automated Designated Market Area (DMA) penetration analytics over 10M+ U.S. television audience records, and optimized the large-scale data processing pipeline for speed and reliability.",
    techStack: ["Python", "SQL", "PySpark"],
    impact: "Improved processing efficiency by approximately 30%.",
    details: {
      problem:
        "U.S. DMA penetration analytics over 10M+ audience records were slow and manually intensive, delaying data-driven decisions for business and client teams.",
      solution:
        "Automated the DMA penetration calculations and optimized the large-scale data processing pipeline using Python, SQL, and PySpark.",
      architecture:
        "PySpark pipelines process 10M+ record television audience datasets; SQL transformations compute DMA penetration metrics that feed downstream analytics and production reporting.",
      contributions: [
        "Automated U.S. DMA penetration calculations",
        "Optimized large-scale PySpark processing pipelines",
        "Reduced processing time by approximately 30%",
        "Supported production-level, data-driven reporting",
      ],
      challenges:
        "Processing 10M+ records efficiently — solved through PySpark optimization and end-to-end pipeline automation.",
      lessons:
        "At scale, pipeline optimization and automation compound: small per-stage gains add up to major throughput improvements.",
    },
  },
  {
    id: "msm-file-engineering",
    slug: "msm-file-engineering",
    title: "MSM File Engineering",
    category: "Data Engineering",
    status: "Enterprise",
    overview:
      "Automated extraction, transformation, validation, and refresh of television audience datasets.",
    fullOverview:
      "An automated ETL and validation workflow for MSM television audience files, replacing manual data handling with a reliable, quality-gated pipeline.",
    techStack: ["Python", "SQL"],
    impact: "Improved dataset quality and accelerated business reporting.",
    details: {
      problem:
        "Television audience datasets required manual extraction, transformation, and validation, slowing reporting and risking data-quality issues.",
      solution:
        "Automated the ETL and validation workflow for MSM audience files with Python and SQL, adding refresh automation and embedded quality checks.",
      architecture:
        "Python + SQL ETL jobs extract, transform, validate, and refresh audience datasets, with validation gates that enforce data quality before any data reaches reporting.",
      contributions: [
        "Automated extraction, transformation, and validation",
        "Built dataset refresh automation",
        "Embedded data-quality validation in the pipeline",
        "Accelerated downstream business reporting",
      ],
      challenges:
        "Guaranteeing data quality across automated refreshes — solved with validation checks embedded directly in the pipeline.",
      lessons:
        "Embedding validation inside the ETL prevents bad data from ever reaching reports.",
    },
  },
  {
    id: "agrisphere",
    slug: "agrisphere",
    title: "AgriSphere",
    category: "Machine Learning",
    status: "Completed",
    overview: "An intelligent AgriTech platform for predictive, data-driven farming.",
    fullOverview:
      "A full-stack AgriTech platform that brings machine learning to farmers — combining crop recommendation, soil analysis, and image-based plant disease detection in an accessible web application.",
    techStack: ["Machine Learning", "Python", "React", "Node.js", "MongoDB"],
    features: ["Crop Recommendation", "Soil Analysis", "Plant Disease Detection"],
    impact: "Enabled farmers to make data-driven agricultural decisions.",
    details: {
      problem:
        "Farmers lacked accessible, data-driven guidance for crop selection, soil health, and early plant-disease detection.",
      solution:
        "A full-stack platform combining ML models for crop recommendation, soil analysis, and plant disease detection with a React / Node.js / MongoDB application.",
      architecture:
        "Python ML models power crop recommendation, soil analysis, and image-based plant disease detection; a React front end with a Node.js and MongoDB backend delivers the experience to farmers.",
      contributions: [
        "Built ML models for crop recommendation and soil analysis",
        "Developed image-based plant disease detection",
        "Built the React / Node.js / MongoDB platform",
      ],
      challenges:
        "Delivering reliable predictions across varied crops and conditions — addressed with careful model selection and validation.",
      lessons:
        "Pairing ML with an accessible product interface is what turns models into real-world impact.",
    },
  },
];
