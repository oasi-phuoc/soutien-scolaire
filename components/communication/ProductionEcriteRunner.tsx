"use client";

import { useCallback, useEffect, useState, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { PageBackButton } from "@/components/ui/PageBackButton";
import {
  getExpressionTeachersAction,
  submitExpressionAction,
  type TeacherOption,
} from "@/app/actions/expression";
import { AppSelect } from "@/components/ui/AppSelect";
import {
  randomFormTemplates,
  pickFormTemplate,
  type FormField,
  type FormTemplate,
} from "@/lib/curriculum/content/communication/form-prompts";
import {
  getFormSampleAnswer,
  getWritingSampleAnswer,
} from "@/lib/curriculum/content/communication/pe-sample-answers";
import {
  randomWritingPrompt,
  seededWritingPrompt,
  type WritingLevel,
  type WritingPrompt,
} from "@/lib/curriculum/content/communication/writing-prompts";
import {
  buildPeSubmissionBundle,
  bundleToPromptPayload,
  exercisesToOriginalText,
  formToText,
} from "@/lib/curriculum/content/communication/pe-submission";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  CommunicationFinishButton,
  CommunicationIntroSection,
  CommunicationTeacherSubmit,
  EXPRESSION_TAB_HREF,
  type IntroBullet,
  type IntroRow,
} from "@/components/communication/CommunicationEvalLayout";
import { FrenchTrainingElementsBlock } from "@/components/placement/FrenchTrainingElementsBlock";
import type { PrintExercise } from "@/components/ui/PrintConfigSheet";
import { ExerciseConsigne } from "@/components/print/ExerciseConsigne";
import { currentPrintExerciseSeed } from "@/components/math/placement/placement-print-rng";
import {
  PePrintRubricGrid,
  PeWritingPrintExercise,
} from "@/components/communication/PeWritingPrintPreview";
import { useRegisterEvalGuard, useGuardedNavigate } from "@/components/EvalNavGuard";
import type { PlacementRunnerProps } from "@/lib/placement/runner-props";
import { placementLessonCode } from "@/lib/placement/types";
import { isRetryablePlacementSubmitError, queuePlacementSubmission } from "@/lib/placement/pending-submissions";
import type { PeExerciseKind } from "@/lib/curriculum/content/communication/expression-submission-types";

type StepId = "form" | "short" | "long";
type Phase = "intro" | "exercise" | "results";

/** Kind de grille de notation aligné sur `buildPeSubmissionBundle`. */
function pePrintKind(
  writingLevel: WritingLevel,
  stepId: StepId,
  isHybrid: boolean,
): PeExerciseKind {
  if (stepId === "form") return "form";
  if (isHybrid) return stepId === "short" ? "reply" : "experience";
  if (writingLevel === "moyen") return stepId === "short" ? "reply" : "experience";
  return stepId === "short" ? "short" : "long";
}

const ACCENT = "var(--color-accent-comm)";

const TOTAL_POINTS = 25;
const TOTAL_SECONDS = 45 * 60;

function getStepMeta(level: WritingLevel): Array<{ id: StepId; title: string; points: number }> {
  if (level === "avance") {
    return [
      { id: "short", title: "Texte à rédiger court", points: 12 },
      { id: "long", title: "Texte à rédiger long", points: 13 },
    ];
  }
  if (level === "moyen") {
    return [
      { id: "long", title: "Raconter une expérience", points: 13 },
      { id: "short", title: "Répondre à un message", points: 12 },
    ];
  }
  return [
    { id: "form", title: "Formulaire", points: 5 },
    { id: "short", title: "Texte à rédiger court", points: 10 },
    { id: "long", title: "Texte à rédiger long", points: 10 },
  ];
}

