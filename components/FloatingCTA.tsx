"use client";

import { MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearTop = window.scrollY < 120;
      const isMobile = window.innerWidth < 640;
      setVisible(isMobile && !nearTop);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Link
      href="/contact"
      className={cn(
        "fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-base font-semibold text-white shadow-glow-lg transition-all duration-300 sm:hidden",
        "hover:scale-105 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
      aria-label="Get a quote"
    >
      <MessageSquareQuote className="h-4 w-4" />
      Get A Quote
    </Link>
  );
}
