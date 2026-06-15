"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseActionClient } from "@/lib/supabase/server";

export type TaskRow = {
  task_id: string;
  title: string;
  description: string | null;
  due_date: string | null;
  created_at: string;
  total_students: number;
  done_count: number;
};

export type AssignmentRow = {
  assignment_id: string;
  task_id: string;
  title: string;
  description: string | null;
  due_date: string | null;
  status: "pending" | "done";
  done_at: string | null;
  created_at: string;
};

export type StudentOption = {
  id: string;
  prenom: string | null;
  nom: string | null;
  classe: string | null;
};

async function getCallerRole(): Promise<"admin" | "prof" | null> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || role === "prof") return role;
  return null;
}

export async function createTaskAction(
  title: string,
  description: string,
  dueDate: string | null,
  studentIds: string[],
): Promise<{ ok: boolean; reason?: string }> {
  if (!title.trim()) return { ok: false, reason: "Le titre est obligatoire." };
  if (!studentIds.length) return { ok: false, reason: "Sélectionne au moins un élève." };

  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Non authentifié." };

  const { data: task, error: taskErr } = await supabase
    .from("tasks")
    .insert({
      title: title.trim(),
      description: description.trim() || null,
      due_date: dueDate || null,
      created_by: user.id,
    })
    .select("id")
    .single();

  if (taskErr || !task) return { ok: false, reason: taskErr?.message ?? "Erreur création tâche." };

  const { error: assignErr } = await supabase.from("task_assignments").insert(
    studentIds.map((student_id) => ({ task_id: task.id, student_id, status: "pending" })),
  );
  if (assignErr) return { ok: false, reason: assignErr.message };

  revalidatePath("/admin/taches");
  return { ok: true };
}

export async function deleteTaskAction(taskId: string): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { error } = await supabase.from("tasks").delete().eq("id", taskId);
  if (error) return { ok: false, reason: error.message };

  revalidatePath("/admin/taches");
  return { ok: true };
}

export async function markAssignmentDoneAction(assignmentId: string): Promise<{ ok: boolean; reason?: string }> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Non authentifié." };

  const { error } = await supabase
    .from("task_assignments")
    .update({ status: "done", done_at: new Date().toISOString() })
    .eq("id", assignmentId)
    .eq("student_id", user.id);

  if (error) return { ok: false, reason: error.message };

  revalidatePath("/");
  return { ok: true };
}

export async function getTeacherTasksAction(): Promise<{ ok: boolean; tasks: TaskRow[]; error?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, tasks: [], error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, tasks: [], error: "Erreur serveur." };

  const { data, error } = await supabase.rpc("get_teacher_tasks");
  if (error) return { ok: false, tasks: [], error: error.message };

  return { ok: true, tasks: (data ?? []) as TaskRow[] };
}

export async function getMyAssignmentsAction(): Promise<{ ok: boolean; assignments: AssignmentRow[]; error?: string }> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, assignments: [], error: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, assignments: [], error: "Non authentifié." };

  const { data, error } = await supabase.rpc("get_my_tasks");
  if (error) return { ok: false, assignments: [], error: error.message };

  return { ok: true, assignments: (data ?? []) as AssignmentRow[] };
}

export async function getStudentsForTaskAction(): Promise<{ ok: boolean; students: StudentOption[]; error?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, students: [], error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, students: [], error: "Erreur serveur." };

  const { data, error } = await supabase.rpc("get_students_for_task");
  if (error) return { ok: false, students: [], error: error.message };

  return { ok: true, students: (data ?? []) as StudentOption[] };
}

export async function getPendingTaskCountAction(): Promise<number> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return 0;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return 0;

  const { count } = await supabase
    .from("task_assignments")
    .select("*", { count: "exact", head: true })
    .eq("student_id", user.id)
    .eq("status", "pending");

  return count ?? 0;
}
