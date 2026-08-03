import type { QcmItem } from "../../grammar-data";
import type { VerbConj } from "./conj-exercise-builders";
import {
  buildG1VerbExercises,
  er,
  ir,
  reflEr,
  reflErVowel,
  type G1LessonProfile,
} from "./g1-exercise-builders";

const TAILS_ER = [
  " souvent.",
  " le matin.",
  " avec des amis.",
  " le week-end.",
  " en ville.",
  " à l'école.",
  " le soir.",
  " ici.",
  " ensemble.",
  " tous les jours.",
  " un peu.",
  " beaucoup.",
  " maintenant.",
  " après les cours.",
  " en famille.",
];

const TAILS_ETRE = [
  " étudiant.",
  " content(e).",
  " à Genève.",
  " français(e).",
  " médecin.",
  " en retard.",
  " fatigué(e).",
  " à Paris.",
  " prêt(e).",
  " absent(e).",
  " ici.",
  " heureux / heureuse.",
  " suisse.",
  " à l'école.",
  " malade.",
];

const TAILS_AVOIR = [
  " faim.",
  " 20 ans.",
  " un frère.",
  " soif.",
  " une voiture.",
  " peur.",
  " raison.",
  " un appartement.",
  " froid.",
  " une question.",
  " chaud.",
  " un vélo.",
  " mal à la tête.",
  " de la chance.",
  " un rendez-vous.",
];

const ETRE: VerbConj = {
  infinitive: "être",
  stem: "",
  hint: "suis / es / est / sommes / êtes / sont",
  forms: ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"],
  endings: ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"],
};

const AVOIR: VerbConj = {
  infinitive: "avoir",
  stem: "",
  hint: "ai / as / a / avons / avez / ont",
  forms: ["ai", "as", "a", "a", "avons", "avez", "ont", "ont"],
  endings: ["ai", "as", "a", "a", "avons", "avez", "ont", "ont"],
};

const ALLER: VerbConj = {
  infinitive: "aller",
  stem: "",
  hint: "vais / vas / va / allons / allez / vont",
  forms: ["vais", "vas", "va", "va", "allons", "allez", "vont", "vont"],
};

const MANGER = er("manger", "mang");
const HABITER = er("habiter", "habit");
const PARLER = er("parler", "parl");
const ECOUTER = er("écouter", "écout");
const REGARDER = er("regarder", "regard");
const TRAVAILLER = er("travailler", "travaill");
const AIMER = er("aimer", "aim");
const PENSER = er("penser", "pens");
const JOUER = er("jouer", "jou");
const ETUDIER = er("étudier", "étudi");

function qc(sentence: string, choices: string[], correctIdx = 0): QcmItem {
  return { sentence, choices, correctIdx };
}

/** G1.2 — être */
export const G1_2_PROFILE: G1LessonProfile = {
  style: "form",
  verbs: [ETRE],
  tails: TAILS_ETRE,
  writePrompts: [
    "Être / étudiant :",
    "Être / à Genève :",
    "Être / content :",
    "Être / médecin :",
    "Être / français :",
    "Être / en retard :",
    "Être / fatigué :",
    "Être / à Paris :",
    "Être / prêt :",
    "Être / malade :",
  ],
  verbChoicePool: [
    qc("Je ___ étudiant.", ["suis", "ai", "est", "es"]),
    qc("Tu ___ content(e) ?", ["es", "as", "est", "suis"]),
    qc("Elle ___ française.", ["est", "a", "es", "sont"]),
    qc("Nous ___ en retard.", ["sommes", "avons", "êtes", "sont"]),
    qc("Ils ___ absents.", ["sont", "ont", "est", "sommes"]),
    qc("Vous ___ prêts ?", ["êtes", "avez", "sont", "est"]),
    qc("Il ___ médecin.", ["est", "a", "suis", "sont"]),
    qc("Elles ___ à Genève.", ["sont", "ont", "est", "êtes"]),
    qc("On ___ fatigué.", ["est", "a", "sont", "es"]),
    qc("Je ___ à Paris.", ["suis", "ai", "es", "est"]),
    qc("Tu ___ algérien(ne) ?", ["es", "as", "est", "suis"]),
    qc("Nous ___ contents.", ["sommes", "avons", "êtes", "sont"]),
    qc("Elle ___ infirmière.", ["est", "a", "es", "sont"]),
    qc("Ils ___ étudiants.", ["sont", "ont", "est", "sommes"]),
    qc("Vous ___ d'accord ?", ["êtes", "avez", "sont", "est"]),
    qc("Il ___ grand.", ["est", "a", "es", "sont"]),
    qc("Je ___ suisse.", ["suis", "ai", "es", "est"]),
    qc("Tu ___ libre ?", ["es", "as", "est", "suis"]),
    qc("Elles ___ françaises.", ["sont", "ont", "est", "êtes"]),
    qc("Nous ___ ici.", ["sommes", "avons", "êtes", "sont"]),
    qc("Elle ___ absente.", ["est", "a", "es", "sont"]),
    qc("On ___ ensemble.", ["est", "a", "sont", "es"]),
    qc("Vous ___ en France ?", ["êtes", "avez", "sont", "es"]),
    qc("Il ___ belge.", ["est", "a", "es", "sont"]),
    qc("Je ___ prêt(e).", ["suis", "ai", "es", "est"]),
  ],
};

