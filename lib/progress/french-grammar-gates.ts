/**
 * Portails de progression grammaire (phases A1 / A2 / B1 + bilans).
 *
 * - G1 → G5 : ouverts dès le départ (G1.1 … G5.1) ; leçons suivantes dans le module.
 * - G6 (bilan A1) : après G1–G5 entièrement validés.
 * - Après G6.1 validé : G8.1 … G12.1 (G7.1 aussi, hors barème du bilan suivant).
 * - G13 (bilan A2) : après G8–G12 entièrement validés.
 * - Après G13.1 validé : G14.1 … G17.1.
 * - G18 (bilan B1) : après G14–G17 entièrement validés.
 */

export const GRAMMAR_BILAN_MODULES = ["G6", "G13", "G18"] as const;

export type GrammarBilanModule = (typeof GRAMMAR_BILAN_MODULES)[number];

/** Modules de contenu avant chaque bilan (hors le bilan lui-même). */
export const GRAMMAR_PHASES: ReadonlyArray<{
  contentModules: readonly string[];
  bilanModule: GrammarBilanModule;
  /** Ouverts avec la vague, sans conditionner le bilan. */
  extraOpenModules?: readonly string[];
}> = [
  { contentModules: ["G1", "G2", "G3", "G4", "G5"], bilanModule: "G6" },
  {
    contentModules: ["G8", "G9", "G10", "G11", "G12"],
    bilanModule: "G13",
    extraOpenModules: ["G7"],
  },
  { contentModules: ["G14", "G15", "G16", "G17"], bilanModule: "G18" },
];

/** Modules dont la 1ʳᵉ leçon est ouverte à la création du compte. */
export const GRAMMAR_OPEN_AT_START = GRAMMAR_PHASES[0]!.contentModules;

export function grammarModuleIdFromCode(code: string): string {
  const m = /^(G\d+)/.exec(code.trim());
  return m?.[1] ?? "";
}

/** Map Gx → slugs triés (Gx.1, Gx.2, …) à partir du catalogue. */
export function buildGrammarModuleLessonSlugs(
  lessons: ReadonlyArray<{ code: string; slug: string }>,
): Map<string, readonly string[]> {
  const byModule = new Map<string, { code: string; slug: string }[]>();
  for (const lesson of lessons) {
    const id = grammarModuleIdFromCode(lesson.code);
    if (!id) continue;
    const list = byModule.get(id) ?? [];
    list.push(lesson);
    byModule.set(id, list);
  }
  const result = new Map<string, readonly string[]>();
  for (const [id, items] of byModule) {
    items.sort((a, b) => {
      const ua = Number(/^G\d+\.(\d+)$/.exec(a.code)?.[1] ?? 0);
      const ub = Number(/^G\d+\.(\d+)$/.exec(b.code)?.[1] ?? 0);
      return ua - ub;
    });
    result.set(
      id,
      items.map((i) => i.slug),
    );
  }
  return result;
}

export function isGrammarBilanModule(moduleId: string): boolean {
  return (GRAMMAR_BILAN_MODULES as readonly string[]).includes(moduleId);
}

/** True si toutes les leçons listées sont marquées complétées. */
export function areGrammarLessonsComplete(
  lessonSlugs: readonly string[],
  completedSlugs: ReadonlySet<string>,
): boolean {
  if (lessonSlugs.length === 0) return false;
  return lessonSlugs.every((slug) => completedSlugs.has(slug));
}

function moduleDone(
  id: string,
  completedSlugs: ReadonlySet<string>,
  moduleLessonSlugs: ReadonlyMap<string, readonly string[]>,
): boolean {
  return areGrammarLessonsComplete(moduleLessonSlugs.get(id) ?? [], completedSlugs);
}

function firstLessonDone(
  id: string,
  completedSlugs: ReadonlySet<string>,
  moduleLessonSlugs: ReadonlyMap<string, readonly string[]>,
): boolean {
  const first = (moduleLessonSlugs.get(id) ?? [])[0];
  return Boolean(first && completedSlugs.has(first));
}

/**
 * Un module est accessible (affiche Gx.1) selon les règles de phase / bilan.
 * `moduleLessonSlugs` : slugs de chaque module Gx → leçons de ce module.
 */
export function isGrammarModuleUnlocked(
  moduleId: string,
  completedSlugs: ReadonlySet<string>,
  moduleLessonSlugs: ReadonlyMap<string, readonly string[]>,
): boolean {
  if (!moduleId.startsWith("G")) return true;

  for (let i = 0; i < GRAMMAR_PHASES.length; i++) {
    const phase = GRAMMAR_PHASES[i]!;
    const extras = phase.extraOpenModules ?? [];
    const inWave =
      phase.contentModules.includes(moduleId) || extras.includes(moduleId);

    if (inWave) {
      if (i === 0) return true;
      return firstLessonDone(
        GRAMMAR_PHASES[i - 1]!.bilanModule,
        completedSlugs,
        moduleLessonSlugs,
      );
    }

    if (phase.bilanModule === moduleId) {
      return phase.contentModules.every((id) =>
        moduleDone(id, completedSlugs, moduleLessonSlugs),
      );
    }
  }

  return false;
}

/**
 * Leçon accessible : module débloqué + (terminée OU première non terminée du module).
 * Tri attendu des `moduleLessons` : ordre pédagogique (Gx.1, Gx.2, …).
 */
export function isGrammarLessonUnlocked(
  lesson: { code: string; slug: string },
  completedSlugs: ReadonlySet<string>,
  moduleLessonSlugs: ReadonlyMap<string, readonly string[]>,
): boolean {
  const moduleId = grammarModuleIdFromCode(lesson.code);
  if (!moduleId) return true;

  if (!isGrammarModuleUnlocked(moduleId, completedSlugs, moduleLessonSlugs)) {
    return false;
  }

  if (completedSlugs.has(lesson.slug)) return true;

  const lessons = moduleLessonSlugs.get(moduleId) ?? [];
  const firstIncomplete = lessons.find((slug) => !completedSlugs.has(slug));
  return firstIncomplete === lesson.slug;
}
