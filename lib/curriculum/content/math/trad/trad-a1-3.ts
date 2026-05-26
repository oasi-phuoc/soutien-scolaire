import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A1_3: SubmoduleTrad = {
  submoduleId: "A1-3",
  title: {
    fr: "Comparer les nombres",
    en: "Which is greater?",
    ar: "أيهما أكبر؟",
    fa: "کدام بزرگ‌تر است؟",
    ti: "ኣየናይ እዩ ዓቢ?",
    uk: "Яке число більше?",
    pt: "Qual é o maior?",
  },
  blocks: [
    // 0: plain "Comparer des nombres..."
    {
      text: {
        fr: "Comparer des nombres consiste à déterminer lequel est le plus grand, le plus petit ou s'ils sont égaux.",
        en: "Comparing numbers means determining which is greatest, smallest, or if they are equal.",
        ar: "مقارنة الأعداد تعني تحديد أيها أكبر أو أصغر أو متساوية.",
        fa: "مقایسه اعداد یعنی تعیین بزرگ‌ترین، کوچک‌ترین یا مساوی بودن آن‌ها.",
        ti: "ምወዳዳር ቁጽርታት ማለት ኣየናይ ዓቢ፡ ንእሽቶ ወይ ማዕሪ ምዃኑ ምፍላጥ ማለት እዩ።",
        uk: "Порівняти числа — визначити, яке більше, менше або вони рівні.",
        pt: "Comparar números significa determinar qual é maior, menor ou se são iguais.",
      },
    },
    // 1: heading "Les symboles de comparaison"
    {
      text: {
        fr: "Les symboles de comparaison",
        en: "Comparison symbols",
        ar: "رموز المقارنة",
        fa: "علائم مقایسه",
        ti: "ምልክታት ምወዳዳር",
        uk: "Символи порівняння",
        pt: "Símbolos de comparação",
      },
    },
    // 2: plain "La partie de la flèche > qui est ouverte..."
    {
      text: {
        fr: "La partie de la flèche > qui est ouverte est toujours dirigée vers le plus grand nombre.",
        en: "The open side of > always points to the greater number.",
        ar: "الجانب المفتوح من > يتجه دائمًا نحو العدد الأكبر.",
        fa: "قسمت باز > همیشه به سمت عدد بزرگ‌تر است.",
        ti: "ክፉት ሸነኽ ናይ > ኩሉ ጊዜ ናብ ዓቢ ቁጽሪ ይምልከት።",
        uk: "Відкритий бік > завжди спрямований до більшого числа.",
        pt: "O lado aberto do símbolo > aponta sempre para o número maior.",
      },
    },
    // 3: table headers ["Comparaison", "Symbole", "Exemple"]
    {
      headers: {
        fr: ["Comparaison", "Symbole", "Exemple"],
        en: ["Comparison", "Symbol", "Example"],
        ar: ["المقارنة", "الرمز", "مثال"],
        fa: ["مقایسه", "نماد", "مثال"],
        ti: ["ምወዳዳር", "ምልክት", "ኣብነት"],
        uk: ["Порівняння", "Символ", "Приклад"],
        pt: ["Comparação", "Símbolo", "Exemplo"],
      },
    },
    // 4: plain "" (spacer) — no translation
    {},
    // 5: highlight "Règle de comparaison"
    {
      text: {
        fr: "Règle de comparaison",
        en: "Comparison rule",
        ar: "قاعدة المقارنة",
        fa: "قانون مقایسه",
        ti: "ሕጊ ምወዳዳር",
        uk: "Правило порівняння",
        pt: "Regra de comparação",
      },
    },
    // 6: plain "Nombres avec un nombre différent de chiffres"
    {
      text: {
        fr: "Nombres avec un nombre différent de chiffres",
        en: "Numbers with a different number of digits",
        ar: "أعداد بعدد مختلف من الأرقام",
        fa: "اعداد با تعداد ارقام متفاوت",
        ti: "ቁጽርታት ዝተፈላለየ ኣሃዝ ዘለወን",
        uk: "Числа з різною кількістю цифр",
        pt: "Números com diferentes quantidades de algarismos",
      },
    },
    // 7: section items ["Le plus long est le plus grand."]
    {
      items: {
        fr: ["Le plus long est le plus grand."],
        en: ["The longer number is the greater one."],
        ar: ["الأطول هو الأكبر."],
        fa: ["عدد طولانی‌تر بزرگ‌تر است."],
        ti: ["እቲ ነዊሕ ዝኾነ ዓቢ እዩ።"],
        uk: ["Довше число є більшим."],
        pt: ["O número mais longo é o maior."],
      },
    },
    // 8: plain "Même nombre de chiffres"
    {
      text: {
        fr: "Même nombre de chiffres",
        en: "Same number of digits",
        ar: "نفس عدد الأرقام",
        fa: "تعداد ارقام یکسان",
        ti: "ማዕረ ኣሃዝ ዘለወን",
        uk: "Однакова кількість цифр",
        pt: "Mesmo número de algarismos",
      },
    },
    // 9: section items ["Compare chiffre par chiffre...", "Dès qu'un chiffre est différent..."]
    {
      items: {
        fr: [
          "Compare chiffre par chiffre depuis la gauche.",
          "Dès qu'un chiffre est différent, on regarde le plus grand chiffre.",
        ],
        en: [
          "Compare digit by digit from the left.",
          "As soon as a digit differs, look at which is greater.",
        ],
        ar: [
          "قارن رقمًا بعد رقم من اليسار.",
          "حين يختلف رقم، انظر أيهما أكبر.",
        ],
        fa: [
          "از سمت چپ، رقم به رقم مقایسه کن.",
          "به محض اینکه رقمی متفاوت شد، بزرگ‌تر را نگاه کن.",
        ],
        ti: [
          "ካብ ጸጋም ኣሃዝ ብኣሃዝ ኣወዳድር።",
          "ኣሃዝ ምስ ዝፈላለ፡ ዓቢ ኣሃዝ ተዓዘብ።",
        ],
        uk: [
          "Порівнюй цифру за цифрою зліва.",
          "Щойно цифра відрізняється, дивись, яка більша.",
        ],
        pt: [
          "Compara algarismo a algarismo da esquerda para a direita.",
          "Assim que um algarismo é diferente, vê qual é o maior.",
        ],
      },
    },
    // 10: highlight "Exemple"
    {
      text: {
        fr: "Exemple",
        en: "Example",
        ar: "مثال",
        fa: "مثال",
        ti: "ኣብነት",
        uk: "Приклад",
        pt: "Exemplo",
      },
    },
    // 11: plain "On a deux chiffres 3 456 et 3 421"
    {
      text: {
        fr: "On a deux chiffres 3 456 et 3 421",
        en: "We have two numbers: 3 456 and 3 421",
        ar: "لدينا عددان: 3 456 و 3 421",
        fa: "دو عدد داریم: 3 456 و 3 421",
        ti: "ክልተ ቁጽርታት ኣሎና: 3 456 ን 3 421 ን",
        uk: "Маємо два числа: 3 456 та 3 421",
        pt: "Temos dois números: 3 456 e 3 421",
      },
    },
    // 12: section items about comparing 3456 and 3421
    {
      items: {
        fr: [
          "Même nombre de chiffres",
          "Les milliers sont égaux",
          "Les entaines sont égales",
          "Les dizaines : 5 > 2",
          "Donc 3 456 > 3 421",
        ],
        en: [
          "Same number of digits",
          "The thousands are equal",
          "The hundreds are equal",
          "The tens: 5 > 2",
          "Therefore 3 456 > 3 421",
        ],
        ar: [
          "نفس عدد الأرقام",
          "الآلاف متساوية",
          "المئات متساوية",
          "العشرات: 5 > 2",
          "إذن 3 456 > 3 421",
        ],
        fa: [
          "تعداد ارقام یکسان",
          "هزارگان برابرند",
          "صدگان برابرند",
          "دهگان: 5 > 2",
          "پس 3 456 > 3 421",
        ],
        ti: [
          "ማዕረ ኣሃዝ",
          "ሽሕታት ማዕሪ እዩ",
          "ሚእቲታት ማዕሪ እዩ",
          "ዓሰርተ: 5 > 2",
          "ስለዚ 3 456 > 3 421",
        ],
        uk: [
          "Однакова кількість цифр",
          "Тисячі рівні",
          "Сотні рівні",
          "Десятки: 5 > 2",
          "Отже 3 456 > 3 421",
        ],
        pt: [
          "Mesmo número de algarismos",
          "Os milhares são iguais",
          "As centenas são iguais",
          "As dezenas: 5 > 2",
          "Portanto 3 456 > 3 421",
        ],
      },
    },
    // 13: plain "" (spacer) — no translation
    {},
    // 14: heading "Valeur entre deux bornes"
    {
      text: {
        fr: "Valeur entre deux bornes",
        en: "Value between two bounds",
        ar: "قيمة بين حدّين",
        fa: "مقدار بین دو کران",
        ti: "ዋጋ ኣብ መንካይ ክልተ ዶባት",
        uk: "Значення між двома межами",
        pt: "Valor entre dois limites",
      },
    },
    // 15: highlight "Principe"
    {
      text: {
        fr: "Principe",
        en: "Principle",
        ar: "المبدأ",
        fa: "اصل",
        ti: "መትከል",
        uk: "Принцип",
        pt: "Princípio",
      },
    },
    // 16: plain "Quand une valeur est entre deux nombres..."
    {
      text: {
        fr: "Quand une valeur est entre deux nombres, cela veut dire :",
        en: "When a value is between two numbers, it means:",
        ar: "حين تكون قيمة بين عددين، فهذا يعني:",
        fa: "وقتی مقداری بین دو عدد است، یعنی:",
        ti: "ዋጋ ኣብ መንካይ ክልተ ቁጽርታት ምስ ዝህሉ፡ ትርጉሙ:",
        uk: "Коли значення знаходиться між двома числами, це означає:",
        pt: "Quando um valor está entre dois números, isso significa:",
      },
    },
    // 17: section items about bounds
    {
      items: {
        fr: [
          "La valeur est plus grande que le premier nombre",
          "La valeur est plus petite que le deuxième nombre.",
        ],
        en: [
          "The value is greater than the first number",
          "The value is smaller than the second number.",
        ],
        ar: [
          "القيمة أكبر من العدد الأول",
          "القيمة أصغر من العدد الثاني.",
        ],
        fa: [
          "مقدار از عدد اول بزرگ‌تر است",
          "مقدار از عدد دوم کوچک‌تر است.",
        ],
        ti: [
          "ዋጋ ካብ ቀዳማይ ቁጽሪ ዓቢ እዩ",
          "ዋጋ ካብ ካልኣይ ቁጽሪ ንእሽቶ እዩ።",
        ],
        uk: [
          "Значення більше за перше число",
          "Значення менше за друге число.",
        ],
        pt: [
          "O valor é maior do que o primeiro número",
          "O valor é menor do que o segundo número.",
        ],
      },
    },
    // 18: highlight "Exemple"
    {
      text: {
        fr: "Exemple",
        en: "Example",
        ar: "مثال",
        fa: "مثال",
        ti: "ኣብነት",
        uk: "Приклад",
        pt: "Exemplo",
      },
    },
    // 19: plain "Quels nombres sont entre 3 et 8 ?"
    {
      text: {
        fr: "Quels nombres sont entre 3 et 8 ?",
        en: "Which numbers are between 3 and 8?",
        ar: "ما الأعداد التي تقع بين 3 و 8؟",
        fa: "کدام اعداد بین 3 و 8 قرار دارند؟",
        ti: "ኣየኖት ቁጽርታት ኣብ መንካይ 3 ን 8 ን ይርከቡ?",
        uk: "Які числа знаходяться між 3 і 8?",
        pt: "Quais números estão entre 3 e 8?",
      },
    },
    // 20: section items about finding numbers between 3 and 8
    {
      items: {
        fr: [
          "On cherche les nombres plus grands que 3 et plus petits que 8. (3 < ? < 8)",
          "Les nombres possibles sont : 4, 5, 6, 7",
        ],
        en: [
          "We look for numbers greater than 3 and smaller than 8. (3 < ? < 8)",
          "The possible numbers are: 4, 5, 6, 7",
        ],
        ar: [
          "نبحث عن أعداد أكبر من 3 وأصغر من 8. (3 < ? < 8)",
          "الأعداد الممكنة هي: 4، 5، 6، 7",
        ],
        fa: [
          "اعداد بزرگ‌تر از 3 و کوچک‌تر از 8 را جستجو می‌کنیم. (3 < ? < 8)",
          "اعداد ممکن عبارتند از: 4، 5، 6، 7",
        ],
        ti: [
          "ካብ 3 ዓቢ ካብ 8 ንእሽቶ ዝኾኑ ቁጽርታት ንደሊ። (3 < ? < 8)",
          "ክኾኑ ዝኽእሉ ቁጽርታት: 4، 5، 6، 7",
        ],
        uk: [
          "Шукаємо числа, більші за 3 і менші за 8. (3 < ? < 8)",
          "Можливі числа: 4, 5, 6, 7",
        ],
        pt: [
          "Procuramos números maiores do que 3 e menores do que 8. (3 < ? < 8)",
          "Os números possíveis são: 4, 5, 6, 7",
        ],
      },
    },
  ],
  consignes: {
    encadrement_dizaine: {
      fr: "Encadrez chaque nombre à la dizaine près.",
      en: "Round each number to the nearest ten.",
      ar: "قرّب كل عدد إلى أقرب عشرة.",
      fa: "هر عدد را به ده‌تای نزدیک‌تر گرد کنید.",
      ti: "ነፍሲ ወከፍ ቁጽሪ ናብ ቀረባ ዓሰርተ ኣቃርቦ።",
      uk: "Округліть кожне число до найближчого десятка.",
      pt: "Enquadre cada número à dezena mais próxima.",
    },
    encadrement_centaine: {
      fr: "Encadrez chaque nombre à la centaine près.",
      en: "Round each number to the nearest hundred.",
      ar: "قرّب كل عدد إلى أقرب مئة.",
      fa: "هر عدد را به صد‌تای نزدیک‌تر گرد کنید.",
      ti: "ነፍሲ ወከፍ ቁጽሪ ናብ ቀረባ ሚእቲ ኣቃርቦ።",
      uk: "Округліть кожне число до найближчої сотні.",
      pt: "Enquadre cada número à centena mais próxima.",
    },
    number_select_gt: {
      fr: "Sélectionnez les nombres plus grands que {n}.",
      en: "Select the numbers greater than {n}.",
      ar: "اختر الأعداد الأكبر من {n}.",
      fa: "اعداد بزرگ‌تر از {n} را انتخاب کنید.",
      ti: "ካ {n} ዓቢ ዝኾኑ ቁጽርታት ምረጽ።",
      uk: "Вибери числа, більші за {n}.",
      pt: "Seleciona os números maiores do que {n}.",
    },
    number_select_lt: {
      fr: "Sélectionnez les nombres plus petits que {n}.",
      en: "Select the numbers less than {n}.",
      ar: "اختر الأعداد الأصغر من {n}.",
      fa: "اعداد کوچک‌تر از {n} را انتخاب کنید.",
      ti: "ካ {n} ንእሽቶ ዝኾኑ ቁጽርታት ምረጽ።",
      uk: "Вибери числа, менші за {n}.",
      pt: "Seleciona os números menores do que {n}.",
    },
    number_select_between: {
      fr: "Sélectionnez les nombres entre {n} et {n2}.",
      en: "Select the numbers between {n} and {n2}.",
      ar: "اختر الأعداد بين {n} و{n2}.",
      fa: "اعداد بین {n} و {n2} را انتخاب کنید.",
      ti: "ካ {n} ክሳዕ {n2} ዝኾኑ ቁጽርታት ምረጽ።",
      uk: "Вибери числа між {n} і {n2}.",
      pt: "Seleciona os números entre {n} e {n2}.",
    },
  },
};
