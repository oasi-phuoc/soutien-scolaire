"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ceCoImageSource } from "@/lib/curriculum/word-image-resolver";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  CommunicationFinishButton,
  CommunicationIntroSection,
  CommunicationResultsExercise,
  CommunicationResultsSummary,
  EXPRESSION_TAB_HREF,
  formatEvalPoints,
  type IntroBullet,
  type IntroRow,
} from "@/components/communication/CommunicationEvalLayout";
import { EvalExerciseResultList, EvalResultsHint } from "@/components/ui/EvalResultsUI";
import { useRegisterEvalGuard, useGuardedNavigate } from "@/components/EvalNavGuard";
import type { PlacementRunnerProps } from "@/lib/placement/runner-props";
import { pickFromPool, pickIndex, PROGRESSIVE_SKILL_LEVELS } from "@/lib/placement/progressive-pick";
import { CE_MESSAGES_BASE } from "@/lib/curriculum/content/communication/ce-messages-base";
import { CE_MESSAGES_MOYEN } from "@/lib/curriculum/content/communication/ce-messages-moyen";
import { CE_ORIENTATION_BASE } from "@/lib/curriculum/content/communication/ce-orientation-base";
import { CE_ARTICLES_MOYEN } from "@/lib/curriculum/content/communication/ce-articles-moyen";
import { CE_INSTRUCTIONS_MOYEN } from "@/lib/curriculum/content/communication/ce-instructions-moyen";
import { buildCeInstructionQuestions, buildCeMessageQuestions } from "@/lib/curriculum/content/communication/ce-questions-helpers";
import { parseFillStem } from "@/lib/curriculum/content/communication/ce-co-question-filters";
import { ORIENTATION_MOYEN } from "@/lib/curriculum/content/communication/ce-orientation-moyen";

const TOTAL_SECONDS = 45 * 60;
const CE_BODY_TEXT = "text-sm leading-relaxed text-justify text-[var(--color-text-primary)]";
const CE_BODY_TEXT_PRE = "whitespace-pre-line text-sm leading-relaxed text-justify text-[var(--color-text-primary)]";

type CELevel = "base" | "moyen" | "avance";
type Choice = { label: string; image?: string };
type TableTask = { kind: "table"; prompt: string; documents: { title: string; subtitle: string; body: string; tone: string }[]; people: string[]; answers: number[] };
type ChoiceTask = { kind: "choice"; prompt: string; choices: Choice[]; correct: number; image?: boolean };
type FillTask = {
  kind: "fill";
  prompt: string;
  answer: string;
  accept?: string[];
  fillMode?: "stem" | "full";
  stem?: string;
};
type QuestionTask = ChoiceTask | FillTask;
type RawQuestionTask = Omit<ChoiceTask, "kind"> | Omit<FillTask, "kind">;
type OrientationSeriesItem = {
  context: string;
  docs: [string, string, string][];
  /** Index document 0–5, ou -1 si aucun document ne convient (leurre). */
  people: [string, number][];
};
type EmailSeriesItem = {
  from: string;
  subject: string;
  body: string;
  questions: RawQuestionTask[];
};
type InstructionSeriesItem = {
  title: string;
  image: string;
  imageLabel: string;
  body: string;
  questions: RawQuestionTask[];
}[];
type ArticleSeriesItem = {
  title: string;
  sections: { heading: string; body: string; image?: string; imageLabel?: string }[];
  questions: RawQuestionTask[];
};
type CEPart =
  | { id: "orientation"; title: string; points: 6; layout: "orientation"; task: TableTask }
  | { id: "orientation"; title: string; points: 6; layout: "email"; meta: { from?: string; subject?: string }; body: string; image: string; questions: QuestionTask[] }
  | { id: "email"; title: string; points: 6; layout: "email"; meta: { from?: string; subject?: string }; body: string; image: string; questions: QuestionTask[] }
  | { id: "instructions"; title: string; points: 6; layout: "instructions"; cards: { title: string; body: string; image: string; imageLabel: string; questions: QuestionTask[] }[] }
  | { id: "information"; title: string; points: 7; layout: "article"; article: { title: string; sections: { heading: string; body: string; image?: string; imageLabel?: string }[] }; questions: QuestionTask[] };

type CEAnswers = Record<string, number | string | null>;

const ACCENT = "var(--color-accent-comm)";
const INVERSE = "var(--color-accent-comm-inverse, #f5a623)";
const COLORS = ["#ef4444", "#0ea5e9", "#22c55e", "#f97316", "#a855f7", "#64748b"];

function levelFromId(id: string): CELevel {
  if (id === "CE-2") return "moyen";
  if (id === "CE-3") return "avance";
  return "base";
}

function levelLabel(level: CELevel) {
  if (level === "moyen") return "Moyen";
  if (level === "avance") return "Avancé";
  return "Base";
}

function ceOrientationTitle(level: CELevel) {
  return level === "moyen" ? "Lire des annonces" : "Lire pour s'orienter";
}

function ceMessageTitle(level: CELevel) {
  return level === "moyen" ? "Lire des messages" : "Lire un message";
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:'"()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function answerOk(task: QuestionTask, answer: number | string | null) {
  if (task.kind === "choice") return answer === task.correct;
  const value = normalize(String(answer ?? ""));
  if (!value) return false;
  return [task.answer, ...(task.accept ?? [])].map(normalize).some((expected) => value.includes(expected));
}

function toQuestionTask(question: RawQuestionTask): QuestionTask {
  if ("answer" in question) {
    return { kind: "fill", fillMode: "full", ...question };
  }
  return { kind: "choice", ...question };
}

function CEHeader({ level, title, placement = false }: { level: CELevel; title: string; placement?: boolean }) {
  const router = useRouter();
  const guardedNavigate = useGuardedNavigate();
  const accent = placement ? "var(--color-accent-quiz)" : ACCENT;
  const leaveHref = placement ? "/placement" : "/communication";
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        onClick={() => guardedNavigate(() => router.push(leaveHref))}
        aria-label="Quitter la leçon"
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85"
        style={{ background: accent }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
          {placement ? "Test de placement · CE" : `Français · Compréhension écrite`} · {levelLabel(level)}
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h1>
      </div>
    </div>
  );
}

function NavActionBar({
  onBack,
  onRefresh,
  onValidate,
  onNext,
  backDisabled,
  refreshDisabled,
  validateDisabled,
  nextDisabled,
  nextLabel,
  accent = ACCENT,
}: {
  onBack?: () => void;
  onRefresh?: () => void;
  onValidate?: () => void;
  onNext?: () => void;
  backDisabled?: boolean;
  refreshDisabled?: boolean;
  validateDisabled?: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
  accent?: string;
}) {
  return (
    <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
      <div className="border-t border-[var(--color-border-default)]">
        <div className="app-shell-bar flex items-center justify-between py-3">
          {onBack ? (
            <button type="button" data-nav-action="back" aria-label="Précédent" disabled={backDisabled} onClick={onBack} className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30">
              ← Précédent
            </button>
          ) : <span aria-hidden />}
          {onRefresh && <button type="button" data-nav-action="refresh" aria-label="Recommencer" disabled={refreshDisabled} onClick={onRefresh} className="hidden">Recommencer</button>}
          {onValidate ? (
            <button type="button" data-nav-action="validate" aria-label="Valider" disabled={validateDisabled} onClick={onValidate} className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90 disabled:opacity-30" style={{ background: accent }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
            </button>
          ) : <span aria-hidden />}
          {onNext ? (
            <button type="button" data-nav-action="next" data-nav-label={nextLabel} aria-label={nextLabel ?? "Suivant"} disabled={nextDisabled} onClick={onNext} className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30" style={{ background: accent }}>
              {nextLabel ?? "Suivant"} →
            </button>
          ) : <span aria-hidden />}
        </div>
      </div>
      <div style={{ height: 72 }} />
    </div>
  );
}

const INSTRUCTION_SERIES: InstructionSeriesItem[] = [
  [
    {
      title: "Règles d'hygiène",
      image: "/assets/words/lecture/hygiène.webp",
      imageLabel: "Hygiène",
      body: "Quand vous arrivez au travail, lavez-vous les mains. Portez une tenue propre. Nettoyez votre espace après chaque client.",
      questions: [
        { prompt: "Que faut-il faire en premier ?", choices: [{ label: "Laver les mains" }, { label: "Boire un café" }, { label: "Rentrer chez soi" }], correct: 0 },
        { prompt: "Quand faut-il nettoyer l'espace ?", choices: [{ label: "Avant chaque pause" }, { label: "Après chaque client" }, { label: "Le soir seulement" }], correct: 1 },
      ],
    },
    {
      title: "Remplacement",
      image: "/assets/words/lecture/comptoire.webp",
      imageLabel: "Remplacement",
      body: "Bonjour, je suis absente aujourd'hui. Remplace-moi à l'accueil. Si un client arrive en retard, propose un nouveau rendez-vous.\n— Samira",
      questions: [
        { prompt: "Où faut-il remplacer la personne ?", choices: [{ label: "À l'accueil" }, { label: "À la cuisine" }, { label: "Dans la rue" }], correct: 0 },
        { prompt: "Que faire si un client arrive en retard ?", choices: [{ label: "L'annuler" }, { label: "Proposer un autre rendez-vous" }, { label: "Fermer la porte" }], correct: 1 },
      ],
    },
    {
      title: "Préparer une infusion",
      image: "/assets/words/lecture/infusion.webp",
      imageLabel: "Infusion",
      body: "Faites chauffer l'eau. Ajoutez les plantes dans la carafe. Laissez reposer cinq minutes. Les clients peuvent demander du miel.",
      questions: [
        { prompt: "Que faut-il faire chauffer ?", choices: [{ label: "Le lait" }, { label: "L'eau" }, { label: "Le miel" }], correct: 1 },
        { prompt: "Combien de temps faut-il laisser reposer ?", choices: [{ label: "2 minutes" }, { label: "5 minutes" }, { label: "10 minutes" }], correct: 1 },
      ],
    },
  ],
  [
    {
      title: "À la gare",
      image: "/assets/words/lecture/gare.webp",
      imageLabel: "Gare",
      body: "Présentez votre billet avant de monter. Gardez vos bagages près de vous. Les vélos doivent rester dans la zone indiquée.",
      questions: [
        { prompt: "Que faut-il présenter ?", choices: [{ label: "Un billet" }, { label: "Une carte de bibliothèque" }, { label: "Une photo" }], correct: 0 },
        { prompt: "Où doivent rester les vélos ?", choices: [{ label: "Dans la zone indiquée" }, { label: "Au restaurant" }, { label: "Sur les sièges" }], correct: 0 },
      ],
    },
    {
      title: "Consigne de sécurité",
      image: "/assets/expression/images/scene/demander-aide-urgence.webp",
      imageLabel: "Sécurité",
      body: "En cas d'alarme, sortez calmement par la porte la plus proche. N'utilisez pas l'ascenseur. Attendez devant le bâtiment.",
      questions: [
        { prompt: "Que ne faut-il pas utiliser ?", choices: [{ label: "La porte" }, { label: "L'ascenseur" }, { label: "L'escalier" }], correct: 1 },
        { prompt: "Où faut-il attendre ?", choices: [{ label: "Devant le bâtiment" }, { label: "Dans la classe" }, { label: "À la cave" }], correct: 0 },
      ],
    },
    {
      title: "Atelier cuisine",
      image: "/assets/words/lecture/aliments.webp",
      imageLabel: "Cuisine",
      body: "Lisez toute la recette avant de commencer. Préparez les ingrédients sur la table. Rangez le matériel après l'activité.",
      questions: [
        { prompt: "Que faut-il lire avant de commencer ?", choices: [{ label: "La recette" }, { label: "Un journal" }, { label: "Un horaire" }], correct: 0 },
        { prompt: "Quand faut-il ranger le matériel ?", choices: [{ label: "Avant l'activité" }, { label: "Après l'activité" }, { label: "Jamais" }], correct: 1 },
      ],
    },
  ],
];

