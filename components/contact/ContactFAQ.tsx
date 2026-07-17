"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

const contactFaqs = [
  {
    q: "How soon can we start my project?",
    a: "Most engagements can kick off within 1–2 weeks after discovery and alignment on scope. Urgent timelines are discussed case by case.",
  },
  {
    q: "Do you offer fixed-price or hourly contracts?",
    a: "Both. Fixed-price works well for clearly scoped builds; hourly or retainer models fit ongoing product work and iterative delivery.",
  },
  {
    q: "Can you work with clients in different time zones?",
    a: "Yes. We regularly collaborate with teams across Pakistan, Europe, the UK, the Middle East, and the US with overlapping hours and async updates.",
  },
  {
    q: "Do you sign NDAs before project discussions?",
    a: "Absolutely. We're happy to sign an NDA before deeper technical or product conversations.",
  },
];

export function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden !pt-4">
      <div className="container-padded relative z-10 max-w-3xl">
        <AnimateIn className="text-center">
          <p className="section-eyebrow">Quick Answers</p>
          <h2 className="mt-3 section-heading">Before you reach out</h2>
          <p className="section-subtext mx-auto">
            A few common questions about how we start and work together.
          </p>
        </AnimateIn>

        <div className="section-stack space-y-3">
          {contactFaqs.map((faq, i) => {
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
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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

        <AnimateIn delay={0.1} className="mt-8 text-center">
          <Link
            href="/faqs"
            className="link-underline text-base font-semibold text-brand-600 dark:text-brand-400"
          >
            See all FAQs
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
