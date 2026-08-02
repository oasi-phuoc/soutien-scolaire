import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E12 — Santé, sport, alimentation, ville, bien-être (A2).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E12.1 — S'occuper de sa santé
   ════════════════════════════════════════════════════════════════════════════ */

const E12_1_CE_EMAIL_TEXT = `De : Service E12 1 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_POOL = buildExpressPool("e12-1-ce-email", [
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
    text: ["Service E12 1 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 1.",
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

const E12_1_CE_EMAIL_2_TEXT = `De : Service E12 1 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_2_POOL = buildExpressPool("e12-1-ce-email-2", [
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
    text: ["Service E12 1 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 2.",
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

const E12_1_CE_EMAIL_3_TEXT = `De : Service E12 1 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_3_POOL = buildExpressPool("e12-1-ce-email-3", [
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
    text: ["Service E12 1 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 3.",
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

const E12_1_CE_EMAIL_4_TEXT = `De : Service E12 1 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_4_POOL = buildExpressPool("e12-1-ce-email-4", [
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
    text: ["Service E12 1 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 4.",
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

const E12_1_CE_EMAIL_5_TEXT = `De : Service E12 1 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_5_POOL = buildExpressPool("e12-1-ce-email-5", [
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
    text: ["Service E12 1 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 5.",
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

const E12_1_CE_EMAIL_6_TEXT = `De : Service E12 1 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_6_POOL = buildExpressPool("e12-1-ce-email-6", [
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
    text: ["Service E12 1 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 6.",
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

const E12_1_CE_EMAIL_7_TEXT = `De : Service E12 1 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_7_POOL = buildExpressPool("e12-1-ce-email-7", [
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
    text: ["Service E12 1 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 7.",
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

const E12_1_CE_EMAIL_8_TEXT = `De : Service E12 1 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_8_POOL = buildExpressPool("e12-1-ce-email-8", [
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
    text: ["Service E12 1 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 8.",
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

const E12_1_CE_EMAIL_9_TEXT = `De : Service E12 1 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_9_POOL = buildExpressPool("e12-1-ce-email-9", [
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
    text: ["Service E12 1 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 9.",
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

const E12_1_CE_EMAIL_10_TEXT = `De : Service E12 1 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_10_POOL = buildExpressPool("e12-1-ce-email-10", [
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
    text: ["Service E12 1 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 10.",
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

const E12_1_CE_EMAIL_11_TEXT = `De : Service E12 1 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_11_POOL = buildExpressPool("e12-1-ce-email-11", [
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
    text: ["Service E12 1 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 11.",
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

const E12_1_CE_EMAIL_12_TEXT = `De : Service E12 1 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_12_POOL = buildExpressPool("e12-1-ce-email-12", [
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
    text: ["Service E12 1 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 12.",
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

const E12_1_CE_EMAIL_13_TEXT = `De : Service E12 1 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_13_POOL = buildExpressPool("e12-1-ce-email-13", [
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
    text: ["Service E12 1 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 13.",
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

const E12_1_CE_EMAIL_14_TEXT = `De : Service E12 1 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_14_POOL = buildExpressPool("e12-1-ce-email-14", [
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
    text: ["Service E12 1 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 14.",
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

const E12_1_CE_EMAIL_15_TEXT = `De : Service E12 1 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_15_POOL = buildExpressPool("e12-1-ce-email-15", [
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
    text: ["Service E12 1 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 15.",
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

const E12_1_CE_EMAIL_16_TEXT = `De : Service E12 1 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_16_POOL = buildExpressPool("e12-1-ce-email-16", [
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
    text: ["Service E12 1 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 16.",
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

const E12_1_CE_EMAIL_17_TEXT = `De : Service E12 1 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_17_POOL = buildExpressPool("e12-1-ce-email-17", [
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
    text: ["Service E12 1 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 17.",
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

const E12_1_CE_EMAIL_18_TEXT = `De : Service E12 1 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_18_POOL = buildExpressPool("e12-1-ce-email-18", [
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
    text: ["Service E12 1 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 18.",
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

const E12_1_CE_EMAIL_19_TEXT = `De : Service E12 1 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_19_POOL = buildExpressPool("e12-1-ce-email-19", [
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
    text: ["Service E12 1 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 19.",
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

const E12_1_CE_EMAIL_20_TEXT = `De : Service E12 1 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E12_1_CE_EMAIL_20_POOL = buildExpressPool("e12-1-ce-email-20", [
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
    text: ["Service E12 1 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 1 20.",
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

export const E12_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-1-ce-email",
  readingText: E12_1_CE_EMAIL_TEXT,
  questionPool: E12_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-1-ce-email-2",
  readingText: E12_1_CE_EMAIL_2_TEXT,
  questionPool: E12_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-3",
  readingText: E12_1_CE_EMAIL_3_TEXT,
  questionPool: E12_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-4",
  readingText: E12_1_CE_EMAIL_4_TEXT,
  questionPool: E12_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-5",
  readingText: E12_1_CE_EMAIL_5_TEXT,
  questionPool: E12_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-6",
  readingText: E12_1_CE_EMAIL_6_TEXT,
  questionPool: E12_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-7",
  readingText: E12_1_CE_EMAIL_7_TEXT,
  questionPool: E12_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-8",
  readingText: E12_1_CE_EMAIL_8_TEXT,
  questionPool: E12_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-9",
  readingText: E12_1_CE_EMAIL_9_TEXT,
  questionPool: E12_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-10",
  readingText: E12_1_CE_EMAIL_10_TEXT,
  questionPool: E12_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-11",
  readingText: E12_1_CE_EMAIL_11_TEXT,
  questionPool: E12_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-12",
  readingText: E12_1_CE_EMAIL_12_TEXT,
  questionPool: E12_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-13",
  readingText: E12_1_CE_EMAIL_13_TEXT,
  questionPool: E12_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-14",
  readingText: E12_1_CE_EMAIL_14_TEXT,
  questionPool: E12_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-15",
  readingText: E12_1_CE_EMAIL_15_TEXT,
  questionPool: E12_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-16",
  readingText: E12_1_CE_EMAIL_16_TEXT,
  questionPool: E12_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-17",
  readingText: E12_1_CE_EMAIL_17_TEXT,
  questionPool: E12_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-18",
  readingText: E12_1_CE_EMAIL_18_TEXT,
  questionPool: E12_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-19",
  readingText: E12_1_CE_EMAIL_19_TEXT,
  questionPool: E12_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-20",
  readingText: E12_1_CE_EMAIL_20_TEXT,
  questionPool: E12_1_CE_EMAIL_20_POOL
}),
];

export const E12_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-1-pee-1",
    title: "Confirmer un bilan de santé",
    situation: "Le centre médical vous propose deux dates pour votre bilan de santé.",
    sourceMessage: {
      from: "Centre médical des Acacias",
      subject: "Votre bilan de santé",
      body: "Bonjour,\nNous pouvons vous proposer un bilan de santé le jeudi 20 juin à 14 h 15 ou le lundi 24 juin à 9 h.\nQuelle date vous convient le mieux ?\nLe secrétariat",
    },
    instruction: "Répondez au centre médical : choisissez une date, remerciez et posez une question sur les documents à apporter.",
    points: ["La date choisie", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-2",
    title: "Annuler un rendez-vous médical",
    situation: "Vous avez un empêchement le jour de votre rendez-vous chez le médecin.",
    sourceMessage: {
      from: "Cabinet du Dr Keller",
      subject: "Rappel de votre rendez-vous",
      body: "Bonjour,\nNous vous rappelons votre rendez-vous de demain, mardi, à 10 h 30.\nMerci d'arriver dix minutes en avance.\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et proposez deux nouvelles dates.",
    points: ["L'excuse", "La raison de l'absence", "Deux nouvelles dates"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-3",
    title: "Rassurer sa sœur",
    situation: "Votre sœur sait que vous avez fait une prise de sang et elle s'inquiète.",
    sourceMessage: {
      from: "Amina",
      subject: "Tes résultats",
      body: "Salut,\nTu as reçu les résultats de ta prise de sang ?\nQu'est-ce que le médecin a dit ? J'espère que tout va bien.\nRéponds-moi vite !\nAmina",
    },
    instruction: "Répondez à votre sœur : donnez les résultats, expliquez les conseils du médecin et rassurez-la.",
    points: ["Les résultats", "Les conseils du médecin", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-4",
    title: "Répondre à l'assurance maladie",
    situation: "Votre assurance maladie met à jour votre dossier.",
    sourceMessage: {
      from: "Assurance Helvia Santé",
      subject: "Mise à jour de votre dossier",
      body: "Bonjour,\nNous mettons à jour votre dossier.\nMerci de confirmer votre numéro de téléphone et votre adresse.\nVotre assurance maladie",
    },
    instruction: "Répondez à l'assurance : confirmez votre numéro de téléphone, donnez votre nouvelle adresse et posez une question sur le remboursement de votre dernière consultation.",
    points: ["Le numéro de téléphone", "La nouvelle adresse", "Une question sur le remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-5",
    title: "Aider un ami à arrêter de fumer",
    situation: "Un ami veut arrêter de fumer et vous demande conseil, car vous avez déjà arrêté.",
    sourceMessage: {
      from: "Diego",
      subject: "J'ai besoin de tes conseils",
      body: "Salut,\nJ'ai décidé d'arrêter de fumer, mais c'est très difficile.\nToi, tu as arrêté l'année dernière, non ? Comment tu as fait ?\nMerci d'avance,\nDiego",
    },
    instruction: "Répondez à Diego : racontez comment vous avez arrêté, donnez-lui deux conseils et encouragez-le.",
    points: ["Votre expérience", "Deux conseils", "Une phrase d'encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-6",
    title: "Rappel de vaccin pour votre fille",
    situation: "Le cabinet de pédiatrie vous envoie un rappel.",
    sourceMessage: {
      from: "Cabinet de pédiatrie Arc-en-Ciel",
      subject: "Rappel de vaccin",
      body: "Bonjour,\nLe rappel de vaccin de votre fille est à faire avant la fin du mois.\nVoulez-vous prendre un rendez-vous ?\nLe secrétariat",
    },
    instruction: "Répondez au cabinet : acceptez, proposez deux dates possibles et posez une question sur le vaccin.",
    points: ["Votre accord", "Deux dates possibles", "Une question sur le vaccin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-7",
    title: "Prévenir son chef",
    situation: "Vous avez un rendez-vous médical pendant les heures de travail.",
    sourceMessage: {
      from: "M. Rochat",
      subject: "Réunion de jeudi matin",
      body: "Bonjour,\nLa réunion d'équipe a lieu jeudi à 9 h 30.\nMerci de confirmer votre présence.\nBonne journée,\nM. Rochat",
    },
    instruction: "Répondez à votre chef : excusez-vous, expliquez que vous avez un rendez-vous médical et dites à quelle heure vous arrivez au travail.",
    points: ["L'excuse", "Le rendez-vous médical", "Votre heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-8",
    title: "Prendre rendez-vous chez le dentiste",
    situation: "Vous avez écrit au cabinet dentaire ; le secrétariat vous répond.",
    sourceMessage: {
      from: "Cabinet dentaire Sourire",
      subject: "Votre demande de rendez-vous",
      body: "Bonjour,\nNous avons bien reçu votre demande de rendez-vous.\nQuelles sont vos disponibilités cette semaine ?\nAvez-vous mal aux dents en ce moment ?\nLe secrétariat",
    },
    instruction: "Répondez au cabinet : donnez vos disponibilités, décrivez votre problème et demandez le prix d'un contrôle.",
    points: ["Vos disponibilités", "Votre problème", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-9",
    title: "Journée de prévention",
    situation: "La commune organise une journée de prévention santé gratuite.",
    sourceMessage: {
      from: "Commune de Valmont",
      subject: "Journée santé pour tous",
      body: "Bonjour,\nLa commune organise une journée de prévention le samedi 5 octobre, de 9 h à 16 h.\nAu programme : tests gratuits, conseils et ateliers.\nInscription par e-mail.\nLe service de la santé",
    },
    instruction: "Répondez à la commune : inscrivez-vous, dites pourquoi cette journée vous intéresse et demandez ce qu'il faut apporter.",
    points: ["Votre inscription", "Pourquoi cette journée vous intéresse", "Une question sur les documents à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-10",
    title: "Donner des nouvelles à une collègue",
    situation: "Vous avez été malade cette semaine ; une collègue prend de vos nouvelles.",
    sourceMessage: {
      from: "Nadia",
      subject: "Comment vas-tu ?",
      body: "Bonjour,\nTu n'es pas venu au travail cette semaine. Comment vas-tu ?\nTu es allé chez le médecin ?\nDonne-moi de tes nouvelles.\nNadia",
    },
    instruction: "Répondez à Nadia : expliquez votre maladie, racontez la visite chez le médecin et dites quand vous revenez au travail.",
    points: ["Votre maladie", "La visite chez le médecin", "Votre retour au travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-11",
    title: "Répondre — santé (11)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-12",
    title: "Répondre — santé (12)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-13",
    title: "Répondre — santé (13)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-14",
    title: "Répondre — santé (14)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-15",
    title: "Répondre — santé (15)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-16",
    title: "Répondre — santé (16)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-17",
    title: "Répondre — santé (17)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-18",
    title: "Répondre — santé (18)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-19",
    title: "Répondre — santé (19)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-20",
    title: "Répondre — santé (20)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.2 — Faire du sport
   ════════════════════════════════════════════════════════════════════════════ */

const E12_2_CE_EMAIL_TEXT = `De : Service E12 2 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_POOL = buildExpressPool("e12-2-ce-email", [
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
    text: ["Service E12 2 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 1.",
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

const E12_2_CE_EMAIL_2_TEXT = `De : Service E12 2 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_2_POOL = buildExpressPool("e12-2-ce-email-2", [
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
    text: ["Service E12 2 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 2.",
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

const E12_2_CE_EMAIL_3_TEXT = `De : Service E12 2 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_3_POOL = buildExpressPool("e12-2-ce-email-3", [
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
    text: ["Service E12 2 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 3.",
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

const E12_2_CE_EMAIL_4_TEXT = `De : Service E12 2 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_4_POOL = buildExpressPool("e12-2-ce-email-4", [
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
    text: ["Service E12 2 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 4.",
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

const E12_2_CE_EMAIL_5_TEXT = `De : Service E12 2 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_5_POOL = buildExpressPool("e12-2-ce-email-5", [
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
    text: ["Service E12 2 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 5.",
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

const E12_2_CE_EMAIL_6_TEXT = `De : Service E12 2 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_6_POOL = buildExpressPool("e12-2-ce-email-6", [
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
    text: ["Service E12 2 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 6.",
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

const E12_2_CE_EMAIL_7_TEXT = `De : Service E12 2 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_7_POOL = buildExpressPool("e12-2-ce-email-7", [
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
    text: ["Service E12 2 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 7.",
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

const E12_2_CE_EMAIL_8_TEXT = `De : Service E12 2 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_8_POOL = buildExpressPool("e12-2-ce-email-8", [
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
    text: ["Service E12 2 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 8.",
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

const E12_2_CE_EMAIL_9_TEXT = `De : Service E12 2 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_9_POOL = buildExpressPool("e12-2-ce-email-9", [
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
    text: ["Service E12 2 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 9.",
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

const E12_2_CE_EMAIL_10_TEXT = `De : Service E12 2 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_10_POOL = buildExpressPool("e12-2-ce-email-10", [
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
    text: ["Service E12 2 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 10.",
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

const E12_2_CE_EMAIL_11_TEXT = `De : Service E12 2 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_11_POOL = buildExpressPool("e12-2-ce-email-11", [
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
    text: ["Service E12 2 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 11.",
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

const E12_2_CE_EMAIL_12_TEXT = `De : Service E12 2 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_12_POOL = buildExpressPool("e12-2-ce-email-12", [
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
    text: ["Service E12 2 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 12.",
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

const E12_2_CE_EMAIL_13_TEXT = `De : Service E12 2 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_13_POOL = buildExpressPool("e12-2-ce-email-13", [
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
    text: ["Service E12 2 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 13.",
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

const E12_2_CE_EMAIL_14_TEXT = `De : Service E12 2 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_14_POOL = buildExpressPool("e12-2-ce-email-14", [
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
    text: ["Service E12 2 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 14.",
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

const E12_2_CE_EMAIL_15_TEXT = `De : Service E12 2 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_15_POOL = buildExpressPool("e12-2-ce-email-15", [
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
    text: ["Service E12 2 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 15.",
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

const E12_2_CE_EMAIL_16_TEXT = `De : Service E12 2 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_16_POOL = buildExpressPool("e12-2-ce-email-16", [
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
    text: ["Service E12 2 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 16.",
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

const E12_2_CE_EMAIL_17_TEXT = `De : Service E12 2 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_17_POOL = buildExpressPool("e12-2-ce-email-17", [
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
    text: ["Service E12 2 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 17.",
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

const E12_2_CE_EMAIL_18_TEXT = `De : Service E12 2 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_18_POOL = buildExpressPool("e12-2-ce-email-18", [
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
    text: ["Service E12 2 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 18.",
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

const E12_2_CE_EMAIL_19_TEXT = `De : Service E12 2 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_19_POOL = buildExpressPool("e12-2-ce-email-19", [
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
    text: ["Service E12 2 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 19.",
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

const E12_2_CE_EMAIL_20_TEXT = `De : Service E12 2 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E12_2_CE_EMAIL_20_POOL = buildExpressPool("e12-2-ce-email-20", [
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
    text: ["Service E12 2 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 2 20.",
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

export const E12_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-2-ce-email",
  readingText: E12_2_CE_EMAIL_TEXT,
  questionPool: E12_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-2-ce-email-2",
  readingText: E12_2_CE_EMAIL_2_TEXT,
  questionPool: E12_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-3",
  readingText: E12_2_CE_EMAIL_3_TEXT,
  questionPool: E12_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-4",
  readingText: E12_2_CE_EMAIL_4_TEXT,
  questionPool: E12_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-5",
  readingText: E12_2_CE_EMAIL_5_TEXT,
  questionPool: E12_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-6",
  readingText: E12_2_CE_EMAIL_6_TEXT,
  questionPool: E12_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-7",
  readingText: E12_2_CE_EMAIL_7_TEXT,
  questionPool: E12_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-8",
  readingText: E12_2_CE_EMAIL_8_TEXT,
  questionPool: E12_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-9",
  readingText: E12_2_CE_EMAIL_9_TEXT,
  questionPool: E12_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-10",
  readingText: E12_2_CE_EMAIL_10_TEXT,
  questionPool: E12_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-11",
  readingText: E12_2_CE_EMAIL_11_TEXT,
  questionPool: E12_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-12",
  readingText: E12_2_CE_EMAIL_12_TEXT,
  questionPool: E12_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-13",
  readingText: E12_2_CE_EMAIL_13_TEXT,
  questionPool: E12_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-14",
  readingText: E12_2_CE_EMAIL_14_TEXT,
  questionPool: E12_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-15",
  readingText: E12_2_CE_EMAIL_15_TEXT,
  questionPool: E12_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-16",
  readingText: E12_2_CE_EMAIL_16_TEXT,
  questionPool: E12_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-17",
  readingText: E12_2_CE_EMAIL_17_TEXT,
  questionPool: E12_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-18",
  readingText: E12_2_CE_EMAIL_18_TEXT,
  questionPool: E12_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-19",
  readingText: E12_2_CE_EMAIL_19_TEXT,
  questionPool: E12_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-20",
  readingText: E12_2_CE_EMAIL_20_TEXT,
  questionPool: E12_2_CE_EMAIL_20_POOL
}),
];

export const E12_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-2-pee-1",
    title: "Choisir un abonnement",
    situation: "La salle de sport répond à votre demande d'informations.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Nos abonnements",
      body: "Bonjour,\nMerci pour votre message. Nous proposons deux formules :\nl'abonnement mensuel à 60 francs ou l'abonnement annuel à 600 francs.\nQuelle formule vous intéresse ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle de sport : choisissez une formule, expliquez votre choix et demandez quand vous pouvez commencer.",
    points: ["La formule choisie", "La raison de votre choix", "Une question sur la date de début"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-2",
    title: "Réserver un cours d'essai",
    situation: "La salle de sport vous propose un cours collectif d'essai gratuit.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Cours d'essai gratuit",
      body: "Bonjour,\nVous pouvez essayer gratuitement un cours collectif : yoga le mardi à 18 h 30 ou zumba le samedi à 10 h.\nQuel cours voulez-vous essayer ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle : choisissez un cours, dites quel jour vous venez et demandez ce qu'il faut apporter.",
    points: ["Le cours choisi", "Le jour de votre venue", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-3",
    title: "Excuser une absence à l'entraînement",
    situation: "Votre club vous demande de confirmer votre présence à l'entraînement.",
    sourceMessage: {
      from: "FC Les Aiglons",
      subject: "Entraînement de samedi",
      body: "Bonjour à tous,\nL'entraînement de samedi à 9 h est très important avant le match.\nMerci de confirmer votre présence avant vendredi.\nL'entraîneur",
    },
    instruction: "Répondez à l'entraîneur : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et proposez de vous entraîner un autre jour.",
    points: ["L'excuse", "La raison de l'absence", "Une proposition pour un autre jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-4",
    title: "S'inscrire à la course de la ville",
    situation: "L'association sportive annonce l'ouverture des inscriptions.",
    sourceMessage: {
      from: "Association Courir Ensemble",
      subject: "Course de la ville : inscriptions ouvertes",
      body: "Bonjour,\nLes inscriptions pour la course de la ville du dimanche 15 juin sont ouvertes.\nDeux parcours : 5 km ou 10 km. Prix : 20 francs.\nPour vous inscrire, répondez à cet e-mail.\nL'association",
    },
    instruction: "Répondez à l'association : inscrivez-vous, choisissez un parcours et posez une question sur l'organisation (heure de départ, dossard…).",
    points: ["Votre inscription", "Le parcours choisi", "Une question sur l'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-5",
    title: "Motiver un ami",
    situation: "Un ami veut se remettre au sport et vous demande une idée.",
    sourceMessage: {
      from: "Jonas",
      subject: "Je veux refaire du sport",
      body: "Salut !\nJ'ai décidé de me remettre au sport, mais je ne sais pas quoi choisir.\nToi, tu fais du sport régulièrement, non ? Tu as une idée pour moi ?\nJonas",
    },
    instruction: "Répondez à Jonas : racontez votre sport, proposez-lui une activité ensemble et donnez-lui un conseil pour commencer.",
    points: ["Votre sport", "Une activité ensemble", "Un conseil pour commencer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-6",
    title: "Répondre à la coach",
    situation: "Avant votre premier entraînement, la coach vous pose des questions.",
    sourceMessage: {
      from: "Coach Sandra",
      subject: "Avant votre premier entraînement",
      body: "Bonjour,\nNotre premier rendez-vous approche.\nQuels sont vos objectifs ? Faites-vous déjà du sport ?\nAvez-vous des problèmes de santé ?\nSportivement,\nSandra",
    },
    instruction: "Répondez à la coach : donnez vos objectifs, décrivez votre activité sportive actuelle et parlez de votre santé.",
    points: ["Vos objectifs", "Votre activité sportive actuelle", "Une information sur votre santé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-7",
    title: "Suspendre son abonnement",
    situation: "Vous êtes blessé(e) et la salle vous écrit au sujet de votre abonnement.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Votre abonnement se termine bientôt",
      body: "Bonjour,\nVotre abonnement se termine à la fin du mois.\nVoulez-vous le renouveler pour une année ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle : expliquez votre blessure, demandez si vous pouvez suspendre l'abonnement et posez une question sur les conditions.",
    points: ["Votre blessure", "La demande de suspension", "Une question sur les conditions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-8",
    title: "Entraînement d'essai pour votre fils",
    situation: "Le club de football invite votre fils à un entraînement d'essai.",
    sourceMessage: {
      from: "FC Les Aiglons",
      subject: "Entraînement d'essai",
      body: "Bonjour,\nVotre fils peut venir à un entraînement d'essai le mercredi à 17 h, au stade municipal.\nMerci de confirmer sa présence.\nLe club",
    },
    instruction: "Répondez au club : confirmez la présence de votre fils, demandez quel équipement il faut et posez une question sur le prix de la cotisation.",
    points: ["La confirmation", "Une question sur l'équipement", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-9",
    title: "Raconter sa compétition",
    situation: "Une amie vous demande des nouvelles de votre compétition.",
    sourceMessage: {
      from: "Carla",
      subject: "Ta compétition",
      body: "Coucou,\nAlors, cette compétition de samedi ? Tu as gagné ?\nRaconte-moi tout !\nCarla",
    },
    instruction: "Répondez à Carla : racontez la compétition, donnez votre résultat et dites ce que vous allez faire pour progresser.",
    points: ["Le récit de la compétition", "Votre résultat", "Vos projets pour progresser"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-10",
    title: "S'inscrire à l'aquagym",
    situation: "La piscine municipale annonce ses nouveaux cours.",
    sourceMessage: {
      from: "Piscine municipale",
      subject: "Nouveaux cours d'aquagym",
      body: "Bonjour,\nNos nouveaux cours d'aquagym commencent le lundi 3 février.\nDeux horaires : le lundi à 19 h ou le jeudi à 12 h 15.\nLes places sont limitées.\nLa piscine municipale",
    },
    instruction: "Répondez à la piscine : inscrivez-vous, choisissez un horaire et demandez le prix du cours.",
    points: ["Votre inscription", "L'horaire choisi", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-11",
    title: "Répondre — sport (11)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-12",
    title: "Répondre — sport (12)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-13",
    title: "Répondre — sport (13)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-14",
    title: "Répondre — sport (14)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-15",
    title: "Répondre — sport (15)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-16",
    title: "Répondre — sport (16)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-17",
    title: "Répondre — sport (17)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-18",
    title: "Répondre — sport (18)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-19",
    title: "Répondre — sport (19)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-20",
    title: "Répondre — sport (20)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.3 — Manger équilibré
   ════════════════════════════════════════════════════════════════════════════ */

const E12_3_CE_EMAIL_TEXT = `De : Service E12 3 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_POOL = buildExpressPool("e12-3-ce-email", [
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
    text: ["Service E12 3 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 1.",
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

const E12_3_CE_EMAIL_2_TEXT = `De : Service E12 3 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_2_POOL = buildExpressPool("e12-3-ce-email-2", [
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
    text: ["Service E12 3 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 2.",
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

const E12_3_CE_EMAIL_3_TEXT = `De : Service E12 3 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_3_POOL = buildExpressPool("e12-3-ce-email-3", [
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
    text: ["Service E12 3 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 3.",
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

const E12_3_CE_EMAIL_4_TEXT = `De : Service E12 3 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_4_POOL = buildExpressPool("e12-3-ce-email-4", [
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
    text: ["Service E12 3 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 4.",
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

const E12_3_CE_EMAIL_5_TEXT = `De : Service E12 3 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_5_POOL = buildExpressPool("e12-3-ce-email-5", [
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
    text: ["Service E12 3 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 5.",
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

const E12_3_CE_EMAIL_6_TEXT = `De : Service E12 3 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_6_POOL = buildExpressPool("e12-3-ce-email-6", [
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
    text: ["Service E12 3 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 6.",
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

const E12_3_CE_EMAIL_7_TEXT = `De : Service E12 3 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_7_POOL = buildExpressPool("e12-3-ce-email-7", [
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
    text: ["Service E12 3 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 7.",
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

const E12_3_CE_EMAIL_8_TEXT = `De : Service E12 3 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_8_POOL = buildExpressPool("e12-3-ce-email-8", [
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
    text: ["Service E12 3 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 8.",
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

const E12_3_CE_EMAIL_9_TEXT = `De : Service E12 3 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_9_POOL = buildExpressPool("e12-3-ce-email-9", [
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
    text: ["Service E12 3 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 9.",
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

const E12_3_CE_EMAIL_10_TEXT = `De : Service E12 3 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_10_POOL = buildExpressPool("e12-3-ce-email-10", [
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
    text: ["Service E12 3 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 10.",
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

const E12_3_CE_EMAIL_11_TEXT = `De : Service E12 3 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_11_POOL = buildExpressPool("e12-3-ce-email-11", [
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
    text: ["Service E12 3 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 11.",
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

const E12_3_CE_EMAIL_12_TEXT = `De : Service E12 3 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_12_POOL = buildExpressPool("e12-3-ce-email-12", [
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
    text: ["Service E12 3 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 12.",
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

const E12_3_CE_EMAIL_13_TEXT = `De : Service E12 3 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_13_POOL = buildExpressPool("e12-3-ce-email-13", [
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
    text: ["Service E12 3 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 13.",
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

const E12_3_CE_EMAIL_14_TEXT = `De : Service E12 3 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_14_POOL = buildExpressPool("e12-3-ce-email-14", [
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
    text: ["Service E12 3 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 14.",
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

const E12_3_CE_EMAIL_15_TEXT = `De : Service E12 3 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_15_POOL = buildExpressPool("e12-3-ce-email-15", [
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
    text: ["Service E12 3 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 15.",
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

const E12_3_CE_EMAIL_16_TEXT = `De : Service E12 3 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_16_POOL = buildExpressPool("e12-3-ce-email-16", [
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
    text: ["Service E12 3 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 16.",
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

const E12_3_CE_EMAIL_17_TEXT = `De : Service E12 3 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_17_POOL = buildExpressPool("e12-3-ce-email-17", [
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
    text: ["Service E12 3 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 17.",
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

const E12_3_CE_EMAIL_18_TEXT = `De : Service E12 3 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_18_POOL = buildExpressPool("e12-3-ce-email-18", [
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
    text: ["Service E12 3 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 18.",
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

const E12_3_CE_EMAIL_19_TEXT = `De : Service E12 3 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_19_POOL = buildExpressPool("e12-3-ce-email-19", [
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
    text: ["Service E12 3 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 19.",
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

const E12_3_CE_EMAIL_20_TEXT = `De : Service E12 3 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E12_3_CE_EMAIL_20_POOL = buildExpressPool("e12-3-ce-email-20", [
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
    text: ["Service E12 3 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 3 20.",
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

export const E12_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-3-ce-email",
  readingText: E12_3_CE_EMAIL_TEXT,
  questionPool: E12_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-3-ce-email-2",
  readingText: E12_3_CE_EMAIL_2_TEXT,
  questionPool: E12_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-3",
  readingText: E12_3_CE_EMAIL_3_TEXT,
  questionPool: E12_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-4",
  readingText: E12_3_CE_EMAIL_4_TEXT,
  questionPool: E12_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-5",
  readingText: E12_3_CE_EMAIL_5_TEXT,
  questionPool: E12_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-6",
  readingText: E12_3_CE_EMAIL_6_TEXT,
  questionPool: E12_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-7",
  readingText: E12_3_CE_EMAIL_7_TEXT,
  questionPool: E12_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-8",
  readingText: E12_3_CE_EMAIL_8_TEXT,
  questionPool: E12_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-9",
  readingText: E12_3_CE_EMAIL_9_TEXT,
  questionPool: E12_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-10",
  readingText: E12_3_CE_EMAIL_10_TEXT,
  questionPool: E12_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-11",
  readingText: E12_3_CE_EMAIL_11_TEXT,
  questionPool: E12_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-12",
  readingText: E12_3_CE_EMAIL_12_TEXT,
  questionPool: E12_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-13",
  readingText: E12_3_CE_EMAIL_13_TEXT,
  questionPool: E12_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-14",
  readingText: E12_3_CE_EMAIL_14_TEXT,
  questionPool: E12_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-15",
  readingText: E12_3_CE_EMAIL_15_TEXT,
  questionPool: E12_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-16",
  readingText: E12_3_CE_EMAIL_16_TEXT,
  questionPool: E12_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-17",
  readingText: E12_3_CE_EMAIL_17_TEXT,
  questionPool: E12_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-18",
  readingText: E12_3_CE_EMAIL_18_TEXT,
  questionPool: E12_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-19",
  readingText: E12_3_CE_EMAIL_19_TEXT,
  questionPool: E12_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-20",
  readingText: E12_3_CE_EMAIL_20_TEXT,
  questionPool: E12_3_CE_EMAIL_20_POOL
}),
];

export const E12_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-3-pee-1",
    title: "Commander un panier de légumes",
    situation: "La ferme répond à votre demande d'informations sur les paniers.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Nos paniers de légumes",
      body: "Bonjour,\nMerci pour votre message. Nous proposons deux paniers :\nle petit panier à 15 francs et le grand panier à 25 francs.\nLequel voulez-vous ?\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : choisissez un panier, expliquez pour combien de personnes vous cuisinez et demandez où le chercher.",
    points: ["Le panier choisi", "Le nombre de personnes", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-2",
    title: "Annuler son panier",
    situation: "Vous partez en voyage ; la ferme vous annonce que votre panier sera prêt.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Votre panier de samedi",
      body: "Bonjour,\nVotre panier de légumes sera prêt samedi, comme d'habitude, à notre stand du marché.\nÀ samedi !\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : excusez-vous, annulez le panier de cette semaine et expliquez quand vous revenez.",
    points: ["L'excuse", "L'annulation", "La date de votre retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-3",
    title: "S'inscrire au cours de cuisine",
    situation: "La ferme organise un cours de cuisine diététique.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Cours de cuisine diététique",
      body: "Bonjour,\nIl reste des places pour notre cours de cuisine diététique du mercredi 9 avril à 18 h.\nPrix : 40 francs, ingrédients compris.\nPour vous inscrire, répondez à cet e-mail.\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : inscrivez-vous, dites pourquoi ce cours vous intéresse et demandez s'il faut apporter quelque chose.",
    points: ["Votre inscription", "Pourquoi ce cours vous intéresse", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-4",
    title: "Répondre à la diététicienne",
    situation: "Avant votre premier rendez-vous, la diététicienne vous pose des questions.",
    sourceMessage: {
      from: "Mme Perret, diététicienne",
      subject: "Avant notre rendez-vous",
      body: "Bonjour,\nAvant notre premier rendez-vous, pouvez-vous décrire vos repas d'une journée ?\nQu'est-ce que vous mangez au petit-déjeuner, à midi et le soir ?\nBuvez-vous assez d'eau ?\nMme Perret",
    },
    instruction: "Répondez à la diététicienne : décrivez vos repas d'une journée, parlez de ce que vous buvez et posez une question sur l'alimentation.",
    points: ["Vos repas d'une journée", "Ce que vous buvez", "Une question sur l'alimentation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-5",
    title: "Partager une recette",
    situation: "Une amie a adoré votre plat et vous demande la recette.",
    sourceMessage: {
      from: "Elena",
      subject: "Ta soupe de légumes",
      body: "Coucou,\nTa soupe de légumes de samedi était délicieuse !\nTu peux me donner la recette ? C'est difficile à faire ?\nMerci !\nElena",
    },
    instruction: "Répondez à Elena : donnez les ingrédients, expliquez les étapes de la recette et donnez un petit conseil.",
    points: ["Les ingrédients", "Les étapes de la recette", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-6",
    title: "Conseiller un ami fatigué",
    situation: "Un ami mange mal et se sent fatigué.",
    sourceMessage: {
      from: "Mehdi",
      subject: "Toujours fatigué",
      body: "Salut,\nJe suis fatigué en ce moment. Je mange souvent des pizzas et des sandwichs, et je bois beaucoup de sodas.\nToi, tu manges équilibré, non ? Tu as des conseils ?\nMehdi",
    },
    instruction: "Répondez à Mehdi : expliquez ce que vous mangez, donnez-lui deux conseils simples et proposez-lui de cuisiner ensemble.",
    points: ["Ce que vous mangez", "Deux conseils", "Une proposition de cuisiner ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-7",
    title: "Le goûter de la sortie scolaire",
    situation: "L'école de votre fille organise une sortie et vous écrit.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie de jeudi : le goûter",
      body: "Bonjour,\nPour la sortie de jeudi, chaque enfant apporte un goûter sain : fruits, pain, eau.\nPas de chips ni de sodas, merci.\nMerci de confirmer que votre enfant participe.\nLa maîtresse",
    },
    instruction: "Répondez à la maîtresse : confirmez la participation de votre fille, dites quel goûter vous préparez et posez une question sur la sortie.",
    points: ["La confirmation", "Le goûter préparé", "Une question sur la sortie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-8",
    title: "Inviter une amie au marché",
    situation: "Une amie veut manger plus de légumes, mais elle trouve le supermarché cher.",
    sourceMessage: {
      from: "Sara",
      subject: "Manger mieux",
      body: "Salut,\nJe veux manger plus de légumes, mais au supermarché, c'est cher.\nTu achètes où, toi, tes fruits et tes légumes ?\nSara",
    },
    instruction: "Répondez à Sara : parlez du marché, proposez-lui d'y aller ensemble et donnez un exemple de prix.",
    points: ["Le marché", "Une proposition d'y aller ensemble", "Un exemple de prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-9",
    title: "Raconter le cours de cuisine",
    situation: "Un ami vous demande des nouvelles de votre cours de cuisine.",
    sourceMessage: {
      from: "Tom",
      subject: "Ton cours de cuisine",
      body: "Salut !\nAlors, ce cours de cuisine diététique hier soir ? C'était comment ?\nTu as appris quoi ?\nTom",
    },
    instruction: "Répondez à Tom : racontez le cours, décrivez une recette apprise et dites si vous recommandez le cours.",
    points: ["Le récit du cours", "Une recette apprise", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-10",
    title: "Question au magasin bio",
    situation: "Un nouveau magasin bio a ouvert et vous envoie ses informations.",
    sourceMessage: {
      from: "Magasin Bio Nature",
      subject: "Bienvenue chez Bio Nature",
      body: "Bonjour,\nNotre nouveau magasin a ouvert au centre-ville.\nCette semaine, les fruits et les légumes sont à moitié prix.\nOuvert du lundi au samedi, de 8 h 30 à 19 h.\nL'équipe Bio Nature",
    },
    instruction: "Répondez au magasin : demandez si vous pouvez trouver certains produits, posez une question sur les prix et dites quand vous allez venir.",
    points: ["Les produits recherchés", "Une question sur les prix", "Le jour de votre visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-11",
    title: "Répondre — alimentation (11)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-12",
    title: "Répondre — alimentation (12)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-13",
    title: "Répondre — alimentation (13)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-14",
    title: "Répondre — alimentation (14)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-15",
    title: "Répondre — alimentation (15)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-16",
    title: "Répondre — alimentation (16)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-17",
    title: "Répondre — alimentation (17)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-18",
    title: "Répondre — alimentation (18)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-19",
    title: "Répondre — alimentation (19)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-20",
    title: "Répondre — alimentation (20)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.4 — Vivre en ville
   ════════════════════════════════════════════════════════════════════════════ */

const E12_4_CE_EMAIL_TEXT = `De : Service E12 4 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_POOL = buildExpressPool("e12-4-ce-email", [
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
    text: ["Service E12 4 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 1.",
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

const E12_4_CE_EMAIL_2_TEXT = `De : Service E12 4 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_2_POOL = buildExpressPool("e12-4-ce-email-2", [
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
    text: ["Service E12 4 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 2.",
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

const E12_4_CE_EMAIL_3_TEXT = `De : Service E12 4 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_3_POOL = buildExpressPool("e12-4-ce-email-3", [
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
    text: ["Service E12 4 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 3.",
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

const E12_4_CE_EMAIL_4_TEXT = `De : Service E12 4 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_4_POOL = buildExpressPool("e12-4-ce-email-4", [
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
    text: ["Service E12 4 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 4.",
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

const E12_4_CE_EMAIL_5_TEXT = `De : Service E12 4 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_5_POOL = buildExpressPool("e12-4-ce-email-5", [
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
    text: ["Service E12 4 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 5.",
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

const E12_4_CE_EMAIL_6_TEXT = `De : Service E12 4 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_6_POOL = buildExpressPool("e12-4-ce-email-6", [
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
    text: ["Service E12 4 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 6.",
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

const E12_4_CE_EMAIL_7_TEXT = `De : Service E12 4 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_7_POOL = buildExpressPool("e12-4-ce-email-7", [
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
    text: ["Service E12 4 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 7.",
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

const E12_4_CE_EMAIL_8_TEXT = `De : Service E12 4 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_8_POOL = buildExpressPool("e12-4-ce-email-8", [
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
    text: ["Service E12 4 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 8.",
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

const E12_4_CE_EMAIL_9_TEXT = `De : Service E12 4 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_9_POOL = buildExpressPool("e12-4-ce-email-9", [
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
    text: ["Service E12 4 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 9.",
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

const E12_4_CE_EMAIL_10_TEXT = `De : Service E12 4 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_10_POOL = buildExpressPool("e12-4-ce-email-10", [
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
    text: ["Service E12 4 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 10.",
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

const E12_4_CE_EMAIL_11_TEXT = `De : Service E12 4 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_11_POOL = buildExpressPool("e12-4-ce-email-11", [
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
    text: ["Service E12 4 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 11.",
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

const E12_4_CE_EMAIL_12_TEXT = `De : Service E12 4 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_12_POOL = buildExpressPool("e12-4-ce-email-12", [
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
    text: ["Service E12 4 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 12.",
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

const E12_4_CE_EMAIL_13_TEXT = `De : Service E12 4 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_13_POOL = buildExpressPool("e12-4-ce-email-13", [
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
    text: ["Service E12 4 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 13.",
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

const E12_4_CE_EMAIL_14_TEXT = `De : Service E12 4 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_14_POOL = buildExpressPool("e12-4-ce-email-14", [
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
    text: ["Service E12 4 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 14.",
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

const E12_4_CE_EMAIL_15_TEXT = `De : Service E12 4 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_15_POOL = buildExpressPool("e12-4-ce-email-15", [
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
    text: ["Service E12 4 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 15.",
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

const E12_4_CE_EMAIL_16_TEXT = `De : Service E12 4 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_16_POOL = buildExpressPool("e12-4-ce-email-16", [
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
    text: ["Service E12 4 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 16.",
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

const E12_4_CE_EMAIL_17_TEXT = `De : Service E12 4 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_17_POOL = buildExpressPool("e12-4-ce-email-17", [
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
    text: ["Service E12 4 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 17.",
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

const E12_4_CE_EMAIL_18_TEXT = `De : Service E12 4 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_18_POOL = buildExpressPool("e12-4-ce-email-18", [
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
    text: ["Service E12 4 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 18.",
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

const E12_4_CE_EMAIL_19_TEXT = `De : Service E12 4 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_19_POOL = buildExpressPool("e12-4-ce-email-19", [
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
    text: ["Service E12 4 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 19.",
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

const E12_4_CE_EMAIL_20_TEXT = `De : Service E12 4 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E12_4_CE_EMAIL_20_POOL = buildExpressPool("e12-4-ce-email-20", [
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
    text: ["Service E12 4 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 4 20.",
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

export const E12_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-4-ce-email",
  readingText: E12_4_CE_EMAIL_TEXT,
  questionPool: E12_4_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-4-ce-email-2",
  readingText: E12_4_CE_EMAIL_2_TEXT,
  questionPool: E12_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-3",
  readingText: E12_4_CE_EMAIL_3_TEXT,
  questionPool: E12_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-4",
  readingText: E12_4_CE_EMAIL_4_TEXT,
  questionPool: E12_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-5",
  readingText: E12_4_CE_EMAIL_5_TEXT,
  questionPool: E12_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-6",
  readingText: E12_4_CE_EMAIL_6_TEXT,
  questionPool: E12_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-7",
  readingText: E12_4_CE_EMAIL_7_TEXT,
  questionPool: E12_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-8",
  readingText: E12_4_CE_EMAIL_8_TEXT,
  questionPool: E12_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-9",
  readingText: E12_4_CE_EMAIL_9_TEXT,
  questionPool: E12_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-10",
  readingText: E12_4_CE_EMAIL_10_TEXT,
  questionPool: E12_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-11",
  readingText: E12_4_CE_EMAIL_11_TEXT,
  questionPool: E12_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-12",
  readingText: E12_4_CE_EMAIL_12_TEXT,
  questionPool: E12_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-13",
  readingText: E12_4_CE_EMAIL_13_TEXT,
  questionPool: E12_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-14",
  readingText: E12_4_CE_EMAIL_14_TEXT,
  questionPool: E12_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-15",
  readingText: E12_4_CE_EMAIL_15_TEXT,
  questionPool: E12_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-16",
  readingText: E12_4_CE_EMAIL_16_TEXT,
  questionPool: E12_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-17",
  readingText: E12_4_CE_EMAIL_17_TEXT,
  questionPool: E12_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-18",
  readingText: E12_4_CE_EMAIL_18_TEXT,
  questionPool: E12_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-19",
  readingText: E12_4_CE_EMAIL_19_TEXT,
  questionPool: E12_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-20",
  readingText: E12_4_CE_EMAIL_20_TEXT,
  questionPool: E12_4_CE_EMAIL_20_POOL
}),
];

export const E12_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-4-pee-1",
    title: "Questions sur les travaux",
    situation: "La commune annonce des travaux dans votre rue.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Travaux dans votre rue",
      body: "Bonjour,\nDes travaux commencent dans votre rue le lundi 5 mai et vont durer trois semaines.\nPendant les travaux, la rue est fermée aux voitures.\nPour toute question, répondez à cet e-mail.\nL'administration communale",
    },
    instruction: "Répondez à la commune : posez une question sur les horaires des travaux, expliquez votre problème de parking et demandez une solution.",
    points: ["Une question sur les horaires", "Votre problème de parking", "Une demande de solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-2",
    title: "Signaler un problème",
    situation: "La commune invite les habitants à signaler les problèmes du quartier.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre quartier vous écoute",
      body: "Bonjour,\nVous pouvez maintenant signaler les problèmes de votre quartier par e-mail : éclairage, propreté, routes…\nNous répondons sous trois jours.\nL'administration communale",
    },
    instruction: "Répondez à la commune : signalez un lampadaire cassé, dites où il se trouve et depuis quand il ne fonctionne plus.",
    points: ["Le problème signalé", "Le lieu exact", "Depuis quand"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-3",
    title: "Inviter un ami à la fête du quartier",
    situation: "Un ami vous demande vos projets pour le week-end du 14 juin.",
    sourceMessage: {
      from: "Ivan",
      subject: "Le week-end du 14 juin",
      body: "Salut !\nTu fais quoi le week-end du 14 juin ?\nOn peut peut-être faire quelque chose ensemble ?\nIvan",
    },
    instruction: "Répondez à Ivan : parlez de la fête du quartier, invitez-le et donnez les informations pratiques (lieu, heure, programme).",
    points: ["La fête du quartier", "L'invitation", "Les informations pratiques"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-4",
    title: "Accueillir un nouveau voisin",
    situation: "Un nouveau voisin vient d'arriver dans votre immeuble et vous pose des questions.",
    sourceMessage: {
      from: "Emre",
      subject: "Nouveaux voisins",
      body: "Bonjour,\nNous venons d'arriver dans l'immeuble, au deuxième étage.\nOù est-ce qu'on peut faire les courses dans le quartier ?\nEt quel bus va au centre-ville ?\nMerci d'avance,\nEmre",
    },
    instruction: "Répondez à Emre : souhaitez-lui la bienvenue, expliquez où faire les courses et donnez les informations sur le bus.",
    points: ["Un mot de bienvenue", "Où faire les courses", "Les informations sur le bus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-5",
    title: "Renouveler son abonnement de bus",
    situation: "Les transports municipaux vous écrivent au sujet de votre abonnement.",
    sourceMessage: {
      from: "Transports municipaux",
      subject: "Votre abonnement se termine",
      body: "Bonjour,\nVotre abonnement de bus se termine à la fin du mois.\nVoulez-vous le renouveler ? Abonnement mensuel : 70 francs ; annuel : 700 francs.\nLes transports municipaux",
    },
    instruction: "Répondez aux transports : renouvelez votre abonnement, choisissez une formule et posez une question sur le nouvel itinéraire du bus 7.",
    points: ["Le renouvellement", "La formule choisie", "Une question sur l'itinéraire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-6",
    title: "Devenir bénévole",
    situation: "L'association de quartier cherche des bénévoles pour la fête.",
    sourceMessage: {
      from: "Association du quartier",
      subject: "Recherche de bénévoles",
      body: "Bonjour,\nNous cherchons des bénévoles pour la fête du quartier du samedi 14 juin.\nAu programme : installation, buvette, jeux pour les enfants.\nQui veut nous aider ?\nL'association du quartier",
    },
    instruction: "Répondez à l'association : proposez votre aide, dites ce que vous préférez faire et donnez vos disponibilités.",
    points: ["Votre proposition d'aide", "L'activité préférée", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-7",
    title: "Se plaindre du bruit",
    situation: "La régie de votre immeuble demande l'avis des habitants.",
    sourceMessage: {
      from: "Régie Lambert",
      subject: "Votre avis sur l'immeuble",
      body: "Bonjour,\nNous faisons le point sur la vie de l'immeuble.\nAvez-vous des remarques ou des problèmes à signaler ?\nLa régie Lambert",
    },
    instruction: "Répondez à la régie : expliquez le problème de bruit des travaux, dites à quelles heures c'est difficile et demandez une solution.",
    points: ["Le problème de bruit", "Les heures difficiles", "Une demande de solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-8",
    title: "Décrire son quartier",
    situation: "Une amie cherche un appartement dans votre ville.",
    sourceMessage: {
      from: "Lucia",
      subject: "Ton quartier",
      body: "Coucou,\nJe cherche un appartement dans ta ville.\nTon quartier est bien ? Il y a des magasins, des transports ?\nRaconte-moi !\nLucia",
    },
    instruction: "Répondez à Lucia : décrivez votre quartier, parlez des transports et des magasins, et dites ce que vous préférez dans ce quartier.",
    points: ["La description du quartier", "Les transports et les magasins", "Ce que vous préférez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-9",
    title: "S'inscrire à la bibliothèque",
    situation: "La bibliothèque municipale annonce ses nouveaux horaires.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nBonne nouvelle : la bibliothèque ouvre maintenant aussi le dimanche matin, de 9 h à 12 h.\nL'inscription est gratuite pour les habitants de la commune.\nLa bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : demandez comment s'inscrire, posez une question sur les livres pour enfants et dites quand vous voulez venir.",
    points: ["Une question sur l'inscription", "Une question sur les livres pour enfants", "Le jour de votre visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-10",
    title: "Donner son avis sur le marché",
    situation: "La commune demande l'avis des habitants sur le marché du mercredi.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre avis sur le marché",
      body: "Bonjour,\nNous préparons le programme de l'année prochaine.\nQue pensez-vous du marché du mercredi ? Qu'est-ce qu'on peut améliorer ?\nMerci pour vos réponses.\nL'administration communale",
    },
    instruction: "Répondez à la commune : donnez votre avis sur le marché, dites ce que vous y achetez et proposez une amélioration.",
    points: ["Votre avis", "Ce que vous achetez", "Une proposition d'amélioration"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-11",
    title: "Répondre — la ville (11)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-12",
    title: "Répondre — la ville (12)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-13",
    title: "Répondre — la ville (13)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-14",
    title: "Répondre — la ville (14)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-15",
    title: "Répondre — la ville (15)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-16",
    title: "Répondre — la ville (16)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-17",
    title: "Répondre — la ville (17)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-18",
    title: "Répondre — la ville (18)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-19",
    title: "Répondre — la ville (19)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-20",
    title: "Répondre — la ville (20)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.5 — Prendre soin de soi
   ════════════════════════════════════════════════════════════════════════════ */

const E12_5_CE_EMAIL_TEXT = `De : Service E12 5 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_POOL = buildExpressPool("e12-5-ce-email", [
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
    text: ["Service E12 5 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 1.",
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

const E12_5_CE_EMAIL_2_TEXT = `De : Service E12 5 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_2_POOL = buildExpressPool("e12-5-ce-email-2", [
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
    text: ["Service E12 5 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 2.",
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

const E12_5_CE_EMAIL_3_TEXT = `De : Service E12 5 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_3_POOL = buildExpressPool("e12-5-ce-email-3", [
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
    text: ["Service E12 5 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 3.",
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

const E12_5_CE_EMAIL_4_TEXT = `De : Service E12 5 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_4_POOL = buildExpressPool("e12-5-ce-email-4", [
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
    text: ["Service E12 5 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 4.",
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

const E12_5_CE_EMAIL_5_TEXT = `De : Service E12 5 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_5_POOL = buildExpressPool("e12-5-ce-email-5", [
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
    text: ["Service E12 5 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 5.",
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

const E12_5_CE_EMAIL_6_TEXT = `De : Service E12 5 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_6_POOL = buildExpressPool("e12-5-ce-email-6", [
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
    text: ["Service E12 5 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 6.",
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

const E12_5_CE_EMAIL_7_TEXT = `De : Service E12 5 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_7_POOL = buildExpressPool("e12-5-ce-email-7", [
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
    text: ["Service E12 5 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 7.",
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

const E12_5_CE_EMAIL_8_TEXT = `De : Service E12 5 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_8_POOL = buildExpressPool("e12-5-ce-email-8", [
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
    text: ["Service E12 5 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 8.",
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

const E12_5_CE_EMAIL_9_TEXT = `De : Service E12 5 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_9_POOL = buildExpressPool("e12-5-ce-email-9", [
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
    text: ["Service E12 5 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 9.",
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

const E12_5_CE_EMAIL_10_TEXT = `De : Service E12 5 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_10_POOL = buildExpressPool("e12-5-ce-email-10", [
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
    text: ["Service E12 5 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 10.",
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

const E12_5_CE_EMAIL_11_TEXT = `De : Service E12 5 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_11_POOL = buildExpressPool("e12-5-ce-email-11", [
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
    text: ["Service E12 5 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 11.",
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

const E12_5_CE_EMAIL_12_TEXT = `De : Service E12 5 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_12_POOL = buildExpressPool("e12-5-ce-email-12", [
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
    text: ["Service E12 5 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 12.",
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

const E12_5_CE_EMAIL_13_TEXT = `De : Service E12 5 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_13_POOL = buildExpressPool("e12-5-ce-email-13", [
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
    text: ["Service E12 5 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 13.",
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

const E12_5_CE_EMAIL_14_TEXT = `De : Service E12 5 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_14_POOL = buildExpressPool("e12-5-ce-email-14", [
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
    text: ["Service E12 5 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 14.",
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

const E12_5_CE_EMAIL_15_TEXT = `De : Service E12 5 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_15_POOL = buildExpressPool("e12-5-ce-email-15", [
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
    text: ["Service E12 5 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 15.",
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

const E12_5_CE_EMAIL_16_TEXT = `De : Service E12 5 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_16_POOL = buildExpressPool("e12-5-ce-email-16", [
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
    text: ["Service E12 5 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 16.",
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

const E12_5_CE_EMAIL_17_TEXT = `De : Service E12 5 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_17_POOL = buildExpressPool("e12-5-ce-email-17", [
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
    text: ["Service E12 5 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 17.",
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

const E12_5_CE_EMAIL_18_TEXT = `De : Service E12 5 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_18_POOL = buildExpressPool("e12-5-ce-email-18", [
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
    text: ["Service E12 5 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 18.",
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

const E12_5_CE_EMAIL_19_TEXT = `De : Service E12 5 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_19_POOL = buildExpressPool("e12-5-ce-email-19", [
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
    text: ["Service E12 5 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 19.",
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

const E12_5_CE_EMAIL_20_TEXT = `De : Service E12 5 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E12_5_CE_EMAIL_20_POOL = buildExpressPool("e12-5-ce-email-20", [
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
    text: ["Service E12 5 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E12 5 20.",
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

export const E12_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-5-ce-email",
  readingText: E12_5_CE_EMAIL_TEXT,
  questionPool: E12_5_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-5-ce-email-2",
  readingText: E12_5_CE_EMAIL_2_TEXT,
  questionPool: E12_5_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-3",
  readingText: E12_5_CE_EMAIL_3_TEXT,
  questionPool: E12_5_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-4",
  readingText: E12_5_CE_EMAIL_4_TEXT,
  questionPool: E12_5_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-5",
  readingText: E12_5_CE_EMAIL_5_TEXT,
  questionPool: E12_5_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-6",
  readingText: E12_5_CE_EMAIL_6_TEXT,
  questionPool: E12_5_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-7",
  readingText: E12_5_CE_EMAIL_7_TEXT,
  questionPool: E12_5_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-8",
  readingText: E12_5_CE_EMAIL_8_TEXT,
  questionPool: E12_5_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-9",
  readingText: E12_5_CE_EMAIL_9_TEXT,
  questionPool: E12_5_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-10",
  readingText: E12_5_CE_EMAIL_10_TEXT,
  questionPool: E12_5_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-11",
  readingText: E12_5_CE_EMAIL_11_TEXT,
  questionPool: E12_5_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-12",
  readingText: E12_5_CE_EMAIL_12_TEXT,
  questionPool: E12_5_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-13",
  readingText: E12_5_CE_EMAIL_13_TEXT,
  questionPool: E12_5_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-14",
  readingText: E12_5_CE_EMAIL_14_TEXT,
  questionPool: E12_5_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-15",
  readingText: E12_5_CE_EMAIL_15_TEXT,
  questionPool: E12_5_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-16",
  readingText: E12_5_CE_EMAIL_16_TEXT,
  questionPool: E12_5_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-17",
  readingText: E12_5_CE_EMAIL_17_TEXT,
  questionPool: E12_5_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-18",
  readingText: E12_5_CE_EMAIL_18_TEXT,
  questionPool: E12_5_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-19",
  readingText: E12_5_CE_EMAIL_19_TEXT,
  questionPool: E12_5_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-20",
  readingText: E12_5_CE_EMAIL_20_TEXT,
  questionPool: E12_5_CE_EMAIL_20_POOL
}),
];

export const E12_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-5-pee-1",
    title: "Confirmer sa journée détente",
    situation: "L'espace bien-être vous demande de confirmer votre réservation.",
    sourceMessage: {
      from: "Espace bien-être du Lac",
      subject: "Votre réservation du 23 novembre",
      body: "Bonjour,\nMerci de confirmer votre réservation pour la journée détente du dimanche 23 novembre.\nVoulez-vous aussi réserver un massage ?\nL'équipe de l'Espace bien-être",
    },
    instruction: "Répondez à l'espace bien-être : confirmez votre venue, réservez un massage et posez une question sur ce qu'il faut apporter.",
    points: ["La confirmation", "La réservation du massage", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-2",
    title: "Prendre rendez-vous chez le coiffeur",
    situation: "Le salon de coiffure répond à votre message.",
    sourceMessage: {
      from: "Salon Coup d'Éclat",
      subject: "Votre demande de rendez-vous",
      body: "Bonjour,\nMerci pour votre message. Quand voulez-vous venir ?\nVoulez-vous une coupe simple ou aussi une couleur ?\nLe salon Coup d'Éclat",
    },
    instruction: "Répondez au salon : donnez deux disponibilités, expliquez ce que vous voulez et demandez le prix.",
    points: ["Deux disponibilités", "Ce que vous voulez", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-3",
    title: "Déplacer un rendez-vous",
    situation: "Le salon confirme votre rendez-vous, mais vous avez un empêchement.",
    sourceMessage: {
      from: "Salon Coup d'Éclat",
      subject: "Confirmation de votre rendez-vous",
      body: "Bonjour,\nNous confirmons votre rendez-vous de vendredi à 14 h pour une coupe.\nÀ vendredi !\nLe salon Coup d'Éclat",
    },
    instruction: "Répondez au salon : excusez-vous, expliquez votre empêchement et proposez un autre jour.",
    points: ["L'excuse", "L'empêchement", "Une autre proposition de date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-4",
    title: "Conseiller une amie stressée",
    situation: "Une amie dort mal et se sent stressée par son travail.",
    sourceMessage: {
      from: "Priya",
      subject: "Je suis fatiguée",
      body: "Salut,\nEn ce moment, je dors très mal et je suis stressée par mon travail.\nToi, tu as l'air en forme ! Qu'est-ce que tu fais pour te détendre ?\nPriya",
    },
    instruction: "Répondez à Priya : expliquez ce que vous faites pour vous détendre, donnez-lui deux conseils pour mieux dormir et proposez une activité ensemble.",
    points: ["Vos activités de détente", "Deux conseils pour dormir", "Une activité ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-5",
    title: "Raconter sa journée au spa",
    situation: "Un ami vous demande des nouvelles de votre journée détente.",
    sourceMessage: {
      from: "Samuel",
      subject: "Ta journée au spa",
      body: "Salut !\nAlors, cette journée détente dimanche ? C'était bien ?\nRaconte-moi !\nSamuel",
    },
    instruction: "Répondez à Samuel : racontez la journée, dites ce que vous avez préféré et recommandez (ou non) l'endroit.",
    points: ["Le récit de la journée", "Votre moment préféré", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-6",
    title: "Offrir un bon cadeau",
    situation: "Vous voulez offrir un cadeau bien-être à votre mère ; le centre vous répond.",
    sourceMessage: {
      from: "Espace bien-être du Lac",
      subject: "Nos bons cadeaux",
      body: "Bonjour,\nNous proposons des bons cadeaux : massage (80 francs) ou journée détente (120 francs).\nQue voulez-vous offrir ?\nL'équipe de l'Espace bien-être",
    },
    instruction: "Répondez au centre : choisissez un bon cadeau, expliquez pour qui c'est et demandez comment le recevoir.",
    points: ["Le bon choisi", "Pour qui c'est", "Une question sur la livraison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-7",
    title: "Le programme bien-être au travail",
    situation: "Le service des ressources humaines prépare un programme bien-être.",
    sourceMessage: {
      from: "Service RH",
      subject: "Programme bien-être des employés",
      body: "Bonjour,\nNous préparons un programme bien-être pour les employés : sport, relaxation, ateliers.\nQuelles activités vous intéressent ? À quel moment de la journée ?\nLe service RH",
    },
    instruction: "Répondez au service RH : proposez deux activités, expliquez pourquoi elles sont importantes pour vous et donnez le moment qui vous convient.",
    points: ["Deux activités", "Pourquoi c'est important", "Le moment qui vous convient"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-8",
    title: "Mieux dormir",
    situation: "La pharmacie répond à votre demande de conseils pour le sommeil.",
    sourceMessage: {
      from: "Pharmacie du Lac",
      subject: "Vos problèmes de sommeil",
      body: "Bonjour,\nVous nous avez demandé des conseils pour mieux dormir.\nPouvez-vous décrire votre sommeil ? À quelle heure vous couchez-vous ?\nBuvez-vous du café le soir ?\nVotre pharmacie",
    },
    instruction: "Répondez à la pharmacie : décrivez votre sommeil, parlez de vos habitudes du soir et posez une question sur les produits naturels.",
    points: ["Votre sommeil", "Vos habitudes du soir", "Une question sur les produits naturels"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-9",
    title: "Ralentir le rythme",
    situation: "Un ami trouve que vous travaillez trop.",
    sourceMessage: {
      from: "David",
      subject: "On ne te voit plus !",
      body: "Salut,\nTu travailles trop en ce moment ! On ne te voit plus.\nTu dois aussi penser à toi.\nOn se voit bientôt ?\nDavid",
    },
    instruction: "Répondez à David : reconnaissez que vous travaillez trop, présentez deux bonnes résolutions et proposez un rendez-vous.",
    points: ["Votre situation", "Deux bonnes résolutions", "Une proposition de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-10",
    title: "S'inscrire au cours de méditation",
    situation: "Le centre de yoga annonce ses nouveaux cours de méditation.",
    sourceMessage: {
      from: "Centre Zen et Forme",
      subject: "Nouveaux cours de méditation",
      body: "Bonjour,\nNos nouveaux cours de méditation commencent en janvier, le lundi à 19 h.\nLes débutants sont les bienvenus. Premier cours gratuit.\nLe Centre Zen et Forme",
    },
    instruction: "Répondez au centre : inscrivez-vous au cours d'essai, expliquez pourquoi vous voulez méditer et posez une question sur le prix de l'abonnement.",
    points: ["Votre inscription", "Pourquoi vous voulez méditer", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-11",
    title: "Répondre — bien-être (11)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-12",
    title: "Répondre — bien-être (12)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-13",
    title: "Répondre — bien-être (13)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-14",
    title: "Répondre — bien-être (14)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-15",
    title: "Répondre — bien-être (15)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-16",
    title: "Répondre — bien-être (16)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-17",
    title: "Répondre — bien-être (17)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-18",
    title: "Répondre — bien-être (18)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-19",
    title: "Répondre — bien-être (19)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-20",
    title: "Répondre — bien-être (20)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
