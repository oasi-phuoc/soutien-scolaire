import type { VocabTheme } from "../../vocabulary-data";

export const V8_CORPS_THEME: VocabTheme = {
  slug: "v8-corps",
  code: "V8.1",
  title: "Le corps",
  section: "V8",
  words: [
    { word: "tête",  image: "tete.jpg",  article: "la",  gender: "f", definition: "partie supérieure du corps" },
    { word: "bras", image: "bras.jpg",    article: "le",  gender: "m", definition: "membre supérieur du corps" },
    { word: "main", image: "main.jpg",    article: "la",  gender: "f", definition: "extrémité du bras avec cinq doigts" },
    { word: "doigt", image: "doigt.jpg",   article: "le",  gender: "m", definition: "chacun des cinq appendices de la main" },
    { word: "jambe", image: "jambe.jpg",   article: "la",  gender: "f", definition: "membre inférieur du corps" },
    { word: "pied", image: "pied.jpg",    article: "le",  gender: "m", definition: "extrémité de la jambe pour marcher" },
    { word: "dos", image: "dos.jpg",     article: "le",  gender: "m", definition: "partie arrière du tronc" },
    { word: "ventre", image: "ventre.jpg",  article: "le",  gender: "m", definition: "partie avant du tronc" },
    { word: "genou", image: "genou.jpg",   article: "le",  gender: "m", definition: "articulation de la jambe" },
    { word: "épaule", image: "epaule.jpg", article: "l'",  gender: "f", definition: "articulation entre le bras et le tronc" },
    { word: "cou", image: "cou.jpg",     article: "le",  gender: "m", definition: "partie entre la tête et les épaules" },
    { word: "nez", image: "nez.jpg",     article: "le",  gender: "m", definition: "organe de l'odorat au milieu du visage" },
    { word: "bouche", image: "bouche.jpg",  article: "la",  gender: "f", definition: "ouverture du visage pour manger et parler" },
    { word: "œil",  image: "oeil.jpg",  article: "l'",  gender: "m", definition: "organe de la vue" },
    { word: "oreille", image: "oreille.jpg", article: "l'",  gender: "f", definition: "organe de l'ouïe de chaque côté de la tête" },
  ],
  sentences: [
    { sentence: "J'ai mal au ___, je dois voir un médecin.",             answer: "dos" },
    { sentence: "Elle s'est blessée au ___ pendant la course.",          answer: "genou" },
    { sentence: "Le dentiste examine la ___ du patient.",                answer: "bouche" },
    { sentence: "Chaque ___ de la main permet de saisir des objets.",     answer: "doigt" },
    { sentence: "L'___ permet d'entendre les sons.",                     answer: "oreille" },
  ],
};
