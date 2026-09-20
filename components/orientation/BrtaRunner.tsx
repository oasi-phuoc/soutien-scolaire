"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BRTA_DOMAINS, type BrtaAnswerOption, type BrtaDomain, type BrtaSession, type BrtaSessionAnswer } from "@/lib/orientation/brta/types";
import { getAllQuestions } from "@/lib/orientation/brta/questions";
import { addBrtaSession, loadBrtaDraft, saveBrtaDraft, createInitialDraft } from "@/lib/orientation/brta/storage";
import { computeOverallScore, computeScores } from "@/lib/orientation/brta/scoring";

export function BrtaRunner() {
  const router = useRouter();
  const questions = useMemo(() => getAllQuestions(), []);
  const [draft, setDraft] = useState(() => createInitialDraft());

  useEffect(() => {
    const savedDraft = loadBrtaDraft();
    if (savedDraft) setDraft(savedDraft);
  }, []);
  const [selected, setSelected] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [questionStartedAt, setQuestionStartedAt] = useState(() => Date.now());

  const current = questions[draft.currentQuestionIndex];
  const progress = Math.round((draft.currentQuestionIndex / questions.length) * 100);
  const currentDomain = current?.domain ?? "reasoning";

  useEffect(() => {
    if (!started) return;
    saveBrtaDraft({ ...draft, updatedAt: new Date().toISOString() });
  }, [draft, started]);

  function begin() {
    const next = { ...draft, step: "reasoning" as BrtaDomain, startedAt: Date.now(), updatedAt: new Date().toISOString() };
    setDraft(next);
    saveBrtaDraft(next);
    setStarted(true);
    setQuestionStartedAt(Date.now());
  }

  function answer(option: BrtaAnswerOption) {
    if (!current || selected) return;
    setSelected(option.id);
    const answer: BrtaSessionAnswer = {
      questionId: current.id,
      domain: current.domain,
      selectedOptionId: option.id,
      isCorrect: option.isCorrect,
      timeSpent: Math.round((Date.now() - questionStartedAt) / 1000),
    };
    const nextIndex = draft.currentQuestionIndex + 1;
    setTimeout(() => {
      const next = {
        ...draft,
        answers: [...draft.answers, answer],
        currentQuestionIndex: nextIndex,
        step: nextIndex >= questions.length ? "results" as const : questions[nextIndex].domain,
        updatedAt: new Date().toISOString(),
      };
      setDraft(next);
      setSelected(null);
      setQuestionStartedAt(Date.now());
      if (nextIndex >= questions.length) finishWith(next);
    }, 420);
  }

  function finishWith(finalDraft: typeof draft) {
    const scores = computeScores(finalDraft.answers);
    const session: BrtaSession = {
      id: finalDraft.sessionId,
      date: new Date().toISOString(),
      answers: finalDraft.answers,
      scores,
      overallScore: computeOverallScore(scores),
      duration: Math.round((Date.now() - finalDraft.startedAt) / 1000),
      status: "complete",
    };
    addBrtaSession(session);
    saveBrtaDraft(null);
    router.push(`/orientation/brta/resultats?session=${session.id}`);
  }

  if (!started) {
    return (
      <main className="app-shell flex-1 py-8 pb-32">
        <div className="mx-auto max-w-2xl rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-6 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-theme)]">Batterie BRTA</p>
          <h1 className="mt-3 text-2xl font-bold text-[var(--color-text-primary)]">Évaluez vos aptitudes</h1>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">Répondez spontanément à des exercices originaux inspirés des grandes familles d&apos;aptitudes cognitives. Il n&apos;y a pas de bonne ou mauvaise orientation : ce résultat sert à mieux vous connaître.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-[var(--color-bg-secondary)] p-3"><p className="text-xs font-bold">48 questions</p><p className="mt-1 text-xs text-[var(--color-text-secondary)]">6 domaines</p></div>
            <div className="rounded-lg bg-[var(--color-bg-secondary)] p-3"><p className="text-xs font-bold">50 minutes</p><p className="mt-1 text-xs text-[var(--color-text-secondary)]">Durée indicative</p></div>
            <div className="rounded-lg bg-[var(--color-bg-secondary)] p-3"><p className="text-xs font-bold">À votre rythme</p><p className="mt-1 text-xs text-[var(--color-text-secondary)]">Reprise possible</p></div>
          </div>
          <button type="button" onClick={begin} className="mt-7 w-full rounded-[var(--radius-md)] bg-[var(--color-theme)] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">Commencer le test</button>
        </div>
      </main>
    );
  }

  if (!current) return null;
  const domainInfo = BRTA_DOMAINS[currentDomain];

  return (
    <main className="app-shell flex-1 py-6 pb-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-5 flex items-center justify-between gap-3"><div><p className="text-xs font-bold text-[var(--color-theme)]">{domainInfo.label}</p><p className="mt-1 text-xs text-[var(--color-text-secondary)]">Question {draft.currentQuestionIndex + 1} sur {questions.length}</p></div><span className="text-sm font-bold text-[var(--color-text-primary)]">{progress}%</span></div>
        <div className="mb-7 h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]"><div className="h-full rounded-full bg-[var(--color-theme)] transition-all" style={{ width: `${Math.max(progress, 3)}%` }} /></div>
        <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5 shadow-sm sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">{current.title}</p><h1 className="mt-4 text-xl font-bold leading-8 text-[var(--color-text-primary)]">{current.instruction}</h1>
          <div className="mt-7 grid gap-3">{current.options.map((option) => <button key={option.id} type="button" disabled={Boolean(selected)} onClick={() => answer(option)} className={`rounded-lg border p-4 text-left text-sm transition-colors ${selected === option.id ? option.isCorrect ? "border-emerald-500 bg-emerald-50" : "border-red-400 bg-red-50" : "border-[var(--color-border-default)] hover:border-[var(--color-theme)] hover:bg-[var(--color-bg-secondary)]"}`}><span className="mr-3 font-bold text-[var(--color-theme)]">{option.id.toUpperCase()}.</span>{option.text}</button>)}</div>
        </section>
        <p className="mt-4 text-center text-xs text-[var(--color-text-secondary)]">Vous pouvez prendre votre temps. Vos réponses restent enregistrées sur cet appareil.</p>
      </div>
    </main>
  );
}

export default BrtaRunner;
