import type { GrammarLesson } from "../../grammar-data";

/** Unité 15 — Le masculin et le féminin des adjectifs (G2.5) */
export const A1_GR_GENRE_ADJECTIFS: GrammarLesson = {
  slug: "a1-gr-genre-adjectifs",
  code: "G2.5",
  level: "A1",
  title: "Le masculin et le féminin des adjectifs",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "L'adjectif qualificatif est utilisé pour décrire.",
        "Il est masculin si le nom ou le pronom est masculin ({a}Il est petit{/a}) ; féminin si le nom ou le pronom est féminin ({a}Léa est petite{/a}).",
        "On décrit une personne (Il est français), un lieu (La ville est grande), un objet (La chaise est bleue) ou une opinion (Le livre est intéressant).",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation du féminin : cas général",
    },
    {
      type: "plain_list",
      items: [
        "Au masculin, les terminaisons varient : carré, moderne, espagnol, chinois, grand, petit…",
        "En général, adjectif féminin = adjectif masculin + {a}e{/a}. → Le bureau est carré. / La table est carrée. — Ce garçon est danois. / Cette fille est danoise.",
        "Si l'adjectif masculin se termine déjà par {a}e{/a}, le féminin ne change pas. → Ce lit est moderne. / Cette chaise est moderne.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Même prononciation si le masculin se termine par une voyelle, ou par {a}r{/a} / {a}l{/a}. → Il est joli. / Elle est jolie. — Le sac est noir et original. / La valise est noire et originale.",
        "Prononciation différente si le masculin se termine par une consonne (le e fait entendre la consonne). → Il est grand. / Elle est grande. — Il est ouvert. / Elle est ouverte. — Il est français. / Elle est française. — Il est marocain. / Elle est marocaine. — Il est brun. / Elle est brune.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Genre des adjectifs",
      instruction: "Choisissez la forme correcte de l'adjectif.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "La table est ___ .", choices: ["carrée", "carré", "carrées", "carrés"], correctIdx: 0 },
        { sentence: "Le bureau est ___ .", choices: ["carré", "carrée", "carrés", "carrées"], correctIdx: 0 },
        { sentence: "Cette fille est ___ .", choices: ["danoise", "danois", "danoises", "danoiss"], correctIdx: 0 },
        { sentence: "Cette chaise est ___ .", choices: ["moderne", "modern", "modernes", "moderna"], correctIdx: 0 },
        { sentence: "Léa est ___ .", choices: ["petite", "petit", "petites", "petits"], correctIdx: 0 },
        { sentence: "Il est ___ .", choices: ["grand", "grande", "grands", "grandes"], correctIdx: 0 },
        { sentence: "Elle est ___ .", choices: ["grande", "grand", "grands", "grandes"], correctIdx: 0 },
        { sentence: "La valise est ___ .", choices: ["noire", "noir", "noirs", "noires"], correctIdx: 0 },
        { sentence: "Elle est ___ .", choices: ["française", "français", "françaises", "françaiss"], correctIdx: 0 },
        { sentence: "La chaise est ___ .", choices: ["bleue", "bleu", "bleus", "bleues"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Accordez l'adjectif",
      instruction: "Écrivez l'adjectif au genre correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "La table est ___ (carré).", hint: "+ e", answer: "carrée" },
        { sentence: "Cette fille est ___ (danois).", hint: "+ e", answer: "danoise" },
        { sentence: "Cette chaise est ___ (moderne).", hint: "inchangé", answer: "moderne" },
        { sentence: "Léa est ___ (petit).", hint: "+ e", answer: "petite" },
        { sentence: "Elle est ___ (grand).", hint: "+ e", answer: "grande" },
        { sentence: "La valise est ___ (noir).", hint: "+ e", answer: "noire" },
        { sentence: "Elle est ___ (français).", hint: "+ e", answer: "française" },
        { sentence: "Elle est ___ (marocain).", hint: "+ e", answer: "marocaine" },
        { sentence: "Elle est ___ (brun).", hint: "+ e", answer: "brune" },
        { sentence: "La chaise est ___ (bleu).", hint: "+ e", answer: "bleue" },
      ],
    },
  ],
};
