import type { FormTemplate } from "./form-prompts";
import type { SubmissionBundle, SubmissionExercise } from "./expression-submission-types";
import type { WritingLevel, WritingPrompt } from "./writing-prompts";

function formatSourceMessage(prompt: WritingPrompt): string {
  if (!prompt.sourceMessage) return "";
  const parts = [
    prompt.sourceMessage.from ? `De : ${prompt.sourceMessage.from}` : "",
    prompt.sourceMessage.subject ? `Objet : ${prompt.sourceMessage.subject}` : "",
    prompt.sourceMessage.body,
  ].filter(Boolean);
  return parts.join("\n");
}

export function buildWritingConsigne(prompt: WritingPrompt): string {
  const lines = [
    prompt.situation,
    "",
    prompt.instruction,
  ];
  const source = formatSourceMessage(prompt);
  if (source) lines.push("", "— Message reçu —", source);
  if (prompt.points.length) {
    lines.push("", "Indiquez :", ...prompt.points.map((point) => `• ${point}`));
  }
  return lines.join("\n").trim();
}

export function formToText(template: FormTemplate, answers: Record<string, string>): string {
  const lines = template.fields.map((field) => `${field.label} : ${answers[field.id] ?? ""}`);
  return [`${template.organization} - ${template.title}`, template.situation, ...lines].join("\n");
}

export function exercisesToOriginalText(exercises: SubmissionExercise[]): string {
  return exercises
    .map((exercise) => {
      const header = `=== ${exercise.title} (${exercise.maxPoints} pts) ===`;
      return `${header}\n\n[CONSIGNE]\n${exercise.consigne}\n\n[PRODUCTION]\n${exercise.text}`.trim();
    })
    .join("\n\n");
}

export function buildPeSubmissionBundle(input: {
  level: WritingLevel;
  lessonCode: string;
  formTemplate?: FormTemplate | null;
  formAnswers?: Record<string, string>;
  shortPrompt?: WritingPrompt;
  shortText?: string;
  longPrompt?: WritingPrompt;
  longText?: string;
  /** Placement progressif : réponse (10) + expérience (10) au lieu de short/long génériques. */
  peHybrid?: boolean;
}): SubmissionBundle {
  const exercises: SubmissionExercise[] = [];

  if (input.formTemplate) {
    exercises.push({
      id: "form",
      kind: "form",
      title: "Formulaire",
      maxPoints: 5,
      consigne: `${input.formTemplate.situation}\n\n${input.formTemplate.organization} — ${input.formTemplate.title}`,
      text: formToText(input.formTemplate, input.formAnswers ?? {}),
      meta: { templateId: input.formTemplate.id },
    });
  }

  if (input.peHybrid) {
    if (input.shortPrompt) {
      exercises.push({
        id: "reply",
        kind: "reply",
        title: "Répondre à un message",
        maxPoints: 10,
        consigne: buildWritingConsigne(input.shortPrompt),
        text: input.shortText ?? "",
        prompt: input.shortPrompt,
      });
    }
    if (input.longPrompt) {
      exercises.push({
        id: "experience",
        kind: "experience",
        title: "Texte à rédiger long",
        maxPoints: 10,
        consigne: buildWritingConsigne(input.longPrompt),
        text: input.longText ?? "",
        prompt: input.longPrompt,
      });
    }
  } else if (input.level === "moyen") {
    if (input.longPrompt) {
      exercises.push({
        id: "experience",
        kind: "experience",
        title: "Raconter une expérience",
        maxPoints: 13,
        consigne: buildWritingConsigne(input.longPrompt),
        text: input.longText ?? "",
        prompt: input.longPrompt,
      });
    }
    if (input.shortPrompt) {
      exercises.push({
        id: "reply",
        kind: "reply",
        title: "Répondre à un message",
        maxPoints: 12,
        consigne: buildWritingConsigne(input.shortPrompt),
        text: input.shortText ?? "",
        prompt: input.shortPrompt,
      });
    }
  } else {
    if (input.shortPrompt) {
      exercises.push({
        id: "short",
        kind: "short",
        title: input.level === "avance" ? "Texte à rédiger court" : "Texte à rédiger court",
        maxPoints: input.level === "avance" ? 12 : 10,
        consigne: buildWritingConsigne(input.shortPrompt),
        text: input.shortText ?? "",
        prompt: input.shortPrompt,
      });
    }
    if (input.longPrompt) {
      exercises.push({
        id: "long",
        kind: "long",
        title: input.level === "avance" ? "Texte à rédiger long" : "Texte à rédiger long",
        maxPoints: input.level === "avance" ? 13 : 10,
        consigne: buildWritingConsigne(input.longPrompt),
        text: input.longText ?? "",
        prompt: input.longPrompt,
      });
    }
  }

  return {
    level: input.level,
    lessonCode: input.lessonCode,
    exercises,
  };
}

export function bundleToPromptPayload(bundle: SubmissionBundle) {
  return {
    id: `${bundle.lessonCode}-complete`,
    title: `${bundle.lessonCode} — Production écrite`,
    situation: bundle.exercises.map((exercise) => exercise.title).join(" · "),
    instruction: "Correction professeur demandée.",
    points: bundle.exercises.map((exercise) => exercise.title),
    minWords: 0,
    maxWords: 10000,
    exercises: bundle.exercises,
    bundleLevel: bundle.level,
  };
}

/** Parse exercises from stored prompt jsonb or legacy original_text. */
export function parseSubmissionExercises(
  prompt: Record<string, unknown>,
  originalText: string,
): SubmissionExercise[] {
  const stored = prompt.exercises;
  if (Array.isArray(stored) && stored.length) {
    return stored as SubmissionExercise[];
  }

  const legacy: SubmissionExercise[] = [];
  const sections = originalText.split(/(?==== )/);
  for (const section of sections) {
    const headerMatch = section.match(/^=== (.+?) \((\d+) pts\) ===/);
    if (!headerMatch) continue;
    const consigneMatch = section.match(/\[CONSIGNE\]\n([\s\S]*?)\n\n\[PRODUCTION\]\n/);
    const productionMatch = section.match(/\[PRODUCTION\]\n([\s\S]*)$/);
    legacy.push({
      id: headerMatch[1]!.toLowerCase().replace(/\s+/g, "-"),
      kind: "short",
      title: headerMatch[1]!,
      maxPoints: Number(headerMatch[2]),
      consigne: consigneMatch?.[1]?.trim() ?? "",
      text: productionMatch?.[1]?.trim() ?? "",
    });
  }
  if (legacy.length) return legacy;

  if (originalText.includes("FORMULAIRE") || originalText.includes("TEXTE COURT")) {
    const chunks = originalText.split(/\n(?=FORMULAIRE|TEXTE COURT|TEXTE LONG)/);
    for (const chunk of chunks) {
      const label = chunk.split("\n")[0]?.trim();
      if (!label) continue;
      legacy.push({
        id: label.toLowerCase().replace(/\s+/g, "-"),
        kind: label.includes("LONG") ? "long" : label.includes("COURT") ? "short" : "form",
        title: label,
        maxPoints: 0,
        consigne: prompt.situation ? String(prompt.situation) : "",
        text: chunk.replace(/^(FORMULAIRE|TEXTE COURT|TEXTE LONG)\n?/, "").trim(),
      });
    }
  }

  if (!legacy.length && originalText.trim()) {
    legacy.push({
      id: "production",
      kind: "short",
      title: String(prompt.title ?? "Production"),
      maxPoints: 25,
      consigne: [prompt.situation, prompt.instruction].filter(Boolean).join("\n\n"),
      text: originalText,
    });
  }

  return legacy;
}