/** G1.3 — avoir */
export const G1_3_PROFILE: G1LessonProfile = {
  style: "form",
  verbs: [AVOIR],
  tails: TAILS_AVOIR,
  writePrompts: [
    "Avoir / faim :",
    "Avoir / 25 ans :",
    "Avoir / un frère :",
    "Avoir / soif :",
    "Avoir / une voiture :",
    "Avoir / peur :",
    "Avoir / raison :",
    "Avoir / un appartement :",
    "Avoir / froid :",
    "Avoir / une question :",
  ],
  verbChoicePool: [
    qc("J'___ faim.", ["ai", "suis", "as", "a"]),
    qc("Tu ___ 20 ans.", ["as", "es", "a", "ai"]),
    qc("Elle ___ un frère.", ["a", "est", "as", "ont"]),
    qc("Nous ___ soif.", ["avons", "sommes", "avez", "ont"]),
    qc("Ils ___ une voiture.", ["ont", "sont", "a", "avons"]),
    qc("Vous ___ peur ?", ["avez", "êtes", "ont", "as"]),
    qc("Il ___ raison.", ["a", "est", "as", "ont"]),
    qc("Elles ___ froid.", ["ont", "sont", "a", "avez"]),
    qc("On ___ chaud.", ["a", "est", "ont", "as"]),
    qc("J'___ un vélo.", ["ai", "suis", "as", "a"]),
    qc("Tu ___ de la chance.", ["as", "es", "a", "ai"]),
    qc("Nous ___ un rendez-vous.", ["avons", "sommes", "avez", "ont"]),
    qc("Elle ___ mal à la tête.", ["a", "est", "as", "ont"]),
    qc("Ils ___ faim.", ["ont", "sont", "a", "avons"]),
    qc("Vous ___ une question ?", ["avez", "êtes", "ont", "as"]),
    qc("Il ___ 30 ans.", ["a", "est", "as", "ont"]),
    qc("J'___ soif.", ["ai", "suis", "as", "a"]),
    qc("Tu ___ peur ?", ["as", "es", "a", "ai"]),
    qc("Elles ___ un appartement.", ["ont", "sont", "a", "avez"]),
    qc("Nous ___ raison.", ["avons", "sommes", "avez", "ont"]),
    qc("Elle ___ chaud.", ["a", "est", "as", "ont"]),
    qc("On ___ faim.", ["a", "est", "ont", "as"]),
    qc("Vous ___ froid ?", ["avez", "êtes", "ont", "as"]),
    qc("Il ___ un frère.", ["a", "est", "as", "ont"]),
    qc("J'___ 22 ans.", ["ai", "suis", "as", "a"]),
  ],
};

/** G1.5 — verbes en -er (général) */
export const G1_5_PROFILE: G1LessonProfile = {
  style: "ending",
  verbs: [AIMER, ECOUTER, ETUDIER, HABITER, PARLER, REGARDER, TRAVAILLER, PENSER, JOUER, MANGER],
  tails: TAILS_ER,
  writePrompts: [
    "Manger / une pomme :",
    "Habiter / Genève :",
    "Parler / français :",
    "Écouter / la radio :",
    "Regarder / la télé :",
    "Travailler / à Paris :",
    "Aimer / le chocolat :",
    "Jouer / au football :",
    "Étudier / le français :",
    "Penser / au projet :",
  ],
  verbChoicePool: [
    qc("Il ___ une pomme.", ["mange", "écoute", "habite", "parle"]),
    qc("Elle ___ la radio.", ["écoute", "mange", "habite", "joue"]),
    qc("Nous ___ à Genève.", ["habitons", "mangeons", "écoutons", "jouons"]),
    qc("Tu ___ français ?", ["parles", "manges", "habites", "joues"]),
    qc("Ils ___ la télé.", ["regardent", "habitent", "mangent", "pensent"]),
    qc("Vous ___ ici.", ["travaillez", "mangez", "écoutez", "habitez"]),
    qc("Je ___ le chocolat.", ["aime", "habite", "parle", "joue"]),
    qc("On ___ au football.", ["joue", "mange", "habite", "écoute"]),
    qc("Elle ___ le français.", ["étudie", "habite", "mange", "écoute"]),
    qc("Tu ___ au quartier ?", ["penses", "manges", "habites", "écoutes"]),
    qc("Nous ___ avec des amis.", ["parlons", "mangeons", "habitons", "jouons"]),
    qc("Ils ___ en ville.", ["habitent", "mangent", "écoutent", "pensent"]),
    qc("Je ___ souvent.", ["travaille", "habite", "mange", "écoute"]),
    qc("Vous ___ la radio ?", ["écoutez", "mangez", "habitez", "jouez"]),
    qc("Il ___ le matin.", ["travaille", "habite", "écoute", "pense"]),
    qc("Elle ___ une pizza.", ["mange", "habite", "parle", "pense"]),
    qc("Tu ___ à Paris ?", ["habites", "manges", "écoutes", "joues"]),
    qc("Nous ___ le week-end.", ["jouons", "habitons", "pensons", "étudions"]),
    qc("Ils ___ du café.", ["aiment", "habitent", "parlent", "pensent"]),
    qc("Je ___ à l'école.", ["étudie", "mange", "habite", "écoute"]),
    qc("Vous ___ français.", ["parlez", "mangez", "habitez", "jouez"]),
    qc("On ___ la télé.", ["regarde", "habite", "mange", "pense"]),
    qc("Elle ___ avec des amis.", ["parle", "habite", "mange", "écoute"]),
    qc("Tu ___ une pomme ?", ["manges", "habites", "écoutes", "penses"]),
    qc("Nous ___ le soir.", ["regardons", "habitons", "pensons", "jouons"]),
  ],
};

