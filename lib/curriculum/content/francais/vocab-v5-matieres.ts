import type { VocabTheme } from "../../vocabulary-data";

export const V5_MATIERES_THEME: VocabTheme = {
  slug: "v5-matieres",
  code: "V5.1",
  title: "Les matières scolaires",
  section: "V5",
  words: [
    { word: "français", image: "francais.png",        article: "le",  gender: "m", definition: "matière sur la langue française" },
    { word: "mathématiques", image: "mathematiques.png",   article: "les", gender: "f", definition: "matière sur les chiffres et calculs" },
    { word: "histoire", image: "histoire.png",        article: "l'",  gender: "f", definition: "matière sur les événements du passé" },
    { word: "géographie", image: "geographie.png",      article: "la",  gender: "f", definition: "matière sur les pays et les paysages" },
    { word: "sport", image: "sport.png",           article: "le",  gender: "m", definition: "matière d'éducation physique" },
    { word: "musique", image: "musique.png",         article: "la",  gender: "f", definition: "matière sur le chant et les instruments" },
    { word: "art", image: "art.png",             article: "l'",  gender: "m", definition: "matière sur le dessin et la peinture" },
    { word: "informatique", image: "informatique.png",    article: "l'",  gender: "f", definition: "matière sur les ordinateurs et le numérique" },
    { word: "biologie", image: "biologie.png",        article: "la",  gender: "f", definition: "matière sur les êtres vivants" },
    { word: "physique", image: "physique.png",        article: "la",  gender: "f", definition: "matière sur la matière et l'énergie" },
    { word: "chimie", image: "chimie.png",          article: "la",  gender: "f", definition: "matière sur les substances et réactions" },
  ],
  sentences: [
    { sentence: "J'aime les ___ parce que j'adore calculer.",            answer: "mathématiques" },
    { sentence: "En ___, on apprend des événements de l'Antiquité.",     answer: "histoire" },
    { sentence: "Le cours de ___ se passe dans la salle informatique.",  answer: "informatique" },
    { sentence: "En ___, on étudie les plantes et les animaux.",         answer: "biologie" },
    { sentence: "La ___ aide à bien parler et écrire en France.",        answer: "géographie" },
  ],
};
