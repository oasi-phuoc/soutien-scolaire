import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E14 — Bilan A2 (achats, logement, démarches, invitations, activités, travail).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E14.1 — Bilan A2
   ════════════════════════════════════════════════════════════════════════════ */

const E14_1_CE_EMAIL_TEXT = `De : Service E14 1 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_POOL = buildExpressPool("e14-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 1 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 1 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 1", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 1.",
    fill: "sujet",
    vfQ: "Sujet : sujet 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 1", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 1.",
    fill: "détail",
    vfQ: "Info : détail 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 1 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 1 jours.",
    fill: "délai",
    vfQ: "Délai : délai 1 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 1", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 1.",
    fill: "action",
    vfQ: "Action : action 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 1", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 1.",
    fill: "contact",
    vfQ: "Contact : contact 1.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_2_TEXT = `De : Service E14 1 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_2_POOL = buildExpressPool("e14-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 2 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 2 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 2", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 2.",
    fill: "sujet",
    vfQ: "Sujet : sujet 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 2", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 2.",
    fill: "détail",
    vfQ: "Info : détail 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 2 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 2 jours.",
    fill: "délai",
    vfQ: "Délai : délai 2 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 2", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 2.",
    fill: "action",
    vfQ: "Action : action 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 2", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 2.",
    fill: "contact",
    vfQ: "Contact : contact 2.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_3_TEXT = `De : Service E14 1 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_3_POOL = buildExpressPool("e14-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 3 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 3 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 3", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 3.",
    fill: "sujet",
    vfQ: "Sujet : sujet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 3", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 3.",
    fill: "détail",
    vfQ: "Info : détail 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 3 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 3 jours.",
    fill: "délai",
    vfQ: "Délai : délai 3 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 3", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 3.",
    fill: "action",
    vfQ: "Action : action 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 3", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 3.",
    fill: "contact",
    vfQ: "Contact : contact 3.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_4_TEXT = `De : Service E14 1 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_4_POOL = buildExpressPool("e14-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 4 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 4 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 4", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 4.",
    fill: "sujet",
    vfQ: "Sujet : sujet 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 4", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 4.",
    fill: "détail",
    vfQ: "Info : détail 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 4 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 4 jours.",
    fill: "délai",
    vfQ: "Délai : délai 4 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 4", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 4.",
    fill: "action",
    vfQ: "Action : action 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 4", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 4.",
    fill: "contact",
    vfQ: "Contact : contact 4.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_5_TEXT = `De : Service E14 1 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_5_POOL = buildExpressPool("e14-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 5 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 5 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 5", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 5.",
    fill: "sujet",
    vfQ: "Sujet : sujet 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 5", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 5.",
    fill: "détail",
    vfQ: "Info : détail 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 5 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 5 jours.",
    fill: "délai",
    vfQ: "Délai : délai 5 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 5", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 5.",
    fill: "action",
    vfQ: "Action : action 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 5", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 5.",
    fill: "contact",
    vfQ: "Contact : contact 5.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_6_TEXT = `De : Service E14 1 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_6_POOL = buildExpressPool("e14-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 6 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 6 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 6", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 6.",
    fill: "sujet",
    vfQ: "Sujet : sujet 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 6", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 6.",
    fill: "détail",
    vfQ: "Info : détail 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 6 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 6 jours.",
    fill: "délai",
    vfQ: "Délai : délai 6 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 6", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 6.",
    fill: "action",
    vfQ: "Action : action 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 6", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 6.",
    fill: "contact",
    vfQ: "Contact : contact 6.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_7_TEXT = `De : Service E14 1 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_7_POOL = buildExpressPool("e14-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 7 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 7 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 7", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 7.",
    fill: "sujet",
    vfQ: "Sujet : sujet 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 7", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 7.",
    fill: "détail",
    vfQ: "Info : détail 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 7 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 7 jours.",
    fill: "délai",
    vfQ: "Délai : délai 7 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 7", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 7.",
    fill: "action",
    vfQ: "Action : action 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 7", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 7.",
    fill: "contact",
    vfQ: "Contact : contact 7.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_8_TEXT = `De : Service E14 1 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_8_POOL = buildExpressPool("e14-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 8 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 8 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 8", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 8.",
    fill: "sujet",
    vfQ: "Sujet : sujet 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 8", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 8.",
    fill: "détail",
    vfQ: "Info : détail 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 8 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 8 jours.",
    fill: "délai",
    vfQ: "Délai : délai 8 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 8", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 8.",
    fill: "action",
    vfQ: "Action : action 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 8", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 8.",
    fill: "contact",
    vfQ: "Contact : contact 8.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_9_TEXT = `De : Service E14 1 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_9_POOL = buildExpressPool("e14-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 9 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 9 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 9", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 9.",
    fill: "sujet",
    vfQ: "Sujet : sujet 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 9", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 9.",
    fill: "détail",
    vfQ: "Info : détail 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 9 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 9 jours.",
    fill: "délai",
    vfQ: "Délai : délai 9 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 9", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 9.",
    fill: "action",
    vfQ: "Action : action 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 9", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 9.",
    fill: "contact",
    vfQ: "Contact : contact 9.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_10_TEXT = `De : Service E14 1 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_10_POOL = buildExpressPool("e14-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 10 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 10 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 10", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 10.",
    fill: "sujet",
    vfQ: "Sujet : sujet 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 10", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 10.",
    fill: "détail",
    vfQ: "Info : détail 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 10 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 10 jours.",
    fill: "délai",
    vfQ: "Délai : délai 10 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 10", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 10.",
    fill: "action",
    vfQ: "Action : action 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 10", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 10.",
    fill: "contact",
    vfQ: "Contact : contact 10.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_11_TEXT = `De : Service E14 1 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_11_POOL = buildExpressPool("e14-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 11 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 11 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 11", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 11.",
    fill: "sujet",
    vfQ: "Sujet : sujet 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 11", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 11.",
    fill: "détail",
    vfQ: "Info : détail 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 11 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 11 jours.",
    fill: "délai",
    vfQ: "Délai : délai 11 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 11", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 11.",
    fill: "action",
    vfQ: "Action : action 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 11", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 11.",
    fill: "contact",
    vfQ: "Contact : contact 11.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_12_TEXT = `De : Service E14 1 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_12_POOL = buildExpressPool("e14-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 12 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 12 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 12", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 12.",
    fill: "sujet",
    vfQ: "Sujet : sujet 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 12", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 12.",
    fill: "détail",
    vfQ: "Info : détail 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 12 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 12 jours.",
    fill: "délai",
    vfQ: "Délai : délai 12 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 12", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 12.",
    fill: "action",
    vfQ: "Action : action 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 12", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 12.",
    fill: "contact",
    vfQ: "Contact : contact 12.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_13_TEXT = `De : Service E14 1 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_13_POOL = buildExpressPool("e14-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 13 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 13 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 13", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 13.",
    fill: "sujet",
    vfQ: "Sujet : sujet 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 13", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 13.",
    fill: "détail",
    vfQ: "Info : détail 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 13 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 13 jours.",
    fill: "délai",
    vfQ: "Délai : délai 13 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 13", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 13.",
    fill: "action",
    vfQ: "Action : action 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 13", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 13.",
    fill: "contact",
    vfQ: "Contact : contact 13.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_14_TEXT = `De : Service E14 1 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_14_POOL = buildExpressPool("e14-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 14 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 14 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 14", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 14.",
    fill: "sujet",
    vfQ: "Sujet : sujet 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 14", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 14.",
    fill: "détail",
    vfQ: "Info : détail 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 14 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 14 jours.",
    fill: "délai",
    vfQ: "Délai : délai 14 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 14", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 14.",
    fill: "action",
    vfQ: "Action : action 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 14", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 14.",
    fill: "contact",
    vfQ: "Contact : contact 14.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_15_TEXT = `De : Service E14 1 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_15_POOL = buildExpressPool("e14-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 15 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 15 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 15", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 15.",
    fill: "sujet",
    vfQ: "Sujet : sujet 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 15", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 15.",
    fill: "détail",
    vfQ: "Info : détail 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 15 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 15 jours.",
    fill: "délai",
    vfQ: "Délai : délai 15 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 15", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 15.",
    fill: "action",
    vfQ: "Action : action 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 15", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 15.",
    fill: "contact",
    vfQ: "Contact : contact 15.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_16_TEXT = `De : Service E14 1 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_16_POOL = buildExpressPool("e14-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 16 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 16 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 16", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 16.",
    fill: "sujet",
    vfQ: "Sujet : sujet 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 16", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 16.",
    fill: "détail",
    vfQ: "Info : détail 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 16 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 16 jours.",
    fill: "délai",
    vfQ: "Délai : délai 16 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 16", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 16.",
    fill: "action",
    vfQ: "Action : action 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 16", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 16.",
    fill: "contact",
    vfQ: "Contact : contact 16.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_17_TEXT = `De : Service E14 1 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_17_POOL = buildExpressPool("e14-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 17 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 17 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 17", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 17.",
    fill: "sujet",
    vfQ: "Sujet : sujet 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 17", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 17.",
    fill: "détail",
    vfQ: "Info : détail 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 17 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 17 jours.",
    fill: "délai",
    vfQ: "Délai : délai 17 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 17", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 17.",
    fill: "action",
    vfQ: "Action : action 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 17", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 17.",
    fill: "contact",
    vfQ: "Contact : contact 17.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_18_TEXT = `De : Service E14 1 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_18_POOL = buildExpressPool("e14-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 18 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 18 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 18", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 18.",
    fill: "sujet",
    vfQ: "Sujet : sujet 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 18", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 18.",
    fill: "détail",
    vfQ: "Info : détail 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 18 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 18 jours.",
    fill: "délai",
    vfQ: "Délai : délai 18 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 18", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 18.",
    fill: "action",
    vfQ: "Action : action 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 18", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 18.",
    fill: "contact",
    vfQ: "Contact : contact 18.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_19_TEXT = `De : Service E14 1 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_19_POOL = buildExpressPool("e14-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 19 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 19 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 19", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 19.",
    fill: "sujet",
    vfQ: "Sujet : sujet 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 19", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 19.",
    fill: "détail",
    vfQ: "Info : détail 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 19 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 19 jours.",
    fill: "délai",
    vfQ: "Délai : délai 19 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 19", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 19.",
    fill: "action",
    vfQ: "Action : action 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 19", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 19.",
    fill: "contact",
    vfQ: "Contact : contact 19.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_20_TEXT = `De : Service E14 1 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E14_1_CE_EMAIL_20_POOL = buildExpressPool("e14-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 20 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 20 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 20", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 20.",
    fill: "sujet",
    vfQ: "Sujet : sujet 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 20", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 20.",
    fill: "détail",
    vfQ: "Info : détail 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 20 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 20 jours.",
    fill: "délai",
    vfQ: "Délai : délai 20 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 20", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 20.",
    fill: "action",
    vfQ: "Action : action 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E14 1 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E14 1 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 20", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 20.",
    fill: "contact",
    vfQ: "Contact : contact 20.",
    vfC: 0,
  }),
]);