const ARTICLE_SERIES: ArticleSeriesItem[] = [
  {
    title: "Améliorez votre mémoire !",
    sections: [
      { heading: "L'alimentation", body: "Mangez des légumes frais, des noix et du poisson. Buvez de l'eau régulièrement.", image: "/assets/words/lecture/alimentation.webp", imageLabel: "Alimentation" },
      { heading: "Le sport", body: "La marche, le vélo et la danse stimulent le cerveau et aident à rester concentré.", image: "/assets/words/lecture/vélo.webp", imageLabel: "Sport" },
      { heading: "L'activité mentale", body: "Jouez à des jeux de société, lisez un texte ou racontez une histoire à un ami.", image: "/assets/words/lecture/activité.webp", imageLabel: "Activité mentale" },
    ],
    questions: [
      { prompt: "Que conseille-t-on de manger ?", choices: [{ label: "Des légumes frais" }, { label: "Beaucoup de viande" }, { label: "Seulement du sucre" }], correct: 0 },
      { prompt: "Quel sport est conseillé ?", choices: [{ label: "La marche", image: "/assets/words/lecture/chaussures.webp" }, { label: "La boxe", image: "/assets/words/lecture/gants.webp" }, { label: "Le ski nautique", image: "/assets/expression/images/scene/faire-ski.webp" }], correct: 0, image: true },
      { prompt: "Quelle boisson est conseillée ?", answer: "eau", accept: ["de l'eau", "l eau"] },
      { prompt: "Quelle activité mentale peut-on faire ?", choices: [{ label: "Jouer à des jeux de société" }, { label: "Dormir toute la journée" }, { label: "Ne rien lire" }], correct: 0 },
      { prompt: "Pourquoi faut-il faire du sport ?", choices: [{ label: "Pour stimuler le cerveau" }, { label: "Pour oublier les règles" }, { label: "Pour éviter les amis" }], correct: 0 },
      { prompt: "À qui peut-on raconter une histoire ?", answer: "ami", accept: ["un ami", "à un ami"] },
      { prompt: "Quel est le sujet principal de l'article ?", choices: [{ label: "La mémoire" }, { label: "Le voyage" }, { label: "La météo" }], correct: 0 },
    ],
  },
  {
    title: "Bien vivre en hiver",
    sections: [
      { heading: "Se protéger du froid", body: "Portez un manteau chaud, des gants et de bonnes chaussures quand il neige.", image: "/assets/words/lecture/veste-hiver.webp", imageLabel: "Froid" },
      { heading: "Rester en forme", body: "Même en hiver, sortez marcher un peu et aérez votre logement chaque jour.", image: "/assets/words/lecture/hiver.webp", imageLabel: "Hiver" },
      { heading: "Éviter les maladies", body: "Lavez-vous souvent les mains et reposez-vous si vous êtes fatigué.", image: "/assets/words/lecture/lavabo.webp", imageLabel: "Lavage des mains" },
    ],
    questions: [
      { prompt: "Que faut-il porter quand il fait froid ?", choices: [{ label: "Un manteau chaud" }, { label: "Un maillot de bain" }, { label: "Des sandales" }], correct: 0 },
      { prompt: "Quelle image correspond à l'hiver ?", choices: [{ label: "Neige", image: "/assets/expression/images/scene/neige.webp" }, { label: "Soleil d'été", image: "/assets/words/lecture/soleil.webp" }, { label: "Plage", image: "/assets/words/lecture/plage.webp" }], correct: 0, image: true },
      { prompt: "Que faut-il aérer chaque jour ?", answer: "logement", accept: ["le logement", "maison", "appartement"] },
      { prompt: "Que faut-il laver souvent ?", choices: [{ label: "Les mains" }, { label: "Les chaussures" }, { label: "Les fenêtres" }], correct: 0 },
      { prompt: "Que faire si on est fatigué ?", choices: [{ label: "Se reposer" }, { label: "Courir toute la nuit" }, { label: "Ne pas dormir" }], correct: 0 },
      { prompt: "Quel vêtement protège les mains ?", answer: "gants", accept: ["des gants"] },
      { prompt: "Quel est le sujet de l'article ?", choices: [{ label: "Bien vivre en hiver" }, { label: "Acheter une voiture" }, { label: "Choisir un film" }], correct: 0 },
    ],
  },
];


function orientationRowCorrect(expected: number, selected: number | string | null | undefined): boolean {
  if (expected === -1) return selected === null || selected === undefined;
  return selected === expected;
}

const ORIENTATION_AVANCE: OrientationSeriesItem[] = ORIENTATION_MOYEN.map((item, index) => ({
  context: `${item.context} Lisez attentivement les nuances : plusieurs documents peuvent sembler proches.`,
  docs: item.docs.map(([title, subtitle, body], docIndex) => [
    title,
    subtitle,
    `${body} Les conditions, horaires ou publics concernés peuvent varier selon la situation ${index + 1}.${docIndex + 1}.`,
  ]),
  people: item.people.map(([person, answer], personIndex) => [
    `${person} Il faut tenir compte de la contrainte précise indiquée dans le document.`,
    (answer + (personIndex % 2 === 0 ? 0 : 0)) as number,
  ]),
}));

