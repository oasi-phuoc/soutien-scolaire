export type COConversationMatchDef = {
  situations: [string, string, string, string, string, string];
  /** Situation correcte pour chaque dialogue (colonnes 1 à 4). */
  correctByDialogue: [string, string, string, string];
};

export const CO_CONVERSATION_MATCH: Record<string, COConversationMatchDef> = {
  "moyen-conversation-38": {
    situations: [
      "Demander un service",
      "S'excuser",
      "Proposer une sortie",
      "Féliciter quelqu'un",
      "Confirmer un rendez-vous",
      "Se renseigner sur les horaires",
    ],
    correctByDialogue: [
      "Se renseigner sur les horaires",
      "Demander un service",
      "Confirmer un rendez-vous",
      "S'excuser",
    ],
  },
  "moyen-conversation-39": {
    situations: [
      "Demander des informations",
      "Décrire une personne",
      "Prendre un rendez-vous",
      "Refuser une invitation",
      "Proposer une sortie",
      "Signaler un problème",
    ],
    correctByDialogue: [
      "Proposer une sortie",
      "Demander des informations",
      "Signaler un problème",
      "Décrire une personne",
    ],
  },
  "moyen-conversation-40": {
    situations: [
      "Annoncer une nouvelle",
      "Refuser quelque chose",
      "Annuler un rendez-vous",
      "Demander un service",
      "Donner un conseil",
      "Commander quelque chose",
    ],
    correctByDialogue: [
      "Commander quelque chose",
      "Donner un conseil",
      "Demander un service",
      "Annoncer une nouvelle",
    ],
  },
  "moyen-conversation-41": {
    situations: [
      "Annoncer un événement",
      "Demander son chemin",
      "Conseiller quelqu'un",
      "Donner ses impressions",
      "Demander des nouvelles",
      "Annuler un rendez-vous",
    ],
    correctByDialogue: [
      "Demander son chemin",
      "Demander des nouvelles",
      "Annuler un rendez-vous",
      "Donner ses impressions",
    ],
  },
  "moyen-conversation-42": {
    situations: [
      "Exprimer ses goûts",
      "Se renseigner sur des horaires",
      "Demander un service",
      "Signaler un problème",
      "Commander quelque chose",
      "Proposer une activité",
    ],
    correctByDialogue: [
      "Commander quelque chose",
      "Proposer une activité",
      "Exprimer ses goûts",
      "Se renseigner sur des horaires",
    ],
  },
  "moyen-conversation-43": {
    situations: [
      "S'excuser",
      "Se renseigner sur des horaires",
      "Conseiller quelqu'un",
      "Signaler un problème",
      "Commander quelque chose",
      "Proposer de l'aide",
    ],
    correctByDialogue: [
      "Signaler un problème",
      "Se renseigner sur des horaires",
      "S'excuser",
      "Proposer de l'aide",
    ],
  },
};
