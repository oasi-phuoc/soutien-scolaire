import {
  MATH_ALGEBRA_ORDER,
  MATH_GEOMETRY_TAB_ORDER,
  MATH_MODULES,
  getMathModule,
  prerequisitesMet,
} from "@/lib/curriculum/math-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import {
  completedPassingIds,
  daysSince,
  moduleNeedsEvaluation,
} from "@/lib/progress/math-progress";
import { PASSING_GRADE } from "@/lib/scoring";

export type MathTabId = "algebra" | "geometry";

export type Recommendation = {
  moduleId: string | null;
  title: string;
  reasonLines: string[];
  prerequisiteTags: { label: string; ok: boolean }[];
  ctaLabel: string;
  kind: "next" | "prereq_algebra" | "revision_grade" | "revision_stale" | "done";
};

function lastCompletedInOrder(order: string[], p: StoredProgressV1): string | undefined {
  let last: string | undefined;
  for (const id of order) {
    const prog = p.math[id];
    if (prog?.state === "completed" && prog.grade != null && prog.grade >= PASSING_GRADE) {
      last = id;
    }
  }
  return last;
}

function nextInSequence(order: string[], p: StoredProgressV1): string | undefined {
  const done = completedPassingIds(p);
  for (const id of order) {
    const m = getMathModule(id);
    if (!m || m.comingSoon) continue;
    if (done.has(id)) continue;
    const pre = prerequisitesMet(m, done);
    if (pre.ok) return id;
    return undefined;
  }
  return undefined;
}

/**
 * Règles M.2 : suivant, prérequis algèbre pour géo, révision si note < 4,
 * révision si inactif 3+ jours.
 */
export function computeRecommendation(
  tab: MathTabId,
  p: StoredProgressV1,
): Recommendation {
  const order = tab === "algebra" ? MATH_ALGEBRA_ORDER : MATH_GEOMETRY_TAB_ORDER;
  const done = completedPassingIds(p);
  const lastQuiz = p.lastCompletedMathModuleId
    ? p.lastQuizGrades[p.lastCompletedMathModuleId]
    : undefined;

  if (
    lastQuiz != null &&
    lastQuiz < PASSING_GRADE &&
    p.lastCompletedMathModuleId &&
    order.includes(p.lastCompletedMathModuleId)
  ) {
    const m = getMathModule(p.lastCompletedMathModuleId);
    return {
      moduleId: p.lastCompletedMathModuleId,
      title: m ? `${m.code} — ${m.title}` : p.lastCompletedMathModuleId,
      reasonLines: [
        "La dernière évaluation est sous le seuil de passage (note minimale 4.0/6).",
        "Révise les sous-modules difficiles puis repasse le quiz (nouvelle tentative après 24 h).",
      ],
      prerequisiteTags: [],
      ctaLabel: `Réviser ${m?.code ?? ""}`.trim(),
      kind: "revision_grade",
    };
  }

  if (daysSince(p.lastActivityAt) >= 3) {
    const last =
      lastCompletedInOrder(order, p) ?? nextInSequence(order, p) ?? order[0];
    const m = getMathModule(last);
    return {
      moduleId: last,
      title: m ? `${m.code} — ${m.title}` : last,
      reasonLines: [
        "Tu n’as pas travaillé depuis plusieurs jours.",
        "Une courte révision du dernier module validé aide à fixer les acquis.",
      ],
      prerequisiteTags: [],
      ctaLabel: m ? `Révision rapide ${m.code}` : "Révision rapide",
      kind: "revision_stale",
    };
  }

  if (tab === "geometry") {
    for (const id of order) {
      const m = getMathModule(id);
      if (!m || m.comingSoon) continue;
      const pre = prerequisitesMet(m, done);
      if (!pre.ok && pre.missing.some((mid) => mid.startsWith("A"))) {
        const need = pre.missing.find((mid) => mid.startsWith("A"))!;
        const am = getMathModule(need);
        const tags = pre.missing.map((mid) => ({
          label: `Prérequis algèbre : ${mid}`,
          ok: done.has(mid),
        }));
        return {
          moduleId: need,
          title: am ? `${am.code} — ${am.title}` : need,
          reasonLines: [
            `Le module ${m.code} (géométrie) exige des acquis d’algèbre pas encore validés.`,
            `Commence ou termine ${need} pour débloquer la suite dans cet onglet.`,
          ],
          prerequisiteTags: tags,
          ctaLabel: am ? `Commencer ${am.code}` : "Commencer le prérequis",
          kind: "prereq_algebra",
        };
      }
    }
  }

  const releasable = order.filter((id) => {
    const m = getMathModule(id);
    return !m || !m.comingSoon;
  });
  const allDone = releasable.every((id) => done.has(id));
  if (allDone) {
    return {
      moduleId: null,
      title: "Parcours de cet onglet complété",
      reasonLines: [
        "Tous les modules de cette piste sont validés avec au moins la note 4.0/6.",
        "Tu peux poursuivre sur l’autre onglet ou approfondir par la révision.",
      ],
      prerequisiteTags: [],
      ctaLabel: "",
      kind: "done",
    };
  }

  const next = nextInSequence(order, p);
  const nm = next ? getMathModule(next) : undefined;
  if (next && nm) {
    const pre = prerequisitesMet(nm, done);
    const tags =
      nm.algebraRefs?.map((ref) => ({
        label: `Utilise ${ref}`,
        ok: done.has(ref),
      })) ?? [];
    return {
      moduleId: next,
      title: `${nm.code} — ${nm.title}`,
      reasonLines: [
        "Enchaîne avec l’étape suivante de ton parcours dans cet onglet.",
        ...(pre.ok && nm.prerequisiteIds.length
          ? [`Modules validés en amont : ${nm.prerequisiteIds.join(", ")}.`]
          : []),
      ],
      prerequisiteTags: tags,
      ctaLabel: `Commencer ${nm.code}`,
      kind: "next",
    };
  }

  return {
    moduleId: null,
    title: "Parcours en attente de prérequis",
    reasonLines: [
      "Un module plus haut dans la liste est encore bloqué.",
      "Valide les prérequis listés sur les cartes verrouillées pour débloquer la suite.",
    ],
    prerequisiteTags: [],
    ctaLabel: "",
    kind: "next",
  };
}

export function findPendingEvaluationModule(
  tab: MathTabId,
  p: StoredProgressV1,
): string | undefined {
  const order = tab === "algebra" ? MATH_ALGEBRA_ORDER : MATH_GEOMETRY_TAB_ORDER;
  for (const id of order) {
    const m = getMathModule(id);
    if (!m || m.comingSoon) continue;
    if (moduleNeedsEvaluation(id, p)) return id;
  }
  return undefined;
}

export function mathGlobalStats(p: StoredProgressV1) {
  let finished = 0;
  let sumGrades = 0;
  let nGrades = 0;
  for (const m of MATH_MODULES) {
    const prog = p.math[m.id];
    if (prog?.state === "completed" && prog.grade != null) {
      finished += 1;
      sumGrades += prog.grade;
      nGrades += 1;
    }
  }
  const avg = nGrades ? Math.round((sumGrades / nGrades) * 10) / 10 : null;
  const minutes = 0;
  return { finished, total: MATH_MODULES.length, avgGrade: avg, minutes };
}
