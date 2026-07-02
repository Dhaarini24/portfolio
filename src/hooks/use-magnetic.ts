"use client";

import { useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { magnetic, springs } from "@/lib/design-tokens";
import { clamp } from "@/utils";

// Physics-based "pulled by magnet" pointer-following effect.
// Returns motion values to bind to a component's `style` and pointer handlers
// to spread onto the element — the element itself stays presentation-only.
export function useMagnetic<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springs.magnetic);
  const springY = useSpring(y, springs.magnetic);

  const onPointerMove = (event: PointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const bounds = el.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;
    const distance = Math.hypot(offsetX, offsetY);

    if (distance > magnetic.activationRadius) return;

    x.set(
      clamp(
        offsetX * magnetic.strength,
        -magnetic.maxDisplacement,
        magnetic.maxDisplacement,
      ),
    );
    y.set(
      clamp(
        offsetY * magnetic.strength,
        -magnetic.maxDisplacement,
        magnetic.maxDisplacement,
      ),
    );
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onPointerMove, onPointerLeave };
}
