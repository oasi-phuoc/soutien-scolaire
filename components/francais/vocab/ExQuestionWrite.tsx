"use client";
import { useEffect, useState } from "react";
import type { VocabTheme, VocabWord } from "@/lib/curriculum/vocabulary-data";
import { ExerciseProps, shuffle } from "./vocabUtils";

const LT_IGNORE = new Set(["WHITESPACE_RULE", "FRENCH_WHITESPACE", "COMMA_PARENTHESIS_WHITESPACE", "UNPAIRED_BRACKETS"]);

const INTERROGATIVE_WORDS = ["qui", "quand", "où", "comment", "combien", "lequel", "laquelle", "lesquels", "lesquelles", "pourquoi", "que", "qu'", "est-ce"];

type LTError = { shortMessage: string; message: string; suggestions: string[] };

type WordState = {
  answer: string;
  checked: boolean;
  correct: boolean;
  basicErrors: string[];
  grammarErrors: LTError[];
  grammarChecking: boolean;
};

type Prompt = { word: string; context?: string };

function initState(): WordState {
  return { answer: "", checked: false, correct: false, basicErrors: [], grammarErrors: [], grammarChecking: false };
}

function pickRand<T>(arr: T[]): T | undefined {
  if (!arr.length) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Build prompts using exampleSentences levels when available.
 * For themes with no article (e.g. nationalités), also includes country names and feminine forms.
 * Falls back to plain word prompts if sentences are not present.
 */
function buildPrompts(theme: VocabTheme, count: number): Prompt[] {
  // Collect all candidate words: masculine, feminine, country names (no article)
  const candidates: Array<{ word: string; source: VocabWord }> = [];
  for (const w of theme.words) {
    candidates.push({ word: w.word, source: w });
    if (w.feminine) candidates.push({ word: w.feminine, source: w });
    const rw = w.relatedWords?.[0];
    if (rw) {
      const m = rw.match(/^(?:le |la |l'|les )(.+)$/i);
      candidates.push({ word: m ? m[1]!.trim() : rw.trim(), source: w });
    }
  }
  const shuffled = shuffle([...candidates]);

  if (count < 5) {
    // Eval mode: just pick words without level selection
    return shuffled.slice(0, count).map(({ word, source }) => {
      const anyLevel = source.exampleSentences;
      const allSentences = [...(anyLevel?.a1 ?? []), ...(anyLevel?.a2 ?? []), ...(anyLevel?.b1 ?? [])];
      const ctx = pickRand(allSentences);
      return { word, context: ctx };
    });
  }

  // Training: pick 2 A1, 2 A2, 1 B1
  const withA1 = shuffled.filter((c) => (c.source.exampleSentences?.a1?.length ?? 0) > 0);
  const withA2 = shuffled.filter((c) => (c.source.exampleSentences?.a2?.length ?? 0) > 0);
  const withB1 = shuffled.filter((c) => (c.source.exampleSentences?.b1?.length ?? 0) > 0);

  const result: Prompt[] = [];
  const used = new Set<string>();

  function pick(pool: typeof shuffled, level: "a1" | "a2" | "b1"): Prompt | null {
    for (const c of pool) {
      if (used.has(c.word)) continue;
      const sentences = c.source.exampleSentences?.[level] ?? [];
      const ctx = pickRand(sentences);
      used.add(c.word);
      return { word: c.word, context: ctx };
    }
    // fallback: any unused word without context
    for (const c of shuffled) {
      if (used.has(c.word)) continue;
      used.add(c.word);
      return { word: c.word };
    }
    return null;
  }

  for (let i = 0; i < 2; i++) result.push(pick(withA1, "a1") ?? { word: shuffled[result.length]?.word ?? "" });
  for (let i = 0; i < 2; i++) result.push(pick(withA2, "a2") ?? { word: shuffled[result.length]?.word ?? "" });
  result.push(pick(withB1, "b1") ?? { word: shuffled[result.length]?.word ?? "" });

  return result.filter((p) => p.word);
}

const VERB_ROOTS = ["est", "sont", "a", "ont", "avons", "avez", "suis", "es", "êtes", "sommes",
  "était", "étaient", "avait", "avaient", "sera", "seront", "aura", "auront",
  "va", "vont", "fait", "font", "dit", "dit", "vient", "viennent", "peut", "peuvent",
  "doit", "doivent", "veut", "veulent", "sait", "savent", "prend", "prennent"];
const VERB_SUFFIX_RE = /(?:er|ir|re|ons|ez|ent|ait|aient|ais|asse|isse|usse)$/i;

function hasVerb(text: string): boolean {
  const words = text.toLowerCase().replace(/[?.,!;:]/g, "").split(/[\s''-]+/);
  return words.some((w) => VERB_ROOTS.includes(w) ||
    (w.length > 4 && VERB_SUFFIX_RE.test(w)));
}

function checkBasic(answer: string, word: string): string[] {
  const errors: string[] = [];
  if (answer.length === 0) return errors;
  const first = answer[0]!;
  if (first !== first.toUpperCase() || first === first.toLowerCase()) errors.push("La question doit commencer par une majuscule.");
  if (!answer.endsWith("?")) errors.push("La question doit se terminer par un point d'interrogation.");
  if (!answer.toLowerCase().includes(word.toLowerCase())) errors.push(`Le mot « ${word} » doit être dans la question.`);
  const lower = answer.toLowerCase();
  if (!INTERROGATIVE_WORDS.some((iw) => lower.includes(iw))) {
    errors.push("La question doit contenir un mot interrogatif (qui, quand, où, comment, combien, pourquoi…).");
  }
  if (!hasVerb(answer)) {
    errors.push("La question doit contenir un verbe.");
  }
  return errors;
}

export function ExQuestionWrite({
  theme, validateCommand, onValidated, onCanValidateChange, isEval, evalNumber, exerciseNumber,
}: ExerciseProps) {
  const [prompts] = useState<Prompt[]>(() => buildPrompts(theme, isEval ? 2 : 5));
  const [states, setStates] = useState<Record<string, WordState>>(() =>
    Object.fromEntries(prompts.map((p) => [p.word, initState()]))
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(true); }, []);

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const updated: Record<string, WordState> = {};
    prompts.forEach((p) => {
      const answer = (states[p.word]?.answer ?? "").trim();
      const basicErrors = checkBasic(answer, p.word);
      const ok = answer.length > 0 && basicErrors.length === 0;
      if (ok) correct++;
      updated[p.word] = { answer, checked: true, correct: ok, basicErrors, grammarErrors: [], grammarChecking: answer.length > 3 };
    });
    setStates(updated);
    onValidated(correct, prompts.length);

    prompts.forEach((p) => {
      const answer = updated[p.word]?.answer ?? "";
      if (answer.length <= 3) return;
      fetch("/api/check-grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: answer }),
      })
        .then(async (res) => {
          if (!res.ok) throw new Error("api");
          const data = await res.json();
          const errors: LTError[] = (data.matches ?? [])
            .filter((m: { rule?: { id: string } }) => !LT_IGNORE.has(m.rule?.id ?? ""))
            .map((m: { shortMessage?: string; message: string; replacements?: { value: string }[] }) => ({
              shortMessage: m.shortMessage || m.message,
              message: m.message,
              suggestions: (m.replacements ?? []).slice(0, 3).map((r) => r.value).filter(Boolean),
            }));
          setStates((prev) => ({ ...prev, [p.word]: { ...prev[p.word]!, grammarErrors: errors, grammarChecking: false } }));
        })
        .catch(() => {
          setStates((prev) => ({ ...prev, [p.word]: { ...prev[p.word]!, grammarChecking: false } }));
        });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const title = isEval ? `Évaluation — Exercice ${evalNumber ?? 7}` : `Exercice ${exerciseNumber ?? 11}`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-fr)]">{title}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">
        Écrivez une question avec le mot proposé. Utilisez un mot interrogatif (
        <strong className="font-bold text-[var(--color-accent-fr)]">qui</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">quand</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">où</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">comment</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">combien</strong>,{" "}
        <strong className="font-bold text-[var(--color-accent-fr)]">pourquoi</strong>…).
        Commencez par une majuscule et terminez par un point d&apos;interrogation.
      </p>
      <div className="space-y-4">
        {prompts.map((p, i) => {
          const s = states[p.word]!;
          const hasErrors = s.basicErrors.length > 0 || s.grammarErrors.length > 0;
          const isCheckedDone = s.checked && !s.grammarChecking;
          return (
            <div key={p.word} className="space-y-0.5">
              <p className="text-sm font-bold text-[var(--color-text-primary)]">
                <span className="mr-2 text-[var(--color-accent-fr)]">{i + 1}.</span>
                {p.word}
              </p>
              {p.context && (
                <p className="mb-1 text-xs italic text-[var(--color-text-secondary)]">{p.context}</p>
              )}
              {isCheckedDone && hasErrors ? (
                <div className="border-b border-amber-400 py-1 text-center">
                  <p className="text-sm text-amber-600 line-through dark:text-amber-400">{s.answer || "—"}</p>
                  <ul className="mt-0.5 space-y-0.5">
                    {s.basicErrors.map((err, ei) => (
                      <li key={`b${ei}`} className="text-xs text-amber-600 dark:text-amber-400">{err}</li>
                    ))}
                    {s.grammarErrors.map((err, ei) => (
                      <li key={`g${ei}`} className="text-xs text-amber-600 dark:text-amber-400">
                        {err.shortMessage}
                        {err.suggestions.length > 0 && (
                          <span className="ml-1 font-semibold text-[var(--color-text-primary)]">→ {err.suggestions.join(" / ")}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <input
                  type="text"
                  value={s.answer}
                  onChange={(e) => setStates((prev) => ({ ...prev, [p.word]: { ...initState(), answer: e.target.value } }))}
                  readOnly={s.checked}
                  className="w-full rounded-none border-0 border-b-2 border-[var(--color-accent-fr)]/60 bg-transparent px-0 pb-0.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent-fr)]"
                />
              )}
              {s.checked && s.grammarChecking && (
                <p className="animate-pulse text-center text-xs text-[var(--color-text-secondary)]">Correction en cours…</p>
              )}
              {isCheckedDone && !hasErrors && s.answer.length > 0 && (
                <p className="text-center text-xs text-[var(--color-text-secondary)]">✓</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
