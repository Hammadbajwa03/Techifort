"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { serviceIconMap } from "@/components/services/serviceIcons";
import { type ServiceRecord } from "@/lib/services";

type ServiceWhyUsProps = {
  service: ServiceRecord;
};

export function ServiceWhyUs({ service }: ServiceWhyUsProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why Techifort</p>
          <h2 className="mt-3 section-heading">
            Why choose us for {service.title}
          </h2>
          <p className="section-subtext mx-auto">
            Differentiators that matter when you are choosing a partner — not
            just a vendor.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {service.whyUs.map((item, i) => {
            const Icon = serviceIconMap[item.icon] ?? serviceIconMap.Sparkles;
            return (
              <AnimateIn key={item.title} delay={Math.min(i * 0.06, 0.28)}>
                <div className="glass-card flex gap-4 p-5 transition hover:border-brand-500/45 hover:shadow-glow sm:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