function formatTimer(seconds: number) {
  const min = Math.max(0, Math.floor(seconds / 60));
  const sec = Math.max(0, seconds % 60);
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function levelFromId(lessonId: string): WritingLevel {
  if (lessonId === "PE-2" || lessonId === "expression-e1-2") return "moyen";
  if (lessonId === "PE-3" || lessonId === "expression-e1-3") return "avance";
  return "base";
}

function lessonCode(level: WritingLevel) {
  if (level === "moyen") return "PE.2";
  if (level === "avance") return "PE.3";
  return "PE.1";
}

function levelLabel(level: WritingLevel) {
  if (level === "moyen") return "Moyen";
  if (level === "avance") return "Avancé";
  return "Base";
}

function minWordsFor(level: WritingLevel, kind: "short" | "long") {
  if (level === "base") return kind === "short" ? 40 : 50;
  if (level === "moyen") return 80;
  return kind === "short" ? 120 : 160;
}

function wordCount(text: string) {
  return text.trim() ? text.trim().split(/\s+/u).filter(Boolean).length : 0;
}

function buildPrompt(level: WritingLevel, kind: "short" | "long", seed?: string): WritingPrompt {
  const base = seed
    ? seededWritingPrompt(level, kind, seed)
    : randomWritingPrompt(level, kind);
  const minWords = minWordsFor(level, kind);
  return {
    ...base,
    id: `${base.id}-${kind}`,
    title: level === "moyen" ? base.title : kind === "short" ? `Texte court - ${base.title}` : `Texte long - ${base.title}`,
    minWords,
    maxWords: 10000,
    instruction:
      level === "moyen"
        ? `${base.instruction} Rédigez un texte d'au moins ${minWords} mots.`
        : kind === "short"
          ? `${base.instruction} Rédigez un texte court d'au moins ${minWords} mots.`
          : `${base.instruction} Rédigez un texte plus développé d'au moins ${minWords} mots.`,
  };
}

function SourceMessageCard({ prompt }: { prompt: WritingPrompt }) {
  if (!prompt.sourceMessage) return null;
  const isPostcard = /carte|vacances|postale/i.test(prompt.title);
  const isSms = /sms|message|whatsapp|week-end|anniversaire/i.test(prompt.title);
  if (isPostcard) {
    return (
      <div className="mt-3 grid text-sm sm:grid-cols-[1fr_150px]">
        <div className="min-h-36 py-1 leading-relaxed text-[var(--color-text-primary)]">
          <p className="whitespace-pre-line">{prompt.sourceMessage.body}</p>
        </div>
        <div className="border-t border-dashed border-[var(--color-border-default)] py-1 sm:border-l sm:border-t-0 sm:pl-4">
          <p className="text-xs font-semibold uppercase text-[var(--color-text-secondary)]">Carte postale</p>
          {prompt.sourceMessage.from && <p className="mt-4 font-semibold">{prompt.sourceMessage.from}</p>}
        </div>
      </div>
    );
  }
  if (isSms) {
    return (
      <div className="mt-3 text-sm leading-relaxed text-[var(--color-text-primary)]">
        {prompt.sourceMessage.from && <p className="mb-1 text-xs font-bold text-[var(--color-accent-fr)]">{prompt.sourceMessage.from}</p>}
        <p className="whitespace-pre-line">{prompt.sourceMessage.body}</p>
      </div>
    );
  }
  return (
    <div className="mt-3 text-sm leading-relaxed text-[var(--color-text-primary)]">
      <div className="space-y-1">
        {prompt.sourceMessage.from && <p><span className="font-semibold">De :</span> {prompt.sourceMessage.from}</p>}
        {prompt.sourceMessage.subject && <p><span className="font-semibold">Objet :</span> {prompt.sourceMessage.subject}</p>}
      </div>
      <div className="mt-2 whitespace-pre-line">{prompt.sourceMessage.body}</div>
    </div>
  );
}

function Header({ level, title, placement = false }: { level: WritingLevel; title: string; placement?: boolean }) {
  const router = useRouter();
  const guardedNavigate = useGuardedNavigate();
  const accent = placement ? "var(--color-accent-quiz)" : ACCENT;
  const leaveHref = placement ? "/placement" : "/communication";
  return (
    <div className="flex items-start gap-3">
      <PageBackButton
        className="mt-0.5"
        ariaLabel="Quitter la leçon"
        onClick={() => guardedNavigate(() => router.push(leaveHref))}
      />
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
          {placement ? "Test de placement · PE" : "Français · Production écrite"} · {levelLabel(level)}
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h1>
      </div>
    </div>
  );
}

function HiddenNav({
  onBack,
  onRefresh,
  onValidate,
  onNext,
  refreshDisabled,
  validateDisabled,
  nextDisabled,
  nextLabel,
}: {
  onBack?: () => void;
  onRefresh?: () => void;
  onValidate?: () => void;
  onNext?: () => void;
  refreshDisabled?: boolean;
  validateDisabled?: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="hidden fixed bottom-0 left-0 right-0">
      {onBack && <button type="button" data-nav-action="back" onClick={onBack}>Retour</button>}
      {onRefresh && <button type="button" data-nav-action="refresh" disabled={refreshDisabled} onClick={onRefresh}>Refresh</button>}
      {onValidate && <button type="button" data-nav-action="validate" disabled={validateDisabled} onClick={onValidate}>Valider</button>}
      {onNext && (
        <button type="button" data-nav-action="next" data-nav-label={nextLabel} disabled={nextDisabled} onClick={onNext}>
          {nextLabel ?? "Suivant"}
        </button>
      )}
    </div>
  );
}

const ACCENT_SOFT = "color-mix(in oklch, var(--color-accent-quiz) 12%, white)";
const ACCENT_BORDER = "color-mix(in oklch, var(--color-accent-quiz) 28%, white)";

function PePropositionAccordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-[var(--radius-md)] border"
      style={{ borderColor: ACCENT_BORDER, background: ACCENT_SOFT }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:brightness-[0.98]"
      >
        <span className="font-bold" style={{ color: ACCENT }}>{title}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: ACCENT }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          className="space-y-3 border-t px-4 py-3 text-sm leading-relaxed text-[var(--color-text-primary)]"
          style={{ borderColor: ACCENT_BORDER }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function SampleParagraphs({ text }: { text: string }) {
  return (
    <div className="space-y-3">
      {text.split(/\n\n+/).filter(Boolean).map((paragraph, index) => (
        <p key={index} className="leading-relaxed">{paragraph}</p>
      ))}
    </div>
  );
}

function ProgressBar({
  steps,
  current,
  remaining,
  secondsLeft,
  onSelect,
}: {
  steps: Array<{ id: StepId; title: string; points: number }>;
  current: StepId;
  remaining: StepId[];
  secondsLeft: number;
  onSelect: (id: StepId) => void;
}) {
  const visibleSteps = steps.filter((step) => remaining.includes(step.id));
  return (
    <div className="mb-5">
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-xs font-bold tabular-nums" style={{ color: ACCENT }}>0 / {TOTAL_POINTS} pts</p>
        <div className="flex items-center gap-3">
          <span className="rounded-full px-2 py-0.5 text-xs font-bold tabular-nums" style={{ background: `color-mix(in srgb, ${ACCENT} 12%, white)`, color: ACCENT }}>
            {formatTimer(secondsLeft)}
          </span>
          <p className="text-xs text-[var(--color-text-secondary)]">{remaining.length} exercice{remaining.length !== 1 ? "s" : ""} restant{remaining.length !== 1 ? "s" : ""}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {visibleSteps.map((step) => (
          <button
            key={step.id}
            type="button"
            onClick={() => onSelect(step.id)}
            className="h-2 min-w-12 flex-1 rounded-full transition-colors"
            style={{ background: current === step.id ? ACCENT : "var(--color-border-default, var(--color-border))" }}
            aria-label={step.title}
          />
        ))}
      </div>
    </div>
  );
}

function FormFieldControl({
  field,
  value,
  disabled,
  onChange,
  forPrint = false,
}: {
  field: FormField;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  forPrint?: boolean;
}) {
  const className = "min-h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-comm)] disabled:opacity-70";
  // Dates en textbox (pas de sélecteur natif).
  const inputType = !field.type || field.type === "date" ? "text" : field.type;

  // Impression : ligne de saisie manuscrite (pas de liste déroulante ni de
  // champ encadré) — la correction affiche la valeur attendue sur la ligne.
  if (forPrint) {
    return (
      <div className={field.wide ? "col-span-2" : ""}>
        <span className="mb-1 block text-xs font-semibold text-[var(--color-text-secondary)]">{field.label}</span>
        <div className="flex min-h-7 items-end border-b border-black/50 pb-0.5 text-sm font-bold text-amber-700">
          {value}
        </div>
      </div>
    );
  }

  return (
    <label className={field.wide ? "col-span-2" : ""}>
      <span className="mb-1 block text-xs font-semibold text-[var(--color-text-secondary)]">{field.label}</span>
      {field.options?.length ? (
        <AppSelect
          value={value}
          onChange={onChange}
          options={field.options}
          placeholder="Choisir"
          emptyOption={{ value: "", label: "Choisir" }}
          disabled={disabled}
          className="w-full"
        />
      ) : (
        <input type={inputType} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className={className} />
      )}
    </label>
  );
}

function FormExercise({
  template,
  answers,
  advanced,
  disabled,
  onChange,
  forPrint = false,
}: {
  template: FormTemplate;
  answers: Record<string, string>;
  advanced: boolean;
  disabled: boolean;
  onChange: (fieldId: string, value: string) => void;
  forPrint?: boolean;
}) {
  return (
    <div className="space-y-4">
      <ExerciseConsigne>
        Lisez la situation, repérez les informations utiles et complétez le formulaire.
      </ExerciseConsigne>
      <p className="text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">{template.situation}</p>
      {advanced && (
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
          Complétez seulement les champs que vous pouvez déduire de la situation.
        </div>
      )}
      <section className="border border-slate-200 bg-white px-4 py-5 shadow-none sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">{template.organization}</p>
        <h2 className="mt-1 text-center text-xl font-bold uppercase text-[var(--color-text-primary)]">{template.title}</h2>
        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
          {template.fields.map((field) => (
            <FormFieldControl
              key={field.id}
              field={field}
              value={answers[field.id] ?? ""}
              disabled={disabled}
              onChange={(value) => onChange(field.id, value)}
              forPrint={forPrint}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function WritingExercise({
  prompt,
  text,
  onTextChange,
  disabled,
}: {
  prompt: WritingPrompt;
  text: string;
  onTextChange: (value: string) => void;
  disabled: boolean;
}) {
  const count = wordCount(text);
  return (
    <div className="space-y-5">
      <div>
        <SourceMessageCard prompt={prompt} />
        {prompt.situation ? (
          <p className="mb-2 w-full text-sm leading-relaxed text-[var(--color-text-secondary)]">{prompt.situation}</p>
        ) : null}
        <p className="w-full text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">{prompt.instruction}</p>
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <label htmlFor={`pe-${prompt.id}`} className="text-sm font-bold text-[var(--color-text-primary)]">Votre production</label>
          <span className={`text-xs font-semibold ${count >= prompt.minWords ? "text-emerald-600" : "text-amber-600"}`}>
            {count} mot{count > 1 ? "s" : ""} · minimum conseillé {prompt.minWords}
          </span>
        </div>
        <textarea
          id={`pe-${prompt.id}`}
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
          readOnly={disabled}
          rows={12}
          className="min-h-72 w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4 text-base leading-7 text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent-comm)] read-only:bg-white/55"
        />
        {count > 0 && count < prompt.minWords && (
          <p className="mt-1 text-xs font-semibold text-amber-600">Il est conseillé d&apos;écrire au moins {prompt.minWords} mots.</p>
        )}
      </div>
    </div>
  );
}

function AdviceLine({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-bold" style={{ color: ACCENT }}>{title}</p>
      <div className="mt-1 text-[var(--color-text-primary)]">{children}</div>
    </div>
  );
}

function AdviceSection({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 py-1 pl-3 text-[var(--color-text-primary)]" style={{ borderColor: ACCENT }}>
      {children}
    </div>
  );
}

function AdviceContent({ level }: { level: WritingLevel }) {
  if (level === "base") {
    return (
      <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
        <AdviceLine title="1. Comprendre">Lire la consigne deux fois et repérer les informations demandées.</AdviceLine>
        <AdviceLine title="2. Préparer">Noter les idées principales avec des mots-clés.</AdviceLine>
        <AdviceLine title="3. Organiser">Mettre les idées dans un ordre logique.</AdviceLine>
        <AdviceLine title="4. Rédiger">Écrire des phrases courtes avec un sujet et un verbe.</AdviceLine>
        <AdviceLine title="5. Relire">Vérifier les majuscules, les points et les mots oubliés.</AdviceLine>
        <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Construire le texte</h3>
        <AdviceLine title="1. Au début">Saluer et annoncer le sujet.</AdviceLine>
        <AdviceSection>Bonjour Sara, je t&apos;écris pour t&apos;inviter.</AdviceSection>
        <AdviceLine title="2. Au milieu">Donner les informations utiles selon la situation de l&apos;énoncé.</AdviceLine>
        <AdviceSection>La fête est samedi à 15 heures chez moi.</AdviceSection>
        <AdviceLine title="3. À la fin">Saluer et signer.</AdviceLine>
        <AdviceSection>J&apos;espère que tu peux venir. À bientôt !</AdviceSection>
        <FrenchTrainingElementsBlock
          level={level}
          intro="Pour rédiger un texte A1, utilisez surtout le présent. Chaque phrase commence par une majuscule et finit par un point. Voici les points de grammaire, conjugaison et vocabulaire à maîtriser :"
        />
        <AdviceLine title="À éviter">Écrire une seule phrase très longue, oublier la consigne, utiliser des mots dont on ne connaît pas le sens.</AdviceLine>
      </div>
    );
  }

  if (level === "moyen") {
    return (
      <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
        <AdviceLine title="1. Comprendre">Lire la consigne et identifier le type de texte demandé : réponse, récit, description ou avis.</AdviceLine>
        <AdviceLine title="2. Préparer">Noter les idées avec des mots-clés et choisir l&apos;ordre des informations.</AdviceLine>
        <AdviceLine title="3. Organiser">Séparer le texte en début, milieu et fin.</AdviceLine>
        <AdviceLine title="4. Rédiger">Faire des phrases claires et varier un peu le vocabulaire.</AdviceLine>
        <AdviceLine title="5. Relire">Contrôler les accords, les temps et la ponctuation.</AdviceLine>
        <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Construire le texte</h3>
        <AdviceLine title="Introduction">Quel est le sujet et pourquoi est-il important ?</AdviceLine>
        <AdviceLine title="Développement">Quels faits, détails ou exemples expliquent mon idée ?</AdviceLine>
        <AdviceLine title="Conclusion">Quel est mon bilan, mon avis ou ma demande ?</AdviceLine>
        <FrenchTrainingElementsBlock
          level={level}
          intro="Pour un texte A2, variez les temps (passé composé, imparfait, futur) et exprimez votre opinion (à mon avis, je pense que…). Points essentiels du niveau :"
        />
        <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Rendre le texte cohérent</h3>
        <p>Il faut organiser le texte avec des connecteurs : d&apos;abord, ensuite, puis, enfin, cependant, donc...</p>
        <AdviceLine title="Ajouter"><AdviceSection>de plus, aussi, également.</AdviceSection></AdviceLine>
        <AdviceLine title="Expliquer"><AdviceSection>parce que, car, en effet.</AdviceSection></AdviceLine>
        <AdviceLine title="Opposer"><AdviceSection>mais, pourtant, cependant.</AdviceSection></AdviceLine>
        <AdviceLine title="Conclure"><AdviceSection>donc, finalement, pour conclure.</AdviceSection></AdviceLine>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
      <AdviceLine title="1. Comprendre">Identifier le destinataire, le but du texte et le registre attendu.</AdviceLine>
      <AdviceLine title="2. Préparer">Choisir deux ou trois idées fortes et prévoir des exemples précis.</AdviceLine>
      <AdviceLine title="3. Organiser">Construire un texte avec une introduction, un développement et une conclusion.</AdviceLine>
      <AdviceLine title="4. Rédiger">Varier les phrases simples et complexes, et garder un registre cohérent.</AdviceLine>
      <AdviceLine title="5. Relire">Vérifier les connecteurs, les reprises, les accords et la politesse.</AdviceLine>
      <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Construire le texte</h3>
      <AdviceLine title="Introduction">Présenter le thème, le contexte et la question principale.</AdviceLine>
      <AdviceLine title="Argument 1">Annoncer une idée, l&apos;expliquer et donner un exemple précis.</AdviceLine>
      <AdviceLine title="Argument 2">Ajouter ou nuancer avec un nouveau point de vue.</AdviceLine>
      <AdviceLine title="Conclusion">Résumer sans répéter et proposer une ouverture ou une solution.</AdviceLine>
      <AdviceLine title="Objectifs possibles">
        <AdviceSection>
          Informer avec des faits exacts et bien organisés.<br />
          Raconter en donnant un contexte, des événements et un bilan.<br />
          Argumenter avec une opinion, des raisons et des exemples.<br />
          Convaincre en tenant compte du lecteur et des objections possibles.
        </AdviceSection>
      </AdviceLine>
      <FrenchTrainingElementsBlock
        level={level}
        intro="Pour un texte B1, structurez votre argumentation et adaptez le registre au destinataire. Révisez les points suivants :"
      />
      <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Rédaction d&apos;une lettre</h3>
      <AdviceSection>
        <strong>Disposition :</strong> expéditeur, destinataire, lieu et date, objet, formule d&apos;appel, corps de la lettre, formule de politesse, signature.
      </AdviceSection>
      <AdviceSection>
        <strong>Situations possibles :</strong> réclamer, regretter, répondre à une annonce, réagir à une information, refuser, proposer, demander, protester.
      </AdviceSection>
      <AdviceSection>
        <strong>Formules d&apos;appel :</strong> Madame, Monsieur ; Monsieur le Directeur ; Chère Madame ; Cher ami.
      </AdviceSection>
      <AdviceSection>
        <strong>À éviter :</strong> phrases trop longues, répétitions, registre familier dans une lettre officielle, oubli de la formule d&apos;appel ou de politesse.
      </AdviceSection>
    </div>
  );
}

function formToTextLocal(template: FormTemplate | null, answers: Record<string, string>) {
  if (!template) return "";
  return formToText(template, answers);
}

export function ProductionEcriteRunner({
  lessonId,
  mode = "module",
  placementSessionId,
  placementPeHybrid,
  onPlacementComplete,
}: { lessonId: string } & PlacementRunnerProps) {
  const router = useRouter();
  const isPeHybrid = mode === "placement" && !!placementPeHybrid;
  const level = levelFromId(lessonId);
  const code = lessonCode(level);
  const stepMeta = isPeHybrid
    ? [
        { id: "form" as StepId, title: "Formulaire", points: 5 },
        { id: "short" as StepId, title: "Texte à rédiger court", points: 10 },
        { id: "long" as StepId, title: "Texte à rédiger long", points: 10 },
      ]
    : getStepMeta(level);
  const initialSteps = stepMeta.map((step) => step.id);
  const hasForm = isPeHybrid || level === "base";
  const [phase, setPhase] = useState<Phase>("intro");
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [remaining, setRemaining] = useState<StepId[]>(initialSteps);
  const [current, setCurrent] = useState<StepId>(initialSteps[0]!);
  const [formTemplate] = useState<FormTemplate | null>(() => (hasForm ? randomFormTemplates(1)[0] ?? null : null));
  const [formAnswers, setFormAnswers] = useState<Record<string, string>>({});
  const [shortPrompt] = useState<WritingPrompt>(() => (isPeHybrid ? buildPrompt("moyen", "short") : buildPrompt(level, "short")));
  const [longPrompt] = useState<WritingPrompt>(() => (isPeHybrid ? buildPrompt("avance", "long") : buildPrompt(level, "long")));
  const [shortText, setShortText] = useState("");
  const [longText, setLongText] = useState("");
  const [validatedSteps, setValidatedSteps] = useState<Set<StepId>>(new Set());
  const [openResult, setOpenResult] = useState<StepId | null>(null);
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);
  const [teacherId, setTeacherId] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [placementSubmissionId, setPlacementSubmissionId] = useState<string | undefined>();
  const [isSending, startSending] = useTransition();

  useRegisterEvalGuard(mode === "placement" && (phase === "exercise" || (phase === "results" && !sent)));

  useEffect(() => {
    void getExpressionTeachersAction().then(setTeachers);
  }, []);

  useEffect(() => {
    if (phase !== "exercise") return;
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const move = useCallback((direction: 1 | -1) => {
    if (!remaining.length) return;
    const index = remaining.indexOf(current);
    const nextIndex = index === -1 ? 0 : (index + direction + remaining.length) % remaining.length;
    setCurrent(remaining[nextIndex]!);
  }, [current, remaining]);

  const finishStep = useCallback(() => {
    if (validatedSteps.has(current)) return;

    const nextRemaining = remaining.filter((item) => item !== current);
    setValidatedSteps((previous) => new Set([...previous, current]));
    setRemaining(nextRemaining);
    if (!nextRemaining.length) {
      if (mode !== "placement") {
        try {
          markCommunicationLessonComplete(code);
        } catch {
          /* ignore */
        }
      }
      setPhase("results");
      return;
    }
    setCurrent(nextRemaining[0]!);
  }, [code, current, mode, remaining, validatedSteps]);

  function completePlacementPe(sent: boolean, submissionId?: string, message?: string) {
    setSendMessage(message ?? "");
    setSent(sent);
  }

  function continuePlacementPe() {
    onPlacementComplete?.({
      skill: "pe",
      points: 0,
      maxPoints: 25,
      pendingTeacher: true,
      sent: true,
      submissionId: placementSubmissionId,
    });
  }

  function sendToTeacher() {
    if (!teacherId || sent) return;
    const placementCode = mode === "placement"
      ? (isPeHybrid ? placementLessonCode("pe", "avance").replace("-avance", "-progressive") : placementLessonCode("pe", level))
      : code;
    const bundle = buildPeSubmissionBundle({
      level,
      lessonCode: placementCode,
      formTemplate: hasForm ? formTemplate : null,
      formAnswers,
      shortPrompt,
      shortText,
      longPrompt,
      longText,
      peHybrid: isPeHybrid,
    });
    const promptPayload = bundleToPromptPayload(bundle);
    const textPayload = exercisesToOriginalText(bundle.exercises);
    const feedback = bundle.exercises.map((exercise) => ({ exercise: exercise.id, matches: [] }));

    if (mode === "placement" && placementSessionId && (!navigator.onLine)) {
      queuePlacementSubmission({
        kind: "pe",
        id: `pe-${placementSessionId}-${Date.now()}`,
        sessionId: placementSessionId,
        teacherId,
        lessonCode: placementCode,
        level,
        text: textPayload,
        aiFeedback: feedback,
        prompt: promptPayload,
        createdAt: new Date().toISOString(),
      });
      completePlacementPe(true, undefined, "Production enregistrée — envoi au professeur dès la reconnexion.");
      return;
    }

    startSending(async () => {
      const result = await submitExpressionAction({
        teacherId,
        lessonCode: placementCode,
        level,
        prompt: promptPayload,
        text: textPayload,
        aiFeedback: feedback,
        placementSessionId: mode === "placement" ? placementSessionId : undefined,
      });
      if (mode === "placement") {
        if (!result.ok && placementSessionId && isRetryablePlacementSubmitError(result.reason)) {
          queuePlacementSubmission({
            kind: "pe",
            id: `pe-${placementSessionId}-${Date.now()}`,
            sessionId: placementSessionId,
            teacherId,
            lessonCode: placementCode,
            level,
            text: textPayload,
            aiFeedback: feedback,
            prompt: promptPayload,
            createdAt: new Date().toISOString(),
          });
          completePlacementPe(true, undefined, "Production enregistrée — envoi au professeur dès la reconnexion.");
          return;
        }
        completePlacementPe(result.ok, result.submissionId, result.ok ? "Production envoyée au professeur." : (result.reason ?? "Envoi impossible."));
        if (result.submissionId) setPlacementSubmissionId(result.submissionId);
        return;
      }
      setSendMessage(result.ok ? "Production envoyée au professeur." : (result.reason ?? "Envoi impossible."));
      setSent(result.ok);
    });
  }

  if (phase === "intro") {
    const exerciseCount = stepMeta.length;
    const introBullets: IntroBullet[] = [
      { strong: `${exerciseCount} exercice${exerciseCount > 1 ? "s" : ""}`, text: " de production écrite" },
      { strong: "45 minutes", text: " pour compléter l'évaluation" },
      { text: "Validez chaque exercice individuellement" },
      { text: "Vous pouvez naviguer librement en cliquant sur la barre de progression en haut." },
      { before: "Score maximum : ", strong: `${TOTAL_POINTS} points`, text: "" },
    ];
    const introRows: IntroRow[] = stepMeta.map((step, index) => ({
      num: String(index + 1),
      title: step.title,
      points: `${step.points} pts`,
    }));

    return (
      <main className="app-shell space-y-7 pb-28 pt-6">
        <Header level={level} title="Production écrite" placement={mode === "placement"} />
        <CommunicationIntroSection
          bullets={introBullets}
          rows={introRows}
          tips={<AdviceContent level={level} />}
          onStart={() => setPhase("exercise")}
        />
        <HiddenNav onNext={() => setPhase("exercise")} nextLabel="Commencer" />
      </main>
    );
  }

  if (phase === "results") {
    if (sent) {
      return (
        <main className="app-shell flex flex-1 flex-col pb-28 pt-6">
          <Header level={level} title="En attente de correction" placement={mode === "placement"} />
          <section className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-accent-comm)]/25 bg-[var(--color-accent-comm)]/10 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent-comm)]">Envoyé au professeur</p>
            <h2 className="mt-3 text-xl font-bold text-[var(--color-text-primary)]">
              Votre production écrite est en attente de notation.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
              Le professeur attribuera les points sur 25 et le résultat final. Vous les verrez dans la messagerie après correction.
            </p>
            {sendMessage && <p className="mt-4 text-sm font-semibold text-[var(--color-accent-comm)]">{sendMessage}</p>}
          </section>
          {mode === "placement" ? (
            <button
              type="button"
              onClick={continuePlacementPe}
              className="mt-5 w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              Continuer vers la production orale
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => router.push("/messagerie")}
                className="mt-5 w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: ACCENT }}
              >
                Aller à la messagerie
              </button>
              <CommunicationFinishButton onClick={() => router.push(EXPRESSION_TAB_HREF)} />
            </>
          )}
        </main>
      );
    }

    return (
      <main className="app-shell space-y-6 pb-28 pt-6">
        <Header level={level} title="Envoi au professeur" placement={mode === "placement"} />
        <section className="rounded-[var(--radius-lg)] border border-[var(--color-accent-comm)]/25 bg-[var(--color-accent-comm)]/10 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent-comm)]">Correction professeur requise</p>
          <h2 className="mt-2 text-lg font-bold text-[var(--color-text-primary)]">Aucun résultat n&apos;est calculé automatiquement.</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
            Choisissez un professeur pour envoyer votre production. Les points et le résultat final seront attribués par le professeur.
          </p>
        </section>
        <p className="text-center text-sm text-[var(--color-text-secondary)]">Vous pouvez relire vos réponses avant l&apos;envoi.</p>
        <div className="space-y-5">
          {stepMeta.map((item) => {
            const isOpen = openResult === item.id;
            const formSample = formTemplate ? getFormSampleAnswer(formTemplate.id) : undefined;
            const shortSample = getWritingSampleAnswer(shortPrompt.id);
            const longSample = getWritingSampleAnswer(longPrompt.id);
            const sample =
              item.id === "form" ? formSample
              : item.id === "short" ? shortSample
              : longSample;

            const studentBody =
              item.id === "form" ? (
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {formToTextLocal(formTemplate, formAnswers)}
                </pre>
              ) : item.id === "short" ? (
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {shortText || "Aucun texte saisi."}
                </p>
              ) : (
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {longText || "Aucun texte saisi."}
                </p>
              );

            return (
              <div key={item.id} className="space-y-3">
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-4 py-3">
                  <p className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">
                    Votre production — {item.title}
                  </p>
                  {studentBody}
                </div>
                {sample ? (
                  <PePropositionAccordion
                    title="Proposer une réponse"
                    open={isOpen}
                    onToggle={() => setOpenResult(isOpen ? null : item.id)}
                  >
                    {item.id === "form" ? (
                      <pre className="whitespace-pre-wrap">{sample}</pre>
                    ) : (
                      <SampleParagraphs text={sample} />
                    )}
                  </PePropositionAccordion>
                ) : null}
              </div>
            );
          })}
        </div>
        <CommunicationTeacherSubmit
          teachers={teachers}
          teacherId={teacherId}
          onTeacherChange={setTeacherId}
          onSend={sendToTeacher}
          sent={sent}
          isSending={isSending}
          sendMessage={sendMessage}
        />
        {mode !== "placement" && (
          <>
            <HiddenNav onBack={() => router.push(EXPRESSION_TAB_HREF)} onNext={() => router.push(EXPRESSION_TAB_HREF)} nextLabel="Terminer" />
            <CommunicationFinishButton onClick={() => router.push(EXPRESSION_TAB_HREF)} />
          </>
        )}
      </main>
    );
  }

  const step = stepMeta.find((item) => item.id === current)!;
  return (
    <main className="app-shell space-y-6 pb-28 pt-6">
      <Header level={level} title="Production écrite" placement={mode === "placement"} />
      <ProgressBar steps={stepMeta} current={current} remaining={remaining} secondsLeft={secondsLeft} onSelect={setCurrent} />
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{step.title}</h2>
          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--color-text-secondary)]">{step.points} pts</span>
        </div>
        {current === "form" && formTemplate && (
          <FormExercise
            template={formTemplate}
            answers={formAnswers}
            disabled={validatedSteps.has("form")}
            advanced={level === "avance"}
            onChange={(fieldId, value) => setFormAnswers((previous) => ({ ...previous, [fieldId]: value }))}
          />
        )}
        {current === "short" && (
          <WritingExercise prompt={shortPrompt} text={shortText} disabled={validatedSteps.has("short")} onTextChange={setShortText} />
        )}
        {current === "long" && (
          <WritingExercise prompt={longPrompt} text={longText} disabled={validatedSteps.has("long")} onTextChange={setLongText} />
        )}
      </section>
      <HiddenNav
        onBack={() => move(-1)}
        onValidate={() => finishStep()}
        onNext={() => move(1)}
        nextLabel="Suivant"
      />
    </main>
  );
}

/** Aperçu imprimable PE — hybride (défaut) ou selon le niveau d'entraînement. */
export function buildPlacementPePrintExercises(
  level?: "base" | "moyen" | "avance",
  seed = Date.now(),
): PrintExercise[] {
  const isHybrid = !level;
  const writingLevel = level ?? "base";
  const formSeed = String(currentPrintExerciseSeed("pe-form", seed));
  const formTemplate = (isHybrid || writingLevel === "base")
    ? pickFormTemplate(`${formSeed}-pe-form`)
    : null;
  const emptyForm: Record<string, string> = {};
  const formSample = formTemplate ? getFormSampleAnswer(formTemplate.id) : undefined;
  const formCorrectionAnswers = formTemplate && formSample
    ? parseFormSampleAnswers(formTemplate, formSample)
    : emptyForm;

  const meta = isHybrid
    ? [
        { id: "form" as const, title: "Formulaire", points: 5 },
        { id: "short" as const, title: "Texte court", points: 10 },
        { id: "long" as const, title: "Texte long", points: 10 },
      ]
    : getStepMeta(writingLevel);

  const items: PrintExercise[] = [];
  let n = 1;
  for (const step of meta) {
    if (step.id === "form") {
      if (!formTemplate) continue;
      items.push({
        id: "pe-form",
        label: `PE ${n}. ${step.title}`,
        defaultPoints: step.points,
        preview: (
          <div className="space-y-5">
            <FormExercise
              template={formTemplate}
              answers={emptyForm}
              advanced={false}
              disabled={false}
              onChange={() => {}}
              forPrint
            />
          </div>
        ),
        correctionPreview: (
          <div className="space-y-5">
            <FormExercise
              template={formTemplate}
              answers={formCorrectionAnswers}
              advanced={false}
              disabled
              onChange={() => {}}
              forPrint
            />
            {formSample && Object.keys(formCorrectionAnswers).length === 0 ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/80 p-3 text-sm whitespace-pre-line text-emerald-900">
                {formSample}
              </div>
            ) : null}
          </div>
        ),
        correctionFollowPreviews: [
          {
            title: "Décompte",
            preview: <PePrintRubricGrid kind="form" maxPoints={step.points} />,
          },
        ],
      });
      n += 1;
      continue;
    }

    const promptLevel = isHybrid
      ? (step.id === "short" ? "moyen" : "avance")
      : writingLevel;
    const promptSeed = String(currentPrintExerciseSeed(`pe-${step.id}-${n}`, seed));
    const prompt = buildPrompt(
      promptLevel,
      step.id === "long" ? "long" : "short",
      `${promptSeed}-pe-${step.id}`,
    );
    const sample = getWritingSampleAnswer(prompt.id) ?? "";
    const kind = pePrintKind(writingLevel, step.id, isHybrid);
    items.push({
      id: `pe-${step.id}-${n}`,
      label: `PE ${n}. ${step.title}`,
      defaultPoints: step.points,
      leadPreview: (
        <PeWritingPrintExercise
          prompt={prompt}
          kind={kind}
          maxPoints={step.points}
          part="prompt"
        />
      ),
      leadFollowTitle: "Production",
      preview: (
        <PeWritingPrintExercise
          prompt={prompt}
          kind={kind}
          maxPoints={step.points}
          part="lines"
          showRubric={false}
        />
      ),
      correctionLeadPreview: (
        <PeWritingPrintExercise
          prompt={prompt}
          kind={kind}
          maxPoints={step.points}
          part="prompt"
        />
      ),
      correctionLeadTitle: "Énoncé",
      correctionPreview: (
        <PeWritingPrintExercise
          prompt={prompt}
          sampleText={sample || "—"}
          kind={kind}
          maxPoints={step.points}
          part="lines"
          showRubric={false}
        />
      ),
      correctionFollowPreviews: [
        {
          title: "Décompte",
          preview: <PePrintRubricGrid kind={kind} maxPoints={step.points} />,
        },
      ],
    });
    n += 1;
  }
  return items;
}

function parseFormSampleAnswers(template: FormTemplate, sample: string): Record<string, string> {
  const answers: Record<string, string> = {};
  for (const line of sample.split("\n")) {
    const sep = line.indexOf(" : ");
    if (sep < 0) continue;
    const label = line.slice(0, sep).trim();
    const value = line.slice(sep + 3).trim();
    const field = template.fields.find((f) => f.label === label);
    if (field) answers[field.id] = value;
  }
  return answers;
}

/** @deprecated Préférer buildPlacementPePrintExercises. */
export function PlacementPePrintPreview() {
  return (
    <div className="space-y-10">
      {buildPlacementPePrintExercises().map((item) => (
        <div key={item.id} className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-black">{item.label.replace(/^PE \d+\.\s*/, "")}</h2>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-zinc-600">
              {item.defaultPoints} pts
            </span>
          </div>
          {item.preview}
        </div>
      ))}
    </div>
  );
}
