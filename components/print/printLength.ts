/**
 * Option « Longueurs » : défaut 0, plage -10…+10.
 * Chaque cran = ±10 % de la largeur de base.
 * Mode « lines » (traits pleine largeur) : minimum -1 (retire 1 ligne).
 */
export const PRINT_LENGTH_DEFAULT = 0;
export const PRINT_LENGTH_MIN = -10;
export const PRINT_LENGTH_MAX = 10;
/** Minimum pour les exercices à traits pleine largeur (write / vocab phrase). */
export const PRINT_LENGTH_LINES_MIN = -1;

export type PrintLengthMode = "width" | "lines" | "none";

export function clampPrintLength(
  length: number | undefined,
  mode: PrintLengthMode = "width",
): number {
  const raw = length ?? PRINT_LENGTH_DEFAULT;
  if (mode === "none") return PRINT_LENGTH_DEFAULT;
  const min = mode === "lines" ? PRINT_LENGTH_LINES_MIN : PRINT_LENGTH_MIN;
  return Math.max(min, Math.min(PRINT_LENGTH_MAX, raw));
}

/** Multiplicateur de largeur : 1 + length × 0.1 (ex. +2 → 1.2). */
export function printLengthWidthScale(
  length: number | undefined,
  mode: PrintLengthMode = "width",
): number {
  if (mode === "none") return 1;
  return 1 + clampPrintLength(length, mode) * 0.1;
}

/**
 * Nombre de traits pleine largeur.
 * Base = 2 à length 0 ; -1 → 1 ligne ; +n → 2+n lignes.
 */
export function printLengthFullLines(length: number | undefined): number {
  const l = clampPrintLength(length, "lines");
  return Math.max(1, 2 + l);
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
