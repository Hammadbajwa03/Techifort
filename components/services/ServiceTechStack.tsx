"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { type ServiceRecord } from "@/lib/services";

type ServiceTechStackProps = {
  service: ServiceRecord;
};

export function ServiceTechStack({ service }: ServiceTechStackProps) {
  const tools = service.techStack;
  if (!tools?.length) return null;

  return (
    <section className="section-padding relative overflow-hidden surface-muted section-grain">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">
            {service.techHeading ?? "Tech Stack"}
          </p>
          <h2 className="mt-3 section-heading">
            Tools we use for {service.title}
          </h2>
          <p className="section-subtext mx-auto">
            Proven platforms and technologies matched to this service — selected
            for reliability and fit, not hype.
          </p>
        </AnimateIn>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <AnimateIn key={tool} delay={Math.min(i * 0.03, 0.24)}>
              <span className="inline-flex items-center rounded-full border border-brand-500/25 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-800 shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow dark:border-brand-500/30 dark:bg-surface-card/70 dark:text-slate-100">
                {tool}
              </span>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
