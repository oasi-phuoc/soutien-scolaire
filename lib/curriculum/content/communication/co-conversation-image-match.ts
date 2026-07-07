import { buildImageMatchTask, type COImageMatchCard, type COImageMatchTask } from "./co-questions-helpers";
import type { COConversationMatchDef } from "./co-questions-moyen-conversation-match";

/**
 * Illustration (dossier public/expression/co/situations) pour chaque type de
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
};

function imagePath(slug: string): string {
  return `/expression/co/situations/${slug}.webp`;
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
    const dialogue = def.correctByDialogue.indexOf(situation);
    cards.push({
      image: imagePath(slug),
      label: situation,
      correct: dialogue >= 0 ? dialogue + 1 : null,
    });
  }
  return buildImageMatchTask(cards, seed, def.correctByDialogue.length);
}
