import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        className
      )}
      aria-label="Techifort home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
        {/* Mobile 40×40 / tablet+ 44×44 — designer-sized nav marks */}
        <Image
          src="/images/techifort-mark-nav-mobile.png"
          alt=""
          width={40}
          height={40}
          quality={100}
          priority
          unoptimized
          className="h-full w-full object-contain sm:hidden"
          sizes="40px"
        />
        <Image
          src="/images/techifort-mark-nav-tablet.png"
          alt=""
          width={44}
          height={44}
          quality={100}
          priority
          unoptimized
          className="hidden h-full w-full object-contain sm:block"
          sizes="44px"
        />
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          variant === "light" ? "text-white" : "text-slate-900 dark:text-white"
        )}
      >
        Techi
        <span
          className={cn(
            variant === "light"
              ? "text-brand-300"
              : "text-brand-600 dark:text-brand-400"
          )}
        >
          fort
        </span>
      </span>
    </Link>
  );
}
