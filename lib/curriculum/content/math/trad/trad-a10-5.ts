import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A10_5: SubmoduleTrad = {
  submoduleId: "A10-5",
  title: {
    fr: "Problèmes",
    en: "Problems",
    ar: "مسائل بمجهولين",
    fa: "مسائل با دو مجهول",
    ti: "ጸገማት ምስ ክልተ ዘይፍለጥ",
    uk: "Задачі з двома невідомими",
  },
  blocks: [
    {
      text: {
        fr: "Démarche générale",
      }
    },
    {
      text: {
        fr: "4 étapes pour résoudre un problème à deux inconnues",
      },
      items: {
        fr: [
            "1. Nommer x et y les deux quantités cherchées (préciser clairement ce qu'ils représentent)",
            "2. Traduire les deux conditions de l'énoncé en deux équations",
            "3. Résoudre le système (par substitution ou par élimination)",
            "4. Répondre à la question et vérifier",
          ],
      }
    },
    {
      text: {
        fr: "Exemple : billets de spectacle",
      }
    },
    {
      text: {
        fr: "Énoncé",
      }
    },
    {
      items: {
        fr: [
            "Des billets d'adulte coûtent 8 € et d'enfant 5 €.",
            "10 personnes paient ensemble 68 €. Combien d'adultes ?",
          ],
      }
    },
    {
      text: {
        fr: "Résolution",
      }
    },
    {
      items: {
        fr: [
            "Soit x = nombre d'adultes, y = nombre d'enfants",
            "Équation 1 (total personnes) : x **+** y = 10",
            "Équation 2 (total argent) : 8x **+** 5y = 68",
            "Substitution : x = 10 **−** y → 8(10 **−** y) **+** 5y = 68",
            "→ 80 **−** 8y **+** 5y = 68  →  **−**3y = **−**12  →  y = 4",
            "→ x = 10 **−** 4 = 6",
            "**Réponse : 6 adultes et 4 enfants.**",
          ],
      }
    },
    {
      text: {
        fr: "Exemple : prix d'articles",
      }
    },
    {
      text: {
        fr: "Énoncé",
      }
    },
    {
      items: {
        fr: [
            "2 stylos **+** 3 cahiers = 8,50 €",
            "4 stylos **+** 1 cahier = 9 €",
            "Trouver le prix d'un stylo et d'un cahier.",
          ],
      }
    },
    {
      text: {
        fr: "Mise en système",
      }
    },
    {
      items: {
        fr: [
            "Soit x = prix d'un stylo, y = prix d'un cahier",
            "Système : { 2x **+** 3y = 8,50",
            "           { 4x **+** y = 9",
            "→ Résoudre par élimination ou substitution",
          ],
      }
    },
    {
      text: {
        fr: "Toujours définir clairement x et y avant de poser les équations. Une définition imprécise mène souvent à des erreurs de traduction.",
      }
    },
  ],
  consignes: {
    wordProblems: {
      fr: "Résolvez les problèmes. Écrivez uniquement la réponse numérique.",
      en: "Solve the problems. Write only the numerical answer.",
      ar: "حلّ المسائل. اكتب الإجابة الرقمية فقط.",
      fa: "مسئله‌ها را حل کنید. فقط پاسخ عددی را بنویسید.",
      ti: "ነቶም ጸገማት ፍታሕ። ቁጽራዊ መልሲ ጥራይ ጻሕፍ።",
      uk: "Розв'яжи задачі. Запиши лише числову відповідь.",
      pt: "Resolve os problemas. Escreve apenas a resposta numérica.",
      so: "Xalli su'aalaha. Qor kaliya jawaabta tiro ahaan.",
      tr: "Problemleri çöz. Yalnızca sayısal cevabı yaz.",
      ps: "مسئلې حل کړه. یوازې عددي ځواب ولیکه.",
    },
  },
};
