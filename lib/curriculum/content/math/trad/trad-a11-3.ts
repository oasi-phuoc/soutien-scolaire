import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_3: SubmoduleTrad = {
  submoduleId: "A11-3",
  title: {
    fr: "Représentation graphique des solutions",
    en: "Graphical representation of solutions",
    ar: "التمثيل البياني للحلول",
    fa: "نمایش گرافیکی جواب‌ها",
    ti: "ስዕላዊ ምርኣይ ናይ ፍትሒ",
    uk: "Графічне зображення розв'язків",
  },
  blocks: [
    {
      text: {
        fr: "Notation par intervalles",
      }
    },
    {
      text: {
        fr: "La solution d'une inéquation à une variable s'écrit sous forme d'intervalle. Les crochets indiquent si les bornes sont incluses ou exclues.",
      }
    },
    {
      text: {
        fr: "Convention des crochets",
      },
      items: {
        fr: [
            "Crochet fermé [ ou ] → borne **incluse** (correspond à ≤ ou ≥)",
            "Crochet ouvert ] ou [ → borne **exclue** (correspond à < ou >)",
          ],
      }
    },
    {
      headers: {
        fr: ["Inéquation", "Notation intervalle", "Droite numérique"],
      }
    },
    {
      text: {
        fr: "Exemple complet",
      }
    },
    {
      text: {
        fr: "Résoudre et représenter",
      }
    },
    {
      items: {
        fr: [
            "2x **−** 4 ≤ 6",
            "→ 2x ≤ 10",
            "→ x ≤ 5",
            "Intervalle solution : ]**−**∞ ; 5]",
            "Droite numérique : ● en 5, flèche vers la gauche",
          ],
      }
    },
    {
      text: {
        fr: "Inéquation double",
      }
    },
    {
      text: {
        fr: "Une inéquation double encadre x entre deux valeurs. Sa solution est un segment sur la droite numérique.",
      }
    },
    {
      text: {
        fr: "1 ≤ x + 2 < 6\n→ 1 − 2 ≤ x < 6 − 2\n→ −1 ≤ x < 4\nIntervalle : [−1 ; 4[\nDroite : ● en −1, ○ en 4, segment entre les deux",
      }
    },
  ],
};
