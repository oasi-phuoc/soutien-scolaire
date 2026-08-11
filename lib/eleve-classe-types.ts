/** Filières proposées à la création / édition de compte élève (ordre d’affichage). */
export const ELEVE_CLASSE_TYPES = ["CSC", "CFR", "EPL", "CPR", "HSS"] as const;

export type EleveClasseType = (typeof ELEVE_CLASSE_TYPES)[number];

export const HSS_CLASSE_TYPE = "HSS" as const;

/** Libellé affiché sous le select quand HSS est choisi. */
export const HSS_CLASSE_HINT = "Hors du système scolaire";

export const ELEVE_CLASSE_TYPE_OPTIONS = ELEVE_CLASSE_TYPES.map((c) => ({
  value: c,
  label: c,
}));

export function isHssClasseType(type: string): boolean {
  return type === HSS_CLASSE_TYPE;
}

/** Filières utilisant un champ référence libre au lieu d’un numéro de classe. */
export function usesClasseReferenceField(type: string): boolean {
  return isHssClasseType(type);
}

export function buildEleveClasse(type: string, suffix: string): string | null {
  const t = type.trim();
  const s = suffix.trim();
  if (!t) return null;
  if (t === "ancien") return s ? `ancien ${s}` : "ancien";
  if (!s) return null;
  return `${t} ${s}`;
}

export function parseEleveClasse(classe: string | null): {
  classeType: string;
  classeSuffix: string;
} {
  if (!classe) return { classeType: "", classeSuffix: "" };
  const lower = classe.toLowerCase();
  if (lower.startsWith("ancien")) {
    return { classeType: "ancien", classeSuffix: classe.slice("ancien".length).trim() };
  }
  if (lower.startsWith("hss ")) {
    return { classeType: HSS_CLASSE_TYPE, classeSuffix: classe.slice(4).trim() };
  }
  const parts = classe.split(" ");
  return { classeType: parts[0] ?? "", classeSuffix: parts.slice(1).join(" ") };
}

export type EleveClasseDeleteFilter = EleveClasseType | "ancien";

export function matchesEleveClasseType(
  classe: string | null | undefined,
  types: EleveClasseDeleteFilter[] | "all",
): boolean {
  if (types === "all") return true;
  if (!classe) return false;
  const trimmed = classe.trim();
  const lower = trimmed.toLowerCase();
  return types.some((t) => {
    if (t === "ancien") {
      return lower.startsWith("ancien") || lower === "ancien élève";
    }
    return trimmed.startsWith(`${t} `) || trimmed === t;
  });
}
