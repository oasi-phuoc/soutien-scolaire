"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { INBOX_MAX_MESSAGES } from "@/lib/messagerie/inbox";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import type { WritingLevel, WritingPrompt } from "@/lib/curriculum/content/communication/writing-prompts";
import type { PlacementMathAttempt } from "@/lib/placement/types";
import type { TeacherGrading } from "@/lib/curriculum/content/communication/expression-submission-types";

export type TeacherOption = { id: string; prenom: string | null; nom: string | null };
export type ExpressionAnnotation = { start: number; end: number; text: string; comment: string };
export type ExpressionInboxRow = {
  submission_id: string;
  kind?: "expression" | "task";
  lesson_code: string;
  level: WritingLevel | null;
  prompt_title: string;
  status: "submitted" | "reviewed" | "task";
  created_at: string;
  reviewed_at: string | null;
  unread: boolean;
  direction: "sent" | "received";
  correspondent_name: string;
  body?: string | null;
  teacher_points?: number | null;
  teacher_max_points?: number | null;
  final_result?: string | null;
};
export type TaskMessage = {
  id: string;
  title: string;
  body: string | null;
  created_at: string;
  read_at: string | null;
  sender_name: string;
};
export type ExpressionSubmission = {
  id: string;
  student_id: string;
  teacher_id: string;
  lesson_code: string;
  level: WritingLevel;
  prompt_id: string;
  prompt: WritingPrompt;
  original_text: string;
  ai_feedback: unknown[];
  corrected_text: string | null;
  teacher_comment: string | null;
  annotations: ExpressionAnnotation[];
  teacher_points: number | null;
  teacher_max_points: number;
  final_result: string | null;
  status: "submitted" | "reviewed";
  created_at: string;
  reviewed_at: string | null;
  teacher_grading?: TeacherGrading | null;
};

async function currentSession() {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: role } = await supabase.rpc("get_my_role");
  return { supabase, user, role: String(role ?? "eleve") };
}

async function pruneInboxForUser(supabase: NonNullable<Awaited<ReturnType<typeof createSupabaseActionClient>>>, userId: string) {
  await supabase.rpc("prune_user_inbox_for", { target_user: userId, p_max: INBOX_MAX_MESSAGES });
}

export async function getExpressionTeachersAction(): Promise<TeacherOption[]> {
  const session = await currentSession();
  if (!session) return [];
  const { data } = await session.supabase.rpc("get_expression_teachers");
  return (data ?? []) as TeacherOption[];
}

export async function submitExpressionAction(input: {
  teacherId: string;
  lessonCode: string;
  level: WritingLevel;
  prompt: WritingPrompt;
  text: string;
  aiFeedback: unknown[];
  placementSessionId?: string;
}): Promise<{ ok: boolean; reason?: string; submissionId?: string }> {
  const session = await currentSession();
  if (!session) return { ok: false, reason: "Vous devez être connecté." };
  const text = input.text.trim();
  const wordCount = text.split(/\s+/u).filter(Boolean).length;
  if (wordCount < input.prompt.minWords || wordCount > input.prompt.maxWords) {
    return { ok: false, reason: `Le texte doit contenir entre ${input.prompt.minWords} et ${input.prompt.maxWords} mots.` };
  }
  if (!input.teacherId) return { ok: false, reason: "Choisissez un professeur." };

  const { data: inserted, error } = await session.supabase.from("expression_submissions").insert({
    student_id: session.user.id,
    teacher_id: input.teacherId,
    lesson_code: input.lessonCode,
    level: input.level,
    prompt_id: input.prompt.id,
    prompt: input.prompt,
    original_text: text,
    ai_feedback: input.aiFeedback,
    placement_session_id: input.placementSessionId ?? null,
  }).select("id").single();
  if (error) {
    if (error.code === "42501") {
      return {
        ok: false,
        reason: "La règle d’envoi Supabase doit être mise à jour. Exécutez la migration 20260620140000.",
      };
    }
    if (error.message.includes("invalid input syntax for type uuid") && input.placementSessionId) {
      return {
        ok: false,
        reason: "Erreur de liaison placement : exécutez la migration 20260704170000_placement_session_id_text.sql dans Supabase (placement_session_id doit être text, pas uuid).",
      };
    }
    return { ok: false, reason: error.message };
  }
  await pruneInboxForUser(session.supabase, session.user.id);
  revalidatePath("/messagerie");
  return { ok: true, submissionId: inserted?.id };
}

