import type { OralDialogueLine } from "@/app/actions/oral";
import type { SubmissionExercise } from "./expression-submission-types";
import { exercisesToOriginalText } from "./pe-submission";

function linesToText(lines: OralDialogueLine[]): string {
  if (!lines.length) return "";
  return lines
    .map((line) => `[${line.role === "app" ? "Interlocuteur" : "Élève"}] ${line.text}`)
    .join("\n");
}

export function buildPoSubmissionExercises(input: {
  themes: string[];
  imageDescription: string;
  dialogueContext: string;
  dialogueRoleText: string;
  argumentationPrompt: string;
  task1Lines: OralDialogueLine[];
  interviewLines: OralDialogueLine[];
  interviewQuestions: string[];
  task2Lines: OralDialogueLine[];
  task4Lines: OralDialogueLine[];
  task5Lines: OralDialogueLine[];
}): SubmissionExercise[] {
  return [
    {
      id: "task1",
      kind: "short",
      title: "Questions thématiques",
      maxPoints: 3,
      consigne: `Formulez une question sur chaque thème : ${input.themes.join(", ")}.`,
      text: linesToText(input.task1Lines),
    },
    {
      id: "task2",
      kind: "short",
      title: "Entretien dirigé",
      maxPoints: 4,
      consigne: `Répondez aux questions de l'entretien dirigé.\n${input.interviewQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n")}`,
      text: linesToText(input.interviewLines),
    },
    {
      id: "task3",
      kind: "short",
      title: "Description d'image",
      maxPoints: 5,
      consigne: input.imageDescription,
      text: linesToText(input.task2Lines),
    },
    {
      id: "task4",
      kind: "short",
      title: "Dialogue",
      maxPoints: 6,
      consigne: `${input.dialogueContext}\n\n${input.dialogueRoleText}`,
      text: linesToText(input.task4Lines),
    },
    {
      id: "task5",
      kind: "short",
      title: "Argumentation",
      maxPoints: 7,
      consigne: input.argumentationPrompt,
      text: linesToText(input.task5Lines),
    },
  ];
}

export function poExercisesToOriginalText(exercises: SubmissionExercise[]): string {
  return exercisesToOriginalText(exercises);
}