const SE_LEVER: VerbConj = {
  infinitive: "se lever",
  stem: "lèv",
  hint: "pronominal",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["lève", "lèves", "lève", "lève", "levons", "levez", "lèvent", "lèvent"],
  reflexive: ["me", "te", "se", "se", "nous", "vous", "se", "se"],
};

const SE_COUCHER = reflEr("se coucher", "couch");
const SE_DOUCHER = reflEr("se doucher", "douch");
const SE_PREPARER = reflEr("se préparer", "prépar");
const S_HABILLER = reflErVowel("s'habiller", "habill");
const S_APPELER: VerbConj = {
  infinitive: "s'appeler",
  stem: "appell",
  hint: "pronominal",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["appelle", "appelles", "appelle", "appelle", "appelons", "appelez", "appellent", "appellent"],
  reflexive: ["m'", "t'", "s'", "s'", "nous", "vous", "s'", "s'"],
};
const S_AMUSER = reflErVowel("s'amuser", "amus");

/** G1.6 — pronominaux */
export const G1_6_PROFILE: G1LessonProfile = {
  style: "form",
  verbs: [SE_LEVER, SE_COUCHER, SE_DOUCHER, SE_PREPARER, S_HABILLER, S_APPELER, S_AMUSER],
  tails: [
    " tôt.",
    " tard.",
    " le soir.",
    " vite.",
    " le matin.",
    " bien.",
    " à 7 h.",
    " après le sport.",
    " avant l'école.",
    " chaque jour.",
    " en silence.",
    " à la maison.",
    " pour le travail.",
    " tranquillement.",
    " maintenant.",
  ],
  writePrompts: [
    "Se lever / tôt :",
    "Se coucher / tard :",
    "Se doucher / le soir :",
    "Se préparer / vite :",
    "S'habiller / bien :",
    "S'appeler / Leila :",
    "S'amuser / avec des amis :",
    "Se lever / à 7 h :",
    "Se coucher / à 22 h :",
    "Se préparer / pour l'école :",
  ],
  verbChoicePool: [
    qc("Je ___ tôt.", ["me lève", "me couche", "m'appelle", "m'amuse"]),
    qc("Tu ___ tard.", ["te couches", "te lèves", "t'habilles", "t'amuses"]),
    qc("Elle ___ le soir.", ["se douche", "se lève", "s'appelle", "s'amuse"]),
    qc("Nous ___ vite.", ["nous préparons", "nous levons", "nous couchons", "nous amusons"]),
    qc("Ils ___ à 22 h.", ["se couchent", "se lèvent", "s'habillent", "s'amusent"]),
    qc("Vous ___ comment ?", ["vous appelez", "vous levez", "vous douchez", "vous amusez"]),
    qc("Je ___ Leila.", ["m'appelle", "me lève", "me couche", "m'amuse"]),
    qc("Tu ___ bien ?", ["t'amuses", "te lèves", "te couches", "t'habilles"]),
    qc("Il ___ le matin.", ["se lève", "se couche", "s'appelle", "s'amuse"]),
    qc("Elles ___ pour l'école.", ["se préparent", "se couchent", "s'appellent", "s'amusent"]),
    qc("On ___ après le sport.", ["se douche", "se couche", "s'appelle", "s'amuse"]),
    qc("Je ___ en silence.", ["m'habille", "me lève", "me couche", "m'appelle"]),
    qc("Tu ___ à 7 h ?", ["te lèves", "te couches", "t'amuses", "t'habilles"]),
    qc("Nous ___ à la maison.", ["nous amusons", "nous levons", "nous couchons", "nous appelons"]),
    qc("Ils ___ maintenant.", ["s'habillent", "se couchent", "s'appellent", "se lèvent"]),
    qc("Vous ___ le soir ?", ["vous douchez", "vous levez", "vous appelez", "vous amusez"]),
    qc("Elle ___ vite.", ["se prépare", "se couche", "s'appelle", "s'amuse"]),
    qc("Je ___ chaque jour.", ["me lève", "me couche", "m'appelle", "m'amuse"]),
    qc("Tu ___ Paulo ?", ["t'appelles", "te lèves", "te couches", "t'amuses"]),
    qc("Ils ___ bien.", ["s'amusent", "se lèvent", "se couchent", "s'habillent"]),
    qc("Nous ___ avant l'école.", ["nous préparons", "nous couchons", "nous amusons", "nous appelons"]),
    qc("Il ___ tard.", ["se couche", "se lève", "s'appelle", "s'amuse"]),
    qc("Vous ___ tôt ?", ["vous levez", "vous couchez", "vous appelez", "vous amusez"]),
    qc("Elle ___ Amina.", ["s'appelle", "se lève", "se douche", "s'amuse"]),
    qc("On ___ tranquillement.", ["s'habille", "se couche", "s'appelle", "se lève"]),
  ],
};

