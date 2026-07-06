import { ceCoImageSource, isImageableLabel, resolveWordImage } from "../../word-image-resolver";
import { hashSeedString, seededShuffle as shuffleWithSeed } from "@/lib/placement/progressive-pick";

export type CEFormatType = "text" | "image" | "fill";

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
  prompt: string;
  answer: string;
  accept?: string[];
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
  if (isImageableLabel(label)) {
    const dedicated = resolveWordImage(label);
    if (dedicated) return { label, image: dedicated };
  }
  return { label, image: "" };
}

function hashSeed(seed: string): number {
  return hashSeedString(seed) || 1;
}

function multiToTask(q: CEMultiQuestion, format: CEFormatType): CEQuestionTask {
  if (format === "fill") {
    return { kind: "fill", prompt: q.fillQ, answer: q.fillAnswer, accept: q.fillAccept };
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

const FORMATS: CEFormatType[] = ["text", "image", "fill"];

/** Construit les questions d'un message CE (texte / image / remplissage). */
export function buildCeMessageQuestions(
  pool: CEMultiQuestion[],
  count: number,
  seed: string,
): CEQuestionTask[] {
  if (!pool.length || count <= 0) return [];

  const shuffled = shuffleWithSeed(pool, seed);
  const selected = shuffled.slice(0, Math.min(count, pool.length));

  return selected.map((q, index) => {
    const imageable = q.imageChoices.every((c) => !!ceCoImageSource(c.image, c.label));
    const formats = imageable ? FORMATS : FORMATS.filter((f) => f !== "image");
    const format = formats[hashSeed(`${seed}-${q.id}-${index}`) % formats.length]!;
    return multiToTask(q, format);
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
