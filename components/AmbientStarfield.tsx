"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  depth: number;
};

function seededStar(i: number, count: number): Star {
  const n = Math.sin(i * 12.9898 + count * 78.233) * 43758.5453;
  const frac = n - Math.floor(n);
  const n2 = Math.sin(i * 93.989 + count) * 23421.631;
  const frac2 = n2 - Math.floor(n2);
  const n3 = Math.sin(i * 41.2) * 10000;
  const frac3 = n3 - Math.floor(n3);
  return {
    id: i,
    x: frac * 100,
    y: frac2 * 100,
    size: 0.55 + frac3 * 1.6,
    delay: frac * 4,
    duration: 2.5 + frac2 * 3,
    depth: 0.35 + frac3 * 0.65,
  };
}

/** Lighter starfield for inner pages — ambient stars + glow, no orbit logos */
export function AmbientStarfield() {
  const [mounted, setMounted] = useState(false);
  const stars = Array.from({ length: 36 }, (_, i) => seededStar(i, 36));

  useEffect(() => setMounted(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-950" aria-hidden>
      <div className="absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.28)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute -right-1/4 bottom-0 h-[60%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.45)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14)_0%,transparent_70%)] blur-2xl" />

      {mounted &&
        stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: 0.25 + star.depth * 0.45,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}

      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/40 via-transparent to-brand-950/90" />
    </div>
  );
}
