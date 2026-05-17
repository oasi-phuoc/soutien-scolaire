const FRENCH_PROGRESS_KEY = "soutien-french-v1";

function loadSlugs(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(FRENCH_PROGRESS_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return new Set(parsed as string[]);
    return new Set();
  } catch {
    return new Set();
  }
}

function saveSlugs(slugs: Set<string>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(FRENCH_PROGRESS_KEY, JSON.stringify([...slugs]));
}

export function getCompletedFrenchLessons(): Set<string> {
  return loadSlugs();
}

export function markFrenchLessonComplete(slug: string): void {
  const slugs = loadSlugs();
  if (slugs.has(slug)) return;
  slugs.add(slug);
  saveSlugs(slugs);
  window.dispatchEvent(new Event("soutien-french-lesson-complete"));
}
