/**
 * Plafonds et helpers pour l'accès complet / partiel aux leçons.
 *
 * Parcours élève par défaut (aucun flag enseignant) :
 *   première leçon de chaque filière ouverte, puis déblocage séquentiel.
 * - Accès complet (`canFreeAccess`) : toutes les leçons, sans verrouillage séquentiel.
 * - Accès partiel français : grammaire ≤ G7.1 et/ou communication ≤ E9.1 (flags séparés).
 * - Accès partiel maths : plafonds indépendants A3.1, A8.1 (algèbre) et G3.1 (géométrie).
 */

export const PARTIAL_FRENCH_GRAMMAR_MAX = "G7.1";
export const PARTIAL_FRENCH_COMM_MAX = "E9.1";
export const PARTIAL_MATH_A3_MAX = "A3.1";
export const PARTIAL_MATH_A8_MAX = "A8.1";
export const PARTIAL_MATH_G3_MAX = "G3.1";

/** @deprecated Preférer PARTIAL_MATH_A3_MAX — conservé pour libellés legacy. */
export const PARTIAL_MATH_MAX_MODULE = "A3";

export type LessonAccessFlags = {
  /** Accès complet (libre) — bypass séquentiel + tout le catalogue. */
  canFreeAccess: boolean;
  /** Accès partiel grammaire jusqu'à G7.1 (ou complet). */
  canPartialFrenchGrammar: boolean;
  /** Accès partiel communication jusqu'à E9.1 (ou complet). */
  canPartialFrenchComm: boolean;
  /** Accès partiel algèbre jusqu'à A3.1 (ou complet). */
  canPartialMathA3: boolean;
  /** Accès partiel algèbre jusqu'à A8.1 (ou complet). */
  canPartialMathA8: boolean;
  /** Accès partiel géométrie jusqu'à G3.1 (ou complet). */
  canPartialMathG3: boolean;
};

export function emptyLessonAccessFlags(
  overrides: Partial<LessonAccessFlags> = {},
): LessonAccessFlags {
  return {
    canFreeAccess: false,
    canPartialFrenchGrammar: false,
    canPartialFrenchComm: false,
    canPartialMathA3: false,
    canPartialMathA8: false,
    canPartialMathG3: false,
    ...overrides,
  };
}

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

export function hasFrenchLessonAccess(_flags: LessonAccessFlags): boolean {
  // Les nouveaux comptes commencent sans flag enseignant : le parcours
  // séquentiel (1ʳᵉ leçon, puis la suivante) reste ouvert.
  return true;
}

export function hasMathLessonAccess(_flags: LessonAccessFlags): boolean {
  return true;
}

export function grammarCodeAllowed(code: string, flags: LessonAccessFlags): boolean {
  if (flags.canFreeAccess) return true;
  if (flags.canPartialFrenchGrammar) return codeAtOrBefore(code, PARTIAL_FRENCH_GRAMMAR_MAX);
  // Pas de plafond enseignant : le séquentiel UI (G1.1 puis G1.2…) décide.
  return true;
}

export function commCodeAllowed(code: string, flags: LessonAccessFlags): boolean {
  if (flags.canFreeAccess) return true;
  if (flags.canPartialFrenchComm) return codeAtOrBefore(code, PARTIAL_FRENCH_COMM_MAX);
  return true;
}

/** ids communication type E9-1 → code E9.1 */
export function commIdToCode(id: string): string {
  return id.replace("-", ".");
}

export function commIdAllowed(id: string, flags: LessonAccessFlags): boolean {
  return commCodeAllowed(commIdToCode(id), flags);
}

/** Plafond algèbre actif (A8.1 prioritaire sur A3.1). */
export function mathAlgebraMaxCode(flags: LessonAccessFlags): string | null {
  if (flags.canFreeAccess) return null;
  if (flags.canPartialMathA8) return PARTIAL_MATH_A8_MAX;
  if (flags.canPartialMathA3) return PARTIAL_MATH_A3_MAX;
  return null;
}

/** Plafond géométrie actif. */
export function mathGeometryMaxCode(flags: LessonAccessFlags): string | null {
  if (flags.canFreeAccess) return null;
  if (flags.canPartialMathG3) return PARTIAL_MATH_G3_MAX;
  return null;
}

/**
 * Sous-module maths autorisé par l'accès partiel.
 * Codes type A3.1 / G3.1 ; ids type A3-1 acceptés aussi.
 */
export function mathSubmoduleAllowed(
  codeOrId: string,
  flags: LessonAccessFlags,
): boolean {
  if (flags.canFreeAccess) return true;
  const code = codeOrId.includes("-") ? codeOrId.replace("-", ".") : codeOrId;
  const m = /^([A-Za-z]+)(\d+)(?:\.(\d+))?$/.exec(code.trim());
  if (!m) return false;
  const prefix = m[1].toUpperCase();

  if (prefix === "A") {
    const max = mathAlgebraMaxCode(flags);
    if (!max) return true;
    return codeAtOrBefore(code, max);
  }

  if (prefix === "G") {
    const max = mathGeometryMaxCode(flags);
    if (!max) return true;
    return codeAtOrBefore(code, max);
  }

  // RA / RG / autres : seulement en accès complet
  return false;
}

/** Module visible s'il contient au moins un sous-module autorisé (ou le plafond couvre le module). */
export function mathModuleAllowed(moduleId: string, flags: LessonAccessFlags): boolean {
  if (flags.canFreeAccess) return true;
  const m = /^([A-Za-z]+)(\d+)$/.exec(moduleId.trim());
  if (!m) return false;
  const prefix = m[1].toUpperCase();
  const major = Number(m[2]);

  if (prefix === "A") {
    const max = mathAlgebraMaxCode(flags);
    if (!max) return true;
    return moduleAtOrBefore(moduleId, max);
  }

  if (prefix === "G") {
    const max = mathGeometryMaxCode(flags);
    if (!max) return true;
    return moduleAtOrBefore(`G${major}`, max);
  }

  return false;
}
