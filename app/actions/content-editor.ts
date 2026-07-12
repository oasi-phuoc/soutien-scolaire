"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { loadDiskOverrides } from "@/lib/content-editor/disk";
import {
  commitOverrideToGitHub,
  deleteOverrideFromGitHub,
  getGitHubConfigFromEnv,
  probeGitHubConnection,
  resolveGitHubConfig,
} from "@/lib/content-editor/github";
import {
  domainFromKey,
  gitPathForKey,
  labelForKey,
} from "@/lib/content-editor/keys";
import type {
  ContentEditorCapabilities,
  ContentOverrideRecord,
  SaveContentResult,
} from "@/lib/content-editor/types";

function trimEnv(name: string): string {
  const raw = process.env[name];
  if (!raw) return "";
  return raw.trim().replace(/^['"]|['"]$/g, "");
}

function createServiceClient() {
  const url = trimEnv("NEXT_PUBLIC_SUPABASE_URL");
  const key = trimEnv("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function requireAdmin(): Promise<
  | { ok: true; userId: string | null; openLocally: boolean }
  | { ok: false; reason: string }
> {
  const openLocally = process.env.CONTENT_EDIT_OPEN === "1";
  const supabase = await createSupabaseActionClient();

  if (!supabase) {
    if (openLocally) return { ok: true, userId: null, openLocally: true };
    // Sans Supabase : autoriser l'édition locale (dev / déploiement sans comptes)
    return { ok: true, userId: null, openLocally: true };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    if (openLocally) return { ok: true, userId: null, openLocally: true };
    return { ok: false, reason: "Non authentifié" };
  }

  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || openLocally) {
    return { ok: true, userId: user.id, openLocally };
  }
  return { ok: false, reason: "Réservé au compte admin" };
}

function rowToRecord(row: {
  key: string;
  domain: string;
  label: string;
  payload: unknown;
  git_path: string | null;
  git_sha: string | null;
  updated_by: string | null;
  updated_at: string;
}): ContentOverrideRecord {
  return {
    key: row.key,
    domain: row.domain as ContentOverrideRecord["domain"],
    label: row.label,
    payload: row.payload,
    updatedAt: row.updated_at,
    updatedBy: row.updated_by,
    gitPath: row.git_path,
    gitSha: row.git_sha,
  };
}

export async function getContentEditorCapabilitiesAction(): Promise<ContentEditorCapabilities> {
  const supabaseConfigured = Boolean(
    trimEnv("NEXT_PUBLIC_SUPABASE_URL") && trimEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  );
  const supabaseServiceRole = Boolean(trimEnv("SUPABASE_SERVICE_ROLE_KEY"));
  const openLocally = process.env.CONTENT_EDIT_OPEN === "1" || !supabaseConfigured;
  const auth = await requireAdmin();
  const git = await resolveGitHubConfig();
  return {
    canEdit: auth.ok,
    supabaseConfigured,
    supabaseServiceRole,
    gitConfigured: git != null,
    openLocally,
    git: git
      ? { repo: git.repo, branch: git.branch, source: git.source }
      : null,
  };
}

export async function listContentOverridesAction(): Promise<{
  ok: boolean;
  records: ContentOverrideRecord[];
  reason?: string;
}> {
  const auth = await requireAdmin();
  if (!auth.ok) return { ok: false, records: [], reason: auth.reason };

  const disk = await loadDiskOverrides();
  const map = new Map<string, ContentOverrideRecord>(Object.entries(disk));

  const supabase = await createSupabaseActionClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("curriculum_content_overrides")
      .select("key, domain, label, payload, git_path, git_sha, updated_by, updated_at")
      .order("updated_at", { ascending: false });
    if (!error && data) {
      for (const row of data) {
        map.set(row.key, rowToRecord(row));
      }
    }
  }

  return {
    ok: true,
    records: [...map.values()].sort((a, b) =>
      b.updatedAt.localeCompare(a.updatedAt),
    ),
  };
}

export async function getContentOverridesMapAction(): Promise<{
  ok: boolean;
  map: Record<string, ContentOverrideRecord>;
  reason?: string;
}> {
  // Lecture autorisée à tous (contenu pédagogique) — pas besoin d'être admin
  const disk = await loadDiskOverrides();
  const map: Record<string, ContentOverrideRecord> = { ...disk };

  const supabase = await createSupabaseActionClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("curriculum_content_overrides")
      .select("key, domain, label, payload, git_path, git_sha, updated_by, updated_at");
    if (!error && data) {
      for (const row of data) {
        map[row.key] = rowToRecord(row);
      }
    }
  }

  return { ok: true, map };
}

export async function saveContentOverrideAction(input: {
  key: string;
  payload: unknown;
  label?: string;
  syncGit?: boolean;
}): Promise<SaveContentResult> {
  const auth = await requireAdmin();
  if (!auth.ok) return { ok: false, reason: auth.reason };

  const domain = domainFromKey(input.key);
  if (!domain) return { ok: false, reason: `Clé de contenu invalide: ${input.key}` };

  const now = new Date().toISOString();
  const record: ContentOverrideRecord = {
    key: input.key,
    domain,
    label: input.label ?? labelForKey(input.key),
    payload: input.payload,
    updatedAt: now,
    updatedBy: auth.userId,
    gitPath: gitPathForKey(input.key),
    gitSha: null,
  };

  const persisted = { local: true, supabase: false, git: false };
  const notes: string[] = [];

  // Supabase
  const svc = createServiceClient();
  const authed = await createSupabaseActionClient();
  const db = svc ?? authed;
  if (db) {
    const { error } = await db.from("curriculum_content_overrides").upsert(
      {
        key: record.key,
        domain: record.domain,
        label: record.label,
        payload: record.payload,
        git_path: record.gitPath,
        git_sha: record.gitSha,
        updated_by: record.updatedBy,
        updated_at: record.updatedAt,
      },
      { onConflict: "key" },
    );
    if (error) {
      notes.push(`Supabase: ${error.message}`);
    } else {
      persisted.supabase = true;
    }
  } else {
    notes.push("Supabase non configuré — sauvegarde locale uniquement");
  }

  // GitHub — toujours tenter la sync à l'enregistrement
  const wantGit = input.syncGit !== false;
  if (wantGit) {
    const gitCfg = await resolveGitHubConfig();
    if (gitCfg) {
      const git = await commitOverrideToGitHub(record);
      if (git.ok) {
        persisted.git = true;
        record.gitSha = git.sha;
        record.gitPath = git.path;
        if (db) {
          await db
            .from("curriculum_content_overrides")
            .update({ git_sha: git.sha, git_path: git.path })
            .eq("key", record.key);
        }
      } else {
        notes.push(git.reason);
      }
    } else {
      notes.push(
        "GitHub non configuré (CONTENT_GITHUB_TOKEN ou Admin → Contenu → Sync Git)",
      );
    }
  }

  revalidatePath("/admin/contenu");
  revalidatePath("/lecture");
  revalidatePath("/francais");
  revalidatePath("/mathematiques");

  return {
    ok: true,
    record,
    persisted,
    message: notes.length ? notes.join(" · ") : undefined,
  };
}

export async function deleteContentOverrideAction(key: string): Promise<{
  ok: boolean;
  reason?: string;
  message?: string;
  gitDeleted?: boolean;
}> {
  const auth = await requireAdmin();
  if (!auth.ok) return { ok: false, reason: auth.reason };

  const db = createServiceClient() ?? (await createSupabaseActionClient());
  let label = labelForKey(key);
  let gitPath: string | null = gitPathForKey(key);

  if (db) {
    const { data: existing } = await db
      .from("curriculum_content_overrides")
      .select("label, git_path")
      .eq("key", key)
      .maybeSingle();
    if (existing?.label) label = String(existing.label);
    if (existing?.git_path) gitPath = String(existing.git_path);

    const { error } = await db
      .from("curriculum_content_overrides")
      .delete()
      .eq("key", key);
    if (error) return { ok: false, reason: error.message };
  }

  // Aussi depuis les fichiers disque (déploiement local / déjà sync)
  const disk = await loadDiskOverrides();
  const diskRec = disk[key];
  if (diskRec?.gitPath) gitPath = diskRec.gitPath;
  if (diskRec?.label) label = diskRec.label;

  const notes: string[] = ["Supabase/local"];
  let gitDeleted = false;
  const gitRes = await deleteOverrideFromGitHub({ key, label, gitPath });
  if (gitRes.ok) {
    gitDeleted = true;
    notes.push(
      gitRes.sha
        ? `Git (fichier retiré, ${gitRes.sha.slice(0, 7)})`
        : "Git (fichier déjà absent)",
    );
  } else {
    notes.push(`Git non nettoyé: ${gitRes.reason}`);
  }

  revalidatePath("/admin/contenu");
  return {
    ok: true,
    gitDeleted,
    message: notes.join(" · "),
  };
}

export async function getContentSyncSettingsAction(): Promise<{
  ok: boolean;
  reason?: string;
  envConfigured: boolean;
  settings: {
    hasToken: boolean;
    tokenHint: string | null;
    repo: string;
    branch: string;
    source: "env" | "supabase" | null;
  };
}> {
  const auth = await requireAdmin();
  if (!auth.ok) {
    return {
      ok: false,
      reason: auth.reason,
      envConfigured: false,
      settings: {
        hasToken: false,
        tokenHint: null,
        repo: "oasi-phuoc/soutien-scolaire",
        branch: "main",
        source: null,
      },
    };
  }

  const envCfg = getGitHubConfigFromEnv();
  if (envCfg) {
    return {
      ok: true,
      envConfigured: true,
      settings: {
        hasToken: true,
        tokenHint: `…${envCfg.token.slice(-4)}`,
        repo: envCfg.repo,
        branch: envCfg.branch,
        source: "env",
      },
    };
  }

  const svc = createServiceClient() ?? (await createSupabaseActionClient());
  if (!svc) {
    return {
      ok: true,
      envConfigured: false,
      settings: {
        hasToken: false,
        tokenHint: null,
        repo: "oasi-phuoc/soutien-scolaire",
        branch: "main",
        source: null,
      },
    };
  }

  const { data } = await svc
    .from("curriculum_content_sync_settings")
    .select("github_token, github_repo, github_branch")
    .eq("id", "default")
    .maybeSingle();

  const token = data?.github_token?.trim() || "";
  return {
    ok: true,
    envConfigured: false,
    settings: {
      hasToken: Boolean(token),
      tokenHint: token ? `…${token.slice(-4)}` : null,
      repo: data?.github_repo?.trim() || "oasi-phuoc/soutien-scolaire",
      branch: data?.github_branch?.trim() || "main",
      source: token ? "supabase" : null,
    },
  };
}

export async function saveContentSyncSettingsAction(input: {
  githubToken?: string;
  githubRepo?: string;
  githubBranch?: string;
  clearToken?: boolean;
}): Promise<{ ok: boolean; reason?: string; message?: string }> {
  const auth = await requireAdmin();
  if (!auth.ok) return { ok: false, reason: auth.reason };

  if (getGitHubConfigFromEnv()) {
    return {
      ok: true,
      message:
        "Un token est déjà défini via CONTENT_GITHUB_TOKEN (Vercel/.env) — il prime sur ce formulaire.",
    };
  }

  const db = createServiceClient() ?? (await createSupabaseActionClient());
  if (!db) {
    return {
      ok: false,
      reason:
        "Supabase non configuré (SUPABASE_SERVICE_ROLE_KEY recommandé pour stocker le token)",
    };
  }

  const { data: existing } = await db
    .from("curriculum_content_sync_settings")
    .select("github_token, github_repo, github_branch")
    .eq("id", "default")
    .maybeSingle();

  const nextToken = input.clearToken
    ? null
    : input.githubToken?.trim()
      ? input.githubToken.trim()
      : existing?.github_token ?? null;

  const { error } = await db.from("curriculum_content_sync_settings").upsert(
    {
      id: "default",
      github_token: nextToken,
      github_repo:
        input.githubRepo?.trim() ||
        existing?.github_repo ||
        "oasi-phuoc/soutien-scolaire",
      github_branch:
        input.githubBranch?.trim() || existing?.github_branch || "main",
      updated_by: auth.userId,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" },
  );

  if (error) {
    return {
      ok: false,
      reason: `${error.message} — appliquez la migration curriculum_content_sync_settings.sql`,
    };
  }

  revalidatePath("/admin/contenu");
  return { ok: true, message: "Réglages Git enregistrés dans Supabase." };
}

export async function probeContentSyncAction(): Promise<{
  ok: boolean;
  supabase: { ok: boolean; reason?: string };
  git: {
    ok: boolean;
    reason?: string;
    repo?: string;
    branch?: string;
    source?: "env" | "supabase";
  };
}> {
  const auth = await requireAdmin();
  if (!auth.ok) {
    return {
      ok: false,
      supabase: { ok: false, reason: auth.reason },
      git: { ok: false, reason: auth.reason },
    };
  }

  let supabaseOk = false;
  let supabaseReason: string | undefined;
  const db = createServiceClient() ?? (await createSupabaseActionClient());
  if (!db) {
    supabaseReason = "Client Supabase absent";
  } else {
    const { error } = await db
      .from("curriculum_content_overrides")
      .select("key")
      .limit(1);
    if (error) {
      supabaseReason = `${error.message} — migration overrides manquante ?`;
    } else {
      supabaseOk = true;
    }
  }

  const git = await probeGitHubConnection();
  return {
    ok: supabaseOk && git.ok,
    supabase: { ok: supabaseOk, reason: supabaseReason },
    git,
  };
}
