/**
 * Portails de progression grammaire (phases A1 / A2 / B1 + bilans).
 *
 * - G1 → G5 : modules ouverts dès le départ (G1.1 … G5.1) ;
 *   dans chaque module, leçons à la suite (Gx.1 puis Gx.2…).
 * - G6 (bilan A1) : après G1–G5 terminés. G7 : après G6 terminé.
 * - G8+ : phase A2 après G7 terminé ; bilans G13 / G18 comme avant.
 */

export const GRAMMAR_BILAN_MODULES = ["G6", "G13", "G18"] as const;

export type GrammarBilanModule = (typeof GRAMMAR_BILAN_MODULES)[number];

/** Modules dont la 1ʳᵉ leçon est ouverte à la création du compte. */
export const GRAMMAR_OPEN_AT_START = ["G1", "G2", "G3", "G4", "G5"] as const;

/** Modules de contenu avant chaque bilan (hors le bilan lui-même). */
export const GRAMMAR_PHASES: ReadonlyArray<{
  contentModules: readonly string[];
  bilanModule: GrammarBilanModule;
}> = [
  { contentModules: ["G1", "G2", "G3", "G4", "G5"], bilanModule: "G6" },
  { contentModules: ["G7", "G8", "G9", "G10", "G11", "G12"], bilanModule: "G13" },
  { contentModules: ["G14", "G15", "G16", "G17"], bilanModule: "G18" },
];

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

/**
 * Un module est accessible (affiche Gx.1) selon les règles de phase / séquence.
 * `moduleLessonSlugs` : slugs de chaque module Gx → leçons de ce module.
 */
export function isGrammarModuleUnlocked(
  moduleId: string,
  completedSlugs: ReadonlySet<string>,
  moduleLessonSlugs: ReadonlyMap<string, readonly string[]>,
): boolean {
  if (!moduleId.startsWith("G")) return true;

  // G1–G5 : ouverts dès le départ (Gx.1) ; suite séquentielle dans le module
  if ((GRAMMAR_OPEN_AT_START as readonly string[]).includes(moduleId)) {
    return true;
  }

  // G6 (bilan A1) : après G1–G5 terminés
  const phase1 = GRAMMAR_PHASES[0]!;
  if (phase1.bilanModule === moduleId) {
    return phase1.contentModules.every((id) =>
      moduleDone(id, completedSlugs, moduleLessonSlugs),
    );
  }

  // G7 : début de la phase A2, après le bilan G6
  if (moduleId === "G7") {
    return moduleDone("G6", completedSlugs, moduleLessonSlugs);
  }

  // Phase A2 (G8–G12) : après G7 terminé
  const phase2 = GRAMMAR_PHASES[1]!;
  if (phase2.contentModules.includes(moduleId) && moduleId !== "G7") {
    return moduleDone("G7", completedSlugs, moduleLessonSlugs);
  }
  if (phase2.bilanModule === moduleId) {
    return phase2.contentModules.every((id) =>
      moduleDone(id, completedSlugs, moduleLessonSlugs),
    );
  }

  // Phase B1 (G14–G17) : après bilan G13
  const phase3 = GRAMMAR_PHASES[2]!;
  if (phase3.contentModules.includes(moduleId)) {
    return moduleDone("G13", completedSlugs, moduleLessonSlugs);
  }
  if (phase3.bilanModule === moduleId) {
    return phase3.contentModules.every((id) =>
      moduleDone(id, completedSlugs, moduleLessonSlugs),
    );
  }

  // Module inconnu : ne pas bloquer
  return true;
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
