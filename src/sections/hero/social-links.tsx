"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { socialLinks } from "@/constants";
import { fadeUp } from "@/animations";

// Maps the string icon names from the data layer to icon components.
// Uses react-icons for brand marks (lucide dropped Github/Linkedin over
// trademark concerns), keeping `constants/social.ts` free of React imports.
const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Github: FaGithub,
  Linkedin: FaLinkedinIn,
  Mail: FaEnvelope,
};

export function SocialLinks() {
  return (
    <motion.ul variants={fadeUp} className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = ICONS[link.icon] ?? FaEnvelope;
        const isEmail = link.href.startsWith("mailto:");
        return (
          <li key={link.label}>
            <motion.a
              href={link.href}
              aria-label={link.label}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.94 }}
              className="glass hover:shadow-glow-primary text-muted-foreground hover:text-foreground flex size-11 items-center justify-center rounded-full transition-colors"
            >
              <Icon className="size-5" />
            </motion.a>
          </li>
        );
      })}
    </motion.ul>
  );
}
