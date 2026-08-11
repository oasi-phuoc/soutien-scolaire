"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { currentSchoolYearStartIso } from "@/lib/school-year";
import { ELEVE_CLASSE_TYPES, matchesEleveClasseType, type EleveClasseDeleteFilter } from "@/lib/eleve-classe-types";
import { ensureSchoolClassForLabel } from "@/lib/suivi/ensure-school-class";

type CallerRole = "admin" | "prof" | null;

function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function getCallerRole(): Promise<CallerRole> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || role === "prof") return role;
  return null;
}

export async function changeRoleAction(userId: string, newRole: "eleve" | "prof" | "admin") {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc
    .from("profiles")
    .update({ role: newRole, is_admin: newRole === "admin" })
    .eq("id", userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

export async function deleteUserAction(userId: string) {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.auth.admin.deleteUser(userId);
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  return { ok: true };
}

export async function resetAllElevesAction(
  classTypes: EleveClasseDeleteFilter[] | "all" = "all",
): Promise<{ ok: boolean; reason?: string; count?: number }> {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };

  if (classTypes !== "all") {
    const validTypes = new Set<string>([...ELEVE_CLASSE_TYPES, "ancien"]);
    const valid = classTypes.filter((t) => validTypes.has(t));
    if (valid.length === 0) {
      return { ok: false, reason: "Sélectionnez au moins une filière." };
    }
  }

  const { data: eleves, error } = await svc
    .from("profiles")
    .select("id, classe")
    .eq("role", "eleve");
  if (error) return { ok: false, reason: error.message };

  const targets = (eleves ?? []).filter((e) =>
    matchesEleveClasseType(e.classe as string | null, classTypes),
  );

  for (const e of targets) {
    await svc.auth.admin.deleteUser(e.id);
  }

  revalidatePath("/admin");
  return { ok: true, count: targets.length };
}

/**
 * Supprime les messages messagerie (PE/PO + devoirs) créés avant le début
 * de l'année scolaire en cours (1er août) — tous les comptes.
 */
export async function purgePreviousSchoolYearMessagesAction(): Promise<{
  ok: boolean;
  reason?: string;
  expressionDeleted?: number;
  taskDeleted?: number;
  before?: string;
}> {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };

  const before = currentSchoolYearStartIso();

  const supabase = await createSupabaseActionClient();
  if (supabase) {
    const { data, error } = await supabase.rpc("admin_purge_messages_before", {
      p_before: before,
    });
    if (!error && data) {
      const payload = data as { expression_deleted?: number; task_deleted?: number };
      revalidatePath("/admin");
      revalidatePath("/messagerie");
      return {
        ok: true,
        expressionDeleted: Number(payload.expression_deleted ?? 0),
        taskDeleted: Number(payload.task_deleted ?? 0),
        before,
      };
    }
  }

  // Fallback service role si la RPC n'est pas encore déployée.
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Supabase non configuré" };

  const [{ error: exprErr, count: exprCount }, { error: taskErr, count: taskCount }] =
    await Promise.all([
      svc
        .from("expression_submissions")
        .delete({ count: "exact" })
        .lt("created_at", before),
      svc
        .from("task_messages")
        .delete({ count: "exact" })
        .lt("created_at", before),
    ]);

  if (exprErr) return { ok: false, reason: exprErr.message };
  if (taskErr) return { ok: false, reason: taskErr.message };

  revalidatePath("/admin");
  revalidatePath("/messagerie");
  return {
    ok: true,
    expressionDeleted: exprCount ?? 0,
    taskDeleted: taskCount ?? 0,
    before,
  };
}

export async function changePasswordAction(userId: string, newPassword: string) {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, reason: "Non autorisé" };
  if (newPassword.length < 8) return { ok: false, reason: "Au moins 8 caractères requis." };
  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };
  const { error } = await svc.auth.admin.updateUserById(userId, { password: newPassword });
  if (error) return { ok: false, reason: error.message };
  return { ok: true };
}

