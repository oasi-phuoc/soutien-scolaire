import type { VocabLesson } from "../../vocabulary-data";

export const A2_VOC_L05: VocabLesson = {
  slug: "a2-voc-l05",
  code: "V.17",
  level: "A2",
  title: "La cuisine et les recettes",
  theory: [
    { type: "heading", text: "Les ingrédients" },
    {
      type: "vocab",
      title: "Ingrédients de base",
      items: [
        "de la farine (flour)",
        "du beurre (butter)",
        "des œufs (m.pl.) (eggs)",
        "du sucre (sugar)",
        "du lait (milk)",
        "du sel (salt)",
        "du poivre (pepper)",
        "de l'huile (f.) (oil)",
        "de la levure (baking powder / yeast)",
        "du chocolat",
        "de la crème (cream)",
      ],
    },
    {
      type: "heading", text: "Les ustensiles de cuisine",
    },
    {
      type: "vocab",
      title: "Ce qu'on utilise pour cuisiner",
      items: [
        "un bol (bowl)",
        "un moule (baking tin)",
        "une poêle (frying pan)",
        "une casserole (saucepan)",
        "un four (oven)",
        "un fouet (whisk)",
        "une cuillère en bois (wooden spoon)",
        "un couteau (knife)",
        "une planche à découper (chopping board)",
      ],
    },
    {
      type: "heading", text: "Les actions en cuisine",
    },
    {
      type: "vocab",
      title: "Verbes de cuisine",
      items: [
        "mélanger (to mix)",
        "verser (to pour)",
        "ajouter (to add)",
        "mettre au four (to put in the oven)",
        "faire cuire (to cook)",
        "couper (to cut)",
        "éplucher (to peel)",
        "faire chauffer (to heat up)",
        "fouetter (to whisk)",
        "incorporer (to fold in)",
      ],
    },
    {
      type: "heading", text: "Exprimer les quantités",
    },
    {
      type: "rule",
      text: "Indiquer les quantités dans une recette.",
      examples: [
        { correct: "une cuillère à soupe de sucre" },
        { correct: "100 grammes de farine" },
        { correct: "un litre de lait" },
        { correct: "une pincée de sel (a pinch of salt)" },
        { correct: "une noisette de beurre (a small knob of butter)" },
      ],
    },
    {
      type: "note",
      text: "Dans une recette française, les instructions sont souvent à l'infinitif : « Mélanger les œufs et le sucre. Ajouter la farine. »",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'ustensile et son utilisation",
      instruction: "Reliez chaque ustensile à son utilisation.",
      pairs: [
        { left: "un fouet", right: "battre les œufs" },
        { left: "un moule", right: "cuire un gâteau" },
        { left: "une poêle", right: "faire sauter les légumes" },
        { left: "un couteau", right: "couper les légumes" },
        { left: "un bol", right: "mélanger les ingrédients" },
        { left: "une casserole", right: "faire bouillir de l'eau" },
      ],
    },
    {
      type: "fill",
      title: "Compléter une recette",
      instruction: "Complétez chaque étape de la recette avec le bon verbe.",
      items: [
        { sentence: "___ (mix) les œufs et le sucre dans un bol.", hint: "Mélangez", answer: "Mélangez" },
        { sentence: "___ (add) la farine petit à petit.", hint: "Ajoutez", answer: "Ajoutez" },
        { sentence: "___ (pour) le lait dans le mélange.", hint: "Versez", answer: "Versez" },
        { sentence: "___ (put in the oven) à 180° pendant 30 minutes.", hint: "Mettez au four", answer: "Mettez au four" },
        { sentence: "___ les légumes avant de les couper.", hint: "Épluchez", answer: "Épluchez" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon ingrédient",
      instruction: "Choisissez le bon ingrédient pour compléter la phrase.",
      items: [
        { sentence: "Pour faire un gâteau, on a besoin de ___, de beurre et d'œufs.", choices: ["farine", "poivre", "sel", "huile"], correctIdx: 0 },
        { sentence: "On ajoute une pincée de ___ pour assaisonner les plats.", choices: ["sel", "sucre", "lait", "farine"], correctIdx: 0 },
        { sentence: "Pour faire une omelette, on utilise des ___ et du beurre.", choices: ["œufs", "légumes", "gâteaux", "farines"], correctIdx: 0 },
        { sentence: "Pour faire chauffer les légumes, on utilise une ___.", choices: ["poêle", "casserole", "four", "bol"], correctIdx: 0 },
      ],
    },
  ],
};
