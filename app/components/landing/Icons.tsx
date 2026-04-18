import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  );
}

export function MessageCircle(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 18.5 3.5 21V6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 18 17H8.4L7 18.5Z" />
    </IconBase>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5 5.5 6v5.6c0 4.1 2.7 7.9 6.5 8.9 3.8-1 6.5-4.8 6.5-8.9V6L12 3.5Z" />
      <path d="m9.5 12 1.8 1.8 3.7-4" />
    </IconBase>
  );
}

export function Radar(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 12 19 5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M5.7 5.7a9 9 0 0 1 12.6 0" />
      <path d="M8.5 8.5a5 5 0 0 1 7 0" />
      <path d="M4 12a8 8 0 0 0 16 0" />
    </IconBase>
  );
}

export function Cpu(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1.5v3" />
      <path d="M15 1.5v3" />
      <path d="M9 19.5v3" />
      <path d="M15 19.5v3" />
      <path d="M1.5 9h3" />
      <path d="M1.5 15h3" />
      <path d="M19.5 9h3" />
      <path d="M19.5 15h3" />
    </IconBase>
  );
}

export function Satellite(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m4 20 4-4" />
      <path d="m6.5 9.5 8 8" />
      <rect x="8" y="4.5" width="4" height="4" rx="1" transform="rotate(45 10 6.5)" />
      <path d="M12.5 11.5 16 8" />
      <path d="M15.5 4.5 19 8" />
      <path d="M16 8h4" />
      <path d="m12 12-2.5 2.5" />
      <path d="M4.5 15.5 8 19" />
      <path d="M8 19v4" />
    </IconBase>
  );
}

export function Smartphone(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10 5.5h4" />
      <path d="M11.5 18.5h1" />
    </IconBase>
  );
}

export function BellRing(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6.5 17h11l-1.3-1.8a2.5 2.5 0 0 1-.5-1.5V11a3.7 3.7 0 0 0-7.4 0v2.7a2.5 2.5 0 0 1-.5 1.5L6.5 17Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
      <path d="M4.5 8a4.5 4.5 0 0 1 2-3.1" />
      <path d="M19.5 8a4.5 4.5 0 0 0-2-3.1" />
    </IconBase>
  );
}

export function MapPinned(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </IconBase>
  );
}

export function Camera(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 7.5h3l1.5-2h6l1.5 2h3A1.5 1.5 0 0 1 21 9v8.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5V9a1.5 1.5 0 0 1 1.5-1.5Z" />
      <circle cx="12" cy="13" r="3.5" />
    </IconBase>
  );
}

export function Aperture(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.6 4.1-5.2 9" />
      <path d="m19.6 10.2-10.4.1" />
      <path d="m14.2 19.8-5.2-9" />
    </IconBase>
  );
}

export function CloudUpload(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 18.5h9a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.7A4.2 4.2 0 0 0 7 18.5Z" />
      <path d="M12 15V9" />
      <path d="m9.5 11.5 2.5-2.5 2.5 2.5" />
    </IconBase>
  );
}

export function DoorOpen(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 20.5h14" />
      <path d="M7 20.5V5.5a1 1 0 0 1 .8-1l8-1.5a1 1 0 0 1 1.2 1v16.5" />
      <path d="M11.5 12h.01" />
    </IconBase>
  );
}

export function Siren(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 18.5V12a4 4 0 1 1 8 0v6.5" />
      <path d="M6 18.5h12" />
      <path d="M12 3v2" />
      <path d="m5 6 1.5 1" />
      <path d="m19 6-1.5 1" />
    </IconBase>
  );
}

export function Check(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      <path d="m5 15 .6 1.7L7.3 17l-1.7.6L5 19.3l-.6-1.7L2.7 17l1.7-.6L5 15Z" />
    </IconBase>
  );
}
