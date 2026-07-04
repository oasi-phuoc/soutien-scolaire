"use client";

import { useCallback, useEffect, useState, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  getExpressionTeachersAction,
  submitExpressionAction,
  type TeacherOption,
} from "@/app/actions/expression";
import {
  randomFormTemplates,
  type FormField,
  type FormTemplate,
} from "@/lib/curriculum/content/communication/form-prompts";
import {
  getFormSampleAnswer,
  getWritingSampleAnswer,
} from "@/lib/curriculum/content/communication/pe-sample-answers";
import {
  randomWritingPrompt,
  type WritingLevel,
  type WritingPrompt,
} from "@/lib/curriculum/content/communication/writing-prompts";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  CommunicationFinishButton,
  CommunicationIntroSection,
  CommunicationResultsExercise,
  CommunicationTeacherSubmit,
  EXPRESSION_TAB_HREF,
  type IntroBullet,
  type IntroRow,
} from "@/components/communication/CommunicationEvalLayout";
import type { PlacementRunnerProps } from "@/lib/placement/runner-props";
import { placementLessonCode } from "@/lib/placement/types";
import { queuePlacementSubmission } from "@/lib/placement/pending-submissions";

type StepId = "form" | "short" | "long";
type Phase = "intro" | "exercise" | "results";

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
  if (level === "moyen") return kind === "short" ? 60 : 100;
  return kind === "short" ? 120 : 160;
}

function wordCount(text: string) {
  return text.trim() ? text.trim().split(/\s+/u).filter(Boolean).length : 0;
}

function buildPrompt(level: WritingLevel, kind: "short" | "long"): WritingPrompt {
  const base = randomWritingPrompt(level, kind);
  const minWords = minWordsFor(level, kind);
  return {
    ...base,
    id: `${base.id}-${kind}`,
    title: kind === "short" ? `Texte court - ${base.title}` : `Texte long - ${base.title}`,
    minWords,
    maxWords: 10000,
    instruction:
      kind === "short"
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
      <div className="mt-3 grid overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white text-sm sm:grid-cols-[1fr_150px]">
        <div className="min-h-36 p-4 leading-relaxed text-[var(--color-text-primary)]">
          <p className="whitespace-pre-line">{prompt.sourceMessage.body}</p>
        </div>
        <div className="border-t border-dashed border-[var(--color-border-default)] p-4 sm:border-l sm:border-t-0">
          <p className="text-xs font-semibold uppercase text-[var(--color-text-secondary)]">Carte postale</p>
          {prompt.sourceMessage.from && <p className="mt-4 font-semibold">{prompt.sourceMessage.from}</p>}
        </div>
      </div>
    );
  }
  if (isSms) {
    return (
      <div className="mt-3 rounded-[var(--radius-lg)] bg-slate-100 p-3">
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm leading-relaxed text-[var(--color-text-primary)] shadow-sm">
          {prompt.sourceMessage.from && <p className="mb-1 text-xs font-bold text-[var(--color-accent-fr)]">{prompt.sourceMessage.from}</p>}
          <p className="whitespace-pre-line">{prompt.sourceMessage.body}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/85 text-sm leading-relaxed text-[var(--color-text-primary)]">
      <div className="space-y-1 bg-slate-50 px-4 py-3">
        {prompt.sourceMessage.from && <p><span className="font-semibold">De :</span> {prompt.sourceMessage.from}</p>}
        {prompt.sourceMessage.subject && <p><span className="font-semibold">Objet :</span> {prompt.sourceMessage.subject}</p>}
      </div>
      <div className="whitespace-pre-line border-t border-[var(--color-border-default)] px-4 py-3">{prompt.sourceMessage.body}</div>
    </div>
  );
}

