"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { cn } from "@/lib/utils";

// lucide dropped brand marks over trademark concerns, so brand icons come from
// react-icons. Keys match the `icon` strings in constants/social.ts.
const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Github: FaGithub,
  Linkedin: FaLinkedinIn,
  Mail: FaEnvelope,
};

interface SocialIconLinkProps {
  label: string;
  href: string;
  icon: string;
  className?: string;
}

export function SocialIconLink({ label, href, icon, className }: SocialIconLinkProps) {
  const Icon = ICONS[icon] ?? FaEnvelope;
  const isEmail = href.startsWith("mailto:");
  return (
    <motion.a
      href={href}
      aria-label={label}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      whileHover={{ y: -2, scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className={cn(
        "text-muted-foreground hover:text-foreground focus-visible:ring-ring flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/5 focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
    >
      <Icon className="size-4" />
    </motion.a>
  );
}
