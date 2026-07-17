"use client";

import Link from "next/link";
import {
  type LegalBlock,
  type LegalSection,
} from "@/lib/legal/privacy-policy";

function renderBlock(block: LegalBlock, key: string) {
  if (block.type === "p") {
    return (
      <p key={key} className="legal-body">
        {linkify(block.text)}
      </p>
    );
  }
  if (block.type === "note") {
    return (
      <p
        key={key}
        className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-200"
      >
        {block.text}
      </p>
    );
  }
  return (
    <ul key={key} className="legal-list">
      {block.items.map((item) => (
        <li key={item}>{linkify(item)}</li>
      ))}
    </ul>
  );
}

/** Auto-link emails and known contact patterns in legal copy */
function linkify(text: string) {
  const emailMatch = text.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
  if (!emailMatch) return text;

  const email = emailMatch[1];
  const [before, after] = text.split(email);
  return (
    <>
      {before}
      <Link
        href={`mailto:${email}`}
        className="font-medium text-brand-600 underline-offset-2 hover:underline dark:text-brand-400"
      >
        {email}
      </Link>
      {after}
    </>
  );
}

type PolicyContentProps = {
  sections: LegalSection[];
};

export function PolicyContent({ sections }: PolicyContentProps) {
  return (
    <article className="legal-prose max-w-[720px]">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28 border-b border-slate-200/70 py-8 last:border-b-0 dark:border-slate-800/70 sm:scroll-mt-32 sm:py-10"
        >
          <h2 className="mb-4 flex items-start gap-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-xs font-bold text-white shadow-glow sm:h-8 sm:w-8 sm:text-sm">
              {section.number}
            </span>
            {section.title}
          </h2>
          <div className="space-y-4 pl-0 sm:pl-11">
            {section.blocks.map((block, i) =>
              renderBlock(block, `${section.id}-${i}`)
            )}
          </div>
        </section>
      ))}
    </article>
  );
}
