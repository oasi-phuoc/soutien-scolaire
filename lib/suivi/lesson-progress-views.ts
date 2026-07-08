import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import type { LetterData } from "@/lib/curriculum/lecture-data";
import { lessonPhonemeLabel } from "@/lib/curriculum/lecture-data";

export type LessonProgressRow = {
  id: string;
  code: string;
  title: string;
  gradeLabel: string | null;
  completed: boolean;
};

export type ModuleProgressGroup = {
  moduleId: string;
  moduleCode: string;
  moduleTitle: string;
  lessons: LessonProgressRow[];
};

const FRENCH_VOC = FRENCH_THEMES.filter((t) => t.tab === "vocabulaire");
const FRENCH_GRAM = FRENCH_THEMES.filter((t) => t.tab === "grammaire" || t.tab === "conjugaison");

const VOCAB_MODULE_DEFS = [
  { id: "V1", code: "V1", title: "L'identité" },
  { id: "V2", code: "V2", title: "Le temps" },
  { id: "V3", code: "V3", title: "Les loisirs" },
  { id: "V4", code: "V4", title: "Le logement" },
  { id: "V5", code: "V5", title: "L'école" },
  { id: "V6", code: "V6", title: "Les vêtements" },
  { id: "V7", code: "V7", title: "La nourriture" },
  { id: "V8", code: "V8", title: "La santé" },
  { id: "V9", code: "V9", title: "Les lieux" },
  { id: "V10", code: "V10", title: "Services et voyages" },
];

const GRAMMAR_MODULE_DEFS = [
  { id: "R1", code: "R1", title: "Les fondamentaux" },
  { id: "R2", code: "R2", title: "Les verbes essentiels" },
  { id: "R3", code: "R3", title: "L'interrogation" },
  { id: "R4", code: "R4", title: "Les adjectifs" },
  { id: "R5", code: "R5", title: "Les pronoms" },
  { id: "R6", code: "R6", title: "Le passé" },
  { id: "R7", code: "R7", title: "Le futur" },
  { id: "R8", code: "R8", title: "Les autres temps" },
  { id: "R9", code: "R9", title: "La comparaison" },
];

function grammarGroupId(code: string): string {
  if (code.startsWith("R1.")) return "R1";
  if (code.startsWith("R2.")) return "R2";
  if (code.startsWith("R3.")) return "R3";
  if (code.startsWith("R4.")) return "R4";
  if (code.startsWith("R5.")) return "R5";
  if (code.startsWith("R6.")) return "R6";
  if (code.startsWith("R7.")) return "R7";
  if (code.startsWith("R8.")) return "R8";
  return "R9";
}

function formatGrade(grade: number | undefined | null): string | null {
  if (grade == null || Number.isNaN(grade)) return null;
  return `${grade.toFixed(1)}/6`;
}

export function getMathModuleGroups(
  progress: StoredProgressV1 | null,
  branch: "algebra" | "geometry",
): ModuleProgressGroup[] {
  const states = progress?.submoduleStates ?? {};
  const scores = progress?.submoduleScores ?? {};

  return MATH_MODULES.filter((m) => m.branch === branch).map((mod) => ({
    moduleId: mod.id,
    moduleCode: mod.code,
    moduleTitle: mod.title,
    lessons: mod.submodules.map((sub) => {
      const completed = states[sub.id] === "completed";
      const sc = scores[sub.id];
      return {
        id: sub.id,
        code: sub.code,
        title: sub.title,
        completed,
        gradeLabel: sc ? formatGrade(sc.grade) : completed ? "—" : null,
      };
    }),
  }));
}

export function getRecentMathLessons(progress: StoredProgressV1 | null, limit = 5): LessonProgressRow[] {
  const scores = progress?.submoduleScores ?? {};
  const states = progress?.submoduleStates ?? {};
  const rows: LessonProgressRow[] = [];

  for (const mod of MATH_MODULES) {
    for (const sub of mod.submodules) {
      if (states[sub.id] !== "completed") continue;
      const sc = scores[sub.id];
      rows.push({
        id: sub.id,
        code: sub.code,
        title: sub.title,
        completed: true,
        gradeLabel: sc ? formatGrade(sc.grade) : "—",
      });
    }
  }

  return rows.slice(-limit).reverse();
}

