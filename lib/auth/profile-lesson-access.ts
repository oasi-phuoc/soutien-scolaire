/**
 * Colonnes profil pour l'accès aux leçons.
 * Les colonnes granulaires n'existent qu'après migration
 * `20260811160000_granular_partial_lesson_access.sql`.
 */

export const PROFILE_LESSON_ACCESS_LEGACY_COLS =
  "can_free_access, can_partial_french, can_partial_math" as const;

export const PROFILE_LESSON_ACCESS_GRANULAR_COLS =
  "can_partial_french_grammar, can_partial_french_comm, can_partial_math_a3, can_partial_math_a8, can_partial_math_g3" as const;

export const PROFILE_LESSON_ACCESS_COLS =
  `${PROFILE_LESSON_ACCESS_LEGACY_COLS}, ${PROFILE_LESSON_ACCESS_GRANULAR_COLS}` as const;

export type ProfileLessonAccessRow = {
  can_free_access?: boolean;
  can_partial_french?: boolean;
  can_partial_french_grammar?: boolean;
  can_partial_french_comm?: boolean;
  can_partial_math?: boolean;
  can_partial_math_a3?: boolean;
  can_partial_math_a8?: boolean;
  can_partial_math_g3?: boolean;
};

/** True si l'erreur PostgREST indique une colonne absente (migration non appliquée). */
export function isMissingColumnError(error: { message?: string; code?: string } | null | undefined): boolean {
  if (!error?.message) return false;
  const msg = error.message.toLowerCase();
  return (
    msg.includes("does not exist") ||
    msg.includes("column") && msg.includes("schema cache") ||
    error.code === "42703" ||
    error.code === "PGRST204"
  );
}

export function mapProfileLessonAccess(row: ProfileLessonAccessRow | null | undefined): {
  can_free_access: boolean;
  can_partial_french_grammar: boolean;
  can_partial_french_comm: boolean;
  can_partial_math_a3: boolean;
  can_partial_math_a8: boolean;
  can_partial_math_g3: boolean;
} {
  const legacyFr = Boolean(row?.can_partial_french);
  const legacyMath = Boolean(row?.can_partial_math);
  const hasGranularFrench =
    typeof row?.can_partial_french_grammar === "boolean" ||
    typeof row?.can_partial_french_comm === "boolean";
  const hasGranularMath =
    typeof row?.can_partial_math_a3 === "boolean" ||
    typeof row?.can_partial_math_a8 === "boolean" ||
    typeof row?.can_partial_math_g3 === "boolean";

  return {
    can_free_access: Boolean(row?.can_free_access),
    can_partial_french_grammar: Boolean(
      row?.can_partial_french_grammar ?? (!hasGranularFrench ? legacyFr : false),
    ),
    can_partial_french_comm: Boolean(
      row?.can_partial_french_comm ?? (!hasGranularFrench ? legacyFr : false),
    ),
    can_partial_math_a3: Boolean(
      row?.can_partial_math_a3 ?? (!hasGranularMath ? legacyMath : false),
    ),
    can_partial_math_a8: Boolean(row?.can_partial_math_a8),
    can_partial_math_g3: Boolean(row?.can_partial_math_g3),
  };
}
