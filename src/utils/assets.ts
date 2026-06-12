/** Resolve public folder paths for GitHub Pages base URL (e.g. /shrikar-portfolio/). */
export function publicAsset(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL;
  return `${base}${clean}`;
}
