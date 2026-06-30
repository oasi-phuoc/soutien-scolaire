"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";

type CELevel = "base" | "moyen" | "avance";
type Choice = { label: string; image?: string };
type TableTask = { kind: "table"; prompt: string; documents: { title: string; subtitle: string; body: string; tone: string }[]; people: string[]; answers: number[] };
type ChoiceTask = { kind: "choice"; prompt: string; choices: Choice[]; correct: number; image?: boolean };
type FillTask = { kind: "fill"; prompt: string; answer: string; accept?: string[] };
type QuestionTask = ChoiceTask | FillTask;
type RawQuestionTask = Omit<ChoiceTask, "kind"> | Omit<FillTask, "kind">;
type CEPart =
  | { id: "orientation"; title: string; points: 6; layout: "orientation"; task: TableTask }
  | { id: "email"; title: string; points: 6; layout: "email"; meta: { from: string; subject: string }; body: string; questions: QuestionTask[] }
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

function pick<T>(items: T[], seed: string) {
  let n = 0;
  for (const char of seed) n += char.charCodeAt(0);
  return items[n % items.length]!;
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
  if ("answer" in question) return { kind: "fill", ...question };
  return { kind: "choice", ...question };
}

function CEHeader({ level, title }: { level: CELevel; title: string }) {
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
          Français · Compréhension écrite · {levelLabel(level)}
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
}) {
  return (
    <div className="hidden fixed bottom-0 left-0 right-0">
      {onBack && <button type="button" data-nav-action="back" aria-label="Précédent" disabled={backDisabled} onClick={onBack}>Précédent</button>}
      {onRefresh && <button type="button" data-nav-action="refresh" aria-label="Recommencer" disabled={refreshDisabled} onClick={onRefresh}>Recommencer</button>}
      {onValidate && <button type="button" data-nav-action="validate" aria-label="Valider" disabled={validateDisabled} onClick={onValidate}>Valider</button>}
      {onNext && (
        <button type="button" data-nav-action="next" data-nav-label={nextLabel} aria-label={nextLabel ?? "Suivant"} disabled={nextDisabled} onClick={onNext}>
          {nextLabel ?? "Suivant"}
        </button>
      )}
    </div>
  );
}

const ORIENTATION_TOPICS = [
  {
    context: "Avec vos amis, vous cherchez un magazine adapté à chacun.",
    docs: [
      ["Cuisine+", "Recettes faciles", "Des plats simples, économiques et rapides pour tous les jours."],
      ["CinéActu", "Sorties cinéma", "Bandes-annonces, avis et nouveautés dans les salles romandes."],
      ["CélébritésMag", "Stars et musique", "Photos, interviews et nouvelles des artistes connus."],
      ["Jeux malins", "Réflexion", "Sudokus, mots croisés et jeux pour entraîner la mémoire."],
      ["JuniorStyle", "Adolescents", "Mode, sport, jeux vidéo et loisirs pour les jeunes."],
      ["AutoPlus", "Voitures", "Conseils pour acheter, réparer et comparer les véhicules."],
    ],
    people: [
      ["Élodie aime préparer de nouvelles recettes.", 0],
      ["Lucie cherche un magazine pour son enfant.", 4],
      ["David veut faire des mots croisés.", 3],
      ["Patrick s'intéresse aux voitures.", 5],
      ["Marie va souvent au cinéma.", 1],
      ["Mathilde suit la vie des chanteurs.", 2],
    ],
  },
  {
    context: "Vous êtes dans une ville suisse et vous choisissez le bon service.",
    docs: [
      ["Bibliothèque", "Livres et journaux", "Empruntez des romans, bandes dessinées et documents."],
      ["Piscine", "Sport et détente", "Bassins chauffés, cours pour enfants et abonnements."],
      ["Office postal", "Courrier", "Envoyez des lettres, des colis et retirez vos paquets."],
      ["Maison de quartier", "Activités", "Cours de langue, aide aux devoirs et rencontres."],
      ["Pharmacie", "Santé", "Conseils, médicaments et produits de premiers soins."],
      ["Gare CFF", "Transport", "Billets, horaires et informations sur les trains."],
    ],
    people: [
      ["Samir veut acheter un billet pour Sion.", 5],
      ["Oksana doit envoyer un colis.", 2],
      ["Amina cherche un médicament.", 4],
      ["Marta veut emprunter un roman.", 0],
      ["Youssef veut nager le mercredi.", 1],
      ["Lina cherche un cours de français.", 3],
    ],
  },
];

