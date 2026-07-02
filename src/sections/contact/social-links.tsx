"use client";

import { socialLinks } from "@/constants";
import { SocialIconLink } from "@/components/shared";

// LinkedIn + GitHub for the contact block (email is shown as a contact detail,
// résumé download has its own button). Reuses the shared SocialIconLink.
const CONTACT_SOCIALS = ["LinkedIn", "GitHub"];

export function SocialLinks() {
  const items = socialLinks.filter((s) => CONTACT_SOCIALS.includes(s.label));
  return (
    <div className="flex items-center gap-3">
      {items.map((social) => (
        <SocialIconLink key={social.label} {...social} className="glass size-11" />
      ))}
    </div>
  );
}