function Header({ level, title }: { level: WritingLevel; title: string }) {
  const router = useRouter();
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        onClick={() => router.push("/communication")}
        aria-label="Quitter la leçon"
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85"
        style={{ background: ACCENT }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
          Français · Production écrite · {levelLabel(level)}
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

function CorrectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2.5">
      <p className="mb-1.5 text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>{title}</p>
      <div className="space-y-1.5 text-sm leading-relaxed text-[var(--color-text-primary)]">{children}</div>
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
}: {
  field: FormField;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  const className = "min-h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-comm)] disabled:opacity-70";
  return (
    <label className={field.wide ? "sm:col-span-2" : ""}>
      <span className="mb-1 block text-xs font-semibold text-[var(--color-text-secondary)]">{field.label}</span>
      {field.options?.length ? (
        <select value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className={className}>
          <option value="">Choisir</option>
          {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      ) : (
        <input type={field.type ?? "text"} value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} className={className} />
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
}: {
  template: FormTemplate;
  answers: Record<string, string>;
  advanced: boolean;
  disabled: boolean;
  onChange: (fieldId: string, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">{template.situation}</p>
      {advanced && (
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
          Lisez la situation, repérez les informations utiles et complétez seulement les champs que vous pouvez déduire.
        </div>
      )}
      <section className="border border-slate-200 bg-white px-4 py-5 shadow-none sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">{template.organization}</p>
        <h2 className="mt-1 text-center text-xl font-bold uppercase text-[var(--color-text-primary)]">{template.title}</h2>
        <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
          {template.fields.map((field) => (
            <FormFieldControl
              key={field.id}
              field={field}
              value={answers[field.id] ?? ""}
              disabled={disabled}
              onChange={(value) => onChange(field.id, value)}
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
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4">
        <p className="text-xs font-bold uppercase text-[var(--color-accent-fr)]">Situation</p>
        <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">{prompt.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-primary)]">{prompt.situation}</p>
        <SourceMessageCard prompt={prompt} />
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">{prompt.instruction}</p>
        <p className="mt-3 text-xs font-semibold text-[var(--color-text-secondary)]">Indiquez :</p>
        <ul className="mt-1 space-y-1">
          {prompt.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-[var(--color-text-primary)]">
              <span className="text-[var(--color-accent-fr)]">•</span><span>{point}</span>
            </li>
          ))}
        </ul>
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
      <div className="space-y-4 border-t border-[var(--color-border-default)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
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
        <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Éléments à connaître</h3>
        <p>Il faut utiliser surtout le présent. Chaque phrase commence par une majuscule et finit avec un point.</p>
        <AdviceLine title="À éviter">Écrire une seule phrase très longue, oublier la consigne, utiliser des mots dont on ne connaît pas le sens.</AdviceLine>
      </div>
    );
  }

  if (level === "moyen") {
    return (
      <div className="space-y-4 border-t border-[var(--color-border-default)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
        <AdviceLine title="1. Comprendre">Lire la consigne et identifier le type de texte demandé : réponse, récit, description ou avis.</AdviceLine>
        <AdviceLine title="2. Préparer">Noter les idées avec des mots-clés et choisir l&apos;ordre des informations.</AdviceLine>
        <AdviceLine title="3. Organiser">Séparer le texte en début, milieu et fin.</AdviceLine>
        <AdviceLine title="4. Rédiger">Faire des phrases claires et varier un peu le vocabulaire.</AdviceLine>
        <AdviceLine title="5. Relire">Contrôler les accords, les temps et la ponctuation.</AdviceLine>
        <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Construire le texte</h3>
        <AdviceLine title="Introduction">Quel est le sujet et pourquoi est-il important ?</AdviceLine>
        <AdviceLine title="Développement">Quels faits, détails ou exemples expliquent mon idée ?</AdviceLine>
        <AdviceLine title="Conclusion">Quel est mon bilan, mon avis ou ma demande ?</AdviceLine>
        <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Éléments à connaître</h3>
        <p>Raconter avec le passé composé et décrire avec l&apos;imparfait. Parler d&apos;un projet avec le futur proche ou le futur simple. Exprimer son opinion avec à mon avis, je pense que, selon moi.</p>
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
    <div className="space-y-4 border-t border-[var(--color-border-default)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
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
      <h3 className="pt-2 font-bold text-[var(--color-text-primary)]">Éléments à connaître</h3>
      <p>Varier les phrases simples et complexes. Choisir un registre cohérent et reprendre les idées avec des pronoms ou des synonymes. Nuancer avec certes, toutefois, en revanche, même si, bien que... Exprimer la cause et la conséquence avec puisque, grâce à, à cause de, par conséquent...</p>
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

function formToText(template: FormTemplate | null, answers: Record<string, string>) {
  if (!template) return "";
  const lines = template.fields.map((field) => `${field.label} : ${answers[field.id] ?? ""}`);
  return [`${template.organization} - ${template.title}`, template.situation, ...lines].join("\n");
}

export function ProductionEcriteRunner({
  lessonId,
  mode = "module",
  placementSessionId,
  onPlacementComplete,
}: { lessonId: string } & PlacementRunnerProps) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const code = lessonCode(level);
  const stepMeta = getStepMeta(level);
  const initialSteps = stepMeta.map((step) => step.id);
  const hasForm = level !== "avance";
  const [phase, setPhase] = useState<Phase>("intro");
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [remaining, setRemaining] = useState<StepId[]>(initialSteps);
  const [current, setCurrent] = useState<StepId>(initialSteps[0]!);
  const [formTemplate] = useState<FormTemplate | null>(() => (hasForm ? randomFormTemplates(1)[0] ?? null : null));
  const [formAnswers, setFormAnswers] = useState<Record<string, string>>({});
  const [shortPrompt] = useState<WritingPrompt>(() => buildPrompt(level, "short"));
  const [longPrompt] = useState<WritingPrompt>(() => buildPrompt(level, "long"));
  const [shortText, setShortText] = useState("");
  const [longText, setLongText] = useState("");
  const [validatedSteps, setValidatedSteps] = useState<Set<StepId>>(new Set());
  const [openResult, setOpenResult] = useState<StepId | null>(initialSteps[0]!);
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);
  const [teacherId, setTeacherId] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [isSending, startSending] = useTransition();

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
    });
  }

  function sendToTeacher() {
    if (!teacherId || sent) return;
    const parts: string[] = [];
    const feedback: Array<{ exercise: string; answers?: Record<string, string>; matches: unknown[] }> = [];
    if (hasForm && formTemplate) {
      parts.push("FORMULAIRE", formToText(formTemplate, formAnswers), "");
      feedback.push({ exercise: "form", answers: formAnswers, matches: [] });
    }
    parts.push("TEXTE COURT", shortPrompt.title, shortText, "", "TEXTE LONG", longPrompt.title, longText);
    feedback.push({ exercise: "short", matches: [] }, { exercise: "long", matches: [] });
    const placementCode = mode === "placement" ? placementLessonCode("pe", level) : code;
    const promptPayload = {
      id: `${placementCode}-complete`,
      title: `${placementCode} - Production écrite complète`,
      situation: hasForm ? "Formulaire, texte court et texte long." : "Texte court et texte long.",
      instruction: "Correction professeur demandée.",
      points: hasForm ? ["Formulaire", "Texte court", "Texte long"] : ["Texte court", "Texte long"],
      minWords: 0,
      maxWords: 10000,
    };
    const textPayload = parts.join("\n");

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
        if (!result.ok && placementSessionId) {
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
      <main className="mx-auto w-full max-w-xl space-y-7 px-4 pb-28 pt-6">
        <Header level={level} title="Production écrite" />
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
        <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 pb-28 pt-6">
          <Header level={level} title="En attente de correction" />
          <section className="mt-8 rounded-[var(--radius-lg)] border border-emerald-200 bg-emerald-50/80 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">Envoyé au professeur</p>
            <h2 className="mt-3 text-xl font-bold text-[var(--color-text-primary)]">
              Votre production écrite est en attente de notation.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
              Le professeur attribuera les points sur 25 et le résultat final. Vous les verrez dans la messagerie après correction.
            </p>
            {sendMessage && <p className="mt-4 text-sm font-semibold text-emerald-700">{sendMessage}</p>}
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
      <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
        <Header level={level} title="Envoi au professeur" />
        <section className="rounded-[var(--radius-lg)] border border-amber-200 bg-amber-50/80 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Correction professeur requise</p>
          <h2 className="mt-2 text-lg font-bold text-[var(--color-text-primary)]">Aucun résultat n&apos;est calculé automatiquement.</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
            Choisissez un professeur pour envoyer votre production. Les points et le résultat final seront attribués par le professeur.
          </p>
        </section>
        <p className="text-center text-sm text-[var(--color-text-secondary)]">Vous pouvez relire vos réponses avant l&apos;envoi.</p>
        <div className="space-y-3">
          {stepMeta.map((item, index) => {
            const isOpen = openResult === item.id;
            const formSample = formTemplate ? getFormSampleAnswer(formTemplate.id) : undefined;
            const shortSample = getWritingSampleAnswer(shortPrompt.id);
            const longSample = getWritingSampleAnswer(longPrompt.id);
            return (
              <CommunicationResultsExercise
                key={item.id}
                index={index}
                title={item.title}
                scoreLabel={`${item.points} pts`}
                open={isOpen}
                onToggle={() => setOpenResult(isOpen ? null : item.id)}
              >
                {item.id === "form" && (
                  <>
                    <p className="mb-1 text-xs font-semibold text-[var(--color-text-secondary)]">Votre production</p>
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">{formToText(formTemplate, formAnswers)}</pre>
                    {formSample && (
                      <CorrectionBlock title="Proposition de réponse">
                        <pre className="whitespace-pre-wrap">{formSample}</pre>
                      </CorrectionBlock>
                    )}
                  </>
                )}
                {item.id === "short" && (
                  <>
                    <p className="mb-1 text-xs font-semibold text-[var(--color-text-secondary)]">{shortPrompt.title}</p>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">{shortText || "Aucun texte saisi."}</p>
                    {shortSample && (
                      <CorrectionBlock title="Proposition de réponse">
                        <p className="whitespace-pre-wrap">{shortSample}</p>
                      </CorrectionBlock>
                    )}
                  </>
                )}
                {item.id === "long" && (
                  <>
                    <p className="mb-1 text-xs font-semibold text-[var(--color-text-secondary)]">{longPrompt.title}</p>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">{longText || "Aucun texte saisi."}</p>
                    {longSample && (
                      <CorrectionBlock title="Proposition de réponse">
                        <p className="whitespace-pre-wrap">{longSample}</p>
                      </CorrectionBlock>
                    )}
                  </>
                )}
              </CommunicationResultsExercise>
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
        <HiddenNav onBack={() => router.push(EXPRESSION_TAB_HREF)} onNext={() => router.push(EXPRESSION_TAB_HREF)} nextLabel="Terminer" />
        <CommunicationFinishButton onClick={() => router.push(EXPRESSION_TAB_HREF)} />
      </main>
    );
  }

  const step = stepMeta.find((item) => item.id === current)!;
  return (
    <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
      <Header level={level} title="Production écrite" />
      <ProgressBar steps={stepMeta} current={current} remaining={remaining} secondsLeft={secondsLeft} onSelect={setCurrent} />
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{step.title}</h2>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--color-text-secondary)]">{step.points} pts</span>
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