const EMAIL_SERIES = [
  {
    from: "paul@abc.ch",
    subject: "Samedi soir",
    body: "Salut !\nJe t'écris pour notre rendez-vous samedi soir. Rose a réservé au restaurant Les Arcades. On se retrouve devant le fleuriste de la place Centrale à 18 h 30. Nous prendrons le menu spécial, puis nous irons boire un thé. Nathalie ne sait pas encore que c'est une surprise. Apporte ton appareil photo pour faire quelques images.\nÀ samedi !\nPaul",
    questions: [
      { prompt: "Où faut-il se retrouver ?", choices: [{ label: "Devant le fleuriste", image: "/expression/ce/fleuriste.webp" }, { label: "Devant le restaurant", image: "/expression/ce/restaurant.webp" }, { label: "Devant la boutique", image: "/expression/ce/boutique.webp" }], correct: 0, image: true },
      { prompt: "À quelle heure est le rendez-vous ?", choices: [{ label: "17 h 30" }, { label: "18 h 30" }, { label: "19 h 30" }], correct: 1 },
      { prompt: "Qu'est-ce qui est une surprise ?", choices: [{ label: "Le restaurant" }, { label: "Le menu spécial" }, { label: "La soirée de Nathalie" }], correct: 2 },
      { prompt: "Que faut-il apporter ?", choices: [{ label: "Une rose", image: "/expression/ce/rose.webp" }, { label: "Une boisson", image: "/expression/ce/boisson.webp" }, { label: "Un appareil photo", image: "/expression/ce/appareil-photo.webp" }], correct: 2, image: true },
      { prompt: "Qui a réservé le restaurant ?", answer: "Rose", accept: ["rose"] },
      { prompt: "Quel jour a lieu le rendez-vous ?", answer: "samedi", accept: ["samedi soir"] },
    ],
  },
  {
    from: "fatima@ecole.ch",
    subject: "Cours de français",
    body: "Bonjour,\nLe cours de français de jeudi est déplacé dans la salle 204. Le professeur demande d'apporter le cahier bleu et un dictionnaire. Le cours commence à 9 h 15 et termine à 11 h. Si vous arrivez en retard, entrez doucement et prenez une place au fond.\nMerci.\nFatima",
    questions: [
      { prompt: "Dans quelle salle a lieu le cours ?", choices: [{ label: "Salle 104" }, { label: "Salle 204" }, { label: "Salle 304" }], correct: 1 },
      { prompt: "Que faut-il apporter ?", choices: [{ label: "Un cahier bleu", image: "/expression/ce/cahier-bleu.webp" }, { label: "Un sac de sport", image: "/expression/ce/sac-sport.webp" }, { label: "Un parapluie", image: "/expression/ce/parapluie.webp" }], correct: 0, image: true },
      { prompt: "À quelle heure commence le cours ?", choices: [{ label: "9 h 15" }, { label: "10 h" }, { label: "11 h" }], correct: 0 },
      { prompt: "Où faut-il s'asseoir en cas de retard ?", choices: [{ label: "Devant" }, { label: "Au fond" }, { label: "À côté du professeur" }], correct: 1 },
      { prompt: "Quel jour le cours est-il déplacé ?", answer: "jeudi" },
      { prompt: "Quel autre objet faut-il prendre avec le cahier ?", answer: "dictionnaire", accept: ["un dictionnaire"] },
    ],
  },
];

