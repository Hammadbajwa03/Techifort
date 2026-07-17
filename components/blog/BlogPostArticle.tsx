"use client";

import {
  ArrowRight,
  Check,
  Facebook,
  Link2,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPostTOC } from "@/components/blog/BlogPostTOC";
import {
  blogCategoryStyles,
  getRelatedPosts,
  type BlogPost,
} from "@/lib/blog";
import { cn } from "@/lib/utils";

type BlogPostArticleProps = {
  post: BlogPost;
};

export function BlogPostArticle({ post }: BlogPostArticleProps) {
  const [copied, setCopied] = useState(false);
  const styles = blogCategoryStyles[post.category];
  const related = getRelatedPosts(post.slug);
  const tocItems = post.body
    .filter((b): b is Extract<typeof b, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id, title: b.text }));

  const shareUrl = `https://techifort.com/blog/${post.slug}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: Linkedin,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: Facebook,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      icon: Twitter,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="relative h-[40vh] min-h-[260px] w-full sm:h-[48vh]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/60 to-brand-950/25" />
          <div className="container-padded absolute inset-x-0 bottom-0 z-10 pb-10 sm:pb-12">
            <Link
              href="/blog"
              className="mb-4 inline-block text-sm font-medium text-white/70 transition hover:text-white"
            >
              ← Back to Blog
            </Link>
            <span
              className={cn(
                "inline-block rounded-full px-3 py-1 text-sm font-semibold",
                styles.badge
              )}
            >
              {post.category}
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="text-sm text-slate-200 sm:text-base">
                <span className="font-semibold text-white">
                  {post.author.name}
                </span>
                <span className="mx-2 opacity-50">·</span>
                <time>{post.date}</time>
                <span className="mx-2 opacity-50">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share — mobile */}
      <div className="container-padded mt-6 flex gap-2 lg:hidden">
        {shareLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-brand-400"
            aria-label={`Share on ${label}`}
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-brand-400"
          aria-label="Copy link"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
      </div>

      <div className="container-padded relative z-10 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,720px)_56px] lg:justify-center xl:grid-cols-[240px_minmax(0,720px)_56px]">
          <BlogPostTOC items={tocItems} />

          <article className="legal-prose min-w-0">
            <p className="mb-6 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
              Article body below is placeholder copy for layout review —
              replace with final writing later.
            </p>

            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={block.id}
                    id={block.id}
                    className="mb-4 mt-10 scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 first:mt-0 dark:text-white"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="my-6 border-l-4 border-brand-500 bg-brand-600/5 py-3 pl-5 pr-4 text-[16.5px] italic leading-[1.75] text-slate-700 dark:text-slate-300"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              return (
                <p key={i} className="legal-body mb-4">
                  {block.text}
                </p>
              );
            })}

            {/* Author bio */}
            <div className="mt-12 glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-4 ring-brand-500/20">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                  {post.author.role}
                </p>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </article>

          {/* Share — desktop sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-2">
              {shareLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-brand-600 shadow-soft transition hover:border-brand-400/50 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-brand-400"
                  aria-label={`Share on ${label}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <button
                type="button"
                onClick={copyLink}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-brand-600 shadow-soft transition hover:border-brand-400/50 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-brand-400"
                aria-label="Copy link"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Link2 className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <AnimateIn>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Related Articles
              </h2>
            </AnimateIn>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <BlogCard key={item.slug} post={item} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding !pt-4">
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
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-brand-100 sm:text-lg">
            Tell us what you&apos;re building — we&apos;ll help you map the
            next step.
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
