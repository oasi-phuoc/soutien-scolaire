import { buildExpressPool, type ExpressMultiQuestion, type ExpressRawQ } from "./express-listening-helpers";
import { A1 } from "./express-lesson-factory";

export type ExpressListeningAudio = {
  id: string;
  audioSrc: string;
  audioLabel: string;
  transcript: string;
  instruction: string;
  pool: ExpressMultiQuestion[];
  /** Nombre de questions tirées par exercice (entraînement). */
  questionCount: number;
};

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

/* ── Audio 005 — Paolo / Nicole (présentation) ─────────────────────────── */

const POOL_005 = buildExpressPool("e1-1-005", [
  q({
    id: "005-q1",
    textQ: "Pourquoi Paolo pense-t-il que Nicole est française ?",
    text: ["Elle a un prénom français", "Elle habite en France", "Elle parle très bien français"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Paolo dit : « Tu as un _________ français. »",
    fill: "prénom",
    fillA: ["prenom"],
    vfQ: "Paolo pense que Nicole est française à cause de son prénom.",
    vfC: 0,
  }),
  q({
    id: "005-q2",
    textQ: "Quelle est la nationalité de Nicole ?",
    text: ["Allemande", "Française", "Italienne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nicole répond : « Non, je suis _________. »",
    fill: "allemande",
    fillA: ["allemand"],
    vfQ: "Nicole est française.",
    vfC: 1,
  }),
  q({
    id: "005-q3",
    textQ: "Quelle est la nationalité de Paolo ?",
    text: ["Italien", "Allemand", "Espagnol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Paolo dit : « Je suis _________. »",
    fill: "italien",
    vfQ: "Paolo est italien.",
    vfC: 0,
  }),
  q({
    id: "005-q4",
    textQ: "Quel âge a Paolo ?",
    text: ["25 ans", "35 ans", "45 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Paolo dit : « J'ai _________ ans. »",
    fill: "25",
    fillA: ["vingt-cinq"],
    vfQ: "Paolo a 35 ans.",
    vfC: 1,
  }),
  q({
    id: "005-q5",
    textQ: "Quel âge a Nicole ?",
    text: ["35 ans", "25 ans", "30 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nicole dit : « Moi, j'ai _________ ans. »",
    fill: "35",
    fillA: ["trente-cinq"],
    vfQ: "Nicole est plus âgée que Paolo.",
    vfC: 0,
  }),
  q({
    id: "005-q6",
    textQ: "Quelle est la profession de Nicole ?",
    text: ["Journaliste", "Médecin", "Serveuse"],
    textC: 0,
    img: ["journaliste", "médecin", "serveuse"],
    imgC: 0,
    fillQ: "Nicole dit : « Je suis _________. »",
    fill: "journaliste",
    vfQ: "Nicole est médecin.",
    vfC: 1,
  }),
  q({
    id: "005-q7",
    textQ: "Que se donnent Paolo et Nicole ?",
    text: ["Leurs cartes de visite", "Leurs passeports", "Des cadeaux"],
    textC: 0,
    img: ["carte", "passeport", "cadeau"],
    imgC: 0,
    fillQ: "Nicole dit : « Voici ma carte de _________. »",
    fill: "visite",
    vfQ: "Paolo et Nicole échangent leurs cartes de visite.",
    vfC: 0,
  }),
  q({
    id: "005-q8",
    textQ: "À la fin, que demande Nicole ?",
    text: ["De répéter le numéro", "D'écrire le numéro", "De parler moins vite"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nicole demande : « Tu peux _________, s'il te plaît ? »",
    fill: "répéter",
    fillA: ["repeter"],
    vfQ: "Nicole comprend le numéro tout de suite.",
    vfC: 1,
  }),
]);

const TRANSCRIPT_005 = `Paolo — Bonjour ! Moi, c'est Paolo. Et vous ? Vous vous appelez comment ?
Nicole — Je m'appelle Nicole. Tu peux dire « tu ».
Paolo — Enchanté Nicole ! Tu as un prénom français. Tu es française, non ?
Nicole — Non, je suis allemande. Et toi ?
Paolo — Je suis italien.
Nicole — Et tu as quel âge ?
Paolo — J'ai 25 ans.
Nicole — Moi, j'ai 35 ans.
Paolo — Quelle est ta profession ?
Nicole — Je suis journaliste. Voici ma carte de visite.
Paolo — Voici ma carte aussi.
Nicole — Merci ! C'est ton numéro de portable sur la carte ?
Paolo — Non, mon portable, c'est le 06 18 14 33 11.
Nicole — Euh… tu peux répéter, s'il te plaît ?`;

/* ── Audio 011 — Naël Kervelek ─────────────────────────────────────────── */

const POOL_011 = buildExpressPool("e1-1-011", [
  q({
    id: "011-q1",
    textQ: "De qui parle-t-on dans cet audio ?",
    text: ["D'un homme", "D'une femme", "D'un bébé"],
    textC: 0,
    img: ["homme", "femme", "bébé"],
    imgC: 0,
    fillQ: "On _________ Naël Kervelek.",
    fill: "présente",
    fillA: ["presente"],
    vfQ: "L'audio présente une femme.",
    vfC: 1,
  }),
  q({
    id: "011-q2",
    textQ: "Quelle est la nationalité de Naël ?",
    text: ["Française", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est _________.",
    fill: "français",
    fillA: ["francais", "française", "francaise"],
    vfQ: "Naël est italien.",
    vfC: 1,
  }),
  q({
    id: "011-q3",
    textQ: "Quel âge a Naël ?",
    text: ["34 ans", "24 ans", "44 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il a _________ ans.",
    fill: "34",
    fillA: ["trente-quatre"],
    vfQ: "Naël a 34 ans.",
    vfC: 0,
  }),
  q({
    id: "011-q4",
    textQ: "Quelle est la profession de Naël ?",
    text: ["Professeur", "Journaliste", "Médecin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sa profession : il est _________.",
    fill: "professeur",
    vfQ: "Naël travaille comme professeur.",
    vfC: 0,
  }),
  q({
    id: "011-q5",
    textQ: "Est-ce que l'audio dit si Naël est marié ?",
    text: ["Non, ce n'est pas dit", "Oui, il est marié", "Oui, il est célibataire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'audio ne dit pas si Naël est _________.",
    fill: "marié",
    fillA: ["marie"],
    vfQ: "Naël est marié.",
    vfC: 2,
  }),
]);

const TRANSCRIPT_011 = `On présente Naël Kervelek.
Il est français.
Il a 34 ans.
Il est professeur.`;

/* ── Audio 012 — Répondeur ─────────────────────────────────────────────── */

const POOL_012 = buildExpressPool("e1-1-012", [
  q({
    id: "012-q1",
    textQ: "Qu'est-ce que vous écoutez ?",
    text: ["Un message de répondeur", "Une publicité à la radio", "Une conversation au restaurant"],
    textC: 0,
    img: ["téléphone", "radio", "restaurant"],
    imgC: 0,
    fillQ: "Vous écoutez un message sur un _________.",
    fill: "répondeur",
    fillA: ["repondeur"],
    vfQ: "C'est un message de répondeur téléphonique.",
    vfC: 0,
  }),
  q({
    id: "012-q2",
    textQ: "Est-ce que Lucie et Thomas peuvent répondre ?",
    text: ["Non, ils ne peuvent pas prendre l'appel", "Oui, ils répondent tout de suite", "Oui, mais plus tard dans la soirée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous ne pouvons pas prendre votre _________.",
    fill: "appel",
    vfQ: "Lucie et Thomas ne peuvent pas prendre l'appel.",
    vfC: 0,
  }),
  q({
    id: "012-q3",
    textQ: "Que faut-il laisser après le bip ?",
    text: ["Son nom et son prénom", "Son âge et sa profession", "Un numéro de carte"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de laisser votre nom et votre _________ après le bip.",
    fill: "prénom",
    fillA: ["prenom"],
    vfQ: "Il faut laisser son âge après le bip.",
    vfC: 1,
  }),
  q({
    id: "012-q4",
    textQ: "Quel numéro entend-on dans le message ?",
    text: ["01 39 10 22 50", "01 39 10 22 15", "01 39 10 25 50"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le numéro est le 01 39 10 22 _________.",
    fill: "50",
    fillA: ["cinquante"],
    vfQ: "Le numéro se termine par 15.",
    vfC: 1,
  }),
  q({
    id: "012-q5",
    textQ: "Comment se termine le message ?",
    text: ["Par « À bientôt ! »", "Par « Au revoir ! »", "Par « Bonne nuit ! »"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le message se termine par : « À _________ ! »",
    fill: "bientôt",
    fillA: ["bientot"],
    vfQ: "Le message se termine par « au revoir ».",
    vfC: 1,
  }),
]);

const TRANSCRIPT_012 = `Vous êtes bien chez Lucie et Thomas.
Nous ne pouvons pas prendre votre appel.
Merci de laisser votre nom et votre prénom après le bip.
Le numéro est le 01 39 10 22 50.
À bientôt !`;

/* ── Audio 013 — Passeport / Jacques Zola ──────────────────────────────── */

const POOL_013 = buildExpressPool("e1-1-013", [
  q({
    id: "013-q1",
    textQ: "Pourquoi l'homme est-il là ?",
    text: ["Pour un passeport", "Pour une carte de visite", "Pour une photo"],
    textC: 0,
    img: ["carte didentite", "carte", "photo"],
    imgC: 0,
    fillQ: "La femme demande : « C'est pour un _________ ? »",
    fill: "passeport",
    vfQ: "L'homme vient pour un passeport.",
    vfC: 0,
  }),
  q({
    id: "013-q2",
    textQ: "Que demande la femme en premier ?",
    text: ["Le nom de famille", "Le prénom", "La date de naissance"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La femme demande : « Le nom de _________ ? »",
    fill: "famille",
    vfQ: "La femme demande d'abord le prénom.",
    vfC: 1,
  }),
  q({
    id: "013-q3",
    textQ: "Qui est l'homme pour Camille ?",
    text: ["Son ami", "Son frère", "Son voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La femme dit : « Tu es l'_________ de Camille. »",
    fill: "ami",
    vfQ: "L'homme est le frère de Camille.",
    vfC: 1,
  }),
  q({
    id: "013-q4",
    textQ: "Comment la femme salue-t-elle l'homme à la fin ?",
    text: ["« Salut, ça va ? »", "« Bonsoir monsieur »", "« Au revoir »"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle dit : « _________, ça va ? »",
    fill: "salut",
    vfQ: "À la fin, la femme dit « Salut, ça va ? ».",
    vfC: 0,
  }),
  q({
    id: "013-q5",
    textQ: "Connaît-on l'âge de l'homme ?",
    text: ["Non, on ne le sait pas", "Oui, il a 25 ans", "Oui, il a 35 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'audio ne dit pas l'_________ de l'homme.",
    fill: "âge",
    fillA: ["age"],
    vfQ: "L'homme a 25 ans.",
    vfC: 2,
  }),
]);

const TRANSCRIPT_013 = `Femme — C'est pour un passeport ?
Homme — Oui.
Femme — Le nom de famille ?
Homme — Zola.
Femme — Et le prénom ?
Homme — Jacques.
Femme — Tu es l'ami de Camille.
Homme — Oui.
Femme — Salut, ça va ?`;

/* ── Audio 014 — Annie / Nadine ────────────────────────────────────────── */

const POOL_014 = buildExpressPool("e1-1-014", [
  q({
    id: "014-q1",
    textQ: "Quel âge a Annie ?",
    text: ["37 ans", "27 ans", "47 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Annie Schultz a _________ ans.",
    fill: "37",
    fillA: ["trente-sept"],
    vfQ: "Annie a 37 ans.",
    vfC: 0,
  }),
  q({
    id: "014-q2",
    textQ: "Quelle est la profession d'Annie ?",
    text: ["Vendeuse", "Pharmacienne", "Journaliste"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Annie est _________.",
    fill: "vendeuse",
    vfQ: "Annie est pharmacienne.",
    vfC: 1,
  }),
  q({
    id: "014-q3",
    textQ: "Quelle est la profession de Nadine ?",
    text: ["Pharmacienne", "Serveuse", "Cuisinière"],
    textC: 0,
    img: ["pharmacien", "serveuse", "cuisinier"],
    imgC: 0,
    fillQ: "Nadine Gatineau est _________.",
    fill: "pharmacienne",
    fillA: ["pharmacien"],
    vfQ: "Nadine est pharmacienne.",
    vfC: 0,
  }),
  q({
    id: "014-q4",
    textQ: "Quelle est la nationalité de Nadine ?",
    text: ["Belge", "Suisse", "Française"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle est _________.",
    fill: "belge",
    vfQ: "Nadine est suisse.",
    vfC: 1,
  }),
  q({
    id: "014-q5",
    textQ: "De qui parle cet audio ?",
    text: ["De deux femmes", "De deux hommes", "D'une femme et d'un homme"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'audio présente _________ femmes.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "L'audio présente deux femmes.",
    vfC: 0,
  }),
  q({
    id: "014-q6",
    textQ: "Connaît-on la nationalité d'Annie ?",
    text: ["Non, ce n'est pas dit", "Oui, elle est belge", "Oui, elle est suisse"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'audio ne dit pas la _________ d'Annie.",
    fill: "nationalité",
    fillA: ["nationalite"],
    vfQ: "Annie est belge.",
    vfC: 2,
  }),
]);

const TRANSCRIPT_014 = `Annie Schultz a 37 ans. Elle est vendeuse.
Nadine Gatineau est pharmacienne. Elle est belge.`;

/* ── Audio 015 — Nina / Felipe ─────────────────────────────────────────── */

const POOL_015 = buildExpressPool("e1-1-015", [
  q({
    id: "015-q1",
    textQ: "Qui est Sophie pour Nina ?",
    text: ["Sa sœur", "Sa mère", "Son amie"],
    textC: 0,
    img: ["fille", "maman", "ami"],
    imgC: 0,
    fillQ: "Sophie est la _________ de Nina.",
    fill: "sœur",
    fillA: ["soeur"],
    vfQ: "Sophie est la mère de Nina.",
    vfC: 1,
  }),
  q({
    id: "015-q2",
    textQ: "Quelle est la nationalité de Felipe ?",
    text: ["Brésilien", "Français", "Belge"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Felipe est _________.",
    fill: "brésilien",
    fillA: ["bresilien"],
    vfQ: "Felipe est brésilien.",
    vfC: 0,
  }),
  q({
    id: "015-q3",
    textQ: "Quelle est la profession de Nina ?",
    text: ["Ingénieure", "Journaliste", "Pharmacienne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nina est _________.",
    fill: "ingénieure",
    fillA: ["ingenieure", "ingénieur", "ingenieur"],
    vfQ: "Nina est journaliste.",
    vfC: 1,
  }),
  q({
    id: "015-q4",
    textQ: "Que font Nina et Felipe dans cet audio ?",
    text: ["Ils se présentent", "Ils se disent au revoir", "Ils font les courses"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nina et Felipe se _________.",
    fill: "présentent",
    fillA: ["presentent"],
    vfQ: "Nina et Felipe se présentent.",
    vfC: 0,
  }),
  q({
    id: "015-q5",
    textQ: "Est-ce que l'audio donne l'âge de Nina ?",
    text: ["Non, ce n'est pas dit", "Oui, elle a 25 ans", "Oui, elle a 35 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'audio ne donne pas l'_________ de Nina.",
    fill: "âge",
    fillA: ["age"],
    vfQ: "Nina a 30 ans.",
    vfC: 2,
  }),
]);

const TRANSCRIPT_015 = `Nina et Felipe se présentent.
Sophie est la sœur de Nina.
Felipe est brésilien.
Nina est ingénieure.`;

export const E1_1_LISTENING_AUDIOS: ExpressListeningAudio[] = [
  {
    id: "e1-1-005",
    audioSrc: A1("005"),
    audioLabel: "Audio 005",
    transcript: TRANSCRIPT_005,
    instruction: "Écoutez l'enregistrement et répondez aux questions.",
    pool: POOL_005,
    questionCount: 5,
  },
  {
    id: "e1-1-011",
    audioSrc: A1("011"),
    audioLabel: "Audio 011",
    transcript: TRANSCRIPT_011,
    instruction: "Écoutez l'enregistrement et répondez aux questions.",
    pool: POOL_011,
    questionCount: 5,
  },
  {
    id: "e1-1-012",
    audioSrc: A1("012"),
    audioLabel: "Audio 012",
    transcript: TRANSCRIPT_012,
    instruction: "Écoutez l'enregistrement et répondez aux questions.",
    pool: POOL_012,
    questionCount: 5,
  },
  {
    id: "e1-1-013",
    audioSrc: A1("013"),
    audioLabel: "Audio 013",
    transcript: TRANSCRIPT_013,
    instruction: "Écoutez l'enregistrement et répondez aux questions.",
    pool: POOL_013,
    questionCount: 5,
  },
];

export const E1_1_EVAL_AUDIOS: ExpressListeningAudio[] = [
  {
    id: "e1-1-014",
    audioSrc: A1("014"),
    audioLabel: "Audio 014",
    transcript: TRANSCRIPT_014,
    instruction: "Écoutez l'enregistrement et répondez aux questions.",
    pool: POOL_014,
    questionCount: 5,
  },
  {
    id: "e1-1-015",
    audioSrc: A1("015"),
    audioLabel: "Audio 015",
    transcript: TRANSCRIPT_015,
    instruction: "Écoutez l'enregistrement et répondez aux questions.",
    pool: POOL_015,
    questionCount: 5,
  },
];
