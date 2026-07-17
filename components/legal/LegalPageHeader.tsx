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

type LegalPageHeaderProps = {
  title: string;
  breadcrumbLabel: string;
  lastUpdated: string;
};

export function LegalPageHeader({
  title,
  breadcrumbLabel,
  lastUpdated,
}: LegalPageHeaderProps) {
  return (
    <header className="relative flex min-h-[32vh] items-end overflow-hidden pb-12 pt-28 sm:min-h-[36vh] sm:pb-14 sm:pt-32">
      <AmbientStarfield />

      <div className="container-padded relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-1.5 text-sm font-medium text-white/60 sm:text-base"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
          <span className="text-brand-200">{breadcrumbLabel}</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-base text-slate-300"
        >
          Last updated: {lastUpdated}
        </motion.p>
      </div>
    </header>
  );
}
