"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import {
  getExpressionTeachersAction,
  submitExpressionAction,
  type TeacherOption,
} from "@/app/actions/expression";
import { CommunicationAiPractice } from "@/components/communication/CommunicationAiPractice";
import { ExpressListeningExercise } from "@/components/communication/ExpressListeningExercise";
import { ExpressPoDialogueExercise } from "@/components/communication/ExpressPoDialogueExercise";
import { SingleAudioPlayer } from "@/components/communication/SingleAudioPlayer";
import { AppSelect } from "@/components/ui/AppSelect";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";
import {
  EvalExerciseResultList,
  EvalExerciseResultRow,
  EvalResultsHint,
  EvalResultsSummary,
} from "@/components/ui/EvalResultsUI";
import { EvalRevealContext, useEvalReveal } from "@/lib/eval-reveal-context";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  type CommunicationExercise,
  type CommunicationLesson,
  type CommunicationTheoryBlock,
  type ExpressPoDialogue,
  lessonCeEmailPool,
  lessonCePool,
  pickProgressiveExercises,
  scoreCommunicationExercise,
} from "@/lib/curriculum/content/communication/express-types";
import {
  CommunicationResultsSummary,
  gradeFromEvalScore,
} from "@/components/communication/CommunicationEvalLayout";
import { EXPRESS_ORAL_BY_ID } from "@/lib/curriculum/content/communication/express-index";
import {
  EXPRESSION_E1_1,
  EXPRESSION_E1_2,
  EXPRESSION_E1_3,
} from "@/lib/curriculum/content/communication/expression-e1";
import {
  randomWritingPrompt,
  type WritingPrompt,
} from "@/lib/curriculum/content/communication/writing-prompts";
import { OralProductionRunner } from "@/components/communication/OralProductionRunner";
import { ComprehensionEcritRunner } from "@/components/communication/ComprehensionEcritRunner";
import { ComprehensionOraleRunner } from "@/components/communication/ComprehensionOraleRunner";
import { ProductionEcriteRunner } from "@/components/communication/ProductionEcriteRunner";
import {
  randomFormTemplates,
  type FormField,
  type FormTemplate,
} from "@/lib/curriculum/content/communication/form-prompts";
import { linearSwissGrade, PASSING_GRADE } from "@/lib/scoring";
import { useTranslation } from "@/components/TranslationProvider";
import { usePivotLang } from "@/components/math/usePivotLang";
import type { ExpressTrans } from "@/lib/curriculum/content/communication/express-types";
import {
  buildExpressListeningTasks,
  scoreExpressListeningTasks,
} from "@/lib/curriculum/content/communication/express-listening-helpers";

const ACCENT = "var(--color-accent-comm)";

/** Score détaillé d'un exercice (page de résultats) : bonnes réponses / total. */
function exerciseResultStats(
  ex: CommunicationExercise,
  stored: string | null,
  fallbackSeed: string,
): { correct: number; total: number } {
  if (ex.type === "listening" && ex.questionPool?.length) {
    let payload: { seed?: string; answers?: Record<string, number | string | null> } = {};
    try {
      payload = stored ? (JSON.parse(stored) as typeof payload) : {};
    } catch {
      payload = {};
    }
    const seed = payload.seed ?? fallbackSeed;
    const tasks = buildExpressListeningTasks(
      ex.questionPool,
      ex.questionCount ?? 5,
      `${ex.id}-${seed}`,
    );
    const { correct, total } = scoreExpressListeningTasks(tasks, payload.answers ?? {});
    return { correct, total: Math.max(1, total) };
  }
  const ratio = scoreCommunicationExercise(ex, stored);
  return { correct: ratio >= 0.999 ? 1 : 0, total: 1 };
}

function pickExpressTrans(trans: ExpressTrans | undefined, pivot: string, show: boolean): string | undefined {
  if (!show || !trans || pivot === "fr") return undefined;
  return trans[pivot as keyof ExpressTrans];
}
const LESSONS: Record<string, CommunicationLesson> = {
  "PE-1": EXPRESSION_E1_1,
  "PE-2": EXPRESSION_E1_2,
  "PE-3": EXPRESSION_E1_3,
  ...EXPRESS_ORAL_BY_ID,
  // Alias legacy
  "P1-1": EXPRESS_ORAL_BY_ID["E1-1"]!,
  "A1-1": EXPRESS_ORAL_BY_ID["E1-1"]!,
};

type Phase =
  | "intro"
  | "theory"
  | "form"
  | "writing"
  | "exercises"
  | "po"
  | "pe"
  | "peEmail"
  | "eval_announce"
  | "eval_co"
  | "eval_ce"
  | "eval_po"
  | "eval_pe"
  | "score";

type EvalPart = "co" | "ce" | "po" | "pe";

function pickSeeded<T>(arr: T[], seed: number): T | null {
  if (arr.length === 0) return null;
  return arr[Math.abs(seed) % arr.length]!;
}

function pickSeededOther<T extends { id: string }>(
  arr: T[],
  avoidId: string | undefined,
  seed: number,
): T | null {
  if (arr.length === 0) return null;
  const others = avoidId ? arr.filter((x) => x.id !== avoidId) : arr;
  return pickSeeded(others.length > 0 ? others : arr, seed);
}

function evalPartToPhase(part: EvalPart): Phase {
  return (`eval_${part}` as Phase);
}

function splitOralExercises(
  lesson: CommunicationLesson,
  seed: number,
): {
  training: CommunicationExercise[];
  evalEx: CommunicationExercise[];
} {
  if (lesson.writingLevel) return { training: [], evalEx: [] };

  // Contenu explicite : entraînement + évaluation séparés
  if (lesson.evalExercises && lesson.evalExercises.length > 0 && (lesson.exercises?.length ?? 0) > 0) {
    return { training: lesson.exercises!, evalEx: lesson.evalExercises };
  }

  const pool = lesson.exercisePool ?? [];
  const all =
    pool.length > 0
      ? pickProgressiveExercises(pool, lesson.exerciseCount ?? 8, seed)
      : (lesson.exercises ?? []);

  if (lesson.evalExercises && lesson.evalExercises.length > 0) {
    return { training: all, evalEx: lesson.evalExercises };
  }

  if (all.length <= 2) return { training: all, evalEx: [] };
  const evalCount = Math.min(2, Math.max(1, Math.floor(all.length / 3)));
  return {
    training: all.slice(0, all.length - evalCount),
    evalEx: all.slice(all.length - evalCount),
  };
}

type GrammarMatch = {
  message: string;
  shortMessage?: string;
  offset: number;
  length: number;
  replacements?: Array<{ value: string }>;
  rule?: { id?: string };
};

const IGNORED_GRAMMAR_RULES = new Set([
  "WHITESPACE_RULE",
  "FRENCH_WHITESPACE",
  "COMMA_PARENTHESIS_WHITESPACE",
  "UNPAIRED_BRACKETS",
]);

function wordCount(text: string) {
  return text.trim() ? text.trim().split(/\s+/u).filter(Boolean).length : 0;
}

