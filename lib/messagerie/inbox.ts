export const INBOX_MAX_MESSAGES = 100;

export function formatMailboxDate(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((startOfToday.getTime() - startOfDate.getTime()) / 86_400_000);

  if (diffDays === 0) {
    return date.toLocaleTimeString("fr-CH", { hour: "2-digit", minute: "2-digit" });
  }
  if (diffDays === 1) {
    return "Hier";
  }
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString("fr-CH", { day: "numeric", month: "short" });
  }
  return date.toLocaleDateString("fr-CH", { day: "numeric", month: "short", year: "numeric" });
}

export function formatMailboxFullDate(iso: string): string {
  return new Date(iso).toLocaleString("fr-CH", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function mailboxPreview(text: string | null | undefined, max = 90): string {
  const normalized = (text ?? "").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  return normalized.length > max ? `${normalized.slice(0, max - 1)}…` : normalized;
}
