"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { Toaster } from "sonner";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {/* `reducedMotion="user"` makes every Framer Motion animation honor the
          OS "reduce motion" setting without per-component checks. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
      <Toaster theme="dark" position="bottom-right" richColors closeButton />
    </NextThemesProvider>
  );
}
