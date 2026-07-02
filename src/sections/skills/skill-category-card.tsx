"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/types";
import { fadeUp, staggerContainer } from "@/animations";
import { easings } from "@/lib/design-tokens";
import { skillIcons } from "./icons";
import { SkillBadge } from "./skill-badge";

interface SkillCategoryCardProps {
  category: SkillCategory;
  /** Staggers the floating-icon loop across cards. */
  index: number;
}

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const CategoryIcon = skillIcons[category.icon];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="card-glow-border group h-full rounded-2xl"
    >
      <div className="glass group-hover:shadow-glow-primary flex h-full flex-col rounded-2xl p-6 transition-shadow">
        <header className="flex items-center gap-4">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4 + index * 0.4,
              ease: easings.standard,
              repeat: Infinity,
              delay: index * 0.3,
            }}
            className="from-primary-500/20 to-secondary-500/20 text-primary-300 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br"
          >
            {CategoryIcon && <CategoryIcon className="size-6" aria-hidden />}
          </motion.div>
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-semibold">{category.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              {category.description}
            </p>
          </div>
        </header>

        <motion.ul
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap gap-2"
          aria-label={`${category.title} skills`}
        >
          {category.skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon ? skillIcons[skill.icon] : undefined}
            />
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}
