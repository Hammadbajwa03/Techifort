"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { serviceIconMap } from "@/components/services/serviceIcons";
import { type ServiceRecord } from "@/lib/services";
import { cn } from "@/lib/utils";

type ServiceOverviewProps = {
  service: ServiceRecord;
};

function OverviewAccent({
  visual,
  iconName,
}: {
  visual?: ServiceRecord["accentVisual"];
  iconName: string;
}) {
  const Icon = serviceIconMap[iconName] ?? serviceIconMap.Code2;

  return (
    <div
      className={cn(
        "relative mx-auto flex aspect-square w-full max-w-md items-center justify-center",
        "rounded-3xl border border-brand-500/25 bg-gradient-to-br from-brand-600/10 via-transparent to-brand-400/5",
        "shadow-soft dark:border-brand-500/20 dark:from-brand-600/20"
      )}
      aria-hidden
    >
      {(visual === "orbit" || visual === "neural") && (
        <>
          <span className="absolute inset-[12%] animate-[orbit_28s_linear_infinite] rounded-full border border-brand-400/30" />
          <span className="absolute inset-[4%] animate-[orbit-reverse_40s_linear_infinite] rounded-full border border-dashed border-brand-300/25" />
          <span className="absolute inset-[22%] animate-[orbit_18s_linear_infinite] rounded-full border border-brand-500/20" />
        </>
      )}
      {visual === "neural" && (
        <>
          <span className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-brand-400/80 shadow-glow" />
          <span className="absolute right-[24%] top-[34%] h-2 w-2 rounded-full bg-brand-300/70" />
          <span className="absolute bottom-[30%] left-[30%] h-2.5 w-2.5 rounded-full bg-brand-500/70 shadow-glow" />
          <span className="absolute bottom-[26%] right-[28%] h-1.5 w-1.5 rounded-full bg-brand-200/80" />
          <span className="absolute left-[38%] top-[48%] h-px w-[24%] -rotate-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          <span className="absolute right-[36%] top-[52%] h-px w-[22%] rotate-12 bg-gradient-to-l from-brand-300/40 to-transparent" />
        </>
      )}
      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-brand-500/40 bg-white/80 text-brand-600 shadow-glow backdrop-blur-sm dark:bg-surface-card/90 dark:text-brand-400">
        <Icon className="h-12 w-12" />
      </div>
    </div>
  );
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-padded relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <AnimateIn>
              <p className="section-eyebrow">Overview</p>
              <h2 className="mt-3 section-heading">
                What {service.title} looks like with Techifort
              </h2>
            </AnimateIn>
            <div className="mt-6 space-y-4">
              {service.overview.map((paragraph, i) => (
                <AnimateIn key={i} delay={Math.min(0.06 + i * 0.06, 0.28)}>
                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))}
            </div>
          </div>

          <AnimateIn delay={0.12} direction="right">
            <OverviewAccent
              visual={service.accentVisual}
              iconName={service.icon}
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
