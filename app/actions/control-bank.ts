"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseActionClient } from "@/lib/supabase/server";

async function getCallerRole(): Promise<"admin" | "prof" | null> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || role === "prof") return role;
  return null;
}

export type ControlBankItem = {
  id: string;
  title: string;
  subject: string;
  module_id: string | null;
  lesson_id: string | null;
  question: Record<string, unknown>;
  answer_key: Record<string, unknown> | null;
  difficulty: string | null;
  tags: string[];
  is_active: boolean;
  created_at: string;
};

export async function getControlBankItemsAction(filters?: {
  subject?: string;
  moduleId?: string;
}): Promise<{ ok: boolean; items: ControlBankItem[]; error?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, items: [], error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, items: [], error: "Erreur serveur." };

  let query = supabase
    .from("control_bank_items")
    .select("id, title, subject, module_id, lesson_id, question, answer_key, difficulty, tags, is_active, created_at")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (filters?.subject) query = query.eq("subject", filters.subject);
  if (filters?.moduleId) query = query.eq("module_id", filters.moduleId);

  const { data, error } = await query;
  if (error) return { ok: false, items: [], error: error.message };

  return { ok: true, items: (data ?? []) as ControlBankItem[] };
}

export async function createControlBankItemAction(input: {
  title: string;
  subject: string;
  moduleId?: string;
  lessonId?: string;
  question: Record<string, unknown>;
  answerKey?: Record<string, unknown>;
  difficulty?: "facile" | "moyen" | "difficile";
  tags?: string[];
}): Promise<{ ok: boolean; id?: string; reason?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Non authentifié." };

  const { data, error } = await supabase
    .from("control_bank_items")
    .insert({
      created_by: user.id,
      title: input.title.trim(),
      subject: input.subject,
      module_id: input.moduleId ?? null,
      lesson_id: input.lessonId ?? null,
      question: input.question,
      answer_key: input.answerKey ?? null,
      difficulty: input.difficulty ?? null,
      tags: input.tags ?? [],
    })
    .select("id")
    .single();

  if (error || !data) return { ok: false, reason: error?.message ?? "Erreur création." };
  revalidatePath("/admin/banque-controle");
  revalidatePath("/suivi/banque-controle");
  return { ok: true, id: data.id as string };
}

export async function deleteControlBankItemAction(id: string): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { error } = await supabase.from("control_bank_items").delete().eq("id", id);
  if (error) return { ok: false, reason: error.message };

  revalidatePath("/admin/banque-controle");
  revalidatePath("/suivi/banque-controle");
  return { ok: true };
}
