"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { industriesPageData } from "@/lib/industries";
import { cn } from "@/lib/utils";

export function IndustryQuickJump() {
  const [active, setActive] = useState(industriesPageData[0]?.slug ?? "");

  useEffect(() => {
    const sections = industriesPageData
      .map((item) => document.getElementById(`industry-${item.slug}`))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id.replace("industry-", ""));
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (slug: string) => {
    const el = document.getElementById(`industry-${slug}`);
    if (!el) return;
    const offset = 120;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(slug);
  };

  return (
    <div className="sticky top-16 z-40 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-brand-950/80 lg:top-20">
      <div className="container-padded relative py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white/90 to-transparent dark:from-brand-950/90 sm:w-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white/90 to-transparent dark:from-brand-950/90 sm:w-10" />

        <LayoutGroup id="industry-jump">
          <div
            className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="navigation"
            aria-label="Jump to industry"
          >
            {industriesPageData.map((item) => {
              const isActive = active === item.slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => scrollTo(item.slug)}
                  className={cn(
                    "relative shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition-all sm:px-4",
                    isActive
                      ? "text-white"
                      : "border border-slate-200/70 bg-white/50 text-slate-600 hover:border-brand-400/40 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-jump-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 shadow-glow"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
}