export async function getPlacementHistoryForUserAction(userId: string): Promise<{
  ok: boolean;
  history: Array<{ date: string; points: number; maxPoints: number; percent: number }>;
  totalHistory: Array<{ date: string; total: number; mathCounted: number; frenchCounted: number; zone: string }>;
  combinedProfile: { total: number; zone: string; mathCounted: number; frenchCounted: number } | null;
  error?: string;
}> {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, history: [], totalHistory: [], combinedProfile: null, error: "Non autorisé" };
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, history: [], totalHistory: [], combinedProfile: null, error: "Erreur supabase" };
  const { data, error } = await supabase
    .from("profiles")
    .select("placement_test_history, placement_combined_profile, placement_total_history")
    .eq("id", userId)
    .maybeSingle();
  if (error) return { ok: false, history: [], totalHistory: [], combinedProfile: null, error: error.message };
  const raw = Array.isArray(data?.placement_test_history) ? data.placement_test_history : [];
  const rawTotal = Array.isArray(data?.placement_total_history) ? data.placement_total_history : [];
  const combined = data?.placement_combined_profile as {
    total?: number;
    zone?: string;
    mathCounted?: number;
    frenchCounted?: number;
  } | null;
  return {
    ok: true,
    history: (raw as Array<{ date: string; points: number; maxPoints: number; percent: number }>)
      .map(a => ({ date: a.date, points: a.points, maxPoints: a.maxPoints, percent: a.percent })),
    totalHistory: (rawTotal as Array<{ date: string; total: number; mathCounted: number; frenchCounted: number; zone: string }>)
      .map(a => ({
        date: String(a.date ?? ""),
        total: Number(a.total ?? 0),
        mathCounted: Number(a.mathCounted ?? 0),
        frenchCounted: Number(a.frenchCounted ?? 0),
        zone: String(a.zone ?? "CSC"),
      }))
      .filter(a => a.date.length > 0),
    combinedProfile: combined?.total !== undefined ? {
      total: Number(combined.total ?? 0),
      zone: String(combined.zone ?? "CSC"),
      mathCounted: Number(combined.mathCounted ?? 0),
      frenchCounted: Number(combined.frenchCounted ?? 0),
    } : null,
  };
}

export async function getUserForAdminAction(userId: string): Promise<{
  ok: boolean;
  user?: import("@/components/admin/AdminTable").UserRow;
  error?: string;
}> {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, error: "Non autorisé" };
  const svc = createServiceClient();
  if (!svc) return { ok: false, error: "Service role non configuré" };

  const {
    PROFILE_LESSON_ACCESS_COLS,
    PROFILE_LESSON_ACCESS_LEGACY_COLS,
    isMissingColumnError,
    mapProfileLessonAccess,
  } = await import("@/lib/auth/profile-lesson-access");

  const baseCols =
    "id, login_id, nom, prenom, classe, adresse, npa, localite, telephone, langue, progress_data, progress_updated_at, is_admin, role, can_print, placement_test_history, placement_combined_profile";

  const [{ data: authData }, first] = await Promise.all([
    svc.auth.admin.getUserById(userId),
    svc
      .from("profiles")
      .select(`${baseCols}, ${PROFILE_LESSON_ACCESS_COLS}`)
      .eq("id", userId)
      .single(),
  ]);

  let data: Record<string, unknown> | null = first.data as Record<string, unknown> | null;
  let error = first.error;

  // Migration granulaire pas encore appliquée → retombe sur les colonnes legacy.
  if (error && isMissingColumnError(error)) {
    const retry = await svc
      .from("profiles")
      .select(`${baseCols}, ${PROFILE_LESSON_ACCESS_LEGACY_COLS}`)
      .eq("id", userId)
      .single();
    data = retry.data as Record<string, unknown> | null;
    error = retry.error;
  }

  if (error || !data) return { ok: false, error: error?.message ?? "Utilisateur non trouvé" };

  const history = Array.isArray(data.placement_test_history) ? data.placement_test_history as Array<{ date: string; points: number; maxPoints: number; percent: number }> : [];
  const placement_test_best = history.length > 0
    ? history.reduce((best, a) => a.percent > best.percent ? a : best)
    : null;
  const combined = data.placement_combined_profile as {
    total?: number;
    zone?: string;
    mathCounted?: number;
    frenchCounted?: number;
    pendingFrench?: number;
  } | null;
  const access = mapProfileLessonAccess(data);

  return {
    ok: true,
    user: {
      ...data,
      can_print: Boolean(data.can_print),
      ...access,
      email: authData?.user?.email ?? "",
      placement_test_best: placement_test_best ? { points: placement_test_best.points, maxPoints: placement_test_best.maxPoints, percent: placement_test_best.percent } : null,
      placement_combined: combined?.total !== undefined ? {
        total: Number(combined.total ?? 0),
        zone: String(combined.zone ?? "CSC"),
        mathCounted: Number(combined.mathCounted ?? 0),
        frenchCounted: Number(combined.frenchCounted ?? 0),
        pendingFrench: combined.pendingFrench !== undefined ? Number(combined.pendingFrench) : undefined,
      } : null,
    } as import("@/components/admin/AdminTable").UserRow,
  };
}

