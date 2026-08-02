import { pickFromPool } from "@/lib/placement/progressive-pick";
import catalogJson from "./scene-image-catalog.json";

export type SceneImageVariant = {
  id: string;
  familyId: string;
  familyKey: string;
  file: string;
  path: string;
  tags: string[];
};

export type SceneImageFamily = {
  id: string;
  key: string;
  tags: string[];
  /** Description complète de la scène (texte, pas mots-clés). */
  description?: string;
  variants: SceneImageVariant[];
};

type SceneCatalogFile = {
  version: number;
  families: SceneImageFamily[];
  byPath: Record<string, string>;
  byId: Record<string, string>;
};

const CATALOG = catalogJson as SceneCatalogFile;

const FAMILY_BY_ID = new Map<string, SceneImageFamily>(
  CATALOG.families.map((f) => [f.id, f]),
);

const FAMILY_BY_KEY = new Map<string, SceneImageFamily>(
  CATALOG.families.map((f) => [f.key, f]),
);

const VARIANT_BY_PATH = new Map<string, SceneImageVariant>();
for (const family of CATALOG.families) {
  for (const variant of family.variants) {
    VARIANT_BY_PATH.set(variant.path, variant);
  }
}

/** Normalise un chemin d’asset scène (ajoute le préfixe si besoin). */
function normalizeScenePath(path: string): string {
  if (path.startsWith("/assets/expression/images/scene/")) return path;
  if (path.startsWith("assets/expression/images/scene/")) return `/${path}`;
  return path;
}

/** Famille à partir d’un chemin scène (ou null). */
export function getSceneFamilyByPath(path: string | null | undefined): SceneImageFamily | null {
  if (!path) return null;
  const variant = VARIANT_BY_PATH.get(normalizeScenePath(path));
  if (!variant) return null;
  return FAMILY_BY_ID.get(variant.familyId) ?? null;
}

/** Famille à partir de la clé slug (ex. `acheter-pain`). */
export function getSceneFamilyByKey(key: string | null | undefined): SceneImageFamily | null {
  if (!key) return null;
  return FAMILY_BY_KEY.get(key) ?? null;
}

/** Tous les chemins d’une famille (variantes similaires). */
export function sceneVariantPaths(family: SceneImageFamily): string[] {
  return family.variants.map((v) => v.path);
}

/**
 * Tire une variante parmi les images similaires d’une famille.
 * Sans seed ou famille à 1 élément → image principale (ou unique).
 */
export function pickSceneVariantPath(
  path: string | null | undefined,
  seed?: string,
): string | null {
  if (!path) return null;
  const normalized = normalizeScenePath(path);
  const family = getSceneFamilyByPath(normalized);
  if (!family) return normalized;
  const paths = sceneVariantPaths(family);
  if (paths.length <= 1) return paths[0] ?? normalized;
  if (!seed) return paths[0]!;
  return pickFromPool(paths, `scene-variant:${seed}:${family.id}`);
}

/** Chemins de variantes pour un slug scène (clé famille). */
export function pickSceneVariantByKey(
  familyKey: string | null | undefined,
  seed?: string,
): string | null {
  if (!familyKey) return null;
  const family = getSceneFamilyByKey(familyKey);
  if (!family) return null;
  const paths = sceneVariantPaths(family);
  if (!paths.length) return null;
  if (paths.length === 1 || !seed) return paths[0]!;
  return pickFromPool(paths, `scene-variant:${seed}:${family.id}`);
}

export function getSceneCatalogStats(): { families: number; images: number; multi: number } {
  const images = CATALOG.families.reduce((n, f) => n + f.variants.length, 0);
  const multi = CATALOG.families.filter((f) => f.variants.length > 1).length;
  return { families: CATALOG.families.length, images, multi };
}
