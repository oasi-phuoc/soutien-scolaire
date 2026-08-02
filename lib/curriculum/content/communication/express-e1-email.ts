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

Je m'appelle Marco Rossi. J'ai 32 ans et je suis italien.
Je viens de Milan.
Je suis cuisinier. Je travaille dans restaurant au centre-ville.
J'habite au troisième étage, appartement 12.
Mon conjoint s'appelle Elena. Il/Elle est infirmière.
Mon numéro de téléphone est le 078 555 21 40.

Cordialement,
Marco Rossi`;

const E1_1_CE_EMAIL_POOL_1 = buildExpressPool("e1-1-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marco", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marco",
    vfQ: "Marco Rossi écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Marco ?",
    text: ["32 ans", "42 ans", "27 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "32",
    vfQ: "Marco a 32 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Italien", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "italien",
    vfQ: "La nationalité est italien.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Cuisinier", "Pilote", "Avocat"],
    textC: 0,
    img: ["cuisinier", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "cuisinier",
    vfQ: "La profession est cuisinier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Marco ?",
    text: ["De Milan", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Milan",
    vfQ: "Marco vient de Milan.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Marco ?",
    text: ["Au troisième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "troisième",
    vfQ: "Marco habite au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["078 555 21 40", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "078 555 21 40",
    vfQ: "Le numéro est 078 555 21 40.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_2 = `De : Lucas Ferreira
Objet : Nouveau dans le quartier

Bonjour,

Je m'appelle Lucas. J'ai 19 ans et je suis brésilien.
Je viens de São Paulo.
Je suis étudiant. Je travaille dans l'université de Genève.
J'habite au premier étage, appartement 3.
Mon numéro de téléphone est le 079 111 22 33.

Cordialement,
Lucas Ferreira`;

const E1_1_CE_EMAIL_POOL_2 = buildExpressPool("e1-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Lucas ?",
    text: ["19 ans", "29 ans", "14 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "19",
    vfQ: "Lucas a 19 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Brésilien", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "brésilien",
    vfQ: "La nationalité est brésilien.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Étudiant", "Pilote", "Avocat"],
    textC: 0,
    img: ["professeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "étudiant",
    vfQ: "La profession est étudiant.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Lucas ?",
    text: ["De São Paulo", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "São Paulo",
    vfQ: "Lucas vient de São Paulo.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Lucas ?",
    text: ["Au premier étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "premier",
    vfQ: "Lucas habite au premier étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 111 22 33", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 111 22 33",
    vfQ: "Le numéro est 079 111 22 33.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_3 = `De : Nina Costa
Objet : Présentation rapide

Bonjour,

Je m'appelle Nina. J'ai 25 ans et je suis portugaise.
Je viens de Lisbonne.
Je suis vendeuse. Je travaille dans une boutique à Fribourg.
J'habite au deuxième étage, appartement 7.
Mon numéro de téléphone est le 076 222 33 44.

Cordialement,
Nina Costa`;

const E1_1_CE_EMAIL_POOL_3 = buildExpressPool("e1-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Nina ?",
    text: ["25 ans", "35 ans", "20 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "25",
    vfQ: "Nina a 25 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Portugaise", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "portugaise",
    vfQ: "La nationalité est portugaise.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Vendeuse", "Pilote", "Avocat"],
    textC: 0,
    img: ["vendeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "vendeuse",
    vfQ: "La profession est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Nina ?",
    text: ["De Lisbonne", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Lisbonne",
    vfQ: "Nina vient de Lisbonne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Nina ?",
    text: ["Au deuxième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "deuxième",
    vfQ: "Nina habite au deuxième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["076 222 33 44", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "076 222 33 44",
    vfQ: "Le numéro est 076 222 33 44.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_4 = `De : Paul Dubois
Objet : Enchanté !

Bonjour,

Je m'appelle Paul. J'ai 45 ans et je suis français.
Je viens de Lyon.
Je suis mécanicien. Je travaille dans un garage à Lausanne.
J'habite au rez-de-chaussée étage, appartement 1.
Mon conjoint s'appelle Marie. Il/Elle est coiffeuse.
Mon numéro de téléphone est le 021 345 67 89.

Cordialement,
Paul Dubois`;

const E1_1_CE_EMAIL_POOL_4 = buildExpressPool("e1-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Paul ?",
    text: ["45 ans", "55 ans", "40 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "45",
    vfQ: "Paul a 45 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Français", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "français",
    vfQ: "La nationalité est français.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Mécanicien", "Pilote", "Avocat"],
    textC: 0,
    img: ["mécanicien", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "mécanicien",
    vfQ: "La profession est mécanicien.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Paul ?",
    text: ["De Lyon", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Lyon",
    vfQ: "Paul vient de Lyon.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Paul ?",
    text: ["Au rez-de-chaussée étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "rez-de-chaussée",
    vfQ: "Paul habite au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["021 345 67 89", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "021 345 67 89",
    vfQ: "Le numéro est 021 345 67 89.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_5 = `De : Sara Alami
Objet : Bonjour de Sara

Bonjour,

Je m'appelle Sara. J'ai 22 ans et je suis marocaine.
Je viens de Casablanca.
Je suis étudiante. Je travaille dans l'école de commerce.
J'habite au quatrième étage, appartement 15.
Mon numéro de téléphone est le 078 999 88 77.

Cordialement,
Sara Alami`;

const E1_1_CE_EMAIL_POOL_5 = buildExpressPool("e1-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Sara ?",
    text: ["22 ans", "32 ans", "17 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "22",
    vfQ: "Sara a 22 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Marocaine", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "marocaine",
    vfQ: "La nationalité est marocaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Étudiante", "Pilote", "Avocat"],
    textC: 0,
    img: ["professeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "étudiante",
    vfQ: "La profession est étudiante.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Sara ?",
    text: ["De Casablanca", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Casablanca",
    vfQ: "Sara vient de Casablanca.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Sara ?",
    text: ["Au quatrième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "quatrième",
    vfQ: "Sara habite au quatrième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["078 999 88 77", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "078 999 88 77",
    vfQ: "Le numéro est 078 999 88 77.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_6 = `De : Tom Müller
Objet : Je suis Tom

Bonjour,

Je m'appelle Tom. J'ai 28 ans et je suis suisse allemand.
Je viens de Berne.
Je suis électricien. Je travaille dans une entreprise à Bienne.
J'habite au cinquième étage, appartement 22.
Mon conjoint s'appelle Anna. Il/Elle est secrétaire.
Mon numéro de téléphone est le 032 123 45 67.

Cordialement,
Tom Müller`;

const E1_1_CE_EMAIL_POOL_6 = buildExpressPool("e1-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Tom ?",
    text: ["28 ans", "38 ans", "23 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "28",
    vfQ: "Tom a 28 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Suisse allemand", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "suisse allemand",
    vfQ: "La nationalité est suisse allemand.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Électricien", "Pilote", "Avocat"],
    textC: 0,
    img: ["électricien", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "électricien",
    vfQ: "La profession est électricien.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Tom ?",
    text: ["De Berne", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Berne",
    vfQ: "Tom vient de Berne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Tom ?",
    text: ["Au cinquième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "cinquième",
    vfQ: "Tom habite au cinquième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["032 123 45 67", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "032 123 45 67",
    vfQ: "Le numéro est 032 123 45 67.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_7 = `De : Emma Laurent
Objet : Présentation

Bonjour,

Je m'appelle Emma. J'ai 35 ans et je suis française.
Je viens de Marseille.
Je suis infirmière. Je travaille dans l'hôpital de Montreux.
J'habite au troisième étage, appartement 8.
Mon conjoint s'appelle Pierre. Il/Elle est boulanger.
Mon numéro de téléphone est le 079 456 12 34.

Cordialement,
Emma Laurent`;

const E1_1_CE_EMAIL_POOL_7 = buildExpressPool("e1-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Emma ?",
    text: ["35 ans", "45 ans", "30 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "35",
    vfQ: "Emma a 35 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Française", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "française",
    vfQ: "La nationalité est française.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Infirmière", "Pilote", "Avocat"],
    textC: 0,
    img: ["infirmier", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "infirmière",
    vfQ: "La profession est infirmière.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Emma ?",
    text: ["De Marseille", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Marseille",
    vfQ: "Emma vient de Marseille.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Emma ?",
    text: ["Au troisième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "troisième",
    vfQ: "Emma habite au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 456 12 34", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 456 12 34",
    vfQ: "Le numéro est 079 456 12 34.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_8 = `De : Hugo Martin
Objet : Bonjour !

Bonjour,

Je m'appelle Hugo. J'ai 30 ans et je suis belge.
Je viens de Bruxelles.
Je suis journaliste. Je travaille dans un journal à Neuchâtel.
J'habite au deuxième étage, appartement 5.
Mon numéro de téléphone est le 079 567 89 01.

Cordialement,
Hugo Martin`;

const E1_1_CE_EMAIL_POOL_8 = buildExpressPool("e1-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Hugo ?",
    text: ["30 ans", "40 ans", "25 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "30",
    vfQ: "Hugo a 30 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Belge", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "belge",
    vfQ: "La nationalité est belge.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Journaliste", "Pilote", "Avocat"],
    textC: 0,
    img: ["journaliste", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "journaliste",
    vfQ: "La profession est journaliste.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Hugo ?",
    text: ["De Bruxelles", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Bruxelles",
    vfQ: "Hugo vient de Bruxelles.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Hugo ?",
    text: ["Au deuxième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "deuxième",
    vfQ: "Hugo habite au deuxième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 567 89 01", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 567 89 01",
    vfQ: "Le numéro est 079 567 89 01.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_9 = `De : Léa Bernard
