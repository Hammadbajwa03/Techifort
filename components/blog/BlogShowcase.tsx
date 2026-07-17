"use client";

import { AnimatePresence } from "framer-motion";
import { Loader2, SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilterBar } from "@/components/blog/BlogFilterBar";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import {
  blogFilters,
  blogPostsData,
  getFeaturedPost,
  type BlogFilter,
} from "@/lib/blog";

const PAGE_SIZE = 6;

export function BlogShowcase() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialFilter: BlogFilter =
    categoryParam &&
    blogFilters.includes(categoryParam as BlogFilter) &&
    categoryParam !== "All"
      ? (categoryParam as BlogFilter)
      : "All";

  const [filter, setFilter] = useState<BlogFilter>(initialFilter);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setFilter(initialFilter);
    setVisibleCount(PAGE_SIZE);
  }, [initialFilter]);

  const featured = getFeaturedPost();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPostsData
      .filter((post) => {
        if (featured && post.slug === featured.slug && filter === "All" && !q) {
          // Keep featured in grid too when browsing all — or exclude? Spec says featured at top, grid below. Exclude featured from grid when All to avoid duplicate.
          return false;
        }
        const matchesFilter =
          filter === "All" || post.category === filter;
        if (!matchesFilter) return false;
        if (!q) return true;
        return (
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => b.dateSort.localeCompare(a.dateSort));
  }, [filter, query, featured]);

  // When filtering/searching, include featured post in results if it matches
  const gridPosts = useMemo(() => {
    if (filter !== "All" || query.trim()) {
      return blogPostsData
        .filter((post) => {
          const matchesFilter =
            filter === "All" || post.category === filter;
          if (!matchesFilter) return false;
          const q = query.trim().toLowerCase();
          if (!q) return true;
          return (
            post.title.toLowerCase().includes(q) ||
            post.excerpt.toLowerCase().includes(q)
          );
        })
        .sort((a, b) => b.dateSort.localeCompare(a.dateSort));
    }
    return filtered;
  }, [filter, query, filtered]);

  const visible = gridPosts.slice(0, visibleCount);
  const hasMore = visibleCount < gridPosts.length;

  const onFilterChange = (next: BlogFilter) => {
    setFilter(next);
    setVisibleCount(PAGE_SIZE);
  };

  const onQueryChange = (next: string) => {
    setQuery(next);
    setVisibleCount(PAGE_SIZE);
  };

  const loadMore = async () => {
    setLoadingMore(true);
    await new Promise((r) => setTimeout(r, 500));
    setVisibleCount((c) => c + PAGE_SIZE);
    setLoadingMore(false);
  };

  const showFeatured = filter === "All" && !query.trim() && featured;

  return (
    <section className="section-padding relative overflow-hidden !pt-10">
      <div className="container-padded relative z-10">
        {showFeatured && (
          <div className="mb-12">
            <FeaturedPost post={featured} />
          </div>
        )}

        <AnimateIn>
          <BlogFilterBar
            filter={filter}
            onFilterChange={onFilterChange}
            query={query}
            onQueryChange={onQueryChange}
          />
        </AnimateIn>

        <div className="mt-10">
          {visible.length === 0 ? (
            <div className="glass-card mx-auto flex max-w-lg flex-col items-center px-6 py-14 text-center">
              <SearchX className="mb-3 h-10 w-10 text-brand-500" />
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                No articles found
              </p>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                Try another category or clear your search.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={loadMore}
              disabled={loadingMore}
              className="btn-outline"
            >
              {loadingMore ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading…
                </>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
