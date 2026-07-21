import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service — hang:out",
  description:
    "The terms for using hang:out: a free Android app that shows friends when you're all free, without sharing what you're busy with.",
  alternates: { canonical: "/terms" },
};

/*
 * DRAFT (PRD §7 pattern) — plain-language terms drafted from the product.
 * The human supplies/approves the final legal text before this URL is relied
 * on. Keep the URL stable once published.
 */
export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-dark-slate/70">Last updated: 19 July 2026</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">The short version</h2>
        <p>
          hang:out is a free Android app that lines up your friends&apos;
          free/busy time so you can find when you&apos;re all free. By using it
          you agree to these terms. Use it kindly, keep your account secure, and
          it stays free to use.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Who can use hang:out</h2>
        <p>
          You need to be old enough to agree to these terms in your country (at
          least 13, or older where local law requires). You&apos;re responsible
          for the account you create and for keeping your password safe.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Your account</h2>
        <p>
          You sign up with an email and password and confirm it with a code.
          Give accurate details, and let us know at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-royal-purple underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          if you think someone else has accessed your account.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Using it fairly</h2>
        <p>
          Please use hang:out the way it&apos;s meant to be used. Our{" "}
          <Link
            href="/acceptable-use"
            className="text-royal-purple underline underline-offset-2"
          >
            Acceptable Use Policy
          </Link>{" "}
          spells out what&apos;s not allowed — things like harassment,
          impersonation, or trying to access other people&apos;s data.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Your privacy</h2>
        <p>
          Friends only ever see whether you&apos;re free or busy — never your
          event names or details. How we handle your data is set out in the{" "}
          <Link
            href="/privacy"
            className="text-royal-purple underline underline-offset-2"
          >
            Privacy policy
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Changes and availability</h2>
        <p>
          hang:out is early software and currently in a closed test. Features
          may change, and we can&apos;t promise it will always be available or
          error-free. We&apos;ll try to give notice of significant changes to
          the app or these terms.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">The app is provided “as is”</h2>
        <p>
          hang:out is provided as it is, without warranties of any kind. To the
          extent the law allows, we aren&apos;t liable for indirect or
          incidental losses arising from using — or being unable to use — the
          app.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Ending your use</h2>
        <p>
          You can leave any time by deleting your account — see{" "}
          <Link
            href="/delete-account"
            className="text-royal-purple underline underline-offset-2"
          >
            deleting your account
          </Link>
          . We may suspend or close accounts that break these terms or the
          Acceptable Use Policy.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Questions about these terms? Email{" "}
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
