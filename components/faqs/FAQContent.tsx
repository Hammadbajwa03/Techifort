"use client";

import { useMemo, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { FAQAccordionList } from "@/components/faqs/FAQAccordionList";
import { FAQCategoryTabs } from "@/components/faqs/FAQCategoryTabs";
import { FAQSearchBar } from "@/components/faqs/FAQSearchBar";
import { faqs, type FAQCategory } from "@/lib/faqs";

export function FAQContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FAQCategory>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  return (
    <section className="section-padding relative overflow-hidden !pt-10">
      <div className="container-padded relative z-10">
        <AnimateIn>
          <FAQSearchBar value={query} onChange={setQuery} />
        </AnimateIn>

        <AnimateIn delay={0.08} className="mt-8">
          <FAQCategoryTabs active={category} onChange={setCategory} />
        </AnimateIn>

        <div className="mt-10">
          <FAQAccordionList key={`${category}-${query}`} items={filtered} />
        </div>
      </div>
    </section>
  );
}