const INSTRUCTION_SERIES = [
  [
    {
      title: "Règles d'hygiène",
      image: "/expression/ce/hygiene.webp",
      imageLabel: "Hygiène",
      body: "Quand vous arrivez au travail, lavez-vous les mains. Portez une tenue propre. Nettoyez votre espace après chaque client.",
      questions: [
        { prompt: "Que faut-il faire en premier ?", choices: [{ label: "Laver les mains" }, { label: "Boire un café" }, { label: "Rentrer chez soi" }], correct: 0 },
        { prompt: "Quand faut-il nettoyer l'espace ?", choices: [{ label: "Avant chaque pause" }, { label: "Après chaque client" }, { label: "Le soir seulement" }], correct: 1 },
      ],
    },
    {
      title: "Remplacement",
      image: "/expression/ce/remplacement.webp",
      imageLabel: "Remplacement",
      body: "Bonjour, je suis absente aujourd'hui. Remplace-moi à l'accueil. Si un client arrive en retard, propose un nouveau rendez-vous.",
      questions: [
        { prompt: "Où faut-il remplacer la personne ?", choices: [{ label: "À l'accueil" }, { label: "À la cuisine" }, { label: "Dans la rue" }], correct: 0 },
        { prompt: "Que faire si un client arrive en retard ?", choices: [{ label: "L'annuler" }, { label: "Proposer un autre rendez-vous" }, { label: "Fermer la porte" }], correct: 1 },
      ],
    },
    {
      title: "Préparer une infusion",
      image: "/expression/ce/infusion.webp",
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
      image: "/expression/ce/gare.webp",
      imageLabel: "Gare",
      body: "Présentez votre billet avant de monter. Gardez vos bagages près de vous. Les vélos doivent rester dans la zone indiquée.",
      questions: [
        { prompt: "Que faut-il présenter ?", choices: [{ label: "Un billet" }, { label: "Une carte de bibliothèque" }, { label: "Une photo" }], correct: 0 },
        { prompt: "Où doivent rester les vélos ?", choices: [{ label: "Dans la zone indiquée" }, { label: "Au restaurant" }, { label: "Sur les sièges" }], correct: 0 },
      ],
    },
    {
      title: "Consigne de sécurité",
      image: "/expression/ce/securite.webp",
      imageLabel: "Sécurité",
      body: "En cas d'alarme, sortez calmement par la porte la plus proche. N'utilisez pas l'ascenseur. Attendez devant le bâtiment.",
      questions: [
        { prompt: "Que ne faut-il pas utiliser ?", choices: [{ label: "La porte" }, { label: "L'ascenseur" }, { label: "L'escalier" }], correct: 1 },
        { prompt: "Où faut-il attendre ?", choices: [{ label: "Devant le bâtiment" }, { label: "Dans la classe" }, { label: "À la cave" }], correct: 0 },
      ],
    },
    {
      title: "Atelier cuisine",
      image: "/expression/ce/cuisine.webp",
      imageLabel: "Cuisine",
      body: "Lisez toute la recette avant de commencer. Préparez les ingrédients sur la table. Rangez le matériel après l'activité.",
      questions: [
        { prompt: "Que faut-il lire avant de commencer ?", choices: [{ label: "La recette" }, { label: "Un journal" }, { label: "Un horaire" }], correct: 0 },
        { prompt: "Quand faut-il ranger le matériel ?", choices: [{ label: "Avant l'activité" }, { label: "Après l'activité" }, { label: "Jamais" }], correct: 1 },
      ],
    },
  ],
];

