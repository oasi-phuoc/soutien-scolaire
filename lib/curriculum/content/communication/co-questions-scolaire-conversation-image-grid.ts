import { buildConversationImageGrid } from "./co-questions-helpers";

/**
 * Association image ↔ dialogue — CO base scolaire (exercices 41–46).
 * Images : public/assets/expression/co/base/scolaire/conversation-{activité}-{a|b|c|d|e|f}.webp
 */
const CORRECT_BY_CARD: Record<string, [number, number, number, number, number, number]> = {
  /** Maths (d), retard musique (f), voiture (a), distributeur (b) — leurre : cantine (c), volleyball (e). */
  "41": [3, 4, 0, 1, 0, 2],
  /** Leurre classe (a), biblio histoire (b), course EPS (c), tennis de table (d), leurre basket (e), salle info (f). */
  "42": [0, 2, 4, 1, 0, 3],
  /** Feuille (a), prof sur banc (b), vélo (c), leurre géo (d), leurre cahier (e), bibliothèque (f). */
  "43": [3, 1, 4, 0, 0, 2],
  /** À table (a), vacances mer/montagne (b), émission voitures (c), leurre chambre (d), courses voiture (e), leurre ordi (f). */
  "44": [3, 4, 2, 0, 1, 0],
  /** Visite amie (a), leurre vélo (b), leurre devoirs (c), télé (d), salade tomates (e), parapluie mouillé (f). */
  "45": [3, 0, 0, 4, 1, 2],
  /** Fleurs (a), leurre billets (b), sport baskets (c), météo pluie (d), leurre chambre (e), livre policier (f). */
  "46": [3, 0, 4, 1, 0, 2],
};

const IMAGE_DIR = "/assets/expression/co/base/scolaire";

export function buildScolaireConversationImageGrid(activity: string, seed: string, audio?: string) {
  const mapping = CORRECT_BY_CARD[activity];
  if (!mapping) return null;
  return buildConversationImageGrid(activity, mapping, seed, audio, IMAGE_DIR);
}
