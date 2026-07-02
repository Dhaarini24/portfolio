"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { Container } from "@/components/layout";
import { CountUp } from "@/components/shared";
import { ScrollReveal, fadeUp, scaleIn, staggerContainer } from "@/animations";
import {
  aboutIntro,
  careerObjective,
  highlights,
  passions,
  professionalSummary,
  stats,
} from "@/data";
import { AboutVisual } from "./about-visual";
import { HighlightCard } from "./highlight-card";
import { aboutIcons } from "./icons";

// Shared viewport config for the staggered groups.
const inViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
} as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-16 sm:py-20"
    >
      <Container className="relative">
        {/* ---- Header ---- */}
        <ScrollReveal className="max-w-3xl">
          <span className="glass text-muted-foreground mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <Sparkles className="text-accent-400 size-4" aria-hidden />
            About Me
          </span>
          <h2
            id="about-heading"
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Building <span className="text-gradient">Intelligent AI</span> Solutions
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            {aboutIntro}
          </p>
        </ScrollReveal>

        {/* ---- Visual + narrative (balanced two-column) ---- */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal variants={scaleIn}>
            <AboutVisual />
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            <motion.div
              variants={staggerContainer()}
              {...inViewProps}
              className="space-y-4"
            >
              {professionalSummary.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-muted-foreground text-base leading-relaxed sm:text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            <ScrollReveal
              variants={fadeUp}
              className="glass relative overflow-hidden rounded-2xl p-6"
            >
              <span
                aria-hidden
                className="from-primary-500 via-secondary-500 to-accent-500 absolute inset-y-0 left-0 w-1 bg-gradient-to-b"
              />
              <Quote className="text-primary-400/70 mb-2 size-6" aria-hidden />
              <p className="text-foreground/90 text-base leading-relaxed font-medium italic">
                {careerObjective}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* ---- Highlights (full width) ---- */}
        <motion.div
          variants={staggerContainer(0.1)}
          {...inViewProps}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = aboutIcons[item.icon];
            return (
              <HighlightCard
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </motion.div>

        {/* ---- Quick stats ---- */}
        <motion.ul
          variants={staggerContainer(0.1)}
          {...inViewProps}
          className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4"
          aria-label="Career statistics"
        >
          {stats.map((stat) => {
            const Icon = aboutIcons[stat.icon];
            return (
              <motion.li
                key={stat.label}
                variants={fadeUp}
                aria-label={`${stat.value}${stat.suffix ?? ""} ${stat.label}`}
                className="glass hover:shadow-glow-primary rounded-2xl p-6 text-center transition-shadow"
              >
                <Icon
                  className="text-accent-400 mx-auto mb-2 size-5 opacity-80"
                  aria-hidden
                />
                <div
                  aria-hidden
                  className="text-gradient font-heading text-4xl font-bold sm:text-5xl"
                >
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </div>
                <div aria-hidden className="text-muted-foreground mt-1 text-sm">
                  {stat.label}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* ---- What I love working on ---- */}
        <div className="mt-12">
          <ScrollReveal variants={fadeUp}>
            <h3 className="font-heading text-xl font-semibold">What I love working on</h3>
          </ScrollReveal>
          <motion.ul
            variants={staggerContainer(0.06)}
            {...inViewProps}
            className="mt-6 flex flex-wrap gap-3"
          >
            {passions.map((passion) => {
              const Icon = aboutIcons[passion.icon];
              return (
                <motion.li key={passion.label} variants={fadeUp}>
                  <motion.span
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="glass hover:shadow-glow-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-shadow"
                  >
                    <Icon className="text-accent-400 size-4" aria-hidden />
                    {passion.label}
                  </motion.span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