Objet : Coucou !

Bonjour,

Je m'appelle Léa. J'ai 21 ans et je suis suisse.
Je viens de Genève.
Je suis étudiante. Je travaille dans la faculté de médecine.
J'habite au sixième étage, appartement 18.
Mon numéro de téléphone est le 079 678 90 12.

Cordialement,
Léa Bernard`;

const E1_1_CE_EMAIL_POOL_9 = buildExpressPool("e1-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Léa ?",
    text: ["21 ans", "31 ans", "16 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "21",
    vfQ: "Léa a 21 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Suisse", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "suisse",
    vfQ: "La nationalité est suisse.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Étudiante", "Pilote", "Avocat"],
    textC: 0,
    img: ["professeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "étudiante",
    vfQ: "La profession est étudiante.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Léa ?",
    text: ["De Genève", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Genève",
    vfQ: "Léa vient de Genève.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Léa ?",
    text: ["Au sixième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "sixième",
    vfQ: "Léa habite au sixième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 678 90 12", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 678 90 12",
    vfQ: "Le numéro est 079 678 90 12.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_10 = `De : Marc Weber
Objet : Présentation courte

Bonjour,

Je m'appelle Marc. J'ai 50 ans et je suis allemand.
Je viens de Berlin.
Je suis professeur. Je travaille dans un collège à Sion.
J'habite au premier étage, appartement 2.
Mon conjoint s'appelle Claudia. Il/Elle est vendeuse.
Mon numéro de téléphone est le 027 234 56 78.

Cordialement,
Marc Weber`;

const E1_1_CE_EMAIL_POOL_10 = buildExpressPool("e1-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Marc ?",
    text: ["50 ans", "60 ans", "45 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "50",
    vfQ: "Marc a 50 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Allemand", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "allemand",
    vfQ: "La nationalité est allemand.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Professeur", "Pilote", "Avocat"],
    textC: 0,
    img: ["professeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "professeur",
    vfQ: "La profession est professeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Marc ?",
    text: ["De Berlin", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Berlin",
    vfQ: "Marc vient de Berlin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Marc ?",
    text: ["Au premier étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "premier",
    vfQ: "Marc habite au premier étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["027 234 56 78", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "027 234 56 78",
    vfQ: "Le numéro est 027 234 56 78.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_11 = `De : Julie Petit
Objet : Bonjour à tous

Bonjour,

Je m'appelle Julie. J'ai 27 ans et je suis française.
Je viens de Nice.
Je suis pharmacienne. Je travaille dans une pharmacie à Yverdon.
J'habite au rez-de-chaussée étage, appartement 4.
Mon numéro de téléphone est le 024 345 67 89.

Cordialement,
Julie Petit`;

const E1_1_CE_EMAIL_POOL_11 = buildExpressPool("e1-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Julie ?",
    text: ["27 ans", "37 ans", "22 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "27",
    vfQ: "Julie a 27 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Française", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "française",
    vfQ: "La nationalité est française.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Pharmacienne", "Pilote", "Avocat"],
    textC: 0,
    img: ["pharmacien", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "pharmacienne",
    vfQ: "La profession est pharmacienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Julie ?",
    text: ["De Nice", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Nice",
    vfQ: "Julie vient de Nice.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Julie ?",
    text: ["Au rez-de-chaussée étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "rez-de-chaussée",
    vfQ: "Julie habite au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["024 345 67 89", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "024 345 67 89",
    vfQ: "Le numéro est 024 345 67 89.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_12 = `De : Omar Hassan
Objet : Salut !

Bonjour,

Je m'appelle Omar. J'ai 24 ans et je suis égyptien.
Je viens de Le Caire.
Je suis serveur. Je travaille dans un restaurant à Genève.
J'habite au troisième étage, appartement 9.
Mon numéro de téléphone est le 079 789 01 23.

Cordialement,
Omar Hassan`;

const E1_1_CE_EMAIL_POOL_12 = buildExpressPool("e1-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Omar ?",
    text: ["24 ans", "34 ans", "19 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "24",
    vfQ: "Omar a 24 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Égyptien", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "égyptien",
    vfQ: "La nationalité est égyptien.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Serveur", "Pilote", "Avocat"],
    textC: 0,
    img: ["serveur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "serveur",
    vfQ: "La profession est serveur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Omar ?",
    text: ["De Le Caire", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Le Caire",
    vfQ: "Omar vient de Le Caire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Omar ?",
    text: ["Au troisième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "troisième",
    vfQ: "Omar habite au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 789 01 23", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 789 01 23",
    vfQ: "Le numéro est 079 789 01 23.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_13 = `De : Clara Rossi
Objet : Je me présente

Bonjour,

Je m'appelle Clara. J'ai 29 ans et je suis italienne.
Je viens de Turin.
Je suis coiffeuse. Je travaille dans un salon à Lausanne.
J'habite au deuxième étage, appartement 6.
Mon conjoint s'appelle Marco. Il/Elle est cuisinier.
Mon numéro de téléphone est le 021 456 78 90.

Cordialement,
Clara Rossi`;

const E1_1_CE_EMAIL_POOL_13 = buildExpressPool("e1-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Clara ?",
    text: ["29 ans", "39 ans", "24 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "29",
    vfQ: "Clara a 29 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Italienne", "Allemande", "Marocaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "italienne",
    vfQ: "La nationalité est italienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Coiffeuse", "Pilote", "Avocat"],
    textC: 0,
    img: ["coiffeuse", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "coiffeuse",
    vfQ: "La profession est coiffeuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Clara ?",
    text: ["De Turin", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Turin",
    vfQ: "Clara vient de Turin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Clara ?",
    text: ["Au deuxième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "deuxième",
    vfQ: "Clara habite au deuxième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["021 456 78 90", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "021 456 78 90",
    vfQ: "Le numéro est 021 456 78 90.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_14 = `De : Yann Leroy
Objet : Bonjour

Bonjour,

Je m'appelle Yann. J'ai 38 ans et je suis français.
Je viens de Bordeaux.
Je suis plombier. Je travaille dans une entreprise à Fribourg.
J'habite au quatrième étage, appartement 11.
Mon conjoint s'appelle Sophie. Il/Elle est infirmière.
Mon numéro de téléphone est le 026 567 89 01.

Cordialement,
Yann Leroy`;

const E1_1_CE_EMAIL_POOL_14 = buildExpressPool("e1-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Yann ?",
    text: ["38 ans", "48 ans", "33 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "38",
    vfQ: "Yann a 38 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Français", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "français",
    vfQ: "La nationalité est français.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Plombier", "Pilote", "Avocat"],
    textC: 0,
    img: ["plombier", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "plombier",
    vfQ: "La profession est plombier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Yann ?",
    text: ["De Bordeaux", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Bordeaux",
    vfQ: "Yann vient de Bordeaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Yann ?",
    text: ["Au quatrième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "quatrième",
    vfQ: "Yann habite au quatrième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["026 567 89 01", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "026 567 89 01",
    vfQ: "Le numéro est 026 567 89 01.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_15 = `De : Inès Moreau
Objet : Enchantée

Bonjour,

Je m'appelle Inès. J'ai 20 ans et je suis espagnole.
Je viens de Madrid.
Je suis étudiante. Je travaille dans l'école de langues.
J'habite au cinquième étage, appartement 14.
Mon numéro de téléphone est le 079 890 12 34.

Cordialement,
Inès Moreau`;

const E1_1_CE_EMAIL_POOL_15 = buildExpressPool("e1-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Inès ?",
    text: ["20 ans", "30 ans", "15 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "20",
    vfQ: "Inès a 20 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Espagnole", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "espagnole",
    vfQ: "La nationalité est espagnole.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Étudiante", "Pilote", "Avocat"],
    textC: 0,
    img: ["professeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "étudiante",
    vfQ: "La profession est étudiante.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Inès ?",
    text: ["De Madrid", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Madrid",
    vfQ: "Inès vient de Madrid.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Inès ?",
    text: ["Au cinquième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "cinquième",
    vfQ: "Inès habite au cinquième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 890 12 34", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 890 12 34",
    vfQ: "Le numéro est 079 890 12 34.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_16 = `De : David Kim
Objet : Présentation

Bonjour,

Je m'appelle David. J'ai 33 ans et je suis coréen.
Je viens de Séoul.
Je suis ingénieur. Je travaille dans une start-up à Genève.
J'habite au septième étage, appartement 20.
Mon conjoint s'appelle Min. Il/Elle est médecin.
Mon numéro de téléphone est le 079 901 23 45.

Cordialement,
David Kim`;

const E1_1_CE_EMAIL_POOL_16 = buildExpressPool("e1-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a David ?",
    text: ["33 ans", "43 ans", "28 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "33",
    vfQ: "David a 33 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Coréen", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "coréen",
    vfQ: "La nationalité est coréen.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Ingénieur", "Pilote", "Avocat"],
    textC: 0,
    img: ["ingénieur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "ingénieur",
    vfQ: "La profession est ingénieur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient David ?",
    text: ["De Séoul", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Séoul",
    vfQ: "David vient de Séoul.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite David ?",
    text: ["Au septième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "septième",
    vfQ: "David habite au septième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 901 23 45", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 901 23 45",
    vfQ: "Le numéro est 079 901 23 45.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_17 = `De : Maya Singh
Objet : Bonjour !

Bonjour,

Je m'appelle Maya. J'ai 26 ans et je suis indienne.
Je viens de Delhi.
Je suis vendeuse. Je travaille dans un magasin à Berne.
J'habite au premier étage, appartement 3.
Mon numéro de téléphone est le 031 678 90 12.