export async function setUserPrintAccessAction(
  userId: string,
  enabled: boolean,
): Promise<{ ok: boolean; reason?: string }> {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré" };

  const { error } = await supabase.rpc("set_user_print_access", {
    p_user_id: userId,
    p_enabled: enabled,
  });
  if (error) {
    // Fallback service role si la migration RPC n'est pas encore appliquée.
    const svc = createServiceClient();
    if (!svc) return { ok: false, reason: error.message };
    const { error: svcErr } = await svc
      .from("profiles")
      .update({ can_print: enabled })
      .eq("id", userId);
    if (svcErr) return { ok: false, reason: svcErr.message };
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/eleves/${userId}`);
  revalidatePath("/");
  revalidatePath("/impressions");
  revalidatePath("/admin/impression");
  return { ok: true };
}

export async function setUserFreeAccessAction(
  userId: string,
  enabled: boolean,
): Promise<{ ok: boolean; reason?: string }> {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré" };

  const { error } = await supabase.rpc("set_user_free_access", {
    p_user_id: userId,
    p_enabled: enabled,
  });
  if (error) {
    const svc = createServiceClient();
    if (!svc) return { ok: false, reason: error.message };
    const { error: svcErr } = await svc
      .from("profiles")
      .update({ can_free_access: enabled })
      .eq("id", userId);
    if (svcErr) return { ok: false, reason: svcErr.message };
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/eleves/${userId}`);
  revalidatePath("/");
  revalidatePath("/francais");
  revalidatePath("/mathematiques");
  revalidatePath("/communication");
  return { ok: true };
}