const POUVOIR: VerbConj = {
  infinitive: "pouvoir",
  stem: "",
  hint: "peux / peut / pouvons / pouvez / peuvent",
  forms: ["peux", "peux", "peut", "peut", "pouvons", "pouvez", "peuvent", "peuvent"],
};
const VOULOIR: VerbConj = {
  infinitive: "vouloir",
  stem: "",
  hint: "veux / veut / voulons / voulez / veulent",
  forms: ["veux", "veux", "veut", "veut", "voulons", "voulez", "veulent", "veulent"],
};
const DEVOIR: VerbConj = {
  infinitive: "devoir",
  stem: "",
  hint: "dois / doit / devons / devez / doivent",
  forms: ["dois", "dois", "doit", "doit", "devons", "devez", "doivent", "doivent"],
};
const SAVOIR: VerbConj = {
  infinitive: "savoir",
  stem: "",
  hint: "sais / sait / savons / savez / savent",
  forms: ["sais", "sais", "sait", "sait", "savons", "savez", "savent", "savent"],
};

/** G1.7 — modaux */
export const G1_7_PROFILE: G1LessonProfile = {
  style: "form",
  verbs: [POUVOIR, VOULOIR, DEVOIR, SAVOIR],
  tails: [
    " parler français.",
    " venir demain.",
    " un café.",
    " partir tôt.",
    " nager.",
    " m'aider.",
    " une chambre.",
    " être à l'heure.",
    " cuisiner.",
    " entrer.",
    " travailler ici.",
    " un ticket.",
    " rester.",
    " où habite Marie.",
    " aller à l'aéroport.",
  ],
  writePrompts: [
    "Pouvoir / nager :",
    "Vouloir / un café :",
    "Devoir / partir :",
    "Savoir / cuisiner :",
    "Pouvoir / m'aider :",
    "Vouloir / venir :",
    "Devoir / travailler :",
    "Savoir / parler français :",
    "Pouvoir / entrer :",
    "Vouloir / une chambre :",
  ],
  verbChoicePool: [
    qc("Je ___ parler français.", ["peux", "veux", "dois", "sais"]),
    qc("Tu ___ un café ?", ["veux", "peux", "dois", "sais"]),
    qc("Il ___ partir tôt.", ["doit", "peut", "veut", "sait"]),
    qc("Nous ___ entrer ?", ["pouvons", "voulons", "devons", "savons"]),
    qc("Vous ___ une chambre ?", ["voulez", "pouvez", "devez", "savez"]),
    qc("Ils ___ aller à l'aéroport.", ["doivent", "peuvent", "veulent", "savent"]),
    qc("Elle ___ cuisiner.", ["sait", "peut", "veut", "doit"]),
    qc("Je ___ nager.", ["sais", "peux", "veux", "dois"]),
    qc("Tu ___ m'aider ?", ["peux", "veux", "dois", "sais"]),
    qc("On ___ être à l'heure.", ["doit", "peut", "veut", "sait"]),
    qc("Nous ___ un ticket.", ["voulons", "pouvons", "devons", "savons"]),
    qc("Vous ___ rester ?", ["pouvez", "voulez", "devez", "savez"]),
    qc("Ils ___ travailler ici.", ["peuvent", "veulent", "doivent", "savent"]),
    qc("Je ___ venir demain.", ["veux", "peux", "dois", "sais"]),
    qc("Elle ___ où habite Marie.", ["sait", "peut", "veut", "doit"]),
    qc("Tu ___ partir ?", ["dois", "peux", "veux", "sais"]),
    qc("Il ___ un café.", ["veut", "peut", "doit", "sait"]),
    qc("Nous ___ nager.", ["savons", "pouvons", "voulons", "devons"]),
    qc("Vous ___ parler français.", ["savez", "pouvez", "voulez", "devez"]),
    qc("Ils ___ une chambre.", ["veulent", "peuvent", "doivent", "savent"]),
    qc("Je ___ travailler.", ["dois", "peux", "veux", "sais"]),
    qc("Elle ___ entrer.", ["peut", "veut", "doit", "sait"]),
    qc("Tu ___ cuisiner ?", ["sais", "peux", "veux", "dois"]),
    qc("On ___ un ticket.", ["veut", "peut", "doit", "sait"]),
    qc("Nous ___ partir tôt.", ["devons", "pouvons", "voulons", "savons"]),
  ],
};

