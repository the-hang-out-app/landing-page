import { Check, PlayBadge } from "@/components/landing-bits";
import { PhoneMount } from "@/components/phone/phone-mount";
import { HomeResolved } from "@/components/phone/screens";
import { IS_LAUNCHED } from "@/lib/config";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow reveal">
            <span className="dot" /> Schedule sharing for friends
          </span>
          <h1 className="hero-h reveal d1">
            Find the
            <br />
            <span className="em">overlap.</span>
          </h1>
          <p className="hero-sub reveal d2">
            {
              "Different jobs, different hours. hang:out lines up everyone's shifts, classes and 9-to-5s — so you can finally find the night you're all free."
            }
          </p>
          <div className="hero-cta reveal d3">
            {IS_LAUNCHED ? (
              <PlayBadge />
            ) : (
              <a className="btn btn-primary" href="#get">
                Join the waitlist
              </a>
            )}
            <a className="btn btn-ghost" href="#how">
              See how it works
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="hero-fine reveal d4">
            <span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l7.5 3v5.2c0 4.6-3.2 7.8-7.5 9.3-4.3-1.5-7.5-4.7-7.5-9.3V6L12 3z" />
                <path d="M9 11.8l2.2 2.2L15 10" />
              </svg>{" "}
              Private by design
            </span>
            <span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.5l4.2 4.3L19 7" />
              </svg>{" "}
              Free on Android
            </span>
            <span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" />
              </svg>{" "}
              In closed testing — Play launch next
            </span>
          </div>
        </div>

        <div className="stage">
          <PhoneMount
            className="phone-mount"
            scale={0.66}
            label="hang:out home screen showing the week's availability — Saturday is free for all four friends"
          >
            <HomeResolved />
          </PhoneMount>
          <div className="float float-1" aria-hidden="true">
            <div className="ava" style={{ background: "#D6E3F0", color: "#456C8C" }}>
              S
            </div>
            <div className="float-tag" style={{ fontSize: 13.5 }}>
              Samuel is <span style={{ color: "#C2453E" }}>free Sat</span>
            </div>
          </div>
          <div className="float float-2" aria-hidden="true">
            <div className="float-tag">
              <span className="pin">
                <Check />
              </span>
              {"Everyone's free Saturday"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
