/** Couleurs pastel dérivées du thème placement (--color-accent-quiz). */

export const PLACEMENT_CHART_ACCENT = "var(--color-accent-quiz)";

/** Remplissage des barres d'évolution (maths, français, total). */
export const PLACEMENT_BAR_FILL = "color-mix(in oklch, var(--color-accent-quiz) 30%, white)";

/** Trait de la courbe d'évolution. */
export const PLACEMENT_LINE_STROKE = "color-mix(in oklch, var(--color-accent-quiz) 50%, white)";

/** Fonds des zones CSC → CAP (pastel croissant). */
export const PLACEMENT_ZONE_FILL: Record<string, string> = {
  CSC: "color-mix(in oklch, var(--color-accent-quiz) 10%, white)",
  CFR: "color-mix(in oklch, var(--color-accent-quiz) 18%, white)",
  CAF: "color-mix(in oklch, var(--color-accent-quiz) 26%, white)",
  CAP: "color-mix(in oklch, var(--color-accent-quiz) 34%, white)",
};

/** Labels des zones (lisibles, teinte thème atténuée). */
export const PLACEMENT_ZONE_LABEL: Record<string, string> = {
  CSC: "color-mix(in oklch, var(--color-accent-quiz) 45%, var(--color-text-secondary))",
  CFR: "color-mix(in oklch, var(--color-accent-quiz) 55%, var(--color-text-secondary))",
  CAF: "color-mix(in oklch, var(--color-accent-quiz) 65%, var(--color-text-secondary))",
  CAP: "color-mix(in oklch, var(--color-accent-quiz) 75%, var(--color-text-secondary))",
};