Cordialement,
Maya Singh`;

const E1_1_CE_EMAIL_POOL_17 = buildExpressPool("e1-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Maya ?",
    text: ["26 ans", "36 ans", "21 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "26",
    vfQ: "Maya a 26 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Indienne", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "indienne",
    vfQ: "La nationalité est indienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Vendeuse", "Pilote", "Avocat"],
    textC: 0,
    img: ["vendeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "vendeuse",
    vfQ: "La profession est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Maya ?",
    text: ["De Delhi", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Delhi",
    vfQ: "Maya vient de Delhi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Maya ?",
    text: ["Au premier étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "premier",
    vfQ: "Maya habite au premier étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["031 678 90 12", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "031 678 90 12",
    vfQ: "Le numéro est 031 678 90 12.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_18 = `De : Antoine Blanc
Objet : Salut

Bonjour,

Je m'appelle Antoine. J'ai 40 ans et je suis français.
Je viens de Toulouse.
Je suis chauffeur. Je travaille dans une société de transport.
J'habite au deuxième étage, appartement 7.
Mon conjoint s'appelle Camille. Il/Elle est professeure.
Mon numéro de téléphone est le 079 012 34 56.

Cordialement,
Antoine Blanc`;

const E1_1_CE_EMAIL_POOL_18 = buildExpressPool("e1-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Antoine ?",
    text: ["40 ans", "50 ans", "35 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "40",
    vfQ: "Antoine a 40 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Français", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "français",
    vfQ: "La nationalité est français.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Chauffeur", "Pilote", "Avocat"],
    textC: 0,
    img: ["chauffeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "chauffeur",
    vfQ: "La profession est chauffeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Antoine ?",
    text: ["De Toulouse", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Toulouse",
    vfQ: "Antoine vient de Toulouse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Antoine ?",
    text: ["Au deuxième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "deuxième",
    vfQ: "Antoine habite au deuxième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["079 012 34 56", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "079 012 34 56",
    vfQ: "Le numéro est 079 012 34 56.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_19 = `De : Salma Ben
Objet : Je me présente

Bonjour,

Je m'appelle Salma. J'ai 31 ans et je suis tunisienne.
Je viens de Tunis.
Je suis secrétaire. Je travaille dans un bureau à Lausanne.
J'habite au troisième étage, appartement 10.
Mon numéro de téléphone est le 021 789 01 23.

Cordialement,
Salma Ben`;

const E1_1_CE_EMAIL_POOL_19 = buildExpressPool("e1-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Salma ?",
    text: ["31 ans", "41 ans", "26 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "31",
    vfQ: "Salma a 31 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Tunisienne", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "tunisienne",
    vfQ: "La nationalité est tunisienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Secrétaire", "Pilote", "Avocat"],
    textC: 0,
    img: ["secrétaire", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "secrétaire",
    vfQ: "La profession est secrétaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Salma ?",
    text: ["De Tunis", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Tunis",
    vfQ: "Salma vient de Tunis.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Salma ?",
    text: ["Au troisième étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "troisième",
    vfQ: "Salma habite au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["021 789 01 23", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "021 789 01 23",
    vfQ: "Le numéro est 021 789 01 23.",
    vfC: 0,
  }),
]);
const E1_1_CE_EMAIL_TEXT_20 = `De : Victor Pop
Objet : Bonjour

Bonjour,

Je m'appelle Victor. J'ai 55 ans et je suis roumain.
Je viens de Bucarest.
Je suis professeur. Je travaille dans un lycée à Neuchâtel.
J'habite au rez-de-chaussée étage, appartement 1.
Mon conjoint s'appelle Elena. Il/Elle est dentiste.
Mon numéro de téléphone est le 032 890 12 34.

Cordialement,
Victor Pop`;

const E1_1_CE_EMAIL_POOL_20 = buildExpressPool("e1-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Le facteur", "Le propriétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Victor ?",
    text: ["55 ans", "65 ans", "50 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ ans.",
    fill: "55",
    vfQ: "Victor a 55 ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la nationalité ?",
    text: ["Roumain", "Italienne", "Allemande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "roumain",
    vfQ: "La nationalité est roumain.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession ?",
    text: ["Professeur", "Pilote", "Avocat"],
    textC: 0,
    img: ["professeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Je suis _________.",
    fill: "professeur",
    vfQ: "La profession est professeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "De quelle ville vient Victor ?",
    text: ["De Bucarest", "De Paris", "De Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens de _________.",
    fill: "Bucarest",
    vfQ: "Victor vient de Bucarest.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage habite Victor ?",
    text: ["Au rez-de-chaussée étage", "Au sous-sol", "Au 10e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite au _________ étage.",
    fill: "rez-de-chaussée",
    vfQ: "Victor habite au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel est le numéro de téléphone ?",
    text: ["032 890 12 34", "079 000 00 00", "022 000 00 00"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon numéro est le _________.",
    fill: "032 890 12 34",
    vfQ: "Le numéro est 032 890 12 34.",
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

const E1_2_CE_EMAIL_TEXT_1 = `De : Amina Benali
Objet : Avant ton arrivée

Bonjour Léa,

Tu vas dormir chez nous vendredi.
Ma mère prépare une chambre pour toi.
Mon père est chauffeur et il peut venir à la gare.
Mon petit frère Sami a sept ans ; il aime les cartes.
Le soir, nous mangeons avec ma grand-mère.
Elle raconte toujours une histoire courte.

À bientôt,
Amina`;

const E1_2_CE_EMAIL_POOL_1 = buildExpressPool("e1-2-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quand Léa dort-elle chez Amina ?",
    text: ["Vendredi", "Lundi", "Dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez nous _________.",
    fill: "vendredi",
    vfQ: "Léa dort chez Amina vendredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui prépare une chambre ?",
    text: ["La mère", "Sami", "La grand-mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère prépare une _________.",
    fill: "chambre",
    vfQ: "La mère prépare une chambre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession du père ?",
    text: ["Chauffeur", "Pompier", "Avocat"],
    textC: 0,
    img: ["chauffeur", "pompier", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "chauffeur",
    vfQ: "Le père est chauffeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où le père peut-il venir ?",
    text: ["À la gare", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "venir à la _________.",
    fill: "gare",
    vfQ: "Le père peut venir à la gare.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel âge a Sami ?",
    text: ["Sept ans", "Douze ans", "Deux ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sami a _________ ans.",
    fill: "sept",
    vfQ: "Sami a sept ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui raconte une histoire ?",
    text: ["La grand-mère", "La mère", "Léa"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle raconte toujours une _________.",
    fill: "histoire",
    vfQ: "La grand-mère raconte une histoire.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_2 = `De : Lucas Martin
Objet : Mon dessin pour le cours

Bonjour Madame,

Pour jeudi, je prépare un dessin de ma famille.
Je mets mon père en bleu, car il travaille comme infirmier.
Ma mère est architecte ; je dessine une maison près d'elle.
Ma sœur Alice a quinze ans et porte des lunettes.
Notre chien Pico est aussi sur le dessin.
Je peux présenter le dessin en deux minutes.

Cordialement,
Lucas Martin`;

const E1_2_CE_EMAIL_POOL_2 = buildExpressPool("e1-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Que prépare Lucas ?",
    text: ["Un dessin de sa famille", "Un gâteau", "Une chanson"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un dessin de ma _________.",
    fill: "famille",
    vfQ: "Lucas prépare un dessin de sa famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Pour quel jour ?",
    text: ["Jeudi", "Mardi", "Samedi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "jeudi",
    vfQ: "Le dessin est pour jeudi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession du père ?",
    text: ["Infirmier", "Vendeur", "Pilote"],
    textC: 0,
    img: ["infirmier", "vendeur", "pilote"],
    imgC: 0,
    fillQ: "il travaille comme _________.",
    fill: "infirmier",
    vfQ: "Le père est infirmier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Architecte", "Serveuse", "Dentiste"],
    textC: 0,
    img: ["architecte", "serveur", "dentiste"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "architecte",
    vfQ: "La mère est architecte.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel âge a Alice ?",
    text: ["Quinze ans", "Huit ans", "Vingt ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Alice a _________ ans.",
    fill: "quinze",
    vfQ: "Alice a quinze ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien de temps dure la présentation ?",
    text: ["Deux minutes", "Dix minutes", "Une heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "en _________ minutes.",
    fill: "deux",
    vfQ: "La présentation dure deux minutes.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_3 = `De : Nina Rossi
Objet : Repas de dimanche

Bonjour Marco,

Dimanche, toute ma famille vient à midi.
Mon oncle Paolo apporte les pâtes.
Ma tante Lucia est boulangère ; elle fait le dessert.
Mes parents mettent la grande table dans le jardin.
Nous sommes neuf avec les cousins.
Tu peux venir aussi si tu veux.

Bises,
Nina`;

const E1_2_CE_EMAIL_POOL_3 = buildExpressPool("e1-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quand a lieu le repas ?",
    text: ["Dimanche à midi", "Vendredi soir", "Lundi matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Dimanche, toute ma famille vient à _________.",
    fill: "midi",
    vfQ: "Le repas a lieu dimanche à midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui apporte les pâtes ?",
    text: ["L'oncle Paolo", "La tante Lucia", "Marco"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon oncle _________ apporte les pâtes.",
    fill: "Paolo",
    vfQ: "L'oncle Paolo apporte les pâtes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession de Lucia ?",
    text: ["Boulangère", "Secrétaire", "Dentiste"],
    textC: 0,
    img: ["boulanger", "secrétaire", "dentiste"],
    imgC: 0,
    fillQ: "Ma tante Lucia est _________.",
    fill: "boulangère",
    vfQ: "Lucia est boulangère.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Que fait Lucia ?",
    text: ["Le dessert", "Les devoirs", "Le café"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "elle fait le _________.",
    fill: "dessert",
    vfQ: "Lucia fait le dessert.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où les parents mettent-ils la table ?",
    text: ["Dans le jardin", "Dans la rue", "Dans la chambre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "la grande table dans le _________.",
    fill: "jardin",
    vfQ: "La table est dans le jardin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien sont-ils avec les cousins ?",
    text: ["Neuf", "Quatre", "Deux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ avec les cousins.",
    fill: "neuf",
    vfQ: "Ils sont neuf avec les cousins.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_4 = `De : Paul Garcia
