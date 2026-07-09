/** Pastel fills and accent colors for suivi progress bars. */

export const PROGRESS_FILL = {
  math: "color-mix(in oklch, var(--color-accent-alg) 44%, white)",
  french: "color-mix(in oklch, var(--color-accent-fr) 44%, white)",
  lecture: "color-mix(in oklch, var(--color-accent-lecture) 44%, white)",
  placement: "color-mix(in oklch, var(--color-accent-quiz) 44%, white)",
} as const;

export const PROGRESS_ACCENT = {
  math: "var(--color-accent-alg)",
  french: "var(--color-accent-fr)",
  lecture: "var(--color-accent-lecture)",
  placement: "var(--color-accent-quiz)",
} as const;
