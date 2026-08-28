/**
 * Branded HTML templates for the two emails this site sends: the "Say
 * hello" notification to the team, and the waitlist confirmation to the
 * subscriber (the waitlist ALSO writes a contact to the Resend Audience —
 * the email is a courtesy, the Audience row is the record).
 *
 * Email-client constraints: table layout, inline styles only, no external
 * assets (images are blocked by default and the wordmark PNGs aren't
 * hosted for email) — so the wordmark is styled text. Brand rules hold:
 * Dark Slate header, Royal Purple accents, the colon may be Coral against
 * slate; Coral is never a button.
 */

const COLORS = {
  cream: "#FAF9F6",
  lightLavender: "#F3E8FF",
  softLavender: "#C4B5FD",
  royal: "#6D28D9",
  coral: "#FF7F7F",
  slate: "#1F2937",
  sub: "#6B7280",
  line: "#E9E4F0",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function helloEmailHtml(input: { email: string; message: string }): string {
  const email = escapeHtml(input.email);
  const message = escapeHtml(input.message);

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:${COLORS.cream};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- header band -->
        <tr><td style="background:${COLORS.slate};border-radius:16px 16px 0 0;padding:28px 32px;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <div style="font-size:20px;font-weight:700;color:#FFFFFF;letter-spacing:-0.01em;">hang<span style="color:${COLORS.coral};">:</span>out</div>
          <div style="font-size:24px;font-weight:700;color:#FFFFFF;margin-top:14px;letter-spacing:-0.02em;">Someone said hello</div>
          <div style="font-size:13px;color:${COLORS.softLavender};margin-top:6px;">via the landing page contact form</div>
        </td></tr>

        <!-- details card -->
        <tr><td style="background:#FFFFFF;border:1px solid ${COLORS.line};border-top:0;border-radius:0 0 16px 16px;padding:8px 32px 28px;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:18px 0 14px;border-bottom:1px solid ${COLORS.line};font-size:13px;color:${COLORS.sub};width:130px;vertical-align:top;">From</td>
              <td style="padding:18px 0 14px;border-bottom:1px solid ${COLORS.line};font-size:15px;color:${COLORS.slate};vertical-align:top;">
                <a href="mailto:${email}" style="color:${COLORS.royal};text-decoration:none;font-weight:600;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0 4px;font-size:13px;color:${COLORS.sub};vertical-align:top;">Message</td>
              <td style="padding:16px 0 4px;font-size:15px;line-height:1.6;color:${COLORS.slate};vertical-align:top;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>

          <!-- reply hint -->
          <div style="margin-top:24px;background:${COLORS.lightLavender};border-radius:10px;padding:12px 16px;font-size:13px;color:${COLORS.slate};">
            Hit <strong>reply</strong> to answer — it goes straight to the sender.
          </div>
        </td></tr>

        <!-- footer -->
        <tr><td align="center" style="padding:20px 16px 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:12px;color:${COLORS.sub};">
          Sent by the hang:out landing page &middot; <a href="https://the.hang-out.app" style="color:${COLORS.royal};text-decoration:none;">the.hang-out.app</a> &middot; Find the overlap.
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/** Plain-text alternative (deliverability + text-only clients). */
export function helloEmailText(input: { email: string; message: string }): string {
  return [
    "hang:out — someone said hello (via the landing page contact form)",
    "",
    `From: ${input.email}`,
    "",
    input.message,
    "",
    "Reply to this email to answer directly.",
    "the.hang-out.app · Find the overlap.",
  ].join("\n");
}

/**
 * Confirmation sent to someone who joins the waitlist. Transactional —
 * it acknowledges an action they just took — but it still names why they
 * got it and how to get off the list, because the address was never
 * double-opted-in.
 *
 * Same email-client constraints as above: table layout, inline styles,
 * no external assets. Takes no arguments — never echo the subscriber's
 * address back into the body.
 */
export function waitlistEmailHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:${COLORS.cream};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- header band -->
        <tr><td style="background:${COLORS.slate};border-radius:16px 16px 0 0;padding:28px 32px;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <div style="font-size:20px;font-weight:700;color:#FFFFFF;letter-spacing:-0.01em;">hang<span style="color:${COLORS.coral};">:</span>out</div>
          <div style="font-size:24px;font-weight:700;color:#FFFFFF;margin-top:14px;letter-spacing:-0.02em;">You're on the list</div>
          <div style="font-size:13px;color:${COLORS.softLavender};margin-top:6px;">Find the overlap.</div>
        </td></tr>

        <!-- body card -->
        <tr><td style="background:#FFFFFF;border:1px solid ${COLORS.line};border-top:0;border-radius:0 0 16px 16px;padding:28px 32px;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${COLORS.slate};">
            Thanks for signing up. hang<span style="color:${COLORS.royal};">:</span>out finds the time that
            actually works for everyone — no more scrolling back through a group chat to
            work out when people are free.
          </p>
          <p style="margin:0;font-size:15px;line-height:1.6;color:${COLORS.slate};">
            We'll send <strong>one email when it launches</strong>. That's it — no newsletter,
            nothing else in between.
          </p>

          <!-- reply hint -->
          <div style="margin-top:24px;background:${COLORS.lightLavender};border-radius:10px;padding:12px 16px;font-size:13px;color:${COLORS.slate};">
            Questions? Just hit <strong>reply</strong> — it reaches a real person.
          </div>
        </td></tr>

        <!-- footer -->
        <tr><td align="center" style="padding:20px 16px 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:${COLORS.sub};">
          You're getting this because you joined the waitlist at
          <a href="https://the.hang-out.app" style="color:${COLORS.royal};text-decoration:none;">the.hang-out.app</a>.<br>
          Not you, or changed your mind? Reply with &ldquo;remove&rdquo; and you're off the list.
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/** Plain-text alternative (deliverability + text-only clients). */
export function waitlistEmailText(): string {
  return [
    "hang:out — you're on the list",
    "",
    "Thanks for signing up. hang:out finds the time that actually works for",
    "everyone — no more scrolling back through a group chat to work out when",
    "people are free.",
    "",
    "We'll send one email when it launches. That's it — no newsletter,",
    "nothing else in between.",
    "",
    "Questions? Just reply to this email — it reaches a real person.",
    "",
    "You're getting this because you joined the waitlist at the.hang-out.app.",
    'Not you, or changed your mind? Reply with "remove" and you\'re off the list.',
    "the.hang-out.app · Find the overlap.",
  ].join("\n");
}
