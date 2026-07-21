import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Delete your account — hang:out",
  description:
    "How to delete your hang:out account: one tap in the app, or email us if you can't get in. Deletion is immediate and removes everything.",
  alternates: { canonical: "/delete-account" },
};

/*
 * Referenced by the Google Play Data safety form (PRD §7).
 * Once submitted to Play, this URL must stay stable.
 */
export default function DeleteAccountPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Delete your account</h1>
      <p className="mt-4">
        Deleting your hang:out account is immediate and removes everything —
        your profile, your availability, your plans, and every trace of your
        data, server-side.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">In the app</h2>
        <p>
          Open hang:out and go to <strong>You tab → Delete account</strong>.
          That&apos;s it — deletion happens right away and cascades through
          everything server-side.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Can&apos;t access the app?</h2>
        <p>
          Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-royal-purple underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          from the address on your account and we&apos;ll delete it for you.
        </p>
      </section>
    </article>
  );
}
