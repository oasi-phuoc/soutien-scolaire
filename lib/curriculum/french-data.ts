import type { FrenchSection, FrenchTab, FrenchTheme } from "./types";

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

function lesson(
  section: FrenchSection,
  slug: string,
  code: string,
  title: string,
  summary: string,
  tab: Exclude<FrenchTab, "general">,
): FrenchTheme {
  return { id: `${section}-${slug}`, slug, code, title, section, summary, markers: [], tab };
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

  // ── A1 — Grammaire au quotidien A1 — Grammaire ────────────────────────────
  lesson("A1", "a1-gr-l01", "A1.L01", "Pronoms sujets et le verbe être", "Je suis, tu es, il/elle est… : bases de l'identification et de la présentation.", "grammaire"),
  lesson("A1", "a1-gr-l02", "A1.L02", "La négation et l'interrogation de base", "Ne…pas et est-ce que : construire une phrase négative et une question simple.", "grammaire"),
  lesson("A1", "a1-gr-l03", "A1.L03", "Le genre des noms et des adjectifs", "Masculin/féminin : noms courants et adjectifs de nationalité.", "grammaire"),
  lesson("A1", "a1-gr-l04", "A1.L04", "Les articles définis et indéfinis", "Le, la, l', les / un, une, des : choisir le bon article selon le contexte.", "grammaire"),
  lesson("A1", "a1-gr-l05", "A1.L05", "Le verbe avoir et les adjectifs possessifs", "J'ai, tu as… + mon, ma, mes / ton, ta, tes / son, sa, ses…", "grammaire"),
  lesson("A1", "a1-gr-l06", "A1.L06", "Être et avoir — révision et approfondissement", "Consolider les deux verbes essentiels dans des contextes variés.", "grammaire"),
  lesson("A1", "a1-gr-l10", "A1.L10", "L'interrogation avec les mots interrogatifs", "Qui, quoi, où, quand, comment, pourquoi, combien + est-ce que.", "grammaire"),
  lesson("A1", "a1-gr-l11", "A1.L11", "Les prépositions de lieu", "Dans, sur, sous, devant, derrière, à côté de, en face de…", "grammaire"),
  lesson("A1", "a1-gr-l14", "A1.L14", "Les articles partitifs et la quantité", "Du, de la, de l', des + un kilo de, beaucoup de, un peu de…", "grammaire"),
  lesson("A1", "a1-gr-l17", "A1.L17", "Il y a et les prépositions dans la maison", "Il y a / il n'y a pas de + localiser les meubles et les pièces.", "grammaire"),
  lesson("A1", "a1-gr-l18", "A1.L18", "Les adjectifs démonstratifs", "Ce, cet, cette, ces : désigner et montrer quelque chose.", "grammaire"),
  lesson("A1", "a1-gr-l19", "A1.L19", "Les adjectifs possessifs", "Mon/ma/mes, ton/ta/tes, son/sa/ses… : exprimer l'appartenance.", "grammaire"),
  lesson("A1", "a1-gr-l22", "A1.L22", "La fréquence", "Toujours, souvent, parfois, rarement, jamais : situer une action dans le temps.", "grammaire"),
  lesson("A1", "a1-gr-l23", "A1.L23", "Les adjectifs qualificatifs", "Genre, nombre et place de l'adjectif dans la phrase.", "grammaire"),
  lesson("A1", "a1-gr-l24", "A1.L24", "Le comparatif et le superlatif", "Plus…que, moins…que, aussi…que + le plus / le moins.", "grammaire"),
  lesson("A1", "a1-gr-l25", "A1.L25", "Savoir ou connaître ?", "Distinguer les deux verbes : savoir + infinitif vs connaître + nom.", "grammaire"),

  // ── A1 — Grammaire au quotidien A1 — Vocabulaire ─────────────────────────
  lesson("A1", "a1-voc-l13", "A1.L13", "Les moyens de transport", "En voiture, à vélo, en avion… + prépositions et verbes de transport.", "vocabulaire"),
  lesson("A1", "a1-voc-l16", "A1.L16", "La nourriture et le restaurant", "Aliments, repas de la journée, commander et payer au restaurant.", "vocabulaire"),
  lesson("A1", "a1-voc-l21", "A1.L21", "Les expressions de temps", "Aujourd'hui, demain, après-demain, la semaine prochaine…", "vocabulaire"),
  lesson("A1", "a1-voc-l26", "A1.L26", "Le corps humain", "Parties du corps + avoir mal à + article contracté (au/à la/aux).", "vocabulaire"),

  // ── A1 — Grammaire au quotidien A1 — Conjugaison ─────────────────────────
  lesson("A1", "a1-conj-l07", "A1.L07", "Les verbes en -er au présent", "Conjuguer les verbes du 1er groupe : parler, aimer, habiter, travailler…", "conjugaison"),
  lesson("A1", "a1-conj-l08", "A1.L08", "Les verbes aller et venir", "Conjuguer aller et venir au présent + prépositions de lieu (à, au, aux, en).", "conjugaison"),
  lesson("A1", "a1-conj-l09", "A1.L09", "Les verbes pronominaux", "Se lever, se coucher, s'appeler : les pronominaux du quotidien.", "conjugaison"),
  lesson("A1", "a1-conj-l12", "A1.L12", "Les verbes de mouvement", "Partir, arriver, entrer, sortir, monter, descendre au présent.", "conjugaison"),
  lesson("A1", "a1-conj-l15", "A1.L15", "Vouloir, pouvoir, devoir", "Les trois verbes modaux essentiels : conjugaison et emploi au présent.", "conjugaison"),
  lesson("A1", "a1-conj-l20", "A1.L20", "Le futur proche", "Aller + infinitif : parler de ce qui va arriver bientôt.", "conjugaison"),
  lesson("A1", "a1-conj-l27", "A1.L27", "Pronominaux réfléchis et réciproques", "Se laver, se regarder, se parler, s'écrire : formes et sens.", "conjugaison"),
  lesson("A1", "a1-conj-l28", "A1.L28", "Passé récent et présent continu", "Venir de + infinitif (ce qui vient de se passer) ; être en train de + infinitif.", "conjugaison"),
  lesson("A1", "a1-conj-l29", "A1.L29", "Passé composé avec avoir", "Participes passés réguliers (-é/-i) et irréguliers (fait, dit, pris…).", "conjugaison"),
  lesson("A1", "a1-conj-l30", "A1.L30", "Passé composé avec être", "17 verbes (aller, venir, partir…) + accord du participe passé avec le sujet.", "conjugaison"),
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
  return FRENCH_THEMES.filter((x) => x.section === section && !x.tab);
}
