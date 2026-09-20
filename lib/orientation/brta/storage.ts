import type { BrtaDraft, BrtaSession } from "./types";

const BRTA_DRAFT_KEY = "brta-session-draft-v1";
const BRTA_SESSIONS_KEY = "brta-sessions-history-v1";

/**
 * Charge le brouillon de session BRTA actuelle si disponible
 */
export function loadBrtaDraft(): BrtaDraft | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(BRTA_DRAFT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as BrtaDraft;
  } catch {
    return null;
  }
}

/**
 * Sauvegarde le brouillon de session BRTA
 */
export function saveBrtaDraft(draft: BrtaDraft | null): void {
  if (typeof window === "undefined") return;

  try {
    if (draft === null) {
      localStorage.removeItem(BRTA_DRAFT_KEY);
    } else {
      localStorage.setItem(BRTA_DRAFT_KEY, JSON.stringify(draft));
    }
  } catch {
    // Silently fail on quota exceeded or other errors
  }
}

/**
 * Charge l'historique de toutes les sessions complétées
 */
export function loadBrtaSessions(): BrtaSession[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(BRTA_SESSIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as BrtaSession[]) : [];
  } catch {
    return [];
  }
}

/**
 * Ajoute une session complétée à l'historique
 */
export function addBrtaSession(session: BrtaSession): void {
  if (typeof window === "undefined") return;

  try {
    const sessions = loadBrtaSessions();
    sessions.push(session);
    // Garder les 20 dernières sessions
    if (sessions.length > 20) {
      sessions.shift();
    }
    localStorage.setItem(BRTA_SESSIONS_KEY, JSON.stringify(sessions));
  } catch {
    // Silently fail
  }
}

/**
 * Récupère la dernière session complétée
 */
export function getLatestBrtaSession(): BrtaSession | null {
  const sessions = loadBrtaSessions();
  if (sessions.length === 0) return null;
  return sessions[sessions.length - 1];
}

/**
 * Récupère toutes les sessions avec un filtrage optionnel par date
 */
export function getBrtaSessionsByDateRange(
  startDate?: Date,
  endDate?: Date
): BrtaSession[] {
  const sessions = loadBrtaSessions();
  if (!startDate && !endDate) return sessions;

  return sessions.filter((session) => {
    const sessionDate = new Date(session.date);
    if (startDate && sessionDate < startDate) return false;
    if (endDate && sessionDate > endDate) return false;
    return true;
  });
}

/**
 * Efface toutes les données BRTA (sessions et brouillon)
 */
export function clearAllBrtaData(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(BRTA_DRAFT_KEY);
    localStorage.removeItem(BRTA_SESSIONS_KEY);
  } catch {
    // Silently fail
  }
}

/**
 * Exporte l'historique au format JSON (pour sauvegarde externe)
 */
export function exportBrtaHistory(): {
  sessions: BrtaSession[];
  exportedAt: string;
} {
  return {
    sessions: loadBrtaSessions(),
    exportedAt: new Date().toISOString(),
  };
}

/**
 * Importe l'historique depuis un export JSON
 */
export function importBrtaHistory(data: {
  sessions: BrtaSession[];
  exportedAt?: string;
}): boolean {
  if (typeof window === "undefined") return false;

  try {
    if (!Array.isArray(data.sessions)) return false;

    // Valider les sessions
    for (const session of data.sessions) {
      if (!session.id || !session.date || !Array.isArray(session.answers)) {
        return false;
      }
    }

    // Fusionner avec les sessions existantes
    const existing = loadBrtaSessions();
    const merged = [...existing, ...data.sessions];

    // Dédupliquer par ID
    const unique = Array.from(
      new Map(merged.map((s) => [s.id, s])).values()
    );

    // Garder les 20 dernières
    const sorted = unique
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, 20);

    localStorage.setItem(BRTA_SESSIONS_KEY, JSON.stringify(sorted));
    return true;
  } catch {
    return false;
  }
}

/**
 * Génère un identifiant unique de session
 */
export function generateSessionId(): string {
  return `brta-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Génère une graine aléatoire pour randomiser l'ordre des questions
 */
export function generateSeed(): number {
  return Math.floor(Math.random() * 1000000);
}

/**
 * Crée un brouillon initial de session
 */
export function createInitialDraft(seed = generateSeed()): BrtaDraft {
  return {
    sessionId: generateSessionId(),
    seed,
    step: "intro",
    currentQuestionIndex: 0,
    answers: [],
    scores: [],
    startedAt: Date.now(),
    updatedAt: new Date().toISOString(),
  };
}
