import type { VocabTheme } from "../../vocabulary-data";

export const V8_MEDECINS_THEME: VocabTheme = {
  slug: "v8-medecins",
  code: "V8.3",
  title: "Les médecins",
  section: "V8",
  words: [
    { word: "médecin", image: "medecin.jpg",            article: "le",  gender: "m", definition: "professionnel de santé généraliste" },
    { word: "infirmier", image: "infirmier.jpg",          article: "un",  gender: "m", feminine: "infirmière", definition: "professionnel de santé qui soigne les patients" },
    { word: "pharmacien", image: "pharmacien.jpg",         article: "un",  gender: "m", feminine: "pharmacienne", definition: "professionnel qui délivre les médicaments" },
    { word: "dentiste", image: "dentiste.jpg",           article: "le",  gender: "m", definition: "médecin spécialiste des dents" },
    { word: "ophtalmologue", image: "ophtalmologue.jpg",      article: "l'",  gender: "m", definition: "médecin spécialiste des yeux" },
    { word: "pédiatre", image: "pediatre.jpg",           article: "le",  gender: "m", definition: "médecin spécialiste des enfants" },
    { word: "chirurgien", image: "chirurgien.jpg",         article: "le",  gender: "m", definition: "médecin qui pratique des opérations" },
    { word: "spécialiste", image: "specialiste.jpg",        article: "le",  gender: "m", definition: "médecin expert dans un domaine" },
    { word: "urgentiste", image: "urgentiste.jpg",         article: "l'",  gender: "m", definition: "médecin des urgences" },
    { word: "kinésithérapeute", image: "kinesitherapeute.jpg",   article: "le",  gender: "m", definition: "professionnel en rééducation physique" },
    { word: "généraliste", image: "generaliste.jpg",        article: "le",  gender: "m", definition: "médecin de premier recours" },
    { word: "salle d'attente", image: "salle-d-attente.jpg",    article: "la",  gender: "f", definition: "endroit où l'on attend chez le médecin" },
    { word: "consultation", image: "consultation.jpg",       article: "la",  gender: "f", definition: "rendez-vous médical chez un praticien" },
    { word: "ordonnance", image: "ordonnance.jpg",         article: "l'",  gender: "f", definition: "document du médecin pour les médicaments" },
    { word: "rendez-vous", image: "rendez-vous.jpg",        article: "le",  gender: "m", definition: "heure fixée pour voir un médecin" },
  ],
  sentences: [
    { sentence: "Il a pris un ___ chez le médecin pour jeudi.",          answer: "rendez-vous" },
    { sentence: "Le ___ examine les yeux des patients.",                 answer: "ophtalmologue" },
    { sentence: "Elle attend dans la ___ d'attente du docteur.",         answer: "salle d'attente" },
    { sentence: "Le médecin écrit une ___ pour les médicaments.",        answer: "ordonnance" },
    { sentence: "L'___ soigne les enfants malades.",                     answer: "infirmier" },
  ],
};