// --------------------------------------------------------------------------
// Contenu B1 authoré pour le niveau AVANCÉ (CE-3) : textes plus longs et plus
// abstraits (administratif, opinions, hypothèses), avec connecteurs de niveau
// B1 (cependant, afin de, bien que, c'est pourquoi, par ailleurs, grâce à) et
// questions demandant plus d'inférence (intention, ton, sens implicite).
// --------------------------------------------------------------------------
const CE_AVANCE_EMAILS: EmailSeriesItem[] = [
  {
    from: "gerance@immeuble.ch",
    subject: "Travaux de rénovation dans l'immeuble",
    body:
      "Madame, Monsieur,\nNous vous informons que d'importants travaux de rénovation commenceront le lundi 6 mai et dureront environ trois semaines. Pendant cette période, l'ascenseur sera hors service une partie de la journée, généralement entre 9 h et 16 h. Nous vous conseillons donc d'organiser vos sorties en tenant compte de cette contrainte, surtout si vous avez des difficultés à monter les escaliers. Par ailleurs, l'eau chaude pourra être coupée ponctuellement ; ces coupures seront annoncées la veille par une affiche dans le hall. Nous sommes conscients que ces désagréments peuvent être gênants, mais ils sont nécessaires pour améliorer le confort de tous. Si vous avez une situation particulière, n'hésitez pas à nous contacter avant le début du chantier.\nNous vous remercions de votre compréhension.\nLa gérance",
    questions: [
      { prompt: "Quel est le but principal de ce message ?", choices: [{ label: "Annoncer des travaux dans l'immeuble" }, { label: "Proposer un nouvel appartement" }, { label: "Augmenter le loyer" }], correct: 0 },
      { prompt: "Que faut-il prévoir concernant l'ascenseur ?", choices: [{ label: "Qu'il sera indisponible une partie de la journée" }, { label: "Qu'il sera plus rapide" }, { label: "Qu'il deviendra gratuit" }], correct: 0 },
      { prompt: "Comment les coupures d'eau chaude seront-elles annoncées ?", choices: [{ label: "Par une affiche, la veille" }, { label: "Par téléphone, le matin" }, { label: "Elles ne seront pas annoncées" }], correct: 0 },
      { prompt: "Quel est le ton de la gérance au sujet des désagréments ?", choices: [{ label: "Elle reconnaît la gêne mais explique que c'est nécessaire" }, { label: "Elle refuse d'en parler" }, { label: "Elle s'en moque" }], correct: 0 },
      { prompt: "Que doivent faire les personnes ayant une situation particulière ?", answer: "contacter la gérance", accept: ["contacter la gérance avant le chantier", "prévenir la gérance", "les contacter avant les travaux"] },
      { prompt: "Pourquoi ces travaux sont-ils faits, malgré la gêne ?", answer: "pour améliorer le confort", accept: ["améliorer le confort de tous", "pour le confort", "améliorer l'immeuble"] },
    ],
  },
  {
    from: "rh@entreprise.ch",
    subject: "Réponse à votre demande de télétravail",
    body:
      "Bonjour Mme Yuliia,\nÀ la suite de votre demande, nous avons étudié la possibilité pour vous de travailler depuis chez vous. Nous pouvons vous proposer deux jours de télétravail par semaine, à condition que vous restiez joignable pendant les horaires habituels et que vous participiez aux réunions importantes en présentiel. Il faudrait choisir des jours fixes, afin que l'équipe sache quand vous êtes au bureau. L'entreprise fournira un ordinateur portable, mais la connexion Internet restera à votre charge. Cette organisation sera testée pendant trois mois ; ensuite, nous ferons le point ensemble pour décider si nous la maintenons. Si ces conditions vous conviennent, merci de me renvoyer le formulaire signé avant la fin du mois.\nCordialement,\nLe service des ressources humaines",
    questions: [
      { prompt: "Que propose l'entreprise ?", choices: [{ label: "Deux jours de télétravail par semaine" }, { label: "Une augmentation de salaire" }, { label: "Un changement de poste" }], correct: 0 },
      { prompt: "Quelle est une des conditions posées ?", choices: [{ label: "Rester joignable aux horaires habituels" }, { label: "Travailler la nuit" }, { label: "Venir tous les jours au bureau" }], correct: 0 },
      { prompt: "Qui doit payer la connexion Internet ?", choices: [{ label: "L'employé" }, { label: "L'entreprise" }, { label: "Le client" }], correct: 0 },
      { prompt: "Que se passera-t-il après trois mois ?", choices: [{ label: "On fera le point pour décider de continuer ou non" }, { label: "Le contrat s'arrêtera automatiquement" }, { label: "Rien ne sera décidé" }], correct: 0 },
      { prompt: "Pourquoi faut-il choisir des jours fixes ?", answer: "pour que l'équipe sache quand on est au bureau", accept: ["pour l'organisation de l'équipe", "pour que les collègues sachent quand on est là", "pour organiser l'équipe"] },
      { prompt: "Que fournit l'entreprise ?", answer: "un ordinateur portable", accept: ["un ordinateur", "un pc portable", "ordinateur portable"] },
    ],
  },
  {
    from: "association@benevoles.ch",
    subject: "Appel à bénévoles pour la collecte",
    body:
      "Bonjour,\nNotre association organise chaque année une collecte de nourriture pour les familles en difficulté, et nous cherchons des bénévoles pour le week-end des 12 et 13 novembre. Il ne s'agit pas d'un travail difficile : il faut surtout accueillir les gens, trier les produits et les ranger dans des cartons. Même si vous ne pouvez venir que quelques heures, votre aide sera précieuse. Aucune expérience n'est nécessaire, car nous vous expliquerons tout sur place. Nous offrons le repas de midi aux bénévoles et, à la fin, un moment convivial pour vous remercier. Si l'idée vous intéresse, indiquez-nous vos disponibilités afin que nous puissions organiser les équipes.\nMerci d'avance pour votre générosité,\nL'équipe de l'association",
    questions: [
      { prompt: "Que cherche l'association ?", choices: [{ label: "Des bénévoles pour une collecte" }, { label: "Des employés payés" }, { label: "Des dons d'argent uniquement" }], correct: 0 },
      { prompt: "En quoi consiste surtout l'aide demandée ?", choices: [{ label: "Accueillir, trier et ranger" }, { label: "Cuisiner pour cent personnes" }, { label: "Conduire un camion" }], correct: 0 },
      { prompt: "Faut-il de l'expérience ?", choices: [{ label: "Non, tout sera expliqué sur place" }, { label: "Oui, c'est obligatoire" }, { label: "Seulement pour les responsables" }], correct: 0 },
      { prompt: "Que reçoivent les bénévoles ?", choices: [{ label: "Le repas de midi" }, { label: "Un salaire" }, { label: "Un cadeau coûteux" }], correct: 0 },
      { prompt: "Que faut-il indiquer si l'on est intéressé ?", answer: "ses disponibilités", accept: ["nos disponibilités", "quand on est libre", "ses horaires"] },
      { prompt: "Peut-on aider seulement quelques heures ?", answer: "oui", accept: ["oui", "oui, c'est possible", "oui, quelques heures suffisent"] },
    ],
  },
  {
    from: "banque@service.ch",
    subject: "Lancement de notre application mobile",
    body:
      "Chère cliente, cher client,\nNous avons le plaisir de vous annoncer que notre nouvelle application mobile est disponible depuis cette semaine. Grâce à elle, vous pourrez consulter vos comptes, effectuer des virements et bloquer votre carte en cas de perte, sans vous déplacer à l'agence. Pour des raisons de sécurité, la première connexion nécessite un code que vous recevrez par courrier dans les prochains jours. Nous vous rappelons que nos conseillers ne vous demanderont jamais votre mot de passe par téléphone ou par courriel : soyez donc prudents face aux messages suspects. Si vous préférez continuer à gérer vos comptes au guichet, rien ne change pour vous. Notre service d'assistance reste par ailleurs disponible du lundi au vendredi.\nAvec nos meilleures salutations,\nVotre banque",
    questions: [
      { prompt: "Qu'annonce la banque ?", choices: [{ label: "Une nouvelle application mobile" }, { label: "La fermeture de toutes les agences" }, { label: "Une hausse des frais" }], correct: 0 },
      { prompt: "Que peut-on faire avec l'application ?", choices: [{ label: "Effectuer des virements" }, { label: "Retirer des billets à l'intérieur du téléphone" }, { label: "Ouvrir un commerce" }], correct: 0 },
      { prompt: "Comment reçoit-on le code de première connexion ?", choices: [{ label: "Par courrier" }, { label: "Par SMS immédiat" }, { label: "En agence uniquement" }], correct: 0 },
      { prompt: "Que ne demanderont jamais les conseillers ?", choices: [{ label: "Le mot de passe par téléphone ou courriel" }, { label: "Le nom du client" }, { label: "L'adresse postale" }], correct: 0 },
      { prompt: "Que se passe-t-il pour ceux qui préfèrent le guichet ?", answer: "rien ne change", accept: ["rien ne change pour eux", "ils continuent comme avant", "rien"] },
      { prompt: "Pourquoi faut-il se méfier des messages suspects ?", answer: "pour ne pas donner son mot de passe", accept: ["pour la sécurité", "pour éviter les fraudes", "pour ne pas se faire voler ses informations"] },
    ],
  },
  {
    from: "voyages@agence.ch",
    subject: "Confirmation et conseils pour votre séjour",
    body:
      "Bonjour,\nNous vous confirmons votre séjour d'une semaine à Lisbonne, du 3 au 10 avril. Votre vol partant à 6 h 40, nous vous conseillons d'arriver à l'aéroport au moins deux heures avant. Pensez à vérifier que votre carte d'identité est encore valable, car sans document valide, l'embarquement vous serait refusé. Sur place, le climat est doux, mais les soirées peuvent être fraîches : prévoyez une veste légère. Nous vous recommandons aussi d'acheter à l'avance les billets de train pour la région, car ils sont souvent moins chers sur Internet. Un guide vous attendra à l'hôtel le premier matin afin de vous présenter le programme. En cas de problème, un numéro d'urgence figure sur votre carnet de route.\nBon voyage,\nVotre agence",
    questions: [
      { prompt: "De quoi parle ce message ?", choices: [{ label: "D'un séjour d'une semaine à Lisbonne" }, { label: "D'un déménagement" }, { label: "D'un achat de voiture" }], correct: 0 },
      { prompt: "Pourquoi faut-il arriver tôt à l'aéroport ?", choices: [{ label: "Parce que le vol part très tôt et qu'il faut être là deux heures avant" }, { label: "Parce que l'avion est petit" }, { label: "Parce que c'est gratuit le matin" }], correct: 0 },
      { prompt: "Que risque-t-on sans document d'identité valable ?", choices: [{ label: "Un refus d'embarquement" }, { label: "Une simple amende" }, { label: "Rien du tout" }], correct: 0 },
      { prompt: "Pourquoi acheter les billets de train à l'avance ?", choices: [{ label: "Ils sont souvent moins chers sur Internet" }, { label: "Ils sont interdits sur place" }, { label: "Ils sont offerts par l'hôtel" }], correct: 0 },
      { prompt: "Que faut-il prévoir pour les soirées ?", answer: "une veste légère", accept: ["une veste", "un vêtement chaud", "une petite veste"] },
      { prompt: "Où trouve-t-on le numéro d'urgence ?", answer: "sur le carnet de route", accept: ["dans le carnet de route", "carnet de route"] },
    ],
  },
  {
    from: "direction@ecole.ch",
    subject: "Réunion d'information : projet de classe verte",
    body:
      "Chers parents,\nNous vous invitons à une réunion d'information le mardi 18 à 19 h, afin de présenter le projet de classe verte prévu au printemps. Ce séjour de cinq jours à la montagne permettra aux élèves de découvrir la nature, mais aussi d'apprendre à vivre en groupe loin de leur famille. Le coût est de 250 francs par enfant ; toutefois, une aide est possible pour les familles qui en font la demande, de manière confidentielle. Nous comprenons que certains parents puissent hésiter à laisser partir leur enfant ; c'est pourquoi les enseignants répondront à toutes vos questions pendant la réunion. Votre présence est vivement souhaitée, car votre accord sera nécessaire pour organiser le voyage. Si vous ne pouvez pas venir, un document résumant le projet vous sera transmis.\nBien cordialement,\nLa direction",
    questions: [
      { prompt: "Quel est l'objet de la réunion ?", choices: [{ label: "Présenter un projet de classe verte" }, { label: "Changer les horaires de l'école" }, { label: "Annoncer une fête surprise" }], correct: 0 },
      { prompt: "Quel est un des objectifs du séjour ?", choices: [{ label: "Apprendre à vivre en groupe" }, { label: "Gagner de l'argent" }, { label: "Rester à la maison" }], correct: 0 },
      { prompt: "Que propose-t-on aux familles en difficulté ?", choices: [{ label: "Une aide financière confidentielle" }, { label: "Un séjour gratuit pour tous" }, { label: "Aucune solution" }], correct: 0 },
      { prompt: "Pourquoi la présence des parents est-elle importante ?", choices: [{ label: "Leur accord est nécessaire pour organiser le voyage" }, { label: "Pour payer sur place" }, { label: "Pour préparer les repas" }], correct: 0 },
      { prompt: "Combien coûte le séjour par enfant ?", answer: "250 francs", accept: ["250", "250 fr", "deux cent cinquante francs"] },
      { prompt: "Que reçoivent les parents qui ne peuvent pas venir ?", answer: "un document résumant le projet", accept: ["un résumé du projet", "un document", "un document sur le projet"] },
    ],
  },
];