const ACHETER: VerbConj = {
  infinitive: "acheter",
  stem: "achèt",
  hint: "j'achète / nous achetons",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["achète", "achètes", "achète", "achète", "achetons", "achetez", "achètent", "achètent"],
};
const APPELER: VerbConj = {
  infinitive: "appeler",
  stem: "appell",
  hint: "j'appelle / nous appelons",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["appelle", "appelles", "appelle", "appelle", "appelons", "appelez", "appellent", "appellent"],
};
const PREFERER: VerbConj = {
  infinitive: "préférer",
  stem: "préfèr",
  hint: "je préfère / nous préférons",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["préfère", "préfères", "préfère", "préfère", "préférons", "préférez", "préfèrent", "préfèrent"],
};
const VOYAGER: VerbConj = {
  infinitive: "voyager",
  stem: "voyag",
  hint: "nous voyageons",
  endings: ["e", "es", "e", "e", "eons", "ez", "ent", "ent"],
  forms: ["voyage", "voyages", "voyage", "voyage", "voyageons", "voyagez", "voyagent", "voyagent"],
};
const COMMENCER: VerbConj = {
  infinitive: "commencer",
  stem: "commenc",
  hint: "nous commençons",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["commence", "commences", "commence", "commence", "commençons", "commencez", "commencent", "commencent"],
};
const ENVOYER: VerbConj = {
  infinitive: "envoyer",
  stem: "envoi",
  hint: "j'envoie / nous envoyons",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["envoie", "envoies", "envoie", "envoie", "envoyons", "envoyez", "envoient", "envoient"],
};

/** G1.8 — -er particuliers + aller */
export const G1_8_PROFILE: G1LessonProfile = {
  style: "form",
  verbs: [ALLER, ACHETER, APPELER, PREFERER, VOYAGER, COMMENCER, ENVOYER],
  tails: [
    " au cinéma.",
    " du pain.",
    " le médecin.",
    " lire.",
    " souvent.",
    " demain.",
    " un mail.",
    " à la piscine.",
    " du beurre.",
    " des amis.",
    " sortir.",
    " en Espagne.",
    " jeudi.",
    " une lettre.",
    " en groupe.",
  ],
  writePrompts: [
    "Aller / au cinéma :",
    "Acheter / du pain :",
    "Appeler / un ami :",
    "Préférer / lire :",
    "Voyager / souvent :",
    "Commencer / demain :",
    "Envoyer / un mail :",
    "Aller / à la piscine :",
    "Acheter / du beurre :",
    "Préférer / sortir :",
  ],
  verbChoicePool: [
    qc("Je ___ au cinéma.", ["vais", "achète", "appelle", "préfère"]),
    qc("Nous ___ à la piscine.", ["allons", "achetons", "appelons", "préférons"]),
    qc("Ils ___ en Espagne.", ["vont", "achètent", "appellent", "préfèrent"]),
    qc("J'___ du pain.", ["achète", "vais", "appelle", "envoie"]),
    qc("Tu ___ du beurre ?", ["achètes", "vas", "appelles", "préfères"]),
    qc("Nous ___ en groupe.", ["voyageons", "allons", "achetons", "appelons"]),
    qc("Nous ___ jeudi.", ["commençons", "allons", "achetons", "envoyons"]),
    qc("J'___ une lettre.", ["envoie", "vais", "achète", "appelle"]),
    qc("Ils ___ des amis.", ["appellent", "vont", "achètent", "préfèrent"]),
    qc("Je ___ sortir.", ["préfère", "vais", "achète", "appelle"]),
    qc("Vous ___ au gymnase.", ["allez", "achetez", "appelez", "préférez"]),
    qc("Elle ___ le médecin.", ["appelle", "va", "achète", "envoie"]),
    qc("Tu ___ du beurre.", ["achètes", "vas", "appelles", "envoies"]),
    qc("Ils ___ souvent.", ["voyagent", "vont", "achètent", "appellent"]),
    qc("On ___ demain.", ["commence", "va", "achète", "appelle"]),
    qc("Je ___ un mail.", ["envoie", "vais", "achète", "appelle"]),
    qc("Nous ___ lire.", ["préférons", "allons", "achetons", "envoyons"]),
    qc("Vous ___ du pain ?", ["achetez", "allez", "appelez", "envoyez"]),
    qc("Il ___ à la médiathèque.", ["va", "achète", "appelle", "envoie"]),
    qc("Elles ___ des amis.", ["appellent", "vont", "achètent", "préfèrent"]),
    qc("Tu ___ au cinéma ?", ["vas", "achètes", "appelles", "préfères"]),
    qc("Nous ___ une lettre.", ["envoyons", "allons", "achetons", "appelons"]),
    qc("Je ___ en vacances.", ["vais", "achète", "appelle", "préfère"]),
    qc("Ils ___ demain.", ["commencent", "vont", "achètent", "envoient"]),
    qc("Elle ___ lire.", ["préfère", "va", "achète", "envoie"]),
  ],
};

