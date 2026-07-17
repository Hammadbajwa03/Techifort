"use client";

import { motion, useInView } from "framer-motion";
import {
  Map,
  MessageSquare,
  Search,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { processSteps } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Search,
  MessageSquare,
  Map,
  Trophy,
};

export function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, amount: 0.35 });

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden surface-muted section-grain"
    >
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Process</p>
          <h2 className="mt-3 section-heading">How we make work successful</h2>
          <p className="section-subtext mx-auto">
            A clear four-step path from insight to impact — designed for clarity
            and delivery.
          </p>
        </AnimateIn>

        <div ref={lineRef} className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-0.5 bg-slate-200 lg:block dark:bg-slate-700">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-brand-600 to-brand-400"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Search;
              return (
                <AnimateIn key={step.title} delay={Math.min(i * 0.08, 0.28)}>
                  <div className="relative text-center lg:text-left">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center lg:mx-0">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/30 bg-white shadow-soft transition hover:border-brand-500/60 hover:shadow-glow dark:bg-surface-card">
                        <Icon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white shadow-glow">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
