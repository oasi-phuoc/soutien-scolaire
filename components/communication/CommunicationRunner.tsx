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
import { normalizeCommunicationProgress } from "@/lib/curriculum/communication-data";
import {
  COMMUNICATION_E2_1,
  type CommunicationLesson,
  type CommunicationTheoryBlock,
} from "@/lib/curriculum/content/communication/communication-p1-1";
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
import { FormProductionRunner } from "@/components/communication/FormProductionRunner";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

const LESSONS: Record<string, CommunicationLesson> = {
  "E1-1": EXPRESSION_E1_1,
  "E1-2": EXPRESSION_E1_2,
  "E1-3": EXPRESSION_E1_3,
  "E2-1": COMMUNICATION_E2_1,
  "P1-1": COMMUNICATION_E2_1,
  "A1-1": COMMUNICATION_E2_1,
};

type Phase = "theory" | "writing" | "exercises" | "score";

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
    if (!teacherId || !checked || !inRange || sent) return;
    startSending(async () => {
      const result = await submitExpressionAction({
        teacherId,
        lessonCode,
        level: lessonCode === "E1.1" ? "base" : lessonCode === "E1.2" ? "moyen" : "avance",
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
        <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">{prompt.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-primary)]">{prompt.situation}</p>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">{prompt.instruction}</p>
        <p className="mt-3 text-xs font-semibold text-[var(--color-text-secondary)]">Indiquez :</p>
        <ul className="mt-1 space-y-1">
          {prompt.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-[var(--color-text-primary)]">
              <span className="text-[var(--color-accent-fr)]">•</span><span>{point} ;</span>
            </li>
          ))}
        </ul>
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
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Aucune erreur évidente détectée. Relisez encore le contenu et l’organisation.</p>
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
              <select
                value={teacherId}
                onChange={(event) => setTeacherId(event.target.value)}
                disabled={sent}
                className="min-h-11 flex-1 rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/35 bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-fr)]"
              >
                <option value="">Choisissez un professeur</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>{[teacher.prenom, teacher.nom].filter(Boolean).join(" ") || "Professeur"}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={sendToTeacher}
                disabled={!teacherId || !inRange || isSending || sent}
                className="min-h-11 rounded-[var(--radius-md)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white disabled:opacity-35"
              >
                {sent ? "Envoyé" : isSending ? "Envoi…" : "Envoyer"}
              </button>
            </div>
          ) : (
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Aucun professeur n’est encore disponible dans la liste.</p>
          )}
          {sendMessage && <p className={`mt-2 text-xs font-semibold ${sent ? "text-emerald-600" : "text-amber-600"}`}>{sendMessage}</p>}
        </section>
      )}
    </div>
  );
}

// ——— Theory block renderers ———

