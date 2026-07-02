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
  randomWritingPrompt,
  type WritingLevel,
  type WritingPrompt,
} from "@/lib/curriculum/content/communication/writing-prompts";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";

type StepId = "form" | "short" | "long";
type Phase = "intro" | "exercise" | "results";
type GrammarMatch = {
  message: string;
  shortMessage?: string;
  offset: number;
  length: number;
  replacements?: Array<{ value: string }>;
  rule?: { id?: string };
};

const ACCENT = "var(--color-accent-comm)";
const IGNORED_GRAMMAR_RULES = new Set([
  "WHITESPACE_RULE",
  "FRENCH_WHITESPACE",
  "COMMA_PARENTHESIS_WHITESPACE",
  "UNPAIRED_BRACKETS",
]);

const STEP_META: Array<{ id: StepId; title: string; points: number }> = [
  { id: "form", title: "Formulaire", points: 5 },
  { id: "short", title: "Texte à rédiger court", points: 10 },
  { id: "long", title: "Texte à rédiger long", points: 10 },
];

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
      <div className="mt-3 grid overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-sm sm:grid-cols-[1fr_150px]">
        <div className="min-h-36 p-4 leading-relaxed text-[var(--color-text-primary)]">
          <p className="whitespace-pre-line">{prompt.sourceMessage.body}</p>
        </div>
        <div className="border-t border-dashed border-[var(--color-border)] p-4 sm:border-l sm:border-t-0">
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
    <div className="mt-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/85 text-sm leading-relaxed text-[var(--color-text-primary)]">
      <div className="space-y-1 bg-slate-50 px-4 py-3">
        {prompt.sourceMessage.from && <p><span className="font-semibold">De :</span> {prompt.sourceMessage.from}</p>}
        {prompt.sourceMessage.subject && <p><span className="font-semibold">Objet :</span> {prompt.sourceMessage.subject}</p>}
      </div>
      <div className="whitespace-pre-line border-t border-[var(--color-border)] px-4 py-3">{prompt.sourceMessage.body}</div>
    </div>
  );
}