export const E14_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e14-1-ce-email",
  readingText: E14_1_CE_EMAIL_TEXT,
  questionPool: E14_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e14-1-ce-email-2",
  readingText: E14_1_CE_EMAIL_2_TEXT,
  questionPool: E14_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-3",
  readingText: E14_1_CE_EMAIL_3_TEXT,
  questionPool: E14_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-4",
  readingText: E14_1_CE_EMAIL_4_TEXT,
  questionPool: E14_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-5",
  readingText: E14_1_CE_EMAIL_5_TEXT,
  questionPool: E14_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-6",
  readingText: E14_1_CE_EMAIL_6_TEXT,
  questionPool: E14_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-7",
  readingText: E14_1_CE_EMAIL_7_TEXT,
  questionPool: E14_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-8",
  readingText: E14_1_CE_EMAIL_8_TEXT,
  questionPool: E14_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-9",
  readingText: E14_1_CE_EMAIL_9_TEXT,
  questionPool: E14_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-10",
  readingText: E14_1_CE_EMAIL_10_TEXT,
  questionPool: E14_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-11",
  readingText: E14_1_CE_EMAIL_11_TEXT,
  questionPool: E14_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-12",
  readingText: E14_1_CE_EMAIL_12_TEXT,
  questionPool: E14_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-13",
  readingText: E14_1_CE_EMAIL_13_TEXT,
  questionPool: E14_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-14",
  readingText: E14_1_CE_EMAIL_14_TEXT,
  questionPool: E14_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-15",
  readingText: E14_1_CE_EMAIL_15_TEXT,
  questionPool: E14_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-16",
  readingText: E14_1_CE_EMAIL_16_TEXT,
  questionPool: E14_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-17",
  readingText: E14_1_CE_EMAIL_17_TEXT,
  questionPool: E14_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-18",
  readingText: E14_1_CE_EMAIL_18_TEXT,
  questionPool: E14_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-19",
  readingText: E14_1_CE_EMAIL_19_TEXT,
  questionPool: E14_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-20",
  readingText: E14_1_CE_EMAIL_20_TEXT,
  questionPool: E14_1_CE_EMAIL_20_POOL
}),
];

