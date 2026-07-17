"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { serviceIconMap } from "@/components/services/serviceIcons";
import { type ServiceRecord } from "@/lib/services";

type ServiceFeaturesProps = {
  service: ServiceRecord;
};

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="section-padding relative overflow-hidden surface-muted section-grain">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">What&apos;s Included</p>
          <h2 className="mt-3 section-heading">
            Capabilities inside {service.title}
          </h2>
          <p className="section-subtext mx-auto">
            Concrete offerings you can mix into a scoped engagement — tailored
            to your goals and timeline.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, i) => {
            const Icon =
              serviceIconMap[feature.icon] ?? serviceIconMap.Sparkles;
            return (
              <AnimateIn key={feature.title} delay={Math.min(i * 0.05, 0.3)}>
                <article className="glass-card group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow sm:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
