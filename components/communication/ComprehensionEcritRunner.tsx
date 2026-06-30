"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  createBaseSession,
  checkFillAnswer,
  randomCEText,
  type CEText,
  type CEBaseSession,
} from "@/lib/curriculum/content/communication/comprehension-ecrite";

type CELevel = "base" | "moyen" | "avance";

function levelFromId(id: string): CELevel {
  if (id === "CE-2") return "moyen";
  if (id === "CE-3") return "avance";
  return "base";
}
function levelLabel(level: CELevel) {
  if (level === "moyen") return "Niveau moyen";
  if (level === "avance") return "Niveau avancé";
  return "Niveau base";
}

const ACCENT = "var(--color-accent-comm)";

// ─── Lesson header with a back arrow that quits the lesson ───────────────────
function CEHeader({ level, title }: { level: CELevel; title: string }) {
  const router = useRouter();
  return (
    <div className="flex items-start gap-2">
      <button
        type="button"
        onClick={() => router.push("/communication")}
        aria-label="Quitter la leçon"
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white transition-opacity hover:opacity-80"
        style={{ background: ACCENT }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
          Compréhension écrite — {levelLabel(level)}
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{title}</h1>
      </div>
    </div>
  );
}

// ─── Hidden bottom bar mirrored into the main nav ────────────────────────────
// MainNav scans for buttons inside ".hidden.fixed.bottom-0" (outside [data-main-nav])
// and mirrors them into its Précédent / Recommencer / Valider / Suivant slots.
function NavActionBar({
  onBack, onRefresh, onValidate, onNext,
  backDisabled, validateDisabled, nextDisabled, nextLabel,
}: {
  onBack?: () => void;
  onRefresh?: () => void;
  onValidate?: () => void;
  onNext?: () => void;
  backDisabled?: boolean;
  validateDisabled?: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="hidden fixed bottom-0 left-0 right-0">
      {onBack && (
        <button type="button" data-nav-action="back" aria-label="Précédent" disabled={backDisabled} onClick={onBack}>
          Précédent
        </button>
      )}
      {onRefresh && (
        <button type="button" data-nav-action="refresh" aria-label="Recommencer" onClick={onRefresh}>
          Recommencer
        </button>
      )}
      {onValidate && (
        <button type="button" data-nav-action="validate" aria-label="Valider" disabled={validateDisabled} onClick={onValidate}>
          Valider
        </button>
      )}
      {onNext && (
        <button
          type="button"
          data-nav-action="next"
          data-nav-label={nextLabel}
          aria-label={nextLabel ?? "Suivant"}
          disabled={nextDisabled}
          onClick={onNext}
        >
          {nextLabel ?? "Suivant"}
        </button>
      )}
    </div>
  );
}

// ─── Shared intro instructions ───────────────────────────────────────────────
function IntroBox({ items }: { items: { icon?: string; text: string }[] }) {
  return (
    <div
      className="rounded-xl border p-5 space-y-3"
      style={{ borderColor: `color-mix(in srgb, ${ACCENT} 20%, transparent)`, background: `color-mix(in srgb, ${ACCENT} 5%, transparent)` }}
    >
      <p className="text-sm text-[var(--color-text-primary)]">
        Tu vas lire un texte en français, puis répondre aux questions de compréhension.
      </p>
      <ul className="space-y-2">
        {items.map((s, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-primary)]">
            {s.icon
              ? <span className="text-base leading-none mt-0.5">{s.icon}</span>
              : <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: ACCENT }}>{i + 1}</span>}
            {s.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Reusable text block ─────────────────────────────────────────────────────
function TextBlock({ body }: { body: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
        Texte à lire
      </p>
      {body.split("\n\n").map((para, i) => (
        <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)] mb-2 last:mb-0 whitespace-pre-line">
          {para}
        </p>
      ))}
    </div>
  );
}

// ─── Base-level runner (text / image / fill questions) ───────────────────────
function BaseCERunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const [session, setSession] = useState<CEBaseSession>(() => createBaseSession());
  const [step, setStep] = useState(0); // 0 = intro, 1 = reading, 2 = result
  const [answers, setAnswers] = useState<(number | string | null)[]>(() => Array(5).fill(null));
  const [results, setResults] = useState<boolean[]>([]);

  const setAnswer = (qi: number, val: number | string) =>
    setAnswers((prev) => prev.map((a, i) => (i === qi ? val : a)));

  const allAnswered = answers.every((a) => a !== null && a !== "");

  const refresh = useCallback(() => {
    setSession(createBaseSession());
    setAnswers(Array(5).fill(null));
    setResults([]);
    setStep(1);
  }, []);

  const validate = useCallback(() => {
    const res = session.questions.map(({ q, format }, i) => {
      const ans = answers[i];
      if (ans === null || ans === "") return false;
      if (format === "text") return ans === q.textCorrect;
      if (format === "image") return ans === q.imageCorrect;
      return checkFillAnswer(String(ans), q.fillAnswer, q.fillAccept);
    });
    setResults(res);
    setStep(2);
    markCommunicationLessonComplete(lessonId);
  }, [session, answers, lessonId]);

  // Each question's prompt is always the real question (no format label).
  const promptOf = (qi: number) => {
    const { q, format } = session.questions[qi]!;
    return format === "image" ? q.imageQ : q.textQ;
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-8 space-y-6 pb-28">
      <CEHeader level="base" title={step === 0 ? "Lire et comprendre" : step === 2 ? "Résultats" : session.text.title} />

      {/* ── Intro ── */}
      {step === 0 && (
        <>
          <IntroBox items={[
            { icon: "📖", text: "Lis le texte attentivement." },
            { icon: "🔤", text: "Choisis la bonne réponse (texte ou images)." },
            { icon: "✏️", text: "Pour les questions à écrire, réponds par une phrase complète contenant le mot attendu." },
          ]} />
          <NavActionBar onBack={() => {}} backDisabled onNext={() => setStep(1)} />
        </>
      )}

      {/* ── Reading + questions ── */}
      {step === 1 && (
        <>
          <TextBlock body={session.text.body} />
          <div className="space-y-6">
            {session.questions.map(({ q, format }, qi) => {
              const ans = answers[qi];
              return (
                <div key={qi} className="space-y-2.5">
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">
                    <span className="font-bold" style={{ color: ACCENT }}>{qi + 1}.</span> {promptOf(qi)}
                  </p>

                  {format === "text" && (
                    <div className="space-y-1.5">
                      {q.textChoices.map((choice, ci) => {
                        const selected = ans === ci;
                        return (
                          <button key={ci} type="button" onClick={() => setAnswer(qi, ci)}
                            className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${selected
                              ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 font-semibold text-[var(--color-accent-comm)]"
                              : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-comm)]/40 hover:bg-[var(--color-accent-comm)]/5"}`}>
                            <span className="mr-2 font-mono text-xs text-[var(--color-text-secondary)]">{String.fromCharCode(65 + ci)}.</span>
                            {choice}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {format === "image" && (
                    <div className="grid grid-cols-2 gap-2.5">
                      {q.imageChoices.map((choice, ci) => {
                        const selected = ans === ci;
                        return (
                          <button key={ci} type="button" onClick={() => setAnswer(qi, ci)}
                            className={`flex flex-col items-center gap-1.5 rounded-xl border-2 px-3 py-3 transition-all ${selected
                              ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10"
                              : "border-[var(--color-border)] hover:border-[var(--color-accent-comm)]/40 hover:bg-[var(--color-accent-comm)]/5"}`}>
                            <span className="text-3xl leading-none">{choice.emoji}</span>
                            <span className={`text-xs leading-tight text-center ${selected ? "font-semibold text-[var(--color-accent-comm)]" : "text-[var(--color-text-primary)]"}`}>
                              {choice.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {format === "fill" && (
                    <input
                      type="text"
                      inputMode="text"
                      value={typeof ans === "string" ? ans : ""}
                      onChange={(e) => setAnswer(qi, e.target.value)}
                      placeholder="Réponds par une phrase complète…"
                      className="w-full rounded-none border-0 border-b-2 border-[var(--color-accent-comm)]/50 bg-transparent px-0 pb-1 pt-0 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]/50 focus:border-[var(--color-accent-comm)] transition-colors"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <NavActionBar
            onBack={() => setStep(0)}
            onRefresh={refresh}
            onValidate={validate}
            validateDisabled={!allAnswered}
          />
        </>
      )}

      {/* ── Results ── */}
      {step === 2 && (() => {
        const score = results.filter(Boolean).length;
        const pct = Math.round((score / 5) * 100);
        return (
          <>
            <p className="text-base font-bold text-[var(--color-text-primary)]">{score} / 5 — {pct} %</p>
            <div className="space-y-4">
              {session.questions.map(({ q, format }, qi) => {
                const ok = results[qi];
                const ans = answers[qi];
                return (
                  <div key={qi}
                    className={`rounded-xl border p-4 space-y-2 ${ok
                      ? "border-emerald-400/40 bg-emerald-50/40 dark:bg-emerald-950/20"
                      : "border-amber-400/40 bg-amber-50/40 dark:bg-amber-950/20"}`}>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">{qi + 1}. {promptOf(qi)}</p>

                    {format === "fill" ? (
                      <div className="space-y-1">
                        <div className="flex items-start gap-2">
                          <span className="text-xs text-[var(--color-text-secondary)] shrink-0">Ta réponse :</span>
                          <span className={`text-sm font-medium ${ok ? "text-emerald-700 dark:text-emerald-300" : "text-amber-700 dark:text-amber-300"}`}>
                            {String(ans) || "—"}
                          </span>
                        </div>
                        {!ok && (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[var(--color-text-secondary)]">Mot attendu :</span>
                            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{q.fillAnswer}</span>
                          </div>
                        )}
                      </div>
                    ) : format === "image" ? (
                      <div className="grid grid-cols-2 gap-2">
                        {q.imageChoices.map((choice, ci) => {
                          const isCorrect = ci === q.imageCorrect;
                          const isChosen = ci === ans;
                          let cls = "flex flex-col items-center gap-1 rounded-lg border px-2 py-2 text-center ";
                          if (isCorrect) cls += "border-emerald-500 bg-emerald-100 dark:bg-emerald-900/40";
                          else if (isChosen && !isCorrect) cls += "border-amber-500 bg-amber-100 dark:bg-amber-900/40 opacity-70";
                          else cls += "border-transparent opacity-40";
                          return (
                            <div key={ci} className={cls}>
                              <span className="text-2xl leading-none">{choice.emoji}</span>
                              <span className="text-[11px] leading-tight text-[var(--color-text-primary)]">{choice.label}</span>
                              {isCorrect && <span className="text-[10px] text-emerald-600 font-bold">✓</span>}
                              {isChosen && !isCorrect && <span className="text-[10px] text-amber-600 font-bold">✗</span>}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <ul className="space-y-1">
                        {q.textChoices.map((choice, ci) => {
                          const isCorrect = ci === q.textCorrect;
                          const isChosen = ci === ans;
                          let cls = "text-xs px-3 py-1.5 rounded-lg border ";
                          if (isCorrect) cls += "border-emerald-500 bg-emerald-100 text-emerald-800 font-semibold dark:bg-emerald-900/40 dark:text-emerald-300";
                          else if (isChosen && !isCorrect) cls += "border-amber-500 bg-amber-100 text-amber-800 line-through dark:bg-amber-900/40 dark:text-amber-300";
                          else cls += "border-transparent text-[var(--color-text-secondary)]";
                          return (
                            <li key={ci} className={cls}>
                              <span className="mr-1 font-mono text-[10px]">{String.fromCharCode(65 + ci)}.</span>
                              {choice}
                              {isCorrect && <span className="ml-1 text-emerald-600"> ✓</span>}
                              {isChosen && !isCorrect && <span className="ml-1 text-amber-600"> ✗</span>}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
            <NavActionBar
              onBack={() => setStep(1)}
              onRefresh={refresh}
              onNext={() => router.push("/communication")}
              nextLabel="Terminer"
            />
          </>
        );
      })()}
    </div>
  );
}

// ─── Moyen / Avancé runner (MCQ only) ────────────────────────────────────────
function StandardCERunner({ lessonId, level }: { lessonId: string; level: "moyen" | "avance" }) {
  const router = useRouter();
  const [ceText, setCeText] = useState<CEText>(() => randomCEText(level));
  const [step, setStep] = useState(0); // 0 = intro, 1 = reading, 2 = result
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(ceText.questions.length).fill(null));
  const [results, setResults] = useState<boolean[]>([]);

  const allAnswered = answers.every((a) => a !== null);

  const refresh = useCallback(() => {
    const next = randomCEText(level);
    setCeText(next);
    setAnswers(Array(next.questions.length).fill(null));
    setResults([]);
    setStep(1);
  }, [level]);

  const validate = useCallback(() => {
    setResults(ceText.questions.map((q, i) => answers[i] === q.correct));
    setStep(2);
    markCommunicationLessonComplete(lessonId);
  }, [ceText, answers, lessonId]);

  const score = results.filter(Boolean).length;

  return (
    <div className="mx-auto max-w-xl px-4 py-8 space-y-6 pb-28">
      <CEHeader level={level} title={step === 0 ? "Lire et comprendre" : step === 2 ? "Résultats" : ceText.title} />

      {step === 0 && (
        <>
          <IntroBox items={[
            { text: "Lis le texte attentivement." },
            { text: "Réponds aux questions en choisissant la bonne réponse." },
            { text: "Valide quand tu as répondu à toutes les questions." },
          ]} />
          <NavActionBar onBack={() => {}} backDisabled onNext={() => setStep(1)} />
        </>
      )}

      {step === 1 && (
        <>
          <TextBlock body={ceText.body} />
          <div className="space-y-6">
            {ceText.questions.map((q, qi) => (
              <div key={qi} className="space-y-2">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  <span className="font-bold" style={{ color: ACCENT }}>{qi + 1}.</span> {q.question}
                </p>
                <div className="space-y-1.5">
                  {q.choices.map((choice, ci) => {
                    const selected = answers[qi] === ci;
                    return (
                      <button key={ci} type="button"
                        onClick={() => setAnswers((prev) => prev.map((a, i) => (i === qi ? ci : a)))}
                        className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${selected
                          ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 font-semibold text-[var(--color-accent-comm)]"
                          : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-comm)]/40 hover:bg-[var(--color-accent-comm)]/5"}`}>
                        <span className="mr-2 font-mono text-xs text-[var(--color-text-secondary)]">{String.fromCharCode(65 + ci)}.</span>
                        {choice}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <NavActionBar onBack={() => setStep(0)} onRefresh={refresh} onValidate={validate} validateDisabled={!allAnswered} />
        </>
      )}

      {step === 2 && (
        <>
          <p className="text-base font-bold text-[var(--color-text-primary)]">
            {score} / {ceText.questions.length} — {Math.round((score / ceText.questions.length) * 100)} %
          </p>
          <div className="space-y-4">
            {ceText.questions.map((q, qi) => {
              const ok = results[qi];
              const chosen = answers[qi];
              return (
                <div key={qi}
                  className={`rounded-xl border p-4 space-y-2 ${ok ? "border-emerald-400/40 bg-emerald-50/40 dark:bg-emerald-950/20" : "border-amber-400/40 bg-amber-50/40 dark:bg-amber-950/20"}`}>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{qi + 1}. {q.question}</p>
                  <ul className="space-y-1">
                    {q.choices.map((choice, ci) => {
                      const isCorrect = ci === q.correct;
                      const isChosen = ci === chosen;
                      let cls = "text-xs px-3 py-1.5 rounded-lg border ";
                      if (isCorrect) cls += "border-emerald-500 bg-emerald-100 text-emerald-800 font-semibold dark:bg-emerald-900/40 dark:text-emerald-300";
                      else if (isChosen && !isCorrect) cls += "border-amber-500 bg-amber-100 text-amber-800 line-through dark:bg-amber-900/40 dark:text-amber-300";
                      else cls += "border-transparent text-[var(--color-text-secondary)]";
                      return (
                        <li key={ci} className={cls}>
                          {choice}
                          {isCorrect && <span className="ml-1 text-emerald-600"> ✓</span>}
                          {isChosen && !isCorrect && <span className="ml-1 text-amber-600"> ✗</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <NavActionBar onBack={() => setStep(1)} onRefresh={refresh} onNext={() => router.push("/communication")} nextLabel="Terminer" />
        </>
      )}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function ComprehensionEcritRunner({ lessonId }: { lessonId: string }) {
  const level = levelFromId(lessonId);
  if (level === "base") return <BaseCERunner lessonId={lessonId} />;
  return <StandardCERunner lessonId={lessonId} level={level} />;
}
