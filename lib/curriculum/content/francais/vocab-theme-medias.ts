import type { VocabTheme } from "../../vocabulary-data";

export const MEDIAS_THEME: VocabTheme = {
  slug: "a2-voc-l07",
  code: "V.19",
  title: "Les médias et Internet",
  section: "A2",
  words: [
    { word: "réseau social",  article: "le",  gender: "m", definition: "plateforme en ligne pour partager du contenu" },
    { word: "abonné",         article: "l'",  gender: "m", definition: "personne qui suit un compte en ligne" },
    { word: "télécharger",    article: "le",  gender: "m", definition: "copier un fichier depuis Internet" },
    { word: "journaliste",    article: "le",  gender: "m", definition: "professionnel qui écrit ou diffuse les informations" },
    { word: "mot de passe",   article: "le",  gender: "m", definition: "code secret pour accéder à un compte" },
    { word: "lien",           article: "le",  gender: "m", definition: "adresse qui mène vers une page web" },
    { word: "chaîne",         article: "la",  gender: "f", definition: "station de télévision" },
    { word: "documentaire",   article: "le",  gender: "m", definition: "film qui présente des faits réels" },
    { word: "partager",       article: "le",  gender: "m", definition: "diffuser un contenu à d'autres personnes" },
    { word: "compte",         article: "le",  gender: "m", definition: "profil personnel sur un site ou une appli" },
    { word: "actualité",      article: "l'",  gender: "f", definition: "les événements récents dans le monde" },
    { word: "publicité",      article: "la",  gender: "f", definition: "message commercial pour vendre un produit" },
  ],
  sentences: [
    { sentence: "Je lis les ___ tous les matins sur mon téléphone.", answer: "actualité" },
    { sentence: "Pour voir ses photos, tu peux les ___ sur Instagram.", answer: "partager" },
    { sentence: "Il regarde un ___ sur la nature sur France 5.", answer: "documentaire" },
    { sentence: "Tu peux m'envoyer le ___ de cet article ?", answer: "lien" },
    { sentence: "J'ai oublié mon ___ pour accéder à mon compte.", answer: "mot de passe" },
  ],
};
