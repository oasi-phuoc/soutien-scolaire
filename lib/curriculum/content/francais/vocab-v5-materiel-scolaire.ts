import type { VocabTheme } from "../../vocabulary-data";

export const V5_MATERIEL_SCOLAIRE_THEME: VocabTheme = {
  slug: "v5-materiel-scolaire",
  code: "V5.2",
  title: "Le matériel scolaire",
  section: "V5",
  words: [
    { word: "cahier", image: "cahier.png",        article: "le",  gender: "m", definition: "carnet de feuilles pour écrire" },
    { word: "livre",                              article: "le",  gender: "m", definition: "ouvrage imprimé relié" },
    { word: "stylo", image: "stylo.png",         article: "le",  gender: "m", definition: "instrument pour écrire à l'encre" },
    { word: "crayon",                             article: "le",  gender: "m", definition: "instrument pour écrire et dessiner" },
    { word: "gomme", image: "gomme.png",         article: "la",  gender: "f", definition: "outil pour effacer le crayon" },
    { word: "règle", image: "regle.png",         article: "la",  gender: "f", definition: "outil pour tracer des lignes droites" },
    { word: "trousse", image: "trousse.png",       article: "la",  gender: "f", definition: "pochette pour ranger les stylos" },
    { word: "sac", image: "sac-a-dos.png",       article: "le",  gender: "m", definition: "sac pour porter les affaires scolaires" },
    { word: "classeur", image: "classeur.png",      article: "le",  gender: "m", definition: "pochette rigide pour classer des feuilles" },
    { word: "feuille", image: "feuille.png",       article: "la",  gender: "f", definition: "page de papier pour écrire" },
    { word: "tableau",                             article: "le",  gender: "m", definition: "surface noire ou blanche pour écrire en classe" },
    { word: "taille-crayon", image: "taille-crayon.png", article: "le",  gender: "m", definition: "outil pour aiguiser les crayons" },
    { word: "compas", image: "compas.png",        article: "le",  gender: "m", definition: "outil pour tracer des cercles" },
    { word: "colle", image: "colle.png",         article: "la",  gender: "f", definition: "substance pour coller des papiers" },
  ],
  sentences: [
    { sentence: "J'écris mes leçons dans mon ___.",                      answer: "cahier" },
    { sentence: "Le professeur écrit au ___ pour expliquer.",            answer: "tableau" },
    { sentence: "Elle range ses stylos dans sa ___.",                    answer: "trousse" },
    { sentence: "Pour faire un cercle, tu utilises le ___.",             answer: "compas" },
    { sentence: "Il efface son erreur avec la ___.",                     answer: "gomme" },
  ],
};
