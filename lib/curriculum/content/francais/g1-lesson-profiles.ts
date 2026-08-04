import type { VerbConj } from "./conj-exercise-builders";
import {
  buildG1VerbExercises,
  er,
  ir,
  reflEr,
  reflErVowel,
  type G1Gabarit,
  type G1LessonProfile,
  type G1VerbChoiceGabarit,
} from "./g1-exercise-builders";

// ── Verbes ────────────────────────────────────────────────────────────────────

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
const CHERCHER = er("chercher", "cherch");

const SE_LEVER: VerbConj = {
  infinitive: "se lever",
  stem: "l",
  hint: "pronominal",
  endings: ["ève", "èves", "ève", "ève", "evons", "evez", "èvent", "èvent"],
  forms: ["lève", "lèves", "lève", "lève", "levons", "levez", "lèvent", "lèvent"],
  reflexive: ["me", "te", "se", "se", "nous", "vous", "se", "se"],
};
const SE_COUCHER = reflEr("se coucher", "couch");
const SE_DOUCHER = reflEr("se doucher", "douch");
const SE_PREPARER = reflEr("se préparer", "prépar");
const S_HABILLER = reflErVowel("s'habiller", "habill");
const S_APPELER: VerbConj = {
  infinitive: "s'appeler",
  stem: "appel",
  hint: "pronominal",
  endings: ["le", "les", "le", "le", "ons", "ez", "lent", "lent"],
  forms: ["appelle", "appelles", "appelle", "appelle", "appelons", "appelez", "appellent", "appellent"],
  reflexive: ["m'", "t'", "s'", "s'", "nous", "vous", "s'", "s'"],
};
const S_AMUSER = reflErVowel("s'amuser", "amus");
const SE_REVEILLER = reflEr("se réveiller", "réveill");

const POUVOIR: VerbConj = {
  infinitive: "pouvoir",
  stem: "p",
  hint: "peux / peut / pouvons / pouvez / peuvent",
  endings: ["eux", "eux", "eut", "eut", "ouvons", "ouvez", "euvent", "euvent"],
  forms: ["peux", "peux", "peut", "peut", "pouvons", "pouvez", "peuvent", "peuvent"],
};
const VOULOIR: VerbConj = {
  infinitive: "vouloir",
  stem: "v",
  hint: "veux / veut / voulons / voulez / veulent",
  endings: ["eux", "eux", "eut", "eut", "oulons", "oulez", "eulent", "eulent"],
  forms: ["veux", "veux", "veut", "veut", "voulons", "voulez", "veulent", "veulent"],
};
const DEVOIR: VerbConj = {
  infinitive: "devoir",
  stem: "d",
  hint: "dois / doit / devons / devez / doivent",
  endings: ["ois", "ois", "oit", "oit", "evons", "evez", "oivent", "oivent"],
  forms: ["dois", "dois", "doit", "doit", "devons", "devez", "doivent", "doivent"],
};
const SAVOIR: VerbConj = {
  infinitive: "savoir",
  stem: "s",
  hint: "sais / sait / savons / savez / savent",
  endings: ["ais", "ais", "ait", "ait", "avons", "avez", "avent", "avent"],
  forms: ["sais", "sais", "sait", "sait", "savons", "savez", "savent", "savent"],
};

const ACHETER: VerbConj = {
  infinitive: "acheter",
  stem: "ach",
  hint: "j'achète / nous achetons",
  endings: ["ète", "ètes", "ète", "ète", "etons", "etez", "ètent", "ètent"],
  forms: ["achète", "achètes", "achète", "achète", "achetons", "achetez", "achètent", "achètent"],
};
const APPELER: VerbConj = {
  infinitive: "appeler",
  stem: "appel",
  hint: "j'appelle / nous appelons",
  endings: ["le", "les", "le", "le", "ons", "ez", "lent", "lent"],
  forms: ["appelle", "appelles", "appelle", "appelle", "appelons", "appelez", "appellent", "appellent"],
};
const PREFERER: VerbConj = {
  infinitive: "préférer",
  stem: "préf",
  hint: "je préfère / nous préférons",
  endings: ["ère", "ères", "ère", "ère", "érons", "érez", "èrent", "èrent"],
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
  stem: "commen",
  hint: "nous commençons",
  endings: ["ce", "ces", "ce", "ce", "çons", "cez", "cent", "cent"],
  forms: ["commence", "commences", "commence", "commence", "commençons", "commencez", "commencent", "commencent"],
};
const ENVOYER: VerbConj = {
  infinitive: "envoyer",
  stem: "envo",
  hint: "j'envoie / nous envoyons",
  endings: ["ie", "ies", "ie", "ie", "yons", "yez", "ient", "ient"],
  forms: ["envoie", "envoies", "envoie", "envoie", "envoyons", "envoyez", "envoient", "envoient"],
};

