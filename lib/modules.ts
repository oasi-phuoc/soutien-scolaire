export type Track = "literacy" | "fle" | "math_elem";

/** Sous-thème des modules mathématiques (niveau primaire). */
export type MathAxis = "calculs" | "geometrie";

export type ModuleItem = {
  slug: string;
  track: Track;
  titleFr: string;
  summaryFr: string;
  estimatedMinutes: number;
  hasPdf: boolean;
  /** Slugs recommandés avant de commencer (affichage seulement) */
  recommendedAfterSlugs: string[];
  /** Obligatoire si `track === "math_elem"` */
  mathAxis?: MathAxis;
};

export const TRACK_LABELS: Record<Track, string> = {
  literacy: "Littératie",
  fle: "Français (thèmes)",
  math_elem: "Mathématiques",
};

export const MATH_AXIS_LABELS: Record<MathAxis, string> = {
  calculs: "Calculs",
  geometrie: "Géométrie",
};

export const MODULES: ModuleItem[] = [
  {
    slug: "lit-sons-lettres",
    track: "literacy",
    titleFr: "Les lettres et les sons",
    summaryFr: "Reconnaître les lettres et les premiers sons.",
    estimatedMinutes: 25,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "lit-syllabes",
    track: "literacy",
    titleFr: "Syllabes et lire mot par mot",
    summaryFr: "Assembler les sons pour lire des mots simples.",
    estimatedMinutes: 30,
    hasPdf: true,
    recommendedAfterSlugs: ["lit-sons-lettres"],
  },
  {
    slug: "lit-mots-outils-1",
    track: "literacy",
    titleFr: "Petits mots très fréquents (1)",
    summaryFr: "Les mots qu’on voit partout : le, la, un, est…",
    estimatedMinutes: 28,
    hasPdf: true,
    recommendedAfterSlugs: ["lit-syllabes"],
  },
  {
    slug: "lit-consignes",
    track: "literacy",
    titleFr: "Lire une consigne courte",
    summaryFr: "Comprendre ce qu’il faut faire dans un exercice.",
    estimatedMinutes: 22,
    hasPdf: true,
    recommendedAfterSlugs: ["lit-mots-outils-1"],
  },
  {
    slug: "lit-ecriture-lettres",
    track: "literacy",
    titleFr: "Écrire les lettres (minuscules / majuscules)",
    summaryFr: "Tracer les lettres avec des modèles simples.",
    estimatedMinutes: 35,
    hasPdf: true,
    recommendedAfterSlugs: ["lit-sons-lettres"],
  },
  {
    slug: "lit-phrases-courtes",
    track: "literacy",
    titleFr: "Lire des phrases très courtes",
    summaryFr: "Lire des phrases du quotidien avec des images.",
    estimatedMinutes: 26,
    hasPdf: true,
    recommendedAfterSlugs: ["lit-consignes"],
  },
  {
    slug: "fle-salutations",
    track: "fle",
    titleFr: "Salutations et se présenter",
    summaryFr: "Dire bonjour, merci, je m’appelle…",
    estimatedMinutes: 30,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "fle-ecole",
    track: "fle",
    titleFr: "À l’école (objets, salle, matériel)",
    summaryFr: "Nommer la classe, le cahier, la table…",
    estimatedMinutes: 32,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "fle-sante-corps",
    track: "fle",
    titleFr: "Santé et corps (base)",
    summaryFr: "Parties du corps et mots simples pour la santé.",
    estimatedMinutes: 28,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "fle-admin-papiers",
    track: "fle",
    titleFr: "Papiers et rendez-vous (vocabulaire simple)",
    summaryFr: "Mots utiles sans détail juridique.",
    estimatedMinutes: 25,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "fle-temps-calendrier",
    track: "fle",
    titleFr: "Temps et calendrier",
    summaryFr: "Jours, heures, avant / après.",
    estimatedMinutes: 35,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "fle-argent-prix",
    track: "fle",
    titleFr: "Argent, prix, payer (mots simples)",
    summaryFr: "Vocabulaire pour acheter et comprendre un prix.",
    estimatedMinutes: 30,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "math-0-20",
    track: "math_elem",
    mathAxis: "calculs",
    titleFr: "Nombres de 0 à 20",
    summaryFr: "Lire, écrire et compter avec des images.",
    estimatedMinutes: 35,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "math-jusqua-100",
    track: "math_elem",
    mathAxis: "calculs",
    titleFr: "Nombres jusqu’à 100",
    summaryFr: "Dizaines et unités, compter plus loin.",
    estimatedMinutes: 40,
    hasPdf: true,
    recommendedAfterSlugs: ["math-0-20"],
  },
  {
    slug: "math-add-sous-visuel",
    track: "math_elem",
    mathAxis: "calculs",
    titleFr: "Addition et soustraction (visuel)",
    summaryFr: "Ajouter et enlever avec des dessins.",
    estimatedMinutes: 38,
    hasPdf: true,
    recommendedAfterSlugs: ["math-0-20"],
  },
  {
    slug: "math-longueur-poids",
    track: "math_elem",
    mathAxis: "calculs",
    titleFr: "Longueur et poids (introduction)",
    summaryFr: "Comparer grand / petit, lourd / léger.",
    estimatedMinutes: 30,
    hasPdf: true,
    recommendedAfterSlugs: [],
  },
  {
    slug: "math-monnaie-prix",
    track: "math_elem",
    mathAxis: "calculs",
    titleFr: "Monnaie et prix (très guidé)",
    summaryFr: "Reconnaître des pièces et bills simplifiés.",
    estimatedMinutes: 36,
    hasPdf: true,
    recommendedAfterSlugs: ["math-0-20", "fle-argent-prix"],
  },
  {
    slug: "math-problemes-pictos",
    track: "math_elem",
    mathAxis: "calculs",
    titleFr: "Petits problèmes avec pictos",
    summaryFr: "Comprendre l’énoncé grâce aux images.",
    estimatedMinutes: 34,
    hasPdf: true,
    recommendedAfterSlugs: ["math-add-sous-visuel"],
  },
];

export function getModuleBySlug(slug: string): ModuleItem | undefined {
  return MODULES.find((m) => m.slug === slug);
}

export function getRecommendedTitles(slugs: string[]): string[] {
  return slugs
    .map((s) => getModuleBySlug(s)?.titleFr)
    .filter(Boolean) as string[];
}

/** Ligne liste (ex. bibliothèque) : axe maths + durée */
export function getModuleListSubtitle(mod: ModuleItem): string {
  const tail = `${mod.estimatedMinutes} min${mod.hasPdf ? " · PDF" : ""}`;
  if (mod.track === "math_elem" && mod.mathAxis) {
    return `${MATH_AXIS_LABELS[mod.mathAxis]} · ${tail}`;
  }
  return `${TRACK_LABELS[mod.track]} · ${tail}`;
}

/** Badge fiche module */
export function getModulePillLabel(mod: ModuleItem): string {
  if (mod.track === "math_elem" && mod.mathAxis) {
    return `${TRACK_LABELS.math_elem} · ${MATH_AXIS_LABELS[mod.mathAxis]}`;
  }
  return TRACK_LABELS[mod.track];
}
