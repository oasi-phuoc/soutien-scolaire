// BRTA (Batterie Romande de Tests d'Aptitudes) — Types et interfaces

export type BrtaDomain = "reasoning" | "verbal" | "numeric" | "spatial" | "attention" | "memory";

export type BrtaAnswerOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type BrtaQuestion = {
  id: string;
  domain: BrtaDomain;
  order: number;
  title: string;
  instruction: string;
  timeLimit?: number; // en secondes, optionnel pour certains domaines
  options: BrtaAnswerOption[];
};

export type BrtaDomainInfo = {
  domain: BrtaDomain;
  label: string;
  description: string;
  icon: string; // emoji ou classe d'icône
  color: string; // couleur sémantique Tailwind
  questionCount: number;
  timeEstimate: number; // en minutes
};

export type BrtaSessionAnswer = {
  questionId: string;
  domain: BrtaDomain;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpent: number; // en secondes
};

export type BrtaScore = {
  domain: BrtaDomain;
  correct: number;
  total: number;
  percent: number;
  normalized?: number; // score normalisé 0-100 par domaine
};

export type BrtaSession = {
  id: string;
  date: string;
  answers: BrtaSessionAnswer[];
  scores: BrtaScore[];
  overallScore: number; // moyenne normalisée de tous les domaines
  duration: number; // en secondes
  status: "in_progress" | "complete";
};

export type BrtaDraft = {
  sessionId: string;
  seed: number;
  step: BrtaDomain | "intro" | "results";
  currentQuestionIndex: number;
  answers: BrtaSessionAnswer[];
  scores: BrtaScore[];
  startedAt: number; // timestamp en ms
  updatedAt: string;
};

export type BrtaResult = {
  session: BrtaSession;
  profile: {
    strengths: BrtaDomain[];
    areasForImprovement: BrtaDomain[];
    overallProfile: string;
    recommendations: string[];
  };
};

export const BRTA_DOMAINS: Record<BrtaDomain, BrtaDomainInfo> = {
  reasoning: {
    domain: "reasoning",
    label: "Raisonnement logique",
    description: "Capacité à analyser des patterns et déduire des règles",
    icon: "01",
    color: "blue",
    questionCount: 8,
    timeEstimate: 10,
  },
  verbal: {
    domain: "verbal",
    label: "Compétences verbales",
    description: "Vocabulaire, compréhension et expression écrite",
    icon: "02",
    color: "purple",
    questionCount: 8,
    timeEstimate: 8,
  },
  numeric: {
    domain: "numeric",
    label: "Aptitude numérique",
    description: "Calculs, raisonnement mathématique et statistiques",
    icon: "03",
    color: "emerald",
    questionCount: 8,
    timeEstimate: 10,
  },
  spatial: {
    domain: "spatial",
    label: "Visualisation spatiale",
    description: "Représentation mentale d'objets en 3D et rotations",
    icon: "04",
    color: "amber",
    questionCount: 6,
    timeEstimate: 8,
  },
  attention: {
    domain: "attention",
    label: "Attention et concentration",
    description: "Capacité à maintenir la concentration et détecter les détails",
    icon: "05",
    color: "red",
    questionCount: 8,
    timeEstimate: 6,
  },
  memory: {
    domain: "memory",
    label: "Mémoire de travail",
    description: "Capacité à retenir et manipuler l'information temporairement",
    icon: "06",
    color: "cyan",
    questionCount: 8,
    timeEstimate: 8,
  },
};

export const BRTA_DOMAIN_ORDER: BrtaDomain[] = [
  "reasoning",
  "verbal",
  "numeric",
  "spatial",
  "attention",
  "memory",
];
