"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { type FAQItem } from "@/lib/faqs";
import { cn } from "@/lib/utils";

type FAQAccordionListProps = {
  items: FAQItem[];
};

export function FAQAccordionList({ items }: FAQAccordionListProps) {
  // Single-open accordion: only one FAQ expanded at a time
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card mx-auto flex max-w-xl flex-col items-center px-6 py-12 text-center"
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 dark:text-brand-400">
          <HelpCircle className="h-7 w-7" />
        </div>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          No matching questions found
        </p>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Try a different search or contact us directly — we&apos;re happy to
          help.
        </p>
        <Link
          href="/contact"
          className="btn-primary mt-6"
        >
          <MessageCircle className="h-4 w-4" />
          Contact Us
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.4,
              delay: Math.min(i * 0.05, 0.35),
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "glass-card overflow-hidden transition-all duration-300",
              isOpen
                ? "border-brand-500/50 shadow-glow"
                : "hover:border-brand-400/40 hover:bg-brand-50/30 dark:hover:bg-brand-600/5"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 dark:text-brand-400",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="border-t border-slate-200/80 px-5 py-4 dark:border-slate-700/50 sm:px-6">
                    <span className="mb-2 inline-block rounded-full bg-brand-600/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      {item.category}
                    </span>
                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
