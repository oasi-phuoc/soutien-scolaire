import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A3_6: SubmoduleTrad = {
  submoduleId: "A3-6",
  title: {
    fr: "PGDC et PPMC",
    en: "GCD and LCM",
    ar: "القاسم المشترك الأكبر والمضاعف المشترك الأصغر",
    fa: "بزرگترین مقسوم‌علیه مشترک و کوچکترین مضرب مشترک",
    ti: "ዝዓቢ ሓባራዊ ካፋሊ ምስ ዝነኣሰ ሓባራዊ ብዙሕ",
    uk: "НСД та НСК",
  },
  blocks: [
    {
      text: {
        fr: "PGDC — Plus Grand Commun Diviseur",
      }
    },
    {
      text: {
        fr: "Définition",
      }
    },
    {
      items: {
        fr: [
          "Le **PGDC** (Plus Grand Commun Diviseur) de deux nombres est le **plus grand entier** qui divise exactement les deux nombres.",
          "Notation : PGDC(a, b)",
        ],
      }
    },
    {
      text: {
        fr: "Méthode — liste des diviseurs",
      }
    },
    {
      items: {
        fr: [
          "1. Lister tous les **diviseurs** de chaque nombre.",
          "2. Repérer les diviseurs **communs** aux deux listes.",
          "3. Prendre le **plus grand** des diviseurs communs.",
        ],
      }
    },
    {
      text: {
        fr: "Exemple : PGDC(12, 18)",
      }
    },
    {
      headers: {
        fr: ["Nombre", "Diviseurs"],
      },
      caption: {
        fr: "Le plus grand diviseur commun est 6.",
      }
    },
    {
      text: {
        fr: "PGDC(12, 18) = 6",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "PPMC — Plus Petit Commun Multiple",
      }
    },
    {
      text: {
        fr: "Définition",
      }
    },
    {
      items: {
        fr: [
          "Le **PPMC** (Plus Petit Commun Multiple) de deux nombres est le **plus petit entier positif** qui est multiple des deux nombres.",
          "Notation : PPMC(a, b)",
        ],
      }
    },
    {
      text: {
        fr: "Méthode — liste des multiples",
      }
    },
    {
      items: {
        fr: [
          "1. Lister les **multiples** de chaque nombre dans l'ordre croissant.",
          "2. Trouver le **premier multiple commun** aux deux listes.",
        ],
      }
    },
    {
      text: {
        fr: "Exemple : PPMC(4, 6)",
      }
    },
    {
      headers: {
        fr: ["Nombre", "Multiples (dans l'ordre)"],
      },
      caption: {
        fr: "Le premier multiple commun est 12.",
      }
    },
    {
      text: {
        fr: "PPMC(4, 6) = 12",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Lien entre PGDC et PPMC",
      }
    },
    {
      text: {
        fr: "Formule",
      }
    },
    {
      text: {
        fr: "",
      },
      items: {
        fr: [
          "PGDC(a, b) × PPMC(a, b) = a × b",
        ],
      }
    },
    {
      label: {
        fr: "Vérification avec 12 et 18 :",
      },
      items: {
        fr: [
          "PGDC(12, 18) = 6  et  PPMC(12, 18) = 36",
          "6 × 36 = 216  =  12 × 18  ✓",
        ],
      }
    },
    {
      text: {
        fr: "Application — calculer le PPMC avec la formule",
      }
    },
    {
      items: {
        fr: [
          "Si PGDC(8, 20) = 4, alors :",
          "PPMC(8, 20) = (8 × 20) ÷ 4 = 160 ÷ 4 = **40**",
        ],
      }
    },
  ],
};
