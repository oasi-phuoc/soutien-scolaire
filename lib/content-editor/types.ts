/** Domaines de contenu éditables en ligne (admin). */
export type ContentDomain =
  | "lecture"
  | "vocab"
  | "grammar"
  | "conjugation"
  | "math"
  | "apprendre"
  | "catalog"
  | "ce"
  | "co"
  | "asset"
  | "comm"
  | "placement";

export type ContentOverrideRecord = {
  key: string;
  domain: ContentDomain;
  label: string;
  payload: unknown;
  updatedAt: string;
  updatedBy?: string | null;
  gitPath?: string | null;
  gitSha?: string | null;
};

export type SaveContentResult =
  | {
      ok: true;
      record: ContentOverrideRecord;
      persisted: {
        local: boolean;
        supabase: boolean;
        git: boolean;
      };
      message?: string;
    }
  | { ok: false; reason: string };

export type ContentEditorCapabilities = {
  canEdit: boolean;
  supabaseConfigured: boolean;
  /** Service role présent (écritures overrides / images). */
  supabaseServiceRole: boolean;
  gitConfigured: boolean;
  openLocally: boolean;
  git?: {
    repo: string;
    branch: string;
    source: "env" | "supabase";
  } | null;
};

/** Entrée de navigation pour un thème / leçon ajouté via le catalogue. */
export type CatalogNavItem = {
  id: string;
  slug?: string;
  code: string;
  title: string;
  section?: string;
  tab?: string;
  moduleId?: string;
  branch?: string;
  description?: string;
  hidden?: boolean;
};

export type MathCatalogPayload = {
  modules: Array<{
    id: string;
    code: string;
    title: string;
    branch: "algebra" | "geometry" | "stats";
    submodules: Array<{ id: string; code: string; title: string }>;
    prerequisiteIds: string[];
    description?: string;
    comingSoon?: boolean;
    hidden?: boolean;
  }>;
};

export type LectureCatalogPayload = {
  modules: Array<{
    id: string;
    code: string;
    title: string;
    description: string;
    letterKeys: string[];
    hidden?: boolean;
  }>;
};

export type FrenchCatalogPayload = {
  themes: Array<{
    id: string;
    slug: string;
    code: string;
    title: string;
    section: string;
    summary: string;
    tab?: string;
    markers?: string[];
    hidden?: boolean;
  }>;
};

export type CommCatalogPayload = {
  modules: Array<{
    id: string;
    level: string;
    title: string;
    description: string;
    submodules: Array<{
      id: string;
      code: string;
      title: string;
      available: boolean;
      lessonId?: string;
      hidden?: boolean;
    }>;
    hidden?: boolean;
  }>;
};

export type ImageUploadResult =
  | {
      ok: true;
      /** Chemin public app (/assets/...) ou URL Supabase. */
      url: string;
      publicPath: string;
      persisted: { supabase: boolean; git: boolean };
      message?: string;
    }
  | { ok: false; reason: string };
