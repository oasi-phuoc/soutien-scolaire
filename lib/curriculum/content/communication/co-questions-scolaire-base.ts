import { buildPool, type COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_ANNONCES_BOOK, SCOLAIRE_MESSAGES_BOOK } from "./co-questions-scolaire-messages";

/** Pools QCM / saisie — CO base scolaire (généré depuis transcriptions). */

const SCOLAIRE_ANNONCE_30 = buildPool("base", "scolaire-annonce-30", [
  {
    id: "sa30-p", textQ: "Quel lieu public est concerné ?", text: ["La bibliothèque", "La poste", "Le stade"], textC: 2,
    img: ["La bibliothèque", "La poste", "Le stade"], imgC: 2,
    fillQ: "Lieu : ___", fill: "stade", fillA: ["stade"],
  },
  {
    id: "sa30-s", textQ: "Le message parle de sport ?", text: ["Oui", "Non", "De cuisine"], textC: 0,
    img: ["Oui", "Non", "De cuisine"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sa30-g", textQ: "Où entend-on ce message ?", text: ["À la radio uniquement", "Dans un lieu public", "Dans un cours"], textC: 1,
    img: ["À la radio uniqu…", "Dans un lieu pub…", "Dans un cours"], imgC: 1,
    fillQ: "C'est une ___ .", fill: "annonce", fillA: ["annonce"],
  }
]);

const SCOLAIRE_RADIO_34 = buildPool("base", "scolaire-radio-34", [
  {
    id: "sr34-m", textQ: "Le message parle de musique ?", text: ["Oui", "Non", "De cuisine"], textC: 0,
    img: ["Oui", "Non", "De cuisine"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sr34-c", textQ: "Quel thème culturel est évoqué ?", text: ["Le sport", "La culture", "La météo"], textC: 1,
    img: ["Le sport", "La culture", "La météo"], imgC: 1,
    fillQ: "Thème : ___", fill: "culture", fillA: ["culture"],
  },
  {
    id: "sr34-g", textQ: "Il s'agit d'une émission de…", text: ["Télévision", "Cinéma", "Radio"], textC: 2,
    img: ["Télévision", "Cinéma", "Radio"], imgC: 2,
    fillQ: "C'est à la ___ .", fill: "radio", fillA: ["radio"],
  }
]);

const SCOLAIRE_RADIO_37 = buildPool("base", "scolaire-radio-37", [
  {
    id: "sr37-m", textQ: "Le message parle de musique ?", text: ["Oui", "Non", "De cuisine"], textC: 0,
    img: ["Oui", "Non", "De cuisine"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sr37-c", textQ: "Quel thème culturel est évoqué ?", text: ["Le sport", "La culture", "La météo"], textC: 1,
    img: ["Le sport", "La culture", "La météo"], imgC: 1,
    fillQ: "Thème : ___", fill: "culture", fillA: ["culture"],
  },
  {
    id: "sr37-g", textQ: "Il s'agit d'une émission de…", text: ["Télévision", "Cinéma", "Radio"], textC: 2,
    img: ["Télévision", "Cinéma", "Radio"], imgC: 2,
    fillQ: "C'est à la ___ .", fill: "radio", fillA: ["radio"],
  }
]);

const SCOLAIRE_RADIO_39 = buildPool("base", "scolaire-radio-39", [
  {
    id: "sr39-r", textQ: "Parle-t-on de nourriture ?", text: ["Oui", "Non", "De transport"], textC: 0,
    img: ["Oui", "Non", "De transport"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sr39-p", textQ: "Quel prix est mentionné ?", text: ["5 euros", "50 euros", "12 euros"], textC: 2,
    img: ["5 euros", "50 euros", "12 euros"], imgC: 2,
    fillQ: "Prix : ___", fill: "12", fillA: ["12"],
  },
  {
    id: "sr39-g", textQ: "Il s'agit d'une émission de…", text: ["Télévision", "Cinéma", "Radio"], textC: 2,
    img: ["Télévision", "Cinéma", "Radio"], imgC: 2,
    fillQ: "C'est à la ___ .", fill: "radio", fillA: ["radio"],
  }
]);

export const CO_QUESTION_POOLS_SCOLAIRE_BASE: Record<string, COMultiQuestion[]> = {
  "base-scolaire-annonce-30": SCOLAIRE_ANNONCE_30,
  ...SCOLAIRE_ANNONCES_BOOK,
  ...SCOLAIRE_MESSAGES_BOOK,
  "base-scolaire-radio-34": SCOLAIRE_RADIO_34,
  "base-scolaire-radio-37": SCOLAIRE_RADIO_37,
  "base-scolaire-radio-39": SCOLAIRE_RADIO_39,
};
