import type { VocabTheme } from "../../vocabulary-data";

export const V1_NATIONALITES_THEME: VocabTheme = {
  slug: "v1-nationalites",
  code: "V1.1",
  title: "Les nationalités",
  section: "V1",
  words: [
    { word: "suisse",                              image: "suisse.jpg",      relatedWords: ["la Suisse"],       definition: "originaire de Suisse" },
    { word: "français",   feminine: "française",   image: "france.jpg",      relatedWords: ["la France"],       definition: "originaire de France" },
    { word: "belge",                               image: "belgique.jpg",    relatedWords: ["la Belgique"],     definition: "originaire de Belgique" },
    { word: "canadien",   feminine: "canadienne",                            relatedWords: ["le Canada"],       definition: "originaire du Canada" },
    { word: "marocain",   feminine: "marocaine",                             relatedWords: ["le Maroc"],        definition: "originaire du Maroc" },
    { word: "algérien",   feminine: "algérienne",                            relatedWords: ["l'Algérie"],       definition: "originaire d'Algérie" },
    { word: "tunisien",   feminine: "tunisienne",                            relatedWords: ["la Tunisie"],      definition: "originaire de Tunisie" },
    { word: "italien",    feminine: "italienne",   image: "italie.jpg",      relatedWords: ["l'Italie"],        definition: "originaire d'Italie" },
    { word: "espagnol",   feminine: "espagnole",   image: "espagne.jpg",     relatedWords: ["l'Espagne"],       definition: "originaire d'Espagne" },
    { word: "portugais",  feminine: "portugaise",  image: "portugal.jpg",    relatedWords: ["le Portugal"],     definition: "originaire du Portugal" },
    { word: "allemand",   feminine: "allemande",   image: "allemagne.jpg",   relatedWords: ["l'Allemagne"],     definition: "originaire d'Allemagne" },
    { word: "anglais",    feminine: "anglaise",                              relatedWords: ["l'Angleterre"],    definition: "originaire d'Angleterre" },
    { word: "américain",  feminine: "américaine",                            relatedWords: ["les États-Unis"],  definition: "originaire des États-Unis" },
    { word: "russe",                                                          relatedWords: ["la Russie"],       definition: "originaire de Russie" },
    { word: "chinois",    feminine: "chinoise",    image: "chine.jpg",       relatedWords: ["la Chine"],        definition: "originaire de Chine" },
  ],
  sentences: [
    { sentence: "Marc est ___, il vient de France.",          answer: "français" },
    { sentence: "Mon ami est ___, il vient du Maroc.",        answer: "marocain" },
    { sentence: "Cet élève est ___, il parle allemand.",      answer: "allemand" },
    { sentence: "Il est ___, il vient de Suisse.",            answer: "suisse" },
    { sentence: "Tu viens de Chine, tu es ___.",              answer: "chinois" },
  ],
};
