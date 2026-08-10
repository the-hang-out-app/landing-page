import { Check } from "@/components/landing-bits";
import { FX } from "@/components/phone/fx";
import { PhoneMount } from "@/components/phone/phone-mount";
import { Icon } from "@/components/phone/primitives";
import { GroupWeek } from "@/components/phone/screens";

/**
 * Groups — the reusable-crew story. Additive to the one-on-one model:
 * a group is a named set of friends who are already friends with each
 * other, capped at 32 people INCLUDING the owner ("you + 31 friends" —
 * never "32 friends"). Groups add no new privacy surface, which the
 * closing rule panel says out loud.
 */
const POINTS = [
  "Name it once — your regular crew is one tap away, every week",
  "Up to 32 people (you + 31 friends)",
  "Adding is instant — they're already your friends, so there's nothing to accept",
  "Groups sit alongside one-on-one — sharing with a single friend works exactly as before",
];

const CARDS = [
  {
    icon: "users",
    title: "The group's radar",
    text: "Open the group and see how many of you are free each day this week — and the window that works for the most people.",
  },
  {
    icon: "calendar",
    title: "Everyone's week",
    text: "One grid, everyone in it, free or busy only. No event names, no places, no notes — exactly like one-on-one.",
  },
  {
    icon: "plus",
    title: "Plans for the whole crew",
    text: "Turn an open day into a group plan and the whole group is invited at once. Going, maybe or can't — one tap each, updating live.",
  },
];

export function GroupsSection() {
  return (
    <section className="band groups" id="groups">
      <div className="wrap">
        <div className="groups-main">
          <div className="groups-copy">
            <span className="kick reveal">Groups</span>
            <h2 className="sec reveal d1">Save your crew. Skip the setup.</h2>
            <p className="sec-lead reveal d2">
              {
                "Make a group for the people you actually hang with — your close five, your band, your shift crew. Up to 32 people (you + 31 friends). Everyone in it sees the group's free time and gets pulled into a plan in a tap."
              }
            </p>
            <ul className="glist reveal d3">
              {POINTS.map((p) => (
                <li key={p}>
                  <span className="ck">
                    <Check />
                  </span>{" "}
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="fmedia reveal d1">
            <div className="glow" />
            <PhoneMount
              scale={0.58}
              label="hang:out group screen for a six-person crew — free counts for each day, Saturday free for all six, and everyone's week shown as free or busy only"
              className="relative z-1"
            >
              <GroupWeek />
            </PhoneMount>
          </div>
        </div>

        <div className="fstrip groups-cards">
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className={`fitem reveal${i === 1 ? " d1" : i === 2 ? " d2" : ""}`}
            >
              <div className="fitem-ic">
                <Icon name={c.icon} size={24} stroke={FX.plum} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <div className="grule reveal">
          <div className="grule-ic">
            <Icon name="lock" size={22} stroke={FX.plumDeep} sw={2} />
          </div>
          <div>
            <p>
              <strong>
                Like a group chat, everyone in a hang:out group is already
                friends with each other
              </strong>{" "}
              {
                "— so no one ever sees a stranger's week. You can only add someone who's already your friend and already friends with everyone in the group."
              }
            </p>
            <p>
              Group or one-on-one, the rule never changes: friends see{" "}
              <em>free</em> or <em>busy</em>, {"never what you're doing."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
