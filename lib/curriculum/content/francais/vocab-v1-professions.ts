import type { VocabTheme } from "../../vocabulary-data";

export const V1_PROFESSIONS_THEME: VocabTheme = {
  slug: "v1-professions",
  code: "V1.2",
  title: "Les professions",
  section: "V1",
  cardLayout: "mf",
  words: [
    { word: "étudiant",     article: "un",  gender: "m", feminine: "étudiante",      definition: "personne qui fait des études" },
    { word: "professeur",   article: "le",  gender: "m", feminine: "professeure",   definition: "personne qui enseigne" },
    { word: "médecin",      article: "le",  gender: "m",                             definition: "spécialiste de la santé" },
    { word: "infirmier",    article: "un",  gender: "m", feminine: "infirmière",     definition: "soignant en milieu médical" },
    { word: "avocat",       article: "un",  gender: "m", feminine: "avocate",        definition: "professionnel du droit" },
    { word: "boulanger",    article: "un",  gender: "m", feminine: "boulangère",     definition: "fabricant et vendeur de pain" },
    { word: "chauffeur",    article: "un",  gender: "m", feminine: "chauffeuse",     definition: "conducteur professionnel" },
    { word: "vendeur",      article: "un",  gender: "m", feminine: "vendeuse",       definition: "personne qui vend des produits" },
    { word: "cuisinier",    article: "un",  gender: "m", feminine: "cuisinière",     definition: "personne qui prépare les repas" },
    { word: "architecte",   article: "un",  gender: "m",                             definition: "concepteur de bâtiments" },
    { word: "ingénieur",    article: "un",  gender: "m", feminine: "ingénieure",     definition: "technicien spécialisé" },
    { word: "pharmacien",   article: "un",  gender: "m", feminine: "pharmacienne",   definition: "professionnel de la pharmacie" },
    { word: "policier",     article: "un",  gender: "m", feminine: "policière",      definition: "agent des forces de l'ordre" },
    { word: "secrétaire",   article: "un",  gender: "m",                             definition: "assistant administratif" },
    { word: "artiste",      article: "un",  gender: "m",                             definition: "personne qui pratique un art" },
  ],
  sentences: [
    { sentence: "Il est ___, il travaille dans une école.",         answer: "professeur" },
    { sentence: "Mon père est ___, il répare des voitures.",        answer: "chauffeur" },
    { sentence: "Elle veut devenir ___ pour soigner les malades.",  answer: "médecin" },
    { sentence: "Je suis ___, j'étudie à l'université.",            answer: "étudiant" },
    { sentence: "Il est ___ dans une boulangerie du quartier.",     answer: "boulanger" },
  ],
};
