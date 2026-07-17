"use client";

import { Search, X } from "lucide-react";

type FAQSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function FAQSearchBar({ value, onChange }: FAQSearchBarProps) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-500"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search questions…"
        aria-label="Search FAQs"
        className="h-14 w-full rounded-2xl border border-slate-200/80 bg-white/70 pl-12 pr-12 text-base text-slate-900 shadow-soft outline-none backdrop-blur-md transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/35 focus:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-white/10 dark:hover:text-brand-300"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
