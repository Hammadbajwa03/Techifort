"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { contactInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ContactMap() {
  const [active, setActive] = useState(0);
  const office = contactInfo.addresses[active];
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=15&output=embed`;

  return (
    <section className="section-padding relative overflow-hidden !pt-4">
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Find Us</p>
          <h2 className="mt-3 section-heading">Our offices</h2>
          <p className="section-subtext mx-auto">
            Visit us in Lahore or Cork — or switch the map to explore either
            location.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.08} className="mt-8 flex justify-center">
          <LayoutGroup id="map-tabs">
            <div className="inline-flex rounded-full border border-slate-200/80 bg-white/60 p-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              {contactInfo.addresses.map((addr, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={addr.label}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 sm:text-base",
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="map-tab-pill"
                        className="absolute inset-0 rounded-full bg-brand-600 shadow-glow"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{addr.label}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </AnimateIn>

        <AnimateIn delay={0.12} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/50 p-1.5 shadow-soft dark:border-slate-700/50 dark:bg-surface-card/50 dark:shadow-none">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[0.9rem] sm:aspect-[21/9]">
              <iframe
                key={office.label}
                title={`${office.label} map`}
                src={embedSrc}
                className="absolute inset-0 h-full w-full border-0 dark:contrast-[1.1] dark:hue-rotate-180 dark:invert-[0.88] dark:saturate-[0.65]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-3 text-center text-base text-slate-600 dark:text-slate-400">
            {office.detail}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
