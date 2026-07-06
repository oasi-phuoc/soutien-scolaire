/** Couleurs pastel dérivées du thème placement (--color-accent-quiz). */

export const PLACEMENT_CHART_ACCENT = "var(--color-accent-quiz)";

/** Remplissage des barres d'évolution (maths, français, total). */
export const PLACEMENT_BAR_FILL = "color-mix(in oklch, var(--color-accent-quiz) 30%, white)";

/** Trait de la courbe d'évolution. */
export const PLACEMENT_LINE_STROKE = "color-mix(in oklch, var(--color-accent-quiz) 50%, white)";

const TREAD_MIX = [10, 18, 26, 34, 42, 50] as const;

function treadFill(mix: number) {
  return `color-mix(in oklch, var(--color-accent-quiz) ${mix}%, white)`;
}

/** Fonds des 6 marches CSC → CAP → PAI → AFP/CFC (dégradé progressif). */
export const PLACEMENT_TREAD_FILL = TREAD_MIX.map(treadFill);

/** Fonds des zones CSC → CAP (pastel croissant, aligné sur les 4 premières marches). */
export const PLACEMENT_ZONE_FILL: Record<string, string> = {
  CSC: PLACEMENT_TREAD_FILL[0]!,
  CFR: PLACEMENT_TREAD_FILL[1]!,
  CAF: PLACEMENT_TREAD_FILL[2]!,
  CAP: PLACEMENT_TREAD_FILL[3]!,
};

/** Labels des zones (lisibles, teinte thème atténuée). */
export const PLACEMENT_ZONE_LABEL: Record<string, string> = {
  CSC: "color-mix(in oklch, var(--color-accent-quiz) 45%, var(--color-text-secondary))",
  CFR: "color-mix(in oklch, var(--color-accent-quiz) 55%, var(--color-text-secondary))",
  CAF: "color-mix(in oklch, var(--color-accent-quiz) 65%, var(--color-text-secondary))",
  CAP: "color-mix(in oklch, var(--color-accent-quiz) 75%, var(--color-text-secondary))",
};

export const PLACEMENT_TOP_TREAD_LABEL = "color-mix(in oklch, var(--color-accent-quiz) 55%, var(--color-text-secondary))";
