"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { useId } from "react";
import { AnimateIn } from "@/components/AnimateIn";

function StoryNetwork() {
  const uid = useId().replace(/:/g, "");
  const gradId = `story-nn-${uid}`;

  const nodes = [
    { id: "a1", x: 36, y: 80 },
    { id: "a2", x: 36, y: 160 },
    { id: "a3", x: 36, y: 240 },
    { id: "b1", x: 150, y: 50 },
    { id: "b2", x: 150, y: 120 },
    { id: "b3", x: 150, y: 200 },
    { id: "b4", x: 150, y: 270 },
    { id: "c1", x: 270, y: 90 },
    { id: "c2", x: 270, y: 160 },
    { id: "c3", x: 270, y: 230 },
    { id: "d1", x: 380, y: 120 },
    { id: "d2", x: 380, y: 200 },
  ];
  const edges: [string, string][] = [
    ["a1", "b1"],
    ["a1", "b2"],
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
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-600/15 via-transparent to-brand-400/10 blur-2xl"
        aria-hidden
      />
      <div className="glass-card relative flex h-full items-center justify-center overflow-hidden p-4 sm:p-6">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-3xl"
          aria-hidden
        />
        <svg
          viewBox="0 0 420 320"
          className="relative z-10 h-full w-full"
          role="img"
          aria-label="Neural network illustration"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.45" />
            </linearGradient>
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
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: [0.25, 0.95, 0.3] }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.8,
                  delay: i * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          {nodes.map((node, i) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.id.startsWith("d") ? 8 : 6}
              fill="#2563EB"
              stroke="#93C5FD"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i, type: "spring", stiffness: 240 }}
            />
          ))}
          <circle cx="210" cy="160" r="26" fill="#0B1120" fillOpacity="0.55" />
          <circle
            cx="210"
            cy="160"
            r="26"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1.5"
            opacity="0.75"
          />
          <foreignObject x="194" y="144" width="32" height="32">
            <div className="flex h-8 w-8 items-center justify-center text-brand-300">
              <Cpu className="h-5 w-5" />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <section id="our-story" className="section-padding relative overflow-hidden">
      <div className="container-padded relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn direction="left">
            <StoryNetwork />
          </AnimateIn>

          <AnimateIn direction="right" delay={0.08}>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="mt-3 section-heading">
              Welcome to Techifort
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              <p>
                Welcome to Techifort, a forward-thinking software development
                company dedicated to bringing innovative, reliable, and
                high-quality software solutions to businesses across the globe.
                Established with the vision of empowering organizations with the
                latest technological advancements, we focus on developing
                robust, efficient, and tailor-made software solutions that meet
                the specific needs of our clients.
              </p>
              <p>
                At Techifort, we are a team of passionate professionals who excel
                in various fields of software development. Our team includes
                software developers, designers, project managers, and quality
                assurance experts who work together to deliver solutions that
                exceed our clients&apos; expectations. We believe in the power of
                collaboration and are committed to staying ahead of the curve in
                the fast-paced tech industry.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
