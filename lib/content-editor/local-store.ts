import type { ContentOverrideRecord } from "./types";

export const LOCAL_OVERRIDES_KEY = "soutien-content-overrides-v1";
export const EDIT_MODE_SESSION_KEY = "soutien-content-edit-mode";

export function readLocalOverrides(): Record<string, ContentOverrideRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(LOCAL_OVERRIDES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, ContentOverrideRecord>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function writeLocalOverride(record: ContentOverrideRecord): void {
  if (typeof window === "undefined") return;
  const all = readLocalOverrides();
  all[record.key] = record;
  localStorage.setItem(LOCAL_OVERRIDES_KEY, JSON.stringify(all));
  window.dispatchEvent(new Event("soutien-content-overrides"));
}

export function removeLocalOverride(key: string): void {
  if (typeof window === "undefined") return;
  const all = readLocalOverrides();
  delete all[key];
  localStorage.setItem(LOCAL_OVERRIDES_KEY, JSON.stringify(all));
  window.dispatchEvent(new Event("soutien-content-overrides"));
}

export function clearLocalOverrides(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(LOCAL_OVERRIDES_KEY);
  window.dispatchEvent(new Event("soutien-content-overrides"));
}

export function readEditModeEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(EDIT_MODE_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function writeEditModeEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  try {
    if (enabled) sessionStorage.setItem(EDIT_MODE_SESSION_KEY, "1");
    else sessionStorage.removeItem(EDIT_MODE_SESSION_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event("soutien-content-edit-mode"));
}
