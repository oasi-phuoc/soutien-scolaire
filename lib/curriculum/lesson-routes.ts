import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { getLessonBySubmoduleId, getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";

export type LessonSubject = "maths" | "lecture" | "francais" | "communication";

export type LessonLink = {
  subject: LessonSubject;
  moduleId: string;
  lessonId: string;
  href: string;
  label: string;
};

const FRENCH_BY_CODE = new Map(FRENCH_THEMES.map((t) => [t.code, t]));

function mathSubmoduleId(moduleId: string, lessonCode: string): string | null {
  const lessons = getLessonsForModule(moduleId.toUpperCase());
  if (!lessons) return null;
  const found = lessons.find((l) => l.submoduleCode === lessonCode);
  return found?.submoduleId ?? null;
}

function lectureHref(lessonCode: string): string | null {
  const letter = lessonCode.trim();
  for (const mod of LECTURE_MODULES) {
    const entry = mod.letters.find(
      (l) => l.letter === letter || l.letterLower === letter.toLowerCase(),
    );
    if (entry) {
      return `/lecture/${mod.id}/${entry.letterLower}`;
    }
  }
  return null;
}

function frenchHref(theme: { slug: string; tab?: string }): string {
  if (theme.tab === "vocabulaire") return `/francais/vocabulaire/${theme.slug}`;
  if (theme.tab === "grammaire" || theme.tab === "conjugaison") {
    return `/francais/grammaire/${theme.slug}`;
  }
  return `/francais/${theme.slug}`;
}

/** Resolve a curriculum lesson to an in-app route. */
export function resolveLessonHref(
  subject: string | null | undefined,
  moduleId: string | null | undefined,
  lessonId: string | null | undefined,
): string | null {
  if (!subject || !lessonId) return null;
  const subj = subject.toLowerCase();
  const mod = (moduleId ?? "").trim();
  const lesson = lessonId.trim();

  if (subj === "maths" && mod) {
    const submoduleId = mathSubmoduleId(mod, lesson);
    return submoduleId ? `/mathematiques/${submoduleId}` : null;
  }

  if (subj === "lecture") {
    return lectureHref(lesson);
  }

  if (subj === "français" || subj === "francais") {
    const theme = FRENCH_BY_CODE.get(lesson);
    return theme ? frenchHref(theme) : null;
  }

  if (subj === "communication") {
    return "/francais?tab=communication";
  }

  return null;
}

export function subjectFromMatiere(matiere: string): LessonSubject | null {
  const m = matiere.toLowerCase();
  if (m === "maths") return "maths";
  if (m === "lecture") return "lecture";
  if (m === "français" || m === "francais") return "francais";
  if (m === "communication") return "communication";
  return null;
}

export function lessonKey(subject: string, moduleId: string, lessonId: string): string {
  return `${subject}:${moduleId}:${lessonId}`;
}

/** Map math submodule id back to lesson code (e.g. A1-1 → A1.1). */
export function mathLessonCodeFromSubmodule(submoduleId: string): string | null {
  const lesson = getLessonBySubmoduleId(submoduleId);
  return lesson?.submoduleCode ?? null;
}
