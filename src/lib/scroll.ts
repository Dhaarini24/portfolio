// Smooth-scrolls to a section anchor, accounting for the fixed navbar height.
// Lives in lib/ (not utils/) because it touches the DOM/window (side effects).
const NAV_OFFSET = 96;

export function scrollToSection(href: string, offset = NAV_OFFSET) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
  window.history.replaceState(null, "", href);
}

export function scrollToTop() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  window.history.replaceState(null, "", " ");
}
