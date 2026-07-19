const STEPS = [
  {
    title: "Add your schedule",
    text: "Connect a calendar, or punch in your shifts by hand. hang:out turns it into simple free / busy — no calendar required.",
    glyph: (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    title: "See everyone's free time",
    text: "Your friends' weeks line up in one grid. The moment a day is open for the whole group, it lights up.",
    glyph: (
      <>
        <circle cx="9" cy="8" r="3.3" />
        <path d="M3.4 19.2c0-3.1 2.5-5.2 5.6-5.2s5.6 2.1 5.6 5.2" />
        <path d="M16.2 5.1a3.3 3.3 0 0 1 0 6.1M17.8 14.1c2.2.5 3.6 2.3 3.6 4.9" />
      </>
    ),
  },
  {
    title: "Make the plan",
    text: "Tap the overlap to turn it into a hang. Everyone RSVPs in a tap — no more group-chat ping-pong.",
    glyph: <path d="M12 5v14M5 12h14" />,
  },
];

export function HowItWorks() {
  return (
    <section className="band" id="how">
      <div className="wrap">
        <div className="center">
          <span className="kick reveal">How it works</span>
          <h2
            className="sec reveal d1"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {"Three taps from “when are you free?” to a plan"}
          </h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.title} className={`step reveal d${i + 1}`}>
              <div className="ic">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.glyph}
                </svg>
              </div>
              <div className="n">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
