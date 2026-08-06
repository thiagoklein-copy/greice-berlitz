"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Easing com ida-e-volta suave (lembra o traço do ∞) */
const infinityEase: [number, number, number, number] = [0.65, 0, 0.35, 1];

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 14, scale: 0.992 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.996 }}
        transition={{ duration: 0.55, ease: infinityEase }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