/* Radical pédagogique fini-/choisi- (terminaisons s/t/ssons/ssez/ssent). */
const FINIR = ir("finir", "fini");
const CHOISIR = ir("choisir", "choisi");
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
/* Radical v- : venons/venez ne partagent pas « vien ». */
const VENIR: VerbConj = {
  infinitive: "venir",
  stem: "v",
  hint: "viens / vient / venons / viennent",
  endings: ["iens", "iens", "ient", "ient", "enons", "enez", "iennent", "iennent"],
  forms: ["viens", "viens", "vient", "vient", "venons", "venez", "viennent", "viennent"],
};
const SERVIR: VerbConj = {
  infinitive: "servir",
  stem: "ser",
  hint: "sers / sert / servons",
  endings: ["s", "s", "t", "t", "vons", "vez", "vent", "vent"],
  forms: ["sers", "sers", "sert", "sert", "servons", "servez", "servent", "servent"],
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
  stem: "f",
  hint: "fais / fait / faisons / faites / font",
  endings: ["ais", "ais", "ait", "ait", "aisons", "aites", "ont", "ont"],
  forms: ["fais", "fais", "fait", "fait", "faisons", "faites", "font", "font"],
};
const PRENDRE: VerbConj = {
  infinitive: "prendre",
  stem: "pren",
  hint: "prends / prend / prenons / prennent",
  endings: ["ds", "ds", "d", "d", "ons", "ez", "nent", "nent"],
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
  stem: "b",
  hint: "bois / boit / buvons / boivent",
  endings: ["ois", "ois", "oit", "oit", "uvons", "uvez", "oivent", "oivent"],
  forms: ["bois", "bois", "boit", "boit", "buvons", "buvez", "boivent", "boivent"],
};
const VOIR: VerbConj = {
  infinitive: "voir",
  stem: "v",
  hint: "vois / voit / voyons / voient",
  endings: ["ois", "ois", "oit", "oit", "oyons", "oyez", "oient", "oient"],
  forms: ["vois", "vois", "voit", "voit", "voyons", "voyez", "voient", "voient"],
};
const CONNAITRE: VerbConj = {
  infinitive: "connaître",
  stem: "conna",
  hint: "connais / connaît / connaissons",
  endings: ["is", "is", "ît", "ît", "issons", "issez", "issent", "issent"],
  forms: ["connais", "connais", "connaît", "connaît", "connaissons", "connaissez", "connaissent", "connaissent"],
};
const METTRE: VerbConj = {
  infinitive: "mettre",
  stem: "me",
  hint: "mets / met / mettons / mettent",
  endings: ["ts", "ts", "t", "t", "ttons", "ttez", "ttent", "ttent"],
  forms: ["mets", "mets", "met", "met", "mettons", "mettez", "mettent", "mettent"],
};

function vc(verb: VerbConj, tail: string, distractors: VerbConj[]): G1VerbChoiceGabarit {
  return { verb, tail, distractors };
}

function g(verb: VerbConj, tail: string): G1Gabarit {
  return { verb, tail };
}

// ── G1.2 — être ───────────────────────────────────────────────────────────────

export const G1_2_PROFILE: G1LessonProfile = {
  style: "form",
  gabarits: [
    g(ETRE, " à Genève."),
    g(ETRE, " à Paris."),
    g(ETRE, " en retard."),
    g(ETRE, " ici."),
    g(ETRE, " à l'école."),
    g(ETRE, " en vacances."),
    g(ETRE, " à Lyon."),
    g(ETRE, " à la maison."),
    g(ETRE, " en Suisse."),
    g(ETRE, " au travail."),
    g(ETRE, " à l'hôpital."),
    g(ETRE, " en classe."),
    g(ETRE, " en ville."),
    g(ETRE, " en France."),
    g(ETRE, " à l'université."),
    g(ETRE, " en cours."),
    g(ETRE, " au bureau."),
    g(ETRE, " à la piscine."),
    g(ETRE, " au cinéma."),
    g(ETRE, " au restaurant."),
    g(ETRE, " en voyage."),
    g(ETRE, " à la gare."),
    g(ETRE, " en forme."),
    g(ETRE, " d'accord."),
    g(ETRE, " à Bruxelles."),
  ],
  writePrompts: [
    "Être / à Genève :",
    "Être / en retard :",
    "Être / à l'école :",
    "Être / en vacances :",
    "Être / à Paris :",
    "Être / au travail :",
    "Être / à la maison :",
    "Être / en Suisse :",
    "Être / au cinéma :",
    "Être / en France :",
  ],
};