Objet : La photo jointe

Bonjour,

Je vous envoie la photo pour le dossier.
Au premier rang, il y a mes deux filles.
Derrière elles, mon père porte une veste noire.
Ma mère est vétérinaire et tient notre chat.
Mon mari David sourit à droite.
Nous habitons tous près du lac Léman.

Cordialement,
Paul Garcia`;

const E1_2_CE_EMAIL_POOL_4 = buildExpressPool("e1-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qu'envoie Paul ?",
    text: ["Une photo", "Un billet", "Un plan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je vous envoie la _________.",
    fill: "photo",
    vfQ: "Paul envoie une photo.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui est au premier rang ?",
    text: ["Ses deux filles", "Son père", "Le chat seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "mes deux _________.",
    fill: "filles",
    vfQ: "Les deux filles sont au premier rang.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Que porte le père ?",
    text: ["Une veste noire", "Un chapeau rouge", "Un sac bleu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "une veste _________.",
    fill: "noire",
    vfQ: "Le père porte une veste noire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Vétérinaire", "Coiffeuse", "Mécanicienne"],
    textC: 0,
    img: ["vétérinaire", "coiffeuse", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "vétérinaire",
    vfQ: "La mère est vétérinaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où est David sur la photo ?",
    text: ["À droite", "À gauche", "Au centre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "David sourit à _________.",
    fill: "droite",
    vfQ: "David est à droite.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Près de quel lac habitent-ils ?",
    text: ["Le lac Léman", "Le lac Majeur", "Le lac de Côme"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "près du lac _________.",
    fill: "Léman",
    vfQ: "Ils habitent près du lac Léman.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_5 = `De : Sara Kim
Objet : Pour la colonie

Bonjour,

Ma fille Mina part en colonie lundi.
Elle a besoin d'appeler son père chaque soir.
Son père est pharmacien et travaille tard.
Sa grand-mère peut répondre si le père est absent.
Mina garde une photo de son frère dans sa valise.
Merci de noter le numéro de la famille.

Cordialement,
Sara Kim`;

const E1_2_CE_EMAIL_POOL_5 = buildExpressPool("e1-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui part en colonie ?",
    text: ["Mina", "Sara", "La grand-mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma fille _________ part.",
    fill: "Mina",
    vfQ: "Mina part en colonie.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand part-elle ?",
    text: ["Lundi", "Mercredi", "Dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "part en colonie _________.",
    fill: "lundi",
    vfQ: "Elle part lundi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Qui Mina veut-elle appeler ?",
    text: ["Son père", "Son professeur", "Un cousin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appeler son _________ chaque soir.",
    fill: "père",
    vfQ: "Mina veut appeler son père.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession du père ?",
    text: ["Pharmacien", "Serveur", "Peintre"],
    textC: 0,
    img: ["pharmacien", "serveur", "peintre"],
    imgC: 0,
    fillQ: "Son père est _________.",
    fill: "pharmacien",
    vfQ: "Le père est pharmacien.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui peut répondre si le père est absent ?",
    text: ["La grand-mère", "Le frère", "La directrice"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sa _________ peut répondre.",
    fill: "grand-mère",
    vfQ: "La grand-mère peut répondre.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que garde Mina dans sa valise ?",
    text: ["Une photo de son frère", "Un gâteau", "Un ballon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "une photo de son _________.",
    fill: "frère",
    vfQ: "Mina garde une photo de son frère.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_6 = `De : Tom Weber
Objet : Changement d'adresse

Bonjour Madame,

Notre famille habite maintenant rue des Roses 12.
Je vis avec ma mère, mon beau-père et ma sœur Mia.
Ma mère est serveuse dans un café.
Mon beau-père est électricien.
Mia a quatre ans et commence l'école en août.
Merci d'envoyer les lettres à la nouvelle adresse.

Cordialement,
Tom Weber`;

const E1_2_CE_EMAIL_POOL_6 = buildExpressPool("e1-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quelle est la nouvelle adresse ?",
    text: ["Rue des Roses 12", "Rue du Lac 5", "Avenue Gare 8"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "rue des Roses _________.",
    fill: "12",
    vfQ: "La nouvelle adresse est rue des Roses 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Avec qui Tom vit-il ?",
    text: ["Sa mère, son beau-père et Mia", "Ses grands-parents", "Deux amis"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec ma mère, mon beau-père et ma sœur _________.",
    fill: "Mia",
    vfQ: "Tom vit avec sa mère, son beau-père et Mia.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Serveuse", "Architecte", "Pompier"],
    textC: 0,
    img: ["serveur", "architecte", "pompier"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "serveuse",
    vfQ: "La mère est serveuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession du beau-père ?",
    text: ["Électricien", "Libraire", "Médecin"],
    textC: 0,
    img: ["électricien", "libraire", "médecin"],
    imgC: 0,
    fillQ: "Mon beau-père est _________.",
    fill: "électricien",
    vfQ: "Le beau-père est électricien.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel âge a Mia ?",
    text: ["Quatre ans", "Dix ans", "Un an"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mia a _________ ans.",
    fill: "quatre",
    vfQ: "Mia a quatre ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand Mia commence-t-elle l'école ?",
    text: ["En août", "En janvier", "Demain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "commence l'école en _________.",
    fill: "août",
    vfQ: "Mia commence l'école en août.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_7 = `De : Emma Dubois
Objet : Question pour le livre de classe

Bonjour Monsieur,

Vous demandez une phrase sur notre famille.
J'écris : « Chez moi, on aime lire ensemble. »
Mon père est libraire et rapporte souvent des albums.
Ma mère raconte une histoire à mon frère Jules.
Jules a six ans et lit les titres tout seul.
Est-ce que cette phrase est assez simple ?

Cordialement,
Emma Dubois`;

const E1_2_CE_EMAIL_POOL_7 = buildExpressPool("e1-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Que demande le professeur ?",
    text: ["Une phrase sur la famille", "Une facture", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "une phrase sur notre _________.",
    fill: "famille",
    vfQ: "Le professeur demande une phrase.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qu'aime faire la famille ?",
    text: ["Lire ensemble", "Courir vite", "Regarder le train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "on aime _________ ensemble.",
    fill: "lire",
    vfQ: "La famille aime lire ensemble.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession du père ?",
    text: ["Libraire", "Boucher", "Chauffeur"],
    textC: 0,
    img: ["libraire", "boucher", "chauffeur"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "libraire",
    vfQ: "Le père est libraire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Que rapporte le père ?",
    text: ["Des albums", "Des vélos", "Des fleurs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "rapporte souvent des _________.",
    fill: "albums",
    vfQ: "Le père rapporte des albums.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À qui la mère raconte-t-elle une histoire ?",
    text: ["À Jules", "Au voisin", "Au professeur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à mon frère _________.",
    fill: "Jules",
    vfQ: "La mère raconte une histoire à Jules.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel âge a Jules ?",
    text: ["Six ans", "Onze ans", "Trois ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Jules a _________ ans.",
    fill: "six",
    vfQ: "Jules a six ans.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_8 = `De : Hugo Blanc
Objet : Absence de ma sœur

Bonjour,

Ma sœur Léonie ne vient pas au cours aujourd'hui.
Elle accompagne notre mère chez le médecin.
Notre père est policier et il travaille de nuit.
Je donne les devoirs à Léonie ce soir.
Nous habitons dans le même immeuble que notre tante.
Merci pour votre compréhension.

Cordialement,
Hugo Blanc`;

const E1_2_CE_EMAIL_POOL_8 = buildExpressPool("e1-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui est absente du cours ?",
    text: ["Léonie", "La mère", "La tante"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma sœur _________ ne vient pas.",
    fill: "Léonie",
    vfQ: "Léonie est absente.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Pourquoi Léonie est-elle absente ?",
    text: ["Elle accompagne sa mère", "Elle part en vacances", "Elle dort"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle accompagne notre _________.",
    fill: "mère",
    vfQ: "Léonie accompagne sa mère.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Où va la mère ?",
    text: ["Chez le médecin", "À la plage", "Au théâtre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez le _________.",
    fill: "médecin",
    vfQ: "La mère va chez le médecin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession du père ?",
    text: ["Policier", "Coiffeur", "Boulanger"],
    textC: 0,
    img: ["policier", "coiffeur", "boulanger"],
    imgC: 0,
    fillQ: "Notre père est _________.",
    fill: "policier",
    vfQ: "Le père est policier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand Hugo donne-t-il les devoirs ?",
    text: ["Ce soir", "Demain matin", "Dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "ce _________.",
    fill: "soir",
    vfQ: "Hugo donne les devoirs ce soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui habite dans le même immeuble ?",
    text: ["La tante", "Le directeur", "Un cousin à Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "notre _________.",
    fill: "tante",
    vfQ: "La tante habite dans le même immeuble.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_9 = `De : Léa Costa
Objet : Anniversaire de grand-père

Bonjour les cousins,

