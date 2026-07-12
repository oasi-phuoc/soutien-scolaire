import { readFile, readdir } from "fs/promises";
import path from "path";
import type { ContentOverrideRecord } from "./types";
import { domainFromKey, labelForKey } from "./keys";

const DATA_DIR = path.join(
  process.cwd(),
  "lib/curriculum/content/overrides/data",
);

/**
 * Charge les overrides commités sur le disque (après sync Git / déploiement).
 * Ignoré si le dossier est vide ou absent.
 */
export async function loadDiskOverrides(): Promise<
  Record<string, ContentOverrideRecord>
> {
  try {
    const files = await readdir(DATA_DIR);
    const out: Record<string, ContentOverrideRecord> = {};
    await Promise.all(
      files
        .filter((f) => f.endsWith(".json"))
        .map(async (file) => {
          try {
            const raw = await readFile(path.join(DATA_DIR, file), "utf8");
            const parsed = JSON.parse(raw) as Partial<ContentOverrideRecord> & {
              key?: string;
              payload?: unknown;
            };
            const key = parsed.key;
            if (!key || parsed.payload === undefined) return;
            const domain = domainFromKey(key);
            if (!domain) return;
            out[key] = {
              key,
              domain,
              label: parsed.label ?? labelForKey(key),
              payload: parsed.payload,
              updatedAt: parsed.updatedAt ?? new Date(0).toISOString(),
              updatedBy: parsed.updatedBy ?? null,
              gitPath: parsed.gitPath ?? `lib/curriculum/content/overrides/data/${file}`,
              gitSha: parsed.gitSha ?? null,
            };
          } catch {
            /* ignore corrupt file */
          }
        }),
    );
    return out;
  } catch {
    return {};
  }
}
