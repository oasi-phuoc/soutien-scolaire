import type { FrenchSection, FrenchTheme } from "./types";

const Q = ["quiz"] as const;
const Qp = ["prerequisite", "quiz"] as const;

function t(
  section: FrenchSection,
  slug: string,
  code: string,
  title: string,
  summary: string,
  markers: ("prerequisite" | "quiz" | "cross_ref")[],
  extra?: Partial<FrenchTheme>,
): FrenchTheme {
  return {
    id: `${section}-${slug}`,
    slug,
    code,
    title,
    section,
    summary,
    markers,
    ...extra,
  };
}

/** Parcours complet français — aligné sur la structure v2 du document. */
export const FRENCH_THEMES: FrenchTheme[] = [
  // Pré-alphabétisation
  t("ALPHA", "pa1", "PA1", "Sens de l'écrit et du geste", "Littératie de base : page, ligne, geste, sens de lecture.", [...Q]),
  t("ALPHA", "pa2", "PA2", "Discrimination auditive et phonèmes", "Sons du français, syllabes, perception orale.", [...Q]),
  t("ALPHA", "pa3", "PA3", "L'alphabet latin", "Majuscules, minuscules, cursives ; graphophonème.", [...Q]),
  t("ALPHA", "pa4", "PA4", "Syllabes et premiers déchiffrages", "CV, mots bisyllabiques, progression syllabique.", [...Q]),
  t(
    "ALPHA",
    "pa5",
    "PA5",
    "Premiers mots écrits et mots fréquents",
    "50 mots outils, phrases simples, seuil vers A0.",
    [...Q],
    { milestoneExit: true, prerequisiteSlugs: ["pa4"] },
  ),
  // A0
  t("A0", "a0-1", "A0.1", "Salutations et politesse", "Présentations, tutoiement / vouvoiement.", [...Q]),
  t("A0", "a0-2", "A0.2", "Chiffres, nombres et âge (0–100)", "Avoir, nombres, identité orale.", [...Q]),
  t("A0", "a0-3", "A0.3", "Couleurs, formes et descriptions simples", "Être, adjectifs, accord des couleurs.", [...Q]),
  t("A0", "a0-4", "A0.4", "La famille", "Possessifs, négation, arbre généalogique.", [...Q]),
  t("A0", "a0-5", "A0.5", "Le corps et la santé de base", "Parties du corps, urgences, avoir mal.", [...Q]),
  t("A0", "a0-6", "A0.6", "Objets du quotidien et la classe", "Impératif, démonstratifs, consignes.", [...Q]),
  // A1
  t("A1", "a1-1", "A1.1", "Se présenter et présenter quelqu'un", "ER au présent, nationalité, documents.", [...Q]),
  t("A1", "a1-2", "A1.2", "La vie quotidienne et l'heure", "Pronominaux, routine, temps.", [...Q]),
  t("A1", "a1-3", "A1.3", "Le logement", "Il y a, prépositions de lieu.", [...Q]),
  t("A1", "a1-4", "A1.4", "La nourriture et les repas", "Articles partitifs, goûts, restaurant.", [...Q]),
  t("A1", "a1-5", "A1.5", "Les transports et les déplacements", "Futur proche, directions.", [...Q]),
  t("A1", "a1-6", "A1.6", "La météo et les saisons", "Il fait, saisons, prévisions.", [...Q]),
  t("A1", "a1-7", "A1.7", "Les achats et l'argent", "Prix, monnaie CH, combien.", [...Q]),
  // A2
  t("A2", "a2-1", "A2.1", "Raconter le passé (passé composé)", "Avoir / être, marqueurs temporels.", [...Q]),
  t("A2", "a2-2", "A2.2", "Décrire le passé (imparfait)", "Habitudes vs actions ponctuelles.", [...Q]),
  t("A2", "a2-3", "A2.3", "Santé et rendez-vous médicaux", "Devoir, falloir, impératif de politesse.", [...Q]),
  t("A2", "a2-4", "A2.4", "Le travail et la formation", "Métiers, contrat, CFC / stages.", [...Q]),
  t("A2", "a2-5", "A2.5", "Les loisirs et les sorties", "Pronoms toniques, comparatif.", [...Q]),
  t(
    "A2",
    "a2-6",
    "A2.6",
    "Les services publics suisses",
    "Commune, documents, courrier officiel (Valais / CH).",
    [...Q],
  ),
  // B1
  t("B1", "b1-1", "B1.1", "Exprimer ses opinions et ses sentiments", "Subjonctif intro, concessions.", [...Q]),
  t("B1", "b1-2", "B1.2", "Futur et projets", "Futur simple, conditionnel, hypothèses.", [...Q]),
  t(
    "B1",
    "b1-3",
    "B1.3",
    "Le monde du travail et la formation professionnelle",
    "CV, entretien, relatifs, gérondif.",
    [...Q],
  ),
  t("B1", "b1-4", "B1.4", "Santé et société", "LAMal, bien-être, discours indirect.", [...Q]),
  t("B1", "b1-5", "B1.5", "L'environnement et l'actualité locale", "Voix passive intro, démocratie CH.", [...Q]),
  t("B1", "b1-6", "B1.6", "Compréhension de documents authentiques", "Presse, e-mails, structure de texte.", [...Q]),
  // B2
  t("B2", "b2-1", "B2.1", "Argumentation et débat", "Subjonctif passé, conditionnel passé, nuance.", [...Q]),
  t("B2", "b2-2", "B2.2", "Textes littéraires et culturels", "Registres, style indirect au passé.", [...Q]),
  t("B2", "b2-3", "B2.3", "Écrits professionnels et formels", "Rapports, tournures nominales.", [...Q]),
  t("B2", "b2-4", "B2.4", "Économie et société", "PIB, politique CH, connecteurs de réfutation.", [...Q]),
  t("B2", "b2-5", "B2.5", "Préparation au TCF", "Format, entraînement CO/CE/PO/PE.", [...Q]),
];

export const ALPHA_TO_A0_THRESHOLD = {
  title: "Seuil de passage vers A0",
  criteria: [
    "Lire des mots bisyllabiques simples",
    "Reconnaître les 50 mots outils",
    "Copier une phrase courte",
    "Comprendre une consigne écrite courte avec image",
  ],
  markers: Qp,
} as const;

export function getFrenchThemeBySlug(slug: string): FrenchTheme | undefined {
  return FRENCH_THEMES.find((x) => x.slug === slug);
}

export function frenchThemesBySection(section: FrenchSection): FrenchTheme[] {
  if (section === "ALPHA") return FRENCH_THEMES.filter((x) => x.section === "ALPHA");
  return FRENCH_THEMES.filter((x) => x.section === section);
}