const CE_AVANCE_INSTRUCTIONS: InstructionSeriesItem[] = [
  [
    {
      title: "Faire une réclamation",
      image: "",
      imageLabel: "Réclamation",
      body: "Si un produit que vous avez acheté est défectueux, commencez par rassembler la facture et l'emballage. Expliquez le problème par écrit, calmement et précisément, puis envoyez votre demande au service client. Gardez une copie de votre courrier : en cas de refus, elle vous sera utile pour aller plus loin. Ahmad, conseiller clientèle.",
      questions: [
        { prompt: "Que faut-il rassembler en premier ?", choices: [{ label: "La facture et l'emballage" }, { label: "Des photos de vacances" }, { label: "De l'argent liquide" }], correct: 0 },
        { prompt: "Pourquoi garder une copie du courrier ?", choices: [{ label: "Elle sera utile en cas de refus" }, { label: "Pour la jeter plus tard" }, { label: "Pour la revendre" }], correct: 0 },
      ],
    },
    {
      title: "Préparer un entretien téléphonique",
      image: "",
      imageLabel: "Téléphone",
      body: "Choisissez un endroit calme où vous ne serez pas dérangé et vérifiez que votre téléphone est bien chargé. Ayez sous les yeux les documents importants ainsi que quelques questions à poser. Pendant l'appel, parlez lentement et n'hésitez pas à faire répéter si vous n'avez pas compris.",
      questions: [
        { prompt: "Où faut-il s'installer pour l'appel ?", choices: [{ label: "Dans un endroit calme" }, { label: "Dans la rue" }, { label: "Dans un magasin bruyant" }], correct: 0 },
        { prompt: "Que faire si l'on n'a pas compris ?", choices: [{ label: "Faire répéter" }, { label: "Raccrocher aussitôt" }, { label: "Se taire" }], correct: 0 },
      ],
    },
    {
      title: "Voyager pendant une grève",
      image: "",
      imageLabel: "Grève",
      body: "Avant de partir, consultez le site de la compagnie pour connaître les trains qui circulent, car l'horaire habituel n'est pas garanti. Prévoyez plus de temps que d'ordinaire et, si possible, une solution de secours comme le covoiturage. En cas d'annulation, vous pouvez parfois demander le remboursement de votre billet.",
      questions: [
        { prompt: "Pourquoi consulter le site avant de partir ?", choices: [{ label: "Parce que l'horaire habituel n'est pas garanti" }, { label: "Pour acheter des souvenirs" }, { label: "Pour réserver un hôtel" }], correct: 0 },
        { prompt: "Que peut-on parfois demander en cas d'annulation ?", choices: [{ label: "Le remboursement du billet" }, { label: "Un cadeau" }, { label: "Une place gratuite à vie" }], correct: 0 },
      ],
    },
  ],
  [
    {
      title: "Comprendre un contrat de location",
      image: "",
      imageLabel: "Contrat",
      body: "Avant de signer, lisez attentivement le montant du loyer et ce qu'il comprend, comme les charges ou le chauffage. Vérifiez la durée du bail et les conditions pour partir, car un départ trop rapide peut coûter cher. Si une clause n'est pas claire, demandez des explications plutôt que de signer sans comprendre.",
      questions: [
        { prompt: "Que faut-il vérifier au sujet du loyer ?", choices: [{ label: "Ce qu'il comprend (charges, chauffage)" }, { label: "La couleur des murs" }, { label: "Le nom du voisin" }], correct: 0 },
        { prompt: "Que faire si une clause n'est pas claire ?", choices: [{ label: "Demander des explications" }, { label: "Signer quand même" }, { label: "Partir sans rien dire" }], correct: 0 },
      ],
    },
    {
      title: "Réagir en cas de panne d'électricité",
      image: "",
      imageLabel: "Panne",
      body: "Vérifiez d'abord si la panne touche seulement votre logement ou tout le quartier, par exemple en regardant chez les voisins. S'il s'agit de votre installation, contrôlez le tableau électrique et rebranchez ce qui a sauté. Gardez une lampe de poche accessible et évitez d'ouvrir le congélateur afin de conserver le froid.",
      questions: [
        { prompt: "Comment savoir si la panne touche tout le quartier ?", choices: [{ label: "En regardant chez les voisins" }, { label: "En appelant la police" }, { label: "En attendant une semaine" }], correct: 0 },
        { prompt: "Pourquoi éviter d'ouvrir le congélateur ?", choices: [{ label: "Pour conserver le froid" }, { label: "Parce que c'est dangereux" }, { label: "Pour économiser l'eau" }], correct: 0 },
      ],
    },
    {
      title: "Acheter d'occasion en ligne",
      image: "",
      imageLabel: "Occasion",
      body: "Regardez attentivement les photos et lisez bien la description avant de vous décider. Posez des questions au vendeur si un détail manque, et méfiez-vous des prix beaucoup trop bas, qui cachent parfois une arnaque. Privilégiez un paiement sécurisé plutôt que d'envoyer de l'argent à un inconnu.",
      questions: [
        { prompt: "De quoi faut-il se méfier ?", choices: [{ label: "Des prix beaucoup trop bas" }, { label: "Des belles photos" }, { label: "Des vendeurs polis" }], correct: 0 },
        { prompt: "Quel mode de paiement privilégier ?", choices: [{ label: "Un paiement sécurisé" }, { label: "De l'argent liquide par la poste" }, { label: "Payer sans vérifier" }], correct: 0 },
      ],
    },
  ],
  [
    {
      title: "Organiser une réunion efficace",
      image: "",
      imageLabel: "Réunion",
      body: "Envoyez à l'avance l'ordre du jour, afin que chacun sache de quoi on va parler et puisse se préparer. Pendant la réunion, respectez le temps prévu et notez les décisions ainsi que la personne responsable de chaque tâche. À la fin, envoyez un court compte rendu pour que tout le monde ait la même information.",
      questions: [
        { prompt: "Que faut-il envoyer à l'avance ?", choices: [{ label: "L'ordre du jour" }, { label: "Un cadeau" }, { label: "La liste des salaires" }], correct: 0 },
        { prompt: "Que faire à la fin de la réunion ?", choices: [{ label: "Envoyer un court compte rendu" }, { label: "Tout oublier" }, { label: "Recommencer depuis le début" }], correct: 0 },
      ],
    },
    {
      title: "Préparer un exposé oral",
      image: "",
      imageLabel: "Exposé",
      body: "Choisissez un plan clair en trois parties et notez seulement des mots-clés sur vos fiches, pas des phrases entières. Entraînez-vous à voix haute afin de vérifier le temps et de repérer les passages difficiles. Le jour de l'exposé, regardez le public et parlez assez fort pour être entendu du fond de la salle.",
      questions: [
        { prompt: "Que faut-il noter sur les fiches ?", choices: [{ label: "Des mots-clés" }, { label: "Des phrases entières" }, { label: "Rien du tout" }], correct: 0 },
        { prompt: "Pourquoi s'entraîner à voix haute ?", choices: [{ label: "Pour vérifier le temps et repérer les passages difficiles" }, { label: "Pour déranger les voisins" }, { label: "Pour perdre du temps" }], correct: 0 },
      ],
    },
    {
      title: "Aider un nouveau collègue",
      image: "",
      imageLabel: "Collègue",
      body: "Le premier jour, présentez-lui l'équipe et montrez-lui les lieux importants, comme la cafétéria et les sorties de secours. Expliquez calmement les habitudes de travail et proposez-lui de poser des questions dès qu'il en a besoin. Un accueil chaleureux aide la personne à se sentir à l'aise et à devenir vite efficace.",
      questions: [
        { prompt: "Que faut-il montrer au nouveau collègue ?", choices: [{ label: "Les lieux importants comme la cafétéria" }, { label: "Sa propre maison" }, { label: "Son salaire" }], correct: 0 },
        { prompt: "Pourquoi un bon accueil est-il utile ?", choices: [{ label: "Il aide la personne à se sentir à l'aise" }, { label: "Il fait perdre du temps" }, { label: "Il n'a aucun effet" }], correct: 0 },
      ],
    },
  ],
];

