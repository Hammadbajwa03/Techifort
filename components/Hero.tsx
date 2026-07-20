"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroTaglines, teamMembers } from "@/lib/data";
import { cn } from "@/lib/utils";

const Starfield = dynamic(
  () =>
    import("@/components/Starfield").then((m) => ({ default: m.Starfield })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-brand-950" aria-hidden />
    ),
  }
);

const ease = [0.22, 1, 0.36, 1] as const;

const trustAvatars = teamMembers.slice(0, 4);

const wordVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
  exit: {
    opacity: 0,
    y: -22,
    transition: { duration: 0.32, ease },
  },
};

const lineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.02 },
  },
  exit: {
    transition: { staggerChildren: 0.035, staggerDirection: -1 as const },
  },
};

type HeroProps = {
  contentReady?: boolean;
};

function RotatingHeadline({
  text,
  reducedMotion,
}: {
  text: string;
  reducedMotion: boolean;
}) {
  const words = text.split(" ");

  if (reducedMotion) {
    return (
      <h1 className="hero-headline text-balance px-1 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
        <span className="hero-headline-gradient">{text}</span>
      </h1>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={text}
        className="hero-headline text-balance px-1 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
        variants={lineVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        aria-live="polite"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${text}-${word}-${i}`}
            variants={wordVariants}
            className="hero-headline-gradient mr-[0.28em] inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </AnimatePresence>
  );
}

export function Hero({ contentReady = true }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!contentReady || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroTaglines.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [contentReady, reducedMotion]);

  const show = contentReady;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Background untouched — Starfield owns orbits / stars / logos */}
      <Starfield reduced={reducedMotion} />

      <div className="container-padded relative z-10 py-16 text-center sm:py-20">
        {/* Soft radial only behind text block — does not cover orbit field */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(72vh,640px)] w-[min(96vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(11,17,32,0.72)_0%,rgba(11,17,32,0.45)_42%,transparent_72%)]"
          aria-hidden
        />

        <div className="relative z-[1]">
          {/* 1. Eyebrow — 0ms */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0, ease }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-100 shadow-[0_0_24px_rgba(37,99,235,0.25)] backdrop-blur-md sm:px-4 sm:text-base sm:tracking-[0.18em]"
          >
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brand-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
            AI-Powered Software Solutions
          </motion.p>

          {/* 2. Headline — 150ms */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease }}
            className="mx-auto flex min-h-[5rem] max-w-5xl items-center justify-center sm:min-h-[5.5rem] lg:min-h-[6.5rem]"
          >
            <RotatingHeadline
              text={heroTaglines[index]}
              reducedMotion={reducedMotion}
            />
          </motion.div>

          {/* 3. Subtext — 300ms */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.55, delay: 0.3, ease }}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-100/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:text-lg lg:text-xl"
          >
            Cutting-edge software development, SEO, web development, and custom
            digital solutions — engineered to help your business grow faster and
            stand out online.
          </motion.p>

          {/* 4. CTAs — 450ms */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.55, delay: 0.45, ease }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              href="#contact"
              className={cn(
                "hero-cta-primary group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-brand-600 px-7 text-base font-semibold text-white shadow-glow",
                "transition-all duration-300 hover:scale-[1.03] hover:bg-brand-500 hover:shadow-glow-lg",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950",
                "active:scale-[0.98]"
              )}
            >
              {!reducedMotion && <span className="hero-cta-shimmer" aria-hidden />}
              <span className="relative z-[1] inline-flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            </Link>

            <Link
              href="#about"
              className={cn(
                "hero-cta-secondary group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl border border-white/35 px-7 text-base font-semibold text-white",
                "backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                "active:scale-[0.98]"
              )}
            >
              <span className="hero-cta-secondary-fill" aria-hidden />
              <span className="relative z-[1]">Read More</span>
            </Link>
          </motion.div>

          {/* 5. Trust row — 600ms */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.6, ease }}
            className="mx-auto mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <div className="flex items-center -space-x-2.5">
              {trustAvatars.map((member) => (
                <span
                  key={member.name}
                  className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-brand-950/80 shadow-[0_0_0_1px_rgba(96,165,250,0.35)] ring-0"
                >
                  <Image
                    src={member.image}
                    alt=""
                    width={72}
                    height={72}
                    className="h-full w-full object-cover"
                  />
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center gap-0.5 text-sm text-slate-200/90 sm:items-start sm:text-left">
              <span className="inline-flex items-center gap-1 font-semibold text-white drop-shadow-sm">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                Rated 4.9/5 by clients
              </span>
              <span className="text-xs text-slate-300/90 sm:text-sm">
                Trusted by 50+ businesses worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
