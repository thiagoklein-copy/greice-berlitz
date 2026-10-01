"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ParallaxImage({
  src,
  alt,
  objectPosition = "50% 50%",
  className = "",
  priority = false,
  sizes = "100vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -bottom-[12%] -top-[12%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}
