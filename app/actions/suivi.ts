"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { frenchProgress, lectureProgress, mathProgress } from "@/lib/suivi/progress-metrics";
import {
  bestFrenchPlacementFromLast5,
  bestMathPlacementFromLast5,
} from "@/lib/suivi/placement-best";
import { syncSchoolClassesFromProfiles } from "@/lib/suivi/ensure-school-class";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import type { PlacementFrenchSession, PlacementMathAttempt } from "@/lib/placement/types";

function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export type TeacherClassRow = {
  class_id: string;
  label: string;
  student_count: number;
  is_primary: boolean;
  is_secondary: boolean;
  /** Professeur ayant cette classe en classe principale */
  titulaire: string | null;
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
  adresse: string | null;
  npa: string | null;
  localite: string | null;
  telephone: string | null;
  langue: string | null;
  progress_updated_at: string | null;
  can_free_access: boolean;
  can_partial_french_grammar: boolean;
  can_partial_french_comm: boolean;
  can_partial_math_a3: boolean;
  can_partial_math_a8: boolean;
  can_partial_math_g3: boolean;
  math_done: number;
  math_total: number;
  math_pct: number;
  french_done: number;
  french_total: number;
  french_pct: number;
  lecture_done: number;
  lecture_total: number;
  lecture_pct: number;
  tcm_best: number | null;
  tcf_best: number | null;
  placement_total: number | null;
  placement_zone: string | null;
  pending_tasks: number;
  done_tasks: number;
  tasks_on_time_pct: number | null;
  total_time_sec: number;
  time_7d_sec: number;
};

type StaffCaller = {
  supabase: NonNullable<Awaited<ReturnType<typeof createSupabaseActionClient>>>;
  user: { id: string };
  role: "admin" | "prof";
};

/** Un seul getUser + get_my_role par action serveur. */
async function requireStaffCaller(): Promise<StaffCaller | null> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: role } = await supabase.rpc("get_my_role");
  if (role !== "admin" && role !== "prof") return null;
  return { supabase, user, role };
}

async function getCallerRole(): Promise<"admin" | "prof" | null> {
  const caller = await requireStaffCaller();
  return caller?.role ?? null;
}

function formatPersonName(prenom: string | null | undefined, nom: string | null | undefined): string | null {
  const name = [prenom, nom].filter(Boolean).join(" ").trim();
  return name || null;
}

async function fetchTitulairesByClassId(
  supabase: NonNullable<Awaited<ReturnType<typeof createSupabaseActionClient>>>,
  classIds: string[],
): Promise<Map<string, string>> {
  const realIds = [...new Set(classIds.filter((id) => !id.startsWith("label:")))];
  if (realIds.length === 0) return new Map();

  const { data: rows } = await supabase
    .from("profiles")
    .select("prenom, nom, primary_class_id")
    .in("role", ["prof", "admin"])
    .in("primary_class_id", realIds);

  const byClass = new Map<string, string[]>();
  for (const row of rows ?? []) {
    const classId = row.primary_class_id as string | null;
    if (!classId) continue;
    const name = formatPersonName(row.prenom as string | null, row.nom as string | null);
    if (!name) continue;
    const list = byClass.get(classId) ?? [];
    list.push(name);
    byClass.set(classId, list);
  }

  const result = new Map<string, string>();
  for (const [classId, names] of byClass) {
    result.set(classId, names.join(", "));
  }
  return result;
}

function attachTitulaires(
  classes: Omit<TeacherClassRow, "titulaire">[],
  titulaires: Map<string, string>,
): TeacherClassRow[] {
  return classes.map((c) => ({
    ...c,
    titulaire: titulaires.get(c.class_id) ?? null,
  }));
}

