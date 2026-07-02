// Slowly panning grid, faded toward the edges with a radial mask so it reads as
// depth rather than a hard overlay. Pure CSS (see `.moving-grid` in globals.css).
export function GridBackground() {
  return (
    <div
      aria-hidden
      className="moving-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)] opacity-40"
    />
  );
}
