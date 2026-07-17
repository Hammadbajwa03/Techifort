"use client";

import { AnimatePresence, LayoutGroup, motion, useInView } from "framer-motion";
import {
  Building2,
  Car,
  Cpu,
  Factory,
  Fuel,
  Gamepad2,
  Globe2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Network,
  Plane,
  ShoppingCart,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

/* ─── Easy-to-edit industry data ─── */
export const industries = [
  {
    id: "01",
    title: "Technology",
    description:
      "Smart digital platforms and AI-powered tools for innovative tech solutions.",
    icon: Cpu,
  },
  {
    id: "02",
    title: "E-Commerce",
    description:
      "Custom online stores with secure payments, inventory & personalized shopping.",
    icon: ShoppingCart,
  },
  {
    id: "03",
    title: "Real Estate",
    description:
      "Property portals, AI-based CRMs, and virtual tour integrations.",
    icon: Home,
  },
  {
    id: "04",
    title: "Health & Fitness",
    description:
      "Apps for telemedicine, workout tracking, and fitness engagement.",
    icon: HeartPulse,
  },
  {
    id: "05",
    title: "Finance",
    description:
      "Secure fintech apps, dashboards, and automated analytics.",
    icon: Landmark,
  },
  {
    id: "06",
    title: "Education",
    description:
      "E-learning platforms, virtual classrooms, and adaptive content tools.",
    icon: GraduationCap,
  },
  {
    id: "07",
    title: "Logistics & Transportation",
    description:
      "Route optimization, real-time tracking, and delivery management systems.",
    icon: Truck,
  },
  {
    id: "08",
    title: "Food & Beverages",
    description:
      "Ordering systems, delivery apps, and kitchen management solutions.",
    icon: UtensilsCrossed,
  },
  {
    id: "09",
    title: "Medical Technology",
    description:
      "HIPAA-compliant platforms, patient portals, and health monitoring tools.",
    icon: Stethoscope,
  },
  {
    id: "10",
    title: "Travel & Hospitality",
    description:
      "Booking engines, itinerary apps, and guest experience platforms.",
    icon: Plane,
  },
  {
    id: "11",
    title: "Gaming",
    description:
      "Cross-platform 2D/3D game development with immersive UI/UX.",
    icon: Gamepad2,
  },
  {
    id: "12",
    title: "Automobile",
    description:
      "Booking systems, service tracking, and connected vehicle solutions.",
    icon: Car,
  },
  {
    id: "13",
    title: "Oil, Gas & Energy",
    description:
      "Digital monitoring, asset management, and analytics for energy operations.",
    icon: Fuel,
  },
  {
    id: "14",
    title: "Manufacturing",
    description:
      "ERP, inventory systems, and process automation software.",
    icon: Factory,
  },
  {
    id: "15",
    title: "Architecture",
    description:
      "Project planning dashboards, 3D visualization, and client portals.",
    icon: Building2,
  },
  {
    id: "16",
    title: "B2B",
    description:
      "Scalable web platforms for procurement, onboarding, and partner networks.",
    icon: Network,
  },
] as const;

type Industry = (typeof industries)[number];
type GroupKey = "g1" | "g2";

const groups: Record<GroupKey, { label: string; items: Industry[] }> = {
  g1: { label: "Group 1 · 01–08", items: industries.slice(0, 8) as Industry[] },
  g2: { label: "Group 2 · 09–16", items: industries.slice(8, 16) as Industry[] },
};

type Point = { x: number; y: number };

const BADGE_RADIUS = 24; // half of h-12 (48px)
const HUB_RADIUS_FALLBACK = 68;
const BADGE_TEXT_GAP = "gap-6"; // 24px between badge and text
const COLUMN_OUTWARD_PAD = "px-1 xl:px-2"; // outer breathing room for text

/** Pull a point back along hub→target so the line starts/ends on circle edges */
function pointOnRay(from: Point, to: Point, distanceFromFrom: number): Point {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return {
    x: from.x + (dx / len) * distanceFromFrom,
    y: from.y + (dy / len) * distanceFromFrom,
  };
}

/**
 * Curve hub-edge → badge-edge.
 * Control point bows TOWARD the hub/center (away from outer text) and
 * slightly away from neighboring rows vertically.
 */
function curvedPath(hub: Point, badge: Point, hubRadius: number): string {
  const start = pointOnRay(hub, badge, hubRadius);
  const end = pointOnRay(
    hub,
    badge,
    Math.max(hubRadius + 8, Math.hypot(badge.x - hub.x, badge.y - hub.y) - BADGE_RADIUS)
  );

  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;

  // Toward horizontal center (away from text which sits outward)
  const towardCenter = end.x < hub.x ? 1 : -1;
  const curveAmt = Math.min(22, len * 0.14);
  // Mild vertical bow away from adjacent rows
  const awayFromNeighbor = dy === 0 ? 0 : -Math.sign(dy) * curveAmt * 0.4;

  const cpx = midX + towardCenter * curveAmt * 0.85;
  const cpy = midY + awayFromNeighbor;

  return `M ${start.x} ${start.y} Q ${cpx} ${cpy} ${end.x} ${end.y}`;
}

function ConnectorLines({
  hub,
  nodes,
  hubRadius,
  active,
  hovered,
  uid,
}: {
  hub: Point | null;
  nodes: Point[];
  hubRadius: number;
  active: boolean;
  hovered: number | null;
  uid: string;
}) {
  if (!hub || nodes.length === 0) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
      aria-hidden
    >
      <defs>
        <filter id={`${uid}-dot-glow`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {nodes.map((node, i) => {
          const start = pointOnRay(hub, node, hubRadius);
          const end = pointOnRay(
            hub,
            node,
            Math.max(
              hubRadius + 8,
              Math.hypot(node.x - hub.x, node.y - hub.y) - BADGE_RADIUS
            )
          );
          return (
            <linearGradient
              key={`grad-${i}`}
              id={`${uid}-grad-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
            >
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#2563EB" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.12" />
            </linearGradient>
          );
        })}
      </defs>

      {nodes.map((node, i) => {
        const isHot = hovered === i;
        const d = curvedPath(hub, node, hubRadius);

        return (
          <g key={`${Math.round(node.x)}-${Math.round(node.y)}-${i}`}>
            <motion.path
              d={d}
              fill="none"
              stroke={isHot ? "rgba(37,99,235,0.35)" : "rgba(96,165,250,0.15)"}
              strokeWidth={isHot ? 6 : 4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                active
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                pathLength: {
                  duration: 0.65,
                  delay: active ? i * 0.1 : 0,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: { duration: 0.3, delay: active ? i * 0.1 : 0 },
              }}
            />
            <motion.path
              d={d}
              fill="none"
              stroke={`url(#${uid}-grad-${i})`}
              strokeWidth={isHot ? 2.5 : 1.75}
              strokeDasharray={isHot ? "7 5" : "5 6"}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                active
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                pathLength: {
                  duration: 0.65,
                  delay: active ? i * 0.1 : 0,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: { duration: 0.3, delay: active ? i * 0.1 : 0 },
              }}
            />
            {active && (
              <circle
                r={isHot ? 3.5 : 2.75}
                fill="#93C5FD"
                filter={`url(#${uid}-dot-glow)`}
                opacity={0.95}
              >
                <animateMotion
                  dur={`${3.2 + i * 0.25}s`}
                  begin={`${0.7 + i * 0.35}s`}
                  repeatCount="indefinite"
                  path={d}
                  rotate="auto"
                />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function NumberBadge({
  id,
  active,
  delay,
  hovered,
}: {
  id: string;
  active: boolean;
  delay: number;
  hovered: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={
        active
          ? { opacity: 1, scale: hovered ? 1.12 : 1 }
          : { opacity: 0, scale: 0.75 }
      }
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 18,
        delay: active ? delay : 0,
      }}
      className={cn(
        "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-shadow duration-300",
        "bg-[radial-gradient(circle_at_35%_30%,#3B82F6_0%,#1E40AF_45%,#0B1120_100%)]",
        "ring-2 ring-brand-400/35",
        hovered
          ? "shadow-[0_0_28px_rgba(37,99,235,0.85)] ring-brand-300/70"
          : "shadow-[0_0_18px_rgba(37,99,235,0.45)]"
      )}
    >
      <span className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <span className="relative drop-shadow-sm">{id}</span>
    </motion.div>
  );
}

function IndustryText({
  item,
  active,
  delay,
  align,
  hovered,
}: {
  item: Industry;
  active: boolean;
  delay: number;
  align: "left" | "right";
  hovered: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: active ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
      className={cn("max-w-[240px] xl:max-w-[280px]", align === "right" ? "text-right" : "text-left")}
    >
      <h3
        className={cn(
          "text-lg font-bold tracking-tight transition-colors xl:text-xl",
          hovered
            ? "text-brand-600 dark:text-brand-400"
            : "text-slate-900 dark:text-white"
        )}
      >
        {item.title}
      </h3>
      <p className="mt-1.5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {item.description}
      </p>
    </motion.div>
  );
}

function HubCore({ active }: { active: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.65 }}
      animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.65 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="relative flex h-28 w-28 items-center justify-center xl:h-32 xl:w-32"
    >
      {/* Breathing outer glow */}
      <span className="absolute inset-[-28%] animate-pulse-glow rounded-full bg-brand-500/30 blur-3xl" />

      {/* Slow orbit rings — ties to hero motif */}
      <span className="absolute inset-[-14%] animate-[orbit_28s_linear_infinite] rounded-full border border-brand-400/25" />
      <span className="absolute inset-[-22%] animate-[orbit-reverse_40s_linear_infinite] rounded-full border border-dashed border-brand-300/20" />
      <span className="absolute inset-[-6%] animate-[orbit_18s_linear_infinite] rounded-full border border-white/10" />

      {/* Radial sphere */}
      <span
        className="relative flex h-full w-full items-center justify-center rounded-full shadow-[0_0_50px_rgba(37,99,235,0.65)] ring-2 ring-white/20"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #93C5FD 0%, #3B82F6 28%, #2563EB 55%, #1E3A8A 82%, #0B1120 100%)",
        }}
      >
        <span className="absolute inset-[12%] rounded-full bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
        <Globe2
          className="relative h-11 w-11 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] xl:h-12 xl:w-12"
          strokeWidth={1.5}
        />
      </span>
    </motion.div>
  );
}

function DesktopDiagram({ group }: { group: GroupKey }) {
  const items = groups[group].items;
  const left = items.slice(0, 4);
  const right = items.slice(4, 8);
  const uid = useId().replace(/:/g, "");

  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hub, setHub] = useState<Point | null>(null);
  const [hubRadius, setHubRadius] = useState(HUB_RADIUS_FALLBACK);
  const [nodes, setNodes] = useState<Point[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  const measure = () => {
    const container = containerRef.current;
    const hubEl = hubRef.current;
    if (!container || !hubEl) return;
    const c = container.getBoundingClientRect();
    const h = hubEl.getBoundingClientRect();
    setHub({
      x: h.left + h.width / 2 - c.left,
      y: h.top + h.height / 2 - c.top,
    });
    // Use sphere radius (not including outer orbit rings) — ~ half of core visual
    setHubRadius(Math.max(40, h.width / 2 - 8));
    setNodes(
      badgeRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - c.left,
          y: r.top + r.height / 2 - c.top,
        };
      })
    );
  };

  useEffect(() => {
    setReady(false);
    const t = window.setTimeout(() => {
      measure();
      setReady(true);
    }, 100);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => measure())
        : null;
    if (containerRef.current && ro) ro.observe(containerRef.current);
    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  const active = inView && ready;

  const renderSide = (
    sideItems: Industry[],
    side: "left" | "right",
    indexOffset: number
  ) => (
    <div
      className={cn(
        "flex flex-col justify-start gap-5 py-1 xl:gap-6",
        COLUMN_OUTWARD_PAD
      )}
    >
      {sideItems.map((item, i) => {
        const idx = indexOffset + i;
        const delay = 0.6 + idx * 0.1;
        const isHot = hovered === idx;

        // Badge = inner ring (toward hub). Text = outer zone (away from lines).
        // Left:  [Text ……] [Badge] | hub
        // Right: hub | [Badge] […… Text]
        const badge = (
          <div
            ref={(el) => {
              badgeRefs.current[idx] = el;
            }}
            className="relative z-10 shrink-0"
          >
            <NumberBadge
              id={item.id}
              active={active}
              delay={delay}
              hovered={isHot}
            />
          </div>
        );
        const text = (
          <div className="relative z-10 min-w-0">
            <IndustryText
              item={item}
              active={active}
              delay={delay + 0.12}
              align={side === "left" ? "right" : "left"}
              hovered={isHot}
            />
          </div>
        );

        return (
          <div
            key={`${group}-${item.id}`}
            className={cn(
              "group flex items-center",
              BADGE_TEXT_GAP, // 32px (gap-8)
              side === "left" ? "justify-end" : "justify-start"
            )}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {side === "left" ? (
              <>
                {text}
                {badge}
              </>
            ) : (
              <>
                {badge}
                {text}
              </>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative mx-auto hidden max-w-6xl lg:block"
    >
      <ConnectorLines
        hub={hub}
        nodes={nodes}
        hubRadius={hubRadius}
        active={active}
        hovered={hovered}
        uid={uid}
      />

      {/* Wider section: text outer, badges inner, clear corridor for lines only */}
      <div className="relative z-10 grid grid-cols-[minmax(0,1fr)_minmax(10rem,13rem)_minmax(0,1fr)] items-center gap-8 xl:gap-10">
        {renderSide(left, "left", 0)}

        <div className="flex items-center justify-center">
          <div ref={hubRef} className="relative z-20">
            <HubCore active={active} />
          </div>
        </div>

        {renderSide(right, "right", 4)}
      </div>
    </div>
  );
}

function StackedList({ items }: { items: Industry[] }) {
  return (
    <div className="mx-auto grid max-w-3xl gap-3.5 lg:hidden">
      {items.map((item, i) => {
        const Icon = item.icon as LucideIcon;
        return (
          <AnimateIn key={item.id} delay={Math.min(i * 0.05, 0.28)}>
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow sm:p-5 dark:border-slate-700/50 dark:bg-surface-card/90">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-600/5 blur-2xl transition group-hover:bg-brand-600/15" />
              <div className="relative flex gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ring-2 ring-brand-400/35 shadow-[0_0_18px_rgba(37,99,235,0.45)] transition group-hover:scale-110 group-hover:shadow-[0_0_26px_rgba(37,99,235,0.7)]"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #3B82F6 0%, #1E40AF 45%, #0B1120 100%)",
                  }}
                >
                  {item.id}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                    <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          </AnimateIn>
        );
      })}
    </div>
  );
}

function GroupTabs({
  group,
  onChange,
}: {
  group: GroupKey;
  onChange: (g: GroupKey) => void;
}) {
  const keys = Object.keys(groups) as GroupKey[];

  return (
    <LayoutGroup>
      <div className="relative inline-flex rounded-full border border-slate-200/80 bg-slate-100/80 p-1.5 shadow-soft backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/60">
        {keys.map((key) => {
          const active = group === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className={cn(
                "relative z-10 rounded-full px-5 py-2.5 text-base font-semibold transition-colors",
                active
                  ? "text-white"
                  : "text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              )}
            >
              {active && (
                <motion.span
                  layoutId="we-serve-tab"
                  className="absolute inset-0 rounded-full bg-brand-600 shadow-glow"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{groups[key].label}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

export function WeServeSection() {
  const [group, setGroup] = useState<GroupKey>("g1");
  const activeItems = useMemo(() => groups[group].items, [group]);

  return (
    <section
      id="we-serve"
      className="section-padding relative overflow-hidden"
    >
      {/* Atmosphere: radial blob behind hub */}
      <div
        className="pointer-events-none absolute left-1/2 top-[55%] h-[min(720px,90vw)] w-[min(720px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 dark:opacity-90"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 dark:opacity-100 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(148,163,184,0.12) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(11,17,32,0.55) 100%)",
        }}
      />

      {/* Faint stars / dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.55]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 12% 22%, rgba(96,165,250,0.7) 0%, transparent 100%), radial-gradient(1px 1px at 28% 68%, rgba(255,255,255,0.45) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 48% 18%, rgba(37,99,235,0.6) 0%, transparent 100%), radial-gradient(1px 1px at 62% 78%, rgba(255,255,255,0.35) 0%, transparent 100%), radial-gradient(1px 1px at 78% 36%, rgba(96,165,250,0.55) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 88% 62%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 8% 88%, rgba(96,165,250,0.4) 0%, transparent 100%)",
        }}
      />

      {/* Dot grid (very subtle) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(37 99 235) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Industries</p>
          <h2 className="mt-3 section-heading">We Serve</h2>
          <p className="section-subtext mx-auto">
            At Techifort, we deliver innovative software, mobile apps, and
            AI-powered solutions for a wide range of industries. Our expert team
            builds tailored digital products that meet industry-specific needs
            and drive real results.
          </p>
        </AnimateIn>

        <div className="mt-8 flex justify-center sm:mt-10">
          <GroupTabs group={group} onChange={setGroup} />
        </div>

        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <DesktopDiagram group={group} />
              <StackedList items={activeItems} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
