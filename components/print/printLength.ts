/** Échelle « Longueurs » (1–5) pour traits de réponse / boutons de choix. */
export const PRINT_LENGTH_DEFAULT = 3;

/** Multiplicateur de largeur des textbox / boutons (défaut = 1). */
export const PRINT_LENGTH_WIDTH_SCALE: Record<number, number> = {
  1: 0.7,
  2: 0.85,
  3: 1,
  4: 1.4,
  5: 1.8,
};

/**
 * Nombre de traits pleine largeur (ex. write / vocab phrase).
 * Défaut 2 (comme Ex11–12 vocab / Ex7 grammaire).
 */
export const PRINT_LENGTH_FULL_LINES: Record<number, number> = {
  1: 1,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
};

export function clampPrintLength(length: number | undefined): number {
  return Math.max(1, Math.min(5, length ?? PRINT_LENGTH_DEFAULT));
}

export function printLengthWidthScale(length: number | undefined): number {
  return PRINT_LENGTH_WIDTH_SCALE[clampPrintLength(length)] ?? 1;
}

export function printLengthFullLines(length: number | undefined): number {
  return PRINT_LENGTH_FULL_LINES[clampPrintLength(length)] ?? 2;
}

/** Largeur CSS à partir d’une largeur de base (ex. "7rem") et de l’échelle. */
export function scaleCssLength(base: string, scale: number): string {
  if (scale === 1) return base;
  const m = base.trim().match(/^(-?[\d.]+)([a-z%]+)$/i);
  if (!m) return base;
  const n = parseFloat(m[1]!);
  if (!Number.isFinite(n)) return base;
  return `${+(n * scale).toFixed(3)}${m[2]}`;
}