const CE_AVANCE_ARTICLES: ArticleSeriesItem[] = [
  {
    title: "Le télétravail : avantages et limites",
    sections: [
      { heading: "Plus de liberté", imageLabel: "Liberté", body: "Travailler chez soi permet d'éviter les trajets et d'organiser sa journée plus librement. Beaucoup de personnes se sentent moins stressées et gagnent du temps pour leur vie privée. Cette souplesse est particulièrement appréciée par ceux qui habitent loin de leur bureau." },
      { heading: "Des difficultés réelles", imageLabel: "Difficultés", body: "Cependant, il n'est pas toujours facile de se concentrer à la maison, surtout quand on manque d'espace. Certains se sentent isolés et ont l'impression de ne jamais vraiment s'arrêter de travailler. La frontière entre vie privée et vie professionnelle devient alors floue." },
      { heading: "Trouver un équilibre", imageLabel: "Équilibre", body: "Pour que le télétravail fonctionne, il vaut mieux fixer des horaires clairs et garder un contact régulier avec les collègues. Alterner quelques jours au bureau et quelques jours à la maison semble être une bonne solution pour de nombreuses entreprises." },
    ],
    questions: [
      { prompt: "Quel est le sujet de l'article ?", choices: [{ label: "Les avantages et les limites du télétravail" }, { label: "Comment trouver un premier emploi" }, { label: "Les voyages d'affaires" }], correct: 0 },
      { prompt: "Quel avantage est cité ?", choices: [{ label: "Éviter les trajets" }, { label: "Gagner beaucoup plus d'argent" }, { label: "Avoir un plus grand bureau" }], correct: 0 },
      { prompt: "Quelle difficulté l'article mentionne-t-il ?", choices: [{ label: "Se sentir isolé" }, { label: "Avoir trop de vacances" }, { label: "Un salaire trop élevé" }], correct: 0 },
      { prompt: "Qu'est-ce qui devient parfois flou ?", choices: [{ label: "La frontière entre vie privée et vie professionnelle" }, { label: "La couleur des murs" }, { label: "La liste des tâches" }], correct: 0 },
      { prompt: "L'article est-il totalement favorable au télétravail ?", choices: [{ label: "Non, il présente le pour et le contre" }, { label: "Oui, il n'y voit que des avantages" }, { label: "Non, il est totalement contre" }], correct: 0 },
      { prompt: "Quelle solution l'article propose-t-il ?", answer: "alterner bureau et maison", accept: ["alterner quelques jours au bureau et à la maison", "un équilibre entre bureau et maison", "alterner"] },
      { prompt: "Combien de parties principales contient l'article ?", answer: "3", accept: ["trois"] },
    ],
  },
  {
    title: "Consommer moins mais mieux",
    sections: [
      { heading: "Acheter utile", imageLabel: "Achat", body: "Avant d'acheter, il est utile de se demander si l'on a vraiment besoin de l'objet ou s'il s'agit d'une envie passagère. Choisir un produit solide, même un peu plus cher, revient souvent moins cher à long terme, car on le remplace moins souvent." },
      { heading: "Donner une seconde vie", imageLabel: "Réemploi", body: "Réparer, prêter ou acheter d'occasion permet d'économiser de l'argent et de limiter les déchets. De nombreux objets qui semblent inutiles peuvent servir à quelqu'un d'autre. Les magasins de seconde main et les sites d'échange se développent d'ailleurs beaucoup." },
      { heading: "Changer ses habitudes", imageLabel: "Habitudes", body: "Consommer autrement ne signifie pas se priver de tout, mais faire des choix plus réfléchis. De petits gestes répétés, comme préparer une liste ou refuser les emballages inutiles, ont un vrai effet avec le temps." },
    ],
    questions: [
      { prompt: "Quel est le message principal ?", choices: [{ label: "Consommer moins mais mieux" }, { label: "Acheter le plus possible" }, { label: "Ne plus jamais rien acheter" }], correct: 0 },
      { prompt: "Que conseille-t-on de se demander avant d'acheter ?", choices: [{ label: "Si l'on en a vraiment besoin" }, { label: "Si le voisin en a un" }, { label: "S'il en reste beaucoup" }], correct: 0 },
      { prompt: "Pourquoi choisir un produit solide ?", choices: [{ label: "Il revient moins cher à long terme" }, { label: "Il est toujours moins cher au départ" }, { label: "Il est plus léger" }], correct: 0 },
      { prompt: "Que peut-on faire des objets qui nous semblent inutiles ?", choices: [{ label: "Les donner à quelqu'un d'autre" }, { label: "Les brûler" }, { label: "Les cacher" }], correct: 0 },
      { prompt: "« Consommer autrement » signifie-t-il tout se refuser ?", choices: [{ label: "Non, faire des choix plus réfléchis" }, { label: "Oui, ne plus rien acheter" }, { label: "Oui, tout jeter" }], correct: 0 },
      { prompt: "Cite un petit geste proposé par l'article.", answer: "préparer une liste", accept: ["refuser les emballages inutiles", "faire une liste", "préparer une liste de courses"] },
      { prompt: "Combien de parties contient l'article ?", answer: "3", accept: ["trois"] },
    ],
  },
  {
    title: "Les réseaux sociaux : entre lien et pression",
    sections: [
      { heading: "Rester en contact", imageLabel: "Contact", body: "Les réseaux sociaux permettent de garder le contact avec des proches éloignés et de retrouver d'anciens amis. Ils aident aussi à s'informer rapidement et à découvrir des idées ou des passions que l'on ne connaissait pas." },
      { heading: "Une image parfois trompeuse", imageLabel: "Image", body: "Pourtant, les gens montrent souvent le meilleur de leur vie, ce qui peut donner l'impression que les autres réussissent mieux que soi. Cette comparaison permanente crée parfois de la jalousie ou un sentiment de mal-être." },
      { heading: "Garder le contrôle", imageLabel: "Contrôle", body: "Il est conseillé de limiter le temps passé sur les applications et de se rappeler que tout n'est pas réel derrière l'écran. Prendre du recul et privilégier les vraies rencontres aide à garder une relation saine avec ces outils." },
    ],
    questions: [
      { prompt: "Quel est le sujet de l'article ?", choices: [{ label: "Les réseaux sociaux, entre lien et pression" }, { label: "L'histoire d'Internet" }, { label: "La publicité à la télévision" }], correct: 0 },
      { prompt: "Quel avantage est cité ?", choices: [{ label: "Garder le contact avec des proches éloignés" }, { label: "Gagner de l'argent facilement" }, { label: "Mieux dormir" }], correct: 0 },
      { prompt: "Pourquoi l'image des réseaux est-elle trompeuse ?", choices: [{ label: "Les gens montrent souvent le meilleur de leur vie" }, { label: "Les photos y sont interdites" }, { label: "Tout ce qu'on y voit est vrai" }], correct: 0 },
      { prompt: "Quel sentiment cette comparaison peut-elle créer ?", choices: [{ label: "De la jalousie ou du mal-être" }, { label: "De la joie garantie" }, { label: "De la fatigue physique" }], correct: 0 },
      { prompt: "Faut-il croire que tout est réel derrière l'écran ?", choices: [{ label: "Non" }, { label: "Oui, toujours" }, { label: "Seulement le week-end" }], correct: 0 },
      { prompt: "Que conseille l'article pour garder le contrôle ?", answer: "limiter le temps passé", accept: ["limiter le temps sur les applications", "prendre du recul", "privilégier les vraies rencontres"] },
      { prompt: "Combien de parties contient l'article ?", answer: "3", accept: ["trois"] },
    ],
  },
  {
    title: "Apprendre une langue à l'âge adulte",
    sections: [
      { heading: "Il n'est jamais trop tard", imageLabel: "Apprentissage", body: "Contrairement à une idée répandue, les adultes peuvent très bien apprendre une nouvelle langue. Ils ont même certains avantages : ils comprennent les règles plus vite et savent pourquoi ils apprennent, ce qui les motive." },
      { heading: "Pratiquer régulièrement", imageLabel: "Pratique", body: "Le secret n'est pas de travailler des heures d'un coup, mais un peu chaque jour. Écouter des chansons, regarder des vidéos ou parler avec quelqu'un rend l'apprentissage plus vivant et moins ennuyeux." },
      { heading: "Ne pas avoir peur des erreurs", imageLabel: "Erreurs", body: "Faire des fautes fait partie de l'apprentissage ; c'est même en se trompant que l'on progresse. Ceux qui osent parler, même mal, avancent souvent plus vite que ceux qui attendent d'être parfaits." },
    ],
    questions: [
      { prompt: "Quel est le sujet de l'article ?", choices: [{ label: "Apprendre une langue à l'âge adulte" }, { label: "Voyager à l'étranger" }, { label: "Enseigner aux enfants" }], correct: 0 },
      { prompt: "Quel avantage ont les adultes ?", choices: [{ label: "Ils comprennent les règles plus vite" }, { label: "Ils ont toujours plus de temps libre" }, { label: "Ils n'oublient jamais rien" }], correct: 0 },
      { prompt: "Quel est « le secret »?", choices: [{ label: "Pratiquer un peu chaque jour" }, { label: "Travailler dix heures le dimanche" }, { label: "Ne jamais réviser" }], correct: 0 },
      { prompt: "Comment rendre l'apprentissage plus vivant ?", choices: [{ label: "Écouter des chansons, regarder des vidéos" }, { label: "Lire le dictionnaire en entier" }, { label: "Ne rien faire" }], correct: 0 },
      { prompt: "Que pense l'article des erreurs ?", choices: [{ label: "Elles font partie de l'apprentissage" }, { label: "Il faut absolument les éviter" }, { label: "Elles sont totalement inutiles" }], correct: 0 },
      { prompt: "Qui progresse souvent plus vite ?", answer: "ceux qui osent parler", accept: ["ceux qui osent parler même mal", "ceux qui parlent", "ceux qui n'ont pas peur des erreurs"] },
      { prompt: "Combien de parties contient l'article ?", answer: "3", accept: ["trois"] },
    ],
  },
  {
    title: "Le bénévolat, utile pour tous",
    sections: [
      { heading: "Aider les autres", imageLabel: "Aide", body: "Donner un peu de son temps permet de soutenir des personnes en difficulté ou des associations qui manquent de moyens. Même quelques heures par mois peuvent faire une vraie différence pour ceux qui reçoivent cette aide." },
      { heading: "En profiter soi-même", imageLabel: "Bénéfice", body: "Le bénévolat n'apporte pas qu'aux autres : il permet de rencontrer des gens, d'apprendre de nouvelles compétences et de se sentir utile. Pour certaines personnes seules, c'est aussi une façon de retrouver un rythme et des contacts." },
      { heading: "Comment commencer", imageLabel: "Départ", body: "Il suffit souvent de contacter une association proche de chez soi et d'expliquer ce que l'on peut offrir. Il vaut mieux commencer doucement, avec un engagement réaliste, afin de ne pas se décourager au bout de quelques semaines." },
    ],
    questions: [
      { prompt: "Quel est le sujet de l'article ?", choices: [{ label: "Le bénévolat" }, { label: "Le sport de haut niveau" }, { label: "Les vacances à l'étranger" }], correct: 0 },
      { prompt: "Combien de temps faut-il pour être utile ?", choices: [{ label: "Quelques heures par mois suffisent" }, { label: "Au moins huit heures par jour" }, { label: "Toute l'année sans pause" }], correct: 0 },
      { prompt: "Quel bénéfice le bénévole en tire-t-il ?", choices: [{ label: "Rencontrer des gens et apprendre" }, { label: "Gagner un bon salaire" }, { label: "Voyager gratuitement" }], correct: 0 },
      { prompt: "Pour qui est-ce aussi un moyen de retrouver des contacts ?", choices: [{ label: "Pour les personnes seules" }, { label: "Pour les enfants" }, { label: "Pour les touristes" }], correct: 0 },
      { prompt: "Comment commencer?", answer: "contacter une association proche", accept: ["contacter une association", "contacter une association près de chez soi", "s'adresser à une association"] },
      { prompt: "Pourquoi commencer doucement ?", answer: "pour ne pas se décourager", accept: ["pour ne pas se décourager", "pour tenir dans le temps", "pour éviter d'abandonner"] },
      { prompt: "Combien de parties contient l'article ?", answer: "3", accept: ["trois"] },
    ],
  },
  {
    title: "Bien gérer son argent au quotidien",
    sections: [
      { heading: "Suivre ses dépenses", imageLabel: "Dépenses", body: "Noter ce que l'on dépense, même les petites sommes, aide à comprendre où part l'argent. Beaucoup de gens sont surpris en découvrant le total de dépenses qui paraissent minuscules, comme un café tous les matins." },
      { heading: "Prévoir les imprévus", imageLabel: "Épargne", body: "Mettre de côté une petite réserve permet de faire face à une panne ou à une facture inattendue sans avoir à emprunter. Même une somme modeste, épargnée régulièrement, finit par constituer une sécurité utile." },
      { heading: "Éviter les pièges", imageLabel: "Pièges", body: "Il faut se méfier des crédits faciles et des offres « trop belles pour être vraies », qui coûtent souvent cher au final. Avant un achat important, comparer les prix et réfléchir quelques jours évite bien des regrets." },
    ],
    questions: [
      { prompt: "Quel est le sujet de l'article ?", choices: [{ label: "Bien gérer son argent au quotidien" }, { label: "Devenir riche très vite" }, { label: "Ouvrir un magasin" }], correct: 0 },
      { prompt: "Pourquoi noter ses dépenses ?", choices: [{ label: "Pour comprendre où part l'argent" }, { label: "Pour payer plus d'impôts" }, { label: "Pour impressionner ses amis" }], correct: 0 },
      { prompt: "À quoi sert une petite réserve ?", choices: [{ label: "Faire face aux imprévus sans emprunter" }, { label: "Partir en croisière" }, { label: "Acheter une voiture de luxe" }], correct: 0 },
      { prompt: "De quoi faut-il se méfier ?", choices: [{ label: "Des crédits faciles et des offres trop belles" }, { label: "Des magasins ouverts le samedi" }, { label: "Des tickets de caisse" }], correct: 0 },
      { prompt: "Une petite somme épargnée régulièrement est-elle utile ?", choices: [{ label: "Oui, elle finit par constituer une sécurité" }, { label: "Non, c'est totalement inutile" }, { label: "Seulement si elle est énorme" }], correct: 0 },
      { prompt: "Que faut-il faire avant un achat important ?", answer: "comparer les prix et réfléchir", accept: ["comparer les prix", "réfléchir quelques jours", "comparer et réfléchir"] },
      { prompt: "Combien de parties contient l'article ?", answer: "3", accept: ["trois"] },
    ],
  },
];

