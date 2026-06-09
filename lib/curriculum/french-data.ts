import type { FrenchSection, FrenchTab, FrenchTheme } from "./types";

const Q = ["quiz"] as const;

function t(
  section: FrenchSection,
  slug: string,
  code: string,
  title: string,
  summary: string,
  markers: ("prerequisite" | "quiz" | "cross_ref")[],
  extra?: Partial<FrenchTheme>,
): FrenchTheme {
  return { id: `${section}-${slug}`, slug, code, title, section, summary, markers, ...extra };
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

/** Parcours complet français. */
export const FRENCH_THEMES: FrenchTheme[] = [
  // ── A0 — Débutant absolu ─────────────────────────────────────── Apprendre
  t("A0", "a0-1", "A.1",  "Salutations et politesse",              "Présentations, tutoiement / vouvoiement.", [...Q]),
  t("A0", "a0-2", "A.2",  "Chiffres, nombres et âge (0–100)",      "Avoir, nombres, identité orale.", [...Q]),
  t("A0", "a0-3", "A.3",  "Couleurs, formes et descriptions simples", "Être, adjectifs, accord des couleurs.", [...Q]),
  t("A0", "a0-4", "A.4",  "La famille",                             "Possessifs, négation, arbre généalogique.", [...Q]),
  t("A0", "a0-5", "A.5",  "Le corps et la santé de base",           "Parties du corps, urgences, avoir mal.", [...Q]),
  t("A0", "a0-6", "A.6",  "Objets du quotidien et la classe",       "Impératif, démonstratifs, consignes.", [...Q]),

  // ── A1 — Communication essentielle A1 (20 leçons) ─────────────── Apprendre
  // SE PRÉSENTER ET PRÉSENTER QUELQU'UN
  t("A1", "a1-l01", "A.7",  "Enchanté !",                        "Saluer, se présenter, identité et nationalités ; verbes être et avoir au présent.",        [...Q]),
  t("A1", "a1-l02", "A.8",  "C'est qui ?",                       "Présenter sa famille, décrire une personne ; adjectifs possessifs et situation de famille.", [...Q]),
  t("A1", "a1-l03", "A.9",  "Je vous invite.",                   "Inviter, accepter ou refuser une invitation ; jours, heure, date ; verbes en -er.",         [...Q]),
  // SE LOGER
  t("A1", "a1-l04", "A.10", "J'habite dans un appartement.",     "Décrire son logement, types d'habitat, pièces ; articles définis et indéfinis.",            [...Q]),
  t("A1", "a1-l05", "A.11", "Ça ne marche pas !",                "Expliquer un problème domestique, prendre rendez-vous ; verbes venir, pouvoir, prendre.",   [...Q]),
  t("A1", "a1-l06", "A.12", "Respectons notre immeuble !",       "Comprendre et donner des instructions simples ; l'impératif pour donner des conseils.",      [...Q]),
  // ORGANISER SA JOURNÉE
  t("A1", "a1-l07", "A.13", "Le cours commence à quelle heure ?","Demander des explications, s'orienter dans un lieu d'études ; mots interrogatifs.",         [...Q]),
  t("A1", "a1-l08", "A.14", "Je me couche tôt.",                 "Parler de sa journée et ses habitudes ; verbes pronominaux (se préparer, s'habiller).",     [...Q]),
  t("A1", "a1-l09", "A.15", "C'est une collègue sérieuse.",      "Parler de son travail et ses collègues ; accord des adjectifs au féminin.",                  [...Q]),
  // CONSOMMER
  t("A1", "a1-l10", "A.16", "Ça me plaît !",                     "Acheter des vêtements et accessoires, exprimer une demande polie ; conditionnel.",          [...Q]),
  t("A1", "a1-l11", "A.17", "Je suis végétarien !",              "Commander à manger et à boire, demander l'addition ; articles partitifs et négation.",       [...Q]),
  t("A1", "a1-l12", "A.18", "Une tarte pour combien ?",          "Acheter du pain et des pâtisseries, comprendre une recette ; expression de la quantité.",    [...Q]),
  // SE SOIGNER
  t("A1", "a1-l13", "A.19", "J'ai mal à la gorge !",             "Expliquer un problème de santé, corps humain ; articles contractés (au/à la/aux).",         [...Q]),
  t("A1", "a1-l14", "A.20", "Vous devez prendre deux comprimés.","Comprendre une instruction médicale, pharmacie ; obligation avec il faut / devoir.",         [...Q]),
  // SE DÉPLACER
  t("A1", "a1-l15", "A.21", "Quel bus va à la mairie ?",         "Demander son chemin, utiliser les transports en commun ; verbe aller au présent.",           [...Q]),
  t("A1", "a1-l16", "A.22", "Tu vas où ?",                       "Trajets et horaires, comparer les modes de transport ; adjectif interrogatif quel.",          [...Q]),
  t("A1", "a1-l17", "A.23", "J'ai un vol pour Bruxelles.",       "S'orienter dans un aéroport, présenter ses documents ; prépositions de lieu avec les pays.", [...Q]),
  // SE DISTRAIRE ET PARTIR EN VACANCES
  t("A1", "a1-l18", "A.24", "On voudrait réserver pour 2 nuits.","Faire une réservation de logement, localiser un endroit ; prépositions de lieu.",            [...Q]),
  t("A1", "a1-l19", "A.25", "Il fait beau, on fait du vélo !",   "Parler du temps qu'il fait, des sports et des saisons ; faire (du/de la/de l').",            [...Q]),
  t("A1", "a1-l20", "A.26", "On va voir ce spectacle ?",         "Spectacles, sorties culturelles, proposer des idées ; adjectifs démonstratifs.",              [...Q]),

  // ── A2 — Communication essentielle A2 (24 leçons) ─────────────── Apprendre
  // VIE QUOTIDIENNE
  t("A2", "a2-l01", "A.27", "Je préfère acheter un lave-linge d'occasion.", "Achats, comparaison, retour d'un produit ; la place de l'adjectif.",                   [...Q]),
  t("A2", "a2-l02", "A.28", "C'est un ticket pour le parking et le tram ?", "Transports en commun, location de voiture ; le passé récent (venir de).",              [...Q]),
  t("A2", "a2-l03", "A.29", "Les nouveaux locataires vont emménager demain.", "Petites annonces immobilières, déménagement ; le futur proche.",                      [...Q]),
  t("A2", "a2-l04", "A.30", "Je voudrais renouveler mon titre de séjour.",   "Démarches administratives : mairie, préfecture, banque ; passé composé avec avoir.",  [...Q]),
  t("A2", "a2-l05", "A.31", "Tu regardes les infos sur quelle chaîne ?",    "Presse, télévision, radio et Internet ; passé composé avec être.",                    [...Q]),
  // VIE SOCIALE
  t("A2", "a2-l06", "A.32", "Ça te dit de venir pique-niquer ?",            "Formuler et réagir à une invitation ; questions formelles et informelles.",            [...Q]),
  t("A2", "a2-l07", "A.33", "Aujourd'hui il y a une soirée salsa !",        "Réseaux sociaux, rencontres, parler de soi et des autres ; le pronom y.",              [...Q]),
  t("A2", "a2-l08", "A.34", "On mangera et on dansera dehors !",            "Organiser un événement festif, contacter un établissement ; le futur simple.",         [...Q]),
  t("A2", "a2-l09", "A.35", "C'est une fête que nous organisons.",          "Vie scolaire, rôle des parents à l'école ; les pronoms relatifs qui et que.",          [...Q]),
  t("A2", "a2-l10", "A.36", "On voudrait se rendre utiles dans une association.", "S'engager, parler de son expérience bénévole ; passé composé des pronominaux.",  [...Q]),
  // LOISIRS ET VACANCES
  t("A2", "a2-l11", "A.37", "On y mange quels types de plats ?",            "Gastronomie, présenter un restaurant et une recette ; indicateurs de temps.",         [...Q]),
  t("A2", "a2-l12", "A.38", "Je peux m'inscrire pour samedi prochain ?",    "Jeux et activités de loisirs, conditions de participation ; les pronoms COD.",        [...Q]),
  t("A2", "a2-l13", "A.39", "J'adore cuisiner ! Ça me détend.",             "Partager ses intérêts, exprimer enthousiasme ou déception ; les pronoms COI.",        [...Q]),
  t("A2", "a2-l14", "A.40", "Alors, tu passes de bonnes vacances ?",        "Informations touristiques, raconter ses vacances ; exprimer la condition.",            [...Q]),
  // SANTÉ ET BIEN-ÊTRE
  t("A2", "a2-l15", "A.41", "Comment est-ce que je dois me soigner ?",      "Santé, conseil médical, comprendre un professionnel ; le subjonctif après il faut que.", [...Q]),
  t("A2", "a2-l16", "A.42", "Alors le parcours santé, c'était comment ?",   "Pratiquer un sport, commenter une activité sportive ; l'imparfait.",                  [...Q]),
  t("A2", "a2-l17", "A.43", "Il ne faut pas manger trop d'aliments gras.", "Alimentation équilibrée, habitudes alimentaires ; la conséquence et le but.",          [...Q]),
  t("A2", "a2-l18", "A.44", "C'est aussi vert et calme qu'un village.",     "Comparer ville et campagne, présenter un lieu de vie ; la comparaison.",               [...Q]),
  t("A2", "a2-l19", "A.45", "J'arrête de stresser et j'apprends à me détendre.", "Bien-être, prendre soin de soi ; verbes et adjectifs construits avec à ou de.",  [...Q]),
  // ÉTUDES ET TRAVAIL
  t("A2", "a2-l20", "A.46", "J'ai envie de changer de métier.",             "Parcours de formation, parler de son cursus scolaire ; le pronom en.",                [...Q]),
  t("A2", "a2-l21", "A.47", "Je voudrais m'inscrire à Pôle Emploi.",        "Recherche d'emploi, stage, alternance et jobs étudiants ; la négation.",              [...Q]),
  t("A2", "a2-l22", "A.48", "Comment se passe ta recherche d'emploi ?",     "Sélectionner une offre, rédiger un CV et une lettre de motivation simple ; la cause.", [...Q]),
  t("A2", "a2-l23", "A.49", "Parlez-moi de votre expérience.",              "Entretien d'embauche, parler de ses compétences et conditions de travail ; l'ordre du discours.", [...Q]),
  t("A2", "a2-l24", "A.50", "Je te souhaite la bienvenue dans l'entreprise !", "Vie en entreprise, règlement intérieur, rendre compte de son travail ; l'opposition.", [...Q]),

  // ── B1 ──────────────────────────────────────────────────────────── Apprendre
  t("B1", "b1-1", "A.51", "Exprimer ses opinions et ses sentiments", "Subjonctif intro, concessions.",                                           [...Q]),
  t("B1", "b1-2", "A.52", "Futur et projets",                        "Futur simple, conditionnel, hypothèses.",                                 [...Q]),
  t("B1", "b1-3", "A.53", "Le monde du travail et la formation professionnelle", "CV, entretien, relatifs, gérondif.",                          [...Q]),
  t("B1", "b1-4", "A.54", "Santé et société",                        "LAMal, bien-être, discours indirect.",                                    [...Q]),
  t("B1", "b1-5", "A.55", "L'environnement et l'actualité locale",   "Voix passive intro, démocratie CH.",                                      [...Q]),
  t("B1", "b1-6", "A.56", "Compréhension de documents authentiques", "Presse, e-mails, structure de texte.",                                    [...Q]),

  // ── B2 ──────────────────────────────────────────────────────────── Apprendre
  t("B2", "b2-1", "A.57", "Argumentation et débat",                 "Subjonctif passé, conditionnel passé, nuance.",                           [...Q]),
  t("B2", "b2-2", "A.58", "Textes littéraires et culturels",        "Registres, style indirect au passé.",                                     [...Q]),
  t("B2", "b2-3", "A.59", "Écrits professionnels et formels",       "Rapports, tournures nominales.",                                          [...Q]),
  t("B2", "b2-4", "A.60", "Économie et société",                    "PIB, politique CH, connecteurs de réfutation.",                          [...Q]),
  t("B2", "b2-5", "A.61", "Préparation au TCF",                     "Format, entraînement CO/CE/PO/PE.",                                       [...Q]),

  // ── A1 — Grammaire & Conjugaison (G.1–G.26) ─────────────────────────────────
  lesson("A1", "a1-conj-l00", "G.1",  "Les pronoms personnels sujets",               "Je, tu, il, elle, on, nous, vous, ils, elles — choisir et utiliser le bon pronom.",     "conjugaison"),
  lesson("A1", "a1-conj-l01", "G.2",  "Les verbes être et avoir",                    "Conjugaison complète de être et avoir au présent + expressions courantes.",              "conjugaison"),
  lesson("A1", "a1-gr-l04",   "G.3",  "Les articles définis et indéfinis",           "Le, la, l', les / un, une, des : choisir le bon article selon le contexte.",            "grammaire"),
  lesson("A1", "a1-gr-l03",   "G.4",  "Le genre des noms et des adjectifs",          "Masculin/féminin : noms courants et adjectifs de nationalité.",                         "grammaire"),
  lesson("A1", "a1-conj-l07", "G.5",  "Les verbes en -er au présent",                "Conjuguer les verbes du 1er groupe : parler, aimer, habiter, travailler…",              "conjugaison"),
  lesson("A1", "a1-gr-phrases", "G.6", "Les phrases",                                "Structure Sujet + Verbe + Complément : reconnaître et construire une phrase simple.",     "grammaire"),
  lesson("A1", "a1-gr-l02",   "G.7",  "La négation",                                 "Ne…pas : construire une phrase négative avec être et avoir.",                           "grammaire"),
  lesson("A1", "a1-gr-interro", "G.8",  "L'interrogation de base",              "Est-ce que et l'intonation montante : construire une question simple.",               "grammaire"),
  lesson("A1", "a1-conj-l08", "G.9",  "Les verbes de mouvement",                     "Aller, venir, partir, arriver, entrer, sortir, monter, descendre, marcher, courir au présent.", "conjugaison"),
  lesson("A1", "a1-conj-l09", "G.10",  "Les verbes pronominaux",                      "Se lever, se coucher, s'appeler : les pronominaux du quotidien.",                        "conjugaison"),
  lesson("A1", "a1-conj-l15", "G.11", "Les verbes modaux",                               "Les verbes modaux : conjugaison et emploi au présent.",                                   "conjugaison"),
  lesson("A1", "a1-gr-l10",   "G.12", "L'interrogation avec les mots interrogatifs", "Qui, quoi, où, quand, comment, pourquoi, combien + est-ce que.",                        "grammaire"),
  lesson("A1", "a1-gr-l11",   "G.13", "Les prépositions de lieu",                    "Dans, sur, sous, devant, derrière, à côté de, en face de…",                            "grammaire"),
  lesson("A1", "a1-gr-l14",   "G.14", "Les articles partitifs et la quantité",       "Du, de la, de l', des + un kilo de, beaucoup de, un peu de…",                          "grammaire"),
  lesson("A1", "a1-gr-l05",   "G.15", "Le verbe avoir et les adjectifs possessifs",  "J'ai, tu as… + mon, ma, mes / ton, ta, tes / son, sa, ses…",                           "grammaire"),
  lesson("A1", "a1-gr-l17",   "G.16", "Il y a et les prépositions dans la maison",   "Il y a / il n'y a pas de + localiser les meubles et les pièces.",                      "grammaire"),
  lesson("A1", "a1-gr-l18",   "G.17", "Les adjectifs démonstratifs",                 "Ce, cet, cette, ces : désigner et montrer quelque chose.",                              "grammaire"),
  lesson("A1", "a1-gr-l19",   "G.18", "Les adjectifs possessifs",                    "Mon/ma/mes, ton/ta/tes, son/sa/ses… : exprimer l'appartenance.",                        "grammaire"),
  lesson("A1", "a1-gr-l22",   "G.19", "La fréquence",                                "Toujours, souvent, parfois, rarement, jamais : situer une action dans le temps.",      "grammaire"),
  lesson("A1", "a1-gr-l23",   "G.20", "Les adjectifs qualificatifs",                 "Genre, nombre et place de l'adjectif dans la phrase.",                                  "grammaire"),
  lesson("A1", "a1-conj-l20", "G.21", "Le futur proche",                             "Aller + infinitif : parler de ce qui va arriver bientôt.",                               "conjugaison"),
  lesson("A1", "a1-conj-l27", "G.22", "Pronominaux réfléchis et réciproques",        "Se laver, se regarder, se parler, s'écrire : formes et sens.",                           "conjugaison"),
  lesson("A1", "a1-conj-l28", "G.23", "Passé récent et présent continu",             "Venir de + infinitif (ce qui vient de se passer) ; être en train de + infinitif.",       "conjugaison"),
  lesson("A1", "a1-conj-l29", "G.24", "Passé composé avec avoir",                   "Participes passés réguliers (-é/-i) et irréguliers (fait, dit, pris…).",                 "conjugaison"),
  lesson("A1", "a1-conj-l30", "G.25",  "Passé composé avec être",                    "17 verbes (aller, venir, partir…) + accord du participe passé avec le sujet.",           "conjugaison"),
  lesson("A1", "a1ConjL31",   "G.25b", "Négation au passé composé",                 "Ne…pas, jamais, plus, rien : encadrer l'auxiliaire et placer les mots négatifs.",          "conjugaison"),
  lesson("A1", "a1-gr-l24",   "G.26", "Le comparatif et le superlatif",              "Plus…que, moins…que, aussi…que + le plus / le moins.",                                  "grammaire"),
  lesson("A1", "a1-gr-l25",   "G.27", "Savoir ou connaître ?",                       "Distinguer les deux verbes : savoir + infinitif vs connaître + nom.",                   "grammaire"),

  // ── A2 — Grammaire & Conjugaison (G.27–G.46) ─────────────────────────────────
  lesson("A2", "a2-conj-l01", "G.28", "Les verbes en -er — révision et particularités",  "Verbes en -ger/-cer, deux bases (préférer, acheter, appeler) ; élision et liaisons.",     "conjugaison"),
  lesson("A2", "a2-conj-l02", "G.29", "Les verbes en -ir (2e et 3e groupes)",             "Finir/choisir (2e groupe) vs partir/venir/ouvrir (3e groupe) : formes et différences.",   "conjugaison"),
  lesson("A2", "a2-conj-l03", "G.30", "Les verbes irréguliers courants",                  "Avoir, être, faire, aller, vouloir, pouvoir, devoir, sortir, boire, croire, connaître…",  "conjugaison"),
  lesson("A2", "a2-gr-l07",   "G.31", "L'interrogation (questions fermées)",              "Intonation montante, est-ce que, inversion sujet-verbe (registre formel/informel).",       "grammaire"),
  lesson("A2", "a2-gr-l09",   "G.32", "Répondre aux questions fermées",                  "Oui, non, si ; moi aussi / moi non plus / moi si : nuancer les réponses.",                "grammaire"),
  lesson("A2", "a2-conj-l04", "G.33", "Le conditionnel de politesse",                    "Vouloir, pouvoir, aimer, souhaiter, devoir, falloir au conditionnel : formes et emplois.", "conjugaison"),
  lesson("A2", "a2-conj-l05", "G.34", "L'impératif",                                     "Conjugaison tu/nous/vous ; irréguliers être/avoir/aller ; impératif avec pronoms COD/COI.","conjugaison"),
  lesson("A2", "a2-gr-l18",   "G.35", "Les prépositions de lieu",                        "Dans, sur, sous, à côté de, près de, loin de, en face de, entre, derrière, devant.",      "grammaire"),
  lesson("A2", "a2-gr-l11",   "G.36", "Les adjectifs — généralités",                     "Genre, nombre, accord des adjectifs qualificatifs en contexte.",                           "grammaire"),
  lesson("A2", "a2-gr-l12",   "G.37", "Les adjectifs — cas particuliers et place",       "Nouveau/beau/vieux, adjectifs invariables, place avant ou après le nom.",                  "grammaire"),
  lesson("A2", "a2-gr-l19",   "G.38", "Les pronoms relatifs qui et que",                 "Qui = sujet du verbe relatif ; que = objet du verbe relatif ; relative avec où.",          "grammaire"),
  lesson("A2", "a2-gr-l25",   "G.39", "La négation — ne…pas, ne…plus, ne…que",          "Ne…pas (action absente), ne…plus (arrêt), ne…que (restriction) : formes et sens.",         "grammaire"),
  lesson("A2", "a2-gr-l42",   "G.40", "La négation — ne…jamais, ne…rien, ne…personne",  "Négation totale : formes, place, emploi comme sujet (rien/personne).",                     "grammaire"),
  lesson("A2", "a2-gr-l35",   "G.41", "Les pronoms COD et COI",                          "Me/te/le/la/les/lui/leur : place, négation, construction avec deux verbes.",                "grammaire"),
  lesson("A2", "a2-gr-l36",   "G.42", "Les pronoms Y et EN",                             "Y = à + lieu/chose ; EN = de + nom / partitif : place et emploi.",                         "grammaire"),
  lesson("A2", "a2-conj-l06", "G.43", "Le passé composé — avoir et être",               "Révision complète : participes, double auxiliaire, verbes pronominaux au PC.",              "conjugaison"),
  lesson("A2", "a2-conj-l07", "G.44", "L'imparfait",                                     "Formation (base nous + -ais…), emploi (habitude, description) vs passé composé.",          "conjugaison"),
  lesson("A2", "a2-conj-l08", "G.45", "Le futur simple",                                 "Formation régulière et irrégulière + hypothèse si + présent → futur simple.",              "conjugaison"),
  lesson("A2", "a2-gr-l39",   "G.46", "Le comparatif",                                   "Plus/aussi/moins + adjectif/adverbe/verbe/nom + que : formes régulières.",                 "grammaire"),
  lesson("A2", "a2-gr-l52",   "G.47", "La cause et la conséquence",                      "Parce que/car/comme/à cause de/grâce à ; donc/c'est pourquoi/par conséquent.",            "grammaire"),

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
  lesson("V3", "v3-activites-sportives",  "V3.2", "Les activités sportives", "Verbes d'action liés au sport.",                                   "vocabulaire"),

  // ── V4 — Le logement ─────────────────────────────────────────────────────────
  lesson("V4", "v4-type-logement",        "V4.1", "Les types de logement",  "Différents types d'habitation.",                                    "vocabulaire"),
  lesson("V4", "v4-pieces-maison",        "V4.2", "Les pièces de la maison", "Pièces et espaces d'un logement.",                                 "vocabulaire"),
  lesson("V4", "v4-pannes",               "V4.3", "Les pannes",              "Problèmes et réparations dans le logement.",                       "vocabulaire"),
  lesson("V4", "v4-equipements",          "V4.4", "Les équipements",         "Meubles et appareils du quotidien.",                               "vocabulaire"),

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
  lesson("V7", "v7-restaurant",           "V7.3", "Le restaurant",           "Table et service au restaurant.",                                  "vocabulaire"),
  lesson("V7", "v7-boulangerie",          "V7.4", "La boulangerie",          "Produits de boulangerie et pâtisserie.",                           "vocabulaire"),
  lesson("V7", "v7-cuisine",              "V7.5", "La cuisine",              "Verbes et actions en cuisine.",                                    "vocabulaire"),
  lesson("V7", "v7-recettes",             "V7.6", "Les recettes",            "Ingrédients de base et ustensiles.",                               "vocabulaire"),
  lesson("V7", "v7-quantites",            "V7.7", "Les quantités",           "Unités de mesure et contenants.",                                  "vocabulaire"),

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
  lesson("V9", "v9-train",                "V9.5", "Le train",                "Vocabulaire de la gare et du train.",                              "vocabulaire"),
  lesson("V9", "v9-aeroport",             "V9.6", "L'aéroport",              "Vocabulaire de l'aéroport et du voyage en avion.",                 "vocabulaire"),
  lesson("V9", "v9-hotel",                "V9.7", "L'hôtel",                 "Séjour à l'hôtel et hébergement.",                                 "vocabulaire"),
  lesson("V9", "v9-paysage",              "V9.8", "Le paysage",              "Éléments naturels du paysage.",                                    "vocabulaire"),

];

export function getFrenchThemeBySlug(slug: string): FrenchTheme | undefined {
  return FRENCH_THEMES.find((x) => x.slug === slug);
}

export function frenchThemesBySection(section: FrenchSection): FrenchTheme[] {
  return FRENCH_THEMES.filter((x) => x.section === section && !x.tab);
}
