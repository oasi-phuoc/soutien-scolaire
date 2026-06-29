import type { PivotCode } from "@/lib/pivot-langs";

export type VocabWord = {
  word: string;
  article?: string;
  feminine?: string;
  relatedWords?: string[];
  image?: string;
  audio?: string;
  definition?: string | string[];
  definitionPivot?: Partial<Record<PivotCode, string | string[]>>;
  synonym?: string[];
  gender?: "m" | "f";
  group?: string;
  exampleSentences?: { a1?: string[]; a2?: string[]; b1?: string[] };
};

export type VocabSentence = {
  sentence: string;
  answer: string;
};

export type VocabTheoryBlock =
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "clocks"; items: Array<{ h: number; m: number; label?: string }>; cols?: number }
  | { type: "section"; title?: string; items: string[] }
  | { type: "note"; text: string };

export type VocabTheme = {
  slug: string;
  code: string;
  title: string;
  section: "A0" | "A1" | "A2" | "B1" | "B2" | "V1" | "V2" | "V3" | "V4" | "V5" | "V6" | "V7" | "V8" | "V9" | "V10";
  words: VocabWord[];
  sentences?: VocabSentence[];
  theory?: VocabTheoryBlock[];
  cardLayout?: "mf";
  imageFolder?: string;
};

import { V1_NATIONALITES_THEME } from "./content/francais/vocab-v1-nationalites";
import { V1_PROFESSIONS_THEME } from "./content/francais/vocab-v1-professions";
import { V1_FAMILLE_THEME } from "./content/francais/vocab-v1-famille";
import { V1_ETAT_CIVIL_THEME } from "./content/francais/vocab-v1-etat-civil";
import { V1_DESCRIPTION_PHYSIQUE_THEME } from "./content/francais/vocab-v1-description-physique";
import { V1_DESCRIPTION_MORALE_THEME } from "./content/francais/vocab-v1-description-morale";
import { V2_JOURS_MOIS_DATES_THEME } from "./content/francais/vocab-v2-jours-mois-dates";
import { V2_HEURE_THEME } from "./content/francais/vocab-v2-heure";
import { V2_SAISONS_THEME } from "./content/francais/vocab-v2-saisons";
import { V2_METEO_THEME } from "./content/francais/vocab-v2-meteo";
import { V3_SPORT_THEME } from "./content/francais/vocab-v3-sport";
import { V4_TYPE_LOGEMENT_THEME } from "./content/francais/vocab-v4-type-logement";
import { V4_PIECES_MAISON_THEME } from "./content/francais/vocab-v4-pieces-maison";
import { V4_PANNES_THEME } from "./content/francais/vocab-v4-pannes";
import { V4_EQUIPEMENTS_THEME } from "./content/francais/vocab-v4-equipements";
import { V4_APPAREILS_ELECTROMENAGERS_THEME } from "./content/francais/vocab-v4-appareils-electromenagers";
import { V5_MATIERES_THEME } from "./content/francais/vocab-v5-matieres";
import { V5_MATERIEL_SCOLAIRE_THEME } from "./content/francais/vocab-v5-materiel-scolaire";
import { V5_STRUCTURE_ECOLE_THEME } from "./content/francais/vocab-v5-structure-ecole";
import { V6_VETEMENTS_THEME } from "./content/francais/vocab-v6-vetements";
import { V6_ACCESSOIRES_THEME } from "./content/francais/vocab-v6-accessoires";
import { V6_COULEURS_THEME } from "./content/francais/vocab-v6-couleurs";
import { V6_MATIERES_THEME } from "./content/francais/vocab-v6-matieres";
import { V7_FRUITS_THEME } from "./content/francais/vocab-v7-fruits";
import { V7_LEGUMES_THEME } from "./content/francais/vocab-v7-legumes";
import { V7_RESTAURANT_THEME } from "./content/francais/vocab-v7-restaurant";
import { V7_BOULANGERIE_THEME } from "./content/francais/vocab-v7-boulangerie";
import { V7_CUISINE_THEME } from "./content/francais/vocab-v7-cuisine";
import { V7_RECETTES_THEME } from "./content/francais/vocab-v7-recettes";
import { V7_QUANTITES_THEME } from "./content/francais/vocab-v7-quantites";
import { V8_CORPS_THEME } from "./content/francais/vocab-v8-corps";
import { V8_MALADIES_THEME } from "./content/francais/vocab-v8-maladies";
import { V8_MEDECINS_THEME } from "./content/francais/vocab-v8-medecins";
import { V8_PHARMACIE_THEME } from "./content/francais/vocab-v8-pharmacie";
import { V9_VILLE_THEME } from "./content/francais/vocab-v9-ville";
import { V9_TRANSPORT_THEME } from "./content/francais/vocab-v9-transport";
import { V9_DIRECTION_THEME } from "./content/francais/vocab-v9-direction";
import { V9_ESPACE_CULTUREL_THEME } from "./content/francais/vocab-v9-espace-culturel";
import { V9_TRAIN_THEME } from "./content/francais/vocab-v9-train";
import { V9_AEROPORT_THEME } from "./content/francais/vocab-v9-aeroport";
import { V9_HOTEL_THEME } from "./content/francais/vocab-v9-hotel";
import { V9_PAYSAGE_THEME } from "./content/francais/vocab-v9-paysage";

