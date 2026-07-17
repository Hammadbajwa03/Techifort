"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
} from "react";
import { FaAws, FaRobot } from "react-icons/fa";
import {
  SiEthereum,
  SiFigma,
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";

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
    size: 0.6 + frac3 * 2,
    delay: frac * 4,
    duration: 2 + frac2 * 3,
    depth: 0.35 + frac3 * 0.65,
  };
}

type OrbitLogo = {
  label: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
  angle: number;
};

type OrbitRing = {
  sizePct: number;
  duration: string;
  logos: OrbitLogo[];
  reverse?: boolean;
};

const rings: OrbitRing[] = [
  {
    sizePct: 42,
    duration: "22s",
    logos: [
      { label: "React", Icon: SiReact, color: "#61DAFB", angle: 0 },
      { label: "Next.js", Icon: SiNextdotjs, color: "#F8FAFC", angle: 120 },
      { label: "Node.js", Icon: SiNodedotjs, color: "#68A063", angle: 240 },
    ],
  },
  {
    sizePct: 68,
    duration: "36s",
    reverse: true,
    logos: [
      { label: "Python", Icon: SiPython, color: "#FFD43B", angle: 15 },
      { label: "Flutter", Icon: SiFlutter, color: "#45D1FD", angle: 105 },
      { label: "Ethereum", Icon: SiEthereum, color: "#8A9EFF", angle: 195 },
      { label: "OpenAI", Icon: FaRobot, color: "#F8FAFC", angle: 285 },
    ],
  },
  {
    sizePct: 94,
    duration: "52s",
    logos: [
      { label: "AWS", Icon: FaAws, color: "#FF9900", angle: 40 },
      { label: "Figma", Icon: SiFigma, color: "#F24E1E", angle: 160 },
      { label: "MongoDB", Icon: SiMongodb, color: "#47A248", angle: 280 },
    ],
  },
];

type StarfieldProps = {
  reduced?: boolean;
};

export function Starfield({ reduced = false }: StarfieldProps) {
  const [mounted, setMounted] = useState(false);
  const [pausedRing, setPausedRing] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const starCount = reduced ? 40 : 72;
  const stars = Array.from({ length: starCount }, (_, i) =>
    seededStar(i, starCount)
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      root.style.setProperty("--px", `${x}px`);
      root.style.setProperty("--py", `${y}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 overflow-hidden bg-brand-950"
      aria-hidden
      style={{ ["--px" as string]: "0px", ["--py" as string]: "0px" }}
    >
      <div className="absolute -left-1/4 top-0 h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.32)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute -right-1/4 bottom-0 h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.5)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-[50%] w-[50%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.16)_0%,transparent_70%)] blur-2xl" />

      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--px) * 0.4), calc(var(--py) * 0.4), 0)",
        }}
      >
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
                opacity: 0.3 + star.depth * 0.5,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}
      </div>

      {mounted && (
        <div
          className="orbit-system pointer-events-none absolute left-1/2 top-[48%] will-change-transform"
          style={{
            transform:
              "translate(-50%, -50%) translate3d(calc(var(--px) * 0.15), calc(var(--py) * 0.15), 0)",
          }}
        >
          {/* Circular math → visually elliptical via shared scaleY on all rings */}
          <div className="orbit-ellipse absolute inset-0">
            {rings.map((ring, ringIndex) => {
              const orbitName = ring.reverse ? "orbit-reverse" : "orbit";
              const counterName = ring.reverse ? "orbit" : "orbit-reverse";
              const paused =
                pausedRing === ringIndex || reduced ? "paused" : "running";

              return (
                <div
                  key={ringIndex}
                  className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.09]"
                  style={{
                    width: `${ring.sizePct}%`,
                    height: `${ring.sizePct}%`,
                    marginLeft: `${-ring.sizePct / 2}%`,
                    marginTop: `${-ring.sizePct / 2}%`,
                    animation: `${orbitName} ${ring.duration} linear infinite`,
                    animationPlayState: paused,
                  }}
                >
                  {ring.logos.map((logo) => {
                    const Icon = logo.Icon;
                    return (
                      <div
                        key={logo.label}
                        className="absolute inset-0"
                        style={{ transform: `rotate(${logo.angle}deg)` }}
                      >
                        <div
                          className="pointer-events-auto absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                          style={{
                            animation: `${counterName} ${ring.duration} linear infinite`,
                            animationPlayState: paused,
                          }}
                          onMouseEnter={() => setPausedRing(ringIndex)}
                          onMouseLeave={() => setPausedRing(null)}
                        >
                          {/* 1) Undo placement angle so local axes match the ellipse parent */}
                          <div
                            style={{
                              transform: `rotate(${-logo.angle}deg)`,
                            }}
                          >
                            {/* 2) Then un-squash → perfect circle badges */}
                            <div className="orbit-badge-unsquash">
                              <div className="orbit-badge" title={logo.label}>
                                <Icon
                                  className="h-[clamp(0.9rem,2.1vmin,1.35rem)] w-[clamp(0.9rem,2.1vmin,1.35rem)]"
                                  style={{ color: logo.color }}
                                  aria-hidden
                                />
                                <span className="sr-only">{logo.label}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Core stays outside ellipse warp — remains a perfect circle */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-[clamp(4.5rem,11vmin,8rem)] w-[clamp(4.5rem,11vmin,8rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="absolute inset-[-20%] animate-pulse-glow rounded-full bg-brand-600/25 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#050814] shadow-[0_0_60px_rgba(37,99,235,0.7)] ring-2 ring-brand-400/40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-600/20 via-transparent to-brand-400/10" />
              <Image
                src="/images/techifort-mark-512.png"
                alt="Techifort"
                width={160}
                height={160}
                quality={100}
                unoptimized
                priority
                className="relative h-[72%] w-[72%] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-brand-950/30 to-brand-950/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(11,17,32,0.5)_100%)]" />
    </div>
  );
}
