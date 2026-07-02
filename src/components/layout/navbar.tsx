"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/constants";
import { useActiveSection, useScrollDirection } from "@/hooks";
import { scrollToSection, scrollToTop } from "@/lib/scroll";
import { durations, easings } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { NavItem } from "./nav-item";
import { MenuToggle } from "./menu-toggle";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Section ids are derived from the nav data — never hardcoded.
  const sectionIds = useMemo(() => navLinks.map((l) => l.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);
  // Navbar stays fixed and always visible; `scrolled` only toggles the glass shell.
  const { scrolled } = useScrollDirection();

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: durations.moderate, ease: easings.premium }}
        className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6"
      >
        {/* Same Container as every section, so the bar aligns edge-to-edge with
            the page content. */}
        <Container>
          <nav
            aria-label="Primary"
            className={cn(
              "flex w-full items-center justify-between gap-4 rounded-full border px-5 py-3 transition-all duration-500",
              scrolled
                ? "nav-glow glass border-white/10"
                : "border-transparent bg-transparent",
            )}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              aria-label="Dhaarini K N Hathwar — back to top"
              className="font-heading text-gradient focus-visible:ring-ring rounded-full text-lg font-bold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
            >
              DKNH
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <NavItem item={item} isActive={activeId === item.href.slice(1)} />
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="gradient-bg-animated text-primary-foreground shadow-glow-primary focus-visible:ring-ring focus-visible:ring-offset-background group inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Get in Touch
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden">
              <MenuToggle isOpen={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
            </div>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={navLinks}
        activeId={activeId}
      />
    </>
  );
}
