import type { VocabTheme } from "../../vocabulary-data";

export const CORPS_THEME: VocabTheme = {
  slug: "a1-voc-l26",
  code: "V.8",
  title: "Le corps humain",
  section: "A1",
  words: [
    { word: "tête",      article: "la",  gender: "f", definition: "partie supérieure du corps" },
    { word: "bras",      article: "le",  gender: "m", definition: "membre supérieur du corps" },
    { word: "jambe",     article: "la",  gender: "f", definition: "membre inférieur du corps" },
    { word: "main",      article: "la",  gender: "f", definition: "extrémité du bras avec 5 doigts" },
    { word: "pied",      article: "le",  gender: "m", definition: "extrémité de la jambe" },
    { word: "dos",       article: "le",  gender: "m", definition: "partie arrière du tronc" },
    { word: "ventre",    article: "le",  gender: "m", definition: "partie avant du tronc" },
    { word: "gorge",     article: "la",  gender: "f", definition: "passage intérieur du cou" },
    { word: "genou",     article: "le",  gender: "m", definition: "articulation au milieu de la jambe" },
    { word: "épaule",    article: "l'",  gender: "f", definition: "articulation entre le bras et le tronc" },
    { word: "cou",       article: "le",  gender: "m", definition: "partie entre la tête et les épaules" },
    { word: "doigt",     article: "le",  gender: "m", definition: "une des cinq extrémités de la main" },
  ],
  sentences: [
    { sentence: "J'ai mal au ___ après avoir couru.", answer: "genou" },
    { sentence: "Elle a mal à la ___ et ne peut pas chanter.", answer: "gorge" },
    { sentence: "Il porte un sac lourd sur les ___.", answer: "épaule" },
    { sentence: "Mon ___ est douloureux depuis ce matin.", answer: "dos" },
    { sentence: "Elle s'est blessée au ___ en tombant.", answer: "bras" },
  ],
};
