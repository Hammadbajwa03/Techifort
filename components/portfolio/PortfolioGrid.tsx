"use client";

import { AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { type PortfolioProject } from "@/lib/portfolio";

type PortfolioGridProps = {
  projects: PortfolioProject[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="glass-card mx-auto flex max-w-lg flex-col items-center px-6 py-14 text-center">
        <SearchX className="mb-3 h-10 w-10 text-brand-500" />
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          No projects match your filters
        </p>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Try another category or clear your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </AnimatePresence>
    </div>
  );
}
