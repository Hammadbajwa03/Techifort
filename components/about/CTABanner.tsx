"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-brand-gradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.3) 0%, transparent 35%), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)",
        }}
        aria-hidden
      />

      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to build something great together?
          </h2>
          <p className="mt-4 text-lg text-brand-100 sm:text-xl">
            Tell us about your project — we&apos;ll help you turn ideas into
            reliable, scalable software.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-brand-600 shadow-glow transition hover:scale-[1.02] hover:bg-brand-50 active:scale-[0.98]"
          >
            Get A Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
