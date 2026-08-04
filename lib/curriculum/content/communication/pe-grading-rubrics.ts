import type { ExerciseRubric, PeExerciseKind } from "./expression-submission-types";

export const PE_FORM_RUBRIC: ExerciseRubric = {
  exerciseKind: "form",
  criteria: [
    {
      id: "consigne",
      label: "Respect de la consigne",
      description: "Champs demandés remplis et en adéquation avec la situation",
      options: [0, 0.5, 1],
    },
    {
      id: "completude",
      label: "Complétude et exactitude",
      description: "Informations complètes, cohérentes et compréhensibles",
      options: [0, 0.5, 1, 1.5, 2],
    },
    {
      id: "orthographe",
      label: "Orthographe et présentation",
      description: "Orthographe, lisibilité et formules adaptées",
      options: [0, 0.5, 1, 1.5, 2],
    },
  ],
};

/** Niveau base : texte court / long à 10 pts (consigne + syntaxe + orthographe). */
export const PE1_WRITING_RUBRIC: ExerciseRubric = {
  exerciseKind: "short",
  criteria: [
    {
      id: "consigne",
      label: "Respect de la consigne",
      description: "En adéquation avec la situation proposée et longueur minimale respectée",
      options: [0, 0.5, 1, 1.5, 2],
    },
    {
      id: "syntaxe",
      label: "Syntaxe et grammaire",
      description: "Utilisation des structures et formes correctes",
      options: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    },
    {
      id: "orthographe",
      label: "Lexique et orthographe",
      description: "Utilisation variée de mots et d'expressions",
      options: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    },
  ],
};

export const PE1_REPLY_RUBRIC: ExerciseRubric = {
  exerciseKind: "reply",
  criteria: [
    {
      id: "consigne",
      label: "Respect de la consigne",
      description: "En adéquation avec la situation proposée et longueur minimale respectée",
      options: [0, 0.5, 1],
    },
    {
      id: "salutations",
      label: "Salutations",
      description: "Utilisation de formules de politesse et prise de congé",
      options: [0, 0.5, 1],
    },
    {
      id: "interagir",
      label: "Capacité à interagir",
      description: "Expression correcte de remerciements, excuses, propositions, etc.",
      options: [0, 1, 2, 3],
    },
    {
      id: "lexique",
      label: "Lexique et orthographe",
      description: "Utilisation variée de mots et d'expressions",
      options: [0, 0.5, 1, 1.5],
    },
    {
      id: "syntaxe",
      label: "Syntaxe et grammaire",
      description: "Utilisation des structures et formes correctes",
      options: [0, 0.5, 1, 1.5, 2],
    },
    {
      id: "coherence",
      label: "Cohérence et cohésion",
      description: "Liaison entre les différentes parties",
      options: [0, 0.5, 1, 1.5],
    },
  ],
};

export const PE1_EXPERIENCE_RUBRIC: ExerciseRubric = {
  exerciseKind: "experience",
  criteria: [
    {
      id: "consigne",
      label: "Respect de la consigne",
      description: "En adéquation avec la situation proposée et longueur minimale respectée",
      options: [0, 0.5, 1],
    },
    {
      id: "raconter",
      label: "Capacité à raconter",
      description: "Description de l'environnement, des événements, des activités ou des expériences personnelles",
      options: [0, 1, 2, 3],
    },
    {
      id: "impressions",
      label: "Capacité à donner ses impressions",
      description: "Explique pourquoi une chose plaît ou déplaît",
      options: [0, 0.5, 1, 1.5],
    },
    {
      id: "lexique",
      label: "Lexique et orthographe",
      description: "Utilisation variée de mots et d'expressions",
      options: [0, 0.5, 1, 1.5],
    },
    {
      id: "syntaxe",
      label: "Syntaxe et grammaire",
      description: "Utilisation des structures et formes correctes",
      options: [0, 0.5, 1, 1.5, 2],
    },
    {
      id: "coherence",
      label: "Cohérence et cohésion",
      description: "Liaison entre les différentes parties",
      options: [0, 0.5, 1],
    },
  ],
};

