import type { VocabTheme } from "../../vocabulary-data";

export const SORTIES_THEME: VocabTheme = {
  slug: "a2-voc-l04",
  code: "V.16",
  title: "Les sorties et les invitations",
  section: "A2",
  words: [
    { word: "soirée",       article: "la",  gender: "f", definition: "fête ou sortie le soir" },
    { word: "apéro",        article: "l'",  gender: "m", definition: "boissons et snacks avant le repas principal" },
    { word: "pique-nique",  article: "le",  gender: "m", definition: "repas pris à l'extérieur dans la nature" },
    { word: "invitation",   article: "l'",  gender: "f", definition: "demande de venir à un événement" },
    { word: "concert",      article: "le",  gender: "m", definition: "spectacle de musique en direct" },
    { word: "spectacle",    article: "le",  gender: "m", definition: "représentation artistique en public" },
    { word: "disponible",   article: "le",  gender: "m", definition: "libre et prêt à participer" },
    { word: "fête",         article: "la",  gender: "f", definition: "célébration joyeuse entre amis" },
    { word: "sortie",       article: "la",  gender: "f", definition: "action de quitter la maison pour s'amuser" },
    { word: "exposition",   article: "l'",  gender: "f", definition: "présentation d'œuvres dans un musée" },
    { word: "repas",        article: "le",  gender: "m", definition: "moment où on mange ensemble" },
    { word: "anniversaire", article: "l'",  gender: "m", definition: "fête du jour de naissance" },
  ],
  sentences: [
    { sentence: "Ça te dit de venir à mon ___ samedi soir ?", answer: "soirée" },
    { sentence: "On organise un ___ au parc dimanche, tu viens ?", answer: "pique-nique" },
    { sentence: "Il est ___ vendredi soir et veut sortir avec nous.", answer: "disponible" },
    { sentence: "J'ai reçu une ___ pour sa fête d'anniversaire.", answer: "invitation" },
    { sentence: "Nous allons à un ___ de jazz ce soir au théâtre.", answer: "concert" },
  ],
};
