"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { blogCategoryStyles, type BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

type FeaturedPostProps = {
  post: BlogPost;
};

export function FeaturedPost({ post }: FeaturedPostProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const styles = blogCategoryStyles[post.category];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 shadow-soft dark:border-slate-700/50"
    >
      <div className="relative aspect-[16/10] min-h-[280px] overflow-hidden sm:aspect-[21/9]">
        <motion.div
          className="absolute inset-[-10%]"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-brand-950/35" />

        <div className="absolute inset-0 flex items-end p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <span
              className={cn(
                "inline-block rounded-full px-3 py-1 text-sm font-semibold",
                styles.badge
              )}
            >
              {post.category}
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {post.title}
            </h2>
            <p className="mt-3 text-base text-slate-200 sm:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span>{post.author.name}</span>
              <span className="opacity-50">·</span>
              <time>{post.date}</time>
              <span className="opacity-50">·</span>
              <span>{post.readTime}</span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="btn-primary mt-6"
            >
              Read Article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
