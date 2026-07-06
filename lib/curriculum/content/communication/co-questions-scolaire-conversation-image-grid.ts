import { buildConversationImageGrid } from "./co-questions-helpers";

/**
 * Association image ↔ dialogue — CO base scolaire (exercices 41–46).
 * Images : public/assets/expression/images-temp/conversation-{activité}-{a|b|c|d|e|f}.png
 */
const CORRECT_BY_CARD: Record<string, [number, number, number, number, number, number]> = {
  /** Maths (d), retard musique (f), voiture (a), distributeur (b) — leurre : cantine (c), ballon (e). */
  "41": [3, 4, 0, 1, 0, 2],
  /** Classe livres (a), bibliothèque ordi (b), leurre piste (c), tennis de table (d), leurre bureau (e), projet biblio (f). */
  "42": [2, 4, 0, 1, 0, 3],
  /** Feuille (a), prof sur banc (b), leurre gym (c), leurre géo (d), vélo (e), bibliothèque (f). */
  "43": [3, 1, 0, 0, 4, 2],
  /** À table (a), vacances mer/montagne (b), émission voitures (c), leurre chambre (d), courses voiture (e), leurre ordi (f). */
  "44": [3, 4, 2, 0, 1, 0],
  /** Visite amie (a), leurre vélo (b), leurre devoirs (c), télé (d), salade tomates (e), parapluie mouillé (f). */
  "45": [3, 0, 0, 4, 1, 2],
  /** Fleurs (a), leurre billets (b), sport baskets (c), météo pluie (d), leurre chambre (e), livre policier (f). */
  "46": [3, 0, 4, 1, 0, 2],
};

const IMAGE_DIR = "/assets/expression/images-temp";

export function buildScolaireConversationImageGrid(activity: string, seed: string, audio?: string) {
  const mapping = CORRECT_BY_CARD[activity];
  if (!mapping) return null;
  return buildConversationImageGrid(activity, mapping, seed, audio, IMAGE_DIR);
}
