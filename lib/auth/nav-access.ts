import { cache } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type PedagogicNavAccess = {
  showSection: boolean;
  isAdmin: boolean;
  hasSuiviAccess: boolean;
  canEditContent: boolean;
  canPrint: boolean;
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

/**
 * Accès navigation (sidebar / nav) — une seule fois par requête RSC via `cache()`.
 * Évite le flash « options admin absentes » puis apparition après un round-trip client.
 */
export const getNavAccess = cache(async (): Promise<NavAccess> => {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return {
      authenticated: false,
      role: "other",
      showSection: true,
      isAdmin: false,
      hasSuiviAccess: false,
      canEditContent: true,
      canPrint: false,
      placementVisible: true,
    };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      authenticated: false,
      role: "other",
      showSection: OPEN_LOCALLY,
      isAdmin: false,
      hasSuiviAccess: false,
      canEditContent: OPEN_LOCALLY,
      canPrint: false,
      placementVisible: true,
    };
  }

  const { data: roleRaw } = await supabase.rpc("get_my_role");
  const role: NavAccess["role"] =
    roleRaw === "admin" || roleRaw === "prof" || roleRaw === "eleve"
      ? roleRaw
      : "other";
  const isAdmin = role === "admin";

  const needsSuivi = !isAdmin && role === "prof";
  const needsPrint = !isAdmin;
  const needsPlacementGate = role !== "admin" && role !== "prof";

  const [suiviRes, printRes, placementRes] = await Promise.all([
    needsSuivi
      ? supabase.rpc("has_suivi_access")
      : Promise.resolve({ data: isAdmin, error: null }),
    needsPrint
      ? supabase.rpc("can_access_print")
      : Promise.resolve({ data: true, error: null }),
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
  };
}
