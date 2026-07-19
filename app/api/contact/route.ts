import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";

// Node runtime (not edge) for the Resend SDK (PRD §6).
export const runtime = "nodejs";

const FROM = "hang:out <no-reply@hang-out.app>";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests — try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check the form.", fields: z.flattenError(parsed.error).fieldErrors },
      { status: 400 },
    );
  }

  const { intent, email, message, company } = parsed.data;

  // Honeypot: pretend success, do nothing.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      // Local dev without a key: simulate success (never log the email itself).
      return NextResponse.json({ ok: true, simulated: true });
    }
    return NextResponse.json(
      { error: "Something went wrong on our end. Email us instead." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    if (intent === "waitlist") {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID ?? "",
        unsubscribed: false,
      });
    } else {
      await resend.emails.send({
        from: FROM,
        to: process.env.CONTACT_TO ?? "hello@hang-out.app",
        replyTo: email,
        subject: "hang:out site — new message",
        text: message ?? "",
      });
    }
  } catch {
    // Never log submitted emails (PRD §6).
    return NextResponse.json(
      { error: "Something went wrong on our end. Email us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