export async function getExpressionInboxAction(): Promise<ExpressionInboxRow[]> {
  const session = await currentSession();
  if (!session) return [];
  await pruneInboxForUser(session.supabase, session.user.id);
  const { data } = await session.supabase.rpc("get_expression_inbox");
  const expressionRows = ((data ?? []) as ExpressionInboxRow[]).map((row) => ({
    ...row,
    kind: "expression" as const,
    teacher_points: row.teacher_points != null ? Number(row.teacher_points) : null,
    teacher_max_points: row.teacher_max_points != null ? Number(row.teacher_max_points) : null,
  }));

  const { data: taskMessages } = await session.supabase
    .from("task_messages")
    .select("id, title, body, read_at, created_at, sender_id")
    .eq("student_id", session.user.id);

  const senderIds = Array.from(new Set((taskMessages ?? []).map((row) => row.sender_id as string).filter(Boolean)));
  const { data: profiles } = senderIds.length
    ? await session.supabase.from("profiles").select("id, prenom, nom").in("id", senderIds)
    : { data: [] };
  const profileMap = new Map((profiles ?? []).map((profile) => [profile.id as string, profile]));

  const taskRows: ExpressionInboxRow[] = (taskMessages ?? []).map((row) => {
    const profile = profileMap.get(row.sender_id as string);
    return {
      submission_id: row.id as string,
      kind: "task",
      lesson_code: "Devoir",
      level: null,
      prompt_title: row.title as string,
      status: "task",
      created_at: row.created_at as string,
      reviewed_at: null,
      unread: !row.read_at,
      direction: "received",
      correspondent_name: [profile?.prenom, profile?.nom].filter(Boolean).join(" "),
      body: (row.body as string | null) ?? null,
    };
  });

  return [...expressionRows, ...taskRows]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, INBOX_MAX_MESSAGES);
}

export async function getExpressionUnreadCountAction(): Promise<number> {
  const session = await currentSession();
  if (!session) return 0;
  const { data } = await session.supabase.rpc("get_expression_unread_count");
  const { count } = await session.supabase
    .from("task_messages")
    .select("*", { count: "exact", head: true })
    .eq("student_id", session.user.id)
    .is("read_at", null);
  return Number(data ?? 0) + (count ?? 0);
}

export async function openTaskMessageAction(messageId: string) {
  const session = await currentSession();
  if (session) {
    await session.supabase
      .from("task_messages")
      .update({ read_at: new Date().toISOString() })
      .eq("id", messageId)
      .eq("student_id", session.user.id)
      .is("read_at", null);
  }
  revalidatePath("/messagerie");
  redirect(`/messagerie/${messageId}`);
}

export async function getTaskMessageAction(id: string): Promise<TaskMessage | null> {
  const session = await currentSession();
  if (!session) return null;

  const { data } = await session.supabase
    .from("task_messages")
    .select("id, title, body, created_at, read_at, sender_id")
    .eq("id", id)
    .eq("student_id", session.user.id)
    .maybeSingle();
  if (!data) return null;

  if (!data.read_at) {
    await session.supabase
      .from("task_messages")
      .update({ read_at: new Date().toISOString() })
      .eq("id", id)
      .eq("student_id", session.user.id);
  }

  const { data: profile } = await session.supabase
    .from("profiles")
    .select("prenom, nom")
    .eq("id", data.sender_id as string)
    .maybeSingle();

  return {
    id: data.id as string,
    title: data.title as string,
    body: (data.body as string | null) ?? null,
    created_at: data.created_at as string,
    read_at: (data.read_at as string | null) ?? new Date().toISOString(),
    sender_name: [profile?.prenom, profile?.nom].filter(Boolean).join(" ") || "Professeur",
  };
}

export async function getExpressionSubmissionAction(id: string): Promise<{ item: ExpressionSubmission | null; isTeacher: boolean }> {
  const session = await currentSession();
  if (!session) return { item: null, isTeacher: false };
  const { data } = await session.supabase.from("expression_submissions").select("*").eq("id", id).single();
  if (!data) return { item: null, isTeacher: false };

  await session.supabase.rpc("mark_expression_read", { submission: id });
  const isAssignedTeacher = data.teacher_id === session.user.id;
  const canCorrect = isAssignedTeacher && ["prof", "admin"].includes(session.role);
  return { item: data as ExpressionSubmission, isTeacher: canCorrect };
}

