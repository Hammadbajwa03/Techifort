"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const AmbientStarfield = dynamic(
  () =>
    import("@/components/AmbientStarfield").then((m) => ({
      default: m.AmbientStarfield,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-brand-950" aria-hidden />
    ),
  }
);

export function ContactHero() {
  return (
    <section className="relative flex min-h-[36vh] items-end overflow-hidden pb-16 pt-28 sm:min-h-[42vh] sm:pb-20 sm:pt-32">
      <AmbientStarfield />

      <div className="container-padded relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-1.5 text-sm font-medium text-white/60 sm:text-base"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
          <span className="text-brand-200">Contact Us</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Let&apos;s Build Something Great Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg lg:text-xl"
        >
          Have a project in mind or just want to say hello? Our team is ready to
          help — reach out and we&apos;ll get back to you within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
