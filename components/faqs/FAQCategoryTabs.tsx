"use client";

import { LayoutGroup, motion } from "framer-motion";
import { faqCategories, type FAQCategory } from "@/lib/faqs";
import { cn } from "@/lib/utils";

type FAQCategoryTabsProps = {
  active: FAQCategory;
  onChange: (category: FAQCategory) => void;
};

export function FAQCategoryTabs({ active, onChange }: FAQCategoryTabsProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[rgb(var(--background))] to-transparent md:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[rgb(var(--background))] to-transparent md:hidden" />

      <LayoutGroup id="faq-tabs">
        <div
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="FAQ categories"
        >
          {faqCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(cat)}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:px-5 sm:text-base",
                  isActive
                    ? "scale-[1.03] text-white"
                    : "border border-slate-200/70 bg-white/55 text-slate-600 backdrop-blur-md hover:border-brand-400/40 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="faq-tab-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}
