import { assertConversationMatchDef } from "./co-questions-helpers";

export type COConversationMatchDef = {
  situations: [string, string, string, string, string, string];
  /** Situation correcte pour chaque dialogue (colonnes 1 à 4). */
  correctByDialogue: [string, string, string, string];
};

/** Grilles d'association dialogue ↔ situation — CO moyen scolaire (thèmes du livre). */
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
      "Être en colère",
      "Prendre des nouvelles de quelqu'un",
      "Décrire quelque chose",
      "Demander un conseil",
      "Refuser quelque chose",
      "Proposer une sortie",
    ],
    correctByDialogue: [
      "Demander un conseil",
      "Décrire quelque chose",
      "Être en colère",
      "Refuser quelque chose",
    ],
  },
  "moyen-scolaire-conversation-20": {
    situations: [
      "Présenter quelqu'un",
      "Demander un renseignement sur les transports",
      "Demander un service",
      "Présenter des excuses",
      "Prêter quelque chose à quelqu'un",
      "Proposer une activité",
    ],
    correctByDialogue: [
      "Demander un service",
      "Prêter quelque chose à quelqu'un",
      "Présenter quelqu'un",
      "Demander un renseignement sur les transports",
    ],
  },
  "moyen-scolaire-conversation-22": {
    situations: [
      "Remercier quelqu'un",
      "Donner une information",
      "Présenter quelqu'un",
      "Donner une impression",
      "Demander son chemin",
      "Commander au restaurant",
    ],
    correctByDialogue: [
      "Donner une information",
      "Donner une impression",
      "Remercier quelqu'un",
      "Présenter quelqu'un",
    ],
  },
  "moyen-scolaire-conversation-25": {
    situations: [
      "S'excuser",
      "Faire un choix",
      "Aider quelqu'un",
      "Donner ses impressions",
      "S'informer sur un prix",
      "Demander des informations",
    ],
    correctByDialogue: [
      "Aider quelqu'un",
      "Demander des informations",
      "Faire un choix",
      "Donner ses impressions",
    ],
  },
  "moyen-scolaire-conversation-29": {
    situations: [
      "Féliciter quelqu'un",
      "Choisir un programme",
      "Se renseigner sur la météo",
      "Chercher un objet",
      "Annuler un rendez-vous",
      "Proposer de l'aide",
    ],
    correctByDialogue: [
      "Chercher un objet",
      "Choisir un programme",
      "Proposer de l'aide",
      "Se renseigner sur la météo",
    ],
  },
  "moyen-scolaire-conversation-30": {
    situations: [
      "Demander un service",
      "Décrire quelqu'un",
      "Refuser une proposition",
      "Donner ses impressions",
      "Proposer une sortie",
      "Demander son chemin",
    ],
    correctByDialogue: [
      "Donner ses impressions",
      "Refuser une proposition",
      "Décrire quelqu'un",
      "Demander un service",
    ],
  },
  "moyen-scolaire-conversation-32": {
    situations: [
      "Donner un ordre",
      "Refuser une proposition",
      "Donner une impression",
      "Présenter quelqu'un",
      "Demander un service",
      "Proposer une activité",
    ],
    correctByDialogue: [
      "Refuser une proposition",
      "Présenter quelqu'un",
      "Donner un ordre",
      "Donner une impression",
    ],
  },
  "moyen-scolaire-conversation-33": {
    situations: [
      "Se mettre d'accord sur quelque chose",
      "Demander une information",
      "Refuser une proposition",
      "S'excuser",
      "Proposer une sortie",
      "Donner un conseil",
    ],
    correctByDialogue: [
      "Se mettre d'accord sur quelque chose",
      "S'excuser",
      "Demander une information",
      "Refuser une proposition",
    ],
  },
};

for (const [id, def] of Object.entries(CO_CONVERSATION_MATCH_SCOLAIRE_MOYEN)) {
  assertConversationMatchDef(def.situations, def.correctByDialogue, id);
}
