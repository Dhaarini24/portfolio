import type { ContactInfo } from "@/types";
import { siteConfig } from "@/constants";

// Contact details for the section, derived from the single source of truth
// (siteConfig) so nothing is hardcoded twice.
export const contactInfo: ContactInfo = {
  name: siteConfig.name,
  role: siteConfig.role,
  location: "Bengaluru, Karnataka, India",
  email: siteConfig.links.email.replace(/^mailto:/, ""),
};
