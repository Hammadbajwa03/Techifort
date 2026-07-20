"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_BLUE = "/images/logo-blue.png";
const LOGO_WHITE = "/images/logo-white.png";

type LogoProps = {
  className?: string;
  /**
   * `theme` — blue in light mode, white in dark mode (navbar / footer default).
   * `white` / `light` — always white.
   * `blue` / `default` — always blue (`default` kept for legacy callers).
   */
  variant?: "theme" | "white" | "blue" | "light" | "default";
};

/**
 * Techifort lockup (icon + TECHIFORT + tagline).
 * Theme swap uses the `dark` class (next-themes) so there is no wrong-logo flash,
 * with a ~200ms opacity crossfade when the theme toggles.
 */
export function Logo({ className, variant = "theme" }: LogoProps) {
  const mode =
    variant === "light"
      ? "white"
      : variant === "default"
        ? "blue"
        : variant;

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        className
      )}
      aria-label="Techifort home"
    >
      <span className="relative flex h-[4.5rem] w-[3rem] shrink-0 items-center justify-center sm:h-[5rem] sm:w-[3.35rem] lg:h-[5.5rem] lg:w-[3.7rem]">
        <Image
          src={LOGO_BLUE}
          alt=""
          width={497}
          height={788}
          quality={100}
          priority
          unoptimized
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ease-out",
            mode === "blue" && "opacity-100",
            mode === "white" && "opacity-0",
            mode === "theme" && "opacity-100 dark:opacity-0"
          )}
          sizes="(min-width: 1024px) 60px, (min-width: 640px) 54px, 48px"
        />
        <Image
          src={LOGO_WHITE}
          alt=""
          width={497}
          height={788}
          quality={100}
          priority
          unoptimized
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ease-out",
            mode === "white" && "opacity-100",
            mode === "blue" && "opacity-0",
            mode === "theme" && "opacity-0 dark:opacity-100"
          )}
          sizes="(min-width: 1024px) 60px, (min-width: 640px) 54px, 48px"
        />
      </span>
    </Link>
  );
}
