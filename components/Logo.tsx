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
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:gap-3",
        className
      )}
      aria-label="Techifort home"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12 lg:h-14 lg:w-14">
        <Image
          src="/images/techifort-mark-nav-2x.png"
          alt=""
          width={384}
          height={384}
          quality={100}
          priority
          unoptimized
          className="h-full w-full object-contain"
          sizes="(min-width: 1024px) 56px, (min-width: 640px) 48px, 44px"
        />
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight sm:text-2xl",
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
