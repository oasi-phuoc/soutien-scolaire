import type { VocabTheme } from "../../vocabulary-data";

export const V9_ESPACE_CULTUREL_THEME: VocabTheme = {
  slug: "v9-espace-culturel",
  code: "V9.4",
  title: "L'espace culturel",
  section: "V9",
  words: [
    { word: "théâtre", image: "théâtre.jpg",    article: "le",  gender: "m", definition: "lieu pour les représentations scéniques" },
    { word: "cinéma", image: "cinéma.jpg",     article: "le",  gender: "m", definition: "lieu pour regarder des films" },
    { word: "musée", image: "musée.jpg",      article: "le",  gender: "m", definition: "lieu pour exposer des œuvres d'art" },
    { word: "concert", image: "concert.jpg",    article: "le",  gender: "m", definition: "spectacle musical en direct" },
    { word: "exposition", image: "exposition.jpg", article: "l'",  gender: "f", definition: "présentation publique d'œuvres ou objets" },
    { word: "spectacle", image: "spectacle.jpg",  article: "le",  gender: "m", definition: "représentation artistique devant un public" },
    { word: "chanteur", image: "chanteur.jpg",   article: "le",  gender: "m", feminine: "chanteuse", definition: "artiste qui chante" },
    { word: "acteur", image: "acteur.jpg",     article: "l'",  gender: "m", feminine: "actrice",   definition: "artiste qui joue un rôle" },
    { word: "musicien", image: "musicien.jpg",   article: "le",  gender: "m", feminine: "musicienne",definition: "artiste qui joue d'un instrument" },
    { word: "peintre", image: "peintre.jpg",    article: "le",  gender: "m", definition: "artiste qui crée des tableaux" },
    { word: "danseur", image: "danseur.jpg",    article: "le",  gender: "m", feminine: "danseuse",  definition: "artiste qui pratique la danse" },
    { word: "billet", image: "billet.jpg",     article: "le",  gender: "m", definition: "titre d'entrée pour un spectacle ou musée" },
    { word: "salle", image: "salle.jpg",      article: "la",  gender: "f", definition: "espace où se déroule un spectacle" },
    { word: "scène", image: "scène.jpg",      article: "la",  gender: "f", definition: "plateforme où se produit l'artiste" },
    { word: "festival", image: "festival.jpg",   article: "le",  gender: "m", definition: "événement culturel regroupant plusieurs spectacles" },
  ],
  sentences: [
    { sentence: "Il a acheté un ___ pour le concert de samedi.",         answer: "billet" },
    { sentence: "Le ___ est monté sur la scène pour chanter.",           answer: "chanteur" },
    { sentence: "Le ___ du Louvre attire des millions de visiteurs.",    answer: "musée" },
    { sentence: "L'___ joue le rôle principal dans ce film.",            answer: "acteur" },
    { sentence: "Le ___ de musique dure tout le week-end.",              answer: "festival" },
  ],
};