async function checkGrammar(text: string): Promise<GrammarMatch[]> {
  if (!text.trim()) return [];
  try {
    const response = await fetch("/api/check-grammar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json() as { matches?: GrammarMatch[] };
    return (data.matches ?? []).filter((match) => !IGNORED_GRAMMAR_RULES.has(match.rule?.id ?? ""));
  } catch {
    return [];
  }
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
    <div className="hidden fixed bottom-0">
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

function ProgressBar({
  current,
  remaining,
  onSelect,
}: {
  current: StepId;
  remaining: StepId[];
  onSelect: (id: StepId) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span style={{ color: ACCENT }}>0 / 25 pts</span>
        <span className="text-[var(--color-text-secondary)]">{remaining.length} exercices restants</span>
      </div>
      <div className="flex gap-1">
        {STEP_META.map((step) => {
          const available = remaining.includes(step.id);
          return (
            <button
              key={step.id}
              type="button"
              disabled={!available}
              onClick={() => onSelect(step.id)}
              className="h-2 flex-1 rounded-full transition-opacity disabled:opacity-30"
              style={{ background: !available ? "var(--color-border)" : current === step.id ? ACCENT : `${ACCENT}55` }}
              aria-label={step.title}
            />
          );
        })}
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
  const className = "min-h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-comm)] disabled:opacity-70";
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
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/80 p-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
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
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/80 p-4">
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
          className="min-h-72 w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/80 p-4 text-base leading-7 text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent-comm)] read-only:bg-white/55"
        />
        {count > 0 && count < prompt.minWords && (
          <p className="mt-1 text-xs font-semibold text-amber-600">Il est conseillé d&apos;écrire au moins {prompt.minWords} mots.</p>
        )}
      </div>
    </div>
  );
}

function FeedbackList({ feedback }: { feedback: GrammarMatch[] }) {
  if (!feedback.length) {
    return <p className="text-sm text-[var(--color-text-secondary)]">Aucune erreur évidente détectée. Relisez encore le contenu et l&apos;organisation.</p>;
  }
  return (
    <ul className="space-y-3">
      {feedback.map((match, index) => (
        <li key={`${match.offset}-${index}`} className="text-sm text-[var(--color-text-primary)]">
          <span className="font-semibold text-amber-600">{match.shortMessage || match.message}</span>
          {match.replacements?.length ? (
            <span className="ml-1">→ {match.replacements.slice(0, 3).map((item) => item.value).join(" / ")}</span>
          ) : null}
        </li>
      ))}
    </ul>
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
      <div className="space-y-4 border-t border-[var(--color-border)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
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
      <div className="space-y-4 border-t border-[var(--color-border)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
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
    <div className="space-y-4 border-t border-[var(--color-border)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
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

export function ProductionEcriteRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const code = lessonCode(level);
  const [phase, setPhase] = useState<Phase>("intro");
  const [tipsOpen, setTipsOpen] = useState(false);
  const [remaining, setRemaining] = useState<StepId[]>(["form", "short", "long"]);
  const [current, setCurrent] = useState<StepId>("form");
  const [formTemplate, setFormTemplate] = useState<FormTemplate | null>(() => randomFormTemplates(1)[0] ?? null);
  const [formAnswers, setFormAnswers] = useState<Record<string, string>>({});
  const [shortPrompt, setShortPrompt] = useState<WritingPrompt>(() => buildPrompt(level, "short"));
  const [longPrompt, setLongPrompt] = useState<WritingPrompt>(() => buildPrompt(level, "long"));
  const [shortText, setShortText] = useState("");
  const [longText, setLongText] = useState("");
  const [shortFeedback, setShortFeedback] = useState<GrammarMatch[]>([]);
  const [longFeedback, setLongFeedback] = useState<GrammarMatch[]>([]);
  const [validatedSteps, setValidatedSteps] = useState<Set<StepId>>(new Set());
  const [checking, setChecking] = useState(false);
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);
  const [teacherId, setTeacherId] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [isSending, startSending] = useTransition();

  useEffect(() => {
    void getExpressionTeachersAction().then(setTeachers);
  }, []);

  const move = useCallback((direction: 1 | -1) => {
    if (!remaining.length) return;
    const index = remaining.indexOf(current);
    const nextIndex = index === -1 ? 0 : (index + direction + remaining.length) % remaining.length;
    setCurrent(remaining[nextIndex]!);
  }, [current, remaining]);

  const finishStep = useCallback(async () => {
    if (checking || validatedSteps.has(current)) return;
    setChecking(true);
    if (current === "short") setShortFeedback(await checkGrammar(shortText));
    if (current === "long") setLongFeedback(await checkGrammar(longText));
    setChecking(false);

    const nextRemaining = remaining.filter((item) => item !== current);
    setValidatedSteps((previous) => new Set([...previous, current]));
    setRemaining(nextRemaining);
    if (!nextRemaining.length) {
      try {
        markCommunicationLessonComplete(code);
      } catch {
        /* ignore */
      }
      setPhase("results");
      return;
    }
    setCurrent(nextRemaining[0]!);
  }, [checking, code, current, longText, remaining, shortText, validatedSteps]);

  function resetCurrent() {
    if (current === "form") {
      setFormTemplate(randomFormTemplates(1)[0] ?? null);
      setFormAnswers({});
    } else if (current === "short") {
      setShortPrompt(buildPrompt(level, "short"));
      setShortText("");
      setShortFeedback([]);
    } else {
      setLongPrompt(buildPrompt(level, "long"));
      setLongText("");
      setLongFeedback([]);
    }
  }

  function sendToTeacher() {
    if (!teacherId || sent) return;
    const formText = formToText(formTemplate, formAnswers);
    const combinedText = [
      "FORMULAIRE",
      formText,
      "",
      "TEXTE COURT",
      shortPrompt.title,
      shortText,
      "",
      "TEXTE LONG",
      longPrompt.title,
      longText,
    ].join("\n");
    startSending(async () => {
      const result = await submitExpressionAction({
        teacherId,
        lessonCode: code,
        level,
        prompt: {
          id: `${code}-complete`,
          title: `${code} - Production écrite complète`,
          situation: "Formulaire, texte court et texte long.",
          instruction: "Correction professeur demandée.",
          points: ["Formulaire", "Texte court", "Texte long"],
          minWords: 0,
          maxWords: 10000,
        },
        text: combinedText,
        aiFeedback: [
          { exercise: "form", answers: formAnswers },
          { exercise: "short", matches: shortFeedback },
          { exercise: "long", matches: longFeedback },
        ],
      });
      setSendMessage(result.ok ? "Production envoyée au professeur." : (result.reason ?? "Envoi impossible."));
      setSent(result.ok);
    });
  }

  if (phase === "intro") {
    return (
      <main className="mx-auto w-full max-w-xl space-y-7 px-4 pb-28 pt-6">
        <Header level={level} title="Production écrite" />
        <section className="rounded-[var(--radius-lg)] border border-slate-200 bg-white/80 p-5 shadow-none">
          <h2 className="font-bold text-[var(--color-text-primary)]">Informations</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li><span style={{ color: ACCENT }}>•</span> <strong>3 exercices</strong> de production écrite</li>
            <li><span style={{ color: ACCENT }}>•</span> Validez chaque exercice individuellement</li>
            <li><span style={{ color: ACCENT }}>•</span> Vous pouvez naviguer librement avec la barre de progression</li>
            <li><span style={{ color: ACCENT }}>•</span> Score maximum : <strong>25 points</strong></li>
          </ul>
          <div className="mt-5 grid gap-2">
            {STEP_META.map((step, index) => (
              <div key={step.id} className="flex items-center justify-between rounded-[var(--radius-md)] border border-slate-200 bg-white px-4 py-3">
                <span><strong>{index + 1}.</strong> {step.title}</span>
                <span className="font-semibold" style={{ color: ACCENT }}>{step.points} pts</span>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-[var(--radius-lg)] border border-slate-200 bg-white/80 shadow-none">
          <button type="button" onClick={() => setTipsOpen((value) => !value)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-[var(--color-text-primary)]">
            <span>Conseils pour réussir</span>
            <span style={{ color: ACCENT }}>{tipsOpen ? "-" : "+"}</span>
          </button>
          {tipsOpen && <AdviceContent level={level} />}
        </section>
        <button type="button" onClick={() => setPhase("exercise")} className="w-full rounded-full px-5 py-4 font-bold text-white shadow-sm transition-opacity hover:opacity-90" style={{ background: ACCENT }}>
          Commencer l&apos;évaluation
        </button>
        <HiddenNav onNext={() => setPhase("exercise")} nextLabel="Commencer" />
      </main>
    );
  }

  if (phase === "results") {
    return (
      <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
        <Header level={level} title="Résultats" />
        <section className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>Résultats</p>
          <p className="mt-3 text-4xl font-bold text-[var(--color-text-primary)]">25 pts</p>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">À corriger par le professeur</p>
        </section>
        <section className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4">
          <h2 className="font-bold text-[var(--color-text-primary)]">Formulaire</h2>
          <pre className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-secondary)]">{formToText(formTemplate, formAnswers)}</pre>
        </section>
        <section className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4">
          <h2 className="font-bold text-[var(--color-text-primary)]">Texte court</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">{shortText || "Aucun texte saisi."}</p>
          <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/80 p-4">
            <h3 className="mb-2 font-bold text-amber-600">Pistes de correction</h3>
            <FeedbackList feedback={shortFeedback} />
          </div>
        </section>
        <section className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4">
          <h2 className="font-bold text-[var(--color-text-primary)]">Texte long</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">{longText || "Aucun texte saisi."}</p>
          <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/80 p-4">
            <h3 className="mb-2 font-bold text-amber-600">Pistes de correction</h3>
            <FeedbackList feedback={longFeedback} />
          </div>
        </section>
        <section className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/80 p-4">
          <h2 className="font-bold text-[var(--color-text-primary)]">Envoyer à un professeur</h2>
          {teachers.length ? (
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <select value={teacherId} onChange={(event) => setTeacherId(event.target.value)} disabled={sent} className="min-h-11 flex-1 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-comm)]">
                <option value="">Choisissez un professeur</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>{[teacher.prenom, teacher.nom].filter(Boolean).join(" ") || "Professeur"}</option>
                ))}
              </select>
              <button type="button" onClick={sendToTeacher} disabled={!teacherId || isSending || sent} className="min-h-11 rounded-[var(--radius-md)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white disabled:opacity-35">
                {sent ? "Envoyé" : isSending ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          ) : (
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Aucun professeur n&apos;est encore disponible dans la liste.</p>
          )}
          {sendMessage && <p className={`mt-2 text-xs font-semibold ${sent ? "text-emerald-600" : "text-amber-600"}`}>{sendMessage}</p>}
        </section>
        <HiddenNav onBack={() => router.push("/communication")} onNext={() => router.push("/communication")} nextLabel="Terminer" />
      </main>
    );
  }

  const step = STEP_META.find((item) => item.id === current)!;
  return (
    <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
      <Header level={level} title="Production écrite" />
      <ProgressBar current={current} remaining={remaining} onSelect={setCurrent} />
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
        {checking && <p className="animate-pulse text-sm text-[var(--color-text-secondary)]">Correction linguistique en cours...</p>}
      </section>
      <HiddenNav
        onBack={() => move(-1)}
        onRefresh={resetCurrent}
        onValidate={() => void finishStep()}
        onNext={() => move(1)}
        refreshDisabled={checking}
        validateDisabled={checking}
        nextDisabled={remaining.length <= 1}
        nextLabel="Suivant"
      />
    </main>
  );
}
