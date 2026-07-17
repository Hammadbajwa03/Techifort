"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { FAQAccordionList } from "@/components/faqs/FAQAccordionList";
import { getRelatedFaqs, type ServiceRecord } from "@/lib/services";

type ServiceRelatedFAQsProps = {
  service: ServiceRecord;
};

export function ServiceRelatedFAQs({ service }: ServiceRelatedFAQsProps) {
  const items = getRelatedFaqs(service);
  if (items.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">FAQs</p>
          <h2 className="mt-3 section-heading">
            Questions about {service.title}
          </h2>
          <p className="section-subtext mx-auto">
            Quick answers pulled from our FAQ library — mappings are a starting
            point and can be refined per service.
          </p>
        </AnimateIn>

        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordionList items={items} />
        </div>

        <AnimateIn className="mt-8 text-center">
          <Link
            href="/faqs"
            className="link-underline text-base font-semibold text-brand-600 dark:text-brand-400"
          >
            Browse all FAQs
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
