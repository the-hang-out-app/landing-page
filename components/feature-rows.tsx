import type { ReactNode } from "react";
import { Check } from "@/components/landing-bits";
import { PhoneMount } from "@/components/phone/phone-mount";
import {
  CalendarSyncStates,
  MakePlan,
  ShiftWeek,
} from "@/components/phone/screens";

function Li({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className="ck">
        <Check />
      </span>{" "}
      {children}
    </li>
  );
}

function Feat({
  flip,
  tag,
  title,
  body,
  items,
  media,
  label,
}: {
  flip?: boolean;
  tag: string;
  title: string;
  body: string;
  items: ReactNode[];
  media: ReactNode;
  label: string;
}) {
  return (
    <div className={`feat${flip ? " flip" : ""}`}>
      <div className="fcopy reveal">
        <span className="tag">{tag}</span>
        <h3>{title}</h3>
        <p>{body}</p>
        <ul>
          {items.map((it, i) => (
            <Li key={i}>{it}</Li>
          ))}
        </ul>
      </div>
      <div className="fmedia reveal d1">
        <div className="glow" />
        <PhoneMount
          scale={0.58}
          label={label}
          className="relative z-[1]"
        >
          {media}
        </PhoneMount>
      </div>
    </div>
  );
}

export function FeatureRows() {
  return (
    <section className="band" id="features">
      <div className="wrap">
        <Feat
          tag="No calendar? No problem"
          title="Punch in your shifts in seconds"
          body={
            "Rotating roster, split shifts, overnight weeks — type them straight in. hang:out is built for the jobs that don't fit a 9-to-5 calendar."
          }
          items={[
            "Day, evening, night and on-call blocks",
            "Repeat a pattern across every week",
            "Off-days become free time automatically",
          ]}
          media={<ShiftWeek />}
          label="hang:out shift-entry screen with a week of day, evening and night shifts"
        />

        <Feat
          flip
          tag="Set it and forget it"
          title="Or connect the calendar you already use"
          body={
            "Link Samsung, Google or Outlook and your free / busy stays current on its own. We only ever read whether you're busy — never what you're doing."
          }
          items={[
            "Samsung, Google & Outlook supported",
            "Updates the moment your plans change",
            "Disconnect in one tap, any time",
          ]}
          media={<CalendarSyncStates />}
          label="hang:out calendar-connection screen linking Samsung, Google and Outlook calendars"
        />

        <Feat
          tag="From free time to plans"
          title="Turn an overlap into an actual hang"
          body={
            "Tap the open day and the proposal writes itself — time, place, who's free. Friends RSVP in a tap, so the plan happens instead of fizzling in the chat."
          }
          items={[
            <span key="1">
              The overlap window <em>is</em> the invite
            </span>,
            <span key="2">One-tap RSVPs &amp; live attendee list</span>,
            <span key="3">{'A quick "anyone free Thursday?" broadcast'}</span>,
          ]}
          media={<MakePlan />}
          label="hang:out make-a-plan screen proposing Saturday with all four friends free"
        />
      </div>
    </section>
  );
}
