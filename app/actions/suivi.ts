"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { frenchProgress, lectureProgress, mathProgress } from "@/lib/suivi/progress-metrics";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

export type TeacherClassRow = {
  class_id: string;
  label: string;
  student_count: number;
  is_primary: boolean;
};

export type SuiviContext = {
  role: "admin" | "prof";
  hasAccess: boolean;
  classes: TeacherClassRow[];
  primaryClassId: string | null;
  primaryClassLabel: string | null;
};

export type ClassDashboardFull = {
  student_count: number;
  avg_math_pct: number;
  avg_french_pct: number;
  avg_lecture_pct: number;
  avg_placement: number | null;
  pending_tasks: number;
  done_tasks: number;
  tasks_on_time_pct: number | null;
  total_time_sec: number;
  active_last_7d: number;
};

export type ClassStudentSuiviRow = {
  id: string;
  prenom: string | null;
  nom: string | null;
  classe: string | null;
  progress_updated_at: string | null;
  math_pct: number;
  french_pct: number;
  lecture_pct: number;
  placement_total: number | null;
  placement_zone: string | null;
  pending_tasks: number;
  done_tasks: number;
  tasks_on_time_pct: number | null;
  total_time_sec: number;
  time_7d_sec: number;
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

export async function getSuiviContextAction(): Promise<SuiviContext | null> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const role = await getCallerRole();
  if (!role) return null;

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  const { data: classesRaw } = await supabase.rpc("get_my_teacher_classes");
  const classes = (classesRaw ?? []) as TeacherClassRow[];

  const { data: profile } = await supabase
    .from("profiles")
    .select("primary_class_id")
    .eq("id", user.id)
    .maybeSingle();

  const primaryClassId = (profile?.primary_class_id as string | null) ?? null;
  const primaryClassLabel = classes.find((c) => c.is_primary)?.label
    ?? classes.find((c) => c.class_id === primaryClassId)?.label
    ?? classes[0]?.label
    ?? null;

  return {
    role,
    hasAccess: role === "admin" ? true : !!hasAccess,
    classes,
    primaryClassId,
    primaryClassLabel,
  };
}

export async function canAccessClassAction(classLabel: string): Promise<boolean> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return false;
  const { data } = await supabase.rpc("teacher_can_access_class", { p_label: classLabel });
  return !!data;
}

export async function getClassDashboardFullAction(classLabel: string): Promise<{
  ok: boolean;
  stats: ClassDashboardFull | null;
  error?: string;
}> {
  const role = await getCallerRole();
  if (!role) return { ok: false, stats: null, error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, stats: null, error: "Erreur serveur." };

  const canAccess = await canAccessClassAction(classLabel);
  if (!canAccess) return { ok: false, stats: null, error: "Accès refusé." };

  const { data, error } = await supabase.rpc("get_class_dashboard", { p_class_label: classLabel });
  if (error) return { ok: false, stats: null, error: error.message };

  const row = (data as Record<string, unknown>[] | null)?.[0];
  if (!row) {
    return {
      ok: true,
      stats: {
        student_count: 0,
        avg_math_pct: 0,
        avg_french_pct: 0,
        avg_lecture_pct: 0,
        avg_placement: null,
        pending_tasks: 0,
        done_tasks: 0,
        tasks_on_time_pct: null,
        total_time_sec: 0,
        active_last_7d: 0,
      },
    };
  }

  const { data: profiles } = await supabase
    .from("profiles")
    .select("progress_data")
    .eq("role", "eleve")
    .eq("classe", classLabel);

  const mathPcts: number[] = [];
  const frenchPcts: number[] = [];
  const lecturePcts: number[] = [];
  for (const p of profiles ?? []) {
    const pd = p.progress_data as StoredProgressV1 | null;
    mathPcts.push(mathProgress(pd).pct);
    frenchPcts.push(frenchProgress(pd).pct);
    lecturePcts.push(lectureProgress(pd).pct);
  }

  const avg = (arr: number[]) => (arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0);

  return {
    ok: true,
    stats: {
      student_count: Number(row.student_count ?? 0),
      avg_math_pct: avg(mathPcts),
      avg_french_pct: avg(frenchPcts),
      avg_lecture_pct: avg(lecturePcts),
      avg_placement: row.avg_placement != null ? Number(row.avg_placement) : null,
      pending_tasks: Number(row.pending_tasks ?? 0),
      done_tasks: Number(row.done_tasks ?? 0),
      tasks_on_time_pct: row.tasks_on_time_pct != null ? Number(row.tasks_on_time_pct) : null,
      total_time_sec: Number(row.total_time_sec ?? 0),
      active_last_7d: Number(row.active_last_7d ?? 0),
    },
  };
}

