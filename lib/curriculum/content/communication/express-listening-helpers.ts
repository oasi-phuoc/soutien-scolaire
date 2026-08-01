import { ceCoImageSource, isCeCoImageableLabel, isPriceRange, isSinglePrice, resolveCeCoWordImage } from "../../word-image-resolver";
import { seededShuffle } from "@/lib/placement/progressive-pick";
import { hasBlockedImageChoices } from "./ce-co-question-filters";
import { shuffleQcmChoicesSeeded } from "./shuffle-qcm-choices";
import {
  pickExpressListeningFormat,
  type ExpressListeningFormat,
} from "./express-listening-formats";
import type { COChoiceTask, COFillTask, COImageChoice, COMultiQuestion, RawQ } from "./co-questions-helpers";
import { buildPool } from "./co-questions-helpers";

export type ExpressRawQ = RawQ & {
  /** Énoncé vrai/faux (si absente, dérivée du textQ). */
  vfQ?: string;
  /** 0 = Vrai, 1 = Faux */
  vfC?: 0 | 1;
  /** Format fixe (évite de rejouer le même fait sous un autre type). */
  format?: ExpressListeningFormat;
};

export type ExpressListeningTask = COChoiceTask | COFillTask;

export type ExpressMultiQuestion = COMultiQuestion & {
  vfQ?: string;
  vfCorrect?: 0 | 1;
  /**
   * Format fixe — si défini, la question n'est jamais tirée sous un autre type.
   * Obligatoire pour les nouvelles leçons (une question = un format unique).
   */
  format?: ExpressListeningFormat;
};

function supportsImageFormat(choices: { label: string; image: string }[]): boolean {
  if (choices.some((c) => isSinglePrice(c.label) || isPriceRange(c.label))) return false;
  if (hasBlockedImageChoices(choices.map((c) => c.label))) return false;
  return choices.every((c) => !!ceCoImageSource(c.image, c.label));
}

export function buildExpressPool(groupSlug: string, items: ExpressRawQ[]): ExpressMultiQuestion[] {
  const base = buildPool("express", groupSlug, items);
  return base.map((q, i) => {
    const raw = items[i]!;
    return {
      ...q,
      vfQ: raw.vfQ,
      vfCorrect: raw.vfC,
      format: raw.format,
    };
  });
}

function multiToExpressTask(
  q: ExpressMultiQuestion,
  format: ExpressListeningFormat,
  seed: string,
): ExpressListeningTask {
  if (format === "fill") {
    return {
      kind: "fill",
      prompt: q.textQ,
      stem: q.fillQ,
      fillMode: "stem",
      answer: q.fillAnswer,
      accept: q.fillAccept,
    };
  }
  if (format === "vf") {
    const statement = q.vfQ ?? q.textQ;
    const correct = q.vfCorrect ?? 0;
    const choices = [{ label: "Vrai" }, { label: "Faux" }];
    const shuffled = shuffleQcmChoicesSeeded(choices, correct, `${seed}-vf`);
    return {
      kind: "choice",
      prompt: statement,
      choices: shuffled.choices,
      correct: shuffled.correct,
    };
  }
  if (format === "image") {
    const withVariants = q.imageChoices.map((c, i) => ({
      label: c.label,
      image: ceCoImageSource(c.image, c.label, `${seed}-img-${i}`) ?? c.image,
    }));
    const shuffled = shuffleQcmChoicesSeeded(withVariants, q.imageCorrect, `${seed}-choices`);
    return {
      kind: "choice",
      prompt: q.imageQ,
      choices: shuffled.choices,
      correct: shuffled.correct,
      image: true,
    };
  }
  const textChoices = q.textChoices.map((label) => ({ label }));
  const shuffled = shuffleQcmChoicesSeeded(textChoices, q.textCorrect, `${seed}-choices`);
  return {
    kind: "choice",
    prompt: q.textQ,
    choices: shuffled.choices,
    correct: shuffled.correct,
  };
}

/** Tire `count` questions du pool, mélange l'ordre et assigne un format (image/texte/saisie/vf). */
export function buildExpressListeningTasks(
  pool: ExpressMultiQuestion[],
  count: number,
  seed: string,
): ExpressListeningTask[] {
  if (!pool.length || count <= 0) return [];
  const selected = seededShuffle(pool, seed).slice(0, Math.min(count, pool.length));

  return selected.map((q, index) => {
    const imageable = supportsImageFormat(q.imageChoices);
    const hasVf = q.vfCorrect === 0 || q.vfCorrect === 1 || Boolean(q.vfQ);
    let format: ExpressListeningFormat =
      q.format ?? pickExpressListeningFormat(index, seed, q.id, imageable, hasVf);
    // Si format fixe impossible (image non résolue), repli texte — jamais un autre type « inventé ».
    if (format === "image" && !imageable) format = "text";
    if (format === "vf" && !hasVf) format = "text";
    return multiToExpressTask(q, format, `${seed}-${q.id}-${index}`);
  });
}

export function scoreExpressListeningTasks(
  tasks: ExpressListeningTask[],
  answers: Record<string, number | string | null>,
): { correct: number; total: number; results: boolean[] } {
  const results = tasks.map((task, i) => {
    const key = String(i);
    const value = answers[key] ?? null;
    if (task.kind === "fill") {
      if (typeof value !== "string" || !value.trim()) return false;
      const norm = (s: string) =>
        s
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{M}/gu, "")
          .replace(/[’']/g, "'");
      const v = norm(value);
      if (v === norm(task.answer)) return true;
      return (task.accept ?? []).some((a) => norm(a) === v);
    }
    return typeof value === "number" && value === task.correct;
  });
  return {
    correct: results.filter(Boolean).length,
    total: tasks.length,
    results,
  };
}

/** Helper image label — résout scène/alias si possible. */
export function expressImgLabel(label: string): COImageChoice {
  if (isCeCoImageableLabel(label)) {
    const dedicated = resolveCeCoWordImage(label);
    if (dedicated) return { label, image: dedicated };
  }
  return { label, image: "" };
}
