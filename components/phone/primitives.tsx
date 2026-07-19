/**
 * App design-system primitives, ported from the hang-out-designs flex-* suite
 * (flex-ui, flex-device, flex-screens, flex-home, flex-availability).
 * Server components — pure presentational trees, no client JS.
 */
import type { CSSProperties, ReactNode } from "react";
import { FX } from "./fx";

// ── Icon set — simple monochrome line glyphs ────────────────────────────────
const GLYPHS: Record<string, ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M4 7l8 5.5L20 7" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  moon: <path d="M20.5 13.2A8.5 8.5 0 1110.8 3.5a6.6 6.6 0 009.7 9.7z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </>
  ),
  cup: (
    <>
      <path d="M5 8h11v4.5a5 5 0 01-5 5h-1a5 5 0 01-5-5V8z" />
      <path d="M16 9.5h2a2 2 0 010 4h-2M7.5 4.2v1.4M11 4.2v1.4" />
    </>
  ),
  house: (
    <>
      <path d="M4 11l8-6.5 8 6.5" />
      <path d="M6 9.8V19h12V9.8" />
    </>
  ),
  sparkle: (
    <path d="M12 3.2l1.9 5.5 5.5 1.9-5.5 1.9L12 18l-1.9-5.5L4.6 10.6l5.5-1.9L12 3.2z" />
  ),
  check: <path d="M5 12.5l4.2 4.3L19 7" />,
  link: (
    <>
      <path d="M9.5 14.5l5-5" />
      <path d="M13 7.5l1.2-1.2a3.6 3.6 0 015 5L18 12.6M11 16.4l-1.2 1.2a3.6 3.6 0 01-5-5L6 11.4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  chevron: <path d="M9 5.5l6.5 6.5L9 18.5" />,
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.8" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </>
  ),
  g: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M16 12h-4v-.2M16 12a4 4 0 11-1.2-2.9" />
    </>
  ),
  rotate: (
    <>
      <path d="M20 12a8 8 0 10-2.6 5.9" />
      <path d="M20 8.5V13h-4.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.3" />
      <path d="M3.4 19.2c0-3.1 2.5-5.2 5.6-5.2s5.6 2.1 5.6 5.2" />
      <path d="M16.2 5.1a3.3 3.3 0 010 6.1M17.8 14.1c2.2.5 3.6 2.3 3.6 4.9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.2c0 4.6-3.2 7.8-7.5 9.3-4.3-1.5-7.5-4.7-7.5-9.3V6L12 3z" />
      <path d="M9 11.8l2.2 2.2L15 10" />
    </>
  ),
  lock: (
    <>
      <rect x="4.8" y="10" width="14.4" height="10" rx="2.5" />
      <path d="M8 10V7.6a4 4 0 018 0V10" />
    </>
  ),
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  map: (
    <>
      <path d="M9 4.5L3.5 6.8v12.7L9 17.2l6 2.3 5.5-2.3V4.5L15 6.8 9 4.5z" />
      <path d="M9 4.5v12.7M15 6.8v12.7" />
    </>
  ),
  bell: (
    <>
      <path d="M18 9.5a6 6 0 10-12 0c0 6-2.5 7.5-2.5 7.5h17S18 15.5 18 9.5z" />
      <path d="M10.3 20.5a2 2 0 003.4 0" />
    </>
  ),
};

export function Icon({
  name,
  size = 24,
  stroke = FX.charcoal,
  sw = 1.7,
  style,
}: {
  name: string;
  size?: number;
  stroke?: string;
  sw?: number;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {GLYPHS[name] ?? null}
    </svg>
  );
}

export function Avatar({
  initial,
  bg = FX.lavender,
  fg = FX.plumDeep,
  size = 44,
  ring,
}: {
  initial: string;
  bg?: string;
  fg?: string;
  size?: number;
  ring?: string;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        color: fg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: size * 0.4,
        fontWeight: 700,
        letterSpacing: -0.3,
        boxShadow: ring ? `0 0 0 3px ${FX.cream}, 0 0 0 4px ${ring}` : "none",
      }}
    >
      {initial}
    </div>
  );
}

export function PrimaryBtn({
  children,
  color = FX.plum,
  onColor = "#fff",
  style,
}: {
  children: ReactNode;
  color?: string;
  onColor?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        height: 54,
        borderRadius: 16,
        background: color,
        color: onColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontSize: 17,
        fontWeight: 600,
        letterSpacing: -0.2,
        boxShadow: `0 6px 18px ${color}38`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function TextLink({
  children,
  color = FX.plumDeep,
  style,
}: {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <span style={{ color, fontSize: 15, fontWeight: 600, ...style }}>
      {children}
    </span>
  );
}

export function StepBar({ step, total = 6 }: { step: number; total?: number }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 4,
            borderRadius: 2,
            flex: 1,
            background: i < step ? FX.plum : FX.mist,
          }}
        />
      ))}
    </div>
  );
}

export function Screen({
  children,
  bg = FX.cream,
  pad = 24,
  style,
}: {
  children: ReactNode;
  bg?: string;
  pad?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        height: "100%",
        background: bg,
        display: "flex",
        flexDirection: "column",
        padding: `62px ${pad}px 38px`,
        boxSizing: "border-box",
        fontFamily: FX.font,
        color: FX.charcoal,
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function FlowHead({ step, total = 6 }: { step: number; total?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 30,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: FX.white,
          border: `1px solid ${FX.line}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon
          name="chevron"
          size={18}
          stroke={FX.charcoal}
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <StepBar step={step} total={total} />
      </div>
    </div>
  );
}

export function Spinner({
  size = 22,
  color = FX.plum,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <div
      className="flexspinner"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2.5px solid ${color}33`,
        borderTopColor: color,
      }}
    />
  );
}

