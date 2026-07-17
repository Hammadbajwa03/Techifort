"use client";

import { AnimatePresence, LayoutGroup, motion, useInView } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  FlaskConical,
  Layers,
  Layout,
  Link2,
  PanelsTopLeft,
  Server,
  Settings2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
} from "react";
import { FaAws, FaDatabase, FaRobot } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandAzure } from "react-icons/tb";
import {
  SiAndroid,
  SiAngular,
  SiApple,
  SiBootstrap,
  SiCss,
  SiCypress,
  SiDigitalocean,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiDrupal,
  SiEthereum,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiIonic,
  SiJenkins,
  SiJest,
  SiJquery,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRubyonrails,
  SiRust,
  SiSelenium,
  SiShopify,
  SiSolana,
  SiSolidity,
  SiStrapi,
  SiSwift,
  SiTerraform,
  SiVercel,
  SiVuedotjs,
  SiWordpress,
  SiBinance,
  SiPolygon,
  SiContentful,
  SiMocha,
} from "react-icons/si";
import { AnimateIn } from "@/components/AnimateIn";
import { techCategories, type TechCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = Object.keys(techCategories) as TechCategory[];

type IconComp = ComponentType<{ className?: string; style?: CSSProperties }>;

const categoryMeta: Record<
  TechCategory,
  { icon: LucideIcon; short?: string }
> = {
  Backend: { icon: Server },
  Frontend: { icon: Layout },
  Mobile: { icon: Smartphone },
  Database: { icon: Database },
  CMS: { icon: PanelsTopLeft },
  Cloud: { icon: Cloud },
  "Testing Tools": { icon: FlaskConical },
  DevOps: { icon: Settings2 },
  "Full Stack": { icon: Layers },
  Blockchain: { icon: Link2 },
};

const toolVisuals: Record<string, { Icon: IconComp; color: string }> = {
  "Node.js": { Icon: SiNodedotjs, color: "#68A063" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  Django: { Icon: SiDjango, color: "#092E20" },
  ".NET": { Icon: SiDotnet, color: "#512BD4" },
  Golang: { Icon: SiGo, color: "#00ADD8" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Rails: { Icon: SiRubyonrails, color: "#CC0000" },
  Rust: { Icon: SiRust, color: "#DEA584" },
  React: { Icon: SiReact, color: "#61DAFB" },
  Vue: { Icon: SiVuedotjs, color: "#42B883" },
  Angular: { Icon: SiAngular, color: "#DD0031" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  jQuery: { Icon: SiJquery, color: "#0769AD" },
  Android: { Icon: SiAndroid, color: "#3DDC84" },
  iOS: { Icon: SiApple, color: "#A2AAAD" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  Swift: { Icon: SiSwift, color: "#F05138" },
  Ionic: { Icon: SiIonic, color: "#3880FF" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  Oracle: { Icon: FaDatabase, color: "#F80000" },
  "MS SQL": { Icon: DiMsqlServer, color: "#CC2927" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  Drupal: { Icon: SiDrupal, color: "#0678BE" },
  Shopify: { Icon: SiShopify, color: "#96BF48" },
  Strapi: { Icon: SiStrapi, color: "#4945FF" },
  Contentful: { Icon: SiContentful, color: "#2478CC" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  Azure: { Icon: TbBrandAzure, color: "#0078D4" },
  GCP: { Icon: SiGooglecloud, color: "#4285F4" },
  DigitalOcean: { Icon: SiDigitalocean, color: "#0080FF" },
  Vercel: { Icon: SiVercel, color: "#111827" },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },
  Jest: { Icon: SiJest, color: "#C21325" },
  Cypress: { Icon: SiCypress, color: "#69D3A7" },
  Selenium: { Icon: SiSelenium, color: "#43B02A" },
  Playwright: { Icon: Code2, color: "#2EAD33" },
  Mocha: { Icon: SiMocha, color: "#8D6748" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  Jenkins: { Icon: SiJenkins, color: "#D24939" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  Terraform: { Icon: SiTerraform, color: "#7B42BC" },
  MERN: { Icon: SiMongodb, color: "#47A248" },
  MEAN: { Icon: SiAngular, color: "#DD0031" },
  "Next.js": { Icon: SiNextdotjs, color: "#111827" },
  Nuxt: { Icon: SiNuxt, color: "#00DC82" },
  "Laravel + Vue": { Icon: SiLaravel, color: "#FF2D20" },
  Solidity: { Icon: SiSolidity, color: "#A78BFA" },
  Ethereum: { Icon: SiEthereum, color: "#8A9EFF" },
  Solana: { Icon: SiSolana, color: "#14F195" },
  Hardhat: { Icon: FaRobot, color: "#FFF100" },
  Truffle: { Icon: Code2, color: "#5E464D" },
  Binance: { Icon: SiBinance, color: "#F0B90B" },
  Matic: { Icon: SiPolygon, color: "#8247E5" },
};

function ToolBadge({
  name,
  index,
  animateIn,
}: {
  name: string;
  index: number;
  animateIn: boolean;
}) {
  const visual = toolVisuals[name] ?? {
    Icon: Code2,
    color: "#60A5FA",
  };
  const { Icon, color } = visual;

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, scale: 0.72, y: 12 } : false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: animateIn ? Math.min(index * 0.05, 0.55) : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group/badge relative flex w-[4.75rem] shrink-0 flex-col items-center gap-2 sm:w-[5.5rem]"
    >
      <div
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20",
          "bg-white/70 shadow-soft backdrop-blur-md transition-all duration-300",
          "group-hover/badge:scale-110 group-hover/badge:border-brand-400/60 group-hover/badge:shadow-glow",
          "dark:border-white/10 dark:bg-white/5 dark:shadow-none",
          "dark:group-hover/badge:bg-white/10 sm:h-16 sm:w-16 sm:rounded-[1.15rem]"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100 sm:rounded-[1.15rem]" />
        <Icon
          className={cn(
            "relative h-6 w-6 sm:h-7 sm:w-7",
            (name === "Next.js" || name === "Vercel" || name === "iOS") &&
              "text-slate-800 dark:text-slate-100"
          )}
          style={
            name === "Next.js" || name === "Vercel" || name === "iOS"
              ? undefined
              : { color }
          }
          aria-hidden
        />
      </div>
      <span
        className={cn(
          "max-w-full truncate text-center text-xs font-medium text-slate-600 transition-all duration-300",
          "opacity-70 group-hover/badge:opacity-100 sm:text-sm",
          "dark:text-slate-300"
        )}
      >
        {name}
      </span>
    </motion.div>
  );
}

export function TechMarquee() {
  const [active, setActive] = useState<TechCategory>("Backend");
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  const tools = techCategories[active];
  // Repeat until half-track is wide enough for a seamless loop (avoids empty gap)
  const copies = Math.max(4, Math.ceil(12 / Math.max(tools.length, 1)));
  const track = Array.from({ length: copies }, () => tools).flat();

  useEffect(() => {
    if (inView) setEntered(true);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Tech Stack</p>
          <div className="relative mx-auto mt-3 inline-block">
            <h2 className="section-heading tech-scan-heading">
              Tools we master
            </h2>
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "72%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="section-subtext mx-auto">
            Modern technologies across backend, frontend, mobile, cloud, and
            blockchain — picked for reliability and speed.
          </p>
        </AnimateIn>

        {/* Tabs control panel */}
        <motion.div
          className="relative section-stack"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[min(100%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/25"
            aria-hidden
          />

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[rgb(var(--background))] to-transparent sm:w-10 md:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[rgb(var(--background))] to-transparent sm:w-10 md:hidden" />

            <LayoutGroup id="tech-tabs">
              <div
                ref={tabsRef}
                className="relative flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Technology categories"
              >
                {categories.map((cat, i) => {
                  const isActive = active === cat;
                  const Icon = categoryMeta[cat].icon;
                  return (
                    <motion.button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(cat)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.035,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={cn(
                        "relative z-0 inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-semibold transition-all sm:px-4 sm:text-base",
                        isActive
                          ? "scale-[1.04] text-white"
                          : "border border-slate-200/70 bg-white/55 text-slate-600 backdrop-blur-md hover:border-brand-400/40 hover:bg-white/80 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-400/35 dark:hover:bg-white/10 dark:hover:text-brand-300"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tech-tab-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 shadow-glow"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform",
                          isActive && "scale-110"
                        )}
                        aria-hidden
                      />
                      <span className="whitespace-nowrap">{cat}</span>
                    </motion.button>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>
        </motion.div>
      </div>

      {/* Logo marquee */}
      <motion.div
        className="relative z-10 mt-10 sm:mt-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[rgb(var(--background))] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[rgb(var(--background))] to-transparent sm:w-24" />

        <div className="overflow-hidden py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              {/* CSS marquee on a non-Framer node so transform isn't overridden */}
              <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
                {[0, 1].map((half) => (
                  <div
                    key={`${active}-half-${half}`}
                    className="flex shrink-0 gap-4 px-2 sm:gap-5 sm:px-3"
                    aria-hidden={half === 1}
                  >
                    {track.map((tool, i) => (
                      <ToolBadge
                        key={`${active}-${half}-${tool}-${i}`}
                        name={tool}
                        index={i % tools.length}
                        animateIn={entered && half === 0 && i < tools.length}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