function TheoryBlock({ block }: { block: CommunicationTheoryBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <div className="mb-6">
          <h2
            className="text-xl font-bold"
            style={{ color: ACCENT, borderBottom: `2px solid ${ACCENT}`, paddingBottom: "0.25rem" }}
          >
            {block.text}
          </h2>
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
                    className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide"
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
                      {cell}
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
          <span className="shrink-0 text-amber-600 dark:text-amber-400">⚠️</span>
          <p className="text-sm text-amber-800 dark:text-amber-200">{block.text}</p>
        </div>
      );

    case "highlight":
      return (
        <div
          className="mb-4 rounded-[var(--radius-md)] border-l-2 px-4 py-3"
          style={{ borderColor: ACCENT, background: `color-mix(in srgb, ${ACCENT} 9%, transparent)` }}
        >
          <h3 className="mb-2 text-sm font-bold" style={{ color: ACCENT }}>{block.title}</h3>
          <ul className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ACCENT }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "dialogue":
      return (
        <div className="mb-4 space-y-2">
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
          if (!validated) {
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
                !validated && selected === c
                  ? { background: ACCENT, borderColor: ACCENT }
                  : undefined
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      {validated && (
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
  if (lessonId === "E2-0" || lessonId === "P1-0" || lessonId === "AI-1") return <CommunicationAiPractice />;
  if (lessonId === "E1-0") return <FormProductionRunner />;
  if (lessonId.startsWith("PO-")) return <OralProductionRunner lessonId={lessonId} />;
  return <CommunicationLessonRunner lessonId={lessonId} />;
}

function CommunicationLessonRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const lesson = LESSONS[lessonId];

  const [phase, setPhase] = useState<Phase>("theory");
  const [exIndex, setExIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  // Per-exercise state for free navigation
  const [answers, setAnswers] = useState<(string | null)[]>(() =>
    lesson ? Array(lesson.exercises.length).fill(null) : []
  );
  const [validated, setValidated] = useState<boolean[]>(() =>
    lesson ? Array(lesson.exercises.length).fill(false) : []
  );
  const [exerciseValidated, setExerciseValidated] = useState(false);
  // Derived per-exercise state (for backwards compat with writing phase logic)
  const selected = answers[exIndex] ?? null;

  const [writingPrompt, setWritingPrompt] = useState<WritingPrompt | null>(() =>
    lesson?.writingLevel ? randomWritingPrompt(lesson.writingLevel) : null,
  );
  const [writingText, setWritingText] = useState("");
  const [grammarFeedback, setGrammarFeedback] = useState<GrammarMatch[]>([]);
  const [grammarChecking, setGrammarChecking] = useState(false);
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);

  useEffect(() => {
    if (!lesson?.writingLevel) return;
    void getExpressionTeachersAction().then(setTeachers);
  }, [lesson?.writingLevel]);

  if (!lesson) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <p className="text-sm text-[var(--color-text-secondary)]">Leçon introuvable.</p>
        <button
          type="button"
          onClick={() => router.push("/communication")}
          className="text-sm font-medium underline"
          style={{ color: ACCENT }}
        >
          Retour
        </button>
      </div>
    );
  }

  const totalEx = lesson.exercises.length;
  const totalSteps = lesson.writingLevel ? 2 : 3;
  const stepIdx =
    phase === "theory" ? 0 : phase === "writing" ? 1 : phase === "exercises" ? 1 : 2;

  function handleFinish() {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      const prev = normalizeCommunicationProgress(raw ? JSON.parse(raw) : {});
      prev[lesson.id] = true;
      localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(prev));
      const MAIN_KEY = "soutien-learning-progress-v1";
      const mainRaw = localStorage.getItem(MAIN_KEY);
      if (mainRaw) {
        const main = JSON.parse(mainRaw) as Record<string, unknown>;
        main.commProgress = prev;
        localStorage.setItem(MAIN_KEY, JSON.stringify(main));
        window.dispatchEvent(new CustomEvent("progress-saved", { detail: main }));
      }
    } catch {
      /* ignore */
    }
    router.push("/francais?tab=communication");
  }

  function goBack() {
    if (phase === "theory") {
      router.push("/francais?tab=communication");
    } else if (phase === "writing") {
      setPhase("theory");
      setGrammarFeedback([]);
      setExerciseValidated(false);
    } else if (phase === "exercises") {
      if (exIndex > 0) {
        setExIndex(exIndex - 1);
      } else {
        setPhase("theory");
      }
    } else {
      setPhase("exercises");
      setExIndex(totalEx - 1);
    }
  }

  function handleReset() {
    if (phase === "writing" && lesson.writingLevel) {
      setWritingText("");
      setGrammarFeedback([]);
      setExerciseValidated(false);
      setWritingPrompt(randomWritingPrompt(lesson.writingLevel));
      return;
    }
    setAnswers((prev) => prev.map((a, i) => i === exIndex ? null : a));
    setValidated((prev) => prev.map((v, i) => i === exIndex ? false : v));
  }

  async function handleValidate() {
    if (phase === "writing") {
      if (!writingPrompt || exerciseValidated || grammarChecking) return;
      const count = wordCount(writingText);
      if (count < writingPrompt.minWords || count > writingPrompt.maxWords) return;
      setGrammarChecking(true);
      try {
        const response = await fetch("/api/check-grammar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: writingText }),
        });
        const data = await response.json() as { matches?: GrammarMatch[] };
        setGrammarFeedback((data.matches ?? []).filter((match) => !IGNORED_GRAMMAR_RULES.has(match.rule?.id ?? "")));
      } catch {
        setGrammarFeedback([]);
      } finally {
        setGrammarChecking(false);
        setExerciseValidated(true);
      }
      return;
    }
    if (!selected || validated[exIndex]) return;
    setValidated((prev) => prev.map((v, i) => i === exIndex ? true : v));
  }

  function goNext() {
    if (phase === "theory") {
      if (lesson.writingLevel) {
        setPhase("writing");
        return;
      }
      if (totalEx === 0) {
        handleFinish();
        return;
      }
      setPhase("exercises");
    } else if (phase === "writing") {
      if (!exerciseValidated) return;
      handleFinish();
    } else if (phase === "exercises") {
      if (exIndex + 1 < totalEx) {
        setExIndex(exIndex + 1);
      } else {
        // Last exercise: compute score from all answers and go to score
        const newResults = lesson.exercises.map((ex, i) => answers[i] === ex.answer);
        setResults(newResults);
        setPhase("score");
      }
    } else {
      handleFinish();
    }
  }

  const isLastStep = phase === "score" || phase === "writing" || (phase === "theory" && totalEx === 0 && !lesson.writingLevel);
  const showExerciseControls = phase === "exercises" || phase === "writing";
  const writingCount = wordCount(writingText);
  const writingInRange = !!writingPrompt && writingCount >= writingPrompt.minWords && writingCount <= writingPrompt.maxWords;
  // Free navigation in exercises: no validation gate for Suivant
  const nextDisabled = phase === "writing" && !exerciseValidated;
  const currentExValidated = validated[exIndex] ?? false;

  const score = results.filter(Boolean).length;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pt-4 pb-32">
      {/* Header */}
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

      {/* Segmented progress bar */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i > stepIdx ? "bg-[var(--color-border-default)]" : ""}`}
            style={i <= stepIdx ? { background: ACCENT, opacity: i < stepIdx ? 1 : 0.6 } : undefined}
          />
        ))}
      </div>

      {/* Theory phase */}
      {phase === "theory" && (
        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            {lesson.theory.map((block, i) => (
              <TheoryBlock key={i} block={block} />
            ))}
          </div>
        </div>
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

      {/* Exercises phase */}
      {phase === "exercises" && lesson.exercises[exIndex] && (
        <>
          {/* Exercise dot navigator */}
          {totalEx > 1 && (
            <div className="mb-4 flex items-center justify-center gap-2">
              {lesson.exercises.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setExIndex(i)}
                  aria-label={`Exercice ${i + 1}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors"
                  style={
                    i === exIndex
                      ? { background: ACCENT, color: "white" }
                      : answers[i] !== null
                        ? { background: `color-mix(in srgb, ${ACCENT} 22%, transparent)`, color: ACCENT, border: `1.5px solid ${ACCENT}` }
                        : { background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)", border: "1.5px solid var(--color-border-default)" }
                  }
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
          <MCQExercise
            key={exIndex}
            question={lesson.exercises[exIndex]!.question}
            instruction={lesson.exercises[exIndex]!.instruction}
            choices={lesson.exercises[exIndex]!.choices}
            answer={lesson.exercises[exIndex]!.answer}
            exNum={exIndex + 1}
            total={totalEx}
            selected={selected}
            setSelected={(v) => {
              setAnswers((prev) => prev.map((a, i) => i === exIndex ? v : a));
              if (v !== answers[exIndex]) {
                setValidated((prev) => prev.map((vv, i) => i === exIndex ? false : vv));
              }
            }}
            validated={currentExValidated}
          />
        </>
      )}

      {/* Score phase */}
      {phase === "score" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full text-white text-3xl font-bold"
            style={{ background: ACCENT }}
          >
            {score}/{totalEx}
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
              {score === totalEx
                ? "Parfait !"
                : score >= totalEx * 0.75
                  ? "Très bien !"
                  : score >= totalEx * 0.5
                    ? "Bien joué !"
                    : "Continuez à pratiquer !"}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Vous avez {score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""} sur {totalEx}.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setPhase("exercises");
              setExIndex(0);
              setResults([]);
              setAnswers(Array(totalEx).fill(null));
              setValidated(Array(totalEx).fill(false));
            }}
            className="w-full rounded-[var(--radius-md)] border-2 py-3 text-sm font-bold transition-colors hover:bg-[var(--color-bg-secondary)]"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Recommencer les exercices
          </button>
        </div>
      )}

      {/* Fixed bottom nav — same pattern as math modules */}
      <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button */}
            <button
              type="button"
              onClick={goBack}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity"
            >
              ← Retour
            </button>

            {/* Reset + Validate (exercises only) */}
            {showExerciseControls ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={(phase === "exercises" ? currentExValidated : exerciseValidated) || grammarChecking}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90 disabled:opacity-30"
                  aria-label="Réinitialiser"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => void handleValidate()}
                  disabled={(phase === "writing" ? !writingInRange : !selected) || (phase === "exercises" ? currentExValidated : exerciseValidated) || grammarChecking}
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

            {/* Next / Finish button */}
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
        <div style={{ height: 72 }} />
      </div>
    </div>
  );
}
