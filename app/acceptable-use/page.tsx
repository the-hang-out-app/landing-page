import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Acceptable Use Policy — hang:out",
  description:
    "The ground rules for using hang:out: what's not allowed, and what happens if someone breaks them.",
  alternates: { canonical: "/acceptable-use" },
};

/*
 * DRAFT (PRD §7 pattern) — plain-language acceptable-use rules drafted from
 * the product. The human supplies/approves the final legal text. Keep the URL
 * stable once published.
 */
export default function AcceptableUsePage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Acceptable Use Policy</h1>
      <p className="mt-2 text-sm text-dark-slate/70">Last updated: 19 July 2026</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">The short version</h2>
        <p>
          hang:out is for making plans with friends. Use it kindly and lawfully.
          This policy lists what isn&apos;t allowed — it works alongside our{" "}
          <Link
            href="/terms"
            className="text-royal-purple underline underline-offset-2"
          >
            Terms of Service
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Don&apos;t</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Break the law, or use hang:out to help anyone else break it.</li>
          <li>
            Harass, threaten, impersonate, or invite people who don&apos;t want
            to hear from you.
          </li>
          <li>
            Try to see other people&apos;s data, or connect with someone without
            their consent — friendships are two-way by design.
          </li>
          <li>
            Probe, scrape, overload, or interfere with the app, its backend, or
            other people&apos;s use of it.
          </li>
          <li>
            Reverse-engineer, copy, or resell the app except where the law
            expressly allows it.
          </li>
          <li>
            Upload malware, spam, or content you don&apos;t have the right to
            share.
          </li>
          <li>
            Use hang:out to build a competing dataset or to track people without
            their knowledge.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">If someone breaks these rules</h2>
        <p>
          We may remove content, or suspend or close accounts, to protect people
          and keep the service working. Serious cases may be reported to the
          relevant authorities.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Reporting a problem</h2>
        <p>
          Seeing something that breaks these rules? Tell us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-royal-purple underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          and we&apos;ll look into it.
        </p>
      </section>
    </article>
  );
}
