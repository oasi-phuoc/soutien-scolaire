import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A6_3: SubmoduleTrad = {
  submoduleId: "A6-3",
  title: {
    fr: "Augmentation et réduction",
    en: "Increase and decrease",
    ar: "الزيادة والتخفيض",
    fa: "افزایش و کاهش",
    pt: "Aumento e redução",
    so: "Kordhin iyo dhimis",
    ti: "ምውሳኽን ምንካይን",
    tr: "Artış ve azalma",
    ps: "زیاتوالی او کموالی",
    uk: "Збільшення і зменшення",
  },
  blocks: [
    {
      text: {
        fr: "Exprimer une partie en pourcentage",
      }
    },
    {
      text: {
        fr: "Parfois on connaît la **partie** et le **total**, et on veut savoir quel pourcentage cela représente. Par exemple : 30 élèves sur 120 ont réussi — quel est le taux de réussite ?",
      }
    },
    {
      text: {
        fr: "Formule",
      },
      items: {
        fr: [
          "**Pourcentage** = (partie ÷ total) × 100",
          "Résultat en %",
        ],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Méthode pas à pas",
      }
    },
    {
      label: {
        fr: "Étapes",
      },
      items: {
        fr: [
          "**Étape 1** — Diviser la partie par le total",
          "**Étape 2** — Multiplier le résultat par 100",
          "**Étape 3** — Ajouter le symbole %",
        ],
      }
    },
    {
      text: {
        fr: "30 sur 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%",
      }
    },
    {
      text: {
        fr: "18 sur 24  → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%",
      }
    },
    {
      text: {
        fr: "7 sur 20   → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Exemples concrets",
      }
    },
    {
      headers: {
        fr: ["Situation", "Calcul", "Résultat"],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Le résultat est toujours entre 0% et 100% si la partie est inférieure ou égale au total. Vérifiez que vous avez bien divisé la partie par le total, et non l'inverse.",
      }
    },
  ],
};