function movedTheme(theme: VocabTheme, section: VocabTheme["section"], code: string, title?: string): VocabTheme {
  return { ...theme, section, code, title: title ?? theme.title };
}

export const VOCAB_THEMES: VocabTheme[] = [
  V1_NATIONALITES_THEME,
  V1_PROFESSIONS_THEME,
  V1_FAMILLE_THEME,
  V1_ETAT_CIVIL_THEME,
  V1_DESCRIPTION_PHYSIQUE_THEME,
  V1_DESCRIPTION_MORALE_THEME,
  V2_JOURS_MOIS_DATES_THEME,
  V2_HEURE_THEME,
  V2_SAISONS_THEME,
  V2_METEO_THEME,
  V3_SPORT_THEME,
  V4_TYPE_LOGEMENT_THEME,
  V4_PIECES_MAISON_THEME,
  V4_EQUIPEMENTS_THEME,
  V4_APPAREILS_ELECTROMENAGERS_THEME,
  V4_PANNES_THEME,
  V5_MATIERES_THEME,
  V5_MATERIEL_SCOLAIRE_THEME,
  V5_STRUCTURE_ECOLE_THEME,
  V6_VETEMENTS_THEME,
  V6_ACCESSOIRES_THEME,
  V6_COULEURS_THEME,
  V6_MATIERES_THEME,
  V7_FRUITS_THEME,
  V7_LEGUMES_THEME,
  movedTheme(V7_CUISINE_THEME, "V7", "V7.3"),
  movedTheme(V7_RECETTES_THEME, "V7", "V7.4"),
  movedTheme(V7_QUANTITES_THEME, "V7", "V7.5"),
  V8_CORPS_THEME,
  V8_MALADIES_THEME,
  V8_MEDECINS_THEME,
  V8_PHARMACIE_THEME,
  V9_VILLE_THEME,
  V9_TRANSPORT_THEME,
  V9_DIRECTION_THEME,
  V9_ESPACE_CULTUREL_THEME,
  movedTheme(V9_PAYSAGE_THEME, "V9", "V9.5"),
  movedTheme(V7_RESTAURANT_THEME, "V10", "V10.1"),
  movedTheme(V7_BOULANGERIE_THEME, "V10", "V10.2"),
  movedTheme(V9_TRAIN_THEME, "V10", "V10.3", "La gare"),
  movedTheme(V9_AEROPORT_THEME, "V10", "V10.4"),
  movedTheme(V9_HOTEL_THEME, "V10", "V10.5"),
];

export function getVocabTheme(slug: string): VocabTheme | undefined {
  return VOCAB_THEMES.find((t) => t.slug === slug);
}
