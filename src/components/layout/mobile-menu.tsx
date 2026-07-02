"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { NavItem } from "@/types";
import { socialLinks } from "@/constants";
import { scrollToSection } from "@/lib/scroll";
import { ResumeButton, SocialIconLink } from "@/components/shared";
import { easings } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string | null;
}

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { ease: easings.premium, duration: 0.4 } },
};

export function MobileMenu({ isOpen, onClose, items, activeId }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll, handle Escape, trap focus, and restore focus on close.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Focus the first link once the panel has mounted.
    const focusTimer = window.setTimeout(() => getFocusable()[0]?.focus(), 60);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  const handleNavigate = (href: string) => {
    scrollToSection(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Backdrop */}
          <motion.div
            className="bg-background/60 absolute inset-0 backdrop-blur-sm"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="glass absolute inset-y-0 right-0 flex w-full max-w-sm flex-col gap-8 border-l border-white/10 px-8 pt-28 pb-10"
            variants={{
              open: { x: 0 },
              closed: { x: "100%" },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
          >
            <motion.nav aria-label="Mobile" variants={listVariants}>
              <ul className="flex flex-col gap-2">
                {items.map((item) => {
                  const isActive = activeId === item.href.slice(1);
                  return (
                    <motion.li key={item.href} variants={itemVariants}>
                      <a
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.href);
                        }}
                        className={cn(
                          "font-heading focus-visible:ring-ring block rounded-lg py-2 text-2xl font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none",
                          isActive
                            ? "text-gradient"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>

            <motion.div variants={itemVariants} className="mt-auto flex flex-col gap-6">
              <ResumeButton fullWidth />
              <div className="flex items-center gap-2">
                {socialLinks
                  .filter((s) => s.label !== "Email")
                  .map((s) => (
                    <SocialIconLink key={s.label} {...s} />
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
