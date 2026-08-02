import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E1 — Premiers contacts (se présenter, famille, invitation).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E1.1 — Se présenter
   ════════════════════════════════════════════════════════════════════════════ */

const E1_1_CE_EMAIL_TEXT_1 = `De : Marco Rossi
Objet : Je me présente

Bonjour,

Je m'appelle Marco Rossi. Je suis votre nouveau voisin.
J'ai 32 ans et je suis italien. Je viens de Milan.
Je parle italien, anglais et un peu français.
Je suis cuisinier. Je travaille dans un restaurant au centre-ville.
J'habite au troisième étage, appartement 12.
Ma femme s'appelle Elena. Elle est infirmière.
Mon numéro de téléphone est le 078 555 21 40.

À bientôt,
Marco`;

const E1_1_CE_EMAIL_POOL_1 = buildExpressPool("e1-1-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Le nouveau voisin", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis votre nouveau _________.",
    fill: "voisin",
    vfQ: "Marco est le nouveau voisin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Marco ?",
    text: ["32 ans", "23 ans", "42 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans et je suis italien.",
    fill: "32",
    fillA: ["trente-deux", "trente deux"],
    vfQ: "Marco a 32 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité de Marco ?",
    text: ["Italienne", "Espagnole", "Portugaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________ et je viens de Milan.",
    fill: "italien",
    vfQ: "Marco est espagnol.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "De quelle ville vient Marco ?",
    text: ["De Milan", "De Rome", "De Naples"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je _________ de Milan.",
    fill: "viens",
    vfQ: "Marco vient de Rome.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelles langues parle Marco ?",
    text: [
      "Italien, anglais et un peu français",
      "Italien et allemand",
      "Seulement l'italien",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle italien, anglais et un peu _________.",
    fill: "français",
    fillA: ["francais"],
    vfQ: "Marco parle un peu français.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle est la profession de Marco ?",
    text: ["Cuisinier", "Médecin", "Chauffeur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "cuisinier",
    vfQ: "Marco est médecin.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Où travaille Marco ?",
    text: [
      "Dans un restaurant au centre-ville",
      "Dans un hôpital",
      "Dans une école",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je travaille dans un _________ au centre-ville.",
    fill: "restaurant",
    vfQ: "Marco travaille dans un restaurant.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "À quel étage habite Marco ?",
    text: ["Au troisième étage", "Au premier étage", "Au cinquième étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage, appartement 12.",
    fill: "troisième",
    fillA: ["troisieme", "3e", "3ème", "3"],
    vfQ: "Marco habite au premier étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Quelle est la profession d'Elena ?",
    text: ["Infirmière", "Vendeuse", "Professeure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma femme s'appelle Elena. Elle est _________.",
    fill: "infirmière",
    fillA: ["infirmiere"],
    vfQ: "Marco et Elena ont des enfants.",
    vfC: 2,
  }),
  q({
    id: "cem-q10",
    textQ: "Dans quel appartement habite Marco ?",
    text: ["L'appartement 12", "L'appartement 21", "L'appartement 32"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au troisième étage, appartement _________.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Marco habite dans l'appartement 12.",
    vfC: 0,
  }),

]);

const E1_1_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur présentation

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E1_1_CE_EMAIL_POOL_2 = buildExpressPool("e1-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur présentation

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E1_1_CE_EMAIL_POOL_3 = buildExpressPool("e1-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur présentation

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E1_1_CE_EMAIL_POOL_4 = buildExpressPool("e1-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur présentation

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E1_1_CE_EMAIL_POOL_5 = buildExpressPool("e1-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur présentation

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E1_1_CE_EMAIL_POOL_6 = buildExpressPool("e1-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur présentation

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E1_1_CE_EMAIL_POOL_7 = buildExpressPool("e1-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur présentation

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E1_1_CE_EMAIL_POOL_8 = buildExpressPool("e1-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur présentation

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E1_1_CE_EMAIL_POOL_9 = buildExpressPool("e1-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur présentation

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E1_1_CE_EMAIL_POOL_10 = buildExpressPool("e1-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur présentation

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E1_1_CE_EMAIL_POOL_11 = buildExpressPool("e1-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur présentation

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E1_1_CE_EMAIL_POOL_12 = buildExpressPool("e1-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur présentation

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E1_1_CE_EMAIL_POOL_13 = buildExpressPool("e1-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur présentation

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E1_1_CE_EMAIL_POOL_14 = buildExpressPool("e1-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur présentation

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E1_1_CE_EMAIL_POOL_15 = buildExpressPool("e1-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur présentation

Bonjour,

Je m'appelle David. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E1_1_CE_EMAIL_POOL_16 = buildExpressPool("e1-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur présentation

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E1_1_CE_EMAIL_POOL_17 = buildExpressPool("e1-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur présentation

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E1_1_CE_EMAIL_POOL_18 = buildExpressPool("e1-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur présentation

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E1_1_CE_EMAIL_POOL_19 = buildExpressPool("e1-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_1_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur présentation

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de présentation.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E1_1_CE_EMAIL_POOL_20 = buildExpressPool("e1-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Présentation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "présentation",
    vfQ: "L'e-mail parle de présentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E1_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e1-1-ce-email-1",
  readingText: E1_1_CE_EMAIL_TEXT_1,
  questionPool: E1_1_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-2",
  readingText: E1_1_CE_EMAIL_TEXT_2,
  questionPool: E1_1_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-3",
  readingText: E1_1_CE_EMAIL_TEXT_3,
  questionPool: E1_1_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-4",
  readingText: E1_1_CE_EMAIL_TEXT_4,
  questionPool: E1_1_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-5",
  readingText: E1_1_CE_EMAIL_TEXT_5,
  questionPool: E1_1_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-6",
  readingText: E1_1_CE_EMAIL_TEXT_6,
  questionPool: E1_1_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-7",
  readingText: E1_1_CE_EMAIL_TEXT_7,
  questionPool: E1_1_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-8",
  readingText: E1_1_CE_EMAIL_TEXT_8,
  questionPool: E1_1_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-9",
  readingText: E1_1_CE_EMAIL_TEXT_9,
  questionPool: E1_1_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-10",
  readingText: E1_1_CE_EMAIL_TEXT_10,
  questionPool: E1_1_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-11",
  readingText: E1_1_CE_EMAIL_TEXT_11,
  questionPool: E1_1_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-12",
  readingText: E1_1_CE_EMAIL_TEXT_12,
  questionPool: E1_1_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-13",
  readingText: E1_1_CE_EMAIL_TEXT_13,
  questionPool: E1_1_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-14",
  readingText: E1_1_CE_EMAIL_TEXT_14,
  questionPool: E1_1_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-15",
  readingText: E1_1_CE_EMAIL_TEXT_15,
  questionPool: E1_1_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-16",
  readingText: E1_1_CE_EMAIL_TEXT_16,
  questionPool: E1_1_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-17",
  readingText: E1_1_CE_EMAIL_TEXT_17,
  questionPool: E1_1_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-18",
  readingText: E1_1_CE_EMAIL_TEXT_18,
  questionPool: E1_1_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-19",
  readingText: E1_1_CE_EMAIL_TEXT_19,
  questionPool: E1_1_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-1-ce-email-20",
  readingText: E1_1_CE_EMAIL_TEXT_20,
  questionPool: E1_1_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E1_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e1-1-pee-1",
    title: "Répondre à un correspondant",
    situation: "Vous avez un nouveau correspondant pour pratiquer le français.",
    sourceMessage: {
      from: "Lucas",
      subject: "Enchanté !",
      body: "Bonjour,\nJe m'appelle Lucas, j'ai 28 ans et je suis français.\nJe suis ton nouveau correspondant. Et toi, qui es-tu ?\nÀ bientôt,\nLucas",
    },
    instruction: "Répondez à Lucas : donnez votre nom, votre âge et votre nationalité.",
    points: ["Votre nom", "Votre âge", "Votre nationalité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-2",
    title: "Se présenter à la classe",
    situation: "Vous commencez un cours de français. La professeure écrit aux élèves.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Bienvenue au cours de français",
      body: "Bonjour,\nBienvenue dans notre cours de français !\nPour faire connaissance, présentez-vous par e-mail : qui êtes-vous ?\nCordialement,\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : présentez-vous, dites quelles langues vous parlez et pourquoi vous apprenez le français.",
    points: ["Votre présentation", "Les langues que vous parlez", "Pourquoi vous apprenez le français"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-3",
    title: "Répondre au nouveau voisin",
    situation: "Un nouveau voisin se présente par e-mail.",
    sourceMessage: {
      from: "Marco",
      subject: "Votre nouveau voisin",
      body: "Bonjour,\nJe m'appelle Marco, je suis votre nouveau voisin du troisième étage.\nJe suis italien et je suis cuisinier.\nÀ bientôt,\nMarco",
    },
    instruction: "Répondez à Marco : souhaitez-lui la bienvenue, présentez-vous et dites depuis quand vous habitez dans l'immeuble.",
    points: ["La bienvenue", "Votre présentation", "Depuis quand vous habitez ici"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-4",
    title: "S'inscrire au club de sport",
    situation: "Le club de sport demande des informations pour votre inscription.",
    sourceMessage: {
      from: "Club Sportif du Lac",
      subject: "Votre inscription",
      body: "Bonjour,\nMerci pour votre demande d'inscription.\nPouvez-vous vous présenter : nom, âge, adresse et numéro de téléphone ?\nSportivement,\nLe club",
    },
    instruction: "Répondez au club : donnez votre nom et votre âge, votre adresse et votre numéro de téléphone.",
    points: ["Votre nom et votre âge", "Votre adresse", "Votre numéro de téléphone"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-5",
    title: "Écrire à un nouveau collègue",
    situation: "Vous commencez un nouveau travail lundi. Un collègue vous écrit.",
    sourceMessage: {
      from: "Sami",
      subject: "Bienvenue dans l'équipe",
      body: "Bonjour,\nJe m'appelle Sami, je travaille ici depuis deux ans.\nTu commences lundi, c'est ça ? Parle-moi un peu de toi !\nSami",
    },
    instruction: "Répondez à Sami : remerciez-le, présentez-vous et posez une question sur le travail.",
    points: ["Un remerciement", "Votre présentation", "Une question sur le travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-6",
    title: "Répondre à la bibliothèque",
    situation: "La bibliothèque a besoin d'informations pour votre carte.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Votre carte de lecteur",
      body: "Bonjour,\nPour finir votre carte de lecteur, il nous manque des informations.\nMerci de nous donner votre nom complet, votre date de naissance et votre adresse.\nLa bibliothèque",
    },
    instruction: "Répondez à la bibliothèque : donnez votre nom complet, votre date de naissance et votre adresse.",
    points: ["Votre nom complet", "Votre date de naissance", "Votre adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-7",
    title: "Écrire à l'ami d'une amie",
    situation: "Votre amie Ana donne votre adresse e-mail à un ami qui apprend votre langue.",
    sourceMessage: {
      from: "Diego",
      subject: "Ana me donne ton e-mail",
      body: "Salut !\nJe suis Diego, un ami d'Ana. J'apprends ta langue et Ana me dit que tu apprends le français.\nOn peut pratiquer ensemble ? Présente-toi !\nDiego",
    },
    instruction: "Répondez à Diego : présentez-vous, dites quelles langues vous parlez et acceptez de pratiquer ensemble.",
    points: ["Votre présentation", "Les langues que vous parlez", "Votre accord pour pratiquer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-8",
    title: "Répondre à l'association du quartier",
    situation: "L'association du quartier accueille les nouveaux habitants.",
    sourceMessage: {
      from: "Association du quartier",
      subject: "Bienvenue dans le quartier",
      body: "Bonjour,\nBienvenue dans le quartier ! Nous organisons un café de bienvenue samedi à 10 h.\nDites-nous qui vous êtes et si vous venez.\nL'association",
    },
    instruction: "Répondez à l'association : présentez-vous, remerciez pour l'invitation et dites si vous venez samedi.",
    points: ["Votre présentation", "Un remerciement", "Votre réponse pour samedi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-9",
    title: "Se présenter à une colocataire",
    situation: "Vous cherchez une colocation. La colocataire veut vous connaître.",
    sourceMessage: {
      from: "Julie",
      subject: "La chambre libre",
      body: "Bonjour,\nMerci pour votre message au sujet de la chambre libre.\nAvant la visite, pouvez-vous vous présenter ? Que faites-vous dans la vie ?\nJulie",
    },
    instruction: "Répondez à Julie : présentez-vous, parlez de votre profession et posez une question sur l'appartement.",
    points: ["Votre présentation", "Votre profession", "Une question sur l'appartement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-1-pee-10",
    title: "Répondre à l'école de langues",
    situation: "L'école de langues prépare votre premier cours.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Avant votre premier cours",
      body: "Bonjour,\nVotre premier cours de français est lundi à 18 h.\nPour préparer le cours, présentez-vous en quelques phrases : âge, pays, profession, langues.\nÀ lundi !\nL'école Horizon",
    },
    instruction: "Répondez à l'école : présentez-vous (âge, pays, profession), dites quelles langues vous parlez et confirmez votre présence lundi.",
    points: ["Votre présentation", "Les langues que vous parlez", "La confirmation pour lundi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e1-1-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-1-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e1-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E1.2 — Parler de sa famille
   ════════════════════════════════════════════════════════════════════════════ */

const E1_2_CE_EMAIL_TEXT_1 = `De : Amina
Objet : Ma famille

Bonjour,

Merci pour ton message ! Aujourd'hui, je te présente ma famille.
Nous sommes six à la maison : mes parents, mes deux frères, ma grand-mère et moi.
Mon père a 52 ans. Il est chauffeur de taxi.
Ma mère a 48 ans. Elle est vendeuse dans un magasin.
Mon grand frère est marié. Il a une petite fille de 2 ans.
Mon petit frère a 10 ans. Il va encore à l'école.
Ma grand-mère habite avec nous. Elle a 75 ans.
Et toi, tu as des frères et des sœurs ?

À bientôt,
Amina`;

const E1_2_CE_EMAIL_POOL_1 = buildExpressPool("e1-2-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["Six personnes", "Quatre personnes", "Huit personnes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "six",
    fillA: ["6"],
    vfQ: "Six personnes habitent à la maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a le père d'Amina ?",
    text: ["52 ans", "48 ans", "62 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "52",
    fillA: ["cinquante-deux", "cinquante deux"],
    vfQ: "Le père d'Amina a 52 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession du père d'Amina ?",
    text: ["Chauffeur de taxi", "Boulanger", "Professeur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est chauffeur de _________.",
    fill: "taxi",
    vfQ: "Le père d'Amina est boulanger.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel âge a la mère d'Amina ?",
    text: ["48 ans", "58 ans", "44 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "48",
    fillA: ["quarante-huit", "quarante huit"],
    vfQ: "La mère d'Amina a 58 ans.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Où travaille la mère d'Amina ?",
    text: ["Dans un magasin", "Dans un hôpital", "Dans un restaurant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle est vendeuse dans un _________.",
    fill: "magasin",
    vfQ: "La mère d'Amina est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Le grand frère d'Amina est…",
    text: ["marié", "célibataire", "divorcé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon grand frère est _________.",
    fill: "marié",
    fillA: ["marie"],
    vfQ: "Le grand frère d'Amina est célibataire.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel âge a la fille du grand frère ?",
    text: ["2 ans", "5 ans", "10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il a une petite fille de _________ ans.",
    fill: "2",
    fillA: ["deux"],
    vfQ: "Le grand frère a une petite fille.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quel âge a le petit frère d'Amina ?",
    text: ["10 ans", "12 ans", "8 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon petit frère a _________ ans.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "Le petit frère va encore à l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qui habite avec la famille ?",
    text: ["La grand-mère", "La tante", "La cousine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma _________ habite avec nous.",
    fill: "grand-mère",
    fillA: ["grand-mere", "grand mère", "grand mere"],
    vfQ: "La grand-mère habite avec la famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Quel âge a la grand-mère ?",
    text: ["75 ans", "85 ans", "70 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle a _________ ans.",
    fill: "75",
    fillA: ["soixante-quinze", "soixante quinze"],
    vfQ: "La grand-mère a 85 ans.",
    vfC: 1,
  }),

]);

const E1_2_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur famille

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de famille.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E1_2_CE_EMAIL_POOL_2 = buildExpressPool("e1-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur famille

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de famille.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E1_2_CE_EMAIL_POOL_3 = buildExpressPool("e1-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur famille

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de famille.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E1_2_CE_EMAIL_POOL_4 = buildExpressPool("e1-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur famille

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de famille.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E1_2_CE_EMAIL_POOL_5 = buildExpressPool("e1-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur famille

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de famille.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E1_2_CE_EMAIL_POOL_6 = buildExpressPool("e1-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur famille

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de famille.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E1_2_CE_EMAIL_POOL_7 = buildExpressPool("e1-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur famille

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de famille.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E1_2_CE_EMAIL_POOL_8 = buildExpressPool("e1-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur famille

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de famille.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E1_2_CE_EMAIL_POOL_9 = buildExpressPool("e1-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur famille

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de famille.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E1_2_CE_EMAIL_POOL_10 = buildExpressPool("e1-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur famille

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de famille.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E1_2_CE_EMAIL_POOL_11 = buildExpressPool("e1-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur famille

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de famille.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E1_2_CE_EMAIL_POOL_12 = buildExpressPool("e1-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur famille

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de famille.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E1_2_CE_EMAIL_POOL_13 = buildExpressPool("e1-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur famille

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de famille.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E1_2_CE_EMAIL_POOL_14 = buildExpressPool("e1-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur famille

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de famille.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E1_2_CE_EMAIL_POOL_15 = buildExpressPool("e1-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur famille

Bonjour,

Je m'appelle David. Je vous écris au sujet de famille.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E1_2_CE_EMAIL_POOL_16 = buildExpressPool("e1-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur famille

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de famille.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E1_2_CE_EMAIL_POOL_17 = buildExpressPool("e1-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur famille

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de famille.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E1_2_CE_EMAIL_POOL_18 = buildExpressPool("e1-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur famille

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de famille.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E1_2_CE_EMAIL_POOL_19 = buildExpressPool("e1-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_2_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur famille

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de famille.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E1_2_CE_EMAIL_POOL_20 = buildExpressPool("e1-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Famille", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "famille",
    vfQ: "L'e-mail parle de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E1_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e1-2-ce-email-1",
  readingText: E1_2_CE_EMAIL_TEXT_1,
  questionPool: E1_2_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-2",
  readingText: E1_2_CE_EMAIL_TEXT_2,
  questionPool: E1_2_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-3",
  readingText: E1_2_CE_EMAIL_TEXT_3,
  questionPool: E1_2_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-4",
  readingText: E1_2_CE_EMAIL_TEXT_4,
  questionPool: E1_2_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-5",
  readingText: E1_2_CE_EMAIL_TEXT_5,
  questionPool: E1_2_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-6",
  readingText: E1_2_CE_EMAIL_TEXT_6,
  questionPool: E1_2_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-7",
  readingText: E1_2_CE_EMAIL_TEXT_7,
  questionPool: E1_2_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-8",
  readingText: E1_2_CE_EMAIL_TEXT_8,
  questionPool: E1_2_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-9",
  readingText: E1_2_CE_EMAIL_TEXT_9,
  questionPool: E1_2_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-10",
  readingText: E1_2_CE_EMAIL_TEXT_10,
  questionPool: E1_2_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-11",
  readingText: E1_2_CE_EMAIL_TEXT_11,
  questionPool: E1_2_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-12",
  readingText: E1_2_CE_EMAIL_TEXT_12,
  questionPool: E1_2_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-13",
  readingText: E1_2_CE_EMAIL_TEXT_13,
  questionPool: E1_2_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-14",
  readingText: E1_2_CE_EMAIL_TEXT_14,
  questionPool: E1_2_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-15",
  readingText: E1_2_CE_EMAIL_TEXT_15,
  questionPool: E1_2_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-16",
  readingText: E1_2_CE_EMAIL_TEXT_16,
  questionPool: E1_2_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-17",
  readingText: E1_2_CE_EMAIL_TEXT_17,
  questionPool: E1_2_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-18",
  readingText: E1_2_CE_EMAIL_TEXT_18,
  questionPool: E1_2_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-19",
  readingText: E1_2_CE_EMAIL_TEXT_19,
  questionPool: E1_2_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-2-ce-email-20",
  readingText: E1_2_CE_EMAIL_TEXT_20,
  questionPool: E1_2_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E1_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e1-2-pee-1",
    title: "Présenter sa famille",
    situation: "Votre correspondante vous pose des questions sur votre famille.",
    sourceMessage: {
      from: "Amina",
      subject: "Et ta famille ?",
      body: "Bonjour,\nMerci pour ton message ! Moi, j'ai deux frères et une grand-mère à la maison.\nEt toi ? Tu as des frères et des sœurs ? Parle-moi de ta famille !\nAmina",
    },
    instruction: "Répondez à Amina : dites combien de personnes il y a dans votre famille, parlez de vos frères et sœurs et de vos parents.",
    points: ["Le nombre de personnes", "Vos frères et sœurs", "Vos parents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-2",
    title: "Un dîner en famille",
    situation: "Une amie vous invite à dîner avec votre famille.",
    sourceMessage: {
      from: "Claire",
      subject: "Dîner samedi",
      body: "Coucou,\nJe vous invite à dîner samedi soir, toute la famille !\nVous êtes combien à la maison ? Il y a des enfants ?\nClaire",
    },
    instruction: "Répondez à Claire : remerciez-la, dites combien vous êtes dans la famille et donnez l'âge des enfants.",
    points: ["Un remerciement", "Le nombre de personnes", "L'âge des enfants"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-3",
    title: "Des nouvelles de la famille",
    situation: "Votre cousin habite loin et demande des nouvelles.",
    sourceMessage: {
      from: "Rachid",
      subject: "Des nouvelles ?",
      body: "Salut,\nÇa fait longtemps ! Comment va la famille ?\nEt tes parents, ils vont bien ? Raconte-moi tout !\nRachid",
    },
    instruction: "Répondez à Rachid : donnez des nouvelles de vos parents, de vos frères et sœurs et posez une question sur sa famille.",
    points: ["Des nouvelles de vos parents", "Des nouvelles de vos frères et sœurs", "Une question sur sa famille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-4",
    title: "Le devoir de français",
    situation: "Votre professeure demande un petit texte sur la famille.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Devoir : ma famille",
      body: "Bonjour,\nPour le prochain cours, écrivez-moi un petit texte sur votre famille.\nQui sont les personnes de votre famille ? Que font-elles dans la vie ?\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : présentez les personnes de votre famille, donnez leur âge et leur profession.",
    points: ["Les personnes de votre famille", "Leur âge", "Leur profession"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-5",
    title: "Féliciter pour un bébé",
    situation: "Un ami annonce une grande nouvelle.",
    sourceMessage: {
      from: "Omar",
      subject: "Une grande nouvelle !",
      body: "Salut !\nGrande nouvelle : ma femme et moi avons un bébé ! Elle s'appelle Lina.\nEt chez toi, il y a des enfants dans la famille ?\nOmar",
    },
    instruction: "Répondez à Omar : félicitez-le, posez une question sur le bébé et parlez des enfants de votre famille.",
    points: ["Les félicitations", "Une question sur le bébé", "Les enfants de votre famille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-6",
    title: "Répondre à la régie",
    situation: "La régie prépare votre contrat de location.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Votre dossier de location",
      body: "Bonjour,\nPour votre dossier, nous avons besoin d'une information.\nCombien de personnes habitent dans l'appartement ? Il y a des enfants ?\nMeilleures salutations,\nLa régie",
    },
    instruction: "Répondez à la régie : dites combien de personnes habitent avec vous, qui elles sont et donnez l'âge des enfants.",
    points: ["Le nombre de personnes", "Qui habite avec vous", "L'âge des enfants"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-7",
    title: "La photo de famille",
    situation: "Une amie regarde votre photo de famille et pose des questions.",
    sourceMessage: {
      from: "Sofia",
      subject: "Ta photo de famille",
      body: "Coucou,\nMerci pour la photo de famille, elle est très belle !\nMais c'est qui, toutes ces personnes ? La dame à gauche, c'est ta mère ?\nSofia",
    },
    instruction: "Répondez à Sofia : dites qui est sur la photo, expliquez qui est la dame à gauche et parlez d'une autre personne de la photo.",
    points: ["Les personnes sur la photo", "La dame à gauche", "Une autre personne de la photo"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-8",
    title: "Question d'un collègue",
    situation: "Un collègue veut mieux vous connaître.",
    sourceMessage: {
      from: "Sami",
      subject: "Ta famille",
      body: "Salut,\nHier, tu as parlé de ton frère au travail.\nTu as combien de frères et de sœurs ? Ils habitent où ?\nSami",
    },
    instruction: "Répondez à Sami : dites combien de frères et de sœurs vous avez, où ils habitent et ce qu'ils font dans la vie.",
    points: ["Le nombre de frères et sœurs", "Où ils habitent", "Leur profession"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-9",
    title: "La fête de famille",
    situation: "Votre tante organise une fête de famille.",
    sourceMessage: {
      from: "Tante Nadia",
      subject: "Fête de famille en juin",
      body: "Bonjour,\nJ'organise une grande fête de famille le samedi 15 juin.\nVous venez ? Vous êtes combien chez vous ?\nBisous,\nTante Nadia",
    },
    instruction: "Répondez à votre tante : acceptez l'invitation, dites qui vient avec vous et posez une question sur la fête.",
    points: ["Votre accord", "Qui vient avec vous", "Une question sur la fête"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pee-10",
    title: "Parler de ses grands-parents",
    situation: "Votre correspondant parle de ses grands-parents et vous pose une question.",
    sourceMessage: {
      from: "Lucas",
      subject: "Mes grands-parents",
      body: "Bonjour,\nCe week-end, je visite mes grands-parents à la campagne.\nEt toi, tu as encore tes grands-parents ? Ils habitent près de chez toi ?\nLucas",
    },
    instruction: "Répondez à Lucas : parlez de vos grands-parents, dites où ils habitent et quand vous les voyez.",
    points: ["Vos grands-parents", "Où ils habitent", "Quand vous les voyez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e1-2-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e1-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E1.3 — Inviter à une fête
   ════════════════════════════════════════════════════════════════════════════ */

const E1_3_CE_EMAIL_TEXT_1 = `De : Julie
Objet : Invitation à mon anniversaire

Bonjour,

Samedi 20 juin, c'est mon anniversaire : j'ai 30 ans !
J'organise une fête chez moi, au 15 rue des Fleurs, à Lausanne.
La fête commence à 18 h et finit vers minuit.
Nous mangeons dans le jardin : il y a un grand buffet.
Vous pouvez apporter une salade ou un dessert.
Il y a de la musique, alors apportez aussi vos chaussures de danse !
Répondez avant le 10 juin, s'il vous plaît.

À bientôt,
Julie`;

const E1_3_CE_EMAIL_POOL_1 = buildExpressPool("e1-3-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Pourquoi Julie organise-t-elle une fête ?",
    text: [
      "C'est son anniversaire",
      "Elle a un nouveau travail",
      "Elle part en voyage",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Samedi 20 juin, c'est mon _________.",
    fill: "anniversaire",
    vfQ: "Julie organise une fête pour son anniversaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel jour est la fête ?",
    text: ["Le samedi 20 juin", "Le dimanche 21 juin", "Le samedi 10 juin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Samedi 20 _________, c'est mon anniversaire.",
    fill: "juin",
    vfQ: "La fête est un samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel âge a Julie ?",
    text: ["30 ans", "20 ans", "40 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est mon anniversaire : j'ai _________ ans !",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Julie a 40 ans.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Où est la fête ?",
    text: ["Chez Julie", "Au restaurant", "Dans une salle de fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous mangeons dans le jardin : il y a un grand _________.",
    fill: "buffet",
    vfQ: "La fête est au restaurant.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure commence la fête ?",
    text: ["À 18 h", "À 19 h", "À 20 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête commence à _________ h.",
    fill: "18",
    fillA: ["dix-huit", "18 h"],
    vfQ: "La fête commence à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure finit la fête ?",
    text: ["Vers minuit", "Vers 22 h", "Vers 2 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête commence à 18 h et finit vers _________.",
    fill: "minuit",
    vfQ: "La fête finit vers minuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Où mange-t-on ?",
    text: ["Dans le jardin", "Dans la cuisine", "Dans le salon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous mangeons dans le _________.",
    fill: "jardin",
    vfQ: "On mange dans la cuisine.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Qu'est-ce qu'on peut apporter ?",
    text: [
      "Une salade ou un dessert",
      "Des boissons seulement",
      "Rien du tout",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez apporter une salade ou un _________.",
    fill: "dessert",
    vfQ: "On peut apporter un dessert.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce qu'il y a à la fête ?",
    text: ["De la musique", "Un film", "Un match de football"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a de la _________, alors apportez vos chaussures de danse !",
    fill: "musique",
    vfQ: "Il n'y a pas de musique à la fête.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il répondre à l'invitation ?",
    text: ["Avant le 10 juin", "Avant le 20 juin", "Le jour de la fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Répondez avant le _________ juin, s'il vous plaît.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "Il faut répondre avant le 10 juin.",
    vfC: 0,
  }),

]);

const E1_3_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur invitation

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E1_3_CE_EMAIL_POOL_2 = buildExpressPool("e1-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur invitation

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E1_3_CE_EMAIL_POOL_3 = buildExpressPool("e1-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur invitation

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E1_3_CE_EMAIL_POOL_4 = buildExpressPool("e1-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur invitation

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E1_3_CE_EMAIL_POOL_5 = buildExpressPool("e1-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur invitation

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E1_3_CE_EMAIL_POOL_6 = buildExpressPool("e1-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur invitation

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E1_3_CE_EMAIL_POOL_7 = buildExpressPool("e1-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur invitation

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E1_3_CE_EMAIL_POOL_8 = buildExpressPool("e1-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur invitation

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E1_3_CE_EMAIL_POOL_9 = buildExpressPool("e1-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur invitation

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E1_3_CE_EMAIL_POOL_10 = buildExpressPool("e1-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur invitation

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E1_3_CE_EMAIL_POOL_11 = buildExpressPool("e1-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur invitation

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E1_3_CE_EMAIL_POOL_12 = buildExpressPool("e1-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur invitation

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E1_3_CE_EMAIL_POOL_13 = buildExpressPool("e1-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur invitation

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E1_3_CE_EMAIL_POOL_14 = buildExpressPool("e1-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur invitation

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E1_3_CE_EMAIL_POOL_15 = buildExpressPool("e1-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur invitation

Bonjour,

Je m'appelle David. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E1_3_CE_EMAIL_POOL_16 = buildExpressPool("e1-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur invitation

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E1_3_CE_EMAIL_POOL_17 = buildExpressPool("e1-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur invitation

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E1_3_CE_EMAIL_POOL_18 = buildExpressPool("e1-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur invitation

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E1_3_CE_EMAIL_POOL_19 = buildExpressPool("e1-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E1_3_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur invitation

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de invitation.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E1_3_CE_EMAIL_POOL_20 = buildExpressPool("e1-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Invitation", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E1_3_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e1-3-ce-email-1",
  readingText: E1_3_CE_EMAIL_TEXT_1,
  questionPool: E1_3_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-2",
  readingText: E1_3_CE_EMAIL_TEXT_2,
  questionPool: E1_3_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-3",
  readingText: E1_3_CE_EMAIL_TEXT_3,
  questionPool: E1_3_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-4",
  readingText: E1_3_CE_EMAIL_TEXT_4,
  questionPool: E1_3_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-5",
  readingText: E1_3_CE_EMAIL_TEXT_5,
  questionPool: E1_3_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-6",
  readingText: E1_3_CE_EMAIL_TEXT_6,
  questionPool: E1_3_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-7",
  readingText: E1_3_CE_EMAIL_TEXT_7,
  questionPool: E1_3_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-8",
  readingText: E1_3_CE_EMAIL_TEXT_8,
  questionPool: E1_3_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-9",
  readingText: E1_3_CE_EMAIL_TEXT_9,
  questionPool: E1_3_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-10",
  readingText: E1_3_CE_EMAIL_TEXT_10,
  questionPool: E1_3_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-11",
  readingText: E1_3_CE_EMAIL_TEXT_11,
  questionPool: E1_3_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-12",
  readingText: E1_3_CE_EMAIL_TEXT_12,
  questionPool: E1_3_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-13",
  readingText: E1_3_CE_EMAIL_TEXT_13,
  questionPool: E1_3_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-14",
  readingText: E1_3_CE_EMAIL_TEXT_14,
  questionPool: E1_3_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-15",
  readingText: E1_3_CE_EMAIL_TEXT_15,
  questionPool: E1_3_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-16",
  readingText: E1_3_CE_EMAIL_TEXT_16,
  questionPool: E1_3_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-17",
  readingText: E1_3_CE_EMAIL_TEXT_17,
  questionPool: E1_3_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-18",
  readingText: E1_3_CE_EMAIL_TEXT_18,
  questionPool: E1_3_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-19",
  readingText: E1_3_CE_EMAIL_TEXT_19,
  questionPool: E1_3_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e1-3-ce-email-20",
  readingText: E1_3_CE_EMAIL_TEXT_20,
  questionPool: E1_3_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E1_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e1-3-pee-1",
    title: "Accepter une invitation",
    situation: "Une amie vous invite à son anniversaire.",
    sourceMessage: {
      from: "Julie",
      subject: "Mon anniversaire samedi",
      body: "Coucou,\nSamedi, c'est mon anniversaire ! Je fais une fête chez moi à 18 h.\nTu peux venir ?\nJulie",
    },
    instruction: "Répondez à Julie : acceptez l'invitation, remerciez-la et demandez ce que vous pouvez apporter.",
    points: ["Votre accord", "Un remerciement", "Une question sur ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-2",
    title: "Refuser poliment",
    situation: "Un ami vous invite, mais vous n'êtes pas libre.",
    sourceMessage: {
      from: "Karim",
      subject: "Soirée vendredi",
      body: "Salut !\nJ'organise une soirée vendredi à 20 h chez moi.\nTu viens ? Ça va être super !\nKarim",
    },
    instruction: "Répondez à Karim : refusez poliment, expliquez pourquoi vous n'êtes pas libre et proposez un autre jour pour se voir.",
    points: ["Le refus poli", "Pourquoi vous n'êtes pas libre", "Un autre jour pour se voir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-3",
    title: "L'apéro des voisins",
    situation: "Vos voisins organisent un apéro et vous invitent.",
    sourceMessage: {
      from: "M. et Mme Perret",
      subject: "Apéro dimanche",
      body: "Bonjour,\nNous organisons un petit apéro dimanche à 17 h, sur la terrasse.\nVous êtes les bienvenus !\nM. et Mme Perret",
    },
    instruction: "Répondez à vos voisins : acceptez, dites combien de personnes viennent et demandez si vous pouvez apporter quelque chose.",
    points: ["Votre accord", "Le nombre de personnes", "Une question sur ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-4",
    title: "Le pot de départ",
    situation: "Une collègue quitte l'entreprise et organise un pot de départ.",
    sourceMessage: {
      from: "Fatima",
      subject: "Mon pot de départ",
      body: "Bonjour à tous,\nJe quitte l'entreprise à la fin du mois.\nJ'organise un pot de départ jeudi à 17 h, dans la salle de pause. Vous venez ?\nFatima",
    },
    instruction: "Répondez à Fatima : confirmez votre présence, dites ce que vous apportez et souhaitez-lui bonne chance.",
    points: ["La confirmation", "Ce que vous apportez", "Une phrase pour souhaiter bonne chance"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-5",
    title: "Aider à préparer la fête",
    situation: "Un ami prépare une fête et demande de l'aide.",
    sourceMessage: {
      from: "Pablo",
      subject: "Besoin d'aide !",
      body: "Salut,\nJe prépare la fête de samedi et j'ai besoin d'aide.\nTu peux venir plus tôt ? Tu peux apporter des chaises ?\nPablo",
    },
    instruction: "Répondez à Pablo : acceptez de l'aider, dites à quelle heure vous arrivez et ce que vous pouvez apporter.",
    points: ["Votre accord", "Votre heure d'arrivée", "Ce que vous apportez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-6",
    title: "Demander des informations",
    situation: "Votre cousine vous invite à une fête de famille, mais il manque des détails.",
    sourceMessage: {
      from: "Léa",
      subject: "Fête de famille",
      body: "Coucou,\nOn fait une grande fête de famille le mois prochain !\nJ'espère que tu viens. Je te donne les détails bientôt.\nLéa",
    },
    instruction: "Répondez à Léa : dites que vous voulez venir et posez des questions sur la date, l'heure et le lieu.",
    points: ["Votre accord", "Une question sur la date et l'heure", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-7",
    title: "La fête de l'école",
    situation: "L'école de votre fille invite les parents.",
    sourceMessage: {
      from: "École des Vergers",
      subject: "Fête de fin d'année",
      body: "Chers parents,\nLa fête de fin d'année a lieu le vendredi 28 juin, de 16 h à 20 h, dans la cour.\nChaque famille apporte quelque chose pour le buffet. Merci de répondre.\nL'école",
    },
    instruction: "Répondez à l'école : confirmez votre présence, dites combien de personnes viennent et ce que vous apportez pour le buffet.",
    points: ["La confirmation", "Le nombre de personnes", "Ce que vous apportez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-8",
    title: "Répondre à un invité",
    situation: "Vous organisez une fête. Un ami vous pose des questions.",
    sourceMessage: {
      from: "Nicolas",
      subject: "Ta fête de samedi",
      body: "Salut !\nMerci pour l'invitation, je viens avec plaisir !\nC'est à quelle heure ? J'apporte quelque chose ?\nNicolas",
    },
    instruction: "Répondez à Nicolas : donnez l'heure et l'adresse de la fête, et dites ce qu'il peut apporter.",
    points: ["L'heure de la fête", "L'adresse", "Ce qu'il peut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-9",
    title: "S'excuser après une fête",
    situation: "Vous avez manqué la fête d'une amie parce que vous étiez malade.",
    sourceMessage: {
      from: "Julie",
      subject: "Tu n'es pas venu ?",
      body: "Coucou,\nLa fête était super, mais tu n'es pas venu !\nQu'est-ce qui s'est passé ? J'espère que ça va.\nJulie",
    },
    instruction: "Répondez à Julie : excusez-vous, expliquez que vous étiez malade et proposez de la voir bientôt.",
    points: ["Les excuses", "Pourquoi vous n'êtes pas venu", "Une proposition pour se voir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pee-10",
    title: "Remercier après une fête",
    situation: "Vous êtes allé(e) à une belle fête hier soir.",
    sourceMessage: {
      from: "Marta",
      subject: "Merci d'être venus !",
      body: "Bonjour,\nMerci à tous pour hier soir ! La fête était très réussie.\nJ'espère que vous avez passé un bon moment.\nMarta",
    },
    instruction: "Répondez à Marta : remerciez-la pour la fête, dites ce que vous avez aimé et invitez-la chez vous.",
    points: ["Un remerciement", "Ce que vous avez aimé", "Une invitation chez vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e1-3-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e1-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