const FINIR = ir("finir", "fin");
const CHOISIR = ir("choisir", "chois");
const OUVRIR: VerbConj = {
  infinitive: "ouvrir",
  stem: "ouvr",
  hint: "ouvre / ouvrons",
  endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
  forms: ["ouvre", "ouvres", "ouvre", "ouvre", "ouvrons", "ouvrez", "ouvrent", "ouvrent"],
};
const PARTIR: VerbConj = {
  infinitive: "partir",
  stem: "par",
  hint: "pars / part / partons",
  endings: ["s", "s", "t", "t", "tons", "tez", "tent", "tent"],
  forms: ["pars", "pars", "part", "part", "partons", "partez", "partent", "partent"],
};
const DORMIR: VerbConj = {
  infinitive: "dormir",
  stem: "dor",
  hint: "dors / dort / dormons",
  endings: ["s", "s", "t", "t", "mons", "mez", "ment", "ment"],
  forms: ["dors", "dors", "dort", "dort", "dormons", "dormez", "dorment", "dorment"],
};
const VENIR: VerbConj = {
  infinitive: "venir",
  stem: "vien",
  hint: "viens / vient / venons / viennent",
  forms: ["viens", "viens", "vient", "vient", "venons", "venez", "viennent", "viennent"],
};
const SERVIR: VerbConj = {
  infinitive: "servir",
  stem: "ser",
  hint: "sers / sert / servons",
  endings: ["s", "s", "t", "t", "vons", "vez", "vent", "vent"],
  forms: ["sers", "sers", "sert", "sert", "servons", "servez", "servent", "servent"],
};

/** G1.9 — -ir */
export const G1_9_PROFILE: G1LessonProfile = {
  style: "form",
  verbs: [FINIR, CHOISIR, OUVRIR, PARTIR, DORMIR, VENIR, SERVIR],
  tails: [
    " le travail.",
    " un dessert.",
    " la porte.",
    " en vacances.",
    " à l'hôtel.",
    " une pizza.",
    " seul(e).",
    " le fromage.",
    " des fleurs.",
    " en métro.",
    " les bagages.",
    " ensemble.",
    " lundi.",
    " bien.",
    " le petit-déjeuner.",
  ],
  writePrompts: [
    "Finir / le travail :",
    "Choisir / un dessert :",
    "Ouvrir / la porte :",
    "Partir / en vacances :",
    "Dormir / à l'hôtel :",
    "Venir / demain :",
    "Servir / une pizza :",
    "Finir / le fromage :",
    "Partir / lundi :",
    "Dormir / bien :",
  ],
  verbChoicePool: [
    qc("Je ___ le petit-déjeuner.", ["finis", "ouvre", "pars", "dors"]),
    qc("Nous ___ le plat.", ["finissons", "ouvrons", "partons", "dormons"]),
    qc("Ils ___ le dessert.", ["finissent", "ouvrent", "partent", "dorment"]),
    qc("J'___ la porte.", ["ouvre", "finis", "pars", "dors"]),
    qc("Vous ___ le lave-vaisselle.", ["ouvrez", "finissez", "partez", "dormez"]),
    qc("Je ___ en vacances.", ["pars", "finis", "ouvre", "dors"]),
    qc("Nous ___ à l'hôtel.", ["dormons", "finissons", "partons", "venons"]),
    qc("Il ___ une pizza.", ["sert", "finit", "ouvre", "part"]),
    qc("Tu ___ en métro.", ["viens", "finis", "ouvres", "pars"]),
    qc("Ils ___ le travail.", ["finissent", "ouvrent", "partent", "dorment"]),
    qc("Vous ___ ensemble.", ["partez", "finissez", "ouvrez", "dormez"]),
    qc("Elle ___ bien.", ["dort", "finit", "ouvre", "part"]),
    qc("Nous ___ ensemble.", ["venons", "finissons", "ouvrons", "dormons"]),
    qc("Tu ___ la porte.", ["ouvres", "finis", "pars", "dors"]),
    qc("Ils ___ lundi.", ["partent", "finissent", "ouvrent", "dorment"]),
    qc("Je ___ un dessert.", ["choisis", "finis", "ouvre", "pars"]),
    qc("Elle ___ un dessert.", ["choisit", "finit", "ouvre", "part"]),
    qc("Vous ___ le fromage.", ["finissez", "ouvrez", "partez", "dormez"]),
    qc("Il ___ en vacances.", ["part", "finit", "ouvre", "dort"]),
    qc("Nous ___ une pizza.", ["servons", "finissons", "ouvrons", "partons"]),
    qc("Tu ___ seul ?", ["viens", "finis", "ouvres", "pars"]),
    qc("Ils ___ la porte.", ["ouvrent", "finissent", "partent", "dorment"]),
    qc("Je ___ à l'hôtel.", ["dors", "finis", "ouvre", "pars"]),
    qc("Elle ___ le travail.", ["finit", "ouvre", "part", "dort"]),
    qc("Vous ___ demain ?", ["venez", "finissez", "ouvrez", "partez"]),
  ],
};

