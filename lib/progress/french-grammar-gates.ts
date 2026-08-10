/**
 * Portails de progression grammaire (phases A1 / A2 / B1 + bilans).
 *
 * - Dans une phase ouverte : 1ʳᵉ leçon de chaque module débloquée, suite séquentielle.
 * - Un bilan (G6 / G13 / G18) se débloque seulement quand tous les modules
 *   de la phase précédente sont terminés.
 * - Les modules de la phase suivante s’ouvrent après le bilan complété.
 */

export const GRAMMAR_BILAN_MODULES = ["G6", "G13", "G18"] as const;

export type GrammarBilanModule = (typeof GRAMMAR_BILAN_MODULES)[number];

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

/**
 * Un module est accessible (affiche Gx.1) selon les bilans.
 * `moduleLessonSlugs` : slugs de chaque module Gx → leçons de ce module.
 */
export function isGrammarModuleUnlocked(
  moduleId: string,
  completedSlugs: ReadonlySet<string>,
  moduleLessonSlugs: ReadonlyMap<string, readonly string[]>,
): boolean {
  if (!moduleId.startsWith("G")) return true;

  const moduleDone = (id: string) =>
    areGrammarLessonsComplete(moduleLessonSlugs.get(id) ?? [], completedSlugs);

  for (let i = 0; i < GRAMMAR_PHASES.length; i++) {
    const phase = GRAMMAR_PHASES[i]!;
    const prevBilan = i > 0 ? GRAMMAR_PHASES[i - 1]!.bilanModule : null;

    // Contenu de la phase : ouvert si phase A1, ou bilan précédent terminé
    if (phase.contentModules.includes(moduleId)) {
      if (!prevBilan) return true;
      return moduleDone(prevBilan);
    }

    // Bilan de la phase : tous les modules contenu de la phase terminés
    if (phase.bilanModule === moduleId) {
      return phase.contentModules.every((id) => moduleDone(id));
    }
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
