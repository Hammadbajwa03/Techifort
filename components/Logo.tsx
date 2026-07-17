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
        <Image
          src="/images/techifort-mark.png"
          alt=""
          width={88}
          height={88}
          quality={100}
          priority
          unoptimized
          className="h-full w-full object-contain"
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
