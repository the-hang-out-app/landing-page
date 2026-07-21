import type { ReactNode } from "react";
import { Check } from "@/components/landing-bits";
import { PhoneMount } from "@/components/phone/phone-mount";
import {
  CalendarSyncStates,
  MakePlan,
  PlanDetail,
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
  id,
  tag,
  title,
  body,
  items,
  media,
  label,
}: {
  flip?: boolean;
  id?: string;
  tag: string;
  title: string;
  body: string;
  items: ReactNode[];
  media: ReactNode;
  label: string;
}) {
  return (
    <div className={`feat${flip ? " flip" : ""}`} id={id}>
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
          className="relative z-1"
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
            "Re-reads your calendar each time you open the app",
            "Disconnect in one tap, any time",
          ]}
          media={<CalendarSyncStates />}
          label="hang:out calendar-connection screen linking Samsung, Google and Outlook calendars"
        />

        <Feat
          id="plans"
          tag="From free time to plans"
          title="Turn an overlap into an actual hang"
          body={
            "Tap an open day and the plan is half-written — the free window is already there. Pick a time of day, add a title or place if you like, and send it to whoever's free."
          }
          items={[
            <span key="1">
              Pick a time — morning, afternoon, evening or all day
            </span>,
            <span key="2">Add a title and place — both optional</span>,
            <span key="3">
              Everyone who&apos;s free is pre-invited; add anyone else in a tap
            </span>,
          ]}
          media={<MakePlan />}
          label="hang:out make-a-plan screen proposing Saturday with all four friends free"
        />

        <Feat
          flip
          tag="Yes, maybe, can't"
          title="Everyone answers in a tap — and you watch it live"
          body={
            "Friends reply right inside hang:out, and the guest list updates the moment someone responds — no chasing, no “did everyone see this?”. When it comes together it's confirmed; if it fizzles, hang:out points you at the next open night."
          }
          items={[
            "Going, maybe or can't — one tap each",
            "The attendee list updates live as replies land",
            <span key="3">
              Confirmed when it comes together — or the next overlap if it
              doesn&apos;t
            </span>,
          ]}
          media={<PlanDetail />}
          label="hang:out plan screen for Saturday brunch showing live RSVPs — two going, one maybe, one invited"
        />
      </div>
    </section>
  );
}
