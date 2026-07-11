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
import { AppSelect } from "@/components/ui/AppSelect";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  type CommunicationExercise,
  type CommunicationLesson,
  type CommunicationTheoryBlock,
  pickProgressiveExercises,
} from "@/lib/curriculum/content/communication/express-types";
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

const ACCENT = "var(--color-accent-comm)";
const LESSONS: Record<string, CommunicationLesson> = {
  "PE-1": EXPRESSION_E1_1,
  "PE-2": EXPRESSION_E1_2,
  "PE-3": EXPRESSION_E1_3,
  ...EXPRESS_ORAL_BY_ID,
  // Alias legacy
  "P1-1": EXPRESS_ORAL_BY_ID["E1-1"]!,
  "A1-1": EXPRESS_ORAL_BY_ID["E1-1"]!,
};

type Phase = "intro" | "theory" | "form" | "writing" | "exercises" | "score";

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
        <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">{prompt.title}</h2>
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

  return (
    <label className={field.wide ? "col-span-1 sm:col-span-2" : ""}>
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
        <input type={field.type ?? "text"} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className={controlClass} autoComplete="off" />
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
        <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
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
  switch (block.type) {
    case "heading":
      return (
        <div className="mb-6">
          <h2
            className={`text-xl font-bold ${block.black ? "text-[var(--color-text-primary)]" : ""}`}
            style={block.black ? undefined : { color: ACCENT }}
          >
            {block.text}
          </h2>
        </div>
      );

    case "plain":
      return (
        <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
          {renderInlineBold(block.text)}
        </p>
      );

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
      const items = block.items ?? [];
      if (items.length === 0) {
        return (
          <h3 className="mb-2 mt-4 text-sm font-bold" style={{ color: ACCENT }}>
            {block.title}
          </h3>
        );
      }
      return (
        <div
          className="mb-4 rounded-[var(--radius-md)] border-l-2 px-4 py-3"
          style={{ borderColor: ACCENT, background: `color-mix(in srgb, ${ACCENT} 9%, transparent)` }}
        >
          <h3 className="mb-2 text-sm font-bold" style={{ color: ACCENT }}>{block.title}</h3>
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

  const [activeExercises] = useState<CommunicationExercise[]>(() => {
    if (!lesson) return [];
    if (lesson.writingLevel) return [];
    const pool = lesson.exercisePool ?? [];
    if (pool.length > 0) {
      const seed = Date.now() % 100000;
      return pickProgressiveExercises(pool, lesson.exerciseCount ?? 8, seed);
    }
    return lesson.exercises ?? [];
  });

  const [phase, setPhase] = useState<Phase>(() => lesson?.writingLevel ? "intro" : "theory");
  const [exIndex, setExIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [answers, setAnswers] = useState<(string | null)[]>(() =>
    Array(activeExercises.length).fill(null)
  );
  const [validated, setValidated] = useState<boolean[]>(() =>
    Array(activeExercises.length).fill(false)
  );
  const [exerciseValidated, setExerciseValidated] = useState(false);
  const selected = answers[exIndex] ?? null;

  const [writingPrompt, setWritingPrompt] = useState<WritingPrompt | null>(() =>
    lesson?.writingLevel ? randomWritingPrompt(lesson.writingLevel) : null,
  );
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

  const totalEx = activeExercises.length;
  const activeWritingPhases = lesson.writingLevel
    ? (["form", "writing"] as const).filter((item) => item === "form" ? !formValidated : !exerciseValidated)
    : [];
  const currentWritingStep = Math.max(0, activeWritingPhases.indexOf(phase as "form" | "writing"));
  const totalSteps = lesson.writingLevel ? Math.max(1, activeWritingPhases.length) : 3;
  const stepIdx =
    lesson.writingLevel
      ? currentWritingStep
      : phase === "intro" ? 0 : phase === "theory" ? 0 : phase === "form" ? 0 : phase === "writing" ? 1 : phase === "exercises" ? 1 : 2;

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
    setAnswers((prev) => prev.map((a, i) => i === exIndex ? null : a));
    setValidated((prev) => prev.map((v, i) => i === exIndex ? false : v));
  }

  async function handleValidate() {
    if (phase === "form") {
      setFormValidated(true);
      if (lesson.writingLevel) setPhase("writing");
      return;
    }
    if (phase === "writing") {
      if (!writingPrompt || exerciseValidated || grammarChecking) return;
      if (!writingText.trim()) {
        setGrammarFeedback([]);
        setExerciseValidated(true);
        return;
      }
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
    if (phase === "intro") {
      setPhase(lesson.writingLevel ? "form" : "theory");
      return;
    }
    if (phase === "theory") {
      if (lesson.writingLevel) {
        setPhase("form");
        return;
      }
      if (totalEx === 0) {
        handleFinish();
        return;
      }
      setPhase("exercises");
    } else if (phase === "form") {
      setPhase("writing");
    } else if (phase === "writing") {
      if (!exerciseValidated) return;
      handleFinish();
    } else if (phase === "exercises") {
      if (exIndex + 1 < totalEx) {
        setExIndex(exIndex + 1);
      } else {
        // Last exercise: compute score from all answers and go to score
        const newResults = activeExercises.map((ex, i) => answers[i] === ex.answer);
        setResults(newResults);
        setPhase("score");
      }
    } else {
      handleFinish();
    }
  }

  const isLastStep = phase === "score" || phase === "writing" || (phase === "theory" && totalEx === 0 && !lesson.writingLevel);
  const showExerciseControls = phase === "exercises" || phase === "writing" || phase === "form";
  // Free navigation in exercises: no validation gate for Suivant
  const nextDisabled = (phase === "writing" && !exerciseValidated) || (phase === "form" && !formValidated);
  const currentExValidated = validated[exIndex] ?? false;

  const score = results.filter(Boolean).length;

  return (
    <div className="app-shell flex min-h-screen flex-col pt-4 pb-32 lg:pb-28">
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
      {phase !== "intro" && phase !== "score" && (!lesson.writingLevel || activeWritingPhases.length > 0) && (
        <div className="mb-6 flex gap-0.5">
          {(lesson.writingLevel ? activeWritingPhases : Array.from({ length: totalSteps })).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                if (!lesson.writingLevel) return;
                const target = activeWritingPhases[i];
                if (target) setPhase(target);
              }}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i > stepIdx ? "bg-[var(--color-border-default)]" : ""}`}
              style={i <= stepIdx ? { background: ACCENT, opacity: i < stepIdx ? 1 : 0.6 } : undefined}
              aria-label={`Aller à l'étape ${i + 1}`}
            />
          ))}
        </div>
      )}

      {phase === "intro" && lesson.writingLevel && (
        <WritingIntroPage lesson={lesson} onStart={() => setPhase("form")} />
      )}

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

      {/* Exercises phase */}
      {phase === "exercises" && activeExercises[exIndex] && (
        <>
          {/* Exercise dot navigator */}
          {totalEx > 1 && (
            <div className="mb-4 flex items-center justify-center gap-2">
              {activeExercises.map((_, i) => (
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
            question={activeExercises[exIndex]!.question}
            instruction={activeExercises[exIndex]!.instruction}
            choices={activeExercises[exIndex]!.choices}
            answer={activeExercises[exIndex]!.answer}
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
          <div className="app-shell-bar flex items-center justify-between py-3">
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
                  disabled={(phase === "exercises" ? currentExValidated : phase === "form" ? formValidated : exerciseValidated) || grammarChecking}
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
                  disabled={(phase === "writing" ? false : phase === "form" ? false : !selected) || (phase === "exercises" ? currentExValidated : phase === "form" ? formValidated : exerciseValidated) || grammarChecking}
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
