// Signature ambient backdrop rendered once behind the whole site: a dot-matrix
// texture plus soft teal/blue/cyan aurora. Fixed + decorative + CSS-only, so
// it fills the space between sections and gives the page a cohesive AI feel.
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="site-mesh absolute inset-0" />
      <div className="bg-primary-600/8 absolute -top-48 left-1/2 h-[45rem] w-[70rem] -translate-x-1/2 rounded-full blur-[170px]" />
      <div className="bg-secondary-600/8 absolute top-1/2 -right-40 h-[38rem] w-[38rem] rounded-full blur-[170px]" />
      <div className="bg-accent-600/6 absolute -bottom-40 -left-40 h-[35rem] w-[35rem] rounded-full blur-[170px]" />
    </div>
  );
}
