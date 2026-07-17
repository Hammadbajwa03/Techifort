"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type PortfolioProject } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: PortfolioProject;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{
        layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
        delay: Math.min(index * 0.04, 0.2),
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/40 shadow-soft backdrop-blur-sm",
        "transition-shadow duration-300 hover:-translate-y-1 hover:border-brand-500/45 hover:shadow-glow",
        "dark:border-slate-700/50 dark:bg-surface-card/60 dark:shadow-none"
      )}
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-brand-600/90 px-2.5 py-0.5 text-xs font-medium text-white"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              {project.title}
            </h3>
            <span className="mt-2 inline-flex items-center gap-1 text-base font-medium text-brand-200 transition group-hover:text-white sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              View Project <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
