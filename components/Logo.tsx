"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_BLUE = "/images/techifort-mark-icon-512.png";
const LOGO_WHITE = "/images/techifort-mark-icon-white-512.png";

type LogoProps = {
  className?: string;
  /**
   * `theme` — blue icon + dark/light wordmark by site theme.
   * `white` / `light` — white icon + light wordmark (dark hero / dark surfaces).
   * `blue` / `default` — blue icon + dark wordmark.
   */
  variant?: "theme" | "white" | "blue" | "light" | "default";
};

/**
 * Icon-only TF mark + crisp CSS "Techifort" wordmark (no baked-in image text).
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
        "group inline-flex items-center gap-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        className
      )}
      aria-label="Techifort home"
    >
      <span className="relative block h-11 w-11 shrink-0 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
        <Image
          src={LOGO_BLUE}
          alt=""
          fill
          quality={100}
          priority
          unoptimized
          aria-hidden
          sizes="(min-width: 1024px) 56px, 48px"
          className={cn(
            "object-contain transition-opacity duration-200 ease-out",
            mode === "blue" && "opacity-100",
            mode === "white" && "opacity-0",
            mode === "theme" && "opacity-100 dark:opacity-0"
          )}
        />
        <Image
          src={LOGO_WHITE}
          alt=""
          fill
          quality={100}
          priority
          unoptimized
          aria-hidden
          sizes="(min-width: 1024px) 56px, 48px"
          className={cn(
            "object-contain transition-opacity duration-200 ease-out",
            mode === "white" && "opacity-100",
            mode === "blue" && "opacity-0",
            mode === "theme" && "opacity-0 dark:opacity-100"
          )}
        />
      </span>

      <span
        className={cn(
          "-ml-1 text-lg font-bold tracking-tight sm:-ml-1.5 sm:text-xl lg:text-2xl",
          mode === "white" && "text-white",
          mode === "blue" && "text-slate-900",
          mode === "theme" && "text-slate-900 dark:text-white"
        )}
      >
        Techi
        <span
          className={cn(
            mode === "white" && "text-brand-300",
            mode === "blue" && "text-brand-600",
            mode === "theme" && "text-brand-600 dark:text-brand-400"
          )}
        >
          fort
        </span>
      </span>
    </Link>
  );
}
