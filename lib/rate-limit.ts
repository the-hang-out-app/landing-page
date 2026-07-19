/**
 * Basic per-IP rate limiting for /api/contact (PRD §6).
 * In-memory is fine at this scale; resets on redeploy.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const MAX_ENTRIES = 5_000;

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > MAX_ENTRIES) {
    for (const [key, timestamps] of hits) {
      if (timestamps.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}
