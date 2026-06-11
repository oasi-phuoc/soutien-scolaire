import type { VocabTheme } from "../../vocabulary-data";

export const V8_MEDECINS_THEME: VocabTheme = {
  slug: "v8-medecins",
  code: "V8.3",
  title: "Les médecins",
  section: "V8",
  words: [
    { word: "médecin",          article: "le",  gender: "m", definition: "professionnel de santé généraliste" },
    { word: "infirmier",        article: "un",  gender: "m", feminine: "infirmière", definition: "professionnel de santé qui soigne les patients" },
    { word: "pharmacien",       article: "un",  gender: "m", feminine: "pharmacienne", definition: "professionnel qui délivre les médicaments" },
    { word: "dentiste",         article: "le",  gender: "m", definition: "médecin spécialiste des dents" },
    { word: "ophtalmologue",    article: "l'",  gender: "m", definition: "médecin spécialiste des yeux" },
    { word: "pédiatre",         article: "le",  gender: "m", definition: "médecin spécialiste des enfants" },
    { word: "chirurgien",       article: "le",  gender: "m", definition: "médecin qui pratique des opérations" },
    { word: "spécialiste",      article: "le",  gender: "m", definition: "médecin expert dans un domaine" },
    { word: "urgentiste",       article: "l'",  gender: "m", definition: "médecin des urgences" },
    { word: "kinésithérapeute", article: "le",  gender: "m", definition: "professionnel en rééducation physique" },
    { word: "généraliste",      article: "le",  gender: "m", definition: "médecin de premier recours" },
    { word: "salle d'attente",  article: "la",  gender: "f", definition: "endroit où l'on attend chez le médecin" },
    { word: "consultation",     article: "la",  gender: "f", definition: "rendez-vous médical chez un praticien" },
    { word: "ordonnance",       article: "l'",  gender: "f", definition: "document du médecin pour les médicaments" },
    { word: "rendez-vous",      article: "le",  gender: "m", definition: "heure fixée pour voir un médecin" },
  ],
  sentences: [
    { sentence: "Il a pris un ___ chez le médecin pour jeudi.",          answer: "rendez-vous" },
    { sentence: "Le ___ examine les yeux des patients.",                 answer: "ophtalmologue" },
    { sentence: "Elle attend dans la ___ d'attente du docteur.",         answer: "salle d'attente" },
    { sentence: "Le médecin écrit une ___ pour les médicaments.",        answer: "ordonnance" },
    { sentence: "L'___ soigne les enfants malades.",                     answer: "infirmier" },
  ],
};
