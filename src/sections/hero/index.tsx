"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Download, MapPin } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";
import { Container } from "@/components/layout";
import { siteConfig } from "@/constants";
import { useMagnetic } from "@/hooks";
import { fadeUp, staggerContainer } from "@/animations";
import { durations, easings } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { ParticleField } from "./particle-field";
import { GradientBlobs } from "./gradient-blobs";
import { GridBackground } from "./grid-background";
import { CodeWindow } from "./code-window";
import { SocialLinks } from "./social-links";

export function Hero() {
  // Deliberately slow, readable cadence, looping through every specialization.
  const [typed] = useTypewriter({
    words: [...siteConfig.specializations],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 120,
    delaySpeed: 2500,
  });
  const magnetic = useMagnetic<HTMLDivElement>();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden py-28"
    >
      {/* ---- Background layers (furthest → nearest) ---- */}
      <GridBackground />
      <GradientBlobs />
      <ParticleField />
      {/* Vignette so foreground text stays legible over the animated field. */}
      <div
        aria-hidden
        className="from-background/0 via-background/20 to-background pointer-events-none absolute inset-0 bg-gradient-to-b"
      />

      {/* ---- Foreground content ---- */}
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: intro */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 text-left"
          >
            {/* Status pill */}
            <motion.div
              variants={fadeUp}
              className="glass text-muted-foreground flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to AI Engineering roles
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl"
            >
              Dhaarini K N <span className="text-gradient">Hathwar</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-lg"
            >
              <span className="text-foreground inline-flex items-center gap-2 font-medium">
                <Cpu className="text-primary-400 size-5" />
                {siteConfig.role} @ {siteConfig.company}
              </span>
              <span className="inline-flex items-center gap-1.5 text-base">
                <MapPin className="size-4" />
                {siteConfig.location}
              </span>
            </motion.p>

            {/* Typing line */}
            <motion.p
              variants={fadeUp}
              className="font-heading text-2xl font-semibold sm:text-3xl"
              aria-label={`I build ${siteConfig.specializations.join(", ")}`}
            >
              <span className="text-muted-foreground">I build </span>
              <span className="text-gradient" aria-hidden>
                {typed}
              </span>
              <span
                aria-hidden
                className="bg-primary-400 animate-blink ml-1 inline-block h-6 w-[3px] translate-y-1 sm:h-7"
              />
            </motion.p>

            {/* Intro */}
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-xl text-lg leading-relaxed"
            >
              {siteConfig.description} Currently engineering agentic AI and cloud-native
              CI/CD pipelines at {siteConfig.company}.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Resume — magnetic + animated gradient */}
              <motion.div
                ref={magnetic.ref}
                style={{ x: magnetic.x, y: magnetic.y }}
                onPointerMove={magnetic.onPointerMove}
                onPointerLeave={magnetic.onPointerLeave}
              >
                <motion.a
                  href={siteConfig.resume}
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="gradient-bg-animated text-primary-foreground shadow-glow-primary group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold"
                >
                  <Download className="size-4" />
                  Download Résumé
                </motion.a>
              </motion.div>

              {/* Secondary — view projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "glass hover:text-foreground text-muted-foreground",
                  "group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors",
                )}
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right: animated code window */}
          <div className="flex justify-center lg:justify-end">
            <CodeWindow />
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: durations.moderate }}
        className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 transition-colors md:flex"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          className="border-border flex h-9 w-5 justify-center rounded-full border-2 pt-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, ease: easings.standard, repeat: Infinity }}
        >
          <span className="bg-foreground h-1.5 w-1 rounded-full" />
        </motion.span>
      </motion.a>
    </section>
  );
}
