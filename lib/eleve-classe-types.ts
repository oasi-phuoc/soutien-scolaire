/** Filières proposées à la création / édition de compte élève (ordre d’affichage). */
export const ELEVE_CLASSE_TYPES = ["CSC", "CFR", "EPL", "CPR", "CAF", "CAP"] as const;

export type EleveClasseType = (typeof ELEVE_CLASSE_TYPES)[number];

export const ELEVE_CLASSE_TYPE_OPTIONS = ELEVE_CLASSE_TYPES.map((c) => ({
  value: c,
  label: c,
}));
