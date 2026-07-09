export type ClassLevelCode = "CSC" | "CFR";

export const CLASS_LEVELS: ClassLevelCode[] = ["CSC", "CFR"];

export function classLevelFromLabel(label: string): ClassLevelCode | null {
  const upper = label.trim().toUpperCase();
  if (upper.startsWith("CSC")) return "CSC";
  if (upper.startsWith("CFR")) return "CFR";
  return null;
}

export function groupClassesByLevel<T extends { label: string }>(
  classes: T[],
): Record<ClassLevelCode, T[]> {
  const out: Record<ClassLevelCode, T[]> = { CSC: [], CFR: [] };
  for (const c of classes) {
    const level = classLevelFromLabel(c.label);
    if (level) out[level].push(c);
  }
  for (const level of CLASS_LEVELS) {
    out[level].sort((a, b) => a.label.localeCompare(b.label, "fr"));
  }
  return out;
}
