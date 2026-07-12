import type { ContentDomain } from "./types";

export function lectureLetterKey(letterLower: string): string {
  return `lecture:letter:${letterLower.toLowerCase()}`;
}

export function vocabThemeKey(slug: string): string {
  return `vocab:theme:${slug}`;
}

export function grammarLessonKey(slug: string): string {
  return `grammar:lesson:${slug}`;
}

export function conjugationLessonKey(slug: string): string {
  return `conjugation:lesson:${slug}`;
}

export function mathLessonKey(submoduleId: string): string {
  return `math:lesson:${submoduleId}`;
}

export function apprendreLessonKey(slug: string): string {
  return `apprendre:lesson:${slug}`;
}

export function parseContentKey(key: string): {
  domain: ContentDomain;
  kind: string;
  id: string;
} | null {
  const parts = key.split(":");
  if (parts.length < 3) return null;
  const [domain, kind, ...rest] = parts;
  const id = rest.join(":");
  if (!domain || !kind || !id) return null;
  if (
    domain !== "lecture" &&
    domain !== "vocab" &&
    domain !== "grammar" &&
    domain !== "conjugation" &&
    domain !== "math" &&
    domain !== "apprendre"
  ) {
    return null;
  }
  return { domain, kind, id };
}

export function domainFromKey(key: string): ContentDomain | null {
  return parseContentKey(key)?.domain ?? null;
}

/** Chemin Git relatif pour une clé d'override. */
export function gitPathForKey(key: string): string {
  const safe = key.replace(/[^a-zA-Z0-9:_-]/g, "_").replace(/:/g, "__");
  return `lib/curriculum/content/overrides/data/${safe}.json`;
}

export function labelForKey(key: string): string {
  const parsed = parseContentKey(key);
  if (!parsed) return key;
  const { domain, kind, id } = parsed;
  switch (domain) {
    case "lecture":
      return kind === "letter" ? `Lecture — lettre ${id}` : `Lecture — ${id}`;
    case "vocab":
      return `Vocabulaire — ${id}`;
    case "grammar":
      return `Grammaire — ${id}`;
    case "conjugation":
      return `Conjugaison — ${id}`;
    case "math":
      return `Maths — ${id}`;
    case "apprendre":
      return `Apprendre — ${id}`;
    default:
      return key;
  }
}