export const PE2_EXPERIENCE_RUBRIC: ExerciseRubric = {
  exerciseKind: "experience",
  criteria: [
    {
      id: "consigne",
      label: "Respect de la consigne",
      description: "En adéquation avec la situation proposée et longueur minimale respectée",
      options: [0, 0.5, 1],
    },
    {
      id: "raconter",
      label: "Capacité à raconter",
      description: "Description de l'environnement, des événements, des activités ou des expériences personnelles",
      options: [0, 1, 2, 3, 4],
    },
    {
      id: "impressions",
      label: "Capacité à donner ses impressions",
      description: "Explique pourquoi une chose plaît ou déplaît",
      options: [0, 0.5, 1, 1.5, 2],
    },
    {
      id: "lexique",
      label: "Lexique et orthographe",
      description: "Utilisation variée de mots et d'expressions",
      options: [0, 0.5, 1, 1.5, 2],
    },
    {
      id: "syntaxe",
      label: "Syntaxe et grammaire",
      description: "Utilisation des structures et formes correctes",
      options: [0, 0.5, 1, 1.5, 2, 2.5],
    },
    {
      id: "coherence",
      label: "Cohérence et cohésion",
      description: "Liaison entre les différentes parties",
      options: [0, 0.5, 1, 1.5],
    },
  ],
};

export const PE2_REPLY_RUBRIC: ExerciseRubric = {
  exerciseKind: "reply",
  criteria: [
    {
      id: "consigne",
      label: "Respect de la consigne",
      description: "En adéquation avec la situation proposée et longueur minimale respectée",
      options: [0, 0.5, 1],
    },
    {
      id: "salutations",
      label: "Salutations",
      description: "Utilisation de formules de politesse et prise de congé",
      options: [0, 0.5, 1],
    },
    {
      id: "interagir",
      label: "Capacité à interagir",
      description: "Expression correcte de remerciements, excuses, propositions, etc.",
      options: [0, 1, 2, 3, 4],
    },
    {
      id: "lexique",
      label: "Lexique et orthographe",
      description: "Utilisation variée de mots et d'expressions",
      options: [0, 0.5, 1, 1.5, 2],
    },
    {
      id: "syntaxe",
      label: "Syntaxe et grammaire",
      description: "Utilisation des structures et formes correctes",
      options: [0, 0.5, 1, 1.5, 2, 2.5],
    },
    {
      id: "coherence",
      label: "Cohérence et cohésion",
      description: "Liaison entre les différentes parties",
      options: [0, 0.5, 1, 1.5],
    },
  ],
};

export function rubricForPeExercise(kind: PeExerciseKind, maxPoints = 0): ExerciseRubric | null {
  if (kind === "sentences") return null;
  if (kind === "form") return PE_FORM_RUBRIC;
  if (kind === "reply") return maxPoints <= 10 ? PE1_REPLY_RUBRIC : PE2_REPLY_RUBRIC;
  if (kind === "experience") return maxPoints <= 10 ? PE1_EXPERIENCE_RUBRIC : PE2_EXPERIENCE_RUBRIC;
  if (kind === "short") return maxPoints <= 10 ? PE1_WRITING_RUBRIC : PE2_REPLY_RUBRIC;
  if (kind === "long") return maxPoints <= 10 ? PE1_WRITING_RUBRIC : PE2_EXPERIENCE_RUBRIC;
  return null;
}

export function rubricMaxPoints(rubric: ExerciseRubric): number {
  return rubric.criteria.reduce((sum, criterion) => sum + Math.max(...criterion.options), 0);
}

/** Labels d’annotation (select messagerie) — grille PE si dispo, sinon critères génériques PE/PO. */
export const DEFAULT_ANNOTATION_CRITERIA = [
  "Respect de la consigne",
  "Lexique et orthographe",
  "Syntaxe et grammaire",
  "Cohérence et cohésion",
  "Prononciation / clarté",
  "Interaction",
  "Autre",
] as const;

export function annotationCriteriaForExercise(
  kind: PeExerciseKind,
  maxPoints = 0,
  options?: { oral?: boolean },
): string[] {
  if (options?.oral) return [...DEFAULT_ANNOTATION_CRITERIA];
  const rubric = rubricForPeExercise(kind, maxPoints);
  if (rubric?.criteria.length) {
    return [...rubric.criteria.map((c) => c.label), "Autre"];
  }
  return [...DEFAULT_ANNOTATION_CRITERIA];
}
