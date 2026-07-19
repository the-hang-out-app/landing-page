/**
 * The four app screens the landing page shows inside device frames, ported
 * from hang-out-designs (flex-resolved, flex-shifts, flex-system, flex-plan).
 * Server components — static mockups, no client JS.
 */
import type { CSSProperties, ReactNode } from "react";
import { FX } from "./fx";
import {
  Avatar,
  DayBadge,
  FlowHead,
  FreeRow,
  Icon,
  PrimaryBtn,
  Screen,
  Spinner,
  TabBar,
  TextLink,
} from "./primitives";

const FRIENDS4 = [
  { initial: "M", bg: FX.lavender, fg: FX.plumDeep },
  { initial: "S", bg: "#D6E3F0", fg: "#456C8C" },
  { initial: "R", bg: "#DDE7DA", fg: "#5C7355" },
  { initial: "T", bg: "#F0E2D6", fg: "#9C6B3C" },
];

// ── Home · "Who's free" with the resolved Saturday overlap ──────────────────
export function HomeResolved() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: FX.cream,
        fontFamily: FX.font,
        color: FX.charcoal,
      }}
    >
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "62px 22px 0",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <div>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: FX.faint,
              }}
            >
              This week · Jun 2–8
            </div>
            <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: -0.7, marginTop: 3 }}>
              {"Who's free"}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: FX.white,
                border: `1px solid ${FX.line}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Icon name="bell" size={20} stroke={FX.charcoal} />
              <div
                style={{
                  position: "absolute",
                  top: 9,
                  right: 10,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: FX.plum,
                  border: "1.5px solid #fff",
                }}
              />
            </div>
            <Avatar initial="M" bg={FX.lavender} fg={FX.plumDeep} size={40} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <DayBadge d="M" n={2} free={1} total={4} />
          <DayBadge d="T" n={3} free={2} total={4} />
          <DayBadge d="W" n={4} free={3} total={4} />
          <DayBadge d="T" n={5} free={2} total={4} />
          <DayBadge d="F" n={6} free={1} total={4} />
          <DayBadge d="S" n={7} free={4} total={4} sel />
          <DayBadge d="S" n={8} free={3} total={4} />
        </div>
        <div
          style={{
            borderRadius: 22,
            padding: 20,
            background: `linear-gradient(150deg, ${FX.coralWash} 0%, #FFD6D6 100%)`,
            border: `1px solid ${FX.sage}44`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: FX.plum,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="check" size={12} stroke="#fff" sw={2.8} />
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                color: FX.sageDeep,
              }}
            >
              Best time to meet
            </span>
          </div>
          <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: -0.5 }}>
            {"Saturday's wide open"}
          </div>
          <div style={{ fontSize: 14, color: FX.sub, margin: "3px 0 16px" }}>
            All 4 friends free · Jun 7
          </div>
          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              {FRIENDS4.map((a, i) => (
                <div key={i} style={{ marginLeft: i ? -10 : 0 }}>
                  <Avatar initial={a.initial} bg={a.bg} fg={a.fg} size={34} ring="#fff" />
                </div>
              ))}
            </div>
            <div
              style={{
                background: FX.plum,
                color: "#fff",
                fontSize: 14.5,
                fontWeight: 600,
                padding: "11px 20px",
                borderRadius: 13,
                display: "flex",
                alignItems: "center",
                gap: 7,
                boxShadow: `0 6px 16px ${FX.plum}44`,
              }}
            >
              <Icon name="plus" size={17} stroke="#fff" sw={2.2} />
              Make a plan
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: FX.faint,
              }}
            >
              Your friends
            </span>
            <TextLink>See all</TextLink>
          </div>
          <FreeRow
            initial="S"
            bg="#D6E3F0"
            fg="#456C8C"
            name="Samuel"
            job="Developer · 9-to-5"
            chips={["Sat", "Sun"]}
          />
          <div style={{ height: 1, background: FX.lineSoft }} />
          <FreeRow
            initial="R"
            bg="#DDE7DA"
            fg="#5C7355"
            name="Ruth"
            job="Doctor · rotating shifts"
            chips={["Wed", "Sat"]}
          />
        </div>
      </div>
      <TabBar />
    </div>
  );
}

// ── Shifts · manual shift week (flex-shifts.jsx) ────────────────────────────
function ShiftBlock({ time, label, color }: { time: string; label: string; color: string }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: FX.white,
        border: `1px solid ${FX.line}`,
        borderRadius: 13,
        padding: "11px 14px",
      }}
    >
      <div style={{ width: 4, height: 34, borderRadius: 3, background: color }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15.5, fontWeight: 700, color: FX.charcoal, letterSpacing: -0.2 }}>
          {time}
        </div>
        <div style={{ fontSize: 12.5, color: FX.sub }}>{label}</div>
      </div>
      <Icon name="chevron" size={16} stroke={FX.faint} />
    </div>
  );
}

