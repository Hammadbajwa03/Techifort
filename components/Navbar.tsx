"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Pages without a dark hero — keep solid/readable nav from the start */
const SOLID_NAV_PREFIXES: string[] = [];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobileAccordions, setOpenMobileAccordions] = useState<string[]>(
    []
  );

  const forceSolid = SOLID_NAV_PREFIXES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen || forceSolid;
  const overHero = !solid;

  const toggleMobileAccordion = (label: string) => {
    setOpenMobileAccordions((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen || forceSolid
          ? "border-b border-slate-200/60 bg-white/85 shadow-soft backdrop-blur-xl dark:border-slate-800/80 dark:bg-brand-950/85"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-padded flex h-20 items-center justify-between gap-3 sm:h-24 lg:h-28">
        {/* White over dark hero; theme swap once the nav is solid */}
        <Logo variant={overHero ? "white" : "theme"} />

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                "children" in link && link.children
                  ? setOpenDesktop(link.label)
                  : setOpenDesktop(null)
              }
              onMouseLeave={() => setOpenDesktop(null)}
            >
              {"children" in link && link.children ? (
                <>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                      overHero
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-slate-700 hover:bg-brand-50 hover:text-brand-600 dark:text-slate-200 dark:hover:bg-brand-600/10 dark:hover:text-brand-400"
                    )}
                    aria-expanded={openDesktop === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openDesktop === link.label && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openDesktop === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 min-w-[240px] pt-2"
                      >
                        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-soft-lg dark:border-slate-700/60 dark:bg-surface-card">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-xl px-3 py-2.5 text-base text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-brand-600/10 dark:hover:text-brand-400"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-base font-medium transition-colors",
                    overHero
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-slate-700 hover:bg-brand-50 hover:text-brand-600 dark:text-slate-200 dark:hover:bg-brand-600/10 dark:hover:text-brand-400"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle
            className={
              overHero
                ? "border-white/20 bg-white/10 text-white shadow-none hover:border-white/40 hover:bg-white/15 dark:border-white/20"
                : undefined
            }
          />
          <Link
            href="/contact"
            className="btn-primary hidden px-5 py-2.5 text-base sm:inline-flex"
          >
            Get A Quote
          </Link>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border transition xl:hidden",
              overHero
                ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
                : "border-slate-200 bg-white text-slate-800 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-white/5 dark:text-white dark:hover:border-brand-400"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl xl:hidden dark:border-slate-800 dark:bg-brand-950/95"
          >
            <div className="container-padded max-h-[calc(100svh-4rem)] space-y-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {"children" in link && link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(link.label)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-lg font-medium text-slate-800 transition hover:bg-brand-50 dark:text-slate-100 dark:hover:bg-brand-600/10"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openMobileAccordions.includes(link.label) &&
                              "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openMobileAccordions.includes(link.label) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-base text-slate-600 transition hover:bg-brand-50 hover:text-brand-600 dark:text-slate-400 dark:hover:bg-brand-600/10 dark:hover:text-brand-400"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-3 text-lg font-medium text-slate-800 transition hover:bg-brand-50 hover:text-brand-600 dark:text-slate-100 dark:hover:bg-brand-600/10 dark:hover:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
