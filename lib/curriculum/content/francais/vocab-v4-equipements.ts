import type { VocabTheme } from "../../vocabulary-data";

export const V4_EQUIPEMENTS_THEME: VocabTheme = {
  slug: "v4-equipements",
  code: "V4.4",
  title: "Les meubles",
  section: "V4",
  words: [
    { word: "table", image: "/vocab/images/V7/table.png",           article: "la",  gender: "f", definition: "meuble plat pour poser des objets" },
    { word: "armoire", image: "armoire.jpg",         article: "l'",  gender: "f", definition: "grand meuble pour ranger les vêtements" },
    { word: "bureau", image: "bureau.jpg",        article: "le",  gender: "m", definition: "meuble pour travailler ou étudier" },
    { word: "lavabo", image: "lavabo.jpg",          article: "le",  gender: "m", definition: "vasque pour se laver les mains et le visage" },
  ],
  sentences: [
    { sentence: "Elle range ses vêtements dans l'___.",                  answer: "armoire" },
    { sentence: "Elle pose son livre sur la ___.",                       answer: "table" },
    { sentence: "Je travaille sur le ___.",                              answer: "bureau" },
    { sentence: "Je me lave les mains au ___.",                          answer: "lavabo" },
  ],
};
