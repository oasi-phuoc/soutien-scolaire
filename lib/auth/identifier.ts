export type IdentifierStatus = "empty" | "email" | "phone" | "invalid";

export function normalizeForId(s: string): string {
  return s.trim().toLowerCase()
    .normalize("NFD").replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildLoginId(prenom: string, nom: string): string {
  const p = normalizeForId(prenom);
  const n = normalizeForId(nom);
  if (!p && !n) return "";
  if (!n) return p;
  if (!p) return n;
  return `${p}.${n}`;
}

export function loginIdToEmail(loginId: string): string {
  return `${loginId}@soutien.local`;
}

export function loginIdFromEmail(email: string | null | undefined): string | null {
  if (!email) return null;
  const trimmed = email.trim();
  const local = trimmed.replace(/@soutien\.local$/i, "");
  if (!local || local === trimmed) return null;
  return local;
}

function capitalizeIdPart(part: string): string {
  if (!part) return "";
  return part.charAt(0).toUpperCase() + part.slice(1);
}

/** Prénom / nom approximatifs depuis `prenom.nom` (identifiant). */
export function namePartsFromLoginId(
  loginId: string | null | undefined,
  email?: string | null,
): { prenom: string; nom: string } | null {
  const raw = (loginId || loginIdFromEmail(email) || "").trim();
  if (!raw || raw.includes("@")) return null;
  const parts = raw.split(".").filter(Boolean);
  if (parts.length === 0) return null;
  if (parts.length === 1) return { prenom: capitalizeIdPart(parts[0]!), nom: "" };
  return {
    prenom: capitalizeIdPart(parts[0]!),
    nom: parts.slice(1).map(capitalizeIdPart).join(" "),
  };
}

/** Nom affiché admin / liste : profil, sinon identifiant `prenom.nom`. */
export function formatPersonDisplayName(
  prenom?: string | null,
  nom?: string | null,
  loginId?: string | null,
  email?: string | null,
): string {
  const fromProfile = [prenom, nom].filter(Boolean).join(" ").trim();
  if (fromProfile) return fromProfile;
  const parsed = namePartsFromLoginId(loginId, email);
  if (!parsed) return "";
  return [parsed.prenom, parsed.nom].filter(Boolean).join(" ");
}

export function isEmailFormat(s: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(s.trim());
}

export function isPhoneFormat(s: string): boolean {
  // Strip everything except digits and leading +, then validate +XXXXXXX (7-15 digits)
  const clean = s.replace(/[^\d+]/g, "");
  return /^\+\d{7,15}$/.test(clean);
}

export function getIdentifierStatus(s: string): IdentifierStatus {
  if (!s.trim()) return "empty";
  if (isEmailFormat(s)) return "email";
  if (isPhoneFormat(s)) return "phone";
  return "invalid";
}

export function normalizePhone(raw: string): string {
  return raw.replace(/[^\d+]/g, "");
}
