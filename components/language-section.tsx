import { Check } from "@/components/landing-bits";
import { WeekGrid } from "@/components/week-grid";

export function LanguageSection() {
  return (
    <section className="band lang" id="language">
      <div className="wrap">
        <div className="grid2">
          <div className="lang-copy">
            <span className="kick reveal">The grid</span>
            <h2 className="sec reveal d1">
              {"One look tells you the night you're all free"}
            </h2>
            <p className="sec-lead reveal d2">
              hang:out speaks one visual language everywhere.{" "}
              <strong style={{ color: "var(--slate)" }}>
                Busy recedes. Free is open space. A match glows.
              </strong>{" "}
              No legends to learn, no colors to decode — just glance and go.
            </p>
            <div className="legend reveal d3">
              <div className="it">
                <span className="sw" style={{ background: "#F3E8FF" }} /> Busy
              </div>
              <div className="it">
                <span className="sw" style={{ background: "#fff" }} /> Free
              </div>
              <div className="it">
                <span className="sw" style={{ background: "#FF7F7F" }} /> Everyone free
              </div>
            </div>
          </div>
          <div className="lang-cardwrap reveal d2">
            <div className="lang-card">
              <div className="hd">
                <b>This week</b>
                <span>{"Everyone's free Saturday"}</span>
              </div>
              <WeekGrid />
              <div className="matchcallout">
                <span className="pin">
                  <Check />
                </span>
                <b>{"Saturday's wide open — all 4 free"}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
