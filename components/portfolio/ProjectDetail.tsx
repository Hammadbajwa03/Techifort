"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getAdjacentProjects,
  type PortfolioProject,
} from "@/lib/portfolio";

type ProjectDetailProps = {
  project: PortfolioProject;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { prev, next } = getAdjacentProjects(project.slug);
  const image = project.gallery[galleryIndex] ?? project.cover;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="relative h-[42vh] min-h-[280px] w-full sm:h-[50vh]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/55 to-brand-950/30" />
          <div className="container-padded absolute inset-x-0 bottom-0 z-10 pb-10 sm:pb-12">
            <Link
              href="/portfolio"
              className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-white sm:text-base"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            <div className="mb-3 flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-brand-600 px-3 py-1 text-sm font-medium text-white"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-200 sm:text-lg">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      <div className="container-padded relative z-10 py-14 sm:py-16">
        {/* Overview */}
        <AnimateIn>
          <div className="glass-card grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {(
              [
                ["Client", project.overview.client],
                ["Industry", project.overview.industry],
                ["Services", project.overview.services],
                ["Timeline", project.overview.timeline],
              ] as const
            ).map(([label, value]) => (
              <div key={label}>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {label}
                </p>
                <p className="mt-1.5 text-base text-slate-700 dark:text-slate-300">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
            Overview fields are placeholders — replace with real client details.
          </p>
        </AnimateIn>

        {/* Challenge / Solution / Result */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {(
            [
              ["Challenge", project.challenge],
              ["Solution", project.solution],
              ["Result", project.result],
            ] as const
          ).map(([title, body], i) => (
            <AnimateIn key={title} delay={i * 0.06}>
              <article className="glass-card h-full p-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {body}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Challenge / Solution / Result copy is placeholder narrative — replace
          with real case-study writing.
        </p>

        {/* Gallery */}
        <AnimateIn className="mt-14">
          <h2 className="section-heading !text-3xl sm:!text-4xl">Gallery</h2>
          <p className="mt-2 text-sm text-slate-500">
            Gallery images are Unsplash placeholders — swap for real screenshots
            later.
          </p>
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/50">
            <div className="relative aspect-[16/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={image}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.4 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${galleryIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1100px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {project.gallery.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() =>
                    setGalleryIndex(
                      (i) =>
                        (i - 1 + project.gallery.length) % project.gallery.length
                    )
                  }
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-brand-950/60 text-white backdrop-blur-md transition hover:bg-brand-950/80"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() =>
                    setGalleryIndex((i) => (i + 1) % project.gallery.length)
                  }
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-brand-950/60 text-white backdrop-blur-md transition hover:bg-brand-950/80"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          <div className="mt-3 flex justify-center gap-2">
            {project.gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setGalleryIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === galleryIndex
                    ? "w-7 bg-brand-600"
                    : "w-2.5 bg-slate-300 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </AnimateIn>

        {/* Tech stack */}
        <AnimateIn className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Tech stack
          </h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft backdrop-blur-sm transition hover:border-brand-400/50 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimateIn>

        {/* Prev / Next */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {prev && (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group glass-card flex items-center gap-3 p-5 transition hover:border-brand-500/45 hover:shadow-glow"
            >
              <ArrowLeft className="h-5 w-5 text-brand-600 transition group-hover:-translate-x-1 dark:text-brand-400" />
              <div>
                <p className="text-sm text-slate-500">Previous project</p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {prev.title}
                </p>
              </div>
            </Link>
          )}
          {next && (
            <Link
              href={`/portfolio/${next.slug}`}
              className="group glass-card flex items-center justify-end gap-3 p-5 text-right transition hover:border-brand-500/45 hover:shadow-glow sm:col-start-2"
            >
              <div>
                <p className="text-sm text-slate-500">Next project</p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-brand-600 transition group-hover:translate-x-1 dark:text-brand-400" />
            </Link>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding !pt-8">
        <div className="absolute inset-0 bg-brand-gradient" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 40%), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)",
          }}
          aria-hidden
        />
        <div className="container-padded relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a similar project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-brand-100 sm:text-lg">
            Let&apos;s talk about goals, timeline, and the right way to ship it.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-brand-600 shadow-glow transition hover:scale-[1.02] hover:bg-brand-50"
          >
            Get A Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