export async function getClassStudentsSuiviAction(classLabel: string): Promise<{
  ok: boolean;
  students: ClassStudentSuiviRow[];
  error?: string;
}> {
  const role = await getCallerRole();
  if (!role) return { ok: false, students: [], error: "Non autorisé." };

  const canAccess = await canAccessClassAction(classLabel);
  if (!canAccess) return { ok: false, students: [], error: "Accès refusé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, students: [], error: "Erreur serveur." };

  const { data: profiles, error: pErr } = await supabase
    .from("profiles")
    .select("id, prenom, nom, classe, progress_updated_at, progress_data, placement_combined_profile")
    .eq("role", "eleve")
    .eq("classe", classLabel)
    .order("nom");

  if (pErr) return { ok: false, students: [], error: pErr.message };

  const ids = (profiles ?? []).map((p) => p.id as string);
  if (ids.length === 0) return { ok: true, students: [] };

  const { data: assignments } = await supabase
    .from("task_assignments")
    .select("student_id, status, done_at, task_id, tasks(due_date)")
    .in("student_id", ids);

  const pendingMap = new Map<string, number>();
  const doneMap = new Map<string, number>();
  const onTimeMap = new Map<string, { onTime: number; withDue: number }>();

  for (const a of assignments ?? []) {
    const sid = a.student_id as string;
    const rawTask = a.tasks as { due_date: string | null } | { due_date: string | null }[] | null;
    const task = Array.isArray(rawTask) ? rawTask[0] ?? null : rawTask;
    if (a.status === "pending") {
      pendingMap.set(sid, (pendingMap.get(sid) ?? 0) + 1);
    } else if (a.status === "done") {
      doneMap.set(sid, (doneMap.get(sid) ?? 0) + 1);
      const due = task?.due_date;
      const doneAt = a.done_at as string | null;
      if (due) {
        const cur = onTimeMap.get(sid) ?? { onTime: 0, withDue: 0 };
        cur.withDue += 1;
        if (doneAt && new Date(doneAt) <= new Date(due + "T23:59:59")) cur.onTime += 1;
        onTimeMap.set(sid, cur);
      }
    }
  }

  const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const { data: sessions } = await supabase
    .from("learning_sessions")
    .select("user_id, duration_sec, started_at")
    .in("user_id", ids)
    .not("duration_sec", "is", null);

  const timeMap = new Map<string, number>();
  const time7dMap = new Map<string, number>();
  for (const s of sessions ?? []) {
    const uid = s.user_id as string;
    const dur = Number(s.duration_sec ?? 0);
    timeMap.set(uid, (timeMap.get(uid) ?? 0) + dur);
    if (new Date(s.started_at as string).getTime() >= cutoff) {
      time7dMap.set(uid, (time7dMap.get(uid) ?? 0) + dur);
    }
  }

  const students: ClassStudentSuiviRow[] = (profiles ?? []).map((p) => {
    const pd = p.progress_data as StoredProgressV1 | null;
    const placement = p.placement_combined_profile as { total?: number; zone?: string } | null;
    const ot = onTimeMap.get(p.id as string);
    const onTimePct = ot && ot.withDue > 0 ? Math.round((ot.onTime / ot.withDue) * 100) : null;

    return {
      id: p.id as string,
      prenom: (p.prenom as string | null) ?? null,
      nom: (p.nom as string | null) ?? null,
      classe: (p.classe as string | null) ?? null,
      progress_updated_at: (p.progress_updated_at as string | null) ?? null,
      math_pct: mathProgress(pd).pct,
      french_pct: frenchProgress(pd).pct,
      lecture_pct: lectureProgress(pd).pct,
      placement_total: placement?.total ?? null,
      placement_zone: placement?.zone ?? null,
      pending_tasks: pendingMap.get(p.id as string) ?? 0,
      done_tasks: doneMap.get(p.id as string) ?? 0,
      tasks_on_time_pct: onTimePct,
      total_time_sec: timeMap.get(p.id as string) ?? 0,
      time_7d_sec: time7dMap.get(p.id as string) ?? 0,
    };
  });

  return { ok: true, students };
}

export async function setPrimaryClassAction(classId: string): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Non authentifié." };

  if (role === "prof") {
    const { data: assigned } = await supabase
      .from("class_teachers")
      .select("class_id")
      .eq("teacher_id", user.id)
      .eq("class_id", classId)
      .maybeSingle();
    if (!assigned) return { ok: false, reason: "Classe non affectée." };
  }

  const { error } = await supabase
    .from("profiles")
    .update({ primary_class_id: classId })
    .eq("id", user.id);

  if (error) return { ok: false, reason: error.message };
  revalidatePath("/");
  revalidatePath("/suivi");
  return { ok: true };
}

