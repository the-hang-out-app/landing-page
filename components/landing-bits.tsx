import { PLAY_STORE_URL } from "@/lib/config";

/** The lens mark — two overlapping circles, Coral where they intersect. */
export function LensMark({
  id,
  width = 38,
  height = 27,
}: {
  id: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 84" aria-hidden="true">
      <defs>
        <clipPath id={`${id}-lens`}>
          <circle cx="74" cy="42" r="30" />
        </clipPath>
      </defs>
      <circle cx="46" cy="42" r="30" fill="#6D28D9" />
      <circle cx="74" cy="42" r="30" fill="#C4B5FD" />
      <circle cx="46" cy="42" r="30" fill="#FF7F7F" clipPath={`url(#${id}-lens)`} />
    </svg>
  );
}

/** The 24×24 check path used across pins, list bullets and grid labels. */
export function Check({
  size = 13,
  stroke = "#fff",
  sw = 3,
}: {
  size?: number;
  stroke?: string;
  sw?: number;
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
    >
      <path d="M5 12.5l4.2 4.3L19 7" />
    </svg>
  );
}

/** Google Play badge — only rendered once IS_LAUNCHED is true (PRD §9). */
export function PlayBadge() {
  return (
    <a className="play" href={PLAY_STORE_URL}>
      <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden="true">
        <path
          d="M1.6 1.2 13 12 1.6 22.8a1.6 1.6 0 0 1-.6-1.3V2.5c0-.5.2-1 .6-1.3z"
          fill="#fff"
        />
        <path d="m16.5 8.4 3.6 2c1 .6 1 2.1 0 2.7l-3.6 2L13 14.6 16.5 8.4z" fill="#FF7F7F" />
        <path d="M1.6 1.2c.3-.3.8-.3 1.2 0l13.7 7.2L13 11 1.6 1.2z" fill="#C4B5FD" />
        <path d="m13 13 3.5 2.6L2.8 22.8c-.4.3-.9.3-1.2 0L13 13z" fill="#6D28D9" />
      </svg>
      <span>
        <small>Get it on</small>
        <b>Google Play</b>
      </span>
    </a>
  );
}
