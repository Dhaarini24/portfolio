import type { NavItem } from "@/types";

// Single source of truth for the primary navigation. Rendered dynamically by
// the Navbar and MobileMenu — never hardcode links in components.
// `href` doubles as the section anchor; the id is derived as `href.slice(1)`.
export const navLinks: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];
