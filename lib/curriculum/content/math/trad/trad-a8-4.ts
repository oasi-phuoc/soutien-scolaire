import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A8_4: SubmoduleTrad = {
  submoduleId: "A8-4",
  title: {
    fr: "Racine carrée",
    en: "Square root (perfect squares)",
    ar: "الجذر التربيعي (مربعات تامة)",
    fa: "جذر مربع (مربعات کامل)",
    ti: "ስርወ-ካሬ (ፍጹም ካሬታት)",
    uk: "Квадратний корінь (точні квадрати)",
  },
  blocks: [
    {
      text: {
        fr: "Qu'est-ce que la racine carrée ?",
      }
    },
    {
      text: {
        fr: "La racine carrée est l'opération inverse de la puissance 2. √a est le nombre positif tel que (√a)² = a.",
      }
    },
    {
      text: {
        fr: "Question clé",
      },
      items: {
        fr: [
            "Quel nombre, multiplié par lui-même, donne ce résultat ?",
            "√9 = 3  car  3 × 3 = 9",
            "√25 = 5  car  5 × 5 = 25",
          ],
      }
    },
    {
      text: {
        fr: "Carrés parfaits à connaître",
      }
    },
    {
      headers: {
        fr: ["n", "n²", "√(n²)"],
      }
    },
    {
      text: {
        fr: "Propriété de la racine carrée",
      }
    },
    {
      text: {
        fr: "Propriété",
      },
      items: {
        fr: [
            "√(a × b) = √a × √b",
          ],
      }
    },
    {
      text: {
        fr: "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6",
      }
    },
  ],
};
