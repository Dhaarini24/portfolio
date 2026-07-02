"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Container } from "@/components/layout";
import { ScrollReveal, staggerContainer } from "@/animations";
import { achievements, certifications, publications } from "@/data";
import { AchievementCard } from "./achievement-card";
import { CertificationCard } from "./certification-card";
import { PublicationCard } from "./publication-card";

const inViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
} as const;

export function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="relative py-16 sm:py-20"
    >
      <Container className="relative">
        {/* Header */}
        <ScrollReveal className="max-w-3xl">
          <span className="glass text-muted-foreground mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <Trophy className="text-accent-400 size-4" aria-hidden />
            Achievements
          </span>
          <h2
            id="publications-heading"
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Publications & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            Research contributions, professional certifications, and achievements that
            reflect my passion for AI, innovation, and continuous learning.
          </p>
        </ScrollReveal>

        {/* Two-column, narrow vertical list on the left */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: publications (narrow single column) + achievement, so this
              column's height roughly matches the certifications grid instead
              of leaving empty space beneath a short 2-card list. */}
          <div>
            <h3 className="font-heading mb-5 text-xl font-semibold">
              Research & Publications
            </h3>
            <motion.div
              variants={staggerContainer(0.1)}
              {...inViewProps}
              className="flex flex-col gap-4"
            >
              {publications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1)}
              {...inViewProps}
              className="mt-6"
            >
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </motion.div>
          </div>

          {/* Right: certifications */}
          <div>
            <h3 className="font-heading mb-5 text-xl font-semibold">Certifications</h3>
            <motion.div
              variants={staggerContainer(0.06)}
              {...inViewProps}
              className="grid gap-3 sm:grid-cols-2"
            >
              {certifications.map((certification) => (
                <CertificationCard key={certification.id} certification={certification} />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
