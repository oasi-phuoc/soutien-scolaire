import type { VocabTheme } from "../../vocabulary-data";

export const V4_EQUIPEMENTS_THEME: VocabTheme = {
  slug: "v4-equipements",
  code: "V4.4",
  title: "Les équipements",
  section: "V4",
  words: [
    { word: "lit", image: "lit.jpg",             article: "le",  gender: "m", definition: "meuble pour dormir" },
    { word: "table", image: "table.jpg",           article: "la",  gender: "f", definition: "meuble plat pour poser des objets" },
    { word: "chaise", image: "chaise.jpg",          article: "la",  gender: "f", definition: "siège avec dossier pour une personne" },
    { word: "canapé", image: "canape.jpg",          article: "le",  gender: "m", definition: "grand siège confortable pour plusieurs personnes" },
    { word: "armoire", image: "armoire.jpg",         article: "l'",  gender: "f", definition: "grand meuble pour ranger les vêtements" },
    { word: "frigo", image: "frigo.jpg",           article: "le",  gender: "m", definition: "appareil pour conserver les aliments au frais" },
    { word: "four", image: "four.jpg",            article: "le",  gender: "m", definition: "appareil pour cuire les aliments" },
    { word: "lavabo", image: "lavabo.jpg",          article: "le",  gender: "m", definition: "vasque pour se laver les mains et le visage" },
    { word: "douche", image: "douche.jpg",          article: "la",  gender: "f", definition: "installation pour se laver debout" },
    { word: "télévision", image: "television.jpg",      article: "la",  gender: "f", definition: "écran pour regarder des programmes" },
    { word: "lampe", image: "lampe.jpg",           article: "la",  gender: "f", definition: "appareil d'éclairage" },
    { word: "ordinateur", image: "ordinateur.jpg",      article: "l'",  gender: "m", definition: "machine informatique pour travailler" },
    { word: "machine à laver", image: "machine-a-laver.jpg", article: "la",  gender: "f", definition: "appareil pour laver le linge" },
    { word: "aspirateur", image: "aspirateur.jpg",      article: "l'",  gender: "m", definition: "appareil pour aspirer la poussière" },
    { word: "rideau", image: "rideau.jpg",          article: "le",  gender: "m", definition: "tissu suspendu devant une fenêtre" },
  ],
  sentences: [
    { sentence: "Elle range ses vêtements dans l'___.",                  answer: "armoire" },
    { sentence: "Le ___ est sur le tapis devant le canapé.",             answer: "ordinateur" },
    { sentence: "Il passe l'___ pour nettoyer le salon.",                answer: "aspirateur" },
    { sentence: "Le ___ garde les aliments frais.",                      answer: "frigo" },
    { sentence: "Elle ferme le ___ pour ne pas voir la lumière.",        answer: "rideau" },
  ],
};
