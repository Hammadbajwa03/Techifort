import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Kept for Footer API compatibility */
  variant?: "default" | "light";
};

/**
 * Full designer lockup (icon + TECHIFORT + tagline) — same as the local look.
 * Single image so Vercel matches localhost after deploy.
 */
export function Logo({ className }: LogoProps) {
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
          src="/images/techifort-logo-lockup.png"
          alt="Techifort"
          width={553}
          height={844}
          quality={100}
          priority
          unoptimized
          className="h-full w-full object-contain"
          sizes="(min-width: 1024px) 60px, (min-width: 640px) 54px, 48px"
        />
      </span>
    </Link>
  );
}
