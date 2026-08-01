import { ceCoImageSource, isCeCoImageableLabel, isPriceRange, isSinglePrice, resolveCeCoWordImage, resolveWordImage } from "../../word-image-resolver";
import { seededShuffle } from "@/lib/placement/progressive-pick";
import { hasBlockedImageChoices } from "./ce-co-question-filters";
import { shuffleQcmChoicesSeeded } from "./shuffle-qcm-choices";
import type { ExpressListeningFormat } from "./express-listening-formats";
import type { COChoiceTask, COFillTask, COImageChoice, COMultiQuestion, RawQ } from "./co-questions-helpers";
import { buildPool } from "./co-questions-helpers";

export type ExpressRawQ = RawQ & {
  /** Énoncé vrai/faux — affirmation sur l'audio (pas une question). */
  vfQ?: string;
  /** 0 = Vrai, 1 = Faux, 2 = On ne sait pas */
  vfC?: 0 | 1 | 2;
};

export type ExpressListeningTask = COChoiceTask | COFillTask;

export type ExpressMultiQuestion = COMultiQuestion & {
  vfQ?: string;
  vfCorrect?: 0 | 1 | 2;
};

function supportsImageFormat(choices: { label: string; image: string }[]): boolean {
  if (choices.some((c) => isSinglePrice(c.label) || isPriceRange(c.label))) return false;
  if (hasBlockedImageChoices(choices.map((c) => c.label))) return false;
  return choices.every((c) => !!ceCoImageSource(c.image, c.label));
}

/**
 * Image d'un choix QCM Express : scène CE/CO en priorité, sinon image mot
 * (lecture / vocabulaire). Chaîne vide = choix non illustrable.
 */
export function expressChoiceImage(label: string): string {
  if (!label.trim()) return "";
  if (isCeCoImageableLabel(label)) {
    const scene = resolveCeCoWordImage(label);
    if (scene) return scene;
  }
  const word = resolveWordImage(label);
  if (
    word &&
    (word.startsWith("/assets/words/lecture/") || word.startsWith("/assets/words/vocab/"))
  ) {
    return word;
  }
  return "";
}

export function buildExpressPool(groupSlug: string, items: ExpressRawQ[]): ExpressMultiQuestion[] {
  const base = buildPool("express", groupSlug, items);
  return base.map((q, i) => {
    const raw = items[i]!;
    return {
      ...q,
      imageChoices: q.imageChoices.map((c) =>
        c.image ? c : { label: c.label, image: expressChoiceImage(c.label) },
      ) as ExpressMultiQuestion["imageChoices"],
      vfQ: raw.vfQ,
      vfCorrect: raw.vfC,
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
    // Ordre fixe Vrai / Faux / On ne sait pas (style CO placement).
    return {
      kind: "choice",
      prompt: q.vfQ ?? q.textQ,
      choices: [{ label: "Vrai" }, { label: "Faux" }, { label: "On ne sait pas" }],
      correct: q.vfCorrect ?? 0,
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

function hasVfData(q: ExpressMultiQuestion): boolean {
  return Boolean(q.vfQ) && typeof q.vfCorrect === "number";
}

function hasFillData(q: ExpressMultiQuestion): boolean {
  return Boolean(q.fillQ && q.fillAnswer && q.fillQ.includes("___"));
}

/**
 * Tire des questions UNIQUES du pool (jamais le même fait sous deux formats)
 * et compose l'exercice comme la CO placement :
 * 1 QCM image (si une question illustrable existe) + 1 vrai/faux +
 * 1 texte à saisir + 2 QCM texte.
 */
export function buildExpressListeningTasks(
  pool: ExpressMultiQuestion[],
  count: number,
  seed: string,
): ExpressListeningTask[] {
  if (!pool.length || count <= 0) return [];
  const shuffled = seededShuffle(pool, seed);
  const used = new Set<string>();
  const picks: { q: ExpressMultiQuestion; format: ExpressListeningFormat }[] = [];

  const takeFirst = (
    pred: (q: ExpressMultiQuestion) => boolean,
    format: ExpressListeningFormat,
  ) => {
    const q = shuffled.find((c) => !used.has(c.id) && pred(c));
    if (q) {
      used.add(q.id);
      picks.push({ q, format });
    }
  };

  takeFirst((q) => supportsImageFormat(q.imageChoices), "image");
  takeFirst(hasVfData, "vf");
  takeFirst(hasFillData, "fill");

  // 2 QCM texte (ou plus si `count` le permet et que le pool est assez grand).
  const target = Math.min(count, pool.length, Math.max(picks.length + 2, 4));
  for (const q of shuffled) {
    if (picks.length >= target) break;
    if (used.has(q.id)) continue;
    used.add(q.id);
    picks.push({ q, format: "text" });
  }

  const ordered = seededShuffle(picks, `${seed}-order`);
  return ordered.map((p, i) => multiToExpressTask(p.q, p.format, `${seed}-${p.q.id}-${i}`));
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
