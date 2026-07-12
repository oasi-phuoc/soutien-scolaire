"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { loadDiskOverrides } from "@/lib/content-editor/disk";
import { commitOverrideToGitHub, isGitConfigured } from "@/lib/content-editor/github";
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

function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
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
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  const openLocally = process.env.CONTENT_EDIT_OPEN === "1" || !supabaseConfigured;
  const auth = await requireAdmin();
  return {
    canEdit: auth.ok,
    supabaseConfigured,
    gitConfigured: isGitConfigured(),
    openLocally,
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

  // GitHub
  const wantGit = input.syncGit !== false;
  if (wantGit && isGitConfigured()) {
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
  } else if (wantGit) {
    notes.push("GitHub non configuré (CONTENT_GITHUB_TOKEN)");
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
}> {
  const auth = await requireAdmin();
  if (!auth.ok) return { ok: false, reason: auth.reason };

  const db = createServiceClient() ?? (await createSupabaseActionClient());
  if (db) {
    const { error } = await db
      .from("curriculum_content_overrides")
      .delete()
      .eq("key", key);
    if (error) return { ok: false, reason: error.message };
  }

  revalidatePath("/admin/contenu");
  return { ok: true };
}
