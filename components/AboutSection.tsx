"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Eye, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden section-grain section-mesh">
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-padded relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl lg:mx-0 lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Techifort team collaborating in a modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass p-4 text-white">
                <p className="text-base font-semibold">Forward-thinking since day one</p>
                <p className="mt-1 text-base text-white/70">
                  Building digital products that scale with your ambition
                </p>
              </div>
            </div>
          </AnimateIn>

          <div>
            <AnimateIn delay={0.05}>
              <p className="section-eyebrow">
                About Us
              </p>
              <h2 className="mt-3 section-heading">
                A forward-thinking software development company
              </h2>
              <p className="section-subtext">
                Techifort partners with startups and enterprises to design,
                build, and grow digital products — from high-performance web
                platforms and mobile apps to SEO, branding, and AI-powered
                solutions that drive measurable results.
              </p>
            </AnimateIn>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <AnimateIn delay={0.1}>
                <div className="glass-card h-full p-5 transition hover:border-brand-500/40 hover:shadow-glow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:text-brand-400">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    Empower businesses with reliable technology and creative
                    digital strategy that accelerates growth.
                  </p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <div className="glass-card h-full p-5 transition hover:border-brand-500/40 hover:shadow-glow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:text-brand-400">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    Become the go-to digital partner for innovative, scalable,
                    and human-centered software worldwide.
                  </p>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.2}>
              <Link href="/services" className="btn-primary mt-8">
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimateIn>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={Math.min(i * 0.04, 0.2)}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card p-4 text-center transition hover:border-brand-500/40 sm:p-6"
              >
                <p className="text-3xl font-bold text-brand-600 dark:text-brand-400 sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
