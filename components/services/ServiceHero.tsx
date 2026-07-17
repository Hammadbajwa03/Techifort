"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, FolderKanban } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { serviceIconMap } from "@/components/services/serviceIcons";
import { type ServiceRecord } from "@/lib/services";

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

type ServiceHeroProps = {
  service: ServiceRecord;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = serviceIconMap[service.icon] ?? serviceIconMap.Code2;
  const portfolioHref = `/portfolio?category=${encodeURIComponent(service.relatedPortfolioCategory)}`;

  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-14 pt-28 sm:min-h-[48vh] sm:pb-16 sm:pt-32">
      <AmbientStarfield />

      <div className="container-padded relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-1.5 text-sm font-medium text-white/60 sm:text-base"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
          <Link href="/services" className="transition hover:text-white">
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
          <span className="text-brand-200">{service.title}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full border border-brand-400/40 bg-brand-600/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
            {service.category}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-200 backdrop-blur-sm">
            <Icon className="h-5 w-5" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-2xl text-lg font-medium text-brand-200 sm:text-xl"
        >
          {service.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg"
        >
          {service.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-base font-semibold text-white shadow-glow transition hover:bg-brand-500"
          >
            Get A Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={portfolioHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
          >
            <FolderKanban className="h-4 w-4" />
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
