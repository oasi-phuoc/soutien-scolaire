export const INBOX_MAX_MESSAGES = 100;

export const MAILBOX_LEVEL_LABELS = { base: "A1", moyen: "A2", avance: "B1" } as const;

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

/** Date + heure compactes sous l'expéditeur dans la liste. */
export function formatMailboxDateTime(iso: string): string {
  return new Date(iso).toLocaleString("fr-CH", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function isOralLessonCode(lessonCode: string): boolean {
  const code = lessonCode.toUpperCase();
  return code.startsWith("PO") || code.includes("-PO-");
}

export function mailboxSubject(row: {
  kind?: "expression" | "task";
  lesson_code: string;
  prompt_title: string;
}): string {
  if (row.kind === "task") return row.prompt_title;
  return isOralLessonCode(row.lesson_code) ? "Production orale" : "Production écrite";
}

export function mailboxNote(row: {
  kind?: "expression" | "task";
  status: string;
  teacher_points?: number | null;
  teacher_max_points?: number | null;
}): string {
  if (row.kind === "task") return "—";
  if (row.status === "submitted") return "En attente";
  if (row.teacher_points != null && row.teacher_max_points) {
    return `${Number(row.teacher_points).toLocaleString("fr-CH")} / ${row.teacher_max_points} pts`;
  }
  return "—";
}

export function mailboxPreview(text: string | null | undefined, max = 90): string {
  const normalized = (text ?? "").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  return normalized.length > max ? `${normalized.slice(0, max - 1)}…` : normalized;
}
