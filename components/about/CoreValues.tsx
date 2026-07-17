"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Lightbulb,
  Scale,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const values: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Innovation",
    description:
      "Constantly exploring new technologies to deliver forward-thinking solutions.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description:
      "Transparent communication and honest partnerships with every client.",
    icon: Scale,
  },
  {
    title: "Quality",
    description:
      "Rigorous standards and attention to detail in everything we build.",
    icon: Sparkles,
  },
  {
    title: "Collaboration",
    description:
      "Working closely with clients as true partners, not just vendors.",
    icon: Handshake,
  },
];

export function CoreValues() {
  return (
    <section id="values" className="section-padding relative overflow-hidden">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Values</p>
          <h2 className="mt-3 section-heading">What Drives Us</h2>
          <p className="section-subtext mx-auto">
            The principles that shape how we design, build, and partner with
            every client.
          </p>
        </AnimateIn>

        <div className="section-stack grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i * 0.08, 0.32),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glass-card flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow sm:p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
