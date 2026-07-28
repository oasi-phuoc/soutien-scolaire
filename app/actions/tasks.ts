"use server";

import { revalidatePath } from "next/cache";
import { INBOX_MAX_MESSAGES } from "@/lib/messagerie/inbox";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { TEACHER_TASKS_MAX } from "@/lib/tasks/limits";

export type TaskRow = {
  task_id: string;
  title: string;
  description: string | null;
  due_date: string | null;
  module_ref: string | null;
  lesson_ref: string | null;
  subject: string | null;
  module_id: string | null;
  lesson_id: string | null;
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
  subject: string | null;
  module_id: string | null;
  lesson_id: string | null;
  status: "pending" | "done";
  done_at: string | null;
  proof_type: string | null;
  proof_grade: number | null;
  auto_completed: boolean;
  created_at: string;
};

export type TaskAttachmentRow = {
  id: string;
  task_id: string;
  file_name: string;
  storage_path: string;
  mime_type: string | null;
  size_bytes: number | null;
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
  structured?: {
    subject?: string | null;
    moduleId?: string | null;
    lessonId?: string | null;
  },
): Promise<{ ok: boolean; taskId?: string; reason?: string }> {
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
      subject: structured?.subject ?? null,
      module_id: structured?.moduleId ?? null,
      lesson_id: structured?.lessonId ?? null,
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
      body: details || "Un nouveau devoir vous a été attribué.",
    })),
  );
  if (messageErr) return { ok: false, reason: messageErr.message };

  await Promise.all(
    studentIds.map((studentId) =>
      supabase.rpc("prune_user_inbox_for", { target_user: studentId, p_max: INBOX_MAX_MESSAGES }),
    ),
  );

  await pruneOldestTeacherTasks(supabase, user.id, TEACHER_TASKS_MAX);

  revalidatePath("/admin/taches");
  revalidatePath("/suivi/devoirs");
  revalidatePath("/suivi/devoirs/apercu");
  revalidatePath("/messagerie");
  return { ok: true, taskId: task.id as string };
}

/** Keep at most `max` tasks for this teacher — delete oldest beyond the limit (FIFO). */
async function pruneOldestTeacherTasks(
  supabase: NonNullable<Awaited<ReturnType<typeof createSupabaseActionClient>>>,
  teacherId: string,
  max: number,
): Promise<void> {
  const { data: rows } = await supabase
    .from("tasks")
    .select("id")
    .eq("created_by", teacherId)
    .order("created_at", { ascending: false });

  if (!rows || rows.length <= max) return;

  const overflowIds = rows.slice(max).map((r) => r.id as string);
  if (overflowIds.length === 0) return;

  await supabase.from("tasks").delete().in("id", overflowIds);
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
  revalidatePath("/suivi/devoirs");
  revalidatePath("/suivi/devoirs/apercu");
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
  revalidatePath("/suivi/devoirs");
  revalidatePath("/suivi/devoirs/apercu");
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

  const tasks = ((data ?? []) as TaskRow[])
    .slice()
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, TEACHER_TASKS_MAX);

  return { ok: true, tasks };
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

export async function uploadTaskAttachmentAction(
  taskId: string,
  formData: FormData,
): Promise<{ ok: boolean; attachmentId?: string; reason?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Non authentifié." };

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, reason: "Fichier invalide." };
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
  const storagePath = `${taskId}/${Date.now()}-${safeName}`;

  const buffer = Buffer.from(await file.arrayBuffer());
  const { error: upErr } = await supabase.storage
    .from("task-attachments")
    .upload(storagePath, buffer, { contentType: file.type || "application/octet-stream", upsert: false });

  if (upErr) return { ok: false, reason: upErr.message };

  const { data, error } = await supabase
    .from("task_attachments")
    .insert({
      task_id: taskId,
      file_name: file.name,
      storage_path: storagePath,
      mime_type: file.type || null,
      size_bytes: file.size,
      uploaded_by: user.id,
    })
    .select("id")
    .single();

  if (error || !data) return { ok: false, reason: error?.message ?? "Erreur enregistrement." };

  revalidatePath("/admin/taches");
  revalidatePath("/suivi/devoirs");
  revalidatePath("/suivi/devoirs/apercu");
  return { ok: true, attachmentId: data.id as string };
}

export async function getTaskAttachmentsAction(taskId: string): Promise<{
  ok: boolean;
  attachments: TaskAttachmentRow[];
  error?: string;
}> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, attachments: [], error: "Erreur serveur." };

  const { data, error } = await supabase
    .from("task_attachments")
    .select("id, task_id, file_name, storage_path, mime_type, size_bytes, created_at")
    .eq("task_id", taskId)
    .order("created_at", { ascending: false });

  if (error) return { ok: false, attachments: [], error: error.message };
  return { ok: true, attachments: (data ?? []) as TaskAttachmentRow[] };
}

export async function getTaskAttachmentUrlAction(storagePath: string): Promise<{
  ok: boolean;
  url?: string;
  error?: string;
}> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, error: "Erreur serveur." };

  const { data, error } = await supabase.storage
    .from("task-attachments")
    .createSignedUrl(storagePath, 3600);

  if (error || !data?.signedUrl) return { ok: false, error: error?.message ?? "URL indisponible." };
  return { ok: true, url: data.signedUrl };
}

/** Auto-complete pending tasks when linked lesson is done in progress. */
export async function syncTaskProofFromProgressAction(
  progressData: import("@/lib/curriculum/types").StoredProgressV1,
): Promise<{ ok: boolean; completed: number }> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, completed: 0 };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, completed: 0 };

  const { data: assignments, error } = await supabase
    .from("task_assignments")
    .select("id, status, task_id")
    .eq("student_id", user.id)
    .eq("status", "pending");

  if (error || !assignments?.length) return { ok: true, completed: 0 };

  const taskIds = [...new Set(assignments.map((a) => a.task_id as string))];
  const { data: tasks } = await supabase
    .from("tasks")
    .select("id, subject, module_id, lesson_id")
    .in("id", taskIds);

  const taskMap = new Map((tasks ?? []).map((t) => [t.id as string, t]));

  const { checkLessonCompletion, buildProofData } = await import("@/lib/tasks/task-proof");
  let completed = 0;

  for (const row of assignments) {
    const task = taskMap.get(row.task_id as string);
    if (!task?.subject || !task.lesson_id) continue;

    const proof = checkLessonCompletion(
      progressData,
      task.subject as string,
      task.module_id as string | null,
      task.lesson_id as string,
    );
    if (!proof.complete) continue;

    const proofData = buildProofData(
      task.subject as string,
      (task.module_id as string) ?? "",
      task.lesson_id as string,
      proof,
    );
    const { error: upErr } = await supabase
      .from("task_assignments")
      .update({
        status: "done",
        done_at: new Date().toISOString(),
        proof_type: "auto_lesson",
        proof_score: proof.score ?? null,
        proof_grade: proof.grade ?? null,
        proof_data: proofData,
        auto_completed: true,
      })
      .eq("id", row.id as string)
      .eq("student_id", user.id);

    if (!upErr) completed += 1;
  }

  if (completed > 0) {
    revalidatePath("/");
    revalidatePath("/messagerie");
  }

  return { ok: true, completed };
}
