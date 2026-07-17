"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimateIn } from "@/components/AnimateIn";
import { PortfolioFilterBar } from "@/components/portfolio/PortfolioFilterBar";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import {
  portfolioFilters,
  portfolioProjects,
  type PortfolioFilter,
} from "@/lib/portfolio";

function PortfolioShowcaseInner() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialFilter = ((): PortfolioFilter => {
    if (
      categoryParam &&
      portfolioFilters.includes(categoryParam as PortfolioFilter)
    ) {
      return categoryParam as PortfolioFilter;
    }
    return "All";
  })();

  const [filter, setFilter] = useState<PortfolioFilter>(initialFilter);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (
      categoryParam &&
      portfolioFilters.includes(categoryParam as PortfolioFilter)
    ) {
      setFilter(categoryParam as PortfolioFilter);
    }
  }, [categoryParam]);

  const projects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return portfolioProjects.filter((project) => {
      const matchesFilter =
        filter === "All" || project.categories.includes(filter);
      if (!matchesFilter) return false;
      if (!q) return true;
      return (
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.categories.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  return (
    <section className="section-padding relative overflow-hidden !pt-8">
      <div className="container-padded relative z-10">
        <AnimateIn>
          <PortfolioFilterBar
            filter={filter}
            onFilterChange={setFilter}
            query={query}
            onQueryChange={setQuery}
          />
        </AnimateIn>

        <div className="mt-10">
          <PortfolioGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}

export function PortfolioShowcase() {
  return (
    <Suspense
      fallback={
        <section className="section-padding relative overflow-hidden !pt-8">
          <div className="container-padded relative z-10">
            <div className="h-40 animate-pulse rounded-2xl bg-slate-200/50 dark:bg-slate-800/40" />
          </div>
        </section>
      }
    >
      <PortfolioShowcaseInner />
    </Suspense>
  );
}