export function getFrenchModuleGroups(
  progress: StoredProgressV1 | null,
  tab: "vocabulaire" | "grammaire" | "communication",
): ModuleProgressGroup[] {
  const completed = new Set(Object.keys(progress?.frenchLessons ?? {}));
  const comm = progress?.commProgress ?? {};

  if (tab === "communication") {
    return COMM_MODULES.map((mod) => ({
      moduleId: mod.id,
      moduleCode: mod.level,
      moduleTitle: mod.title,
      lessons: mod.submodules
        .filter((s) => s.available)
        .map((sub) => ({
          id: sub.id,
          code: sub.code,
          title: sub.title,
          completed: !!comm[sub.id],
          gradeLabel: comm[sub.id] ? "Terminé" : null,
        })),
    })).filter((g) => g.lessons.length > 0);
  }

  if (tab === "vocabulaire") {
    return VOCAB_MODULE_DEFS.map((def) => {
      const lessons = FRENCH_VOC.filter((t) => t.code.startsWith(`${def.code}.`)).map((t) => ({
        id: t.slug,
        code: t.code,
        title: t.title,
        completed: completed.has(t.slug),
        gradeLabel: completed.has(t.slug) ? "Terminé" : null,
      }));
      return {
        moduleId: def.id,
        moduleCode: def.code,
        moduleTitle: def.title,
        lessons,
      };
    }).filter((g) => g.lessons.length > 0);
  }

  return GRAMMAR_MODULE_DEFS.map((def) => {
    const lessons = FRENCH_GRAM.filter((t) => grammarGroupId(t.code) === def.id).map((t) => ({
      id: t.slug,
      code: t.code,
      title: t.title,
      completed: completed.has(t.slug),
      gradeLabel: completed.has(t.slug) ? "Terminé" : null,
    }));
    return {
      moduleId: def.id,
      moduleCode: def.code,
      moduleTitle: def.title,
      lessons,
    };
  }).filter((g) => g.lessons.length > 0);
}

export function getRecentFrenchLessons(progress: StoredProgressV1 | null, limit = 5): LessonProgressRow[] {
  const completed = Object.keys(progress?.frenchLessons ?? {});
  const rows = completed.flatMap((slug) => {
    const theme = FRENCH_THEMES.find((t) => t.slug === slug);
    if (!theme) return [];
    return [{
      id: slug,
      code: theme.code,
      title: theme.title,
      completed: true,
      gradeLabel: "Terminé",
    }];
  });
  return rows.slice(-limit).reverse();
}

export function getLectureModuleGroups(progress: StoredProgressV1 | null): ModuleProgressGroup[] {
  const lp = progress?.lectureProgress;

  return LECTURE_MODULES.map((mod) => ({
    moduleId: mod.id,
    moduleCode: mod.code,
    moduleTitle: mod.title,
    lessons: mod.letters.map((letter) => {
      const key = `${mod.id}-${letter.letterLower}`;
      const completed = lp?.submodules?.[key] === "completed";
      const evalResult = lp?.evaluations?.[key];
      const letterTitle = lectureLessonTitle(letter);
      return {
        id: key,
        code: `${mod.code}.${letter.letterLower.toUpperCase()}`,
        title: letterTitle,
        completed,
        gradeLabel: evalResult?.passed ? formatGrade(evalResult.grade) : completed ? "—" : null,
      };
    }),
  }));
}

function lectureLessonTitle(letter: LetterData): string {
  if (letter.type === "vowel" || letter.type === "consonant") {
    return `Lettre ${letter.letter} — ${lessonPhonemeLabel(letter.letterLower, letter.phoneme)}`;
  }
  return letter.title;
}

export function getRecentLectureLessons(progress: StoredProgressV1 | null, limit = 5): LessonProgressRow[] {
  const lp = progress?.lectureProgress;
  if (!lp) return [];

  const rows: LessonProgressRow[] = [];
  for (const mod of LECTURE_MODULES) {
    for (const letter of mod.letters) {
      const key = `${mod.id}-${letter.letterLower}`;
      if (lp.submodules?.[key] !== "completed") continue;
      const evalResult = lp.evaluations?.[key];
      rows.push({
        id: key,
        code: `${mod.code}.${letter.letterLower.toUpperCase()}`,
        title: lectureLessonTitle(letter),
        completed: true,
        gradeLabel: evalResult?.passed ? formatGrade(evalResult.grade) : "—",
      });
    }
  }
  return rows.slice(-limit).reverse();
}