export async function setUserPartialFlagAction(
  userId: string,
  flag:
    | "french_grammar"
    | "french_comm"
    | "math_a3"
    | "math_a8"
    | "math_g3",
  enabled: boolean,
): Promise<{ ok: boolean; reason?: string }> {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré" };

  const columnByFlag: Record<typeof flag, string> = {
    french_grammar: "can_partial_french_grammar",
    french_comm: "can_partial_french_comm",
    math_a3: "can_partial_math_a3",
    math_a8: "can_partial_math_a8",
    math_g3: "can_partial_math_g3",
  };

  const { error } = await supabase.rpc("set_user_partial_flag", {
    p_user_id: userId,
    p_flag: flag,
    p_enabled: enabled,
  });
  if (error) {
    const svc = createServiceClient();
    if (!svc) return { ok: false, reason: error.message };
    const { isMissingColumnError } = await import("@/lib/auth/profile-lesson-access");
    const { error: svcErr } = await svc
      .from("profiles")
      .update({ [columnByFlag[flag]]: enabled })
      .eq("id", userId);
    if (svcErr && isMissingColumnError(svcErr)) {
      // Migration absente : approxime via les flags binaires legacy.
      const legacyCol =
        flag === "french_grammar" || flag === "french_comm"
          ? "can_partial_french"
          : "can_partial_math";
      const { error: legacyErr } = await svc
        .from("profiles")
        .update({ [legacyCol]: enabled })
        .eq("id", userId);
      if (legacyErr) return { ok: false, reason: legacyErr.message };
    } else if (svcErr) {
      return { ok: false, reason: svcErr.message };
    }
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/eleves/${userId}`);
  revalidatePath("/francais");
  revalidatePath("/communication");
  revalidatePath("/mathematiques");
  return { ok: true };
}

/** @deprecated Préférer setUserPartialFlagAction */
export async function setUserPartialFrenchAction(
  userId: string,
  enabled: boolean,
): Promise<{ ok: boolean; reason?: string }> {
  const a = await setUserPartialFlagAction(userId, "french_grammar", enabled);
  if (!a.ok) return a;
  return setUserPartialFlagAction(userId, "french_comm", enabled);
}

/** @deprecated Préférer setUserPartialFlagAction */
export async function setUserPartialMathAction(
  userId: string,
  enabled: boolean,
): Promise<{ ok: boolean; reason?: string }> {
  const a = await setUserPartialFlagAction(userId, "math_a3", enabled);
  if (!a.ok) return a;
  if (!enabled) {
    await setUserPartialFlagAction(userId, "math_a8", false);
    await setUserPartialFlagAction(userId, "math_g3", false);
  }
  return a;
}

/** Met can_partial_* à false pour tous les profils (une seule fois via app_settings). */
export async function ensurePartialAccessDefaultsAppliedAction(): Promise<void> {
  const caller = await getCallerRole();
  if (caller !== "admin") return;
  const svc = createServiceClient();
  if (!svc) return;

  const flagKey = "partial_access_default_false_v1";
  const { data: flag } = await svc
    .from("app_settings")
    .select("value")
    .eq("key", flagKey)
    .maybeSingle();
  if (flag?.value === true) return;

  await svc
    .from("profiles")
    .update({
      can_partial_french: false,
      can_partial_math: false,
      can_partial_french_grammar: false,
      can_partial_french_comm: false,
      can_partial_math_a3: false,
      can_partial_math_a8: false,
      can_partial_math_g3: false,
    })
    .or(
      "can_partial_french.eq.true,can_partial_math.eq.true,can_partial_french_grammar.eq.true,can_partial_french_comm.eq.true,can_partial_math_a3.eq.true,can_partial_math_a8.eq.true,can_partial_math_g3.eq.true",
    );

  await svc.from("app_settings").upsert(
    { key: flagKey, value: true, updated_at: new Date().toISOString() },
    { onConflict: "key" },
  );
}

export async function updateUserProfileAction(
  userId: string,
  data: { nom?: string; prenom?: string; classe?: string; adresse?: string; npa?: string; localite?: string; telephone?: string; langue?: string },
) {
  const caller = await getCallerRole();
  if (!caller) return { ok: false, reason: "Non autorisé" };

  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };

  const { data: target, error: targetErr } = await svc
    .from("profiles")
    .select("id, role, classe")
    .eq("id", userId)
    .maybeSingle();
  if (targetErr) return { ok: false, reason: targetErr.message };
  if (!target) return { ok: false, reason: "Utilisateur introuvable" };

  if (caller === "prof") {
    // Les profs peuvent uniquement modifier les élèves de leurs classes.
    if (target.role !== "eleve") {
      return { ok: false, reason: "Les professeurs ne peuvent modifier que les élèves." };
    }
    const { canAccessStudentAction } = await import("@/app/actions/suivi");
    const canAccess = await canAccessStudentAction(userId);
    if (!canAccess) return { ok: false, reason: "Accès refusé à cet élève." };
  }

  const { error } = await svc.from("profiles").update(data).eq("id", userId);
  if (error) return { ok: false, reason: error.message };
  if (data.classe?.trim()) {
    await ensureSchoolClassForLabel(svc, data.classe, userId);
  }
  revalidatePath("/admin");
  revalidatePath(`/admin/eleves/${userId}`);
  revalidatePath("/suivi");
  if (data.classe?.trim()) {
    revalidatePath(`/suivi/classes/${encodeURIComponent(data.classe.trim())}`);
  }
  const prevClasse = String(target.classe ?? "").trim();
  if (prevClasse && prevClasse !== data.classe?.trim()) {
    revalidatePath(`/suivi/classes/${encodeURIComponent(prevClasse)}`);
  }
  return { ok: true };
}

export async function getPlacementModuleEnabledAction(): Promise<{ ok: boolean; enabled: boolean }> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: true, enabled: true };
  const { data, error } = await supabase.rpc("get_placement_module_enabled");
  if (error) return { ok: false, enabled: true };
  return { ok: true, enabled: data !== false };
}

export async function setPlacementModuleEnabledAction(enabled: boolean): Promise<{ ok: boolean; reason?: string }> {
  const caller = await getCallerRole();
  if (caller !== "admin") return { ok: false, reason: "Non autorisé" };
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré" };
  const { error } = await supabase.rpc("set_placement_module_enabled", { p_enabled: enabled });
  if (error) return { ok: false, reason: error.message };
  revalidatePath("/admin");
  revalidatePath("/placement");
  revalidatePath("/");
  return { ok: true };
}

export async function getPlacementNavVisibilityAction(): Promise<{ ok: boolean; visible: boolean }> {
  const { getNavAccess } = await import("@/lib/auth/nav-access");
  const access = await getNavAccess();
  return { ok: true, visible: access.placementVisible };
}

/** Visibilité de la section « Suivi pédagogique » dans la barre latérale.
 *  - admin : Suivi + Admin + Édition de contenu
 *  - prof (avec accès suivi) : Suivi uniquement
 *  - élève : rien
 */
export async function getPedagogicNavVisibilityAction(): Promise<{
  ok: boolean;
  showSection: boolean;
  isAdmin: boolean;
  hasSuiviAccess: boolean;
  canEditContent: boolean;
  /** Accès hub Impression : admin ou flag can_print. */
  canPrint: boolean;
}> {
  const { pedagogicFromNavAccess, getNavAccess } = await import("@/lib/auth/nav-access");
  const access = await getNavAccess();
  return { ok: true, ...pedagogicFromNavAccess(access) };
}
