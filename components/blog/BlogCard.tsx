"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  blogCategoryStyles,
  type BlogPost,
} from "@/lib/blog";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  index?: number;
};

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const styles = blogCategoryStyles[post.category];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{
        layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        duration: 0.35,
        delay: Math.min(index * 0.05, 0.25),
      }}
      className="group glass-card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/45 hover:shadow-glow"
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-2.5 py-0.5 text-sm font-semibold",
              styles.badge
            )}
          >
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-slate-900 dark:text-white">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-base text-slate-600 dark:text-slate-400">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-slate-200/70 pt-4 dark:border-slate-700/50">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-brand-500/20">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                {post.author.name}
              </p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                {post.date} · {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
