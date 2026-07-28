import { ELEVE_CLASSE_TYPES, type EleveClasseType } from "@/lib/eleve-classe-types";

export type ClassLevelCode = EleveClasseType;

export const CLASS_LEVELS: ClassLevelCode[] = [...ELEVE_CLASSE_TYPES];

export function classLevelFromLabel(label: string): ClassLevelCode | null {
  const upper = label.trim().toUpperCase();
  for (const level of CLASS_LEVELS) {
    if (upper.startsWith(level)) return level;
  }
  return null;
}

export function groupClassesByLevel<T extends { label: string }>(
  classes: T[],
): Record<ClassLevelCode, T[]> {
  const out = Object.fromEntries(CLASS_LEVELS.map((l) => [l, [] as T[]])) as Record<
    ClassLevelCode,
    T[]
  >;
  for (const c of classes) {
    const level = classLevelFromLabel(c.label);
    if (level) out[level].push(c);
  }
  for (const level of CLASS_LEVELS) {
    out[level].sort((a, b) => a.label.localeCompare(b.label, "fr"));
  }
  return out;
}
