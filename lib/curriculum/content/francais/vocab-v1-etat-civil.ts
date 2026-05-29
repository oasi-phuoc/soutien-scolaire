import type { VocabTheme } from "../../vocabulary-data";

export const V1_ETAT_CIVIL_THEME: VocabTheme = {
  slug: "v1-etat-civil",
  code: "V1.4",
  title: "L'état civil",
  section: "V1",
  words: [
    { word: "célibataire",   definition: "sans partenaire officiel" },
    { word: "en couple",     definition: "qui vit avec un partenaire" },
    { word: "en concubinage", definition: "qui vit avec un partenaire sans être marié" },
    { word: "fiancé",        feminine: "fiancée",  definition: "promis au mariage" },
    { word: "marié",         feminine: "mariée",   definition: "uni par le mariage" },
    { word: "pacsé",         feminine: "pacsée",   definition: "lié par un PACS" },
    { word: "séparé",        feminine: "séparée",  definition: "qui vit séparé de son conjoint" },
    { word: "divorcé",       feminine: "divorcée", definition: "dont le mariage est dissous" },
    { word: "veuf",          feminine: "veuve",    definition: "dont le conjoint est décédé" },
  ],
  sentences: [
    { sentence: "Il est ___, il n'a pas de conjoint.",              answer: "célibataire" },
    { sentence: "Après dix ans de mariage, il est ___ depuis un an.", answer: "divorcé" },
    { sentence: "Elle est ___ avec Pierre depuis deux ans.",        answer: "en couple" },
    { sentence: "Mon oncle est ___ : sa femme est décédée.",        answer: "veuf" },
    { sentence: "Ils sont ___ depuis le mois de juin.",             answer: "fiancé" },
  ],
};
