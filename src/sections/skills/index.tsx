"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Container } from "@/components/layout";
import { ScrollReveal, staggerContainer } from "@/animations";
import { skills } from "@/data";
import { SkillCategoryCard } from "./skill-category-card";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-16 sm:py-20"
    >
      <Container className="relative">
        {/* Header */}
        <ScrollReveal className="max-w-3xl">
          <span className="glass text-muted-foreground mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <Layers className="text-accent-400 size-4" aria-hidden />
            Technical Skills
          </span>
          <h2
            id="skills-heading"
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            A combination of AI, cloud, data engineering, and modern development
            technologies used to build scalable enterprise solutions.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {skills.map((category, i) => (
            <SkillCategoryCard key={category.id} category={category} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
