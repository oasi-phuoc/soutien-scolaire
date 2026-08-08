import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_L36 } from "./grammaire-g12.3-les-pronoms-y-et-en";

/** G12.3 — Le pronom complément en, enrichi avec G19.19 (Y et EN) */
export const A1_GR_PRONOM_EN: GrammarLesson = {
  slug: "a1-gr-pronom-en",
  code: "G12.3",
  level: "A1",
  title: "Le pronom complément en",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "{a}En{/a} remplace un nom (personne ou chose) précédé d'une expression de quantité. Seul ou suivi d'une quantité.",
        "Articles partitifs / indéfinis ({a}du, de la, de l', un, une, des{/a}). → Tu veux du café ? — J'en veux bien.",
        "Nombres. → J'ai deux frères, et toi ? — J'en ai trois.",
        "Adverbes ou noms de quantité ({a}beaucoup de, un peu de, trop de, un kilo de…{/a}). → Il y a beaucoup d'invités → Il y en a beaucoup. ; J'ai acheté un paquet de café → J'en ai acheté un.",
        "Réponse fréquente à {a}combien de… ?{/a} → Tu mets combien d'œufs ? — J'en mets quatre.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Place et structure",
    },
    {
      type: "text",
      items: [
        "Devant le verbe ou l'auxiliaire. → Oui, j'en ai trois. ; Il en a invité sept.",
        "Avec deux verbes : devant l'infinitif. → Il va en inviter trois.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Négation : Je n'en ai pas. ; Elle n'en a pas acheté. ; Il ne va pas en acheter.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      items: [
        "Liaison devant voyelle ou {a}h{/a} muet. → J'en ai beaucoup. ; J'en organise souvent.",
        "À l'oral, le {a}ne{/a} de la négation tombe souvent. → J'en ai pas. ; Il y en a pas.",
      ],
      allBullets: true,
    },
    ...A2_GR_L36.theory,
  ],
  exercises: [],
};
