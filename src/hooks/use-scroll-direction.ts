"use client";

import { useEffect, useState } from "react";

export interface ScrollState {
  /** Direction of the last significant scroll movement. */
  direction: "up" | "down";
  /** True once scrolled past the "shrink/glass" threshold. */
  scrolled: boolean;
  /** True while within a few px of the very top. */
  atTop: boolean;
}

/**
 * Tracks scroll direction + position, rAF-throttled. Only commits state when a
 * value actually changes (returns the previous object otherwise) so consumers
 * don't re-render on every scroll frame.
 */
export function useScrollDirection(threshold = 8): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: "up",
    scrolled: false,
    atTop: true,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = Math.max(window.scrollY, 0);
      const scrolled = y > 24;
      const atTop = y < 8;
      const diff = y - lastY;
      const direction =
        Math.abs(diff) >= threshold ? (diff > 0 ? "down" : "up") : undefined;
      if (direction) lastY = y;

      setState((prev) => {
        const next: ScrollState = {
          direction: direction ?? prev.direction,
          scrolled,
          atTop,
        };
        return prev.direction === next.direction &&
          prev.scrolled === next.scrolled &&
          prev.atTop === next.atTop
          ? prev
          : next;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