const ARTICLE_SERIES = [
  {
    title: "Améliorez votre mémoire !",
    sections: [
      { heading: "L'alimentation", body: "Mangez des légumes frais, des noix et du poisson. Buvez de l'eau régulièrement.", image: "/expression/ce/alimentation.webp", imageLabel: "Alimentation" },
      { heading: "Le sport", body: "La marche, le vélo et la danse stimulent le cerveau et aident à rester concentré.", image: "/expression/ce/sport.webp", imageLabel: "Sport" },
      { heading: "L'activité mentale", body: "Jouez à des jeux de société, lisez un texte ou racontez une histoire à un ami.", image: "/expression/ce/activite-mentale.webp", imageLabel: "Activité mentale" },
    ],
    questions: [
      { prompt: "Que conseille-t-on de manger ?", choices: [{ label: "Des légumes frais" }, { label: "Beaucoup de viande" }, { label: "Seulement du sucre" }], correct: 0 },
      { prompt: "Quel sport est conseillé ?", choices: [{ label: "La marche", image: "/expression/ce/marche.webp" }, { label: "La boxe", image: "/expression/ce/boxe.webp" }, { label: "Le ski nautique", image: "/expression/ce/ski-nautique.webp" }], correct: 0, image: true },
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
      { heading: "Se protéger du froid", body: "Portez un manteau chaud, des gants et de bonnes chaussures quand il neige.", image: "/expression/ce/froid.webp", imageLabel: "Froid" },
      { heading: "Rester en forme", body: "Même en hiver, sortez marcher un peu et aérez votre logement chaque jour.", image: "/expression/ce/hiver.webp", imageLabel: "Hiver" },
      { heading: "Éviter les maladies", body: "Lavez-vous souvent les mains et reposez-vous si vous êtes fatigué.", image: "/expression/ce/lavage-mains.webp", imageLabel: "Lavage des mains" },
    ],
    questions: [
      { prompt: "Que faut-il porter quand il fait froid ?", choices: [{ label: "Un manteau chaud" }, { label: "Un maillot de bain" }, { label: "Des sandales" }], correct: 0 },
      { prompt: "Quelle image correspond à l'hiver ?", choices: [{ label: "Neige", image: "/expression/ce/neige.webp" }, { label: "Soleil d'été", image: "/expression/ce/soleil.webp" }, { label: "Plage", image: "/expression/ce/plage.webp" }], correct: 0, image: true },
      { prompt: "Que faut-il aérer chaque jour ?", answer: "logement", accept: ["le logement", "maison", "appartement"] },
      { prompt: "Que faut-il laver souvent ?", choices: [{ label: "Les mains" }, { label: "Les chaussures" }, { label: "Les fenêtres" }], correct: 0 },
      { prompt: "Que faire si on est fatigué ?", choices: [{ label: "Se reposer" }, { label: "Courir toute la nuit" }, { label: "Ne pas dormir" }], correct: 0 },
      { prompt: "Quel vêtement protège les mains ?", answer: "gants", accept: ["des gants"] },
      { prompt: "Quel est le sujet de l'article ?", choices: [{ label: "Bien vivre en hiver" }, { label: "Acheter une voiture" }, { label: "Choisir un film" }], correct: 0 },
    ],
  },
];

function expandSeries<T>(base: T[], count = 10): T[] {
  return Array.from({ length: count }, (_, i) => base[i % base.length]!);
}

function buildParts(level: CELevel, stamp = Date.now()): CEPart[] {
  const levelName = levelLabel(level).toLowerCase();
  const orientation = pick(expandSeries(ORIENTATION_TOPICS), `${level}-${stamp}-orientation`);
  const email = pick(expandSeries(EMAIL_SERIES), `${level}-${stamp}-email`);
  const instructions = pick(expandSeries(INSTRUCTION_SERIES), `${level}-${stamp}-instructions`);
  const article = pick(expandSeries(ARTICLE_SERIES), `${level}-${stamp}-article`);

  return [
    {
      id: "orientation",
      title: "Lire pour s'orienter",
      points: 6,
      layout: "orientation",
      task: {
        kind: "table",
        prompt: `${orientation.context} Cochez un seul document pour chaque personne.`,
        documents: orientation.docs.map(([title, subtitle, body], i) => ({ title, subtitle, body, tone: COLORS[i % COLORS.length]! })),
        people: orientation.people.map(([person]) => person as string),
        answers: orientation.people.map(([, answer]) => answer as number),
      },
    },
    {
      id: "email",
      title: "Lire une correspondance",
      points: 6,
      layout: "email",
      meta: { from: email.from, subject: email.subject },
      body: email.body,
      questions: email.questions.map((q) => toQuestionTask(q as RawQuestionTask)),
    },
    {
      id: "instructions",
      title: "Lire des instructions",
      points: 6,
      layout: "instructions",
      cards: instructions.map((card) => ({
        ...card,
        body: level === "avance" ? `${card.body} Respectez l'ordre des actions et justifiez votre choix.` : card.body,
        questions: card.questions.map((q) => toQuestionTask(q as RawQuestionTask)),
      })),
    },
    {
      id: "information",
      title: "Lire des informations",
      points: 7,
      layout: "article",
      article: {
        title: article.title,
        sections: level === "base"
          ? article.sections
          : article.sections.map((section) => ({ ...section, body: `${section.body} Cette information est importante pour comprendre le texte de niveau ${levelName}.` })),
      },
      questions: article.questions.map((q) => toQuestionTask(q as RawQuestionTask)),
    },
  ];
}

