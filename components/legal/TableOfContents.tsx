"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { type LegalSection } from "@/lib/legal/privacy-policy";
import { cn } from "@/lib/utils";

type TableOfContentsProps = {
  sections: LegalSection[];
  activeId: string;
  onNavigate: (id: string) => void;
};

export function TableOfContents({
  sections,
  activeId,
  onNavigate,
}: TableOfContentsProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeTitle =
    sections.find((s) => s.id === activeId)?.title ?? "On this page";

  const list = (
    <nav aria-label="Table of contents">
      <p className="mb-3 hidden text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 lg:block">
        On this page
      </p>
      <ul className="space-y-1">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => {
                  onNavigate(section.id);
                  setMobileOpen(false);
                }}
                className={cn(
                  "flex w-full items-start gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition",
                  isActive
                    ? "bg-brand-600/10 font-semibold text-brand-700 dark:bg-brand-600/15 dark:text-brand-300"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-slate-200"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold",
                    isActive
                      ? "bg-brand-600 text-white"
                      : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                  )}
                >
                  {section.number}
                </span>
                <span className="leading-snug">{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile dropdown */}
      <div className="mb-8 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-left text-base font-medium text-slate-800 shadow-soft backdrop-blur-sm dark:border-slate-700/50 dark:bg-surface-card/80 dark:text-slate-100"
          aria-expanded={mobileOpen}
        >
          <span className="truncate">
            <span className="text-slate-500 dark:text-slate-400">Jump to: </span>
            {activeTitle}
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-brand-600 transition-transform dark:text-brand-400",
              mobileOpen && "rotate-180"
            )}
          />
        </button>
        {mobileOpen && (
          <div className="mt-2 rounded-xl border border-slate-200/80 bg-white/90 p-2 shadow-soft dark:border-slate-700/50 dark:bg-surface-card">
            {list}
          </div>
        )}
      </div>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          {list}
        </div>
      </aside>
    </>
  );
}
