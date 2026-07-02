// Expects "YYYY-MM" strings, as used by the Experience data model.
export function formatDate(date: string): string {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
