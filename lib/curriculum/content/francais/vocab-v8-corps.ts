import type { VocabTheme } from "../../vocabulary-data";

export const V8_CORPS_THEME: VocabTheme = {
  slug: "v8-corps",
  code: "V8.1",
  title: "Le corps",
  section: "V8",
  words: [
    { word: "tête",    image: "tete.png",    article: "la",  gender: "f", definition: "partie supérieure du corps" },
    { word: "bras",                           article: "le",  gender: "m", definition: "membre supérieur du corps" },
    { word: "main",    image: "main.png",    article: "la",  gender: "f", definition: "extrémité du bras avec cinq doigts" },
    { word: "doigt",   image: "doigt.png",   article: "le",  gender: "m", definition: "chacun des cinq appendices de la main" },
    { word: "jambe",   image: "jambe.png",   article: "la",  gender: "f", definition: "membre inférieur du corps" },
    { word: "pied",    image: "pied.png",    article: "le",  gender: "m", definition: "extrémité de la jambe pour marcher" },
    { word: "dos",                            article: "le",  gender: "m", definition: "partie arrière du tronc" },
    { word: "ventre",  image: "ventre.png",  article: "le",  gender: "m", definition: "partie avant du tronc" },
    { word: "genou",   image: "genou.png",   article: "le",  gender: "m", definition: "articulation de la jambe" },
    { word: "épaule",  image: "epaule.png",  article: "l'",  gender: "f", definition: "articulation entre le bras et le tronc" },
    { word: "cou",     image: "cou.png",     article: "le",  gender: "m", definition: "partie entre la tête et les épaules" },
    { word: "nez",     image: "nez.png",     article: "le",  gender: "m", definition: "organe de l'odorat au milieu du visage" },
    { word: "bouche",  image: "bouche.png",  article: "la",  gender: "f", definition: "ouverture du visage pour manger et parler" },
    { word: "œil",     image: "oeil.png",    article: "l'",  gender: "m", definition: "organe de la vue" },
    { word: "oreille", image: "oreille.png", article: "l'",  gender: "f", definition: "organe de l'ouïe de chaque côté de la tête" },
    { word: "dent",    image: "dent.png",    article: "la",  gender: "f", definition: "organe dur de la mâchoire pour mordre et mâcher" },
  ],
  sentences: [
    { sentence: "J'ai mal au ___, je dois voir un médecin.",             answer: "dos" },
    { sentence: "Elle s'est blessée au ___ pendant la course.",          answer: "genou" },
    { sentence: "Le dentiste examine la ___ du patient.",                answer: "bouche" },
    { sentence: "Chaque ___ de la main permet de saisir des objets.",    answer: "doigt" },
    { sentence: "L'___ permet d'entendre les sons.",                     answer: "oreille" },
  ],
};