const LIRE: VerbConj = {
  infinitive: "lire",
  stem: "li",
  hint: "lis / lit / lisons",
  forms: ["lis", "lis", "lit", "lit", "lisons", "lisez", "lisent", "lisent"],
};
const ECRIRE: VerbConj = {
  infinitive: "écrire",
  stem: "écri",
  hint: "écris / écrit / écrivons",
  forms: ["écris", "écris", "écrit", "écrit", "écrivons", "écrivez", "écrivent", "écrivent"],
};
const FAIRE: VerbConj = {
  infinitive: "faire",
  stem: "",
  hint: "fais / fait / faisons / faites / font",
  forms: ["fais", "fais", "fait", "fait", "faisons", "faites", "font", "font"],
};
const PRENDRE: VerbConj = {
  infinitive: "prendre",
  stem: "prend",
  hint: "prends / prend / prenons / prennent",
  forms: ["prends", "prends", "prend", "prend", "prenons", "prenez", "prennent", "prennent"],
};
const DIRE: VerbConj = {
  infinitive: "dire",
  stem: "di",
  hint: "dis / dit / disons / dites / disent",
  forms: ["dis", "dis", "dit", "dit", "disons", "dites", "disent", "disent"],
};
const BOIRE: VerbConj = {
  infinitive: "boire",
  stem: "boi",
  hint: "bois / boit / buvons / boivent",
  forms: ["bois", "bois", "boit", "boit", "buvons", "buvez", "boivent", "boivent"],
};
const VOIR: VerbConj = {
  infinitive: "voir",
  stem: "voi",
  hint: "vois / voit / voyons / voient",
  forms: ["vois", "vois", "voit", "voit", "voyons", "voyez", "voient", "voient"],
};
const CONNAITRE: VerbConj = {
  infinitive: "connaître",
  stem: "connai",
  hint: "connais / connaît / connaissons",
  forms: ["connais", "connais", "connaît", "connaît", "connaissons", "connaissez", "connaissent", "connaissent"],
};
const METTRE: VerbConj = {
  infinitive: "mettre",
  stem: "met",
  hint: "mets / met / mettons / mettent",
  forms: ["mets", "mets", "met", "met", "mettons", "mettez", "mettent", "mettent"],
};

/** G1.10 — -re / -oir / irréguliers */
export const G1_10_PROFILE: G1LessonProfile = {
  style: "form",
  verbs: [LIRE, ECRIRE, FAIRE, PRENDRE, DIRE, BOIRE, VOIR, CONNAITRE, METTRE, SAVOIR],
  tails: [
    " un magazine.",
    " une lettre.",
    " du rugby.",
    " de l'escalade.",
    " « oui ».",
    " le métro.",
    " le bateau.",
    " conduire.",
    " mes voisins.",
    " une ville.",
    " de l'eau.",
    " un chapeau.",
    " le journal.",
    " du foot.",
    " Paris.",
  ],
  writePrompts: [
    "Lire / le journal :",
    "Écrire / une lettre :",
    "Faire / du sport :",
    "Prendre / le bus :",
    "Dire / oui :",
    "Boire / de l'eau :",
    "Voir / une ville :",
    "Connaître / Paris :",
    "Mettre / un chapeau :",
    "Savoir / nager :",
  ],
  verbChoicePool: [
    qc("Je ___ un magazine.", ["lis", "écris", "fais", "prends"]),
    qc("Nous ___ une lettre.", ["écrivons", "lisons", "faisons", "prenons"]),
    qc("Vous ___ du rugby.", ["faites", "lisez", "écrivez", "prenez"]),
    qc("Ils ___ de l'escalade.", ["font", "lisent", "écrivent", "prennent"]),
    qc("Vous ___ « Oui ».", ["dites", "lisez", "faites", "prenez"]),
    qc("Je ___ le métro.", ["prends", "lis", "fais", "bois"]),
    qc("Ils ___ le bateau.", ["prennent", "lisent", "font", "boivent"]),
    qc("Je ___ conduire.", ["sais", "connais", "lis", "fais"]),
    qc("Je ___ mes voisins.", ["connais", "sais", "lis", "vois"]),
    qc("Nous ___ une ville.", ["voyons", "lisons", "faisons", "prenons"]),
    qc("Vous ___ de l'eau.", ["buvez", "lisez", "faites", "prenez"]),
    qc("Elle ___ un chapeau.", ["met", "lit", "fait", "prend"]),
    qc("Tu ___ le journal.", ["lis", "écris", "fais", "prends"]),
    qc("Ils ___ du vélo.", ["font", "lisent", "prennent", "boivent"]),
    qc("Je ___ nager.", ["sais", "connais", "lis", "bois"]),
    qc("Elle ___ Paris.", ["connaît", "sait", "lit", "voit"]),
    qc("Nous ___ le journal.", ["lisons", "écrivons", "faisons", "prenons"]),
    qc("Tu ___ le bus ?", ["prends", "lis", "fais", "bois"]),
    qc("Ils ___ mal.", ["écrivent", "lisent", "font", "prennent"]),
    qc("Vous ___ du foot.", ["faites", "lisez", "dites", "prenez"]),
    qc("Je ___ une carte.", ["vois", "lis", "fais", "prends"]),
    qc("On ___ le train.", ["prend", "lit", "fait", "boit"]),
    qc("Elles ___ de l'eau.", ["boivent", "lisent", "font", "prennent"]),
    qc("Il ___ le journal.", ["lit", "écrit", "fait", "prend"]),
    qc("Nous ___ « non ».", ["disons", "lisons", "faisons", "prenons"]),
  ],
};