function buildParts(level: CELevel, stamp: number): CEPart[] {
  const levelName = levelLabel(level).toLowerCase();
  const orientationPool = level === "base" ? null : level === "moyen" ? ORIENTATION_MOYEN : ORIENTATION_AVANCE;
  const orientationTextBase = level === "base" ? pickFromPool(CE_ORIENTATION_BASE, `${level}-${stamp}-orientation`) : null;
  const orientation = orientationPool ? pickFromPool(orientationPool, `${level}-${stamp}-orientation`) : null;
  const instructionPool = level === "base" ? INSTRUCTION_SERIES : level === "avance" ? CE_AVANCE_INSTRUCTIONS : null;
  const emailBase =
    level === "base"
      ? pickFromPool(CE_MESSAGES_BASE, `${level}-${stamp}-email`)
      : level === "moyen"
        ? pickFromPool(CE_MESSAGES_MOYEN, `${level}-${stamp}-email`)
        : null;
  const emailLegacy = level === "avance"
    ? pickFromPool(CE_AVANCE_EMAILS, `${level}-${stamp}-email`)
    : null;
  const instructionMoyen = level === "moyen" ? pickFromPool(CE_INSTRUCTIONS_MOYEN, `${level}-${stamp}-instructions`) : null;
  const instructions = instructionPool ? pickFromPool(instructionPool, `${level}-${stamp}-instructions`) : null;
  const articleMoyen = level === "moyen" ? pickFromPool(CE_ARTICLES_MOYEN, `${level}-${stamp}-article`) : null;
  const articleLegacy = level !== "moyen"
    ? pickFromPool(level === "base" ? ARTICLE_SERIES : CE_AVANCE_ARTICLES, `${level}-${stamp}-article`)
    : null;

  const orientationPart: CEPart = orientationTextBase
    ? {
        id: "orientation",
        title: ceOrientationTitle(level),
        points: 6,
        layout: "email",
        meta: { from: orientationTextBase.from, subject: orientationTextBase.subject },
        body: orientationTextBase.body,
        image: orientationTextBase.image || "",
        questions: buildCeMessageQuestions(orientationTextBase.pool, 6, `${level}-${stamp}-orientation`),
      }
    : {
        id: "orientation",
        title: ceOrientationTitle(level),
        points: 6,
        layout: "orientation",
        task: {
          kind: "table",
          prompt:
            `${orientation!.context} Associez chaque personne au document qui lui correspond. ` +
            `Une seule case par ligne et par colonne. ` +
            `Il y a ${orientation!.people.length} personnes et ${orientation!.docs.length} documents : ` +
            `${orientation!.people.filter(([, a]) => a === -1).length} personnes ne correspondent à aucun document — laissez leur ligne vide.`,
          documents: orientation!.docs.map(([title, subtitle, body], i) => ({ title, subtitle, body, tone: COLORS[i % COLORS.length]! })),
          people: orientation!.people.map(([person]) => person as string),
          answers: orientation!.people.map(([, answer]) => answer as number),
        },
      };

  return [
    orientationPart,
    {
      id: "email",
      title: ceMessageTitle(level),
      points: 6,
      layout: "email",
      meta: emailBase
        ? { from: emailBase.from, subject: emailBase.subject }
        : { from: emailLegacy!.from, subject: emailLegacy!.subject },
      body: emailBase ? emailBase.body : emailLegacy!.body,
      image: emailBase ? (emailBase.image || "") : "",
      questions: emailBase
        ? buildCeMessageQuestions(
            emailBase.pool,
            6,
            `${level}-${stamp}-email`,
            level === "moyen" ? "full" : "stem",
          )
        : emailLegacy!.questions.map((q) => toQuestionTask(q as RawQuestionTask)),
    },
    {
      id: "instructions",
      title: "Lire des instructions",
      points: 6,
      layout: "instructions",
      cards: instructionMoyen
        ? (() => {
            const perCard = buildCeInstructionQuestions(instructionMoyen.cards, `${level}-${stamp}-instructions`);
            return instructionMoyen.cards.map((card, cardIndex) => ({
              title: card.title,
              body: card.body,
              image: "",
              imageLabel: card.imageLabel,
              questions: perCard[cardIndex] ?? [],
            }));
          })()
        : instructions!.map((card) => ({
            ...card,
            image: level === "base" ? "" : card.image,
            imageLabel: level === "base" ? "" : card.imageLabel,
            body: level === "avance" ? `${card.body} Respectez l'ordre des actions et justifiez votre choix.` : card.body,
            questions: card.questions.map((q) => toQuestionTask(q as RawQuestionTask)),
          })),
    },
    {
      id: "information",
      title: "Lire des informations",
      points: 7,
      layout: "article",
      article: articleMoyen
        ? { title: articleMoyen.title, sections: articleMoyen.sections }
        : {
            title: articleLegacy!.title,
            sections: level === "base"
              ? articleLegacy!.sections.map((section) => ({
                  ...section,
                  image: undefined,
                  imageLabel: undefined,
                }))
              : articleLegacy!.sections.map((section) => ({
                  ...section,
                  body: `${section.body} Cette information est importante pour comprendre le texte de niveau ${levelName}.`,
                })),
          },
      questions: articleMoyen
        ? buildCeMessageQuestions(articleMoyen.pool, 7, `${level}-${stamp}-article`, "full")
        : articleLegacy!.questions.map((q) => {
            const task = toQuestionTask(q as RawQuestionTask);
            if (level === "base" && task.kind === "choice") {
              return {
                ...task,
                image: false,
                choices: task.choices.map((choice) => ({ label: choice.label })),
              };
            }
            return task;
          }),
    },
  ];
}

function buildProgressiveCEParts(stamp: number): CEPart[] {
  return PROGRESSIVE_SKILL_LEVELS.map((lvl, i) => {
    const pool = buildParts(lvl, stamp + i * 997);
    return pool[pickIndex(pool.length, `${stamp}-pick-${i}`)]!;
  });
}

function questionKey(part: CEPart, index: number, subIndex?: number) {
  return subIndex === undefined ? `${part.id}-${index}` : `${part.id}-${index}-${subIndex}`;
}

function scorePart(part: CEPart, answers: CEAnswers) {
  if (part.layout === "orientation") {
    const each = part.points / part.task.people.length;
    return part.task.answers.reduce(
      (sum, expected, index) =>
        sum + (orientationRowCorrect(expected, answers[questionKey(part, index)]) ? each : 0),
      0,
    );
  }
  if (part.layout === "instructions") {
    const flat = part.cards.flatMap((card, cardIndex) => card.questions.map((question, questionIndex) => ({ question, key: questionKey(part, cardIndex, questionIndex) })));
    const each = part.points / flat.length;
    return flat.reduce((sum, item) => sum + (answerOk(item.question, answers[item.key] ?? null) ? each : 0), 0);
  }
  const each = part.points / part.questions.length;
  return part.questions.reduce((sum, question, index) => sum + (answerOk(question, answers[questionKey(part, index)] ?? null) ? each : 0), 0);
}

function formatScore(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
}

function formatTimer(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function ProgressDots({
  current,
  count,
  onSelect,
}: {
  current: number;
  count: number;
  onSelect?: (index: number) => void;
}) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: Math.max(1, count) }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect?.(index)}
          disabled={!onSelect}
          className="h-2 min-w-8 flex-1 rounded-full transition-colors disabled:cursor-default"
          style={{ background: index === current ? ACCENT : "var(--color-border-default, var(--color-border))" }}
          aria-label={`Aller à l'exercice ${index + 1}`}
        />
      ))}
    </div>
  );
}

