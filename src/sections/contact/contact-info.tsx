"use client";

import { motion } from "framer-motion";
import { Cpu, Mail, MapPin, User, type LucideIcon } from "lucide-react";
import { contactInfo } from "@/data";
import { fadeUp, staggerContainer } from "@/animations";
import { easings } from "@/lib/design-tokens";
import { ResumeButton } from "@/components/shared";
import { SocialLinks } from "./social-links";

interface InfoRow {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const rows: InfoRow[] = [
  { icon: User, label: "Name", value: contactInfo.name },
  { icon: Cpu, label: "Role", value: contactInfo.role },
  { icon: MapPin, label: "Location", value: contactInfo.location },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
];

export function ContactInfo() {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6"
    >
      <motion.span
        variants={fadeUp}
        className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-muted-foreground">Available for new opportunities</span>
      </motion.span>

      <ul className="flex flex-col gap-4">
        {rows.map(({ icon: Icon, label, value, href }, i) => (
          <motion.li key={label} variants={fadeUp} className="flex items-center gap-4">
            <motion.span
              aria-hidden
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4 + i * 0.3,
                ease: easings.standard,
                repeat: Infinity,
                delay: i * 0.25,
              }}
              className="from-primary-500/20 to-secondary-500/20 text-primary-300 flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br"
            >
              <Icon className="size-5" />
            </motion.span>
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs tracking-wide uppercase">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="hover:text-primary-300 focus-visible:ring-ring rounded break-all transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  {value}
                </a>
              ) : (
                <p className="text-foreground/90">{value}</p>
              )}
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div variants={fadeUp} className="flex flex-col gap-4">
        <p className="text-muted-foreground text-xs tracking-wide uppercase">Connect</p>
        <div className="flex flex-wrap items-center gap-4">
          <SocialLinks />
          <ResumeButton />
        </div>
      </motion.div>
    </motion.div>
  );
}
