import type { VocabTheme } from "../../vocabulary-data";

export const V4_EQUIPEMENTS_THEME: VocabTheme = {
  slug: "v4-equipements",
  code: "V4.4",
  title: "Les meubles",
  section: "V4",
  words: [
    { word: "lit", image: "lit.jpg",             article: "le",  gender: "m", definition: "meuble pour dormir" },
    { word: "table", image: "/vocab/images/V7/table.png",           article: "la",  gender: "f", definition: "meuble plat pour poser des objets" },
    { word: "chaise", image: "chaise.jpg",          article: "la",  gender: "f", definition: "siège avec dossier pour une personne" },
    { word: "canapé", image: "canape.jpg",          article: "le",  gender: "m", definition: "grand siège confortable pour plusieurs personnes" },
    { word: "armoire", image: "armoire.jpg",         article: "l'",  gender: "f", definition: "grand meuble pour ranger les vêtements" },
    { word: "lavabo", image: "lavabo.jpg",          article: "le",  gender: "m", definition: "vasque pour se laver les mains et le visage" },
    { word: "douche", image: "douche.jpg",          article: "la",  gender: "f", definition: "installation pour se laver debout" },
    { word: "lampe", image: "lampe.jpg",           article: "la",  gender: "f", definition: "appareil d'éclairage" },
    { word: "rideau", image: "rideau.jpg",          article: "le",  gender: "m", definition: "tissu suspendu devant une fenêtre" },
  ],
  sentences: [
    { sentence: "Elle range ses vêtements dans l'___.",                  answer: "armoire" },
    { sentence: "Le ___ est devant la télévision.",                      answer: "canapé" },
    { sentence: "Elle pose son livre sur la ___.",                       answer: "table" },
    { sentence: "J'allume la ___ pour lire.",                            answer: "lampe" },
    { sentence: "Elle ferme le ___ pour ne pas voir la lumière.",        answer: "rideau" },
  ],
};
