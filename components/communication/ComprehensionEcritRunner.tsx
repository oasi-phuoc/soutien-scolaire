"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
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
import type { PlacementRunnerProps } from "@/lib/placement/runner-props";

const TOTAL_SECONDS = 45 * 60;

type CELevel = "base" | "moyen" | "avance";
type Choice = { label: string; image?: string };
type TableTask = { kind: "table"; prompt: string; documents: { title: string; subtitle: string; body: string; tone: string }[]; people: string[]; answers: number[] };
type ChoiceTask = { kind: "choice"; prompt: string; choices: Choice[]; correct: number; image?: boolean };
type FillTask = { kind: "fill"; prompt: string; answer: string; accept?: string[] };
type QuestionTask = ChoiceTask | FillTask;
type RawQuestionTask = Omit<ChoiceTask, "kind"> | Omit<FillTask, "kind">;
type OrientationSeriesItem = {
  context: string;
  docs: [string, string, string][];
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

const ORIENTATION_TOPICS: OrientationSeriesItem[] = [
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

const EMAIL_SERIES: EmailSeriesItem[] = [
  {
    from: "paul@abc.ch",
    subject: "Samedi soir",
    body: "Salut !\nJe t'écris pour notre rendez-vous samedi soir. Rose a réservé au restaurant Les Arcades. On se retrouve devant le fleuriste de la place Centrale à 18 h 30. Nous prendrons le menu spécial, puis nous irons boire un thé. Nathalie ne sait pas encore que c&apos;est une surprise. Apporte ton appareil photo pour faire quelques images.\nÀ samedi !\nPaul",
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
    from: "fatima@école.ch",
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

const INSTRUCTION_SERIES: InstructionSeriesItem[] = [
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
      image: "/expression/ce/sécurité.webp",
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

const ARTICLE_SERIES: ArticleSeriesItem[] = [
  {
    title: "Améliorez votre mémoire !",
    sections: [
      { heading: "L'alimentation", body: "Mangez des légumes frais, des noix et du poisson. Buvez de l'eau régulièrement.", image: "/expression/ce/alimentation.webp", imageLabel: "Alimentation" },
      { heading: "Le sport", body: "La marche, le vélo et la danse stimulent le cerveau et aident à rester concentré.", image: "/expression/ce/sport.webp", imageLabel: "Sport" },
      { heading: "L'activité mentale", body: "Jouez à des jeux de société, lisez un texte ou racontez une histoire à un ami.", image: "/expression/ce/activité-mentale.webp", imageLabel: "Activité mentale" },
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

const ORIENTATION_MOYEN: OrientationSeriesItem[] = [
  {
    context: "Vous cherchez le bon lieu dans une ville suisse selon les besoins des personnes.",
    docs: [
      ["Centre de formation", "Cours et ateliers", "Cours de français, informatique et aide pour les démarches."],
      ["Espace santé", "Conseils", "Informations, prévention et rendez-vous avec une infirmière."],
      ["Maison des jeunes", "Loisirs", "Activites sportives, musique et jeux après les cours."],
      ["Office du tourisme", "Visites", "Plans de la ville, horaires des musees et excursions."],
      ["Bibliothèque", "Lecture", "Livres faciles, journaux, ordinateurs et coin de travail calme."],
      ["Service social", "Aide", "Conseils pour le logement, les assurances et les papiers officiels."],
    ],
    people: [
      ["Nadia veut emprunter un livre facile.", 4],
      ["Omar cherche une aide pour un formulaire.", 5],
      ["Marta veut visiter la ville dimanche.", 3],
      ["Yanis cherche une activité après l'école.", 2],
      ["Kateryna veut apprendre l'informatique.", 0],
      ["Ali veut poser une question sur sa santé.", 1],
    ],
  },
  {
    context: "Vous lisez les annonces d'un centre de quartier et vous choisissez l'activité adaptee.",
    docs: [
      ["Atelier cuisine", "Repas simples", "Preparation de plats économiques avec des produits de saison."],
      ["Cours de conversation", "Parler français", "Petits groupes pour pratiquer le français de la vie quotidienne."],
      ["Aide aux devoirs", "École", "Accompagnement pour les enfants et les adolescents après les cours."],
      ["Club emploi", "Travail", "Aide pour écrire un CV et préparer un entretien."],
      ["Sortie nature", "Marche", "Promenade facile au bord du lac avec un guide."],
      ["Atelier couture", "Reparer", "Apprendre a recoudre un bouton et faire de petites retouches."],
    ],
    people: [
      ["Selin doit préparer un entretien de travail.", 3],
      ["Iryna veut pratiquer le français oral.", 1],
      ["Mahmoud aime marcher au bord de l'eau.", 4],
      ["Fatou veut reparer un pantalon.", 5],
      ["Luca cherche de l'aide pour son fils.", 2],
      ["Amina veut apprendre une recette simple.", 0],
    ],
  },
  {
    context: "Dans un journal local, vous choisissez la petite annonce utile pour chaque personne.",
    docs: [
      ["Velo d'occasion", "Transport", "Velo en bon etat, idéal pour aller au travail ou a l'école."],
      ["Chambre a louer", "Logement", "Petite chambre meublée proche de la gare, disponible en août."],
      ["Garde d'enfants", "Service", "Etudiante sérieuse garde des enfants le soir et le mercredi."],
      ["Cours de natation", "Sport", "Cours pour adultes débutants a la piscine communale."],
      ["Meuble gratuit", "Maison", "Table et quatre chaises a venir chercher ce week-end."],
      ["Reparation téléphone", "Technique", "Ecran cassé, batterie faible : réparations rapides en ville."],
    ],
    people: [
      ["Bohdan cherche un meuble pour sa cuisine.", 4],
      ["Rachid veut apprendre a nager.", 3],
      ["Mila a cassé l'écran de son téléphone.", 5],
      ["Sofia cherche quelqu'un pour garder sa fille.", 2],
      ["Erjon veut se déplacer sans voiture.", 0],
      ["Leila cherche une chambre près de la gare.", 1],
    ],
  },
  {
    context: "Vous choisissez une information pratique pour des personnes qui viennent d'arriver.",
    docs: [
      ["Carte de séjour", "Administration", "Horaires et documents nécessaires pour renouveler un permis."],
      ["Assurance maladie", "Santé", "Explications simples pour comprendre les primes et les factures."],
      ["Cours de base", "Langue", "Français pour débutants, alphabet, lecture et situations courantes."],
      ["Transport public", "Bus et train", "Abonnements, réductions et horaires dans le canton."],
      ["Garderie", "Enfants", "Accueil des petits enfants pendant les jours de cours."],
      ["Dechetterie", "Tri", "Horaires pour jeter le papier, le verre et les objets encombrants."],
    ],
    people: [
      ["Yuliia veut comprendre ses factures médicales.", 1],
      ["Hassan cherche les horaires des bus.", 3],
      ["Mariam doit renouveler son permis.", 0],
      ["Aster veut apprendre a lire en français.", 2],
      ["Bilan veut jeter un vieux meuble.", 5],
      ["Noor cherche une place pour son enfant.", 4],
    ],
  },
  {
    context: "Dans une école, vous associez chaque document a la bonne demande.",
    docs: [
      ["Absence", "Secretariat", "Informer l'école quand un enfant est malade ou absent."],
      ["Cantine", "Repas", "Menus de la semaine, allergies et inscription aux repas de midi."],
      ["Sport scolaire", "Activité", "Horaires des entraînements et inscription aux tournois."],
      ["Bibliobus", "Lecture", "Passage du bus de livres devant l'école chaque mois."],
      ["Sortie de classe", "Excursion", "Programme, prix et autorisation a signer par les parents."],
      ["Cours d'appui", "Soutien", "Aide supplémentaire en mathématiques et en français."],
    ],
    people: [
      ["Le fils de Vera a besoin d'aide en maths.", 5],
      ["Amadou doit annoncer que sa fille est malade.", 0],
      ["Lina veut connaître le menu de midi.", 1],
      ["Mateo doit signer un papier pour une excursion.", 4],
      ["Irina veut emprunter des livres.", 3],
      ["Kemal veut participer a un tournoi.", 2],
    ],
  },
  {
    context: "Vous cherchez un commerce ou un service dans un quartier.",
    docs: [
      ["Boulangerie", "Pain frais", "Pain, croissants et sandwichs prepares chaque matin."],
      ["Laverie", "Lessive", "Machines a laver et séchoirs disponibles avec paiement par carte."],
      ["Cordonnier", "Chaussures", "Reparation de chaussures, sacs et fermetures éclair."],
      ["Salon de coiffure", "Cheveux", "Coupes pour femmes, hommes et enfants, avec ou sans rendez-vous."],
      ["Epicerie", "Alimentation", "Produits de base, fruits, légumes et articles de ménage."],
      ["Opticien", "Vue", "Controle de la vue, lunettes et lentilles de contact."],
    ],
    people: [
      ["Tariq a besoin de lunettes.", 5],
      ["Sara veut laver une couverture.", 1],
      ["Nino cherche du pain pour le petit-déjeuner.", 0],
      ["Olena doit reparer une fermeture éclair.", 2],
      ["Awa veut couper les cheveux de son fils.", 3],
      ["Eren veut acheter des fruits.", 4],
    ],
  },
  {
    context: "Vous choisissez l'annonce culturelle qui correspond a chaque personne.",
    docs: [
      ["Concert gratuit", "Musique", "Groupe local sur la place du village samedi soir."],
      ["Film en plein air", "Cinema", "Projection d'un film familial dans le parc."],
      ["Atelier peinture", "Creativite", "Apprendre a mélanger les couleurs et peindre un paysage."],
      ["Visite du musée", "Histoire", "Découverte guidee de la vie d'autrefois dans la région."],
      ["Spectacle enfants", "Theatre", "Piece courte et drole pour les familles."],
      ["Cafe lecture", "Livres", "Rencontre pour parler d'un roman facile."],
    ],
    people: [
      ["Lina veut voir une pièce avec ses enfants.", 4],
      ["Hugo aime discuter de romans.", 5],
      ["Narges veut écouter de la musique.", 0],
      ["Anton aime les films dehors.", 1],
      ["Meryem veut apprendre a peindre.", 2],
      ["Pavlo s'intéresse à l'histoire locale.", 3],
    ],
  },
  {
    context: "Vous choisissez la bonne information de transport.",
    docs: [
      ["Bus de nuit", "Retour tardif", "Lignes spéciales les vendredis et samedis après minuit."],
      ["Abonnement demi-tarif", "Reduction", "Billets de train moins chers pour les adultes."],
      ["Carte junior", "Enfants", "Les enfants voyagent avec un parent pour un prix réduit."],
      ["Train direct", "Rapide", "Liaison sans changement entre Lausanne et Sion."],
      ["Velostation", "Parking vélo", "Places surveillées pour laisser son vélo près de la gare."],
      ["Objets trouves", "Perdu", "Service pour rechercher un sac, une veste ou un téléphone oublié."],
    ],
    people: [
      ["Elias a oublié son sac dans le train.", 5],
      ["Rokhaya veut laisser son vélo en sécurité.", 4],
      ["Maksym voyage souvent et cherche une réduction.", 1],
      ["Nora rentre tard le samedi soir.", 0],
      ["Viktor veut aller a Sion sans changement.", 3],
      ["Samia voyage avec son enfant.", 2],
    ],
  },
  {
    context: "Dans un centre sportif, vous associez chaque personne a l'activité adaptee.",
    docs: [
      ["Fitness doux", "Debutants", "Exercices lents pour reprendre une activité physique."],
      ["Football", "Equipe", "Entrainement collectif deux fois par semaine."],
      ["Yoga", "Souplesse", "Cours calme pour respirer et se detendre."],
      ["Natation libre", "Piscine", "Acces aux bassins sans cours, selon les horaires publics."],
      ["Danse", "Musique", "Cours de danse moderne pour adultes."],
      ["Escalade", "Mur", "Initiation avec materiel fourni et moniteur."],
    ],
    people: [
      ["Ibrahim veut jouer dans une equipe.", 1],
      ["Daria veut se detendre calmement.", 2],
      ["Moussa veut essayer un mur d'escalade.", 5],
      ["Aicha aime bouger avec la musique.", 4],
      ["Tom veut nager sans suivre un cours.", 3],
      ["Mona reprend le sport doucement.", 0],
    ],
  },
  {
    context: "Vous lisez des informations de logement et choisissez la bonne rubrique.",
    docs: [
      ["Bail a loyer", "Contrat", "Informations sur la duree, le loyer et les obligations du locataire."],
      ["Etat des lieux", "Entree", "Controle de l'appartement avant de recevoir les cles."],
      ["Assurance ménage", "Protection", "Couverture en cas de degat d'eau, vol ou incendie."],
      ["Buanderie", "Lessive", "Planning pour utiliser les machines de l'immeuble."],
      ["Regie", "Contact", "Adresse et téléphone pour signaler un problème dans l'appartement."],
      ["Tri des déchets", "Immeuble", "Regles pour les sacs poubelle, le papier et le verre."],
    ],
    people: [
      ["Maria veut savoir quand laver son linge.", 3],
      ["Denys signale un radiateur cassé.", 4],
      ["Hodan veut comprendre son contrat.", 0],
      ["Yara entre dans son nouveau logement demain.", 1],
      ["Khaled cherche une assurance pour ses affaires.", 2],
      ["Rima veut savoir ou jeter le verre.", 5],
    ],
  },
];

const ORIENTATION_AVANCE: OrientationSeriesItem[] = ORIENTATION_MOYEN.map((item, index) => ({
  context: `${item.context} Lisez attentivement les nuances : plusieurs documents peuvent sembler proches.`,
  docs: item.docs.map(([title, subtitle, body], docIndex) => [
    title,
    subtitle,
    `${body} Les conditions, horaires ou publics concernes peuvent varier selon la situation ${index + 1}.${docIndex + 1}.`,
  ]),
  people: item.people.map(([person, answer], personIndex) => [
    `${person} Il faut tenir compte de la contrainte precise indiquee dans le document.`,
    (answer + (personIndex % 2 === 0 ? 0 : 0)) as number,
  ]),
}));

function makeEmailPool(level: CELevel): EmailSeriesItem[] {
  const scenarios = level === "avance"
    ? [
        ["secrétariat@formation.ch", "Changement d'horaire", "Bonjour,\nLe cours de préparation à l'examen de samedi est avancé à 8 h 45. Il aura lieu dans la salle 312, au troisième étage. Apportez votre pièce d'identité, un stylo bleu et les exercices terminés. Les personnes absentes devront envoyer un justificatif avant lundi midi.\nCordialement,\nLe secrétariat", "8 h 45", "salle 312", "pièce d'identité", "lundi midi"],
        ["logement@régie.ch", "Visite technique", "Madame, Monsieur,\nUn technicien passera mardi entre 14 h et 16 h pour contrôler les radiateurs. Si vous ne pouvez pas être présent, merci de laisser une clé chez un voisin et de nous envoyer son nom par courriel. Les travaux ne durent normalement pas plus de vingt minutes.\nMeilleures salutations,\nLa régie", "mardi", "radiateurs", "un voisin", "vingt minutes"],
        ["bibliothèque@ville.ch", "Livre réservé", "Bonjour,\nLe livre que vous avez réservé est disponible jusqu'au 18 juin. Vous pouvez le retirer à l'accueil pendant les horaires d'ouverture. Si vous ne venez pas avant cette date, la réservation sera annulée et le livre sera proposé à une autre personne.\nLa bibliothèque", "18 juin", "à l'accueil", "annulée", "livre"],
        ["musée@culture.ch", "Confirmation de visite", "Bonjour,\nVotre groupe est attendu vendredi à 13 h 50 devant l'entrée principale du musée. La visite guidée commencera à 14 h et durera une heure. Les sacs volumineux devront rester au vestiaire. Le paiement se fera à la caisse après la visite.\nAccueil du musée", "vendredi", "13 h 50", "vestiaire", "après la visite"],
        ["transport@cff.ch", "Objet retrouvé", "Bonjour,\nNous avons retrouvé un sac noir correspondant à votre description. Il se trouve au guichet des objets trouvés de Lausanne. Vous devez présenter une pièce d'identité et payer cinq francs de frais. Le guichet ferme à 18 h 30.\nCFF", "Lausanne", "sac noir", "cinq francs", "18 h 30"],
        ["école@classe.ch", "Réunion parents", "Bonjour,\nLa réunion des parents aura lieu jeudi prochain à 19 h dans la salle polyvalente. Nous parlerons du voyage scolaire, du budget et des règles de sécurité. Merci de confirmer votre présence avant mardi soir en répondant à ce message.\nLa direction", "jeudi prochain", "19 h", "voyage scolaire", "mardi soir"],
        ["club@natation.ch", "Inscription au cours", "Bonjour,\nVotre place au cours de natation débutant est confirmée. Le premier cours aura lieu le 3 septembre à 17 h 15. Prenez un maillot, un bonnet de bain et une serviette. Les vestiaires ouvrent quinze minutes avant le cours.\nLe club", "3 septembre", "17 h 15", "bonnet de bain", "quinze minutes"],
        ["commune@admin.ch", "Document manquant", "Bonjour,\nVotre dossier est presque complet, mais il manque une copie de votre assurance maladie. Vous pouvez l'envoyer par courriel ou la déposer au guichet jusqu'à vendredi 11 h. Sans ce document, le rendez-vous devra être reporté.\nCommune", "assurance maladie", "vendredi 11 h", "guichet", "reporté"],
        ["magasin@meubles.ch", "Livraison", "Bonjour,\nVotre armoire sera livrée mercredi matin entre 8 h et 11 h. Le livreur vous appellera trente minutes avant son arrivée. Merci de vérifier que l'ascenseur fonctionne et que le passage jusqu'à la chambre est libre.\nService livraison", "mercredi matin", "8 h et 11 h", "ascenseur", "trente minutes"],
        ["centre@emploi.ch", "Atelier CV", "Bonjour,\nVous êtes inscrit à l'atelier CV de lundi. La séance commence à 9 h précise dans la salle 4. Apportez vos certificats de travail et une annonce d'emploi qui vous intéresse. L'atelier est gratuit mais l'inscription est obligatoire.\nCentre emploi", "lundi", "salle 4", "certificats de travail", "gratuite"],
      ]
    : [
        ["école@cours.ch", "Cours de mardi", "Bonjour,\nLe cours de français de mardi commence à 10 h. Il aura lieu dans la salle 12. Apportez votre cahier et votre stylo. Si vous êtes absent, envoyez un message au professeur.\nMerci.", "10 h", "salle 12", "cahier", "professeur"],
        ["gare@cff.ch", "Billet trouvé", "Bonjour,\nVous avez oublié votre billet au guichet. Il est gardé à la gare de Sion jusqu'à vendredi. Venez avec une pièce d'identité. Le guichet ferme à 18 h.\nCFF", "Sion", "vendredi", "pièce d'identité", "18 h"],
        ["club@sport.ch", "Match samedi", "Salut,\nLe match de football a lieu samedi à 15 h. Le rendez-vous est devant la salle de sport à 14 h 30. Prenez vos chaussures et une bouteille d'eau.\nLe coach", "samedi", "15 h", "chaussures", "bouteille d'eau"],
        ["voisine@mail.ch", "Garde du chat", "Bonjour,\nJe pars deux jours à Genève. Peux-tu donner à manger à mon chat vendredi soir et samedi matin ? La clé est sous le pot de fleurs. Merci beaucoup.\nMina", "Genève", "chat", "vendredi soir", "sous le pot de fleurs"],
        ["bibliothèque@ville.ch", "Livre en retard", "Bonjour,\nVotre livre est en retard depuis lundi. Merci de le rapporter cette semaine à la bibliothèque. Vous pouvez aussi le déposer dans la boîte devant l'entrée.\nLa bibliothèque", "lundi", "cette semaine", "bibliothèque", "boîte"],
        ["dentiste@cabinet.ch", "Rendez-vous", "Bonjour,\nVotre rendez-vous chez le dentiste est jeudi à 8 h 30. Le cabinet se trouve rue du Rhône 14. Merci d'arriver dix minutes avant l'heure.\nCabinet dentaire", "jeudi", "8 h 30", "rue du Rhône 14", "dix minutes"],
        ["magasin@vélo.ch", "Réparation vélo", "Bonjour,\nVotre vélo est réparé. Vous pouvez venir le chercher demain après 13 h. Le prix est de 45 francs. Le magasin ferme à 18 h 30.\nVélo Plus", "demain", "13 h", "45 francs", "18 h 30"],
        ["centre@quartier.ch", "Atelier cuisine", "Bonjour,\nL'atelier cuisine aura lieu mercredi de 18 h à 20 h. Nous préparons une soupe et un dessert. Apportez une boîte pour emporter les restes.\nCentre de quartier", "mercredi", "18 h", "soupe", "boîte"],
        ["régie@immeuble.ch", "Buanderie", "Bonjour,\nLa buanderie sera fermée lundi matin pour nettoyage. Vous pourrez laver votre linge lundi après 14 h ou mardi toute la journée.\nLa régie", "lundi matin", "nettoyage", "14 h", "mardi"],
        ["ami@mail.ch", "Anniversaire", "Salut,\nJe fête mon anniversaire dimanche à midi au parc. Tu peux venir avec ta famille. Apporte une couverture si tu en as une. Il y aura des boissons et un gâteau.\nSamir", "dimanche", "midi", "parc", "couverture"],
      ];

  return scenarios.map(([from, subject, body, a, b, c, d]) => ({
    from,
    subject,
    body,
    questions: [
      { prompt: "Quelle information principale est donnée dans ce message ?", choices: [{ label: a }, { label: "Une information sans rapport" }, { label: "Une publicité" }], correct: 0 },
      { prompt: "Quel autre détail faut-il retenir ?", choices: [{ label: "Le document ne le dit pas" }, { label: b }, { label: "Une erreur de date" }], correct: 1 },
      { prompt: "Que faut-il apporter ou faire ?", choices: [{ label: c }, { label: "Ne rien faire" }, { label: "Téléphoner à la police" }], correct: 0 },
      { prompt: "Quel est le dernier détail important ?", choices: [{ label: "Le message est annule" }, { label: d }, { label: "La personne doit partir" }], correct: 1 },
      { prompt: "Qui envoie le message ?", answer: from.split("@")[0] ?? from },
      { prompt: "Quel est l'objet du message ?", answer: subject },
    ],
  }));
}

function makeInstructionPool(level: CELevel): InstructionSeriesItem[] {
  const sets = [
    [["Nettoyer une salle", "Passez le balai, videz les poubelles, puis fermez les fenetres avant de partir."], ["Preparer un rendez-vous", "Relisez le dossier, imprimez la feuille de presence et accueillez la personne a l'heure."], ["Utiliser une machine", "Branchez l'appareil, choisissez le programme court et attendez le signal de fin."]],
    [["Faire une demande", "Completez le formulaire, signez en bas de page et ajoutez une copie de votre permis."], ["Prendre un medicament", "Prenez un comprime après le repas du soir avec un grand verre d'eau."], ["Se rendre a un entretien", "Arrivez dix minutes avant l'heure, apportez votre CV et éteignez votre téléphone."]],
    [["Trier les déchets", "Mettez le papier dans le container bleu et le verre dans le container vert."], ["Preparer une sortie", "Verifiez la meteo, prenez une veste et gardez le numero du responsable."], ["Recevoir un colis", "Controlez le nom, signez le recu et gardez le colis au sec."]],
    [["Faire une infusion", "Chauffez l'eau, ajoutez les plantes, puis laissez reposer cinq minutes."], ["Accueillir un client", "Saluez le client, demandez son nom et proposez une chaise."], ["Fermer un local", "Eteignez les lumières, vérifiez les robinets et fermez la porte a cle."]],
    [["Suivre une recette", "Lavez les légumes, coupez-les en petits morceaux et faites cuire vingt minutes."], ["Utiliser la bibliothèque", "Presentez votre carte, scannez le livre et respectez la date de retour."], ["Changer un rendez-vous", "Appelez le secrétariat, proposez deux dates et notez la nouvelle heure."]],
    [["Organiser une classe", "Distribuez les feuilles, ecrivez la consigne au tableau et ramassez les cahiers."], ["Prendre le bus", "Achetez le billet avant de monter et validez-le dans le bus."], ["Aider a la cantine", "Servez les plats chauds, nettoyez les tables et rangez les plateaux."]],
    [["Faire une lessive", "Triez les vêtements, mettez la lessive et choisissez quarante degrés."], ["Participer a un cours", "Installez-vous, ouvrez le cahier et posez vos questions a la fin."], ["Rendre un document", "Ecrivez votre nom, vérifiez les pages et déposez le dossier au guichet."]],
    [["S'inscrire a une activité", "Choisissez le cours, notez votre téléphone et payez l'inscription."], ["Preparer un sac", "Mettez la gourde, le pique-nique et une veste de pluie."], ["Utiliser un ordinateur", "Allumez l'écran, entrez votre mot de passe et fermez la session après usage."]],
    [["Respecter la sécurité", "Portez les gants, restez derriere la ligne jaune et signalez tout problème."], ["Faire un achat", "Comparez les prix, gardez le ticket et vérifiez la monnaie."], ["Lire un horaire", "Cherchez la ligne, regardez le quai et controlez l'heure de départ."]],
    [["Preparer une reunion", "Reserve une salle, envoie l'ordre du jour et prépare les documents."], ["Demander une aide", "Expliquez votre situation, montrez les justificatifs et notez le prochain rendez-vous."], ["Faire un appel", "Presentez-vous, expliquez la raison de l'appel et notez la réponse."]],
  ];
  return sets.map((set, setIndex) =>
    set.map(([title, body], cardIndex) => ({
      title,
      image: `/expression/ce/instruction-${setIndex + 1}-${cardIndex + 1}.webp`,
      imageLabel: title,
      body: level === "avance" ? `${body} Respectez l'ordre exact des actions et reperez la condition importante.` : body,
      questions: [
        { prompt: "Quelle action est demandee ?", choices: [{ label: title }, { label: "Changer de sujet" }, { label: "Ignorer le document" }], correct: 0 },
        { prompt: "Que faut-il faire selon le texte ?", choices: [{ label: body.split(",")[0] ?? body }, { label: "Partir sans prevenir" }, { label: "Ne rien vérifier" }], correct: 0 },
      ],
    })),
  );
}

function makeArticlePool(level: CELevel): ArticleSeriesItem[] {
  const topics = [
    ["Bien dormir", "Le sommeil", "Couchez-vous a une heure régulière et évitez les écrans tard le soir.", "La chambre", "Une chambre calme et aeree aide a mieux se reposer.", "Le réveil", "Levez-vous doucement et buvez de l'eau."],
    ["Manger équilibre", "Les repas", "Variez les légumes, les céréales et les protéines pendant la semaine.", "Les boissons", "L'eau reste la meilleure boisson pour le corps.", "Les habitudes", "Mangez lentement et évitez de grignoter toute la journée."],
    ["Se déplacer en ville", "Les transports", "Le bus et le train permettent de voyager sans chercher de parking.", "Le vélo", "Le vélo est pratique pour les petits trajets.", "La sécurité", "Respectez les feux et restez visible le soir."],
    ["Chercher un emploi", "Le CV", "Un CV clair presente les experiences et les competences utiles.", "L'entretien", "Il faut arriver a l'heure et repondre calmement.", "Le suivi", "Après l'entretien, on peut envoyer un message de remerciement."],
    ["Gerer son budget", "Les depenses", "Notez les factures fixes avant de faire des achats.", "Les economies", "Mettez une petite somme de cote quand c&apos;est possible.", "Les priorites", "Payez d&apos;abord le logement, la nourriture et les assurances."],
    ["Proteger la nature", "Le tri", "Separez le papier, le verre et les déchets speciaux.", "L'eau", "Fermez le robinet quand vous n'utilisez pas l'eau.", "Les transports", "Marcher ou prendre le bus réduit la pollution."],
    ["Apprendre une langue", "La pratique", "Parlez un peu chaque jour, meme avec des phrases simples.", "La lecture", "Lire des textes courts aide a memoriser les mots.", "L'ecoute", "Ecoutez des dialogues pour comprendre la prononciation."],
    ["Vivre en immeuble", "Le bruit", "Evitez le bruit tard le soir et tot le matin.", "La buanderie", "Respectez le planning et laissez la machine propre.", "Les voisins", "Un bonjour et une discussion calme evitent beaucoup de problèmes."],
    ["Preparer un examen", "Le planning", "Divisez le travail en petites parties sur plusieurs jours.", "Les exercices", "Refaites les exercices difficiles et corrigez vos erreurs.", "Le jour J", "Dormez assez et arrivez avec le materiel necessaire."],
    ["Utiliser Internet", "Les mots de passe", "Choisissez un mot de passe long et different pour chaque compte.", "Les messages", "Ne cliquez pas sur un lien suspect.", "Les données", "Ne partagez pas vos informations personnelles avec n'importe qui."],
  ];

  return topics.map(([title, h1, b1, h2, b2, h3, b3], index) => ({
    title,
    sections: [
      { heading: h1, body: level === "avance" ? `${b1} Cette recommandation demande une organisation régulière.` : b1, image: `/expression/ce/article-${index + 1}-1.webp`, imageLabel: h1 },
      { heading: h2, body: level === "avance" ? `${b2} Elle complete les autres conseils du document.` : b2, image: `/expression/ce/article-${index + 1}-2.webp`, imageLabel: h2 },
      { heading: h3, body: level === "avance" ? `${b3} Cela permet d'éviter des difficultes dans la vie quotidienne.` : b3, image: `/expression/ce/article-${index + 1}-3.webp`, imageLabel: h3 },
    ],
    questions: [
      { prompt: "Quel est le sujet principal du texte ?", choices: [{ label: title }, { label: "Un voyage touristique" }, { label: "Une recette de cuisine" }], correct: 0 },
      { prompt: `Que dit la partie "${h1}" ?`, choices: [{ label: b1 }, { label: "Elle ne donne aucune information" }, { label: "Elle parle d'un autre sujet" }], correct: 0 },
      { prompt: `Quel mot complete le conseil sur "${h2}" ?`, answer: h2 },
      { prompt: `Que faut-il faire selon la partie "${h3}" ?`, choices: [{ label: b3 }, { label: "Arreter de lire" }, { label: "Ignorer les conseils" }], correct: 0 },
      { prompt: "A quoi sert ce texte ?", choices: [{ label: "Donner des conseils" }, { label: "Vendre une voiture" }, { label: "Annoncer un concert" }], correct: 0 },
      { prompt: "Combien de parties contient l'article ?", answer: "3", accept: ["trois"] },
      { prompt: "Quel titre convient le mieux ?", choices: [{ label: title }, { label: "Une histoire imaginaire" }, { label: "Un menu de restaurant" }], correct: 0 },
    ],
  }));
}

function expandSeries<T>(base: T[], count = 10): T[] {
  return Array.from({ length: count }, (_, i) => base[i % base.length]!);
}

function buildParts(level: CELevel, stamp = Date.now()): CEPart[] {
  const levelName = levelLabel(level).toLowerCase();
  const orientationPool = level === "base" ? expandSeries(ORIENTATION_TOPICS) : level === "moyen" ? ORIENTATION_MOYEN : ORIENTATION_AVANCE;
  const emailPool = level === "base" ? expandSeries(EMAIL_SERIES) : makeEmailPool(level);
  const instructionPool = level === "base" ? expandSeries(INSTRUCTION_SERIES) : makeInstructionPool(level);
  const articlePool = level === "base" ? expandSeries(ARTICLE_SERIES) : makeArticlePool(level);
  const orientation = pick(orientationPool, `${level}-${stamp}-orientation`);
  const email = pick(emailPool, `${level}-${stamp}-email`);
  const instructions = pick(instructionPool, `${level}-${stamp}-instructions`);
  const article = pick(articlePool, `${level}-${stamp}-article`);

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

function IntroPage({ level, onStart }: { level: CELevel; onStart: () => void }) {
  const introBullets: IntroBullet[] = [
    { strong: "4 exercices", text: " de compréhension écrite" },
    { strong: "45 minutes", text: " pour compléter l'évaluation" },
    { text: "Validez chaque exercice individuellement" },
    { text: "Vous pouvez naviguer librement en cliquant sur la barre de progression en haut." },
    { before: "Score maximum : ", strong: "25 points", text: "" },
  ];
  const introRows: IntroRow[] = [
    { num: "1", title: "Lire pour s'orienter", points: "6 pts" },
    { num: "2", title: "Lire une correspondance", points: "6 pts" },
    { num: "3", title: "Lire des instructions", points: "6 pts" },
    { num: "4", title: "Lire des informations", points: "7 pts" },
  ];

  return (
    <div className="space-y-6">
      <CEHeader level={level} title="Compréhension écrite" />
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
            className={`rounded-xl border px-3 py-2 text-left text-sm transition ${task.image ? "flex flex-col items-center gap-1 text-center" : "w-full"} ${correct ? "border-amber-400 bg-amber-50 text-amber-700" : selected ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]" : wrong ? "border-red-200 bg-red-50 text-red-600 line-through" : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"}`}
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
      <div className="overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white">
        <table className="w-full table-fixed border-collapse text-xs sm:text-sm">
          <colgroup>
            <col style={{ width: "52%" }} />
            {part.task.documents.map((_, index) => (
              <col key={index} style={{ width: `${48 / part.task.documents.length}%` }} />
            ))}
          </colgroup>
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-[var(--color-border-default)] p-2 text-left">Personnes</th>
              {part.task.documents.map((_, index) => <th key={index} className="border border-[var(--color-border-default)] px-1 py-2 text-center leading-tight">Doc.<br />{index + 1}</th>)}
            </tr>
          </thead>
          <tbody>
            {part.task.people.map((person, row) => (
              <tr key={person}>
                <td className="border border-[var(--color-border-default)] p-2">{String.fromCharCode(97 + row)}. {person}</td>
                {part.task.documents.map((_, col) => {
                  const key = questionKey(part, row);
                  const selected = answers[key] === col;
                  const correct = correction && part.task.answers[row] === col;
                  return (
                    <td key={col} className="border border-[var(--color-border-default)] p-2 text-center">
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
        <div key={card.title} className="rounded-xl border border-[var(--color-border-default)] bg-white p-4 shadow-sm">
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
  return (
    <div className="space-y-6">
      <CommunicationResultsSummary totalPoints={total} />
      <p className="text-center text-sm text-[var(--color-text-secondary)]">Cliquez sur un exercice pour voir la correction.</p>
      <div className="space-y-3">
        {parts.map((part, index) => {
          const score = scores[index] ?? 0;
          const isOpen = opened === part.id;
          return (
            <CommunicationResultsExercise
              key={part.id}
              index={index}
              title={part.title}
              scoreLabel={`${formatEvalPoints(score)} / ${part.points} :`}
              open={isOpen}
              onToggle={() => setOpened(isOpen ? null : part.id)}
            >
              <PartView part={part} answers={answers} setAnswer={() => {}} correction />
            </CommunicationResultsExercise>
          );
        })}
      </div>
    </div>
  );
}

export function ComprehensionEcritRunner({
  lessonId,
  mode = "module",
  placementSeed,
  onPlacementComplete,
}: { lessonId: string } & PlacementRunnerProps) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const [phase, setPhase] = useState<"intro" | "exercise" | "results">("intro");
  const [seed] = useState(() => placementSeed ?? Date.now());
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<CEAnswers>({});
  const [validatedIds, setValidatedIds] = useState<string[]>([]);
  const [openedResult, setOpenedResult] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const parts = useMemo(() => buildParts(level, seed), [level, seed]);
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

  const setAnswer = useCallback((key: string, value: number | string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
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

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-8 pb-28">
      {phase === "intro" && <IntroPage level={level} onStart={() => { setSecondsLeft(TOTAL_SECONDS); setPhase("exercise"); }} />}

      {phase === "exercise" && activeParts.length > 0 && (
        <div className="space-y-6">
          <CEHeader level={level} title="Compréhension écrite" />
          <div className="mb-5">
            <div className="mb-1.5 flex items-center justify-between">
              <p className="text-xs font-bold tabular-nums" style={{ color: INVERSE }}>{formatScore(currentScore)} / 25 pts</p>
              <div className="flex items-center gap-3">
                <span className="rounded-full px-2 py-0.5 text-xs font-bold tabular-nums" style={{ background: `color-mix(in srgb, ${INVERSE} 12%, white)`, color: INVERSE }}>
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
          <NavActionBar onBack={back} onValidate={validate} onNext={next} nextLabel="Suivant" />
        </div>
      )}

      {phase === "results" && (
        <div className="space-y-6">
          <CEHeader level={level} title="Résultats" />
          <ResultsPage parts={parts} answers={answers} opened={openedResult} setOpened={setOpenedResult} />
          <NavActionBar onNext={next} nextLabel={mode === "placement" ? "Étape suivante" : "Terminer"} />
          {mode !== "placement" && <CommunicationFinishButton onClick={next} />}
        </div>
      )}
    </div>
  );
}
