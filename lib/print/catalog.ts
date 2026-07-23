import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { VOCAB_THEMES } from "@/lib/curriculum/vocabulary-data";
import { getAllGrammarLessons, getAllConjLessons } from "@/lib/curriculum/grammar-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import { EXPRESS_ORAL_LESSONS } from "@/lib/curriculum/content/communication/express-index";
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
  /** Bloc module (A1, V1, …) pour l’accordéon hub. */
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

const VOCAB_MODULE_TITLES: Record<string, string> = {
  V1: "L'identité",
  V2: "Le temps",
  V3: "Les loisirs",
  V4: "Le logement",
  V5: "L'école",
  V6: "Les vêtements",
  V7: "La nourriture",
  V8: "La santé",
  V9: "Les lieux",
  V10: "Services, voyages et animaux",
};

const GRAMMAR_MODULE_TITLES: Record<string, string> = {
  R1: "Les fondamentaux",
  R2: "Les verbes essentiels",
  R3: "L'interrogation",
  R4: "Les adjectifs",
  R5: "Les pronoms",
  R6: "Le passé",
  R7: "Le futur",
  R8: "Les autres temps",
  R9: "La comparaison",
  R10: "Adverbes et négation",
};

function grammarModuleCode(code: string): string {
  const match = code.match(/^(R\d+)/);
  return match?.[1] ?? "R";
}

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
    const moduleCode = theme.section;
    entries.push({
      id: `vocab:${theme.slug}`,
      domain: "francais",
      group: "Vocabulaire",
      moduleId: `vocab-${moduleCode}`,
      moduleCode,
      moduleTitle: VOCAB_MODULE_TITLES[moduleCode] ?? moduleCode,
      code: theme.code,
      title: theme.title,
    });
  }

  for (const lesson of getAllGrammarLessons()) {
    const moduleCode = grammarModuleCode(lesson.code);
    entries.push({
      id: `grammar:${lesson.slug}`,
      domain: "francais",
      group: "Grammaire",
      moduleId: `grammar-${moduleCode}`,
      moduleCode,
      moduleTitle: GRAMMAR_MODULE_TITLES[moduleCode] ?? moduleCode,
      code: lesson.code,
      title: lesson.title,
    });
  }

  for (const lesson of getAllConjLessons()) {
    const moduleCode = grammarModuleCode(lesson.code);
    entries.push({
      id: `conj:${lesson.slug}`,
      domain: "francais",
      group: "Grammaire",
      moduleId: `grammar-${moduleCode}`,
      moduleCode,
      moduleTitle: GRAMMAR_MODULE_TITLES[moduleCode] ?? moduleCode,
      code: lesson.code,
      title: lesson.title,
    });
  }

  for (const mod of COMM_MODULES) {
    for (const sub of mod.submodules) {
      if (!sub.available || sub.id.endsWith("-0")) continue;
      const lesson = EXPRESS_ORAL_LESSONS.find((l) => l.id === sub.id);
      if (!lesson) continue;
      entries.push({
        id: `express:${sub.id}`,
        domain: "francais",
        group: "Expression",
        moduleId: `express-${mod.id}`,
        moduleCode: mod.level,
        moduleTitle: mod.title,
        code: sub.code,
        title: sub.title,
      });
    }
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
      // Chaque partie est une entrée plate (pas d’accordéon regroupé).
      moduleId: `placement-math-${level.id}`,
      moduleCode: level.code,
      moduleTitle: level.title,
      code: level.code,
      title: level.title,
    });
  }

  entries.push({
    id: "placement:francais:complet",
    domain: "placement",
    group: "Français",
    moduleId: "placement-fr-complet",
    moduleCode: "P.Fr",
    moduleTitle: "Test de placement — Complet (100 pts)",
    code: "P.Fr",
    title: "Test de placement — Complet (100 pts)",
  });

  for (const part of PLACEMENT_FRENCH_PRINT_PARTS) {
    entries.push({
      id: `placement:francais:${part.id}`,
      domain: "placement",
      group: "Français",
      moduleId: `placement-fr-${part.id}`,
      moduleCode: `P.Fr.${part.code}`,
      moduleTitle: `${part.title} (25 pts)`,
      code: `P.Fr.${part.code}`,
      title: `${part.title} (25 pts)`,
    });
  }

  return entries;
}

export function getPrintCatalogEntry(id: string): PrintCatalogEntry | undefined {
  return listPrintableLessons().find((e) => e.id === id);
}
