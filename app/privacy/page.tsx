import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy policy — hang:out",
  description:
    "How hang:out handles your data: on-device calendar reduction, free/busy only, friends-only access, and real deletion.",
  alternates: { canonical: "/privacy" },
};

/*
 * DRAFT (PRD §7) — plain-language policy drafted from the app's architecture.
 * The human supplies/approves the final legal text before this URL goes into
 * the Play console. Once submitted to Play, this URL must stay stable.
 */
export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Privacy policy</h1>
      <p className="mt-2 text-sm text-dark-slate/70">Last updated: 18 July 2026</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">The short version</h2>
        <p>
          Friends only ever see <strong>free or busy</strong> — never your
          event names, notes, or details. Raw calendar events never leave your
          phone. We don&apos;t sell or share your data with anyone.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">What stays on your device</h2>
        <p>
          If you connect a calendar, hang:out reads it <em>on your phone</em>{" "}
          and reduces your events to plain free/busy time ranges there. Event
          titles, descriptions, locations, and attendees are never uploaded —
          the app has nowhere to send them.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">What we store</h2>
        <p>
          Our servers (Supabase, hosted in the EU) store account basics — your
          email, display name, and avatar — plus the busy time ranges you
          share and the plans you make with friends.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Who can see what</h2>
        <p>
          Only friends you&apos;ve connected with can see your free/busy
          state. This is enforced with row-level security in the database — a
          stranger querying it sees zero rows.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Deleting your data</h2>
        <p>
          Delete your account any time from the app (You tab → Delete
          account). Deletion is immediate and cascades server-side — your
          account and every trace of your data are removed. See{" "}
          <Link
            href="/delete-account"
            className="text-royal-purple underline underline-offset-2"
          >
            deleting your account
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Selling or sharing data</h2>
        <p>
          We don&apos;t sell your data, and we don&apos;t share it with third
          parties. There&apos;s nothing interesting to sell — we don&apos;t
          have your events.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Questions about privacy? Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-royal-purple underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
