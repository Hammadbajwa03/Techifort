"use client";

import { motion } from "framer-motion";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data";

const cards = [
  {
    icon: Phone,
    label: "Call Us",
    value: contactInfo.phones[0],
    href: `tel:${contactInfo.phones[0].replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: contactInfo.addresses[0].label,
    value: contactInfo.addresses[0].detail,
    href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.addresses[0].mapQuery)}`,
  },
  {
    icon: Building2,
    label: contactInfo.addresses[1].label,
    value: contactInfo.addresses[1].detail,
    href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.addresses[1].mapQuery)}`,
  },
] as const;

export function ContactInfoCards() {
  return (
    <section className="relative z-10 mt-8 pb-4 sm:mt-10 sm:pb-6">
      <div className="container-padded">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i * 0.08, 0.32),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glass-card flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {card.label}
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {card.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
