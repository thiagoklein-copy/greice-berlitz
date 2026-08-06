"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex items-center">
      {/* Caps suaves nas pontas — remete ao loop do ∞ */}
      <span
        className="absolute left-0 top-0 h-[3px] w-1.5 rounded-full bg-gold"
        aria-hidden="true"
      />
      <motion.div
        className="h-[2px] w-full origin-left bg-gold"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <span
        className="absolute right-0 top-0 h-[3px] w-1.5 rounded-full bg-gold opacity-80"
        aria-hidden="true"
      />
    </div>
  );
}
