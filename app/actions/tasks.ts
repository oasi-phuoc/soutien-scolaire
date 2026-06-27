"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseActionClient } from "@/lib/supabase/server";

export type TaskRow = {
  task_id: string;
  title: string;
  description: string | null;
  due_date: string | null;
  module_ref: string | null;
  lesson_ref: string | null;
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
  module_ref: string | null;
  lesson_ref: string | null;
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
  moduleRef: string | null,
  lessonRef: string | null,
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
      module_ref: moduleRef || null,
      lesson_ref: lessonRef || null,
      created_by: user.id,
    })
    .select("id")
    .single();

  if (taskErr || !task) return { ok: false, reason: taskErr?.message ?? "Erreur création tâche." };

  const { data: assignments, error: assignErr } = await supabase.from("task_assignments").insert(
    studentIds.map((student_id) => ({ task_id: task.id, student_id, status: "pending" })),
  ).select("id, student_id");
  if (assignErr) return { ok: false, reason: assignErr.message };

  const details = [
    description.trim() || null,
    moduleRef || lessonRef ? `Module : ${[moduleRef, lessonRef].filter(Boolean).join(" - ")}` : null,
    dueDate ? `A faire pour le ${new Date(dueDate).toLocaleDateString("fr-CH")}` : null,
  ].filter(Boolean).join("\n");

  const { error: messageErr } = await supabase.from("task_messages").insert(
    (assignments ?? []).map((assignment) => ({
      task_id: task.id,
      assignment_id: assignment.id,
      student_id: assignment.student_id,
      sender_id: user.id,
      title: `Nouveau devoir : ${title.trim()}`,
      body: details || "Un nouveau devoir vous a ete attribue.",
    })),
  );
  if (messageErr) return { ok: false, reason: messageErr.message };

  revalidatePath("/admin/taches");
  revalidatePath("/messagerie");
  return { ok: true };
}

export async function updateTaskAction(
  taskId: string,
  updates: { title?: string; description?: string | null; due_date?: string | null }
): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { error } = await supabase.from("tasks").update(updates).eq("id", taskId);
  if (error) return { ok: false, reason: error.message };

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

  await supabase
    .from("task_messages")
    .update({ read_at: new Date().toISOString() })
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id)
    .is("read_at", null);

  revalidatePath("/");
  revalidatePath("/messagerie");
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

export type TaskStudentStatus = {
  student_id: string;
  prenom: string | null;
  nom: string | null;
  classe: string | null;
  status: "pending" | "done";
  done_at: string | null;
};

export async function getTaskStudentsAction(taskId: string): Promise<{ ok: boolean; students: TaskStudentStatus[]; error?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, students: [], error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, students: [], error: "Erreur serveur." };

  const { data: assignments, error: aErr } = await supabase
    .from("task_assignments")
    .select("student_id, status, done_at")
    .eq("task_id", taskId);

  if (aErr || !assignments) return { ok: false, students: [], error: aErr?.message };

  if (assignments.length === 0) return { ok: true, students: [] };

  const studentIds = assignments.map((a) => a.student_id as string);
  const { data: profiles, error: pErr } = await supabase
    .from("profiles")
    .select("id, prenom, nom, classe")
    .in("id", studentIds);

  if (pErr) return { ok: false, students: [], error: pErr.message };

  const profileMap = new Map((profiles ?? []).map((p) => [p.id as string, p]));

  const students: TaskStudentStatus[] = assignments.map((a) => {
    const p = profileMap.get(a.student_id as string);
    return {
      student_id: a.student_id as string,
      prenom: (p?.prenom as string | null) ?? null,
      nom: (p?.nom as string | null) ?? null,
      classe: (p?.classe as string | null) ?? null,
      status: a.status as "pending" | "done",
      done_at: (a.done_at as string | null) ?? null,
    };
  });

  students.sort((a, b) => {
    const na = [a.nom, a.prenom].filter(Boolean).join(" ");
    const nb = [b.nom, b.prenom].filter(Boolean).join(" ");
    return na.localeCompare(nb, "fr");
  });

  return { ok: true, students };
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
