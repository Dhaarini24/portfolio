"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Container } from "@/components/layout";
import { ScrollReveal, staggerContainer } from "@/animations";
import { projects } from "@/data";
import type { Project } from "@/types";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-16 sm:py-20"
    >
      <Container className="relative">
        {/* Header */}
        <ScrollReveal className="max-w-3xl">
          <span className="glass text-muted-foreground mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <Rocket className="text-accent-400 size-4" aria-hidden />
            Featured Projects
          </span>
          <h2
            id="projects-heading"
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Projects That <span className="text-gradient">Deliver Impact</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            A selection of AI, cloud, data engineering, and machine learning projects
            demonstrating enterprise-scale solutions and real-world impact.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelected(project)}
            />
          ))}
        </motion.div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
