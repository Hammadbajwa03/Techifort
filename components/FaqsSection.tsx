"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What services does Techifort offer?",
    a: "We provide web development, mobile apps, blockchain, SEO, graphic design, digital marketing, game development, and AI developer hiring.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. MVPs often ship in 4–8 weeks; larger platforms are planned in phased releases with clear milestones.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We partner with early-stage startups and established companies across the UK, USA, Middle East, and Pakistan.",
  },
  {
    q: "Can you maintain and scale products after launch?",
    a: "Absolutely. We offer ongoing support, DevOps, performance optimization, and feature iteration after go-live.",
  },
];

export function FaqsSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-padding">
      <div className="container-padded max-w-3xl">
        <AnimateIn className="text-center">
          <p className="section-eyebrow">FAQs</p>
          <h2 className="mt-3 section-heading">Frequently asked questions</h2>
          <p className="section-subtext mx-auto">
            Quick answers about how we work and what to expect.
          </p>
        </AnimateIn>

        <div className="section-stack space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <AnimateIn key={faq.q} delay={Math.min(i * 0.04, 0.2)}>
                <div className="glass-card overflow-hidden transition hover:border-brand-500/40">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-brand-50/50 dark:hover:bg-brand-600/5"
                  >
                    <span className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand-600 transition-transform dark:text-brand-400",
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-slate-200/80 px-5 py-4 text-base leading-relaxed text-slate-600 dark:border-slate-700/50 dark:text-slate-400">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
