"use client";

import { socialLinks } from "@/constants";
import { SocialIconLink } from "@/components/shared";

// GitHub, LinkedIn, Email row for the footer. Reuses the shared SocialIconLink.
export function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => (
        <SocialIconLink key={social.label} {...social} className="glass size-10" />
      ))}
    </div>
  );
}
