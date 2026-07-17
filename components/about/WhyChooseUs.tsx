"use client";

import {
  Layers,
  MessageCircle,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Experienced, multi-disciplinary team",
    description:
      "Engineers, designers, and strategists who ship together — not in silos.",
    icon: Users,
  },
  {
    title: "End-to-end project ownership",
    description:
      "From discovery and design through deployment and ongoing support.",
    icon: Layers,
  },
  {
    title: "Transparent communication",
    description:
      "Clear timelines, honest updates, and no surprises along the way.",
    icon: MessageCircle,
  },
  {
    title: "Built for long-term growth",
    description:
      "Scalable architecture and maintainable code that grows with your business.",
    icon: Rocket,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden !pt-4">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why Techifort</p>
          <h2 className="mt-3 section-heading">Why Choose Us</h2>
          <p className="section-subtext mx-auto">
            What sets us apart when you need a partner who owns outcomes, not
            just deliverables.
          </p>
        </AnimateIn>

        <div className="section-stack grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateIn key={item.title} delay={Math.min(i * 0.07, 0.28)}>
                <div className="group relative h-full rounded-2xl border border-slate-200/70 bg-white/50 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-glow dark:border-white/10 dark:bg-white/5 sm:p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
