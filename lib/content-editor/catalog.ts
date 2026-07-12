import type { MathModule } from "@/lib/curriculum/types";
import type { FrenchTheme } from "@/lib/curriculum/types";
import type { LectureModule } from "@/lib/curriculum/lecture-data";
import type { CommunicationModule } from "@/lib/curriculum/communication-data";
import type {
  FrenchCatalogPayload,
  LectureCatalogPayload,
  MathCatalogPayload,
  CommCatalogPayload,
} from "./types";
import {
  catalogCommKey,
  catalogFrenchKey,
  catalogLectureKey,
  catalogMathKey,
} from "./keys";

type OverrideMap = Record<string, { payload: unknown } | undefined>;

export function resolveMathModules(
  base: MathModule[],
  overrides: OverrideMap,
): MathModule[] {
  const raw = overrides[catalogMathKey()]?.payload as MathCatalogPayload | undefined;
  if (!raw?.modules?.length) return base;
  return raw.modules
    .filter((m) => !m.hidden)
    .map((m) => ({
      id: m.id,
      code: m.code,
      title: m.title,
      branch: m.branch,
      submodules: m.submodules,
      prerequisiteIds: m.prerequisiteIds ?? [],
      description: m.description,
      comingSoon: m.comingSoon,
    }));
}

export function resolveLectureModules(
  base: LectureModule[],
  overrides: OverrideMap,
): LectureModule[] {
  const raw = overrides[catalogLectureKey()]?.payload as
    | LectureCatalogPayload
    | undefined;
  if (!raw?.modules?.length) return base;

  const letterMap = new Map<string, LectureModule["letters"][number]>();
  for (const mod of base) {
    for (const letter of mod.letters) {
      letterMap.set(letter.letterLower, letter);
    }
  }
  // Also pull letter overrides from content keys
  for (const [key, rec] of Object.entries(overrides)) {
    if (!key.startsWith("lecture:letter:") || !rec?.payload) continue;
    const letter = rec.payload as LectureModule["letters"][number];
    if (letter?.letterLower) letterMap.set(letter.letterLower, letter);
  }

  return raw.modules
    .filter((m) => !m.hidden)
    .map((m) => ({
      id: m.id,
      code: m.code,
      title: m.title,
      description: m.description,
      letters: m.letterKeys
        .map((k) => letterMap.get(k.toLowerCase()))
        .filter(Boolean) as LectureModule["letters"],
    }));
}

export function resolveFrenchThemes(
  base: FrenchTheme[],
  overrides: OverrideMap,
): FrenchTheme[] {
  const raw = overrides[catalogFrenchKey()]?.payload as
    | FrenchCatalogPayload
    | undefined;
  if (!raw?.themes?.length) return base;
  return raw.themes
    .filter((t) => !t.hidden)
    .map((t) => ({
      id: t.id,
      slug: t.slug,
      code: t.code,
      title: t.title,
      section: t.section as FrenchTheme["section"],
      summary: t.summary,
      markers: (t.markers ?? []) as FrenchTheme["markers"],
      tab: t.tab as FrenchTheme["tab"],
    }));
}

export function resolveCommModules(
  base: CommunicationModule[],
  overrides: OverrideMap,
): CommunicationModule[] {
  const raw = overrides[catalogCommKey()]?.payload as CommCatalogPayload | undefined;
  if (!raw?.modules?.length) return base;
  return raw.modules
    .filter((m) => !m.hidden)
    .map((m) => ({
      id: m.id,
      level: m.level,
      title: m.title,
      description: m.description,
      submodules: m.submodules.filter((s) => !s.hidden),
    }));
}

/** Snapshot catalogue maths à partir du base (pour première édition). */
export function snapshotMathCatalog(modules: MathModule[]): MathCatalogPayload {
  return {
    modules: modules.map((m) => ({
      id: m.id,
      code: m.code,
      title: m.title,
      branch: m.branch,
      submodules: m.submodules.map((s) => ({ ...s })),
      prerequisiteIds: [...m.prerequisiteIds],
      description: m.description,
      comingSoon: m.comingSoon,
    })),
  };
}

export function snapshotLectureCatalog(
  modules: LectureModule[],
): LectureCatalogPayload {
  return {
    modules: modules.map((m) => ({
      id: m.id,
      code: m.code,
      title: m.title,
      description: m.description,
      letterKeys: m.letters.map((l) => l.letterLower),
    })),
  };
}

export function snapshotFrenchCatalog(
  themes: FrenchTheme[],
): FrenchCatalogPayload {
  return {
    themes: themes.map((t) => ({
      id: t.id,
      slug: t.slug,
      code: t.code,
      title: t.title,
      section: t.section,
      summary: t.summary,
      tab: t.tab,
      markers: t.markers,
    })),
  };
}

export function snapshotCommCatalog(
  modules: CommunicationModule[],
): CommCatalogPayload {
  return {
    modules: modules.map((m) => ({
      id: m.id,
      level: m.level,
      title: m.title,
      description: m.description,
      submodules: m.submodules.map((s) => ({ ...s })),
    })),
  };
}