export async function reviewExpressionAction(input: {
  id: string;
  correctedText: string;
  teacherComment: string;
  annotations: ExpressionAnnotation[];
  teacherPoints: number;
  finalResult: string;
  teacherGrading?: TeacherGrading | null;
}): Promise<{ ok: boolean; reason?: string }> {
  const session = await currentSession();
  if (!session || !["prof", "admin"].includes(session.role)) return { ok: false, reason: "Non autorisé." };
  const points = input.teacherGrading?.totalPoints ?? Number(input.teacherPoints);
  if (!Number.isFinite(points) || points < 0 || points > 25) {
    return { ok: false, reason: "Les points doivent être compris entre 0 et 25." };
  }
  const roundedPoints = Math.round(points * 2) / 2;
  const finalResult = input.finalResult.trim();
  if (!finalResult) return { ok: false, reason: "Indiquez le résultat final de l’élève." };

  const now = new Date().toISOString();
  const { data: submission, error: readError } = await session.supabase
    .from("expression_submissions")
    .select("id, lesson_code, placement_session_id, student_id")
    .eq("id", input.id)
    .eq("teacher_id", session.user.id)
    .maybeSingle();
  if (readError) return { ok: false, reason: readError.message };
  if (!submission) return { ok: false, reason: "Soumission introuvable." };

  const { error } = await session.supabase.from("expression_submissions").update({
    corrected_text: input.correctedText.trim(),
    teacher_comment: input.teacherComment.trim() || null,
    annotations: input.annotations,
    teacher_points: roundedPoints,
    teacher_max_points: 25,
    final_result: finalResult,
    teacher_grading: input.teacherGrading
      ? { ...input.teacherGrading, totalPoints: roundedPoints }
      : null,
    status: "reviewed",
    reviewed_at: now,
    updated_at: now,
    student_read_at: null,
    teacher_read_at: now,
  }).eq("id", input.id).eq("teacher_id", session.user.id);
  if (error) return { ok: false, reason: error.message };

  if (submission.placement_session_id && submission.lesson_code?.startsWith("PLACEMENT-")) {
    const skill = submission.lesson_code.includes("-PE-") ? "pe" : submission.lesson_code.includes("-PO-") ? "po" : null;
    if (skill) {
      const { data: profileRow } = await session.supabase
        .from("profiles")
        .select("placement_test_history, placement_french_history, placement_total_history")
        .eq("id", submission.student_id)
        .maybeSingle();
      const mathHistory = Array.isArray(profileRow?.placement_test_history)
        ? profileRow.placement_test_history as PlacementMathAttempt[]
        : [];
      const sessions = Array.isArray(profileRow?.placement_french_history)
        ? profileRow.placement_french_history as Array<Record<string, unknown>>
        : [];
      const idx = sessions.findIndex((s) => s.id === submission.placement_session_id);
      if (idx >= 0) {
        const current = sessions[idx]!;
        const updated = {
          ...current,
          [skill]: roundedPoints,
          [`${skill}SubmissionId`]: submission.id,
        };
        const nextSessions = sessions.map((s, i) => (i === idx ? updated : s));
        const { buildPlacementProfile, buildFrenchSession, frenchCountedTotal, frenchRawTotal } = await import("@/lib/placement/scoring");
        const normalized = nextSessions.map((s) => buildFrenchSession({
          id: String(s.id),
          date: String(s.date ?? now),
          level: s.level as "base" | "moyen" | "avance",
          ce: Number(s.ce ?? 0),
          co: Number(s.co ?? 0),
          pe: s.pe === null || s.pe === undefined ? null : Number(s.pe),
          po: s.po === null || s.po === undefined ? null : Number(s.po),
          peSent: Boolean(s.peSent),
          poSent: Boolean(s.poSent),
          peSubmissionId: s.peSubmissionId ? String(s.peSubmissionId) : null,
          poSubmissionId: s.poSubmissionId ? String(s.poSubmissionId) : null,
          rawTotal: frenchRawTotal({
            ce: Number(s.ce ?? 0),
            co: Number(s.co ?? 0),
            pe: s.pe === null || s.pe === undefined ? null : Number(s.pe),
            po: s.po === null || s.po === undefined ? null : Number(s.po),
          }),
          countedTotal: frenchCountedTotal({
            level: s.level as "base" | "moyen" | "avance",
            ce: Number(s.ce ?? 0),
            co: Number(s.co ?? 0),
            pe: s.pe === null || s.pe === undefined ? null : Number(s.pe),
            po: s.po === null || s.po === undefined ? null : Number(s.po),
          }),
          status: (s.pe !== null && s.pe !== undefined && s.po !== null && s.po !== undefined) ? "complete" as const : "partial" as const,
        }));
        const profile = buildPlacementProfile(mathHistory, normalized);
        const { appendTotalSnapshot, parseTotalHistory } = await import("@/lib/placement/total-history");
        const totalHistory = appendTotalSnapshot(
          parseTotalHistory(profileRow?.placement_total_history),
          profile,
        );
        await session.supabase.from("profiles").update({
          placement_french_history: normalized as unknown as Record<string, unknown>[],
          placement_combined_profile: profile as unknown as Record<string, unknown>,
          placement_total_history: totalHistory as unknown as Record<string, unknown>[],
          placement_updated_at: now,
          updated_at: now,
        }).eq("id", submission.student_id);
      }
    }
  }

  revalidatePath("/messagerie");
  revalidatePath(`/messagerie/${input.id}`);
  revalidatePath("/placement/statistiques");
  return { ok: true };
}