Grand-père a quatre-vingts ans samedi.
Nous préparons une petite fête dans le salon.
Mon père fait la soupe, car il est cuisinier.
Ma mère choisit les photos de famille.
Chaque petit-enfant apporte un dessin.
La fête commence à 17 h.

Bises,
Léa`;

const E1_2_CE_EMAIL_POOL_9 = buildExpressPool("e1-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui a un anniversaire ?",
    text: ["Grand-père", "La mère", "Un cousin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ a quatre-vingts ans.",
    fill: "Grand-père",
    vfQ: "Grand-père a un anniversaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a grand-père ?",
    text: ["Quatre-vingts ans", "Quarante ans", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "a _________ ans samedi.",
    fill: "quatre-vingts",
    vfQ: "Grand-père a quatre-vingts ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Où est la fête ?",
    text: ["Dans le salon", "Dans la rue", "À la piscine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dans le _________.",
    fill: "salon",
    vfQ: "La fête est dans le salon.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession du père ?",
    text: ["Cuisinier", "Facteur", "Avocat"],
    textC: 0,
    img: ["cuisinier", "facteur", "avocat"],
    imgC: 0,
    fillQ: "il est _________.",
    fill: "cuisinier",
    vfQ: "Le père est cuisinier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Que choisit la mère ?",
    text: ["Les photos de famille", "Les billets", "Les chaussures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "les photos de _________.",
    fill: "famille",
    vfQ: "La mère choisit les photos.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure commence la fête ?",
    text: ["À 17 h", "À 8 h", "À midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "commence à _________ h.",
    fill: "17",
    vfQ: "La fête commence à 17 h.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_10 = `De : Marc Singh
Objet : Au sujet du bébé

Bonjour Madame Morel,

Notre bébé Ravi vient avec nous au rendez-vous.
Il a six mois et dort souvent le matin.
Ma femme Maya est ingénieure et arrive de son travail.
Moi, je garde le sac avec les biberons.
Notre fille Tara reste chez sa grand-mère.
Merci de prévoir un endroit calme.

Cordialement,
Marc Singh`;

const E1_2_CE_EMAIL_POOL_10 = buildExpressPool("e1-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui vient au rendez-vous ?",
    text: ["Le bébé Ravi", "La grand-mère", "Tara seule"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre bébé _________ vient.",
    fill: "Ravi",
    vfQ: "Le bébé Ravi vient au rendez-vous.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Ravi ?",
    text: ["Six mois", "Deux ans", "Neuf ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il a six _________.",
    fill: "mois",
    vfQ: "Ravi a six mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand Ravi dort-il souvent ?",
    text: ["Le matin", "Le soir", "À midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dort souvent le _________.",
    fill: "matin",
    vfQ: "Ravi dort souvent le matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession de Maya ?",
    text: ["Ingénieure", "Vendeuse", "Dentiste"],
    textC: 0,
    img: ["ingénieur", "vendeur", "dentiste"],
    imgC: 0,
    fillQ: "Maya est _________.",
    fill: "ingénieure",
    vfQ: "Maya est ingénieure.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Que garde Marc ?",
    text: ["Le sac avec les biberons", "Les clés de l'école", "Une guitare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "le sac avec les _________.",
    fill: "biberons",
    vfQ: "Marc garde le sac avec les biberons.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où reste Tara ?",
    text: ["Chez sa grand-mère", "Au restaurant", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez sa _________.",
    fill: "grand-mère",
    vfQ: "Tara reste chez sa grand-mère.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_11 = `De : Julie Petit
Objet : Pour l'affiche du quartier

Bonjour,

Je propose une affiche avec les familles de notre immeuble.
Au rez-de-chaussée, il y a la famille Lopez avec trois enfants.
Madame Lopez est peintre et donne un atelier samedi.
Au deuxième étage, mon frère et moi aidons à installer les tables.
Notre mère prépare du thé à la menthe.
Le but est de mieux connaître les voisins.

Cordialement,
Julie Petit`;

const E1_2_CE_EMAIL_POOL_11 = buildExpressPool("e1-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Que propose Julie ?",
    text: ["Une affiche", "Un examen", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je propose une _________.",
    fill: "affiche",
    vfQ: "Julie propose une affiche.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Où habite la famille Lopez ?",
    text: ["Au rez-de-chaussée", "Au cinquième étage", "Dans une ferme"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au _________.",
    fill: "rez-de-chaussée",
    vfQ: "La famille Lopez habite au rez-de-chaussée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien d'enfants ont les Lopez ?",
    text: ["Trois", "Un", "Huit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec _________ enfants.",
    fill: "trois",
    vfQ: "Les Lopez ont trois enfants.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession de Madame Lopez ?",
    text: ["Peintre", "Boulangère", "Infirmière"],
    textC: 0,
    img: ["peintre", "boulanger", "infirmier"],
    imgC: 0,
    fillQ: "Madame Lopez est _________.",
    fill: "peintre",
    vfQ: "Madame Lopez est peintre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui installe les tables ?",
    text: ["Julie et son frère", "Les voisins seuls", "Madame Lopez"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "mon frère et moi aidons à installer les _________.",
    fill: "tables",
    vfQ: "Julie et son frère installent les tables.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que prépare la mère ?",
    text: ["Du thé à la menthe", "Une pizza", "Une soupe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "du thé à la _________.",
    fill: "menthe",
    vfQ: "La mère prépare du thé à la menthe.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_12 = `De : Omar Hassan
Objet : Nouvelle pour la famille

Bonjour tante Nadia,

Nous avons une bonne nouvelle.
Ma sœur Samira se marie en juin.
Son futur mari est jardinier dans un grand parc.
Papa écrit les invitations à la main.
Maman cherche une robe bleue pour la fête.
Toute la famille parle déjà de musique et de gâteau.

Affectueusement,
Omar`;

const E1_2_CE_EMAIL_POOL_12 = buildExpressPool("e1-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui reçoit l'e-mail ?",
    text: ["Tante Nadia", "Samira", "Papa"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bonjour tante _________.",
    fill: "Nadia",
    vfQ: "L'e-mail est pour tante Nadia.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui se marie en juin ?",
    text: ["Samira", "Omar", "La mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma sœur _________ se marie.",
    fill: "Samira",
    vfQ: "Samira se marie en juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession du futur mari ?",
    text: ["Jardinier", "Médecin", "Pilote"],
    textC: 0,
    img: ["jardinier", "médecin", "pilote"],
    imgC: 0,
    fillQ: "Son futur mari est _________.",
    fill: "jardinier",
    vfQ: "Le futur mari est jardinier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Que fait papa ?",
    text: ["Il écrit les invitations", "Il chante", "Il conduit un bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Papa écrit les _________.",
    fill: "invitations",
    vfQ: "Papa écrit les invitations.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur de robe cherche maman ?",
    text: ["Bleue", "Rouge", "Noire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "une robe _________.",
    fill: "bleue",
    vfQ: "Maman cherche une robe bleue.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "De quoi parle la famille ?",
    text: ["De musique et de gâteau", "De sport", "De travail seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "de musique et de _________.",
    fill: "gâteau",
    vfQ: "La famille parle de musique et de gâteau.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_13 = `De : Clara Rossi
Objet : Fiche médicale de Lili

Bonjour Docteur,

Je remplis la fiche pour ma fille Lili.
Elle a trois ans et vit avec moi une semaine sur deux.
Son père Marco est serveur et finit tard le soir.
La grand-mère garde Lili le mercredi.
Lili aime son doudou rose pendant les visites.
Je joins aussi le numéro de Marco.

Cordialement,
Clara Rossi`;

const E1_2_CE_EMAIL_POOL_13 = buildExpressPool("e1-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Pour qui Clara remplit-elle la fiche ?",
    text: ["Pour Lili", "Pour Marco", "Pour la grand-mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "pour ma fille _________.",
    fill: "Lili",
    vfQ: "Clara remplit la fiche pour Lili.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Lili ?",
    text: ["Trois ans", "Huit ans", "Un an"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle a _________ ans.",
    fill: "trois",
    vfQ: "Lili a trois ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession de Marco ?",
    text: ["Serveur", "Boucher", "Architecte"],
    textC: 0,
    img: ["serveur", "boucher", "architecte"],
    imgC: 0,
    fillQ: "Marco est _________.",
    fill: "serveur",
    vfQ: "Marco est serveur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand Marco finit-il son travail ?",
    text: ["Tard le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "finit tard le _________.",
    fill: "soir",
    vfQ: "Marco finit tard le soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui garde Lili le mercredi ?",
    text: ["La grand-mère", "Le docteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La _________ garde Lili.",
    fill: "grand-mère",
    vfQ: "La grand-mère garde Lili.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel objet Lili aime-t-elle pendant les visites ?",
    text: ["Son doudou rose", "Un livre noir", "Une balle verte"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "son doudou _________.",
    fill: "rose",
    vfQ: "Lili aime son doudou rose.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_14 = `De : Yann Leroy
Objet : Famille et transport

Bonjour,

Pour la sortie, je viens avec mes deux enfants.
Ma fille Anna a douze ans et mon fils Max a neuf ans.
Ma compagne Sophie est conductrice de bus.
Elle peut nous déposer devant le musée.
Mon père vient aussi, mais il marche avec une canne.
Nous aurons besoin de temps pour entrer.

