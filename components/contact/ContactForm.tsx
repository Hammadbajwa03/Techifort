"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Facebook,
  Linkedin,
  Loader2,
  Mail,
  Phone,
} from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useId,
  useState,
} from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { contactInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const services = [
  "Web Development",
  "Blockchain",
  "Game Dev",
  "Mobile App Dev",
  "SEO",
  "Graphic Design",
  "Digital Marketing",
  "AI Development",
  "Content Writing",
  "Other",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function FloatingField({
  id,
  label,
  error,
  children,
  filled,
}: {
  id: string;
  label: string;
  error?: string;
  filled: boolean;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <div className="peer-group relative">
        {children}
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute left-3 origin-left bg-white px-1 text-slate-500 transition-all duration-200 dark:bg-surface-card dark:text-slate-400",
            filled
              ? "top-0 -translate-y-1/2 scale-90 text-xs font-medium text-brand-600 dark:text-brand-400"
              : "top-1/2 -translate-y-1/2 text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-xs peer-focus:font-medium peer-focus:text-brand-600 dark:peer-focus:text-brand-400"
          )}
        >
          {label}
        </label>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function fieldClass(hasError: boolean) {
  return cn(
    "peer h-12 w-full rounded-xl border bg-white px-3 pt-1 text-base text-slate-900 outline-none transition dark:bg-surface-card dark:text-slate-100",
    hasError
      ? "border-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.25)] focus:border-red-500"
      : "border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700"
  );
}

export function ContactForm() {
  const formId = useId();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!form.service) next.service = "Please select a service.";
    if (!form.message.trim()) next.message = "Message is required.";
    else if (form.message.trim().length < 10) {
      next.message = "Please share a bit more detail (10+ characters).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // TODO: Wire real email delivery here (API route + Resend / Nodemailer / Formspree).
    // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1100));

    setStatus("success");
    setForm(initial);
  };

  return (
    <section id="contact-form" className="section-padding relative overflow-hidden !pt-8">
      <div className="container-padded relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          <AnimateIn className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                Fill out the form and we&apos;ll reply within one business day.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingField
                    id={`${formId}-name`}
                    label="Full Name *"
                    error={errors.name}
                    filled={!!form.name}
                  >
                    <input
                      id={`${formId}-name`}
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      className={fieldClass(!!errors.name)}
                      autoComplete="name"
                    />
                  </FloatingField>

                  <FloatingField
                    id={`${formId}-email`}
                    label="Email *"
                    error={errors.email}
                    filled={!!form.email}
                  >
                    <input
                      id={`${formId}-email`}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      className={fieldClass(!!errors.email)}
                      autoComplete="email"
                    />
                  </FloatingField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingField
                    id={`${formId}-phone`}
                    label="Phone (optional)"
                    filled={!!form.phone}
                  >
                    <input
                      id={`${formId}-phone`}
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      className={fieldClass(false)}
                      autoComplete="tel"
                    />
                  </FloatingField>

                  <div className="relative">
                    <select
                      id={`${formId}-service`}
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className={cn(fieldClass(!!errors.service), "appearance-none pr-8")}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor={`${formId}-service`}
                      className={cn(
                        "pointer-events-none absolute left-3 origin-left bg-white px-1 transition-all duration-200 dark:bg-surface-card",
                        form.service
                          ? "top-0 -translate-y-1/2 scale-90 text-xs font-medium text-brand-600 dark:text-brand-400"
                          : "top-1/2 -translate-y-1/2 text-base text-transparent"
                      )}
                    >
                      Subject / Service *
                    </label>
                    <AnimatePresence>
                      {errors.service && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1.5 text-sm text-red-500"
                        >
                          {errors.service}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className={cn(
                      fieldClass(!!errors.message),
                      "h-auto min-h-[8rem] resize-y py-3 peer"
                    )}
                  />
                  <label
                    htmlFor={`${formId}-message`}
                    className={cn(
                      "pointer-events-none absolute left-3 origin-left bg-white px-1 text-slate-500 transition-all duration-200 dark:bg-surface-card dark:text-slate-400",
                      form.message
                        ? "top-0 -translate-y-1/2 scale-90 text-xs font-medium text-brand-600 dark:text-brand-400"
                        : "top-3 text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-xs peer-focus:font-medium peer-focus:text-brand-600"
                    )}
                  >
                    Message *
                  </label>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-sm text-red-500"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-base text-brand-600 dark:text-brand-400"
                      role="status"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      Thanks — we&apos;ll be in touch soon.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1} className="relative lg:col-span-2">
            <div
              className="pointer-events-none absolute -right-8 top-8 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/30"
              aria-hidden
            />
            <div className="relative space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Prefer to talk directly?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  Reach out via phone or email, or connect with us on social
                  media.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-base font-medium text-slate-800 transition hover:border-brand-400/50 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <Phone className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  {contactInfo.phones[0]}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-base font-medium text-slate-800 transition hover:border-brand-400/50 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <Mail className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.06 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-brand-600 shadow-soft transition hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-brand-400"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.06 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-brand-600 shadow-soft transition hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-brand-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>

              <div className="glass-card p-5">
                <div className="mb-2 flex items-center gap-2 text-brand-600 dark:text-brand-400">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Business hours</span>
                </div>
                <p className="text-base text-slate-600 dark:text-slate-400">
                  {contactInfo.hours}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Weekend availability by appointment.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
