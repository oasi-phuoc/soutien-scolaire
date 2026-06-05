import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A3_6: SubmoduleTrad = {
  submoduleId: "A3-6",
  title: {
    fr: "PGCD et PPCM",
    en: "GCD and LCM",
    ar: "القاسم المشترك الأكبر والمضاعف المشترك الأصغر",
    fa: "بزرگترین مقسوم‌علیه مشترک و کوچکترین مضرب مشترک",
    ti: "ዝዓቢ ሓባራዊ ካፋሊ ምስ ዝነኣሰ ሓባራዊ ብዙሕ",
    uk: "НСД та НСК",
  },
  blocks: [
    {
      text: {
        fr: "PGCD — Plus Grand Commun Diviseur",
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
          "Le **PGCD** (Plus Grand Commun Diviseur) de deux nombres est le **plus grand entier** qui divise exactement les deux nombres.",
          "Notation : PGCD(a, b)",
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
        fr: "Exemple : PGCD(12, 18)",
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
        fr: "PGCD(12, 18) = 6",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "PPCM — Plus Petit Commun Multiple",
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
          "Le **PPCM** (Plus Petit Commun Multiple) de deux nombres est le **plus petit entier positif** qui est multiple des deux nombres.",
          "Notation : PPCM(a, b)",
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
        fr: "Exemple : PPCM(4, 6)",
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
        fr: "PPCM(4, 6) = 12",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Lien entre PGCD et PPCM",
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
          "PGCD(a, b) × PPCM(a, b) = a × b",
        ],
      }
    },
    {
      label: {
        fr: "Vérification avec 12 et 18 :",
      },
      items: {
        fr: [
          "PGCD(12, 18) = 6  et  PPCM(12, 18) = 36",
          "6 × 36 = 216  =  12 × 18  ✓",
        ],
      }
    },
    {
      text: {
        fr: "Application — calculer le PPCM avec la formule",
      }
    },
    {
      items: {
        fr: [
          "Si PGCD(8, 20) = 4, alors :",
          "PPCM(8, 20) = (8 × 20) ÷ 4 = 160 ÷ 4 = **40**",
        ],
      }
    },
  ],
};
