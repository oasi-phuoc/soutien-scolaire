import { cache } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { LessonAccessFlags } from "@/lib/auth/lesson-access";

export type PedagogicNavAccess = {
  showSection: boolean;
  isAdmin: boolean;
  hasSuiviAccess: boolean;
  canEditContent: boolean;
  canPrint: boolean;
  /** Accès libre aux leçons (sans verrouillage séquentiel). */
  canFreeAccess: boolean;
  /** Accès partiel français (jusqu'à G7.1 / E9.1) ou complet. */
  canPartialFrench: boolean;
  /** Accès partiel maths (jusqu'à A3) ou complet. */
  canPartialMath: boolean;
};

export type NavAccess = PedagogicNavAccess & {
  role: "admin" | "prof" | "eleve" | "other";
  placementVisible: boolean;
  /** Utilisateur connecté (false si anonyme / sans Supabase). */
  authenticated: boolean;
};

const OPEN_LOCALLY =
  process.env.CONTENT_EDIT_OPEN === "1" ||
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function openLocalAccess(): NavAccess {
  return {
    authenticated: false,
    role: "other",
    showSection: true,
    isAdmin: false,
    hasSuiviAccess: false,
    canEditContent: true,
    canPrint: false,
    canFreeAccess: true,
    canPartialFrench: true,
    canPartialMath: true,
    placementVisible: true,
  };
}

/**
 * Accès navigation (sidebar / nav) — une seule fois par requête RSC via `cache()`.
 * Évite le flash « options admin absentes » puis apparition après un round-trip client.
 */
export const getNavAccess = cache(async (): Promise<NavAccess> => {
  const supabase = await createSupabaseServerClient();

  if (!supabase) return openLocalAccess();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      ...openLocalAccess(),
      showSection: OPEN_LOCALLY,
      canEditContent: OPEN_LOCALLY,
      canFreeAccess: OPEN_LOCALLY,
      canPartialFrench: OPEN_LOCALLY,
      canPartialMath: OPEN_LOCALLY,
    };
  }

  const { data: roleRaw } = await supabase.rpc("get_my_role");
  const role: NavAccess["role"] =
    roleRaw === "admin" || roleRaw === "prof" || roleRaw === "eleve"
      ? roleRaw
      : "other";
  const isAdmin = role === "admin";
  const isStaff = role === "admin" || role === "prof";

  const needsSuivi = !isAdmin && role === "prof";
  const needsPrint = !isAdmin;
  const needsLessonAccess = role === "eleve";
  const needsPlacementGate = role !== "admin" && role !== "prof";

  const [suiviRes, printRes, lessonRes, placementRes] = await Promise.all([
    needsSuivi
      ? supabase.rpc("has_suivi_access")
      : Promise.resolve({ data: isAdmin, error: null }),
    needsPrint
      ? supabase.rpc("can_access_print")
      : Promise.resolve({ data: true, error: null }),
    needsLessonAccess
      ? supabase.rpc("get_my_lesson_access")
      : Promise.resolve({ data: null, error: null }),
    needsPlacementGate
      ? supabase.rpc("get_placement_module_enabled")
      : Promise.resolve({ data: true, error: null }),
  ]);

  let hasSuiviAccess = isAdmin || Boolean(suiviRes.data);
  if (!needsSuivi && role !== "admin") hasSuiviAccess = false;

  let canPrint = isAdmin;
  if (needsPrint) {
    if (!printRes.error) {
      canPrint = Boolean(printRes.data);
    } else {
      const { data: profile } = await supabase
        .from("profiles")
        .select("can_print")
        .eq("id", user.id)
        .maybeSingle();
      canPrint = Boolean(profile?.can_print);
    }
  }

  let canFreeAccess = isStaff;
  let canPartialFrench = isStaff;
  let canPartialMath = isStaff;

  if (needsLessonAccess) {
    const row = Array.isArray(lessonRes.data) ? lessonRes.data[0] : lessonRes.data;
    if (!lessonRes.error && row && typeof row === "object") {
      const r = row as {
        can_free_access?: boolean;
        can_partial_french?: boolean;
        can_partial_math?: boolean;
      };
      canFreeAccess = Boolean(r.can_free_access);
      canPartialFrench = Boolean(r.can_partial_french);
      canPartialMath = Boolean(r.can_partial_math);
    } else {
      // Fallback si RPC absente : colonnes profil (+ ancienne RPC free access)
      const [{ data: freeRes }, { data: profile }] = await Promise.all([
        supabase.rpc("can_access_free_lessons"),
        supabase
          .from("profiles")
          .select("can_free_access, can_partial_french, can_partial_math")
          .eq("id", user.id)
          .maybeSingle(),
      ]);
      canFreeAccess = Boolean(freeRes ?? profile?.can_free_access);
      const p = profile as {
        can_partial_french?: boolean;
        can_partial_math?: boolean;
      } | null;
      canPartialFrench = Boolean(p?.can_partial_french || canFreeAccess);
      canPartialMath = Boolean(p?.can_partial_math || canFreeAccess);
    }
  }

  const placementVisible =
    role === "admin" || role === "prof"
      ? true
      : placementRes.error
        ? true
        : placementRes.data !== false;

  return {
    authenticated: true,
    role,
    showSection: isAdmin || hasSuiviAccess,
    isAdmin,
    hasSuiviAccess,
    canEditContent: isAdmin,
    canPrint,
    canFreeAccess,
    canPartialFrench,
    canPartialMath,
    placementVisible,
  };
});

export function pedagogicFromNavAccess(access: NavAccess): PedagogicNavAccess {
  return {
    showSection: access.showSection,
    isAdmin: access.isAdmin,
    hasSuiviAccess: access.hasSuiviAccess,
    canEditContent: access.canEditContent,
    canPrint: access.canPrint,
    canFreeAccess: access.canFreeAccess,
    canPartialFrench: access.canPartialFrench,
    canPartialMath: access.canPartialMath,
  };
}

export function lessonFlagsFromNavAccess(access: NavAccess): LessonAccessFlags {
  return {
    canFreeAccess: access.canFreeAccess,
    canPartialFrench: access.canPartialFrench,
    canPartialMath: access.canPartialMath,
  };
}
