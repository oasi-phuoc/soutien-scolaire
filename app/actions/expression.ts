"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import type { WritingLevel, WritingPrompt } from "@/lib/curriculum/content/communication/writing-prompts";

export type TeacherOption = { id: string; prenom: string | null; nom: string | null };
export type ExpressionAnnotation = { start: number; end: number; text: string; comment: string };
export type ExpressionInboxRow = {
  submission_id: string;
  lesson_code: string;
  level: WritingLevel;
  prompt_title: string;
  status: "submitted" | "reviewed";
  created_at: string;
  reviewed_at: string | null;
  unread: boolean;
  correspondent_name: string;
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
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/messagerie");
  return { ok: true };
}

export async function getExpressionInboxAction(): Promise<ExpressionInboxRow[]> {
  const session = await currentSession();
  if (!session) return [];
  const { data } = await session.supabase.rpc("get_expression_inbox");
  return (data ?? []) as ExpressionInboxRow[];
}

export async function getExpressionUnreadCountAction(): Promise<number> {
  const session = await currentSession();
  if (!session) return 0;
  const { data } = await session.supabase.rpc("get_expression_unread_count");
  return Number(data ?? 0);
}

export async function getExpressionSubmissionAction(id: string): Promise<{ item: ExpressionSubmission | null; role: string }> {
  const session = await currentSession();
  if (!session) return { item: null, role: "eleve" };
  const { data } = await session.supabase.from("expression_submissions").select("*").eq("id", id).single();
  if (!data) return { item: null, role: session.role };

  await session.supabase.rpc("mark_expression_read", { submission: id });
  return { item: data as ExpressionSubmission, role: session.role };
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
