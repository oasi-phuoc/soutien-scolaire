"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import type { OralLevel, OralPrompt } from "@/lib/curriculum/content/communication/speaking-prompts";
export type OralGrammarMatch = {
  message: string;
  shortMessage?: string;
  offset: number;
  length: number;
  replacements?: Array<{ value: string }>;
  rule?: { id?: string };
};

export type OralDialogueLine = {
  role: "app" | "student";
  text: string;
  grammar?: OralGrammarMatch[];
};

export async function submitOralAction(input: {
  teacherId: string;
  lessonCode: string;
  level: OralLevel;
  prompt: OralPrompt;
  dialogue: OralDialogueLine[];
  aiFeedback: OralGrammarMatch[];
  placementSessionId?: string;
}): Promise<{ ok: boolean; reason?: string; submissionId?: string }> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Vous devez être connecté." };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Vous devez être connecté." };
  if (!input.teacherId) return { ok: false, reason: "Choisissez un professeur." };

  const transcriptText = input.dialogue
    .map((line) => `[${line.role === "app" ? "Interlocuteur" : "Élève"}] ${line.text}`)
    .join("\n");

  // Reuse expression_submissions table with oral lesson codes (PO.1, PO.2, PO.3)
  const fakePrompt = {
    id: input.prompt.id,
    title: `Production orale — ${input.prompt.themes.map((t) => t.word).join(", ")}`,
    situation: input.prompt.imageDescription,
    instruction: input.prompt.dialogueContext,
    points: input.prompt.themes.map((t) => t.word),
    minWords: 1,
    maxWords: 99999,
  };

  const { data: inserted, error } = await supabase.from("expression_submissions").insert({
    student_id: user.id,
    teacher_id: input.teacherId,
    lesson_code: input.lessonCode,
    level: input.level === "base" ? "base" : input.level === "moyen" ? "moyen" : "avance",
    prompt_id: input.prompt.id,
    prompt: fakePrompt,
    original_text: transcriptText,
    ai_feedback: input.aiFeedback,
    placement_session_id: input.placementSessionId ?? null,
  }).select("id").single();
  if (error) {
    if (error.message.includes("invalid input syntax for type uuid") && input.placementSessionId) {
      return {
        ok: false,
        reason: "Erreur de liaison placement : exécutez la migration 20260704170000_placement_session_id_text.sql dans Supabase (placement_session_id doit être text, pas uuid).",
      };
    }
    return { ok: false, reason: error.message };
  }
  revalidatePath("/messagerie");
  return { ok: true, submissionId: inserted?.id };
}
