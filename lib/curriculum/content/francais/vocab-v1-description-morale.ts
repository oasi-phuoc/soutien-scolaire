import type { VocabTheme } from "../../vocabulary-data";

export const V1_DESCRIPTION_MORALE_THEME: VocabTheme = {
  slug: "v1-description-morale",
  code: "V1.6",
  title: "La description morale",
  section: "V1",
  words: [
    { word: "stressé",      feminine: "stressée",    definition: "sous tension, nerveux" },
    { word: "disponible",                             definition: "libre, prêt à aider" },
    { word: "patient",      feminine: "patiente",    definition: "qui sait attendre sans s'énerver" },
    { word: "gentil",       feminine: "gentille",    definition: "aimable, bienveillant" },
    { word: "sérieux",      feminine: "sérieuse",    definition: "appliqué, consciencieux" },
    { word: "dynamique",                              definition: "énergique, actif" },
    { word: "calme",                                  definition: "tranquille, sans agitation" },
    { word: "excellent",    feminine: "excellente",  definition: "de très haute qualité" },
    { word: "bavard",       feminine: "bavarde",     definition: "qui parle beaucoup" },
    { word: "timide",                                 definition: "qui manque d'assurance" },
    { word: "courageux",    feminine: "courageuse",  definition: "qui affronte les difficultés" },
    { word: "poli",         feminine: "polie",       definition: "respectueux des règles de politesse" },
    { word: "honnête",                                definition: "sincère, qui dit la vérité" },
    { word: "sympathique",                            definition: "agréable, avec qui on s'entend bien" },
    { word: "ambitieux",    feminine: "ambitieuse",  definition: "qui a de grandes aspirations" },
  ],
  sentences: [
    { sentence: "Il est très ___ au travail, il fait toujours son maximum.", answer: "sérieux" },
    { sentence: "Ma collègue est très ___, elle parle sans arrêt.",          answer: "bavarde" },
    { sentence: "Ce professeur est ___ avec ses élèves, il ne s'énerve jamais.", answer: "patient" },
    { sentence: "Elle est ___ et dit toujours ce qu'elle pense.",            answer: "honnête" },
    { sentence: "Il est très ___, il veut devenir directeur avant 30 ans.",  answer: "ambitieux" },
  ],
};
