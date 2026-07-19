import { z } from "zod";

/**
 * Shared client + server validation for the one form, two intents (PRD §6):
 * "waitlist" (email only) and "hello" (email + message).
 * `company` is a honeypot — real users never fill it.
 */
export const contactSchema = z
  .object({
    intent: z.enum(["waitlist", "hello"]),
    email: z.email("Enter a valid email address."),
    message: z.string().trim().max(2000, "Keep it under 2000 characters.").optional(),
    // Honeypot — validation must NOT reject it; the API silently drops
    // submissions where it's filled, so bots can't tell they were caught.
    company: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.intent === "hello" && !data.message) {
      ctx.addIssue({
        code: "custom",
        path: ["message"],
        message: "Write us a line or two.",
      });
    }
  });

export type ContactInput = z.infer<typeof contactSchema>;
