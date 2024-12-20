export function dashify(string: string): string {
  return string
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .split("-")
    .slice(0, 8)
    .join("-")
    .toLowerCase();
}
