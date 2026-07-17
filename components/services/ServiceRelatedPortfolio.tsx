"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import {
  getRelatedPortfolio,
  type ServiceRecord,
} from "@/lib/services";

type ServiceRelatedPortfolioProps = {
  service: ServiceRecord;
};

export function ServiceRelatedPortfolio({
  service,
}: ServiceRelatedPortfolioProps) {
  const projects = getRelatedPortfolio(service, 3);
  const portfolioHref = `/portfolio?category=${encodeURIComponent(service.relatedPortfolioCategory)}`;

  return (
    <section className="section-padding relative overflow-hidden surface-muted section-grain">
      <div className="container-padded relative z-10">
        <AnimateIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Related Work</p>
            <h2 className="mt-3 section-heading">Projects in this space</h2>
            <p className="section-subtext">
              A sample of portfolio work tagged to{" "}
              {service.relatedPortfolioCategory.toLowerCase()} — review tags for
              accuracy as case studies grow.
            </p>
          </div>
          <Link
            href={portfolioHref}
            className="link-underline shrink-0 text-base font-semibold text-brand-600 dark:text-brand-400"
          >
            View all portfolio
          </Link>
        </AnimateIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
