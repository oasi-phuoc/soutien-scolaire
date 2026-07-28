import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { VOCAB_THEMES } from "@/lib/curriculum/vocabulary-data";
import { getAllGrammarLessons, getAllConjLessons } from "@/lib/curriculum/grammar-data";
import { MATH_TRAINING_LEVEL_LABELS, MATH_TRAINING_LEVEL_TOGGLE } from "@/lib/placement/math-training-levels";

export type ImpressionSubject = "maths" | "francais" | "placement";

export type ImpressionDocKind =
  | "math-a1"
  | "math-generic"
  | "vocab"
  | "grammar"
  | "conjugation"
  | "placement-math"
  | "placement-math-training";

export type ImpressionDocument = {
  id: string;
  subject: ImpressionSubject;
  kind: ImpressionDocKind;
  group: string;
  groupLabel: string;
  code: string;
  title: string;
  course: "Mathématiques" | "Français";
  accentColor: string;
  /** Payload key used by builders */
  ref: string;
};

const MATH_ACCENT = "var(--color-accent-alg)";
const FR_ACCENT = "var(--color-accent-fr)";
const PLACE_ACCENT = "var(--color-accent-quiz)";

function buildMathDocuments(): ImpressionDocument[] {
  const docs: ImpressionDocument[] = [];
  for (const mod of MATH_MODULES) {
    const lessons = getLessonsForModule(mod.id) ?? [];
    for (const lesson of lessons) {
      const isA1 = lesson.submoduleId === "A1-1" || lesson.submoduleId === "A1-2";
      docs.push({
        id: `math:${lesson.submoduleId}`,
        subject: "maths",
        kind: isA1 ? "math-a1" : "math-generic",
        group: mod.id,
        groupLabel: `${mod.code} — ${mod.title}`,
        code: lesson.submoduleCode ?? lesson.submoduleId,
        title: lesson.theory.title.fr,
        course: "Mathématiques",
        accentColor: MATH_ACCENT,
        ref: lesson.submoduleId,
      });
    }
  }
  return docs;
}

function buildFrenchDocuments(): ImpressionDocument[] {
  const vocab = VOCAB_THEMES.map((theme) => ({
    id: `vocab:${theme.slug}`,
    subject: "francais" as const,
    kind: "vocab" as const,
    group: "vocabulaire",
    groupLabel: "Vocabulaire",
    code: theme.code,
    title: theme.title,
    course: "Français" as const,
    accentColor: FR_ACCENT,
    ref: theme.slug,
  }));

  const grammar = getAllGrammarLessons().map((lesson) => ({
    id: `grammar:${lesson.slug}`,
    subject: "francais" as const,
    kind: "grammar" as const,
    group: "grammaire",
    groupLabel: "Grammaire",
    code: lesson.code,
    title: lesson.title,
    course: "Français" as const,
    accentColor: FR_ACCENT,
    ref: lesson.slug,
  }));

  const conj = getAllConjLessons().map((lesson) => ({
    id: `conj:${lesson.slug}`,
    subject: "francais" as const,
    kind: "conjugation" as const,
    group: "conjugaison",
    groupLabel: "Conjugaison",
    code: lesson.code,
    title: lesson.title,
    course: "Français" as const,
    accentColor: FR_ACCENT,
    ref: lesson.slug,
  }));

  return [...vocab, ...grammar, ...conj];
}

function buildPlacementDocuments(): ImpressionDocument[] {
  const training = MATH_TRAINING_LEVEL_TOGGLE.map((level) => ({
    id: `placement-math-training:${level.id}`,
    subject: "placement" as const,
    kind: "placement-math-training" as const,
    group: "maths",
    groupLabel: "Mathématiques",
    code: `Niv. ${level.id}`,
    title: MATH_TRAINING_LEVEL_LABELS[level.id],
    course: "Mathématiques" as const,
    accentColor: PLACE_ACCENT,
    ref: level.id,
  }));

  return [
    {
      id: "placement-math:full",
      subject: "placement",
      kind: "placement-math",
      group: "maths",
      groupLabel: "Mathématiques",
      code: "TCM",
      title: "Test de placement — Mathématiques",
      course: "Mathématiques",
      accentColor: PLACE_ACCENT,
      ref: "full",
    },
    ...training,
  ];
}

let _catalog: ImpressionDocument[] | null = null;

export function getImpressionCatalog(): ImpressionDocument[] {
  if (!_catalog) {
    _catalog = [
      ...buildMathDocuments(),
      ...buildFrenchDocuments(),
      ...buildPlacementDocuments(),
    ];
  }
  return _catalog;
}

export function getImpressionDocument(id: string): ImpressionDocument | undefined {
  return getImpressionCatalog().find((doc) => doc.id === id);
}

export const IMPRESSION_SUBJECTS: {
  id: ImpressionSubject;
  label: string;
}[] = [
  { id: "maths", label: "Mathématiques" },
  { id: "francais", label: "Français" },
  { id: "placement", label: "Placement" },
];