function questionKey(part: CEPart, index: number, subIndex?: number) {
  return subIndex === undefined ? `${part.id}-${index}` : `${part.id}-${index}-${subIndex}`;
}

function scorePart(part: CEPart, answers: CEAnswers) {
  if (part.layout === "orientation") {
    return part.task.answers.reduce((sum, correct, index) => sum + (answers[questionKey(part, index)] === correct ? 1 : 0), 0);
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

function gradeFromScore(score: number) {
  return Math.max(1, Math.min(6, 1 + (score / 25) * 5));
}

function mentionFromGrade(grade: number) {
  if (grade >= 5) return "Très bien";
  if (grade >= 4) return "Bien";
  if (grade >= 3) return "À consolider";
  return "À améliorer";
}

function ProgressDots({ current }: { current: number }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="h-2 flex-1 rounded-full"
          style={{ background: index <= current ? ACCENT : "var(--color-border)" }}
        />
      ))}
    </div>
  );
}

function IntroPage({ level, onStart }: { level: CELevel; onStart: () => void }) {
  return (
    <div className="space-y-7">
      <CEHeader level={level} title="Évaluation de compréhension écrite" />
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl" style={{ background: `color-mix(in srgb, ${ACCENT} 14%, white)` }}>
          📖
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Évaluation</p>
        <h2 className="mt-2 text-2xl font-bold text-[var(--color-text-primary)]">Lire et comprendre</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Durée : 30 minutes. Total : 25 points. Lisez chaque document avec attention puis répondez aux questions.
        </p>
      </div>
      <div className="grid gap-3">
        {[
          ["1", "Lire pour s'orienter", "6 pts"],
          ["2", "Lire une correspondance", "6 pts"],
          ["3", "Lire des instructions", "6 pts"],
          ["4", "Lire des informations", "7 pts"],
        ].map(([num, title, pts]) => (
          <div key={num} className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white/80 px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: ACCENT }}>{num}</span>
            <span className="flex-1 font-semibold text-[var(--color-text-primary)]">{title}</span>
            <span className="text-sm font-semibold" style={{ color: INVERSE }}>{pts}</span>
          </div>
        ))}
      </div>
      <NavActionBar onBack={() => {}} backDisabled onNext={onStart} nextLabel="Commencer" />
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
            className={`rounded-xl border px-3 py-2 text-left text-sm transition ${task.image ? "flex flex-col items-center gap-1 text-center" : "w-full"} ${correct ? "border-amber-400 bg-amber-50 text-amber-700" : selected ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]" : wrong ? "border-red-200 bg-red-50 text-red-600 line-through" : "border-[var(--color-border)] text-[var(--color-text-primary)]"}`}
          >
            {task.image && <ImagePlaceholder label={choice.label} path={choice.image} compact />}
            <span><span className="mr-1 font-mono text-xs">{String.fromCharCode(97 + index)}.</span>{choice.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ImagePlaceholder({ label, path, compact }: { label: string; path?: string; compact?: boolean }) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center font-semibold text-slate-500 ${compact ? "h-20 text-xs" : "h-24 text-sm"}`}
      data-image-path={path}
      title={path}
    >
      {label}
    </div>
  );
}

function FillQuestionView({ task, value, onChange, correction }: { task: FillTask; value: number | string | null; onChange: (value: string) => void; correction?: boolean }) {
  const ok = answerOk(task, value);
  return (
    <div className="space-y-1">
      <input
        type="text"
        value={typeof value === "string" ? value : ""}
        onChange={(event) => onChange(event.target.value)}
        disabled={correction}
        className="w-full border-0 border-b-2 bg-transparent pb-1 text-sm outline-none"
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

function OrientationPart({ part, answers, setAnswer, correction }: { part: Extract<CEPart, { layout: "orientation" }>; answers: CEAnswers; setAnswer: (key: string, value: number) => void; correction?: boolean }) {
  return (
    <div className="space-y-5">
      <p className="text-sm font-semibold italic text-[var(--color-text-primary)]">{part.task.prompt}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {part.task.documents.map((doc, index) => (
          <div key={doc.title} className="rounded-xl border bg-white p-4 shadow-sm" style={{ borderColor: doc.tone }}>
            <p className="text-lg font-bold" style={{ color: doc.tone }}>Document {index + 1}</p>
            <p className="font-semibold text-[var(--color-text-primary)]">{doc.title}</p>
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">{doc.subtitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-primary)]">{doc.body}</p>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-white">
        <table className="min-w-[640px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-[var(--color-border)] p-2 text-left">Personnes</th>
              {part.task.documents.map((_, index) => <th key={index} className="border border-[var(--color-border)] p-2 text-center">Doc. {index + 1}</th>)}
            </tr>
          </thead>
          <tbody>
            {part.task.people.map((person, row) => (
              <tr key={person}>
                <td className="border border-[var(--color-border)] p-2">{String.fromCharCode(97 + row)}. {person}</td>
                {part.task.documents.map((_, col) => {
                  const key = questionKey(part, row);
                  const selected = answers[key] === col;
                  const correct = correction && part.task.answers[row] === col;
                  return (
                    <td key={col} className="border border-[var(--color-border)] p-2 text-center">
                      <button
                        type="button"
                        onClick={() => !correction && setAnswer(key, col)}
                        className={`mx-auto h-5 w-5 rounded border ${correct ? "border-amber-400 bg-amber-100" : selected ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/20" : "border-slate-300"}`}
                        aria-label={`Document ${col + 1}`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmailPart({ part, answers, setAnswer, correction }: { part: Extract<CEPart, { layout: "email" }>; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void; correction?: boolean }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm">
        <div className="border-b border-slate-300 pb-2 text-sm text-[var(--color-text-secondary)]">
          <p><span className="font-semibold">De :</span> {part.meta.from}</p>
          <p><span className="font-semibold">Objet :</span> {part.meta.subject}</p>
        </div>
        <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-primary)]">{part.body}</div>
      </div>
      <QuestionsList part={part} questions={part.questions} answers={answers} setAnswer={setAnswer} correction={correction} />
    </div>
  );
}

