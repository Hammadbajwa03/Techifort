"use client";

import { Mail } from "lucide-react";
import { type FormEvent, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("ok");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-brand-gradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.3) 0%, transparent 35%), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)",
        }}
        aria-hidden
      />

      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Stay ahead with Techifort
          </h2>
          <p className="mt-4 text-lg text-brand-100 sm:text-xl">
            Subscribe for product tips, engineering insights, and agency
            updates — no spam, unsubscribe anytime.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="Enter your email"
              className="h-12 w-full min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder:text-brand-100/60 backdrop-blur-sm outline-none ring-brand-300 transition focus:ring-2"
            />
            <button
              type="submit"
              className="h-12 w-full shrink-0 rounded-xl bg-white px-6 text-base font-semibold text-brand-600 shadow-glow transition hover:scale-[1.02] hover:bg-brand-50 active:scale-[0.98] sm:w-auto"
            >
              Subscribe
            </button>
          </form>
          {status === "ok" && (
            <p className="mt-3 text-base text-brand-100" role="status">
              Thanks — you&apos;re on the list!
            </p>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
