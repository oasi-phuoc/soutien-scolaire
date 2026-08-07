/**
 * Plafonds et helpers pour l'accès complet / partiel aux leçons.
 *
 * - Accès complet (`canFreeAccess`) : toutes les leçons, sans verrouillage séquentiel.
 * - Accès partiel français : grammaire ≤ G7.1, communication ≤ E9.1, vocabulaire ouvert.
 * - Accès partiel maths : modules algèbre ≤ A3.
 */

export const PARTIAL_FRENCH_GRAMMAR_MAX = "G7.1";
export const PARTIAL_FRENCH_COMM_MAX = "E9.1";
export const PARTIAL_MATH_MAX_MODULE = "A3";

export type LessonAccessFlags = {
  /** Accès complet (libre) — bypass séquentiel + tout le catalogue. */
  canFreeAccess: boolean;
  /** Accès partiel français (ou complet). */
  canPartialFrench: boolean;
  /** Accès partiel maths (ou complet). */
  canPartialMath: boolean;
};

/** Compare des codes type G7.1 / E9.1 / A3.2 (lettre + numéros). */
export function compareLessonCodes(a: string, b: string): number {
  const parse = (code: string) => {
    const m = /^([A-Za-z]+)(\d+)(?:\.(\d+))?$/.exec(code.trim());
    if (!m) return { prefix: code, major: 0, minor: 0 };
    return {
      prefix: m[1].toUpperCase(),
      major: Number(m[2]),
      minor: m[3] !== undefined ? Number(m[3]) : 0,
    };
  };
  const pa = parse(a);
  const pb = parse(b);
  if (pa.prefix !== pb.prefix) return pa.prefix.localeCompare(pb.prefix);
  if (pa.major !== pb.major) return pa.major - pb.major;
  return pa.minor - pb.minor;
}

export function codeAtOrBefore(code: string, maxCode: string): boolean {
  return compareLessonCodes(code, maxCode) <= 0;
}

/** Module id (G7, E9, A3) inclus dans le plafond partiel (même préfixe, major ≤). */
export function moduleAtOrBefore(moduleId: string, maxCode: string): boolean {
  const m = /^([A-Za-z]+)(\d+)$/.exec(moduleId.trim());
  const max = /^([A-Za-z]+)(\d+)(?:\.(\d+))?$/.exec(maxCode.trim());
  if (!m || !max) return false;
  if (m[1].toUpperCase() !== max[1].toUpperCase()) return false;
  return Number(m[2]) <= Number(max[2]);
}

export function hasFrenchLessonAccess(flags: LessonAccessFlags): boolean {
  return flags.canFreeAccess || flags.canPartialFrench;
}

export function hasMathLessonAccess(flags: LessonAccessFlags): boolean {
  return flags.canFreeAccess || flags.canPartialMath;
}

export function grammarCodeAllowed(code: string, flags: LessonAccessFlags): boolean {
  if (flags.canFreeAccess) return true;
  if (!flags.canPartialFrench) return false;
  return codeAtOrBefore(code, PARTIAL_FRENCH_GRAMMAR_MAX);
}

export function commCodeAllowed(code: string, flags: LessonAccessFlags): boolean {
  if (flags.canFreeAccess) return true;
  if (!flags.canPartialFrench) return false;
  return codeAtOrBefore(code, PARTIAL_FRENCH_COMM_MAX);
}

/** ids communication type E9-1 → code E9.1 */
export function commIdToCode(id: string): string {
  return id.replace("-", ".");
}

export function commIdAllowed(id: string, flags: LessonAccessFlags): boolean {
  return commCodeAllowed(commIdToCode(id), flags);
}

export function mathModuleAllowed(moduleId: string, flags: LessonAccessFlags): boolean {
  if (flags.canFreeAccess) return true;
  if (!flags.canPartialMath) return false;
  return moduleAtOrBefore(moduleId, PARTIAL_MATH_MAX_MODULE);
}