/** G1.11 — présent progressif */
export const G1_11_PROFILE: G1LessonProfile = {
  style: "form",
  progressif: true,
  verbs: [MANGER, TRAVAILLER, ECOUTER, PARLER, REGARDER, ETUDIER, HABITER, AIMER],
  tails: [
    ".",
    " maintenant.",
    " en classe.",
    " à la maison.",
    " au bureau.",
    " dans la cuisine.",
    " dehors.",
    " ici.",
    " encore.",
    " tranquillement.",
    " avec des amis.",
    " le soir.",
    " ce matin.",
    " au salon.",
    " à l'école.",
  ],
  writePrompts: [
    "Être en train de / manger :",
    "Être en train de / travailler :",
    "Être en train d' / écouter :",
    "Être en train de / parler :",
    "Être en train de / regarder :",
    "Être en train d' / étudier :",
    "Être en train d' / habiter :",
    "Être en train d' / aimer :",
    "Être en train de / lire :",
    "Être en train de / écrire :",
  ],
  verbChoicePool: [
    qc("Je ___ en train de manger.", ["suis", "es", "est", "sommes"]),
    qc("Il ___ en train de dormir.", ["est", "es", "suis", "sont"]),
    qc("Nous ___ en train d'apprendre.", ["sommes", "êtes", "suis", "sont"]),
    qc("Tu ___ en train de répondre ?", ["es", "est", "suis", "êtes"]),
    qc("Vous ___ en train de manger.", ["êtes", "sommes", "sont", "es"]),
    qc("Ils ___ en train de travailler.", ["sont", "est", "suis", "êtes"]),
    qc("Elle ___ en train d'écrire.", ["est", "es", "suis", "sont"]),
    qc("On ___ en train de partir.", ["est", "sont", "suis", "es"]),
    qc("Elles ___ en train de se préparer.", ["sont", "est", "sommes", "êtes"]),
    qc("Je ___ en train de prendre ma douche.", ["suis", "es", "est", "sommes"]),
    qc("Nous ___ en train de parler.", ["sommes", "êtes", "suis", "sont"]),
    qc("Tu ___ en train d'écouter ?", ["es", "est", "suis", "êtes"]),
    qc("Il ___ en train de regarder la télé.", ["est", "es", "suis", "sont"]),
    qc("Vous ___ en train d'étudier.", ["êtes", "sommes", "sont", "es"]),
    qc("Ils ne ___ pas en train de travailler.", ["sont", "est", "suis", "êtes"]),
    qc("Elle est en train ___ écrire.", ["d'", "de", "à", "pour"]),
    qc("Nous sommes en train ___ apprendre.", ["d'", "de", "à", "pour"]),
    qc("Ils sont en train ___ se préparer.", ["de", "d'", "à", "pour"]),
    qc("Je suis en train ___ manger.", ["de", "d'", "à", "pour"]),
    qc("Tu es en train ___ répondre ?", ["de", "d'", "à", "pour"]),
    qc("On ___ en train de lire.", ["est", "sont", "suis", "es"]),
    qc("Vous ___ en train de boire.", ["êtes", "sommes", "sont", "es"]),
    qc("Elles ___ en train de parler.", ["sont", "est", "sommes", "êtes"]),
    qc("Il ___ en train d'habiter ici ? Non !", ["est", "es", "suis", "sont"]),
    qc("Je ___ en train de travailler.", ["suis", "es", "est", "sommes"]),
  ],
};

export const G1_EXERCISES = {
  "G1.2": () => buildG1VerbExercises(G1_2_PROFILE),
  "G1.3": () => buildG1VerbExercises(G1_3_PROFILE),
  "G1.5": () => buildG1VerbExercises(G1_5_PROFILE),
  "G1.6": () => buildG1VerbExercises(G1_6_PROFILE),
  "G1.7": () => buildG1VerbExercises(G1_7_PROFILE),
  "G1.8": () => buildG1VerbExercises(G1_8_PROFILE),
  "G1.9": () => buildG1VerbExercises(G1_9_PROFILE),
  "G1.10": () => buildG1VerbExercises(G1_10_PROFILE),
  "G1.11": () => buildG1VerbExercises(G1_11_PROFILE),
} as const;
