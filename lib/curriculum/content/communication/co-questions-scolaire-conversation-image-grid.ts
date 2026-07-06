import { buildConversationImageGrid } from "./co-questions-helpers";

/**
 * Association image ↔ dialogue — CO base scolaire (exercices 41–42).
 * Images : public/assets/expression/images-temp/conversation-{activité}-{a|b|c|d|e|f}.webp
 */
const CORRECT_BY_CARD: Record<string, [number, number, number, number, number, number]> = {
  /** Maths (d), retard musique (f), voiture (a), distributeur (b) — leurre : cantine (c), ballon (e). */
  "41": [3, 4, 0, 1, 0, 2],
  /** Classe livres (a), bibliothèque ordi (b), leurre piste (c), tennis de table (d), leurre bureau (e), projet biblio (f). */
  "42": [2, 4, 0, 1, 0, 3],
};

const IMAGE_DIR = "/assets/expression/images-temp";

export function buildScolaireConversationImageGrid(activity: string, seed: string, audio?: string) {
  const mapping = CORRECT_BY_CARD[activity];
  if (!mapping) return null;
  return buildConversationImageGrid(activity, mapping, seed, audio, IMAGE_DIR);
}
