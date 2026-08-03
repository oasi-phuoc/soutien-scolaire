import type { CommunicationLesson } from "./content/communication/express-types";

export type { CommunicationLesson };

export type CommunicationSubmodule = {
  id: string; // "E1-1"
  code: string; // "E1.1"
  title: string;
  available: boolean;
  lessonId?: string;
  /** Slugs français (vocab / conj) requis avant d'ouvrir la leçon. */
  prerequisiteFrenchSlugs?: string[];
  /** Leçons d'expression orale (ids) requises avant de débloquer. */
  prerequisiteCommIds?: string[];
};

export type CommunicationModule = {
  id: string; // "E1"
  level: string; // "E1"
  title: string;
  description: string;
  submodules: CommunicationSubmodule[];
};

function s(
  id: string,
  code: string,
  title: string,
  opts?: {
    french?: string[];
    comm?: string[];
    available?: boolean;
  },
): CommunicationSubmodule {
  return {
    id,
    code,
    title,
    available: opts?.available ?? true,
    lessonId: id,
    prerequisiteFrenchSlugs: opts?.french,
    prerequisiteCommIds: opts?.comm,
  };
}

export const COMM_MODULES: CommunicationModule[] = [
  {
    id: "E1",
    level: "E1",
    title: "Faire connaissance",
    description: "Se présenter, parler de sa famille, inviter",
    submodules: [
      { id: "E1-0", code: "E1.0", title: "Conversation IA", available: false },
      s("E1-1", "E1.1", "Se présenter", {
        french: ["a1-conj-l00", "a1-conj-l01", "v1-nationalites", "v1-professions"],
      }),
      s("E1-2", "E1.2", "Parler de sa famille", {
        french: ["v1-famille", "v1-etat-civil", "a1-gr-l19"],
        comm: ["E1-1"],
      }),
      s("E1-3", "E1.3", "Inviter à une fête", {
        french: ["v2-jours-mois-dates", "v2-heure", "a1-conj-l07", "a1-gr-negation-ne-pas"],
        comm: ["E1-2"],
      }),
    ],
  },
  {
    id: "E2",
    level: "E2",
    title: "Se loger",
    description: "Logement, pannes et règlement",
    submodules: [
      s("E2-1", "E2.1", "Décrire son logement", {
        french: ["v4-type-logement", "v4-pieces-maison", "v4-equipements", "a1-gr-l04"],
        comm: ["E1-3"],
      }),
      s("E2-2", "E2.2", "Avoir un problème domestique", {
        french: ["v4-appareils-electromenagers", "v4-pannes", "a1-conj-l08", "a1-conj-l15"],
        comm: ["E2-1"],
      }),
      s("E2-3", "E2.3", "Respecter le règlement", {
        french: ["v5-structure-ecole", "a2-conj-l05"],
        comm: ["E2-2"],
      }),
    ],
  },
  {
    id: "E3",
    level: "E3",
    title: "Organiser sa journée",
    description: "École, quotidien et travail",
    submodules: [
      s("E3-1", "E3.1", "Aller à l'école", {
        french: ["v5-matieres", "v5-materiel-scolaire", "a1-gr-l10"],
        comm: ["E2-3"],
      }),
      s("E3-2", "E3.2", "Décrire son quotidien", {
        french: ["v2-saisons", "v2-meteo", "a1-conj-l09"],
        comm: ["E3-1"],
      }),
      s("E3-3", "E3.3", "Aller au travail", {
        french: ["v1-description-morale", "a1-gr-genre-adjectifs"],
        comm: ["E3-2"],
      }),
    ],
  },
  {
    id: "E4",
    level: "E4",
    title: "Consommer",
    description: "Achats, restaurant et boulangerie",
    submodules: [
      s("E4-1", "E4.1", "Acheter des vêtements", {
        french: ["v6-vetements", "v6-accessoires", "v6-couleurs", "v6-matieres", "a2-conj-l04"],
        comm: ["E3-3"],
      }),
      s("E4-2", "E4.2", "Aller au restaurant", {
        french: ["v7-restaurant", "a1-gr-l14", "a1-gr-l02"],
        comm: ["E4-1"],
      }),
      s("E4-3", "E4.3", "Aller à la boulangerie", {
        french: ["v7-recettes", "v7-quantites", "v7-boulangerie"],
        comm: ["E4-2"],
      }),
    ],
  },
  {
    id: "E5",
    level: "E5",
    title: "Se soigner",
    description: "Médecin et pharmacie",
    submodules: [
      s("E5-1", "E5.1", "Aller chez le médecin", {
        french: ["v8-corps", "v8-maladies", "v8-medecins", "a1-gr-l11"],
        comm: ["E4-3"],
      }),
      s("E5-2", "E5.2", "Aller à la pharmacie", {
        french: ["v8-pharmacie", "a1-conj-l15"],
        comm: ["E5-1"],
      }),
    ],
  },
  {
    id: "E6",
    level: "E6",
    title: "Se déplacer",
    description: "Itinéraire, transports et aéroport",
    submodules: [
      s("E6-1", "E6.1", "Demander son chemin", {
        french: ["v9-ville", "v9-direction", "a1-conj-l08"],
        comm: ["E5-2"],
      }),
      s("E6-2", "E6.2", "Voyager en transport public", {
        french: ["v9-transport", "a1-gr-l10"],
        comm: ["E6-1"],
      }),
      s("E6-3", "E6.3", "Aller à l'aéroport", {
        french: ["v9-aeroport", "a1-gr-l11"],
        comm: ["E6-2"],
      }),
    ],
  },
  {
    id: "E7",
    level: "E7",
    title: "Se distraire",
    description: "Hôtel, sport et culture",
    submodules: [
      s("E7-1", "E7.1", "Aller à l'hôtel", {
        french: ["v9-hotel", "v9-paysage", "a1-gr-l11"],
        comm: ["E6-3"],
      }),
      s("E7-2", "E7.2", "Pratiquer une activité sportive", {
        french: ["v3-sport", "a1-gr-l14"],
        comm: ["E7-1"],
      }),
      s("E7-3", "E7.3", "Visiter des lieux culturels", {
        french: ["v9-espace-culturel", "a1-gr-l18"],
        comm: ["E7-2"],
      }),
    ],
  },
  {
    id: "E8",
    level: "E8",
    title: "Bilan A1",
    description: "Évaluation récapitulative A1",
    submodules: [s("E8-1", "E8.1", "Bilan A1", { comm: ["E7-3"] })],
  },
  {
    id: "E9",
    level: "E9",
    title: "La vie quotidienne",
    description: "Achats, déplacements, logement, démarches, actualité",
    submodules: [
      s("E9-1", "E9.1", "Faire des achats", {
        french: ["a1-gr-l23"],
        comm: ["E8-1"],
      }),
      s("E9-2", "E9.2", "Se déplacer", {
        french: ["a1-conj-l28"],
        comm: ["E9-1"],
      }),
      s("E9-3", "E9.3", "Chercher un logement", {
        french: ["a1-conj-l20"],
        comm: ["E9-2"],
      }),
      s("E9-4", "E9.4", "Faire des démarches administratives", {
        french: ["a1-conj-l29"],
        comm: ["E9-3"],
      }),
      s("E9-5", "E9.5", "S'informer sur l'actualité", {
        french: ["a1-conj-l30"],
        comm: ["E9-4"],
      }),
    ],
  },
  {
    id: "E10",
    level: "E10",
    title: "La vie sociale",
    description: "Invitations, rencontres, événements, école, associations",
    submodules: [
      s("E10-1", "E10.1", "Inviter et être invité", {
        french: ["a2-gr-l07"],
        comm: ["E9-5"],
      }),
      s("E10-2", "E10.2", "Faire des rencontres", {
        french: ["a2-gr-l36"],
        comm: ["E10-1"],
      }),
      s("E10-3", "E10.3", "Organiser un événement", {
        french: ["a2-conj-l08"],
        comm: ["E10-2"],
      }),
      s("E10-4", "E10.4", "Participer à la vie scolaire", {
        french: ["a2-gr-l19"],
        comm: ["E10-3"],
      }),
      s("E10-5", "E10.5", "Participer à la vie associative", {
        french: ["a1-gr-pronominaux-passe-compose"],
        comm: ["E10-4"],
      }),
    ],
  },
  {
    id: "E11",
    level: "E11",
    title: "Les loisirs et les vacances",
    description: "Cuisine, activités, goûts et vacances",
    submodules: [
      s("E11-1", "E11.1", "Apprécier la cuisine", {
        french: ["gr-marqueurs-temps-complet"],
        comm: ["E10-5"],
      }),
      s("E11-2", "E11.2", "Pratiquer une activité", {
        french: ["a2-gr-l35"],
        comm: ["E11-1"],
      }),
      s("E11-3", "E11.3", "Partager ses goûts", {
        french: ["a2-gr-l35"],
        comm: ["E11-2"],
      }),
      s("E11-4", "E11.4", "Passer des vacances", {
        french: ["a2-gr-hypothese-futur"],
        comm: ["E11-3"],
      }),
    ],
  },
  {
    id: "E12",
    level: "E12",
    title: "La santé et le bien-être",
    description: "Santé, sport, alimentation, ville et soin de soi",
    submodules: [
      s("E12-1", "E12.1", "S'occuper de sa santé", {
        french: ["a2-gr-subjonctif"],
        comm: ["E11-4"],
      }),
      s("E12-2", "E12.2", "Faire du sport", {
        french: ["a2-conj-l07"],
        comm: ["E12-1"],
      }),
      s("E12-3", "E12.3", "Manger équilibré", {
        french: ["a2-gr-l52"],
        comm: ["E12-2"],
      }),
      s("E12-4", "E12.4", "Vivre en ville", {
        french: ["a2-gr-l39"],
        comm: ["E12-3"],
      }),
      s("E12-5", "E12.5", "Prendre soin de soi", {
        french: ["a2-gr-l52"],
        comm: ["E12-4"],
      }),
    ],
  },
  {
    id: "E13",
    level: "E13",
    title: "Les études et le travail",
    description: "Formation, stage, emploi et entreprise",
    submodules: [
      s("E13-1", "E13.1", "Suivre une formation", {
        french: ["a2-gr-l36"],
        comm: ["E12-5"],
      }),
      s("E13-2", "E13.2", "Trouver un stage", {
        french: ["a2-gr-l42"],
        comm: ["E13-1"],
      }),
      s("E13-3", "E13.3", "Répondre à une offre d'emploi", {
        french: ["a2-gr-l52"],
        comm: ["E13-2"],
      }),
      s("E13-4", "E13.4", "Passer un entretien", {
        french: ["a2-gr-l07"],
        comm: ["E13-3"],
      }),
      s("E13-5", "E13.5", "S'intégrer à l'entreprise", {
        french: ["a2-gr-l52"],
        comm: ["E13-4"],
      }),
    ],
  },
  {
    id: "E14",
    level: "E14",
    title: "Bilan A2",
    description: "Évaluation récapitulative A2",
    submodules: [s("E14-1", "E14.1", "Bilan A2", { comm: ["E13-5"] })],
  },
];

const LEGACY_COMM_IDS: Record<string, string> = {
  "P1-0": "E1-0",
  "P1-1": "E1-1",
  "P1-2": "E1-2",
  "P1-3": "E1-3",
  "P1-4": "E1-4",
  "P1-5": "E1-5",
  "P2-1": "E2-1",
  "P2-2": "E2-2",
  "P2-3": "E2-3",
  "P2-4": "E2-4",
  "P2-5": "E2-5",
  "P3-1": "E3-1",
  "P3-2": "E3-2",
  "P3-3": "E3-3",
  "P3-4": "E3-4",
  "AI-1": "E1-0",
};

export function normalizeCommunicationProgress(progress: Record<string, boolean>): Record<string, boolean> {
  const normalized = { ...progress };
  for (const [legacyId, expressionId] of Object.entries(LEGACY_COMM_IDS)) {
    if (progress[legacyId]) normalized[expressionId] = true;
  }
  return normalized;
}

export function getCommModule(id: string): CommunicationModule | undefined {
  return COMM_MODULES.find((m) => m.id === id);
}
