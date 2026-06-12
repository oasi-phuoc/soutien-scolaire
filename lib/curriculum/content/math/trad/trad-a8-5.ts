import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A8_5: SubmoduleTrad = {
  submoduleId: "A8-5",
  title: {
    fr: "Priorité des opérations",
    en: "Order of operations",
    ar: "ترتيب العمليات",
    fa: "ترتیب عملیات",
    pt: "Prioridade das operações",
    so: "Mudnaanta xisaab-fallada",
    ti: "ቅደም ተኸተል ስሌታት",
    tr: "İşlem önceliği",
    ps: "د عملیاتو لومړیتوب",
    uk: "Порядок дій",
  },
  blocks: [
      {
          "text": {
              "fr": "Qu'est-ce que la priorité des opérations ?",
              "en": "What is the order of operations?"
          }
      },
      {
          "text": {
              "fr": "Lorsqu'un calcul contient plusieurs opérations, il faut les effectuer dans un ordre précis.",
              "en": "When a calculation contains several operations, you must do them in a precise order."
          }
      },
      {
          "text": {
              "fr": "Ordre des priorités",
              "en": "Order of priority"
          }
      },
      {
          "items": {
              "fr": [
                  "**1.** Parenthèses ( ), crochets [ ] et accolades { } - de l'intérieur vers l'extérieur",
                  "**2.** Puissances et racines carrées",
                  "**3.** Multiplications x et divisions / (de gauche à droite)",
                  "**4.** Additions + et soustractions - (de gauche à droite)"
              ],
              "en": [
                  "**1.** Parentheses ( ), brackets [ ], and braces { } - from inside to outside",
                  "**2.** Powers and square roots",
                  "**3.** Multiplications x and divisions / (from left to right)",
                  "**4.** Additions + and subtractions - (from left to right)"
              ]
          }
      },
      {
          "text": {
              "fr": "",
              "en": ""
          }
      },
      {
          "text": {
              "fr": "Exemples",
              "en": "Examples"
          }
      },
      {
          "text": {
              "fr": "3 + 4 x 2",
              "en": "3 + 4 x 2"
          }
      },
      {
          "items": {
              "fr": [
                  "On effectue d'abord la multiplication : 4 x 2 = 8",
                  "Puis l'addition : 3 + 8 = **11**"
              ],
              "en": [
                  "First do the multiplication: 4 x 2 = 8",
                  "Then the addition: 3 + 8 = **11**"
              ]
          }
      },
      {
          "text": {
              "fr": "",
              "en": ""
          }
      },
      {
          "text": {
              "fr": "(3 + 4) x 2",
              "en": "(3 + 4) x 2"
          }
      },
      {
          "items": {
              "fr": [
                  "On effectue d'abord les parenthèses : 3 + 4 = 7",
                  "Puis la multiplication : 7 x 2 = **14**"
              ],
              "en": [
                  "First do the parentheses: 3 + 4 = 7",
                  "Then the multiplication: 7 x 2 = **14**"
              ]
          }
      },
      {
          "text": {
              "fr": "",
              "en": ""
          }
      },
      {
          "text": {
              "fr": "2^2 + 3 x 4 - 1",
              "en": "2^2 + 3 x 4 - 1"
          }
      },
      {
          "items": {
              "fr": [
                  "Puissance : 2^2 = 4",
                  "Multiplication : 3 x 4 = 12",
                  "De gauche à droite : 4 + 12 - 1 = **15**"
              ],
              "en": [
                  "Power: 2^2 = 4",
                  "Multiplication: 3 x 4 = 12",
                  "From left to right: 4 + 12 - 1 = **15**"
              ]
          }
      },
      {
          "text": {
              "fr": "",
              "en": ""
          }
      },
      {
          "text": {
              "fr": "{[2 + (3 x 4)] - 5} x 2",
              "en": "{[2 + (3 x 4)] - 5} x 2"
          }
      },
      {
          "items": {
              "fr": [
                  "Parenthèses ( ) : 3 x 4 = 12 -> {[2 + 12] - 5} x 2",
                  "Crochets [ ] : 2 + 12 = 14 -> {14 - 5} x 2",
                  "Accolades { } : 14 - 5 = 9 -> 9 x 2",
                  "Multiplication : 9 x 2 = **18**"
              ],
              "en": [
                  "Parentheses ( ): 3 x 4 = 12 -> {[2 + 12] - 5} x 2",
                  "Brackets [ ]: 2 + 12 = 14 -> {14 - 5} x 2",
                  "Braces { }: 14 - 5 = 9 -> 9 x 2",
                  "Multiplication: 9 x 2 = **18**"
              ]
          }
      }
  ],

};