function InstructionsPart({ part, answers, setAnswer, correction }: { part: Extract<CEPart, { layout: "instructions" }>; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void; correction?: boolean }) {
  return (
    <div className="space-y-5">
      {part.cards.map((card, cardIndex) => (
        <div key={card.title} className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold" style={{ color: ACCENT }}>{card.title}</h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-primary)]">{card.body}</p>
            </div>
            <div className="w-24 shrink-0">
              <ImagePlaceholder label={card.imageLabel} path={card.image} />
            </div>
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
      ))}
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
                <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{section.body}</p>
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

function PartView({ part, answers, setAnswer, correction }: { part: CEPart; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void; correction?: boolean }) {
  if (part.layout === "orientation") return <OrientationPart part={part} answers={answers} setAnswer={(key, value) => setAnswer(key, value)} correction={correction} />;
  if (part.layout === "email") return <EmailPart part={part} answers={answers} setAnswer={setAnswer} correction={correction} />;
  if (part.layout === "instructions") return <InstructionsPart part={part} answers={answers} setAnswer={setAnswer} correction={correction} />;
  return <ArticlePart part={part} answers={answers} setAnswer={setAnswer} correction={correction} />;
}

function ExercisePage({ part, index, answers, setAnswer }: { part: CEPart; index: number; answers: CEAnswers; setAnswer: (key: string, value: number | string) => void }) {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider" style={{ color: ACCENT }}>Exercice {index + 1}</p>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">{part.title}</h2>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--color-text-secondary)] shadow-sm">{part.points} pts</span>
      </div>
      <PartView part={part} answers={answers} setAnswer={setAnswer} />
    </div>
  );
}

