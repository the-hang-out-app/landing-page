import type { ReactNode } from "react";
import { SamsungDevice } from "./primitives";

const W = 402;
const H = 874;

/**
 * Renders an app screen inside the Samsung frame, scaled down to fit the
 * layout (the design mounts 402×874 screens at 0.66 / 0.58). The wrapper is
 * one semantic image; the mockup's internals are hidden from AT.
 */
export function PhoneMount({
  children,
  scale = 0.58,
  label,
  className,
}: {
  children: ReactNode;
  scale?: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={className}
      style={{ width: Math.round(W * scale), height: Math.round(H * scale) }}
    >
      <div
        aria-hidden="true"
        className="scaler"
        style={{ transform: `scale(${scale})`, width: W, height: H }}
      >
        <SamsungDevice>{children}</SamsungDevice>
      </div>
    </div>
  );
}
