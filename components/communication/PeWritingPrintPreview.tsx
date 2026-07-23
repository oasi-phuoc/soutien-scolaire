import {
  rubricForPeExercise,
  rubricMaxPoints,
} from "@/lib/curriculum/content/communication/pe-grading-rubrics";
import type { PeExerciseKind } from "@/lib/curriculum/content/communication/expression-submission-types";
import type { WritingPrompt } from "@/lib/curriculum/content/communication/writing-prompts";

function formatPoints(value: number): string {
  return Number.isInteger(value)
    ? String(value)
    : value.toLocaleString("fr-CH", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

/** Hauteur d'une ligne manuscrite (px @ 10px racine A4). */
const LINE_HEIGHT_PX = 26;

/**
 * Nombre de lignes pour une page A4 dédiée à la production.
 * Avec en-tête d'exercice + titre + (optionnellement) grille, rester sous ~22 lignes
 * évite le débordement / la troncature (feuilles en overflow:hidden).
 */
function printLineCount(prompt: WritingPrompt, opts?: { sampleText?: string; withRubric?: boolean }): number {
  const fromWords = Math.ceil(prompt.minWords / 7);
  const fromSample = opts?.sampleText?.trim()
    ? Math.ceil(opts.sampleText.trim().split(/\s+/).length / 9) + 2
    : 0;
  const desired = Math.max(10, fromWords + 3, fromSample);
  const cap = opts?.withRubric ? 12 : 20;
  return Math.min(desired, cap);
}

/** Zone lignée pour rédaction manuscrite (élève) ou texte modèle sur les lignes (corrigé). */
export function PePrintWritingLines({
  text,
  lineCount,
}: {
  /** Texte modèle (corrigé). Vide = lignes blanches pour l'élève. */
  text?: string;
  lineCount: number;
}) {
  const lines = Math.max(8, lineCount);
  const height = lines * LINE_HEIGHT_PX;
  const hasText = Boolean(text?.trim());

  return (
    <div className="min-w-0">
      <p className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">
        {hasText ? "Exemple de production" : "Votre production"}
      </p>
      <div
        className="w-full max-w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 pt-0.5 text-base text-[var(--color-text-primary)]"
        style={{
          height,
          maxHeight: height,
          overflow: "hidden",
          lineHeight: `${LINE_HEIGHT_PX}px`,
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent ${LINE_HEIGHT_PX - 1}px,
            #d4d4d8 ${LINE_HEIGHT_PX - 1}px,
            #d4d4d8 ${LINE_HEIGHT_PX}px
          )`,
          backgroundOrigin: "content-box",
          backgroundClip: "content-box",
        }}
      >
        {hasText ? (
          <p className="m-0 whitespace-pre-wrap break-words">{text!.trim()}</p>
        ) : (
          <div aria-hidden style={{ height: height - 4 }} />
        )}
      </div>
    </div>
  );
}

/** Grille de notation imprimable (mêmes critères que la correction professeur). */
export function PePrintRubricGrid({
  kind,
  maxPoints,
}: {
  kind: PeExerciseKind;
  maxPoints: number;
}) {
  const rubric = rubricForPeExercise(kind, maxPoints);
  if (!rubric) return null;

  const cap = maxPoints > 0 ? maxPoints : rubricMaxPoints(rubric);

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-3 print:break-inside-avoid">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-[var(--color-text-primary)]">Grille de notation</p>
        <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
          ______ / {formatPoints(cap)} pts
        </p>
      </div>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-border-default)] text-left text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">
            <th className="pb-1.5 pr-2 font-semibold">Critère</th>
            <th className="w-16 pb-1.5 text-center font-semibold">Max</th>
            <th className="w-20 pb-1.5 text-center font-semibold">Points</th>
          </tr>
        </thead>
        <tbody>
          {rubric.criteria.map((criterion) => {
            const max = Math.max(...criterion.options);
            return (
              <tr key={criterion.id} className="border-b border-[var(--color-border-default)]/70 align-top">
                <td className="py-2 pr-2">
                  <span className="font-semibold text-[var(--color-text-primary)]">{criterion.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-[var(--color-text-secondary)]">
                    {criterion.description}
                  </span>
                </td>
                <td className="py-2 text-center font-mono text-[var(--color-text-secondary)]">
                  {formatPoints(max)}
                </td>
                <td className="py-2 text-center">
                  <span className="inline-block min-w-[2.5rem] border-b-2 border-[var(--color-text-primary)]/40 px-1 font-mono text-[var(--color-text-secondary)]">
                    &nbsp;
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function SourceMessageCard({ prompt }: { prompt: WritingPrompt }) {
  if (!prompt.sourceMessage) return null;
  const { from, subject, body } = prompt.sourceMessage;
  return (
    <div className="mt-3 text-sm">
      {from ? <p className="text-[var(--color-text-secondary)]">De : <span className="font-semibold text-[var(--color-text-primary)]">{from}</span></p> : null}
      {subject ? <p className="text-[var(--color-text-secondary)]">Objet : <span className="font-semibold text-[var(--color-text-primary)]">{subject}</span></p> : null}
      <p className="mt-1 whitespace-pre-wrap leading-relaxed text-[var(--color-text-primary)]">{body}</p>
    </div>
  );
}

/** Énoncé PE seul (situation + message + consignes) — page 1 à l'impression. */
export function PeWritingPrintPrompt({ prompt }: { prompt: WritingPrompt }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase text-[var(--color-accent-fr)]">Situation</p>
      <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">{prompt.title}</h2>
      <p className="mt-2 w-full text-sm leading-relaxed text-[var(--color-text-primary)]">{prompt.situation}</p>
      <SourceMessageCard prompt={prompt} />
      <p className="mt-3 w-full text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">
        {prompt.instruction}
      </p>
      <p className="mt-3 text-xs font-semibold text-[var(--color-text-secondary)]">Indiquez :</p>
      <ul className="mt-1 space-y-1">
        {prompt.points.map((point) => (
          <li key={point} className="flex gap-2 text-sm text-[var(--color-text-primary)]">
            <span className="text-[var(--color-accent-fr)]">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
        Minimum conseillé : {prompt.minWords} mots
      </p>
    </div>
  );
}

/** Zone de production (+ grille optionnelle) — page suivante à l'impression. */
export function PeWritingPrintLinesBlock({
  prompt,
  sampleText,
  kind,
  maxPoints,
  showRubric = true,
}: {
  prompt: WritingPrompt;
  sampleText?: string;
  kind: PeExerciseKind;
  maxPoints: number;
  showRubric?: boolean;
}) {
  const lineCount = printLineCount(prompt, {
    sampleText,
    withRubric: showRubric,
  });
  return (
    <div className="space-y-4">
      <PePrintWritingLines text={sampleText} lineCount={lineCount} />
      {showRubric ? <PePrintRubricGrid kind={kind} maxPoints={maxPoints} /> : null}
    </div>
  );
}

/** Aperçu imprimable d'un exercice de rédaction PE (lignes + grille). */
export function PeWritingPrintExercise({
  prompt,
  sampleText,
  kind,
  maxPoints,
  /** `prompt` = énoncé seul ; `lines` = production (+ grille) ; `full` = tout (legacy). */
  part = "full",
  showRubric = true,
}: {
  prompt: WritingPrompt;
  /** Si fourni = corrigé (texte sur les lignes). Sinon = feuille élève. */
  sampleText?: string;
  kind: PeExerciseKind;
  maxPoints: number;
  part?: "full" | "prompt" | "lines";
  showRubric?: boolean;
}) {
  if (part === "prompt") {
    return <PeWritingPrintPrompt prompt={prompt} />;
  }
  if (part === "lines") {
    return (
      <PeWritingPrintLinesBlock
        prompt={prompt}
        sampleText={sampleText}
        kind={kind}
        maxPoints={maxPoints}
        showRubric={showRubric}
      />
    );
  }

  return (
    <div className="space-y-5">
      <PeWritingPrintPrompt prompt={prompt} />
      <PeWritingPrintLinesBlock
        prompt={prompt}
        sampleText={sampleText}
        kind={kind}
        maxPoints={maxPoints}
        showRubric={showRubric}
      />
    </div>
  );
}
