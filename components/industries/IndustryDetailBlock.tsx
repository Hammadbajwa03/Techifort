"use client";

import { Check } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { industryIconMap } from "@/components/industries/industryIcons";
import { type IndustryRecord } from "@/lib/industries";
import { cn } from "@/lib/utils";

type IndustryDetailBlockProps = {
  industry: IndustryRecord;
  index: number;
};

export function IndustryDetailBlock({
  industry,
  index,
}: IndustryDetailBlockProps) {
  const Icon = industryIconMap[industry.icon] ?? industryIconMap.Cpu;
  const reverse = index % 2 === 1;

  return (
    <section
      id={`industry-${industry.slug}`}
      className="scroll-mt-36 py-10 sm:scroll-mt-40 sm:py-14"
    >
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <AnimateIn direction={reverse ? "right" : "left"}>
          <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-[12%] rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/30"
              aria-hidden
            />
            <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-brand-500/25 bg-white/70 shadow-soft backdrop-blur-md dark:border-brand-400/25 dark:bg-white/5 sm:h-52 sm:w-52">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-400/15 via-transparent to-transparent" />
              <Icon className="relative h-16 w-16 text-brand-600 dark:text-brand-400 sm:h-20 sm:w-20" />
              <span className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-glow">
                {industry.id}
              </span>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn direction={reverse ? "left" : "right"} delay={0.08}>
          <article className="glass-card p-6 sm:p-8">
            <p className="section-eyebrow">{industry.title}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {industry.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {industry.description}
            </p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              What we build
            </h3>
            <ul className="mt-3 space-y-2.5">
              {industry.whatWeBuild.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-base text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-600 dark:text-brand-400">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </AnimateIn>
      </div>
    </section>
  );
}
