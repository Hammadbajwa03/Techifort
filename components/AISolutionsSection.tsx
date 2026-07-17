"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Eye,
  LineChart,
  MessageSquareText,
  Network,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

/* ─── Easy-to-edit AI offerings ─── */
export const aiOfferings: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Custom AI Development",
    description:
      "Tailored machine learning models built around your specific business data and goals.",
    icon: Brain,
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Intelligent, conversational agents for support, sales, and internal operations.",
    icon: MessageSquareText,
  },
  {
    title: "Process Automation (RPA + AI)",
    description:
      "Automate repetitive workflows and decision-making with intelligent automation.",
    icon: Workflow,
  },
  {
    title: "Predictive Analytics & Insights",
    description:
      "Turn raw data into forecasts, trends, and actionable business intelligence.",
    icon: LineChart,
  },
  {
    title: "Computer Vision Solutions",
    description:
      "Image and video recognition systems for security, quality control, and automation.",
    icon: Eye,
  },
  {
    title: "Natural Language Processing",
    description:
      "Text analysis, sentiment detection, summarization, and language-based automation tools.",
    icon: Bot,
  },
];

const aiStats = [
  { label: "AI Models Deployed", value: 120, suffix: "+" },
  { label: "Hours of Manual Work Automated", value: 48, suffix: "k+" },
  { label: "Client Industries Served with AI", value: 16, suffix: "+" },
  { label: "Average Efficiency Increase", value: 37, suffix: "%" },
] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 55, damping: 22 });

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

/** Animated neural-network centerpiece — SVG nodes + pulsing edges */
function NeuralNetworkGraphic({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `nn-grad-${uid}`;
  const glowId = `nn-glow-${uid}`;

  const nodes = [
    { id: "a1", x: 40, y: 70 },
    { id: "a2", x: 40, y: 140 },
    { id: "a3", x: 40, y: 210 },
    { id: "b1", x: 160, y: 45 },
    { id: "b2", x: 160, y: 105 },
    { id: "b3", x: 160, y: 175 },
    { id: "b4", x: 160, y: 235 },
    { id: "c1", x: 280, y: 70 },
    { id: "c2", x: 280, y: 140 },
    { id: "c3", x: 280, y: 210 },
    { id: "d1", x: 400, y: 105 },
    { id: "d2", x: 400, y: 175 },
  ];

  const edges: [string, string][] = [
    ["a1", "b1"],
    ["a1", "b2"],
    ["a2", "b1"],
    ["a2", "b2"],
    ["a2", "b3"],
    ["a3", "b3"],
    ["a3", "b4"],
    ["b1", "c1"],
    ["b2", "c1"],
    ["b2", "c2"],
    ["b3", "c2"],
    ["b3", "c3"],
    ["b4", "c3"],
    ["c1", "d1"],
    ["c2", "d1"],
    ["c2", "d2"],
    ["c3", "d2"],
  ];

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className={cn("relative mx-auto w-full max-w-lg", className)}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/30"
        aria-hidden
      />
      <svg
        viewBox="0 0 440 280"
        className="relative z-10 h-auto w-full"
        role="img"
        aria-label="Animated neural network illustration"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map(([from, to], i) => {
          const a = byId[from];
          const b = byId[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={`url(#${gradId})`}
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.25 }}
              whileInView={{ pathLength: 1, opacity: [0.25, 1, 0.35, 0.9, 0.3] }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                pathLength: { duration: 0.7, delay: 0.08 * i },
                opacity: {
                  duration: 3.2,
                  delay: 0.12 * i,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          );
        })}

        {nodes.map((node, i) => {
          const isCore = node.id.startsWith("c") || node.id.startsWith("d");
          return (
            <g key={node.id} filter={`url(#${glowId})`}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCore ? 8 : 6}
                fill={isCore ? "#2563EB" : "#1E3A8A"}
                stroke="#60A5FA"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: 0.05 * i,
                }}
              />
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCore ? 14 : 11}
                fill="none"
                stroke="#60A5FA"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0.15, 0.55, 0.15] }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.4 + (i % 4) * 0.35,
                  delay: 0.2 + i * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* Center accent chip */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <circle cx="220" cy="140" r="28" fill="#0B1120" fillOpacity="0.55" />
          <circle
            cx="220"
            cy="140"
            r="28"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <foreignObject x="204" y="124" width="32" height="32">
            <div className="flex h-8 w-8 items-center justify-center text-brand-300">
              <Cpu className="h-5 w-5" />
            </div>
          </foreignObject>
        </motion.g>
      </svg>

      <div className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-300">
        <Network className="h-4 w-4" />
        <span>Intelligent systems, end to end</span>
      </div>
    </div>
  );
}

export function AISolutionsSection() {
  return (
    <section
      id="ai-solutions"
      className="section-padding relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[min(90%,40rem)] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/25"
        aria-hidden
      />

      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">AI Solutions</p>
          <h2 className="mt-3 section-heading">
            Powering Businesses with Artificial Intelligence
          </h2>
          <p className="section-subtext mx-auto">
            We design and deploy intelligent systems that automate workflows,
            uncover insights, and give your business a competitive edge — from
            custom AI models to full-scale automation.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} className="section-stack">
          <NeuralNetworkGraphic className="mb-10 sm:mb-12" />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiOfferings.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i * 0.08, 0.48),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glass-card flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow sm:p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Stat strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
          {aiStats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={Math.min(i * 0.06, 0.24)}>
              <div
                className={cn(
                  "relative px-2 py-4 text-center sm:px-4",
                  i > 0 &&
                    "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-12 lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-slate-200 dark:lg:before:bg-slate-700"
                )}
              >
                <p className="text-3xl font-bold tracking-tight text-brand-600 dark:text-brand-400 sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400 sm:text-base">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.15} className="mt-10 flex justify-center">
          <Link href="/service/ai-solutions" className="btn-primary">
            Talk to an AI Expert
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
