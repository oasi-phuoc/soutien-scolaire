import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { gitPathForKey } from "./keys";
import type { ContentOverrideRecord } from "./types";

export type GitHubConfig = {
  token: string;
  repo: string;
  branch: string;
  source: "env" | "supabase";
};

function trimEnv(name: string): string {
  const raw = process.env[name];
  if (!raw) return "";
  return raw.trim().replace(/^['"]|['"]$/g, "");
}

function createServiceClient(): SupabaseClient | null {
  const url = trimEnv("NEXT_PUBLIC_SUPABASE_URL");
  const key = trimEnv("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/** Config depuis les variables d'environnement uniquement. */
export function getGitHubConfigFromEnv(): GitHubConfig | null {
  const token =
    trimEnv("CONTENT_GITHUB_TOKEN") ||
    trimEnv("GITHUB_TOKEN") ||
    trimEnv("GH_TOKEN");
  const repo =
    trimEnv("CONTENT_GITHUB_REPO") ||
    trimEnv("GITHUB_REPOSITORY") ||
    "oasi-phuoc/soutien-scolaire";
  const branch =
    trimEnv("CONTENT_GITHUB_BRANCH") ||
    trimEnv("GITHUB_REF_NAME") ||
    "main";
  if (!token) return null;
  return { token, repo, branch, source: "env" };
}

async function getGitHubConfigFromSupabase(): Promise<GitHubConfig | null> {
  const svc = createServiceClient();
  if (!svc) return null;
  const { data, error } = await svc
    .from("curriculum_content_sync_settings")
    .select("github_token, github_repo, github_branch")
    .eq("id", "default")
    .maybeSingle();
  if (error || !data?.github_token) return null;
  const token = String(data.github_token).trim();
  if (!token) return null;
  return {
    token,
    repo: (data.github_repo?.trim() || "oasi-phuoc/soutien-scolaire"),
    branch: (data.github_branch?.trim() || "main"),
    source: "supabase",
  };
}

/** Résout la config GitHub : env Vercel en priorité, sinon réglages Supabase. */
export async function resolveGitHubConfig(): Promise<GitHubConfig | null> {
  return getGitHubConfigFromEnv() ?? (await getGitHubConfigFromSupabase());
}

/** @deprecated préférer resolveGitHubConfig() — sync env only */
export function getGitHubConfig(): GitHubConfig | null {
  return getGitHubConfigFromEnv();
}

export function isGitConfigured(): boolean {
  return getGitHubConfigFromEnv() != null;
}

export async function isGitConfiguredAsync(): Promise<boolean> {
  return (await resolveGitHubConfig()) != null;
}

async function ghFetch(
  cfg: GitHubConfig,
  apiPath: string,
  init?: RequestInit,
): Promise<Response> {
  return fetch(`https://api.github.com${apiPath}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${cfg.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
  });
}

async function putGitHubFile(
  cfg: GitHubConfig,
  filePath: string,
  contentBase64: string,
  message: string,
): Promise<{ ok: true; sha: string; path: string } | { ok: false; reason: string }> {
  const [owner, repoName] = cfg.repo.split("/");
  if (!owner || !repoName) {
    return { ok: false, reason: `Dépôt GitHub invalide: ${cfg.repo}` };
  }

  let existingSha: string | undefined;
  const getRes = await ghFetch(
    cfg,
    `/repos/${owner}/${repoName}/contents/${filePath
      .split("/")
      .map(encodeURIComponent)
      .join("/")}?ref=${encodeURIComponent(cfg.branch)}`,
  );
  if (getRes.ok) {
    const existing = (await getRes.json()) as { sha?: string };
    existingSha = existing.sha;
  } else if (getRes.status !== 404) {
    const err = await getRes.text();
    return { ok: false, reason: `Lecture GitHub: ${getRes.status} ${err}` };
  }

  const putRes = await ghFetch(
    cfg,
    `/repos/${owner}/${repoName}/contents/${filePath
      .split("/")
      .map(encodeURIComponent)
      .join("/")}`,
    {
      method: "PUT",
      body: JSON.stringify({
        message,
        content: contentBase64,
        branch: cfg.branch,
        ...(existingSha ? { sha: existingSha } : {}),
      }),
    },
  );

  if (!putRes.ok) {
    const err = await putRes.text();
    return { ok: false, reason: `Commit GitHub: ${putRes.status} ${err}` };
  }

  const json = (await putRes.json()) as {
    content?: { sha?: string };
    commit?: { sha?: string };
  };
  const sha = json.content?.sha || json.commit?.sha || "";
  return { ok: true, sha, path: filePath };
}

export async function commitOverrideToGitHub(
  record: ContentOverrideRecord,
): Promise<{ ok: true; sha: string; path: string } | { ok: false; reason: string }> {
  const cfg = await resolveGitHubConfig();
  if (!cfg) {
    return {
      ok: false,
      reason:
        "GitHub non configuré — définissez CONTENT_GITHUB_TOKEN (Vercel) ou le token dans Admin → Contenu",
    };
  }

  const filePath = record.gitPath || gitPathForKey(record.key);
  const body = {
    key: record.key,
    domain: record.domain,
    label: record.label,
    payload: record.payload,
    updatedAt: record.updatedAt,
    updatedBy: record.updatedBy ?? null,
    gitPath: filePath,
  };
  const content = Buffer.from(JSON.stringify(body, null, 2) + "\n").toString(
    "base64",
  );

  return putGitHubFile(cfg, filePath, content, `content(edit): ${record.label}`);
}

export async function commitBinaryToGitHub(input: {
  relativePath: string;
  bytes: Buffer;
  message: string;
}): Promise<{ ok: true; sha: string; path: string } | { ok: false; reason: string }> {
  const cfg = await resolveGitHubConfig();
  if (!cfg) {
    return {
      ok: false,
      reason:
        "GitHub non configuré — définissez CONTENT_GITHUB_TOKEN (Vercel) ou le token dans Admin → Contenu",
    };
  }

  const filePath = input.relativePath.replace(/^\//, "");
  const content = input.bytes.toString("base64");
  return putGitHubFile(cfg, filePath, content, input.message);
}

/**
 * Supprime le fichier JSON d'override sur GitHub (commit de suppression).
 */
export async function deleteOverrideFromGitHub(input: {
  key: string;
  label?: string;
  gitPath?: string | null;
}): Promise<{ ok: true; sha: string; path: string } | { ok: false; reason: string }> {
  const cfg = await resolveGitHubConfig();
  if (!cfg) {
    return {
      ok: false,
      reason:
        "GitHub non configuré — définissez CONTENT_GITHUB_TOKEN (Vercel) ou le token dans Admin → Contenu",
    };
  }

  const [owner, repoName] = cfg.repo.split("/");
  if (!owner || !repoName) {
    return { ok: false, reason: `Dépôt GitHub invalide: ${cfg.repo}` };
  }

  const filePath = (input.gitPath || gitPathForKey(input.key)).replace(/^\//, "");
  const encodedPath = filePath
    .split("/")
    .map(encodeURIComponent)
    .join("/");

  const getRes = await ghFetch(
    cfg,
    `/repos/${owner}/${repoName}/contents/${encodedPath}?ref=${encodeURIComponent(cfg.branch)}`,
  );

  if (getRes.status === 404) {
    return {
      ok: true,
      sha: "",
      path: filePath,
    };
  }
  if (!getRes.ok) {
    const err = await getRes.text();
    return { ok: false, reason: `Lecture GitHub: ${getRes.status} ${err}` };
  }

  const existing = (await getRes.json()) as { sha?: string };
  if (!existing.sha) {
    return { ok: false, reason: "SHA GitHub introuvable pour ce fichier" };
  }

  const label = input.label?.trim() || input.key;
  const delRes = await ghFetch(
    cfg,
    `/repos/${owner}/${repoName}/contents/${encodedPath}`,
    {
      method: "DELETE",
      body: JSON.stringify({
        message: `content(delete): ${label}`,
        sha: existing.sha,
        branch: cfg.branch,
      }),
    },
  );

  if (!delRes.ok) {
    const err = await delRes.text();
    return { ok: false, reason: `Suppression GitHub: ${delRes.status} ${err}` };
  }

  const json = (await delRes.json()) as {
    commit?: { sha?: string };
  };
  return {
    ok: true,
    sha: json.commit?.sha || "",
    path: filePath,
  };
}

export async function probeGitHubConnection(): Promise<{
  ok: boolean;
  reason?: string;
  repo?: string;
  branch?: string;
  source?: "env" | "supabase";
}> {
  const cfg = await resolveGitHubConfig();
  if (!cfg) {
    return {
      ok: false,
      reason:
        "Aucun token — CONTENT_GITHUB_TOKEN absent (Vercel/.env) et aucun réglage Supabase",
    };
  }
  const [owner, repoName] = cfg.repo.split("/");
  if (!owner || !repoName) {
    return { ok: false, reason: `Dépôt invalide: ${cfg.repo}` };
  }
  const res = await ghFetch(cfg, `/repos/${owner}/${repoName}`);
  if (!res.ok) {
    const err = await res.text();
    return {
      ok: false,
      reason: `Accès dépôt refusé (${res.status}). Vérifiez le token (scope repo) et le nom du dépôt. ${err.slice(0, 180)}`,
      repo: cfg.repo,
      branch: cfg.branch,
      source: cfg.source,
    };
  }
  return {
    ok: true,
    repo: cfg.repo,
    branch: cfg.branch,
    source: cfg.source,
  };
}
