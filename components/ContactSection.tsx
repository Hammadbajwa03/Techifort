"use client";

import { FormEvent, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { contactInfo } from "@/lib/data";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding surface-muted">
      <div className="container-padded">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <p className="section-eyebrow">
              Contact Us
            </p>
            <h2 className="mt-3 section-heading">Let&apos;s build something great</h2>
            <p className="section-subtext">
              Tell us about your project. We&apos;ll respond within one business
              day with next steps and a clear path forward.
            </p>
            <ul className="mt-8 space-y-3 text-base text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-medium text-slate-900 dark:text-white">
                  Email:{" "}
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-brand-600 hover:underline dark:text-brand-400"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900 dark:text-white">
                  Phone:{" "}
                </span>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="text-brand-600 hover:underline dark:text-brand-400"
                >
                  {contactInfo.phones[0]}
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900 dark:text-white">
                  Offices:{" "}
                </span>
                Lahore, Pakistan · Cork, Ireland
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass-card space-y-4 p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-base font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-base text-slate-900 outline-none ring-brand-500 transition focus:ring-2 dark:border-slate-700 dark:bg-brand-950/50 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-base font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-base text-slate-900 outline-none ring-brand-500 transition focus:ring-2 dark:border-slate-700 dark:bg-brand-950/50 dark:text-slate-100"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-base font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-base text-slate-900 outline-none ring-brand-500 transition focus:ring-2 dark:border-slate-700 dark:bg-brand-950/50 dark:text-slate-100"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-base font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-base text-slate-900 outline-none ring-brand-500 transition focus:ring-2 dark:border-slate-700 dark:bg-brand-950/50 dark:text-slate-100"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
              {status === "ok" && (
                <p className="text-base text-brand-600 dark:text-brand-400" role="status">
                  Message sent — we&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
