"use client";

import { Eye, Target } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const cards = [
  {
    title: "Our Mission",
    icon: Target,
    body: "Our mission is to drive digital transformation by providing top-tier software solutions that are scalable, secure, and user-friendly. We strive to be a trusted partner for businesses looking to leverage technology to achieve their goals. Whether you are a startup or a large enterprise, our team is equipped to handle projects of all sizes with the same level of dedication and professionalism.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    body: "At Techifort, we envision a future where businesses of all sizes can seamlessly integrate advanced technologies into their operations. We aim to be at the forefront of technological innovation, continuously evolving and adapting to the latest industry trends to provide our clients with the best possible solutions.",
  },
] as const;

export function MissionVision() {
  return (
    <section className="section-padding relative overflow-hidden !pt-0">
      <div className="container-padded relative z-10">
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimateIn key={card.title} delay={i * 0.08}>
                <article className="group glass-card h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {card.body}
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
