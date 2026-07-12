import { gitPathForKey } from "./keys";
import type { ContentOverrideRecord } from "./types";

type GitHubConfig = {
  token: string;
  repo: string;
  branch: string;
};

export function getGitHubConfig(): GitHubConfig | null {
  const token =
    process.env.CONTENT_GITHUB_TOKEN ||
    process.env.GITHUB_TOKEN ||
    process.env.GH_TOKEN ||
    "";
  const repo =
    process.env.CONTENT_GITHUB_REPO ||
    process.env.GITHUB_REPOSITORY ||
    "oasi-phuoc/soutien-scolaire";
  const branch =
    process.env.CONTENT_GITHUB_BRANCH ||
    process.env.GITHUB_REF_NAME ||
    "main";
  if (!token || !repo) return null;
  return { token, repo, branch };
}

export function isGitConfigured(): boolean {
  return getGitHubConfig() != null;
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

/**
 * Crée ou met à jour le fichier JSON d'override dans le dépôt GitHub.
 * Retourne le SHA du blob écrit.
 */
export async function commitOverrideToGitHub(
  record: ContentOverrideRecord,
): Promise<{ ok: true; sha: string; path: string } | { ok: false; reason: string }> {
  const cfg = getGitHubConfig();
  if (!cfg) return { ok: false, reason: "GitHub non configuré (CONTENT_GITHUB_TOKEN)" };

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

  const [owner, repoName] = cfg.repo.split("/");
  if (!owner || !repoName) {
    return { ok: false, reason: `Dépôt GitHub invalide: ${cfg.repo}` };
  }

  // Récupérer le SHA existant si le fichier est déjà présent
  let existingSha: string | undefined;
  const getRes = await ghFetch(
    cfg,
    `/repos/${owner}/${repoName}/contents/${encodeURIComponent(filePath).replace(/%2F/g, "/")}?ref=${encodeURIComponent(cfg.branch)}`,
  );
  if (getRes.ok) {
    const existing = (await getRes.json()) as { sha?: string };
    existingSha = existing.sha;
  } else if (getRes.status !== 404) {
    const err = await getRes.text();
    return { ok: false, reason: `Lecture GitHub: ${getRes.status} ${err}` };
  }

  const message = `content(edit): ${record.label}`;
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
        content,
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