export async function setTeacherClassesAction(
  teacherId: string,
  classIds: string[],
  primaryClassId?: string | null,
): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (role !== "admin") return { ok: false, reason: "Réservé aux administrateurs." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  await supabase.from("class_teachers").delete().eq("teacher_id", teacherId);

  if (classIds.length > 0) {
    const { error } = await supabase.from("class_teachers").insert(
      classIds.map((class_id) => ({ class_id, teacher_id: teacherId })),
    );
    if (error) return { ok: false, reason: error.message };
  }

  if (primaryClassId !== undefined) {
    await supabase
      .from("profiles")
      .update({ primary_class_id: primaryClassId || null })
      .eq("id", teacherId);
  }

  revalidatePath("/admin");
  revalidatePath("/suivi");
  revalidatePath("/suivi");
  return { ok: true };
}

export async function getTeacherClassAssignmentsAction(teacherId: string): Promise<{
  ok: boolean;
  classIds: string[];
  primaryClassId: string | null;
}> {
  const role = await getCallerRole();
  if (role !== "admin" && role !== "prof") {
    return { ok: false, classIds: [], primaryClassId: null };
  }

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, classIds: [], primaryClassId: null };

  const { data: { user } } = await supabase.auth.getUser();
  if (role === "prof" && user?.id !== teacherId) {
    return { ok: false, classIds: [], primaryClassId: null };
  }

  const { data: rows } = await supabase
    .from("class_teachers")
    .select("class_id")
    .eq("teacher_id", teacherId);

  const { data: profile } = await supabase
    .from("profiles")
    .select("primary_class_id")
    .eq("id", teacherId)
    .maybeSingle();

  return {
    ok: true,
    classIds: (rows ?? []).map((r) => r.class_id as string),
    primaryClassId: (profile?.primary_class_id as string | null) ?? null,
  };
}

export async function canAccessStudentAction(studentId: string): Promise<boolean> {
  const role = await getCallerRole();
  if (!role) return false;
  if (role === "admin") return true;

  const supabase = await createSupabaseActionClient();
  if (!supabase) return false;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { data: student } = await supabase
    .from("profiles")
    .select("classe")
    .eq("id", studentId)
    .eq("role", "eleve")
    .maybeSingle();

  if (!student?.classe) return false;
  return canAccessClassAction(student.classe as string);
}

export async function getPrimaryClassSummaryAction(): Promise<{
  ok: boolean;
  label: string | null;
  stats: ClassDashboardFull | null;
}> {
  const ctx = await getSuiviContextAction();
  if (!ctx?.hasAccess || !ctx.primaryClassLabel) {
    return { ok: false, label: null, stats: null };
  }
  const dash = await getClassDashboardFullAction(ctx.primaryClassLabel);
  return { ok: dash.ok, label: ctx.primaryClassLabel, stats: dash.stats };
}
