"use client";

const clients = [
  "Nexus Labs",
  "Apex Digital",
  "Orbit Finance",
  "BluePeak",
  "CloudHarbor",
  "Vertex AI",
  "Northwind Soft",
  "Pulse Media",
  "StackForge",
  "Lumen Studio",
];

export function TrustedBy() {
  const loop = [...clients, ...clients];

  return (
    <section
      id="trusted"
      className="relative border-y border-slate-200/60 bg-white/40 py-8 backdrop-blur-sm dark:border-slate-800/80 dark:bg-brand-950/35"
    >
      <div className="container-padded mb-5 text-center">
        <p className="text-base font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          Trusted by innovative teams worldwide
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[rgb(var(--background))] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[rgb(var(--background))] to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee-slow gap-4 hover:[animation-play-state:paused] sm:gap-6">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-12 min-w-[140px] items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 px-5 text-base font-semibold tracking-wide text-slate-500 transition hover:border-brand-400/40 hover:text-brand-600 hover:shadow-glow sm:h-14 sm:min-w-[160px] dark:border-slate-700/60 dark:bg-surface-card dark:text-slate-400 dark:hover:text-brand-400"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
