import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Kept for Footer compatibility — mark-only logo, no text */
  variant?: "default" | "light";
};

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
      <span className="relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20 lg:h-24 lg:w-24">
        <Image
          src="/images/techifort-mark-nav-2x.png"
          alt="Techifort"
          width={384}
          height={384}
          quality={100}
          priority
          unoptimized
          className="h-full w-full object-contain"
          sizes="(min-width: 1024px) 96px, (min-width: 640px) 80px, 64px"
        />
      </span>
    </Link>
  );
}
