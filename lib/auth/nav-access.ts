import { cache } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  emptyLessonAccessFlags,
  type LessonAccessFlags,
} from "@/lib/auth/lesson-access";

export type PedagogicNavAccess = {
  showSection: boolean;
  isAdmin: boolean;
  hasSuiviAccess: boolean;
  canEditContent: boolean;
  canPrint: boolean;
  /** Accès libre aux leçons (sans verrouillage séquentiel). */
  canFreeAccess: boolean;
  /** Accès partiel grammaire (jusqu'à G7.1) ou complet. */
  canPartialFrenchGrammar: boolean;
  /** Accès partiel communication (jusqu'à E9.1) ou complet. */
  canPartialFrenchComm: boolean;
  /** Accès partiel maths A3.1 ou complet. */
  canPartialMathA3: boolean;
  /** Accès partiel maths A8.1 ou complet. */
  canPartialMathA8: boolean;
  /** Accès partiel maths G3.1 (géométrie) ou complet. */
  canPartialMathG3: boolean;
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
    canPartialFrenchGrammar: true,
    canPartialFrenchComm: true,
    canPartialMathA3: true,
    canPartialMathA8: true,
    canPartialMathG3: true,
    placementVisible: true,
  };
}

type LessonAccessRow = {
  can_free_access?: boolean;
  can_partial_french?: boolean;
  can_partial_french_grammar?: boolean;
  can_partial_french_comm?: boolean;
  can_partial_math?: boolean;
  can_partial_math_a3?: boolean;
  can_partial_math_a8?: boolean;
  can_partial_math_g3?: boolean;
};

function flagsFromRow(row: LessonAccessRow | null | undefined, isStaff: boolean): {
  canFreeAccess: boolean;
  canPartialFrenchGrammar: boolean;
  canPartialFrenchComm: boolean;
  canPartialMathA3: boolean;
  canPartialMathA8: boolean;
  canPartialMathG3: boolean;
} {
  if (isStaff) {
    return {
      canFreeAccess: true,
      canPartialFrenchGrammar: true,
      canPartialFrenchComm: true,
      canPartialMathA3: true,
      canPartialMathA8: true,
      canPartialMathG3: true,
    };
  }
  if (!row) {
    return {
      canFreeAccess: false,
      canPartialFrenchGrammar: false,
      canPartialFrenchComm: false,
      canPartialMathA3: false,
      canPartialMathA8: false,
      canPartialMathG3: false,
    };
  }

  const canFreeAccess = Boolean(row.can_free_access);
  const legacyFrench = Boolean(row.can_partial_french);
  const legacyMath = Boolean(row.can_partial_math);
  const hasGranularFrench =
    typeof row.can_partial_french_grammar === "boolean" ||
    typeof row.can_partial_french_comm === "boolean";
  const hasGranularMath =
    typeof row.can_partial_math_a3 === "boolean" ||
    typeof row.can_partial_math_a8 === "boolean" ||
    typeof row.can_partial_math_g3 === "boolean";

  return {
    canFreeAccess,
    canPartialFrenchGrammar: Boolean(
      canFreeAccess ||
        row.can_partial_french_grammar ||
        (!hasGranularFrench && legacyFrench),
    ),
    canPartialFrenchComm: Boolean(
      canFreeAccess ||
        row.can_partial_french_comm ||
        (!hasGranularFrench && legacyFrench),
    ),
    canPartialMathA3: Boolean(
      canFreeAccess || row.can_partial_math_a3 || (!hasGranularMath && legacyMath),
    ),
    canPartialMathA8: Boolean(canFreeAccess || row.can_partial_math_a8),
    canPartialMathG3: Boolean(canFreeAccess || row.can_partial_math_g3),
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
      canPartialFrenchGrammar: OPEN_LOCALLY,
      canPartialFrenchComm: OPEN_LOCALLY,
      canPartialMathA3: OPEN_LOCALLY,
      canPartialMathA8: OPEN_LOCALLY,
      canPartialMathG3: OPEN_LOCALLY,
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

  let lessonFlags = flagsFromRow(null, isStaff);

  if (needsLessonAccess) {
    const row = Array.isArray(lessonRes.data) ? lessonRes.data[0] : lessonRes.data;
    if (!lessonRes.error && row && typeof row === "object") {
      lessonFlags = flagsFromRow(row as LessonAccessRow, false);
    } else {
      // Fallback si RPC absente : colonnes profil (+ ancienne RPC free access)
      const [{ data: freeRes }, { data: profile }] = await Promise.all([
        supabase.rpc("can_access_free_lessons"),
        supabase
          .from("profiles")
          .select(
            "can_free_access, can_partial_french, can_partial_french_grammar, can_partial_french_comm, can_partial_math, can_partial_math_a3, can_partial_math_a8, can_partial_math_g3",
          )
          .eq("id", user.id)
          .maybeSingle(),
      ]);
      const p = (profile ?? {}) as LessonAccessRow;
      lessonFlags = flagsFromRow(
        {
          ...p,
          can_free_access: Boolean(freeRes ?? p.can_free_access),
        },
        false,
      );
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
    ...lessonFlags,
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
    canPartialFrenchGrammar: access.canPartialFrenchGrammar,
    canPartialFrenchComm: access.canPartialFrenchComm,
    canPartialMathA3: access.canPartialMathA3,
    canPartialMathA8: access.canPartialMathA8,
    canPartialMathG3: access.canPartialMathG3,
  };
}

export function lessonFlagsFromNavAccess(access: NavAccess): LessonAccessFlags {
  return emptyLessonAccessFlags({
    canFreeAccess: access.canFreeAccess,
    canPartialFrenchGrammar: access.canPartialFrenchGrammar,
    canPartialFrenchComm: access.canPartialFrenchComm,
    canPartialMathA3: access.canPartialMathA3,
    canPartialMathA8: access.canPartialMathA8,
    canPartialMathG3: access.canPartialMathG3,
  });
}
