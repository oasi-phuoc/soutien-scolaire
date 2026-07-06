import { buildPool, type COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_MESSAGES_1_TO_4 } from "./co-questions-scolaire-messages";

/** Pools QCM / saisie — CO base scolaire (généré depuis transcriptions). */

const SCOLAIRE_ANNONCE_28 = buildPool("base", "scolaire-annonce-28", [
  {
    id: "sa28-f", textQ: "Un lieu est-il fermé ?", text: ["Oui", "Non", "On ne sait pas"], textC: 0,
    img: ["Oui", "Non", "On ne sait pas"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sa28-p", textQ: "Quel lieu public est concerné ?", text: ["Le zoo", "La bibliothèque", "La poste"], textC: 0,
    img: ["Le zoo", "La bibliothèque", "La poste"], imgC: 0,
    fillQ: "Lieu : ___", fill: "zoo", fillA: ["zoo"],
  },
  {
    id: "sa28-g", textQ: "Où entend-on ce message ?", text: ["À la radio uniquement", "Dans un lieu public", "Dans un cours"], textC: 1,
    img: ["À la radio uniqu…", "Dans un lieu pub…", "Dans un cours"], imgC: 1,
    fillQ: "C'est une ___ .", fill: "annonce", fillA: ["annonce"],
  }
]);

const SCOLAIRE_ANNONCE_29 = buildPool("base", "scolaire-annonce-29", [
  {
    id: "sa29-f", textQ: "Un lieu est-il fermé ?", text: ["Oui", "Non", "On ne sait pas"], textC: 0,
    img: ["Oui", "Non", "On ne sait pas"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sa29-t", textQ: "Le message concerne les transports ?", text: ["Oui", "Non", "La cuisine"], textC: 0,
    img: ["Oui", "Non", "La cuisine"], imgC: 0,
    fillQ: "C'est une info sur les ___ .", fill: "transports", fillA: ["transports"],
  },
  {
    id: "sa29-g", textQ: "Où entend-on ce message ?", text: ["À la radio uniquement", "Dans un lieu public", "Dans un cours"], textC: 1,
    img: ["À la radio uniqu…", "Dans un lieu pub…", "Dans un cours"], imgC: 1,
    fillQ: "C'est une ___ .", fill: "annonce", fillA: ["annonce"],
  }
]);

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

const SCOLAIRE_MESSAGE_11 = buildPool("base", "scolaire-message-11", [
  {
    id: "sm11-l", textQ: "Où propose-t-on de se retrouver ?", text: ["Au cinéma", "À la piscine", "À la bibliothèque"], textC: 2,
    img: ["Au cinéma", "À la piscine", "À la bibliothèque"], imgC: 2,
    fillQ: "On se retrouve à la ___ .", fill: "bibliothèque", fillA: ["bibliothèque"],
  },
  {
    id: "sm11-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm11-m", textQ: "Y a-t-il un repas ou un goûter ?", text: ["Oui", "Non", "Peut-être"], textC: 0,
    img: ["Oui", "Non", "Peut-être"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  }
]);

const SCOLAIRE_MESSAGE_13 = buildPool("base", "scolaire-message-13", [
  {
    id: "sm13-t", textQ: "À quelle heure a lieu l'activité ?", text: ["10 h", "11 h", "14 h 30"], textC: 1,
    img: ["10 h", "11 h", "14 h 30"], imgC: 1,
    fillQ: "L'activité est à ___ .", fill: "11h", fillA: ["11h"],
  },
  {
    id: "sm13-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm13-m", textQ: "Y a-t-il un repas ou un goûter ?", text: ["Oui", "Non", "Peut-être"], textC: 0,
    img: ["Oui", "Non", "Peut-être"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  }
]);

const SCOLAIRE_MESSAGE_14 = buildPool("base", "scolaire-message-14", [
  {
    id: "sm14-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm14-p", textQ: "Quel lieu de sortie est mentionné ?", text: ["La gare", "Le théâtre", "Le supermarché"], textC: 1,
    img: ["La gare", "Le théâtre", "Le supermarché"], imgC: 1,
    fillQ: "Ils vont au ___ .", fill: "théâtre", fillA: ["théâtre"],
  },
  {
    id: "sm14-g", textQ: "Quel type de message est-ce ?", text: ["Un message entre amis", "Une annonce à la radio", "Un bulletin météo"], textC: 0,
    img: ["Un message entre…", "Une annonce à la…", "Un bulletin météo"], imgC: 0,
    fillQ: "C'est un message ___ .", fill: "entre amis", fillA: ["entre amis"],
  }
]);

const SCOLAIRE_MESSAGE_15 = buildPool("base", "scolaire-message-15", [
  {
    id: "sm15-l", textQ: "Où propose-t-on de se retrouver ?", text: ["Au cinéma", "À la piscine", "À la bibliothèque"], textC: 2,
    img: ["Au cinéma", "À la piscine", "À la bibliothèque"], imgC: 2,
    fillQ: "On se retrouve à la ___ .", fill: "bibliothèque", fillA: ["bibliothèque"],
  },
  {
    id: "sm15-x", textQ: "Y a-t-il un problème ou un changement ?", text: ["Oui", "Non", "Un voyage"], textC: 0,
    img: ["Oui", "Non", "Un voyage"], imgC: 0,
    fillQ: "Il y a un ___ .", fill: "problème", fillA: ["problème"],
  },
  {
    id: "sm15-g", textQ: "Quel type de message est-ce ?", text: ["Un message entre amis", "Une annonce à la radio", "Un bulletin météo"], textC: 0,
    img: ["Un message entre…", "Une annonce à la…", "Un bulletin météo"], imgC: 0,
    fillQ: "C'est un message ___ .", fill: "entre amis", fillA: ["entre amis"],
  }
]);

const SCOLAIRE_MESSAGE_16 = buildPool("base", "scolaire-message-16", [
  {
    id: "sm16-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm16-m", textQ: "Y a-t-il un repas ou un goûter ?", text: ["Oui", "Non", "Peut-être"], textC: 0,
    img: ["Oui", "Non", "Peut-être"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sm16-g", textQ: "Quel type de message est-ce ?", text: ["Un message entre amis", "Une annonce à la radio", "Un bulletin météo"], textC: 0,
    img: ["Un message entre…", "Une annonce à la…", "Un bulletin météo"], imgC: 0,
    fillQ: "C'est un message ___ .", fill: "entre amis", fillA: ["entre amis"],
  }
]);

const SCOLAIRE_MESSAGE_17 = buildPool("base", "scolaire-message-17", [
  {
    id: "sm17-t", textQ: "À quelle heure a lieu l'activité ?", text: ["10 h", "18 h 30", "14 h 30"], textC: 1,
    img: ["10 h", "18 h 30", "14 h 30"], imgC: 1,
    fillQ: "L'activité est à ___ .", fill: "18h30", fillA: ["18h30"],
  },
  {
    id: "sm17-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm17-p", textQ: "Quel lieu de sortie est mentionné ?", text: ["La gare", "Le supermarché", "Le musée"], textC: 2,
    img: ["La gare", "Le supermarché", "Le musée"], imgC: 2,
    fillQ: "Ils vont au ___ .", fill: "musée", fillA: ["musée"],
  }
]);

const SCOLAIRE_MESSAGE_19 = buildPool("base", "scolaire-message-19", [
  {
    id: "sm19-t", textQ: "À quelle heure a lieu l'activité ?", text: ["10 h", "17 h 30", "14 h 30"], textC: 1,
    img: ["10 h", "17 h 30", "14 h 30"], imgC: 1,
    fillQ: "L'activité est à ___ .", fill: "17h30", fillA: ["17h30"],
  },
  {
    id: "sm19-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm19-g", textQ: "Quel type de message est-ce ?", text: ["Un message entre amis", "Une annonce à la radio", "Un bulletin météo"], textC: 0,
    img: ["Un message entre…", "Une annonce à la…", "Un bulletin météo"], imgC: 0,
    fillQ: "C'est un message ___ .", fill: "entre amis", fillA: ["entre amis"],
  }
]);

const SCOLAIRE_MESSAGE_6 = buildPool("base", "scolaire-message-6", [
  {
    id: "sm6-a", textQ: "Quel sport est mentionné ?", text: ["Tennis", "Basket", "Football"], textC: 2,
    img: ["Tennis", "Basket", "Football"], imgC: 2,
    fillQ: "Il s'agit de ___ .", fill: "football", fillA: ["football"],
  },
  {
    id: "sm6-m", textQ: "Y a-t-il un repas ou un goûter ?", text: ["Oui", "Non", "Peut-être"], textC: 0,
    img: ["Oui", "Non", "Peut-être"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sm6-g", textQ: "Quel type de message est-ce ?", text: ["Un message entre amis", "Une annonce à la radio", "Un bulletin météo"], textC: 0,
    img: ["Un message entre…", "Une annonce à la…", "Un bulletin météo"], imgC: 0,
    fillQ: "C'est un message ___ .", fill: "entre amis", fillA: ["entre amis"],
  }
]);

const SCOLAIRE_MESSAGE_8 = buildPool("base", "scolaire-message-8", [
  {
    id: "sm8-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm8-x", textQ: "Y a-t-il un problème ou un changement ?", text: ["Oui", "Non", "Un voyage"], textC: 0,
    img: ["Oui", "Non", "Un voyage"], imgC: 0,
    fillQ: "Il y a un ___ .", fill: "problème", fillA: ["problème"],
  },
  {
    id: "sm8-g", textQ: "Quel type de message est-ce ?", text: ["Un message entre amis", "Une annonce à la radio", "Un bulletin météo"], textC: 0,
    img: ["Un message entre…", "Une annonce à la…", "Un bulletin météo"], imgC: 0,
    fillQ: "C'est un message ___ .", fill: "entre amis", fillA: ["entre amis"],
  }
]);

const SCOLAIRE_MESSAGE_9 = buildPool("base", "scolaire-message-9", [
  {
    id: "sm9-t", textQ: "À quelle heure a lieu l'activité ?", text: ["10 h", "16 h 30", "14 h 30"], textC: 1,
    img: ["10 h", "16 h 30", "14 h 30"], imgC: 1,
    fillQ: "L'activité est à ___ .", fill: "16h30", fillA: ["16h30"],
  },
  {
    id: "sm9-e", textQ: "Le message parle surtout de…", text: ["Les vacances", "L'école", "Le travail"], textC: 1,
    img: ["Les vacances", "L'école", "Le travail"], imgC: 1,
    fillQ: "Le sujet est l'___ .", fill: "école", fillA: ["école"],
  },
  {
    id: "sm9-p", textQ: "Quel lieu de sortie est mentionné ?", text: ["La gare", "La piscine", "Le supermarché"], textC: 1,
    img: ["La gare", "La piscine", "Le supermarché"], imgC: 1,
    fillQ: "Ils vont au ___ .", fill: "piscine", fillA: ["piscine"],
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
  "base-scolaire-annonce-28": SCOLAIRE_ANNONCE_28,
  "base-scolaire-annonce-29": SCOLAIRE_ANNONCE_29,
  "base-scolaire-annonce-30": SCOLAIRE_ANNONCE_30,
  "base-scolaire-message-11": SCOLAIRE_MESSAGE_11,
  "base-scolaire-message-13": SCOLAIRE_MESSAGE_13,
  "base-scolaire-message-14": SCOLAIRE_MESSAGE_14,
  "base-scolaire-message-15": SCOLAIRE_MESSAGE_15,
  "base-scolaire-message-16": SCOLAIRE_MESSAGE_16,
  "base-scolaire-message-17": SCOLAIRE_MESSAGE_17,
  "base-scolaire-message-19": SCOLAIRE_MESSAGE_19,
  ...SCOLAIRE_MESSAGES_1_TO_4,
  "base-scolaire-message-6": SCOLAIRE_MESSAGE_6,
  "base-scolaire-message-8": SCOLAIRE_MESSAGE_8,
  "base-scolaire-message-9": SCOLAIRE_MESSAGE_9,
  "base-scolaire-radio-34": SCOLAIRE_RADIO_34,
  "base-scolaire-radio-37": SCOLAIRE_RADIO_37,
  "base-scolaire-radio-39": SCOLAIRE_RADIO_39,
};