export async function getSuiviContextAction(): Promise<SuiviContext | null> {
  const caller = await requireStaffCaller();
  if (!caller) return null;
  const { supabase, user, role } = caller;

  // Admin : synchronise les labels profiles → school_classes (HSS inclus)
  // pour que le suivi affiche les nouvelles classes comme CSC/CFR.
  if (role === "admin") {
    const svc = createServiceClient();
    if (svc) await syncSchoolClassesFromProfiles(svc);
  }

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  const { data: classesRaw } = await supabase.rpc("get_my_teacher_classes");
  const { data: assignedRows } = await supabase
    .from("class_teachers")
    .select("class_id")
    .eq("teacher_id", user.id);
  const secondaryIds = new Set((assignedRows ?? []).map((r) => r.class_id as string));
  const classesBase = ((classesRaw ?? []) as Omit<TeacherClassRow, "is_secondary" | "titulaire">[]).map((c) => ({
    ...c,
    is_secondary: secondaryIds.has(c.class_id),
  }));
  const titulaires = await fetchTitulairesByClassId(
    supabase,
    classesBase.map((c) => c.class_id),
  );
  const classes = attachTitulaires(classesBase, titulaires);

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

export async function getAttributionClassesAction(): Promise<{
  ok: boolean;
  classes: TeacherClassRow[];
  error?: string;
}> {
  const ctx = await getSuiviContextAction();
  if (!ctx) return { ok: false, classes: [], error: "Non autorisé." };
  if (!ctx.hasAccess) return { ok: false, classes: [], error: "Aucune classe affectée." };

  // HSS (et toute nouvelle filière) : crée school_classes + class_members
  // à partir de profiles.classe pour qu’elles soient attribuables comme CSC/CFR.
  const svc = createServiceClient();
  if (svc) await syncSchoolClassesFromProfiles(svc);

  const caller = await requireStaffCaller();
  if (!caller) return { ok: false, classes: [], error: "Non authentifié." };
  const { supabase, user } = caller;

  const { data: pupilRows, error: pupilErr } = await supabase
    .from("profiles")
    .select("classe")
    .eq("role", "eleve")
    .not("classe", "is", null);

  if (pupilErr) return { ok: false, classes: [], error: pupilErr.message };

  const labels = [
    ...new Set(
      (pupilRows ?? [])
        .map((p) => String(p.classe ?? "").trim())
        .filter(Boolean),
    ),
  ].sort((a, b) => a.localeCompare(b, "fr"));

  if (labels.length === 0) return { ok: true, classes: [] };

  const { data: schoolRows } = await supabase
    .from("school_classes")
    .select("id, label")
    .in("label", labels);

  const schoolByLabel = new Map(
    (schoolRows ?? []).map((r) => [r.label as string, r.id as string]),
  );

  const { data: assignedRows } = await supabase
    .from("class_teachers")
    .select("class_id")
    .eq("teacher_id", user.id);
  const secondaryIds = new Set((assignedRows ?? []).map((r) => r.class_id as string));

  const { data: profile } = await supabase
    .from("profiles")
    .select("primary_class_id")
    .eq("id", user.id)
    .maybeSingle();
  const primaryId = (profile?.primary_class_id as string | null) ?? null;

  const classesBase: Omit<TeacherClassRow, "titulaire">[] = [];
  for (const label of labels) {
    const classId = schoolByLabel.get(label) ?? `label:${label}`;
    const { count } = await supabase
      .from("profiles")
      .select("id", { count: "exact", head: true })
      .eq("role", "eleve")
      .eq("classe", label);

    classesBase.push({
      class_id: classId,
      label,
      student_count: count ?? 0,
      is_primary: classId === primaryId,
      is_secondary: secondaryIds.has(classId),
    });
  }

  const titulaires = await fetchTitulairesByClassId(
    supabase,
    classesBase.map((c) => c.class_id),
  );
  const classes = attachTitulaires(classesBase, titulaires);

  return { ok: true, classes };
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

export async function getClassStudentsSuiviAction(
  classLabel: string,
  limit?: number,
): Promise<{
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

  const {
    PROFILE_LESSON_ACCESS_COLS,
    PROFILE_LESSON_ACCESS_LEGACY_COLS,
    isMissingColumnError,
    mapProfileLessonAccess,
  } = await import("@/lib/auth/profile-lesson-access");

  const baseCols =
    "id, prenom, nom, classe, adresse, npa, localite, telephone, langue, progress_updated_at, progress_data, placement_combined_profile, placement_test_history, placement_french_history";

  let query = supabase
    .from("profiles")
    .select(`${baseCols}, ${PROFILE_LESSON_ACCESS_COLS}`)
    .eq("role", "eleve")
    .eq("classe", classLabel)
    .order("nom");

  if (limit != null) query = query.limit(limit);

  let { data: profiles, error: pErr } = await query;

  if (pErr && isMissingColumnError(pErr)) {
    let legacyQuery = supabase
      .from("profiles")
      .select(`${baseCols}, ${PROFILE_LESSON_ACCESS_LEGACY_COLS}`)
      .eq("role", "eleve")
      .eq("classe", classLabel)
      .order("nom");
    if (limit != null) legacyQuery = legacyQuery.limit(limit);
    const retry = await legacyQuery;
    profiles = retry.data as typeof profiles;
    pErr = retry.error;
  }

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
    const math = mathProgress(pd);
    const french = frenchProgress(pd);
    const lecture = lectureProgress(pd);
    const placement = p.placement_combined_profile as { total?: number; zone?: string } | null;
    const mathHistory = p.placement_test_history as PlacementMathAttempt[] | null;
    const frenchHistory = p.placement_french_history as PlacementFrenchSession[] | null;
    const ot = onTimeMap.get(p.id as string);
    const onTimePct = ot && ot.withDue > 0 ? Math.round((ot.onTime / ot.withDue) * 100) : null;

    return {
      id: p.id as string,
      prenom: (p.prenom as string | null) ?? null,
      nom: (p.nom as string | null) ?? null,
      classe: (p.classe as string | null) ?? null,
      adresse: (p.adresse as string | null) ?? null,
      npa: (p.npa as string | null) ?? null,
      localite: (p.localite as string | null) ?? null,
      telephone: (p.telephone as string | null) ?? null,
      langue: (p.langue as string | null) ?? null,
      progress_updated_at: (p.progress_updated_at as string | null) ?? null,
      ...mapProfileLessonAccess(p),
      math_done: math.done,
      math_total: math.total,
      math_pct: math.pct,
      french_done: french.done,
      french_total: french.total,
      french_pct: french.pct,
      lecture_done: lecture.done,
      lecture_total: lecture.total,
      lecture_pct: lecture.pct,
      tcm_best: bestMathPlacementFromLast5(mathHistory),
      tcf_best: bestFrenchPlacementFromLast5(frenchHistory),
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

/** Admin ou prof de la classe : peut modifier l'accès aux leçons d'un élève. */
async function assertCanManageStudentLessonAccess(
  studentId: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("classe, role")
    .eq("id", studentId)
    .maybeSingle();

  if (error) return { ok: false, reason: error.message };
  if (!profile || profile.role !== "eleve") return { ok: false, reason: "Élève introuvable." };

  if (role === "admin") return { ok: true };

  const classLabel = String(profile.classe ?? "").trim();
  if (!classLabel) return { ok: false, reason: "Élève sans classe." };
  const canAccess = await canAccessClassAction(classLabel);
  if (!canAccess) return { ok: false, reason: "Accès refusé à cette classe." };
  return { ok: true };
}

export type StudentLessonAccessPatch = {
  can_free_access?: boolean;
  can_partial_french_grammar?: boolean;
  can_partial_french_comm?: boolean;
  can_partial_math_a3?: boolean;
  can_partial_math_a8?: boolean;
  can_partial_math_g3?: boolean;
};

/** Accès complet / partiel granulaire — disponible depuis le suivi classe. */
export async function setStudentLessonAccessAction(
  studentId: string,
  patch: StudentLessonAccessPatch,
): Promise<{ ok: boolean; reason?: string }> {
  const gate = await assertCanManageStudentLessonAccess(studentId);
  if (!gate.ok) return gate;

  const payload: Record<string, boolean> = {};
  if (typeof patch.can_free_access === "boolean") payload.can_free_access = patch.can_free_access;
  if (typeof patch.can_partial_french_grammar === "boolean") {
    payload.can_partial_french_grammar = patch.can_partial_french_grammar;
  }
  if (typeof patch.can_partial_french_comm === "boolean") {
    payload.can_partial_french_comm = patch.can_partial_french_comm;
  }
  if (typeof patch.can_partial_math_a3 === "boolean") payload.can_partial_math_a3 = patch.can_partial_math_a3;
  if (typeof patch.can_partial_math_a8 === "boolean") payload.can_partial_math_a8 = patch.can_partial_math_a8;
  if (typeof patch.can_partial_math_g3 === "boolean") payload.can_partial_math_g3 = patch.can_partial_math_g3;
  if (Object.keys(payload).length === 0) return { ok: true };

  // Accès complet désactive le besoin d'accès partiel (cohérent avec l'UI admin).
  if (payload.can_free_access === true) {
    payload.can_partial_french_grammar = false;
    payload.can_partial_french_comm = false;
    payload.can_partial_math_a3 = false;
    payload.can_partial_math_a8 = false;
    payload.can_partial_math_g3 = false;
  }

  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré." };

  const { isMissingColumnError } = await import("@/lib/auth/profile-lesson-access");

  let { error } = await svc.from("profiles").update(payload).eq("id", studentId);

  // Sans migration granulaire : mapper vers can_partial_french / can_partial_math.
  if (error && isMissingColumnError(error)) {
    const legacy: Record<string, boolean> = {};
    if (typeof payload.can_free_access === "boolean") {
      legacy.can_free_access = payload.can_free_access;
    }
    const frKeys = ["can_partial_french_grammar", "can_partial_french_comm"] as const;
    const mathKeys = ["can_partial_math_a3", "can_partial_math_a8", "can_partial_math_g3"] as const;
    const touchedFr = frKeys.some((k) => typeof payload[k] === "boolean");
    const touchedMath = mathKeys.some((k) => typeof payload[k] === "boolean");
    if (payload.can_free_access === true) {
      legacy.can_partial_french = false;
      legacy.can_partial_math = false;
    } else {
      if (touchedFr) {
        legacy.can_partial_french = Boolean(
          payload.can_partial_french_grammar || payload.can_partial_french_comm,
        );
      }
      if (touchedMath) {
        legacy.can_partial_math = Boolean(
          payload.can_partial_math_a3 || payload.can_partial_math_a8 || payload.can_partial_math_g3,
        );
      }
    }
    const retry = await svc.from("profiles").update(legacy).eq("id", studentId);
    error = retry.error;
  }

  if (error) return { ok: false, reason: error.message };

  revalidatePath("/suivi");
  revalidatePath("/admin");
  revalidatePath(`/admin/eleves/${studentId}`);
  revalidatePath("/");
  revalidatePath("/francais");
  revalidatePath("/mathematiques");
  revalidatePath("/communication");
  return { ok: true };
}

/** Admin ou prof de la classe : change la classe (filière) d'un élève. */
export async function setStudentClasseAction(
  studentId: string,
  classe: string,
): Promise<{ ok: boolean; reason?: string; classe?: string }> {
  const gate = await assertCanManageStudentLessonAccess(studentId);
  if (!gate.ok) return gate;

  const trimmed = classe.trim();
  if (!trimmed) return { ok: false, reason: "Indiquez une classe." };

  const { updateUserProfileAction } = await import("@/app/actions/admin");
  const r = await updateUserProfileAction(studentId, { classe: trimmed });
  if (!r.ok) return { ok: false, reason: r.reason };
  return { ok: true, classe: trimmed };
}

export async function setPrimaryClassAction(classId: string): Promise<{ ok: boolean; reason?: string }> {
  const caller = await requireStaffCaller();
  if (!caller) return { ok: false, reason: "Non autorisé." };
  const { supabase, user, role } = caller;

  if (role === "prof") {
    const { data: assigned } = await supabase
      .from("class_teachers")
      .select("class_id")
      .eq("teacher_id", user.id)
      .eq("class_id", classId)
      .maybeSingle();
    if (!assigned) return { ok: false, reason: "Classe non affectée." };
  }

  await supabase
    .from("class_teachers")
    .upsert({ class_id: classId, teacher_id: user.id }, { onConflict: "class_id,teacher_id" });

  const { error } = await supabase
    .from("profiles")
    .update({ primary_class_id: classId })
    .eq("id", user.id);

  if (error) return { ok: false, reason: error.message };
  revalidatePath("/");
  revalidatePath("/suivi");
  revalidatePath("/suivi/attributions");
  return { ok: true };
}

export async function toggleSecondaryClassAction(
  classId: string,
  enabled: boolean,
): Promise<{ ok: boolean; reason?: string }> {
  const caller = await requireStaffCaller();
  if (!caller) return { ok: false, reason: "Non autorisé." };
  const { supabase, user } = caller;

  if (enabled) {
    const { error } = await supabase
      .from("class_teachers")
      .upsert({ class_id: classId, teacher_id: user.id }, { onConflict: "class_id,teacher_id" });
    if (error) return { ok: false, reason: error.message };
  } else {
    const { data: profile } = await supabase
      .from("profiles")
      .select("primary_class_id")
      .eq("id", user.id)
      .maybeSingle();

    const { error } = await supabase
      .from("class_teachers")
      .delete()
      .eq("teacher_id", user.id)
      .eq("class_id", classId);
    if (error) return { ok: false, reason: error.message };

    if ((profile?.primary_class_id as string | null) === classId) {
      await supabase.from("profiles").update({ primary_class_id: null }).eq("id", user.id);
    }
  }

  revalidatePath("/");
  revalidatePath("/suivi");
  revalidatePath("/suivi/attributions");
  return { ok: true };
}

export async function saveMyClassAttributionsAction(
  primaryClassId: string | null,
  secondaryClassIds: string[],
): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (!role) return { ok: false, reason: "Non autorisé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "Non authentifié." };

  const isRealId = (id: string) => !id.startsWith("label:");
  const secondary = [...new Set(secondaryClassIds.filter(isRealId))];
  const desired = new Set(secondary);
  if (primaryClassId && isRealId(primaryClassId)) {
    desired.add(primaryClassId);
  }

  const { data: currentRows, error: readErr } = await supabase
    .from("class_teachers")
    .select("class_id")
    .eq("teacher_id", user.id);

  if (readErr) return { ok: false, reason: readErr.message };

  const currentIds = (currentRows ?? []).map((r) => r.class_id as string);

  for (const id of currentIds) {
    if (!desired.has(id)) {
      const { error } = await supabase
        .from("class_teachers")
        .delete()
        .eq("teacher_id", user.id)
        .eq("class_id", id);
      if (error) return { ok: false, reason: error.message };
    }
  }

  for (const id of desired) {
    const { error } = await supabase
      .from("class_teachers")
      .upsert({ class_id: id, teacher_id: user.id }, { onConflict: "class_id,teacher_id" });
    if (error) return { ok: false, reason: error.message };
  }

  const nextPrimary = primaryClassId && isRealId(primaryClassId) ? primaryClassId : null;
  const { error: profileErr } = await supabase
    .from("profiles")
    .update({ primary_class_id: nextPrimary })
    .eq("id", user.id);

  if (profileErr) return { ok: false, reason: profileErr.message };

  revalidatePath("/");
  revalidatePath("/suivi");
  revalidatePath("/suivi/attributions");
  return { ok: true };
}

export type SuiviSearchStudent = {
  id: string;
  prenom: string | null;
  nom: string | null;
  classLabel: string;
};

export type SuiviSearchClass = {
  class_id: string;
  label: string;
  student_count: number;
};

export async function searchSuiviAction(query: string): Promise<{
  ok: boolean;
  students: SuiviSearchStudent[];
  classes: SuiviSearchClass[];
  error?: string;
}> {
  const role = await getCallerRole();
  if (!role) return { ok: false, students: [], classes: [], error: "Non autorisé." };

  const q = query.trim();
  if (q.length < 2) return { ok: true, students: [], classes: [] };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, students: [], classes: [], error: "Erreur serveur." };

  const pattern = `%${q}%`;
  const { data: studentRows, error: sErr } = await supabase
    .from("profiles")
    .select("id, prenom, nom, classe")
    .eq("role", "eleve")
    .not("classe", "is", null)
    .or(`prenom.ilike.${pattern},nom.ilike.${pattern},classe.ilike.${pattern}`)
    .order("nom")
    .limit(40);

  if (sErr) return { ok: false, students: [], classes: [], error: sErr.message };

  const students: SuiviSearchStudent[] = (studentRows ?? [])
    .filter((p) => p.classe)
    .map((p) => ({
      id: p.id as string,
      prenom: (p.prenom as string | null) ?? null,
      nom: (p.nom as string | null) ?? null,
      classLabel: String(p.classe),
    }));

  const classLabels = new Set<string>();
  for (const s of students) classLabels.add(s.classLabel);
  for (const p of studentRows ?? []) {
    if (p.classe && String(p.classe).toLowerCase().includes(q.toLowerCase())) {
      classLabels.add(String(p.classe));
    }
  }

  if (classLabels.size === 0) return { ok: true, students, classes: [] };

  const { data: classRows, error: cErr } = await supabase
    .from("school_classes")
    .select("id, label")
    .in("label", [...classLabels]);

  if (cErr) return { ok: false, students: [], classes: [], error: cErr.message };

  const classes: SuiviSearchClass[] = [];
  for (const label of classLabels) {
    const sc = (classRows ?? []).find((c) => c.label === label);
    const count = students.filter((s) => s.classLabel === label).length;
    if (sc) {
      const { count: total } = await supabase
        .from("profiles")
        .select("id", { count: "exact", head: true })
        .eq("role", "eleve")
        .eq("classe", label);
      classes.push({
        class_id: sc.id as string,
        label,
        student_count: total ?? count,
      });
    } else {
      const { count: total } = await supabase
        .from("profiles")
        .select("id", { count: "exact", head: true })
        .eq("role", "eleve")
        .eq("classe", label);
      classes.push({
        class_id: `label:${label}`,
        label,
        student_count: total ?? count,
      });
    }
  }

  return { ok: true, students, classes: classes.sort((a, b) => a.label.localeCompare(b.label, "fr")) };
}

export async function getClassRowByLabelAction(classLabel: string): Promise<{
  ok: boolean;
  row: TeacherClassRow | null;
}> {
  const ctx = await getSuiviContextAction();
  if (!ctx) return { ok: false, row: null };

  const existing = ctx.classes.find((c) => c.label === classLabel);
  if (existing) return { ok: true, row: existing };

  const caller = await requireStaffCaller();
  if (!caller) return { ok: false, row: null };
  const { supabase, user } = caller;

  const { data: sc } = await supabase
    .from("school_classes")
    .select("id, label")
    .eq("label", classLabel)
    .maybeSingle();

  const { count } = await supabase
    .from("profiles")
    .select("id", { count: "exact", head: true })
    .eq("role", "eleve")
    .eq("classe", classLabel);

  const { data: profile } = await supabase
    .from("profiles")
    .select("primary_class_id")
    .eq("id", user.id)
    .maybeSingle();

  const classId = (sc?.id as string) ?? `label:${classLabel}`;
  const { data: allAssigned } = await supabase
    .from("class_teachers")
    .select("class_id")
    .eq("teacher_id", user.id);
  const secondarySet = new Set((allAssigned ?? []).map((r) => r.class_id as string));

  const rowBase = {
    class_id: classId,
    label: classLabel,
    student_count: count ?? 0,
    is_primary: (profile?.primary_class_id as string | null) === classId,
    is_secondary: secondarySet.has(classId),
  };
  const titulaires = await fetchTitulairesByClassId(supabase, [classId]);
  const [row] = attachTitulaires([rowBase], titulaires);

  return {
    ok: true,
    row,
  };
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

  const secondary = primaryClassId
    ? classIds.filter((id) => id !== primaryClassId)
    : classIds;

  const { error } = await supabase.rpc("admin_save_teacher_attributions", {
    p_updates: [
      {
        teacher_id: teacherId,
        primary_class_id: primaryClassId ?? null,
        secondary_class_ids: secondary,
      },
    ],
  });

  if (error) return { ok: false, reason: error.message };

  revalidatePath("/admin");
  revalidatePath("/suivi");
  revalidatePath("/admin/attribution-professeurs");
  return { ok: true };
}

export async function getTeacherClassAssignmentsAction(teacherId: string): Promise<{
  ok: boolean;
  classIds: string[];
  primaryClassId: string | null;
}> {
  const caller = await requireStaffCaller();
  if (!caller) {
    return { ok: false, classIds: [], primaryClassId: null };
  }
  const { supabase, user, role } = caller;

  if (role === "prof" && user.id !== teacherId) {
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

export async function getStudentProgressDetailAction(userId: string): Promise<{
  ok: boolean;
  progress_data: StoredProgressV1 | null;
  error?: string;
}> {
  const canAccess = await canAccessStudentAction(userId);
  if (!canAccess) return { ok: false, progress_data: null, error: "Accès refusé." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, progress_data: null, error: "Erreur serveur." };

  const { data, error } = await supabase
    .from("profiles")
    .select("progress_data")
    .eq("id", userId)
    .eq("role", "eleve")
    .maybeSingle();

  if (error) return { ok: false, progress_data: null, error: error.message };
  return {
    ok: true,
    progress_data: (data?.progress_data as StoredProgressV1 | null) ?? null,
  };
}

export async function canAccessStudentAction(studentId: string): Promise<boolean> {
  const caller = await requireStaffCaller();
  if (!caller) return false;
  if (caller.role === "admin") return true;

  const { data: student } = await caller.supabase
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

export type ProfessorAttributionRow = {
  id: string;
  prenom: string | null;
  nom: string | null;
  email: string;
  primaryClassId: string | null;
  secondaryClassIds: string[];
};

export type ProfessorClassOption = {
  class_id: string;
  label: string;
};

export async function getProfessorAttributionsAction(): Promise<{
  ok: boolean;
  professors: ProfessorAttributionRow[];
  classes: ProfessorClassOption[];
  error?: string;
}> {
  const role = await getCallerRole();
  if (role !== "admin") {
    return { ok: false, professors: [], classes: [], error: "Réservé aux administrateurs." };
  }

  const svc = createServiceClient();
  if (svc) await syncSchoolClassesFromProfiles(svc);

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, professors: [], classes: [], error: "Erreur serveur." };

  const { data: classRows, error: classErr } = await supabase.rpc("get_school_classes");
  if (classErr) return { ok: false, professors: [], classes: [], error: classErr.message };

  const classes: ProfessorClassOption[] = ((classRows ?? []) as { class_id: string; label: string }[])
    .map((c) => ({ class_id: c.class_id, label: c.label }))
    .sort((a, b) => a.label.localeCompare(b.label, "fr"));

  const { data: profRows, error: profErr } = await supabase
    .from("profiles")
    .select("id, prenom, nom, email, primary_class_id")
    .eq("role", "prof")
    .order("nom");

  if (profErr) return { ok: false, professors: [], classes: [], error: profErr.message };

  const profIds = (profRows ?? []).map((p) => p.id as string);
  const assignmentMap = new Map<string, Set<string>>();

  if (profIds.length > 0) {
    const { data: assignRows, error: assignErr } = await supabase
      .from("class_teachers")
      .select("teacher_id, class_id")
      .in("teacher_id", profIds);

    if (assignErr) return { ok: false, professors: [], classes: [], error: assignErr.message };

    for (const row of assignRows ?? []) {
      const tid = row.teacher_id as string;
      const cid = row.class_id as string;
      const set = assignmentMap.get(tid) ?? new Set<string>();
      set.add(cid);
      assignmentMap.set(tid, set);
    }
  }

  const professors: ProfessorAttributionRow[] = (profRows ?? []).map((p) => {
    const id = p.id as string;
    const primaryClassId = (p.primary_class_id as string | null) ?? null;
    const assigned = assignmentMap.get(id) ?? new Set<string>();
    const secondaryClassIds = [...assigned].filter((cid) => cid !== primaryClassId);
    return {
      id,
      prenom: (p.prenom as string | null) ?? null,
      nom: (p.nom as string | null) ?? null,
      email: (p.email as string) ?? "",
      primaryClassId,
      secondaryClassIds,
    };
  });

  professors.sort((a, b) => {
    const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
    const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
    return na.localeCompare(nb, "fr");
  });

  return { ok: true, professors, classes };
}

export type ProfessorAttributionUpdate = {
  teacherId: string;
  primaryClassId: string | null;
  secondaryClassIds: string[];
};

export async function saveProfessorAttributionsAction(
  updates: ProfessorAttributionUpdate[],
): Promise<{ ok: boolean; reason?: string }> {
  const role = await getCallerRole();
  if (role !== "admin") return { ok: false, reason: "Réservé aux administrateurs." };

  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Erreur serveur." };

  const primarySet = new Set<string>();
  for (const row of updates) {
    if (!row.primaryClassId) continue;
    if (primarySet.has(row.primaryClassId)) {
      return {
        ok: false,
        reason: "Deux professeurs ne peuvent pas être titulaires de la même classe.",
      };
    }
    primarySet.add(row.primaryClassId);
  }

  const payload = updates.map((row) => {
    const secondary = row.secondaryClassIds.filter((id) => id !== row.primaryClassId);
    return {
      teacher_id: row.teacherId,
      primary_class_id: row.primaryClassId,
      secondary_class_ids: secondary,
    };
  });

  const { error } = await supabase.rpc("admin_save_teacher_attributions", {
    p_updates: payload,
  });

  if (error) return { ok: false, reason: error.message };

  revalidatePath("/admin");
  revalidatePath("/admin/attribution-professeurs");
  revalidatePath("/suivi");
  return { ok: true };
}
