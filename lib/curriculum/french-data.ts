import type { FrenchSection, FrenchTab, FrenchTheme } from "./types";

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

/** Parcours complet français (vocabulaire, grammaire, conjugaison). */
const BASE_FRENCH_THEMES: FrenchTheme[] = [
  // ── G1 — Chapitre 1 — Unités 1–10 ──
  lesson("A1", "a1-gr-l01", "G1.1", "Le verbe être et les pronoms sujets", "Je, tu, il, elle, on, nous, vous, ils, elles et le verbe être au présent.", "grammaire"),
  lesson("A1", "a1-gr-avoir", "G1.2", "Le verbe avoir", "Âge, possession, famille et expressions de sensation avec avoir au présent.", "grammaire"),
  lesson("A1", "a1-gr-cest-il-est", "G1.3", "Il y a… C'est… Il/Elle est…", "Présence (il y a), identification (c'est) et profession (il/elle est).", "grammaire"),
  lesson("A1", "a1-gr-verbes-er", "G1.4", "Les verbes en -er : cas général", "Présent des verbes en -er : radical + e, es, e, ons, ez, ent.", "grammaire"),
  lesson("A1", "a1-gr-pronominaux", "G1.5", "Les verbes pronominaux", "Verbes réfléchis et réciproques : me/te/se/nous/vous + verbe.", "grammaire"),
  lesson("A1", "a1-gr-modaux", "G1.6", "Les verbes pouvoir, vouloir, devoir et falloir", "Désir, capacité, obligation et nécessité avec pouvoir, vouloir, devoir, falloir.", "grammaire"),
  lesson("A1", "a1-gr-verbes-er-particuliers", "G1.7", "Les verbes en -er : cas particuliers", "Aller ; -ayer/-oyer/-uyer ; -ger/-cer ; -eler/-eter/-érer.", "grammaire"),
  lesson("A1", "a1-gr-verbes-ir", "G1.8", "Les verbes en -ir", "Quatre modèles : finir, ouvrir, partir/dormir/servir, venir/tenir.", "grammaire"),
  lesson("A1", "a1-gr-verbes-re-oir", "G1.9", "Les verbes en -re et en -oir", "Modèles lire, faire, prendre, savoir/connaître, voir, peindre…", "grammaire"),
  lesson("A1", "a1-gr-present-progressif", "G1.10", "Le présent progressif", "Être en train de + infinitif : action en cours au moment où l'on parle.", "grammaire"),
  // ── G2 — Chapitre 2 — Unités 11–20 ──
  lesson("A1", "a1-gr-genre-personnes", "G2.1", "Le masculin et le féminin des noms (personnes)", "Formation du féminin des noms de personnes et nationalités.", "grammaire"),
  lesson("A1", "a1-gr-genre-choses", "G2.2", "Le masculin et le féminin des noms (choses)", "Repères de genre pour les noms de choses : terminaisons et déterminants.", "grammaire"),
  lesson("A1", "a1-gr-pluriel-noms", "G2.3", "Le singulier et le pluriel des noms", "Pluriel en -s et cas particuliers (-aux, -eaux, -eux, œil/yeux).", "grammaire"),
  lesson("A1", "a1-gr-noms-composes", "G2.4", "Les noms composés", "Formation et accord au pluriel des noms composés.", "grammaire"),
  lesson("A1", "a1-gr-genre-adjectifs", "G2.5", "Le masculin et le féminin des adjectifs", "Accord de l'adjectif qualificatif au féminin : cas général.", "grammaire"),
  lesson("A1", "a1-gr-feminin-adjectifs-particuliers", "G2.6", "Le féminin des adjectifs : cas particuliers", "Terminaisons particulières et adjectifs irréguliers au féminin.", "grammaire"),
  lesson("A1", "a1-gr-pluriel-adjectifs", "G2.7", "Le singulier et le pluriel des adjectifs", "Pluriel des adjectifs : -s, -aux, -eaux et mélange de genres.", "grammaire"),
  lesson("A1", "a1-gr-adjectifs-accords-particuliers", "G2.8", "L'adjectif : accords particuliers", "Couleurs, demi et adjectifs numéraux (vingt, cent…).", "grammaire"),
  lesson("A1", "a1-gr-place-adjectif", "G2.9", "La place de l'adjectif : cas général", "Avant ou après le nom ; bel, vieil, nouvel.", "grammaire"),
  lesson("A1", "a1-gr-place-adjectif-particuliers", "G2.10", "La place de l'adjectif : cas particuliers", "Sens selon la place et ordre de plusieurs adjectifs.", "grammaire"),
  // ── G3 — Chapitre 3 — Unités 21–30 ──
  lesson("A1", "a1-gr-l04", "G3.1", "Les articles définis et indéfinis", "Le, la, l', les / un, une, des : choisir le bon article selon le contexte.", "grammaire"),
  lesson("A1", "a1-gr-articles-contractes", "G3.2", "Les articles contractés", "À/de + le/les → au, aux, du, des ; la et l' ne se contractent pas.", "grammaire"),
  lesson("A1", "a1-gr-article-partitif", "G3.3", "L'article partitif", "Du, de la, de l' : quantité indéterminée ; négation et exception avec être.", "grammaire"),
  lesson("A1", "a1-gr-expression-quantite", "G3.4", "L'expression de la quantité : un peu, beaucoup, assez, trop", "Quantités globales et précises ; de/d' sans article après.", "grammaire"),
  lesson("A1", "a1-gr-l18", "G3.5", "Les adjectifs démonstratifs", "Ce, cet, cette, ces : désigner et montrer quelque chose.", "grammaire"),
  lesson("A1", "a1-gr-l19", "G3.6", "Les adjectifs possessifs", "Mon/ma/mes, ton/ta/tes, son/sa/ses… : exprimer l'appartenance.", "grammaire"),
  lesson("A1", "a1-gr-adjectifs-indefinis", "G3.7", "Les adjectifs indéfinis", "Tout, chaque, aucun, plusieurs, quelques, même, autre.", "grammaire"),
  lesson("A1", "a1-gr-question-totale", "G3.8", "La question fermée", "Question fermée oui/non : intonation montante et est-ce que.", "grammaire"),
  lesson("A1", "a1-gr-question-ouverte-qui", "G3.9", "La question ouverte : qui, qu'est-ce que/quoi, quel/lequel", "Question ouverte : qui, quoi, quel et lequel.", "grammaire"),
  lesson("A1", "a1-gr-question-ouverte-ou", "G3.10", "La question ouverte : où, quand, comment, combien, pourquoi", "Question ouverte : lieu, moment, manière, quantité, cause.", "grammaire"),
  // ── G4 — Chapitre 4 — Unités 31–65 ──
  lesson("A1", "a1-gr-negation-ne-pas", "G4.1", "La négation ne… pas, ne… pas de/d'", "Ne… pas et remplacement de un/une/des par de/d'.", "grammaire"),
  lesson("A1", "a1-gr-autres-negations", "G4.2", "Les autres négations", "Jamais, plus, pas encore, personne, rien, ne… que, ni… ni.", "grammaire"),
  lesson("A1", "a1-gr-question-inversion", "G4.3", "La question avec inversion", "Inversion sujet-verbe : registre formel, -t-, Puis-je.", "grammaire"),
  lesson("A1", "a1-gr-l03", "G4.4", "Le genre des noms et des adjectifs", "Masculin/féminin : noms courants et adjectifs de nationalité.", "grammaire"),
  lesson("A1", "a1-gr-phrases", "G4.5", "Les phrases", "Structure Sujet + Verbe + Complément : reconnaître et construire une phrase simple.", "grammaire"),
  lesson("A1", "a1-gr-l02", "G4.6", "La négation", "Ne…pas : construire une phrase négative avec être et avoir.", "grammaire"),
  lesson("A1", "a1-gr-interro", "G4.7", "L'interrogation de base", "Est-ce que et l'intonation montante : construire une question simple.", "grammaire"),
  lesson("A1", "a1-gr-l10", "G4.8", "Les questions ouvertes", "Qui, quoi, où, quand, comment, pourquoi, combien + est-ce que.", "grammaire"),
  lesson("A1", "a1-gr-l11", "G4.9", "Les prépositions de lieu", "Dans, sur, sous, devant, derrière, à côté de, en face de…", "grammaire"),
  lesson("A1", "a1-gr-l14", "G4.10", "Les adjectifs partitifs", "Du, de la, de l', des + un kilo de, beaucoup de, un peu de…", "grammaire"),
  lesson("A1", "a1-gr-l23", "G4.11", "Les adjectifs qualificatifs", "Genre, nombre et place de l'adjectif dans la phrase.", "grammaire"),
  lesson("A2", "a2-gr-l07", "G4.12", "Les questions fermées", "Intonation montante, est-ce que, inversion sujet-verbe (registre formel/informel).", "grammaire"),
  lesson("A2", "a2-gr-l09", "G4.13", "Répondre aux questions fermées", "Oui, non, si ; moi aussi / moi non plus / moi si : nuancer les réponses.", "grammaire"),
  lesson("A1", "a1-gr-expressions-temps", "G4.14", "Les expressions de temps", "Aujourd'hui, demain, après-demain, la semaine prochaine…", "grammaire"),
  lesson("A1", "a1-gr-l22", "G4.15", "Les adverbes de fréquence", "Toujours, souvent, parfois, rarement, jamais : situer une action dans le temps.", "grammaire"),
  lesson("A2", "a2-gr-l39", "G4.16", "Le comparatif", "Comparer des adjectifs, adverbes, verbes et noms avec plus, aussi, autant ou moins.", "grammaire"),
  lesson("A2", "a2-gr-bon-bien-meilleur-mieux", "G4.17", "Bon ou bien, meilleur ou mieux ?", "Adjectif, adverbe et formes irrégulières du comparatif et du superlatif.", "grammaire"),
  lesson("A2", "a2-gr-superlatif", "G4.18", "Le superlatif", "Le, la ou les plus et moins ; le meilleur, le mieux et le pire.", "grammaire"),
  lesson("A2", "a2-gr-l42", "G4.19", "La négation (2/2)", "Ne…jamais, ne…rien, ne…personne ; rien et personne comme sujets.", "grammaire"),
  lesson("A2", "a2-gr-l19", "G4.20", "Les pronoms relatifs qui et que", "Qui = sujet du verbe relatif ; que = objet du verbe relatif ; relative avec où.", "grammaire"),
  lesson("A2", "a2-gr-l35", "G4.21", "Les pronoms COD et COI", "Me/te/le/la/les/lui/leur : place, négation, construction avec deux verbes.", "grammaire"),
  lesson("A2", "a2-gr-l36", "G4.22", "Les pronoms Y et EN", "Y = à + lieu/chose ; EN = de + nom / partitif : place et emploi.", "grammaire"),
  lesson("A2", "gr-marqueurs-temps-complet", "G4.23", "Les marqueurs de temps", "Présent, passé, futur : depuis, il y a, pendant, dans, pour, hier, demain, la veille…", "grammaire"),
  lesson("A2", "a2-gr-l52", "G4.24", "Les relations logiques — Cause et conséquence", "Parce que, car, comme, à cause de, grâce à, donc, c'est pourquoi et par conséquent.", "grammaire"),
  lesson("A2", "a2-gr-adverbes-types", "G4.25", "Les adverbes", "Adverbes de lieu, de temps, de manière et l'adverbe tout.", "grammaire"),
  lesson("A1", "a1-gr-verbes-double-auxiliaire", "G4.26", "Les verbes à double auxiliaire", "Sortir, rentrer, entrer, passer, monter, descendre et retourner : être ou avoir.", "grammaire"),
  lesson("A1", "a1-gr-pronominaux-passe-compose", "G4.27", "Les verbes pronominaux au passé composé", "Auxiliaire être, accord avec le sujet réel et négation.", "grammaire"),
  lesson("A2", "a2-gr-passe-compose-ou-imparfait", "G4.28", "Passé composé ou imparfait ?", "Événement ponctuel, habitude, description, contexte et simultanéité.", "grammaire"),
  lesson("A2", "a2-gr-imparfait-irreguliers", "G4.29", "Les verbes irréguliers à l'imparfait", "Être et les bases particulières des verbes fréquents.", "grammaire"),
  lesson("A2", "a2-gr-futur-irreguliers", "G4.30", "Les verbes irréguliers au futur simple", "Les quinze bases irrégulières essentielles.", "grammaire"),
  lesson("A2", "a2-gr-futur-simple-ou-proche", "G4.31", "Futur simple ou futur proche ?", "Choisir selon la proximité, l'intention, la promesse ou la prévision.", "grammaire"),
  lesson("A2", "a2-gr-hypothese-futur", "G4.32", "L'hypothèse sur le futur", "Si + présent, puis futur simple ; condition, conséquence et élision avec il.", "grammaire"),
  lesson("A2", "a2-gr-conditionnel", "G4.33", "Le conditionnel", "Conditionnel présent et passé ; phrases hypothétiques avec si.", "grammaire"),
  lesson("A2", "a2-gr-gerondif", "G4.34", "Le gérondif", "En + participe présent : simultanéité, manière, condition et cause.", "grammaire"),
  lesson("A2", "a2-gr-subjonctif", "G4.35", "Le subjonctif", "Formation, irréguliers et emplois : vouloir que, il faut que, bien que…", "grammaire"),

  // ── C1 — Verbes essentiels ───────────────────────────────────────────────────
  lesson("A1", "a1-conj-l00", "C1.1", "Les pronoms personnels sujets", "Je, tu, il, elle, on, nous, vous, ils, elles — choisir et utiliser le bon pronom.", "conjugaison"),
  lesson("A1", "a1-conj-l01", "C1.2", "Les verbes être et avoir", "Conjugaison complète de être et avoir au présent + expressions courantes.", "conjugaison"),
  lesson("A1", "a1-conj-l07", "C1.3", "Les verbes en -er au présent", "Conjuguer les verbes du 1er groupe : parler, aimer, habiter, travailler…", "conjugaison"),
  lesson("A1", "a1-conj-l08", "C1.4", "Les verbes de mouvement", "Aller, venir, partir, arriver, entrer, sortir, monter, descendre, marcher, courir au présent.", "conjugaison"),
  lesson("A1", "a1-conj-l09", "C1.5", "Les verbes pronominaux", "Se lever, se coucher, s'appeler : les pronominaux du quotidien.", "conjugaison"),
  lesson("A1", "a1-conj-l15", "C1.6", "Les verbes modaux", "Les verbes modaux : conjugaison et emploi au présent.", "conjugaison"),
  lesson("A2", "a2-conj-irreguliers", "C1.7", "Verbes irréguliers", "Faire, croire, boire, naître, savoir, connaître, prendre au présent.", "conjugaison"),
  lesson("A2", "a2-conj-l02", "C1.8", "Les verbes en -ir", "Deuxième et troisième groupes : finir et choisir, ou partir, venir et ouvrir.", "conjugaison"),

  // ── C2 — Le passé ────────────────────────────────────────────────────────────
  lesson("A1", "a1-conj-l28", "C2.1", "Passé récent et présent continu", "Venir de + infinitif ; être en train de + infinitif.", "conjugaison"),
  lesson("A1", "a1-conj-l29", "C2.2", "Passé composé avec avoir", "Participes passés réguliers (-é/-i) et irréguliers (fait, dit, pris…).", "conjugaison"),
  lesson("A1", "a1-conj-l30", "C2.3", "Passé composé avec être", "17 verbes (aller, venir, partir…) + accord du participe passé avec le sujet.", "conjugaison"),
  lesson("A1", "negation-passe-compose", "C2.4", "Négation au passé composé", "Ne…pas, jamais, plus, rien : encadrer l'auxiliaire et placer les mots négatifs.", "conjugaison"),
  lesson("A2", "a2-conj-l07", "C2.5", "Les verbes réguliers à l'imparfait", "Base de nous au présent et terminaisons -ais, -ais, -ait, -ions, -iez, -aient.", "conjugaison"),

  // ── C3 — Le futur ────────────────────────────────────────────────────────────
  lesson("A1", "a1-conj-l20", "C3.1", "Le futur proche", "Aller + infinitif : parler de ce qui va arriver bientôt.", "conjugaison"),
  lesson("A2", "a2-conj-l08", "C3.2", "Les verbes réguliers au futur simple", "Infinitif et terminaisons ; particularités des verbes en -re, -eler et -eter.", "conjugaison"),

  // ── C4 — Les autres temps ────────────────────────────────────────────────────
  lesson("A2", "a2-conj-l04", "C4.1", "Le conditionnel de politesse", "Vouloir, pouvoir, aimer, souhaiter, devoir, falloir au conditionnel : formes et emplois.", "conjugaison"),
  lesson("A2", "a2-conj-l05", "C4.2", "L'impératif", "Conjugaison tu/nous/vous ; irréguliers être/avoir/aller ; impératif avec pronoms COD/COI.", "conjugaison"),

  // ── V1 — L'identité ──────────────────────────────────────────────────────────
  lesson("V1", "v1-nationalites",         "V1.1", "Les nationalités",       "Nationalités masculin/féminin, pays d'Europe et du monde.",         "vocabulaire"),
  lesson("V1", "v1-professions",          "V1.2", "Les professions",         "Métiers courants, masculin/féminin des professions.",               "vocabulaire"),
  lesson("V1", "v1-famille",              "V1.3", "La famille",              "Membres de la famille, mari, femme, bébé.",                         "vocabulaire"),
  lesson("V1", "v1-etat-civil",           "V1.4", "L'état civil",            "Situations familiales et personnelles.",                            "vocabulaire"),
  lesson("V1", "v1-description-physique", "V1.5", "La description physique", "Adjectifs pour décrire l'apparence d'une personne.",               "vocabulaire"),
  lesson("V1", "v1-description-morale",   "V1.6", "La description morale",   "Adjectifs pour décrire le caractère d'une personne.",              "vocabulaire"),

  // ── V2 — Le temps ────────────────────────────────────────────────────────────
  lesson("V2", "v2-jours-mois-dates",     "V2.1", "Jours, Mois et Dates",   "Jours de la semaine, mois de l'année, exprimer une date.",          "vocabulaire"),
  lesson("V2", "v2-heure",                "V2.2", "L'heure",                 "Exprimer l'heure, unités de temps, moments de la journée.",         "vocabulaire"),
  lesson("V2", "v2-saisons",              "V2.3", "Les saisons",             "Les quatre saisons, périodes et durées.",                           "vocabulaire"),
  lesson("V2", "v2-meteo",                "V2.4", "La météo",                "Temps qu'il fait, phénomènes météorologiques.",                     "vocabulaire"),

  // ── V3 — Les loisirs ─────────────────────────────────────────────────────────
  lesson("V3", "v3-sport",                "V3.1", "Le sport",                "Sports individuels et collectifs.",                                 "vocabulaire"),

  // ── V4 — Le logement ─────────────────────────────────────────────────────────
  lesson("V4", "v4-type-logement",        "V4.1", "Les types de logement",  "Différents types d'habitation.",                                    "vocabulaire"),
  lesson("V4", "v4-pieces-maison",        "V4.2", "Les pièces de la maison", "Pièces et espaces d'un logement.",                                 "vocabulaire"),
  lesson("V4", "v4-equipements",          "V4.3", "Les meubles",             "Meubles du quotidien.",                                             "vocabulaire"),
  lesson("V4", "v4-appareils-electromenagers", "V4.4", "Les appareils électroménagers", "Appareils utilisés dans la maison.",                       "vocabulaire"),
  lesson("V4", "v4-pannes",               "V4.5", "Les pannes",              "Problèmes et réparations dans le logement.",                       "vocabulaire"),

  // ── V5 — L'école ─────────────────────────────────────────────────────────────
  lesson("V5", "v5-matieres",             "V5.1", "Les matières scolaires",  "Disciplines scolaires.",                                           "vocabulaire"),
  lesson("V5", "v5-materiel-scolaire",    "V5.2", "Le matériel scolaire",    "Fournitures et outils scolaires.",                                 "vocabulaire"),
  lesson("V5", "v5-structure-ecole",      "V5.3", "La structure de l'école", "Espaces et organisation de l'école.",                              "vocabulaire"),

  // ── V6 — Les vêtements ───────────────────────────────────────────────────────
  lesson("V6", "v6-vetements",            "V6.1", "Les vêtements",           "Vêtements du quotidien.",                                          "vocabulaire"),
  lesson("V6", "v6-accessoires",          "V6.2", "Les accessoires",         "Accessoires de mode.",                                             "vocabulaire"),
  lesson("V6", "v6-couleurs",             "V6.3", "Les couleurs",            "Couleurs et nuances.",                                             "vocabulaire"),
  lesson("V6", "v6-matieres",             "V6.4", "Les matières",            "Matériaux et tissus.",                                             "vocabulaire"),

  // ── V7 — La nourriture ───────────────────────────────────────────────────────
  lesson("V7", "v7-fruits",               "V7.1", "Les fruits",              "Fruits courants.",                                                 "vocabulaire"),
  lesson("V7", "v7-legumes",              "V7.2", "Les légumes",             "Légumes courants.",                                                "vocabulaire"),
  lesson("V7", "v7-cuisine",              "V7.3", "La cuisine",              "Verbes et actions en cuisine.",                                    "vocabulaire"),
  lesson("V7", "v7-recettes",             "V7.4", "Les recettes",            "Ingrédients de base et ustensiles.",                               "vocabulaire"),
  lesson("V7", "v7-quantites",            "V7.5", "Les quantités",           "Unités de mesure et contenants.",                                  "vocabulaire"),

  // ── V8 — La santé ────────────────────────────────────────────────────────────
  lesson("V8", "v8-corps",                "V8.1", "Le corps",                "Parties du corps humain.",                                         "vocabulaire"),
  lesson("V8", "v8-maladies",             "V8.2", "Les maladies",            "Maladies et symptômes courants.",                                  "vocabulaire"),
  lesson("V8", "v8-medecins",             "V8.3", "Les médecins",            "Professions de santé.",                                            "vocabulaire"),
  lesson("V8", "v8-pharmacie",            "V8.4", "La pharmacie",            "Médicaments et produits pharmaceutiques.",                         "vocabulaire"),

  // ── V9 — Les lieux ───────────────────────────────────────────────────────────
  lesson("V9", "v9-ville",                "V9.1", "La ville",                "Lieux et bâtiments en ville.",                                     "vocabulaire"),
  lesson("V9", "v9-transport",            "V9.2", "Le transport",            "Moyens de transport urbains et longue distance.",                  "vocabulaire"),
  lesson("V9", "v9-direction",            "V9.3", "La direction",            "S'orienter et indiquer un chemin.",                                "vocabulaire"),
  lesson("V9", "v9-espace-culturel",      "V9.4", "L'espace culturel",       "Lieux et acteurs de la culture.",                                  "vocabulaire"),
  lesson("V9", "v9-paysage",              "V9.5", "Le paysage",              "Éléments naturels du paysage.",                                    "vocabulaire"),

  // ── V10 — Services, voyages et animaux ──────────────────────────────────────────────
  lesson("V10", "v7-restaurant",          "V10.1", "Le restaurant",          "Table et service au restaurant.",                                  "vocabulaire"),
  lesson("V10", "v7-boulangerie",         "V10.2", "La boulangerie",         "Produits de boulangerie et pâtisserie.",                           "vocabulaire"),
  lesson("V10", "v9-train",               "V10.3", "La gare",                "Vocabulaire de la gare et du train.",                              "vocabulaire"),
  lesson("V10", "v9-aeroport",            "V10.4", "L'aéroport",             "Vocabulaire de l'aéroport et du voyage en avion.",                 "vocabulaire"),
  lesson("V10", "v9-hotel",               "V10.5", "L'hôtel",                "Séjour à l'hôtel et hébergement.",                                 "vocabulaire"),
  lesson("V10", "v10-animaux",            "V10.6", "Les animaux",            "Animaux domestiques, de la ferme, sauvages et marins.",            "vocabulaire"),

];

