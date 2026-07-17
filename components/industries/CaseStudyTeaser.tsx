"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { industryCaseStudies } from "@/lib/industries";

export function CaseStudyTeaser() {
  return (
    <section className="section-padding relative overflow-hidden !pt-4">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">See it in action</p>
          <h2 className="mt-3 section-heading">Featured work by industry</h2>
          <p className="section-subtext mx-auto">
            A few examples of how we translate sector expertise into shipped
            products.
          </p>
        </AnimateIn>

        <div className="section-stack grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industryCaseStudies.map((item, i) => (
            <AnimateIn key={item.title} delay={Math.min(i * 0.08, 0.24)}>
              <Link
                href={item.href}
                className="group glass-card block overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 90vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-2.5 py-0.5 text-sm font-medium text-white">
                    {item.industry}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-brand-400" />
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
