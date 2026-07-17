"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { serviceIconMap } from "@/components/services/serviceIcons";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const FEATURED_SLUG = "ai-solutions";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative surface-muted section-grain"
    >
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="mt-3 section-heading">
            Solutions built for modern businesses
          </h2>
          <p className="section-subtext mx-auto">
            From product engineering to growth marketing — a full suite of
            digital services under one roof.
          </p>
        </AnimateIn>

        <div className="section-stack grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon] ?? serviceIconMap.Code2;
            const featured = service.slug === FEATURED_SLUG;

            const card = (
              <article
                className={cn(
                  "group flex h-full flex-col transition-all duration-300",
                  featured
                    ? "featured-service-inner hover:-translate-y-1.5"
                    : "glass-card p-5 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow sm:p-6"
                )}
              >
                {featured && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                    Featured
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
                <Link
                  href={`/service/${service.slug}`}
                  className="link-underline mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-brand-600 dark:text-brand-400"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            );

            return (
              <AnimateIn
                key={service.slug}
                delay={Math.min(i * 0.04, 0.28)}
              >
                {featured ? (
                  <div className="featured-service h-full">{card}</div>
                ) : (
                  card
                )}
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn className="mt-10 text-center">
          <Link
            href="/services"
            className="btn-primary inline-flex"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
