"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { industryStats } from "@/lib/industries";
import { cn } from "@/lib/utils";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 55, damping: 22 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function IndustryStats() {
  return (
    <section className="section-padding relative overflow-hidden !pt-6">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto mb-8 max-w-2xl text-center">
          <p className="section-eyebrow">Why industries trust us</p>
          <h2 className="mt-3 section-heading">Proof across sectors</h2>
        </AnimateIn>

        <div className="glass-card grid grid-cols-2 gap-2 p-4 sm:gap-0 sm:p-6 lg:grid-cols-4">
          {industryStats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={Math.min(i * 0.06, 0.24)}>
              <div
                className={cn(
                  "relative px-3 py-5 text-center sm:px-4",
                  i > 0 &&
                    "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-12 lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-slate-200 dark:lg:before:bg-slate-700"
                )}
              >
                <p className="text-3xl font-bold tracking-tight text-brand-600 dark:text-brand-400 sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400 sm:text-base">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
