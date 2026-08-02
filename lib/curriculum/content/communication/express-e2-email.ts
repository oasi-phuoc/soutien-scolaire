import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E2 — Logement (description, problème domestique, règlement).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E2.1 — Décrire son logement
   ════════════════════════════════════════════════════════════════════════════ */

const E2_1_CE_EMAIL_TEXT_1 = `De : Thomas
Objet : Mon nouvel appartement

Bonjour,

Ça y est, j'ai un nouvel appartement ! Il est à Genève, près du parc.
Il est au quatrième étage, avec un ascenseur.
Il y a trois pièces : un salon, une chambre et un bureau.
La cuisine est équipée et la salle de bains est neuve.
Il y a aussi un grand balcon avec vue sur le lac.
Le loyer est de 1 500 francs par mois, charges comprises.
Il y a une cave au sous-sol et une place de parking.
Je t'invite samedi pour visiter !

À bientôt,
Thomas`;

const E2_1_CE_EMAIL_POOL_1 = buildExpressPool("e2-1-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Où est le nouvel appartement ?",
    text: [
      "À Genève, près du parc",
      "À Lausanne, près du lac",
      "À Genève, près de l'aéroport",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il est à Genève, près du _________.",
    fill: "parc",
    vfQ: "L'appartement est près du parc.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au quatrième étage", "Au deuxième étage", "Au rez-de-chaussée"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il est au _________ étage, avec un ascenseur.",
    fill: "quatrième",
    fillA: ["quatrieme", "4e", "4ème", "4"],
    vfQ: "L'appartement est au deuxième étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de pièces y a-t-il ?",
    text: ["Trois pièces", "Deux pièces", "Cinq pièces"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il y a _________ pièces : un salon, une chambre et un bureau.",
    fill: "trois",
    fillA: ["3"],
    vfQ: "Il y a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelles sont les pièces de l'appartement ?",
    text: [
      "Un salon, une chambre et un bureau",
      "Deux chambres et un salon",
      "Un salon et deux bureaux",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il y a un salon, une chambre et un _________.",
    fill: "bureau",
    vfQ: "Il y a deux chambres dans l'appartement.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Comment est la cuisine ?",
    text: ["Elle est équipée", "Elle est très petite", "Elle est vieille"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "La cuisine est _________ et la salle de bains est neuve.",
    fill: "équipée",
    fillA: ["equipee"],
    vfQ: "La cuisine est équipée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle est la vue depuis le balcon ?",
    text: ["Sur le lac", "Sur la rue", "Sur le jardin"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il y a un grand balcon avec vue sur le _________.",
    fill: "lac",
    vfQ: "Le balcon a une vue sur la rue.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien coûte le loyer par mois ?",
    text: ["1 500 francs", "1 200 francs", "2 500 francs"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs par mois.",
    fill: "1 500",
    fillA: ["1500", "1'500", "mille cinq cents"],
    vfQ: "Le loyer est de 1 500 francs par mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Où est la cave ?",
    text: ["Au sous-sol", "Au grenier", "Dans le garage"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il y a une cave au _________.",
    fill: "sous-sol",
    fillA: ["sous sol", "soussol"],
    vfQ: "Il y a une cave au sous-sol.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Est-ce qu'il y a un ascenseur ?",
    text: ["Oui, il y a un ascenseur", "Non, il n'y a pas d'ascenseur", "L'e-mail ne le dit pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il est au quatrième étage, avec un _________.",
    fill: "ascenseur",
    vfQ: "Il n'y a pas d'ascenseur dans l'immeuble.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand peut-on visiter l'appartement ?",
    text: ["Samedi", "Dimanche", "Lundi"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je t'invite _________ pour visiter !",
    fill: "samedi",
    vfQ: "Thomas invite son ami samedi.",
    vfC: 0,
  }),

]);

const E2_1_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur logement

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de logement.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E2_1_CE_EMAIL_POOL_2 = buildExpressPool("e2-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur logement

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de logement.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E2_1_CE_EMAIL_POOL_3 = buildExpressPool("e2-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur logement

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de logement.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E2_1_CE_EMAIL_POOL_4 = buildExpressPool("e2-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "10 ans"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur logement

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de logement.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E2_1_CE_EMAIL_POOL_5 = buildExpressPool("e2-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur logement

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de logement.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E2_1_CE_EMAIL_POOL_6 = buildExpressPool("e2-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur logement

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de logement.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E2_1_CE_EMAIL_POOL_7 = buildExpressPool("e2-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur logement

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de logement.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E2_1_CE_EMAIL_POOL_8 = buildExpressPool("e2-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur logement

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de logement.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E2_1_CE_EMAIL_POOL_9 = buildExpressPool("e2-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur logement

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de logement.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E2_1_CE_EMAIL_POOL_10 = buildExpressPool("e2-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur logement

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de logement.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E2_1_CE_EMAIL_POOL_11 = buildExpressPool("e2-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur logement

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de logement.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E2_1_CE_EMAIL_POOL_12 = buildExpressPool("e2-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur logement

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de logement.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E2_1_CE_EMAIL_POOL_13 = buildExpressPool("e2-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur logement

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de logement.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E2_1_CE_EMAIL_POOL_14 = buildExpressPool("e2-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur logement

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de logement.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E2_1_CE_EMAIL_POOL_15 = buildExpressPool("e2-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur logement

Bonjour,

Je m'appelle David. Je vous écris au sujet de logement.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E2_1_CE_EMAIL_POOL_16 = buildExpressPool("e2-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur logement

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de logement.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E2_1_CE_EMAIL_POOL_17 = buildExpressPool("e2-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur logement

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de logement.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E2_1_CE_EMAIL_POOL_18 = buildExpressPool("e2-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur logement

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de logement.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E2_1_CE_EMAIL_POOL_19 = buildExpressPool("e2-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_1_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur logement

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de logement.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E2_1_CE_EMAIL_POOL_20 = buildExpressPool("e2-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Logement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "logement",
    vfQ: "L'e-mail parle de logement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E2_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-1-ce-email-1",
  readingText: E2_1_CE_EMAIL_TEXT_1,
  questionPool: E2_1_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-2",
  readingText: E2_1_CE_EMAIL_TEXT_2,
  questionPool: E2_1_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-3",
  readingText: E2_1_CE_EMAIL_TEXT_3,
  questionPool: E2_1_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-4",
  readingText: E2_1_CE_EMAIL_TEXT_4,
  questionPool: E2_1_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-5",
  readingText: E2_1_CE_EMAIL_TEXT_5,
  questionPool: E2_1_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-6",
  readingText: E2_1_CE_EMAIL_TEXT_6,
  questionPool: E2_1_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-7",
  readingText: E2_1_CE_EMAIL_TEXT_7,
  questionPool: E2_1_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-8",
  readingText: E2_1_CE_EMAIL_TEXT_8,
  questionPool: E2_1_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-9",
  readingText: E2_1_CE_EMAIL_TEXT_9,
  questionPool: E2_1_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-10",
  readingText: E2_1_CE_EMAIL_TEXT_10,
  questionPool: E2_1_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-11",
  readingText: E2_1_CE_EMAIL_TEXT_11,
  questionPool: E2_1_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-12",
  readingText: E2_1_CE_EMAIL_TEXT_12,
  questionPool: E2_1_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-13",
  readingText: E2_1_CE_EMAIL_TEXT_13,
  questionPool: E2_1_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-14",
  readingText: E2_1_CE_EMAIL_TEXT_14,
  questionPool: E2_1_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-15",
  readingText: E2_1_CE_EMAIL_TEXT_15,
  questionPool: E2_1_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-16",
  readingText: E2_1_CE_EMAIL_TEXT_16,
  questionPool: E2_1_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-17",
  readingText: E2_1_CE_EMAIL_TEXT_17,
  questionPool: E2_1_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-18",
  readingText: E2_1_CE_EMAIL_TEXT_18,
  questionPool: E2_1_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-19",
  readingText: E2_1_CE_EMAIL_TEXT_19,
  questionPool: E2_1_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-20",
  readingText: E2_1_CE_EMAIL_TEXT_20,
  questionPool: E2_1_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E2_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e2-1-pee-1",
    title: "Confirmer une visite",
    situation: "La régie vous propose une visite d'appartement.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Visite de l'appartement",
      body: "Bonjour,\nNous pouvons vous proposer une visite de l'appartement mardi à 17 h ou jeudi à 12 h.\nQuelle date vous convient ?\nMeilleures salutations,\nLa régie",
    },
    instruction: "Répondez à la régie : choisissez une date, remerciez et posez une question sur le loyer.",
    points: ["La date choisie", "Un remerciement", "Une question sur le loyer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-2",
    title: "Décrire son nouveau logement",
    situation: "Une amie veut des nouvelles de votre déménagement.",
    sourceMessage: {
      from: "Elena",
      subject: "Ton nouvel appartement",
      body: "Coucou,\nAlors, ce déménagement ? Il est comment, ton nouvel appartement ?\nIl y a combien de pièces ? Raconte !\nElena",
    },
    instruction: "Répondez à Elena : décrivez votre appartement, dites combien il y a de pièces et à quel étage vous habitez.",
    points: ["La description de l'appartement", "Le nombre de pièces", "L'étage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-3",
    title: "Un appartement pour un ami",
    situation: "Un ami cherche un logement. Un appartement est libre dans votre immeuble.",
    sourceMessage: {
      from: "Pedro",
      subject: "Je cherche un appartement",
      body: "Salut,\nJe cherche un appartement dans ton quartier.\nTu connais quelque chose de libre ? Je cherche deux pièces, pas trop cher.\nPedro",
    },
    instruction: "Répondez à Pedro : décrivez l'appartement libre dans votre immeuble, donnez le prix du loyer et l'étage.",
    points: ["La description de l'appartement", "Le loyer", "L'étage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-4",
    title: "Compléter son dossier",
    situation: "La régie a besoin d'informations pour votre dossier.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Votre dossier",
      body: "Bonjour,\nNous avons bien reçu votre dossier pour l'appartement de trois pièces.\nCombien de personnes habitent avec vous ? Avez-vous des animaux ?\nLa régie",
    },
    instruction: "Répondez à la régie : dites combien de personnes habitent avec vous, répondez pour les animaux et posez une question sur l'appartement.",
    points: ["Le nombre de personnes", "La réponse pour les animaux", "Une question sur l'appartement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-5",
    title: "Préparer la visite d'un cousin",
    situation: "Votre cousin vient dormir chez vous le mois prochain.",
    sourceMessage: {
      from: "Andrés",
      subject: "Ma visite",
      body: "Salut !\nJe viens chez toi le mois prochain, super !\nIl est comment, ton appartement ? Il y a une chambre pour moi ?\nAndrés",
    },
    instruction: "Répondez à Andrés : décrivez votre appartement, dites où il peut dormir et donnez votre adresse.",
    points: ["La description de l'appartement", "Où il peut dormir", "Votre adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-6",
    title: "Répondre à une annonce",
    situation: "Vous avez vu une annonce pour un appartement de trois pièces.",
    sourceMessage: {
      from: "M. Blanc",
      subject: "Annonce : appartement 3 pièces",
      body: "Bonjour,\nMerci de votre intérêt pour mon appartement de trois pièces au centre-ville.\nQue voulez-vous savoir ?\nM. Blanc",
    },
    instruction: "Répondez à M. Blanc : posez une question sur le loyer, une question sur l'étage et demandez une visite.",
    points: ["Une question sur le loyer", "Une question sur l'étage", "Une demande de visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-7",
    title: "Parler de son quartier",
    situation: "Une amie va habiter dans votre ville et pose des questions.",
    sourceMessage: {
      from: "Nadia",
      subject: "Ton quartier",
      body: "Bonjour,\nJe vais habiter dans ta ville en septembre !\nTon quartier est bien ? C'est calme ? Il y a des magasins ?\nNadia",
    },
    instruction: "Répondez à Nadia : décrivez votre quartier, dites ce qu'il y a près de chez vous et si c'est calme.",
    points: ["La description du quartier", "Ce qu'il y a près de chez vous", "Si c'est calme ou bruyant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-8",
    title: "Rassurer ses parents",
    situation: "Vos parents s'inquiètent pour votre nouveau studio.",
    sourceMessage: {
      from: "Maman",
      subject: "Ton studio",
      body: "Coucou,\nAlors, ce studio ? Il est assez grand ? Il y a tout ce qu'il faut ?\nEnvoie-nous des photos !\nMaman",
    },
    instruction: "Répondez à votre mère : décrivez le studio, dites ce qu'il y a dedans et rassurez-la.",
    points: ["La description du studio", "Les meubles et équipements", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-9",
    title: "Échange d'appartements",
    situation: "Pour les vacances, vous échangez votre logement avec une famille.",
    sourceMessage: {
      from: "Famille Dubois",
      subject: "Échange pour les vacances",
      body: "Bonjour,\nNous sommes intéressés par un échange d'appartements en août.\nPouvez-vous décrire votre logement ? Combien de personnes peuvent dormir chez vous ?\nFamille Dubois",
    },
    instruction: "Répondez à la famille Dubois : décrivez votre logement, dites combien de personnes peuvent dormir et parlez du quartier.",
    points: ["La description du logement", "Le nombre de lits", "Le quartier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-10",
    title: "Accepter un canapé",
    situation: "Un ami déménage et vous propose son canapé.",
    sourceMessage: {
      from: "Hugo",
      subject: "Mon canapé",
      body: "Salut,\nJe déménage et je donne mon canapé. Il est bleu, en bon état.\nTu le veux ? Il est grand : deux mètres.\nHugo",
    },
    instruction: "Répondez à Hugo : acceptez le canapé, décrivez votre salon et dites quand il peut l'apporter.",
    points: ["Votre accord", "La description de votre salon", "Quand il peut l'apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-1-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e2-1",
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
   E2.2 — Avoir un problème domestique
   ════════════════════════════════════════════════════════════════════════════ */

const E2_2_CE_EMAIL_TEXT_1 = `De : Régie Immoplus
Objet : Votre fuite d'eau

Bonjour,

Nous avons bien reçu votre message au sujet de la fuite d'eau dans la salle de bains.
Le plombier vient chez vous mercredi 12 avril, entre 8 h et 10 h.
Merci d'être à la maison. La réparation dure environ deux heures.
La réparation est gratuite pour vous : la régie paie tout.
En attendant, fermez le robinet d'eau sous le lavabo.
Si le problème devient urgent, appelez le 022 555 88 99.

Meilleures salutations,
Régie Immoplus`;

const E2_2_CE_EMAIL_POOL_1 = buildExpressPool("e2-2-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Quel est le problème dans l'appartement ?",
    text: [
      "Une fuite d'eau dans la salle de bains",
      "Une panne de chauffage",
      "Une panne d'électricité",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il y a une fuite d'eau dans la salle de _________.",
    fill: "bains",
    fillA: ["bain"],
    vfQ: "Il y a une fuite d'eau dans la cuisine.",
    vfC: 1,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui vient réparer la fuite ?",
    text: ["Le plombier", "L'électricien", "Le concierge"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le _________ vient chez vous mercredi 12 avril.",
    fill: "plombier",
    vfQ: "Le plombier vient réparer la fuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel jour vient le plombier ?",
    text: ["Mercredi 12 avril", "Jeudi 13 avril", "Mardi 11 avril"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le plombier vient chez vous _________ 12 avril.",
    fill: "mercredi",
    vfQ: "Le plombier vient jeudi.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure vient le plombier ?",
    text: ["Entre 8 h et 10 h", "Entre 10 h et 12 h", "Entre 14 h et 16 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le plombier vient entre 8 h et _________ h.",
    fill: "10",
    fillA: ["dix", "10 h"],
    vfQ: "Le plombier vient entre 8 h et 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien de temps dure la réparation ?",
    text: ["Environ deux heures", "Environ une heure", "Toute la journée"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "La réparation dure environ _________ heures.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La réparation dure environ deux heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte la réparation pour le locataire ?",
    text: ["Rien, c'est gratuit", "100 francs", "La moitié du prix"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "La réparation est _________ pour vous.",
    fill: "gratuite",
    vfQ: "Le locataire paie la réparation.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui paie la réparation ?",
    text: ["La régie", "Le locataire", "Le plombier"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "La _________ paie tout.",
    fill: "régie",
    fillA: ["regie"],
    vfQ: "La régie paie la réparation.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Que faut-il faire en attendant ?",
    text: [
      "Fermer le robinet sous le lavabo",
      "Couper l'électricité",
      "Ouvrir les fenêtres",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "En attendant, fermez le _________ d'eau sous le lavabo.",
    fill: "robinet",
    vfQ: "Il faut fermer le robinet sous le lavabo.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Que faire si le problème devient urgent ?",
    text: [
      "Appeler le 022 555 88 99",
      "Envoyer une lettre",
      "Attendre le plombier",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Si le problème devient urgent, _________ le 022 555 88 99.",
    fill: "appelez",
    fillA: ["téléphonez", "telephonez"],
    vfQ: "Si c'est urgent, il faut envoyer une lettre.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Que demande la régie pour mercredi matin ?",
    text: [
      "Être à la maison",
      "Laisser la clé chez le concierge",
      "Sortir de l'appartement",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Merci d'être à la _________.",
    fill: "maison",
    vfQ: "Il faut être à la maison mercredi matin.",
    vfC: 0,
  }),

]);

const E2_2_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur dépannage

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E2_2_CE_EMAIL_POOL_2 = buildExpressPool("e2-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur dépannage

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E2_2_CE_EMAIL_POOL_3 = buildExpressPool("e2-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur dépannage

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E2_2_CE_EMAIL_POOL_4 = buildExpressPool("e2-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "10 ans"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur dépannage

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E2_2_CE_EMAIL_POOL_5 = buildExpressPool("e2-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur dépannage

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E2_2_CE_EMAIL_POOL_6 = buildExpressPool("e2-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur dépannage

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E2_2_CE_EMAIL_POOL_7 = buildExpressPool("e2-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur dépannage

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E2_2_CE_EMAIL_POOL_8 = buildExpressPool("e2-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur dépannage

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E2_2_CE_EMAIL_POOL_9 = buildExpressPool("e2-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur dépannage

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E2_2_CE_EMAIL_POOL_10 = buildExpressPool("e2-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur dépannage

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E2_2_CE_EMAIL_POOL_11 = buildExpressPool("e2-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur dépannage

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E2_2_CE_EMAIL_POOL_12 = buildExpressPool("e2-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur dépannage

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E2_2_CE_EMAIL_POOL_13 = buildExpressPool("e2-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur dépannage

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E2_2_CE_EMAIL_POOL_14 = buildExpressPool("e2-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur dépannage

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E2_2_CE_EMAIL_POOL_15 = buildExpressPool("e2-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur dépannage

Bonjour,

Je m'appelle David. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E2_2_CE_EMAIL_POOL_16 = buildExpressPool("e2-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur dépannage

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E2_2_CE_EMAIL_POOL_17 = buildExpressPool("e2-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur dépannage

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E2_2_CE_EMAIL_POOL_18 = buildExpressPool("e2-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur dépannage

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E2_2_CE_EMAIL_POOL_19 = buildExpressPool("e2-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_2_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur dépannage

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de dépannage.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E2_2_CE_EMAIL_POOL_20 = buildExpressPool("e2-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Dépannage", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "dépannage",
    vfQ: "L'e-mail parle de dépannage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E2_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-2-ce-email-1",
  readingText: E2_2_CE_EMAIL_TEXT_1,
  questionPool: E2_2_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-2",
  readingText: E2_2_CE_EMAIL_TEXT_2,
  questionPool: E2_2_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-3",
  readingText: E2_2_CE_EMAIL_TEXT_3,
  questionPool: E2_2_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-4",
  readingText: E2_2_CE_EMAIL_TEXT_4,
  questionPool: E2_2_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-5",
  readingText: E2_2_CE_EMAIL_TEXT_5,
  questionPool: E2_2_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-6",
  readingText: E2_2_CE_EMAIL_TEXT_6,
  questionPool: E2_2_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-7",
  readingText: E2_2_CE_EMAIL_TEXT_7,
  questionPool: E2_2_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-8",
  readingText: E2_2_CE_EMAIL_TEXT_8,
  questionPool: E2_2_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-9",
  readingText: E2_2_CE_EMAIL_TEXT_9,
  questionPool: E2_2_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-10",
  readingText: E2_2_CE_EMAIL_TEXT_10,
  questionPool: E2_2_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-11",
  readingText: E2_2_CE_EMAIL_TEXT_11,
  questionPool: E2_2_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-12",
  readingText: E2_2_CE_EMAIL_TEXT_12,
  questionPool: E2_2_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-13",
  readingText: E2_2_CE_EMAIL_TEXT_13,
  questionPool: E2_2_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-14",
  readingText: E2_2_CE_EMAIL_TEXT_14,
  questionPool: E2_2_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-15",
  readingText: E2_2_CE_EMAIL_TEXT_15,
  questionPool: E2_2_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-16",
  readingText: E2_2_CE_EMAIL_TEXT_16,
  questionPool: E2_2_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-17",
  readingText: E2_2_CE_EMAIL_TEXT_17,
  questionPool: E2_2_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-18",
  readingText: E2_2_CE_EMAIL_TEXT_18,
  questionPool: E2_2_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-19",
  readingText: E2_2_CE_EMAIL_TEXT_19,
  questionPool: E2_2_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-20",
  readingText: E2_2_CE_EMAIL_TEXT_20,
  questionPool: E2_2_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E2_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e2-2-pee-1",
    title: "Signaler une panne de chauffage",
    situation: "La régie demande si tout va bien dans votre appartement.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Contrôle annuel",
      body: "Bonjour,\nNous préparons le contrôle annuel de l'immeuble.\nAvez-vous des problèmes dans votre appartement ?\nMeilleures salutations,\nLa régie",
    },
    instruction: "Répondez à la régie : expliquez que le chauffage ne marche pas, dites depuis quand et demandez un réparateur.",
    points: ["Le problème de chauffage", "Depuis quand", "La demande d'un réparateur"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-2",
    title: "Changer la date du plombier",
    situation: "La régie propose une date, mais vous travaillez ce jour-là.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Visite du plombier",
      body: "Bonjour,\nLe plombier peut venir chez vous mardi matin, entre 8 h et 10 h.\nÊtes-vous à la maison ?\nLa régie",
    },
    instruction: "Répondez à la régie : expliquez que vous travaillez mardi matin, proposez un autre jour et remerciez.",
    points: ["Pourquoi mardi ne va pas", "Un autre jour possible", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-3",
    title: "S'excuser auprès d'un voisin",
    situation: "Votre voisin du dessous a un problème à cause de votre fuite d'eau.",
    sourceMessage: {
      from: "M. Rossi",
      subject: "Eau au plafond",
      body: "Bonjour,\nIl y a de l'eau sur mon plafond, dans la salle de bains.\nJe pense que ça vient de chez vous. Pouvez-vous vérifier ?\nM. Rossi",
    },
    instruction: "Répondez à M. Rossi : excusez-vous, expliquez la fuite d'eau et dites quand le plombier vient.",
    points: ["Les excuses", "L'explication de la fuite", "Quand le plombier vient"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-4",
    title: "Décrire une panne",
    situation: "Le service de dépannage demande des détails avant de venir.",
    sourceMessage: {
      from: "SOS Dépannage",
      subject: "Votre demande de réparation",
      body: "Bonjour,\nNous avons reçu votre demande de réparation.\nQuel est l'appareil en panne ? Quel est le problème exactement ?\nSOS Dépannage",
    },
    instruction: "Répondez à SOS Dépannage : dites que la machine à laver est en panne, décrivez le problème et donnez votre adresse.",
    points: ["L'appareil en panne", "La description du problème", "Votre adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-5",
    title: "Après la réparation",
    situation: "Le propriétaire demande si la réparation est bien faite.",
    sourceMessage: {
      from: "M. Blanc",
      subject: "La réparation",
      body: "Bonjour,\nLe technicien est venu chez vous hier pour le chauffage.\nEst-ce que tout marche bien maintenant ?\nM. Blanc",
    },
    instruction: "Répondez à M. Blanc : remerciez-le, dites que le chauffage marche bien et racontez la visite du technicien.",
    points: ["Un remerciement", "Le chauffage marche", "La visite du technicien"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-6",
    title: "Conseiller un ami",
    situation: "Une amie a un problème avec son frigo.",
    sourceMessage: {
      from: "Carla",
      subject: "Mon frigo est en panne",
      body: "Salut,\nMon frigo ne marche plus depuis ce matin !\nQu'est-ce que je peux faire ? Tu connais un bon réparateur ?\nCarla",
    },
    instruction: "Répondez à Carla : donnez-lui un conseil, recommandez un réparateur et donnez son numéro de téléphone.",
    points: ["Un conseil", "Le réparateur recommandé", "Le numéro de téléphone"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-7",
    title: "Coupure d'électricité",
    situation: "La régie annonce des travaux dans l'immeuble.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Coupure d'électricité",
      body: "Bonjour,\nPour des travaux, l'électricité est coupée jeudi dans l'immeuble.\nMerci de votre compréhension.\nLa régie",
    },
    instruction: "Répondez à la régie : demandez à quelle heure commence la coupure, combien de temps elle dure et expliquez pourquoi c'est important pour vous.",
    points: ["Une question sur l'heure", "Une question sur la durée", "Pourquoi c'est important pour vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-8",
    title: "Une facture trop chère",
    situation: "Le réparateur vous envoie sa facture.",
    sourceMessage: {
      from: "SOS Dépannage",
      subject: "Facture n° 234",
      body: "Bonjour,\nVoici la facture pour la réparation de votre machine à laver : 300 francs.\nMerci de payer avant la fin du mois.\nSOS Dépannage",
    },
    instruction: "Répondez à SOS Dépannage : dites que la facture est trop chère, rappelez le prix annoncé au téléphone et demandez une explication.",
    points: ["La facture est trop chère", "Le prix annoncé au téléphone", "Une demande d'explication"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-9",
    title: "Prévenir son chef",
    situation: "Le plombier vient demain matin et vous devez rester à la maison.",
    sourceMessage: {
      from: "Mme Favre",
      subject: "Réunion de demain",
      body: "Bonjour,\nLa réunion d'équipe a lieu demain à 9 h. Merci de confirmer votre présence.\nBonne journée,\nMme Favre",
    },
    instruction: "Répondez à votre cheffe : excusez-vous, expliquez la fuite d'eau et la visite du plombier, et dites quand vous arrivez au travail.",
    points: ["L'excuse", "La fuite d'eau et le plombier", "Quand vous arrivez au travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-10",
    title: "Choisir une date d'entretien",
    situation: "La régie organise l'entretien du chauffage dans tous les appartements.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Entretien du chauffage",
      body: "Bonjour,\nNous organisons l'entretien du chauffage dans votre appartement.\nLe technicien peut venir lundi, mercredi ou vendredi, le matin.\nQuel jour choisissez-vous ?\nLa régie",
    },
    instruction: "Répondez à la régie : choisissez un jour, dites qui est à la maison ce jour-là et posez une question sur la durée de l'entretien.",
    points: ["Le jour choisi", "Qui est à la maison", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-2-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e2-2",
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
   E2.3 — Respecter le règlement
   ════════════════════════════════════════════════════════════════════════════ */

const E2_3_CE_EMAIL_TEXT_1 = `De : Régie du Parc
Objet : Règlement de l'immeuble

Bonjour,

Voici quelques règles importantes pour bien vivre ensemble dans l'immeuble.
Après 22 h, ne faites pas de bruit : les voisins dorment.
Sortez les poubelles le lundi et le jeudi, avant 7 h du matin.
La buanderie est ouverte de 8 h à 20 h. Réservez votre jour sur la liste, au sous-sol.
Rangez les vélos dans le local, à côté du garage.
Il est interdit de fumer dans l'escalier.
Tenez les chiens en laisse dans le jardin.
Le règlement complet est affiché dans le hall d'entrée.

Merci de votre attention,
La régie`;

const E2_3_CE_EMAIL_POOL_1 = buildExpressPool("e2-3-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["La régie", "Un voisin", "Le concierge"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Voici quelques règles pour bien vivre ensemble dans l'_________.",
    fill: "immeuble",
    vfQ: "Cet e-mail vient de la régie.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Après quelle heure ne faut-il pas faire de bruit ?",
    text: ["Après 22 h", "Après 20 h", "Après minuit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Après _________ h, ne faites pas de bruit.",
    fill: "22",
    fillA: ["vingt-deux", "22 h"],
    vfQ: "On peut faire du bruit après 22 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quels jours faut-il sortir les poubelles ?",
    text: [
      "Le lundi et le jeudi",
      "Le mardi et le vendredi",
      "Tous les jours",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Sortez les poubelles le lundi et le _________.",
    fill: "jeudi",
    vfQ: "On sort les poubelles le lundi et le jeudi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Avant quelle heure faut-il sortir les poubelles ?",
    text: ["Avant 7 h du matin", "Avant 9 h du matin", "Avant midi"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Sortez les poubelles avant _________ h du matin.",
    fill: "7",
    fillA: ["sept", "7 h"],
    vfQ: "Il faut sortir les poubelles avant 7 h du matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quels sont les horaires de la buanderie ?",
    text: ["De 8 h à 20 h", "De 8 h à 22 h", "De 7 h à 18 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "La buanderie est ouverte de 8 h à _________ h.",
    fill: "20",
    fillA: ["vingt", "20 h"],
    vfQ: "La buanderie ferme à 22 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Où est la liste pour réserver la buanderie ?",
    text: ["Au sous-sol", "Dans le hall d'entrée", "Chez le concierge"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Réservez votre jour sur la liste, au _________.",
    fill: "sous-sol",
    fillA: ["sous sol", "soussol"],
    vfQ: "La liste de la buanderie est au sous-sol.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Où faut-il ranger les vélos ?",
    text: [
      "Dans le local, à côté du garage",
      "Dans le hall d'entrée",
      "Sur le balcon",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les vélos dans le local, à côté du _________.",
    fill: "garage",
    vfQ: "Les vélos restent dans le hall d'entrée.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Où est-il interdit de fumer ?",
    text: ["Dans l'escalier", "Dans le jardin", "Sur le balcon"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il est interdit de _________ dans l'escalier.",
    fill: "fumer",
    vfQ: "Il est interdit de fumer dans l'escalier.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Que faut-il faire avec les chiens dans le jardin ?",
    text: [
      "Les tenir en laisse",
      "Les laisser courir",
      "Les laisser à la maison",
    ],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Tenez les chiens en _________ dans le jardin.",
    fill: "laisse",
    vfQ: "Les chiens sont interdits dans l'immeuble.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Où est affiché le règlement complet ?",
    text: ["Dans le hall d'entrée", "Dans la buanderie", "Dans l'ascenseur"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le règlement complet est affiché dans le hall d'_________.",
    fill: "entrée",
    fillA: ["entree"],
    vfQ: "Le règlement est affiché dans le hall d'entrée.",
    vfC: 0,
  }),

]);

const E2_3_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur règlement

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E2_3_CE_EMAIL_POOL_2 = buildExpressPool("e2-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur règlement

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E2_3_CE_EMAIL_POOL_3 = buildExpressPool("e2-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur règlement

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E2_3_CE_EMAIL_POOL_4 = buildExpressPool("e2-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "10 ans"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur règlement

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E2_3_CE_EMAIL_POOL_5 = buildExpressPool("e2-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur règlement

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E2_3_CE_EMAIL_POOL_6 = buildExpressPool("e2-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur règlement

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E2_3_CE_EMAIL_POOL_7 = buildExpressPool("e2-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur règlement

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E2_3_CE_EMAIL_POOL_8 = buildExpressPool("e2-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur règlement

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E2_3_CE_EMAIL_POOL_9 = buildExpressPool("e2-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur règlement

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E2_3_CE_EMAIL_POOL_10 = buildExpressPool("e2-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur règlement

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E2_3_CE_EMAIL_POOL_11 = buildExpressPool("e2-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur règlement

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E2_3_CE_EMAIL_POOL_12 = buildExpressPool("e2-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur règlement

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E2_3_CE_EMAIL_POOL_13 = buildExpressPool("e2-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur règlement

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E2_3_CE_EMAIL_POOL_14 = buildExpressPool("e2-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur règlement

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E2_3_CE_EMAIL_POOL_15 = buildExpressPool("e2-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur règlement

Bonjour,

Je m'appelle David. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E2_3_CE_EMAIL_POOL_16 = buildExpressPool("e2-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur règlement

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E2_3_CE_EMAIL_POOL_17 = buildExpressPool("e2-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur règlement

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E2_3_CE_EMAIL_POOL_18 = buildExpressPool("e2-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur règlement

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E2_3_CE_EMAIL_POOL_19 = buildExpressPool("e2-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E2_3_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur règlement

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de règlement.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E2_3_CE_EMAIL_POOL_20 = buildExpressPool("e2-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Règlement", "vacances", "sport"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "règlement",
    vfQ: "L'e-mail parle de règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
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
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E2_3_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-3-ce-email-1",
  readingText: E2_3_CE_EMAIL_TEXT_1,
  questionPool: E2_3_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-2",
  readingText: E2_3_CE_EMAIL_TEXT_2,
  questionPool: E2_3_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-3",
  readingText: E2_3_CE_EMAIL_TEXT_3,
  questionPool: E2_3_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-4",
  readingText: E2_3_CE_EMAIL_TEXT_4,
  questionPool: E2_3_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-5",
  readingText: E2_3_CE_EMAIL_TEXT_5,
  questionPool: E2_3_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-6",
  readingText: E2_3_CE_EMAIL_TEXT_6,
  questionPool: E2_3_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-7",
  readingText: E2_3_CE_EMAIL_TEXT_7,
  questionPool: E2_3_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-8",
  readingText: E2_3_CE_EMAIL_TEXT_8,
  questionPool: E2_3_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-9",
  readingText: E2_3_CE_EMAIL_TEXT_9,
  questionPool: E2_3_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-10",
  readingText: E2_3_CE_EMAIL_TEXT_10,
  questionPool: E2_3_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-11",
  readingText: E2_3_CE_EMAIL_TEXT_11,
  questionPool: E2_3_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-12",
  readingText: E2_3_CE_EMAIL_TEXT_12,
  questionPool: E2_3_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-13",
  readingText: E2_3_CE_EMAIL_TEXT_13,
  questionPool: E2_3_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-14",
  readingText: E2_3_CE_EMAIL_TEXT_14,
  questionPool: E2_3_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-15",
  readingText: E2_3_CE_EMAIL_TEXT_15,
  questionPool: E2_3_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-16",
  readingText: E2_3_CE_EMAIL_TEXT_16,
  questionPool: E2_3_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-17",
  readingText: E2_3_CE_EMAIL_TEXT_17,
  questionPool: E2_3_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-18",
  readingText: E2_3_CE_EMAIL_TEXT_18,
  questionPool: E2_3_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-19",
  readingText: E2_3_CE_EMAIL_TEXT_19,
  questionPool: E2_3_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-20",
  readingText: E2_3_CE_EMAIL_TEXT_20,
  questionPool: E2_3_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E2_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e2-3-pee-1",
    title: "S'excuser pour le bruit",
    situation: "La régie vous écrit après une soirée chez vous.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Bruit samedi soir",
      body: "Bonjour,\nDes voisins se plaignent du bruit dans votre appartement samedi soir, après 23 h.\nMerci de respecter le règlement de l'immeuble.\nLa régie",
    },
    instruction: "Répondez à la régie : excusez-vous, expliquez que c'était un anniversaire et promettez de respecter le règlement.",
    points: ["Les excuses", "L'explication de la soirée", "La promesse de respecter le règlement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-2",
    title: "Le chien qui aboie",
    situation: "Un voisin se plaint de votre chien.",
    sourceMessage: {
      from: "M. Rossi",
      subject: "Votre chien",
      body: "Bonjour,\nVotre chien aboie toute la journée quand vous n'êtes pas là.\nC'est difficile pour les voisins. Pouvez-vous faire quelque chose ?\nM. Rossi",
    },
    instruction: "Répondez à M. Rossi : excusez-vous, expliquez la situation et proposez une solution.",
    points: ["Les excuses", "L'explication", "Une solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-3",
    title: "Les poubelles",
    situation: "La régie vous rappelle les jours des poubelles.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Rappel : les poubelles",
      body: "Bonjour,\nRappel : les poubelles sortent le lundi et le jeudi seulement.\nMerci de respecter ces jours.\nLa régie",
    },
    instruction: "Répondez à la régie : excusez-vous pour l'erreur, dites que vous êtes nouveau dans l'immeuble et posez une question sur le recyclage.",
    points: ["Les excuses", "Vous êtes nouveau", "Une question sur le recyclage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-4",
    title: "Le linge oublié",
    situation: "Une voisine vous écrit au sujet de la buanderie.",
    sourceMessage: {
      from: "Mme Keller",
      subject: "Votre linge dans la buanderie",
      body: "Bonjour,\nVotre linge est encore dans la machine et c'est mon jour de buanderie.\nPouvez-vous venir le chercher ?\nMerci,\nMme Keller",
    },
    instruction: "Répondez à Mme Keller : excusez-vous, remerciez-la pour son message et dites quand vous venez chercher votre linge.",
    points: ["Les excuses", "Un remerciement", "Quand vous venez chercher le linge"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-5",
    title: "Réserver la buanderie",
    situation: "La régie change le système de réservation de la buanderie.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Nouvelle liste de buanderie",
      body: "Bonjour,\nÀ partir du mois prochain, réservez votre jour de buanderie par e-mail.\nQuel jour voulez-vous ?\nLa régie",
    },
    instruction: "Répondez à la régie : choisissez un jour, expliquez pourquoi ce jour vous convient et posez une question sur les horaires.",
    points: ["Le jour choisi", "Pourquoi ce jour", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-6",
    title: "Le vélo dans le hall",
    situation: "Un voisin vous demande de déplacer votre vélo.",
    sourceMessage: {
      from: "M. Diallo",
      subject: "Votre vélo",
      body: "Bonjour,\nVotre vélo est dans le hall d'entrée et il bloque le passage.\nPouvez-vous le ranger dans le local à vélos ?\nMerci,\nM. Diallo",
    },
    instruction: "Répondez à M. Diallo : excusez-vous, expliquez pourquoi le vélo est dans le hall et dites quand vous le rangez.",
    points: ["Les excuses", "Pourquoi le vélo est là", "Quand vous le rangez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-7",
    title: "La réunion des locataires",
    situation: "La régie invite tous les locataires à une réunion.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Réunion des locataires",
      body: "Bonjour,\nLa réunion des locataires a lieu le mardi 5 mai à 19 h, dans le hall.\nNous parlons du nouveau règlement. Merci de confirmer votre présence.\nLa régie",
    },
    instruction: "Répondez à la régie : confirmez votre présence, remerciez pour l'invitation et posez une question sur le nouveau règlement.",
    points: ["La confirmation", "Un remerciement", "Une question sur le règlement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-8",
    title: "Expliquer les règles",
    situation: "Une nouvelle voisine pose des questions sur l'immeuble.",
    sourceMessage: {
      from: "Mme Lopez",
      subject: "Les règles de l'immeuble",
      body: "Bonjour,\nJe suis votre nouvelle voisine du deuxième étage.\nPouvez-vous m'expliquer les règles de l'immeuble ? Pour le bruit, les poubelles, la buanderie ?\nMerci,\nMme Lopez",
    },
    instruction: "Répondez à Mme Lopez : souhaitez-lui la bienvenue, expliquez la règle du bruit et les jours des poubelles.",
    points: ["La bienvenue", "La règle du bruit", "Les jours des poubelles"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-9",
    title: "Nettoyage du local à vélos",
    situation: "La régie annonce le nettoyage du local à vélos.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Nettoyage du local à vélos",
      body: "Bonjour,\nNous nettoyons le local à vélos vendredi.\nMerci de sortir votre vélo avant jeudi soir.\nLa régie",
    },
    instruction: "Répondez à la régie : dites que vous avez compris, demandez où mettre le vélo pendant le nettoyage et quand le local rouvre.",
    points: ["Vous avez compris", "Où mettre le vélo", "Quand le local rouvre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-10",
    title: "La fête des voisins",
    situation: "Un voisin organise la fête des voisins dans le jardin.",
    sourceMessage: {
      from: "M. Perret",
      subject: "Fête des voisins",
      body: "Bonjour à tous,\nJ'organise la fête des voisins samedi à 17 h, dans le jardin de l'immeuble.\nChacun apporte quelque chose. Vous venez ?\nM. Perret",
    },
    instruction: "Répondez à M. Perret : acceptez l'invitation, dites ce que vous apportez et demandez à quelle heure la fête finit.",
    points: ["Votre accord", "Ce que vous apportez", "Une question sur l'heure de fin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-3-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e2-3",
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
