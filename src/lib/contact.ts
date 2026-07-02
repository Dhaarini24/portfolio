import type { ContactFormValues } from "@/types";

/**
 * Sends a contact message via Formspree (no backend required).
 *
 * Setup (one time, ~2 minutes):
 *   1. Create a free form at https://formspree.io → it gives an endpoint like
 *      https://formspree.io/f/abcdwxyz
 *   2. Put it in `.env.local` (and your host's env vars) as:
 *      NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
 *   3. Submit the form once and confirm the verification email Formspree sends —
 *      after that, every submission is delivered to your Formspree inbox/email.
 *
 * To switch providers later (Resend via a route handler, EmailJS, etc.), only
 * this function needs to change — the form UI is untouched.
 */
export async function sendContactMessage(values: ContactFormValues): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    throw new Error(
      "Contact form is not configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment.",
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
      // Formspree uses these to set the email subject + reply-to.
      _subject: `Portfolio contact — ${values.subject}`,
      _replyto: values.email,
    }),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      errors?: { message?: string }[];
    } | null;
    throw new Error(data?.errors?.[0]?.message ?? "Failed to send message.");
  }
}
