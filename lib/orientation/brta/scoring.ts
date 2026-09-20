import type {
  BrtaDomain,
  BrtaScore,
  BrtaSessionAnswer,
  BrtaResult,
  BrtaSession,
} from "./types";
import { BRTA_DOMAIN_ORDER, BRTA_DOMAINS } from "./types";

/**
 * Calcule les scores par domaine à partir des réponses
 */
export function computeScores(answers: BrtaSessionAnswer[]): BrtaScore[] {
  const scoresByDomain: Record<BrtaDomain, { correct: number; total: number }> = {
    reasoning: { correct: 0, total: 0 },
    verbal: { correct: 0, total: 0 },
    numeric: { correct: 0, total: 0 },
    spatial: { correct: 0, total: 0 },
    attention: { correct: 0, total: 0 },
    memory: { correct: 0, total: 0 },
  };

  // Compter les réponses correctes par domaine
  for (const answer of answers) {
    const domain = answer.domain as BrtaDomain;
    if (domain in scoresByDomain) {
      scoresByDomain[domain].total += 1;
      if (answer.isCorrect) {
        scoresByDomain[domain].correct += 1;
      }
    }
  }

  // Générer les scores normalisés
  const scores: BrtaScore[] = BRTA_DOMAIN_ORDER.map((domain) => {
    const { correct, total } = scoresByDomain[domain];
    const percent = total > 0 ? (correct / total) * 100 : 0;
    // Normalisation : transformer le pourcentage en score 0-100
    const normalized = Math.round(percent);

    return {
      domain,
      correct,
      total,
      percent,
      normalized,
    };
  });

  return scores;
}

/**
 * Calcule le score global (moyenne des scores normalisés)
 */
export function computeOverallScore(scores: BrtaScore[]): number {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, score) => acc + (score.normalized ?? 0), 0);
  return Math.round(sum / scores.length);
}

/**
 * Classe les scores en trois catégories : fort, moyen, faible
 */
export function categorizePerformance(
  score: number
): "strong" | "average" | "weak" {
  if (score >= 75) return "strong";
  if (score >= 50) return "average";
  return "weak";
}

/**
 * Génère un profil de résultats avec recommandations
 */
export function generateResult(session: BrtaSession): BrtaResult {
  const scores = session.scores;
  const strengths: BrtaDomain[] = [];
  const areasForImprovement: BrtaDomain[] = [];

  // Trier les domaines par score décroissant
  const sortedScores = [...scores].sort(
    (a, b) => (b.normalized ?? 0) - (a.normalized ?? 0)
  );

  // Identifier forces et faiblesses
  sortedScores.forEach((score) => {
    if ((score.normalized ?? 0) >= 70) {
      strengths.push(score.domain);
    } else if ((score.normalized ?? 0) < 50) {
      areasForImprovement.push(score.domain);
    }
  });

  // Générer le profil synthétique
  let overallProfile = "";
  const overallScore = session.overallScore;

  if (overallScore >= 80) {
    overallProfile =
      "Excellent profil d'aptitudes. Vous maîtrisez bien les domaines évalués.";
  } else if (overallScore >= 65) {
    overallProfile =
      "Bon profil d'aptitudes. Vous avez de solides compétences avec quelques axes à développer.";
  } else if (overallScore >= 50) {
    overallProfile =
      "Profil équilibré. Vous possédez les compétences de base dans tous les domaines.";
  } else {
    overallProfile =
      "Profil hétérogène. Certains domaines demandent plus de travail.";
  }

  // Générer des recommandations spécifiques
  const recommendations: string[] = [];

  scores.forEach((score) => {
    const domain = BRTA_DOMAINS[score.domain];
    const normalized = score.normalized ?? 0;

    if (normalized >= 80) {
      recommendations.push(
        `${domain.label} : Vous excellez. Explorez des défis plus complexes.`
      );
    } else if (normalized >= 60) {
      recommendations.push(
        `${domain.label} : Bon niveau. Consolidez vos acquis avec des exercices réguliers.`
      );
    } else {
      recommendations.push(
        `${domain.label} : À développer. Envisagez des ressources pédagogiques spécifiques.`
      );
    }
  });

  return {
    session,
    profile: {
      strengths,
      areasForImprovement,
      overallProfile,
      recommendations,
    },
  };
}

/**
 * Calcule des statistiques de progression si plusieurs sessions existent
 */
export function computeProgressionStats(
  sessions: BrtaSession[]
): {
  trend: "improving" | "stable" | "declining";
  improvement: number;
  consistency: number;
} {
  if (sessions.length < 2) {
    return { trend: "stable", improvement: 0, consistency: 100 };
  }

  const sorted = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const first = sorted[0].overallScore;
  const last = sorted[sorted.length - 1].overallScore;
  const improvement = last - first;

  // Calculer la cohérence (faible variance = haute cohérence)
  const scores = sorted.map((s) => s.overallScore);
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
  const variance =
    scores.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / scores.length;
  const stdDev = Math.sqrt(variance);
  const consistency = Math.max(0, 100 - stdDev * 5); // Échelle empirique

  let trend: "improving" | "stable" | "declining" = "stable";
  if (improvement > 5) trend = "improving";
  else if (improvement < -5) trend = "declining";

  return {
    trend,
    improvement: Math.round(improvement * 10) / 10,
    consistency: Math.round(consistency),
  };
}

/**
 * Compare deux sessions et identifie les changements
 */
export function compareSessions(
  sessionA: BrtaSession,
  sessionB: BrtaSession
): {
  improved: BrtaDomain[];
  declined: BrtaDomain[];
  stable: BrtaDomain[];
} {
  const improved: BrtaDomain[] = [];
  const declined: BrtaDomain[] = [];
  const stable: BrtaDomain[] = [];

  const scoresA = sessionA.scores;
  const scoresB = sessionB.scores;

  for (const scoreB of scoresB) {
    const scoreA = scoresA.find((s) => s.domain === scoreB.domain);
    if (!scoreA) continue;

    const change = (scoreB.normalized ?? 0) - (scoreA.normalized ?? 0);

    if (Math.abs(change) <= 5) {
      stable.push(scoreB.domain);
    } else if (change > 5) {
      improved.push(scoreB.domain);
    } else {
      declined.push(scoreB.domain);
    }
  }

  return { improved, declined, stable };
}

/**
 * Exporte les résultats en format lisible
 */
export function exportSessionSummary(session: BrtaSession): string {
  const result = generateResult(session);
  let summary = `RÉSULTATS BRTA — ${new Date(session.date).toLocaleDateString("fr-CH")}\n`;
  summary += `=${"=".repeat(50)}\n`;
  summary += `Score global : ${session.overallScore}/100\n`;
  summary += `Durée : ${Math.round(session.duration / 60)}min\n\n`;

  summary += "Détails par domaine :\n";
  session.scores.forEach((score) => {
    const domain = BRTA_DOMAINS[score.domain];
    summary += `  ${domain.label}: ${score.correct}/${score.total} (${score.normalized}%)\n`;
  });

  summary += `\nProfil : ${result.profile.overallProfile}\n`;
  summary += "\nRecommandations :\n";
  result.profile.recommendations.forEach((rec) => {
    summary += `  • ${rec}\n`;
  });

  return summary;
}
