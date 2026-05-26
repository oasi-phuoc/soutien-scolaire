export type IdentifierStatus = "empty" | "email" | "phone" | "invalid";

export function isEmailFormat(s: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(s.trim());
}

export function isPhoneFormat(s: string): boolean {
  const clean = s.replace(/[\s\-\.\(\)]/g, "");
  return /^\+[1-9]\d{6,14}$/.test(clean);
}

export function getIdentifierStatus(s: string): IdentifierStatus {
  if (!s.trim()) return "empty";
  if (isEmailFormat(s)) return "email";
  if (isPhoneFormat(s)) return "phone";
  return "invalid";
}

export function normalizePhone(raw: string): string {
  return raw.replace(/[\s\-\.\(\)]/g, "");
}
