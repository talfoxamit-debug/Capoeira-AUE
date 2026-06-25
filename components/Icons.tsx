/**
 * Lightweight inline SVG icons. Stroke-based, inherit `currentColor`.
 * Add new icons here and reference them by key from the content config.
 */
import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const WhatsAppIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const GlobeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);

export const ChevronDown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const PlayIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const ArrowRight = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---- Feature / category icons (keyed by string in content config) ---- */

const Movement = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="4.5" r="2" />
    <path d="M12 6.5v5m0 0 4 3m-4-3-4 3m4-3 3-2m-3 2-3-2" />
    <path d="m8 21 1.5-6.5M16 21l-1.5-6.5" />
  </svg>
);

const Music = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9 18V5l11-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </svg>
);

const Defense = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Community = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M3 19a6 6 0 0 1 12 0M15 19a5 5 0 0 1 6-4.5" />
  </svg>
);

const Spark = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2 2m-9 9-2 2m13 0-2-2m-9-9-2-2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Adult = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="6" r="3" />
    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
  </svg>
);

const Family = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="8" cy="7" r="2.6" />
    <circle cx="16" cy="8" r="2.2" />
    <circle cx="12" cy="13" r="1.8" />
    <path d="M4 20a4 4 0 0 1 8 0M12 20a4 4 0 0 1 8 0M9 20a3 3 0 0 1 6 0" />
  </svg>
);

const Advanced = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m12 3 2.4 5 5.6.7-4 3.9 1 5.4L12 15.9 6.9 18l1-5.4-4-3.9 5.6-.7L12 3Z" />
  </svg>
);

const Private = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="m18.5 4.5 1.2 1.2-3 3-1.2-1.2 3-3Z" />
  </svg>
);

const iconMap: Record<string, (props: IconProps) => ReactElement> = {
  movement: Movement,
  music: Music,
  defense: Defense,
  community: Community,
  spark: Spark,
  adult: Adult,
  family: Family,
  advanced: Advanced,
  private: Private,
};

export function FeatureIcon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = iconMap[name] ?? Spark;
  return <Cmp {...props} />;
}
