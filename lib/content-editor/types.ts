/** Domaines de contenu éditables en ligne (admin). */
export type ContentDomain =
  | "lecture"
  | "vocab"
  | "grammar"
  | "conjugation"
  | "math"
  | "apprendre";

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
  gitConfigured: boolean;
  openLocally: boolean;
};
