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
type Phase = "intro" | "reading" | "result";

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

// ─── Format badge ─────────────────────────────────────────────────────────────
function FormatBadge({ format }: { format: "text" | "image" | "fill" }) {
  const label = format === "text" ? "QCM" : format === "image" ? "Images" : "À écrire";
  return (
    <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
      style={{ background: `color-mix(in srgb, ${ACCENT} 12%, transparent)`, color: ACCENT }}>
      {label}
    </span>
  );
}

// ─── Base-level runner ────────────────────────────────────────────────────────
function BaseCERunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const [session] = useState<CEBaseSession>(() => createBaseSession());
  const [phase, setPhase] = useState<Phase>("intro");

  // answers: number for text/image choices, string for fill, null = unanswered
  const [answers, setAnswers] = useState<(number | string | null)[]>(() =>
    Array(5).fill(null)
  );
  const [results, setResults] = useState<boolean[]>([]);

  const setAnswer = (qi: number, val: number | string) =>
    setAnswers((prev) => prev.map((a, i) => (i === qi ? val : a)));

  const handleValidate = useCallback(() => {
    const res = session.questions.map(({ q, format }, i) => {
      const ans = answers[i];
      if (ans === null) return false;
      if (format === "text") return ans === q.textCorrect;
      if (format === "image") return ans === q.imageCorrect;
      if (format === "fill") return checkFillAnswer(String(ans), q.fillAnswer, q.fillAccept);
      return false;
    });
    setResults(res);
    setPhase("result");
    markCommunicationLessonComplete(lessonId);
  }, [session, answers, lessonId]);

  // ── Intro ──────────────────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
            Compréhension écrite — {levelLabel("base")}
          </p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Lire et comprendre</h1>
        </div>
        <div className="rounded-xl border p-5 space-y-3"
          style={{ borderColor: `color-mix(in srgb, ${ACCENT} 20%, transparent)`, background: `color-mix(in srgb, ${ACCENT} 5%, transparent)` }}>
          <p className="text-sm text-[var(--color-text-primary)]">
            Tu vas lire un texte en français, puis répondre à <strong>5 questions</strong> de compréhension.
          </p>
          <ul className="space-y-2">
            {[
              { icon: "📖", text: "Lis le texte attentivement" },
              { icon: "🔤", text: "Questions QCM : choisis la bonne réponse (texte ou images)" },
              { icon: "✏️", text: "Questions à écrire : écris le mot manquant" },
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-primary)]">
                <span className="text-base leading-none mt-0.5">{s.icon}</span>
                {s.text}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => setPhase("reading")}
          className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}>
          Commencer
        </button>
      </div>
    );
  }

  // ── Results ────────────────────────────────────────────────────────────────
  if (phase === "result") {
    const score = results.filter(Boolean).length;
    const pct = Math.round((score / 5) * 100);
    return (
      <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Résultats</p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            {score} / 5 — {pct} %
          </h1>
        </div>

        <div className="space-y-4">
          {session.questions.map(({ q, format }, qi) => {
            const ok = results[qi];
            const ans = answers[qi];
            return (
              <div key={qi}
                className={`rounded-xl border p-4 space-y-2 ${ok
                  ? "border-emerald-400/40 bg-emerald-50/40 dark:bg-emerald-950/20"
                  : "border-amber-400/40 bg-amber-50/40 dark:bg-amber-950/20"}`}>
                <div className="flex items-center gap-2 flex-wrap">
                  <FormatBadge format={format} />
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {qi + 1}. {format === "text" ? q.textQ : format === "image" ? q.imageQ : q.fillQ}
                  </p>
                </div>

                {format === "fill" ? (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--color-text-secondary)]">Ta réponse :</span>
                      <span className={`text-sm font-medium ${ok ? "text-emerald-700 dark:text-emerald-300" : "text-amber-700 dark:text-amber-300 line-through"}`}>
                        {String(ans) || "—"}
                      </span>
                    </div>
                    {!ok && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[var(--color-text-secondary)]">Réponse :</span>
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

        <button onClick={() => router.push("/communication")}
          className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}>
          Retour à l&apos;accueil
        </button>
      </div>
    );
  }

  // ── Reading + questions ────────────────────────────────────────────────────
  const allAnswered = answers.every((a) => a !== null && a !== "");

  return (
    <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
          Compréhension écrite — {levelLabel("base")}
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{session.text.title}</h1>
      </div>

      {/* Text block */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
          Texte à lire
        </p>
        {session.text.body.split("\n\n").map((para, i) => (
          <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)] mb-2 last:mb-0 whitespace-pre-line">
            {para}
          </p>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-5">
        {session.questions.map(({ q, format }, qi) => {
          const ans = answers[qi];
          return (
            <div key={qi} className="space-y-2.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold" style={{ color: ACCENT }}>{qi + 1}.</span>
                <FormatBadge format={format} />
              </div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {format === "text" ? q.textQ : format === "image" ? q.imageQ : q.fillQ}
              </p>

              {format === "text" && (
                <div className="space-y-1.5">
                  {q.textChoices.map((choice, ci) => {
                    const selected = ans === ci;
                    return (
                      <button key={ci} type="button"
                        onClick={() => setAnswer(qi, ci)}
                        className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${selected
                          ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 font-semibold text-[var(--color-accent-comm)]"
                          : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-comm)]/40 hover:bg-[var(--color-accent-comm)]/5"}`}>
                        <span className="mr-2 font-mono text-xs text-[var(--color-text-secondary)]">
                          {String.fromCharCode(65 + ci)}.
                        </span>
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
                      <button key={ci} type="button"
                        onClick={() => setAnswer(qi, ci)}
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
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    inputMode="text"
                    value={typeof ans === "string" ? ans : ""}
                    onChange={(e) => setAnswer(qi, e.target.value)}
                    placeholder="Écris ta réponse…"
                    className="flex-1 rounded-none border-0 border-b-2 border-[var(--color-accent-comm)]/50 bg-transparent px-0 pb-1 pt-0 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]/50 focus:border-[var(--color-accent-comm)] transition-colors"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        disabled={!allAnswered}
        onClick={handleValidate}
        className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        style={{ background: ACCENT }}>
        Valider mes réponses
      </button>
    </div>
  );
}

// ─── Moyen / Avancé runner (unchanged MCQ-only format) ───────────────────────
function StandardCERunner({ lessonId, level }: { lessonId: string; level: "moyen" | "avance" }) {
  const router = useRouter();
  const [ceText] = useState<CEText>(() => randomCEText(level));
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(ceText.questions.length).fill(null)
  );
  const [results, setResults] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);

  const handleValidate = useCallback(() => {
    const res = ceText.questions.map((q, i) => answers[i] === q.correct);
    const correct = res.filter(Boolean).length;
    setResults(res);
    setScore(correct);
    setPhase("result");
    markCommunicationLessonComplete(lessonId);
  }, [ceText, answers, lessonId]);

  const allAnswered = answers.every((a) => a !== null);

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
            Compréhension écrite — {levelLabel(level)}
          </p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Lire et comprendre</h1>
        </div>
        <div className="rounded-xl border p-5 space-y-3"
          style={{ borderColor: `color-mix(in srgb, ${ACCENT} 20%, transparent)`, background: `color-mix(in srgb, ${ACCENT} 5%, transparent)` }}>
          <p className="text-sm text-[var(--color-text-primary)]">
            Tu vas lire un texte en français, puis répondre à des questions de compréhension.
          </p>
          <ul className="space-y-2">
            {["Lis le texte attentivement", "Réponds aux questions en choisissant la bonne réponse", "Valide quand tu as répondu à toutes les questions"].map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-primary)]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: ACCENT }}>
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => setPhase("reading")}
          className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}>
          Commencer
        </button>
      </div>
    );
  }

  if (phase === "result") {
    const pct = Math.round((score / ceText.questions.length) * 100);
    return (
      <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Résultats</p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            {score} / {ceText.questions.length} — {pct} %
          </h1>
        </div>
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
        <button onClick={() => router.push("/communication")}
          className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}>
          Retour à l&apos;accueil
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
          Compréhension écrite — {levelLabel(level)}
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{ceText.title}</h1>
      </div>
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Texte à lire</p>
        {ceText.body.split("\n\n").map((para, i) => (
          <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)] mb-3 last:mb-0">{para}</p>
        ))}
      </div>
      <div className="space-y-5">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">Questions de compréhension</p>
        {ceText.questions.map((q, qi) => (
          <div key={qi} className="space-y-2">
            <p className="text-sm font-medium text-[var(--color-text-primary)]">{qi + 1}. {q.question}</p>
            <div className="space-y-1.5">
              {q.choices.map((choice, ci) => {
                const selected = answers[qi] === ci;
                return (
                  <button key={ci} type="button"
                    onClick={() => setAnswers((prev) => prev.map((a, i) => (i === qi ? ci : a)))}
                    className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${selected
                      ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 font-semibold text-[var(--color-accent-comm)]"
                      : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-comm)]/40 hover:bg-[var(--color-accent-comm)]/5"}`}>
                    <span className="mr-2 font-mono text-xs text-[var(--color-text-secondary)]">
                      {String.fromCharCode(65 + ci)}.
                    </span>
                    {choice}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <button disabled={!allAnswered} onClick={handleValidate}
        className="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        style={{ background: ACCENT }}>
        Valider mes réponses
      </button>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function ComprehensionEcritRunner({ lessonId }: { lessonId: string }) {
  const level = levelFromId(lessonId);
  if (level === "base") return <BaseCERunner lessonId={lessonId} />;
  return <StandardCERunner lessonId={lessonId} level={level} />;
}
