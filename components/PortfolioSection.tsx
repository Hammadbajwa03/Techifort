"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { ParallaxSection } from "@/components/ParallaxSection";
import {
  portfolioFilters,
  portfolioProjects,
  type PortfolioFilter,
} from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [filter, setFilter] = useState<PortfolioFilter>("All");

  const items = useMemo(
    () =>
      filter === "All"
        ? portfolioProjects
        : portfolioProjects.filter((item) =>
            item.categories.includes(filter)
          ),
    [filter]
  );

  return (
    <ParallaxSection id="portfolio" className="section-padding section-grain">
      <div className="container-padded">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="mt-3 section-heading">Work that speaks for itself</h2>
          <p className="section-subtext mx-auto">
            A selection of projects across development, consulting, finance, and
            branding.
          </p>
        </AnimateIn>

        <LayoutGroup>
          <div className="section-stack flex flex-wrap items-center justify-center gap-2">
            {portfolioFilters.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-base font-medium transition-colors",
                  filter === tab
                    ? "text-white"
                    : "text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                )}
              >
                {filter === tab && (
                  <motion.span
                    layoutId="portfolio-tab"
                    className="absolute inset-0 rounded-full bg-brand-600 shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.article
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="inline-block rounded-full bg-brand-600 px-2.5 py-0.5 text-sm font-medium text-white">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="mt-2 inline-flex items-center gap-1 text-base font-medium text-brand-300 transition hover:text-brand-200 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <AnimateIn className="mt-10 text-center">
          <Link href="/portfolio" className="btn-outline">
            View More
          </Link>
        </AnimateIn>
      </div>
    </ParallaxSection>
  );
}