function DayRow({
  wd,
  date,
  children,
  off,
}: {
  wd: string;
  date: string;
  children: ReactNode;
  off?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "stretch", gap: 14, minHeight: 54 }}>
      <div
        style={{
          width: 40,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: FX.faint, letterSpacing: 0.3 }}>
          {wd}
        </span>
        <span style={{ fontSize: 18, fontWeight: 700, color: off ? FX.faint : FX.charcoal }}>
          {date}
        </span>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>{children}</div>
    </div>
  );
}

function EmptyDay() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 8,
        border: `1.5px dashed ${FX.mist}`,
        borderRadius: 13,
        padding: "12px 14px",
        color: FX.faint,
      }}
    >
      <Icon name="plus" size={17} stroke={FX.faint} sw={2} />
      <span style={{ fontSize: 14, fontWeight: 600 }}>Add shift</span>
    </div>
  );
}

function OffDay() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: FX.sageWash,
        borderRadius: 13,
        padding: "12px 14px",
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: FX.plum,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="check" size={11} stroke="#fff" sw={2.8} />
      </div>
      <span style={{ fontSize: 14, fontWeight: 700, color: FX.plumDeep }}>
        Off · free all day
      </span>
    </div>
  );
}

export function ShiftWeek() {
  return (
    <Screen pad={22} style={{ justifyContent: "flex-start" }}>
      <FlowHead step={5} />
      <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: -0.6, marginBottom: 7 }}>
        Add your shifts
      </div>
      <div
        style={{
          fontSize: 15.5,
          color: FX.sub,
          marginBottom: 14,
          lineHeight: 1.4,
          textWrap: "pretty",
        }}
      >
        {"Punch in this week's roster — hang:out turns it into free/busy, no calendar needed."}
      </div>
      <div
        style={{
          display: "flex",
          background: FX.mist,
          borderRadius: 12,
          padding: 4,
          marginBottom: 14,
        }}
      >
        {["This week", "Repeating"].map((t, i) => (
          <div
            key={t}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "8px 0",
              borderRadius: 9,
              fontSize: 14,
              fontWeight: 600,
              background: i === 0 ? FX.white : "transparent",
              color: i === 0 ? FX.charcoal : FX.sub,
              boxShadow: i === 0 ? "0 1px 3px rgba(45,45,45,0.10)" : "none",
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        <DayRow wd="MON" date="2">
          <ShiftBlock time="7:00 a.m. – 3:00 p.m." label="Day shift" color={FX.sage} />
        </DayRow>
        <DayRow wd="TUE" date="3">
          <ShiftBlock time="3:00 p.m. – 11:00 p.m." label="Evening shift" color={FX.lavender} />
        </DayRow>
        <DayRow wd="WED" date="4">
          <EmptyDay />
        </DayRow>
        <DayRow wd="THU" date="5">
          <ShiftBlock time="11:00 p.m. – 7:00 a.m." label="Night shift" color={FX.plum} />
        </DayRow>
        <DayRow wd="FRI" date="6">
          <EmptyDay />
        </DayRow>
        <DayRow wd="SAT" date="7" off>
          <OffDay />
        </DayRow>
        <DayRow wd="SUN" date="8" off>
          <OffDay />
        </DayRow>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          marginTop: 12,
          color: FX.plumDeep,
        }}
      >
        <Icon name="rotate" size={17} stroke={FX.plumDeep} />
        <span style={{ fontSize: 14.5, fontWeight: 600 }}>
          Repeat this pattern every week
        </span>
      </div>
      <div style={{ marginTop: "auto", paddingTop: 16 }}>
        <PrimaryBtn>Save schedule</PrimaryBtn>
      </div>
    </Screen>
  );
}

// ── Calendar sync states (flex-system.jsx) ──────────────────────────────────
function SyncRow({
  icon,
  name,
  state,
}: {
  icon: string;
  name: string;
  state: "linked" | "connecting" | "failed";
}) {
  const right: Record<string, ReactNode> = {
    linked: (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 14,
          fontWeight: 600,
          color: FX.sageDeep,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: FX.plum,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="check" size={12} stroke="#fff" sw={2.8} />
        </div>
        Linked
      </span>
    ),
    connecting: (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 14,
          fontWeight: 600,
          color: FX.plumDeep,
        }}
      >
        <Spinner size={18} />
        Connecting…
      </span>
    ),
    failed: (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 14,
          fontWeight: 700,
          color: FX.err,
        }}
      >
        Retry
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 9,
            background: FX.errWash,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="rotate" size={16} stroke={FX.err} />
        </div>
      </span>
    ),
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: FX.white,
        border: `1px solid ${state === "failed" ? FX.err + "66" : FX.line}`,
        borderRadius: 16,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 11,
          background: FX.cream,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={22} stroke={FX.charcoal} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 13, color: state === "failed" ? FX.err : FX.sub }}>
          {state === "failed" ? "Couldn't sync — check permissions" : "Work & personal"}
        </div>
      </div>
      {right[state]}
    </div>
  );
}

