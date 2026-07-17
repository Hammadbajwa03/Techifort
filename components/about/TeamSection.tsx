"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { teamMembers } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TeamSection() {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-[min(90%,36rem)] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/25"
        aria-hidden
      />

      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Team</p>
          <h2 className="mt-3 section-heading">Meet the people behind Techifort</h2>
          <p className="section-subtext mx-auto">
            Passionate professionals across engineering, design, and delivery —
            collaborating to ship products that exceed expectations.
          </p>
        </AnimateIn>

        <div className="section-stack grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.06, 0.4),
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 text-center shadow-soft backdrop-blur-sm",
                "transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow",
                "dark:border-slate-700/50 dark:bg-surface-card/80 dark:shadow-none"
              )}
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-glow ring-4 ring-brand-500/20 transition duration-300 group-hover:scale-105 group-hover:ring-brand-400/40">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-base text-brand-600 dark:text-brand-400">
                {member.role}
              </p>

              <div className="mt-5 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-brand-600"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-brand-600"
                  aria-label={`${member.name} on X`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
