import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { VOCAB_THEMES } from "@/lib/curriculum/vocabulary-data";
import { getAllGrammarLessons, getAllConjLessons } from "@/lib/curriculum/grammar-data";

export type PrintDomain = "math" | "francais" | "placement";

export type PrintCatalogEntry = {
  id: string;
  domain: PrintDomain;
  /** Sous-filtre affiché dans le hub (Algèbre, Vocabulaire, …). */
  group: string;
  code: string;
  title: string;
};

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
      code: theme.code,
      title: theme.title,
    });
  }

  for (const lesson of getAllGrammarLessons()) {
    entries.push({
      id: `grammar:${lesson.slug}`,
      domain: "francais",
      group: "Grammaire",
      code: lesson.code,
      title: lesson.title,
    });
  }

  for (const lesson of getAllConjLessons()) {
    entries.push({
      id: `conj:${lesson.slug}`,
      domain: "francais",
      group: "Conjugaison",
      code: lesson.code,
      title: lesson.title,
    });
  }

  entries.push({
    id: "placement:math",
    domain: "placement",
    group: "Placement",
    code: "P.Math",
    title: "Test de placement — Mathématiques",
  });

  entries.push({
    id: "placement:francais",
    domain: "placement",
    group: "Placement",
    code: "P.Fr",
    title: "Test de placement — Français",
  });

  return entries;
}

export function getPrintCatalogEntry(id: string): PrintCatalogEntry | undefined {
  return listPrintableLessons().find((e) => e.id === id);
}
