import type { PedagogicMarker } from "@/lib/curriculum/types";

const meta: Record<
  PedagogicMarker,
  { src: string; label: string; bg: string; fg: string }
> = {
  prerequisite: {
    src: "/assets/icons/markers/triangle-alert.svg",
    label: "Prérequis",
    bg: "var(--color-marker-prereq-bg)",
    fg: "var(--color-marker-prereq-text)",
  },
  cross_ref: {
    src: "/assets/icons/markers/arrow-module.svg",
    label: "Renvoi module",
    bg: "var(--color-marker-cross-bg)",
    fg: "var(--color-marker-cross-text)",
  },
  quiz: {
    src: "/assets/icons/markers/quiz-clock.svg",
    label: "Quiz chronométré",
    bg: "var(--color-marker-quiz-bg)",
    fg: "var(--color-marker-quiz-text)",
  },
};

export function PedagogicMarkerBadge({
  marker,
  text,
}: {
  marker: PedagogicMarker;
  text?: string;
}) {
  const m = meta[marker];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-[var(--radius-pill)] px-2 py-0.5 text-[length:var(--font-size-xs)] font-medium"
      style={{ background: m.bg, color: m.fg }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={m.src} alt="" width={14} height={14} className="shrink-0" />
      <span>{text ?? m.label}</span>
    </span>
  );
}

export function PedagogicMarkerRow({ markers }: { markers: PedagogicMarker[] }) {
  if (!markers.length) return null;
  return (
    <span className="flex flex-wrap gap-1">
      {markers.map((k) => (
        <PedagogicMarkerBadge key={k} marker={k} />
      ))}
    </span>
  );
}
