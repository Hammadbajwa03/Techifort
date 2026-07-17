"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Subtle background drift vs foreground content on scroll */
export function ParallaxSection({
  children,
  className,
  id,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} id={id} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl dark:bg-brand-500/15"
        aria-hidden
      />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-600/10"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