Cordialement,
Yann Leroy`;

const E1_2_CE_EMAIL_POOL_14 = buildExpressPool("e1-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Avec qui Yann vient-il ?",
    text: ["Ses deux enfants", "Ses collègues", "Son chien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec mes deux _________.",
    fill: "enfants",
    vfQ: "Yann vient avec ses deux enfants.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Anna ?",
    text: ["Douze ans", "Neuf ans", "Vingt ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Anna a _________ ans.",
    fill: "douze",
    vfQ: "Anna a douze ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel âge a Max ?",
    text: ["Neuf ans", "Douze ans", "Quatre ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Max a _________ ans.",
    fill: "neuf",
    vfQ: "Max a neuf ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession de Sophie ?",
    text: ["Chauffeur", "Dentiste", "Coiffeuse"],
    textC: 0,
    img: ["chauffeur", "dentiste", "coiffeuse"],
    imgC: 0,
    fillQ: "Sophie est _________ de bus.",
    fill: "conductrice",
    vfQ: "Sophie conduit un bus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où Sophie peut-elle les déposer ?",
    text: ["Devant le musée", "À la plage", "Chez le médecin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "devant le _________.",
    fill: "musée",
    vfQ: "Sophie peut les déposer devant le musée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Avec quoi le père marche-t-il ?",
    text: ["Une canne", "Un vélo", "Une valise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec une _________.",
    fill: "canne",
    vfQ: "Le père marche avec une canne.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_15 = `De : Inès Moreau
Objet : Recette de ma mère

Bonjour Ana,

Tu demandes la recette de la soupe familiale.
Ma mère la prépare quand mes cousins viennent.
Elle coupe les légumes avec ma sœur Chloé.
Mon père est agriculteur et apporte les pommes de terre.
Nous mangeons la soupe avec du pain chaud.
Cette recette vient de ma grand-mère espagnole.

Bises,
Inès`;

const E1_2_CE_EMAIL_POOL_15 = buildExpressPool("e1-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quelle recette Ana demande-t-elle ?",
    text: ["La soupe familiale", "Un gâteau", "Une salade"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "la recette de la soupe _________.",
    fill: "familiale",
    vfQ: "Ana demande la recette de la soupe.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand la mère prépare-t-elle la soupe ?",
    text: ["Quand les cousins viennent", "Tous les matins", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "quand mes _________ viennent.",
    fill: "cousins",
    vfQ: "La mère prépare la soupe quand les cousins viennent.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Qui coupe les légumes avec la mère ?",
    text: ["Chloé", "Ana", "La grand-mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec ma sœur _________.",
    fill: "Chloé",
    vfQ: "Chloé coupe les légumes.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession du père ?",
    text: ["Agriculteur", "Journaliste", "Serveur"],
    textC: 0,
    img: ["agriculteur", "journaliste", "serveur"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "agriculteur",
    vfQ: "Le père est agriculteur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qu'apporte le père ?",
    text: ["Les pommes de terre", "Les cahiers", "Les fleurs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "apporte les pommes de _________.",
    fill: "terre",
    vfQ: "Le père apporte les pommes de terre.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "De qui vient la recette ?",
    text: ["De la grand-mère espagnole", "Du voisin", "Du professeur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "de ma grand-mère _________.",
    fill: "espagnole",
    vfQ: "La recette vient de la grand-mère.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_16 = `De : David Kim
Objet : Présentation pour le club

Bonjour,

Je viens au club avec mon fils Jun.
Jun a dix ans et veut jouer au football.
Ma femme Lina est professeure ; elle peut aider pour les devoirs.
Mon frère Min habite près du stade.
Le samedi, il accompagne souvent Jun.
Nous cherchons une équipe pour débutants.

Cordialement,
David Kim`;

const E1_2_CE_EMAIL_POOL_16 = buildExpressPool("e1-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Avec qui David vient-il au club ?",
    text: ["Son fils Jun", "Sa femme seule", "Son frère seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec mon fils _________.",
    fill: "Jun",
    vfQ: "David vient avec Jun.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel âge a Jun ?",
    text: ["Dix ans", "Six ans", "Quinze ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Jun a _________ ans.",
    fill: "dix",
    vfQ: "Jun a dix ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel sport Jun veut-il jouer ?",
    text: ["Le football", "Le tennis", "La natation"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "jouer au _________.",
    fill: "football",
    vfQ: "Jun veut jouer au football.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession de Lina ?",
    text: ["Professeure", "Vendeuse", "Pompier"],
    textC: 0,
    img: ["professeur", "vendeur", "pompier"],
    imgC: 0,
    fillQ: "Lina est _________.",
    fill: "professeure",
    vfQ: "Lina est professeure.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où habite Min ?",
    text: ["Près du stade", "À la montagne", "Dans l'école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "près du _________.",
    fill: "stade",
    vfQ: "Min habite près du stade.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel jour Min accompagne-t-il souvent Jun ?",
    text: ["Le samedi", "Le mardi", "Le jeudi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le _________.",
    fill: "samedi",
    vfQ: "Min accompagne Jun le samedi.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_17 = `De : Maya Patel
Objet : Mes grands-parents

Bonjour Sophie,

Je prépare un petit texte sur mes grands-parents.
Ils vivent dans une maison blanche à Sion.
Mon grand-père était menuisier ; il aime encore le bois.
Ma grand-mère fait du thé avec beaucoup de lait.
Leur fille, ma mère, va les voir chaque vendredi.
Moi, je téléphone le mercredi soir.

Amitiés,
Maya`;

const E1_2_CE_EMAIL_POOL_17 = buildExpressPool("e1-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Sur qui Maya prépare-t-elle un texte ?",
    text: ["Ses grands-parents", "Ses voisins", "Ses professeurs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "sur mes _________.",
    fill: "grands-parents",
    vfQ: "Maya prépare un texte sur ses grands-parents.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Où vivent les grands-parents ?",
    text: ["À Sion", "À Genève", "À Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Sion",
    vfQ: "Ils vivent à Sion.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle était la profession du grand-père ?",
    text: ["Menuisier", "Dentiste", "Vendeur"],
    textC: 0,
    img: ["menuisier", "dentiste", "vendeur"],
    imgC: 0,
    fillQ: "Mon grand-père était _________.",
    fill: "menuisier",
    vfQ: "Le grand-père était menuisier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Qu'aime encore le grand-père ?",
    text: ["Le bois", "Les trains", "La danse"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "il aime encore le _________.",
    fill: "bois",
    vfQ: "Le grand-père aime encore le bois.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Que fait la grand-mère ?",
    text: ["Du thé", "Une valise", "Un journal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma grand-mère fait du _________.",
    fill: "thé",
    vfQ: "La grand-mère fait du thé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand la mère va-t-elle les voir ?",
    text: ["Chaque vendredi", "Chaque lundi", "Une fois par an"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chaque _________.",
    fill: "vendredi",
    vfQ: "La mère va les voir le vendredi.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_18 = `De : Antoine Blanc
Objet : Organisation du week-end

Bonjour Camille,

Samedi matin, je garde les enfants de mon frère.
Lou a cinq ans et Basile a huit ans.
Mon frère est boucher et travaille tôt au marché.
Sa femme est coiffeuse et finit à 14 h.
Nous irons au parc si le temps est bon.
Tu peux passer prendre un café vers 16 h.

À bientôt,
Antoine`;

const E1_2_CE_EMAIL_POOL_18 = buildExpressPool("e1-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quand Antoine garde-t-il les enfants ?",
    text: ["Samedi matin", "Dimanche soir", "Mardi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ matin.",
    fill: "Samedi",
    vfQ: "Antoine garde les enfants samedi matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "De qui sont les enfants ?",
    text: ["De son frère", "De Camille", "Du voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "les enfants de mon _________.",
    fill: "frère",
    vfQ: "Ce sont les enfants de son frère.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel âge a Lou ?",
    text: ["Cinq ans", "Huit ans", "Douze ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lou a _________ ans.",
    fill: "cinq",
    vfQ: "Lou a cinq ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession du frère ?",
    text: ["Boucher", "Pilote", "Pharmacien"],
    textC: 0,
    img: ["boucher", "pilote", "pharmacien"],
    imgC: 0,
    fillQ: "Mon frère est _________.",
    fill: "boucher",
    vfQ: "Le frère est boucher.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle est la profession de sa femme ?",
    text: ["Coiffeuse", "Architecte", "Pompier"],
    textC: 0,
    img: ["coiffeuse", "architecte", "pompier"],
    imgC: 0,
    fillQ: "Sa femme est _________.",
    fill: "coiffeuse",
    vfQ: "Sa femme est coiffeuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où iront-ils si le temps est bon ?",
    text: ["Au parc", "À l'hôpital", "À la gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous irons au _________.",
    fill: "parc",
    vfQ: "Ils iront au parc.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_19 = `De : Salma Ben
Objet : Arbre généalogique

Bonjour Madame Perret,

Je vous envoie mon arbre généalogique en pièce jointe.
Il commence avec mes arrière-grands-parents.
Ma grand-mère Fatou a quatre enfants.
Mon père, le plus jeune, est médecin à Lausanne.
Ma mère est dentiste dans le même quartier.
Je peux expliquer l'arbre lundi en classe.

