import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { VOCAB_THEMES } from "@/lib/curriculum/vocabulary-data";
import { getAllGrammarLessons, getAllConjLessons } from "@/lib/curriculum/grammar-data";
import {
  getMathExercisesForLevel,
  MATH_TRAINING_LEVEL_LABELS,
  MATH_TRAINING_LEVEL_TOGGLE,
} from "@/lib/placement/math-training-levels";
import type { PlacementSkill } from "@/lib/placement/types";

export type PrintDomain = "math" | "francais" | "placement";

export type PrintCatalogEntry = {
  id: string;
  domain: PrintDomain;
  /** Sous-filtre affiché dans le hub (Algèbre, Vocabulaire, …). */
  group: string;
  /** Bloc module (A1, Vocabulaire, …) pour l’accordéon hub. */
  moduleId: string;
  moduleCode: string;
  moduleTitle: string;
  code: string;
  title: string;
};

export const PLACEMENT_FRENCH_PRINT_PARTS: Array<{
  id: PlacementSkill;
  code: string;
  title: string;
}> = [
  { id: "ce", code: "CE", title: "Compréhension écrite" },
  { id: "co", code: "CO", title: "Compréhension orale" },
  { id: "pe", code: "PE", title: "Production écrite" },
  { id: "po", code: "PO", title: "Production orale" },
];

/** Catalogue plat des leçons imprimables (une entrée = une feuille). */
export function listPrintableLessons(): PrintCatalogEntry[] {
  const entries: PrintCatalogEntry[] = [];

  for (const mod of MATH_MODULES) {
    const lessons = getLessonsForModule(mod.id) ?? [];
    const group = mod.branch === "geometry" ? "Géométrie" : "Algèbre";
    for (const lesson of lessons) {
      entries.push({
        id: `math:${lesson.submoduleId}`,
        domain: "math",
        group,
        moduleId: mod.id,
        moduleCode: mod.code,
        moduleTitle: mod.title,
        code: lesson.submoduleCode,
        title: lesson.theory.title.fr,
      });
    }
  }

  for (const theme of VOCAB_THEMES) {
    entries.push({
      id: `vocab:${theme.slug}`,
      domain: "francais",
      group: "Vocabulaire",
      moduleId: "vocab",
      moduleCode: "Vocab",
      moduleTitle: "Vocabulaire",
      code: theme.code,
      title: theme.title,
    });
  }

  for (const lesson of getAllGrammarLessons()) {
    entries.push({
      id: `grammar:${lesson.slug}`,
      domain: "francais",
      group: "Grammaire",
      moduleId: "grammar",
      moduleCode: "Gram",
      moduleTitle: "Grammaire",
      code: lesson.code,
      title: lesson.title,
    });
  }

  for (const lesson of getAllConjLessons()) {
    entries.push({
      id: `conj:${lesson.slug}`,
      domain: "francais",
      group: "Conjugaison",
      moduleId: "conj",
      moduleCode: "Conj",
      moduleTitle: "Conjugaison",
      code: lesson.code,
      title: lesson.title,
    });
  }

  for (const level of [
    { id: "complet" as const, code: "P.Math", title: "Test de placement — Complet (100 pts)" },
    ...MATH_TRAINING_LEVEL_TOGGLE.map((level) => {
      const pts = getMathExercisesForLevel(level.id).reduce((sum, ex) => sum + ex.maxPoints, 0);
      return {
        id: level.id,
        code: `P.Math.${level.id}`,
        title: `${MATH_TRAINING_LEVEL_LABELS[level.id]} (${pts} pts)`,
      };
    }),
  ]) {
    entries.push({
      id: `placement:math:${level.id}`,
      domain: "placement",
      group: "Mathématiques",
      moduleId: "placement-math",
      moduleCode: "P.Math",
      moduleTitle: "Placement — Mathématiques",
      code: level.code,
      title: level.title,
    });
  }

  entries.push({
    id: "placement:francais:complet",
    domain: "placement",
    group: "Français",
    moduleId: "placement-fr",
    moduleCode: "P.Fr",
    moduleTitle: "Placement — Français",
    code: "P.Fr",
    title: "Test de placement — Complet (100 pts)",
  });

  for (const part of PLACEMENT_FRENCH_PRINT_PARTS) {
    entries.push({
      id: `placement:francais:${part.id}`,
      domain: "placement",
      group: "Français",
      moduleId: "placement-fr",
      moduleCode: "P.Fr",
      moduleTitle: "Placement — Français",
      code: `P.Fr.${part.code}`,
      title: `${part.title} (25 pts)`,
    });
  }

  return entries;
}

export function getPrintCatalogEntry(id: string): PrintCatalogEntry | undefined {
  return listPrintableLessons().find((e) => e.id === id);
}
