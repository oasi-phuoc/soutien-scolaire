import type { VocabTheme } from "../../vocabulary-data";

export const V1_DESCRIPTION_PHYSIQUE_THEME: VocabTheme = {
  slug: "v1-description-physique",
  code: "V1.5",
  title: "La description physique",
  section: "V1",
  words: [
    { word: "grand",    feminine: "grande",    definition: "de grande taille" },
    { word: "petit",    feminine: "petite",    definition: "de petite taille" },
    { word: "mince",                           definition: "peu épais, svelte" },
    { word: "gros",     feminine: "grosse",    definition: "de forte corpulence" },
    { word: "beau",     feminine: "belle",     definition: "agréable à regarder" },
    { word: "brun",     feminine: "brune",     definition: "aux cheveux foncés" },
    { word: "blond",    feminine: "blonde",    definition: "aux cheveux clairs" },
    { word: "roux",     feminine: "rousse",    definition: "aux cheveux roux" },
    { word: "chauve",                          definition: "sans cheveux" },
    { word: "jeune",                           definition: "de peu d'âge" },
    { word: "vieux",    feminine: "vieille",   definition: "d'un âge avancé" },
    { word: "fort",     feminine: "forte",     definition: "musclé, robuste" },
    { word: "maigre",                          definition: "très mince, sans graisse" },
    { word: "élégant",  feminine: "élégante",  definition: "d'une beauté raffinée" },
    { word: "souriant", feminine: "souriante", definition: "qui sourit souvent" },
  ],
  sentences: [
    { sentence: "Mon frère est très ___, il fait 1 m 90.",          answer: "grand" },
    { sentence: "Elle est ___ avec de longs cheveux roux.",         answer: "rousse" },
    { sentence: "Mon grand-père est ___, il n'a plus de cheveux.",  answer: "chauve" },
    { sentence: "Il est ___, toujours bien habillé.",               answer: "élégant" },
    { sentence: "Ma petite sœur est très ___, elle rit tout le temps.", answer: "souriante" },
  ],
};