// ── G1.3 — avoir ──────────────────────────────────────────────────────────────

export const G1_3_PROFILE: G1LessonProfile = {
  style: "form",
  gabarits: [
    g(AVOIR, " faim."),
    g(AVOIR, " 20 ans."),
    g(AVOIR, " un frère."),
    g(AVOIR, " soif."),
    g(AVOIR, " une voiture."),
    g(AVOIR, " peur."),
    g(AVOIR, " raison."),
    g(AVOIR, " un appartement."),
    g(AVOIR, " froid."),
    g(AVOIR, " une question."),
    g(AVOIR, " chaud."),
    g(AVOIR, " un vélo."),
    g(AVOIR, " mal à la tête."),
    g(AVOIR, " de la chance."),
    g(AVOIR, " un rendez-vous."),
    g(AVOIR, " une sœur."),
    g(AVOIR, " un chien."),
    g(AVOIR, " tort."),
    g(AVOIR, " un livre."),
    g(AVOIR, " une idée."),
    g(AVOIR, " 30 ans."),
    g(AVOIR, " un problème."),
    g(AVOIR, " du temps."),
    g(AVOIR, " un ami."),
    g(AVOIR, " une maison."),
  ],
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
};

// ── G1.5 — -er général ────────────────────────────────────────────────────────

const G15_GABARITS: G1Gabarit[] = [
  g(MANGER, " une pomme."),
  g(MANGER, " une pizza."),
  g(HABITER, " à Genève."),
  g(HABITER, " à Paris."),
  g(PARLER, " français."),
  g(PARLER, " anglais."),
  g(ECOUTER, " la radio."),
  g(ECOUTER, " de la musique."),
  g(REGARDER, " la télé."),
  g(REGARDER, " un film."),
  g(TRAVAILLER, " à l'hôpital."),
  g(TRAVAILLER, " dans un bureau."),
  g(AIMER, " le chocolat."),
  g(AIMER, " les animaux."),
  g(PENSER, " au projet."),
  g(PENSER, " à ses amis."),
  g(JOUER, " au football."),
  g(JOUER, " au tennis."),
  g(ETUDIER, " le français."),
  g(ETUDIER, " les maths."),
  g(CHERCHER, " un livre."),
  g(CHERCHER, " ses clés."),
  g(MANGER, " du pain."),
  g(PARLER, " au téléphone."),
  g(HABITER, " en Suisse."),
];

export const G1_5_PROFILE: G1LessonProfile = {
  style: "ending",
  gabarits: G15_GABARITS,
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
  verbChoiceGabarits: [
    vc(MANGER, " une pomme.", [ECOUTER, HABITER, PARLER]),
    vc(ECOUTER, " la radio.", [MANGER, HABITER, JOUER]),
    vc(HABITER, " à Genève.", [MANGER, ECOUTER, JOUER]),
    vc(PARLER, " français.", [MANGER, HABITER, JOUER]),
    vc(REGARDER, " la télé.", [HABITER, MANGER, PENSER]),
    vc(TRAVAILLER, " à l'hôpital.", [MANGER, ECOUTER, HABITER]),
    vc(AIMER, " le chocolat.", [HABITER, PARLER, JOUER]),
    vc(JOUER, " au football.", [MANGER, HABITER, ECOUTER]),
    vc(ETUDIER, " le français.", [HABITER, MANGER, ECOUTER]),
    vc(PENSER, " au projet.", [MANGER, HABITER, ECOUTER]),
    vc(PARLER, " avec des amis.", [MANGER, HABITER, JOUER]),
    vc(HABITER, " en ville.", [MANGER, ECOUTER, PENSER]),
    vc(TRAVAILLER, " le matin.", [HABITER, ECOUTER, PENSER]),
    vc(ECOUTER, " le professeur.", [MANGER, HABITER, JOUER]),
    vc(MANGER, " une pizza.", [HABITER, PARLER, PENSER]),
    vc(HABITER, " à Paris.", [MANGER, ECOUTER, JOUER]),
    vc(JOUER, " le week-end.", [HABITER, PENSER, ETUDIER]),
    vc(AIMER, " le café.", [HABITER, PARLER, PENSER]),
    vc(ETUDIER, " à l'école.", [MANGER, HABITER, ECOUTER]),
    vc(PARLER, " anglais.", [MANGER, HABITER, JOUER]),
    vc(REGARDER, " un film.", [HABITER, MANGER, PENSER]),
    vc(MANGER, " du pain.", [HABITER, ECOUTER, PENSER]),
    vc(PARLER, " avec sa mère.", [HABITER, MANGER, ECOUTER]),
    vc(CHERCHER, " ses clés.", [MANGER, HABITER, ECOUTER]),
    vc(PENSER, " à ses amis.", [MANGER, HABITER, JOUER]),
  ],
};

