import type { VocabTheme } from "../../vocabulary-data";

export const TRAVAIL_THEME: VocabTheme = {
  slug: "a2-voc-l03",
  code: "V.15",
  title: "Le monde du travail",
  section: "A2",
  words: [
    { word: "CV",           article: "le",  gender: "m", definition: "document résumant la formation et l'expérience" },
    { word: "entretien",    article: "l'",  gender: "m", definition: "rencontre pour un poste de travail" },
    { word: "salaire",      article: "le",  gender: "m", definition: "argent reçu chaque mois pour son travail" },
    { word: "contrat",      article: "le",  gender: "m", definition: "accord écrit entre employeur et employé" },
    { word: "chômage",      article: "le",  gender: "m", definition: "situation de quelqu'un sans emploi" },
    { word: "stage",        article: "le",  gender: "m", definition: "période de travail pour apprendre un métier" },
    { word: "entreprise",   article: "l'",  gender: "f", definition: "société ou compagnie où on travaille" },
    { word: "offre d'emploi",article: "l'", gender: "f", definition: "annonce pour recruter quelqu'un" },
    { word: "employeur",    article: "l'",  gender: "m", definition: "personne ou société qui donne du travail" },
    { word: "candidature",  article: "la",  gender: "f", definition: "demande pour obtenir un poste" },
    { word: "bureau",       article: "le",  gender: "m", definition: "pièce ou lieu où on travaille" },
    { word: "collègue",     article: "le",  gender: "m", definition: "personne qui travaille dans la même entreprise" },
  ],
  sentences: [
    { sentence: "J'envoie mon ___ et une lettre de motivation pour ce poste.", answer: "CV" },
    { sentence: "Elle a un ___ d'embauche demain pour un poste de comptable.", answer: "entretien" },
    { sentence: "Il cherche une ___ d'emploi dans le secteur informatique.", answer: "offre d'emploi" },
    { sentence: "J'ai signé mon ___ de travail ce matin.", answer: "contrat" },
    { sentence: "Il est au ___ depuis six mois et cherche du travail.", answer: "chômage" },
  ],
};
