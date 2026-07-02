"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { siteConfig } from "@/constants";
import { scrollToTop } from "@/lib/scroll";
import { ResumeButton } from "@/components/shared";
import { fadeUp, staggerContainer } from "@/animations";
import { Container } from "./container";
import { FooterLinks } from "./footer-links";
import { SocialIcons } from "./social-icons";
import { BackToTop } from "./back-to-top";

const year = new Date().getFullYear();
const email = siteConfig.links.email.replace(/^mailto:/, "");

export function Footer() {
  const handleLogo = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <footer className="relative mt-8 overflow-hidden">
      {/* Gradient top border */}
      <div
        aria-hidden
        className="via-primary-500/60 h-px w-full bg-gradient-to-r from-transparent to-transparent"
      />

      {/* Subtle animated background glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="bg-primary-600/10 pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full blur-[150px]"
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="flex flex-col items-start gap-4">
            <a
              href="#hero"
              onClick={handleLogo}
              aria-label="Dhaarini K N Hathwar — back to top"
              className="font-heading text-gradient focus-visible:ring-ring rounded text-2xl font-bold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
            >
              DKNH
            </a>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <SocialIcons />
          </motion.div>

          {/* Quick links */}
          <motion.nav variants={fadeUp} aria-label="Footer">
            <h3 className="font-heading mb-4 text-sm font-semibold">Quick Links</h3>
            <FooterLinks />
          </motion.nav>

          {/* Connect */}
          <motion.div variants={fadeUp} className="flex flex-col items-start gap-4">
            <h3 className="font-heading text-sm font-semibold">Get in touch</h3>
            <a
              href={siteConfig.links.email}
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-2 rounded text-sm break-all transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail className="text-accent-400 size-4 shrink-0" aria-hidden />
              {email}
            </a>
            <ResumeButton />
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-muted-foreground text-xs">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </Container>

      <BackToTop />
    </footer>
  );
}
