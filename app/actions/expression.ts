"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import type { WritingLevel, WritingPrompt } from "@/lib/curriculum/content/communication/writing-prompts";

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
  status: "submitted" | "reviewed";
  created_at: string;
  reviewed_at: string | null;
};

async function currentSession() {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: role } = await supabase.rpc("get_my_role");
  return { supabase, user, role: String(role ?? "eleve") };
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
}): Promise<{ ok: boolean; reason?: string }> {
  const session = await currentSession();
  if (!session) return { ok: false, reason: "Vous devez être connecté." };
  const text = input.text.trim();
  const wordCount = text.split(/\s+/u).filter(Boolean).length;
  if (wordCount < input.prompt.minWords || wordCount > input.prompt.maxWords) {
    return { ok: false, reason: `Le texte doit contenir entre ${input.prompt.minWords} et ${input.prompt.maxWords} mots.` };
  }
  if (!input.teacherId) return { ok: false, reason: "Choisissez un professeur." };

  const { error } = await session.supabase.from("expression_submissions").insert({
    student_id: session.user.id,
    teacher_id: input.teacherId,
    lesson_code: input.lessonCode,
    level: input.level,
    prompt_id: input.prompt.id,
    prompt: input.prompt,
    original_text: text,
    ai_feedback: input.aiFeedback,
  });
  if (error) {
    if (error.code === "42501") {
      return {
        ok: false,
        reason: "La règle d’envoi Supabase doit être mise à jour. Exécutez la migration 20260620140000.",
      };
    }
    return { ok: false, reason: error.message };
  }
  revalidatePath("/messagerie");
  return { ok: true };
}

export async function getExpressionInboxAction(): Promise<ExpressionInboxRow[]> {
  const session = await currentSession();
  if (!session) return [];
  const { data } = await session.supabase.rpc("get_expression_inbox");
  const expressionRows = ((data ?? []) as ExpressionInboxRow[]).map((row) => ({
    ...row,
    kind: "expression" as const,
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

  return [...expressionRows, ...taskRows].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
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
  revalidatePath("/");
  redirect("/");
}

export async function getExpressionSubmissionAction(id: string): Promise<{ item: ExpressionSubmission | null; isTeacher: boolean }> {
  const session = await currentSession();
  if (!session) return { item: null, isTeacher: false };
  const { data } = await session.supabase.from("expression_submissions").select("*").eq("id", id).single();
  if (!data) return { item: null, isTeacher: false };

  await session.supabase.rpc("mark_expression_read", { submission: id });
  return { item: data as ExpressionSubmission, isTeacher: data.teacher_id === session.user.id };
}

export async function reviewExpressionAction(input: {
  id: string;
  correctedText: string;
  teacherComment: string;
  annotations: ExpressionAnnotation[];
}): Promise<{ ok: boolean; reason?: string }> {
  const session = await currentSession();
  if (!session || !["prof", "admin"].includes(session.role)) return { ok: false, reason: "Non autorisé." };
  const now = new Date().toISOString();
  const { error } = await session.supabase.from("expression_submissions").update({
    corrected_text: input.correctedText.trim(),
    teacher_comment: input.teacherComment.trim() || null,
    annotations: input.annotations,
    status: "reviewed",
    reviewed_at: now,
    updated_at: now,
    student_read_at: null,
    teacher_read_at: now,
  }).eq("id", input.id).eq("teacher_id", session.user.id);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/messagerie");
  revalidatePath(`/messagerie/${input.id}`);
  return { ok: true };
}
