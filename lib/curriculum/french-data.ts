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

/** Parcours complet français (vocabulaire, grammaire). */
const BASE_FRENCH_THEMES: FrenchTheme[] = [
  // ── G1 — Le présent ──
  lesson("A1", "a1-gr-l01", "G1.1", "Les pronoms sujets", "Je, tu, il, elle, on, nous, vous, ils, elles : choisir le bon pronom sujet.", "grammaire"),
  lesson("A1", "a1-gr-etre", "G1.2", "Le verbe être", "Identité, nationalité, profession, description et situation avec être au présent.", "grammaire"),
  lesson("A1", "a1-gr-avoir", "G1.3", "Le verbe avoir", "Âge, possession, famille et expressions de sensation avec avoir au présent.", "grammaire"),
  lesson("A1", "a1-gr-cest-il-est", "G1.4", "Il y a… C'est… Il/Elle est…", "Présence (il y a), identification (c'est) et profession (il/elle est).", "grammaire"),
  lesson("A1", "a1-gr-verbes-er", "G1.5", "Les verbes en -er : cas général", "Présent des verbes en -er : radical + e, es, e, ons, ez, ent.", "grammaire"),
  lesson("A1", "a1-gr-pronominaux", "G1.6", "Les verbes pronominaux", "Verbes réfléchis et réciproques : me/te/se/nous/vous + verbe.", "grammaire"),
  lesson("A1", "a1-gr-modaux", "G1.7", "Les verbes modaux", "Désir, capacité, obligation, compétence et nécessité avec pouvoir, vouloir, devoir, savoir, falloir.", "grammaire"),
  lesson("A1", "a1-gr-verbes-er-particuliers", "G1.8", "Les verbes en -er : cas particuliers", "Aller ; -ayer/-oyer/-uyer ; -ger/-cer ; -eler/-eter/-érer.", "grammaire"),
  lesson("A1", "a1-gr-verbes-ir", "G1.9", "Les verbes en -ir", "Quatre modèles : finir, ouvrir, partir/dormir/servir, venir/tenir.", "grammaire"),
  lesson("A1", "a1-gr-verbes-re-oir", "G1.10", "Les verbes en -re et en -oir", "Modèles lire, faire, prendre, savoir/connaître, voir, peindre…", "grammaire"),
  lesson("A1", "a1-gr-present-progressif", "G1.11", "Le présent progressif", "Être en train de + infinitif : action en cours au moment où l'on parle.", "grammaire"),
  // ── G2 — Le nom ──
  lesson("A1", "a1-gr-genre-personnes", "G2.1", "Le genre des noms : personnes", "Formation du féminin des noms de personnes et nationalités.", "grammaire"),
  lesson("A1", "a1-gr-genre-choses", "G2.2", "Le genre des noms : choses", "Repères de genre pour les noms de choses : terminaisons et déterminants.", "grammaire"),
  lesson("A1", "a1-gr-pluriel-noms", "G2.3", "Le pluriel des noms", "Pluriel en -s et cas particuliers (-aux, -eaux, -eux, œil/yeux).", "grammaire"),
  lesson("A1", "a1-gr-noms-composes", "G2.4", "Les noms composés", "Formation et accord au pluriel des noms composés.", "grammaire"),
  // ── G3 — L'adjectif qualificatif ──
  lesson("A1", "a1-gr-genre-adjectifs", "G3.1", "Le genre des adjectifs", "Accord de l'adjectif qualificatif au féminin : cas général et cas particuliers.", "grammaire"),
  lesson("A1", "a1-gr-pluriel-adjectifs", "G3.2", "Le pluriel des adjectifs", "Pluriel des adjectifs : -s, -aux, -eaux et mélange de genres.", "grammaire"),
  lesson("A1", "a1-gr-adjectifs-accords-particuliers", "G3.3", "L'accord des adjectifs", "Couleurs, demi et adjectifs numéraux (vingt, cent…).", "grammaire"),
  lesson("A1", "a1-gr-place-adjectif", "G3.4", "La place de l'adjectif", "Avant ou après le nom ; bel, vieil, nouvel ; sens selon la place.", "grammaire"),
  // ── G4 — Les déterminants ──
  lesson("A1", "a1-gr-l04", "G4.1", "Les articles définis et indéfinis", "Le, la, l', les / un, une, des : choisir le bon article selon le contexte.", "grammaire"),
  lesson("A1", "a1-gr-articles-contractes", "G4.2", "Les articles contractés", "À/de + le/les → au, aux, du, des ; la et l' ne se contractent pas.", "grammaire"),
  lesson("A1", "a1-gr-article-partitif", "G4.3", "L'article partitif", "Du, de la, de l' : quantité indéterminée ; négation et exception avec être.", "grammaire"),
  lesson("A1", "a1-gr-expression-quantite", "G4.4", "L'expression de la quantité : un peu, beaucoup, assez, trop", "Quantités globales et précises ; de/d' sans article après.", "grammaire"),
  lesson("A1", "a1-gr-l18", "G4.5", "Les adjectifs démonstratifs", "Ce, cet, cette, ces : désigner et montrer quelque chose.", "grammaire"),
  lesson("A1", "a1-gr-l19", "G4.6", "Les adjectifs possessifs", "Mon/ma/mes, ton/ta/tes, son/sa/ses… : exprimer l'appartenance.", "grammaire"),
  lesson("A1", "a1-gr-adjectifs-indefinis", "G4.7", "Les adjectifs indéfinis", "Tout, chaque, aucun, plusieurs, quelques, même, autre.", "grammaire"),
  // ── G5 — La structure de la phrase ──
  lesson("A1", "a1-gr-phrases", "G5.1", "Les phrases", "Structure Sujet + Verbe + Complément : reconnaître et construire une phrase simple.", "grammaire"),
  lesson("A2", "a2-gr-l35", "G5.2", "Les pronoms COD et COI", "Me/te/le/la/les/lui/leur : place, négation, construction avec deux verbes.", "grammaire"),
  lesson("A1", "a1-gr-interro", "G5.3", "L'interrogation de base", "Est-ce que et l'intonation montante : construire une question simple.", "grammaire"),
  lesson("A1", "a1-gr-question-totale", "G5.4", "Les questions fermées", "Intonation, est-ce que, inversion ; répondre oui / non / si.", "grammaire"),
  lesson("A1", "a1-gr-question-ouverte-qui", "G5.5", "Les questions ouvertes", "Qui, quoi, où, quand, comment, pourquoi, combien, quel / lequel.", "grammaire"),
  lesson("A1", "a1-gr-negation-ne-pas", "G5.6", "La négation", "Ne… pas et formes de base de la négation.", "grammaire"),
  lesson("A1", "a1-gr-autres-negations", "G5.7", "Les autres négations", "Jamais, plus, rien, personne, ne… que, ni… ni.", "grammaire"),
  lesson("A1", "a1-gr-phrase-exclamative", "G5.8", "La phrase exclamative", "Quel, que, comme, qu'est-ce que… comme : exprimer un sentiment.", "grammaire"),
  // ── G6 — Bilan A1 ──
  lesson("A1", "a1-gr-bilan-a1", "G6.1", "Bilan A1", "Révision des points essentiels du niveau A1.", "grammaire"),
  // ── G7 — Les prépositions de lieu ──
  lesson("A1", "a1-gr-a-en-de-lieux", "G7.1", "À, en, de avec les noms de villes, pays et continents", "Prépositions de lieu avec les toponymes.", "grammaire"),
  lesson("A1", "a1-gr-autres-prepositions", "G7.2", "Autres prépositions et adverbes", "À/chez/de, sur/dans/sous, devant/derrière, ici/là/là-bas…", "grammaire"),
  // ── G8 — Le passé ──
  lesson("A1", "a1-gr-passe-compose-avoir", "G8.1", "Le passé composé avec avoir", "Auxiliaire avoir + participe passé ; verbes en -er et formes fréquentes.", "grammaire"),
  lesson("A1", "a1-gr-passe-compose-etre", "G8.2", "Le passé composé avec être", "Verbes de déplacement, accord du participe et verbes pronominaux.", "grammaire"),
  lesson("A1", "a1-gr-verbes-double-auxiliaire", "G8.3", "Les verbes à double auxiliaire", "Sortir, rentrer, entrer, passer, monter, descendre et retourner : être ou avoir.", "grammaire"),
  lesson("A1", "a1-gr-pronominaux-passe-compose", "G8.4", "Les verbes pronominaux au passé composé", "Auxiliaire être, accord avec le sujet réel et négation.", "grammaire"),
  lesson("A1", "a1-gr-imparfait", "G8.5", "L'imparfait", "Description et habitude passées ; formation et irréguliers.", "grammaire"),
  lesson("A1", "a1-gr-passe-recent", "G8.6", "Le passé récent", "Venir de + infinitif : une action toute proche du moment présent.", "grammaire"),
  lesson("A1", "a1-gr-imparfait-passe-compose", "G8.7", "L'imparfait / Le passé composé", "Décor et habitude (imparfait) vs actions délimitées (passé composé).", "grammaire"),
  lesson("A1", "a1-gr-plus-que-parfait", "G8.8", "Le plus-que-parfait", "Action antérieure dans un récit au passé ; auxiliaire à l'imparfait + participe.", "grammaire"),
  lesson("A1", "a1-gr-accord-participe-passe", "G8.9", "L'accord du participe passé", "Accord avec être, avec le COD antéposé après avoir ; exception en.", "grammaire"),
  // ── G9 — Le futur ──
  lesson("A1", "a1-gr-futur-proche", "G9.1", "Le futur proche", "Aller + infinitif : projet et événement immédiat.", "grammaire"),
  lesson("A1", "a1-gr-futur-simple", "G9.2", "Le futur simple", "Prévisions, promesses ; formation et radicaux irréguliers.", "grammaire"),
  lesson("A2", "a2-gr-futur-simple-ou-proche", "G9.3", "Futur simple ou futur proche ?", "Choisir selon la proximité, l'intention, la promesse ou la prévision.", "grammaire"),
  lesson("A2", "a2-gr-hypothese-futur", "G9.4", "L'hypothèse sur le futur", "Si + présent, puis futur simple ; condition et conséquence.", "grammaire"),
  lesson("A1", "a1-gr-futur-anterieur", "G9.5", "Le futur antérieur", "Action antérieure à un futur ou un impératif ; quand, dès que…", "grammaire"),
  // ── G10 — La comparaison ──
  lesson("A1", "a1-gr-comparaison-adj-adv", "G10.1", "La comparaison avec un adjectif ou un adverbe", "Plus, moins, aussi… que ; meilleur, mieux, pire.", "grammaire"),
  lesson("A1", "a1-gr-comparaison-nom-verbe", "G10.2", "La comparaison avec un nom ou un verbe", "Plus/moins/autant de… que ; plus/moins/autant que ; le même.", "grammaire"),
  lesson("A1", "a1-gr-superlatif", "G10.3", "Le superlatif", "Le/la/les plus ou moins ; meilleur, mieux, pire.", "grammaire"),
  // ── G11 — L'expression de temps ──
  lesson("A1", "a1-gr-expression-temps-moment", "G11.1", "L'expression du temps : moment précis ou habitude", "À, en, le… ; démonstratifs ; articles pour l'habitude.", "grammaire"),
  lesson("A1", "a1-gr-marqueurs-temps", "G11.2", "L'expression du temps : il y a, dans, depuis, pour, pendant, en…", "Situer une action : durée, début, fin ; il y a / dans / depuis / pour…", "grammaire"),
  // ── G12 — Les pronoms ──
  lesson("A1", "a1-gr-pronoms-toniques", "G12.1", "Les pronoms toniques", "Moi, toi, lui, elle, nous, vous, eux, elles : formes et emplois.", "grammaire"),
  lesson("A1", "a1-gr-pronoms-cod-coi", "G12.2", "Les pronoms compléments directs et indirects", "Me/te/le/la/les/lui/leur : place, COD, COI et négation.", "grammaire"),
  lesson("A1", "a1-gr-pronom-en", "G12.3", "Le pronom complément en", "Remplacer une quantité : articles, nombres, beaucoup de…", "grammaire"),
  lesson("A1", "a1-gr-pronoms-y-en-lieu", "G12.4", "Les pronoms compléments de lieu y et en", "Y = lieu où l'on est/va ; en = lieu d'où l'on vient.", "grammaire"),
  lesson("A1", "a1-gr-en-y-pronom-tonique", "G12.5", "En ou de + pronom tonique / Y ou à + pronom tonique", "Chose → en/y ; personne → de/à + tonique ; place avec pronominaux.", "grammaire"),
  lesson("A1", "a1-gr-doubles-pronoms", "G12.6", "Les doubles pronoms", "Ordre me/te/nous/vous + le/la/les ; le/la/les + lui/leur ; + en/y.", "grammaire"),
  lesson("A1", "a1-gr-pronoms-demonstratifs", "G12.7", "Les pronoms démonstratifs", "Celui/celle/ceux/celles ; ce, cela, ça.", "grammaire"),
  lesson("A1", "a1-gr-pronoms-possessifs", "G12.8", "Les pronoms possessifs", "Le mien, le tien, le sien, le nôtre, le vôtre, le leur…", "grammaire"),
  lesson("A1", "a1-gr-pronoms-indefinis", "G12.9", "Les pronoms indéfinis", "Tout, chacun, quelques-uns, plusieurs, aucun…", "grammaire"),
  lesson("A1", "a1-gr-pronoms-relatifs-qui-que-ou", "G12.10", "Les pronoms relatifs qui, que, où", "Sujet, COD, lieu ou temps : réunir deux phrases.", "grammaire"),
  lesson("A1", "a1-gr-pronom-relatif-dont", "G12.11", "Le pronom relatif dont", "Remplacer un complément introduit par de.", "grammaire"),
  lesson("A1", "a1-gr-pronoms-relatifs-composes", "G12.12", "Les pronoms relatifs composés", "Lequel / laquelle… ; auquel, duquel ; dont vs duquel.", "grammaire"),
  // ── G13 — Bilan A2 ──
  lesson("A2", "a1-gr-bilan-a2", "G13.1", "Bilan A2", "Révision des points essentiels du niveau A2.", "grammaire"),
  // ── G14 — Les adverbes ──
  lesson("A2", "a1-gr-adverbes-intensite", "G14.1", "Les adverbes d'intensité", "Très, beaucoup, trop, assez… : emploi et place.", "grammaire"),
  lesson("A2", "a1-gr-adverbes-ment", "G14.2", "Les adverbes en -ment", "Formation (féminin, -amment/-emment) et place.", "grammaire"),
  lesson("A1", "a1-gr-l22", "G14.3", "Les adverbes de fréquence", "Toujours, souvent, parfois, rarement, jamais : situer une action dans le temps.", "grammaire"),
  // ── G15 — Les mots de liaison ──
  lesson("A2", "a1-gr-mots-liaison", "G15.1", "Les mots de liaison", "D'abord, puis, de plus, donc… : organiser le discours.", "grammaire"),
  // ── G16 — Les autres temps des verbes ──
  lesson("A2", "a1-gr-imperatif", "G16.1", "L'impératif", "Ordre, conseil, souhait ; pronoms à l'affirmatif et au négatif.", "grammaire"),
  lesson("A2", "a1-gr-forme-passive", "G16.2", "La forme passive", "Être + participe ; agent avec par ; accord du participe.", "grammaire"),
  lesson("A2", "a1-gr-gerondif", "G16.3", "Le gérondif", "En + participe présent : temps, manière, condition ; négation.", "grammaire"),
  lesson("A2", "a1-gr-subjonctif-present", "G16.4", "Le subjonctif présent", "Formation, irréguliers et emplois après que (nécessité, sentiment…).", "grammaire"),
  lesson("A2", "a1-gr-subjonctif-passe", "G16.5", "Le subjonctif passé", "Auxiliaire au subjonctif présent + participe ; action antérieure.", "grammaire"),
  lesson("A2", "a1-gr-subjonctif-ou-indicatif", "G16.6", "Subjonctif ou indicatif ?", "Réalité vs appréciation ; opinion affirmative/négative/interrogative.", "grammaire"),
  lesson("A2", "a1-gr-subjonctif-ou-infinitif", "G16.7", "Subjonctif ou infinitif ?", "Sujets différents → subjonctif ; même sujet → infinitif (présent/passé).", "grammaire"),
  lesson("A2", "a1-gr-conditionnel-present", "G16.8", "Le conditionnel présent", "Politesse, souhait, suggestion, conseil ; radical du futur + imparfait.", "grammaire"),
  lesson("A2", "a1-gr-conditionnel-passe", "G16.9", "Le conditionnel passé", "Regret et reproche ; auxiliaire au conditionnel + participe.", "grammaire"),
  // ── G17 — Les phrases complexes ──
  lesson("A2", "a1-gr-expression-cause", "G17.1", "L'expression de la cause", "Parce que, comme, puisque ; à cause de, grâce à, en raison de.", "grammaire"),
  lesson("A2", "a1-gr-expression-consequence", "G17.2", "L'expression de la conséquence", "Donc, alors, si bien que, tellement/si… que : résultat certain.", "grammaire"),
  lesson("A2", "a1-gr-conjonctions-temps", "G17.3", "Les conjonctions de temps", "Quand, avant que, dès que, jusqu'à ce que… : situer deux événements.", "grammaire"),
  lesson("A2", "a1-gr-expression-but", "G17.4", "L'expression du but", "Pour/afin de + infinitif ; pour que/afin que + subjonctif.", "grammaire"),
  lesson("A2", "a1-gr-opposition-concession", "G17.5", "L'expression de l'opposition et de la concession", "Mais, pourtant, bien que, même si, malgré…", "grammaire"),
  lesson("A2", "a1-gr-hypothese-condition", "G17.6", "L'expression de l'hypothèse avec si et de la condition", "Si + temps ; à condition que / de.", "grammaire"),
  lesson("A2", "a1-gr-discours-indirect-present", "G17.7", "Le discours indirect au présent", "Dire que, demander si/de : rapporter des paroles.", "grammaire"),
  // ── G18 — Bilan B1 ──
  lesson("B1", "a1-gr-bilan-b1", "G18.1", "Bilan B1", "Révision des points essentiels du niveau B1.", "grammaire"),
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
 * Codes pédagogiques grammaire G1–G18 (plus de conjugaison séparée).
 */
const REORGANIZED_GRAMMAR_CODES: Record<string, string> = {
  "a1-gr-l01": "G1.1",
  "a1-gr-etre": "G1.2",
  "a1-gr-avoir": "G1.3",
  "a1-gr-cest-il-est": "G1.4",
  "a1-gr-verbes-er": "G1.5",
  "a1-gr-pronominaux": "G1.6",
  "a1-gr-modaux": "G1.7",
  "a1-gr-verbes-er-particuliers": "G1.8",
  "a1-gr-verbes-ir": "G1.9",
  "a1-gr-verbes-re-oir": "G1.10",
  "a1-gr-present-progressif": "G1.11",
  "a1-gr-genre-personnes": "G2.1",
  "a1-gr-genre-choses": "G2.2",
  "a1-gr-pluriel-noms": "G2.3",
  "a1-gr-noms-composes": "G2.4",
  "a1-gr-genre-adjectifs": "G3.1",
  "a1-gr-pluriel-adjectifs": "G3.2",
  "a1-gr-adjectifs-accords-particuliers": "G3.3",
  "a1-gr-place-adjectif": "G3.4",
  "a1-gr-l04": "G4.1",
  "a1-gr-articles-contractes": "G4.2",
  "a1-gr-article-partitif": "G4.3",
  "a1-gr-expression-quantite": "G4.4",
  "a1-gr-l18": "G4.5",
  "a1-gr-l19": "G4.6",
  "a1-gr-adjectifs-indefinis": "G4.7",
  "a1-gr-question-totale": "G5.4",
  "a1-gr-question-ouverte-qui": "G5.5",
  "a1-gr-negation-ne-pas": "G5.6",
  "a1-gr-autres-negations": "G5.7",
  "a1-gr-phrase-exclamative": "G5.8",
  "a1-gr-bilan-a1": "G6.1",
  "a1-gr-a-en-de-lieux": "G7.1",
  "a1-gr-autres-prepositions": "G7.2",
  "a1-gr-passe-compose-avoir": "G8.1",
  "a1-gr-passe-compose-etre": "G8.2",
  "a1-gr-imparfait": "G8.5",
  "a1-gr-passe-recent": "G8.6",
  "a1-gr-imparfait-passe-compose": "G8.7",
  "a1-gr-plus-que-parfait": "G8.8",
  "a1-gr-accord-participe-passe": "G8.9",
  "a1-gr-futur-proche": "G9.1",
  "a1-gr-futur-simple": "G9.2",
  "a1-gr-futur-anterieur": "G9.5",
  "a1-gr-comparaison-adj-adv": "G10.1",
  "a1-gr-comparaison-nom-verbe": "G10.2",
  "a1-gr-superlatif": "G10.3",
  "a1-gr-expression-temps-moment": "G11.1",
  "a1-gr-marqueurs-temps": "G11.2",
  "a1-gr-pronoms-toniques": "G12.1",
  "a1-gr-pronoms-cod-coi": "G12.2",
  "a1-gr-pronom-en": "G12.3",
  "a1-gr-pronoms-y-en-lieu": "G12.4",
  "a1-gr-en-y-pronom-tonique": "G12.5",
  "a1-gr-doubles-pronoms": "G12.6",
  "a1-gr-pronoms-demonstratifs": "G12.7",
  "a1-gr-pronoms-possessifs": "G12.8",
  "a1-gr-pronoms-indefinis": "G12.9",
  "a1-gr-pronoms-relatifs-qui-que-ou": "G12.10",
  "a1-gr-pronom-relatif-dont": "G12.11",
  "a1-gr-pronoms-relatifs-composes": "G12.12",
  "a1-gr-bilan-a2": "G13.1",
  "a1-gr-adverbes-intensite": "G14.1",
  "a1-gr-adverbes-ment": "G14.2",
  "a1-gr-mots-liaison": "G15.1",
  "a1-gr-imperatif": "G16.1",
  "a1-gr-forme-passive": "G16.2",
  "a1-gr-gerondif": "G16.3",
  "a1-gr-subjonctif-present": "G16.4",
  "a1-gr-subjonctif-passe": "G16.5",
  "a1-gr-subjonctif-ou-indicatif": "G16.6",
  "a1-gr-subjonctif-ou-infinitif": "G16.7",
  "a1-gr-conditionnel-present": "G16.8",
  "a1-gr-conditionnel-passe": "G16.9",
  "a1-gr-expression-cause": "G17.1",
  "a1-gr-expression-consequence": "G17.2",
  "a1-gr-conjonctions-temps": "G17.3",
  "a1-gr-expression-but": "G17.4",
  "a1-gr-opposition-concession": "G17.5",
  "a1-gr-hypothese-condition": "G17.6",
  "a1-gr-discours-indirect-present": "G17.7",
  "a1-gr-bilan-b1": "G18.1",
  "a1-gr-phrases": "G5.1",
  "a1-gr-interro": "G5.3",
  "a1-gr-l22": "G14.3",
  "a2-gr-l35": "G5.2",
  "a1-gr-verbes-double-auxiliaire": "G8.3",
  "a1-gr-pronominaux-passe-compose": "G8.4",
  "a2-gr-futur-simple-ou-proche": "G9.3",
  "a2-gr-hypothese-futur": "G9.4",
  "a1-conj-l08": "G4.2",
  // Conjugaison fusionnée (redirections / références Express)
  "a1-conj-l00": "G1.1",
  "a1-conj-l01": "G1.2",
  "a1-conj-l07": "G1.5",
  "a1-conj-l09": "G1.6",
  "a1-conj-l15": "G1.7",
  "a2-conj-irreguliers": "G1.10",
  "a2-conj-l02": "G1.9",
  "a1-conj-l28": "G8.6",
  "a1-conj-l29": "G8.1",
  "a1-conj-l30": "G8.2",
  "negation-passe-compose": "G8.1",
  "a2-conj-l07": "G8.5",
  "a1-conj-l20": "G9.1",
  "a2-conj-l08": "G9.2",
  "a2-conj-l04": "G16.8",
  "a2-conj-l05": "G16.1",
};

export const FRENCH_THEMES: FrenchTheme[] = BASE_FRENCH_THEMES
  .map((theme) => {
    const code = REORGANIZED_GRAMMAR_CODES[theme.slug];
    if (!code) return theme;
    return { ...theme, code };
  });

export function getFrenchThemeBySlug(slug: string): FrenchTheme | undefined {
  return FRENCH_THEMES.find((x) => x.slug === slug);
}
