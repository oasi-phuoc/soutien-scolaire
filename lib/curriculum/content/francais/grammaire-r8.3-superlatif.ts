import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_SUPERLATIF: GrammarLesson = {
  slug: "a2-gr-superlatif",
  code: "R8.3",
  level: "A2",
  title: "Le superlatif",
  theory: [
    { type: "heading", text: "Le superlatif" },
    { type: "plain_list", items: ["Le superlatif exprime le degré le plus élevé ou le plus bas."] },
    { type: "highlight", label: "Structure", items: ["le / la / les + plus / moins + adjectif"] },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      rows: [
        ["le/la/les + plus + adj", "C'est le plus beau quartier de la ville."],
        ["le/la/les + moins + adj", "C'est la moins chère des options."],
      ],
    },
    { type: "heading", text: "Formes irrégulières", sub: true },
    {
      type: "plain_list",
      items: [
        "bon → comparatif : meilleur (pas : plus bon)",
        "bien → comparatif : mieux (pas : plus bien)",
        "mauvais → comparatif : pire ou plus mauvais",
      ],
      allBullets: true,
    },
    { type: "note", text: "C'est meilleur que ça. / Il va mieux aujourd'hui." },
  ],
  exercises: [],
};
