import type { SocialLink } from "@/types";
import { siteConfig } from "./site";

// `icon` is a lucide-react icon name (string), resolved to a component where
// it's rendered — keeps this data layer free of React/UI dependencies.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.links.github, icon: "Github" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: "Linkedin" },
  { label: "Email", href: siteConfig.links.email, icon: "Mail" },
];
