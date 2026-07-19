import Link from "next/link";

const ROWS = [
  { i: "S", bg: "#D6E3F0", fg: "#456C8C", name: "Samuel", st: "Free Sat", free: true },
  { i: "R", bg: "#DDE7DA", fg: "#5C7355", name: "Ruth", st: "Free Wed", free: true },
  { i: "T", bg: "#F0E2D6", fg: "#9C6B3C", name: "Theo", st: "Busy", free: false },
];

export function PrivacyCard() {
  return (
    <section className="band" id="privacy">
      <div className="wrap">
        <div className="privacy reveal">
          <div className="grid2">
            <div>
              <span className="kick">Private by design</span>
              <h2>
                Friends see <em>free</em> or <em>busy</em>.{" "}
                {"Never what you're doing."}
              </h2>
              <p>
                hang:out shares the one bit that matters for making plans — and
                nothing else. Event names, places and details never leave your
                phone. Contacts are matched on-device and never uploaded.
              </p>
              <Link href="/privacy" className="plink">
                Read the full privacy policy
              </Link>
            </div>
            <div className="fbcard" aria-hidden="true">
              {ROWS.map((r) => (
                <div key={r.name} className="fbrow">
                  <div
                    className="ava"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: r.bg,
                      color: r.fg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {r.i}
                  </div>
                  <div className="nm">{r.name}</div>
                  <div className={`st ${r.free ? "free" : "busy"}`}>{r.st}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
