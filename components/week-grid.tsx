import { Check } from "@/components/landing-bits";

/**
 * The bespoke animated week grid from the "availability language" section —
 * server-rendered version of buildGrid() in hang-out-designs/landing.js.
 * RevealObserver adds `.in`/`.lit` when it scrolls into view; without JS the
 * CSS fallback shows the final matched state.
 */
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

// 1 = free, 0 = busy · column 5 (Saturday) is the full-group overlap
const MATRIX = [
  [0, 1, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1],
];
const OVERLAP = new Set([5]);

const AVATARS = [
  { i: "M", bg: "#C4B5FD", fg: "#5B21B6" },
  { i: "S", bg: "#D6E3F0", fg: "#456C8C" },
  { i: "R", bg: "#DDE7DA", fg: "#5C7355" },
  { i: "T", bg: "#F0E2D6", fg: "#9C6B3C" },
];

export function WeekGrid() {
  return (
    <div className="wg" aria-hidden="true">
      <div className="col id">
        <div className="lab">x</div>
        {AVATARS.map((a) => (
          <div key={a.i} className="ava" style={{ background: a.bg, color: a.fg }}>
            {a.i}
          </div>
        ))}
      </div>
      {DAYS.map((d, c) => {
        const match = OVERLAP.has(c);
        return (
          <div key={c} className={`col${match ? " match" : ""}`}>
            <div className="lab">
              {match ? (
                <span className="check">
                  <Check stroke="currentColor" />
                </span>
              ) : (
                d
              )}
            </div>
            {MATRIX.map((row, r) => {
              const free = row[c] === 1;
              const m = match && free;
              return (
                <div
                  key={r}
                  className={`cell${free && !m ? " free" : ""}${m ? " m" : ""}`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
