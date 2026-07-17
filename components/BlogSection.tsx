"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { blogPosts } from "@/lib/blog";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="section-padding surface-muted section-grain section-mesh"
    >
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Blog</p>
          <h2 className="mt-3 section-heading">Insights & ideas</h2>
          <p className="section-subtext mx-auto">
            Practical writing on development, consulting, and building products
            that last.
          </p>
        </AnimateIn>

        <div className="section-stack grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <AnimateIn key={post.slug} delay={Math.min(i * 0.06, 0.24)}>
              <article className="group glass-card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-2.5 py-0.5 text-sm font-semibold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-slate-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-base text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-brand-600 transition hover:gap-2 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-10 text-center">
          <Link href="/blog" className="btn-outline">
            View all articles
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
