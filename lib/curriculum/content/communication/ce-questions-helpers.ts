import { ceCoImageSource, isPriceRange, isSinglePrice, resolveCeCoWordImage } from "../../word-image-resolver";
import { seededShuffle as shuffleWithSeed } from "@/lib/placement/progressive-pick";
import { pickCeCoQuestionFormat, type CeCoFormatType } from "./ce-co-question-formats";
import { hasBlockedImageChoices, isExcludedCeCoQuestion } from "./ce-co-question-filters";

/** DELF instructions : 2 formats différents par texte (jamais 2× le même format sur un texte). */
const INSTRUCTION_TEXT_FORMAT_PAIRS: [CeCoFormatType, CeCoFormatType][] = [
  ["fill", "image"],
  ["image", "text"],
  ["text", "fill"],
];

function fallbackInstructionFormat(
  preferred: CeCoFormatType,
  sibling: CeCoFormatType,
  imageable: boolean,
): CeCoFormatType {
  if (preferred === "image" && !imageable) {
    const opts: CeCoFormatType[] = ["text", "fill"];
    return opts.find((f) => f !== sibling) ?? "text";
  }
  return preferred;
}

/**
 * Construit les questions « Lire des instructions » : 3 textes × 2 questions.
 * Chaque texte utilise une paire de formats distincts (saisie / QCM image / QCM texte).
 */
export function buildCeInstructionQuestions(
  cards: { pool: CEMultiQuestion[] }[],
  seed: string,
): CEQuestionTask[][] {
  return cards.map((card, cardIndex) => {
    const shuffled = shuffleWithSeed(card.pool, `${seed}-instr-card-${cardIndex}`);
    const selected = shuffled.slice(0, Math.min(2, card.pool.length));
    const pair = INSTRUCTION_TEXT_FORMAT_PAIRS[cardIndex % INSTRUCTION_TEXT_FORMAT_PAIRS.length]!;

    const resolved: CeCoFormatType[] = [];
    for (let qi = 0; qi < selected.length; qi++) {
      const imageable = supportsImageFormat(selected[qi]!.imageChoices);
      const sibling = qi === 0 ? pair[1]! : resolved[0]!;
      resolved.push(fallbackInstructionFormat(pair[qi]!, sibling, imageable));
    }

    return selected.map((q, qi) => {
      const format = resolved[qi]!;
      if (format === "fill") {
        return {
          kind: "fill" as const,
          prompt: q.fillQ,
          fillMode: "full" as const,
          answer: q.fillAnswer,
          accept: q.fillAccept,
        };
      }
      return multiToTask(q, format, "full");
    });
  });
}


export type CEFormatType = "text" | "image" | "fill";
export type CEFillMode = "stem" | "full";

export type CEImageChoice = { label: string; image: string };

export type CEMultiQuestion = {
  id: string;
  textQ: string;
  textChoices: [string, string, string];
  textCorrect: number;
  imageQ: string;
  imageChoices: [CEImageChoice, CEImageChoice, CEImageChoice];
  imageCorrect: number;
  fillQ: string;
  fillAnswer: string;
  fillAccept?: string[];
};

export type CEChoiceTask = {
  kind: "choice";
  prompt: string;
  choices: { label: string; image?: string }[];
  correct: number;
  image?: boolean;
};

export type CEFillTask = {
  kind: "fill";
  /** Question identique au QCM texte. */
  prompt: string;
  answer: string;
  accept?: string[];
  fillMode: CEFillMode;
  /** Phrase amorcée (base uniquement). */
  stem?: string;
};

export type CEQuestionTask = CEChoiceTask | CEFillTask;

export type CEMessageItem = {
  id: string;
  from?: string;
  subject?: string;
  body: string;
  image: string;
  pool: CEMultiQuestion[];
};

export function ceImgChoice(label: string): CEImageChoice {
  const image = resolveCeCoWordImage(label) ?? "";
  return { label, image };
}

function supportsImageFormat(choices: { label: string; image: string }[]): boolean {
  if (choices.some((c) => isSinglePrice(c.label) || isPriceRange(c.label))) return false;
  if (hasBlockedImageChoices(choices.map((c) => c.label))) return false;
  return choices.every((c) => !!ceCoImageSource(c.image, c.label));
}

function multiToTask(q: CEMultiQuestion, format: CEFormatType, fillMode: CEFillMode): CEQuestionTask {
  if (format === "fill") {
    return {
      kind: "fill",
      prompt: q.textQ,
      stem: fillMode === "stem" ? q.fillQ : undefined,
      fillMode,
      answer: q.fillAnswer,
      accept: q.fillAccept,
    };
  }
  if (format === "image") {
    return {
      kind: "choice",
      prompt: q.imageQ,
      choices: q.imageChoices.map((c) => ({ label: c.label, image: c.image })),
      correct: q.imageCorrect,
      image: true,
    };
  }
  return {
    kind: "choice",
    prompt: q.textQ,
    choices: q.textChoices.map((label) => ({ label })),
    correct: q.textCorrect,
  };
}

/** Construit les questions d'un message CE (texte / image / remplissage). */
export function buildCeMessageQuestions(
  pool: CEMultiQuestion[],
  count: number,
  seed: string,
  fillMode: CEFillMode = "stem",
): CEQuestionTask[] {
  const eligible = pool.filter(
    (q) =>
      !isExcludedCeCoQuestion({
        textQ: q.textQ,
        text: q.textChoices,
        textC: q.textCorrect,
        img: q.imageChoices.map((c) => c.label) as [string, string, string],
        fill: q.fillAnswer,
        fillQ: q.fillQ,
      }),
  );
  if (!eligible.length || count <= 0) return [];

  const shuffled = shuffleWithSeed(eligible, seed);
  const selected = shuffled.slice(0, Math.min(count, eligible.length));

  return selected.map((q, index) => {
    const imageable = supportsImageFormat(q.imageChoices);
    const format = pickCeCoQuestionFormat(index, seed, q.id, imageable);
    return multiToTask(q, format, fillMode);
  });
}

/** Fabrique une question avec mini-cartes (chemins a/b/c). */
export function ceMapQ(
  id: string,
  textQ: string,
  choices: [string, string, string],
  correct: number,
  mapPaths: [string, string, string],
  fillQ: string,
  fillAnswer: string,
  fillAccept?: string[],
  imageQ = "Quel trajet devez-vous choisir ?",
): CEMultiQuestion {
  const labels: [string, string, string] = ["Trajet a", "Trajet b", "Trajet c"];
  const imageChoices = mapPaths.map((image, i) => ({ label: labels[i]!, image })) as [
    CEImageChoice,
    CEImageChoice,
    CEImageChoice,
  ];
  return {
    id,
    textQ,
    textChoices: choices,
    textCorrect: correct,
    imageQ,
    imageChoices,
    imageCorrect: correct,
    fillQ,
    fillAnswer,
    fillAccept,
  };
}

/** Fabrique une question multi-format à partir de libellés de choix. */
export function ceQ(
  id: string,
  textQ: string,
  choices: [string, string, string],
  correct: number,
  fillQ: string,
  fillAnswer: string,
  fillAccept?: string[],
): CEMultiQuestion {
  const imageChoices = choices.map((label) => ceImgChoice(label)) as [
    CEImageChoice,
    CEImageChoice,
    CEImageChoice,
  ];
  return {
    id,
    textQ,
    textChoices: choices,
    textCorrect: correct,
    imageQ: textQ,
    imageChoices,
    imageCorrect: correct,
    fillQ,
    fillAnswer,
    fillAccept,
  };
}
