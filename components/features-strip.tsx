import { FX } from "@/components/phone/fx";
import { Icon } from "@/components/phone/primitives";

/**
 * The short features grid (PRD §5 "Features strip") — the real v1 capabilities
 * that don't get their own phone-screen deep-dive. Rare-overlap alerts carry
 * the Coral reward tint (it's literally the everyone-free moment); everything
 * else is Royal Purple, per the availability-language rules.
 */
const ITEMS: {
  icon: string;
  title: string;
  text: string;
  reward?: boolean;
}[] = [
  {
    icon: "bell",
    reward: true,
    title: "Only when it's worth it",
    text: "hang:out pings you when the whole circle is free at once — and stays quiet the rest of the time.",
  },
  {
    icon: "calendar",
    title: "Free counts for every day",
    text: "Each day shows how many friends are free, so the nights that actually work jump out.",
  },
  {
    icon: "clock",
    title: "The right time, everywhere",
    text: "Free windows show in each person's own timezone — no mental maths across shifts and cities.",
  },
  {
    icon: "rotate",
    title: "Made for shift work",
    text: "Rotating rosters, nights and on-call blocks — set the rhythm your job actually runs on.",
  },
  {
    icon: "shield",
    title: "Private by consent",
    text: "You only appear to friends who've accepted. Connections always go both ways.",
  },
  {
    icon: "moon",
    title: "Honest about quiet weeks",
    text: "No overlap this week? hang:out says so and points you to the next one — never a fake slot.",
  },
];

export function FeaturesStrip() {
  return (
    <section className="band fstrip-band">
      <div className="wrap">
        <div className="center">
          <span className="kick reveal">The details</span>
          <h2
            className="sec reveal d1"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Small touches, all pulling one way
          </h2>
        </div>
        <div className="fstrip">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className={`fitem reveal${i % 3 === 1 ? " d1" : i % 3 === 2 ? " d2" : ""}`}
            >
              <div className={`fitem-ic${it.reward ? " reward" : ""}`}>
                <Icon
                  name={it.icon}
                  size={24}
                  stroke={it.reward ? FX.coralDeep : FX.plum}
                />
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