/**
 * Codes pédagogiques :
 * - G1–G4 = Grammaire (chapitres) ; chaque leçon = une unité (G1.1 = Unité 1, G2.1 = Unité 11… ; G4 jusqu'à Unité 53)
 * - C1–C4 = Conjugaison
 * Pas d'annexes : tout le contenu existant est placé dans une unité.
 */
const REORGANIZED_GRAMMAR_CODES: Record<string, string> = {
  // G1 — Chapitre 1 (unités 1–10)
  "a1-gr-l01": "G1.1",
  "a1-gr-avoir": "G1.2",
  "a1-gr-cest-il-est": "G1.3",
  "a1-gr-verbes-er": "G1.4",
  "a1-gr-pronominaux": "G1.5",
  "a1-gr-modaux": "G1.6",
  "a1-gr-verbes-er-particuliers": "G1.7",
  "a1-gr-verbes-ir": "G1.8",
  "a1-gr-verbes-re-oir": "G1.9",
  "a1-gr-present-progressif": "G1.10",
  // G2 — Chapitre 2 (unités 11–20)
  "a1-gr-genre-personnes": "G2.1",
  "a1-gr-genre-choses": "G2.2",
  "a1-gr-pluriel-noms": "G2.3",
  "a1-gr-noms-composes": "G2.4",
  "a1-gr-genre-adjectifs": "G2.5",
  "a1-gr-feminin-adjectifs-particuliers": "G2.6",
  "a1-gr-pluriel-adjectifs": "G2.7",
  "a1-gr-adjectifs-accords-particuliers": "G2.8",
  "a1-gr-place-adjectif": "G2.9",
  "a1-gr-place-adjectif-particuliers": "G2.10",
  // G3 — Chapitre 3 (unités 21–30)
  "a1-gr-l04": "G3.1",
  "a1-gr-articles-contractes": "G3.2",
  "a1-gr-article-partitif": "G3.3",
  "a1-gr-expression-quantite": "G3.4",
  "a1-gr-l18": "G3.5",
  "a1-gr-l19": "G3.6",
  "a1-gr-adjectifs-indefinis": "G3.7",
  "a1-gr-question-totale": "G3.8",
  "a1-gr-question-ouverte-qui": "G3.9",
  "a1-gr-question-ouverte-ou": "G3.10",
  // G4 — Chapitre 4 (unités 31–65)
  "a1-gr-negation-ne-pas": "G4.1",
  "a1-gr-autres-negations": "G4.2",
  "a1-gr-question-inversion": "G4.3",
  "a1-gr-l03": "G4.4",
  "a1-gr-phrases": "G4.5",
  "a1-gr-l02": "G4.6",
  "a1-gr-interro": "G4.7",
  "a1-gr-l10": "G4.8",
  "a1-gr-l11": "G4.9",
  "a1-gr-l14": "G4.10",
  "a1-gr-l23": "G4.11",
  "a2-gr-l07": "G4.12",
  "a2-gr-l09": "G4.13",
  "a1-gr-expressions-temps": "G4.14",
  "a1-gr-l22": "G4.15",
  "a2-gr-l39": "G4.16",
  "a2-gr-bon-bien-meilleur-mieux": "G4.17",
  "a2-gr-superlatif": "G4.18",
  "a2-gr-l42": "G4.19",
  "a2-gr-l19": "G4.20",
  "a2-gr-l35": "G4.21",
  "a2-gr-l36": "G4.22",
  "gr-marqueurs-temps-complet": "G4.23",
  "a2-gr-l52": "G4.24",
  "a2-gr-adverbes-types": "G4.25",
  "a1-gr-verbes-double-auxiliaire": "G4.26",
  "a1-gr-pronominaux-passe-compose": "G4.27",
  "a2-gr-passe-compose-ou-imparfait": "G4.28",
  "a2-gr-imparfait-irreguliers": "G4.29",
  "a2-gr-futur-irreguliers": "G4.30",
  "a2-gr-futur-simple-ou-proche": "G4.31",
  "a2-gr-hypothese-futur": "G4.32",
  "a2-gr-conditionnel": "G4.33",
  "a2-gr-gerondif": "G4.34",
  "a2-gr-subjonctif": "G4.35",

  // C1 — Verbes essentiels
  "a1-conj-l00": "C1.1",
  "a1-conj-l01": "C1.2",
  "a1-conj-l07": "C1.3",
  "a1-conj-l08": "C1.4",
  "a1-conj-l09": "C1.5",
  "a1-conj-l15": "C1.6",
  "a2-conj-irreguliers": "C1.7",
  "a2-conj-l02": "C1.8",

  // C2 — Le passé
  "a1-conj-l28": "C2.1",
  "a1-conj-l29": "C2.2",
  "a1-conj-l30": "C2.3",
  "negation-passe-compose": "C2.4",
  "a2-conj-l07": "C2.5",

  // C3 — Le futur
  "a1-conj-l20": "C3.1",
  "a2-conj-l08": "C3.2",

  // C4 — Les autres temps
  "a2-conj-l04": "C4.1",
  "a2-conj-l05": "C4.2",
};

export const FRENCH_THEMES: FrenchTheme[] = BASE_FRENCH_THEMES
  .map((theme) => {
    const code = REORGANIZED_GRAMMAR_CODES[theme.slug];
    if (!code) return theme;
    if (theme.slug === "a1-gr-l23") {
      return {
        ...theme,
        code,
        description: "Genre, nombre, cas particuliers et place de l'adjectif dans la phrase.",
      };
    }
    return { ...theme, code };
  });

export function getFrenchThemeBySlug(slug: string): FrenchTheme | undefined {
  return FRENCH_THEMES.find((x) => x.slug === slug);
}