Cordialement,
Salma Ben`;

const E1_2_CE_EMAIL_POOL_19 = buildExpressPool("e1-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qu'envoie Salma ?",
    text: ["Son arbre généalogique", "Une photo de vacances", "Un billet"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "mon arbre _________.",
    fill: "généalogique",
    vfQ: "Salma envoie son arbre généalogique.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Avec qui commence l'arbre ?",
    text: ["Les arrière-grands-parents", "Les voisins", "Les amis"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec mes _________.",
    fill: "arrière-grands-parents",
    vfQ: "L'arbre commence avec les arrière-grands-parents.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien d'enfants a Fatou ?",
    text: ["Quatre", "Deux", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Fatou a _________ enfants.",
    fill: "quatre",
    vfQ: "Fatou a quatre enfants.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession du père ?",
    text: ["Médecin", "Serveur", "Libraire"],
    textC: 0,
    img: ["médecin", "serveur", "libraire"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "médecin",
    vfQ: "Le père est médecin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Dentiste", "Boulangère", "Jardinière"],
    textC: 0,
    img: ["dentiste", "boulanger", "jardinier"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "dentiste",
    vfQ: "La mère est dentiste.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand Salma peut-elle expliquer l'arbre ?",
    text: ["Lundi", "Vendredi", "Ce soir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "expliquer l'arbre _________.",
    fill: "lundi",
    vfQ: "Salma peut expliquer lundi.",
    vfC: 0,
  }),
]);
const E1_2_CE_EMAIL_TEXT_20 = `De : Victor Pop
Objet : Visite de ma nièce

Bonjour,

Ma nièce Elena arrive de Roumanie jeudi.
Elle reste chez nous pendant deux semaines.
Ma femme Irina est réceptionniste et parle roumain.
Notre fils Alex prépare son ancien bureau pour Elena.
Le soir de son arrivée, nous invitons aussi mon oncle.
Nous serons six autour de la table.

Cordialement,
Victor Pop`;

const E1_2_CE_EMAIL_POOL_20 = buildExpressPool("e1-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui arrive jeudi ?",
    text: ["La nièce Elena", "Le fils Alex", "La femme Irina"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma nièce _________ arrive.",
    fill: "Elena",
    vfQ: "Elena arrive jeudi.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "D'où arrive Elena ?",
    text: ["De Roumanie", "De France", "Du Canada"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "arrive de _________.",
    fill: "Roumanie",
    vfQ: "Elena arrive de Roumanie.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de temps reste-t-elle ?",
    text: ["Deux semaines", "Un jour", "Six mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "pendant deux _________.",
    fill: "semaines",
    vfQ: "Elle reste deux semaines.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle est la profession d'Irina ?",
    text: ["Réceptionniste", "Mécanicienne", "Pharmacienne"],
    textC: 0,
    img: ["vendeur", "mécanicien", "pharmacien"],
    imgC: 0,
    fillQ: "Irina est _________.",
    fill: "réceptionniste",
    vfQ: "Irina est réceptionniste.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Que prépare Alex ?",
    text: ["Son ancien bureau", "Le dîner", "Une voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "son ancien _________.",
    fill: "bureau",
    vfQ: "Alex prépare son ancien bureau.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien seront-ils autour de la table ?",
    text: ["Six", "Trois", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous serons _________ autour de la table.",
    fill: "six",
    vfQ: "Ils seront six autour de la table.",
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

const E1_3_CE_EMAIL_TEXT_1 = `De : Julie Martin
Objet : Invitation anniversaire

Bonjour,

J'organise mon anniversaire et je t'invite !
C'est samedi 20 avril à 19 h.
On se retrouve chez moi à Lausanne.
Gâteau et musique.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Julie Martin`;

const E1_3_CE_EMAIL_POOL_1 = buildExpressPool("e1-3-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation anniversaire", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Invitation",
    vfQ: "L'objet est Invitation anniversaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Mon anniversaire", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "anniversaire",
    vfQ: "C'est mon anniversaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 20 avril", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "C'est samedi 20 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["19 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "19",
    vfQ: "L'heure est 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Chez moi à lausanne", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "chez",
    vfQ: "C'est chez moi à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Gâteau et musique", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "gâteau",
    vfQ: "Info : gâteau et musique.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_2 = `De : Lucas Ferreira
Objet : Soirée jeux

Bonjour,

J'organise une soirée jeux de société et je t'invite !
C'est vendredi 8 mars à 20 h.
On se retrouve chez Lucas.
Pizza et boissons.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Lucas Ferreira`;

const E1_3_CE_EMAIL_POOL_2 = buildExpressPool("e1-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Soirée jeux", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Soirée",
    vfQ: "L'objet est Soirée jeux.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Une soirée jeux de société", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "société",
    vfQ: "C'est une soirée jeux de société.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Vendredi 8 mars", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "vendredi",
    vfQ: "C'est vendredi 8 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["20 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "20",
    vfQ: "L'heure est 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Chez lucas", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "chez",
    vfQ: "C'est chez Lucas.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Pizza et boissons", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "pizza",
    vfQ: "Info : pizza et boissons.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_3 = `De : Nina Costa
Objet : Apéro sur le balcon

Bonjour,

J'organise un apéro et je t'invite !
C'est jeudi 14 mars à 18 h 30.
On se retrouve son balcon à Fribourg.
Vue sur la cathédrale.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Nina Costa`;

const E1_3_CE_EMAIL_POOL_3 = buildExpressPool("e1-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Apéro sur le balcon", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Apéro",
    vfQ: "L'objet est Apéro sur le balcon.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un apéro", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "apéro",
    vfQ: "C'est un apéro.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Jeudi 14 mars", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "jeudi",
    vfQ: "C'est jeudi 14 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["18 h 30", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "18",
    vfQ: "L'heure est 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Son balcon à fribourg", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "son",
    vfQ: "C'est son balcon à Fribourg.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Vue sur la cathédrale", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "vue",
    vfQ: "Info : vue sur la cathédrale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_4 = `De : Paul Dubois
Objet : Barbecue

Bonjour,

J'organise un barbecue et je t'invite !
C'est dimanche 24 mars à 12 h.
On se retrouve le jardin de Paul.
Viande et salades.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Paul Dubois`;

const E1_3_CE_EMAIL_POOL_4 = buildExpressPool("e1-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Barbecue", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Barbecue",
    vfQ: "L'objet est Barbecue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un barbecue", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "barbecue",
    vfQ: "C'est un barbecue.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Dimanche 24 mars", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "dimanche",
    vfQ: "C'est dimanche 24 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["12 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "12",
    vfQ: "L'heure est 12 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le jardin de paul", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le jardin de Paul.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Viande et salades", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "viande",
    vfQ: "Info : viande et salades.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_5 = `De : Sara Alami
Objet : Cinéma

Bonjour,

J'organise un film et je t'invite !
C'est mercredi 3 avril à 20 h.
On se retrouve le cinéma ABC.
Places déjà réservées.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Sara Alami`;

const E1_3_CE_EMAIL_POOL_5 = buildExpressPool("e1-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Cinéma", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Cinéma",
    vfQ: "L'objet est Cinéma.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un film", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "film",
    vfQ: "C'est un film.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Mercredi 3 avril", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "mercredi",
    vfQ: "C'est mercredi 3 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["20 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "20",
    vfQ: "L'heure est 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le cinéma abc", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le cinéma ABC.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Places déjà réservées", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "places",
    vfQ: "Info : places déjà réservées.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_6 = `De : Tom Müller
Objet : Randonnée

Bonjour,

J'organise une randonnée et je t'invite !
C'est samedi 6 avril à 8 h.
On se retrouve devant la gare de Bienne.
Pique-nique à prévoir.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Tom Müller`;

const E1_3_CE_EMAIL_POOL_6 = buildExpressPool("e1-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Randonnée", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Randonnée",
    vfQ: "L'objet est Randonnée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Une randonnée", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "randonnée",
    vfQ: "C'est une randonnée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 6 avril", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "C'est samedi 6 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["8 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "8",
    vfQ: "L'heure est 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Devant la gare de bienne", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "devant",
    vfQ: "C'est devant la gare de Bienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Pique-nique à prévoir", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "pique-nique",
    vfQ: "Info : pique-nique à prévoir.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_7 = `De : Emma Laurent
Objet : Brunch

Bonjour,

J'organise un brunch et je t'invite !
C'est dimanche 21 avril à 10 h.
On se retrouve le café du Port à Montreux.
Réservation faite.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Emma Laurent`;

const E1_3_CE_EMAIL_POOL_7 = buildExpressPool("e1-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Brunch", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Brunch",
    vfQ: "L'objet est Brunch.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un brunch", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "brunch",
    vfQ: "C'est un brunch.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Dimanche 21 avril", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "dimanche",
    vfQ: "C'est dimanche 21 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["10 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "10",
    vfQ: "L'heure est 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le café du port à montreux", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le café du Port à Montreux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Réservation faite", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "réservation",
    vfQ: "Info : réservation faite.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_8 = `De : Hugo Martin
Objet : Concert

Bonjour,

J'organise un concert de jazz et je t'invite !
C'est vendredi 26 avril à 21 h.
On se retrouve la salle Métropole.
Deux billets gratuits.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Hugo Martin`;

const E1_3_CE_EMAIL_POOL_8 = buildExpressPool("e1-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Concert", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Concert",
    vfQ: "L'objet est Concert.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un concert de jazz", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "jazz",
    vfQ: "C'est un concert de jazz.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Vendredi 26 avril", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "vendredi",
    vfQ: "C'est vendredi 26 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["21 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "21",
    vfQ: "L'heure est 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["La salle métropole", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "la",
    vfQ: "C'est la salle Métropole.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Deux billets gratuits", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "deux",
    vfQ: "Info : deux billets gratuits.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_9 = `De : Léa Bernard
Objet : Pique-nique

Bonjour,

J'organise un pique-nique et je t'invite !
C'est samedi 4 mai à 14 h.
On se retrouve le parc des Eaux-Vives.
Chacun apporte quelque chose.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Léa Bernard`;

const E1_3_CE_EMAIL_POOL_9 = buildExpressPool("e1-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Pique-nique", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pique-nique",
    vfQ: "L'objet est Pique-nique.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un pique-nique", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "pique-nique",
    vfQ: "C'est un pique-nique.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 4 mai", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "C'est samedi 4 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["14 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "14",
    vfQ: "L'heure est 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le parc des eaux-vives", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le parc des Eaux-Vives.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Chacun apporte quelque chose", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "chacun",
    vfQ: "Info : chacun apporte quelque chose.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_10 = `De : Marc Weber