// ── One UI device shell (flex-device.jsx) ───────────────────────────────────
function SamsungStatusBar({ time = "9:30" }: { time?: string }) {
  const c = FX.charcoal;
  return (
    <div
      style={{
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 22px",
        position: "relative",
        fontFamily: FX.font,
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: 0.2, color: c }}>
        {time}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <svg width="17" height="13" viewBox="0 0 17 13" fill={c}>
          <rect x="0" y="9" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="6" width="3" height="7" rx="0.5" />
          <rect x="9" y="3" width="3" height="10" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="13" rx="0.5" />
        </svg>
        <svg width="16" height="13" viewBox="0 0 16 13" fill={c}>
          <path d="M8 13l8-9.2a12 12 0 00-16 0L8 13z" />
        </svg>
        <svg width="24" height="13" viewBox="0 0 24 13">
          <rect
            x="0.6"
            y="0.6"
            width="21"
            height="11.8"
            rx="3"
            fill="none"
            stroke={c}
            strokeWidth="1.1"
            opacity="0.5"
          />
          <rect x="2.4" y="2.4" width="14" height="8.2" rx="1.6" fill={c} />
          <rect x="22.4" y="4" width="1.6" height="5" rx="0.8" fill={c} opacity="0.5" />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 11,
          transform: "translateX(-50%)",
          width: 11,
          height: 11,
          borderRadius: "50%",
          background: "#0a0a0a",
          zIndex: 60,
        }}
      />
    </div>
  );
}

function GestureBar() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: 9,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 130,
          height: 4,
          borderRadius: 100,
          background: "rgba(31,41,55,0.55)",
        }}
      />
    </div>
  );
}

export function SamsungDevice({
  children,
  width = 402,
  height = 874,
}: {
  children: ReactNode;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 42,
        overflow: "hidden",
        position: "relative",
        background: FX.cream,
        boxShadow: "0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.10)",
        fontFamily: FX.font,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <SamsungStatusBar />
      </div>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflow: "hidden" }}>{children}</div>
      </div>
      <GestureBar />
    </div>
  );
}

// ── Home-screen shared bits (flex-home.jsx, flex-availability.jsx) ──────────
export function TabBar({ active = "Home" }: { active?: string }) {
  const tabs: ({ icon: string; label: string } | null)[] = [
    { icon: "house", label: "Home" },
    { icon: "calendar", label: "Schedule" },
    null,
    { icon: "users", label: "Friends" },
    { icon: "user", label: "You" },
  ];
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderTop: `1px solid ${FX.line}`,
        padding: "10px 18px 24px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      {tabs.map((t, i) =>
        t ? (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              width: 54,
            }}
          >
            <Icon
              name={t.icon}
              size={24}
              stroke={t.label === active ? FX.plum : FX.faint}
              sw={t.label === active ? 2 : 1.7}
            />
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                color: t.label === active ? FX.plum : FX.faint,
                letterSpacing: 0.1,
              }}
            >
              {t.label}
            </span>
          </div>
        ) : (
          <div key={i} style={{ width: 54, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                background: FX.plum,
                marginTop: -22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 8px 20px ${FX.plum}55`,
                border: `4px solid ${FX.cream}`,
              }}
            >
              <Icon name="plus" size={26} stroke="#fff" sw={2.2} />
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export function FreeRow({
  initial,
  bg,
  fg,
  name,
  job,
  chips,
}: {
  initial: string;
  bg: string;
  fg: string;
  name: string;
  job: string;
  chips: string[];
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "12px 0" }}>
      <div style={{ position: "relative" }}>
        <Avatar initial={initial} bg={bg} fg={fg} size={46} />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 13,
            height: 13,
            borderRadius: "50%",
            border: "2.5px solid #fff",
            background: FX.plum,
          }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: FX.charcoal }}>{name}</div>
        <div style={{ fontSize: 13, color: FX.sub, marginBottom: 6 }}>{job}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {chips.map((c) => (
            <span
              key={c}
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                color: FX.plumDeep,
                background: FX.lavWash,
                borderRadius: 8,
                padding: "4px 10px",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <Icon name="chevron" size={18} stroke={FX.faint} />
    </div>
  );
}

export function DayBadge({
  d,
  n,
  free,
  total,
  sel,
}: {
  d: string;
  n: number;
  free: number;
  total: number;
  sel?: boolean;
}) {
  const isOv = free >= total && free > 0;
  return (
    <div
      style={{
        flex: 1,
        borderRadius: 14,
        padding: "10px 0 8px",
        background: sel ? FX.plum : FX.white,
        border: `1.5px solid ${sel ? FX.plum : isOv ? FX.coral : FX.line}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        boxShadow: sel
          ? `0 8px 18px ${FX.plum}33`
          : isOv
            ? `0 6px 14px ${FX.coral}55`
            : "none",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: sel ? "rgba(255,255,255,0.85)" : FX.faint,
        }}
      >
        {d}
      </span>
      <span style={{ fontSize: 16, fontWeight: 700, color: sel ? "#fff" : FX.charcoal }}>
        {n}
      </span>
      <span
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          color: sel ? "#fff" : isOv ? FX.coralDeep : FX.sub,
          background: sel
            ? "rgba(255,255,255,0.22)"
            : isOv
              ? FX.coralWash
              : FX.mist,
          borderRadius: 8,
          padding: "2px 7px",
          minWidth: 8,
          textAlign: "center",
        }}
      >
        {free}
      </span>
    </div>
  );
}
