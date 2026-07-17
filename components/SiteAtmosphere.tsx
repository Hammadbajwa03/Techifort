"use client";

import { useMemo, type ReactNode } from "react";

function CircuitBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14] dark:opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="site-circuit"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 30H40V10M40 30H70V50M70 30V10M70 50H100M20 70H50V90M50 70H80V60M80 70V100M100 90H80"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1"
              className="tech-circuit-lines"
            />
            <circle
              cx="40"
              cy="30"
              r="2.2"
              fill="#60A5FA"
              className="tech-circuit-node"
            />
            <circle
              cx="70"
              cy="30"
              r="2.2"
              fill="#60A5FA"
              className="tech-circuit-node"
            />
            <circle
              cx="70"
              cy="50"
              r="2"
              fill="#3B82F6"
              className="tech-circuit-node"
            />
            <circle
              cx="50"
              cy="70"
              r="2.2"
              fill="#60A5FA"
              className="tech-circuit-node"
            />
            <circle
              cx="80"
              cy="70"
              r="2"
              fill="#3B82F6"
              className="tech-circuit-node"
            />
            <circle
              cx="20"
              cy="90"
              r="1.6"
              fill="#93C5FD"
              className="tech-circuit-node"
            />
            <circle
              cx="100"
              cy="90"
              r="1.6"
              fill="#93C5FD"
              className="tech-circuit-node"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#site-circuit)" />
      </svg>
    </div>
  );
}

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${4 + ((i * 13) % 92)}%`,
        size: 2 + (i % 3),
        delay: (i % 8) * 0.85,
        duration: 11 + (i % 6) * 2.2,
        opacity: 0.22 + (i % 4) * 0.1,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="tech-float-particle absolute bottom-[-8%] rounded-full bg-brand-400"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 8px rgba(96,165,250,0.7)",
          }}
        />
      ))}
    </div>
  );
}

type SiteAtmosphereProps = {
  children: ReactNode;
};

/** Circuit / particle atmosphere for everything below the hero */
export function SiteAtmosphere({ children }: SiteAtmosphereProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none sticky top-0 -z-10 h-[100svh] overflow-hidden">
        <div className="site-atmosphere absolute inset-0" />
        <CircuitBackdrop />
        <FloatingParticles />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--background))]/40 via-transparent to-[rgb(var(--background))]/55"
          aria-hidden
        />
      </div>
      <div className="relative -mt-[100svh]">{children}</div>
    </div>
  );
}