export const E14_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e14-1-pee-1",
    title: "Répondre à une invitation à une crémaillère",
    situation: "Un ami vous invite à sa crémaillère.",
    sourceMessage: {
      from: "Karim",
      subject: "Crémaillère samedi 7 juin",
      body: "Bonjour,\nJ'ai déménagé à Lausanne et j'organise une crémaillère le samedi 7 juin à 18 h.\nTu peux venir ? Apporte quelque chose à boire !\nKarim",
    },
    instruction: "Répondez à Karim : acceptez l'invitation, dites ce que vous apportez et posez une question sur l'adresse ou l'étage.",
    points: ["Votre accord", "Ce que vous apportez", "Une question sur l'adresse ou l'étage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-2",
    title: "Organiser une visite d'appartement",
    situation: "Une régie immobilière vous propose deux horaires de visite.",
    sourceMessage: {
      from: "Régie Immobilière du Parc",
      subject: "Visite de l'appartement",
      body: "Bonjour,\nNous pouvons vous proposer une visite de l'appartement mercredi à 17 h ou samedi à 10 h.\nQuel horaire vous convient ?\nLa Régie du Parc",
    },
    instruction: "Répondez à la régie : choisissez un horaire, confirmez votre présence et posez deux questions sur l'appartement (loyer, charges, étage…).",
    points: ["L'horaire choisi", "La confirmation", "Deux questions sur l'appartement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-3",
    title: "Confirmer un entretien d'embauche",
    situation: "Une entreprise vous invite à un entretien.",
    sourceMessage: {
      from: "Mme Perret",
      subject: "Entretien d'embauche",
      body: "Bonjour,\nNous avons bien reçu votre candidature pour le poste de vendeur / vendeuse.\nPouvez-vous venir à un entretien lundi prochain à 14 h ?\nMme Perret",
    },
    instruction: "Répondez à Mme Perret : confirmez votre présence à l'entretien, remerciez-la et demandez quels documents il faut apporter.",
    points: ["La confirmation", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-4",
    title: "Signaler un problème de commande",
    situation: "Une boutique en ligne vous demande si votre colis est bien arrivé.",
    sourceMessage: {
      from: "Boutique Mode & Co",
      subject: "Votre commande n° 4521",
      body: "Bonjour,\nVotre colis a été livré lundi.\nÊtes-vous satisfait(e) de votre commande ?\nLa Boutique Mode & Co",
    },
    instruction: "Répondez à la boutique : expliquez le problème (par exemple une mauvaise taille), demandez un échange ou un remboursement et rappelez le numéro de commande.",
    points: ["Le problème", "L'échange ou le remboursement", "Le numéro de commande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-5",
    title: "Annoncer un changement d'adresse",
    situation: "L'administration communale vous écrit après votre déménagement.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre changement d'adresse",
      body: "Bonjour,\nPour enregistrer votre nouvelle adresse, vous devez passer au guichet avec vos documents.\nLe guichet est ouvert du lundi au vendredi, de 8 h à 16 h.\nL'Administration communale",
    },
    instruction: "Répondez à l'administration : dites quel jour vous passez au guichet, demandez quels documents il faut apporter et posez une question sur le prix.",
    points: ["Le jour de votre visite", "Une question sur les documents", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-6",
    title: "Participer à une fête surprise",
    situation: "Une amie organise une fête surprise pour un ami commun.",
    sourceMessage: {
      from: "Sophie",
      subject: "Anniversaire de Paul",
      body: "Coucou,\nSamedi prochain, j'organise une fête surprise pour les 30 ans de Paul.\nTu peux venir ? On cherche aussi une idée de cadeau commun.\nSophie",
    },
    instruction: "Répondez à Sophie : acceptez l'invitation, proposez une idée de cadeau commun et demandez l'heure et le lieu de la fête.",
    points: ["Votre accord", "Une idée de cadeau", "Une question sur l'heure et le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-7",
    title: "S'inscrire à une randonnée",
    situation: "Un club de randonnée annonce sa sortie de dimanche.",
    sourceMessage: {
      from: "Club de randonnée Les Sommets",
      subject: "Sortie de dimanche",
      body: "Bonjour,\nDimanche, nous organisons une randonnée en montagne.\nPour vous inscrire, répondez à cet e-mail avant vendredi.\nLe Club Les Sommets",
    },
    instruction: "Répondez au club : inscrivez-vous à la sortie, indiquez votre niveau de marche et posez une question sur le matériel et l'heure de départ.",
    points: ["Votre inscription", "Votre niveau", "Une question sur le matériel et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-8",
    title: "Décrire son nouveau travail",
    situation: "Une amie veut des nouvelles de votre nouveau travail.",
    sourceMessage: {
      from: "Elif",
      subject: "Ton nouveau travail ?",
      body: "Salut,\nTu as commencé ton nouveau travail le mois dernier, non ?\nÇa se passe bien ? Raconte-moi !\nElif",
    },
    instruction: "Répondez à Elif : décrivez votre nouveau travail, parlez de vos horaires et de vos collègues, et dites ce que vous aimez le plus.",
    points: ["Le travail", "Les horaires et les collègues", "Ce que vous aimez le plus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-9",
    title: "Aider un ami à déménager",
    situation: "Un ami déménage samedi et demande de l'aide.",
    sourceMessage: {
      from: "Marco",
      subject: "Besoin d'aide pour déménager",
      body: "Salut !\nJe déménage samedi prochain et j'ai besoin d'aide pour porter les cartons.\nTu es libre ? J'offre les pizzas le soir !\nMarco",
    },
    instruction: "Répondez à Marco : acceptez de l'aider, dites à quelle heure vous êtes disponible et proposez votre voiture ou des cartons.",
    points: ["Votre accord", "Votre disponibilité", "Votre voiture ou des cartons"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-10",
    title: "Répondre à un remerciement",
    situation: "Une amie vous remercie après votre soirée.",
    sourceMessage: {
      from: "Nour",
      subject: "Merci pour la soirée !",
      body: "Bonjour,\nMerci beaucoup pour la soirée de samedi, c'était très réussi !\nLe repas était délicieux. Il faut qu'on se revoie bientôt !\nNour",
    },
    instruction: "Répondez à Nour : dites que vous êtes content(e) de sa visite, remerciez-la pour son message et proposez une prochaine activité ensemble.",
    points: ["Votre plaisir", "Un remerciement", "Une prochaine activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-11",
    title: "Répondre — bilan A2 (11)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-12",
    title: "Répondre — bilan A2 (12)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-13",
    title: "Répondre — bilan A2 (13)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-14",
    title: "Répondre — bilan A2 (14)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-15",
    title: "Répondre — bilan A2 (15)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-16",
    title: "Répondre — bilan A2 (16)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-17",
    title: "Répondre — bilan A2 (17)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-18",
    title: "Répondre — bilan A2 (18)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-19",
    title: "Répondre — bilan A2 (19)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-20",
    title: "Répondre — bilan A2 (20)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
