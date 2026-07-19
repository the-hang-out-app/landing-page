"use client";

import { useState } from "react";
import { z } from "zod";
import { contactSchema } from "@/lib/contact-schema";

/**
 * The final-CTA waitlist form (design: .signup), wired to POST /api/contact
 * with the shared zod schema, a honeypot, and inline errors in the Error red.
 */
export function SignupForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [emailValue, setEmailValue] = useState("");

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue(event.currentTarget.value);
    if (error) setError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = new FormData(event.currentTarget);
    const input = {
      intent: "waitlist" as const,
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
    };

    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
      setError(
        z.flattenError(parsed.error).fieldErrors.email?.[0] ??
          "Enter a valid email address.",
      );
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Try again?");
        setStatus("idle");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Something went wrong. Try again?");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <p className="signup-ok reveal in" role="status" aria-live="polite">
        {"You're on the list — we'll only email you when it matters."}
      </p>
    );
  }

  return (
    <>
      <form
        className="signup reveal d3"
        onSubmit={handleSubmit}
        noValidate
        aria-busy={status === "sending"}
      >
        <input
          type="email"
          id="waitlist-email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          placeholder="you@email.com"
          aria-label="Email address"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "signup-error" : undefined}
          autoComplete="email"
          inputMode="email"
          required
        />
        {/* Honeypot — hidden from real users, tempting to bots. Uses a
            clip-based visually-hidden pattern (not left:-9999px, which can
            trigger horizontal overflow on mobile browsers). */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hp"
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Get early access"}
        </button>
      </form>
      {error && (
        <p id="signup-error" className="signup-err" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
