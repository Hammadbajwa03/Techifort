"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "techifort-intro-seen";

type PageIntroProps = {
  children: (ready: boolean) => ReactNode;
};

export function PageIntro({ children }: PageIntroProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(STORAGE_KEY);
      if (seen) {
        setReady(true);
        setChecked(true);
        return;
      }
      setShowIntro(true);
      setChecked(true);
    } catch {
      setReady(true);
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (!showIntro) return;
    const done = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setShowIntro(false);
      setReady(true);
    }, 1400);
    return () => window.clearTimeout(done);
  }, [showIntro]);

  if (!checked) {
    return (
      <div className="fixed inset-0 z-[100] bg-brand-950" aria-hidden />
    );
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                <Image
                  src="/images/techifort-mark-splash-mobile.png"
                  alt="Techifort"
                  width={112}
                  height={112}
                  quality={100}
                  priority
                  unoptimized
                  className="h-full w-full object-contain drop-shadow-[0_0_28px_rgba(37,99,235,0.45)] sm:hidden"
                />
                <Image
                  src="/images/techifort-mark-splash-tablet.png"
                  alt="Techifort"
                  width={128}
                  height={128}
                  quality={100}
                  priority
                  unoptimized
                  className="hidden h-full w-full object-contain drop-shadow-[0_0_28px_rgba(37,99,235,0.45)] sm:block"
                />
              </div>
              <p className="text-base font-semibold tracking-[0.3em] text-white/80">
                TECHIFORT
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children(ready)}
    </>
  );
}
