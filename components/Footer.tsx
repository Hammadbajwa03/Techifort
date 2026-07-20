"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contactInfo, services } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 bg-white/35 text-slate-600 backdrop-blur-sm dark:border-brand-600/20 dark:bg-brand-950/50 dark:text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/50 to-transparent" />

      <div className="container-padded section-padding !pb-12 !pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* Footer is light in light mode (bg-white/35) and dark in dark mode —
                same theme-driven logo swap as the navbar (blue / white). */}
            <Logo />
            <p className="mt-4 max-w-xs text-base leading-relaxed text-slate-500 dark:text-slate-400">
              Techifort is a software development & digital agency delivering
              web, mobile, blockchain, SEO, and custom digital solutions
              worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              <motion.a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{ y: -4 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200/80 text-slate-600 transition hover:bg-brand-600 hover:text-white dark:bg-white/5 dark:text-slate-300"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -4 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200/80 text-slate-600 transition hover:bg-brand-600 hover:text-white dark:bg-white/5 dark:text-slate-300"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/service/${service.slug}`}
                    className="text-base text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              {contactInfo.addresses.map((addr) => (
                <li key={addr.city} className="flex gap-3 text-base">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                  <span>
                    <span className="block font-medium text-slate-800 dark:text-slate-200">
                      {addr.city}
                    </span>
                    <span className="text-slate-500">{addr.detail}</span>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3 text-base">
                <Phone className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="transition hover:text-brand-600 dark:hover:text-brand-400"
                >
                  {contactInfo.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Mail className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition hover:text-brand-600 dark:hover:text-brand-400"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="container-padded flex flex-col items-center justify-between gap-3 py-5 text-base text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Techifort. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-brand-600 dark:hover:text-brand-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
