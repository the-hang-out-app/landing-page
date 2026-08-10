"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { z } from "zod";
import { contactSchema } from "@/lib/contact-schema";

const JOINED_KEY = "hangout-waitlist-joined";

/**
 * Optional demand signal — are people here for a couple of friends or a
 * whole group? Toggle buttons (not radios) so a pick can be undone, and
 * never required: the form submits with `crew` unset if it's ignored.
 */
const CREW_OPTIONS = [
  { value: "friends", label: "A few friends" },
  { value: "group", label: "A whole group (up to 32)" },
] as const;

type Crew = (typeof CREW_OPTIONS)[number]["value"];

const emptySubscribe = () => () => {};
function readJoined() {
  try {
    return Boolean(localStorage.getItem(JOINED_KEY));
  } catch {
    return false; // storage unavailable (private mode) — just show the form
  }
}

/**
 * The final-CTA form (design: .signup), wired to POST /api/contact with
 * the shared zod schema, a honeypot, and inline errors in the Error red.
 * Two intents: waitlist (default) and a lightweight "say hello" mode.
 * A successful waitlist signup is remembered in localStorage so a
 * revisit shows "you're on the list" instead of the empty form.
 */
export function SignupForm() {
  const [intent, setIntent] = useState<"waitlist" | "hello">("waitlist");
  const [crew, setCrew] = useState<Crew | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const okRef = useRef<HTMLParagraphElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  // Remembered signup from a previous visit (SSR renders the form).
  const joined = useSyncExternalStore(emptySubscribe, readJoined, () => false);

  useEffect(() => {
    // Focus only on an in-session success, not the remembered state.
    if (status === "sent") okRef.current?.focus();
  }, [status]);

  useEffect(() => {
    if (error) errRef.current?.focus();
  }, [error]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = new FormData(event.currentTarget);
    const input = {
      intent,
      email: String(form.get("email") ?? ""),
      message:
        intent === "hello" ? String(form.get("message") ?? "") : undefined,
      crew: intent === "waitlist" && crew ? crew : undefined,
      company: String(form.get("company") ?? ""),
    };

    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
      const fields = z.flattenError(parsed.error).fieldErrors;
      setError(
        fields.email?.[0] ?? fields.message?.[0] ?? "Check the form and try again.",
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
      if (intent === "waitlist") {
        try {
          localStorage.setItem(JOINED_KEY, "1");
        } catch {
          /* fine without persistence */
        }
      }
    } catch {
      setError("Something went wrong. Try again?");
      setStatus("idle");
    }
  }

  // Remembered waitlist success still allows switching to "say hello".
  // NOTE: the `reveal d3` class lives on this static wrapper, never on
  // elements whose className React rewrites (an intent switch would wipe
  // the observer-added `in` class and leave the form invisible).
  if (status === "sent" || (joined && intent === "waitlist")) {
    return (
      <div className="reveal d3">
        <p className="signup-ok" ref={okRef} tabIndex={-1}>
          {status === "sent" && intent === "hello"
            ? "Got it — we'll get back to you soon."
            : "You're on the list — we'll only email you when it matters."}
        </p>
        {status !== "sent" && (
          <p className="signup-fine">
            {"Questions? "}
            <button
              type="button"
              className="signup-swap"
              onClick={() => setIntent("hello")}
            >
              Say hello
            </button>
          </p>
        )}
      </div>
    );
  }

  const isHello = intent === "hello";

  return (
    <div className="reveal d3">
      <form
        className={`signup${isHello ? " hello" : ""}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="signup-row">
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            aria-label="Email address"
            aria-invalid={Boolean(error)}
            autoComplete="email"
            inputMode="email"
            enterKeyHint={isHello ? "next" : "send"}
            required
          />
          {isHello && (
            <textarea
              name="message"
              placeholder="Your message…"
              aria-label="Message"
              rows={4}
              enterKeyHint="enter"
              required
            />
          )}
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
            {status === "sending"
              ? "Sending…"
              : isHello
                ? "Send message"
                : "Get early access"}
          </button>
        </div>
        {!isHello && (
          <div
            className="crewpick"
            role="group"
            aria-labelledby="crewpick-label"
          >
            <span id="crewpick-label" className="crewpick-lab">
              {"Coordinating with… "}
              <span className="crewpick-opt">optional</span>
            </span>
            <div className="crewchips">
              {CREW_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  className={`crewchip${crew === o.value ? " on" : ""}`}
                  aria-pressed={crew === o.value}
                  onClick={() =>
                    setCrew((c) => (c === o.value ? null : o.value))
                  }
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>
      {error && (
        <p className="signup-err" role="alert" ref={errRef} tabIndex={-1}>
          {error}
        </p>
      )}
      <p className="signup-fine">
        {isHello ? (
          <>
            {"We'll reply by email. Rather join the list? "}
            <button
              type="button"
              className="signup-swap"
              onClick={() => {
                setIntent("waitlist");
                setError(null);
              }}
            >
              Get launch updates
            </button>
          </>
        ) : (
          <>
            {"One email when it launches. That's it. Questions? "}
            <button
              type="button"
              className="signup-swap"
              onClick={() => {
                setIntent("hello");
                setError(null);
              }}
            >
              Say hello instead
            </button>
          </>
        )}
      </p>
    </div>
  );
}
