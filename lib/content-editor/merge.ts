/** Fusion profonde légère pour overlays de contenu curriculum. */
export function deepMerge<T>(base: T, overlay: unknown): T {
  if (overlay === undefined || overlay === null) return base;
  if (Array.isArray(overlay)) return overlay as T;
  if (typeof overlay !== "object" || overlay === null) return overlay as T;
  if (typeof base !== "object" || base === null || Array.isArray(base)) {
    return overlay as T;
  }

  const result: Record<string, unknown> = {
    ...(base as Record<string, unknown>),
  };
  for (const [k, v] of Object.entries(overlay as Record<string, unknown>)) {
    if (v === undefined) continue;
    const prev = result[k];
    if (
      v !== null &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      prev !== null &&
      typeof prev === "object" &&
      !Array.isArray(prev)
    ) {
      result[k] = deepMerge(prev, v);
    } else {
      result[k] = v;
    }
  }
  return result as T;
}

/**
 * Pour le mode édition, on remplace le document complet (pas un patch partiel),
 * afin que suppressions de mots / exercices soient possibles.
 */
export function applyContentOverride<T>(base: T, overridePayload: unknown | undefined): T {
  if (overridePayload === undefined || overridePayload === null) return base;
  return overridePayload as T;
}