// ── G1.6 — pronominaux ────────────────────────────────────────────────────────

export const G1_6_PROFILE: G1LessonProfile = {
  style: "form",
  gabarits: [
    g(SE_LEVER, " à 7 heures."),
    g(SE_LEVER, " tôt le matin."),
    g(SE_COUCHER, " à 22 heures."),
    g(SE_COUCHER, " tard le soir."),
    g(SE_DOUCHER, " le soir."),
    g(SE_DOUCHER, " après le sport."),
    g(SE_PREPARER, " pour l'école."),
    g(SE_PREPARER, " pour le travail."),
    g(S_HABILLER, " rapidement."),
    g(S_HABILLER, " pour sortir."),
    g(S_APPELER, " Marie."),
    g(S_APPELER, " Paul."),
    g(S_AMUSER, " avec des amis."),
    g(S_AMUSER, " au parc."),
    g(SE_REVEILLER, " à 6 heures."),
    g(SE_REVEILLER, " avec le réveil."),
    g(SE_LEVER, " avant 8 heures."),
    g(SE_COUCHER, " après le film."),
    g(SE_DOUCHER, " le matin."),
    g(SE_PREPARER, " en 10 minutes."),
    g(S_HABILLER, " en silence."),
    g(S_APPELER, " comment ?"),
    g(S_AMUSER, " bien."),
    g(SE_REVEILLER, " facilement."),
    g(SE_LEVER, " pour le petit-déjeuner."),
  ],
  writePrompts: [
    "Se lever / tôt :",
    "Se coucher / tard :",
    "Se doucher / le soir :",
    "Se préparer / pour l'école :",
    "S'habiller / bien :",
    "S'appeler / Leila :",
    "S'amuser / avec des amis :",
    "Se lever / à 7 h :",
    "Se coucher / à 22 h :",
    "Se préparer / pour le travail :",
  ],
  verbChoiceGabarits: [
    vc(SE_LEVER, " à 7 heures.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(SE_COUCHER, " à 22 heures.", [SE_LEVER, S_HABILLER, S_AMUSER]),
    vc(SE_DOUCHER, " le soir.", [SE_LEVER, S_APPELER, S_AMUSER]),
    vc(SE_PREPARER, " pour l'école.", [SE_LEVER, SE_COUCHER, S_AMUSER]),
    vc(S_APPELER, " Marie.", [SE_LEVER, SE_COUCHER, S_AMUSER]),
    vc(S_AMUSER, " avec des amis.", [SE_LEVER, SE_COUCHER, S_HABILLER]),
    vc(S_HABILLER, " pour sortir.", [SE_LEVER, SE_COUCHER, S_APPELER]),
    vc(SE_REVEILLER, " à 6 heures.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(SE_LEVER, " tôt le matin.", [SE_COUCHER, S_HABILLER, S_AMUSER]),
    vc(SE_COUCHER, " tard le soir.", [SE_LEVER, S_APPELER, S_AMUSER]),
    vc(SE_DOUCHER, " après le sport.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(SE_PREPARER, " pour le travail.", [SE_COUCHER, S_AMUSER, S_APPELER]),
    vc(S_HABILLER, " rapidement.", [SE_LEVER, SE_COUCHER, S_APPELER]),
    vc(S_APPELER, " Paul.", [SE_LEVER, SE_COUCHER, S_AMUSER]),
    vc(S_AMUSER, " au parc.", [SE_LEVER, SE_COUCHER, S_HABILLER]),
    vc(SE_REVEILLER, " avec le réveil.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(SE_LEVER, " avant 8 heures.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(SE_COUCHER, " après le film.", [SE_LEVER, S_HABILLER, S_AMUSER]),
    vc(SE_DOUCHER, " le matin.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(SE_PREPARER, " en 10 minutes.", [SE_COUCHER, S_AMUSER, S_APPELER]),
    vc(S_HABILLER, " en silence.", [SE_LEVER, SE_COUCHER, S_APPELER]),
    vc(S_AMUSER, " bien.", [SE_LEVER, SE_COUCHER, S_HABILLER]),
    vc(SE_REVEILLER, " facilement.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(SE_LEVER, " pour le petit-déjeuner.", [SE_COUCHER, S_APPELER, S_AMUSER]),
    vc(S_APPELER, " comment ?", [SE_LEVER, SE_COUCHER, S_AMUSER]),
  ],
};

// ── G1.7 — modaux ─────────────────────────────────────────────────────────────

export const G1_7_PROFILE: G1LessonProfile = {
  style: "form",
  gabarits: [
    g(POUVOIR, " parler français."),
    g(POUVOIR, " venir demain."),
    g(POUVOIR, " m'aider."),
    g(POUVOIR, " entrer."),
    g(POUVOIR, " rester ici."),
    g(VOULOIR, " un café."),
    g(VOULOIR, " une chambre."),
    g(VOULOIR, " un ticket."),
    g(VOULOIR, " partir tôt."),
    g(VOULOIR, " venir avec nous."),
    g(DEVOIR, " partir tôt."),
    g(DEVOIR, " être à l'heure."),
    g(DEVOIR, " travailler ici."),
    g(DEVOIR, " faire mes devoirs."),
    g(DEVOIR, " attendre le bus."),
    g(SAVOIR, " nager."),
    g(SAVOIR, " cuisiner."),
    g(SAVOIR, " parler anglais."),
    g(SAVOIR, " où habite Marie."),
    g(SAVOIR, " conduire."),
    g(POUVOIR, " ouvrir la porte."),
    g(VOULOIR, " un sandwich."),
    g(DEVOIR, " finir le travail."),
    g(SAVOIR, " lire le français."),
    g(POUVOIR, " prendre le métro."),
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
  verbChoiceGabarits: [
    vc(POUVOIR, " parler français.", [VOULOIR, DEVOIR, SAVOIR]),
    vc(VOULOIR, " un café.", [POUVOIR, DEVOIR, SAVOIR]),
    vc(DEVOIR, " partir tôt.", [POUVOIR, VOULOIR, SAVOIR]),
    vc(POUVOIR, " entrer.", [VOULOIR, DEVOIR, SAVOIR]),
    vc(VOULOIR, " une chambre.", [POUVOIR, DEVOIR, SAVOIR]),
    vc(DEVOIR, " aller à l'aéroport.", [POUVOIR, VOULOIR, SAVOIR]),
    vc(SAVOIR, " cuisiner.", [POUVOIR, VOULOIR, DEVOIR]),
    vc(SAVOIR, " nager.", [POUVOIR, VOULOIR, DEVOIR]),
    vc(POUVOIR, " m'aider.", [VOULOIR, DEVOIR, SAVOIR]),
    vc(DEVOIR, " être à l'heure.", [POUVOIR, VOULOIR, SAVOIR]),
    vc(VOULOIR, " un ticket.", [POUVOIR, DEVOIR, SAVOIR]),
    vc(POUVOIR, " rester ici.", [VOULOIR, DEVOIR, SAVOIR]),
    vc(POUVOIR, " travailler ici.", [VOULOIR, DEVOIR, SAVOIR]),
    vc(VOULOIR, " venir demain.", [POUVOIR, DEVOIR, SAVOIR]),
    vc(SAVOIR, " où habite Marie.", [POUVOIR, VOULOIR, DEVOIR]),
    vc(DEVOIR, " faire mes devoirs.", [POUVOIR, VOULOIR, SAVOIR]),
    vc(VOULOIR, " un sandwich.", [POUVOIR, DEVOIR, SAVOIR]),
    vc(POUVOIR, " ouvrir la porte.", [VOULOIR, DEVOIR, SAVOIR]),
    vc(SAVOIR, " parler anglais.", [POUVOIR, VOULOIR, DEVOIR]),
    vc(VOULOIR, " une chambre d'hôtel.", [POUVOIR, DEVOIR, SAVOIR]),
    vc(DEVOIR, " finir le travail.", [POUVOIR, VOULOIR, SAVOIR]),
    vc(POUVOIR, " prendre le métro.", [VOULOIR, DEVOIR, SAVOIR]),
    vc(SAVOIR, " conduire.", [POUVOIR, VOULOIR, DEVOIR]),
    vc(VOULOIR, " un ticket de métro.", [POUVOIR, DEVOIR, SAVOIR]),
    vc(DEVOIR, " attendre le bus.", [POUVOIR, VOULOIR, SAVOIR]),
  ],
};

// ── G1.8 — -er particuliers + aller ───────────────────────────────────────────

export const G1_8_PROFILE: G1LessonProfile = {
  style: "form",
  gabarits: [
    g(ALLER, " au cinéma."),
    g(ALLER, " à la piscine."),
    g(ALLER, " en Espagne."),
    g(ALLER, " à la médiathèque."),
    g(ALLER, " au gymnase."),
    g(ACHETER, " du pain."),
    g(ACHETER, " du beurre."),
    g(ACHETER, " des fruits."),
    g(ACHETER, " un ticket."),
    g(APPELER, " le médecin."),
    g(APPELER, " un ami."),
    g(APPELER, " ses parents."),
    g(PREFERER, " lire."),
    g(PREFERER, " sortir."),
    g(PREFERER, " le thé."),
    g(VOYAGER, " souvent."),
    g(VOYAGER, " en groupe."),
    g(VOYAGER, " en Europe."),
    g(COMMENCER, " demain."),
    g(COMMENCER, " le cours."),
    g(COMMENCER, " jeudi."),
    g(ENVOYER, " un mail."),
    g(ENVOYER, " une lettre."),
    g(ENVOYER, " un message."),
    g(ALLER, " en vacances."),
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
  verbChoiceGabarits: [
    vc(ALLER, " au cinéma.", [ACHETER, APPELER, PREFERER]),
    vc(ALLER, " à la piscine.", [ACHETER, APPELER, PREFERER]),
    vc(ALLER, " en Espagne.", [ACHETER, APPELER, PREFERER]),
    vc(ACHETER, " du pain.", [ALLER, APPELER, ENVOYER]),
    vc(ACHETER, " du beurre.", [ALLER, APPELER, ENVOYER]),
    vc(VOYAGER, " en groupe.", [ALLER, ACHETER, APPELER]),
    vc(COMMENCER, " jeudi.", [ALLER, ACHETER, ENVOYER]),
    vc(ENVOYER, " une lettre.", [ALLER, ACHETER, APPELER]),
    vc(APPELER, " des amis.", [ALLER, ACHETER, PREFERER]),
    vc(PREFERER, " sortir.", [ALLER, ACHETER, APPELER]),
    vc(ALLER, " au gymnase.", [ACHETER, APPELER, PREFERER]),
    vc(APPELER, " le médecin.", [ALLER, ACHETER, ENVOYER]),
    vc(ACHETER, " des fruits.", [ALLER, APPELER, ENVOYER]),
    vc(VOYAGER, " souvent.", [ALLER, ACHETER, APPELER]),
    vc(COMMENCER, " demain.", [ALLER, ACHETER, APPELER]),
    vc(ENVOYER, " un mail.", [ALLER, ACHETER, APPELER]),
    vc(PREFERER, " lire.", [ALLER, ACHETER, ENVOYER]),
    vc(ACHETER, " un ticket.", [ALLER, APPELER, ENVOYER]),
    vc(ALLER, " à la médiathèque.", [ACHETER, APPELER, ENVOYER]),
    vc(APPELER, " ses parents.", [ALLER, ACHETER, PREFERER]),
    vc(ALLER, " au cinéma ce soir.", [ACHETER, APPELER, PREFERER]),
    vc(ENVOYER, " un message.", [ALLER, ACHETER, APPELER]),
    vc(ALLER, " en vacances.", [ACHETER, APPELER, PREFERER]),
    vc(COMMENCER, " le cours.", [ALLER, ACHETER, ENVOYER]),
    vc(PREFERER, " le thé.", [ALLER, ACHETER, APPELER]),
  ],
};

// ── G1.9 — -ir ────────────────────────────────────────────────────────────────

export const G1_9_PROFILE: G1LessonProfile = {
  style: "form",
  gabarits: [
    g(FINIR, " le travail."),
    g(FINIR, " le petit-déjeuner."),
    g(FINIR, " le fromage."),
    g(CHOISIR, " un dessert."),
    g(CHOISIR, " un film."),
    g(OUVRIR, " la porte."),
    g(OUVRIR, " le lave-vaisselle."),
    g(OUVRIR, " la fenêtre."),
    g(PARTIR, " en vacances."),
    g(PARTIR, " lundi."),
    g(PARTIR, " demain matin."),
    g(DORMIR, " à l'hôtel."),
    g(DORMIR, " bien."),
    g(DORMIR, " pendant huit heures."),
    g(VENIR, " en métro."),
    g(VENIR, " seul."),
    g(VENIR, " demain."),
    g(SERVIR, " une pizza."),
    g(SERVIR, " le repas."),
    g(SERVIR, " le café."),
    g(FINIR, " ses devoirs."),
    g(CHOISIR, " une robe."),
    g(OUVRIR, " son livre."),
    g(PARTIR, " à 8 heures."),
    g(VENIR, " avec nous."),
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
  verbChoiceGabarits: [
    vc(FINIR, " le petit-déjeuner.", [OUVRIR, PARTIR, DORMIR]),
    vc(FINIR, " le plat.", [OUVRIR, PARTIR, DORMIR]),
    vc(FINIR, " le dessert.", [OUVRIR, PARTIR, DORMIR]),
    vc(OUVRIR, " la porte.", [FINIR, PARTIR, DORMIR]),
    vc(OUVRIR, " le lave-vaisselle.", [FINIR, PARTIR, DORMIR]),
    vc(PARTIR, " en vacances.", [FINIR, OUVRIR, DORMIR]),
    vc(DORMIR, " à l'hôtel.", [FINIR, PARTIR, VENIR]),
    vc(SERVIR, " une pizza.", [FINIR, OUVRIR, PARTIR]),
    vc(VENIR, " en métro.", [FINIR, OUVRIR, PARTIR]),
    vc(PARTIR, " ensemble.", [FINIR, OUVRIR, DORMIR]),
    vc(DORMIR, " bien.", [FINIR, OUVRIR, PARTIR]),
    vc(VENIR, " ensemble.", [FINIR, OUVRIR, DORMIR]),
    vc(PARTIR, " lundi.", [FINIR, OUVRIR, DORMIR]),
    vc(CHOISIR, " un dessert.", [FINIR, OUVRIR, PARTIR]),
    vc(FINIR, " le fromage.", [OUVRIR, PARTIR, DORMIR]),
    vc(PARTIR, " en vacances demain.", [FINIR, OUVRIR, DORMIR]),
    vc(SERVIR, " le repas.", [FINIR, OUVRIR, PARTIR]),
    vc(VENIR, " seul.", [FINIR, OUVRIR, PARTIR]),
    vc(OUVRIR, " la fenêtre.", [FINIR, PARTIR, DORMIR]),
    vc(DORMIR, " pendant huit heures.", [FINIR, OUVRIR, PARTIR]),
    vc(FINIR, " ses devoirs.", [OUVRIR, PARTIR, DORMIR]),
    vc(CHOISIR, " une robe.", [FINIR, OUVRIR, PARTIR]),
    vc(OUVRIR, " son livre.", [FINIR, PARTIR, DORMIR]),
    vc(PARTIR, " à 8 heures.", [FINIR, OUVRIR, DORMIR]),
    vc(VENIR, " avec nous.", [FINIR, OUVRIR, PARTIR]),
  ],
};

// ── G1.10 — -re / -oir ────────────────────────────────────────────────────────

export const G1_10_PROFILE: G1LessonProfile = {
  style: "form",
  gabarits: [
    g(LIRE, " un magazine."),
    g(LIRE, " le journal."),
    g(ECRIRE, " une lettre."),
    g(ECRIRE, " un message."),
    g(FAIRE, " du rugby."),
    g(FAIRE, " du foot."),
    g(FAIRE, " de l'escalade."),
    g(FAIRE, " du vélo."),
    g(DIRE, " oui."),
    g(DIRE, " non."),
    g(PRENDRE, " le métro."),
    g(PRENDRE, " le bateau."),
    g(PRENDRE, " le bus."),
    g(PRENDRE, " le train."),
    g(SAVOIR, " conduire."),
    g(SAVOIR, " nager."),
    g(CONNAITRE, " mes voisins."),
    g(CONNAITRE, " Paris."),
    g(VOIR, " une ville."),
    g(VOIR, " un film."),
    g(BOIRE, " de l'eau."),
    g(BOIRE, " un café."),
    g(METTRE, " un chapeau."),
    g(METTRE, " son manteau."),
    g(LIRE, " un livre."),
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
  verbChoiceGabarits: [
    vc(LIRE, " un magazine.", [ECRIRE, FAIRE, PRENDRE]),
    vc(ECRIRE, " une lettre.", [LIRE, FAIRE, PRENDRE]),
    vc(FAIRE, " du rugby.", [LIRE, ECRIRE, PRENDRE]),
    vc(FAIRE, " de l'escalade.", [LIRE, ECRIRE, PRENDRE]),
    vc(DIRE, " oui.", [LIRE, FAIRE, PRENDRE]),
    vc(PRENDRE, " le métro.", [LIRE, FAIRE, BOIRE]),
    vc(PRENDRE, " le bateau.", [LIRE, FAIRE, BOIRE]),
    vc(SAVOIR, " conduire.", [CONNAITRE, LIRE, FAIRE]),
    vc(CONNAITRE, " mes voisins.", [SAVOIR, LIRE, VOIR]),
    vc(VOIR, " une ville.", [LIRE, FAIRE, PRENDRE]),
    vc(BOIRE, " de l'eau.", [LIRE, FAIRE, PRENDRE]),
    vc(METTRE, " un chapeau.", [LIRE, FAIRE, PRENDRE]),
    vc(LIRE, " le journal.", [ECRIRE, FAIRE, PRENDRE]),
    vc(FAIRE, " du vélo.", [LIRE, PRENDRE, BOIRE]),
    vc(SAVOIR, " nager.", [CONNAITRE, LIRE, BOIRE]),
    vc(CONNAITRE, " Paris.", [SAVOIR, LIRE, VOIR]),
    vc(PRENDRE, " le bus.", [LIRE, FAIRE, BOIRE]),
    vc(ECRIRE, " un message.", [LIRE, FAIRE, PRENDRE]),
    vc(FAIRE, " du foot.", [LIRE, DIRE, PRENDRE]),
    vc(VOIR, " un film.", [LIRE, FAIRE, PRENDRE]),
    vc(PRENDRE, " le train.", [LIRE, FAIRE, BOIRE]),
    vc(BOIRE, " un café.", [LIRE, FAIRE, PRENDRE]),
    vc(LIRE, " un livre.", [ECRIRE, FAIRE, PRENDRE]),
    vc(DIRE, " non.", [LIRE, FAIRE, PRENDRE]),
    vc(METTRE, " son manteau.", [LIRE, FAIRE, PRENDRE]),
  ],
};

// ── G1.11 — présent progressif ────────────────────────────────────────────────

export const G1_11_PROFILE: G1LessonProfile = {
  style: "form",
  progressif: true,
  gabarits: [
    g(MANGER, " une pomme."),
    g(MANGER, " une pizza."),
    g(MANGER, " du pain."),
    g(TRAVAILLER, " à l'hôpital."),
    g(TRAVAILLER, " dans un bureau."),
    g(TRAVAILLER, " sur un projet."),
    g(ECOUTER, " la radio."),
    g(ECOUTER, " de la musique."),
    g(ECOUTER, " le professeur."),
    g(PARLER, " français."),
    g(PARLER, " au téléphone."),
    g(PARLER, " avec un ami."),
    g(REGARDER, " la télé."),
    g(REGARDER, " un film."),
    g(REGARDER, " les nouvelles."),
    g(ETUDIER, " le français."),
    g(ETUDIER, " les maths."),
    g(ETUDIER, " ses leçons."),
    g(LIRE, " le journal."),
    g(LIRE, " un livre."),
    g(LIRE, " un magazine."),
    g(ECRIRE, " une lettre."),
    g(ECRIRE, " un message."),
    g(ECRIRE, " un mail."),
    g(BOIRE, " un café."),
  ],
  writePrompts: [
    "Être en train de / manger une pomme :",
    "Être en train de / travailler :",
    "Être en train d' / écouter la radio :",
    "Être en train de / parler français :",
    "Être en train de / regarder la télé :",
    "Être en train d' / étudier le français :",
    "Être en train de / lire un livre :",
    "Être en train d' / écrire un mail :",
    "Être en train de / boire un café :",
    "Être en train de / finir le travail :",
  ],
  verbChoiceGabarits: [
    vc(MANGER, " une pomme.", [ECOUTER, PARLER, REGARDER]),
    vc(TRAVAILLER, " à l'hôpital.", [MANGER, ECOUTER, PARLER]),
    vc(ECOUTER, " la radio.", [MANGER, HABITER, JOUER]),
    vc(PARLER, " français.", [MANGER, REGARDER, ETUDIER]),
    vc(REGARDER, " la télé.", [MANGER, PARLER, ETUDIER]),
    vc(ETUDIER, " le français.", [MANGER, ECOUTER, REGARDER]),
    vc(LIRE, " le journal.", [ECRIRE, MANGER, PARLER]),
    vc(ECRIRE, " une lettre.", [LIRE, MANGER, PARLER]),
    vc(MANGER, " une pizza.", [ECOUTER, PARLER, REGARDER]),
    vc(TRAVAILLER, " dans un bureau.", [MANGER, ECOUTER, PARLER]),
    vc(ECOUTER, " de la musique.", [MANGER, PARLER, REGARDER]),
    vc(PARLER, " au téléphone.", [MANGER, REGARDER, ETUDIER]),
    vc(REGARDER, " un film.", [MANGER, PARLER, ETUDIER]),
    vc(ETUDIER, " les maths.", [MANGER, ECOUTER, REGARDER]),
    vc(LIRE, " un livre.", [ECRIRE, MANGER, PARLER]),
    vc(ECRIRE, " un message.", [LIRE, MANGER, PARLER]),
    vc(MANGER, " du pain.", [ECOUTER, PARLER, REGARDER]),
    vc(TRAVAILLER, " sur un projet.", [MANGER, ECOUTER, PARLER]),
    vc(ECOUTER, " le professeur.", [MANGER, PARLER, REGARDER]),
    vc(PARLER, " avec un ami.", [MANGER, REGARDER, ETUDIER]),
    vc(REGARDER, " les nouvelles.", [MANGER, PARLER, ETUDIER]),
    vc(ETUDIER, " ses leçons.", [MANGER, ECOUTER, REGARDER]),
    vc(ECRIRE, " un mail.", [LIRE, MANGER, PARLER]),
    vc(LIRE, " un magazine.", [ECRIRE, MANGER, PARLER]),
    vc(MANGER, " un sandwich.", [ECOUTER, PARLER, REGARDER]),
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
