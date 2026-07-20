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
              className="flex items-center justify-center"
            >
              {/* Preloader is always on dark bg — white lockup for contrast */}
              <div className="relative flex h-40 w-[6.5rem] items-center justify-center sm:h-48 sm:w-32">
                <Image
                  src="/images/logo-white.png"
                  alt="Techifort"
                  width={497}
                  height={788}
                  quality={100}
                  priority
                  unoptimized
                  className="h-full w-full object-contain drop-shadow-[0_0_28px_rgba(255,255,255,0.25)]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children(ready)}
    </>
  );
}
