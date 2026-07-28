import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { LECTURE_MODULES, STORIES } from "@/lib/curriculum/lecture-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import { getVocabTheme } from "@/lib/curriculum/vocabulary-data";
import { getGrammarLesson, getConjLesson } from "@/lib/curriculum/grammar-data";
import {
  catalogFrenchKey,
  catalogLectureKey,
  catalogMathKey,
  conjugationLessonKey,
  grammarLessonKey,
  lectureLetterKey,
  mathLessonKey,
  vocabThemeKey,
} from "@/lib/content-editor/keys";
import {
  resolveFrenchThemes,
  resolveLectureModules,
  resolveMathModules,
} from "@/lib/content-editor/catalog";
import { getLessonBySubmoduleId } from "@/lib/curriculum/lessons-registry";

export type HubDomain = "math" | "francais" | "lecture" | "placement";

export type HubSubmenu =
  | "algebra"
  | "geometry"
  | "vocabulaire"
  | "conjugaison"
  | "grammaire"
  | "communication"
  | "expression"
  | "apprendre"
  | "histoires"
  | "placement-math"
  | "ce"
  | "co"
  | "pe"
  | "po";

export type HubPage = {
  id: string;
  code: string;
  title: string;
  contentKey: string;
  href: string;
  /** Charge le document de base (sans override). */
  loadBase: () => unknown;
};

export const HUB_DOMAINS: {
  id: HubDomain;
  label: string;
  submenus: { id: HubSubmenu; label: string }[];
}[] = [
  {
    id: "math",
    label: "Math",
    submenus: [
      { id: "algebra", label: "Algèbre" },
      { id: "geometry", label: "Géométrie" },
    ],
  },
  {
    id: "francais",
    label: "Français",
    submenus: [
      { id: "vocabulaire", label: "Vocabulaire" },
      { id: "conjugaison", label: "Conjugaison" },
      { id: "grammaire", label: "Grammaire" },
      { id: "communication", label: "Communication" },
    ],
  },
  {
    id: "lecture",
    label: "Lecture",
    submenus: [
      { id: "apprendre", label: "Apprendre" },
      { id: "histoires", label: "Histoires" },
    ],
  },
  {
    id: "placement",
    label: "Test de placement",
    submenus: [
      { id: "placement-math", label: "Math" },
      { id: "ce", label: "CE" },
      { id: "co", label: "CO" },
      { id: "pe", label: "PE" },
      { id: "po", label: "PO" },
    ],
  },
];

type OverrideMap = Record<string, { payload: unknown } | undefined>;

function sortHubPagesAlpha(pages: HubPage[]): HubPage[] {
  return [...pages].sort((a, b) => {
    const byTitle = a.title.localeCompare(b.title, "fr", { sensitivity: "base" });
    if (byTitle !== 0) return byTitle;
    return a.code.localeCompare(b.code, "fr", { numeric: true, sensitivity: "base" });
  });
}

