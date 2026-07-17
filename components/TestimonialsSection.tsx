"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Quote } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const countryMeta: Record<string, { flag: string; label: string }> = {
  UK: { flag: "🇬🇧", label: "United Kingdom" },
  USA: { flag: "🇺🇸", label: "United States" },
  Dubai: { flag: "🇦🇪", label: "Dubai" },
};

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 768) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

function TestimonialCard({
  quote,
  name,
  country,
}: {
  quote: string;
  name: string;
  country: string;
}) {
  const meta = countryMeta[country] ?? { flag: "🌍", label: country };
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group glass-card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-glow">
      <Quote className="h-8 w-8 text-brand-600/25 transition group-hover:text-brand-600/40 dark:text-brand-400/25" />
      <p className="mt-4 flex-1 text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200">
        “{quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-5 dark:border-slate-700/50">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-glow">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-900 dark:text-white">
            {name}
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 text-base text-brand-600 dark:text-brand-400">
            <span aria-hidden>{meta.flag}</span>
            <MapPin className="h-3 w-3 shrink-0" aria-hidden />
            <span>{meta.label}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const perView = usePerView();
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const pageCount = Math.max(1, Math.ceil(testimonials.length / perView));

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const next = useCallback(() => {
    setPage((p) => (p + 1) % pageCount);
  }, [pageCount]);

  const prev = useCallback(() => {
    setPage((p) => (p - 1 + pageCount) % pageCount);
  }, [pageCount]);

  useEffect(() => {
    if (paused || pageCount <= 1) return;
    const id = window.setInterval(next, 5500);
    return () => window.clearInterval(id);
  }, [next, paused, pageCount]);

  const visible = useMemo(() => {
    const start = page * perView;
    const slice = testimonials.slice(start, start + perView);
    if (slice.length === perView) return slice;
    // wrap fill for incomplete last page
    return [
      ...slice,
      ...testimonials.slice(0, perView - slice.length),
    ];
  }, [page, perView]);

  return (
    <section id="testimonials" className="section-padding section-grain section-mesh">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="mt-3 section-heading">What clients say</h2>
          <p className="section-subtext mx-auto">
            Trusted by partners across the UK, USA, and the Middle East.
          </p>
        </AnimateIn>

        <div
          className="section-stack"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;
            const delta = e.changedTouches[0].clientX - touchStart;
            if (delta > 50) prev();
            if (delta < -50) next();
            setTouchStart(null);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${page}-${perView}`}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "grid gap-5",
                perView === 1 && "grid-cols-1",
                perView === 2 && "grid-cols-2",
                perView === 3 && "grid-cols-3"
              )}
            >
              {visible.map((item) => (
                <TestimonialCard
                  key={`${page}-${item.name}`}
                  quote={item.quote}
                  name={item.name}
                  country={item.country}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-brand-400 hover:text-brand-600 hover:shadow-glow dark:border-slate-700 dark:bg-surface-card dark:text-slate-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonials page ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === page
                      ? "w-6 bg-brand-600 shadow-glow"
                      : "w-2 bg-slate-300 hover:bg-brand-400 dark:bg-slate-600"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-brand-400 hover:text-brand-600 hover:shadow-glow dark:border-slate-700 dark:bg-surface-card dark:text-slate-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
