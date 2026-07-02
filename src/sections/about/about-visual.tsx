"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { easings } from "@/lib/design-tokens";

// Profile photo inside the same premium glass/glow frame the site uses
// everywhere else.
export function AboutVisual() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, ease: easings.standard, repeat: Infinity }}
      className="glow-border relative mx-auto aspect-square w-full max-w-md rounded-3xl"
    >
      <div className="glass relative h-full w-full overflow-hidden rounded-3xl">
        <Image
          src="/profile.jpg"
          alt="Dhaarini K N Hathwar"
          fill
          sizes="(min-width: 1024px) 28rem, 90vw"
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}