export function listHubPages(
  domain: HubDomain,
  submenu: HubSubmenu,
  overrides: OverrideMap = {},
): HubPage[] {
  let pages: HubPage[] = [];

  if (domain === "math" && (submenu === "algebra" || submenu === "geometry")) {
    const branch = submenu === "algebra" ? "algebra" : "geometry";
    const modules = resolveMathModules(MATH_MODULES, {
      ...overrides,
      [catalogMathKey()]: overrides[catalogMathKey()],
    }).filter((m) => m.branch === branch);
    pages = modules.flatMap((m) =>
      m.submodules.map((s) => ({
        id: s.id,
        code: s.code,
        title: s.title,
        contentKey: mathLessonKey(s.id),
        href: `/mathematiques/${s.id}`,
        loadBase: () => getLessonBySubmoduleId(s.id) ?? {
          submoduleId: s.id,
          submoduleCode: s.code,
          theory: {
            title: { fr: s.title },
            paragraphs: { fr: [] },
            blocks: [],
          },
          exercises: [],
        },
      })),
    );
  } else if (domain === "francais" && submenu === "vocabulaire") {
    // Uniquement les thèmes tab=vocabulaire (V1.x…).
    const themes = resolveFrenchThemes(FRENCH_THEMES, {
      ...overrides,
      [catalogFrenchKey()]: overrides[catalogFrenchKey()],
    }).filter((t) => t.tab === "vocabulaire");
    pages = themes.map((t) => ({
      id: t.slug,
      code: t.code,
      title: t.title,
      contentKey: vocabThemeKey(t.slug),
      href: `/francais/vocabulaire/${t.slug}`,
      loadBase: () =>
        getVocabTheme(t.slug) ?? {
          slug: t.slug,
          code: t.code,
          title: t.title,
          section: t.section,
          words: [],
          sentences: [],
        },
    }));
  } else if (domain === "francais" && submenu === "conjugaison") {
    const themes = resolveFrenchThemes(FRENCH_THEMES, {
      ...overrides,
      [catalogFrenchKey()]: overrides[catalogFrenchKey()],
    }).filter((t) => t.code.startsWith("C"));
    pages = themes.map((t) => ({
      id: t.slug,
      code: t.code,
      title: t.title,
      contentKey:
        t.tab === "conjugaison"
          ? conjugationLessonKey(t.slug)
          : grammarLessonKey(t.slug),
      href:
        t.tab === "conjugaison"
          ? `/francais/conjugaison/${t.slug}`
          : `/francais/grammaire/${t.slug}`,
      loadBase: () =>
        (t.tab === "conjugaison" ? getConjLesson(t.slug) : getGrammarLesson(t.slug)) ?? {
          slug: t.slug,
          code: t.code,
          level: "A1" as const,
          title: t.title,
          theory: [{ type: "heading" as const, text: t.title }],
          exercises: [],
        },
    }));
  } else if (domain === "francais" && submenu === "grammaire") {
    const themes = resolveFrenchThemes(FRENCH_THEMES, {
      ...overrides,
      [catalogFrenchKey()]: overrides[catalogFrenchKey()],
    }).filter((t) => t.code.startsWith("G"));
    pages = themes.map((t) => ({
      id: t.slug,
      code: t.code,
      title: t.title,
      contentKey:
        t.tab === "conjugaison"
          ? conjugationLessonKey(t.slug)
          : grammarLessonKey(t.slug),
      href:
        t.tab === "conjugaison"
          ? `/francais/conjugaison/${t.slug}`
          : `/francais/grammaire/${t.slug}`,
      loadBase: () =>
        (t.tab === "conjugaison" ? getConjLesson(t.slug) : getGrammarLesson(t.slug)) ?? {
          slug: t.slug,
          code: t.code,
          level: "A1" as const,
          title: t.title,
          theory: [{ type: "heading" as const, text: t.title }],
          exercises: [],
        },
    }));
  } else if (domain === "francais" && (submenu === "communication" || submenu === "expression")) {
    pages = COMM_MODULES.flatMap((m) =>
      m.submodules
        .filter((s) => s.available !== false)
        .map((s) => ({
          id: s.id,
          code: s.code,
          title: `${m.title} — ${s.title}`,
          contentKey: `comm:submodule:${s.id}`,
          href: `/communication/${s.id}`,
          loadBase: () => ({
            id: s.id,
            code: s.code,
            title: s.title,
            moduleId: m.id,
            notes: "Édition métadonnées / notes pédagogiques (brouillon).",
          }),
        })),
    );
  } else if (domain === "lecture" && submenu === "apprendre") {
    const modules = resolveLectureModules(LECTURE_MODULES, {
      ...overrides,
      [catalogLectureKey()]: overrides[catalogLectureKey()],
    });
    pages = modules.flatMap((m) =>
      m.letters.map((letter) => ({
        id: `${m.id}-${letter.letterLower}`,
        code: `${m.code}.${letter.letter ?? letter.letterLower}`,
        title: `${letter.letter ?? letter.letterLower} — ${letter.phoneme ?? ""}`,
        contentKey: lectureLetterKey(letter.letterLower),
        href: `/lecture/${m.id}/${letter.letterLower}`,
        loadBase: () => letter,
      })),
    );
  } else if (domain === "lecture" && submenu === "histoires") {
    pages = STORIES.map((s) => ({
      id: s.id,
      code: s.id,
      title: s.title,
      contentKey: `lecture:story:${s.id}`,
      href: `/lecture/histoires/${s.id}`,
      loadBase: () => s,
    }));
  } else if (domain === "placement" && submenu === "placement-math") {
    pages = [
      {
        id: "placement-math-overview",
        code: "PL-MATH",
        title: "Placement maths — vue d’ensemble (1–38)",
        contentKey: "placement:math:overview",
        href: "/placement/mathematiques",
        loadBase: () => ({
          title: "Placement maths",
          notes:
            "Les exercices 1–38 sont dans les composants PlacementExercises*. Éditez ici des notes / consignes globales.",
          instructions: "",
        }),
      },
    ];
  } else if (domain === "placement" && ["ce", "co", "pe", "po"].includes(submenu)) {
    const skill = submenu.toUpperCase();
    pages = (["base", "moyen", "avance"] as const).map((level, i) => ({
      id: `${skill}-${i + 1}`,
      code: `${skill}-${i + 1}`,
      title: `${skill} — niveau ${level}`,
      contentKey: `placement:${submenu}:level:${level}`,
      href: `/placement/francais?skill=${submenu}&level=${level}`,
      loadBase: () => ({
        skill: submenu,
        level,
        title: `${skill} — ${level}`,
        notes: "",
        prompts: [],
      }),
    }));
  }

  return sortHubPagesAlpha(pages);
}
