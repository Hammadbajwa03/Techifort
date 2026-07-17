"use client";

import { useEffect, useState } from "react";
import { BackToTopButton } from "@/components/legal/BackToTopButton";
import { LegalPageHeader } from "@/components/legal/LegalPageHeader";
import { PolicyContent } from "@/components/legal/PolicyContent";
import { TableOfContents } from "@/components/legal/TableOfContents";
import { type LegalDocument } from "@/lib/legal/privacy-policy";

type LegalDocumentLayoutProps = {
  doc: LegalDocument;
};

export function LegalDocumentLayout({ doc }: LegalDocumentLayoutProps) {
  const [activeId, setActiveId] = useState(doc.sections[0]?.id ?? "");

  useEffect(() => {
    const sections = doc.sections
      .map((s) => window.document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [doc.sections]);

  const onNavigate = (id: string) => {
    const el = window.document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <>
      <LegalPageHeader
        title={doc.title}
        breadcrumbLabel={doc.breadcrumbLabel}
        lastUpdated={doc.lastUpdated}
      />

      <div className="container-padded section-padding !pt-10 !pb-16">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          <TableOfContents
            sections={doc.sections}
            activeId={activeId}
            onNavigate={onNavigate}
          />
          <PolicyContent sections={doc.sections} />
        </div>
      </div>

      <BackToTopButton />
    </>
  );
}
