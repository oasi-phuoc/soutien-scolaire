import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { VOCAB_THEMES } from "@/lib/curriculum/vocabulary-data";
import { getAllGrammarLessons, getAllConjLessons } from "@/lib/curriculum/grammar-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import { EXPRESS_ORAL_LESSONS } from "@/lib/curriculum/content/communication/express-index";
import {
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
  G1: "Chapitre 1 — Les fondamentaux",
  G2: "Chapitre 2 — Décrire et situer",
  G3: "Chapitre 3 — Pronoms et relations",
  G4: "Chapitre 4 — Temps et modes",
  C1: "Les verbes essentiels",
  C2: "Le passé",
  C3: "Le futur",
  C4: "Les autres temps",
};

function grammarModuleCode(code: string): string {
  const match = code.match(/^([GC]\d+)/);
  return match?.[1] ?? code.split(".")[0] ?? code;
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
    const isConjTrack = moduleCode.startsWith("C");
    entries.push({
      id: `grammar:${lesson.slug}`,
      domain: "francais",
      group: isConjTrack ? "Conjugaison" : "Grammaire",
      moduleId: `${isConjTrack ? "conj" : "grammar"}-${moduleCode}`,
      moduleCode,
      moduleTitle: GRAMMAR_MODULE_TITLES[moduleCode] ?? moduleCode,
      code: lesson.code,
      title: lesson.title,
    });
  }

  for (const lesson of getAllConjLessons()) {
    const moduleCode = grammarModuleCode(lesson.code);
    const isConjTrack = moduleCode.startsWith("C");
    entries.push({
      id: `conj:${lesson.slug}`,
      domain: "francais",
      group: isConjTrack ? "Conjugaison" : "Grammaire",
      moduleId: `${isConjTrack ? "conj" : "grammar"}-${moduleCode}`,
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
        group: "Communication",
        moduleId: `express-${mod.id}`,
        moduleCode: mod.level,
        moduleTitle: mod.title,
        code: sub.code,
        title: sub.title,
      });
    }
  }

  for (const level of [
    { id: "complet" as const, code: "Complet", title: "Test de placement" },
    ...MATH_TRAINING_LEVEL_TOGGLE.map((level) => {
      const full = MATH_TRAINING_LEVEL_LABELS[level.id];
      const title = full.includes(" — ") ? full.split(" — ").slice(1).join(" — ") : full;
      return {
        id: level.id,
        code: level.id,
        title,
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
    moduleCode: "Complet",
    moduleTitle: "Test de placement",
    code: "Complet",
    title: "Test de placement",
  });

  for (const part of PLACEMENT_FRENCH_PRINT_PARTS) {
    entries.push({
      id: `placement:francais:${part.id}`,
      domain: "placement",
      group: "Français",
      moduleId: `placement-fr-${part.id}`,
      moduleCode: part.code,
      moduleTitle: part.title,
      code: part.code,
      title: part.title,
    });
  }

  return entries;
}

export function getPrintCatalogEntry(id: string): PrintCatalogEntry | undefined {
  return listPrintableLessons().find((e) => e.id === id);
}
