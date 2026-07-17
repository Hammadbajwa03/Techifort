"use client";

import { LayoutGroup, motion } from "framer-motion";
import { Search } from "lucide-react";
import { blogFilters, type BlogFilter } from "@/lib/blog";
import { cn } from "@/lib/utils";

type BlogFilterBarProps = {
  filter: BlogFilter;
  onFilterChange: (filter: BlogFilter) => void;
  query: string;
  onQueryChange: (query: string) => void;
};

export function BlogFilterBar({
  filter,
  onFilterChange,
  query,
  onQueryChange,
}: BlogFilterBarProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative min-w-0 flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[rgb(var(--background))] to-transparent md:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[rgb(var(--background))] to-transparent md:hidden" />

        <LayoutGroup id="blog-tabs">
          <div
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Blog categories"
          >
            {blogFilters.map((tab) => {
              const isActive = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onFilterChange(tab)}
                  className={cn(
                    "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:text-base",
                    isActive
                      ? "scale-[1.03] text-white"
                      : "border border-slate-200/70 bg-white/55 text-slate-600 backdrop-blur-md hover:border-brand-400/40 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="blog-tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 shadow-glow"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {tab}
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      <div className="relative w-full lg:max-w-xs">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search articles…"
          aria-label="Search blog posts"
          className="h-11 w-full rounded-xl border border-slate-200/80 bg-white/70 pl-10 pr-3 text-base text-slate-900 outline-none backdrop-blur-md transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
        />
      </div>
    </div>
  );
}