function WritingExercise({
  lessonCode,
  prompt,
  text,
  onTextChange,
  feedback,
  checked,
  checking,
  teachers,
}: {
  lessonCode: string;
  prompt: WritingPrompt;
  text: string;
  onTextChange: (value: string) => void;
  feedback: GrammarMatch[];
  checked: boolean;
  checking: boolean;
  teachers: TeacherOption[];
}) {
  const count = wordCount(text);
  const inRange = count >= prompt.minWords && count <= prompt.maxWords;
  const [teacherId, setTeacherId] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [isSending, startSending] = useTransition();

  function sendToTeacher() {
    if (!teacherId || !checked || sent) return;
    startSending(async () => {
      const result = await submitExpressionAction({
        teacherId,
        lessonCode,
        level: lessonCode === "PE.1" ? "base" : lessonCode === "PE.2" ? "moyen" : "avance",
        prompt,
        text,
        aiFeedback: feedback,
      });
      setSendMessage(result.ok ? "Production envoyée au professeur." : (result.reason ?? "Envoi impossible."));
      setSent(result.ok);
    });
  }

  return (
    <div className="space-y-5">
      <div className="rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/25 bg-white/75 p-4">
        <p className="text-xs font-bold uppercase text-[var(--color-accent-fr)]">Situation</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-primary)]">{prompt.situation}</p>
        {prompt.sourceMessage && (
          <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/85 p-3 text-sm leading-relaxed text-[var(--color-text-primary)]">
            {prompt.sourceMessage.from && (
              <p><span className="font-semibold">De :</span> {prompt.sourceMessage.from}</p>
            )}
            {prompt.sourceMessage.subject && (
              <p><span className="font-semibold">Objet :</span> {prompt.sourceMessage.subject}</p>
            )}
            <div className="mt-2 whitespace-pre-line border-t border-[var(--color-border)] pt-2">
              {prompt.sourceMessage.body}
            </div>
          </div>
        )}
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">{prompt.instruction}</p>
        {prompt.points.length > 0 && (
          <ul className="mt-3 space-y-1">
            {prompt.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-[var(--color-text-primary)]">
                <span className="text-[var(--color-accent-fr)]">•</span><span>{point} ;</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <label htmlFor="expression-text" className="text-sm font-bold text-[var(--color-text-primary)]">Votre production</label>
          <span className={`text-xs font-semibold ${inRange ? "text-emerald-600" : "text-amber-600"}`}>
            {count} / {prompt.minWords}–{prompt.maxWords} mots
          </span>
        </div>
        <textarea
          id="expression-text"
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
          readOnly={checked}
          rows={12}
          className="min-h-72 w-full resize-y rounded-[var(--radius-md)] border-2 border-[var(--color-accent-fr)]/45 bg-white/80 p-4 text-base leading-7 text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent-fr)] read-only:bg-white/55"
          aria-describedby="expression-word-count"
        />
        <p id="expression-word-count" className="mt-1 text-xs text-[var(--color-text-secondary)]">
          Respectez la longueur demandée avant de valider.
        </p>
      </div>

      {checking && <p className="animate-pulse text-sm text-[var(--color-text-secondary)]">Correction linguistique en cours…</p>}
      {checked && !checking && (
        <section className="rounded-[var(--radius-md)] border border-amber-300 bg-white/75 p-4">
          <h3 className="font-bold text-amber-600">Pistes de correction</h3>
          {feedback.length === 0 ? (
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Aucune erreur évidente détectée. Relisez encore le contenu et l&apos;organisation.</p>
          ) : (
            <ul className="mt-2 space-y-3">
              {feedback.map((match, index) => (
                <li key={`${match.offset}-${index}`} className="text-sm text-[var(--color-text-primary)]">
                  <span className="font-semibold text-amber-600">{match.shortMessage || match.message}</span>
                  {match.replacements?.length ? (
                    <span className="ml-1">→ {match.replacements.slice(0, 3).map((item) => item.value).join(" / ")}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-xs text-[var(--color-text-secondary)]">La correction automatique est une aide. Le professeur peut compléter et expliquer les corrections.</p>
        </section>
      )}

      {checked && (
        <section className="rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/25 bg-[var(--color-accent-fr)]/5 p-4">
          <h3 className="font-bold text-[var(--color-text-primary)]">Envoyer à un professeur</h3>
          {teachers.length ? (
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <AppSelect
                value={teacherId}
                onChange={setTeacherId}
                options={teachers.map((teacher) => ({
                  value: teacher.id,
                  label: [teacher.prenom, teacher.nom].filter(Boolean).join(" ") || "Professeur",
                }))}
                placeholder="Choisissez un professeur"
                emptyOption={{ value: "", label: "Choisissez un professeur" }}
                disabled={sent}
                placement="top"
                className="min-h-11 flex-1"
              />
              <button
                type="button"
                onClick={sendToTeacher}
                disabled={!teacherId || isSending || sent}
                className="min-h-11 rounded-[var(--radius-md)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white disabled:opacity-35"
              >
                {sent ? "Envoyé" : isSending ? "Envoi…" : "Envoyer"}
              </button>
            </div>
          ) : (
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Aucun professeur n&apos;est encore disponible dans la liste.</p>
          )}
          {sendMessage && <p className={`mt-2 text-xs font-semibold ${sent ? "text-emerald-600" : "text-amber-600"}`}>{sendMessage}</p>}
        </section>
      )}
    </div>
  );
}

// ——— Theory block renderers ———

function FormFieldControl({
  field,
  value,
  disabled,
  onChange,
}: {
  field: FormField;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  const controlClass =
    "min-h-9 w-full border-0 border-b-2 border-[var(--color-accent-fr)]/45 bg-transparent px-1 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-amber-500 disabled:opacity-80";
  // Dates en textbox (pas de sélecteur natif).
  const inputType = !field.type || field.type === "date" ? "text" : field.type;

  return (
    <label className={field.wide ? "col-span-2" : ""}>
      <span className="mb-1 block text-xs font-medium text-[var(--color-text-secondary)]">{field.label}</span>
      {field.options ? (
        <AppSelect
          value={value}
          onChange={onChange}
          options={field.options}
          placeholder="Sélectionnez"
          emptyOption={{ value: "", label: "Sélectionnez" }}
          disabled={disabled}
          className="w-full"
        />
      ) : (
        <input type={inputType} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className={controlClass} autoComplete="off" />
      )}
    </label>
  );
}

function FormExercise({
  template,
  answers,
  validated,
  onChange,
  advanced,
}: {
  template: FormTemplate;
  answers: Record<string, string>;
  validated: boolean;
  onChange: (fieldId: string, value: string) => void;
  advanced?: boolean;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold italic leading-relaxed text-[var(--color-text-primary)]">{template.situation}</p>
      {advanced && (
        <div className="rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/25 bg-white/75 p-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
          Vous aidez une personne à remplir ce formulaire. Lisez la situation, repérez les informations utiles et complétez seulement les champs que vous pouvez déduire.
        </div>
      )}
      <section className="border border-slate-200 bg-white px-4 py-5 shadow-none sm:px-6">
        <div className="mb-5 border-b-2 pb-2 text-center" style={{ borderColor: ACCENT }}>
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>{template.organization}</p>
          <h2 className="mt-1 text-xl font-bold uppercase text-[var(--color-text-primary)]">{template.title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          {template.fields.map((field) => (
            <FormFieldControl
              key={field.id}
              field={field}
              value={answers[field.id] ?? ""}
              disabled={validated}
              onChange={(value) => onChange(field.id, value)}
            />
          ))}
        </div>
        {validated && (
          <p className="mt-5 border-t border-emerald-200 pt-3 text-center text-sm font-semibold text-emerald-600">Formulaire enregistré.</p>
        )}
      </section>
    </div>
  );
}

function WritingIntroPage({ lesson, onStart }: { lesson: CommunicationLesson; onStart: () => void }) {
  const [tipsOpen, setTipsOpen] = useState(false);
  const rows = [
    ["1", "Formulaire", "5 pts"],
    ["2", "Texte court", "10 pts"],
    ["3", "Texte long", "10 pts"],
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-[var(--color-bg-card)] p-5 shadow-none">
        <p className="mb-4 text-sm font-bold text-[var(--color-text-primary)]">Informations</p>
        <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} /><span><strong className="text-[var(--color-text-primary)]">3 exercices</strong> de production écrite</span></li>
          <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} /><span>Validez chaque exercice individuellement</span></li>
          <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} /><span>Vous pouvez naviguer librement en cliquant sur la barre de progression en haut.</span></li>
          <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} /><span>Score maximum : <strong className="text-[var(--color-text-primary)]">25 points</strong></span></li>
        </ul>
        <div className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-4">
          {rows.map(([num, title, pts]) => (
            <div key={num} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm text-[var(--color-text-primary)]">
              <span className="font-bold" style={{ color: ACCENT }}>{num}.</span>
              <span>{title}</span>
              <span className="font-bold" style={{ color: ACCENT }}>{pts}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white/80 shadow-none">
        <button type="button" onClick={() => setTipsOpen((value) => !value)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-[var(--color-text-primary)]">
          <span>Conseils pour réussir</span>
          <span style={{ color: ACCENT }}>{tipsOpen ? "-" : "+"}</span>
        </button>
        {tipsOpen && (
          <div className="border-t border-[var(--color-border)] px-5 py-4">
            {lesson.theory.map((block, index) => <TheoryBlock key={index} block={block} />)}
          </div>
        )}
      </div>

      <button type="button" onClick={onStart} className="min-h-12 w-full rounded-[var(--radius-lg)] px-5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90" style={{ background: ACCENT }}>
        Commencer l&apos;évaluation
      </button>
    </div>
  );
}

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold" style={{ color: ACCENT }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function TheoryBlock({ block }: { block: CommunicationTheoryBlock }) {
  const { showPivot } = useTranslation();
  const pivot = usePivotLang();
  const useTrans = showPivot && pivot !== "fr";

  switch (block.type) {
    case "heading": {
      const text = pickExpressTrans(block.trans, pivot, useTrans) ?? block.text;
      return (
        <div className="mb-6">
          <h2
            className={`text-xl font-bold ${block.black ? "text-[var(--color-text-primary)]" : ""}`}
            style={block.black ? undefined : { color: ACCENT }}
            lang={useTrans && block.trans ? pivot : "fr"}
          >
            {text}
          </h2>
        </div>
      );
    }

    case "prerequisites":
      return (
        <div className="mb-5 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Prérequis
          </p>
          <ul className="space-y-1.5">
            {block.items.map((item) => (
              <li key={item.code} className="text-sm text-[var(--color-text-primary)]">
                {item.href ? (
                  <Link href={item.href} className="font-semibold underline-offset-2 hover:underline" style={{ color: ACCENT }}>
                    {item.code}
                  </Link>
                ) : (
                  <span className="font-semibold" style={{ color: ACCENT }}>{item.code}</span>
                )}
                <span className="text-[var(--color-text-secondary)]"> — {item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "plain": {
      const text = pickExpressTrans(block.trans, pivot, useTrans) ?? block.text;
      return (
        <p
          className="mb-4 text-sm leading-relaxed text-[var(--color-text-primary)]"
          lang={useTrans && block.trans ? pivot : "fr"}
        >
          {renderInlineBold(text)}
        </p>
      );
    }

    case "numbered":
      return (
        <div className="mb-5 space-y-2">
          {block.items.map((item, i) => (
            <p key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
              <span className="font-bold" style={{ color: ACCENT }}>{i + 1}.</span>
              <span>{renderInlineBold(item)}</span>
            </p>
          ))}
        </div>
      );

    case "section": {
      const lines = block.items ?? (block.text ? block.text.split("\n") : []);
      return (
        <div className="mb-4">
          {block.label ? (
            <p className="mb-1 text-sm font-bold" style={{ color: ACCENT }}>{block.label}</p>
          ) : null}
          <div
            className="space-y-1.5 border-l-2 px-3 py-1.5"
            style={{ borderColor: ACCENT }}
          >
            {lines.map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                {renderInlineBold(line)}
              </p>
            ))}
          </div>
        </div>
      );
    }

    case "bullets":
      return (
        <div className="mb-4">
          {block.label ? (
            <p className="mb-1 text-sm font-bold" style={{ color: ACCENT }}>{block.label}</p>
          ) : null}
          <ul className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ACCENT }} />
                <span>{renderInlineBold(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "subheading":
      return (
        <div className="mb-3 mt-5 flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full shrink-0"
            style={{ background: ACCENT }}
          />
          <h3 className="text-base font-bold text-[var(--color-text-primary)]">
            {block.text}
          </h3>
        </div>
      );

    case "table":
      return (
        <div className="mb-4 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: `color-mix(in srgb, ${ACCENT} 12%, transparent)` }}>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className={`px-3 py-2 text-left text-xs font-semibold tracking-wide ${block.accentHeader ? "uppercase" : ""}`}
                    style={{ color: ACCENT }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]"}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-[var(--color-text-primary)]">
                      {renderInlineBold(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "note":
      return (
        <div className="mb-4 flex gap-2 rounded-[var(--radius-md)] border border-amber-300 bg-amber-50 px-3 py-2.5 dark:border-amber-700 dark:bg-amber-950">
          <span className="shrink-0 text-amber-600 dark:text-amber-400">!</span>
          <p className="text-sm text-amber-800 dark:text-amber-200">{renderInlineBold(block.text)}</p>
        </div>
      );

    case "highlight": {
      const title = pickExpressTrans(block.trans, pivot, useTrans) ?? block.title;
      const items = (useTrans && block.transItems?.[pivot as keyof typeof block.transItems]) || block.items || [];
      if (items.length === 0) {
        return (
          <h3 className="mb-2 mt-4 text-sm font-bold" style={{ color: ACCENT }} lang={useTrans && block.trans ? pivot : "fr"}>
            {title}
          </h3>
        );
      }
      return (
        <div
          className="mb-4 rounded-[var(--radius-md)] border-l-2 px-4 py-3"
          style={{ borderColor: ACCENT, background: `color-mix(in srgb, ${ACCENT} 9%, transparent)` }}
        >
          <h3 className="mb-2 text-sm font-bold" style={{ color: ACCENT }}>{title}</h3>
          <ul className="space-y-1.5">
            {items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ACCENT }} />
                <span>{renderInlineBold(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case "dialogue":
      return (
        <div className="mb-4 space-y-2">
          {block.audioSrc ? (
            <SingleAudioPlayer src={block.audioSrc} label={block.audioLabel ?? "Audio"} />
          ) : null}
          {block.lines.map((line, i) => {
            const isA = line.role === "A";
            return (
              <div
                key={i}
                className={`flex ${isA ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    isA
                      ? "rounded-tl-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
                      : "rounded-tr-sm text-white"
                  }`}
                  style={!isA ? { background: ACCENT } : undefined}
                >
                  <p className={`mb-0.5 text-[10px] font-semibold uppercase tracking-wide ${isA ? "" : "text-white/80"}`}
                    style={isA ? { color: ACCENT } : undefined}>
                    {isA ? "Personne A" : "Personne B"}
                  </p>
                  <p>{line.text}</p>
                  {line.translation && (
                    <p className={`mt-0.5 text-xs italic ${isA ? "text-[var(--color-text-secondary)]" : "text-white/70"}`}>
                      {line.translation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );

    case "vocab":
      return (
        <div className="mb-4 space-y-2">
          {block.items.map((item, i) => (
            <div key={i} className="flex items-start gap-2 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] px-3 py-2">
              <span className="shrink-0 text-sm font-bold" style={{ color: ACCENT }}>
                {item.fr}
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">— {item.example}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ——— MCQ Exercise (no internal nav — parent handles it) ———

function MCQExercise({
  question,
  instruction,
  choices,
  answer,
  exNum,
  total,
  selected,
  setSelected,
  validated,
}: {
  question: string;
  instruction: string;
  choices: string[];
  answer: string;
  exNum: number;
  total: number;
  selected: string | null;
  setSelected: (v: string | null) => void;
  validated: boolean;
}) {
  /** En évaluation, la correction n'est révélée que sur la page de résultats. */
  const reveal = useEvalReveal();
  const showCorrection = validated && reveal;
  const isCorrect = selected === answer;

  return (
    <div className="flex flex-1 flex-col">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        Exercice {exNum} / {total}
      </p>
      <p className="mb-1 text-xs text-[var(--color-text-secondary)]">{instruction}</p>
      <p className="mb-5 text-base font-bold text-[var(--color-text-primary)]">{question}</p>

      <div className="space-y-2.5">
        {choices.map((c) => {
          let cls =
            "w-full rounded-[var(--radius-md)] border-2 px-4 py-3 text-left text-sm font-medium transition-colors";
          if (!showCorrection) {
            if (selected === c) {
              cls += " text-white border-transparent";
            } else {
              cls +=
                " border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:border-[var(--color-border-emphasis)]";
            }
          } else {
            if (c === answer) {
              cls +=
                " border-[var(--color-correct)] bg-[var(--color-correct-bg)] text-[var(--color-correct-text)]";
            } else if (c === selected && selected !== answer) {
              cls += " border-amber-500 bg-amber-50 text-amber-600";
            } else {
              cls +=
                " border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-50";
            }
          }

          return (
            <button
              key={c}
              type="button"
              onClick={() => {
                if (validated) return;
                setSelected(c);
              }}
              className={cls}
              style={
                !showCorrection && selected === c
                  ? { background: ACCENT, borderColor: ACCENT }
                  : undefined
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      {showCorrection && (
        <div
          className={`mt-4 rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium ${
            isCorrect
              ? "bg-[var(--color-correct-bg)] text-[var(--color-correct-text)]"
              : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-200"
          }`}
        >
          {isCorrect ? "✓ Bonne réponse !" : `✗ La bonne réponse est : ${answer}`}
        </div>
      )}
    </div>
  );
}

// ——— Main component ———

export function CommunicationRunner({ lessonId }: { lessonId: string }) {
  if (lessonId === "E1-0" || lessonId === "E2-0" || lessonId === "P1-0" || lessonId === "AI-1") return <CommunicationAiPractice />;
  if (lessonId.startsWith("PE-") || lessonId.startsWith("expression-e1")) return <ProductionEcriteRunner lessonId={lessonId} />;
  if (lessonId.startsWith("PO-")) return <OralProductionRunner lessonId={lessonId} />;
  if (lessonId.startsWith("CE-")) return <ComprehensionEcritRunner lessonId={lessonId} />;
  if (lessonId.startsWith("CO-") || lessonId.startsWith("comprehension-orale")) return <ComprehensionOraleRunner lessonId={lessonId} />;
  return <CommunicationLessonRunner lessonId={lessonId} />;
}

function CommunicationLessonRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const lesson = LESSONS[lessonId];
  const [lessonSeed] = useState(() => String(Date.now() % 100000));
  /** Seeds par exercice (entraînement) — le bouton refresh re-randomise le tirage. */
  const [exerciseSeeds, setExerciseSeeds] = useState<Record<string, string>>({});
  /** Exercice sélectionné sur la page de résultats (correction dépliée). */
  const [selectedResultIdx, setSelectedResultIdx] = useState<number | null>(null);

  const seedNum = Number(lessonSeed) || 1;
  const cePool = !lesson || lesson.writingLevel ? [] : lessonCePool(lesson);
  const ceEmailPoolAll = !lesson || lesson.writingLevel ? [] : lessonCeEmailPool(lesson);
  const poPoolAll = !lesson || lesson.writingLevel ? [] : (lesson.poDialogues ?? []);
  const pePoolAll = !lesson || lesson.writingLevel ? [] : (lesson.pePrompts ?? []);

  const [{ trainingExercises, evalPack, evalSteps }] = useState(() => {
    if (!lesson || lesson.writingLevel) {
      return {
        trainingExercises: [] as CommunicationExercise[],
        evalPack: {
          co: null as CommunicationExercise | null,
          ce: null as CommunicationExercise | null,
          po: null as ExpressPoDialogue | null,
          pe: null as WritingPrompt | null,
          poRole: "B" as "A" | "B",
        },
        evalSteps: [] as EvalPart[],
      };
    }
    const split = splitOralExercises(lesson, seedNum);
    const trainingCe = pickSeeded(cePool, seedNum + 11);
    const trainingCeEmail = pickSeeded(ceEmailPoolAll, seedNum + 12);
    const training = [
      ...split.training,
      ...(trainingCe ? [trainingCe] : []),
      ...(trainingCeEmail ? [trainingCeEmail] : []),
    ];
    const co = pickSeeded(
      split.evalEx.length > 0 ? split.evalEx : split.training,
      seedNum + 21,
    );
    const ce = pickSeededOther(cePool, trainingCe?.id, seedNum + 22);
    const po = pickSeeded(poPoolAll, seedNum + 23);
    const pe = pickSeeded(pePoolAll, seedNum + 24);
    const pack = {
      co,
      ce,
      po,
      pe,
      poRole: ((seedNum + 23) % 2 === 0 ? "B" : "A") as "A" | "B",
    };
    const steps: EvalPart[] = [];
    if (pack.co) steps.push("co");
    if (pack.ce) steps.push("ce");
    if (pack.po) steps.push("po");
    if (pack.pe) steps.push("pe");
    return { trainingExercises: training, evalPack: pack, evalSteps: steps };
  });

  const [phase, setPhase] = useState<Phase>(() => {
    if (lesson?.writingLevel) return "intro";
    // Bilan : pas de théorie → annonce d'évaluation (ou exercices s'il n'y a que de l'entraînement)
    if (lesson && lesson.theory.length === 0) {
      if (evalSteps.length > 0) return "eval_announce";
      if (trainingExercises.length > 0) return "exercises";
    }
    return "theory";
  });
  const [exIndex, setExIndex] = useState(0);
  const [evalStepIdx, setEvalStepIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [answers, setAnswers] = useState<(string | null)[]>(() => Array(trainingExercises.length).fill(null));
  const [validated, setValidated] = useState<boolean[]>(() => Array(trainingExercises.length).fill(false));
  const [exerciseValidated, setExerciseValidated] = useState(false);
  const [evalCoAnswer, setEvalCoAnswer] = useState<string | null>(null);
  const [evalCeAnswer, setEvalCeAnswer] = useState<string | null>(null);
  const [evalCoValidated, setEvalCoValidated] = useState(false);
  const [evalCeValidated, setEvalCeValidated] = useState(false);
  const [evalPoTranscripts, setEvalPoTranscripts] = useState<string[]>([]);
  const [evalPoDone, setEvalPoDone] = useState(false);
  const [evalPeText, setEvalPeText] = useState("");
  const [evalPeFeedback, setEvalPeFeedback] = useState<GrammarMatch[]>([]);
  const [evalPeChecked, setEvalPeChecked] = useState(false);

  const inEvalPhase =
    phase === "eval_co" || phase === "eval_ce" || phase === "eval_po" || phase === "eval_pe";
  const activeAnswers = answers;
  const activeValidated = validated;
  const activeIndex = exIndex;
  const selected =
    phase === "eval_co"
      ? evalCoAnswer
      : phase === "eval_ce"
        ? evalCeAnswer
        : (activeAnswers[activeIndex] ?? null);

  const [writingPrompt, setWritingPrompt] = useState<WritingPrompt | null>(() =>
    lesson?.writingLevel ? randomWritingPrompt(lesson.writingLevel) : null,
  );
  // ——— Production orale (dialogue) + production écrite par leçon ———
  const poPool = poPoolAll;
  const pePool = pePoolAll;
  const hasPo = poPool.length > 0;
  const hasPe = pePool.length > 0;
  const [poSeed, setPoSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const [poTranscripts, setPoTranscripts] = useState<string[]>([]);
  const [poDone, setPoDone] = useState(false);
  const poDialogue = hasPo ? poPool[poSeed % poPool.length] ?? null : null;
  const poStudentRole: "A" | "B" = poSeed % 2 === 0 ? "B" : "A";
  const [peSeed, setPeSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const pePrompt: WritingPrompt | null = hasPe ? pePool[peSeed % pePool.length] ?? null : null;
  // ——— Production écrite « répondre à un e-mail » ———
  const peEmailPool = !lesson || lesson.writingLevel ? [] : (lesson.peEmailPrompts ?? []);
  const hasPeEmail = peEmailPool.length > 0;
  const [peEmailSeed, setPeEmailSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const peEmailPrompt: WritingPrompt | null = hasPeEmail
    ? peEmailPool[peEmailSeed % peEmailPool.length] ?? null
    : null;
  const [peEmailText, setPeEmailText] = useState("");
  const [peEmailFeedback, setPeEmailFeedback] = useState<GrammarMatch[]>([]);
  const [peEmailChecked, setPeEmailChecked] = useState(false);
  const [writingText, setWritingText] = useState("");
  const [grammarFeedback, setGrammarFeedback] = useState<GrammarMatch[]>([]);
  const [grammarChecking, setGrammarChecking] = useState(false);
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);
  const [formTemplate, setFormTemplate] = useState<FormTemplate | null>(() =>
    lesson?.writingLevel ? randomFormTemplates(1)[0] ?? null : null,
  );
  const [formAnswers, setFormAnswers] = useState<Record<string, string>>({});
  const [formValidated, setFormValidated] = useState(false);

  useEffect(() => {
    if (!lesson?.writingLevel && !hasPe && !evalPack.pe) return;
    void getExpressionTeachersAction().then(setTeachers);
  }, [lesson?.writingLevel, hasPe, evalPack.pe]);

  if (!lesson) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <p className="text-sm text-[var(--color-text-secondary)]">Leçon introuvable.</p>
        <button type="button" onClick={() => router.push("/communication")} className="text-sm font-medium underline" style={{ color: ACCENT }}>
          Retour
        </button>
      </div>
    );
  }

  const hasEval = evalSteps.length > 0;
  const isOral = !lesson.writingLevel;
  const trainingTotalSteps = isOral
    ? 1 +
      trainingExercises.length +
      (hasPo ? 1 : 0) +
      (hasPe ? 1 : 0) +
      (hasPeEmail ? 1 : 0) +
      (hasEval ? 1 : 0)
    : 0;
  const oralStepIdx =
    phase === "theory"
      ? 0
      : phase === "exercises"
        ? 1 + exIndex
        : phase === "po"
          ? 1 + trainingExercises.length
          : phase === "pe"
            ? 1 + trainingExercises.length + (hasPo ? 1 : 0)
            : phase === "peEmail"
              ? 1 + trainingExercises.length + (hasPo ? 1 : 0) + (hasPe ? 1 : 0)
              : phase === "eval_announce"
                ? trainingTotalSteps - 1
                : 0;

  const activeWritingPhases = lesson.writingLevel
    ? (["form", "writing"] as const).filter((item) => (item === "form" ? !formValidated : !exerciseValidated))
    : [];
  const currentWritingStep = Math.max(0, activeWritingPhases.indexOf(phase as "form" | "writing"));

  const showTrainingBar =
    isOral &&
    (phase === "theory" ||
      phase === "exercises" ||
      phase === "po" ||
      phase === "pe" ||
      phase === "peEmail" ||
      phase === "eval_announce");
  const showWritingBar =
    Boolean(lesson.writingLevel) &&
    phase !== "intro" &&
    phase !== "score" &&
    activeWritingPhases.length > 0;

  function handleFinish() {
    try {
      markCommunicationLessonComplete(lesson.id);
    } catch {
      /* ignore */
    }
    router.push("/francais?tab=communication");
  }

  function goBack() {
    if (phase === "intro" || phase === "theory") {
      router.push("/francais?tab=communication");
    } else if (phase === "form") {
      setPhase("intro");
    } else if (phase === "writing") {
      if (lesson.writingLevel && formValidated) return;
      setPhase(lesson.writingLevel ? "form" : "theory");
      setGrammarFeedback([]);
      setExerciseValidated(false);
    } else if (phase === "exercises") {
      if (exIndex > 0) setExIndex(exIndex - 1);
      else setPhase("theory");
    } else if (phase === "po") {
      if (trainingExercises.length > 0) {
        setPhase("exercises");
        setExIndex(trainingExercises.length - 1);
      } else setPhase("theory");
    } else if (phase === "pe") {
      if (hasPo) setPhase("po");
      else if (trainingExercises.length > 0) {
        setPhase("exercises");
        setExIndex(trainingExercises.length - 1);
      } else setPhase("theory");
    } else if (phase === "peEmail") {
      if (hasPe) setPhase("pe");
      else if (hasPo) setPhase("po");
      else if (trainingExercises.length > 0) {
        setPhase("exercises");
        setExIndex(trainingExercises.length - 1);
      } else setPhase("theory");
    } else if (phase === "eval_announce") {
      if (hasPeEmail) setPhase("peEmail");
      else if (hasPe) setPhase("pe");
      else if (hasPo) setPhase("po");
      else if (trainingExercises.length > 0) {
        setPhase("exercises");
        setExIndex(trainingExercises.length - 1);
      } else setPhase("theory");
    } else if (inEvalPhase) {
      if (evalStepIdx > 0) {
        const prev = evalSteps[evalStepIdx - 1]!;
        setEvalStepIdx(evalStepIdx - 1);
        setPhase(evalPartToPhase(prev));
      } else setPhase("eval_announce");
    } else if (phase === "score") {
      if (hasEval && evalSteps.length > 0) {
        const last = evalSteps[evalSteps.length - 1]!;
        setEvalStepIdx(evalSteps.length - 1);
        setPhase(evalPartToPhase(last));
      } else {
        setPhase("exercises");
        setExIndex(Math.max(0, trainingExercises.length - 1));
      }
    }
  }

  function handleReset() {
    if (phase === "form" && lesson.writingLevel) {
      setFormTemplate(randomFormTemplates(1)[0] ?? null);
      setFormAnswers({});
      setFormValidated(false);
      return;
    }
    if (phase === "writing" && lesson.writingLevel) {
      setWritingText("");
      setGrammarFeedback([]);
      setExerciseValidated(false);
      setWritingPrompt(randomWritingPrompt(lesson.writingLevel));
      return;
    }
    if (phase === "po") {
      // Nouvelle situation de dialogue.
      setPoSeed((prev) => prev + 1 + (Date.now() % 7));
      setPoTranscripts([]);
      setPoDone(false);
      return;
    }
    if (phase === "pe") {
      // Nouvelle consigne d'écriture.
      setPeSeed((prev) => prev + 1 + (Date.now() % 7));
      setWritingText("");
      setGrammarFeedback([]);
      setExerciseValidated(false);
      return;
    }
    if (phase === "peEmail") {
      // Nouvel e-mail à répondre.
      setPeEmailSeed((prev) => prev + 1 + (Date.now() % 7));
      setPeEmailText("");
      setPeEmailFeedback([]);
      setPeEmailChecked(false);
      return;
    }
    if (phase === "eval_co") {
      setEvalCoAnswer(null);
      setEvalCoValidated(false);
      if (evalPack.co) {
        setExerciseSeeds((prev) => ({ ...prev, [evalPack.co!.id]: String(Date.now() % 100000) }));
      }
      return;
    }
    if (phase === "eval_ce") {
      setEvalCeAnswer(null);
      setEvalCeValidated(false);
      if (evalPack.ce) {
        setExerciseSeeds((prev) => ({ ...prev, [evalPack.ce!.id]: String(Date.now() % 100000) }));
      }
      return;
    }
    if (phase === "eval_po") {
      setEvalPoTranscripts([]);
      setEvalPoDone(false);
      return;
    }
    if (phase === "eval_pe") {
      setEvalPeText("");
      setEvalPeFeedback([]);
      setEvalPeChecked(false);
      return;
    }
    // Entraînement : re-randomise le tirage de l'exercice courant.
    const ex = trainingExercises[exIndex];
    if (ex) {
      setExerciseSeeds((prev) => ({
        ...prev,
        [ex.id]: String((Date.now() + exIndex * 7919) % 100000),
      }));
    }
    setAnswers((prev) => prev.map((a, i) => (i === exIndex ? null : a)));
    setValidated((prev) => prev.map((v, i) => (i === exIndex ? false : v)));
  }

  async function fetchGrammarMatches(text: string): Promise<GrammarMatch[]> {
    if (!text.trim()) return [];
    try {
      const response = await fetch("/api/check-grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = (await response.json()) as { matches?: GrammarMatch[] };
      return (data.matches ?? []).filter(
        (match) => !IGNORED_GRAMMAR_RULES.has(match.rule?.id ?? ""),
      );
    } catch {
      return [];
    }
  }

  async function runGrammarCheck() {
    setGrammarChecking(true);
    try {
      setGrammarFeedback(await fetchGrammarMatches(writingText));
    } finally {
      setGrammarChecking(false);
      setExerciseValidated(true);
    }
  }

  async function runPeEmailGrammarCheck() {
    setGrammarChecking(true);
    try {
      setPeEmailFeedback(await fetchGrammarMatches(peEmailText));
    } finally {
      setGrammarChecking(false);
      setPeEmailChecked(true);
    }
  }

  async function handleValidate() {
    if (phase === "form") {
      setFormValidated(true);
      if (lesson.writingLevel) setPhase("writing");
      return;
    }
    if (phase === "writing") {
      if (!writingPrompt || exerciseValidated || grammarChecking) return;
      await runGrammarCheck();
      return;
    }
    if (phase === "po") {
      setPoDone(true);
      return;
    }
    if (phase === "pe") {
      // Entraînement : on peut valider sans saisir (minimum de mots conseillé seulement).
      if (!pePrompt || exerciseValidated || grammarChecking) return;
      await runGrammarCheck();
      return;
    }
    if (phase === "peEmail") {
      if (!peEmailPrompt || peEmailChecked || grammarChecking) return;
      await runPeEmailGrammarCheck();
      return;
    }
    if (phase === "exercises") {
      if (validated[exIndex]) return;
      const ex = trainingExercises[exIndex];
      // Écoute : validation libre (comme CO). QCM texte : exige une réponse.
      if (ex?.type === "mcq" && !selected) return;
      setValidated((prev) => prev.map((v, i) => (i === exIndex ? true : v)));
      return;
    }
    if (phase === "eval_co") {
      if (evalCoValidated) return;
      setEvalCoValidated(true);
      return;
    }
    if (phase === "eval_ce") {
      if (evalCeValidated) return;
      setEvalCeValidated(true);
      return;
    }
    if (phase === "eval_po") {
      setEvalPoDone(true);
      return;
    }
    if (phase === "eval_pe") {
      if (evalPeChecked || grammarChecking) return;
      setGrammarChecking(true);
      try {
        setEvalPeFeedback(await fetchGrammarMatches(evalPeText));
      } finally {
        setGrammarChecking(false);
        setEvalPeChecked(true);
      }
    }
  }

  function goNext() {
    if (phase === "intro") {
      setPhase(lesson.writingLevel ? "form" : "theory");
      return;
    }
    if (phase === "theory") {
      if (lesson.writingLevel) {
        setPhase("form");
        return;
      }
      if (trainingExercises.length === 0) {
        if (hasEval) setPhase("eval_announce");
        else handleFinish();
        return;
      }
      setPhase("exercises");
      setExIndex(0);
      return;
    }
    if (phase === "form") {
      setPhase("writing");
      return;
    }
    if (phase === "writing") {
      if (!exerciseValidated) return;
      handleFinish();
      return;
    }
    if (phase === "exercises") {
      if (exIndex + 1 < trainingExercises.length) {
        setExIndex(exIndex + 1);
        return;
      }
      if (hasPo) {
        setPhase("po");
        return;
      }
      if (hasPe) {
        setPhase("pe");
        return;
      }
      if (hasEval) {
        setPhase("eval_announce");
        return;
      }
      const newResults = trainingExercises.map(
        (ex, i) => scoreCommunicationExercise(ex, answers[i]) >= 0.999,
      );
      setResults(newResults);
      setPhase("score");
      return;
    }
    if (phase === "po") {
      if (hasPe) {
        setPhase("pe");
        return;
      }
      if (hasPeEmail) {
        setPhase("peEmail");
        return;
      }
      if (hasEval) {
        setPhase("eval_announce");
        return;
      }
      handleFinish();
      return;
    }
    if (phase === "pe") {
      if (hasPeEmail) {
        setPhase("peEmail");
        return;
      }
      if (hasEval) {
        setPhase("eval_announce");
        return;
      }
      handleFinish();
      return;
    }
    if (phase === "peEmail") {
      if (hasEval) {
        setPhase("eval_announce");
        return;
      }
      handleFinish();
      return;
    }
    if (phase === "eval_announce") {
      if (evalSteps.length === 0) {
        setPhase("score");
        return;
      }
      setEvalStepIdx(0);
      setPhase(evalPartToPhase(evalSteps[0]!));
      return;
    }
    if (inEvalPhase) {
      if (evalStepIdx + 1 < evalSteps.length) {
        const nextPart = evalSteps[evalStepIdx + 1]!;
        setEvalStepIdx(evalStepIdx + 1);
        setPhase(evalPartToPhase(nextPart));
        return;
      }
      setPhase("score");
      return;
    }
    handleFinish();
  }

  const isLastStep =
    phase === "score" ||
    phase === "writing" ||
    (phase === "theory" &&
      trainingExercises.length === 0 &&
      !hasEval &&
      !hasPo &&
      !hasPe &&
      !lesson.writingLevel);
  const showExerciseControls =
    phase === "exercises" ||
    inEvalPhase ||
    phase === "writing" ||
    phase === "form" ||
    phase === "po" ||
    phase === "pe" ||
    phase === "peEmail";
  // Entraînement PO / PE / PE e-mail : Suivant libre (pas besoin de valider).
  // Éval PO/PE : Suivant libre aussi (Valider optionnel).
  const nextDisabled =
    (phase === "writing" && !exerciseValidated) ||
    (phase === "form" && !formValidated) ||
    phase === "eval_announce";
  const currentExValidated =
    phase === "eval_co"
      ? evalCoValidated
      : phase === "eval_ce"
        ? evalCeValidated
        : phase === "eval_po"
          ? evalPoDone
          : phase === "eval_pe"
            ? evalPeChecked
            : (activeValidated[activeIndex] ?? false);

  // Barème évaluation : CO 5 + CE 5 + PO 5 + PE 10 = 25
  const coPoints = evalPack.co
    ? Math.round(scoreCommunicationExercise(evalPack.co, evalCoAnswer) * 5 * 10) / 10
    : 0;
  const cePoints = evalPack.ce
    ? Math.round(scoreCommunicationExercise(evalPack.ce, evalCeAnswer) * 5 * 10) / 10
    : 0;
  const poStudentTurns = evalPack.po
    ? evalPack.po.lines.filter((l) => l.role === evalPack.poRole).length
    : 0;
  const poFilled = evalPoTranscripts.filter((t) => t.trim().length > 0).length;
  const poPoints = poStudentTurns > 0
    ? Math.round((Math.min(poFilled, 5) / 5) * 5 * 10) / 10
    : 0;
  const pePending = Boolean(evalPack.pe);
  const pePoints = 0; // noté par le professeur (/10)
  const evalTotalPoints = coPoints + cePoints + poPoints + pePoints;
  const evalMaxPoints = 25;
  const grade = hasEval
    ? gradeFromEvalScore(evalTotalPoints)
    : linearSwissGrade(
        results.filter(Boolean).length,
        Math.max(1, results.length || trainingExercises.length),
      );
  const passed = !pePending && grade >= PASSING_GRADE;
  const scoreCorrect = hasEval ? evalTotalPoints : results.filter(Boolean).length;
  const scoreTotal = hasEval ? evalMaxPoints : (results.length || trainingExercises.length);

  function renderOralExercise(ex: CommunicationExercise, index: number, total: number) {
    if (ex.type === "listening") {
      return (
        <ExpressListeningExercise
          key={`${ex.id}-${phase}-${exerciseSeeds[ex.id] ?? ""}`}
          exercise={ex}
          exNum={index + 1}
          seed={exerciseSeeds[ex.id] ?? lessonSeed}
          selected={selected}
          setSelected={(v) => {
            if (phase === "eval_co") {
              setEvalCoAnswer(v);
              if (v !== evalCoAnswer) setEvalCoValidated(false);
            } else if (phase === "eval_ce") {
              setEvalCeAnswer(v);
              if (v !== evalCeAnswer) setEvalCeValidated(false);
            } else {
              setAnswers((prev) => prev.map((a, i) => (i === exIndex ? v : a)));
              if (v !== answers[exIndex]) {
                setValidated((prev) => prev.map((vv, i) => (i === exIndex ? false : vv)));
              }
            }
          }}
          validated={currentExValidated}
        />
      );
    }
    return (
      <MCQExercise
        key={index}
        question={ex.question ?? ""}
        instruction={ex.instruction}
        choices={ex.choices ?? []}
        answer={ex.answer ?? ""}
        exNum={index + 1}
        total={total}
        selected={selected}
        setSelected={(v) => {
          if (phase === "eval_co") {
            setEvalCoAnswer(v);
            if (v !== evalCoAnswer) setEvalCoValidated(false);
          } else if (phase === "eval_ce") {
            setEvalCeAnswer(v);
            if (v !== evalCeAnswer) setEvalCeValidated(false);
          } else {
            setAnswers((prev) => prev.map((a, i) => (i === exIndex ? v : a)));
            if (v !== answers[exIndex]) {
              setValidated((prev) => prev.map((vv, i) => (i === exIndex ? false : vv)));
            }
          }
        }}
        validated={currentExValidated}
      />
    );
  }

  return (
    <div className="app-shell flex min-h-screen flex-col pt-4 pb-32 lg:pb-28">
      <header className="mb-4 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: ACCENT }}>
          {lesson.writingLevel ? "Français · Expression écrite" : "Français · Communication"}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/francais?tab=communication"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
            style={{ background: ACCENT }}
            aria-label="Retour au français"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {lesson.code} — {lesson.title}
          </h1>
        </div>
      </header>

      {showTrainingBar && (
        <div className="mb-6" data-no-print>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
              Entraînement
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              {oralStepIdx + 1} / {trainingTotalSteps}
            </p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: trainingTotalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < oralStepIdx
                    ? ""
                    : i === oralStepIdx
                      ? "opacity-60"
                      : "bg-[var(--color-border-default)]"
                }`}
                style={i <= oralStepIdx ? { background: ACCENT } : undefined}
              />
            ))}
          </div>
        </div>
      )}

      {inEvalPhase && (
        <div className="mb-6" data-no-print>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-correction)]">Évaluation</p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              {evalStepIdx + 1} / {evalSteps.length}
            </p>
          </div>
          <div className="flex gap-1">
            {evalSteps.map((part, i) => (
              <div
                key={part}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i === evalStepIdx
                    ? "bg-[var(--color-correction)]"
                    : i < evalStepIdx
                      ? "bg-[var(--color-correction)]/70"
                      : "bg-[var(--color-border-default)]"
                }`}
                title={part.toUpperCase()}
              />
            ))}
          </div>
        </div>
      )}

      {showWritingBar && (
        <div className="mb-6 flex gap-0.5">
          {activeWritingPhases.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                const target = activeWritingPhases[i];
                if (target) setPhase(target);
              }}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i > currentWritingStep ? "bg-[var(--color-border-default)]" : ""}`}
              style={i <= currentWritingStep ? { background: ACCENT, opacity: i < currentWritingStep ? 1 : 0.6 } : undefined}
              aria-label={`Aller à l'étape ${i + 1}`}
            />
          ))}
        </div>
      )}

      {phase === "intro" && lesson.writingLevel && (
        <WritingIntroPage lesson={lesson} onStart={() => setPhase("form")} />
      )}

      {phase === "theory" && (
        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            {/* Théorie allégée : sans prérequis, sans tableau ni lexique de fin. */}
            {lesson.theory
              .filter((block) => !["prerequisites", "table", "vocab"].includes(block.type))
              .map((block, i) => (
                <TheoryBlock key={i} block={block} />
              ))}
          </div>
        </div>
      )}

      {phase === "form" && formTemplate && (
        <FormExercise
          template={formTemplate}
          answers={formAnswers}
          validated={formValidated}
          advanced={lesson.writingLevel === "avance"}
          onChange={(fieldId, value) => {
            if (formValidated) return;
            setFormAnswers((prev) => ({ ...prev, [fieldId]: value }));
          }}
        />
      )}

      {phase === "writing" && writingPrompt && (
        <WritingExercise
          lessonCode={lesson.code}
          prompt={writingPrompt}
          text={writingText}
          onTextChange={(value) => {
            setWritingText(value);
            setExerciseValidated(false);
            setGrammarFeedback([]);
          }}
          feedback={grammarFeedback}
          checked={exerciseValidated}
          checking={grammarChecking}
          teachers={teachers}
        />
      )}

      {phase === "exercises" && trainingExercises[exIndex] && (
        renderOralExercise(trainingExercises[exIndex]!, exIndex, trainingExercises.length)
      )}

      {phase === "po" && poDialogue && (
        <ExpressPoDialogueExercise
          key={`po-${poDialogue.id}-${poSeed}`}
          dialogue={poDialogue}
          studentRole={poStudentRole}
          exNum={trainingExercises.length + 1}
          validated={poDone}
          transcripts={poTranscripts}
          onTranscriptsChange={setPoTranscripts}
        />
      )}

      {phase === "pe" && pePrompt && (
        <div className="flex flex-1 flex-col">
          <h2 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">
            Exercice {trainingExercises.length + (hasPo ? 1 : 0) + 1} — Production écrite
          </h2>
          <WritingExercise
            lessonCode={lesson.code}
            prompt={pePrompt}
            text={writingText}
            onTextChange={(value) => {
              setWritingText(value);
              setExerciseValidated(false);
              setGrammarFeedback([]);
            }}
            feedback={grammarFeedback}
            checked={exerciseValidated}
            checking={grammarChecking}
            teachers={teachers}
          />
        </div>
      )}

      {phase === "peEmail" && peEmailPrompt && (
        <div className="flex flex-1 flex-col">
          <h2 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">
            Exercice {trainingExercises.length + (hasPo ? 1 : 0) + (hasPe ? 1 : 0) + 1} — Répondre à
            un e-mail
          </h2>
          <WritingExercise
            lessonCode={lesson.code}
            prompt={peEmailPrompt}
            text={peEmailText}
            onTextChange={(value) => {
              setPeEmailText(value);
              setPeEmailChecked(false);
              setPeEmailFeedback([]);
            }}
            feedback={peEmailFeedback}
            checked={peEmailChecked}
            checking={grammarChecking}
            teachers={teachers}
          />
        </div>
      )}

      {phase === "eval_announce" && (
        <EvalAnnounceScreen
          accent={ACCENT}
          lessonTitle={`${lesson.code} — ${lesson.title}`}
          exerciseCount={evalSteps.length}
          minutes={15}
          onStart={() => {
            if (evalSteps.length === 0) {
              setPhase("score");
              return;
            }
            setEvalStepIdx(0);
            setPhase(evalPartToPhase(evalSteps[0]!));
          }}
        />
      )}

      {phase === "eval_co" && evalPack.co && (
        <EvalRevealContext.Provider value={false}>
          {renderOralExercise(evalPack.co, 0, evalSteps.length)}
        </EvalRevealContext.Provider>
      )}

      {phase === "eval_ce" && evalPack.ce && (
        <EvalRevealContext.Provider value={false}>
          {renderOralExercise(evalPack.ce, evalSteps.indexOf("ce"), evalSteps.length)}
        </EvalRevealContext.Provider>
      )}

      {phase === "eval_po" && evalPack.po && (
        <EvalRevealContext.Provider value={false}>
          <ExpressPoDialogueExercise
            key={`eval-po-${evalPack.po.id}`}
            dialogue={evalPack.po}
            studentRole={evalPack.poRole}
            exNum={evalSteps.indexOf("po") + 1}
            validated={evalPoDone}
            transcripts={evalPoTranscripts}
            onTranscriptsChange={setEvalPoTranscripts}
          />
        </EvalRevealContext.Provider>
      )}

      {phase === "eval_pe" && evalPack.pe && (
        <div className="flex flex-1 flex-col">
          <h2 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">
            Exercice {evalSteps.indexOf("pe") + 1} — Production écrite
          </h2>
          <WritingExercise
            lessonCode={lesson.code}
            prompt={evalPack.pe}
            text={evalPeText}
            onTextChange={(value) => {
              setEvalPeText(value);
              setEvalPeChecked(false);
              setEvalPeFeedback([]);
            }}
            feedback={evalPeFeedback}
            checked={evalPeChecked}
            checking={grammarChecking}
            teachers={teachers}
          />
        </div>
      )}

      {phase === "score" && (
        <div className="flex flex-1 flex-col gap-6">
          {hasEval ? (
            <CommunicationResultsSummary
              totalPoints={scoreCorrect}
              maxPoints={scoreTotal}
              pendingTeacher={pePending}
            />
          ) : (
            <EvalResultsSummary
              accent={ACCENT}
              points={scoreCorrect}
              maxPoints={Math.max(1, scoreTotal)}
              grade={grade}
              passed={passed}
            />
          )}
          <EvalResultsHint />
          {hasEval ? (
            <EvalExerciseResultList>
              {evalPack.co && (
                <EvalExerciseResultRow
                  index={0}
                  correct={coPoints}
                  total={5}
                  accent={ACCENT}
                  isSelected={selectedResultIdx === 0}
                  onToggle={() => setSelectedResultIdx(selectedResultIdx === 0 ? null : 0)}
                >
                  <EvalRevealContext.Provider value={true}>
                    <ExpressListeningExercise
                      exercise={evalPack.co}
                      exNum={1}
                      seed={lessonSeed}
                      selected={evalCoAnswer}
                      setSelected={() => {}}
                      validated
                    />
                  </EvalRevealContext.Provider>
                </EvalExerciseResultRow>
              )}
              {evalPack.ce && (
                <EvalExerciseResultRow
                  index={1}
                  correct={cePoints}
                  total={5}
                  accent={ACCENT}
                  isSelected={selectedResultIdx === 1}
                  onToggle={() => setSelectedResultIdx(selectedResultIdx === 1 ? null : 1)}
                >
                  <EvalRevealContext.Provider value={true}>
                    <ExpressListeningExercise
                      exercise={evalPack.ce}
                      exNum={2}
                      seed={lessonSeed}
                      selected={evalCeAnswer}
                      setSelected={() => {}}
                      validated
                    />
                  </EvalRevealContext.Provider>
                </EvalExerciseResultRow>
              )}
              {evalPack.po && (
                <EvalExerciseResultRow
                  index={2}
                  correct={poPoints}
                  total={5}
                  accent={ACCENT}
                  isSelected={selectedResultIdx === 2}
                  onToggle={() => setSelectedResultIdx(selectedResultIdx === 2 ? null : 2)}
                >
                  <ExpressPoDialogueExercise
                    dialogue={evalPack.po}
                    studentRole={evalPack.poRole}
                    exNum={3}
                    validated
                    transcripts={evalPoTranscripts}
                    onTranscriptsChange={() => {}}
                  />
                </EvalExerciseResultRow>
              )}
              {evalPack.pe && (
                <EvalExerciseResultRow
                  index={3}
                  correct={0}
                  total={10}
                  accent={ACCENT}
                  isSelected={selectedResultIdx === 3}
                  onToggle={() => setSelectedResultIdx(selectedResultIdx === 3 ? null : 3)}
                >
                  <div className="space-y-2 p-2 text-sm text-[var(--color-text-secondary)]">
                    <p className="font-semibold text-[var(--color-text-primary)]">{evalPack.pe.title}</p>
                    <p>Production écrite : en attente de la correction du professeur (/10).</p>
                    {evalPeText.trim() ? (
                      <p className="whitespace-pre-wrap rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-3 text-[var(--color-text-primary)]">
                        {evalPeText}
                      </p>
                    ) : (
                      <p>Aucune production saisie.</p>
                    )}
                  </div>
                </EvalExerciseResultRow>
              )}
            </EvalExerciseResultList>
          ) : (
            <EvalExerciseResultList>
              {trainingExercises.map((ex, i) => {
                const stored = answers[i] ?? null;
                const stats = exerciseResultStats(ex, stored, lessonSeed);
                const isSelectedResult = selectedResultIdx === i;
                return (
                  <EvalExerciseResultRow
                    key={ex.id}
                    index={i}
                    correct={stats.correct}
                    total={stats.total}
                    accent={ACCENT}
                    isSelected={isSelectedResult}
                    onToggle={() => setSelectedResultIdx(isSelectedResult ? null : i)}
                  >
                    <EvalRevealContext.Provider value={true}>
                      {ex.type === "listening" ? (
                        <ExpressListeningExercise
                          exercise={ex}
                          exNum={i + 1}
                          seed={lessonSeed}
                          selected={stored}
                          setSelected={() => {}}
                          validated
                        />
                      ) : (
                        <MCQExercise
                          question={ex.question ?? ""}
                          instruction={ex.instruction}
                          choices={ex.choices ?? []}
                          answer={ex.answer ?? ""}
                          exNum={i + 1}
                          total={trainingExercises.length}
                          selected={stored}
                          setSelected={() => {}}
                          validated
                        />
                      )}
                    </EvalRevealContext.Provider>
                  </EvalExerciseResultRow>
                );
              })}
            </EvalExerciseResultList>
          )}
          <button
            type="button"
            onClick={() => {
              if (hasEval && evalSteps.length > 0) {
                setEvalCoAnswer(null);
                setEvalCeAnswer(null);
                setEvalCoValidated(false);
                setEvalCeValidated(false);
                setEvalPoTranscripts([]);
                setEvalPoDone(false);
                setEvalPeText("");
                setEvalPeFeedback([]);
                setEvalPeChecked(false);
                setEvalStepIdx(0);
                setPhase(evalPartToPhase(evalSteps[0]!));
              } else {
                setPhase("exercises");
                setExIndex(0);
                setAnswers(Array(trainingExercises.length).fill(null));
                setValidated(Array(trainingExercises.length).fill(false));
              }
              setResults([]);
            }}
            className="w-full rounded-[var(--radius-md)] border-2 py-3 text-sm font-bold transition-colors hover:bg-[var(--color-bg-secondary)]"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Recommencer {hasEval ? "l'évaluation" : "les exercices"}
          </button>
        </div>
      )}

      <div className={`hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)] ${phase === "eval_announce" ? "invisible" : ""}`}>
        <div className="border-t border-[var(--color-border-default)]">
          <div className="app-shell-bar flex items-center justify-between py-3">
            <button
              type="button"
              onClick={goBack}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity"
            >
              ← Retour
            </button>

            {showExerciseControls ? (
              <div className="flex items-center gap-2">
                {!inEvalPhase && (
                  <button
                    type="button"
                    data-nav-action="refresh"
                    onClick={handleReset}
                    disabled={grammarChecking}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90 disabled:opacity-30"
                    aria-label="Nouvelles questions (réinitialiser)"
                    title="Nouvelles questions"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M1 4v6h6" />
                      <path d="M3.51 15a9 9 0 1 0 .49-4" />
                    </svg>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => void handleValidate()}
                  disabled={
                    (phase === "exercises" || inEvalPhase
                      ? currentExValidated
                      : phase === "form"
                        ? formValidated
                        : phase === "po"
                          ? poDone
                          : phase === "pe"
                            ? exerciseValidated
                            : phase === "peEmail"
                              ? peEmailChecked
                              : exerciseValidated) || grammarChecking
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90 disabled:opacity-30"
                  style={{ background: ACCENT }}
                  aria-label="Valider"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
              </div>
            ) : (
              <span />
            )}

            <button
              type="button"
              onClick={goNext}
              disabled={nextDisabled}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              style={{ background: ACCENT }}
            >
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

