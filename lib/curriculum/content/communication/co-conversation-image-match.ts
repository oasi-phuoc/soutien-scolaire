import { buildImageMatchTask, type COImageMatchCard, type COImageMatchTask } from "./co-questions-helpers";
import type { COConversationMatchDef } from "./co-questions-moyen-conversation-match";
import { remapExpressionImagePath } from "@/lib/curriculum/word-image-resolver";

/**
 * Illustration (public/assets/expression/images/scene) pour chaque type de
 * situation de conversation. Les mêmes situations réutilisent la même image.
 */
const SITUATION_IMAGE: Record<string, string> = {
  "Demander un service": "demander-service",
  "S'excuser": "s-excuser",
  "Proposer une sortie": "proposer-sortie",
  "Féliciter quelqu'un": "feliciter",
  "Confirmer un rendez-vous": "confirmer-rdv",
  "Se renseigner sur les horaires": "horaires",
  "Se renseigner sur des horaires": "horaires",
  "Demander des informations": "demander-informations",
  "Décrire une personne": "decrire-personne",
  "Prendre un rendez-vous": "prendre-rdv",
  "Refuser une invitation": "refuser",
  "Refuser quelque chose": "refuser",
  "Refuser une sortie": "refuser",
  "Signaler un problème": "signaler-probleme",
  "Annoncer une nouvelle": "annoncer-nouvelle",
  "Annuler un rendez-vous": "annuler-rdv",
  "Donner un conseil": "conseiller",
  "Conseiller quelqu'un": "conseiller",
  "Commander quelque chose": "commander",
  "Annoncer un événement": "annoncer-evenement",
  "Demander son chemin": "demander-chemin",
  "Donner ses impressions": "donner-impressions",
  "Demander des nouvelles": "demander-nouvelles",
  "Exprimer ses goûts": "exprimer-gouts",
  "Proposer une activité": "proposer-activite",
  "Proposer de l'aide": "proposer-aide",
  "Prendre congé de quelqu'un": "prendre-conge",
  "Donner des indications": "donner-indications",
  "Présenter quelqu'un": "presenter",
  // CO moyen scolaire — variantes du livre (réutilisent les illustrations existantes)
  "Acheter des fournitures scolaires": "demander-service",
  "Aider quelqu'un": "proposer-aide",
  "Chercher un objet": "demander-service",
  "Choisir un programme": "proposer-activite",
  "Commander au restaurant": "commander",
  "Demander de l'aide": "proposer-aide",
  "Demander de l'aide pour les devoirs": "proposer-aide",
  "Demander des informations pratiques": "demander-informations",
  "Demander l'horaire d'un cours": "horaires",
  "Demander le prix au marché": "demander-informations",
  "Demander un avis sur des vêtements": "donner-impressions",
  "Demander un conseil": "conseiller",
  "Demander un renseignement sur les transports": "demander-informations",
  "Demander une information": "demander-informations",
  "Donner son avis sur un film": "donner-impressions",
  "Donner son avis sur une pièce de théâtre": "donner-impressions",
  "Donner un ordre": "donner-indications",
  "Donner une impression": "donner-impressions",
  "Donner une information": "annoncer-nouvelle",
  "Décrire le professeur": "decrire-personne",
  "Décrire quelqu'un": "decrire-personne",
  "Décrire quelque chose": "decrire-personne",
  "Exprimer ses goûts alimentaires": "exprimer-gouts",
  "Faire un choix": "proposer-activite",
  "Féliciter un ami": "feliciter",
  "Organiser avec qui manger": "proposer-sortie",
  "Parler d'un voyage scolaire": "annoncer-evenement",
  "Parler d'une sortie sportive": "proposer-activite",
  "Poser une question sur le devoir": "demander-informations",
  "Prendre des nouvelles de quelqu'un": "demander-nouvelles",
  "Proposer de jouer au basket": "proposer-activite",
  "Proposer une activité après le repas": "proposer-activite",
  "Présenter des excuses": "s-excuser",
  "Prêter quelque chose à quelqu'un": "proposer-aide",
  "Refuser une proposition": "refuser",
  "Remercier quelqu'un": "feliciter",
  "S'informer sur un prix": "demander-informations",
  "Se mettre d'accord sur quelque chose": "confirmer-rdv",
  "Se renseigner sur la météo": "demander-informations",
  "Se renseigner sur le menu": "demander-informations",
  "Être en colère": "signaler-probleme",
};

function imagePath(slug: string): string | null {
  return remapExpressionImagePath(`/expression/co/situations/${slug}.webp`);
}

/**
 * Construit une tâche « associer les dialogues aux images » à partir d'une
 * définition de conversation (6 situations, 4 dialogues corrects). Renvoie null
 * si une situation n'a pas d'illustration disponible.
 */
export function buildConversationImageMatch(def: COConversationMatchDef, seed: string): COImageMatchTask | null {
  const cards: COImageMatchCard[] = [];
  for (const situation of def.situations) {
    const slug = SITUATION_IMAGE[situation];
    if (!slug) return null;
    const image = imagePath(slug);
    if (!image) return null;
    const dialogue = def.correctByDialogue.indexOf(situation);
    cards.push({
      image,
      label: situation,
      correct: dialogue >= 0 ? dialogue + 1 : null,
    });
  }
  return buildImageMatchTask(cards, seed, def.correctByDialogue.length);
}
