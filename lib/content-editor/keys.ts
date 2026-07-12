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

export function ceLessonKey(id: string): string {
  return `ce:lesson:${id}`;
}

export function coLessonKey(id: string): string {
  return `co:lesson:${id}`;
}

export function catalogMathKey(): string {
  return "catalog:math:modules";
}

export function catalogLectureKey(): string {
  return "catalog:lecture:modules";
}

export function catalogFrenchKey(): string {
  return "catalog:french:themes";
}

export function catalogCommKey(): string {
  return "catalog:comm:modules";
}

export function catalogCeKey(): string {
  return "catalog:ce:lessons";
}

export function catalogCoKey(): string {
  return "catalog:co:lessons";
}

export function imageAliasKey(): string {
  return "catalog:image:aliases";
}

const KNOWN_DOMAINS: ContentDomain[] = [
  "lecture",
  "vocab",
  "grammar",
  "conjugation",
  "math",
  "apprendre",
  "catalog",
  "ce",
  "co",
  "asset",
  "comm",
  "placement",
];

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
  if (!KNOWN_DOMAINS.includes(domain as ContentDomain)) return null;
  return { domain: domain as ContentDomain, kind, id };
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
    case "catalog":
      return `Catalogue — ${kind}/${id}`;
    case "ce":
      return `CE — ${id}`;
    case "co":
      return `CO — ${id}`;
    case "comm":
      return `Communication — ${id}`;
    case "placement":
      return `Placement — ${kind}/${id}`;
    case "asset":
      return `Image — ${id}`;
    default:
      return key;
  }
}
