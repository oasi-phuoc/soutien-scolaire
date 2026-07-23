/** Année scolaire CH : du 1er août au 31 juillet. */

/** Début de l'année scolaire en cours (1er août 00:00 UTC). */
export function currentSchoolYearStart(now = new Date()): Date {
  const year = now.getUTCMonth() >= 7 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
  return new Date(Date.UTC(year, 7, 1, 0, 0, 0, 0));
}

/** Libellé « 2025–2026 » pour l'année scolaire en cours. */
export function currentSchoolYearLabel(now = new Date()): string {
  const start = currentSchoolYearStart(now);
  const y = start.getUTCFullYear();
  return `${y}–${y + 1}`;
}

/** Libellé de l'année scolaire précédente. */
export function previousSchoolYearLabel(now = new Date()): string {
  const start = currentSchoolYearStart(now);
  const y = start.getUTCFullYear() - 1;
  return `${y}–${y + 1}`;
}

export function currentSchoolYearStartIso(now = new Date()): string {
  return currentSchoolYearStart(now).toISOString();
}
