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

export type SchoolClassRow = {
  class_id: string;
  label: string;
  student_count: number;
  teacher_count: number;
};

export type ClassDashboardStats = {
  student_count: number;
  pending_tasks: number;
  done_tasks: number;
  total_time_sec: number;
  active_last_7d: number;
};

export type ClassStudentRow = {
  id: string;
  prenom: string | null;
  nom: string | null;
  classe: string | null;
  progress_updated_at: string | null;
  pending_tasks: number;
  total_time_sec: number;
};

export async function getSchoolClassesAction(): Promise<{
  ok: boolean;
  classes: SchoolClassRow[];
  error?: string;
}> {
  const role = await getCallerRole();
  if (!role) return { ok: false, classes: [], error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, classes: [], error: "Erreur serveur." };

  const { data, error } = await supabase.rpc("get_school_classes");
  if (error) return { ok: false, classes: [], error: error.message };
  return { ok: true, classes: (data ?? []) as SchoolClassRow[] };
}

export async function getClassDashboardAction(classLabel: string): Promise<{
  ok: boolean;
  stats: ClassDashboardStats | null;
  error?: string;
}> {
  const role = await getCallerRole();
  if (!role) return { ok: false, stats: null, error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, stats: null, error: "Erreur serveur." };

  const { data, error } = await supabase.rpc("get_class_dashboard", { p_class_label: classLabel });
  if (error) return { ok: false, stats: null, error: error.message };

  const row = (data as ClassDashboardStats[] | null)?.[0];
  if (!row) {
    return {
      ok: true,
      stats: {
        student_count: 0,
        pending_tasks: 0,
        done_tasks: 0,
        total_time_sec: 0,
        active_last_7d: 0,
      },
    };
  }

  return {
    ok: true,
    stats: {
      student_count: Number(row.student_count ?? 0),
      pending_tasks: Number(row.pending_tasks ?? 0),
      done_tasks: Number(row.done_tasks ?? 0),
      total_time_sec: Number(row.total_time_sec ?? 0),
      active_last_7d: Number(row.active_last_7d ?? 0),
    },
  };
}

export async function getClassStudentsAction(classLabel: string): Promise<{
  ok: boolean;
  students: ClassStudentRow[];
  error?: string;
}> {
  const role = await getCallerRole();
  if (!role) return { ok: false, students: [], error: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, students: [], error: "Erreur serveur." };

  const { data: profiles, error: pErr } = await supabase
    .from("profiles")
    .select("id, prenom, nom, classe, progress_updated_at")
    .eq("role", "eleve")
    .eq("classe", classLabel)
    .order("nom");

  if (pErr) return { ok: false, students: [], error: pErr.message };

  const ids = (profiles ?? []).map((p) => p.id as string);
  if (ids.length === 0) return { ok: true, students: [] };

  const { data: assignments } = await supabase
    .from("task_assignments")
    .select("student_id, status")
    .in("student_id", ids);

  const pendingMap = new Map<string, number>();
  for (const a of assignments ?? []) {
    if (a.status === "pending") {
      const sid = a.student_id as string;
      pendingMap.set(sid, (pendingMap.get(sid) ?? 0) + 1);
    }
  }

  const { data: sessions } = await supabase
    .from("learning_sessions")
    .select("user_id, duration_sec")
    .in("user_id", ids)
    .not("duration_sec", "is", null);

  const timeMap = new Map<string, number>();
  for (const s of sessions ?? []) {
    const uid = s.user_id as string;
    timeMap.set(uid, (timeMap.get(uid) ?? 0) + Number(s.duration_sec ?? 0));
  }

  const students: ClassStudentRow[] = (profiles ?? []).map((p) => ({
    id: p.id as string,
    prenom: (p.prenom as string | null) ?? null,
    nom: (p.nom as string | null) ?? null,
    classe: (p.classe as string | null) ?? null,
    progress_updated_at: (p.progress_updated_at as string | null) ?? null,
    pending_tasks: pendingMap.get(p.id as string) ?? 0,
    total_time_sec: timeMap.get(p.id as string) ?? 0,
  }));

  return { ok: true, students };
}

export async function createSchoolClassAction(
  label: string,
  classType?: string,
  classNum?: string,
): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (role !== "admin") return { ok: false, reason: "Réservé aux administrateurs." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Non authentifié." };

  const { error } = await supabase.from("school_classes").insert({
    label: label.trim(),
    class_type: classType?.trim() || null,
    class_num: classNum?.trim() || null,
    created_by: user.id,
  });

  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin/classes");
  revalidatePath("/suivi");
  return { ok: true };
}

export async function syncClassMembersAction(classLabel: string): Promise<{ ok: boolean; synced: number; reason?: string }> {
  const role = await getCallerRole();
  if (role !== "admin") return { ok: false, synced: 0, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, synced: 0, reason: "Erreur serveur." };

  const { data: cls } = await supabase
    .from("school_classes")
    .select("id")
    .eq("label", classLabel.trim())
    .maybeSingle();

  if (!cls) return { ok: false, synced: 0, reason: "Classe introuvable." };

  const { data: students } = await supabase
    .from("profiles")
    .select("id")
    .eq("role", "eleve")
    .eq("classe", classLabel.trim());

  if (!students?.length) return { ok: true, synced: 0 };

  const rows = students.map((s) => ({ class_id: cls.id, student_id: s.id }));
  const { error } = await supabase.from("class_members").upsert(rows, { onConflict: "class_id,student_id" });
  if (error) return { ok: false, synced: 0, reason: error.message };

  revalidatePath("/admin/classes");
  revalidatePath("/suivi");
  return { ok: true, synced: rows.length };
}
