"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-xl",
        "border border-slate-200/80 bg-white/70 text-slate-700 shadow-soft",
        "transition-all duration-300 hover:scale-105 hover:border-brand-400/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        "dark:border-slate-700/60 dark:bg-white/5 dark:text-slate-200",
        className
      )}
    >
      {mounted ? (
        <>
          <Sun
            className={cn(
              "absolute h-4 w-4 transition-all duration-300",
              isDark
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            )}
            aria-hidden
          />
          <Moon
            className={cn(
              "absolute h-4 w-4 transition-all duration-300",
              isDark
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            )}
            aria-hidden
          />
        </>
      ) : (
        <span className="h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-600" />
      )}
    </button>
  );
}