function ResultsPage({ parts, answers, opened, setOpened }: { parts: CEPart[]; answers: CEAnswers; opened: string | null; setOpened: (id: string | null) => void }) {
  const scores = parts.map((part) => scorePart(part, answers));
  const total = scores.reduce((sum, value) => sum + value, 0);
  const grade = gradeFromScore(total);
  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: INVERSE }}>Résultats</p>
        <p className="mt-2 text-4xl font-black text-[var(--color-text-primary)]">{formatScore(total)} / 25</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
          <p className="text-xs text-[var(--color-text-secondary)]">Points</p>
          <p className="text-2xl font-bold">{formatScore(total)}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
          <p className="text-xs text-[var(--color-text-secondary)]">Note</p>
          <p className="text-2xl font-bold">{grade.toFixed(1).replace(".", ",")} / 6</p>
        </div>
        <div className="rounded-2xl border p-4 text-center shadow-sm" style={{ borderColor: INVERSE }}>
          <p className="text-xs text-[var(--color-text-secondary)]">Mention</p>
          <p className="text-sm font-bold" style={{ color: INVERSE }}>{mentionFromGrade(grade)}</p>
        </div>
      </div>
      <p className="text-center text-sm text-[var(--color-text-secondary)]">Cliquez sur un exercice pour voir la correction.</p>
      <div className="space-y-3">
        {parts.map((part, index) => {
          const score = scores[index] ?? 0;
          const isOpen = opened === part.id;
          return (
            <div key={part.id} className="rounded-2xl border border-[var(--color-border)] bg-white/85 shadow-sm">
              <button type="button" className="flex w-full items-center gap-3 px-4 py-3 text-left" onClick={() => setOpened(isOpen ? null : part.id)}>
                <span className="font-bold" style={{ color: ACCENT }}>{index + 1}</span>
                <span className="flex-1 font-semibold text-[var(--color-text-primary)]">{part.title}</span>
                <span className="font-bold" style={{ color: score === part.points ? "#059669" : INVERSE }}>{formatScore(score)} / {part.points}</span>
                <span>›</span>
              </button>
              {isOpen && (
                <div className="border-t border-[var(--color-border)] p-4">
                  <PartView part={part} answers={answers} setAnswer={() => {}} correction />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ComprehensionEcritRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const [phase, setPhase] = useState<"intro" | "exercise" | "results">("intro");
  const [seed, setSeed] = useState(() => Date.now());
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<CEAnswers>({});
  const [openedResult, setOpenedResult] = useState<string | null>(null);
  const parts = useMemo(() => buildParts(level, seed), [level, seed]);
  const part = parts[current]!;

  const setAnswer = useCallback((key: string, value: number | string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const refresh = useCallback(() => {
    setSeed(Date.now());
    setAnswers({});
    setCurrent(0);
    setPhase("exercise");
  }, []);

  const validate = useCallback(() => {
    if (current === parts.length - 1) {
      markCommunicationLessonComplete(lessonId);
      setOpenedResult(parts[0]?.id ?? null);
      setPhase("results");
    } else {
      setCurrent((value) => Math.min(parts.length - 1, value + 1));
    }
  }, [current, lessonId, parts]);

  const next = useCallback(() => {
    if (phase === "intro") {
      setPhase("exercise");
      return;
    }
    if (phase === "results") {
      router.push("/communication");
      return;
    }
    setCurrent((value) => (value + 1) % parts.length);
  }, [phase, parts.length, router]);

  const back = useCallback(() => {
    if (phase === "intro") return;
    if (phase === "results") {
      setPhase("exercise");
      setCurrent(parts.length - 1);
      return;
    }
    setCurrent((value) => (value - 1 + parts.length) % parts.length);
  }, [phase, parts.length]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 pb-28">
      {phase === "intro" && <IntroPage level={level} onStart={() => setPhase("exercise")} />}

      {phase === "exercise" && (
        <div className="space-y-6">
          <CEHeader level={level} title="Compréhension écrite" />
          <ProgressDots current={current} />
          <ExercisePage part={part} index={current} answers={answers} setAnswer={setAnswer} />
          <NavActionBar onBack={back} onRefresh={refresh} onValidate={validate} onNext={next} nextLabel={current === parts.length - 1 ? "Résultats" : "Suivant"} />
        </div>
      )}

      {phase === "results" && (
        <div className="space-y-6">
          <CEHeader level={level} title="Résultats" />
          <ResultsPage parts={parts} answers={answers} opened={openedResult} setOpened={setOpenedResult} />
          <NavActionBar onBack={back} onRefresh={refresh} onNext={() => router.push("/communication")} nextLabel="Terminer" />
        </div>
      )}
    </div>
  );
}
