"use client";

import type { MouseEvent } from "react";
import { navLinks } from "@/constants";
import { scrollToSection } from "@/lib/scroll";

// Footer navigation, rendered dynamically from the shared nav data.
export function FooterLinks() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <ul className="flex flex-col gap-2.5">
      {navLinks.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1.5 rounded text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <span className="bg-accent-400/60 h-px w-3 transition-all duration-300 group-hover:w-4" />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