Objet : Dîner

Bonjour,

J'organise un dîner et je t'invite !
C'est samedi 11 mai à 19 h 30.
On se retrouve le restaurant Le Sapin.
Menu à 35 francs.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Marc Weber`;

const E1_3_CE_EMAIL_POOL_10 = buildExpressPool("e1-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Dîner", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Dîner",
    vfQ: "L'objet est Dîner.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un dîner", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "dîner",
    vfQ: "C'est un dîner.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 11 mai", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "C'est samedi 11 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["19 h 30", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "19",
    vfQ: "L'heure est 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le restaurant le sapin", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le restaurant Le Sapin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Menu à 35 francs", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "menu",
    vfQ: "Info : menu à 35 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_11 = `De : Julie Petit
Objet : Fête des voisins

Bonjour,

J'organise la fête des voisins et je t'invite !
C'est samedi 18 mai à 17 h.
On se retrouve la cour de l'immeuble.
Musique et jeux pour enfants.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Julie Petit`;

const E1_3_CE_EMAIL_POOL_11 = buildExpressPool("e1-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Fête des voisins", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fête",
    vfQ: "L'objet est Fête des voisins.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["La fête des voisins", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "voisins",
    vfQ: "C'est la fête des voisins.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 18 mai", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "C'est samedi 18 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["17 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "17",
    vfQ: "L'heure est 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["La cour de l'immeuble", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "la",
    vfQ: "C'est la cour de l'immeuble.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Musique et jeux pour enfants", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "musique",
    vfQ: "Info : musique et jeux pour enfants.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_12 = `De : Omar Hassan
Objet : Match de foot

Bonjour,

J'organise un match amical et je t'invite !
C'est dimanche 26 mai à 10 h.
On se retrouve le stade de Genève.
Maillot et chaussures.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Omar Hassan`;

const E1_3_CE_EMAIL_POOL_12 = buildExpressPool("e1-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Match de foot", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Match",
    vfQ: "L'objet est Match de foot.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un match amical", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "amical",
    vfQ: "C'est un match amical.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Dimanche 26 mai", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "dimanche",
    vfQ: "C'est dimanche 26 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["10 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "10",
    vfQ: "L'heure est 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le stade de genève", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le stade de Genève.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Maillot et chaussures", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "maillot",
    vfQ: "Info : maillot et chaussures.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_13 = `De : Clara Rossi
Objet : Atelier cuisine

Bonjour,

J'organise un atelier pasta et je t'invite !
C'est mardi 28 mai à 18 h.
On se retrouve sa cuisine.
6 places maximum.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Clara Rossi`;

const E1_3_CE_EMAIL_POOL_13 = buildExpressPool("e1-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Atelier cuisine", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Atelier",
    vfQ: "L'objet est Atelier cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un atelier pasta", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "pasta",
    vfQ: "C'est un atelier pasta.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Mardi 28 mai", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "mardi",
    vfQ: "C'est mardi 28 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["18 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "18",
    vfQ: "L'heure est 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Sa cuisine", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "sa",
    vfQ: "C'est sa cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["6 places maximum", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "6",
    vfQ: "Info : 6 places maximum.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_14 = `De : Yann Leroy
Objet : Exposition

Bonjour,

J'organise une exposition photo et je t'invite !
C'est jeudi 30 mai à 19 h.
On se retrouve la galerie Art Plus.
Vin et fromage.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Yann Leroy`;

const E1_3_CE_EMAIL_POOL_14 = buildExpressPool("e1-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Exposition", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Exposition",
    vfQ: "L'objet est Exposition.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Une exposition photo", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "photo",
    vfQ: "C'est une exposition photo.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Jeudi 30 mai", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "jeudi",
    vfQ: "C'est jeudi 30 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["19 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "19",
    vfQ: "L'heure est 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["La galerie art plus", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "la",
    vfQ: "C'est la galerie Art Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Vin et fromage", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "vin",
    vfQ: "Info : vin et fromage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_15 = `De : Inès Moreau
Objet : Soirée dansante

Bonjour,

J'organise une soirée salsa et je t'invite !
C'est samedi 1 juin à 21 h.
On se retrouve la salle des fêtes.
Cours débutant à 20 h.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Inès Moreau`;

const E1_3_CE_EMAIL_POOL_15 = buildExpressPool("e1-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Soirée dansante", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Soirée",
    vfQ: "L'objet est Soirée dansante.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Une soirée salsa", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "salsa",
    vfQ: "C'est une soirée salsa.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 1 juin", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "C'est samedi 1 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["21 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "21",
    vfQ: "L'heure est 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["La salle des fêtes", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "la",
    vfQ: "C'est la salle des fêtes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Cours débutant à 20 h", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "cours",
    vfQ: "Info : cours débutant à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_16 = `De : David Kim
Objet : Visite musée

Bonjour,

J'organise une visite guidée et je t'invite !
C'est mercredi 5 juin à 14 h.
On se retrouve le musée d'art.
Entrée gratuite.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
David Kim`;

const E1_3_CE_EMAIL_POOL_16 = buildExpressPool("e1-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Visite musée", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Visite",
    vfQ: "L'objet est Visite musée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Une visite guidée", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "guidée",
    vfQ: "C'est une visite guidée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Mercredi 5 juin", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "mercredi",
    vfQ: "C'est mercredi 5 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["14 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "14",
    vfQ: "L'heure est 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le musée d'art", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le musée d'art.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Entrée gratuite", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "entrée",
    vfQ: "Info : entrée gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_17 = `De : Maya Singh
Objet : Goûter enfants

Bonjour,

J'organise un goûter de fin d'année et je t'invite !
C'est mercredi 12 juin à 16 h.
On se retrouve l'école du Lac.
Apporter un plat.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Maya Singh`;

const E1_3_CE_EMAIL_POOL_17 = buildExpressPool("e1-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Goûter enfants", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Goûter",
    vfQ: "L'objet est Goûter enfants.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un goûter de fin d'année", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "d'année",
    vfQ: "C'est un goûter de fin d'année.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Mercredi 12 juin", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "mercredi",
    vfQ: "C'est mercredi 12 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["16 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "16",
    vfQ: "L'heure est 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["L'école du lac", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "l'école",
    vfQ: "C'est l'école du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Apporter un plat", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "apporter",
    vfQ: "Info : apporter un plat.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_18 = `De : Antoine Blanc
Objet : Piscine

Bonjour,

J'organise une après-midi piscine et je t'invite !
C'est samedi 15 juin à 15 h.
On se retrouve la piscine municipale.
Maillot obligatoire.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Antoine Blanc`;

const E1_3_CE_EMAIL_POOL_18 = buildExpressPool("e1-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Piscine", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Piscine",
    vfQ: "L'objet est Piscine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Une après-midi piscine", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "piscine",
    vfQ: "C'est une après-midi piscine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 15 juin", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "C'est samedi 15 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["15 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "15",
    vfQ: "L'heure est 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["La piscine municipale", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "la",
    vfQ: "C'est la piscine municipale.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Maillot obligatoire", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "maillot",
    vfQ: "Info : maillot obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_19 = `De : Salma Ben
Objet : Thé

Bonjour,

J'organise un thé marocain et je t'invite !
C'est dimanche 23 juin à 16 h.
On se retrouve chez Salma.
Pâtisseries maison.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Salma Ben`;

const E1_3_CE_EMAIL_POOL_19 = buildExpressPool("e1-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Thé", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Thé",
    vfQ: "L'objet est Thé.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Un thé marocain", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "marocain",
    vfQ: "C'est un thé marocain.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Dimanche 23 juin", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "dimanche",
    vfQ: "C'est dimanche 23 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["16 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "16",
    vfQ: "L'heure est 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Chez salma", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "chez",
    vfQ: "C'est chez Salma.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Pâtisseries maison", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "pâtisseries",
    vfQ: "Info : pâtisseries maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
    vfC: 0,
  }),
]);
const E1_3_CE_EMAIL_TEXT_20 = `De : Victor Pop
Objet : Réunion amicale

Bonjour,

J'organise une réunion de l'association et je t'invite !
C'est lundi 1 juillet à 19 h.
On se retrouve le café Central.
Ordre du jour en pièce jointe.
Dis-moi si tu peux venir avant jeudi.

Cordialement,
Victor Pop`;

const E1_3_CE_EMAIL_POOL_20 = buildExpressPool("e1-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Réunion amicale", "Un travail", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réunion",
    vfQ: "L'objet est Réunion amicale.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel événement est proposé ?",
    text: ["Une réunion de l'association", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'organise _________",
    fill: "l'association",
    vfQ: "C'est une réunion de l'association.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand a lieu l'événement ?",
    text: ["Lundi 1 juillet", "Hier", "En janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "lundi",
    vfQ: "C'est lundi 1 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure ?",
    text: ["19 h", "3 h du matin", "Midi seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "19",
    vfQ: "L'heure est 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où a lieu l'événement ?",
    text: ["Le café central", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On se retrouve _________.",
    fill: "le",
    vfQ: "C'est le café Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que doit-on apporter ou savoir ?",
    text: ["Ordre du jour en pièce jointe", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "ordre",
    vfQ: "Info : ordre du jour en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand faut-il répondre ?",
    text: ["Avant jeudi", "Après l'événement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________.",
    fill: "jeudi",
    vfQ: "Il faut répondre avant jeudi.",
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