function IntroPage({ level, onStart, placement = false }: { level: CELevel; onStart: () => void; placement?: boolean }) {
  const accent = placement ? "var(--color-accent-quiz)" : ACCENT;
  const introBullets: IntroBullet[] = [
    { strong: "4 exercices", text: " de compréhension écrite" },
    { strong: "45 minutes", text: " pour compléter l'évaluation" },
    { text: "Validez chaque exercice individuellement" },
    { text: "Vous pouvez naviguer librement en cliquant sur la barre de progression en haut." },
    { before: "Score maximum : ", strong: "25 points", text: "" },
  ];
  const introRows: IntroRow[] = [
    { num: "1", title: ceOrientationTitle(level), points: "6 pts" },
    { num: "2", title: ceMessageTitle(level), points: "6 pts" },
    { num: "3", title: "Lire des instructions", points: "6 pts" },
    { num: "4", title: "Lire des informations", points: "7 pts" },
  ];

  return (
    <div className="space-y-6">
      <CEHeader level={level} title="Compréhension écrite" placement={placement} />
      <CommunicationIntroSection
        bullets={introBullets}
        rows={introRows}
        tips={(
          <>
            <p>Lisez d&apos;abord la consigne, puis cherchez les mots importants dans le document.</p>
            <p>Pour les questions à choix, éliminez les réponses impossibles avant de choisir.</p>
            <p>Pour les réponses écrites, répondez avec les mots du texte quand c&apos;est possible.</p>
          </>
        )}
        onStart={onStart}
      />
      <NavActionBar onBack={() => {}} backDisabled onNext={onStart} nextLabel="Commencer" accent={accent} />
    </div>
  );
}
function ChoiceQuestionView({ task, value, onChange, correction }: { task: ChoiceTask; value: number | string | null; onChange: (value: number) => void; correction?: boolean }) {
  return (
    <div className={task.image ? "grid grid-cols-3 gap-2" : "space-y-2"}>
      {task.choices.map((choice, index) => {
        const selected = value === index;
        const correct = correction && index === task.correct;
        const wrong = correction && selected && !correct;
        return (
          <button
            key={index}
            type="button"
            onClick={() => !correction && onChange(index)}
            aria-label={task.image ? `${String.fromCharCode(97 + index)}. ${choice.label}` : undefined}
            className={`rounded-xl border px-3 py-2 text-left text-sm transition ${task.image ? "flex flex-col items-center p-1.5" : "w-full"} ${correct ? "border-amber-400 bg-amber-50 text-amber-700" : selected ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]" : wrong ? "border-red-200 bg-red-50 text-red-600 line-through" : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"}`}
          >
            {task.image ? (
              <ImagePlaceholder label={choice.label} path={choice.image} compact />
            ) : (
              <span><span className="mr-1 font-mono text-xs">{String.fromCharCode(97 + index)}.</span>{choice.label}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function ImagePlaceholder({ label, path, compact }: { label: string; path?: string; compact?: boolean }) {
  const src = ceCoImageSource(path, label);
  const [failed, setFailed] = useState(false);
  const heightCls = compact ? "h-20" : "h-24";
  if (src && !failed) {
    return (
      <div className={`relative w-full overflow-hidden rounded-lg bg-white ${heightCls}`} title={label}>
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain p-1"
          sizes="(max-width: 640px) 40vw, 160px"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center font-semibold text-slate-500 ${heightCls} ${compact ? "text-xs" : "text-sm"}`}
      data-image-path={path}
      title={path}
    >
      {label}
    </div>
  );
}

function FillQuestionView({ task, value, onChange, correction }: { task: FillTask; value: number | string | null; onChange: (value: string) => void; correction?: boolean }) {
  const ok = answerOk(task, value);
  const inputValue = typeof value === "string" ? value : "";
  const inputCls = "border-0 border-b-2 bg-transparent pb-1 text-sm outline-none";
  const stemParts = task.fillMode !== "full" && task.stem ? parseFillStem(task.stem) : null;

  if (stemParts) {
    return (
      <div className="space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-1 gap-y-2 text-sm text-[var(--color-text-primary)]">
          <span>{stemParts.before}</span>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => onChange(event.target.value)}
            disabled={correction}
            className={`inline-block min-w-[5rem] max-w-full px-1 ${inputCls}`}
            style={{ borderColor: correction && !ok ? INVERSE : ACCENT }}
          />
          {stemParts.after ? <span>{stemParts.after}</span> : null}
        </div>
        {correction && !ok && (
          <p className="text-xs font-semibold" style={{ color: INVERSE }}>Réponse attendue : {task.answer}</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {task.fillMode === "full" && (
        <p className="text-xs text-[var(--color-text-secondary)]">Écrivez une phrase complète contenant la réponse.</p>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => onChange(event.target.value)}
        disabled={correction}
        className={`w-full ${inputCls}`}
        style={{ borderColor: correction && !ok ? INVERSE : ACCENT }}
      />
      {correction && !ok && (
        <p className="text-xs font-semibold" style={{ color: INVERSE }}>Réponse attendue : {task.answer}</p>
      )}
    </div>
  );
}

function RenderQuestion({ task, value, onChange, correction }: { task: QuestionTask; value: number | string | null; onChange: (value: number | string) => void; correction?: boolean }) {
  if (task.kind === "fill") return <FillQuestionView task={task} value={value} onChange={(v) => onChange(v)} correction={correction} />;
  return <ChoiceQuestionView task={task} value={value} onChange={(v) => onChange(v)} correction={correction} />;
}

function OrientationPart({ part, answers, setAnswer, correction }: { part: Extract<CEPart, { layout: "orientation" }>; answers: CEAnswers; setAnswer: (key: string, value: number | string | null) => void; correction?: boolean }) {
  function toggle(row: number, col: number) {
    if (correction) return;
    const key = questionKey(part, row);
    const selected = answers[key];
    if (selected === col) {
      setAnswer(key, null);
      return;
    }
    part.task.people.forEach((_, otherRow) => {
      if (otherRow !== row && answers[questionKey(part, otherRow)] === col) {
        setAnswer(questionKey(part, otherRow), null);
      }
    });
    setAnswer(key, col);
  }

  return (
    <div className="space-y-5">
      <p className="text-sm font-semibold italic text-[var(--color-text-primary)]">{part.task.prompt}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {part.task.documents.map((doc, index) => (
          <div key={doc.title} className="rounded-xl border bg-white p-4 shadow-sm" style={{ borderColor: doc.tone }}>
            <p className="text-lg font-bold" style={{ color: doc.tone }}>Document {index + 1}</p>
            <p className="font-semibold text-[var(--color-text-primary)]">{doc.title}</p>
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">{doc.subtitle}</p>
            <p className={`mt-2 ${CE_BODY_TEXT}`}>{doc.body}</p>
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white">
        <table className="w-full table-fixed border-collapse text-xs sm:text-sm">
          <colgroup>
            <col />
            {part.task.documents.map((_, index) => (
              <col key={index} style={{ width: "2.25rem" }} />
            ))}
          </colgroup>
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-[var(--color-border-default)] p-2 text-left">Personnes</th>
              {part.task.documents.map((_, index) => (
                <th key={index} className="border border-[var(--color-border-default)] px-0 py-2 text-center font-bold">
                  {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {part.task.people.map((person, row) => {
              const key = questionKey(part, row);
              const expected = part.task.answers[row]!;
              const selected = answers[key];
              const rowOk = correction && orientationRowCorrect(expected, selected);
              const rowWrong = correction && !rowOk;
              return (
              <tr key={person} className={rowOk ? "bg-amber-50/60" : rowWrong ? "bg-red-50/40" : undefined}>
                <td className="border border-[var(--color-border-default)] p-2">{person}</td>
                {part.task.documents.map((_, col) => {
                  const isSelected = selected === col;
                  const isCorrectCell = correction && expected === col;
                  const isWrongPick = correction && isSelected && expected !== col;
                  return (
                    <td key={col} className="border border-[var(--color-border-default)] p-1 text-center">
                      <button
                        type="button"
                        disabled={correction}
                        onClick={() => toggle(row, col)}
                        aria-label={`Document ${col + 1}`}
                        className={`mx-auto flex h-7 w-7 items-center justify-center rounded border transition ${
                          isCorrectCell
                            ? "border-amber-400 bg-amber-50 text-amber-700"
                            : isWrongPick
                              ? "border-red-300 bg-red-50 text-red-600 line-through"
                              : isSelected
                                ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]"
                                : "border-slate-300 bg-white text-slate-400 hover:border-[var(--color-accent-comm)]"
                        }`}
                      >
                        {isSelected || isCorrectCell ? "✓" : ""}
                      </button>
                    </td>
                  );
                })}
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmailPart({ part, answers, setAnswer, correction }: { part: Extract<CEPart, { layout: "email" }>; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void; correction?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = ceCoImageSource(part.image, part.meta.subject ?? part.meta.from);
  const showImage = !!imageSrc && !imageFailed;

  return (
    <div className="space-y-5">
      {showImage && (
        <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
          <div className="relative w-full">
            <Image
              src={imageSrc}
              alt=""
              width={900}
              height={600}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 640px"
              onError={() => setImageFailed(true)}
              priority
            />
          </div>
        </div>
      )}
      <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm">
        {(part.meta.from || part.meta.subject) && (
          <div className="border-b border-slate-300 pb-2 text-sm text-[var(--color-text-secondary)]">
            {part.meta.from && <p><span className="font-semibold">De :</span> {part.meta.from}</p>}
            {part.meta.subject && <p><span className="font-semibold">Objet :</span> {part.meta.subject}</p>}
          </div>
        )}
        <div className={`mt-3 ${CE_BODY_TEXT_PRE}`}>{part.body}</div>
      </div>
      <QuestionsList part={part} questions={part.questions} answers={answers} setAnswer={setAnswer} correction={correction} />
    </div>
  );
}

function InstructionsPart({ part, answers, setAnswer, correction }: { part: Extract<CEPart, { layout: "instructions" }>; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void; correction?: boolean }) {
  return (
    <div className="space-y-5">
      {part.cards.map((card, cardIndex) => {
        const showImage = Boolean(card.image || card.imageLabel);
        return (
        <div key={card.title} className="rounded-xl border border-[var(--color-border-default)] bg-white p-4 shadow-sm">
          <div className={`flex items-start gap-4 ${showImage ? "" : ""}`}>
            <div className="flex-1">
              <h3 className="text-lg font-bold" style={{ color: ACCENT }}>{card.title}</h3>
              <p className={`mt-2 ${CE_BODY_TEXT_PRE}`}>{card.body}</p>
            </div>
            {showImage && (
              <div className="w-24 shrink-0">
                <ImagePlaceholder label={card.imageLabel} path={card.image} />
              </div>
            )}
          </div>
          <div className="mt-4 space-y-4">
            {card.questions.map((question, questionIndex) => {
              const key = questionKey(part, cardIndex, questionIndex);
              return (
                <div key={key} className="space-y-2">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{questionIndex + 1}. {question.prompt}</p>
                  <RenderQuestion task={question} value={answers[key] ?? null} onChange={(value) => setAnswer(key, value)} correction={correction} />
                </div>
              );
            })}
          </div>
        </div>
        );
      })}
    </div>
  );
}

function ArticlePart({ part, answers, setAnswer, correction }: { part: Extract<CEPart, { layout: "article" }>; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void; correction?: boolean }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm">
        <h3 className="text-2xl font-bold text-sky-600">{part.article.title}</h3>
        <div className="mt-4 grid gap-4">
          {part.article.sections.map((section) => (
            <div key={section.heading} className="flex items-start gap-3">
              {section.image && (
                <div className="w-24 shrink-0">
                  <ImagePlaceholder label={section.imageLabel ?? section.heading} path={section.image} />
                </div>
              )}
              <div>
                <p className="font-bold" style={{ color: INVERSE }}>✱ {section.heading}</p>
                <p className={CE_BODY_TEXT}>{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuestionsList part={part} questions={part.questions} answers={answers} setAnswer={setAnswer} correction={correction} />
    </div>
  );
}

function QuestionsList({ part, questions, answers, setAnswer, correction }: { part: Extract<CEPart, { questions: QuestionTask[] }>; questions: QuestionTask[]; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void; correction?: boolean }) {
  return (
    <div className="space-y-5">
      {questions.map((question, index) => {
        const key = questionKey(part, index);
        return (
          <div key={key} className="space-y-2">
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
              <span style={{ color: ACCENT }}>{index + 1}.</span> {question.prompt}
            </p>
            <RenderQuestion task={question} value={answers[key] ?? null} onChange={(value) => setAnswer(key, value)} correction={correction} />
          </div>
        );
      })}
    </div>
  );
}

function PartView({ part, answers, setAnswer, correction }: { part: CEPart; answers: CEAnswers; setAnswer: (key: string, value: number | string | null) => void; correction?: boolean }) {
  if (part.layout === "orientation") return <OrientationPart part={part} answers={answers} setAnswer={setAnswer} correction={correction} />;
  if (part.layout === "email") return <EmailPart part={part} answers={answers} setAnswer={setAnswer} correction={correction} />;
  if (part.layout === "instructions") return <InstructionsPart part={part} answers={answers} setAnswer={setAnswer} correction={correction} />;
  return <ArticlePart part={part} answers={answers} setAnswer={setAnswer} correction={correction} />;
}

function ExercisePage({ part, index, answers, setAnswer }: { part: CEPart; index: number; answers: CEAnswers; setAnswer: (key: string, value: number | string | null) => void }) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider" style={{ color: ACCENT }}>Exercice {index + 1}</p>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">{part.title}</h2>
          </div>
          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--color-text-secondary)] shadow-sm">{part.points} pts</span>
        </div>
      </div>
      <PartView part={part} answers={answers} setAnswer={setAnswer} />
    </div>
  );
}

function ResultsPage({
  parts,
  answers,
  opened,
  setOpened,
  onContinue,
  continueLabel,
}: {
  parts: CEPart[];
  answers: CEAnswers;
  opened: string | null;
  setOpened: (id: string | null) => void;
  onContinue?: () => void;
  continueLabel?: string;
}) {
  const scores = parts.map((part) => scorePart(part, answers));
  const total = scores.reduce((sum, value) => sum + value, 0);
  return (
    <div className="space-y-6">
      <CommunicationResultsSummary totalPoints={total} maxPoints={parts.reduce((s, p) => s + p.points, 0)} />
      {onContinue && (
        <CommunicationFinishButton onClick={onContinue} label={continueLabel ?? "Continuer"} />
      )}
      <EvalResultsHint />
      <EvalExerciseResultList>
        {parts.map((part, index) => {
          const score = scores[index] ?? 0;
          const isOpen = opened === part.id;
          return (
            <CommunicationResultsExercise
              key={part.id}
              index={index}
              title={part.title}
              correct={score}
              total={part.points}
              scoreLabel={`${formatEvalPoints(score)} / ${part.points}`}
              open={isOpen}
              onToggle={() => setOpened(isOpen ? null : part.id)}
            >
              <PartView part={part} answers={answers} setAnswer={() => {}} correction />
            </CommunicationResultsExercise>
          );
        })}
      </EvalExerciseResultList>
    </div>
  );
}

export function ComprehensionEcritRunner({
  lessonId,
  mode = "module",
  placementSeed,
  placementProgressive,
  onPlacementComplete,
}: { lessonId: string } & PlacementRunnerProps) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const [phase, setPhase] = useState<"intro" | "exercise" | "results">("intro");
  const [localSeed, setLocalSeed] = useState(() => Date.now());
  const seed = placementSeed ?? localSeed;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<CEAnswers>({});
  const [validatedIds, setValidatedIds] = useState<string[]>([]);
  const [openedResult, setOpenedResult] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const parts = useMemo(
    () => (mode === "placement" && placementProgressive ? buildProgressiveCEParts(seed) : buildParts(level, seed)),
    [level, mode, placementProgressive, seed],
  );
  const activeParts = useMemo(() => parts.filter((item) => !validatedIds.includes(item.id)), [parts, validatedIds]);
  const part = activeParts[Math.min(current, Math.max(0, activeParts.length - 1))] ?? activeParts[0] ?? parts[0]!;
  const currentScore = useMemo(
    () => parts.filter((item) => validatedIds.includes(item.id)).reduce((sum, item) => sum + scorePart(item, answers), 0),
    [answers, parts, validatedIds],
  );
  const totalScore = useMemo(
    () => parts.reduce((sum, item) => sum + scorePart(item, answers), 0),
    [answers, parts],
  );

  useRegisterEvalGuard(mode === "placement" && phase === "exercise");

  const finishToResults = useCallback(() => {
    if (mode !== "placement") {
      markCommunicationLessonComplete(lessonId);
    }
    setOpenedResult(null);
    setPhase("results");
  }, [lessonId, mode]);

  useEffect(() => {
    if (phase !== "exercise") return;
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exercise" || secondsLeft > 0) return;
    setValidatedIds(parts.map((item) => item.id));
    finishToResults();
  }, [finishToResults, parts, phase, secondsLeft]);

  const setAnswer = useCallback((key: string, value: number | string | null) => {
    setAnswers((prev) => {
      if (value === null) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: value };
    });
  }, []);

  const validate = useCallback(() => {
    const currentPart = activeParts[current] ?? activeParts[0];
    if (!currentPart) return;
    const nextValidated = [...validatedIds, currentPart.id];
    const remaining = parts.filter((item) => !nextValidated.includes(item.id));
    setValidatedIds(nextValidated);
    if (remaining.length === 0) {
      finishToResults();
    } else {
      setCurrent((value) => Math.min(value, remaining.length - 1));
    }
  }, [activeParts, current, finishToResults, parts, validatedIds]);

  const next = useCallback(() => {
    if (phase === "intro") {
      setSecondsLeft(TOTAL_SECONDS);
      setPhase("exercise");
      return;
    }
    if (phase === "results") {
      if (mode === "placement") {
        onPlacementComplete?.({ skill: "ce", points: totalScore, maxPoints: 25 });
        return;
      }
      router.push(EXPRESSION_TAB_HREF);
      return;
    }
    if (activeParts.length === 0) return;
    setCurrent((value) => (value + 1) % activeParts.length);
  }, [activeParts.length, mode, onPlacementComplete, phase, router, totalScore]);

  const back = useCallback(() => {
    if (phase === "intro") return;
    if (phase === "results") {
      if (mode === "placement") {
        onPlacementComplete?.({ skill: "ce", points: totalScore, maxPoints: 25 });
        return;
      }
      router.push(EXPRESSION_TAB_HREF);
      return;
    }
    if (activeParts.length === 0) return;
    setCurrent((value) => (value - 1 + activeParts.length) % activeParts.length);
  }, [activeParts.length, mode, onPlacementComplete, phase, router, totalScore]);

  const runnerAccent = mode === "placement" ? "var(--color-accent-quiz)" : ACCENT;
  const hudAccent = mode === "placement" ? runnerAccent : INVERSE;

  return (
    <div className="app-shell py-8 pb-28">
      {phase === "intro" && (
        <IntroPage
          level={level}
          placement={mode === "placement"}
          onStart={() => {
            if (placementSeed == null) setLocalSeed(Date.now());
            setAnswers({});
            setValidatedIds([]);
            setCurrent(0);
            setSecondsLeft(TOTAL_SECONDS);
            setPhase("exercise");
          }}
        />
      )}

      {phase === "exercise" && activeParts.length > 0 && (
        <div className="space-y-6">
          <CEHeader level={level} title="Compréhension écrite" placement={mode === "placement"} />
          <div className="mb-5">
            <div className="mb-1.5 flex items-center justify-between">
              <p className="text-xs font-bold tabular-nums" style={{ color: hudAccent }}>{formatScore(currentScore)} / 25 pts</p>
              <div className="flex items-center gap-3">
                <span className="rounded-full px-2 py-0.5 text-xs font-bold tabular-nums" style={{ background: `color-mix(in srgb, ${hudAccent} 12%, white)`, color: hudAccent }}>
                  {formatTimer(secondsLeft * 1000)}
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">{activeParts.length} exercice{activeParts.length !== 1 ? "s" : ""} restant{activeParts.length !== 1 ? "s" : ""}</p>
              </div>
            </div>
            <ProgressDots
              current={Math.min(current, activeParts.length - 1)}
              count={activeParts.length}
              onSelect={setCurrent}
            />
          </div>
          <ExercisePage part={part} index={parts.findIndex((item) => item.id === part.id)} answers={answers} setAnswer={setAnswer} />
          <NavActionBar onBack={back} onValidate={validate} onNext={next} nextLabel="Suivant" accent={runnerAccent} />
        </div>
      )}

      {phase === "results" && (
        <div className="space-y-6">
          <CEHeader level={level} title="Résultats" placement={mode === "placement"} />
          <ResultsPage
            parts={parts}
            answers={answers}
            opened={openedResult}
            setOpened={setOpenedResult}
            onContinue={next}
            continueLabel={mode === "placement" ? "Continuer" : "Terminer"}
          />
          <NavActionBar onNext={next} nextLabel={mode === "placement" ? "Continuer" : "Terminer"} accent={runnerAccent} />
        </div>
      )}
    </div>
  );
}
