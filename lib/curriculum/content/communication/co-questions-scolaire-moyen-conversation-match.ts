import { assertConversationMatchDef } from "./co-questions-helpers";

export type COConversationMatchDef = {
  situations: [string, string, string, string, string, string];
  /** Situation correcte pour chaque dialogue (colonnes 1 à 4). */
  correctByDialogue: [string, string, string, string];
};

/** Grilles d'association dialogue ↔ situation — CO moyen scolaire. */
export const CO_CONVERSATION_MATCH_SCOLAIRE_MOYEN: Record<string, COConversationMatchDef> = {
  "moyen-scolaire-conversation-1": {
    situations: [
      "Donner son avis sur une pièce de théâtre",
      "Proposer de jouer au basket",
      "Décrire le professeur",
      "Demander l'horaire d'un cours",
      "Refuser une invitation",
      "Commander au restaurant",
    ],
    correctByDialogue: [
      "Donner son avis sur une pièce de théâtre",
      "Proposer de jouer au basket",
      "Décrire le professeur",
      "Demander l'horaire d'un cours",
    ],
  },
  "moyen-scolaire-conversation-6": {
    situations: [
      "Demander son chemin",
      "Parler d'un voyage scolaire",
      "Demander de l'aide pour les devoirs",
      "Demander des informations pratiques",
      "Refuser une sortie",
      "Féliciter un ami",
    ],
    correctByDialogue: [
      "Demander son chemin",
      "Parler d'un voyage scolaire",
      "Demander de l'aide pour les devoirs",
      "Demander des informations pratiques",
    ],
  },
  "moyen-scolaire-conversation-7": {
    situations: [
      "Demander un service",
      "Demander des explications au professeur",
      "S'excuser d'être en retard",
      "Présenter une nouvelle personne",
      "Refuser une invitation",
      "Proposer une sortie",
    ],
    correctByDialogue: [
      "Demander un service",
      "Demander des explications au professeur",
      "S'excuser d'être en retard",
      "Présenter une nouvelle personne",
    ],
  },
  "moyen-scolaire-conversation-8": {
    situations: [
      "Demander un service",
      "Refuser une invitation",
      "Poser une question sur le devoir",
      "Parler d'une sortie sportive",
      "Donner son avis sur un film",
      "Commander au restaurant",
    ],
    correctByDialogue: [
      "Demander un service",
      "Refuser une invitation",
      "Poser une question sur le devoir",
      "Parler d'une sortie sportive",
    ],
  },
  "moyen-scolaire-conversation-12": {
    situations: [
      "Se renseigner sur le menu",
      "Organiser avec qui manger",
      "Proposer une activité après le repas",
      "Exprimer ses goûts alimentaires",
      "Demander son chemin",
      "Acheter des fournitures scolaires",
    ],
    correctByDialogue: [
      "Se renseigner sur le menu",
      "Organiser avec qui manger",
      "Proposer une activité après le repas",
      "Exprimer ses goûts alimentaires",
    ],
  },
  "moyen-scolaire-conversation-15": {
    situations: [
      "Demander son chemin",
      "Demander de l'aide",
      "Demander un avis sur des vêtements",
      "Demander le prix au marché",
      "Refuser une invitation",
      "Proposer une sortie",
    ],
    correctByDialogue: [
      "Demander son chemin",
      "Demander de l'aide",
      "Demander un avis sur des vêtements",
      "Demander le prix au marché",
    ],
  },
  "moyen-scolaire-conversation-18": {
    situations: [
      "Donner un conseil pour un cadeau",
      "Décrire un objet",
      "Exprimer du mécontentement",
      "Refuser quelque chose à manger",
      "Demander des informations",
      "Prendre un rendez-vous",
    ],
    correctByDialogue: [
      "Donner un conseil pour un cadeau",
      "Décrire un objet",
      "Exprimer du mécontentement",
      "Refuser quelque chose à manger",
    ],
  },
  "moyen-scolaire-conversation-20": {
    situations: [
      "Demander un service",
      "Proposer son aide",
      "Présenter quelqu'un",
      "Demander des informations sur le bus",
      "Refuser une invitation",
      "Donner son avis sur un film",
    ],
    correctByDialogue: [
      "Demander un service",
      "Proposer son aide",
      "Présenter quelqu'un",
      "Demander des informations sur le bus",
    ],
  },
  "moyen-scolaire-conversation-22": {
    situations: [
      "Parler d'un concert",
      "Donner son avis sur un film",
      "Remercier pour un prêt",
      "Présenter quelqu'un",
      "Demander son chemin",
      "Commander au restaurant",
    ],
    correctByDialogue: [
      "Parler d'un concert",
      "Donner son avis sur un film",
      "Remercier pour un prêt",
      "Présenter quelqu'un",
    ],
  },
  "moyen-scolaire-conversation-25": {
    situations: [
      "Demander son chemin",
      "Demander des informations sur un film",
      "Choisir un film",
      "Donner son avis sur un film",
      "Refuser une invitation",
      "Acheter des billets",
    ],
    correctByDialogue: [
      "Demander son chemin",
      "Demander des informations sur un film",
      "Choisir un film",
      "Donner son avis sur un film",
    ],
  },
  "moyen-scolaire-conversation-29": {
    situations: [
      "Chercher un objet perdu",
      "Choisir une émission à la télé",
      "Proposer de l'aide en cuisine",
      "Parler de la météo",
      "Refuser une invitation",
      "Demander son chemin",
    ],
    correctByDialogue: [
      "Chercher un objet perdu",
      "Choisir une émission à la télé",
      "Proposer de l'aide en cuisine",
      "Parler de la météo",
    ],
  },
  "moyen-scolaire-conversation-30": {
    situations: [
      "Complimenter un plat",
      "Regarder un match de foot",
      "Décrire une personne",
      "Demander un service",
      "Refuser une invitation",
      "Proposer une sortie",
    ],
    correctByDialogue: [
      "Complimenter un plat",
      "Regarder un match de foot",
      "Décrire une personne",
      "Demander un service",
    ],
  },
  "moyen-scolaire-conversation-32": {
    situations: [
      "Organiser le retour",
      "Présenter un ami",
      "Obéir à un parent",
      "Complimenter un plat",
      "Demander son chemin",
      "Refuser une invitation",
    ],
    correctByDialogue: [
      "Organiser le retour",
      "Présenter un ami",
      "Obéir à un parent",
      "Complimenter un plat",
    ],
  },
  "moyen-scolaire-conversation-33": {
    situations: [
      "Choisir un film",
      "Exprimer une déception",
      "Demander l'heure du repas",
      "Discuter des vacances",
      "Demander son chemin",
      "Proposer une sortie",
    ],
    correctByDialogue: [
      "Choisir un film",
      "Exprimer une déception",
      "Demander l'heure du repas",
      "Discuter des vacances",
    ],
  },
};

for (const [id, def] of Object.entries(CO_CONVERSATION_MATCH_SCOLAIRE_MOYEN)) {
  assertConversationMatchDef(def.situations, def.correctByDialogue, id);
}
