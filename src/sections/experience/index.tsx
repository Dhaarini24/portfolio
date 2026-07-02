"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/animations";
import { experience } from "@/data";
import { cn } from "@/lib/utils";
import { TimelineCard } from "./timeline-card";
import { TimelineNode } from "./timeline-node";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  // Fill the timeline line as the section scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Shared left anchor for the spine + nodes (mobile rail vs. centered desktop).
  const railClasses = "left-5 -translate-x-1/2 lg:left-1/2";

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-16 sm:py-20"
    >
      <Container className="relative">
        {/* Header */}
        <ScrollReveal className="max-w-3xl">
          <span className="glass text-muted-foreground mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <Briefcase className="text-accent-400 size-4" aria-hidden />
            Experience
          </span>
          <h2
            id="experience-heading"
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            My Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            A progression from Data Science to AI Engineering — building intelligent
            systems, enterprise AI solutions, and cloud-native applications.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-16">
          {/* base spine */}
          <div
            aria-hidden
            className={cn("bg-border/60 absolute top-0 h-full w-0.5", railClasses)}
          />
          {/* animated fill */}
          <motion.div
            aria-hidden
            style={{ scaleY: lineScaleY }}
            className={cn(
              "from-primary-500 via-secondary-500 to-accent-500 absolute top-0 h-full w-0.5 origin-top bg-gradient-to-b",
              railClasses,
            )}
          />

          <ul className="space-y-10 lg:space-y-16">
            {experience.map((exp, i) => {
              const cardOnLeft = i % 2 === 0;
              return (
                <li key={exp.id} className="relative pl-14 lg:pl-0">
                  {/* node on the spine */}
                  <div className={cn("absolute top-6 z-10", railClasses)}>
                    <TimelineNode current={exp.current} />
                  </div>

                  {/* alternating card */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
                    {cardOnLeft ? (
                      <>
                        <TimelineCard experience={exp} />
                        <div aria-hidden className="hidden lg:block" />
                      </>
                    ) : (
                      <>
                        <div aria-hidden className="hidden lg:block" />
                        <TimelineCard experience={exp} />
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