export function CalendarSyncStates() {
  return (
    <Screen pad={24} style={{ justifyContent: "flex-start" }}>
      <FlowHead step={5} />
      <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.6, marginBottom: 7 }}>
        Bring your schedule in
      </div>
      <div style={{ fontSize: 15.5, color: FX.sub, marginBottom: 22, lineHeight: 1.45 }}>
        Connect once and hang:out keeps your free / busy current.
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SyncRow icon="calendar" name="Samsung Calendar" state="linked" />
        <SyncRow icon="g" name="Google Calendar" state="connecting" />
        <SyncRow icon="mail" name="Outlook" state="failed" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          marginTop: 20,
          background: FX.lavWash,
          borderRadius: 14,
          padding: "14px 16px",
        }}
      >
        <Icon
          name="lock"
          size={18}
          stroke={FX.plumDeep}
          sw={2}
          style={{ marginTop: 1, flexShrink: 0 }}
        />
        <span style={{ fontSize: 13.5, lineHeight: 1.45 }}>
          Friends only ever see <b>free or busy</b> — never your event names or details.
        </span>
      </div>
      <div style={{ marginTop: "auto", paddingTop: 18 }}>
        <PrimaryBtn>Continue</PrimaryBtn>
      </div>
    </Screen>
  );
}

// ── Make a plan (flex-plan.jsx) ─────────────────────────────────────────────
const PEOPLE = [
  { initial: "M", bg: FX.lavender, fg: FX.plumDeep, name: "Maya" },
  { initial: "S", bg: "#D6E3F0", fg: "#456C8C", name: "Samuel" },
  { initial: "R", bg: "#DDE7DA", fg: "#5C7355", name: "Ruth" },
  { initial: "T", bg: "#F0E2D6", fg: "#9C6B3C", name: "Theo" },
];

function OptField({ icon, label, value }: { icon: string; label: string; value?: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: FX.white,
        border: `1px solid ${FX.line}`,
        borderRadius: 14,
        padding: "14px 16px",
      }}
    >
      <Icon name={icon} size={20} stroke={value ? FX.charcoal : FX.faint} />
      <span style={{ flex: 1, fontSize: 16, color: value ? FX.charcoal : FX.faint }}>
        {value || label}
      </span>
    </div>
  );
}

export function MakePlan() {
  const timeBand: CSSProperties = { borderRadius: 10, fontSize: 12.5, fontWeight: 600 };
  return (
    <Screen pad={24} style={{ justifyContent: "flex-start" }}>
      <div style={{ marginTop: 4 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>
            Make a plan
          </span>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: FX.mist,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="plus"
              size={16}
              stroke={FX.sub}
              sw={2}
              style={{ transform: "rotate(45deg)" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(150deg, ${FX.coralWash} 0%, #FFD6D6 100%)`,
          borderRadius: 20,
          border: `1px solid ${FX.sage}44`,
          padding: "18px 20px",
          margin: "14px 0 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: FX.plum,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="check" size={12} stroke="#fff" sw={2.8} />
          </div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.4,
              textTransform: "uppercase",
              color: FX.sageDeep,
            }}
          >
            {"Everyone's free"}
          </span>
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.6 }}>
          Saturday, Jun 7
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
          {["All day", "Morning", "Afternoon", "Evening"].map((t, i) => (
            <div
              key={t}
              style={{
                ...timeBand,
                flex: 1,
                minWidth: 0,
                padding: "8px 6px",
                background: i === 0 ? FX.plum : "#fff",
                color: i === 0 ? "#fff" : FX.sub,
                textAlign: "center",
                whiteSpace: "nowrap",
                border: `1px solid ${i === 0 ? FX.plum : FX.line}`,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
        <OptField icon="sparkle" label="Add a title (optional)" value="Saturday brunch" />
        <OptField icon="map" label="Add a place (optional)" />
      </div>
      <div
        style={{
          fontSize: 12.5,
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          color: FX.faint,
          marginBottom: 12,
        }}
      >
        Who · all 4 free
      </div>
      <div style={{ display: "flex", gap: 14 }}>
        {PEOPLE.map((p) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <Avatar initial={p.initial} bg={p.bg} fg={p.fg} size={50} />
              <div
                style={{
                  position: "absolute",
                  bottom: -2,
                  right: -2,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: FX.plum,
                  border: "2.5px solid " + FX.cream,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="check" size={11} stroke="#fff" sw={3} />
              </div>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: FX.sub }}>{p.name}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", paddingTop: 20 }}>
        <PrimaryBtn>Send plan to 3 friends</PrimaryBtn>
      </div>
    </Screen>
  );
}
